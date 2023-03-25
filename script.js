
let getLocationButton = document.getElementById('getLocationButton');
let removeLocationButton = document.getElementById('removeLocationButton');
let frame = document.getElementById('map');


getLocationButton.addEventListener('click', getLocation);
removeLocationButton.addEventListener('click', clear);


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        frame.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    localStorage.setItem("Lat:", position.coords.latitude)
    localStorage.setItem("Long:", position.coords.longitude)
    console.log(position.coords.latitude, position.coords.longitude);
    getLocationButton.disabled = true;

    frame.innerHTML = `
   
   <iframe
  src="https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&z=15&output=embed"
  width="50%"
  height="270"
  frameborder="0"
  style="border:0"
></iframe>`

}

// Add event listener to "Remove Location" button
removeLocationButton.addEventListener('click', () => {
    localStorage.removeItem('lat');
    localStorage.removeItem('long');
    getLocationButton.disabled = false;
    frame.innerHTML = '';

});

function clear() {

    localStorage.removeItem("Lat:")
    localStorage.removeItem("Long:")
}