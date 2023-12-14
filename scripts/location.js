 function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = position.coords.latitude + 
  "<br>"+ position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "36.1753824" + "<br>" + "-95.9847593"
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Your location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get your location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}