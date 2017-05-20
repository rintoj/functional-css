function uniq(classNames) {
  return Object.keys((classNames || []).reduce((a, i) => {
    a[i] = true
    return a
  }, {}))
}

export function extractExpression(source: string, begin: string, end?: string, index: number = 0) {

  const expressions = []
  end = end || begin

  for (let si = index; si < source.length; si++) {
    const stack = []
    let beginFound = false
    let expression = ''
    let startIndex, endIndex, i

    for (i = si; i < source.length; i++) {

      const startTag = source.substr(i, begin.length)
      const endTag = source.substr(i, end.length)

      if (beginFound && stack.length === 0) {
        expressions.push({ expression, startIndex, endIndex, source })
        break
      }
      if (startTag !== begin && !beginFound) continue

      if (stack.slice(-1)[0] === begin && endTag === end) {
        i += (endTag.length - 1)
        stack.pop()
        endIndex = i
      } else if (startTag === begin) {
        startIndex = i
        stack.push(startTag)
        i += (startTag.length - 1)
        beginFound = true
      } else {
        expression += source[i]
      }
    }

    si = i
    if (stack.length !== 0) {
      throw new Error(`Invalid expression: '${expression}'. No matching expression found for '${stack.slice(-1)[0]}'`)
    }
  }

  return expressions
}

export function extractClassStrings(code: string, beginFrom: number = 0): string[] {
  let index = code.indexOf('className', beginFrom)
  index = index < 0 ? code.indexOf('class', beginFrom) : index
  if (index < 0) return ['']

  let expressions = extractExpression(code, '"', '"', index)
    .map(i => i.expression)
  if (expressions.length === 0) {
    expressions = extractExpression(code, '\'', '\'', index)
      .map(i => i.expression)
  }
  if (expressions.length === 0) {
    expressions = extractExpression(code, '`', '`', index)
      .map(i => i.expression)
  }
  if (expressions.length === 0) {
    expressions = extractExpression(code, '{', '}', index)
      .map(i => i.expression.replace(/^\s*['"`]|['"`]\s*/g))
  }
  return expressions
}

export function parseClassNames(code: string) {
  return uniq((code || '').split('\n')
    .map(line => extractClassStrings(line))
    .reduce((a, i) => a.concat(i), [])
    .reduce((a, i) => a.concat(i.split(' ')), [])
    .filter(className => className.trim() !== ''))
}
