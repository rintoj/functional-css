import * as classNameParser from './class-name-parser'
import * as fileParser from './file-parser'
import * as jsParser from './js-parser'

const { fetchFileNames, readFiles } = fileParser
const { parseClassNames } = classNameParser

const extensions = ['.js', '.jsx', '.html', '.ts', '.tsx']

function resolveDirectory() {
  return process.argv[2] || process.cwd()
}

Promise.resolve()
  .then(() => resolveDirectory())
  .then(directory => fetchFileNames(directory, extensions))
  .then(files => readFiles(files))
  .then(files => files.map(file => parseClassNames(file.content)))

export = { fileParser, classNameParser, jsParser }