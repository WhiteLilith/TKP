/*
    Создать программную модель двусвязного списка, используя объектно-ориентированный подход
*/

document.write("005_HomeWork_объекты<br><br>Вывод в консоли.")

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
            alert("Список пуст.")
        } else {
            this.last.prev.next = null
            this.last = this.last.prev
            this.len--
        }
    }

    RemoveBeginning() {
        if (this.len <= 0) {
            alert("Список пуст.")
        } else {
            this.first.next.prev = null
            this.first = this.first.next
            this.len--
        }
    }

    AddAt(index, value) {
        if (index >= 0 && index < this.len) {
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
        } else {
            alert("Индекс вне длины списка.")
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
        } else {
            alert("Индекс вне длины списка.")
        }
    }

    GetAt(index) {
        if (index >= 0 && index < this.len) {
            let currentNode = this.first
            for (var i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
            return currentNode.value
        } else {
            alert("Индекс вне длины списка.")
        }
    }

    ShowAt(index) {
        if (index >= 0 && index < this.len) {
            let currentNode = this.first
            for (var i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
        } else {
            alert("Индекс вне длины списка.")
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

let list = new LinkedList()

list.AddToBeginning(4)
list.AddToEnd(-8)
list.AddAt(1, 174)
list.AddToEnd(8)
list.AddToEnd(-3)
list.ShowWholeList()

list.RemoveEnd()
list.ShowWholeList()

list.AddToEnd(13)
list.AddToEnd(-17)
list.RemoveBeginning()
list.ShowWholeList()

list.RemoveAt(2)
list.ShowWholeList()