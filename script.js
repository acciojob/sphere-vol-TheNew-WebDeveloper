function volume_sphere(event) {
    //Write your code here
    event.preventDefault();
	let rad = document.getElementById("radius").value;
    console.log(rad);
    
    if(rad < 0) {
        document.getElementById("volume").innerHTML = NaN;
    }
    else {
        let vol = (4/3)*Math.PI*rad*rad*rad;
        console.log(vol);
        
        let fixed = parseFloat(vol.toFixed(4));
        console.log(fixed);
        
        document.getElementById("volume").value = fixed;
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
