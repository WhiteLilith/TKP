/*
Пусть есть 10 магазинов, между каждой парой магазинов есть путь. 
Напишите код вычисления количества возможных маршрутов обхода всех магазинов.
Результать отобразить в окне браузера
*/

let k = 10,
    i = 1,
    n = 1;

for (i = 1; i <= k; i++)
    n *= i;

document.write("03_HomeWork_1" + "<br>" + "Количество путей: " + n);