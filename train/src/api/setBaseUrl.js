var baseUrl = ''

switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://api.stooop.top/'
    //baseUrl = 'http://gdjt.vieword.club/'
    break
  case 'production':
    baseUrl = 'http://api.stooop.top/'
    //baseUrl = 'http://gdjt.vieword.club/'
    break
}

export default baseUrl
