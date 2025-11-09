let sub = document.getElementById("one");
let res = document.getElementById("result");
let g = document.getElementById("image");

sub.onclick = function() {
    let move = document.getElementById("dice").value;  // get input each time
    let arr = [];
    let image = [];

    for (let i = 0; i < move; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        arr.push(value);
        image.push(`<img src="dice_roller/${value}.png" alt="${value}" width="50" height="50">`);
    }

    res.textContent = `You rolled: ${arr.join(", ")}`;
    g.innerHTML = image.join(" ");
}
