const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");

let lastChecked;

function handleCheck(e) {
    // Check if shift key is down
    // AND check that they are checking it (not unchecking)
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween === !inBetween;
                console.log("Starting to check them inbetween!");
            }
        })
    }
    
    lastChecked = this;
} 

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));