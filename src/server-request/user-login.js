export async function login({username, password}){
   const response = await fetch(`http://104.248.166.249:3000/users/${username}&${password}`)
    .then((data) => data.json())

    if(response.id){
        return {
            status: true,
            id: response.id
        }
    }else{
        return response
    }
}