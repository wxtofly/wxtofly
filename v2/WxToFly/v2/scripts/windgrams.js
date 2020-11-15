$(document).ready(function(){
	
	var siteOnClick = false;


	var root = { 
		parent: null, 
		states: [],
		activeNode: null
	};
	
	var favorites = { };
	
	function add_favorites(site) {
		if ((!favorites[site.name]) || favorites[site.name] == 0) {
			if (localStorage.favorites) {
				localStorage.favorites += ";" + site.name;
			} else {
				localStorage.favorites = site.name;
			}
			root.favorites.sites.push(site);
		}
		favorites[site.name] = 1;
	}
	
	function remove_favorites(site) {
		if (favorites[site.name]) {
			favorites[site.name] = 0;
			localStorage.favorites = null;
			for (key in favorites) {
				if (favorites.hasOwnProperty(key) && favorites[key] == 1) {
					if (localStorage.favorites) {
						localStorage.favorites += ";" + key;
					} else {
						localStorage.favorites = key;
					}
				}
			}
			
			var sites = [];
			for (var i = 0; i < root.favorites.sites.length; i++) {
				if (root.favorites.sites[i].name != site.name) {
					sites.push(root.favorites.sites[i]);
				}
			}
			root.favorites.sites = sites;
		}
	}
	
	function load_favorites() {
		if (localStorage.favorites) {
			var favs = localStorage.favorites.split(";");
			for (var i = 0; i < favs.length; i++) {
				favorites[favs[i]] = 1;
			}
		}
	}
	
	load_favorites();
	
	function load_windgrams(site) {
		
		$('#covid-alert').hide();
	
		if (! site) return;
		
		$('#covid-alert div').hide();
		var showAlert = false;
		var divs = $('#covid-alert div[data-state="' + site.state + '"]');
		showAlert = showAlert || divs.length > 0;
		divs.show();
		
		divs = $('#covid-alert div[data-area="' + site.area + '"]');
		showAlert = showAlert || divs.length > 0;
		divs.show();
		
		if (showAlert){
			$('#covid-alert').show();
		}
		
		//set menu
		$('.link_explorer').attr('href', '/v2/explorer.html#' + site.name);
		
		if (site.us)
		{
			$('.link_nws').attr('href', "http://forecast.weather.gov/MapClick.php?lat=" + site.lat + "&lon=" + site.lon + "&unit=0&lg=english&FcstType=graphical");
			$('.link_nws').parent().removeClass();
		}
		else
		{
			$('.link_nws').parent().addClass("disabled");
		}
		$("#windgramTitle").text(site.name.replace(/_/g, " "));
		
		$("#windgrams").show();
		
		var fcstDate = new Date();
		$("#imgWindgram1").show();
		$("#imgWindgram1").attr( "src", "http://wxtofly.net/windgrams/" + fcstDate.format("UTC:yyyy-mm-dd") + "_" + site.name + "_windgram.png?" + (new Date().getTime()) );
		$("#imgWindgram1").on("error", function () {
			$(this).hide();
		});
		fcstDate.setDate(fcstDate.getDate() + 1);
		$("#imgWindgram2").show();
		$("#imgWindgram2").attr( "src", "http://wxtofly.net/windgrams/" + fcstDate.format("UTC:yyyy-mm-dd") + "_" + site.name + "_windgram.png?" + (new Date().getTime()));
		$("#imgWindgram2").on("error", function () {
			$(this).hide();
		});
		fcstDate.setDate(fcstDate.getDate() + 1);
		$("#imgWindgram3").show();
		$("#imgWindgram3").attr( "src", "http://wxtofly.net/windgrams/" + fcstDate.format("UTC:yyyy-mm-dd") + "_" + site.name + "_windgram.png?" + (new Date().getTime()) );
		$("#imgWindgram3").on("error", function () {
			$(this).hide();
		});
		fcstDate.setDate(fcstDate.getDate() + 1);
		$("#imgWindgram4").show();
		$("#imgWindgram4").attr( "src", "http://wxtofly.net/windgrams/" + fcstDate.format("UTC:yyyy-mm-dd") + "_" + site.name + "_windgram.png?" + (new Date().getTime()) );
		$("#imgWindgram4").on("error", function () {
			$(this).hide();
		});
		
		fcstDate = new Date();
		if (location.hostname == "localhost") {
			$.getJSON('/blipspots/2017-03-26_blipspot_Tiger.json', function(data) {
				load_blipspot($("#table_blipspot1"), data);
				$('#windgram1').on('click', function() {
					$('#windgram1').hide();
					$('#blipspot1').show();
				});
				$('#blipspot1').on('click', function() {
					$('#windgram1').show();
					$('#blipspot1').hide();
				});
			});
		}
		else {
		$.getJSON('/blipspots/' + fcstDate.format("UTC:yyyy-mm-dd") + '_blipspot_' + site.name + '.json', function(data) {
			load_blipspot($("#table_blipspot1"), data);
			$('#windgram1').on('click', function() {
				$('#windgram1').hide();
				$('#blipspot1').show();
			});
			$('#blipspot1').on('click', function() {
				$('#windgram1').show();
				$('#blipspot1').hide();
			});
		});
		}
		fcstDate.setDate(fcstDate.getDate() + 1);
		$.getJSON('/blipspots/' + fcstDate.format("UTC:yyyy-mm-dd") + '_blipspot_' + site.name + '.json', function(data) {
			load_blipspot($("#table_blipspot2"), data);
			$('#windgram2').on('click', function() {
				$('#windgram2').hide();
				$('#blipspot2').show();
			});
			$('#blipspot2').on('click', function() {
				$('#windgram2').show();
				$('#blipspot2').hide();
			});
		});
		fcstDate.setDate(fcstDate.getDate() + 1);
		$.getJSON('/blipspots/' + fcstDate.format("UTC:yyyy-mm-dd") + '_blipspot_' + site.name + '.json', function(data) {
			load_blipspot($("#table_blipspot3"), data);
			$('#windgram3').on('click', function() {
				$('#windgram3').hide();
				$('#blipspot3').show();
			});
			$('#blipspot3').on('click', function() {
				$('#windgram3').show();
				$('#blipspot3').hide();
			});
		});
		fcstDate.setDate(fcstDate.getDate() + 1);
		$.getJSON('/blipspots/' + fcstDate.format("UTC:yyyy-mm-dd") + '_blipspot_' + site.name + '.json', function(data) {
			load_blipspot($("#table_blipspot4"), data);
			$('#windgram4').on('click', function() {
				$('#windgram4').hide();
				$('#blipspot4').show();
			});
			$('#blipspot4').on('click', function() {
				$('#windgram4').show();
				$('#blipspot4').hide();
			});
		});
		
	}
	
	function init_sidebar() {
		
		var sidebar_items = $('#sidebar_items')
		sidebar_items.html("");
		
		if (root.activeNode != root.favorites) {
			var item = $('<a href="#" class="list-group-item favorites"><span class="glyphicon glyphicon-star"></span> Favorites<span class="pull-right glyphicon glyphicon-chevron-right"></span></a>');
			sidebar_items.append(item);
			item.on('click', function() {
				root.favorites.parent = root.activeNode;
				root.activeNode = root.favorites;
				init_sidebar();
			});
		}
		
		if (root.activeNode == root) {
			for (var i = 0; i < root.states.length; i++) {
				var item = $('<a href="#" class="list-group-item active">' + root.states[i].name + ' <span class="pull-right glyphicon glyphicon-chevron-right"></span></a>');
				sidebar_items.append(item);
				item.on('click', (function(node) {
					return function() {
						root.activeNode = node;
						init_sidebar();
					};
				})(root.states[i]));
			}
		}
		else {
			if (root.activeNode == root.favorites) {
				root.favorites.sites.sort(function(a,b) {
					if (a.name < b.name)
						return -1;
					if (a.name > b.name)
						return 1;
					return 0;
				});
			}
			
			var item = $('<a href="#" class="list-group-item ' + ((root.activeNode == root.favorites)?'favorites':'active') + '"><span class="glyphicon glyphicon-chevron-left"></span> ' + root.activeNode.name + '</a>');
			sidebar_items.append(item);
			item.on('click', function() {
				root.activeNode = root.activeNode.parent;
				init_sidebar();
			});
			
			for (var i = 0; (root.activeNode.sites) && (i < root.activeNode.sites.length); i++) {
				var item = $('<a href="#' + root.activeNode.sites[i].name + '" class="list-group-item">' + root.activeNode.sites[i].name.replace(/_/g, " ") + '</a>');
				
				var star = (favorites[root.activeNode.sites[i].name])?"glyphicon-star" : "glyphicon-star-empty";
				var fav = $('<span class="pull-right glyphicon ' + star + '"></span>');
				
				fav.on('click', (function(site) {
					return function(e) {
						if ( favorites[site.name] && (favorites[site.name] == 1)) {
							$(this).removeClass("glyphicon-star");
							$(this).addClass("glyphicon-star-empty");
							remove_favorites(site);
						}
						else {
							$(this).removeClass("glyphicon-star-empty");
							$(this).addClass("glyphicon-star");
							add_favorites(site);
						}
						if (root.activeNode == root.favorites) {
							init_sidebar();
						}
						e.stopPropagation();
						e.preventDefault();
					};
				})(root.activeNode.sites[i]));
				
				item.append(fav);
				sidebar_items.append(item);
				item.on('click', (function(site) {
					return function() {
						siteOnClick = true;
						$(this).parent().find(".active").removeClass("active");
						$(this).addClass("active");
						load_windgrams(site);
						$('[data-toggle="offcanvas"]').click();
						$('html,body').scrollTop(0);
					};
				})(root.activeNode.sites[i]));
				
				if (location.hash == ("#" + root.activeNode.sites[i].name)) {
					$(item).parent().find(".active").removeClass("active");
					$(item).addClass("active");
					load_windgrams(root.activeNode.sites[i]);
				}
			}
			
			for (var i = 0; (root.activeNode.areas) && i < (root.activeNode.areas.length); i++) {
				var item = $('<a href="#" class="list-group-item">' + root.activeNode.areas[i].name + ' <span class="pull-right glyphicon glyphicon-chevron-right"></span></a>');
				sidebar_items.append(item);
				item.on('click', (function(node) {
					return function() {
						root.activeNode = node;
						init_sidebar();
					};
				})(root.activeNode.areas[i]));
			}
		}
		
		if ($(".row-offcanvas").height() < $("#sidebar").height()) {
			$(".row-offcanvas").height($("#sidebar").height());
		}
	}
	
	$.getJSON('/v2/json/sites.json?20200831', function(sites) {
		
		root["favorites"] = { 
			name: "Favorites",
			parent: root,
			sites: []
		};

		
		for (var i = 0; i < sites.length; i++) {
			
			var state = sites[i]["State"];
			if (state == "") {
				continue;			
			}
			
			var stateNode = root[state];
			
			if ( ! stateNode) {
				stateNode = { 
					name: state,
					parent: root,
					sites: [],
					areas: []
				};
				root[state] = stateNode;
				root.states.push(stateNode);
			}
			
			var site = {
				name:sites[i]["Site"],
				us: (state != "British Columbia"),
				lat:sites[i]["Lat"],
				lon:sites[i]["Lon"],
				area: sites[i]["Area"],
				state: sites[i]["State"]
			};
			
			if (favorites[site.name]) {
				root.favorites.sites.push(site);
			}
			
			var area = sites[i]["Area"];
			if (area == "") {
				stateNode.sites.push(site);
			}
			else {
				var areaNode = stateNode[area];
				if ( ! areaNode) {
					areaNode = { 
					name: area,
						parent: stateNode, 
						sites: [] 
					};
					stateNode[area] = areaNode;
					stateNode.areas.push(areaNode);
				}
				areaNode.sites.push(site);
			}
			
			if (location.hash == ("#" + site.name)) {
				root.activeNode = areaNode;
				//load_windgrams(site);
			}
		}

		if (! root.activeNode) {
			root.activeNode = root;
		}
		init_sidebar();
	});

	$(window).on('hashchange', function() {
		if (siteOnClick) {
			siteOnClick = false;
		} else if (location.hash.length > 1) {
			//must find the containing node
			for (var i = 0; i < root.states.length; i++) {
				for (var j = 0; j < root.states[i].sites.length; j++) {
					if (root.states[i].sites[j].name == location.hash.substring(1)) {
						root.activeNode = root.states[i];
						init_sidebar();
						return;
					}
				}
				for (var j = 0; j < root.states[i].areas.length; j++) {
					for (var k = 0; k < root.states[i].areas[j].sites.length; k++) {
						if (root.states[i].areas[j].sites[k].name == location.hash.substring(1)) {
							root.activeNode = root.states[i].areas[j];
							init_sidebar();
							return;
						}
					}
				}
			}
		}
	});
	
	$('[data-toggle="offcanvas"]').click(function () {
		$('.row-offcanvas').toggleClass('active');
		if ($("#sidebar_togle").hasClass("glyphicon-chevron-right")) {
			$("#sidebar_togle").removeClass("glyphicon-chevron-right");
			$("#sidebar_togle").addClass("glyphicon-chevron-left");
		} else {
			$("#sidebar_togle").removeClass("glyphicon-chevron-left");
			$("#sidebar_togle").addClass("glyphicon-chevron-right");
		}		
	});
	
	$(".container-fluid").swipe( {
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
			if ($('.row-offcanvas').hasClass('active')) {
				$('.row-offcanvas').toggleClass('active');
				$("#sidebar_togle").removeClass("glyphicon-chevron-left");
				$("#sidebar_togle").addClass("glyphicon-chevron-right");
			}		
		},
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			if (!$('.row-offcanvas').hasClass('active')) {
				$('.row-offcanvas').toggleClass('active');
				$("#sidebar_togle").removeClass("glyphicon-chevron-right");
				$("#sidebar_togle").addClass("glyphicon-chevron-left");
			}		
		},
		excludedElements:$.fn.swipe.defaults.excludedElements+", #blipspot1, #blipspot2, #blipspot3, #blipspot4"
	});

	if (!location.hash) {
		$('[data-toggle="offcanvas"]').click();
	}
});
