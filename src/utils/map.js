export function MP(ak) {
  return new Promise(function(resolve, reject) {
    window.init = function() {
      console.log(BMapGL)
      resolve(BMapGL)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${ak}&callback=init`
    script.onerror = reject
    document.head.appendChild(script)
  })
}
