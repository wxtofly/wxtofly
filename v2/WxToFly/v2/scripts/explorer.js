var grid = null;
var domains = null;
var map = null;
var rectGrid_d2 = null;
var rectGrid_w2 = null;
var domainAreas = null;

var infowindow = new google.maps.InfoWindow({
	content: "",
});
	
function update_loc(e) {
	var loc = $('#mapCanvas').find('#current_loc');
	if ( loc.length ) {
		loc.html(e.latLng.lat().toFixed(5) + " " + e.latLng.lng().toFixed(5))
	}
}

function show_loc(e) {
	infowindow.close();
	var html = "<b>Location: </b>" + e.latLng.lat().toFixed(5) + ", " + e.latLng.lng().toFixed(5);
	infowindow.setContent(html);
	infowindow.setPosition(e.latLng);
	infowindow.open(map); 
}
	
function show_grid_rect(lat, lon) {

	var gridCenter = new google.maps.LatLng(lat, lon);
	
	var gridNE = google.maps.geometry.spherical.computeOffset(gridCenter, 2828.427, 45);
	var gridSW = google.maps.geometry.spherical.computeOffset(gridCenter, 2828.427, 225);
	
	var bounds = new google.maps.LatLngBounds(gridSW, gridNE);
	rectGrid = new google.maps.Rectangle({
		map: map,
		bounds: bounds,
		strokeColor: 'red',
		strokeWidth: .5,
		fillOpacity: 0.3
	});	
}

	
function show_grid(site) {

	if (rectGrid_d2)
	{
		rectGrid_d2.setMap(null);
		rectGrid_d2 = null;
	}
	if (rectGrid_w2)
	{
		rectGrid_w2.setMap(null);
		rectGrid_w2 = null;
	}

	var gridCenter_d2 = new google.maps.LatLng(grid[site]["d2"]["latlon"]["lat"], grid[site]["d2"]["latlon"]["lon"]);
	
	var gridNE_d2 = google.maps.geometry.spherical.computeOffset(gridCenter_d2, 2828.427, 45);
	var gridSW_d2 = google.maps.geometry.spherical.computeOffset(gridCenter_d2, 2828.427, 225);
	
	var bounds_d2 = new google.maps.LatLngBounds(gridSW_d2, gridNE_d2);
	rectGrid_d2 = new google.maps.Rectangle({
		map: map,
		bounds: bounds_d2,
		strokeColor: 'green',
		strokeWeight: 1,
		fillOpacity: 0.3
	});	
	
	google.maps.event.addListener(rectGrid_d2, 'click', function(e) {
		infowindow.close();
		infowindow.setContent("<b>Forecast Area</b><br/>(4km resolution)");
		infowindow.setPosition(e.latLng);
		infowindow.open(map); 
	});
	
	if (grid[site]["w2"])
	{
		var gridCenter_w2 = new google.maps.LatLng(grid[site]["w2"]["latlon"]["lat"], grid[site]["w2"]["latlon"]["lon"]);
		
		var gridNE_w2 = google.maps.geometry.spherical.computeOffset(gridCenter_w2, 942.809, 45);
		var gridSW_w2 = google.maps.geometry.spherical.computeOffset(gridCenter_w2, 942.809, 225);
		
		var bounds_w2 = new google.maps.LatLngBounds(gridSW_w2, gridNE_w2);
		rectGrid_w2 = new google.maps.Rectangle({
			map: map,
			bounds: bounds_w2,
			strokeColor: 'blue',
			strokeWeight: .5,
			fillOpacity: 0.3
		});	
		
		google.maps.event.addListener(rectGrid_w2, 'click', function(e) {
			infowindow.close();
			infowindow.setContent("<b>Forecast Area</b><br/>(1.3km resolution)");
			infowindow.setPosition(e.latLng);
			infowindow.open(map); 
		});
	}

	//show_grid_rect(46.245, -123.254);
	//show_grid_rect(46.282, -123.203);
	//show_grid_rect(46.281, -123.255);
}

function hide_region() {
	if (domainAreas)
	{
		for (var i = 0; i < domainAreas.length; i++) {
			domainAreas[i].setMap(null);
		}
	}
}

function menu_region_onclick(domainIdx) {
	$(".dropdown-submenu").find("ul").toggle(false);
	var region = domains[domainIdx];
	draw_region(region);
}

