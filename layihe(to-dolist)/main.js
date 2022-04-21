const commentsendButton = document.querySelector('.btn-add');
let arr = [];
let result;

let form = document.querySelector("form")
let todos = document.getElementById("todos");
let firstTodo = document.querySelector(".firstTodo");
let sort = document.querySelector(".sort");
let img = document.querySelector(".sort");
form.addEventListener("submit", e => {
    todos.innerHTML += `
<div id="todo">
<input class="input-part" type="text" id="myInput" name="todo" ">
<img  class="picture" src="image/delete.png" alt="">
</div>
`

    let input = document.querySelectorAll('.input-part');
    input.forEach(findItem)
    e.preventDefault()

})


let firstInput = document.querySelector(".input-part");
firstInput.addEventListener("blur", (_) => {
    firstInput.setAttribute("value", firstInput.value)

});

function findItem(item) {
    item.addEventListener("keyup", (_) => {
        item.addEventListener("blur", (_) => {
            item.setAttribute("value", item.value)
        });
    });

}
firstTodo.addEventListener('click', deleteTodo)

function deleteTodo(e) {
    if (e.target.className == "picture") {
        e.target.parentElement.remove();
    }

}

sort.addEventListener("click", sortTodo);

let index = 0;

function sortTodo(e) {
    let input = document.querySelectorAll(".input-part");
    let arr = [];
    input.forEach(item => {
        arr.push(item.value.trim());
    })
    if (index == 0) {
        img.src = "image/imagea-z.png";
        arr.sort((a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }

        })
        index++;

    } else {
        img.src = "image/imagez-a.png";
        arr.sort((a, b) => {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;

            }


        })
        index--;
    }

    todos.innerHTML = ""
    arr.forEach(item => {
        todos.innerHTML += `
<div id="todo">
<input class="input-part" type="text" id="myInput" name="todo" value="${item}" ">
<img  class="picture" src="image/delete.png" alt="">
</div>
`
    })
    let inputs = document.querySelectorAll(".input-part");
    inputs.forEach(findItem)
}