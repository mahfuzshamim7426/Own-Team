const playersArray = [];
// players-playersArray

function displayPlayers() {
    let totalPlayer = 0;


    const playersArrayContainer = document.getElementById("players-array");
    playersArrayContainer.textContent = '';

    for (let i = 0; i < playersArray.length; i++) {


        if (playersArray.length > 5) {
            alert("You can add maximum 5 Players");
            return;
        }
        else {

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <th>${i + 1}</th> 
                <td>${playersArray[i].pdName}</td>
                `;;
            const playersContainer = playersArrayContainer.appendChild(tr);
        }


    }

}

function addToplayersArray(element) {
    const pdName = element.parentNode.children[0].innerText;
    const pd = {
        pdName: pdName
    }

    playersArray.push(pd);
    console.log(playersArray);

    displayPlayers();
    // console.log(pdName);
}


// ********************Calculation Part 
// ********************


document.getElementById("player-cost-calculation").addEventListener('click', function () {
    const playerCostCount = document.getElementById('player-cost');
    const playerCost = playerCostCount.value;

    const totalPlayerCost = document.getElementById('total-player-cost');
    const totalPlayerCostCount = totalPlayerCost.innerText;
    const totalPlayersPayment = playersArray.length * playerCost;

    totalPlayerCost.innerText = totalPlayersPayment;
})

document.getElementById('total-calculate').addEventListener('click', function () {
    const playerCostCount = document.getElementById('player-cost');
    const playerCost = playerCostCount.value;

    const totalPlayerCost = document.getElementById('total-player-cost');
    const totalPlayerCostCount = totalPlayerCost.innerText;
    const totalPlayersPayment = playersArray.length * playerCost;

    totalPlayerCost.innerText = totalPlayersPayment;

    const totalManagerCost = document.getElementById('total-manager-cost');
    const totalManagerrCostCountString = totalManagerCost.value;
    const totalManagerrCostCount = parseFloat(totalManagerrCostCountString);


    const totalCoachCost = document.getElementById('total-coach-cost');
    const totalCoachCostCountString = totalCoachCost.value;
    const totalCoachCostCount = parseFloat(totalCoachCostCountString);

    const totalCost = document.getElementById('total-cost');
    const totalCostCount = totalCost.innerText;
    const totalPayment = totalPlayersPayment + totalManagerrCostCount + totalCoachCostCount;

    totalCost.innerText = totalPayment;

})