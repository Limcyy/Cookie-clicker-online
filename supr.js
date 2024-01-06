function check() {
    getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/blbost.json").then((data) => {
        
         
        if (data === 1) {
            console.log("wow")
        
        }
    });
}

setInterval(check, 10000)

































// Example POST method implementation:
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
  

