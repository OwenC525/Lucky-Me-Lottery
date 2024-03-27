//  create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') //storing name input element as a variable
    const name = nameInput.value.trim() //get the TRIMMED value of the input box and store in a variable

    if (name !== '') {
        // Check if the name is not empty
    namesArray.push(name) //add the name to the end of the array
    displayNames() //call the displayNames function to update the list
    nameInput.value = '' //clear the input field after adding the name
} else {
    alert('Please enter a valid name.') // Show an alert if the name is empty
  }


}

// Function to display names in the list
function displayNames () {
    const nameList = document.getElementById('nameList') // Get the list element
    nameList.innerHTML = '' // Clear the previous list
  
    for (let i = 0; i < namesArray.length; i++) {
      // Loop through the names array
      const name = namesArray[i] // Get the current name
  
      const li = document.createElement('li') // Create a new list item element
      li.className = 'list-group-item' // Set the class for the list item
  
      const span = document.createElement('span') // Create a new span element
      span.textContent = name // Set the text content of the span to the name
  
      li.appendChild(span) // Append the span to the list item
      nameList.appendChild(li) // Append the list item to the list
    }
  }


  function pickRandomName() {
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''

    //select random mane from names array
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber]

    randomNameDiv.textContent = randomName

    namesArray.splice(randomNumber, 1)

    displayNames();
    
  }
  
  // Event listener for the button click
  document.getElementById('addNameBtn').addEventListener('click', addName) // Attach the addName function to the button click event

  // Event listener for the button click to select and display a rndm name
  document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName) // Attach the addName function to the button click event