function calculate () {
    let prices = {
        bwPrint: 20,
        bwXCopy: 15,
        colorPrint: 50,
        colorCopy: 40,
        photo30x40: 60,
        photo50x60: 100
    };
    let elemsQ = document.querySelectorAll("input[type='number']");
    let priceValues = Object.values(prices);
    let table = document.querySelector('table');
    priceValues.forEach(function(elem, index){
        table.rows[index + 1].cells[1].innerHTML = elem;
    });
    
    elemsQ.forEach((elem, index) => {
        elem.oninput = function() {
            document.getElementById(`sum${index}`).innerHTML = elemsQ[index].value * priceValues[index];
            itogo();
        }    
    });
}
calculate();
function itogo () {
    let sums = Array.from(document.querySelectorAll("[id*='sum']"));
    console.log(sums);
    let summ = sums.reduce((sum, elem) => sum + +elem.innerHTML, 0);
    document.querySelector("#itogo").innerHTML = summ;
}

