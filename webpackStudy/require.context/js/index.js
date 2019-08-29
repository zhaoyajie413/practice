const api = Object.create(null)

const modules = require.context('./', true, /\.js$/)

modules.keys().forEach(function (key) {
    if (key !== './index.js') {
        Object.assign(api, modules(key))
    }
})
console.log(api)
export default api
