import * as chai from 'chai'

import { parseClassName } from './class-name-parser'

const { expect } = chai

describe('parseClassName', () => {
  it('should be a function', () => {
    expect(typeof parseClassName).be.equals('function')
  })
})