import pluginPostcss from 'plugin-postcss'
import cssnext from 'cssnext'

let { fetch, hotReload, bundle } = pluginPostcss([cssnext])

export { fetch, hotReload, bundle }
