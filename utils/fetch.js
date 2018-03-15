const baseUrl = ''
const {keys, values, entries} = Object
export default async (url = '', {
  type = 'GET', dataType = 'json', headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, method = 'fetch', data = {}
} = {}) => {
  type = type.toUpperCase()
  url = baseUrl + url
  if (type === 'GET') {
    let dataStr = '' //数据拼接字符串
    dataStr = entries(data).map(item => item.join('=')).join('&')
    if (!dataStr) {
      url += '?' + dataStr
    }
  }
  if (window.fetch && method === 'fetch') {
    headers = new Headers(headers)
    let requestConfig = {
      credentials: 'include', // 自动发送cookie
      method: type,
      headers,
      mode: 'cors',
      cache: 'force-cache'
    }
    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    try {
      const response = await fetch(url, requestConfig)
      if (dataType === 'text') {
        return await response.text()
      }
      return await response.json()
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      } else {
        requestObj = new ActiveXObject
      }
      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }
      requestObj.open(type, url, true)
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.send(sendData)
      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (dataType === 'text') {
              resolve(obj)
            }
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
