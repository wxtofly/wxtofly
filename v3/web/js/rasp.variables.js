var raspVariables = {
  "rain1": {
    "title": "1 hour rain accumulation",
    "description": "1 hour rain accumulation"
  },
  "zblcl": {
    "title": "OD Potential [All]",
    "description": "Overdevelopment base all types of clouds.This height estimates the cloudbase for extensive BL clouds (OvercastDevelopment), if such exist. The BL CL (Condensation Level) is based upon the humidity averaged through the BL and is therefore relevant only to extensive clouds."
  },
  "zblcldif": {
    "title": "OD Potential [if CU]",
    "description": "Overdevelopment potential if cumulus are present. This depicts the Overcast Development (OD) Cloudbase only at locations where the OD Potential parameter is positive."
  },
  "zblclmask": {
    "title": "OD Cloudbase where OD Potential > 0",
    "description": ""
  },
  "boxwmax": {
    "title": "Wind-Parallel section at max W: Vertical Velocity and Potential Temp",
    "description": "Cross-section slice at position of max w within box"
  },
  "zsfclcl": {
    "title": "Cu Cloudbase (Sfc.LCL) [MSL]",
    "description": "This height estimates the cloudbase for small, non-extensive \"puffy\" clouds in the BL, if such exist. The surface LCL (Lifting Condensation Level) is the level to which humid air must ascend before it cools enough to reach a dew point temperature based on the surface mixing ratio and is therefore relevant only to small clouds. This should be considered a minimum possible cloudbase."
  },
  "zsfclcldif": {
    "title": "Cu Potential",
    "description": "This height estimates the cloudbase for small, non-extensive \"puffy\" clouds in the BL, if such exist. The surface LCL (Lifting Condensation Level) is the level to which humid air must ascend before it cools enough to reach a dew point temperature based on the surface mixing ratio and is therefore relevant only to small clouds. This should be considered a minimum possible cloudbase."
  },
  "zsfclclmask": {
    "title": "Cu Cloudbase where Cu Potential>0",
    "description": ""
  },
  "cloudsuck": {
    "title": "Cloud Condensation Equiv Heat",
    "description": ""
  },
  "aboveblicw": {
    "title": "Integrated Cloud Water Above BL",
    "description": ""
  },
  "sfcshf": {
    "title": "Surface Heating",
    "description": "Heat transferred into the atmosphere due to solar heating of the ground, creating thermals. This parameter is an important determinant of thermals strength (as is the BL depth)"
  },
  "hbl": {
    "title": "Boundary Layer Top [TI=0]",
    "description": "Height of the top of the mixing layer, which for thermal convection is the average top of a dry thermal. Over flat terrain, maximum thermalling heights will be lower due to the glider descent rate and other factors. In the presence of clouds (which release additional buoyancy aloft, creating cloudsuck) the updraft top will be above this forecast, but the maximum thermalling height will then be limited by the cloud base. Further, when the mixing results from shear turbulence rather than thermal mixing this parameter is not useful for glider flying. NB: this BL Top is not the height where the Thermal Index (TI) is zero, which is a criteria used by many simple determinations of the BL top - instead, the RASP BL Top uses a more sophisticated BL Top criteria based on turbulent fluxes"
  },
  "blcloudpct": {
    "title": "Cloud Cover [BL]",
    "description": "Percentage cloud cover in the Boundary Layer. This parameter provides an additional means of evaluating the formation of clouds within the BL and might be used either in conjunction with or instead of the other cloud prediction parameters. It assumes a very simple relationship between cloud cover percentage and the maximum relative humidity within the BL. The cloud base height is not predicted, but is expected to be below the BL Top height."
  },
  "blicw": {
    "title": "BL Integrated Cloud Water",
    "description": ""
  },
  "bltopvariab": {
    "title": "Boundary Layer Top Uncertainty/Variability (for 1 deg C)",
    "description": "This parameter estimates the uncertainty (variability) of the BL Top height prediction which can result from meteorological variations. Specifically, it gives the expected increase of a BL Top height based on a Thermal Index (TI) = 0 criteria should the actual surface temperature be 4F warmer than forecast. Larger values indicate greater uncertainty/variability and thus better thermalling over local \"hot spots\" or small-scale topography not resolved by the model. But larger values also indicate greater sensitivity to error in the predicted surface temperature, so actual conditions have a greater likelihood of differing from those predicted. Small values often result from the presence of a stable (inversion) layer capping and limiting thermal growth. This parameter is most easily utilized through relative values, i.e. by first determining a \"typical\" value for a location and subsequently noting whether predictions for a given day are for more/less uncertainty than is typical"
  },
  "blwindshear": {
    "title": "BL Vertical Wind Shear",
    "description": "The vertical change in wind through the BL, specifically the magnitude of the vector wind difference between the top and bottom of the BL. Note that this represents vertical wind shear and does not indicate so-called \"shear lines\" (which are horizontal changes of wind speed/direction)"
  },
  "wstar": {
    "title": "Thermal Updraft Velocity",
    "description": "Average dry thermal updraft strength near mid-BL height. Subtract glider descent rate to get average vario reading for cloudless thermals. Updraft strengths will be stronger than this forecast if convective clouds are present, since cloud condensation adds buoyancy aloft (i.e. this neglects cloudsuck). W* depends upon both the surface heating and the BL depth"
  },
  "experimental2": {
    "title": "BL Cloud Fraction",
    "description": ""
  },
  "experimental1": {
    "title": "H_lift for 175fpm sinkrate",
    "description": ""
  },
  "hwcrit": {
    "title": "Height of Critical Updraft Strength",
    "description": "Maximum Soaring Altitude ASL with a 1.1m/s (225fpm) sink rate. This parameter estimates the height at which the average dry updraft strength drops below 225 fpm and is expected to give better quantitative numbers for the maximum cloudless thermalling height than the BL Top height forecast, especially when mixing results from vertical wind shear rather than thermals. (Note: the present assumptions tend to underpredict the max. thermalling height for dry consitions.) In the presence of clouds the maximum thermalling height may instead be limited by the cloud base. Being for dry thermals, this parameter omits the effect of cloudsuck"
  },
  "hglider": {
    "title": "Thermalling Height",
    "description": "This is the maximum soaring altitude expected when cumulus clouds are present"
  },
    "metwind": {
        "title": "Wind",
        "description": "Wind rotated to earth coordinates"
    },
    "metwind10": {
        "title": "Wind at 10m",
        "description": "Wind at 10m rotated to earth coordinates"
    },
  "sfcwind0": {
    "title": "Wind at 2m",
    "description": "The wind speed at the lowest available level above the ground"
  },
  "sfcwind": {
    "title": "Wind at 10m",
    "description": "The wind speed at 10m above the ground"
  },
  "sfcwind2": {
    "title": "Wind at 30m",
    "description": "The wind speed at 30m above the ground"
  },
  "bltopwind": {
    "title": "Wind at BL Top",
    "description": "The wind speed at the top of the boundary layer"
  },
  "blwind": {
    "title": "BL Avg Wind",
    "description": "The speed of the vector-averaged wind in the Boundary Layer"
  },
  "bsratio": {
    "title": "Bouyancy/Shear Ratio",
    "description": "Dry thermals may be broken up by vertical wind shear (i.e. wind changing with height) and unworkable if B/S ratio is 5 or less. [Though hang-gliders can soar with smaller B/S values than can sailplanes.] If convective clouds are present, the actual B/S ratio will be larger than calculated here due to the neglect of \"cloudsuck\""
  },
  "wblmaxmin": {
    "title": "BL Max. Up/Down Motion (Convergence)",
    "description": "Maximum grid-area-averaged extensive upward or downward motion within the BL as created by horizontal wind convergence. Positive convergence is associated with local small-scale convergence lines (often called \"shear lines\"), which are horizontal changes of wind speed/direction. If CAPE is also large, thunderstorms can be triggered. Negative convergence (divergence) produces subsiding vertical motion, creating low-level inversions which limit thermalling heights."
  },
  "zwblmaxmin": {
    "title": "MSL Height of maxmin Wbl",
    "description": ""
  },
  "mslpress": {
    "title": "Mean Sea Level Pressure",
    "description": "Barometric Pressure adjusted to mean sea level measured in millibars aka hpa"
  },
  "cape": {
    "title": "Convective Available Potential Energy (CAPE)",
    "description": "Convective Available Potential Energy indicates the atmospheric stability affecting deep convective cloud formation above the BL. A higher value indicates greater potential instability, larger updraft velocities within deep convective clouds, and greater potential for thunderstorm development (since a trigger is needed to release that potential). Locations where both convergence and CAPE values are high can be subject to explosive thunderstorm development"
  },
  "sfctemp": {
    "title": "Surface Temperature (2m AGL)",
    "description": "Surface Temperature (2m AGL)"
  },
  "sfcdewpt": {
    "title": "Surface Dew Point Temperature (2m AGL)",
    "description": "Surface Dew Point Temperature (2m AGL)"
  },
  "dbl": {
    "title": "Boundary Layer Depth",
    "description": "Depth of the layer mixed by thermals or (vertical) wind shear. This parameter can be useful in determining which flight direction allows better thermalling conditions when average surface elevations vary greatly in differing directions. (But the same cautions mentioned under Height of BL Top also apply.) It is also an important determinant of thermals strength (as is the Surface Heating)"
  },
  "sfcsun": {
    "title": "Surface Solar Radiation",
    "description": "Surface Solar Radiation"
  },
  "sfcsunpct": {
    "title": "Normalized Surface Solar Radiation",
    "description": "Surface Solar Radiation"
  },
  "dwcrit": {
    "title": "Depth of Critical Updraft Strength (AGL Hcrit)",
    "description": "Maximum Soaring Altitude AGL with a 1.1m/s (225fpm) sink rate"
  },
  "blcwbase": {
    "title": "BL Explicit Cloud Base [AGL]",
    "description": "The cloud base of extensive clouds based on model-predicted formation of cloud water, giving the lowest height at which the predicted cloud water density is above a criterion value within the BL."
  },
  "press": {
    "title": "Vertical Velocity & Wind at pressure level",
    "description": "Vertical Velocity & Wind at pressure level"
  },
  "wstar_bsratio": {
    "title": "Thermal Updraft Velocity (W*)",
    "description": null
  }
}