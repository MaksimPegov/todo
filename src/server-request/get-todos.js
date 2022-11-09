export async function getTodos(userID) {
  const response = await fetch(`http://104.248.166.249:3000/todo/${userID}`).then(
    (data) => data.json(),
  )

  return response
}

