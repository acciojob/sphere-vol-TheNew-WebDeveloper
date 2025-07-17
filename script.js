function volume_sphere() {
    //Write your code here
	let rad = document.getElementById("radius").value;
    if(rad < 0) {
        document.getElementById("volume").innerHTML = NaN;
    }
    else {
        let vol = (4/3)*Math.PI*rad*rad*rad;
        let fixed = parseFloat(vol.toFixed(4));
        document.getElementById("volume").innerHTML = fixed;
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
