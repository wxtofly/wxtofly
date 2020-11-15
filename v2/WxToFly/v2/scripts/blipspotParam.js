var blipParams = {
	"VALID.TIME": { 
		"title": "Local",
		"description": "Time of day" 
		},
	"ForecastPd": { 
		"title": "Forecast Period",
		"description": "Forecast Period" 
		},
	//tenmwinddir
	"10M_Wind_Dir": { 
		"title": "10m Wind Direction",
		"description": "The direction of the wind at 10m above the ground"
		},
	//tenmwindspd
	"10M_Wind_Sp_Kt": { 
		"title": "10m Wind Direction",
		//"units": "knots",
		"description": "The speed of the wind at 10m above the ground"
		},
	//tenmwinddir+tenmwindspd
	"10M_Wind": { 
		"title": "10m",
		//"units": "knots",
		"description": "The speed and direction of the wind at 10m above the ground"
		},
	//sfcwind0spd
	"Sfc_Wind_Sp_Kt": { 
		"title": "Surface",
		//"units": "knots",
		"description": "The speed of the wind at the lowest available level above the ground" 
		},
	//sfcwindspd
	"Treetop_WSp_Kt": { 
		"title": "Tree-top Level",
		//"units": "knots",
		"description": "The speed of the wind at the next level above 10M above the ground, typically around 25m" 
		},
	//sfcwind2spd
	"Lev_Abv_WSp_Kt": { 
		"title": "Level above tree-top",
		//"units": "knots",
		"description": "The speed of the wind at the next level above the tree-top level, typically around 100m above ground" 
		},
	//bltopwindspd
	"BLTop_WdSp": { 
		"title": "",
		//"units": "knots",
		"description": "The speed of the wind at the top of the BL" 
		},
	//bltopwinddir
	"BLTopWDir": { 
		"title": "",
		//"units": "knots",
		"description": "The direction of the wind at the top of the BL" 
		},
	//bltopwinddir+bltopwindspd
	"BLTopWind": { 
		"title": "Boundary Layer Top",
		//"units": "knots",
		"description": "The speed and direction of the wind at the top of the Boundary Layer" 
		},
	//blwindspd
	"Avg_BLWindSpd": { 
		"title": "",
		//"units": "knots",
		"description": "The speed of the vector-averaged wind in the Boundary Layer" 
		},
	//blwinddir
	"Avg_BlWindDir": { 
		"title": "",
		//"units": "knots",
		"description": "The direction of the vector-averaged wind in the Boundary Layer" 
		},
	//blwinddir+blwindspd
	"Avg_BlWind": { 
		"title": "Boundary Layer Average",
		//"units": "knots",
		"description": "The speed and direction of the vector-averaged wind in the Boundary Layer" 
		},
	//blwindshear
	"Wind_Shear": { 
		"title": "Wind Shear",
		//"units": "",
		"description": "The vertical change in wind through the BL, specifically the magnitude of the vector wind difference between the top and bottom of the BL. Note that this represents vertical wind shear and does not indicate so-called 'shear lines' (which are horizontal changes of wind speed/direction)" 
		},
	//wstar
	"W*": { 
		"title": "Expected Thermal Updraft Velocity",
		"units": "ft/min",
		"description": "Average dry thermal updraft strength near mid-BL height. Subtract glider descent rate to get average vario reading for cloudless thermals. Updraft strengths will be stronger than this forecast if convective clouds are present, since cloud condensation adds buoyancy aloft (i.e. this neglects cloudsuck). W* depends upon both the surface heating and the BL depth" 
		},
	//hglider
	"MaxSoar_clds": { 
		"title": "Max Soar [Cloud]",
		"units": "ft",
		"description": "This is the maximum soaring altitude expected when cumulus clouds are present" 
		},
	//hwcrit 
	"MaxSoar1.1m/s": { 
		"title": "Max Soar [1.1m/s]",
		"units": "ft",
		"description": "Maximum Soaring Altitude ASL with a 1.1m/s (225fpm) sink rate. This parameter estimates the height at which the average dry updraft strength drops below 225 fpm and is expected to give better quantitative numbers for the maximum cloudless thermalling height than the BL Top height forecast, especially when mixing results from vertical wind shear rather than thermals. (Note: the present assumptions tend to underpredict the max. thermalling height for dry consitions.) In the presence of clouds the maximum thermalling height may instead be limited by the cloud base. Being for dry thermals, this parameter omits the effect of cloudsuck" 
		},
	//dwcrit 
	"MaxSoar_AGL": { 
		"title": "Max Soar [AGL]",
		"units": "ft",
		"description": "Maximum Soaring Altitude AGL with a 1.1m/s (225fpm) sink rate" 
		},
	//hbl 
	"BL_Top_TI=0": { 
		"title": "Boundary Layer Top [TI=0]",
		"units": "ft",
		"description": "Height of the top of the mixing layer, which for thermal convection is the average top of a dry thermal. Over flat terrain, maximum thermalling heights will be lower due to the glider descent rate and other factors. In the presence of clouds (which release additional buoyancy aloft, creating cloudsuck) the updraft top will be above this forecast, but the maximum thermalling height will then be limited by the cloud base. Further, when the mixing results from shear turbulence rather than thermal mixing this parameter is not useful for glider flying. NB: this BL Top is not the height where the Thermal Index (TI) is zero, which is a criteria used by many simple determinations of the BL top - instead, the RASP BL Top uses a more sophisticated BL Top criteria based on turbulent fluxes" 
		},
	//dbl
	"BL_Depth": { 
		"title": "Boundary Layer Depth",
		"units": "ft",
		"description": "Depth of the layer mixed by thermals or (vertical) wind shear. This parameter can be useful in determining which flight direction allows better thermalling conditions when average surface elevations vary greatly in differing directions. (But the same cautions mentioned under Height of BL Top also apply.) It is also an important determinant of thermals strength (as is the Surface Heating)" 
		},
	//bltopvariab 
	"Hgt_Variab_": { 
		"title": "Boundary Layer Top Variability",
		"units": "ft",
		"description": "This parameter estimates the uncertainty (variability) of the BL Top height prediction which can result from meteorological variations. Specifically, it gives the expected increase of a BL Top height based on a Thermal Index (TI) = 0 criteria should the actual surface temperature be 4 °F warmer than forecast. Larger values indicate greater uncertainty/variability and thus better thermalling over local 'hot spots' or small-scale topography not resolved by the model. But larger values also indicate greater sensitivity to error in the predicted surface temperature, so actual conditions have a greater likelihood of differing from those predicted. Small values often result from the presence of a stable (inversion) layer capping and limiting thermal growth. This parameter is most easily utilized through relative values, i.e. by first determining a 'typical' value for a location and subsequently noting whether predictions for a given day are for more/less uncertainty than is typical" 
		},
	//bsratio
	"Bouy/Shr_Ratio": { 
		"title": "Bouyancy/Shear Ratio",
		//"units": "",
		"description": "Dry thermals may be broken up by vertical wind shear (i.e. wind changing with height) and unworkable if B/S ratio is 5 or less. [Though hang-gliders can soar with smaller B/S values than can sailplanes.] If convective clouds are present, the actual B/S ratio will be larger than calculated here due to the neglect of 'cloudsuck'" 
		},
	//cape
	"CAPE_TSpoten": { 
		"title": "CAPE",
		"units": "J/kg",
		"description": "Convective Available Potential Energy indicates the atmospheric stability affecting deep convective cloud formation above the BL. A higher value indicates greater potential instability, larger updraft velocities within deep convective clouds, and greater potential for thunderstorm development (since a trigger is needed to release that potential). Locations where both convergence and CAPE values are high can be subject to explosive thunderstorm development" 
		},
	//sfcshf
	"Sfc_Heating": { 
		"title": "Surface Heating",
		"units": "W/m2",
		"description": "Heat transferred into the atmosphere due to solar heating of the ground, creating thermals. This parameter is an important determinant of thermals strength (as is the BL depth)" 
		},
	//mslpress
	"msl_pressure": { 
		"title": "MSL Pressure",
		"units": "mm/hr",
		"description": "Barometric Pressure adjusted to mean sea level measured in millibars aka hpa" 
		},
	//blcloudpct
	"BL_Cloud_%": { 
		"title": "Cloud Cover [BL]",
		"units": "%",
		"description": "Percentage cloud cover in the Boundary Layer. This parameter provides an additional means of evaluating the formation of clouds within the BL and might be used either in conjunction with or instead of the other cloud prediction parameters. It assumes a very simple relationship between cloud cover percentage and the maximum relative humidity within the BL. The cloud base height is not predicted, but is expected to be below the BL Top height." 
		},
	//rain1
	"1hr_rain_acc": { 
		"title": "Rain Accumulation",
		"units": "mm",
		"description": "Rain accumulated over the last hour." 
		},
	//blcwbase
	"BL_CW_Base": { 
		"title": "Explicit Cloudbase [BL]",
		"units": "ft",
		"description": "The cloud base of extensive clouds based on model-predicted formation of cloud water, giving the lowest height at which the predicted cloud water density is above a criterion value within the BL." 
		},
	//sfcdewpt
	"DewPt@2m": { 
		"title": "Surface Dew Point",
		"units": "F",
		"description": "The dew point temperature at a height of 2m above ground level." 
		},
	//zsfclcl 
	"CUbase_LCL": { 
		"title": "CU Lifted Condensation Level",
		"units": "ft",
		"description": "This height estimates the cloudbase for small, non-extensive 'puffy' clouds in the BL, if such exist. The surface LCL (Lifting Condensation Level) is the level to which humid air must ascend before it cools enough to reach a dew point temperature based on the surface mixing ratio and is therefore relevant only to small clouds. This should be considered a minimum possible cloudbase." 
		},
	//zblcldif
	"ODpot_if_cu": { 
		"title": "OD Potential [if CU]",
		"units": "ft",
		"description": "Overdevelopment potential if cumulus are present. This depicts the Overcast Development (OD) Cloudbase only at locations where the OD Potential parameter is positive." 
		},
	//zblcl
	"ODbase_allclds": { 
		"title": "OD Potential [All]",
		//"units": "",
		"description": "Overdevelopment base all types of clouds.This height estimates the cloudbase for extensive BL clouds (OvercastDevelopment), if such exist. The BL CL (Condensation Level) is based upon the humidity averaged through the BL and is therefore relevant only to extensive clouds." 
		},
	//sfctemp
	"Temp@2m": { 
		"title": "Temperature [2m]",
		"units": "F",
		"description": "Temperature at 2m" 
		},
	//wblmaxmin
	"cm/s Converge": { 
		"title": "Max Convergence",
		"units": "cm/s",
		"description": "Maximum grid-area-averaged extensive upward or downward motion within the BL as created by horizontal wind convergence. Positive convergence is associated with local small-scale convergence lines (often called 'shear lines'), which are horizontal changes of wind speed/direction. If CAPE is also large, thunderstorms can be triggered. Negative convergence (divergence) produces subsiding vertical motion, creating low-level inversions which limit thermalling heights. " 
		},
	//zsfclcldif 
	"CUpoten": { 
		"title": "",
		//"units": "",
		"description": "" 
		},
	//sfcsun
	"Sfc_Sun": { 
		"title": "",
		//"units": "",
		"description": "" 
		},
	//sfcsunpct
	"Sfc_Sun_%": { 
		"title": "",
		//"units": "",
		"description": "" 
		},
	//sfcwind0dir
	"Sfc_W_Dir": { 
		"title": "",
		//"units": "",
		"description": "" 
		}
	};