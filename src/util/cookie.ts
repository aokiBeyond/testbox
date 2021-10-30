import Cookie from 'cookiejs'

const Token = 'admin'
export function getToken() {
  return Cookie.get(Token)
}

export function setToken(token: string) {
  return Cookie.set(Token, token)
}

export function removeToken() {
  return Cookie.remove(Token)
}
