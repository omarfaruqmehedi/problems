const playerarrray = []

function display(curtplayer) {
    console.log(curtplayer)
    const playerlist = document.getElementById('player-list')
    playerlist.innerHTML = '';
    for (let i = 0; i < curtplayer.length; i++) {
        // console.log(curtplayer[i].playername)
        const name = curtplayer[i].playername

        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${name}</td>
        `;
        playerlist.appendChild(tr)
    }
}
function addtolist(element) {
    const firstplayer = element.parentNode.children[0].innerText
    console.log(firstplayer)

    const playerobject = {
        playername: firstplayer
    }
    playerarrray.push(playerobject)
    // console.log(playerarrray)
    // console.log(playerarrray.length)

    document.getElementById('total-player').innerText = playerarrray.length

    display(playerarrray)
}