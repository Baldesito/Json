document.getElementById("saveName").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value;
  if (name) {
    localStorage.setItem("userName", name);
    displaySavedName();
  }
});

document.getElementById("removeName").addEventListener("click", function () {
  localStorage.removeItem("userName");
  displaySavedName();
});

function displaySavedName() {
  let savedNameDiv = document.getElementById("savedName");
  let savedName = localStorage.getItem("userName");
  if (savedName) {
    savedNameDiv.textContent = `Nome salvato: ${savedName}`;
  } else {
    savedNameDiv.textContent = "";
  }
}

displaySavedName();

// Funzione per aggiornare il contatore ogni secondo
function updateCounter() {
  let counterDiv = document.getElementById("counter");
  let counter = parseInt(sessionStorage.getItem("counter") || "0");
  counter++;
  sessionStorage.setItem("counter", counter);
  counterDiv.textContent = counter;
}

// Avvia l'aggiornamento del contatore ogni secondo
setInterval(updateCounter, 1000);

// Mostra il valore del contatore all'avvio
document.addEventListener("DOMContentLoaded", (event) => {
  let counter = parseInt(sessionStorage.getItem("counter") || "0");
  document.getElementById("counter").textContent = counter;
});
