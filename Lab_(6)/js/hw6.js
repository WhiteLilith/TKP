/*
    Для объектно-ориентированной программной модели стека разработать пользовательский графический интерфейс.
*/

let N = 4;

class Stack {
    constructor() {
        this.len = N
        this.arr = new Array(N)
        this.top = -1
    }

    Push(newElement) {
        if (this.top == N - 1) {
            alert("Стек полон.")
            return false
        } else {
            this.top++
                this.arr[this.top] = newElement
            return true
        }
    }

    Pop() {
        if (this.top >= 0) {
            var output = this.arr[this.top]
            this.top--
                return output
        } else {
            alert("Стек пуст.")
            return undefined
        }
    }
}

var stack = new Stack()

const x = 110;
a = new Array(370, 330, 290, 250)

const addButton = document.getElementById("addButton")
const deleteButton = document.getElementById("deleteButton")
const inputField = document.getElementById("inputField")

const output = document.getElementById("output")

function add() {
    var elem = inputField.value
    if (elem != "") {
        f = stack.Push(elem)
        console.log(f)
        if (f) {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                ctx.strokeStyle = 'rgb(' + (Math.floor(Math.random() * 256) + 10) + ',' + (Math.floor(Math.random() * 256) + 1) + ',' + (Math.floor(Math.random() * 256) + 1) + ')';
                ctx.strokeRect(10, a[stack.top], 200, 40);
                ctx.fillText(elem, x, a[stack.top] + 20);
            }
        }
    }
}

function del() {
    f = stack.Pop()
    if (f != undefined) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(10, a[stack.top + 1] - 5, 200, 40)
        }
        output.innerHTML = f
    }
}

addButton.onclick = add
deleteButton.onclick = del