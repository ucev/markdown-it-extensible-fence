const originOptions = {
  className: 'extensible-fence'
}
const CURRENT_TOKEN = `__TOKEN-MARKDOWN-IT-EXTENSIBLE-FENCE-${Date.now()}__`;

module.exports = function containerPlugin (md, opts) {
  var className = opts && opts.className || originOptions.className
  var defaultRenderer = md.renderer.rules.fence
  function render (tokens, idx, options, env, slf) {
    var origin = defaultRenderer(tokens, idx, options, env, slf)
    return `<div class='${className}'><i class='${className}-btn'></i>${origin}</div>`
  }
  if (!md[CURRENT_TOKEN]) {
    md.renderer.rules.fence = render
    md[CURRENT_TOKEN] = true
  }
}
