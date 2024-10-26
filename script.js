let name = "Gracey";
let age = 19;
const handler = "@imjustagirl";
let course = "Ikaw Pa Rin Kahet Masaket";
let year = "2nd Year";
let motto = "If others can do it then let them do it."
const institution = "University of Science and Technology of Southern Philippines";

// Function to update card details

const updateCardDetails = () => {
    document.querySelector(".name").textContent = name;
    document.querySelector(".handler").textContent = handler;
    document.querySelector(".institution").textContent = institution;
    document.getElementById("age").textContent = age;
    document.getElementById("course").textContent = course; 
    document.getElementById("year").textContent = year;
    document.getElementById("motto").textContent = motto;
}

// Event listener for the button to update card details
document.getElementById("updateButton").addEventListener("click", () => {
    updateCardDetails();
    alert("Card details updated!");
})