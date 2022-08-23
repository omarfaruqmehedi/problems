
document.getElementById('calc-total').addEventListener('click', function () {
    let totalPriceText = document.getElementById("total-price").innerText;
    const managerpricefield = document.getElementById('manager-price')
    const newmanagerstring = managerpricefield.value;


    const coachpricefield = document.getElementById('coach-price')
    const newcoachstring = coachpricefield.value


    let finalpriceelement = document.getElementById('final-price');
    let totalValue = parseInt(finalpriceelement)
    const totalExpenses = parseInt(totalPriceText) + parseInt(newmanagerstring) + parseInt(newcoachstring);

    finalpriceelement.innerText = totalExpenses;
})