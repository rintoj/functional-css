
export function parseClassName(code: string) {
  return (code || '').split('\n')
    .map(line => /class(Name)?=["{'`]([^{}"'`]+)['}"`]/g.exec(line))
    .filter(result => result != undefined)
    .map(result => result[2])
    .reduce((a, i) => a.concat(i.split(' ')), [])
}
