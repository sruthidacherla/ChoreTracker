// Add a habit to the list

function addHabit() {

    let habitInput = document.getElementById('habitInput').value;

    if (habitInput) {

        let habitList = document.getElementById('habitList');

        let newHabit = document.createElement('li');

        newHabit.innerHTML = `<input type="checkbox"> ${habitInput}`;

        habitList.appendChild(newHabit);



        // Save habit to local storage

        saveHabit(habitInput);



        // Clear input field after adding habit

        document.getElementById('habitInput').value = '';

    }

}



// Save habits to local storage

function saveHabit(habit) {

    let storedHabits = JSON.parse(localStorage.getItem('habits')) || [];

    storedHabits.push(habit);

    localStorage.setItem('habits', JSON.stringify(storedHabits));

}



// Load habits from local storage on page load

window.onload = function() {

    let storedHabits = JSON.parse(localStorage.getItem('habits')) || [];

    storedHabits.forEach(habit => addHabitToDOM(habit));

}



// Helper function to add habits to the DOM

function addHabitToDOM(habit) {

    let habitList = document.getElementById('habitList');

    let newHabit = document.createElement('li');

    newHabit.innerHTML = `<input type="checkbox"> ${habit}`;

    habitList.appendChild(newHabit);

} 