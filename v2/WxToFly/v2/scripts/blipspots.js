function appent_param_title(tr, name) {
	if (blipParams[name]) {
	tr.append('<td><div style="width:100%" data-toggle="popover" title="' +  blipParams[name]["title"] + 
		'" data-content="' + blipParams[name]["description"] + '">' 
		+ blipParams[name]["title"] + ((blipParams[name]["units"])?' (' + blipParams[name]["units"] + ')':'') + '</div></td>');
	} else {
		tr.append('<td>' + name + '</td>');
	}
}	

function appent_section_title(table, title, value_count) {
	var tr = $('<tr class="blipspot-section-header"></tr>');
	table.append(tr);
	tr.append('<td colspan="' + value_count + '">' + title + '</td>');
}

function append_data(tbody, blipData, name) {
	if (blipData[name]) {
		var tr = $("<tr/>");
		appent_param_title(tr, name)
		tbody.append(tr);
		for (var j = 0; j < blipData[name].length; j++) {
			tr.append('<td>' + blipData[name][j] + '</td>');
		}
	}
}

function wind_speed_to_color(value) {
	var spd = parseInt(value);
	if (isNaN(spd)) {
		return 'rgba(0,0,0,0)';
	} else {
		var transparency = 0;
		if (spd < 3)
			transparency = 0.1;
		else if (spd < 5)
			transparency = 0.2;
		else if (spd < 7)
			transparency = 0.3;
		else if (spd < 9)
			transparency = 0.4;
		else if (spd < 11)
			transparency = 0.5;
		else if (spd < 13)
			transparency = 0.6;
		else if (spd < 15)
			transparency = 0.6;
		else if (spd < 17)
			transparency = 0.7;
		else if (spd < 19)
			transparency = 0.8;
		else if (spd < 19)
			transparency = 0.9;
		else
			transparency = 1;
		
		return 'rgba(255,0,0,' + transparency + ')';
	}
}

function rain_to_color(value) {
	var acc = parseInt(value);
	if (isNaN(acc)) {
		return 'rgba(0,0,0,0)';
	} else {
		var transparency = 0;
		if (acc == 0)
			return 'rgba(0,0,0,0)';
		else if (acc < 2)
			transparency = 0.2;
		else if (acc < 3)
			transparency = 0.4;
		else if (acc < 4)
			transparency = 0.6;
		else if (acc < 5)
			transparency = 0.8;
		else
			transparency = 1;
		
		return 'rgba(0,204,0,' + transparency + ')';
	}
}

function clouds_to_color(value) {
	var pct = parseInt(value);
	if (isNaN(pct)) {
		return 'rgba(0,0,0,0)';
	} else {
		var transparency = pct / 100;
		return 'rgba(128, 128, 128,' + transparency + ')';
	}
}

function lift_to_color(value) {
	var lift = parseInt(value);
	if (isNaN(lift)) {
		return 'rgba(0,0,0,0)';
	} else {
		var transparency = 0;
		if (lift < 200)
			return 'rgba(0,0,0,0)';
		else if (lift < 1000)
			transparency = lift/1000;
		else
			transparency = 1;
		
		return 'rgba(255, 204, 0,' + transparency + ')';
	}
}

function height_to_color(value) {
	var height = parseInt(value);
	if (isNaN(height)) {
		return 'rgba(0,0,0,0)';
	} else {
		var transparency = 0;
		if (height < 500)
			return 'rgba(0,0,0,0)';
		else if (height < 5000)
			transparency = height/5000;
		else
			transparency = 1;
		
		return 'rgba(0, 153, 255,' + transparency + ')';
	}
}

function append_wind_speed_data(tbody, blipData, name) {
	if (blipData[name]) {
		var tr = $("<tr/>");
		appent_param_title(tr, name)
		tbody.append(tr);
		for (var j = 0; j < blipData[name].length; j++) {
			tr.append('<td style="background-color:' + wind_speed_to_color(blipData[name][j]) + '">' + blipData[name][j] + '</td>');
		}
	}
}

function append_height_data(tbody, blipData, name) {
	if (blipData[name]) {
		var tr = $("<tr/>");
		appent_param_title(tr, name)
		tbody.append(tr);
		for (var j = 0; j < blipData[name].length; j++) {
			tr.append('<td style="background-color:' + height_to_color(blipData[name][j]) + '">' + blipData[name][j] + '</td>');
		}
	}
}

function append_lift_data(tbody, blipData, name) {
	if (blipData[name]) {
		var tr = $("<tr/>");
		appent_param_title(tr, name)
		tbody.append(tr);
		for (var j = 0; j < blipData[name].length; j++) {
			tr.append('<td style="background-color:' + lift_to_color(blipData[name][j]) + '">' + blipData[name][j] + '</td>');
		}
	}
}

