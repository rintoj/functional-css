import * as fs from 'fs-extra'
import * as klaw from 'klaw'
import * as path from 'path'
import * as resolvable from 'resolvable'

const readFile = resolvable(fs.readFile)

function walk(directory: string) {
  return new Promise((resolve, reject) => {
    const files = []
    klaw(directory)
      .on('data', file => files.push(file.path))
      .on('end', () => resolve(files))
  })
}

function filter(files, extensions) {
  return (files || []).filter(file => {
    const extension = path.extname(file)
    return extensions.indexOf(extension) >= 0
  })
}

export function fetchFileNames(directory: string, extensions: string[]): Promise<string[]> {
  return Promise.resolve()
    .then(() => walk(directory))
    .then(files => filter(files, extensions))
}

export function readFiles(files: string[]) {
  return Promise.all((files || []).map(file => {
    return readFile(file, 'utf8').then(content => ({ file, content }))
  }))
}
