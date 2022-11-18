export const accountCheck = (user) => {
  let status = false
  if (user.username === '') {
    alert("Username can't be empty")
  } else if (user.password === '') {
    alert("Password can't be empty")
  } else if (user.username.length < 3) {
    alert('Username must be at least 8 characters long')
  } else if (user.password.length < 6) {
    alert('Password must be at least 8 characters long')
  } else if (user.username.length > 30) {
    alert('Username must be less than 30 characters long')
  } else if (user.password.length > 30) {
    alert('Password must be less than 30 characters long')
  } else if (user.username.match(/[а-яА-ЯёЁ]/g) || user.password.match(/[а-яА-ЯёЁ]/g)) {
    alert('RU charecters do not supported')
  } else if (user.hasOwnProperty('confirmPassword')) {
    if (user.confirmPassword === '') {
      alert('Please confirm your password')
    } else if (user.password !== user.confirmPassword) {
      alert('Passwords do not match')
    } else {
      status = true
    }
  } else {
    status = true
  }

  return status
}

