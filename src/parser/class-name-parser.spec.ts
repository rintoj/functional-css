import * as chai from 'chai'

import { extractClassStrings, extractExpressions, parseClassNames } from './class-name-parser'

const { expect } = chai

describe('parseClassNames', () => {
  it('should be a function', () => {
    expect(typeof parseClassNames).be.equals('function')
  })

  it('should extract class names if className is given', () => {
    const result = parseClassNames('<div className="flx"></div>')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should extract react style class names', () => {
    const result = parseClassNames('<div className={"flx"}></div>')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should extract class names from multiple lines', () => {
    const result = parseClassNames(`
      <div className={"flx"}> </div>
    `)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should extract react style class names with single quote', () => {
    const result = parseClassNames('<div className={\'flx\'}> </div>')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should extract react style class names with back quote', () => {
    const result = parseClassNames('<div className={\`flx\`}> </div>')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should ignore any spaces before after =', () => {
    const result = parseClassNames('<div className  =   {\'flx\'}> </div>')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should ignore any spaces before or after {}', () => {
    const result = parseClassNames('<div className=   {  "flx"   }   > </div>')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should ignore any spaces before or after quotes', () => {
    const result = parseClassNames('<div className=   {  "  flx  "   }   > </div>')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should extract class names from with in multiple attributes', () => {
    const result = parseClassNames(`
      <div class="flx" draggable onClick={this.onClick.bind(this)}>
    `)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should extract multiple class names', () => {
    const result = parseClassNames(`
      <div class="flx flx1 tc" draggable onClick={this.onClick.bind(this)}>
    `)
    expect(result).be.a('array')
    expect(result).be.length(3)
    expect(result[0]).be.equal('flx')
    expect(result[1]).be.equal('flx1')
    expect(result[2]).be.equal('tc')
  })

  it('should extract class names if "class" is given', () => {
    const result = parseClassNames('<div class="flx"></div>')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should ignore any spaces, tabs before or after', () => {
    const result = parseClassNames('    <div class="flx "      > ')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should return unique class names', () => {
    const result = parseClassNames('    <div class="flx flx"      > ')
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx')
  })

  it('should return multiple class names', () => {
    const result = parseClassNames('    <div class="flx flx1"> ')
    expect(result).be.a('array')
    expect(result).be.length(2)
    expect(result[0]).be.equal('flx')
    expect(result[1]).be.equal('flx1')
  })

  it('should return multiple class names from multiple attributes', () => {
    const result = parseClassNames('     <div class="flx flx1" class="tc"> ')
    expect(result).be.a('array')
    expect(result).be.length(3)
    expect(result[0]).be.equal('flx')
    expect(result[1]).be.equal('flx1')
    expect(result[2]).be.equal('tc')
  })

})

describe('extractClassStrings', () => {

  it('should extract class string from "class" attribute', () => {
    const result = extractClassStrings(`
      <div class="flx flx1"></div>
    `)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx flx1')

  })

  it('should extract class string from "className" attribute', () => {
    const result = extractClassStrings(`
      <div className="flx flx1"></div>
    `)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx flx1')
  })

  it('should extract class string with {}', () => {
    const result = extractClassStrings(`
      <div className={"flx flx1"}></div>
    `)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx flx1')
  })

  it('should extract class string with single quote', () => {
    const result = extractClassStrings(`
      <div className='flx flx1'></div>
    `)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx flx1')
  })

  it('should extract class string with back quote', () => {
    const result = extractClassStrings(`
      <div className=\`flx flx1\`></div>
    `)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx flx1')
  })

  it('should extract class string with back quote', () => {
    const result = extractClassStrings(`
      <div className={\`flx flx1\`}></div>
    `)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx flx1')
  })

})

describe('extractExpressions', () => {

  it('should extract an expression enclose in single quote', () => {
    const result = extractExpressions(` <div className='flx flx1'></div> `, /'/)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx flx1')
  })

  it('should extract an expression enclose in double quote', () => {
    const result = extractExpressions(` <div className="flx flx1"></div> `, /"/)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('flx flx1')
  })
  it('should extract an expression enclose in double quote', () => {
    const result = extractExpressions(` <div className="flx flx1" className="tc"></div> `, /"/)
    expect(result).be.a('array')
    expect(result).be.length(2)
    expect(result[0]).be.equal('flx flx1')
    expect(result[1]).be.equal('tc')
  })

  it('should extract an expression enclose in {}', () => {
    const result = extractExpressions(` <div className={"flx flx1"}></div> `, /{/, /}/)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('"flx flx1"')
  })

  it('should extract an expression enclose in multiple {}', () => {
    const result = extractExpressions(` <div className={"flx flx1"} {"test"}></div> `, /{/, /}/)
    expect(result).be.a('array')
    expect(result).be.length(2)
    expect(result[0]).be.equal('"flx flx1"')
    expect(result[1]).be.equal('"test"')
  })

  it('should extract an expression enclose in inner {}', () => {
    const result = extractExpressions(` <div className={"flx {"test"} flx1"}></div> `, /{/, /}/)
    expect(result).be.a('array')
    expect(result).be.length(2)
    expect(result[0]).be.equal('"test"')
    expect(result[1]).be.equal('"flx {"test"} flx1"')
  })

  it('should extract an expression enclose in ${}', () => {
    const result = extractExpressions(' <div className={"flx ${test} flx1"}></div> ', /\${/, /}/)
    expect(result).be.a('array')
    expect(result).be.length(1)
    expect(result[0]).be.equal('test')
  })

  it('should extract all expressions enclose in ${}', () => {
    const result = extractExpressions(' <div className={"flx ${test} ${test1} flx1"}></div> ', /\${/, /}/)
    expect(result).be.a('array')
    expect(result).be.length(2)
    expect(result[0]).be.equal('test')
    expect(result[1]).be.equal('test1')
  })

})