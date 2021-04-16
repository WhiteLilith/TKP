/*
    Написать код программной модели стека
*/

document.write("004_HomeWork_массивы");

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

document.write("<br>" + "<br>" + "Вывод в консоли.");