let count = 0;
function increment() {
    count++
    document.getElementById("count-el").innerHTML = count
}

function save() {
    console.log("save");
    document.getElementById("save-el").textContent += count + " - "
    document.getElementById("count-el").innerHTML = 0

}