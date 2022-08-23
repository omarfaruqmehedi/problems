
document.getElementById('calc-btn').addEventListener('click', function () {
    const playerpricefield = document.getElementById('player-price')
    const newpricestring = playerpricefield.value
    const newprice = parseFloat(newpricestring)


    const totalpriceelement = document.getElementById('total-price')
    const totalpricestring = totalpriceelement.innerText
    const totalprice = parseFloat(totalpricestring)

    const newpricetotal = totalprice + newprice
    totalpriceelement.innerText = newpricetotal
})

document.getElementById('calc-total').addEventListener('click', function () {
    const managerpricefield = document.getElementById('manager-price')
    const newmanagerstring = managerpricefield.value
    const newmanager = parseFloat(newmanagerstring)

    const coachpricefield = document.getElementById('coach-price')
    const newcoachstring = coachpricefield.value
    const newcoach = parseFloat(newcoachstring)

    const finalpriceelement = document.getElementById('final-price')
    const finalpricestring = finalpriceelement.innerText
    const finalprice = parseFloat(finalpricestring)

    const newfinalprice = newcoach + newmanager + finalprice
    finalpriceelement.innerText = newfinalprice
})