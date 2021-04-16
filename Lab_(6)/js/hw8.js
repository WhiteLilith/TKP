/*
    Для объектно-ориентированной программной модели двусвязного списка разработать пользовательский графический интерфейс.
*/

function Node(value) {
    this.value = value
    this.next = undefined
    this.prev = undefined
}

class LinkedList {
    constructor() {
        this.len = 0
        this.last = undefined
        this.first = undefined
    }

    AddToBeginning(value) {
        let node = new Node(value)
        if (this.len > 0) {
            node.next = this.first
            this.first.prev = node
            this.first = node
        } else {
            this.first = node
            this.last = node
        }
        this.len++
    }

    AddToEnd(value) {
        let node = new Node(value)
        if (this.len > 0) {
            node.prev = this.last
            this.last.next = node
            this.last = node
        } else {
            this.first = node
            this.last = node
        }
        this.last.value = value
        this.len++
    }

    RemoveEnd() {
        if (this.len <= 0) {
            alert("Список пуст!!!")
            return false
        } else {
            this.last.prev.next = null
            this.last = this.last.prev
            this.len--
                return true
        }
    }

    RemoveBeginning() {
        if (this.len <= 0) {
            alert("Список пуст!!!")
            return false
        } else {
            this.first.next.prev = null
            this.first = this.first.next
            this.len--
                return true
        }
    }

    AddAt(index, value) {
        if (index > 0 && index < this.len || index === 0) {
            console.log("in")
            let node = new Node(value)
            let currentNode = this.first
            let currentIndex = 0
            if (index === 0) {
                this.AddToBeginning(value)
            } else if (index === this.len - 1) {
                this.AddToEnd(value)
            } else {
                while (currentIndex < index) {
                    currentIndex++
                    currentNode = currentNode.next
                }
                node.next = currentNode
                node.prev = currentNode.prev
                currentNode.prev.next = node
                currentNode.prev = node
                this.len++
            }
            return true
        } else {
            alert("Индекс вне длины списка")
            return false
        }
    }

    RemoveAt(index) {
        if (index >= 0 && index < this.len) {
            let currentNode = this.first
            let currentIndex = 0
            if (index === 0) {
                this.RemoveBeginning()
            } else if (index === this.len - 1) {
                RemoveEnd()
            } else {
                while (currentIndex < index) {
                    currentIndex++
                    currentNode = currentNode.next
                }
                currentNode.prev.next = currentNode.next
                currentNode.next.prev = currentNode.prev
            }
            this.len--
                return true
        } else {
            alert("Индекс вне длины списка")
            return false
        }
    }

    GetAt(index) {
        if (index >= 0 && index < this.len) {
            let currentNode = this.first
            for (var i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
            console.log(currentNode)
            return currentNode.value
        } else {
            alert("Индекс вне длины списка")
            return undefined
        }
    }

    ShowAt(index) {
        if (index >= 0 && index < this.len) {
            let currentNode = this.first
            for (var i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
            console.log(currentNode.value)
        } else {
            alert("Индекс вне длины списка")
            return undefined
        }
    }

    GetWholeListString() {
        var s = ""

        for (var i = 0; i < this.len; i++) {
            s = s + this.GetAt(i) + " "
        }
        return s
    }

    ShowWholeList() {
        var s = ""
        for (var i = 0; i < this.len; i++) {
            s = s + this.GetAt(i) + " "
        }
        console.log(s)
    }
}

var list = new LinkedList()

const y = 10
a = new Array(10, 110, 210, 310, 410)
let width = 100
let height = 60

const textPositionY = 35
b = new Array(60, 160, 260, 360, 460)

const deleteAtButton = document.getElementById("deleteAtButton")
const deleteEndButton = document.getElementById("deleteEndButton")
const deleteBegButton = document.getElementById("deleteBegButton")

deleteAtButton.onclick = deleteAt
deleteBegButton.onclick = deleteAtBegginning
deleteEndButton.onclick = deleteAtEnd

const addAtButton = document.getElementById("addAtButton")
const addEndButton = document.getElementById("addEndButton")
const addBegButton = document.getElementById("addBegButton")

addAtButton.onclick = addAt
addBegButton.onclick = addAtBegginning
addEndButton.onclick = addAtEnd

const inputField = document.getElementById("inputField")
const inputIndexField = document.getElementById("inputIndexField")
const deleteIndexField = document.getElementById("deleteIndexField")

function drawList() {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        for (let i = 0; i < list.len; i++) {
            ctx.strokeStyle = 'rgb(' + (Math.floor(Math.random() * 256) + 10) + ',' + (Math.floor(Math.random() * 256) + 1) + ',' + (Math.floor(Math.random() * 256) + 1) + ')';
            ctx.strokeRect(10 + 100 * i, y, width, height);
            ctx.fillText(list.GetAt(i), 60 + 100 * i, y + 30);
        }
    }
}

function clearList() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 30000, 300)
    }
}

function addAtBegginning() {
    var elem = inputField.value
    if (elem != "") {
        list.AddToBeginning(elem)
        clearList()
        drawList()
    }
}

function addAtEnd() {
    var elem = inputField.value
    if (elem != "") {
        list.AddToEnd(elem)
        clearList()
        drawList()
    }
}

function addAt() {
    var elem = inputField.value
    var index = parseInt(inputIndexField.value)
    if (elem != "") {
        console.log(index)
        f = list.AddAt(index, elem)
        console.log(f)
        if (f) {
            clearList()
            drawList()
        }
    }
}


function deleteAt() {
    var f = list.RemoveAt(parseInt(inputIndexField.value))
    if (f) {
        clearList()
        drawList()
    }
}

function deleteAtEnd() {
    var f = list.RemoveEnd()
    if (f) {
        clearList()
        drawList()
    }
}

function deleteAtBegginning() {
    var f = list.RemoveBeginning()
    if (f) {
        clearList()
        drawList()
    }
}