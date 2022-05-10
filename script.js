/*AVES NOMBRES Y WEAS JQUERY API*/
$.getJSON('https://aves.ninjas.cl/api/birds/76-buteo-albigula', 
    function(data) {
    var aveschilenas = data;
    $("<h3/>", {
        html: 'El Ave chilena del dia de hoy es el ' + aveschilenas.name.spanish + 
        '<br>' + 'y habita en ' + aveschilenas.map.title 
        + '<img src="'+ data.images.main+'" width="900">'  
    }).appendTo("#aves");}).fail(function() {
    console.log('Error al consumir la API!');
});