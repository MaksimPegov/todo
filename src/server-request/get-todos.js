export async function getTodos() {
    const response = await fetch('http://104.248.166.249:3000/todo')
    .then((data) => data.json())

    return response
}