function append_rain_data(tbody, blipData, name) {
	if (blipData[name]) {
		var tr = $("<tr/>");
		appent_param_title(tr, name)
		tbody.append(tr);
		for (var j = 0; j < blipData[name].length; j++) {
			tr.append('<td style="background-color:' + rain_to_color(blipData[name][j]) + '">' + blipData[name][j] + '</td>');
		}
	}
}

function append_cloud_data(tbody, blipData, name) {
	if (blipData[name]) {
		var tr = $("<tr/>");
		appent_param_title(tr, name)
		tbody.append(tr);
		for (var j = 0; j < blipData[name].length; j++) {
			tr.append('<td style="background-color:' + clouds_to_color(blipData[name][j]) + '">' + blipData[name][j] + '</td>');
		}
	}
}

function append_wind_speed_dir_data(tbody, blipData, name, spd_name, dir_name) {
	if (blipData[dir_name] && blipData[spd_name]) {
		var tr = $("<tr/>");
		appent_param_title(tr, name)
		tbody.append(tr);
		for (var j = 0; j < blipData[dir_name].length; j++) {
			tr.append('<td style="background-color:' + wind_speed_to_color(blipData[spd_name][j]) + 
				'"><i class="fa fa-location-arrow wind-' + blipData[dir_name][j] + '-deg"></i>' + 
				'<br/>' + blipData[spd_name][j] + '</td>');
		}
	}
}

function append_time_row(tbody, blipData) {
	if (blipData["VALID.TIME"]) {
		var tr = $('<tr class="blipspot-time"></tr>');
		tbody.append(tr);
		tr.append('<td>Time</td>');
		
		for (var j = 0; j < blipData["VALID.TIME"].length; j++) {
			var time = blipData["VALID.TIME"][j];
			time = time.substring(0,2);// + ":" + time.substring(2,4);
			
			tr.append('<td>' + time + '</td>');
		}
	}
}

function load_blipspot(table, data) {
	
	var blipData = {};
	var value_count = 0;
	for (var i = 0; i < data.length; i++) {
		blipData[data[i]["name"]] = data[i]["values"];
		if (value_count == 0)
			value_count = data[i]["values"].length;
	}
		
	table.html("");
	var thead = $("<thead/>");
	var tbody = $("<tbody/>");
	
	//Wind
	appent_section_title(tbody, "Wind (knots)", value_count);
	
	append_time_row(tbody, blipData);
	append_wind_speed_data(tbody, blipData, "Sfc_Wind_Sp_Kt");
	append_wind_speed_dir_data(tbody, blipData, "10M_Wind", "10M_Wind_Sp_Kt", "10M_Wind_Dir");
	append_wind_speed_data(tbody, blipData, "Treetop_WSp_Kt");
	append_wind_speed_data(tbody, blipData, "Lev_Abv_WSp_Kt");
	append_wind_speed_dir_data(tbody, blipData, "Avg_BlWind", "Avg_BLWindSpd", "Avg_BlWindDir");
	append_wind_speed_dir_data(tbody, blipData, "BLTopWind", "BLTop_WdSp", "BLTopWDir");
	append_data(tbody, blipData, "Wind_Shear");
	append_data(tbody, blipData, "cm/s Converge");
	
	//Thermal
	appent_section_title(tbody, "Thermal", value_count);

	append_time_row(tbody, blipData);
	append_data(tbody, blipData, "Bouy/Shr_Ratio");
	append_lift_data(tbody, blipData, "W*");
	append_height_data(tbody, blipData, "MaxSoar_AGL");
	append_data(tbody, blipData, "MaxSoar1.1m/s");
	append_data(tbody, blipData, "MaxSoar_clds");
	append_data(tbody, blipData, "BL_Top_TI=0");
	append_data(tbody, blipData, "BL_Depth");
	append_data(tbody, blipData, "Hgt_Variab_");
	append_data(tbody, blipData, "CAPE_TSpoten");
	append_data(tbody, blipData, "Sfc_Heating");
	append_data(tbody, blipData, "msl_pressure");
	
	//Clouds & Moisture
	appent_section_title(tbody, "Clouds & Moisture", value_count);
	append_time_row(tbody, blipData);
	append_cloud_data(tbody, blipData, "BL_Cloud_%");
	append_rain_data(tbody, blipData, "1hr_rain_acc");
	append_data(tbody, blipData, "DewPt@2m");
	append_data(tbody, blipData, "CUbase_LCL");
	append_data(tbody, blipData, "ODpot_if_cu");
	append_data(tbody, blipData, "ODbase_allclds");
	append_data(tbody, blipData, "Temp@2m");

	table.append(thead);
	table.append(tbody);
	
	table.on('click', function(e) {
		$('[data-toggle=popover]').popover('hide');
	});
	
	$('[data-toggle="popover"]').popover(); 
	$('[data-toggle="popover"]').on('click', function(e) {
		$('[data-toggle=popover]').each(function () {
			if (!$(this).is(e.target)) {
				$(this).popover('hide');
			}
		});
		
		e.stopPropagation();
		e.preventDefault();
	});
}