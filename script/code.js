// call the function
document.getElementById('convert').addEventListener('click', function(){
    // get the value
    let hex = document.querySelector('[data-hexa]').value;

    // remove the hashtag
    let rgb = hex.replace("#", "");

    // separate the code into their respective colours
    let R = parseInt(rgb.substring(0, 2), 16);
    let G = parseInt(rgb.substring(2, 4), 16);
    let B = parseInt(rgb.substring(4, 6), 16);

    // display the output
    let output = document.querySelector('[data-output]');
    output.textContent = `rgb" ${R} ${G} ${B}`
});