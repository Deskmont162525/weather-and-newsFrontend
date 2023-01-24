var latitud, longitud;
// URL final = https://api.forecast.io/forecast/46bd9a693017f982e2a66b0b52c5487e/-34.5875,-58.6725?lang=es&units=si
var endpoint = 'https://api.forecast.io/forecast/';
var key = '46bd9a693017f982e2a66b0b52c5487e';
var parametros = 'lang=es&units=si';

export function locate() {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        function(location) {
          // Location acquired
          console.log("location",location);
          latitud = location.coords.latitude;
          longitud = location.coords.longitude;
        //   clima();
        },
        function(error) {
          // Error
          // alert('Error locating you');
          console.log("Error locating you", error);
          latitud = -34.5875;
          longitud = -58.6725;
        //   clima();
        }
      );
    } else {
      /* geolocation IS NOT available */
      console.log('geolocation IS NOT available');
    }
  }

  function clima() {
    // jQuery ajax: https://api.jquery.com/jquery.ajax/
    $.ajax({
        method: 'GET',
        dataType: 'jsonp',
        url: endpoint + key + '/' + latitud + ',' + longitud + '?' + parametros,
        beforeSend: function(xhr) {
          // Podemos hacer algo antes
          $('.clima').text('Cargando...');
        }
      })
      .done(function(data) {
        // console.log( 'data', data );
        // console.log( 'longitud', data.longitude );
        // console.log( 'Clima', data.currently.summary );
        // console.log( 'Temperatura actual', data.currently.temperature );
        // console.log('Temp de Mañana', data.daily.data[0].temperatureMax );
        // console.log( 'Resumen semanal', data.daily.summary );
  
        var markup = '<div><h1>Temperatura actual: ' + data.currently.temperature + '°C </h1><p>Resumen de la semana: ' + data.daily.summary + '</p><p>Temperatura de mañana: ' + data.daily.data[1].temperatureMax + '°C </p></div>';
        // Aclaración: El objeto daily, que contiene un array data de días, comienza en el día actual. Osea que daily.data[0] es hoy, daily.data[1] es mañana, y así sucesivamente.
  
        $('.clima').html(markup);
      })
      .fail(function(data) {
        $('.clima').text('Error');
        console.log('Error', data);
      })
      .always(function(data) {
        console.log('Terminó');
      });
  }


export const  cadenaAleatoria = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}



export function mainDate() {
	let weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	let localDate = new Date()
	let day = localDate.getDate()
	let week =  weekArray[localDate.getDay()]
	let month = monthArray[localDate.getMonth()]
	let year = localDate.getFullYear()
	return `${week} ${day} ${month} ${year}`
}