export async function editTodos(newTodo, id){
    const response = await fetch(`http://104.248.166.249:3000/todo/${id}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then((result) => result.json())

    console.log(response.message)

    return response
}