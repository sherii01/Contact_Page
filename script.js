alert("YOU ARE VISITING A LEARNER's WEBSITE");



const form = document.getElementById("contactform");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = form.elements["name"].value;
    const gender = form.elements["gender"].value;

    alert("Thank you " + name + " for your precious time!");
});

