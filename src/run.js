let runDialog = document.querySelector(".runDialog");
let runInputField = document.getElementById("runInputField");
// making the run dialog appear on pressing window + r
document.body.addEventListener("keydown", event => {
    if (event.metaKey && (event.key == "r" || event.key == "Ri")) {
        runDialog.style.display = "block";
        runInputField.focus();
        runInputField.value = null;
    }
    // enabling the ok button if the program is available

})
runInputField.addEventListener("keyup", event => {
    console.log(runInputField.value);
    if (searchPrograms(runInputField.value)) {
        document.getElementById("runOkBtn").classList.remove("disabledButton")
    } else {
        document.getElementById("runOkBtn").classList.add("disabledButton")
    }
    // execute the program if user press the enter button
    if (event.key == "Enter") {
        if (searchPrograms(runInputField.value)) {
            executeProgram();
        } else {
            alert("no program exist");
        }
    }
    // if escape is pressed remove the window
    if (event.key == "Escape") {
        runDialog.style.display = "none";
    }

});

let allPrograms = ["winver", "powershell"];

function searchPrograms(givenProgram) {
    if (allPrograms.includes(givenProgram)) {
        return true;
    } else {
        return false;
    }
}

function executeProgram() {
    console.log("executing")
    let win1 = new Window("winver", "black", "white", "src/icons/runicon.png");
    win1.createWindow();

}
// let win1 = new Window("winver", "black", "white", "src/icons/runicon.png");
// win1.createWindow();
// This js file is for managing all windows
// Accessing required elements
let windowCrossers = document.getElementsByClassName("windowCrosser");
Array.from(windowCrossers).forEach(item => {
    item.addEventListener("click", event => {
        let windows = event.target.parentNode.parentNode.parentNode;
        console.log(windows);
        if (windows.classList.contains("window")) {
            windows.style.display = "none";
        } else {
            console.log("use class 'windows' in your window and it will be closed");
        }
    })
})