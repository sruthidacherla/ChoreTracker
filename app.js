// Add a chore to the list

function addChore() {

    let choreInput = document.getElementById('choreInput').value;

    if (choreInput) {

        let choreList = document.getElementById('choreList');

        let newChore = document.createElement('li');

        newChore.innerHTML = `<input type="checkbox"> ${choreInput}`;

        choreList.appendChild(newChore);



        // Save chore to local storage

        saveChore(choreInput);



        // Clear input field after adding chore

        document.getElementById('choreInput').value = '';

    }

}

// Toggle the 'completed' class when the checkbox is clicked
function toggleChore(checkbox) {
    
    let listItem = checkbox.parentElement; // Get the parent <li> element
    
    listItem.classList.toggle('completed'); // Toggle the 'completed' class
    
}

// Save chores to local storage

function saveChore(chore) {

    let storedChore = JSON.parse(localStorage.getItem('chores')) || [];

    storedChores.push(chore);

    localStorage.setItem('chores', JSON.stringify(storedChores));

}



// Load chores from local storage on page load

window.onload = function() {

    let storedChores = JSON.parse(localStorage.getItem('chores')) || [];

    storedChores.forEach(chore => addChoreToDOM(chore));

}



// Helper function to add chores to the DOM

function addChoreToDOM(chore) {

    let choreList = document.getElementById('choreList');

    let newChore = document.createElement('li');

    newChore.innerHTML = `<input type="checkbox"> ${chore}`;

    choresList.appendChild(newChore);

} 
