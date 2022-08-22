const playersArray = [];
// players-playersArray

function displayPlayers() {
    let totalPlayer = 0;


    const playersArrayContainer = document.getElementById("players-array");
    playersArrayContainer.textContent = '';

    for (let i = 0; i < playersArray.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <th>${i + 1}</th> 
                <td>${playersArray[i].pdName}</td>
                `;;
        const playersContainer = playersArrayContainer.appendChild(tr);

    }
    // document.getElementsByClass("myBtn").disabled = true;
    // button.setAttribute('disabled', '');
    const inputs = document.getElementsByClassName('myBtn');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
}

function addToplayersArray(element) {
    const pdName = element.parentNode.children[0].innerText;
    const pd = {
        pdName: pdName
    }
    if (playersArray.length < 5) {
        playersArray.push(pd);
    }
    else {
        alert("You can add maximum 5 Players");
        return;
    }
    console.log(playersArray);

    displayPlayers();
}


// ********************Calculation Part 
// ********************
function playerCostElement(elementsId) {
    const playerCostCount = document.getElementById(elementsId);
    const playerCost = playerCostCount.value;
    const totalPlayerCost = document.getElementById('total-player-cost');
    const totalPlayerCostCount = totalPlayerCost.innerText;
    const totalPlayersPayment = playersArray.length * playerCost;
    totalPlayerCost.innerText = totalPlayersPayment;
    return totalPlayersPayment;
}
function managementCostElement(managementId) {
    const totalManagementCost = document.getElementById(managementId);
    const totalManagementCostCountString = totalManagementCost.value;
    const totalManagementCostCount = parseFloat(totalManagementCostCountString);
    return totalManagementCostCount;
}

document.getElementById("player-cost-calculation").addEventListener('click', function () {
    playerCostElement('player-cost');
})

document.getElementById('total-calculate').addEventListener('click', function () {
    const playerEmlementCost = playerCostElement('player-cost');
    const totalManagerrCost = managementCostElement('total-manager-cost');
    const totalCoachCost = managementCostElement('total-coach-cost');

    const totalCost = document.getElementById('total-cost');
    const totalCostCount = totalCost.innerText;
    const totalPayment = playerEmlementCost + totalManagerrCost + totalCoachCost;

    totalCost.innerText = totalPayment;

})