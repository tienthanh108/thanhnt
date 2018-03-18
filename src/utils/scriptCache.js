const scriptMap = {}

export default function scriptCache(key, url) {
  return new Promise((resolve, reject) => {
    const head = document.getElementsByTagName('body')[0]
    const script = document.createElement('script')

    if (scriptMap[key]) {
      scriptMap[key].parentNode.removeChild(scriptMap[key])
    }

    scriptMap[key] = script

    window.captchaOnloadCallback = () => {
      delete window.captchaOnloadCallback
      resolve()
    }

    script.src = `${url}&onload=captchaOnloadCallback`
    script.type = 'text/javascript'
    script.async = false
    script.addEventListener('error', reject)
    head.appendChild(script)
  })
}
