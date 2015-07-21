google.maps.event.addDomListener(window, 'load', init);

var map;

function init() {

	var mapOptions = {
		center: new google.maps.LatLng(40.714737,-74.187813),
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
		['New York', 40.7147, -74.1878]
	];

	infowindow = new google.maps.InfoWindow({
		content: "<div style='width: 130px; height: 60px'><b>Quipe</b><br/>2880 Broadway<br/> New York</div>"  //add your address
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