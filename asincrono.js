const teams = ["Chelsie", "Bayern", "Cruz Azul"];

console.log('Console 1');
console.log(teams);

function getTeams(){
    return teams;
}

console.log('Console 2');
console.log(getTeams());

function asynGetTeams() {
    setTimeout(() => teams, 2000)
}

console.log('Console 3');
console.log(asynGetTeams());
console.log('Termina script');