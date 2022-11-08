export const todoCheck = (inputValue) => {
    let status = false
    if(inputValue === ''){
        alert("Please name your todo")
    } else if(inputValue.length > 30){
        alert("Your needs to be less than 30 characters!")
    } else if(inputValue.match(/[а-яА-ЯёЁ]/g)){
        alert("RU charecters do not supported")
    } else if(inputValue.includes(`'`) || inputValue.includes(`"`)){
        alert("Brackets are not allowed")
    } else {
        status = true
    }

    return status
}