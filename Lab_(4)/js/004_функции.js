/*
    Для задач прогаммного моделирования стека и циклической очереди оформить в виде функций:
        добавление элемента в стек
        извлечение элемента из стека
        добавление элемента в очередь
        извлечение элемента из очереди
*/

document.write("004_функции<br><br>");

class Stack {

    constructor(size) {
        this.size = size;
        this.head = 0;
        this.arr = new Array(size);
    }

    Push(element) {
        if (this.head != this.size) {
            this.arr[this.head] = element;
            this.head++;
        } else console.log("Нет места для записи нового элемента.");
    };

    Pop() {
        if (this.head != 0) {
            console.log(this.arr[this.head - 1]);
            this.head--;
        } else console.log("Стек пуст.");
    }

}

var a = new Stack(6);
var i = 0;

for (i = 0; i <= 6; i++) {
    a.Push(i * i);
}

console.log(a);

a.Pop();
a.Pop();

console.log(a);

document.write("Вывод в консоли.");

class Queue {

    constructor(size) {
        this.size = size
        this.arr = new Array(size)
        this.head = 0
        this.tail = 0
    }

    Put(newElement) {
        if (this.head == (this.tail + 1) % this.size) {
            console.log("Нет места для записи нового элемента.")
        } else {
            this.arr[this.tail] = newElement
            this.tail = (this.tail + 1) % this.size
        }
    }

    Get() {
        if (this.head != this.tail) {
            console.log(this.arr[this.head])
            this.head = (this.head + 1) % this.size
        } else {
            console.log("Очередь пуста.")
        }
    }
}

var b = new Queue(6);

for (var i = 0; i < 6; i++) {
    b.Put(i * i);
}

console.log(b);

b.Get();
b.Get();

console.log(b);