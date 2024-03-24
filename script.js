function logID() {
  const userInput = document.getElementById('userInput').value;
  if (userInput) {
    const currentLog = localStorage.getItem('idLog') ? JSON.parse(localStorage.getItem('idLog')) : [];
    currentLog.push(userInput);
    localStorage.setItem('idLog', JSON.stringify(currentLog));
    displayLog();
  }
}

function displayLog() {
  const log = document.getElementById('log');
  const idLog = JSON.parse(localStorage.getItem('idLog')) || [];
  log.innerHTML = '<h2>Log:</h2>' + idLog.map(id => `<div>${id}</div>`).join('');
}

window.onload = displayLog;
