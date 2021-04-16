/*
Для трех переменных:
        var x = 6;
        var y = 15;
        var z = 4; 
выполнить следующие выражения:
    res = x += y - x++ * z;
    res = z = --x - y * 5;
    res = y /= x + 5 % z ;
    res = z = x++ + y * 5 ;
    res = x = y - x++ * z ;
и результаты вывести в окне браузера
*/

document.write("02_HomeWork" + "<br>");

var x = 6,
    y = 15,
    z = 4,
    res = 0;

res = x += y - x++ * z;
document.write("res = x += y - x++ * z = " + res + "<br>");

res = z = --x - y * 5;
document.write("res = z = --x - y * 5 = " + res + "<br>");

res = y /= x + 5 % z;
document.write("res = y /= x + 5 % z = " + res + "<br>");

res = z = x++ + y * 5;
document.write("res = z = x++ + y * 5 = " + res + "<br>");

res = x = y - x++ * z;
document.write("res = x = y - x++ * z = " + res + "<br>");