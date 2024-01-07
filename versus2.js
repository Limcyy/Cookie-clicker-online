const cookieButton = document.querySelector("#cookie")
const valueText = document.querySelector("#value")
let value = 1

cookieButton.addEventListener("click", add)

patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { versus2: value }).then((data) => {

});

function add() {
  value++
  patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { versus2: value }).then((data) => {

  });
}

function scores() {

  getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
    document.querySelector('#firstscore').innerHTML = data.versus
    document.querySelector('#secondscore').innerHTML = data.versus2
    document.querySelector('#thirdscore').innerHTML = data.versus3
    document.querySelector('#forthscore').innerHTML = data.versus4
    document.querySelector('#fifthscore').innerHTML = data.versus5
  });


}

setInterval(() => {
  scores()
  sortleadboard()
}, 100)

function sortleadboard() {
  let elements = []
  let container = document.querySelector('#container')
  container.querySelectorAll('.row').forEach(el => elements.push(el))
  container.innerHTML = ''
  elements.sort((a, b) => b.querySelector('.score').textContent - a.querySelector('.score').textContent)
  elements.forEach(e => container.appendChild(e))
}




async function patchData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "PATCH", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}



async function getData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