function draw_region(region) {
	hide_region();
	
	$(mapCanvas).find("#hide_domain").parent().removeClass();

	domainAreas = [];
	var colors = ['yellow', 'green', 'blue', 'purple'];

	for (var i = 0; i < region["domains"].length; i++) {
	
		var domainCenter = new google.maps.LatLng(region["domains"][i]["CENT_LAT"], region["domains"][i]["CENT_LON"]);
		var res = region["domains"][i]["SPACE"];
		var nx = region["domains"][i]["NX"];
		var ny = region["domains"][i]["NY"];
		var dist_x = (res * nx) / 2;
		var dist_y = (res * ny) / 2;
		
		var domainNE = google.maps.geometry.spherical.computeOffset(domainCenter, dist_x, 90);
		domainNE = google.maps.geometry.spherical.computeOffset(domainNE, dist_y, 0);
		var domainSW = google.maps.geometry.spherical.computeOffset(domainCenter, dist_y, 180);
		domainSW = google.maps.geometry.spherical.computeOffset(domainSW, dist_x, 270);
		
		var bounds = new google.maps.LatLngBounds(domainSW, domainNE);

		rectDomain = new google.maps.Rectangle({
			map: map,
			bounds: bounds,
			strokeColor: colors[i],
			strokeWeight: .5,
			fillOpacity: 0.3
		});	

		domainAreas.push(rectDomain);
		
		google.maps.event.addListener(rectDomain, 'click', (function (regionName, domain) {
		
			return function(e) {
				infowindow.close();
				var html = "<b>Region: </b>" + regionName;
				html += '<br/><b>Domain: </b>' + domain["domain"];
				html += '<br/><b>Center: </b>' + domain["CENT_LAT"] + ',' + domain["CENT_LON"];
				html += '<br/><b>Grid points: </b>' + domain["NX"] + 'x' + domain["NY"];
				html += '<br/><b>Resolution: </b>' + domain["SPACE"] / 1000 + 'km';
				infowindow.setContent(html);
				infowindow.setPosition(e.latLng);
				infowindow.open(map); 
			};
		})(region["region"], region["domains"][i]));
		
		google.maps.event.addListener(rectDomain, 'mousemove', function(e){
			update_loc(e);
		});
		google.maps.event.addListener(rectDomain, 'rightclick', function(e){
			show_loc(e);
		});
	}
}

function set_menu(site, state, latLng) {
	$('.link_windgrams').attr('href', '/v2/windgrams.html#' + site);
	$('.dropdown-header').text(site.replace(/_/g, " "));
	
	if (state != "British Columbia")
	{
		$('.link_nws').attr('href', "http://forecast.weather.gov/MapClick.php?lat=" + latLng.lat() + "&lon=" + latLng.lng() + "&unit=0&lg=english&FcstType=graphical");
		$('.link_nws').parent().removeClass();
	}
	else
	{
		$('.link_nws').parent().addClass("disabled");
	}
}

