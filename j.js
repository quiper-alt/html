const array = []
let curFilter = "";

function newElement() {
    const str = document.getElementById("Input").value;

    if (str === '') {
        alert("Вы не ввели текст");
    } else {
        array.push({title: str, isChecked: false});
        filterList();
        document.getElementById("Input").value = "";
    }
}


function render(array) {
    const getList = document.getElementById("myList");
    getList.innerHTML = "";
    array.forEach((e, index) => {
            const text = document.createElement("span");
            text.innerText = e.title;
            const element = document.createElement("li");

            const btn = document.createElement("button");
            btn.appendChild(document.createTextNode("Удалить"));
            btn.addEventListener("click", () => del(e));

            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.addEventListener("click", () => checkBox_Checked(e));
            checkBox.checked = e.isChecked;

            if (checkBox.checked) {
                text.style.textDecoration = "line-through";
            }

            element.appendChild(text);
            element.appendChild(checkBox);
            element.appendChild(btn);
            getList.appendChild(element);
        }
    );
}

function del(element) {
    const findDelIndx = array.findIndex(e => e === element);

    array.splice(findDelIndx, 1);
    filterList();
}

function checkBox_Checked(element) {
    const findDelIndx = array.findIndex(e => e === element);

    array[findDelIndx].isChecked = !array[findDelIndx].isChecked;
    filterList();
}

function changeFilter(event) {
    event.preventDefault();
    if (curFilter === event.target.textContent) {
        return;
    }
    curFilter = event.target.textContent;
    filterList();
}

function filterList() {
    const filterList = [];
    if (curFilter === "Сделано" || curFilter === "Не сделано") {
        array.forEach(e => {
            if (e.isChecked === (curFilter === "Сделано"))
                filterList.push(e);
        });
        render(filterList);
        return;
    }
    render(array);
}


