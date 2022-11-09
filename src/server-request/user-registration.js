export const addUser = async (user) => {
  const response = await fetch('http://104.248.166.249:3000/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) =>
      !res.ok
        ? res.text().then((text) => {
            throw new Error(text)
          })
        : res.json().then((message) => ({
            status: true,
            message: message,
          })),
    )
    .catch((err) => ({
      status: false,
      message: err.message,
    }))

  return response
}
