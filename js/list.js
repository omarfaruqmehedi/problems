const playerarrray = [];

function display(curtplayer) {
    console.log(curtplayer)
    const playerlist = document.getElementById('player-list')
    playerlist.innerHTML = '';

    let playerCount = 0;

    for (let i = 0; i < curtplayer.length; i++) {

        if (i == 5) {
            return alert("you can't choose more than 5 player");
        }

        const name = curtplayer[i].playername

        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${name}</td>
        `;
        playerCount++;
        playerlist.appendChild(tr)

    }
    document.getElementById('calc-btn').addEventListener("click", function () {
        const playerPriceField = document.getElementById('player-price')
        let calPlayerValue = playerPriceField.value;
        if (calPlayerValue > 1000 || calPlayerValue < 1000) {
            return alert("You have to choose 1000 per players");
        }
        let playerExpenses = parseInt(calPlayerValue) * playerCount;
        console.log(playerExpenses)
        let totalPriceText = document.getElementById("total-price");
        totalPriceText.innerText = playerExpenses;


    })
}
function addtolist(element) {
    const firstPlayer = element.parentNode.children[0].innerText
    console.log(firstPlayer)

    const playerObject = {
        playername: firstPlayer
    }
    playerarrray.push(playerObject)
    // console.log(playerarrray)
    // console.log(playerarrray.length)

    document.getElementById('total-player').innerText = playerarrray.length

    display(playerarrray)
}