const fs = require('fs')
const path = require('path')
const expect = require('chai').expect

function readFileSync (p) {
  return fs.readFileSync(p, {encoding: 'utf8'})
}

/* eslint-env mocha */
describe('prev container', function () {
  var src = path.join(__dirname, 'source/src.txt')
  var res = path.join(__dirname, 'source/res.txt')
  src = readFileSync(src)
  res = readFileSync(res).trim()
  const md = require('markdown-it')()
    .use(require('..'))
  expect(md.render(src)).to.be.equal(res)
})
