// Foursquare API Info
const clientId = '5CJB2GX5BRPQ2TGABU3AABTWAKDVWX03XSAHATV3STVRVQJE';
const clientSecret = 'KP312B5NXPQWHMS25Z5JNFGJIZW0T4AEPOILEOIIQV5RWS5V';
 const url = 'https://api.foursquare.com/v2/venues/explore?near=';
   

// OpenWeather Info
const openWeatherKey = 'fsq31AwDBjFXu1RE+PVRh5CW5zJBow3HbCm474l/8Os07yw=';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues =  async () => {
 const city = $input.val(); 
 const urlToFetch =  `${url}${city}&client_id=${clientId}&client_secret=${clientSecret}&v=20230609`;
try {
  let response =  await fetch(urlToFetch);
  console.log(response)
  if(response.ok){
console.log(response)
  }else{
console.log("error occured")
  }
} catch (error) {
  console.log(error )
}
}

const getForecast = () => {

}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)