/*
    Написать код программной модели циклической очереди
*/

document.write("005_HomeWork_массивы");

class Queue {

    constructor(size) {
        this.size = size
        this.arr = new Array(size)
        this.head = 0
        this.tail = 0
    }

    Put(newElement) {
        if (this.head == (this.tail + 1) % this.size) {
            console.log("Нет места для записи элемента!")
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

var a = new Queue(6);

for (var i = 0; i < 6; i++) {
    a.Put(i * i);
}

console.log(a);

a.Get();
a.Get();

console.log(a);

document.write("<br>" + "<br>" + "Вывод в консоли.");