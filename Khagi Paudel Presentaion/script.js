// Learn More button
function showMessage() {

    alert("Nepal is rich in culture, traditions and diversity!");

}


// Show Message button
function changeText() {

    document.getElementById("cultureText").textContent =
        "I like Nepali culture because it represents diversity, tradition, family and hospitality.";

}


// Dark Mode button
document.getElementById("themeBtn").addEventListener("click", function () {

    // Add or remove dark class
    document.body.classList.toggle("dark");


    // Change button text
    if (document.body.classList.contains("dark")) {

        this.textContent = "Light Mode";

    } else {

        this.textContent = "Dark Mode";

    }

});