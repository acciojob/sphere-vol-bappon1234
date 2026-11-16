function volume_sphere() {
    //Write your code here
	if(event){
		event.preventDefault();
	}
	const radiusInput = document.getElementById("radius").value;
	const volumeField = document.getElementById("volume");

	const radius = Number(radiusInput);
	if(radiusInput.trim()=== "" || isNaN(radius) || radius < 0){
		volumeField.value = "NaN";
		return false;
	}
   const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  volumeField.value = volume.toFixed(4);

  return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
