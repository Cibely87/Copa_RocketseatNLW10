function createGame(player01, hour, player02) {
  return `
   <li>
      <img src="./assents/icon_${player01}.svg" alt="Bandeira da ${player01}" />
      <strong>${hour}</strong>
      <img
        src="./assents/icon_${player02}.svg"
        alt="Bandeira dos ${player02}"
      />
    </li>

  `
}

function createCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}

document.querySelector('#app').innerHTML = `
  <header>
    <img src="./assents/logo.svg" alt="Logo app copa" />
  </header>
  <main id="cards">
    ${createCard('24/11', 'Quinta-feira',
  createGame("Suica", "07:00", "Camaroes") +
  createGame("Uruguay", "10:00", "SouthCorean") +
  createGame("Portugal", "13:00", "Gana") +
  createGame("Brazil", "16:00", "Serbia")
)}
    ${createCard('28/11', 'Segunda-feira',
  createGame("Camaroes", "07:00", "Serbia") +
  createGame("SouthCorean", "10:00", "Gana") +
  createGame("Suica", "13:00", "Brazil") +
  createGame("Uruguay", "16:00", "Portugal")
)}
    ${createCard('29/11', 'Terça-feira',
  createGame("Argentina", "07:00", "Britshi") +
  createGame("Armenia", "10:00", "Hungary") +
  createGame("Camaroes", "13:00", "Uruguay") +
  createGame("Japan", "16:00", "Brazil")
)}
  </main >
  `