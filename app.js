// Add a chore to the list
function addChore() {

    //Get the chore input value from the input box
    let choreInput = document.getElementById('choreInput').value;
    //Check if input field isn't empty
    if (choreInput) {
        //add the new chore to the DOM(list of chores)
        addChoreToDOM(choreInput);
        // Save chore to local storage
        saveChore(choreInput);

        // Clear the input box after adding the chore to the list
        document.getElementById('choreInput').value = '';
    }

}

// Toggles the 'completed' class when the checkbox is clicked
function toggleChore(checkbox) {
    // Get the parent <li> element, which represents the chore
    let listItem = checkbox.parentElement; 
    //Toggle the completed class to apply/remove the strikethrough style
    listItem.classList.toggle('completed'); 

    //Update the chore's completion status in local storage
    updateChoreStatus(checkbox.parentElement.textContent.trim(), checkbox.checked);
    
}

// Save chores to local storage
function saveChore(chore) {
    //Get existing chores from local storage, or initialize an empty array 
    let storedChores = JSON.parse(localStorage.getItem('chores')) || [];
    //add new chore as an object that has a status: completed
    storedChores.push({ chore: chore, completed: false });
    //Save the updated array of chores back to storage
    localStorage.setItem('chores', JSON.stringify(storedChores));
}


// Load chores from local storage on page load
window.onload = function() {
    let storedChores = JSON.parse(localStorage.getItem('chores')) || [];
    // Filter out completed chores
    let incompleteChores = storedChores.filter(choreObj => !choreObj.completed);
    // Save only incomplete chores back to local storage
    localStorage.setItem('chores', JSON.stringify(incompleteChores));
    // Add incomplete chores to the DOM
    incompleteChores.forEach(choreObj => addChoreToDOM(choreObj.chore, choreObj.completed));
}


// Helper function to add chores to the DOM
function addChoreToDOM(chore, isCompleted = false) {
    //Get the chore list <ul> element
    let choreList = document.getElementById('choreList');
    // Greate a new list item <li> for the chore
    let newChore = document.createElement('li');
    //Set the inner HTML of the <li> element, including a checkbox and the chore text
    newChore.innerHTML = `<input type="checkbox" ${isCompleted ? 'checked' : ''}> ${chore}`;
    //If completed, add the completed class to strike it through
    if (isCompleted) {
        newChore.classList.add('completed');
    }

    // Add event listener to toggle the chore completion
    newChore.querySelector('input[type="checkbox"]').addEventListener('click', function() {
        toggleChore(this);
    });
    //append the new <li> item to the chore list <ul>
    choreList.appendChild(newChore);
} 

// Update chore status in local storage
function updateChoreStatus(choreText, isCompleted) {
    //Get the existing chores from local storage
    let storedChores = JSON.parse(localStorage.getItem('chores')) || [];

    // Loop through the chores and find the one that matches the chore text
    storedChores.forEach(choreObj => {
        if (choreObj.chore === choreText) {
            //update the completed status based on the cbeckbox
            choreObj.completed = isCompleted;
        }
    });
    //save the updated chores back to local storage
    localStorage.setItem('chores', JSON.stringify(storedChores));
}
