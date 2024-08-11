const GET_API='http://localhost:8000/todos';
const POST_API="http://localhost:8000/todos?id";
fetch(GET_API).then(response=>response.json())
.then(todos=>{
    console.log(todos)
    todos.forEach((todo,index) => {
        const listtodo=document.querySelector("#content")
        console.log(listtodo);
        const listItem = document.createElement('div');
        listItem.className="d-flex bg-info justify-content-between align-items-center rounded-1 mb-2";
        listItem.style.width="400px";
        listItem.style.height="40px";
        listItem.innerHTML = `
            <p class="mb-0 ms-2" >${index+1} ${todo.name}</p>
            <div class="me-2">
                <button type="submit" class="border-0 rounded-1 bg-success"><i class="fa fa-pencil" style="color: white;"></i></button>
                <button type="submit" class="border-0 rounded-1 bg-danger"><i class="fa fa-trash-o" style="color: white;"></i></button>
            </div>
        `;
        listtodo.appendChild(listItem);
    });
});
          
    