var originOptions = {
  className: 'extensible-fence'
}
module.exports = function containerPlugin (md, opts) {
  var _options = Object.assign(originOptions, opts)
  var defaultRenderer = md.renderer.rules.fence
  function render (tokens, idx, options, env, slf) {
    var origin = defaultRenderer(tokens, idx, options, env, slf)
    return `<div class='${_options.className}'><i class='${_options.className + '-btn'}'></i>${origin}</div>`
  }
  md.renderer.rules.fence = render
}
