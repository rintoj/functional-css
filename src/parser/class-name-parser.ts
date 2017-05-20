function uniq(classNames) {
  return Object.keys((classNames || []).reduce((a, i) => {
    a[i] = true
    return a
  }, {}))
}

export function extractExpressions(source: string, begin: RegExp, end?: RegExp, index: number = 0) {

  let i = 0
  const stack = []
  const expressions = []

  while (i < source.length) {
    const src = source.substr(i)

    const startResult = begin.exec(src)
    const endResult = end && end.exec(src)
    if (startResult != undefined && (endResult == undefined || endResult.index > startResult.index)) {
      if (end == undefined && stack.length > 0) {
        expressions.push(source.substr(i, startResult.index))
        stack.pop()
      } else {
        stack.push(i + startResult.index + startResult[0].length)
      }
      i += startResult.index + startResult[0].length
      continue
    } else if (end == undefined) {
      return expressions
    }

    if (endResult != undefined && stack.length > 0) {
      expressions.push(source.substr(stack.slice(-1)[0], i + endResult.index - stack.slice(-1)[0]))
      stack.pop()
      i += endResult.index + endResult[0].length
      continue
    } else if (startResult == undefined) {
      return expressions
    }

    i += src.length
  }

  return expressions
}

export function extractClassStrings(code: string, beginFrom: number = 0): string[] {
  let expressions = extractExpressions(code, /class(Name)?\s*=\s*"/, /"/)
  if (expressions.length === 0) expressions = extractExpressions(code, /class(Name)?\s*=\s*'/, /'/)
  if (expressions.length === 0) expressions = extractExpressions(code, /class(Name)?\s*=\s*`/, /`/)
  if (expressions.length === 0) expressions = extractExpressions(code, /class(Name)?\s*=\s*{\s*"/, /"\s*}\s*/)
  if (expressions.length === 0) expressions = extractExpressions(code, /class(Name)?\s*=\s*{\s*'/, /'\s*}\s*/)
  if (expressions.length === 0) expressions = extractExpressions(code, /class(Name)?\s*=\s*{\s*`/, /`\s*}\s*/)
  return expressions
}

export function parseClassNames(code: string) {
  return uniq((code || '').split('\n')
    .map(line => extractClassStrings(line))
    .reduce((a, i) => a.concat(i), [])
    .reduce((a, i) => a.concat(i.split(' ')), [])
    .filter(className => className.trim() !== ''))
}
