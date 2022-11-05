export async function addUser(user){
   const response = await fetch('http://104.248.166.249:3000/users/',
   {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(user)
   }).then(res => {
        if(!res.ok) {
            return res.text().then(text => { throw new Error(text)});
        }
        else {
            return res.json().then(message => {
                return {
                    status: true,
                    message: message
                };
        })
        }    
    })
    .catch(err => {
        console.log(err);
        return {
            status: false,
            message:err.message
            }
    });

    return response
}