$(document).ready(function(){
	
	$.getJSON('/v2/json/sites.json', function(sites) {
	
		var fcstDate = new Date();
		var fcstDateUTC = fcstDate.format("UTC:yyyy-mm-dd");
	
		var mapOptions = {
			center : new google.maps.LatLng(45.60262, -119.34486),
			zoom : 7,
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			streetViewControl: false,
			fullscreenControl: false,
			mapTypeControl: true,
			mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_RIGHT
			},
		};
		
		map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
		
		google.maps.event.addListener(map,'click', function() {
				infowindow.close();
			});
		
		for (var i = 0; i < sites.length; i++) {
			
			var siteLoc = {lat: parseFloat(sites[i]["Lat"]), lng: parseFloat(sites[i]["Lon"])};
			
			var marker = new google.maps.Marker({
				position: siteLoc,
				map: map,
				title: sites[i]["Site"],
			});

			marker.siteName = sites[i]["Site"];
			marker.siteState = sites[i]["State"];
			marker.html = '<div>'+
				'<h4>' + sites[i]["Site"].replace(/_/g, " ") + '</h4>'+
				'<div>' +
				'<b>Lat/Lon: </b>' + sites[i]["Lat"] + ', ' + sites[i]["Lon"] +
				'</div>'+
				'<p>' +
				'<img data-toggle="modal" data-target="#myModal" style="width:250px" src="http://wxtofly.net/windgrams/' + fcstDateUTC + '_' + sites[i]["Site"] + '_windgram.png"></img>' + 
				'<br/>' +
				'(Click on image for all available windgrams)';
			marker.html += '</div>';
				
			google.maps.event.addListener(marker,'click', (function(map, marker, infowindow){ 
				return function() {
					
					infowindow.setContent(marker.html);
					infowindow.open(map, marker);

					location.hash = marker.siteName;
					set_menu(marker.siteName, marker.siteState, marker.position);
					
					$("#modalTitle").text(marker.siteName.replace(/_/g, " "));
					var fcstDate = new Date();
					$("#modalWindgram1").attr( "src", "http://wxtofly.net/windgrams/" + fcstDate.format("UTC:yyyy-mm-dd") + "_" + marker.siteName + "_windgram.png" );
					$("#modalWindgram1").on("error", function () {
						$(this).parent().html('');
					});
					fcstDate.setDate(fcstDate.getDate() + 1);
					$("#modalWindgram2").attr( "src", "http://wxtofly.net/windgrams/" + fcstDate.format("UTC:yyyy-mm-dd") + "_" + marker.siteName + "_windgram.png" );
					$("#modalWindgram2").on("error", function () {
						$(this).parent().html('');
					});
					fcstDate.setDate(fcstDate.getDate() + 1);
					$("#modalWindgram3").attr( "src", "http://wxtofly.net/windgrams/" + fcstDate.format("UTC:yyyy-mm-dd") + "_" + marker.siteName + "_windgram.png" );
					$("#modalWindgram3").on("error", function () {
						$(this).parent().html('');
					});
					fcstDate.setDate(fcstDate.getDate() + 1);
					$("#modalWindgram4").attr( "src", "http://wxtofly.net/windgrams/" + fcstDate.format("UTC:yyyy-mm-dd") + "_" + marker.siteName + "_windgram.png" );
					$("#modalWindgram4").on("error", function () {
						$(this).parent().html('');
					});
					
					show_grid(marker.siteName);
					
				};
			})(map, marker, infowindow));			
			
			if (location.hash == ("#" + sites[i]["Site"])) {
				map.setCenter(siteLoc);
				map.setZoom(10);
				
				set_menu(marker.siteName, marker.siteState, marker.position);
			}
		}
		
		$("#mapCanvas").height($("body").height());
		$("#mapCanvas").width($("body").width());
		
		var legend = document.createElement('div');
		legend.innerHTML = $('#legend_container').html();
		map.controls[google.maps.ControlPosition.BOTTOM].push(legend);
		
		$.getJSON('/v2/json/grid.json', function(data) {
			grid = data;
		});
		
		google.maps.event.addListenerOnce(map, 'idle', function(){
			
			$('.button-checkbox').each(function () {

				// Settings
				var $widget = $(this),
					$button = $widget.find('button'),
					$checkbox = $widget.find('input:checkbox'),
					color = $button.data('color'),
					settings = {
						on: {
							icon: 'glyphicon glyphicon-check'
						},
						off: {
							icon: 'glyphicon glyphicon-unchecked'
						}
					};

				// Event Handlers
				$button.on('click', function () {
					$checkbox.prop('checked', !$checkbox.is(':checked'));
					$checkbox.triggerHandler('change');
					updateDisplay();
				});
				$checkbox.on('change', function () {
					updateDisplay();
				});

				// Actions
				function updateDisplay() {
					var isChecked = $checkbox.is(':checked');

					// Set the button's state
					$button.data('state', (isChecked) ? "on" : "off");

					// Set the button's icon
					$button.find('.state-icon')
						.removeClass()
						.addClass('state-icon ' + settings[$button.data('state')].icon);

					// Update the button's color
					if (isChecked) {
						$button
							.removeClass('btn-default')
							.addClass('btn-' + color + ' active');
							addAirspace(map);
					}
					else {
						$button
							.removeClass('btn-' + color + ' active')
							.addClass('btn-default');
							removeAirspace();
					}
				}

				// Initialization
				function init() {

					updateDisplay();

					// Inject the icon if applicable
					if ($button.find('.state-icon').length == 0) {
						$button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
					}
				}
				init();
			});
			
			// do something only the first time the map is loaded
			$.getJSON('/v2/json/domains.json', function(data) {
				domains = data;
				var ul = $('#domains');
				$('#domains').find("div.dropdown").find("a.menu-item").on("click", function(e){
					$(".dropdown-submenu").find("ul").toggle(false);
				});
				
				for (var i = 0; i < domains.length; i++) {
				
					var li = $("<li/>");
					var a = $('<a tabindex="-1" href="#" onclick="menu_region_onclick(' + i + ')">' + domains[i]["region"] + '</a>');
					
					li.append(a);
					ul.append(li);
				}
				
				ul.append('<li class="divider"></li>');
				var hide = $('<a id="hide_domain" href="#">Hide</a>');
				ul.append($('<li class="disabled"></li>').append(hide));
				
				// Create the menu control
				var menuButton = document.createElement('div');
				menuButton.style.padding = "10px";
				menuButton.innerHTML = $('#menu_container').html();
				$(menuButton).find(".test").on("click", function(e){
					$(this).next('ul').toggle();
					e.stopPropagation();
					e.preventDefault();
				});
				
				$(menuButton).find("#hide_domain").on("click", function (e) {
					$(".dropdown-submenu").find("ul").toggle(false);
					hide_region();
					$(this).parent().addClass("disabled");
				});				
				
				menuButton.index = 1;
				map.controls[google.maps.ControlPosition.LEFT_TOP].push(menuButton);
				
			});
		});
		
		google.maps.event.addListener(map, 'mousemove', function(e){
			update_loc(e);
		});

		google.maps.event.addListener(map, 'rightclick', function(e){
			show_loc(e);
		});

		//addAirspace(map);
	});
});
