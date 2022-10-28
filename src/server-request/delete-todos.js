export async function deleteTodos(id) {
    const response = await fetch(`http://104.248.166.249:3000/todo/${id}`, {
        method: 'DELETE',
    })
    .then((result) => result.json())

    console.log(response.message)

    return response
}