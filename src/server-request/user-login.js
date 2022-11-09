export async function login({ username, password }) {
  const res = await fetch(
    `http://104.248.166.249:3000/users/${username}&${password}`,
  ).then((data) => data.json())

  return res.id
    ? {
        status: true,
        id: res.id,
      }
    : res
}

