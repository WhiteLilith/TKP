/* Для заданных значений переменных
        var a = 8;
        var b = 15;
    1) вычислить сумму всех значений от a до b, результат отобразить в окне браузера.
    2) вывести в окне браузера все четные числа, лежащие >= a, но < b.
*/

var a = 8,
    b = 15,
    i = 8,
    sum = 0;

document.write("02_HomeWork_1" + "<br>" + "1) ");

for (i = a; i <= b; i++) {
    sum += i;
}

document.write(sum + "." + "<br>" + "2) ");

for (i = a; i < b; i++) {
    if (i % 2 == 0 && i != b - 1)
        document.write(i + ", ");
    if (i % 2 == 0 && i >= b - 1)
        document.write(i + ".");
}