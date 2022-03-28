// Add your code here

const sumbitData = (userInput) => {
    
    fetch('http://localhost:3000/users',{method: 'POST',
        headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"},
        body:JSON.stringify(userInput)
    })
}

sumbitData()