import * as ts from 'typescript'

const parseNode = (node, depth: number = 0) => {
  if (node == undefined) return
  // console.log(new Array(depth + 1).join('--'), ts.SyntaxKind[node.kind], node.pos, node.end)
  switch (node.kind) {
    case ts.SyntaxKind.ExpressionStatement:
      return parseNode(node.expression, depth + 1)
    case ts.SyntaxKind.BinaryExpression:
      if (node.operatorToken.kind === ts.SyntaxKind.EqualsToken) {
        return createObject(parseNode(node.left, depth + 1), parseNode(node.right, depth + 1))
      }
      if (node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
        return [parseNode(node.left, depth + 1)].concat(parseNode(node.right, depth + 1))
      }
      break
    case ts.SyntaxKind.ObjectLiteralExpression:
      return node.properties.reduce((a, i) => Object.assign(a, parseNode(i, depth + 1)), {})
    case ts.SyntaxKind.PropertyAssignment:
    case ts.SyntaxKind.VariableDeclaration:
      return createObject(parseNode(node.name, depth + 1), parseNode(node.initializer, depth + 1))
    case ts.SyntaxKind.TrueKeyword:
      return true
    case ts.SyntaxKind.FalseKeyword:
      return false
    case ts.SyntaxKind.FirstLiteralToken:
    case ts.SyntaxKind.LastLiteralToken:
    case ts.SyntaxKind.FirstTemplateToken:
    case ts.SyntaxKind.LastTemplateToken:
    case ts.SyntaxKind.StringLiteral:
    case ts.SyntaxKind.TemplateHead:
    case ts.SyntaxKind.TemplateMiddle:
    case ts.SyntaxKind.TemplateTail:
    case ts.SyntaxKind.Identifier:
      return ((node as any) || {}).text
    case ts.SyntaxKind.ConditionalExpression:
      return [
        parseNode((node as any).whenTrue, depth + 1),
        parseNode((node as any).whenFalse, depth + 1)
      ]
    case ts.SyntaxKind.PropertyAccessExpression:
      return [{ type: 'Access', source: parseNode(node.expression, depth + 1), property: parseNode(node.name, depth + 1) }]
    case ts.SyntaxKind.TemplateExpression:
      return [parseNode(node.head, depth + 1)].concat(node.templateSpans.map(span => parseNode(span, depth + 1)))
    case ts.SyntaxKind.TemplateSpan:
      return [parseNode(node.literal, depth + 1)].concat(parseNode(node.expression, depth + 1))
    default:
      break
  }

  if ([
    // ts.SyntaxKind.Block
  ].indexOf(node.kind) >= 0) {
    console.log(node)
  }

  let variables
  ts.forEachChild(node, child => {
    let result = parseNode(child, depth + 1)
    variables = addPossibleValue(variables, result)
  })
  return variables
}

export function createObject(name, value) {
  const obj = {}
  obj[name] = value
  return obj
}

export function addPossibleValue(variables, value) {
  if (value == undefined || value instanceof Array || !(typeof value === 'object')) return variables
  const target = variables || {}
  Object.keys(value).forEach(name => {
    let flatMap = value[name] instanceof Array ?
      value[name].reduce((a, i) => a.concat(i), []).filter(i => i != undefined) : value[name]
    target[name] = (target[name] || []).concat(flatMap)
  })
  return target
}

export function printType(node) {
  console.log(ts.SyntaxKind[node.kind])
}

function resolveValues(object: any, context?: any) {
  context = context || object
  if (object == undefined) {
    return
  } else if (object.type === 'Access') {
    const source = typeof object.source === 'string' ? context[object.source || object.property] : resolveValues(object.source, context)
    if (source == undefined) throw new Error(`Static analysis could not find '${object.source || object.property}' with in the context`)
    if (object.source === '') return source
    return source
      .filter(i => i != undefined)
      .reduce((a, b) => a || b[object.property], undefined)
  } else if (object instanceof Array) {
    return object.reduce((a, item) => a.concat(resolveValues(item, context)), [])
  } else if (typeof object !== 'object') {
    return object
  }

  return Object.keys(object || {}).reduce((a, b) => {
    return Object.assign(a, createObject(b, resolveValues(object[b], context)))
  }, object)
}

export function parseForVariables(source: string) {
  let rootNode = ts.createSourceFile('t.ts', source, ts.ScriptTarget.ES2015)
  let variables = parseNode(rootNode)
  return resolveValues(variables)
}