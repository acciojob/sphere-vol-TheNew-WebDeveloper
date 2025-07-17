function fun() {
    let rad = document.getElementById("radius").value;
    if(rad < 0) {
        document.getElementById("volume").value = NaN;
    }
    else {
        let vol = (4/3)*Math.PI*rad*rad*rad;
        let fixed = parseFloat(vol.toFixed(4));
        document.getElementById("volume").value = fixed;
    }
}

document.getElementById("submit").addEventListener("click", fun);