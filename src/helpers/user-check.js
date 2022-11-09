import { login } from '../server-request'

export const userCheck = (user) => {
  return login(user).then((data) => {
    if (data.status) {
      localStorage.setItem('user', user.username)
      localStorage.setItem('userID', data.id)

      return true
    } else {
      alert('Wrong username or password')

      return false
    }
  })
}

