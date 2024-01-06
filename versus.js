const addButton = document.querySelector("#add")
const valueText = document.querySelector("#value")

addButton.addEventListener("click", add)

patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", {versus:1}).then((data) => {
        console.log(data); 
         
        
    });


let value = 1




function add() {
    console.log("hoj")
value++
    patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", {versus:value}).then((data) => {
        console.log(data); 
         
        
    });
}




function chngething() {

    getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
        document.querySelector('#score').innerHTML = data.versus
        document.querySelector('#anoscore').innerHTML = data.versus2
        document.querySelector('#nescore').innerHTML = data.versus3
        document.querySelector('#nenescore').innerHTML = data.versus4
        document.querySelector('#anoanoscore').innerHTML = data.versus5
    
        
    });
    
    
    }
    
    setInterval(chngething, 100)
    
    function sortleadboard() {
        let elements = []
        let container = document.querySelector('#container')
        // Add each row to the array
        container.querySelectorAll('.row').forEach(el => elements.push(el))
        // Clear the container
        container.innerHTML = ''
        // Sort the array from highest to lowest
        elements.sort((a, b) => b.querySelector('.score').textContent - a.querySelector('.score').textContent)
        // Put the elements back into the container
        elements.forEach(e => container.appendChild(e))
      }
      
    setInterval(sortleadboard, 100)




















































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
  