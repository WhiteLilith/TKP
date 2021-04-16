/*
     Для объектно-ориентированной программной модели циклической очереди разработать пользовательский графический интерфейс.
*/

let N = 5;

class Queue {
    constructor() {
        this.len = N
        this.arr = new Array(N)
        this.head = 0
        this.tail = 0
    }

    Put(newElement) {
        if (this.head == (this.tail + 1) % this.len) {
            alert("Queue is full!!!")
            return false
        } else {
            this.arr[this.tail] = newElement
            this.tail = (this.tail + 1) % this.len
            return true
        }
    }

    Get() {
        if (this.head != this.tail) {
            var output = this.arr[this.head]
            this.head = (this.head + 1) % this.len
            return output
        } else {
            alert("Queue is empty!!!")
            return undefined
        }
    }
}

var queue = new Queue()

const y = 10
a = new Array(10, 110, 210, 310, 410)
let width = 100
let height = 60

const textPositionY = 35
b = new Array(60, 160, 260, 360, 460)

const addButton = document.getElementById("addButton")
const deleteButton = document.getElementById("deleteButton")
const inputField = document.getElementById("inputField")

const output = document.getElementById("output")

function add() {
    var elem = inputField.value
    if (elem != "") {
        f = queue.Put(elem)
        if (f) {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                ctx.strokeStyle = 'rgb(' + (Math.floor(Math.random() * 256) + 10) + ',' + (Math.floor(Math.random() * 256) + 1) + ',' + (Math.floor(Math.random() * 256) + 1) + ')';
                ctx.strokeRect(a[Math.abs((queue.tail) % N)], y, width, height);
                ctx.fillText(elem, b[Math.abs((queue.tail) % N)], y + 30);
                //a[Math.abs((queue.tail) % N)].innerHTML = elem
            }
        }
    }
}

function del() {
    f = queue.Get()
    if (f != undefined) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(a[(queue.head) % N] - 5, y - 5, width + 6, height + 6)
        }
        //remove(a[(queue.head) % N])
        output.innerHTML = f
    }
}

addButton.onclick = add
deleteButton.onclick = del