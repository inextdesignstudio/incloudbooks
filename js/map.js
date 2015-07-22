google.maps.event.addDomListener(window, 'load', init);

var map;

function init() {

	var mapOptions = {
		center: new google.maps.LatLng(-37.87974,145.02301),
		zoom: 11,
		zoomControl: false,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		scaleControl: false,
		scrollwheel: false,
		streetViewControl: false,
		draggable : false,
		overviewMapControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}

	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var locations = [
		['Victoria', -37.87974, 145.02301]
	];

	infowindow = new google.maps.InfoWindow({
		content: "<div style='width: 200px; height: 80px'><b>Quipe</b><br/>242 Hawthorn Road, Caufield, Victoria, 3161 AU</div>"  //add your address
	});
	
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			icon: '',
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
		});
	}

	google.maps.event.addListener(marker, "click", function () {
		infowindow.open(map, marker);
	});

	infowindow.open(map, marker);

}