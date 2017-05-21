import * as chai from 'chai'
import * as fs from 'fs-extra'
import * as resolvable from 'resolvable'

import { parseForVariables } from './js-parser'

const readFile = resolvable(fs.readFile)

const { expect } = chai

describe('parseForVariables', () => {
  it('should return all boolean values and its values', () => {
    const result: any = parseForVariables(`
       const val1 = true
       let val2 = false
       var val3 = true
    `)

    expect(result).be.a('object')
    expect(result).have.property('val1')
    expect(result.val1).be.a('array')
    expect(result.val1).be.length(1)
    expect(result.val1[0]).be.equal(true)

    expect(result).have.property('val2')
    expect(result.val2).be.a('array')
    expect(result.val2).be.length(1)
    expect(result.val2[0]).be.equal(false)

    expect(result).have.property('val3')
    expect(result.val3).be.a('array')
    expect(result.val3).be.length(1)
    expect(result.val3[0]).be.equal(true)
  })

  it('should return all numeric variables and its values', () => {
    const result: any = parseForVariables(`
       const val1 = 0
       let val2 = 10
       var val3 = 24
    `)
    expect(result).be.a('object')
    expect(result).have.property('val1')
    expect(result.val1).be.a('array')
    expect(result.val1).be.length(1)
    expect(result.val1[0]).be.equal('0')

    expect(result).have.property('val2')
    expect(result.val2).be.a('array')
    expect(result.val2).be.length(1)
    expect(result.val2[0]).be.equal('10')

    expect(result).have.property('val3')
    expect(result.val3).be.a('array')
    expect(result.val3).be.length(1)
    expect(result.val3[0]).be.equal('24')
  })

  it('should return all string variables and its values', () => {
    const result: any = parseForVariables(`
       const val1 = 'flx'
       let val2 = 'flx1 flxc'
       var val3 = 'tc'

       val2 = 'tc'
    `)
    expect(result).be.a('object')
    expect(result).have.property('val1')
    expect(result.val1).be.a('array')
    expect(result.val1).be.length(1)
    expect(result.val1[0]).be.equal('flx')

    expect(result).have.property('val2')
    expect(result.val2).be.a('array')
    expect(result.val2).be.length(2)
    expect(result.val2[0]).be.equal('flx1 flxc')
    expect(result.val2[1]).be.equal('tc')

    expect(result).have.property('val3')
    expect(result.val3).be.a('array')
    expect(result.val3).be.length(1)
    expect(result.val3[0]).be.equal('tc')
  })

  it('should return all conditional variables and its values', () => {
    const result: any = parseForVariables(`
       const val1 = true ? 'error' : false ? 'success' : false ? 'success' : 'warn'
    `)
    expect(result).be.a('object')
    expect(result).have.property('val1')
    expect(result.val1).be.a('array')
    expect(result.val1).be.length(4)
    expect(result.val1[0]).be.equal('error')
    expect(result.val1[1]).be.equal('success')
    expect(result.val1[2]).be.equal('success')
    expect(result.val1[3]).be.equal('warn')
  })

  it('should parse templates and object access', (done) => {
    const result: any = parseForVariables(`
      export class Test extends React.Component<any, any> {
      render() {
        const theme = { id: 'test', name: { t: 'test1' } }
        const className = \`w20 h12 primary- s2 flx flxr \$\{theme.id \} bo1 br--solid \$\{theme.name.t \} secondary- s1 - b shadow- 1--hover\` +
        ' tc'
        return <div className={className}>
        </div >
      }
    }`)
    expect(result).be.a('object')
    expect(result).have.property('theme')
    expect(result.theme).be.a('array')
    expect(result.theme).be.length(1)
    expect(result.theme[0]).be.a('object')
    expect(result.theme[0]).have.property('id')
    expect(result.theme[0].id).be.equal('test')

    expect(result.theme[0]).have.property('name')
    expect(result.theme[0].name).be.a('object')
    expect(result.theme[0].name).have.property('t')
    expect(result.theme[0].name.t).be.equal('test1')

    expect(result).have.property('className')
    expect(result.className).be.a('array')
    expect(result.className).be.length(6)
    expect(result.className[0]).be.equal('w20 h12 primary- s2 flx flxr ')
    expect(result.className[1]).be.equal(' bo1 br--solid ')
    expect(result.className[2]).be.equal('test')
    expect(result.className[3]).be.equal(' secondary- s1 - b shadow- 1--hover')
    expect(result.className[4]).be.equal('test1')
    expect(result.className[5]).be.equal(' tc')

    done()
  })

  it('should return all conditional variables and its values ', (done) => {
    const file = '/Users/839655roje/data/projects/app-designer/designer/src/app/screen/create-project-screen/create-project-screen.tsx'
    readFile(file, 'utf8').then(data => {
      const result: any = parseForVariables(data)
      console.log(result)
      done()
    })
  })

})