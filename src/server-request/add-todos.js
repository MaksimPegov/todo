export async function addTodos(todo){
    const response = await fetch('http://104.248.166.249:3000/todo',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then((result) => result.json())

    console.log(response.message)

    return response
}