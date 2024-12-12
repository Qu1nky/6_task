import { tovarObj } from './tovar.js';

let cards = Array.from(document.querySelectorAll(".card"));
console.log(cards)
cards.forEach(function(elem, index)
{
    elem.querySelector("img").src = `img/${tovarObj[index].imgSrc}`;
    elem.querySelector("h5").innerHTML = `<br>/${tovarObj[index].nameTovar}`;
    let str = `<br>Корпус: ${tovarObj[index].corpus}
    <br>Ремешок: ${tovarObj[index].remen}
    <br>Размер дисплея ${tovarObj[index].displaySize}
    <br>Тип Дисплея ${tovarObj[index].displayType}`;
    if(tovarObj[index].bluetooth) str += "<br>Блютуз: есть";
    else str += "<br>Блютуз: нет";
    str += `<br>Операционные системы: ${tovarObj[index].OS.os1}, ${tovarObj[index].OS.os2}`;
    elem.querySelector(".card-text").innerHTML = str;
});