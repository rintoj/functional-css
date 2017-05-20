import * as classNameParser from './class-name-parser'
import * as fileParser from './file-parser'

const { fetchFileNames, readFiles } = fileParser
const { parseClassName } = classNameParser

const extensions = ['.ts', '.tsx']

function resolveDirectory() {
  return process.argv[2] || process.cwd()
}

Promise.resolve()
  .then(() => resolveDirectory())
  .then(directory => fetchFileNames(directory, extensions))
  .then(files => readFiles(files))
  .then(files => files.map(file => parseClassName(file.content)))

export = { fileParser, classNameParser }