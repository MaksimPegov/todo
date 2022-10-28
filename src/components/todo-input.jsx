export function TodoInput({onAdd}){
    function readInput(){
        let inputValue = document.getElementById('searchTxt').value
        const todo = {
            text: inputValue,
            date: "2022-10-18",
            user_id: 1
        }
        if(inputValue === ''){
            alert("Please name your todo")
            return
        } else if(inputValue.length > 30){
            alert("Your todo needs to be less than 30 characters!")
            return
        }else{
            onAdd(todo)
            document.getElementById('searchTxt').value = ""
        }
    }

    return(
        <div className="TodoInput">
           <input type="add" className="TodoInput__text" id="searchTxt" placeholder="Todo name"/>
           <button className="TodoInput__button" onClick={() => readInput()}>Add to list</button>
        </div>
    )
}