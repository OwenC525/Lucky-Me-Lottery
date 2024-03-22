//  create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') //storing name input element as a variable
    const name = nameInput.value.trim() //get the TRIMMED value of the input box and store in a variable

    namesArray.push(name) //add the name to the end of the array
    displayNames() //call the displayNames function to update the list

    nameInput.value = '' //clear the input field after adding the name


}