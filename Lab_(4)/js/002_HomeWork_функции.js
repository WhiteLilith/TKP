/*
    Создать функции двух аргументов:
        сложения,
        вычитания,
        умножения,
        деления.
    В каждой функции предусмотреть вывод результата в окне браузера в формате:
        a + b = 8
        a - b = 3
        a * b = 16
        a / b = 2
        Попытка деления на 0.
*/

document.write("002_HomeWork_функции<br><br>")

function Sum(a, b) {
    document.write("a + b = " + (a + b) + "<br><br>")
}

function Min(a, b) {
    document.write("a - b = " + (a - b) + "<br><br>")
}

function Mult(a, b) {
    document.write("a * b = " + (a * b) + "<br><br>")
}

function Div(a, b) {
    if (b != 0)
        document.write("a / b = " + (a / b) + "<br><br>")
    else document.write("Попытка деления на 0." + "<br><br>")
}

var a = 6,
    b = 3,
    c = 0;

Sum(a, b)
Min(a, b)
Mult(a, b)
Div(a, b)
Div(a, c)