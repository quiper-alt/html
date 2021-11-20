document.addEventListener("DOMContentLoaded", () => {
    addSpan();
    clickClose();
    addChecked();
});

function addSpan(){
    const myNodeList = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < myNodeList.length; i++) {
        const span = document.createElement("span");
        const txt = document.createTextNode("\u2716");
        span.className = "close";
        span.appendChild(txt);
        myNodeList[i].appendChild(span);
    }
}

function clickClose() {
    const close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}


function addChecked(){
    const list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}
function newElement() {
    const li = document.createElement("li");
    const inputText = document.getElementById("Input").value;
    const text = document.createTextNode(inputText);

    li.appendChild(text);

    if (inputText === '') {
        alert("Вы не ввели текст");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("Input").value = "";

    const span = document.createElement("span");
    const txt = document.createTextNode("\u2716");
    span.className = "close";
    span.appendChild(txt);
    span.addEventListener('click', () => {
       console.log('Нажали на Х');
        li.remove();
    });
    li.appendChild(span);
}

