var polygons = [];

function removeAirspace() {
	polygons.forEach(function(polygon) {
		polygon.setMap(null);
	});
	
}

function addAirspace(map) {
    var polygon;

    var infoBoxOptions = {
                             content:                'None',
                             boxStyle:               {
                                                         border:    "1px solid black",
                                                         color:     "#ffffff",
                                                         textAlign: "center",
                                                         fontSize:  "6pt"
                                                     },
                             disableAutoPan:         true,
                             pixelOffset:            new google.maps.Size(12, 12),
                             position:               new google.maps.LatLng(0, 0),
                             closeBoxURL:            "",
                             isHidden:               true,
                             pane:                   "floatPane",
                             enableEventPropagation: true
                         };

    var infoBox = new InfoBox(infoBoxOptions);
    infoBox.open(map);

    function attachPolygonInfoBox(polygon, infoBox, html) {
		
		var lat = polygon.getPath().getAt(0).lat();
		var lng = polygon.getPath().getAt(0).lng();
		
		if (lng > -115 || lat < 41) {
			polygon.setMap(null);
			return;
		}
		else {
			polygons.push(polygon);
		}
		
        polygon.infoBox = infoBox;
        polygon.infoBoxText = html;

        var boxStyle = {
                           border:     "1px solid black",
                           background: polygon.strokeColor,
                           color:      "#ffffff",
                           textAlign:  "center",
                           fontSize:   "6pt"
                       };

        google.maps.event.addListener(polygon, 'mouseover',
                                      function(e) {
                                          var latLng = e.latLng;
                                          this.setOptions({fillOpacity: 0.1});
                                          this.infoBox.setPosition(latLng);
                                          this.infoBox.setContent(polygon.infoBoxText);
                                          this.infoBox.setOptions({boxStyle: boxStyle});
                                          this.infoBox.show();
                                      });

        google.maps.event.addListener(polygon, 'mousemove',
                                      function(e) {
                                          var latLng = e.latLng;
                                          this.infoBox.setPosition(latLng);
                                      });

        google.maps.event.addListener(polygon, 'mouseout',
                                      function() {
                                          this.setOptions({fillOpacity:0.35});
                                          polygon.infoBox.hide();
                                      });
    }

// SEATTLE CLASS B AREA A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s`r`HnsfiVnBu@jBw@lBu@lBq@lBo@nBk@nBi@nBe@nBc@nBa@pB]pB[pBWpBUpBQpBOpBKpBIrBErBCrB?rB>rBBrBDpBHpBJpBNpBPpBTpBVpBZpB\\nB`@nBb@nBf@nBh@lBj@lBn@lBp@lBt@jBv@jBz@jB|@hB~@hBbAfBdAfBfAdBjAdBlAdBnAbBrAbBtA`BvA~AzA~A|A|A~A|A`BzAbBzAfBxAhBvAjBvAlBtAnBrApBrArBpAvBnAxBlAzBlA|BjA~BhA`CfAbCfAbCdAdCbAfC`AhC`AjCbwEco@poE}o@zAdNzAlNtAnNnApNhArNbAtN|@vNv@vNp@xNj@zNd@zN^|NX|NR~NL~NF~N@~NA~NG~NM~NS~NY|N_@|Ne@zNk@zNq@xNw@xN}@vN_A~NwsEyJelEi_Ag@xCm@zCo@xCq@xCq@vCs@tCu@tCw@rCy@pC{@pC}@nC_AlC_AjCaAhCcAfCeAdCgAdCgAbCiA`CkA~BmA|BmAzBoAxBqAvBsAtBsApBuAnBwAlBwAjByAhB{AfB{AdB}A`B}A~A_B|AaBzAaBvAcBtAcBrAeBnAeBlAgBjAgBfAgBdAiBbAiB~@kB|@kBz@kBv@mBt@mBp@mBn@oBj@oBh@oBf@oBb@oB`@qB\\qBZqBVqBTqBPqBNqBJsBHsBDsBBsB>sB?sBCsBEsBIqBKqBOqBQqBUqBWqB[qB]oBa@oBc@oBe@oBi@gAYmDjIkErGgFpMuJxo@cKriA{f@siAo\\}E}_@|E_Y?gW_Ymc@g^}_@t@eDxSwQ@wBwG{B_HwBcHuBeHqBiHmBkHiBoHeBqHcBsH_BwH{AyHwA{HsA}HoA_IkAaIgAcIeAeIaAgI}@iIy@kIu@kIq@mIm@oIi@oIe@qIa@qI]sIYsIUsIQuIMuIIuIEuIAuI>uID_JHuILuIPuITsITqIhh@lFlhHczE'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.33544843752, -122.38206944444), new google.maps.LatLng(47.501986076277, -122.26053963244));
    polygon.altLow  = 0;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA A';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA A<br />0-10000');
    

// SEATTLE CLASS B AREA B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ct|`HxqmiVUrIQtIMtIItIEtIA~I@tIDtIHtILtIPtITrIXrI\\rI`@pId@pIh@nIl@nIp@lIt@jIx@jI|@hI`AfI~@~H_eE`~A_B_NaBkN{AoNuAqNoAsNiAuNcAwN}@yNw@yNq@{Nk@}Ne@}N_@_OY_OSaOMaOGaOAaO@aOFoOLaORaOX_O^_O`@}NrmEnd@UpI'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.498738888889, -122.35521944444), new google.maps.LatLng(47.535293838859, -122.29163333333));
    polygon.altLow  = 1100;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA B';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA B<br />1100-10000');
    

// SEATTLE CLASS B AREA C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_s|_HbquiV~@_O|@wNv@yNp@yNj@{Nd@{N^}NX}NR_OL_OF_O@_OA_OG_OM_OS_OY}N_@}Ne@{Nk@{Nq@yNw@wN}@wNcAuNiAsNoAqNuAoN{AmN{AgNbfEixAv~KwtAtCx]tCf^hCh^|Bl^pBp^dBr^xAt^lAv^`Ax^t@z^h@|^\\|^P|^D~^C~^Q|^]|^i@|^u@z^aAx^mAv^yAt^eBr^qBp^}Bl^aC|^abRi}D'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.235522449727, -122.37064444444), new google.maps.LatLng(47.339786111111, -122.23860555556));
    polygon.altLow  = 1800;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA C';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA C<br />1800-10000');
    

// SEATTLE CLASS B AREA D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('abcaHtaliVa@|N_@~NY~NS`OM`OGnOA`O@`OF`OL`OR`OX~N^~Nd@|Nj@|Np@zNv@xN|@xNbAvNhAtNnArNtApNzAnN`BjN~A~MqqQ~|GaEy\\eE{]yDa^mDe^aDi^uCm^iCq^}Bu^qBy^eB{^yA}^mA__@aAa_@u@c_@i@e_@]e_@Qg_@Eg_@Da`@Pg_@\\e_@h@e_@t@c_@`Aa_@xA}^|jRxoB'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.530419444444, -122.40098611111), new google.maps.LatLng(47.635322831544, -122.27357777778));
    polygon.altLow  = 1800;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA D';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA D<br />1800-10000');
    

// SEATTLE CLASS B AREA E

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ygc`HheuiVeA|HgAbIkA`IoA~HsA|HwAzH{AvH_BtHaBrHeBpHiBlHmBjHqBhHsBdHwB`H{B~G_CzGaCxGeCtGiCpGkClGoCjGqCfGuCbGwC~F{CzF}CvFaDrFcDnFgDhFiDdFkD`FoD|EqDxEsDrEwDnEyDjE{DdE}D`E_EzDaEvDeEpDgElDiEfDkE`DmE|CmEvCoEpCqElCsEfCuE`CwEzBwEvByEpB{EjB{EdB}E~A}EzA_FtA_FnAaFhAaFbAcF|@cFv@cFp@eFj@eFd@eF^eFXgFRgFLgFFgF@gFAgFGgFMgFSeFYeF_@eFe@eFk@cFq@cFw@cF{@aFaAaFgAaFmA_FsA_FyA}E_B{EeB{EkByEoBwEuBwE{BuEaCsEgCqEkCoEqCoEwCmE{CkEaDiEgDgEkDeEqDcEuDaE{D}D_E{DeEyDiEwDoEuDsEqDwEoD}EmDaFiDeFgDiFeDoFaDsF_DwF{C{FyC_GuCcGsCgGoCkGkCmGiCqGeCuGkCyGvQAdDyS|_@u@lc@f^fW~X~X?|_@}En\\|Ezf@riAbKsiAtJyo@fFqMjEsGlDkIfAXnBh@nBd@nBb@nB`@pB\\pBZpBVpBTpBPpBNpBJrBHrBDrBBrB>rB?rBCrBErBIpBKpBOpBQpBUpBWpB[pB]nBa@nBc@nBg@nBi@nBk@lBo@lBq@lBu@jBw@jB{@jB}@hB_AhBcAfBeAfBgAfBkAdBmAdBoAbBsAbBuA`BwA`B{A~A}A|A_B|AaBzAeBzAgBxAiBvAkBvAmBtAoBrAqBrAuBpAwBnAyBlA{BlA}BjA_ChAaCfAcCfAeCdAeCbAgC`AiC~@kC~@mC|@oCz@qCx@qCv@sCt@uCr@uCp@wCp@yCn@yCl@{Cf@yCdlEh_A'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.37165, -122.40777437575), new google.maps.LatLng(47.4906, -122.328));
    polygon.altLow  = 2000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA E';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA E<br />2000-10000');
    

// SEATTLE CLASS B AREA F

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ab|`H~ouiVlAjIjA`InA~HrA|HvAzHzAxH~AvHbBrHdBpHhBnHlBjHpBhHtBdHvBbHzB~GxBvGi`@zy@ua@fx@iPrh@sGt@wZzLo\\pUySfWeDmBo\\wZ{Lt@o\\lc@sG?qUwZiPt@gW|EySrGua@?{L|EgWbKiPrG{LrGsGzL}ElBqNzLcKt@{LzLyS|_@{LrGg^gyAgW{f@ua@}_@sNaRiIoUr|QwaH'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.4906, -122.41929444444), new google.maps.LatLng(47.595638888889, -122.34));
    polygon.altLow  = 2000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA F';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA F<br />2000-10000');
    

// SEATTLE CLASS B AREA G

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s`r`HnsfiVmhHbzE}bZy|CbB}^dB{^pBw^|Bu^hCq^tCm^`Di^lDe^xDa^dE{]pEu]|Eq]fFk]rFc]tFa]zbW|lMzA{HzAyH~AwHbBsHdBqHhBoHlBkHpBiHtBeHvBcHzB_H~B{G`CyGdCuGhCqGjCoGnCkGrCgGtCcGxC_GzC{F~CwF`DsFdDoFfDiFhDeFlDaFnD}EpDwEtDsEvDoExDiEzDeE|D_E`E{DbEuDdEqDfEkDhEgDjEaDlE}CnEwCnEqCpEkCrEgCtEaCvE{BvEuBxEqBzEkBzEeB|E_B~EyA~EsA`FmA`FgA`FaAbF}@bFw@dFq@dFk@dFe@dF_@dFYfFSfFMfFGfFAfF@fFFfFLfFRdFXdF^dFd@dFj@bFp@bFv@bF|@`FbA`FhA`FnA~EtA~ExA|E~AzEdBzEjBxEpBvEvBvEzBtE`CrEfCpElCnEpCnEvClE|CjE`DhEfDfElDdEpDbEvD~DzD|D`EzDdExDhEvDnErDrEpDxEnD|ElD`FhDdFfDhFbDnF`DrF|CvFzCzFvC~FtCbGpCfGnCjGjClGhCpGdCtG`CxG~BzGzB~GvBbHrBdHpBhHlBjHhBlHdBpHbBrH~AtHzAvHvAzHrA`IcwEbo@aAkCaAiCcAgCeAeCgAcCgAcCiAaCkA_CmA}BmA{BoAyBqAwBsAsBsAqBuAoBwAmBwAkByAiB{AgB{AcB}AaB}A_B_B}A_B{AaBwAcBuAcBsAeBoAeBmAeBkAgBgAgBeAiBcAiB_AkB}@kB{@kBw@mBu@mBq@mBo@mBk@oBi@oBg@oBc@oBa@qB]qB[qBWqBUqBQqBOqBKqBIsBEsBCsB?sB>sBBsBDqBHqBJqBNqBPqBTqBVqBZqB\\oB`@oBb@oBd@oBh@oBj@mBn@mBp@mBt@kBv@oBt@'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.373161111111, -122.29883333333), new google.maps.LatLng(47.633766666667, -122.19886666667));
    polygon.altLow  = 2000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA G';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA G<br />2000-10000');
    

// SEATTLE CLASS B AREA H

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('owdbHjgtjVegF{O|LmyhAzfOugChgfAfk@~dZbnE|E~m~@esLbrGym}Aoh@'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.153511111111, -122.50398611111), new google.maps.LatLng(47.744113888889, -122.09476666667));
    polygon.altLow  = 3000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA H';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA H<br />3000-10000');
    

// SEATTLE CLASS B AREA I

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('u_lbHlvsjVkrJwoDpWw|_AxgJ{jB}LlyhA'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.741875, -122.49463888889), new google.maps.LatLng(47.803541666667, -122.11664166667));
    polygon.altLow  = 4000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA I';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA I<br />4000-10000');
    

// SEATTLE CLASS B AREA J

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mat_Hp_ghVigfAgk@bpDoqQby`A|G{AztR'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.293369444444, -122.10185555556), new google.maps.LatLng(47.658694444444, -121.99964166667));
    polygon.altLow  = 5000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA J';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA J<br />5000-10000');
    

// SEATTLE CLASS B AREA K

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mfo_HhjhkVu`iAnUgnJmxSxm}Anh@y|GjxQ'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.223305555556, -122.60381666667), new google.maps.LatLng(47.706961111111, -122.49734444444));
    polygon.altLow  = 5000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA K';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA K<br />5000-10000');
    

// SEATTLE CLASS B AREA L

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kww_Hjg~kVc{`Af_@hJyeUt`iAoU}oG`|T'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.269036111111, -122.71755), new google.maps.LatLng(47.650011111111, -122.60021111111));
    polygon.altLow  = 6000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA L';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA L<br />6000-10000');
    

// SEATTLE CLASS B AREA M

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('o~s_HtisgVcy`A}GvnBkwKbrBkiLvmw@s^jvAndL{MzdM'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.290986111111, -122.001075), new google.maps.LatLng(47.630352777778, -121.86100277778));
    polygon.altLow  = 6000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA M';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA M<br />6000-10000');
    

// SEATTLE CLASS B AREA N

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_ho~Gb{hjVkkHnaC}E_n~@jxHxo@}Dpzx@'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.104486111111, -122.45995833333), new google.maps.LatLng(47.154627777778, -122.13499722222));
    polygon.altLow  = 4000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA N';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA N<br />4000-10000');
    

// SEATTLE CLASS B AREA O

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('if~~GjpukVapX~uG|oGa|Tx|GkxQdsLcrGjkHoaCdeKrhLocZpj^'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.043008333333, -122.71238888889), new google.maps.LatLng(47.312708333333, -122.43906944444));
    polygon.altLow  = 5000;
    polygon.altHigh = 7000;
    polygon.desc    = 'SEATTLE CLASS B AREA O';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA O<br />5000-7000');
    

// SEATTLE CLASS B AREA P

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k{x~GtnmhV_eZcnEzA{tRzM{dMlaJppIlmFzAvv\\lbV_zJxbGkxHyo@'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.043838888889, -122.14281111111), new google.maps.LatLng(47.293836111111, -121.92844722222));
    polygon.altLow  = 5000;
    polygon.altHigh = 7000;
    polygon.desc    = 'SEATTLE CLASS B AREA P';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA P<br />5000-7000');
    

// SEATTLE CLASS B AREA Q

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qsyaHtg_lV{zf@eoi@`IuzmApb]i}^xwO|IwnBjwKcpDnqQ{fOtgCygJzjBqWv|_AjrJvoDdgFzOfnJlxSiJxeU'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.612472222222, -122.71755), new google.maps.LatLng(47.854158333333, -121.93253888889));
    polygon.altLow  = 5000;
    polygon.altHigh = 7000;
    polygon.desc    = 'SEATTLE CLASS B AREA Q';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA Q<br />5000-7000');
    

// SEATTLE CLASS B AREA R

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('moacHlwtjVstLupHqFyn{@hfMcyGaItzmA'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.852541666667, -122.49991111111), new google.maps.LatLng(47.9254, -122.09611388889));
    polygon.altLow  = 6000;
    polygon.altHigh = 7000;
    polygon.desc    = 'SEATTLE CLASS B AREA R';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA R<br />6000-7000');
    

// SEATTLE CLASS B AREA S

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wac~GxdvjVeeKshL|Dqzx@~yJybGdD`hnA'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.043008333333, -122.507175), new google.maps.LatLng(47.105441666667, -122.10123888889));
    polygon.altLow  = 5000;
    polygon.altHigh = 10000;
    polygon.desc    = 'SEATTLE CLASS B AREA S';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA S<br />5000-10000');
    

// SEATTLE CLASS B AREA T

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ydq}G~|ljV}{PxfHeDahnAdsPbmE|Lbr~@'), map: map, strokeColor: "#21282E", strokeOpacity: 1, strokeWeight: 1, fillColor: "#21282E", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.951330555556, -122.507175), new google.maps.LatLng(47.043838888889, -122.10123888889));
    polygon.altLow  = 6000;
    polygon.altHigh = 7000;
    polygon.desc    = 'SEATTLE CLASS B AREA T';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE CLASS B AREA T<br />6000-7000');
    

// BEALE AFB CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g`knFzaedVf@um@vBom@hE_m@vGkl@fJmk@rLij@|N_i@dQmg@hSwe@jUyc@hWua@dYm_@zZ_]l\\mZx]uWb_@{Tf`@}Qda@}N|a@yKpb@sH~b@mEfc@eBjc@>fc@fB~b@nEpb@vH|a@zKba@~Nd`@~Q`_@|Tx]vWj\\lZxZ~\\bYl_@hWta@jUvc@hSte@bQjg@|N|h@pLfj@dJjk@vGfl@hE|l@vBjm@f@rm@g@rm@wBjm@gE|l@wGfl@eJjk@qLfj@{N|h@cQjg@iSte@iUvc@iWta@cYl_@yZ~\\k\\lZy]vWa_@|Te`@~Qca@~N}a@|Kqb@vH_c@pEgc@hBkc@@gc@eB_c@kEqb@sH}a@yKea@{Ng`@}Qc_@{T{]uWm\\kZ{Z_]eYk_@kWua@kUyc@kSue@eQmg@}N_i@sLij@gJmk@yGil@iE_m@yBom@g@um@?G'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.052599012612, -121.5436607391), new google.maps.LatLng(39.219405348321, -121.32959648194));
    polygon.altLow  = 0;
    polygon.altHigh = 4100;
    polygon.desc    = 'BEALE AFB CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'BEALE AFB CLASS C<br />SFC-4100');
    

// BEALE AFB CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('i}jnFz{bdVYrJUrJOrJKrJEtJA~J@tJDtJJrJNrJTrJZrJ^pJd@pJh@pJn@nJr@lJx@lJ|@jJbAhJfAhJjAfJpAdJtAbJzA`J~A~IdB|IhBxIlBvIrBtIvBrIzBnI`ClIdChIhCfIlCbIpC`IvC|HzCxH~CtHbDrHfDnHjDjHnDfHrDbHvD~GzDzG~DtGbEpGfElGjEhGlEbGpE~FtEzFxEtFzEpF~EjFbFfFdF`FhF|EjFvEnFpEpFjErFfEvF`ExFzDzFtD|FnD`GjDbGdDdG~CfGxChGrCjGlClGfCnG`CpGzBrGtBrGlBtGfBvG`BvGzAxGtAzGnAzGfA|G`A|Gz@|Gt@~Gn@~Gf@~G`@`HZ`HT`HL`HF`H@`HA`HI`HO`HU`H[~Gc@~Gi@~Go@|Gu@|G}@|GcAzGiAzGoAxGuAvG}AvGcBtGiBrGoBpGuBpG{BnGaClGgCjGmChGsCfGyCdG_DbGeD~FkD|FqDzFwDxF{DtFaErFgEpFmElFqEjFwEfF}EdFaF`FgF~EkFzEqFvEuFtE{FpE_GlEeGhEiGfEmGbEqG~DuGzD{GvD_HrDcHnDgHjDkHfDoHbDqH~CuHzCyHtC}HpC_IlCcIhCgIdCiI~BmIzBoIvBqIpBuIlBwIhByIbB{I~A}IzAaJtAcJpAcJjAeJfAgJ`AiJ|@kJv@kJr@mJl@oJh@oJb@qJ^qJXqJTsJNsJJsJDsJ@sJAsJEsJKsJOsJUsJYqJ_@qJe@qJi@oJo@oJs@mJy@kJ}@kJaAiJgAgJkAeJqAcJuAcJ{AaJ_B}IcB{IiByImBwIqBuIwBqI{BoI_CmIeCiIiCgImCcIqC_IuC}H{CyH_DuHcDqHgDoHkDkHoDgHsDcHwD_H{D{G_EuGcEqGgEmGiEiGmEcGqE_GuE{FwEuF{EqF_FkFaFgFaFeFjyHotObMjMdMnM~LxMxLbNpLlNjLvNbL`O|KhOtKrOnK|OfKdP~JlPvJvPnJ~PfJfQ~InQvIvQnI|QfIdR~HlRvHrRlHzRdH`S|GfSrGlSjGrS`GxSxF~SnFdTdFjT|EnTrEtThExT`E|TvD`UlDdUbDhUxClUnCpUdCrUzBvUpBxUfBzU|A|UrA~UhA`V~@bVt@dVj@dV`@fVVfVLfVBfVCfVMfVWfVa@fVk@dVu@dV_AbViA`VsA~U}A|UgBzUqBxU{BvUeCrUoCpUyClUcDhUmDdUwD`U_E|TiExTsEtT}EnTeFjToFdTwF~SaGxSkGtSsGnS{GfSeH`SmHzRwHrR_IlRgIdRoI~QwIvQ_JnQgJfQoJ~PwJvP_KlPgKdPmK|OuKrO}KjOcL`OkLvNqLlNwLbN_MxMeMnMkMdMqMzLwMpL}MfLcNzKiNpKmNdKsNzJyNnJ}NbJaOxIgOlIkO`IoOtHsOhHwO|G{OpG_PdGcPxFePlFiP`FkPtEoPfEqPzDsPnDwP`DyPtC{PhC{PzB}PnB_Q`BaQtAaQfAcQz@cQl@cQ`@cQReQFeQCcQOcQ]cQi@cQw@aQcAaQqA_Q}A}PkB}PwB{PeCyPqCwP}CuPkDqPwDoPcEmPqEiP}EgPiFcPuF_PcG}OoGyO{GuOgHqOsHmO_IgOkIcOuI_OaJyNmJuNyJoNcKiNoKeNyK_NeLyMoLsMyLmMeMgMoMaMyMyLcNsLmNmLwNeLaO_LiOwKsOoK}OiKePaKmPyJwPqJ_QiJgQaJoQyIwQqI_RiIgRaImRwHuRoH{RgHcS}GiSuGoSkGuScG{SyFaTqFgTgFmT}EqTuEwTkE{TaE_UwDeUmDiUcDmU{CoUqCsUgCwU}ByUsB}UiB_V_BaVuAcVkAeVaAgVw@gVm@iVa@iVWkVMkVCkVBkVL_WVkV`@iVj@iVt@gVv@gVndO|pA]nJ'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.969211359471, -121.65079014015), new google.maps.LatLng(39.302789396225, -121.26578611111));
    polygon.altLow  = 1600;
    polygon.altHigh = 4100;
    polygon.desc    = 'BEALE AFB CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'BEALE AFB CLASS C<br />1600-4100');
    

// BEALE AFB CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qdqmFzdtcVkFwEmFqEqFmEsFgEwFaEyF{D{FwD}FqDaGkDcGeDeG_DgGyCiGsCkGmCmGgCoGaCqG{BqGuBsGoBuGiBwGcBwG{AyGuA{GoA{GiA}GcA}G}@}Gu@_Ho@_Hi@_Hc@aH[aHUaHOaHIaHAaH@aHFaHLaHTaHZ_H`@_Hf@_Hn@}Gt@}Gz@}G`A{GhA{GnAyGtAwGzAwG`BuGfBsGnBsGtBqGzBoG`CmGfCkGlCiGrCgGxCeG~CcGdDaGjD}FpD{FtDyFzDwF`EsFfEqFlEmFpEkFvEiF|EeF`FaFfF_FjF{EpFyEtFuEzFqE~FmEbGkEhGgElGcEpG_EtG{DzGwD~GsDbHoDfHkDjHgDnHcDrH_DtH{CxHwC|HqC`ImCbIiCfIeChI_ClI{BnIwBrIsBtImBvIiBzIeB|I_B~I{A`JuAbJqAdJkAfJgAhJcAhJ}@jJy@lJs@lJo@nJi@nJi@rJodO}pApAeVtAcV~AaVhB_VrB}U|ByUfCwUpCsUxCoUbDmUlDiUvDeU`EaUjE{TrEwT|EqTfFmTnFgTxFaTbG}SjGwStGoS|GiSfHcSnH}RvHuR~HoRhIgRpI_RxIwQ`JoQhJgQpJ_QxJwP`KoPfKePnK}OvKsO|KiOdLaOjLwNrLmNxLcN~LyMfMoMlMeMrM{LxMoL~MeLdNyKhNoKnNcKtNyJxNmJ~NaJbOwIfOkIjO_IpOsHtOgHxO{G|OoG~OcGbPwFfPiFhP}ElPqEnPeEpPwDtPkDvP_DxPqCzPeC|PwB|PkB~P}A`QqA`QcAbQw@bQi@bQ]dQOdQCdQFbQRbQ`@bQl@bQz@`QfA`QtA~P`B|PnBzPzBzPfCxPtCvP`DrPlDpPzDnPfEjPrEhP`FdPlFbPxF~OdGzOpGvO|GrOhHnOtHjO`IfOlI`OxI|NbJxNnJrNzJlNdKhNpKbNzK|MdLvMpLxMvLkyHntOkFwE'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.035477777778, -121.423575), new google.maps.LatLng(39.301586111111, -121.22245967599));
    polygon.altLow  = 2600;
    polygon.altHigh = 4100;
    polygon.desc    = 'BEALE AFB CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'BEALE AFB CLASS C<br />2600-4100');
    

// BURBANK-GLENDALE-PASADENA AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}`gpEbojqUrgO_gQ`HD`HF`HL`HR`HX~G^~Gd@~Gl@|Gr@|Gx@|G~@zGdAzGjAxGpAvGtAvGzAtG`BrGfBpGlBpGrBnGxBlG~BjGdChGhCfGnCdGtCbGzC`G~C|FdDzFjDxFnDvFtDrFzDpF~DlFdEjFhEfFnEdFrE`FxE~E|EzE`FvEfFtEjFpEnFlErFhEvFfE|FbE`G~DdGzDhGvDlGrDpGnDrGjDvGfDzGbD~G~C`HzCdHvChHpCjHlCnHhCpHdCtH~BvHzBxHvB|HrB~HlB`IhBbIbBdI~AfIzAhItAjIpAlIjAnIfApI`ArI|@rIx@tIr@vIn@vIh@xId@xI^xIXzITzINzIJzIDzI@zIAzIEzIKzIOzIUzIYzI_@xIc@xIi@xIm@vIs@vIw@tI}@rIaArIgApIkAnIqAlIuAjI{AhI_BfIcBdIiBbImB`IqB~HwB|H{BzH_CvHeCtHiCpHmCnHqCjHuChH{CdH_DbHcD~GgDzGkDvGoDrGsDpGwDlG{DhG_EdGcE`GgE|FiEvFmErFqEnFuEjFwEfF{E`F_F|EaFxEeFrEgFnEkFhEmFdEqF~DsFzDwFtDyFpD{FjD}FdDaG`DcGzCeGtCgGnCiGjCkGdCmG~BoGxBqGrBqGlBsGfBuG`BwG|AwGvAyGpA{GjA{GdA}G~@}Gx@}Gr@_Hl@_Hf@_H`@aHXaHRaHLaHFaH@aHAaHGaHMaHSaHY_H_@_He@_Hk@}Gq@}Gw@}G}@{GcA{GiAyGoAwGuAwG{AuGaBsGgBsGmBqGsBoGyBmG_CkGcCiGiCgGoCeGuCcGyCaG_D}FeD{FkDgJsEl@c@vAcAtAcAtAeArAgArAiApAkApAmAnAoAlAqAlAqAjAsAjAuAhAwAfAyAfAyAdA{AbA}AbA_B`A_B~@aB|@cB|@cBz@eBx@gBv@gBv@iBt@iBr@kBp@mBp@mBn@oBl@oBj@qBh@qBf@sBf@sBd@sBb@uB`@uB^uB\\wBZwBZwBXyBVyBTyBRyBP{BN{BL{BJ{BH{BH{BF}BD}BB}B@}B>}B?}BA}BC}BE}BG}BI{BI{BK{BM{BO{BQ{BSyBUyBWyBYyB[wB[wB]wB_@uBa@uBc@uBe@sBg@sBg@qBi@qBk@qBm@oBo@oBq@mBq@mBs@kBu@iBw@iBw@gBy@gB{@eB}@cB}@cB_AaBaA_BcA_BcA}AeA{AgAyAgAyAiAwAkAuAkAsAmAqAmAqAoAoAqAmAqAkAsAiAsAgAuAeAuAcAwAaAwAaAyA_AyA}@{A{@{Ay@}Aw@}Au@}As@_Bq@_Bo@_Bm@aBk@aBi@aBg@cBe@cBa@cB_@cB]eB[eBYeBWeBUeBSeBQgBOgBMgBKgBGgBEgBCgBAgB?gB>gB@gBBgBDgBFgBJgBLgBNeBPeBReBTeBVeBXeBZcB\\cB^cB`@cBd@aBf@aBh@aBj@_Bl@_Bn@_Bp@}Ar@}At@}Av@{Ax@{Az@yA|@yA~@wA`AwA`AuAbAuAdAsAfAsAhAqAjAqAlAoAnAmApAmApAkArAw@~Au@oFmAqIgAqIcAsI}@uIy@uIs@wIo@yIi@yIe@{I_@{I[{IU{IO}IK}IE}IA}I@gJD}IJ}IPoI'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.117160979645, -118.45870058081), new google.maps.LatLng(34.284047086707, -118.25794444444));
    polygon.altLow  = 0;
    polygon.altHigh = 4800;
    polygon.desc    = 'BURBANK-GLENDALE-PASADENA AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'BURBANK-GLENDALE-PASADENA AIRPORT CLASS C<br />SFC-4800');
    

// BURBANK-GLENDALE-PASADENA AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}`gpEbojqUZiJX{I^{Id@yIh@yIn@yIr@wIx@uI|@uIbAsIfAqIjAqIpAoItAmIzAkI~AiIdBgIhBeIlBcIrB_IvB}HzB{H`CwHdCuHhCsHlCoHpCmHvCiHzCeH~CcHbD_HfD{GjDwGnDuGrDqGvDmGzDiG~DeGbEaGfE}FjEyFlEsFpEoFtEkFxEgFzEaF~E}EbFyEdFsEhFoEjFiEnFeEpF_ErF{DvFuDxFoDzFkD~FeD`G_DbG{CdGuCfGoChGiCjGcClG_CnGyBpGsBrGmBrGgBtGaBvG{AxGuAxGoAzGiAzGcA|G}@|Gw@~Gq@~Gk@~Ge@~G_@`HY`HS`HM`HG`HDsgO~fQ'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.200527777778, -118.35138888889), new google.maps.LatLng(34.283833333333, -118.25790568115));
    polygon.altLow  = 3500;
    polygon.altHigh = 4800;
    polygon.desc    = 'BURBANK-GLENDALE-PASADENA AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'BURBANK-GLENDALE-PASADENA AIRPORT CLASS C<br />3500-4800');
    

// BURBANK-GLENDALE-PASADENA AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('azroEzyxpU`~Bs_RdPtDnPzDlPfEhPpEdP|EbPhF~OtFzO~FvOjGrOvGnO`HjOlHfOvHbObI|NlIxNvIrNbJnNlJhNvJbN`K|MjKvMtK~MpL?`r}@cMfKwMtK}MjKcN`KiNvJoNlJsNbJyNxI}NlIcObIgOvHkOlHoO`HsOvGwOjG{O`G_PtFcPhFgP|EiPrEmPfEoPzDqPnDuPbDwPvCyPjC{P~B}PrB_QfB_QzAaQnAaQbAcQv@cQj@eQ^eQPeQDeQCeQOeQ[cQg@cQs@cQ_AaQkA_QwA_QeB}PqB{P}ByPiCwPuCuPaDsPmDoPyDmPcEkPoEgP{EcPgFaPsF}O}FyOiGaPkGnsAydF}KiFcLoF_LwF}KaGyKiGuKqGqK{GmKcHgKkHcKsH_K{H{JcIuJkIqJsIkJ{IgJcJaJkJ{IqJwIyJqIaKkIgKeIoK_IuKyH{KsHcLmHiLgHoLaHuL{G{LsGaMmGgMgGmM_GsMyFwMsF}MkFaNeFgN}EkNuEqNoEuNgEyN_E}NyDaOqDeOiDiOaDmO{CoOsCsOgCyOvtG_qIKnIK|IEfJA|I@|ID|IJ|IN|ITzIZzI^zId@xIh@xIn@xIr@vIx@tI|@tIbArIfApIlApIl@pFdAmAjAsAlAqAlAoAnAoAnAmApAkArAiArAgAtAeAtAcAvAaAvA_AxA}@xA}@xA{@zAy@zAw@|Au@|As@~Aq@~Ao@~Am@`Bk@`Bi@`Be@`Bc@bBa@bB_@bB]bB[dBYdBWdBUdBSdBQdBOfBMfBKfBGfBEfBCfBAfB?fB>fB@fBBfBDfBFfBJdBLdBNdBPdBRdBTdBVdBXbBZbB\\bB^bB`@`Bb@`Bf@`Bh@`Bj@~Al@~An@|Ap@|Ar@|At@zAv@zAx@xAz@xA|@xA|@vA~@vA`AtAbAtAdArAfArAhApAjAnAlAnAnAlAnAlApAjArAhAtAhAvAfAvAfAxAdAzAbA|A`A|A`A~A~@`B|@`B|@bBz@dBx@dBv@fBv@hBt@hBr@jBp@jBn@lBn@lBl@nBj@nBh@pBf@pBf@rBd@rBb@tB`@tB^tB\\vBZvBXvBXxBVxBTxBRxBPxBNzBLzBJzBHzBHzBFzBDzBBzB@zB>|B?|BAzBCzBEzBGzBIzBIzBKzBMzBOzBQxBSxBUxBWxBYxBYvB[vB]vB_@tBa@tBc@tBe@rBg@rBg@pBi@pBk@nBm@nBo@lBo@lBq@jBs@jBu@hBw@hBw@fBy@dB{@dB}@bB}@bB_A`BaA~AaA|AcA|AeAzAgAxAgAvAiAvAiAtAkArAmApAmAnAoAnAoAlAqAjAsAhAsAfAuAdAuAbAwA`Ac@x@xIpFzFjD~FdD`G~CbGzCdGtCfGnChGhCjGbClG~BnGxBpGrBrGlBtGfBtG`BvGzAxGtAxGnAzGhAzGbA|G|@|Gv@~Gp@~Gj@~Gd@`H^`HX`HR`HL`HF`H@`HA`HG`HM`HS`HY`Ha@~Gg@~Gm@~Gs@|Gy@|G_AzGeAzGkAxGqAxGwAvG}AtGcBrGgBrGmBpGsBnGyBlG_CjGeChGkCfGoCdGuCbG{C`GaD~FeDzFkDxFqDvFuDrF{DpF_EnFeEjFiEhFoEdFsE`FyE~E}EzEcFxEgFtEkFpEoFlEuFjEyFfE}FbEaG~DeGzDiGvDmGrDqGnDuGjDyGfD{GbD_H~CcHzCeHvCiHpCmHlCoHhCsHdCuH~BwHzB{HvB}HrB_IlBaIhBeIbBgI~AiIzAkItAmIpAoIjAoIfAqI`AsI|@uIx@uIr@wIn@wIh@yIb@yI^{IX{IT{IN{IJ}ID}I@}IA}IE}IK}IO{IU{IY{I_@{Ie@yIi@yIo@wIs@wIy@uI}@uIcAsIgAqIkAoIqAoIuAmI{AkI_BiIeBgIiBeImBaIsB_IwB}H{B{HaCwHeCuHiCsHmCoHqCmHwCiH{CeH_DcHcD_HgD{GkDwGoDuGsDqGwDmG{DiG_EeGcEaGgE}FkEyFmEsFqEoFuEkFyEgF{EaF_F}EcFyEeFsEiFoEkFiEoFeEqF_EsF{DwFuDyFqD{FkD_GeDaGaDcG{CeGuCgGoCiGkCkGeCmG_CoGyBqGsBsGmBsGgBuGaBwG}A{G{@'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.1, -118.55928629762), new google.maps.LatLng(34.328277777778, -118.16355555556));
    polygon.altLow  = 3000;
    polygon.altHigh = 4800;
    polygon.desc    = 'BURBANK-GLENDALE-PASADENA AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'BURBANK-GLENDALE-PASADENA AIRPORT CLASS C<br />3000-4800');
    

// FRESNO AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g|k_FnqizUcET_H`@aHZaHTaHNaHFaH@aHAaHGaHMaHSaHY_Ha@_Hg@_Hm@_Hs@}Gy@}G_A{GeA{GkAyGsAyGyAwG_BuGeBsGkBsGqBqGwBoG}BmGcCkGiCiGmCgGsCeGyCcG_DaGeD_GkD{FoDyFuDwF{DsFaEqFeEoFkEkFoEiFuEeF{EcF_F_FeF{EiFyEmFuEsFqEwFmE{FkEaGgEeGcEiG_EmG{DqGwDuGsDyGoD}GkDaHgDeHcDiH_DkH{CoHwCsHsCuHmCyHiC}HeC_IaCcI{BeIwBgIsBkImBmIiBoIeBqI_BsI{AuIuAwIqAyImA{IgA}IcA_J}@_Jy@aJs@cJo@cJi@eJe@eJ_@gJ[gJUgJOgJKiJEiJAiJ@qJDiJJiJNgJTgJXgJ^gJd@eJh@eJn@cJr@cJx@aJ|@_JbA_JfA}IjA{IpAyItAwIzAuI~AsIdBqIhBoIlBmIrBkIvBgIzBeI`CcIdC_IhC}HlCyHpCwHvCsHzCoH~CmHbDiHfDeHjDaHnD}GrDyGvDuGzDqG~DmGbEiGfEeGjEaGlE{FpEwFtEsFxEmFzEiF~EeFbF_FdF{EhFuEjFqEnFkEpFeErFaEvF{DxFuDzFqD~FkD`GeDbG_DdGyCfGsChGoCjGiClGcCnG}BpGwBrGqBrGkBtGeBvG_BvGyAxGsAzGmAzGeA|G_A|Gy@~Gs@~Gm@~Gg@~Ga@`H[`HS`HM`HG`HA`H@`HF`HN`HT`HZ~G`@~Gf@~Gl@|Gr@|Gz@|G`AzGfAzGlAxGrAvGxAvG~AtGdBrGjBrGpBpGvBnG|BlGbCjGhChGnCfGtCdGzCbG~C`GdD|FjDzFpDxFtDvFzDrF`EpFdElFjEjFpEfFtEdFzE`F~E~EdFzEhFvElFtErFpEvFlEzFhE`GfEdGbEhG~DlGzDpGvDtGrDxGnD|GjD`HfDdHbDhH~CjHzCnHvCrHpCtHlCxHhCzHdC~H~B`IzBdIvBfIrBhIlBlIhBnIbBpI~ArIzAtItAvIpAxIjAzIfA|I`A|I|@~Ix@`Jr@`Jn@bJh@bJd@dJ^dJXdJTfJNfJJfJDfJ@fJAfJEfJKfJOfJUfJYdJ_@dJc@dJi@bJm@bJs@`Jw@`JeAjKa_@|c@geA~jAqkAtsAoz@`lAsiAtjAokAdwA}w@by@'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.692635653677, -119.82190202833), new google.maps.LatLng(36.859485389187, -119.61449235855));
    polygon.altLow  = 0;
    polygon.altHigh = 4400;
    polygon.desc    = 'FRESNO AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'FRESNO AIRPORT CLASS C<br />SFC-4400');
    

// FRESNO AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g|k_FnqizUoDzLgdAx}@_z@zoAmaAt}@sl@hq@sx@dtAui@||@}c@~t@sc@v`A}V|WgVaKuO}GqOiHmOuHgO_IcOkI_OwIyNaJuNmJoNwJiNcKeNmK_NwKyMaLsMkLmMwLgMaMaMiMyLsMsL}MmLgNeLoN_LyNwKcOoKkOiKsOaK}OyJePqJmPiJuPaJ}PyIeQqIkQiIsQaI{QwHaRoHgRgHoR}GuRuG{RkGaScGgSyFmSqFqSgFwS}E{SuEaTkEeTaEiTwDmTmDqTcDuT{CyTqC}TgC_U}BcUsBeUiBgU_BiUuAkUkAmUaAoUw@qUm@qUa@sUWsUMsUCsUBgVLsUVsU`@sUj@qUt@qU`AoUjAmUtAkU~AiUhBgUrBeU|BcUfC_UpC}TxCyTbDuTlDqTvDmT`EiTjEeTrEaT|E{SfFwSnFqSxFmSbGgSjGaStG{R|GuRfHoRnHgRvHaR~H{QhIsQpIkQxIeQ`J}PhJuPpJmPxJeP`K}OhKsOnKkOvKcO|KyNdLqNjLgNrL}MxLsM~LkMfMaMlMwLrMmLxMaL~MwKdNmKhNcKnNwJtNmJxNaJ~NwIbOkIfOaIlOuHpOiHtO}GxOqG|OgG~O{FbPoFfPcFhPwElPkEnP_ErPqDtPeDvPyCxPmCzPaC|PuB~PgB~P{A`QoA`QaAbQu@bQi@bQ]dQOdQCdQDdQRbQ^bQj@bQx@`QdA`QpA~P|A|PjB|PvBzPbCxPnCvP|CrPhDpPtDnP`ElPlEhPxEdPdFbPpF~O|FzOhGvOtGrO~GnOjHjOvHfO`IbOlI|NxIxNbJrNnJnNxJhNbKbNnK|MxKvMbLpMlLjMvLdM`M~LjMxLtMpL|MjLfNbLpN|KxNtKbOnKjOfKrO~JzOvJdPnJlPfJtP~IzPvIbQnIjQfIpQ~HxQvH~QlHfRdHlR|GrRrGxRjG~R`GdSxFjSnFnSdFtS|ExSrE~ShEbT`EfTvDjTdFtZs`@ne@iz@dz@{cA~aAmaAdoAukAnkAqdAr}@ynAd|Amc@rh@`AmKv@aJr@aJl@cJh@cJb@eJ^eJXeJTgJNgJJgJDgJ@gJAgJEgJKgJOgJUgJYeJ_@eJe@eJi@cJo@cJs@aJy@aJ}@_JaA}IgA{IkA{IqAyIuAwI{AuI_BsIcBqIiBoImBmIsBiIwBgI{BeI_CaIeC_IiC{HmCyHqCuHwCsH{CoH_DkHcDiHgDeHkDaHoD}GsDyGwDuG{DqG_EmGcEiGgEeGiEaGmE{FqEwFuEsFwEmF{EiF_FeFaF_FeF{EgFuEkFqEmFkEqFeEsFaEwF{DyFuD{FqD}FkDaGeDcG_DeGyCgGuCiGoCkGiCmGcCoG}BqGwBqGqBsGkBuGeBwG_BwGyAyGsA{GmA{GgA}GaA}G{@}Gs@_Hm@_Hg@_Ha@aH[aHUaHOaHGaHAaH@aHFaHLaHRaHZ_H`@_Hf@_Hl@}Gr@}Gx@}G~@{GdA{GlAyGrAwGxAwG~AuGdBsGjBsGpBqGvBoG|BmGbCkGhCiGnCgGrCeGxCcG~CaGdD}FjD{FpDyFtDwFzDsF`EqFdEoFjEkFpEiFtEeFzEaF~E_FdF{EhFyElFuErFqEvFmEzFkE`GgEdGcEhG_ElG{DpGwDtGsDxGoD|GkD`HgDdHcDhH_DjH{CnHwCrHqCtHmCxHiC|HeC~HaCbI{BdIwBfIsBjImBlIiBnIeBpI_BrI{AtIuAvIqAxIkAzIgA|IcA~I}@~Iy@`Js@bJo@bJi@dJe@dJ_@dJYfJUfJOfJKfJEpJAhJ@hJDhJJfJNfJTfJZfJ^dJd@dJh@dJn@bJr@bJx@`J|@~IbA~IfA|IjAzIpAxItAvIzAtI~ArIdBpIhBnIlBlIrBjIvBfIzBdI`CbIdC~HhC|HlCxHpCtHvCrHzCnH~CjHbDhHfDdHjD`HnD|GrDxGvDtGzDpG~DlGbEhGfEdGjE`GlEzFpEvFtErFxElFzEhF~EbFbF~EdFzEhFtEjFnEnFjEpFdErF`EvFzDxFtDzFnD~FjD`GdDbG~CdGxCfGrChGlCjGhClGbCnG|BpGvBrGpBrGjBtGdBvG~AvGxAxGpAzGjAzGdA|G~@|Gx@|Gr@~Gl@~Gf@~G`@`HX`HR`HL`HF`H@`HA`HG`HO`HU`H[~Ga@dEO'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.616227777778, -119.91123611111), new google.maps.LatLng(36.94289559737, -119.51080374405));
    polygon.altLow  = 1600;
    polygon.altHigh = 4400;
    polygon.desc    = 'FRESNO AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'FRESNO AIRPORT CLASS C<br />1600-4400');
    

// FRESNO AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_on~EzhjyUxCvTnCxTdC|TzB~TpB`UhBdU~AfUtAhUhAjU~@jUt@lUj@nU`@nUVnULpUBpUCpUMpUWnUa@nUk@nUu@lU_AjUiAjUsAhU}AfUgBdUqB`U{B~TeC|ToCxTyCvTcDrTmDnTwDjT_EfTiEbTsE~S}ExSeFtSoFnSyFjSaGdSkG~RsGxR}GrReHlRmHfRwH~Q_IxQgIrQoIjQwIbQ_J|PgJtPoJlPwJdP_K|OgKrOoKjOuKbO}KxNcLpNkLfNqL~MyLtM_MjMeM`MkMvLqMlLwMbL}MxKcNnKiNbKmNxJsNnJyNbJ}NxIaOlIgObIkOvHoOjHsO~GwOtG{OhG_P|FcPpFePdFiPxEkPlEoP`EqPtDsPhDwP|CyPnC{PbC}PvB}PjB_Q~AaQpAaQdAcQx@cQj@cQ^eQReQFeQCeQOcQ[cQi@cQu@aQaAaQoA_Q{A_QgB}PsB{PaCyPmCwPyCuPeDsPqDoP}DmPkEiPwEgPcFcPoF_P{FmIuC|V}Wrc@w`A|c@_u@ti@}|@rx@etArl@iq@laAu}@~y@{oAfdAy}@nD{L|w@cy@nkAewAriAujAnz@alApkAusAfeA_kA`_@}c@lc@sh@xnAe|ApdAs}@tkAokAlaAeoAzcA_bAhz@ez@r`@oe@jBlN'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.609221921556, -119.92559048129), new google.maps.LatLng(36.837308333333, -119.65863611111));
    polygon.altLow  = 2500;
    polygon.altHigh = 4400;
    polygon.desc    = 'FRESNO AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'FRESNO AIRPORT CLASS C<br />2500-4400');
    

// METROPOLITAN OAKLAND AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wlheFhsriV_Hm@_Hs@}G{@}GaA{GgA{GmAyGsAyGyAwG_BuGeBuGkBsGqBqGyBoG_CmGeCkGiCiGoCgGuCeG{CcGaDaGgD_GmD{FsDyFwDwF}DsFcEqFiEoFmEkFsEiFwEeF}EcFcF_FgF{EmFyEqFuEuFqE{FoE_GkEcGgEiGcEmG_EqG{DuGwDyGsD}GoDaHkDeHgDiHcDmH_DoH{CsHwCwHsC{HmC}HiCaIeCcIaCgI{BiIwBmIsBoImBqIiBsIeBuI_ByI{A{IuA}IqA_JmA_JgAaJcAcJ}@eJy@eJs@gJo@iJi@iJe@kJ_@kJ[kJUmJOmJKmJEmJAmJ@mJDwJJmJNmJTmJXkJ^kJd@kJh@iJn@iJr@gJx@eJ|@eJbAcJfAaJjA_JpA_JtA}IzA{I~AyIdBuIhBsIlBqIrBoIvBmIzBiI`CgIdCcIhCaIlC}HrC{HvCwHzCsH~CqHbDmHfDiHjDeHnDaHrD}GvDyGzDuG~DqGbEmGfEiGjEcGlE_GpE{FtEuFxEqFzEmF~EgFbFcFdF}EhFyEjFsEnFmEpFiErFcEvF}DxFyDzFsD~FmD`GgDbGaDdG{CfGuChGqCjGkClGeCnG_CpGyBrGsBrGmBtGeBvG_BxGyAxGsAzGmAzGgA|GaA|G{@~Gs@~Gm@~Gg@`Ha@`H[`HU`HM`HG`HA`H@`HF`HN`HT`HZ`H`@~Gf@~Gn@~Gt@|Gz@|G`AzGfAzGlAxGrAxGzAvG`BtGfBrGlBrGrBpGxBnG~BlGdCjGjChGpCfGvCdG|CbG`D`GfD|FlDzFrDxFxDvF|DrFbEpFhEnFlEjFrEhFxEdF|E`FbF~EfFzElFxEpFtEtFpEzFlE~FjEbGfEhGbElG~DpGzDtGvDxGrD|GnD`HjDdHfDhHbDlH~CnHzCrHvCvHpCxHlC|HhC`IdCbI~BfIzBhIvBjIrBnIlBpIhBrIbBtI~AvIzAxItAzIpA|IjA~IfA`JbAbJ|@bJx@dJr@fJn@fJh@hJd@hJ^jJXjJTjJNjJJlJDlJ@lJAlJElJKlJUfOoHbAoKzAmKbBmKlBkKtBiK|BgKfCeKnCcKvCaK`D_KhD}JpDyJxDwJ`EuJhEqJrEoJzEkJbFgJjFeJrFaJxFuKdHaAtEgAdEiAdEkAbEoA`EqA~DsA|DwAzDyAxD{AvD_BtDaBrDcBpDeBnDiBlDkBhDmBfDoBdDqBbDsB`DwB|CyBzC{BxC}BtC_CrCaCnCcClCeChCgCfCiCbCkC`CkC|BmCzBoCvBqCtBsCpBuClBuCjBwCfByCbB{C`B{C|A}CxA}CtA_DrAaDnAaDjAcDfAcDbAeD`AsCx@wChGqFzKkF~KeFdL_FhLyEnLsErLmExLgE|LaE`M{DdMuDhMmDlMgDpMaDtM{CxMsCzMmC~MeBrIaJY'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.637902302241, -122.32530277778), new google.maps.LatLng(37.804874283529, -122.11573103498));
    polygon.altLow  = 0;
    polygon.altHigh = 2100;
    polygon.desc    = 'METROPOLITAN OAKLAND AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'METROPOLITAN OAKLAND AIRPORT CLASS C<br />SFC-2100');
    

// METROPOLITAN OAKLAND AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uvveFt{}hVAvJ@lJDlJJlJNlJTjJZjJ^jJd@hJh@hJn@fJr@fJx@dJ|@dJbAbJfA`JjA~IpA|ItAzIzAxI~AvIdBtIhBrIlBpIrBnIvBjIzBhI`CfIdCbIhC`IlC|HpCxHvCvHzCrH~CnHbDjHfDhHjDdHnD`HrD|GvDxGzDtG~DpGbElGfEfGjEbGlE~FpEzFtEtFxEpFzEjF~EfF`F`FdF|EhFvEjFrEnFlEpFfErFbEvF|DxFvDzFrD|FlD`GfDbG`DdGzCfGtChGnCjGhClGbCnG|BpGvBrGpBrGjBtGdBvG~AvGxAxGrAzGlAzGfA|G`A|Gx@|Gr@~Gl@~Ir@aDrRyBfNqBjNkBlNeBnN}ApNwArNoAtNiAvNaAxN{@xNs@zNm@|Ne@|N_@|NW~NO~NI~NAlO@~NH~NN~NV~N^|Nd@|Nl@zNr@zNz@xN`AxNhAvNnAtNvArN|ApNdBnNjBlNrBjNxBfN~BdNfC`NlC~MrCzMfBtIyOs@cQi@cQu@aQcAaQoA_Q{A}PiB}PuB{PaCyPoCwP{CuPgDqPsDoPaEmPmEiPyEgPeFcPqF_P}F}OiGyOuGuOaHqOmHkOyHgOcIcOoI_O{IyNeJuNqJoN{JiNgKeNqK_N}KyMgLsMqLmM{LgMeM_MoMyLyMsLcNkLmNeLwN}K_OwKiOoKqOiK{OaKcPyJkPqJsPiJ{PaJcQyIkQqIsQiI{QaIaRwHiRoHoRgHuRyDgKrCm^|Cy`@lDu`@zDq`@jEm`@xEi`@hFc`@vF_`@dGy_@tGs_@bHm_@pHe_@~H__@lIw^zIo^hJg^vJ_^dKw]rKo]`Le]hRoj@l}DxOMvM'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.727180555556, -122.43075), new google.maps.LatLng(37.866647222222, -122.21393888889));
    polygon.altLow  = 1500;
    polygon.altHigh = 2100;
    polygon.desc    = 'METROPOLITAN OAKLAND AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'METROPOLITAN OAKLAND AIRPORT CLASS C<br />1500-2100');
    

// METROPOLITAN OAKLAND AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('udvdFji_iVJmJDmJ@mJAmJEmJKkJOkJUkJYkJ_@iJe@iJi@iJo@gJs@gJy@eJ}@cJaAcJgAaJkA_JqA}IuA{I{AyI_BwIcBuIiBsImBqIsBoIwBkI{BiI_CeIeCcIiCaImC}HqCyHwCwH{CsH_DoHcDmHgDiHkDeHoDaHsD}GwDyG{DuG_EqGcEmGgEgGkEcGmE_GqE{FuEuFyEqF{EmF_FgFaFcFeF}EiFyEkFsEmFmEqFiEsFcEwF}DyFyD{FsD}FmDaGgDcGaDeG}CgGwCiGqCkGkCmGeCoG_CqGyBsGsBsGmBuGgBwGaBwG{AyGsA{GmA{GgAcJuAhL}ZpRwc@jDgE`FuDfJsGtHoD|BiGrJcSdDoHjDcCYqIYqf@o@sd@e@oi@j@oLb]wIhYaHlYmGnY{FrYiFvYuExYcEzYoD~Y}C`ZiCbZwBbZcBdZqAdZ}@fZk@fZWfZE|Y?fQzRpLdNjLlNbLvN|K~NtKhOnKpOfKzO~JbPvJjPnJrPhJzP`JbQvIjQnIrQfIxQ~H`RvHfRlHnRdHtR|GzRrG`SjGfS`GlSxFrSnFxSdF|S|EbTrEfTjErSm`CloO}JkCgKgCiK_CkKwBkKmBmKeBoK}AoKsAqKkAsKaAsKy@sKo@uKg@uK_@uKUuKMuKCuK@uKJuKRuK\\uKd@sKn@sKv@sK`AsNvAPgO'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.564547222222, -122.23352222222), new google.maps.LatLng(37.707208333333, -122.05929444444));
    polygon.altLow  = 1500;
    polygon.altHigh = 2100;
    polygon.desc    = 'METROPOLITAN OAKLAND AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'METROPOLITAN OAKLAND AIRPORT CLASS C<br />1500-2100');
    

// MONTEREY PENINSULA AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sdy~EvmtfVf@cl@vB{k@hEmk@xGyj@fJ}i@rL{h@|Nqg@dQaf@hSkd@jUqb@hWo`@dYi^zZ_\\l\\oYz]{Vb_@cTf`@iQda@kN|a@kKpb@iH~b@eEfc@aBjc@>fc@dB~b@hEpb@jH|a@lKda@lNd`@jQ`_@dTx]zVj\\nYxZ~[bYh^hWn`@jUnb@hSjd@dQ~e@|Nng@rLvh@dJzi@vGtj@hEjk@vBxk@f@~k@g@~k@wBxk@gEjk@wGvj@eJzi@qLxh@{Nng@cQ`f@iSjd@kUnb@iWn`@cYh^yZ~[k\\nYy]|Va_@dTe`@jQca@lN}a@lKqb@lH_c@hEgc@dBkc@@gc@aB_c@eEqb@iH_b@kKea@kNg`@gQc_@cT{]{Vm\\mY{Z}[eYi^kWo`@mUqb@kSkd@eQaf@}Nqg@sLyh@gJ}i@yGyj@iEmk@yB{k@g@cl@?G'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.503465606654, -121.94641632389), new google.maps.LatLng(36.670344335972, -121.7396019568));
    polygon.altLow  = 0;
    polygon.altHigh = 4200;
    polygon.desc    = 'MONTEREY PENINSULA AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'MONTEREY PENINSULA AIRPORT CLASS C<br />SFC-4200');
    

// MONTEREY PENINSULA AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yt}}EpccgVlKr|@xK~}@gBhd@oG~d@`A|_@h\\qVr[e]jZwf@nYeUbd@IpUzm@b\\~P~SkYzU}Vf_@uDf_@cTt]_Ln`@cTjUuXjY_DpQlc@h\\}Vdb@uU`g@aZte@wVfW{MyGv[sE|S}ExSeFrSoFnSyFhSaGbSkG|RsGvR}GpReHjRmHdRwH~Q_IvQgIpQoIhQwIbQ_JzPgJrPoJjPwJbP_KzOgKrOoKhOuK`O}KxNcLnNkLfNqL|MyLrM_MhMeM`MkMvLqMlLwMbL}MvKcNlKiNbKmNxJsNlJyNbJ}NvIaOlIgO`IkOvHoOjHsO~GwOrG{OfG_P|FcPpFePdFiPxEkPlEoP`EqPtDsPhDwPzCyPnC{PbC}PvB}PjB_Q|AaQpAaQdAcQx@cQj@cQ^eQReQFeQCeQOcQ[cQi@cQu@aQaAaQmA_Q{A_QgB}PsB{P_CyPmCwPyCuPeDsPqDoP}DmPiEiPuEgPaFcPmF_PyF}OeGyOqGuO}GqOiHmOsHgO_IcOkI_OuIyNaJuNkJoNwJiNaKeNkK_NwKyMaLsMkLmMuLgM_MaMiMyLsMsL}MmLeNeLoN_LwNwKaOoKiOiKsOaK{OyJcPqJkPiJsPaJ{PyIcQqIkQiIqQaIyQwH_RoHgRgHmR}GsRuGyRkG_ScGeSyFkSqFoSgFuS}E{SuE_TkEcTaEgTwDkTmDoTcDsT{CwTqC{TgC}T}BaUsBcUiBeU_BgUuAiUkAkUaAmUw@oUm@oUa@qUWqUMqUCqUBeVLqUVqU`@qUj@oUt@oU`AmUjAkUtAiU|AwXnm@mAvg@d@jr@lFv{@|Jhu@vFpj@|Jz_A|Izi@|Jxd@jHvo@`IjYjDg@bGy@`Js@`Jo@bJi@bJe@dJ_@dJYdJUfJOfJKfJEpJAfJ@fJDfJJfJNfJTfJZdJ^dJd@dJh@bJn@bJr@`Jx@`J|@~IbA|IfAzIlAzIpAxItAvIzAtI~ArIdBpIhBnIlBjIrBhIvBfIzBdI`C`IdC~HhCzHlCxHrCtHvCpHzCnH~CjHbDfHfDbHjD`HnD|GrDxGvDtGzDpG~DlGbEhGfEbGjE~FlEzFpEvFtEpFxElFzEhF~EbFbF~EdFxEhFtEjFnEnFjEpFdErF~DvFzDxFtDzFnD~FhD`GdDbG~CdGxCfGrChGlCjGfClG`CnG|BpGvBrGpBrGjBtGdBvG~AvGvAxGpAzGjAzGdA|G~@|Gx@~Gr@~Gl@~Gf@~G`@`HX`HR`HL`HF`H@`HA`HG`HO`HU`H[~Ga@~Gg@~Gm@|Gs@|G{@|GaAzGgAzGmAxGsAvGyAvG_BtGeBrGkBpGqBpGwBnG}BlGcCjGiChGoCfGuCdGyCbG_D`GeD|FkDzFqDxFuDvF{DrFaEpFeElFkEjFoEfFuEdFyE`F_F~EcFzEiFvEmFdHcI'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.429686111111, -122.04989289434), new google.maps.LatLng(36.753744132262, -121.80606111111));
    polygon.altLow  = 1500;
    polygon.altHigh = 4200;
    polygon.desc    = 'MONTEREY PENINSULA AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'MONTEREY PENINSULA AIRPORT CLASS C<br />1500-4200');
    

// MONTEREY PENINSULA AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ok|}EhngfVaEkG_EmGcEiGgEcGiE_GmE{FqEwFuEqFwEmF{EiF_FcFaF_FeFyEgFuEkFoEmFkEqFeEsFaEwF{DyFuD{FoD}FkDaGeDcG_DeGyCgGsCiGoCkGiCmGcCoG}BqGwBsGqBsGkBuGeBwG_BwGyAyGsA{GmA{GgA}GaA}Gy@}Gs@_Hm@_Hg@_Ha@aH[aHUaHOaHGaHAaH@aHFaHLaHRaHX_H`@_Hf@_Hl@_Hr@}Gx@}G~@{GdA{GjAyGpAwGxAwG~AuGdBsGjBsGpBqGvBoG|BmGbCkGfCiGlCgGrCeGxCcG~CaGdD}FjD{FnDyFtDwFzDsF~DqFdEoFjEkFnEiFtEeFxEcF~E_FbF{EhFyElFuEpFqEvFmEzFkE~FgEbGcEhG_ElG{DpGwDtGsDxGoD|GkD`HgDdHcDfH_DjH{CnHwCrHqCtHmCxHiCzHeC~HaC`I{BdIwBfIsBhImBjIiBnIeBpI_BrI{AtIuAvIqAxIkAzIgAzIwAxLeeOwtAfBwQrBcU|BaUfC}TpC{TxCwTbDsTlDqTvDmT`EgTjEcTrE_T|E{SfFuSnFqSxFkSbGeSjG_StGyR|GsRfHmRnHgRvH_R~HyQhIqQpIkQxIcQ`J{PhJsPpJkPxJcP`K{OhKsOnKiOvKaO|KyNdLoNjLeNrL}MxLsM~LiMfM_MlMuLrMkLxMaL~MwKdNmKhNaKnNwJtNkJxNaJ~NuIbOkIfO_IlOsHpOiHtO}GxOqG|OeG~OyFbPmFfPaFhPuElPiEnP}DrPqDtPeDvPyCxPmCzPaC|PsB~PgB~P{A`QoA`QaAbQu@bQi@bQ]dQOdQCdQDdQRbQ^bQj@bQx@`QdA`QpA~P|A|PjB|PvBzPbCxPnCvPzCtPfDpPtDnP`ElPlEhPxEdPdFbPpF~OzFzOfGvOrGrO~GnOjHjOtHfO`IbOlI|NvIxNbJrNlJnNvJhNbKbNlK|MvKvM`LpMjLjMtLdM~L~LhMxLrMpL|MjLdNbLnN|KxNtK`OnKhOfKrO~JzO`K`PynKp}K'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.458988888889, -121.820175), new google.maps.LatLng(36.751208333333, -121.63611153201));
    polygon.altLow  = 2500;
    polygon.altHigh = 4200;
    polygon.desc    = 'MONTEREY PENINSULA AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'MONTEREY PENINSULA AIRPORT CLASS C<br />2500-4200');
    

// ONTARIO INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sugoEnrcmUcFgKcD_H_DaH{CeHwCiHsCkHmCoHiCqHeCuHaCwH{B{HwB}HsB_ImBaIiBcIeBgI_BiI{AkIuAmIqAmImAoIgAqIcAsI}@sIy@uIs@wIo@wIi@yIe@yI_@{I[{IU{IO{IK{IE}IA}I@eJD}IJ}IN{IT{IX{I^{Id@yIh@yIn@wIr@wIx@uI|@uIbAsIfAqIjAoIpAmItAmIzAkI~AiIdBgIhBcIlBaIrB_IvB}HzB{H`CwHdCuHhCqHlCoHpCkHvCiHzCeH~CaHbD_HfD{GjDwGnDsGrDoGvDmGzDiG~DeGbEaGfE{FjEwFlEsFpEoFtEkFxEeFzEaF~E}EbFwEdFsEhFoEjFiEnFeEpF_ErFyDvFuDxFoDzFkD~FeD`G_DbGyCdGuCfGoChGiCjGcClG_CnGyBpGsBrGmBrGgBtGaBvG{AxGuAxGoAzGiAzGcA|G}@|Gw@~Gq@~Gk@~Ge@~G_@`HY`HS`HM`HG`HA`H@`HF`HL`HR`HX~G^~Gd@~Gj@~Gr@|Gx@|G~@zGdAzGjAxGnAvGtAvGzAtG`BrGfBrGlBpGrBnGxBlG~BjGdChGhCfGnCdGtCbGzC`G~C|FdDzFjDxFnDvFtDrFzDpF~DlFdEjFhEhFnEdFrE`FvE~E|EzE`FxEdFtEjFpEnFlErFjEvFfEzFbE~F~DdGzDhGvDjGrDnGnDrGjDvGfDzGbD~G~C`HzCdHvChHpCjHlCnHhCpHdCtH~BvHzBxHvB|HrB~HlB`IhBbIbBdI~AfIzAhItAjIpAlIjAnIfApIbApI|@rIx@tIr@tIn@vIh@vId@xI^xIXzITzINzIH~EaDIsBEsBAsB?sB>sB@sBDsBFsBHsBJqBLqBPqBRqBTqBVqBXoB\\oB^oB`@oBb@mBd@mBh@mBj@kBl@kBn@kBp@iBr@iBt@iBv@gBz@gB|@eB~@eB`AcBbAcBdAaBfAaBhA_BjA_BlA}AnA{ApA{ArAyAtAwAvAwAxAuAzAsA|AsA~AqA`BoA`BoAbBmAdBkAfBiAhBiAhBgAjBeAlBcAnBaAnBaApB_ArB}@tB{@tBy@vBw@vBu@xBs@zBs@zBq@|Bo@|Bm@~Bk@~Bi@`Cg@`Ce@`Cc@bCa@bC_@dC]dC[dCYfCWfCUfCSfCQhCOhCMhCKhCIhCGhCEhCChCAlC?hC>hC@hCBhCDhCFhCHhCJhCLhCNhCPhCRfCTfCVfCXfCZdC\\dC^dC`@bCb@bCd@`Cf@`Ch@`Cj@~Bl@~Bn@|Bp@|Br@zBr@zBt@xBv@vBx@vBz@tB|@rB~@rB`ApB`AnBbAnBdAlBfAjBhAhBhAhBjAfBlAdBnAbBnA`BpA`BrA~ArA|AtAzAvAxAvAvAxAtAzArArAfA{EnGiEvFmErFqEnFuEjFwEfF{E`F_F|EaFxEeFrEgFnEkFhEmFdEqF~DsFzDwFtDyFnD{FjD}FdDaG~CcGzCeGtCgGnCiGhCkGdCmG~BoGxBqGrBsGlBsGfBuG`BwGzAwGvAyGpA{GjA{GdA}G~@}Gx@_Hr@_Hl@_Hf@_H`@aHXaHRaHLaHFaH@aHAaHGaHMaHSaHYaH_@_He@_Hk@_Hq@}Gw@}G}@{GcA{GiAyGoAyGuAwG{AuGaBsGgBsGmBqGsBoGyBqHmCF{@NeBLeBLeBJeBHgBFgBFgBDgBBgB@gB@gB>gB?gBAgBAgBCgBEgBGgBGgBIgBKeBMeBMeBOeBQeBSeBScBUcBWcBYcBYaB[aB]aB_@_B_@_Ba@_Bc@}Ac@}Ae@}Ag@{Ag@{Ai@yAk@yAk@wAm@wAo@uAo@uAq@sAs@sAs@qAu@qAu@oAw@mAw@mAy@kA{@kA{@iA}@gA}@gA_AeA_AcAaAcAaAaAcA_AcA}@eA}@eA{@gAy@gAy@gAw@iAu@iAs@kAq@kAq@kAo@mAm@mAk@mAi@oAg@oAg@oAe@oAc@qAa@qA_@qA]qA[sA[sAYsAWsAUsASsAQuAOuAMuAKuAIuAIuAGuAEuACuAAuA?uA>uA@uABuADuAFuAHuAHuAJuALuANsAPsARsATsAVsAXsAZqAZqA\\qA^qA`@oAb@oAd@oAf@oAf@mAh@mAj@iAl@'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.972722222222, -117.70144181749), new google.maps.LatLng(34.139581832588, -117.50088999221));
    polygon.altLow  = 0;
    polygon.altHigh = 5000;
    polygon.desc    = 'ONTARIO INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'ONTARIO INTL AIRPORT CLASS C<br />SFC-5000');
    

// ONTARIO INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gl`oErgjmUnGxBpGrBrGlBrGfBtG`BvGzAxGtAxGnAzGhAzGbA|G|@|Gv@~Gp@~Gj@~Gd@`H^`HX`HR`HL`HF`H@`HA`HG`HM`HS`HY~Ga@~Gg@~Gm@~Gs@|Gy@|G_AzGeAzGkAxGqAvGwAvG{AtGaBrGgBrGmBpGsBnGyBlG_CjGeChGiCfGoCdGuCbG{C`G_D|FeDzFkDxFoDvFuDrF{DpF_ElFeEjFiEfFoEdFsE`FyE~E}EzEaFvEgFtEkFpEoFlEsFhEwFzEoGsAgA{AsAyAuAwAwAwAyAuA{AsA}AsA_BqAaBoAaBoAcBmAeBkAgBiAiBiAiBgAkBeAmBcAoBaAoBaAqB_AsB}@sB{@uBy@wBw@wBu@yBs@{Bs@{Bq@}Bo@}Bm@_Ck@_Ci@aCg@aCe@aCc@cCa@cC_@eC]eC[eCYgCWgCUgCSgCQiCOiCMiCKiCIiCGiCEiCCiCAiC?iC>iC@mCBiCDiCFiCHiCJiCLiCNiCPiCRgCTgCVgCXgCZeC\\eC^eC`@cCb@cCd@aCf@aCh@aCj@_Cl@_Cn@}Bp@}Br@{Br@{Bt@yBv@wBx@wBz@uB|@uB~@sB`AqB`AoBbAoBdAmBfAkBhAiBhAiBjAgBlAeBnAcBnAaBpAaBrA_BrA}AtA{AvAyAvAwAxAuAzAsAzAqA|AoA~AmA~AkA`BiA`BgAbBeAbBcAdBaAdB_AfB}@fB{@hBw@hBu@hBs@jBq@jBo@jBm@lBk@lBi@lBe@nBc@nBa@nB_@nB]pBYpBWpBUpBSpBQpBMrBKrBIrBGrBErBArB?rB>rB@rBD`DHK_FO{IU{IYyI_@yIe@yIi@wIo@wIs@uIy@uI}@sIaAqIgAqIkAoIqAmIuAkI{AiI_BgIcBeIiBcImBaIsB_IwB}H{ByH_CwHeCuHiCqHmCoHqCkHwCiH{CeH_DaHcD_HgD{GkDwGoDsGsDoGwDkG{DiG_EeGcE_GgE{FkEwFmEsFqEoFuEkFyEeF{EaF_F}EaFwEeFsEiFoEkFiEmFeEqF_EsF{DwFuDyFoD{FkD}FeDaG_DcG{CeGuCgGoCiGiCkGeCmG_CoGyBqGsBsGmBsGgBuGaBwG{AwGuAyGoA{GkA{GeA}G_A}Gy@_Hs@_Hk@_He@_H_@aHYaHSaHMaHGaHAaH@aHFaHLaHRaHX_H^_Hd@_Hj@_Hp@}Gv@}G|@{GbA{GhAyGnAyGtAwGzAuG`BsGfBsGlBqGrBoGxBmG~BkGbCiGhCgGnCeGtCcGxCaG~C_GdD{FjDyFnDwFtDsFxDqF~DoFdEkFhEiFnE_CnB?{gc@bvQ??~aMrWnGhPpEfP|EbPhF~OtFzO~FxOjGtOvGpO`HjOlHfOvHbObI|NlIxNvIrNbJnNlJhNvJbN`K|MjKxMtKrM~KjMhLdMrL~LzLxLdMrLnMjLvMdL`N|KhNvKpNnKxNfKbO~JjOxJrOpJzOhJ`P`JhPxIpPpIvPfI~P~HdQvHjQnHrQdHxQ|G~QrGdRjGjR`GnRxFtRnFzRfF~R|EbSrEhShElS`EpSvDtSlDxSbD|SxC~SnCbTdCdT|BhTrBjThBlT~AnTtApTjArT~@tTt@tTj@vT`@vTVxTLxTBxTCxTMxTWxTa@vTk@vTu@tT_AtTiArTsApT}AnTgBlTqBjT{BhTeCdToCbTyC~ScD|SmDxSwDtSaEpSiElSsEhS}EdSeF~RoFzRyFtRaGnRkGjRsGdR}G~QeHxQmHrQwHlQ_IdQgI~PoIvPyIpPaJhPiJ`PqJzOwJrO_KjOgKbOoKzNuKpN}KhNeL`NkLvMqLnMyLdM_MzLeMrLkMhLqM~KwMtK}MjKcN`KiNvJoNlJsNbJyNvI}NlIcObIgOvHkOlHoO`HuOvGyOjG{O~F_PtFcPhFgP|EiPpEmPfEoPzDsPnDuPbDwPvCyPjC{P~B}PrB_QfB_QzAaQnAcQbAcQv@cQj@eQ^eQPeQDeQCeQOeQ[cQg@cQs@cQ_AaQkAaQwA_QcB}PqB{P}ByPiCwPuCuPaDsPkDqPwDmPcEkPoEgP{EcPgFaPqFuWmJ`RuoA~y@yqDXeoDbAMrAUrAWrAYrA[pA[pA]pA_@pAa@nAc@nAe@nAg@nAg@lAi@lAk@lAm@jAo@jAq@jAq@hAs@hAu@fAw@fAy@fAy@dA{@dA}@bA_AbA_A`AaA`AcA~@cA~@eA|@gA|@gAz@iAz@kAx@kAv@mAv@mAt@oAt@qAr@qAp@sAp@sAn@uAn@uAl@wAj@wAj@yAh@yAf@{Af@{Ad@}Ab@}Ab@}A`@_B^_B^_B\\aBZaBXaBXcBVcBTcBRcBZoCpHlC'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.889119348854, -117.80180771559), new google.maps.LatLng(34.119722222222, -117.33586111111));
    polygon.altLow  = 2700;
    polygon.altHigh = 5000;
    polygon.desc    = 'ONTARIO INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'ONTARIO INTL AIRPORT CLASS C<br />2700-5000');
    

// PORTLAND INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ebtuGd_zjVjhBvF?`A?rA?pA>pA>pA@pA@pABpABpADpADpAFpAFpAHpAHnAJnAJnALnALnANlANlAPlAPlARlARjATjATjAVhAVhAXhAXfAXfAZfAZdA\\dA\\dA^bA^bA`@`A`@`A`@`Ab@~@b@~@d@|@d@|@d@z@f@z@f@x@f@x@h@v@h@v@h@t@j@t@j@r@j@p@l@p@l@n@l@n@n@l@n@j@n@j@n@h@p@h@p@f@p@d@p@d@r@b@r@`@r@`@r@^t@\\t@\\t@Zt@Xt@Xt@Vv@Tv@Tv@Rv@Pv@Nv@Nv@Lv@Jv@Jx@Hx@Fx@Dx@Dx@Bx@@x@@x@>x@?x@Ax@Ax@Cx@Ex@Gx@Gx@Iv@Kv@Kv@Mv@Ov@Qv@Qv@Sv@Uv@Ut@Wt@Yt@Yt@[t@]t@]r@_@r@a@r@a@r@c@p@e@p@e@p@g@p@i@n@i@n@k@n@m@n@m@l@o@l@o@l@q@j@q@j@s@j@u@h@u@h@w@h@w@f@y@f@y@f@{@d@{@d@}@b@}@b@_Ab@_A`@aA`@aA^aA^cA^cA\\eA\\eAZeAZgAXgAXgAXiAViAViATkATkARkARmAPmAPmANmANmALoALoAJoAJoAHoAHoAFqAFqADqADqABqABqA@qA@qA>qA>qA?qA?qAAqAAqACqACqAEqAEqAGqAGqAIoAIoAKoAKoAMoAMoAOmAOmAQmAQmASmASkAUkAUkAWiAWiAYiAYgAYgA[gA[eA]eA]eA_@cA_@cA_@aAa@aAa@aAc@_Ac@_Ae@}@e@}@e@{@g@{@g@y@g@y@i@w@i@w@i@u@k@u@k@s@k@q@m@q@m@o@m@o@o@m@o@m@o@k@o@i@q@i@q@g@q@e@q@e@s@c@s@a@s@a@s@_@u@]u@]u@[u@Yu@Yu@Ww@UsARxXohCjCw@tGsBvGmBvGeBxG_BxGwAzGqAzGiA|GaA|G{@~Gs@~Gm@~Ge@~G]`HW`HO`HI`HA`HB`HH`HP`HV~G^~Gf@~Gl@~Gt@|Gz@|GbAzGhAzGpAxGxAxG~AvGfBvGlBtGtBrGzBpG`CnGhCnGnClGvCjG|ChGbDfGjDdGpD`GvD~F|D|FbEzFjExFpEtFvErF|EpFbFlFhFjFnFfFtFdFzF`F~F~EdGzEjGvEpGtEtGpEzGlE`HhEdHdEjHbEnH~DrHzDxHvD|HrD`InDfIjDjIfDnIbDrI~CvIzCzItC~IpCbJlCdJhChJdClJ~BpJzBrJvBvJpBxJlB|JhB~JbB`K~AbKzAfKtAhKpAjKjAlKfAnK`AnK|@pKv@rKr@tKl@tKh@vKb@vK^xKXxKTzKNzKJzKDzK@zKAzKEzKKzKOzKUzKYxK_@xKc@vKi@vKm@tKs@tKw@rK}@pKaApKgAnKkAlKqAjKuAhK{AfK_BbKcB`KiB~JmB|JqBxJwBvJ{BrJ_CpJcClJiChJmCfJqCbJuC~IyCzI_DvIgCtG_@BwZvFcKlFiPdMaRrSsGdD{L|No\\pn@cKvRcKxBiP~CkI~SkIfF{L|FqNfJcKhH}EvEkInGkI`RcKzTkI~OwI~OaE`AyG~AyGxA{GpA{GjA}GbA}Gz@_Ht@_Hl@_Hf@_H^aHXaHPaHHaHBaHAaHIaHOaHWaH]_He@_Hm@_Hs@}G{@}GaA}GiA{GoA{GwAyG_BwGeBwGmBuGsBsGyBsGaCqGgCoGoCmGuCkG{CiGcDgGiDeGoDcGwDaG}D}FcE{FiEyFoE{CgBpQ{]`R_i@hPch@|_@{xA|_@exAxS{oAsGuq@}Eqb@qNod@g`AdY_jGxiAi@iEuAiKqAmKmAoKgAqKcAqK}@sKy@uKs@wKo@wKi@yKe@yK_@{K[{KU}KO}KK}KE}KA}K@iLD}KJ}KN}KT}KX{K^{Kd@yKh@yKn@wKr@wKx@uK|@sKbAqKfAqKjAoKpAmKtAkKzAgK~AeKdBcKhBaKlB}JrB{JvBwJzBuJ`CqJdCoJhCkJlCgJpCcJvC_JzC}I~CyIbDuIfDoIfBcD'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.505330088526, -122.71621365971), new google.maps.LatLng(45.672036642948, -122.47888643895));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'PORTLAND INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND INTL AIRPORT CLASS C<br />SFC-4000');
    

// PORTLAND INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('i{ouGxh{kVqFcFoFiFkFoFiFuFeF{FcF_G_FeG{EkGyEqGuEwGqE{GmEaHkEeHgEkHcEoH_EuH{DyHwD_IsDcIoDgIkDkIgDoIcDsI_DwI{C{IwC_JsCcJmCgJiCkJeCoJaCqJ{BuJwBwJsB{JmB}JiBaKeBcKqCeQ~iGyiAf`AeYpNnd@|Epb@rGtq@ySzoA}_@dxA}_@zxAiPbh@aR~h@qQz]wIyH'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.609555555556, -122.69883333333), new google.maps.LatLng(45.667722222222, -122.61916666667));
    polygon.altLow  = 1100;
    polygon.altHigh = 4000;
    polygon.desc    = 'PORTLAND INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND INTL AIRPORT CLASS C<br />1100-4000');
    

// PORTLAND INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}gwuGhffkVmfOas@t@qYt@yX`AwXjAuXtAsX~AqXhBoXrBmX|BiXfCeXpCcXxC_XbD{WlDwWvDqW`EmWjEiWrEcW|E}VfFwVnFqVxFkVbGeVjG_VtGwU|GqUfHiUnHaUvHyT~HsThIiTpIaTxIyS`JqShJgSpJ}RxJuR`KkRfKaRnKwQvKmQ|KcQdLyPjLmPrLcPxLwO~LmOfMaOlMuNrMkNxM_N~MsMbNgMhN{LnNmLtNaLxNuK~NiKbO{JfOoJjOaJpOuItOgIxOyHzOkH~O_HbPqGfPcGhPuFlPgFnPyEpPkEtP}DvPoDxPaDzPsC|PeC|PwB~PgB`QyA`QkAbQ}@bQo@bQ_@bQQbQCbQFbQVpPfAm[lcVkGKaHIaHCaH@aHHaHNaHV_H\\_Hd@_Hl@_Hr@}Gz@}G`A{GhA{GnAyGvAyG~AwGdBwGlBuGrBmCj@yXnhChA\\t@Tt@Vt@Xt@Xt@Zr@\\r@\\r@^r@`@r@`@p@b@p@d@p@d@p@f@n@f@n@h@n@j@n@j@l@l@l@l@l@n@j@p@j@p@j@r@h@r@h@t@h@t@f@v@f@v@f@x@d@x@d@z@d@z@b@|@b@|@b@~@`@~@`@`A^`A^`A\\bA\\bA\\dAZdAZdAXfAXfAVfAVhAThAThATjARjARjAPjAPlANlANlALlALlAJnAJnAHnAHnAFnAFnADnADnABpABpA@pA@pA>pA>pA?pA?pAApAApACpACpAEnAEnAGnAGnAInAInAKnAKnAMlAMlAOlAOlAQlAQjASjASjAUjAUhAUhAWhAWfAYfAYfA[dA[dA]dA]bA]bA_@`A_@`Aa@`Aa@~@a@~@c@|@c@|@e@z@e@z@e@x@g@x@g@v@g@v@i@t@i@t@i@r@k@r@k@p@k@p@m@n@m@l@m@l@o@j@o@j@o@h@o@f@q@f@q@d@q@d@q@b@s@`@s@`@s@^s@\\s@\\u@Zu@Xu@Xu@Vu@Tu@Tw@Rw@Pw@Nw@Nw@Lw@Jw@Jw@Hw@Fw@Dw@Dw@Bw@@w@@w@>w@?w@Aw@Aw@Cw@Ew@Ew@Gw@Iw@Kw@Kw@Mw@Ow@Ow@Qw@Su@Su@Uu@Wu@Yu@Yu@[s@]s@]s@_@s@a@s@a@q@c@q@e@q@e@q@g@o@g@o@i@o@k@o@k@m@m@m@m@m@o@k@q@k@q@k@s@k@s@i@u@i@u@g@w@g@w@g@y@e@y@e@{@e@{@c@}@c@}@c@_Aa@_Aa@aA_@aA_@aA]cA]cA]eA[eA[eAYgAYgAWgAWiAWiAUiAUkASkASkAQkAQmAOmAOmAMmAMmAKoAKoAIoAIoAGoAGoAEoAEoACqACqAAqAAqA?qA?qA>sA>qAc@cAkhBwFwAtDgDnIcDrI_DvI{CzIwC~IqCbJmCfJiCjJeClJ_CpJ{BtJwBvJsBzJmB|JiB~JcBbK_BdK{AfKuAhKqAjKkAlKgAnKaApK}@rKy@tKs@tKo@vKi@xKe@xK_@zKYzKi@tL'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.57975, -122.58933333333), new google.maps.LatLng(45.754944444444, -122.36007969302));
    polygon.altLow  = 2000;
    polygon.altHigh = 4000;
    polygon.desc    = 'PORTLAND INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND INTL AIRPORT CLASS C<br />2000-4000');
    

// PORTLAND INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mheuGxpyiVrQ~@`Q`A`QnA~P~A~PlB|PzBzPhCxPvCvPdDtPrDrP`EpPnElP|EjPjFfPxFdPfG`PtG|O`HzOnHvO|HrOhInOvIjObJdOpJ`O|J|NjKvNvKrNbLlNnLfNzL`NfM|MrMvM~MpMjNjMvNdM`O|LlOvLvOpLbPhLlPbLvPzKbQtKlQlKvQdK`R~JhRvJrRnJ|RfJdS~InSvIvSnI~SfIfT~HnTtHvTlH~TdHfUzGlUrGtUhGzU`G`VvFfVnFlVdFrVzExVrE~VhEbW~DhWvDlWlDpWbDtWxCxWnC|WdC`XzBdXpBfXfBhX|AlXrAnXhApX~@rXt@rXj@tX`@tXVvXLvXBvXCvXMvXWvXa@tXk@tXu@rX_ArXiApXsAnX}AlXgBhXqBfX{BdXeC`XoC|W_DzXusNmjElAmLfAmK`AoK|@qKv@sKr@uKl@uKh@wKb@wK^yKXyKTyKN{KJ{KD{K@{KA{KE{KK{KO{KUyKYyK_@yKc@wKi@wKm@uKs@uKw@sK}@qKaAoKgAmKkAkKqAkKuAgK{AeK_BcKcBaKiB_KmB{JqByJwBuJ{BsJ_CoJcCmJiCiJmCeJqCcJuC_JyC{I_DwIcDsIgDoIkDkIoDeIsDaIwD}H{DyH_EsHcEoHeEiHiEeHmE_HqE{GsEuGwEqG{EkG}EeGaF_GeFyFgFuFkFoFmFiFoFcFsF}EuFwEyFqE{FiE}FcE_G}DaGwDcGqDgGiDiGcDkG}CmGuCmGoCoGiCqGaCsG{BuGsBuGmBwGgByG_ByGyA{GqA{GiA}GcA}G{@}Gu@_Hm@_Hg@_H_@sHk@l[mcV'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.422071165138, -122.66280555556), new google.maps.LatLng(45.584305555556, -122.36061111111));
    polygon.altLow  = 1700;
    polygon.altHigh = 4000;
    polygon.desc    = 'PORTLAND INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND INTL AIRPORT CLASS C<br />1700-4000');
    

// PORTLAND INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('o{gtGniukVmDrWuDlW_EhWiEdWsE~V{ExVeFtVoFnVwFhVaGbViGzUsGtU{GlUeHfUmH~TuHvT_IpTgIhToI~SwIvS_JnSgJdSoJ|RwJrR_KjRgK`RmKvQuKlQ{KbQcLxPiLnPqLbPwLxO}LlOeMbOkMvNqMjNwM`N}MtMcNhMgN|LmNpLsNbLwNvK}NjKaO~JeOpJkOdJoOvIsOjIwO|H{OnH_PbHaPtGePfGiPxFkPjFoP|EqPnEsP`EuPrDwPdDyPvC{PhC}PzB_QlB_Q~AaQpAaQ`AcQr@gRp@gR}cV|H]`HY~G_@~Gg@~Gm@~Gu@|G{@|GcAzGkAzGqAxGyAxG_B`EaAvI_PjI_PbK{TjIaRjIoG|EwEbKiHpNgJzL}FjIgFjI_ThP_DbKyBbKwRn\\qn@zL}NrGeD`RsShPeMbKmFvZwF^CxBaH~CwIxC{ItC_JpCcJlCeJhCiJbCmJ~BoJzBsJvBuJpByJlB{JhB_KbBaK~AcKxAeKtAgKlAiJtsNljEeC|V'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.428527777778, -122.83475), new google.maps.LatLng(45.58575, -122.63025));
    polygon.altLow  = 2300;
    polygon.altHigh = 4000;
    polygon.desc    = 'PORTLAND INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND INTL AIRPORT CLASS C<br />2300-4000');
    

// PORTLAND INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('szeuGddvlVaPJcQFcQCcQQcQ_@cQm@cQ}@aQkAaQyA_QgB}PuB}PeC{PsCyPaDwPoDuP}DqPkEoPyEmPgFiPuFgPcGcPqG_P}G{OkHyOyHuOgIqOsIkOaJgOmJcO{J_OgKyNuKuNaLoNmLiNyLcNgM_NsMyM_NsMiNmMuNgMaO_MmOyLwOsLcPkLmPeLwP}KcQwKmQoKwQiKaRaKkRyJuRqJ}RiJgSaJoSyIySqIaTiIiTaIqTwHyToHaUgHiU}GqUuGwUkG_VcGeVyFkVqFqVgFwV}E}VuEcWkEgWaEmWwDqWmDwWcD{W{C_XqCcXgCeX}BiXsBmXiBoX_BqXuAsXkAuXaAwXw@yXm@{Xa@{XW}XM}XC}XBsYL}XV}XPgXlfO`s@KbKK|KEhLA|K@|KD|KJ|KN|KTzKZzK^zKd@xKh@xKn@vKr@vKx@tK|@rKbApKfAnKlAlKpAjKtAhKzAfK~AdKdBbKhB`KlB|JrBzJvBvJzBtJ`CpJdCnJhCjJlCfJrCbJvC~IzCzI~CvIbDrIfDnIjDjInDfIrDbIvD|HzDxH~DtHbEnHfEjHjEdHlE`HpEzGtEtGxEpGzEjG~EdGbF~FdFzFhFtFjFnFnFhFpFbFrF|EvFvExFnEzFhE~FbE`G|DbGvDdGnDfGhDhGbDjG|ClGtCnGnCpGfCrG`CrGzBtGrBvGlBvGdBxG~AzGvAzGnA|GhA|G`A|Gz@~Gr@~Gl@~Gd@`H\\`HV`HN`HH`H@`HCdGKfR|cV'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.582666666667, -122.83486315432), new google.maps.LatLng(45.755265565779, -122.581));
    polygon.altLow  = 1800;
    polygon.altHigh = 4000;
    polygon.desc    = 'PORTLAND INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND INTL AIRPORT CLASS C<br />1800-4000');
    

// RENO AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m}qpFnf_zUf@}m@vBwm@hEgm@vGql@fJuk@rLqj@|Nei@dQug@hS}e@jU_d@hW{a@dYq_@zZc]l\\qZx]yWb_@_Ud`@aRda@_O|a@{Kpb@uH~b@mEfc@eBjc@>fc@hB~b@pEpb@vH|a@|Kba@`Od`@bR`_@`Ux]zWj\\pZxZb]bYp_@hWza@jU|c@hSze@bQrg@zNbi@pLlj@dJpk@vGnl@hEdm@vBrm@f@xm@g@xm@wBrm@gEdm@wGnl@eJpk@qLnj@{Nbi@cQrg@iSze@iU|c@iWza@cYr_@yZd]k\\rZy]zWa_@`Ue`@bRca@`O}a@~Kqb@xH_c@pEgc@hBkc@@gc@eB_c@mEqb@uH}a@{Kea@_Og`@_Rc_@}T{]yWm\\qZ{Zc]eYq_@iW{a@kU_d@kS}e@eQsg@}Nei@sLqj@gJuk@yGql@iEgm@yBwm@g@}m@?G'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.415679227997, -119.87583215509), new google.maps.LatLng(39.58247512998, -119.66065840715));
    polygon.altLow  = 0;
    polygon.altHigh = 8400;
    polygon.desc    = 'RENO AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'RENO AIRPORT CLASS C<br />SFC-8400');
    

// RENO AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('saapF|ftzU`Rj_T{PJeQFeQCcQOcQ]cQi@cQw@aQcAaQqA_Q_B}PkB}PyB{PeCyPqCwP_DuPkDqPyDoPeEmPqEiP_FgPkFcPwFmPeGpnBmxJqJaEwJgEsJoEqJwEoJ_FkJgFgJqFeJyFaJaG}IiGyIqGwIyGsI_HoIgHkIoHeIwHaI}H}HeIyHmIuHsIoH{IkHaJeHgJaHoJ}GuJeH}JmcF~rGwJ_PaKqPyJyPqJaQiJkQaJsQyI{QqIcRiIiRaIqRwHyRoH_SgHgS}GmSuGsSkGyScG_TyFeTqFkTgFqT}EuTuE{TkE_UaEcUwDgUmDkUcDoU{CsUqCwUgC{U}B}UsB_ViBcV_BeVuAgVkAiVaAkVw@kVm@mVa@mVWoVMoVCoVBcWLoVVoV`@mVj@mVt@kV`AkVjAiVtAgV~AeVhBcVrB_V|B}UfC{UpCwUxCsUbDoUlDmUvDgU`EcUjE_UrE{T|EuTfFqTnFkTxFeTbG_TjGyStGsS|GmSfHgSnH_SvHyR~HqRhIiRpIcRxI{Q`JsQhJkQpJcQxJyP`KqPfKiPnK_PvKuO|KmOdLcOjLyNrLoNxLeN~L{MfMqMlMgMrM}LxMqL~MgLdN}KhNqKnNeKtN{JxNoJ~NcJbOwIfOmIjOaIpOuHtOiHxO}G|OqG~OcGbPwFfPkFhP_FlPqEnPeEpPyDtPkDvP_DxPsCzPeC|PyB|PkB~P_B`QqA`QeAbQw@bQk@bQ]bQOdQCdQFbQRbQ`@bQl@bQz@`QfA`QtA~P`B|PnBzPzBzPhCxPtCvPbDrPnDpPzDnPhEjPtEhP`FdPlFbPzF~OfGzOrGvO~GrOjHnOvHjObIfOnI`OxI|NdJxNpJrN|JlNfKhNrKbN|K|MhLvMrLpM|LjMfMdMrM~L|MxLfNpLnNjLxNbLbO|KlOtKtOnK~OfKfP~JpPvJxPnJ`QfJhQ~IpQvIxQnI`RfIhR~HnRvHvRlH|RdHdS|GjSrGpSjGvS`G|SxFbTnFhTdFlT|ErTrEvThE|T~D`UvDdUlDhUbDlUxCpUnCrUdCvUzBxUpB|UfB~U|A`VrAbVhAdV~@fVt@hVj@hV`@jVVjVLjVBjVCjVMjVWjVa@jVk@hVu@hV_AfViAdVsAbV}A`VgB~UqB|U{BxUeCvUoCrUyCpUcDlUmDhUwDdU_E`UiE|ToEdUobNezFfBaJbB}I~A_JzAaJtAcJpAeJjAgJfAiJ`AkJ|@mJv@mJr@oJl@qJh@qJb@qJ^sJXsJTuJNuJJuJDuJ@uJAuJEuJKuJOuJUuJYsJ_@sJe@qJi@qJo@qJs@oJy@mJ}@mJaAkJgAiJkAgJqAeJuAcJ{AaJ_B_JcB}IiB{ImByIqBwIwBsI{BqI_CmIeCkIiCgImCeIqCaIuC_I{C{H_DwHcDsHgDoHkDkHoDgHsDcHwD_H{D{G_EwGcEsGgEoGiEiGmEeGqEaGuE{FwEwF{EqF_FmFaFgFeFcFgF}EkFyEmFsEqFmEsFgEwFcEyF}D{FwD}FqDaGkDcGeDeG_DgG{CiGuCkGoCmGgCoGaCqG{BqGuBsGoBuGiBwGcBwG}AyGwA{GoA{GiA}GcA}G}@}Gu@_Ho@_Hi@_Hc@aH[aHUaHOaHIaHAaH@aHFaHLaHTaHZ_H`@_Hh@_Hn@}Gt@}Gz@}GbA{GhA{GnAyGtAwGzAwGbBuGhBsGnBsGtBqGzBoG`CmGfCkGlCiGrCgGxCeG~CcGdDaGjD}FpD{FvDyF|DwFbEsFfEqFlEmFrEkFxEiF|EeFbFaFfF_FlF{EpFyEvFuEzFqE`GmEdGkEhGgEnGcErG_EvG{DzGwD~GsDdHoDhHkDlHgDnHcDrH_DvH{CzHwC~HqC`ImCdIiChIeCjI_CnI{BpIwBtIsBvImBxIiBzIeB~I_B`J{AbJuAdJqAfJkAhJgAjJcAjJ}@lJy@nJs@nJo@pJi@pJe@rJ_@rJYtJUtJOtJKtJE~JAvJ@vJDtJJtJNtJTtJZtJ^rJd@rJh@pJn@pJr@nJx@nJ|@lJbAjJfAjJjAhJpAfJtAdJzAbJ~A`JdB~IhBzIlBxIrBvIvBtIzBpI`CnIdCjIhChIlCdIpC`IvC~HzCzH~CvHbDrHfDnHjDjHnDhHrDbHvD~GzDzG~DvGbErGfEnGjEhGlEdGpE`GtEzFxEvFzEpF~ElF`FfFdFbFhF|EjFvEnFrEpFlErFfEvF`ExF|DzFvD|FpD`GjDbGdDdG~CfGxChGrCjGlClGfCnG`CpGzBrGtBrGnBtGhBvG`BvGzAxGtAzGnAzGhA|G`A|Gz@|Gt@~Gn@~Gf@~G`@`HZ`HT`HL`HF`H@`HA|GA'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.33230133619, -119.98352600558), new google.maps.LatLng(39.665849407961, -119.5529778309));
    polygon.altLow  = 7200;
    polygon.altHigh = 8400;
    polygon.desc    = 'RENO AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'RENO AIRPORT CLASS C<br />7200-8400');
    

// RIVERSIDE, MARCH FIELD CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('erhnEnfujUf@sj@vBmj@hE_j@xGki@fJoh@rLog@|Ngf@dQyd@jSec@jUka@jWm_@dYi]zZ_[l\\sXz]aVb_@mSf`@uPda@{M~a@_Kpb@_H`c@_Ehc@_Bjc@>hc@`B~b@`Epb@`H|a@`Kda@|Mf`@vPb_@nSx]bVl\\rXzZ`[bYh]hWj_@jUja@hSbc@dQvd@|Ndf@rLlg@dJlh@vGhi@hE|i@vBjj@f@pj@g@pj@wBjj@gE|i@wGhi@eJlh@qLlg@}Ndf@cQvd@iSbc@kUja@iWl_@cYh]yZ`[k\\rXy]bVc_@nSe`@vPea@|M}a@`Kqb@bH_c@bEic@`Bkc@>ic@}Aac@_Esb@_H_b@}Jea@{Mg`@uPc_@mS{]aVm\\sX{Z_[eYi]kWk_@mUka@kSec@eQyd@}Ngf@sLog@gJoh@yGki@iE_j@yBmj@g@sj@?G'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.797078249225, -117.35947309539), new google.maps.LatLng(33.964031731343, -117.15941735953));
    polygon.altLow  = 0;
    polygon.altHigh = 5500;
    polygon.desc    = 'RIVERSIDE, MARCH FIELD CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE, MARCH FIELD CLASS C<br />SFC-5500');
    

// RIVERSIDE, MARCH FIELD CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yv|mEvlbjUjZs`SzWsAbQs@bQg@dQ[dQOdQCdQDdQPbQ\\bQh@bQv@`QbA`QnA~PzA|PfB|PrBzP~BxPjCvPvCtPbDpPlDnPxDlPdEhPpEfP|EbPhF~OrFzO~FvOjGrOtGnO`HjOjHfOvHbO`I|NjIxNvIrN`JnNjJhNtJbN~J|MhKvMrKpM|KjMfLdMpL~LzLxLbMpLlMjLtMdL~M|KfNtKpNnKxN~PjVuvMndIkIyGmFcEqF_EsFyDwFuDyFoD{FkD}FeDaG_DcGyCeGuCgGoCiGiCkGcCmG_CoGyBqGsBsGmBsGgBuGaBwG{AwGuAyGoA{GiA{GcA}G}@}Gw@}Gq@_Hk@_He@_H_@aHYaHSaHMaHGaHAaH@aHFaHLaHRaHX_H^_Hd@_Hj@}Gp@}Gv@}G|@{GbA{GhAyGnAwGtAqFbA'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.755555555556, -117.17897222222), new google.maps.LatLng(33.903333333333, -117.05934669842));
    polygon.altLow  = 3900;
    polygon.altHigh = 5500;
    polygon.desc    = 'RIVERSIDE, MARCH FIELD CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE, MARCH FIELD CLASS C<br />3900-5500');
    

// RIVERSIDE, MARCH FIELD CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gkhmE`_qjUrmMg~HhGlZ`EnSvDrSlDvSbDzSxC|SnC`TdCbTzBfTrBhThBjT~AlTtAnTjApT~@rTt@rTj@tT`@tTVvTLvTBvTCvTMvTWvTa@tTk@tTu@rT_ArTiApTsAnT}AlTgBjTqBhT{BfTeCbToC`TyC|ScDzSmDvSwDrS_EnSiEjSsEfS}EbSeF|RoFxRyFrRaGnRkGhRsGbR}G|QeHvQmHpQwHjQ_IbQgI|PoIrQkeLymJjDkHbD}G~CaHzCeHvCgHpCkHlCmHhCqHdCsH~BwHzByHvB{HpB_IlBaIhBcIbBeI~AgIzAiItAkIpAmIjAoIfAoI`AqI|@sIv@sIr@uIl@wIh@wIb@wI^yIXyITyIN{IJ{ID{I@{IA{IE{IK{IO{IUyIYyI_@yIe@wIi@wIo@wIs@uIy@sI_@iD'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.713659334127, -117.37697222222), new google.maps.LatLng(33.813027777778, -117.18669444444));
    polygon.altLow  = 3900;
    polygon.altHigh = 5500;
    polygon.desc    = 'RIVERSIDE, MARCH FIELD CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE, MARCH FIELD CLASS C<br />3900-5500');
    

// RIVERSIDE, MARCH FIELD CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e{_mE~i{iUfE~GvJpOpJxOhJ`P`JfPxInPnIvPfI|P~HbQvHjQlHpQdHvQ|G|QrGbRjGhR`GnRxFrRnFxRdF|R|EbStCbLsmMf~HgByNgAoIkAoIqAmIuAkI{AiI_BgIcBeIiBcImBaIsB}HwB{H{ByH_CwHeCsHiCqHmCmHqCkHwCgH{CeH_DaHcD}GgD{GkDwGoDsGsDoGwDkG{DgG_EcGcE_GgE{FkEwFmEsFqEoFuEiFwEeF{EaF_F}EaFwEeFsEiC{BtvModI'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.725055555556, -117.23777777778), new google.maps.LatLng(33.831027777778, -117.12688888889));
    polygon.altLow  = 2900;
    polygon.altHigh = 5500;
    polygon.desc    = 'RIVERSIDE, MARCH FIELD CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE, MARCH FIELD CLASS C<br />2900-5500');
    

// SACRAMENTO INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ea`kFxhtdV?vC>rC@rCBrCDrCFrCHpCJpCLpCNpCPpCRpCTnCVnCXnCZlC\\lC^lC`@jCb@jCd@jCf@hCh@hCj@fCl@fCn@dCp@dCr@bCr@`Ct@`Cv@~Bx@~Bz@|B|@zB~@xB`AxB`AvBbAtBdArBfArBhApBhAnBjAlBlAjBnAhBnAfBpAfBrAdBrAbBtA`BvA~AvA|AxAzAzAxAzAvA|AtA~ArA~AnA`BlA`BjAbBhAbBfAdBdAdBbAfB`AfB|@hBz@hBx@hBv@jBt@jBp@jBn@lBl@lBj@lBh@nBd@nBb@nB`@nB^pBZpBXpBVpBRpBPpBNpBLrBHrBFrBDrB@rB>rB?rBCrBErBGrBIpBMpBOpBQpBUpBWpBYpB[nB_@nBa@nBc@nBe@lBi@lBk@lBm@jBo@jBs@jBu@hBw@hBy@fB{@fB_AfBaAdBcAdBeAbBgAbBiA`BkA`BmA~AqA|AsAzBoBj@dHhBvIbBxI~AzIzA|ItA~IpA`JjAbJfAdJ`AfJ|@fJv@hJr@jJl@jJh@lJb@lJ^nJXnJTnJNnJJpJDpJ@pJApJEpJKpJOnJUnJYnJ_@nJc@lJi@lJm@jJs@jJw@hJ}@fJaAfJgAdJkAbJqA`JuA~I{A|I_BzIcBxIiBvImBtIqBpIwBnI{BlI_ChIeCfIiCbImC`IqC|HuCzHyCvH_DrHcDnHgDjHkDhHoDdHsD`HwD|G{DxG_ErGcEnGeEjGiEfGmEbGqE|FuExFwErF{EnF_FjFaFdFeF`FgFzEkFtEmFpEqFjEsFdEuF`EyFzD{FtD}FnD_GhDcGbDeG~CgGxCiGrCkGlCmGfCoG`CoGzBqGtBsGnBuGfBwG`BwGzAyGtAyGnA{GhA{GbA}Gz@}Gt@_Hn@_Hh@_Hb@_HZaHTaHNaHHaH@aHAaHGaHMaHU_H[_Ha@_Hg@_Hm@}Gu@}G{@{GaA{GgAyGmAyGuAwG{AwGaBuGgBsGmBqGsBqGyBoG_CmGeCkGkCiGqCgGwCeG}CcGcDaGiD}FoD{FuDyFyDwF_EsFeEqFkEmFoEkFuEgF{EeF_FaFeF_FiF{EoFwEsFuEyFqE}FmEaGkEgGgEkGcEoG_EsG{DyGwD}GsDaHoDeHkDiHgDmHcDoH_DsH{CwHwC{HqC}HmCaIiCeIeCgI_CkI{BmIwBoIsBsImBuIiBwIeByI_B{I{A_JuAaJqAcJkAcJgAeJcAgJ}@iJy@iJs@kJo@mJi@mJe@oJ_@oJ[oJUqJOqJKqJEqJEsF|@zBnAhBnAhBpAfBrAdBrAbBtA`BvA~AvA|AxAzAzAxAzAvA|AtA~ArA~ApA`BlA`BjAbBhAbBfAdBdAdBbAfB`AfB|@hBz@hBx@hBv@jBt@jBp@jBn@lBl@lBj@lBh@nBd@nBb@nB`@nB^pBZpBXpBVpBRpBPpBNpBLrBHrBFrBDrB@rB>rB?rBCrBErBGrBIpBMpBOpBQpBUpBWpBYpB[nB_@nBa@nBc@nBe@lBi@lBk@lBm@jBo@jBs@jBu@hBw@hBy@fB{@fB_AfBaAdBcAdBeAbBgAbBiA`BkA`BmA~AqA|AsA|AuAzAwAzAyAxA{AvA}AvA_BtAaBrAcBrAeBpAgBnAiBnAiBlAkBjAmBhAoBhAqBfAsBdAsBbAuB`AwB~@yB~@{B|@{Bz@}Bx@_Cv@_Ct@aCr@aCp@cCp@eCn@eCl@gCj@gCh@iCf@iCd@kCb@kC`@kC^mC\\mCZmCXoCVoCToCRqCPqCNqCLqCJqCHqCFsCDsCBsC@sC>sC?sCAsCCsCEsCGsCIqCKqCMqCOqCQqCSqCUoCWoCYoC[mC]mC_@mCa@kCc@kCe@kCg@iCi@iCk@gCm@gCo@eCq@eCq@cCs@aCu@aCw@_Cy@_C{@}B}@{B_AyB_AyBaAwBcAuBeAsBgAsBiAqBiAoBkAmBmAkBoAiBoAiBqAgBsAeBsAcBuAaBwA_BwA}AyA{A{AyA{AwA}AuA}AsA_BqAaBmAaBkAcBiAcBgAeBeAeBcAgBaAgB_AgB{@iBy@iBw@kBu@kBs@kBo@mBm@mBk@mBi@oBe@oBc@oBa@oB_@qB[qBYqBWqBUqBQqBOqBMsBIsBGsBEsBAsB?sB>sB@sBDsBFsBHqBL}BNbDaFbEoGfEkGjEgGlEcGpE}FtEyFbGiH`iNzT[xC'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.612257476955, -121.69712300115), new google.maps.LatLng(38.778872222222, -121.51026111111));
    polygon.altLow  = 0;
    polygon.altHigh = 4100;
    polygon.desc    = 'SACRAMENTO INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SACRAMENTO INTL AIRPORT CLASS C<br />SFC-4100');
    

// SACRAMENTO INTL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yhelFteceVnA_|ApFo{ArKszArPgyAnUmwAhZeuA|^qrAlc@ooAvg@alAzk@ehAvo@_dAjs@m_Axv@sz@|y@ou@v|@ap@h_Amj@naAsd@jcAq^|dAkXdfAaR`gAuKpgAgEvgADpgArE~fA`LbfAlRzdAvXhcAz^jaAzd@b_Atj@r|@fp@vy@ru@rv@tz@fs@l_Apo@|cAtk@`hArg@zkAhc@foAx^hrAdZztAlUbwApPzxApKdzApFb{AnAp{AoAp{AqFb{AqKdzAoPzxAkUbwAcZ|tAy^hrAgc@hoAqg@zkAuk@bhAqo@|cAes@n_Asv@tz@wy@ru@q|@hp@c_Atj@kaA|d@icA|^{dAvXcfAnR_gAbLqgAtEwgADqgAeEagAsKefAaR_eAkXmcAo^oaAqd@i_Amj@w|@ap@}y@mu@yv@qz@ms@m_Awo@_dA{k@ehAwg@_lAmc@ooA}^qrAiZeuAqUmwAsPgyAuKszAsFo{AqA_|A?Q'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.5287342163, -121.80358828002), new google.maps.LatLng(38.862372127227, -121.37808158472));
    polygon.altLow  = 1600;
    polygon.altHigh = 4100;
    polygon.desc    = 'SACRAMENTO INTL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SACRAMENTO INTL AIRPORT CLASS C<br />1600-4100');
    

// SAN JOSE AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ymxbFtbsfVpEtC|FrDxFvDvF|DtFbEpFhEnFlEjFrEhFvEdF|EbF`F~EfF|EjFxEpFtEtFpExFnE~FjEbGfEfGbEjG~DpGzDtGvDxGrD|GnD`HjDdHfDfHbDjH~CnHzCrHvCtHrCxHlC|HhC~HdCbI`CdIzBhIvBjIrBlIlBnIhBrIdBtI~AvIzAxItAzIpA|IlA~IfA`JbA`J|@bJx@dJr@dJn@fJh@fJd@hJ^hJZjJTjJNjJJjJDjJ@jJAjJEjJKjJOjJUjJYjJ_@hJe@hJi@fJo@fJs@dJy@dJ}@bJcA`JgA`JkA~IqA|IuAzI{AxI_BvIeBtIiBrImBnIsBlIwBjI{BhIaCdIeCbIiC~HmC|HsCxHwCvH{CrH_DnHcDjHgDfHkDdHoD`HsD|GwDxG{DtG_EpGcEjGgEfGkEbGoE~FqEzFuEtFyEpF}EjF_FfFcFbFeF|EiFvEkFrEoFlEqFhEuFbEwF|DyFxD}FrD_GlDaGfDcG`DeGzCgGvCiGpCkGjCmGdCoG~BqGxBsGrBuGlBwGfBwG`ByGzA{GrA{GlA}GfA}G`A_Hz@_Ht@_Hn@aHf@aH`@aHZaHTaHNcHHcH@cHAcHGaHMaHSaH[aHa@aHg@_Hm@_Hs@_Hy@}GaA}GgA{GmA{GsAyGyAwG_BwGeBuGkBsGqBqGwBoG}BoGcCmGiCkGoCiGuCeG{CcGaDaGgD_GmD}FqDyFwDwF}DuFcEqFgEoFmEmFsEiFwEgF}EcFaF_FgF}EkFyEqFuEuFsEyFoE_GkEcGgEgGcEkG_EqG}DuGyDyGuD}GqDaHmDeHgDiHcDkH_DoH{CsHwCwHsCyHoC}HiC_IeCcIaCeI}BiIwBkIsBmIoBqIiBsIeBuI_BwI{AyIwA{IqA}ImA_JgAaJcAcJ}@cJy@eJs@gJo@gJi@iJe@iJ_@kJ[kJUkJOkJKmJEmJAmJ@wJDmJJmJNkJTkJZkJ^kJd@iJh@iJn@gJr@gJx@eJ|@cJbAcJfAaJlA_JpA}ItA{IzAyI~AwIdBuIhBsIlBqIrBoI`DuD|JeEtLgFhTsFxXoGjQqIvMoGlSwA|J{DzT_H`RaJzPyG~P{PtTeLvQwN|Zi\\jb@ySb\\cOdQyOvV{MbW_L`_@wRxXiOx\\cGl_@gNrOxW~PfRhPh\\hOfSjD`JlnBaiB'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.277882475812, -122.03346122689), new google.maps.LatLng(37.445332996053, -121.83611944444));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'SAN JOSE AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SAN JOSE AIRPORT CLASS C<br />SFC-4000');
    

// SAN JOSE AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ymxbFtbsfVtqLo|KtP|RjLjNdLtN|K~NvKfOnKpOfKxO`K`PxJhPpJpPhJxP`J`QxIhQpIpQfIvQ~H~QvHdRnHlRdHrR|GxRrG~RjGdS`GjSxFpSnFvSfFzS|E`TrEdTlEpSaiNv}EaB{HiBsImBqIsBmIwBkI{BiIaCeIeCcIiC_ImC}HsCyHwCwH{CsH_DoHcDkHgDiHkDeHoDaHsD}GwDyG{DuG_EqGcEkGgEgGkEcGoE_GqE{FuEuFyEqF}EkF_FgFcFcFeF}EiFwEkFsEoFmEqFiEuFcEwF}DyFyD}FsDuEmC'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.2045, -121.89256666667), new google.maps.LatLng(37.322052777778, -121.76995));
    polygon.altLow  = 1500;
    polygon.altHigh = 4000;
    polygon.desc    = 'SAN JOSE AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SAN JOSE AIRPORT CLASS C<br />1500-4000');
    

// SAN JOSE AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c_icF`gvgVizGvcPgN}K}MyKwMcLqMoLkMyLeMcM_MmMyLwMsL_NkLiNeLsN}K}NwKeOoKmOgKwO_K_PyJgPqJoPiJwPaJ_QyIgQqIoQgIwQ_I}QwHeRoHkReHqR}GyRuG_SkGeScGkSyFoSoFuSgF{S}E_TsEeTkEiTuEyUrfH}~BoB}LyBeNqBgNkBiNeBkN}AmNwAoNoAqNiAsNaAuN{@wNs@wNm@yNe@yN_@{NW{NO{NI{NA{N@iOH{NN{NV{N\\{Nd@yNl@yNHsJrFuD~SsKbTwI`VcKvRaMhLiO~S_QpVwYvFiOlS{@tTmBvRgFnYgA`A{@mAbFqBlImBnIiBpIcBrI_BtI{AvIuAxIqAzIkA|IgA~IaA`J}@`Jw@bJs@dJo@dJi@fJc@fJ_@hJYhJUhJOhJKjJEtJAjJ@jJDjJJjJNhJThJZhJ^hJd@fJh@fJn@dJr@dJx@bJ|@`JbA`JfA~IjA|IpAzItAxIzAvI~AtIbBrIhBpIlBnIrBlIvBhIzBfI~BbIdC`IhC~HlCzHpCvHvCtHzCpH~ClHbDjHfDfHjDbHnD~GrDzGvDvGzDrG~DnGbEjGfEfGhE`GlE|FpExFtErFvEnFzEjF~EdF`F`FdFzEfFvEjFpElFjEnGpD'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.406747222222, -122.103825), new google.maps.LatLng(37.519077777778, -121.88495555556));
    polygon.altLow  = 1500;
    polygon.altHigh = 4000;
    polygon.desc    = 'SAN JOSE AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SAN JOSE AIRPORT CLASS C<br />1500-4000');
    

// SAN JOSE AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('csgbFx}yfVxC|PrChPjCjPbCnPzBpPrBrPjBvPbBxPzAzPrA|PjA~PbA~Pz@`Qr@bQj@bQb@dQZdQRdQJdQBfQAfQKdQSdQ[dQc@dQk@bQs@bQ{@`QcA~PkA~PsA|P{AzPcBxPkBvPsBrP{BpPcCnPkCjPqChPyCdPaD`PiD|OqDxOwDtO_EpOgElOmEhOuEdO}E~NcFzNkFtN}JbTsuf@rvOhzGwcPfFrDtFzDxFvDzFpD|FjD~FdD`G~CbGzCfGtChGnCjGhCjGbClG|BnGvBpGpBrGjBtGdBtG~AvGxAxGrAxGlAzGdAzG~@|Gx@|Gr@|Gl@~Gf@~G`@~GX~GR~GL~GF~G@~GA~GI~GO~GU~G[~Ga@~Gg@|Gm@|Gu@zG{@zGaAzGgAxGmAvGsAvGyAtG_BrGeBrGkBpGqBnGwBlG}BjGcChGiCfGoCdGuCbG{C`GaD~FgD|FkDzFqDvFwDtF}DrFaEnFgElFmEhFqEfFwEbF{E`FaF|EeFzEkFvEoFrEsFpEyFlE}FhEaGdEeG`EiG|DoGzDsGvDwGrD{GnD_HjDcHfDeHbDiH|CmHxCqHtCsHpCwHlC{HhC}HbCaI~BcIzBeIvBiIpBkIlBmIhBoIbBsI~AuIxAwItAyIpA{IjA{IfA}I`A_J|@aJv@aJr@cJl@cJh@eJb@eJ^gJXgJTgJNiJJiJDiJ@iJAiJEiJKiJOiJUgJYgJ_@gJc@eJi@eJm@cJs@cJw@aJ}@aJaA_JgA}IkA{IqA{IuAyIyAwIXgL`eHudC'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.227796575127, -122.103825), new google.maps.LatLng(37.452077777778, -121.871175));
    polygon.altLow  = 2500;
    polygon.altHigh = 4000;
    polygon.desc    = 'SAN JOSE AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SAN JOSE AIRPORT CLASS C<br />2500-4000');
    

// SAN JOSE AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c{jbFdeffVndLeoKfWn^vQxWjQdX`QrXtP~XhPjY|OvYpObZdOlZxNxZlNb[~Mn[rMx[hH~PaqKbtL{CkJkGeSuG_S}GyReHsRoHmRwHeR_I_RiIwQqIqQyIiQaJaQiJyPqJqPyJiPaKaPgKyOoKqOwKgO}K_OeLuNkLkNwPwR'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.147502777778, -121.83545277778), new google.maps.LatLng(37.2525, -121.70591944444));
    polygon.altLow  = 3000;
    polygon.altHigh = 6000;
    polygon.desc    = 'SAN JOSE AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SAN JOSE AIRPORT CLASS C<br />3000-6000');
    

// SANTA ANA CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}p`mE`dlnUf@qj@vBij@hE{i@xGgi@fJmh@rLkg@|Ncf@dQud@jScc@jUia@jWi_@dYg]zZ}Zl\\qXz]aVb_@kSf`@uPda@yM~a@}Jrb@_H`c@_Ehc@_Bjc@>hc@`B~b@`Epb@`H|a@~Jda@zMf`@tPb_@lSx]`Vl\\pXzZ|ZbYf]hWh_@jUfa@hS`c@dQtd@|N`f@rLhg@dJjh@vGdi@hExi@vBfj@f@lj@g@lj@wBfj@gExi@wGdi@eJjh@qLhg@}Nbf@cQtd@iS`c@kUha@iWh_@cYf]yZ~Zk\\pXy]`Vc_@lSe`@vPea@|M}a@~Jqb@`H_c@`Eic@`Bkc@>ic@}Aac@_Esb@_H_b@}Jea@yMg`@sPc_@kS{]_Vm\\qX{Z}ZeYe]kWi_@mUia@kSac@eQud@}Ncf@sLkg@gJmh@yGgi@iE{i@yBij@g@qj@?G'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.59207547311, -117.96812396024), new google.maps.LatLng(33.759034510751, -117.76854426907));
    polygon.altLow  = 0;
    polygon.altHigh = 4400;
    polygon.desc    = 'SANTA ANA CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA ANA CLASS C<br />SFC-4400');
    

// SANTA ANA CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qw`lEjcfnU|{O`w@~@xZj@rT`@rTVtTLtTBtTCtTMtTWtTa@rTk@rTu@pT_ApTiAnTsAlT}AjTgBhTqBfT{BdTeCbToC~SyCzScDxSmDtSwDpS_ElSiEhSsEdS}E`SeFzRoFvRyFpRaGlRkGfRsG`R}GzQeHtQmHnQwHhQ_IbQgIzPoItPwIlP_JfPgJ~OoJvOwJnO_KfOgK~NoKvNuKnN}KfNcL|MkLtMqLjMyLbM}NtNipIe{MdIyH~E{EzE_FvEeFtEiFpEmFlEqFhEwFdE{FbE_G~DcGzDgGvDkGrDoGnDqGjDuGfDyGbD}G~C_HzCcHtCgHpCiHlCmHhCoHdCsH~BuHzBwHvB{HpB}HlB_IhBaIbBcI~AeIzAgItAiIpAkIjAmIfAoI`AoI|@qIv@sIr@sIl@uIh@uIb@wI^wIXwITyINyIJyIDyI@yIAyIEyIKyIOyIUyIYwI_@wIc@wIi@uIo@uIs@sIw@sI}@qIaAoIgAoIkAmIqAkIeAsI'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.508732970072, -118.02347222222), new google.maps.LatLng(33.624722222222, -117.8375));
    polygon.altLow  = 1500;
    polygon.altHigh = 5400;
    polygon.desc    = 'SANTA ANA CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA ANA CLASS C<br />1500-5400');
    

// SANTA ANA CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cx{kEtmjoUkKjJkMfLqM|KwMrK}MhKcN~JiNtJmNjJsN`JyNtI}NjIaO`IgOtHkOjHoO~GsOtGwOhG{O~F_PrFwPbG{tHy|E|FgJpRo\\pRkUtTgZjUa[hGkInD}JdQi\\rK_TtHcOxOwVhGmNzQ}_@zHeQnXwo@~GqNxGeMzPk]vNc\\bGqRpAyFhpId{M'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.57075, -118.05694444444), new google.maps.LatLng(33.67075, -117.94727777778));
    polygon.altLow  = 3500;
    polygon.altHigh = 5400;
    polygon.desc    = 'SANTA ANA CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA ANA CLASS C<br />3500-5400');
    

// SANTA ANA CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('grvlEra~nUjGbClG|BnGvBpGpBpGjBrGfBtG`BvGzAvGtAxGnAxGhAzGbAzG|@|Gv@|Gp@~Gj@~Gd@~G^~GX`HR`HL`HF`H@`HA`HG`HM`HS~GY~G_@~Ge@~Gk@|Gq@|Gw@zG}@zGcAxGiAxGoAvGuAvG{AtGaBrGgBpGmBnGsBnGyBlG}BjGcChGiCfGoCdGuCbGyC~F_D|FeDzFiDxFoDtFsDrFyDpF_ElFcEjFiEfFmE`CoBqAxFcGpRwNb\\{Pj]yGdM_HpNoXvo@{HdQ{Q|_@iGlNyOvVuHbOsK~SeQh\\oD|JiGjIkU`[uTfZqRjUqRn\\}FfJ??}`Js|FnGiKvQeY|k@cu@|R{UlOmRdKhD'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.624722222222, -118.02144444444), new google.maps.LatLng(33.727388888889, -117.94727777778));
    polygon.altLow  = 2500;
    polygon.altHigh = 5400;
    polygon.desc    = 'SANTA ANA CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA ANA CLASS C<br />2500-5400');
    

// SANTA ANA CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ckzlEjcboUmbUi{NgAgSkAsTaAuTw@uTm@wTa@wTWwTMyTOaVzhO?DzJDzIJzINzITzIZxI^xId@xIh@vIn@vIr@tIx@tI|@rIbApIfAnIlAnIpAlItAjIzAhI~AfIdBdIhBbIlB`IrB~HvBzHzBxH`CvHdCrHhCpHlClHrCjHvCfHzCdH~C`HbD|GfDzGjDvGnDrGrDnGvDjGzDfG~DbGbE~FfEzFjEvFnErFpEnFtEhFxEdFzE`F~EzEbFvEdFrEhFlEjFhEnFbEpF~DtFxDvFtDxFnD|FhD~FdD`G~CbGxCdGrC~Cv@mOlR}RzU}k@bu@wQdYoGhK'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.71, -117.98086111111), new google.maps.LatLng(33.842638888889, -117.86822222222));
    polygon.altLow  = 2500;
    polygon.altHigh = 4400;
    polygon.desc    = 'SANTA ANA CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA ANA CLASS C<br />2500-4400');
    

// SANTA ANA CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{q{lElb~mUoErFkEvFgEzFcE~F_EbG{DfGwDjGsDnGoDrGkDvGgDzGcD|G_D`H{CdHwCfHsCjHmClHiCpHeCrHaCvH{BxHwBzHsB~HmB`IiBbIeBdI_BfI{AhIuAjIqAlImAnIgApIcApI}@rIy@tIs@tIo@vIi@vIe@xI_@xIYxIUzIOzIKzIEzIEdI{hO?JoSLkUVyT`@wTj@wTt@uT`AuTjAsTtAqT~AoThBmTrBkT|BiTfCeTbEm\\}yAmzK|WyjEjlKh`@h_I~eMsFjH'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.732361111111, -117.86822222222), new google.maps.LatLng(33.851194444444, -117.71675));
    polygon.altLow  = 2000;
    polygon.altHigh = 4400;
    polygon.desc    = 'SANTA ANA CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA ANA CLASS C<br />2000-4400');
    

// SANTA ANA CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}wqmEtpnmUze@azHxwQioH~lL~cU`iXtbA`N~U`JfPxIlPnItPfIzP~HbQvHhQlHnQdHtQ|GzQrG`RjGfR`GlRxFpRnFvRdFzR|E`SrEdShEhS`ElSvDpSlDtSbDxSxC|SnC~SdCbTzBdTrBfThBhT~AjTtAlTjAnTh@jN}{Oaw@}AcI_BeIcBcIiBaImB_IqB}HwB{H{BwH_CuHeCsHiCoHmCmHqCiHuCgH{CcH_DaHcD}GgDyGkDuGoDsGsDoGwDkG{DgG_EcGcE_GgE{FiEwFmEqFqEmFuEiFwEeF{EaF_F{EaFwEeFqEgFmEkFiEmFcEqF_EsFyDwFsDyFoD{FiD}FeDaG_DcGyCeGuCgGoCiGiCkGcCmG}BoGyBqGsBqGmBsGgBuGaBwG{AwGuAyGoA{GiA{GcA}G}@}Gw@}Gq@_Hk@_He@_H_@aHYaHSaHMaHGaHAaH@aHFaHLaHRaHX_H^_Hd@_Hj@}Gp@}Gv@}G|@{GbA{GhAyGnAwGtAwGzAuG`BsGfBsGlBqGpBoGvBmG|BkGbCiGhCgGnCeGrCcGxCaG~C}FbD{FhDyFnDwFrDsFxDqF|DmFbEkFhEiFlEeFpEaFvE_FzE{E`FyEdFmEjCi_I_fMklKi`@'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.509694444444, -117.84647222222), new google.maps.LatLng(33.847194444444, -117.61763888889));
    polygon.altLow  = 3500;
    polygon.altHigh = 4400;
    polygon.desc    = 'SANTA ANA CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA ANA CLASS C<br />3500-4400');
    

// SANTA BARBARA AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ycsqEljmzUf@}j@vBuj@hEij@xGsi@fJyh@rLwg@|Nof@dQae@jSmc@jUsa@jWs_@dYo]zZe[l\\yXz]gVb_@qSf`@yPda@}M~a@aKpb@aH~b@aEhc@_Bjc@>hc@`B~b@bEpb@bH|a@bKda@~Mf`@zPb_@rSx]fVl\\xXzZd[bYn]hWr_@jUpa@hSjc@dQ~d@|Nlf@rLtg@dJvh@vGpi@hEdj@vBrj@f@xj@g@xj@wBrj@gEdj@wGpi@eJvh@qLtg@}Nlf@cQ~d@iSjc@kUpa@iWr_@cYn]yZf[k\\xXy]hVc_@rSe`@zPea@`N}a@bKqb@dH_c@bEic@`Bkc@>ic@_Bac@_Eqb@aH_b@_Kea@}Mg`@yPc_@qS{]gVm\\wX{Ze[eYo]kWs_@mUqa@kSkc@eQae@}Nof@sLwg@gJyh@yGsi@iEgj@yBuj@g@}j@?G'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.342641231965, -119.941229535), new google.maps.LatLng(34.509579851234, -119.7398831513));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'SANTA BARBARA AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA BARBARA AIRPORT CLASS C<br />SFC-4000');
    

// SANTA BARBARA AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_zbqEzsyyUXotR`QNdQPdQ\\bQj@bQv@bQbA`QnA~PzA~PfB|PrBzP~BxPjCvPvCtPbDrPnDnPzDlPfEhPrEfP~EbPhF~OtF|O`GxOlGtOvGpObHjOlHfOxHbObI|NnIxNxIrNbJnNnJhNxJbNbK|MlKxMvKrM`LlMjLdMtL~L|LxLfMrLpMjLxMdLbN|KjNvKrNnK|NfKdO~JlOxJtOpJ|OhJdP`JjPxIrPpIzPfI`Q~HhQvHnQnHtQdHzQ|G`RrGfRjGlR`GrRxFxRnF|RfFbS|EfSrEjShEnS`EtSvDxSlDzSbD~SxCbTnCdTdChT|BjTrBnThBpT~ArTtAtTjAvT~@vTt@xTj@xT`@zTVzTLzTB|TC|TMzTWzTa@zTk@zTu@xT_AvTiAvTsAtT}ArTgBpTqBnT{BjTeChToCdTyCbTcD~SmDzSwDxSaEtSiEpSsEjS}EfSeFbSoF|RyFxRaGrRkGlRsGfR}G`ReHzQmHtQwHnQ_IhQgI`QoIzPyIrPaJjPiJdPqJ|OwJtO_KlOgKdOoK|NuKrN}KjNeLbNkLxMqLpMyLfM_M|LeMtLkMjLqM`LwMvK}MlKcNbKiNxJoNnJsNbJyNxI}NnIcObIgOxHkOlHoObHuOvGyOlG{O`G_PtFcPjFgP~EiPrEmPfEoPzDsPnDuPbDwPvCyPjC{P~B}PrB_QfB_QzAaQnAcQbAcQv@cQj@eQ^eQReQDeQCeQOeQ[cQg@cQs@cQ_AaQmAaQyA_QeB}PqB{P}ByPiCwPuCuPaDsPmDqPyDmPeEkPqEgP{EcPgFaPsF}O_GyOiGuOuGuOuIvzEizPxGtChGhCjGbClG~BnGxBpGrBrGlBrGfBtG`BvGzAvGtAxGnAzGhAzGbA|G|@|Gv@|Gp@~Gj@~Gd@~G^`HX`HR`HL`HF`H@`HA`HG`HM`HS~G[~Ga@~Gg@~Gm@|Gs@|Gy@zG_AzGeAxGkAxGqAvGwAvG}AtGcBrGgBpGmBpGsBnGyBlG_CjGeChGkCfGoCdGuCbG{C~FaD|FeDzFkDxFqDtFuDrF{DpFaElFeEjFkEfFoEdFsE`FyE~E}EzEcFvEgFtEkFpEoFlEuFhEyFfE}FbEaG~DeGzDiGvDmGrDqGnDuGjDyGfD{GbD_H~CcHzCgHtCiHpCmHlCoHhCsHdCuH~ByHzB{HvB}HpB_IlBcIhBeIbBgI~AiIzAkItAmIpAoIjAqIfAqI`AsI|@uIv@uIr@wIl@wIh@yIb@yI^{IX{IT{IN}IJ}ID}I@}IA}IE}IK}IO}IU{IY{I_@{Ie@yIi@yIo@wIs@wIy@uI}@uIaAsIgAqIkAqIqAoIuAmI{AkI_BiIcBgIiBeImBcIqB_IwB}H{B{H_CwHeCuHiCsHmCoHqCmHuCiH{CeH_DcHcD_HgD{GkDyGoDuGsDqGwDmG{DiG_EeGcEaGgE}FiEyFmEuFqEoFuEkFwEgF{EcF_F}EaFyEeFsEgFoEkFiEmFeEqF_EsF{DuFuDyFqD{FkD}FeD_GaDcG{CeGuCgGoCiGkCkGeCmG_CoGyBqGsBqGmBsGgBuGaBwG}AwGwAyGqAyGkA{GeA}G_A}Gy@}Gs@_Hm@_Hg@_H_@aHYaHSaHMaHGaH}@'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.259081824529, -120.04212319184), new google.maps.LatLng(34.496527777778, -119.63894444444));
    polygon.altLow  = 1500;
    polygon.altHigh = 4000;
    polygon.desc    = 'SANTA BARBARA AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA BARBARA AIRPORT CLASS C<br />1500-4000');
    

// SPOKANE, FAIRCHILD AFB CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wdeaH`julUmA|JpBlGzChJtClJpCpJlCtJhCvJdCzJ~B~JzBbKvBdKpBhKlBjKhBlKbBpK~ArKzAtKtAvKpAzKjA|KfA~K`A~K|@`Lv@bLr@dLn@dLh@fLb@hL^hLXhLTjLNjLJjLDjL@jLAjLEjLKjLOjLUjLYhL_@hLc@hLi@fLm@dLs@dLw@bL}@`LaA~KgA~KkA|KqAzKuAvK{AtK_BrKcBpKiBlKmBjKqBhKwBdK{BbK_C~JeCzJiCvJmCtJqCpJuClJ{ChJ_DdJcD`JgD|IkDvIoDrIsDnIwDjI{DdI_E`IcEzHgEvHiEpHmEjHqEfHuE`HwEzG{EtG_FnGaFjGeFdGgF~FkFxFmFrFqFjFsFdFuF~EyFxE{FrE}FjE_GdEcG~DeGvDgGpDiGjDkGbDmG|CoGtCqGnCqGfCsG`CuGxBwGpBwGjByGbB{GzA{GtA}GlA}GdA}G~@_Hv@_Hn@_Hh@aH`@aHXaHPaHJaHBaHAaHIaHOaHWaH_@_Hg@_Hm@_Hu@}G}@}GeA}GkA{GsA{G{AyGaBwGiBwGqBuGwBsG_CsGeCqGmCoGuCmG{CkGcDiGiDgGoDeGwDcG}DaGeE_GkE{FqEyFwEwF_FsFeFqFkFoFqFkFwFiF}FeFcGcFiG_FoG{EuGyE{GuEaHqEgHmEkHkEqHgEwHcE{H_EaI{DeIwDkIsDoIoDsIkDyIgD}IcDaJ_DeJ{CiJwCmJsCqJmCuJiCyJeC}JaC_K{BcKwBgKsBiKmBmKiBoKeBqK_BuK{AwKuAyKqA{KmA}KgA_LcAaL}@cLy@eLs@eLo@gLi@iLe@iL_@kL[kLUkLOmLKmLEmLAmL@yLDmLJmLNmLTkLXkL^kLd@iLh@iLn@gLr@eLx@eL|@cLbAaLfA_LjA}KpA{KtAyKzAwK~AuKdBqKhBoKlBmKrBiKvBgKzBcKvCmIiBwF{CiJuCmJqCqJmCsJiCwJeC{J_C_K{BaKwBeKsBiKmBkKiBmKcBqK_BsK{AuKuAwKqA{KkA}KgA_LaA_L}@aLy@cLs@eLo@eLi@gLe@iL_@iLYiLUkLOkLKkLEkLAkL@wLDkLJkLNkLTkLXiL^iLb@iLh@gLl@gLr@eLv@cL|@aL`AaLfA_LjA}KpA{KtAwKzAuK~AsKbBqKhBmKlBkKpBiKvBeKzBaK~B_KdC{JhCwJlCsJpCqJtCmJzCiJ~CeJbDaJfD{IjDwInDsIrDoIvDiIzDeI~D_IbE{HdEuHhEqHlEkHpEeHtE_HvE{GzEuG~EoG`FiGdFcGfF}FjFwFlFqFpFkFrFeFtF_FxFwEzFqE|FkE~FcE`G}DdGwDfGoDhGiDjGaDlG{ClGsCnGmCpGeCrG_CtGwBtGqBvGiBxGaBxG{AzGsAzGkA|GeA|G}@|Gu@~Gm@~Gg@~G_@~GW~GQ`HI`HA`HB`HH~GP~GX~G`@~Gf@~Gn@|Gv@|G~@|GdAzGlAzGtAxGzAxGbBvGjBtGpBtGxBrG~BpGfCnGlClGtCjGzChGbDhGhDdGpDbGvD`G|D~FdE|FjEzFpEvFxEtF~ErFdFnFjFlFpFjFvFfF|FdFbG`FhG|EnGzEtGvEzGrE`HpEdHlEjHhEpHdEtH`EzH~D~HzDdIvDhIrDlInDrIjDvIfDzIbD~I~CbJxCfJtCjJpCnJlCrJhCvJbCzJ~B|JzB`KvBdKpBfKlBjKhBlKbBnK~ArKzAtKtAvKpAxKjAzKfA|K`A~K|@`Lv@bLr@bLl@dLh@dLb@fL^fLXhLThLNhLJjLDjL@jLAjLEjLKjLOhLUhLYhL_@fLc@fLi@dLm@dLs@bLw@bL}@`LaA~KgA|KkAzKqAxKuAvKyAtK_BrKcBnKiBlKmBjKqBfKwBdK{B`K'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.531618314504, -117.78136850867), new google.maps.LatLng(47.703151838547, -117.41090212256));
    polygon.altLow  = 0;
    polygon.altHigh = 6400;
    polygon.desc    = 'SPOKANE, FAIRCHILD AFB CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SPOKANE, FAIRCHILD AFB CLASS C<br />SFC-6400');
    

// SPOKANE, FAIRCHILD AFB CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cvs`H`dslU}B|_@pDjZbDtXxCxXnC|XdC`YzBbYpBfYfBhY|AjYrAnYhApY~@rYt@rYj@tY`@tYVvYLvYBvYCvYMvYWvYa@vYk@tYu@rY_ArYiApYsAnY}AjYgBhYqBfY{BbYeC`YoC|XyCxXcDtXmDpXuDjX_EfXiE`XsE|W{EvWeFpWoFjWwFdWaG~ViGvVsGpV{GhVeHbVmHzUuHrU_IjUgIbUoIxTwIpT_JfTgJ~SoJtSwJjS_KbSeKxRmKnRuKbR{KxQcLnQiLbQqLxPwLlP}L`PeMvOkMjOqM~NwMrN}MfNcNzMgNlMmN`MsNtLwNfL}NzKaOlKeO~JkOrJoOdJsOvIwOhI{OzH_PlHaP~GePpGiPbGkPtFoPfFqPxEsPhEuPzDwPlDyP|C{PnC}P`C_QpB_QbBaQrAaQdAcQt@cQf@cQVcQHcQCcQQcQa@cQo@cQ_AaQmAaQ}A_QkB}P{B}PiC{PwCyPgDwPuDuPeEqPsEoPaFmPoFiP_GgPmGcP{G_PiH{OwHyOeIuOsIqOaJkOoJgO{JcOiK_OwKyNcLuNqLoN}LiNkMeNwM_NeNyMqNsM}NmMiOgMuO_MaPyLmPsLwPkLcQeLmQ}KyQwKcRoKmRiKyRaKcSyJmSqJwSiJ_TaJiTyIsTqI{TiIcUaImUwHuUoH}UgHeV}GkVuGsVkG{VcGaWyFiWqFoWgFuW}E{WuEaXkEeXaEkXwDoXmDuXcDyX{C}XqCaYgCeY}BiYsBkYiBoY_BqYuAsYkAuYaAwYw@yYm@{Ya@{YW}YM}YC}YBsZL}YV}Y`@{Yj@{Yt@yY`AwYjAuYtAsY~AqY`Dc^_DuWcDwXyC}XqCaYgCcY}BgYsBkYiBmY_BoYuAsYkAuYaAwYw@wYk@yYa@{YW{YM{YC{YBsZL{YV{Y`@{Yj@yYt@wY~@wYjAuYtAsY~AoYhBmYrBkY|BgYfCcYnCaYxC}XbDyXlDsXvDoX`EkXjEeXrE_X|EyWfFsWnFmWxFgW`GaWjGyVrGsV|GkVdHcVnH{UvHsU~HkUfIcUpI{TxIqT`JiThJ_TpJuSxJkS~JaSfKwRnKmRvKcR|KyQdLmQjLcQpLwPxLkP~LaPdMuOjMiOpM}NvMqN|McNbNwMhNkMnN}LrNqLxNcL|NwK`OiKfO{JjOoJnOaJrOsIvOeIzOwH~OiHpPkIjgD|wUgH|CoGtCmGzCkGbDiGhDgGnDeGvDcG|D_GdE}FjE{FpEyFvEuF~EsFdFqFjFmFpFkFvFgF|FeFbGaFhG_FnG{EtGwEzGuE`HqEdHmEjHiEpHgEtHcEzH_E`I{DdIwDhIsDnIoDrIkDvIgD|IcD`J_DdJ{ChJwClJqCpJmCtJiCxJeCzJ_C~J{BbKwBdKsBhKmBjKiBnKcBpK_BrK{AvKuAxKqAzKkA|KgA~KaA`L}@bLy@bLs@dLo@fLi@fLc@hL_@hLYjLUjLOjLKlLEvLAlL@lLDlLJlLNjLTjLZjL^hLd@hLh@fLn@fLr@dLx@bL|@bLbA`LfA~KjA|KpAzKtAxKzAvK~ArKdBpKhBnKlBjKrBhKvBdKzBbK~B~JdCzJhCxJlCtJpCpJvClJzChJzBdFsBfJ{B`KwBdKqBhKmBjKiBnKcBpK_BrK{AtKuAxKqAzKkA|KgA~KaA`L}@`Lw@bLs@dLm@fLi@fLc@hL_@hLYjLUjLOjLKjLEvLAlL@lLDjLJjLNjLTjLZjL^hLd@hLh@fLn@fLr@dLx@bL|@`LbA`LfA~KjA|KpAzKtAxKzAtK~ArKbBpKhBlKlBjKrBhKvBdKzB`K~B~JdCzJhCvJlCrJpCpJvClJzChJ~CdJbD`JfDzIjDvInDrIrDnIvDhIzDdI~D~HbEzHfEtHhEpHlEjHpEdHtE~GvEzGzEtG~EnG`FhGdFbGfF|FjFvFlFpFpFjFrFdFtF|ExFvEzFpE|FjE~FbEbG|DdGvDfGnDhGhDjG`DlGzCnGrCnGlCpGdCrG~BtGvBtGpBvGhBxG`BxGzAzGrAzGjA|GdA|G|@|Gt@~Gl@~Gf@~G^~GV`HN`HH`H@`HC`HK`HQ~GY~Ga@~Gg@~Go@|Gw@|G_A|GeAzGmAzGuAxG{AxGcBvGkBtGqBtGyBrG_CpGgCnGmClGuCjG{CjGcDhGiDdGqDbGwD`G_E~FeE|FkEzFqEvFyEtF_FrFeFnFkFlFqFjFwFfF}FdFcG`FiG|EoGzEuGvE{GrEaHpEeHlEkHhEqHdEuH`E{H~D_IzDeIvDiIrDmInDsIjDwIfD{IbD_J|CcJxCgJtCkJpCoJlCsJhCwJbC{J~B}JzBaKvBeKpBgKlBkKhBmKbBoK~AsKxAuKtAwKpAyKjA{KfA}K`A_L|@aLv@cLr@cLl@eLh@gLb@gL^gLXiLTiLNiLJkLDkL@kLAkLEkLKkLOiLUiLYiL_@gLc@gLi@gLm@eLs@cLw@cL}@aLaA_LgA}KkA{KqAyKuAwK{AuK_BsKcBoKiBmKmBkKqBgKwBeK{BaK_C}JcC{JiCwJmCsJqCoJuCkJyCgJqAmHpBcJzBcKvBeKpBiKlBkKhBmKbBqK~AsKzAuKtAwKpA{KjA}KfA_L`A_L|@aLv@cLr@eLl@eLh@gLb@gL^iLXiLTkLNkLJkLDkL@kLAkLEkLKkLOkLUkLYiL_@iLc@gLi@gLo@eLs@eLw@cL}@aLaA_LgA}KkA}KqAyKuAwK{AuK_BsKcBqKiBmKmBkKqBiKwBeK{BaK_C_KeC{JiCwJmCuJqCqJkCoJxxLguK`HtUdH`VzGhVrGpVhGvV`G~VvFdWnFjWdFpW|EvWrE|WhE`X~DfXvDjXlDpXbDtXxCxXnC|XdC`YzBbYpBfYfBhY|AjYrAnYhApY~@rYt@rYj@tY`@vYVvYLvYBvYCvYMvYWvYa@vYk@tYu@rY_ArYiApYsAnY}AjY'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.448334503082, -117.90453415997), new google.maps.LatLng(47.786424455144, -117.30066666667));
    polygon.altLow  = 3700;
    polygon.altHigh = 6400;
    polygon.desc    = 'SPOKANE, FAIRCHILD AFB CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SPOKANE, FAIRCHILD AFB CLASS C<br />3700-6400');
    

// SPOKANE INTERNATIONAL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('amabHnoxlUvCmIiBwF{CiJuCmJqCqJmCsJiCwJeC{J_C_K{BaKwBeKsBiKmBkKiBmKcBqK_BsK{AuKuAwKqA{KkA}KgA_LaA_L}@aLy@cLs@eLo@eLi@gLe@iL_@iLYiLUkLOkLKkLEkLAkL@wLDkLJkLNkLTkLXiL^iLb@iLh@gLl@gLr@eLv@cL|@aL`AaLfA_LjA}KpA{KtAwKzAuK~AsKbBqKhBmKlBkKpBiKvBeKzBaK~B_KdC{JhCwJlCsJpCqJtCmJzCiJ~CeJbDaJfD{IjDwInDsIrDoIvDiIzDeI~D_IbE{HdEuHhEqHlEkHpEeHtE_HvE{GzEuG~EoG`FiGdFcGfF}FjFwFlFqFpFkFrFeFtF_FxFwEzFqE|FkE~FcE`G}DdGwDfGoDhGiDjGaDlG{ClGsCnGmCpGeCrG_CtGwBtGqBvGiBxGaBxG{AzGsAzGkA|GeA|G}@|Gu@~Gm@~Gg@~G_@~GW~GQ`HI`HA`HB`HH~GP~GX~G`@~Gf@~Gn@|Gv@|G~@|GdAzGlAzGtAxGzAxGbBvGjBtGpBtGxBrG~BpGfCnGlClGtCjGzChGbDhGhDdGpDbGvD`G|D~FdE|FjEzFpEvFxEtF~ErFdFnFjFlFpFjFvFfF|FdFbG`FhG|EnGzEtGvEzGrE`HpEdHlEjHhEpHdEtH`EzH~D~HzDdIvDhIrDlInDrIjDvIfDzIbD~I~CbJxCfJtCjJpCnJlCrJhCvJbCzJ~B|JzB`KvBdKpBfKlBjKhBlKbBnK~ArKzAtKtAvKpAxKjAzKfA|K`A~K|@`Lv@bLr@bLl@dLh@dLb@fL^fLXhLThLNhLJjLDjL@jLAjLEjLKjLOhLUhLYhL_@fLc@fLi@dLm@dLs@bLw@bL}@`LaA~KgA|KkAzKqAxKuAvKyAtK_BrKcBnKiBlKmBjKqBfKwBdK{B`KmA|JpBlGzChJtClJpCpJlCtJhCvJdCzJ~B~JzBbKvBdKpBhKlBjKhBlKbBpK~ArKzAtKtAvKpAzKjA|KfA~K`A~K|@`Lv@bLr@dLn@dLh@fLb@hL^hLXhLTjLNjLJjLDjL@jLAjLEjLKjLOjLUjLYhL_@hLc@hLi@fLm@dLs@dLw@bL}@`LaA~KgA~KkA|KqAzKuAvK{AtK_BrKcBpKiBlKmBjKqBhKwBdK{BbK_C~JeCzJiCvJmCtJqCpJuClJ{ChJ_DdJcD`JgD|IkDvIoDrIsDnIwDjI{DdI_E`IcEzHgEvHiEpHmEjHqEfHuE`HwEzG{EtG_FnGaFjGeFdGgF~FkFxFmFrFqFjFsFdFuF~EyFxE{FrE}FjE_GdEcG~DeGvDgGpDiGjDkGbDmG|CoGtCqGnCqGfCsG`CuGxBwGpBwGjByGbB{GzA{GtA}GlA}GdA}G~@_Hv@_Hn@_Hh@aH`@aHXaHPaHJaHBaHAaHIaHOaHWaH_@_Hg@_Hm@_Hu@}G}@}GeA}GkA{GsA{G{AyGaBwGiBwGqBuGwBsG_CsGeCqGmCoGuCmG{CkGcDiGiDgGoDeGwDcG}DaGeE_GkE{FqEyFwEwF_FsFeFqFkFoFqFkFwFiF}FeFcGcFiG_FoG{EuGyE{GuEaHqEgHmEkHkEqHgEwHcE{H_EaI{DeIwDkIsDoIoDsIkDyIgD}IcDaJ_DeJ{CiJwCmJsCqJmCuJiCyJeC}JaC_K{BcKwBgKsBiKmBmKiBoKeBqK_BuK{AwKuAyKqA{KmA}KgA_LcAaL}@cLy@eLs@eLo@gLi@iLe@iL_@kL[kLUkLOmLKmLEmLAmL@yLDmLJmLNmLTkLXkL^kLd@iLh@iLn@gLr@eLx@eL|@cLbAaLfA_LjA}KpA{KtAyKzAwK~AuKdBqKhBoKlBmKrBiKvBgKzBcK'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.531618314504, -117.78136850867), new google.maps.LatLng(47.703151838547, -117.41090212256));
    polygon.altLow  = 0;
    polygon.altHigh = 6400;
    polygon.desc    = 'SPOKANE INTERNATIONAL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SPOKANE INTERNATIONAL AIRPORT CLASS C<br />SFC-6400');
    

// SPOKANE INTERNATIONAL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ozrbHnuzlU`Dc^_DuWcDwXyC}XqCaYgCcY}BgYsBkYiBmY_BoYuAsYkAuYaAwYw@wYk@yYa@{YW{YM{YC{YBsZL{YV{Y`@{Yj@yYt@wY~@wYjAuYtAsY~AoYhBmYrBkY|BgYfCcYnCaYxC}XbDyXlDsXvDoX`EkXjEeXrE_X|EyWfFsWnFmWxFgW`GaWjGyVrGsV|GkVdHcVnH{UvHsU~HkUfIcUpI{TxIqT`JiThJ_TpJuSxJkS~JaSfKwRnKmRvKcR|KyQdLmQjLcQpLwPxLkP~LaPdMuOjMiOpM}NvMqN|McNbNwMhNkMnN}LrNqLxNcL|NwK`OiKfO{JjOoJnOaJrOsIvOeIzOwH~OiHpPkIjgD|wUgH|CoGtCmGzCkGbDiGhDgGnDeGvDcG|D_GdE}FjE{FpEyFvEuF~EsFdFqFjFmFpFkFvFgF|FeFbGaFhG_FnG{EtGwEzGuE`HqEdHmEjHiEpHgEtHcEzH_E`I{DdIwDhIsDnIoDrIkDvIgD|IcD`J_DdJ{ChJwClJqCpJmCtJiCxJeCzJ_C~J{BbKwBdKsBhKmBjKiBnKcBpK_BrK{AvKuAxKqAzKkA|KgA~KaA`L}@bLy@bLs@dLo@fLi@fLc@hL_@hLYjLUjLOjLKlLEvLAlL@lLDlLJlLNjLTjLZjL^hLd@hLh@fLn@fLr@dLx@bL|@bLbA`LfA~KjA|KpAzKtAxKzAvK~ArKdBpKhBnKlBjKrBhKvBdKzBbK~B~JdCzJhCxJlCtJpCpJvClJzChJzBdFsBfJ{B`KwBdKqBhKmBjKiBnKcBpK_BrK{AtKuAxKqAzKkA|KgA~KaA`L}@`Lw@bLs@dLm@fLi@fLc@hL_@hLYjLUjLOjLKjLEvLAlL@lLDjLJjLNjLTjLZjL^hLd@hLh@fLn@fLr@dLx@bL|@`LbA`LfA~KjA|KpAzKtAxKzAtK~ArKbBpKhBlKlBjKrBhKvBdKzB`K~B~JdCzJhCvJlCrJpCpJvClJzChJ~CdJbD`JfDzIjDvInDrIrDnIvDhIzDdI~D~HbEzHfEtHhEpHlEjHpEdHtE~GvEzGzEtG~EnG`FhGdFbGfF|FjFvFlFpFpFjFrFdFtF|ExFvEzFpE|FjE~FbEbG|DdGvDfGnDhGhDjG`DlGzCnGrCnGlCpGdCrG~BtGvBtGpBvGhBxG`BxGzAzGrAzGjA|GdA|G|@|Gt@~Gl@~Gf@~G^~GV`HN`HH`H@`HC`HK`HQ~GY~Ga@~Gg@~Go@|Gw@|G_A|GeAzGmAzGuAxG{AxGcBvGkBtGqBtGyBrG_CpGgCnGmClGuCjG{CjGcDhGiDdGqDbGwD`G_E~FeE|FkEzFqEvFyEtF_FrFeFnFkFlFqFjFwFfF}FdFcG`FiG|EoGzEuGvE{GrEaHpEeHlEkHhEqHdEuH`E{H~D_IzDeIvDiIrDmInDsIjDwIfD{IbD_J|CcJxCgJtCkJpCoJlCsJhCwJbC{J~B}JzBaKvBeKpBgKlBkKhBmKbBoK~AsKxAuKtAwKpAyKjA{KfA}K`A_L|@aLv@cLr@cLl@eLh@gLb@gL^gLXiLTiLNiLJkLDkL@kLAkLEkLKkLOiLUiLYiL_@gLc@gLi@gLm@eLs@cLw@cL}@aLaA_LgA}KkA{KqAyKuAwK{AuK_BsKcBoKiBmKmBkKqBgKwBeK{BaK_C}JcC{JiCwJmCsJqCoJuCkJyCgJqAmHpBcJzBcKvBeKpBiKlBkKhBmKbBqK~AsKzAuKtAwKpA{KjA}KfA_L`A_L|@aLv@cLr@eLl@eLh@gLb@gL^iLXiLTkLNkLJkLDkL@kLAkLEkLKkLOkLUkLYiL_@iLc@gLi@gLo@eLs@eLw@cL}@aLaA_LgA}KkA}KqAyKuAwK{AuK_BsKcBqKiBmKmBkKqBiKwBeK{BaK_C_KeC{JiCwJmCuJqCqJkCoJxxLguK`HtUdH`VzGhVrGpVhGvV`G~VvFdWnFjWdFpW|EvWrE|WhE`X~DfXvDjXlDpXbDtXxCxXnC|XdC`YzBbYpBfYfBhY|AjYrAnYhApY~@rYt@rYj@tY`@vYVvYLvYBvYCvYMvYWvYa@vYk@tYu@rY_ArYiApYsAnY}AjY}B|_@pDjZbDtXxCxXnC|XdC`YzBbYpBfYfBhY|AjYrAnYhApY~@rYt@rYj@tY`@tYVvYLvYBvYCvYMvYWvYa@vYk@tYu@rY_ArYiApYsAnY}AjYgBhYqBfY{BbYeC`YoC|XyCxXcDtXmDpXuDjX_EfXiE`XsE|W{EvWeFpWoFjWwFdWaG~ViGvVsGpV{GhVeHbVmHzUuHrU_IjUgIbUoIxTwIpT_JfTgJ~SoJtSwJjS_KbSeKxRmKnRuKbR{KxQcLnQiLbQqLxPwLlP}L`PeMvOkMjOqM~NwMrN}MfNcNzMgNlMmN`MsNtLwNfL}NzKaOlKeO~JkOrJoOdJsOvIwOhI{OzH_PlHaP~GePpGiPbGkPtFoPfFqPxEsPhEuPzDwPlDyP|C{PnC}P`C_QpB_QbBaQrAaQdAcQt@cQf@cQVcQHcQCcQQcQa@cQo@cQ_AaQmAaQ}A_QkB}P{B}PiC{PwCyPgDwPuDuPeEqPsEoPaFmPoFiP_GgPmGcP{G_PiH{OwHyOeIuOsIqOaJkOoJgO{JcOiK_OwKyNcLuNqLoN}LiNkMeNwM_NeNyMqNsM}NmMiOgMuO_MaPyLmPsLwPkLcQeLmQ}KyQwKcRoKmRiKyRaKcSyJmSqJwSiJ_TaJiTyIsTqI{TiIcUaImUwHuUoH}UgHeV}GkVuGsVkG{VcGaWyFiWqFoWgFuW}E{WuEaXkEeXaEkXwDoXmDuXcDyX{C}XqCaYgCeY}BiYsBkYiBoY_BqYuAsYkAuYaAwYw@yYm@{Ya@{YW}YM}YC}YBsZL}YV}Y`@{Yj@{Yt@yY`AwYjAuYtAsY~AqY'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.448334503082, -117.90453415997), new google.maps.LatLng(47.786424455144, -117.30066666667));
    polygon.altLow  = 3700;
    polygon.altHigh = 6400;
    polygon.desc    = 'SPOKANE INTERNATIONAL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SPOKANE INTERNATIONAL AIRPORT CLASS C<br />3700-6400');
    

// SPOKANE INTERNATIONAL AIRPORT CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wh~aHbh}jUpOwFhP_GjPoFnPaFpPsErPeEtPuDvPgDxPyCzPiC|P{B~PkB~P}A`QmA`Q_AbQo@bQa@bQQbQCbQHbQVbQf@bQt@`QdA`QrA~P`B~PpB|P~BzPnCxP|CvPjDtPzDrPhEpPvElPdFjPtFfPbGdPpG`P~G|OlHzOzHvOhIrOvInOdJhOpJdO~J`OlK|NxKvNfLrNrLlN`MfNlM`NxM|MdNvMpNpM~NjMhOdMtO|L`PvLlPpLvPhLbQbLlQzKxQtKbRlKlRdKvR~J`SvJjSnJtSfJ~S~IfTvIpTnIxTfI`U~HhUvIdUyxLfuK_DkJ_DeJcDaJgD}IkDwIoDsIsDoIwDiI{DeI_EaIcE{HgEwHiEqHmEkHqEgHuEaHwE{G{EuG_FoGaFkGeFeGgF_GkFyFmFsFqFkFsFeFuF_FyFyE{FsE}FkE_GeEcG_EeGwDgGqDiGkDkGcDmG}CoGuCqGoCqGgCsG_CuGyBwGqBwGkByGcB{G{A{GuA}GmA}GeA}G_A_Hw@_Ho@_Hg@aHa@aHYaHQaHIaHCaH@aHHaHPaHVaH^_Hf@_Hn@_Ht@}G|@}GdA}GjA{GrA{GzAyG`BwGhBwGpBuGvBsG~BuFvCkgD}wU'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.478555555556, -117.46861111111), new google.maps.LatLng(47.673888888889, -117.28758892873));
    polygon.altLow  = 4200;
    polygon.altHigh = 6400;
    polygon.desc    = 'SPOKANE INTERNATIONAL AIRPORT CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'SPOKANE INTERNATIONAL AIRPORT CLASS C<br />4200-6400');
    

// TUCSON INTERNATIONAL CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{}ncEz|idTkJoEmG{BkGaCiGgCgGkCeGqCcGwCaG{C}FaD{FgDyFkDwFqDsFuDqF{DoF_EkFeEiFiEeFoEaFsE_FwE{E}EyEaFuEeFqEiFmEmFkEqFgEwFcE{F_E_G{DcGwDgGsDiGoDmGkDqGgDuGcDyG_D{G{C_HwCaHqCeHmCgHiCkHeCmHaCqH{BsHwBuHsBwHmB{HiB}HeB_I_BaI{AcIuAeIqAgIkAgIgAiIcAkI}@mIy@mIs@oIo@oIi@qIe@qI_@sI[sIUsIOsIKuIEuIAuI@uID}IJuINsITsIXsI^sId@qIh@qIn@oIr@oIx@mI|@mIbAkIfAiIjAiIpAgItAeIzAcI~AaIdB_IhB}HlB{HrByHvBuHzBsH~BqHdCmHhCkHlCgHpCeHvCaHzC_H~C{GbDyGfDuGjDqGnDmGrDiGvDgGzDcG~D_GbE{FfEwFjEsFlEmFpEiFtEeFxEaFzE}E~EwE`FsEdFoEhFiEjFeElF_EpF{DrFuDvFqDxFkDzFgD|FaD`G{CbGwCdGqCfGkChGgCjGaClG{BnGuBpGqBrGkBrGeBtG_BvGyAvGsAxGmAzGgAzGaA|G}@|Gw@|Gq@~Gk@~Ge@~G_@`HY`HS`HM`HG`HA`H@`HF`HL`HR`HX~G^~Gd@~Gj@|Gp@|Gv@|G|@zGbAzGhAxGnAvGrAvGxAtG~ArGdBpGjBpGpBnGvBlGzBjG`ChGfCfGlCdGpCbGvC`G|C|F`DzFfDxFjDvFpDrFtDpFzDlF~DjFdEfFhEdFnE`FrE~EvEzE|EvE`FtEdFpEhFlElFhErFfEvFbEzF~D~FzDbGvDdGrDhGnDlGjDpGfDtGbDvG~CzGzC~GvC`HpCdHlCfHhCjHdClH~BpHzBrHvBtHrBvHlBxHhB|Hv@`DtCNnGvBlGzBjG`ChGfCfGlCdGpCbGvC`G|C~F`DzFfDxFlDvFpDrFvDpFzDnF`EjFdEhFhEdFnEbFrE~ExEzE|ExE`FtEdFpEhFnEnFjErFfEvFbEzF~D~FzDbGvDfGrDjGnDlGjDpGfDtGbDxG~CzGzC~GvCbHrCdHlChHhCjHdClH`CpHzBrHvBtHrBxHlBzHhB|HdB~H~A`IzAbItAdIpAfIjAhIfAhIbAjI|@lIx@lIr@nIn@nIh@pId@pI^rIZrITrINrIJtIDtI@tIAtIEtIKtIOrIUrIYrI_@rIc@pIi@pIo@nIs@nIy@lI}@lIaAjIgAhIkAhIqAfIuAdI{AbI_B`IeB~HiB|HmBzHsBxHwBtH{BrHaCpHeClHiCjHmChHqCdHwCbH{C~G_DzGcDxGgDtGkDpGoDlGsDjGwDfG{DbG_E~FcEzFgEvFkErFmEnFqEjFuEdFyE`F{E|E_FxEcFrEeFnEiFjEkFdEoF`EqFzDsFvDwFpDyFlD{FfD_G`DaG|CcGvCeGpCgGlCiGfCkG`CmGzBoGvBqGpBsGjBuGdBuG~AwGxAyGtAyGnA{GhA{GbA}G|@}Gv@_Hp@_Hj@_Hd@aH^aHXaHRaHLaHFaH@aHAaHGaHMaHSaHYaH_@_He@_Hk@_Hq@}Gw@}G}@{GaA{GgAyGmAyGsAwGyAuG_BuGeBsGkBqGqBoGuBmG{BkGaCiGgCgGkCeGqCcGwCaG}C_GaD}FgDyFkDwFqDuFuDqF{DoF_EkFeEiFiEeFoEcFsE_FwE}E}EyEaFuEeFqEiFoEoFkEsFgEwFcE{F_E_G{DcGwDgGsDkGoDmGkDqGgDuGcDyG_D{G{C_HwCcHsCeHmCiHiCkHeCoHaCqH{BsHwBwHsByHmB{H}CmM'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.032516531982, -111.03933363204), new google.maps.LatLng(32.249779871777, -110.78501635087));
    polygon.altLow  = 0;
    polygon.altHigh = 6600;
    polygon.desc    = 'TUCSON INTERNATIONAL CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON INTERNATIONAL CLASS C<br />SFC-6600');
    

// TUCSON INTERNATIONAL CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{|zcErhxdT_H}GeNwJ_NaKyMkKsMuKmM_LgMgLaMqLyL{LsLcMmLmMeLuM_L}MwKgNoKoNiKwNaK_OyJgOqJoOiJuOaJ}OyIePqIkPiIsPaIyPwH_QoHgQgHmQ}GsQuGyQkG}QcGcRyFiRqFmRgFsR}EwRuE{RkEaSaEeSwDiSmDkScDoS{CsSqCuSgCyS}B{SsB_TiBaT_BcTuAeTkAgTaAgTw@iTm@iTa@kTWkTMkTCkTBkTL}TVkT`@kTj@iTt@iT`AgTjAgTtAeT~AcThBaTrB_T|B{SfCySpCwSxCsSbDoSlDmSvDiS`EeSjEaSrE{R|EwRfFsRnFmRxFiRbGcRjG_RtGyQ|GsQfHmQnHgQvHaQ~HyPhIsPpIkPxIeP`J}OhJwOpJoOxJgO`K_OfKwNnKoNvKgN|K}MdLuMjLmMrLcMxL{L~LqLfMgLlM_LrMuKxMkK~MaKdNwJhNmJnNcJtNyIxNoI~NeIbOyHfOoHlOeHpOyGtOoGxOcG|OyF~OmFbPaFfPwEhPkElP_EnPsDrPiDtP}CvPqCxPeCzPyB|PmB~PcB~PwA`QkA`Q_AbQs@bQg@bQ[dQOdQCdQDdQPbQ\\bQh@bQt@`Q`A`QlA~PxA|PdB|PpBzPzBxPfCvPrCtP~CpPjDnPtDlP`EhPlEfPxEbPbF~OnFzOxFvOdGrOnGnOzGjOdHfOpHbOzH|NdIxNnIrNzInNdJhNnJbNxJ|MbKvMjKpMtKjM~KdMhL~LpLxLzLpLbMjLlMdLtM|K|MtKfNnKnNfKvN~J~NvJfOpJnOhJtO`J|OxIbPnIjPfIpPjFnKfJ|EbNxJ~MbKxMlKrMtKlM~KdMhL~LpLxLzLrLdMjLlMdLtM|K~MvKfNnKnNfKvN~J~NxJfOpJnOhJtO`J|OxIdPpIjPfIrP~HxPvH~PnHdQdHjQ|GpQrGvQjG|Q`GbRxFfRnFlRfFpR|EvRrEzRhE~R`EbSvDfSlDjSbDlSxCpSnCtSfCvS|BxSrB|ShB~S~A`TtAbTjAdT`AdTt@fTj@fT`@hTVhTLhTBhTChTMhTWhTa@hTk@fTu@fT_AdTiAdTsAbT}A`TgB~SqB|S{BxSeCvSoCtSyCpScDlSmDjSwDfSaEbSiE~RsEzR}EvRgFpRoFlRyFfRaGbRkG|QsGvQ}GpQeHjQoHdQwH~P_IxPgIrPqIjPyIdPaJ|OiJvOqJnOyJfO_K~NgKvNoKnNwKfN}K~MeLtMkLlMsLdMyLzL_MrLeMhLmM~KsMvKyMlK_NbKcNxJiNnJoNdJsNzIyNpI}NdIcOzHgOpHkOdHqOzGuOpGyOdG}OzF_PnFcPbFgPxEiPlEmP`EoPvDsPjDuP~CwPrCyPfC{P|B}PpB_QdBaQxAaQlAcQ`AcQt@cQh@eQ\\eQPeQDeQCeQOeQ[eQg@cQs@cQ_AaQkAaQuA_QaB}PmB{PyByPeCwPqCuP}CsPiDqPsDmP_EkPkEgPwEePaFaPmF}OwFyOcGuOoGqOyGmOcHiOoHcOyH_OeI{NoIuNyIoNcJkNmJeNwJ_NaKyMkKsMuKmM_LgMiLaMqL{L{LsLcMmLmMeLuM_L_NwKgNqKoNiKwNaK_OyJgOqJoOiJwOaJ}OyIePqImPiIsPaF{J'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.949031301701, -111.13742615073), new google.maps.LatLng(32.333250757261, -110.68688205282));
    polygon.altLow  = 4200;
    polygon.altHigh = 6600;
    polygon.desc    = 'TUCSON INTERNATIONAL CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON INTERNATIONAL CLASS C<br />4200-6600');
    

// WHIDBEY ISLAND NAS CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('a_sfHddskVf@ou@vBgu@hEwt@vG}s@dJ{r@rLqq@|N_p@bQen@hSel@jU}i@hWog@bYyd@xZ_b@j\\__@x]y[`_@oXd`@aUba@qQza@}Mnb@gJ|b@oFdc@uBhc@@dc@zB|b@rFnb@jJza@`N`a@tQb`@dU~^rXv]z[h\\~^vZ~a@`Yxd@fWlg@hUzi@fSbl@bQbn@zNzo@pLlq@dJvr@vGvs@fEpt@vB`u@f@hu@g@hu@wB`u@gEpt@wGvs@eJvr@qLlq@{Nzo@cQbn@gSbl@iUzi@gWlg@aYxd@wZ~a@i\\`_@w]z[__@rXc`@dUaa@tQ{a@`Nob@jJ}b@tFec@zBic@@ec@uB}b@mFob@eJ{a@{Mca@oQe`@aUa_@oXy]y[k\\}^yZ}a@cYyd@iWmg@kU}i@iSel@eQen@}N_p@sLqq@gJ{r@yG}s@iEut@yBgu@g@ou@?I'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.268674995458, -122.78041655371), new google.maps.LatLng(48.435212684249, -122.53069647434));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'WHIDBEY ISLAND NAS CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'WHIDBEY ISLAND NAS CLASS C<br />SFC-4000');
    

// WHIDBEY ISLAND NAS CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uemfHtl`kVslI}vQhMePfM}OlMqOrMeOxMwN~MkNbN_NhNqMnNeMrNwLxNkL|N}KbOoKfOaKjOsJnOgJtOyIvOiIzO{H~OmHbP_HfPqGhPcGlPsFnPeFpPwErPgEvPyDxPiDzP{CzPkC|P}B~PmB`Q_B`QoA`Q_AbQq@bQa@bQSbQCbQHbQVbQf@bQt@`QdA`QtA~PbB~PrB|P`CzPpCxP~CvPnDtP|DrPlEpPzElPhFjPxFhPfGdPtG`PbH~OpHzO~HvOlIrOzInOhJjOvJdOdK`OrK|N~KvNlLrNzLlNfMfNrMbN`N|MlNvMxNpMdOjMpOdM|O|LhPvLtPpL`QhLjQbLvQzK`RtKlRlKvRfK`S~JjSvJtSnJ~SfJhT~IpTvIzTnIbUfIlU~HtUtH|UlHdVdHlVzGrVrGzVhGbW`GhWvFnWnFvWdF|W|EbXrEfXhElX~DrXvDvXlDzXbD`YxCdYnChYdCjYzBnYpBrYfBtY|AvYrAzYhA|Y~@~Yt@~Yj@`Z`@bZVbZLbZBbZCbZMbZWbZa@bZk@`Zu@~Y_A~YiA|YsAzY}AvYgBtYqBrY{BnYeCjYoChYyCdYcD`YmDzXuDvX_ErXiElXsEfX{EbXeF|WoFvWwFnWaGhWiGbWsGzV{GtVeHlVmHdVuH|U_ItUgIlUoIbUwIzT_JpTgJhToJ~SwJtS_KjSeK`SmKvRuKlR{K`RcLvQiLjQqL`QwLtP}LhPeM~OkMrOqMfOwMxN}MlNcN`NgNtMmNfMsNzLwNlL}N`LaOrKeOdKkOvJoOhJsO|IwOnI{O`I_PpHaPbHePtGiPfGkPxFmPhFqPzEsPlEuP|DwPnDyP~C{PpC}P`C_QrB_QbBaQtAaQdAcQv@cQf@cQVcQHcQCcQQcQa@cQq@aQ_AaQoAaQ}A_QmB}P{B{PkC{P{CyPiDwPwDuPgEqPuEoPeFmPsFiPaGgPqGcP_H_PmH{O{HyOiIuOwIqOeJkOsJgOaKcOoK_O}KyNiLuNwLoNeMiNqMcN_N_NkNyMwNsMcOmMqOgM}O_MiPyLsPsL_QkLkQeLwQ}KaRwKmRoKwRiKaSaKkSyJuSqJ_TiJiTaJsTyI}TqIeUiImUaIwUwH_VoHgVgHoV}GwVuG_WkGeWcGmWyFsWqFyWgF_X}EgXuEkXkEqXaEwXwD{XmDaYcDeYeDyZpuNajEvAjMpA`LtA~KzA|K~AxKdBvKhBtKlBpKrBnKvBjKzBhK`CdKdC`KhC|JlCzJpCvJvCrJzCnJ~CjJbDdJfD`JjD|InDxIrDrIvDnIzDhI~DdIbE~HfEzHjEtHlEnHpEjHtEdHxE~GzExG~ErG`FlGdFfGhF`GjFzFnFtFpFnFrFhFvF`FxFzEzFtE|FlE`GfEbG`EdGxDfGrDhGjDjGdDlG|CnGvCpGnCrGfCrG`CtGxBvGpBvGjBxGbBzGzAzGtA|GlA|GdA|G|@~Gv@~Gn@~Gf@`H^`HV`HP`HH`H@`HC`HK`HQ`HY~Ga@~Gi@~Gq@~Gw@|G_A|GgAzGoAzGuAxG}AxGeBvGmBvGsBtG{BrGaCpGiCpGqCnGwClG_DjGeDhGmDfGsDdG{DbGaE~FiE|FoEzFuExF{EtFcFrFiFpFoFlFuFjF{FfFaGdFiG`FmG~EsGzEyGvE_HtEeHpEkHlEqHhEuHdE{HbE_I~DeIzDiIvDoIrDsInDyIjD}IfDaJbDeJ~CiJzCmJtCqJpCuJlCyJhC}JdCaK~BeKzBgKvBkKpBmKlBqKhBsKbBwK~AyKzA{KtA}KpA_LjAcLfAeL`AeL|@gLv@iLr@kLl@kLh@mLb@oL^oLXoLTqLNqLJqLDqL@qLAqLEqLKqLOqLUqLYoL_@oLc@oLi@mLo@kLs@kLw@iL}@gLaAeLgAcLkAaLqA_LuA}K{A{K_ByKcBwKiBsKmBqKqBmKwBkK{BgK_CeKeCaKiC}JmCyJqCuJuCqJ{CmJ_DiJcDeJgDaJkD}IoDyIsDsIwDoI{DiI_EeIcE_IgE{HiEuHmEoHqEkHuEeHwE_H{EyG_FsGaFmGeFgGgFaGkF{FmFuFqFoFsFiFuFcFyF{E{FuE}FoE_GgEcGaEeG{DgGsDiGmDkGeDmG_DoGwCqGqCqGiCsGaCuG{BwGsBwGkByGeByG}A{GuA{GoA}GgA}G_A_Hw@_Hq@_Hi@aHa@aHYaHQaHKaHCaH@aHHaHPaHVaH^_Hf@_Hn@_Hv@}G|@}GdA}GlA{GtA{GzAyGbBwGjBwGrBuGxBsG`CsGfCqGnCoGvCmG|CkGdDiGjDgGrDeGxDcG`EaGfE}FlE{FtEyFzEwF`FsFhFqFnFmFtFkFzFiF`GeFfGaFlGmFnG'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.185311124892, -122.90555154266), new google.maps.LatLng(48.512916666667, -122.40555917785));
    polygon.altLow  = 1300;
    polygon.altHigh = 4000;
    polygon.desc    = 'WHIDBEY ISLAND NAS CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'WHIDBEY ISLAND NAS CLASS C<br />1300-4000');
    

// WHIDBEY ISLAND NAS CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uemfHtl`kVmE|GyE~GuEdHqEjHmEnHkEtHgEzHcE~H_EdI{DjIwDnIsDrIoDxIkD|IgD`JcDdJ_DjJ{CnJwCrJqCvJmCzJiC|JeC`K_CdK{BhKwBjKsBnKmBpKiBtKeBvK_BzK{A|KuA~KqA`LkAbLgAdLcAfL}@hLy@jLs@jLo@lLi@nLe@nL_@pLYpLUpLOrLKrLErLA~L@rLDrLJrLNrLTpLZpL^pLd@nLh@nLn@lLr@jLx@jL|@hLbAfL|@~JquN`jEeC}WgCqY}BuYsBwYiB{Y_B}YuA_ZkAaZaAcZw@eZm@gZa@gZWiZMiZCiZBiZLa[ViZ`@gZj@gZt@eZ`AcZjAaZtA_Z~A}YhB{YrBwY|BuYfCqYpCmYxCiYbDeYlDaYvD{X`EwXjEqXrEkX|EgXfFaXnFyWxFsWbGmWjGeWtG_W|GwVdHoVnHgVvH_V~HwUhIoUpIeUxI}T`JsThJiTpJ_TxJuS`KkSfKaSnKwRvKmR|KaRdLwQjLkQrL_QpLwPrlI|vQ'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.405555555556, -122.72033333333), new google.maps.LatLng(48.518572899493, -122.46363888889));
    polygon.altLow  = 2000;
    polygon.altHigh = 4000;
    polygon.desc    = 'WHIDBEY ISLAND NAS CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'WHIDBEY ISLAND NAS CLASS C<br />2000-4000');
    

// COLORADO SPRINGS CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('af}kFjew~RkgZkw@sFgSyF_TqFeTgFiT}EoTuEsTkEyTaE}TwDaUmDeUcDiU{CmUqCoUgCsU}BuUsByUiB{U_B}UuA_VkAaVaAcVw@eVm@eVa@gVWgVMgVCgVB{VLgVVgV`@gVj@eVt@eV`AcVjAaVtA_V~A}UhB{UrByU|BuUfCsUpCoUxCmUbDiUlDeUvDaU`E}TjEyTrEsT|EoTfFiTnFeTxF_TbGySjGsStHqVhkBXdDeDlBu@|ElBlBt@jIzLlBdDlBu@jIkIjj@eD~zA?t@yoBt@ucB?{f@t@ubAu@{f@?gW?sGu@eD?u@t@??u@?u@?cStRsP|McLbNwKhNmKnNaKrNwJxNkJ|N_JbOuIfOiIjO}HnOqHrOeHvOyGzOmG~OaGbPuFdPiFhP}ElPoEnPcEpPwDrPkDvP}CxPqCzPcCpO{C?j`B?pqB?hsBu@vuAt@`R?rG?vvBu@zhB{@bOgJbDoG`CmGfCkGlCiGrCgGxCeG|CcGbDaGhD_GnD{FtDyFzDwF`EsFdEqFjEoFpEkFtEiFzEeF`FcFdF_FjF{EnFyEtFuExFqE~FmEbGkEfGgEjGcEpG_EtG{DxGwD|GsD`HoDdHkDhHgDlHcDpH_DtH{CxHwCzHqC~HmCbIiCdIeChIaCjI{BnIwBpIsBrImBvIiBxIeBzI_B|I{A~IuA`JqAbJkAdJgAfJcAhJ}@hJy@jJs@lJo@lJi@nJe@nJ_@pJYpJUpJOpJKrJE|JArJ@rJDrJJrJNpJTpJZpJ^pJd@nJh@nJn@lJr@lJx@jJ|@hJbAhJfAfJlAdJpAbJtA`JzA~I~A|IdBzIhBxIlBvIrBrIvBpIzBnI`CjIdChIhCdIlCbIrC~HvCzHzCvH~CtHbDpHfDlHjDhHnDdHrD`HvD|GzDxG~DtGbEpGfEjGjEfGlEbGpE~FtExFxEtFzEnF~EjFbFdFdF`FhFzEjFtEnFpEpFjErFdEvF`ExFzDzFtD~FnD`GhDbGbDdG|CfGvChGpCjGjClGdCnG~BpGxBrGrBrGlBtGfBvG`BvGzAxGtAzGnAzGfA|G`A|Gz@~Gt@~Gn@rE\\'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.82097279556, -104.81766273698), new google.maps.LatLng(38.978724525687, -104.50105555556));
    polygon.altLow  = 8500;
    polygon.altHigh = 10200;
    polygon.desc    = 'COLORADO SPRINGS CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'COLORADO SPRINGS CLASS C<br />8500-10200');
    

// TUCSON DAVIS-MONTHAN-AFB CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wwncEvjjdTaEyLwJgDmG{BkGaCiGgCgGkCeGqCcGwCaG}C_GaD}FgDyFkDwFqDuFwDqF{DoFaEkFeEiFiEeFoEcFsE_FwE}E}EyEaFuEeFqEiFoEoFkEsFgEwFcE{F_E_G{DcGwDgGsDkGoDoGkDqGgDuGcDyG_D}G{C_HwCcHsCeHmCiHiCkHeCoHaCqH{BsHwBwHsByHmB{HiB}HeB_I_BaI{AcIuAeIqAgImAiIgAkIcAkI}@mIy@oIs@oIo@qIi@qIe@sI_@sI[sIUuIOuIKuIEuIAuI@_JDuIJuINuITuIXsI^sId@sIh@qIn@qIr@oIx@oI|@mIbAkIfAkIlAiIpAgItAeIzAcI~AaIdB_IhB}HlB{HrByHvBwHzBsH`CqHdCoHhCkHlCiHrCeHvCcHzC_H~C}GbDyGfDuGjDqGnDoGrDkGvDgGzDcG~D_GbE{FfEwFjEsFnEoFpEkFtEeFxEaFzE}E~EyEbFsEdFoEhFiEjFeEnFaEpF{DtFwDvFqDxFkDzFgD~FaD`G}CbGwCdGqCfGmChGgCjGaClG{BnGuBpGqBrGkBtGeBtG_BvGyAxGsAxGmAzGgAzGcA|G}@|Gw@~Gq@~Gk@~Ge@`H_@`HY`HS`HM`HG`HA`H@`HF`HL`HR`HX`H^~Gd@~Gj@~Gp@|Gv@|G|@zGbAzGhAxGnAxGtAvGxAtG~AtGdBrGjBpGpBnGvBlGzBjG`ChGfCfGlCdGpCbGvC`G|C~F`DzFfDxFlDvFpDrFvDpFzDnF`EjFdEhFjEdFnEbFrE~ExEzE|ExE`FtEdFpEjFlEnFjErFfEvFbEzF~D~FzDbGvDfGrDjGnDlGjDpGfDtGbDxG~CzGzC~GvCbHpCdHlChHhCjHdClH`CpHzBrHvBtHrBxHlBzHhB|HTpDfC|@nGtBlGzBjG`ChGfCfGjCdGpCbGvC`G|C|F`DzFfDxFjDvFpDrFtDpFzDlF~DjFdEfFhEdFnE`FrE~EvEzE|EvE`FtEdFpEhFlElFhEpFfEvFbEzF~D~FzD`GvDdGrDhGnDlGjDpGfDtGbDvG~CzGzC~GvC`HpCdHlCfHhCjHdClH~BnHzBrHvBtHrBvHlBxHhBzHbB~H~A`IzAbItAbIpAdIjAfIfAhI`AjI|@jIx@lIr@lIn@nIh@nId@pI^pIXrITrINrIJrIDrI@rIArIErIKrIOrIUrIYrI_@pIc@pIi@nIm@nIs@lIw@lI}@jIaAjIgAhIkAfIqAdIuAbI{AbI_B`IcB~HiB|HmBxHqBvHwBtH{BrH_CnHeClHiCjHmCfHqCdHuC`H{C~G_DzGcDvGgDtGkDpGoDlGsDhGwDdG{DbG_E~FcEzFgEvFiEpFmElFqEhFuEdFwE`F{E|E_FvEaFrEeFnEgFhEkFdEmF~DqFzDsFtDwFpDyFjD{FfD}F`DaG|CcGvCeGpCgGlCiGfCkG`CmGzBoGvBqGpBqGjBsGdBuG~AwGxAwGtAyGnA{GhA{GbA}G|@}Gv@}Gp@_Hj@_Hd@_H^aHXaHRaHLaHFaH@aHAaHGaHMaHSaHY_H_@_He@_Hk@}Gq@}Gw@}G{@{GaA{GgAyGmAwGsAwGyAuG_BsGeBsGkBqGoBoGuBmG{BkGaCiGgCgGkCeGqCcGwCaG{C}FaD{FgDyFkDwFqDsFuDqF{DoF_EkFeEiFiEeFoEaFsE_FwE{E{EyEaFuEeFqEiFmEmFkEqFgEuFcE{F_E_G{DcGwDeGsDiGoDmGkDqGgDuGcDwG_D{G{C_HwCaHqCeHmCgHiCkHeCmHaCqH{BsHwBuHsBwHmB{H'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.032720819055, -111.03909359923), new google.maps.LatLng(32.24996110365, -110.78480328301));
    polygon.altLow  = 0;
    polygon.altHigh = 6600;
    polygon.desc    = 'TUCSON DAVIS-MONTHAN-AFB CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON DAVIS-MONTHAN-AFB CLASS C<br />0-6600');
    

// TUCSON DAVIS-MONTHAN-AFB CLASS C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('utzcErsxdTcG}IuHsFeNwJ_NaKyMkKsMuKmM_LgMiLaMqL{L{LsLcMmLmMeLuM_L_NwKgNqKoNiKwNaK_OyJgOqJoOiJwOaJ_PyIePqImPiIsPaI{PyHaQoHgQgHmQ}GsQuGyQkG_RcGeRyFiRqFoRgFsR}EyRuE}RkEaSaEeSwDiSmDmSeDqS{CsSqCwSgCyS}B}SsB_TiBaT_BcTuAeTkAgTaAiTw@iTm@kTa@kTWmTMmTCmTB_ULmTVmT`@kTj@kTt@iT`AiTjAgTtAeT~AcThBaTrB_T|B}SfCySpCwSzCsSbDqSlDmSvDiS`EeSjEaStE}R|EyRfFsRpFoRxFiRbGeRjG_RtGyQ|GsQfHmQnHgQvHaQ`I{PhIsPpImPxIeP`J_PhJwOpJoOxJgO`K_OhKwNnKoNvKgN~K_NdLuMlLmMrLeMxL{L`MqLfMiLlM_LrMuKxMkK~MaKdNwJjNmJnNcJtNyIxNoI~NeIbOyHhOoHlOeHpOyGtOoGxOcG|OyF`PmFdPaFfPwEjPkElP_EpPuDrPiDtP}CvPqCxPeCzPyB|PoB~PcB`QwA`QkAbQ_AbQs@dQg@dQ[dQOdQCdQDdQPdQ\\dQh@bQt@bQ`A`QlA`QxA~PdB|PpBzP|BxPfCvPrCtP~CrPjDnPvDlP`EhPlEfPxEbPbF~OnF|OzFxOdGtOpGpOzGjOdHfOpHbOzH~NdIxNpItNzInNdJhNnJbNxJ~MbKxMlKrMvKlM~KdMhL~LrLxLzLrLdMjLlMdLtM|K~MvKfNnKnNfKvN~J~NxJfOpJnOhJvO`J|OxIdPpIjPfIrPfEjLnIfGbNxJ|M`KvMjKpMtKjM~KdMhL~LpLxLzLpLbMjLlMdLtM|K|MtKdNnKnNfKvN~J~NvJfOpJlOhJtO`J|OxIbPnIjPfIpP~HxPvH~PlHdQdHjQ|GpQrGvQjG|Q`G`RxFfRnFjRdFpR|EtRrExRhE~R`EbSvDdSlDhSbDlSxCpSnCrSdCvSzBxSrBzShB|S~A~StA`TjAbT~@dTt@dTj@fT`@fTVhTLhTBhTChTMhTWhTa@fTk@fTu@dT_AdTiAbTsA`T}A~SgB|SqBzS{BxSeCvSoCrSyCpScDlSmDhSwDfS_EbSiE~RsExR}EtReFpRoFjRyFfRaG`RkG|QsGvQ}GpQeHjQmHdQwH~P_IxPgIpPoIjPwIbP_J|OgJtOoJlOwJfO_K~NgKvNoKnNuKfN}K|McLtMkLlMqLbMyLzL_MpLeMhLkM~KqMtKwMjK}MbKcNxJiNnJoNdJsNzIyNnI}NdIcOzHgOpHkOdHoOzGsOnGwOdG{OxF_PnFcPbFePxEiPlEmP`EoPvDqPjDuP~CwPrCyPfC{P|B}PpB}PdB_QxAaQlAaQ`AcQt@cQh@cQ\\eQPeQDeQCeQOcQ[cQg@cQs@aQ_AaQkA_QuA_QaB}PmB{PyByPeCwPqCuP}CsPiDoPsDmP_EiPkEgPuEcPaF_PmF}OwFyOcGuOmGqOyGmOcHgOoHcOyH_OcIyNoIuNyIoNcJiNmJeNwJ_NaKyMkKsMuKmM_LgMgLaMqLyL{LsLcMmLmMeLuM_L}MwKeNoKoNiKwNaK_OyJgOqJoOiJuOaJ}OyIePqIkPiIsP'), map: map, strokeColor: "#946792", strokeOpacity: 1, strokeWeight: 1, fillColor: "#946792", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.949247744551, -111.13717183929), new google.maps.LatLng(32.333465341331, -110.68662977121));
    polygon.altLow  = 4200;
    polygon.altHigh = 6600;
    polygon.desc    = 'TUCSON DAVIS-MONTHAN-AFB CLASS C';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON DAVIS-MONTHAN-AFB CLASS C<br />4200-6600');
    

// ALAMOGORDO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e`}gEtd|fSgEyIkoAhSkj@_qFt~@cOGkEOiIKiIEiIAiI@sIDiIJiINiIRiIXiI\\gIb@gIf@gIl@eIp@eIt@cIz@aI~@aIdA_IhA}HlA}HrA{HvAyHzAwH`BuHdBsHhBqHlBoHrBkHvBiHzBgH~BeHbCaHfC_HlC{GpCyGtCuGxCsG|CoG`DkGdDiGhDeGlDaGpD}FrD{FvDwFzDsF~DoFbEkFdEgFhEcFlE}EnEyErEuEtEqExEmE|EgE~EcE`F_EdFyDfFuDjFoDlFkDnFgDpFaDrF}CvFwCxFqCzFmC|FgC~FaC`G}BbGwBdGqBdGmBfGgBhGaBjG{AjGwAlGqAnGkAnGeA`J}@jA|BbAlBdAjBfAhBhAhBhAfBjAdBlAbBnA`BnA`BpA~ArA|ArAzAtAxAvAvAvAtAxArAzApAzAnA|AnA|AlA~AjA`BhA`BdAbBbAbB`AdB~@dB|@fBz@fBx@fBv@hBt@hBr@jBp@jBn@jBj@lBh@lBf@lBd@nBb@nB`@nB^nBZpBXpBVpBTpBRpBNpBLpBJrBHrBFrBBrB@rB>rB?rBArBErBGrBIpBKpBMpBQpBSpBUpBWpBYnB[nB_@nBa@nBc@lBe@lBg@lBi@jBm@jBo@jBq@hBs@hBu@fBw@fBy@fB{@dB}@dB_AbBaAbBeA`BgA`BiA~AkA|AmA|AoAzAqAzAqAxAsAvAuAz@YhDdBvFpCtFvCrF|CpF`DnFfDlFjDhFnDfFtDdFxD`F~D~EbEzEfExElEtEpErEtEnExEjE|EhE`FdEdF`EjF~DnFzDpFvDtFrDxFnD|FjD`GhDdGdDfG`DjG|CnGxCpGtCtGnCxGjCzGfC|GbC`H~BbHzBfHvBhHpBjHlBlHhBnHdBpH~ArHzAtHvAvHpAxHlAzHhA|HbA~H~@~Hz@`It@bIp@bIl@dIf@dIb@dI\\fIXfIRfINhIJhIDhI@hIAhIEhIKhIOhISfIYfI]fIc@dIg@dIm@dIq@bIu@bI{@`I_A~HcA~HiA|HmAzHqAxHwAvH{AtH_BrHeBpHiBnHmBlHqBjHwBhH{BfH_CbHcC`HgC|GkCzGoCxGsCtGyCpG}CnGaDjGeDhGgDdGkD`GoD|FsDxFwDtF{DrF_EnFaEjFeEfFiE`FkE|EoExEsEtEuEpEyElE{EfE_FbEaF~DeFxDgFtDiFpDmFjDoFfDqF`DsF|CuFvCwFpC{FlC}FfC_GbCaG|BaGvBcGrBeGlBgGfBiG`BiG|AkGvAmGpAmGjAoGfAoG`AqGz@qGt@sGn@sGh@sGb@uG^uGXuGRuGLuGFuG@uGAuGGuGMuGQuGWuG]sGc@sGi@sGo@qGu@qGy@oG_AoGeAmGkAmGqAkGwAiG{AiGaBgGgBeGmBcGqBcGwBaG}B_GaC}FgC{FmCyFqCuFwCsF{CqFaDoFeDmFkDiFoDgFuDeFyDaF_E_FcE{EgEyEkEuEqEsEuEoEyEmE}EiEaFeEeFcEkF_EoF{DqFwDuFsDyFoD}FmDaGiDeGeDiGaDkG}CoGyCsGuCuGqCyGmC{G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.772452972072, -106.20122332404), new google.maps.LatLng(32.942611111111, -106.01316666667));
    polygon.altLow  = 0;
    polygon.altHigh = 6600;
    polygon.desc    = 'ALAMOGORDO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'ALAMOGORDO CLASS D<br />SFC-6600');
    

// ASPEN CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kwynFnygkS`@eg@fB_g@lDsf@pFaf@rHge@tJid@tLcc@rNya@nPi`@fRu^|S{\\nU}Z|VyXhXsVnYgTrZyQp[iOj\\uL`]_Jp]iG|]qDd^wAf^>d^xA|]rDp]jG`]`Jj\\vLp[jOpZzQnYhTfXrV|VxXlU|ZzSz\\fRr^lPh`@rNva@tL`c@tJfd@rHde@pF|e@jDpf@fB|f@`@bg@a@bg@gB|f@kDpf@oF|e@sHde@uJfd@uLbc@qNxa@mPh`@eRt^{Sz\\mU|Z}VxXgXrVoYhTqZzQq[jOk\\vLa]bJq]jG}]rDe^xAg^>e^wA}]oDq]gGa]_Jk\\uLq[iOsZyQoYgTiXqV}VyXoU{Z}S{\\gRu^oPi`@sNya@uLcc@uJid@uHge@qF_f@mDsf@gB_g@a@eg@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.151329463938, -106.96105032022), new google.maps.LatLng(39.294780763359, -106.77672889854));
    polygon.altLow  = 0;
    polygon.altHigh = 10300;
    polygon.desc    = 'ASPEN CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'ASPEN CLASS D<br />SFC-10300');
    

// AURORA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g_aqFnd{}RnE~DjEbEhEfEfElEbEpE`EtE|DxEzD|EvDbFtDfFpDjFnDnFjDrFfDvFdDzF`D|F|C`GxCdGvChGrCjGnCnGjCrGfCtGbCxG~BzG|B~GxB`HtBbHpBfHlBhHhBjHdBlH~ApHzArHvAtHrAvHnAxHjAxHfAzHbA|H~@~Hx@`It@`Ip@bIl@bIh@dIb@dI^fIZfIVfIRhILhIHhIHjI?fIAhIEhIIhIMhIShIWfI[fI_@fIc@dIi@dIm@bIq@bIu@`Iy@`I_A~HcA|HgAzHkAxHoAxHsAvHwAtH{ArH_BpHcBlHiBjHmBhHqBfHuBbHyB`H{B~G_CzGcCxGgCtGkCrGoCnGsCjGwChGyCdG}C`GaD|FeDzFgDvFkDrFoDnFqDjFuDfFwDbF{D~E}DxEaEtEcEpEgElEiEhEkEbEoE~DqEzDsEtDuEpDyEjD{EfD}E`D_F|CaFvCcFrCeFlCgFfCiFbCkF|BmFvBmFrBoFlBqFfBsFbBsF|AuFvAuFpAwFjAwFfAyF`AyFz@{Ft@{Fn@{Fh@}Fb@}F^}FX}FR}FL_GF_G@_GA_GG}FK}FQ}FW}F]}Fc@{Fi@{Fo@{Fu@yFy@yF_AyFeAwFkAwFqAuFwAsF{AsFaBqFgBoFmBoFqBmFwBkF}BiFaCgFgCeFmCcFqCaFwC_F{C}EaD{EgDyEkDwEoDsEuDqEyDoE_EmEcEiEgEgEmEcEqEaEuE_EyE{D}EwDcFuDgFqDkFoDoFkDsFgDwFeD{FaD}F}CaG{CeGwCiGsCkGoCoGkCsGgCuGeCyGaC{G}B_HyBaHuB{GjIq^da@kdBjUg`AzPgs@`Nm[jE{HpIiPlh@_gA|EiXpuNgcJpBlB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.628277777778, -104.84694000166), new google.maps.LatLng(39.767027777778, -104.67361111111));
    polygon.altLow  = 0;
    polygon.altHigh = 7500;
    polygon.desc    = 'AURORA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'AURORA CLASS D<br />SFC-7500');
    

// BAKERSFIELD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s|wwEbgtuUf@mk@vBgk@hEyj@xGej@fJii@rLgh@|N_g@dQoe@hS{c@jUab@jW_`@dY{]zZq[l\\cYz]oVb_@ySf`@aQda@cN~a@eKpb@eH~b@cEhc@_Bjc@>hc@bB~b@dEpb@fH|a@fKda@dNd`@`Qb_@zSx]pVj\\bYxZp[bYz]hW~_@jU~a@hSxc@dQle@|N|f@rLdh@dJfi@vG`j@hEvj@vBdk@f@jk@g@jk@wBdk@gEvj@wG`j@eJfi@qLdh@{N|f@cQne@iSxc@kU~a@iW~_@cYz]yZp[k\\bYy]pVa_@zSe`@bQea@fN}a@hKqb@fH_c@dEgc@bBkc@>ic@_B_c@cEqb@eH_b@eKea@cNg`@_Qc_@yS{]oVm\\aY{Zq[eY{]kW_`@mU_b@kS{c@eQoe@}N}f@sLgh@gJii@yGej@iEyj@yBgk@g@mk@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.350155090436, -119.15857913366), new google.maps.LatLng(35.517065978203, -118.95475579246));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'BAKERSFIELD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'BAKERSFIELD CLASS D<br />SFC-3000');
    

// BROOMFIELD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w~asFruq`Sf@gn@vB_n@hEqm@vG{l@fJ}k@rLyj@|Nmi@dQ{g@hScf@jUed@hWab@bYy_@zZi]l\\uZx]_Xb_@cUd`@cRda@aO|a@}Kpb@wH~b@oEfc@eBjc@>fc@hB~b@pEpb@xH|a@~Kba@dOd`@dR`_@dUx]~Wj\\vZxZh]bYv_@hW`b@jUdd@hSbf@bQxg@zNji@pLvj@dJxk@vGvl@hElm@vBzm@f@bn@g@bn@wBzm@gElm@wGvl@eJzk@qLvj@{Nji@cQzg@iSbf@iUdd@gW`b@cYx_@yZj]k\\vZy]`Xa_@dUe`@fRca@dO}a@`Lqb@zH_c@rEgc@hBkc@@gc@eB_c@oEqb@wH}a@}Kea@aOg`@cRc_@cU{]}Wm\\uZ{Zi]eYw_@iWab@kUed@iScf@eQ{g@}Nmi@sLyj@gJ}k@yG{l@iEqm@yB_n@g@gn@?I'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.825496241239, -105.22544831254), new google.maps.LatLng(39.992280335862, -105.00899781432));
    polygon.altLow  = 0;
    polygon.altHigh = 8000;
    polygon.desc    = 'BROOMFIELD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'BROOMFIELD CLASS D<br />SFC-8000');
    

// BULLHEAD CITY CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ok_vEn{ezT`@ed@dBad@hDuc@jFcc@lHmb@lJoa@jLm`@fNg_@`P{]xQi\\lSsZ~TyXlV{VvW{T|XuR~YmP|ZcNt[uKj\\eIz\\uFf]cDn]qAp]>n]pAf]dDz\\vFj\\fIt[vKzZbN|YlPzXtRtWzTjVzV|TxXlSrZxQh\\`Px]fNd_@jLl`@lJla@lHjb@jF`c@fDrc@dB~c@`@bd@_@bd@cB~c@gDrc@kF`c@kHjb@mJna@kLl`@gNd_@aPx]wQh\\mSrZ}TzXkV|VuWzT{XvR}YnP{ZbNu[vKk\\fI{\\vFg]dDo]rAq]>o]oAg]cD{\\uFk\\eIu[uK}ZaN_ZmP}XuRwWyTmV{V_UyXmSsZyQi\\aPy]iNg_@kLm`@mJoa@mHkb@kFcc@iDuc@eB_d@a@ed@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.087393814851, -114.6447601633), new google.maps.LatLng(35.227605374196, -114.47413006585));
    polygon.altLow  = 0;
    polygon.altHigh = 2600;
    polygon.desc    = 'BULLHEAD CITY CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'BULLHEAD CITY CLASS D<br />SFC-2600');
    

// CAMARILLO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('izmoE|~quUafCf{BpUbaQ_ePhLcEuEwDiEsDmEqDqEmDuEkDyEgD{EcD_FaDcF}CgFyCiFwCmFsCoFoCsFkCuFiCyFeC{FaC_G}BaGyBcGuBgGqBiGmBkGiBmGeBoGaBsG}AuGyAwGuAwGqAyGmA{GiA}GeA_HaAaH}@aHy@cHu@cHo@eHk@gHg@gHc@gH_@iH[iHWiHQkHMkHIkHEkHAkH@sHDkHHkHLkHPkHTiHZiH^iHb@gHf@gHj@gHn@eHt@cHx@cH|@aH`AaHdA_HhA}GlA{GpAyGtAyGxAwG|AuG`BsGdBoGhBmGlBkGpBiGtBgGxBcG|BaG`C_GdC{FhCyFjCwFnCsFrCoFvCmFxCiF|CgF`DcFbD_FfD{EjDyElDuEpDqErDmEvDiExDeE|DaE~D}D`EyDdEuDfEqDhEmDlEiDnEcDpE_DrE{CtEwCvEsCxEmCzEiC|EeC~E_C`F{BbFuBdFqBfFmBhFgBhFcBjF}AlFyAlFsAnFoApFiApFeArF_ArFy@rFu@tFo@tFk@tFe@vF_@vF[vFUvFQvFKvFEvFAvF@vFFvFJvFPvFTvFZvF`@tFd@tFj@tFn@rFt@rFz@pF~@pFdAnFhAnFnAlFrAlFxAjF|AhFbBhFfBfFlBdFpBbFvB`FzB~E~B|EdCzEhCxElCvErCtEvCrEzCpE~CnEdDjEhDhElDfEpDdEtD`ExD~D|DzD`ExDdEvDhErDlEpDpElDtEhDxEfDzEbD~E`DbF|CfFxChFvClFrCnFhFdG'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.154777777778, -119.15963888889), new google.maps.LatLng(34.285497841035, -119.00824655279));
    polygon.altLow  = 0;
    polygon.altHigh = 2000;
    polygon.desc    = 'CAMARILLO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CAMARILLO CLASS D<br />SFC-2000');
    

// CAMP PENDLETON MCAS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('eqojEn}ekUzAgFquBy{B~A}F~A{FbByFfBwFhBuFlBqFpBoFtBmFvBkFzBiF~BeFbCcFdC_FhC}EjC{EnCwErCuEtCqExCmEzCkE~CgE`DcEdDaEfD}DhDyDlDuDnDsDpDoDtDkDvDgDxDcDzD_D~D{C`EwCbEsCdEoCfEkChEgCjEcClE_CnEyBpEuBrEqBrEmBtEiBvEcBxE_BxE{AzEuA|EqA|EmA~EiA~EcA`F_A`Fy@bFu@bFq@bFk@dFg@dFc@dF]dFYfFSfFOfFIfFEfFAfF@fFDfFJfFNfFRdFXdF\\dFb@dFf@bFj@bFp@bFt@`Fz@`F~@~EbA~EhA|ElA|EpAzEvAxEzAxE~AvEbBtEhBrElBpEpBpEtBnExBlE~BjEbChEfCfEjCdEnCbErC`EvC|DzCzD~CxDbDvDfDtDjDpDnDnDrDlDtDhDxDfD|DdD`E`DbE~CfEzCjExClEtCpErCtEnCvEjCzEhC|EdC~E`CbF~BdFzBfFvBjFtBlFpBnFlBpFhBtFdBvFbBxF~AzFzA|FvA~FrA`GnA`GjAbGfAdGdAfG`AfG|@hGx@jGt@jGp@lGl@lGh@nGd@nG`@pG\\pGXpGTrGPrGLrGHrGDrG@rG?rGErGIrGMrGQrGUrGYpG]pGa@pGe@nGi@nGm@lGq@lGu@jGy@jG}@hGaAfGcAfGgAdGkAbGoA`GsA`GwA~F{A|F_BzFcBxFeBvFiBtFmBpFqBnFuBlFwBjF{BfF_CdFaCbFeC~EiC|EkCzEoCvEsCtEuCpEyClE{CjE_DfEaDbEeD`EgD|DiDxDmDtDoDrDqDnDuDjDwDfDyDbD{D~C}DzCaEvCcErCeEnCgEjCiEfCkEbCmE~BoEzBqA|CwvBsdCuBZsCb@uC^uC\\uCXuCTuCRwCNwCLwCHwCFwCBwC>wC?wCCwCEwCIwCMwCOuCSuCUuCYuC[uC_@sCc@sCe@sCi@qCk@qCo@qCq@oCu@oCw@oC{@mC}@mCaAkCcAkCgAiCiAgCmAgCoAeCqAeCuAcCwAaC{AaC}A_C_B}BcB{BeB{BgByBkBwBmBuBoBsBqBsBuBqBwBoByBmB{BkB}BiB_CgBaCeBeCcBgCaBiC_BkC}AmC{AoCyAqCwAsCuAsCsAuCqAwCmAyCkA{CiA}CgA}CeA_DcAaD_AcD}@cD{@eDy@gDw@gDs@iDq@iDo@kDm@kDi@mDg@mDe@oDa@oD_@oD]qDYqDWqDUsDSsDOsDMsDKsDGsDEsDCsD?uD>yDBsDDsDFsDHsDLsDNsDPsDTsDVqDXqD'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.234625009094, -117.42722222222), new google.maps.LatLng(33.362861111111, -117.27549396311));
    polygon.altLow  = 0;
    polygon.altHigh = 2600;
    polygon.desc    = 'CAMP PENDLETON MCAS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CAMP PENDLETON MCAS CLASS D<br />SFC-2600');
    

// CARLSBAD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kboiEthyjUV}XfAyXvBqXfDeXvEuWdGaWpHiVzImUdKoTlLmSrMgRtN_QtOuOrPgNnQwLfRcK|RoInSyG~ScFjTkDrTqBvTw@xT>vTx@rTrBhTjD~SbFnSzG|RpIfRdKnQvLrPfNtOtOtN~PpMfRlLlSdKnTzIlUpHhVbG`WvErWfDbXvBnXfAvXV|XW|XgAxXwBnXgDbXuEtWcG`WqHhV{IlUeKnTmLlSqMfRuN~PuOtOsPfNoQvLgRdK}RpIoSzG}SbFiTjDsTrBwTx@yT>wTw@sTqBkTkD_TcFoSyG}RoIgRcKoQuLuPgNwOsOuN_QsMgRmLmSeKoT}ImUqHiVeGaWwEuWgDeXwBqXgAyXW}X?C'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.077963216477, -117.33977699892), new google.maps.LatLng(33.178147492629, -117.22077949932));
    polygon.altLow  = 0;
    polygon.altHigh = 2800;
    polygon.desc    = 'CARLSBAD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CARLSBAD CLASS D<br />SFC-2800');
    

// CASPER CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('apieGptxhS`@oi@fBii@jD{h@pFih@rHmg@tJmf@tLge@rNyc@nPgb@fRo`@|Sq^nUo\\|ViZfX}WnYoUpZ}Rp[gPj\\oM`]sJp]wG|]{Dd^{Af^>d^~A|]|Dp]zG~\\vJh\\pMn[hPpZ|RnYnUfX~W|VhZlUn\\zSp^dRn`@lPdb@pNvc@tLde@tJjf@rHjg@nFdh@jDxh@fBfi@`@li@a@li@gBfi@kDxh@oFdh@sHjg@uJjf@sLde@qNxc@mPfb@eRn`@{Sp^mUn\\{VhZgX~WmYpUqZ~Ro[hPi\\pM_]vJq]zG}]|De^~Ag^@e^{A}]yDq]wGa]sJk\\mMq[gPsZ{RoYoUiX}W}ViZoUo\\}Sq^gRo`@oPgb@sNyc@uLge@uJmf@sHmg@qFgh@mD{h@gBii@a@oi@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.836653210337, -106.56106790214), new google.maps.LatLng(42.980012557377, -106.36615583751));
    polygon.altLow  = 0;
    polygon.altHigh = 7800;
    polygon.desc    = 'CASPER CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CASPER CLASS D<br />SFC-7800');
    

// CHANDLER CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kvxjEltnhTf@kj@vBcj@hEwi@xGai@fJgh@rLeg@|N_f@dQqd@jS}b@jUea@jWe_@dYc]zZyZl\\mXz]}Ub_@iSf`@qPda@wM~a@{Jrb@}G`c@_Ehc@}Ajc@>hc@~A~b@`Epb@~G|a@|Jda@xMf`@rPb_@jSx]|Ul\\lXzZzZbY`]hWd_@jUba@hSzb@dQnd@|N|e@rLbg@fJdh@vG~h@hEri@vB`j@f@fj@g@fj@wB`j@gEri@wG~h@eJdh@qLbg@}N|e@cQnd@iS|b@kUba@iWd_@cYb]yZzZm\\nXy]~Uc_@jSg`@rPea@zM}a@~Jqb@`H_c@`Eic@`Bkc@>ic@}Aac@}Dsb@}G_b@{Jea@wMg`@qPc_@iS{]}Um\\mX{ZyZeYa]kWe_@mUca@kS}b@eQqd@}N}e@sLeg@gJgh@yGai@iEui@yBcj@g@kj@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.224292735725, -111.75464738897), new google.maps.LatLng(33.391261698636, -111.55590972325));
    polygon.altLow  = 0;
    polygon.altHigh = 3900;
    polygon.desc    = 'CHANDLER CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CHANDLER CLASS D<br />SFC-3900');
    

// CHANDLER MUNICIPAL AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('u|mjElbmiT^sa@~Aoa@~Cca@~Es`@~G_`@zIc_@vKe^pM_]fOw[|PiZnRwX|SaWhUgUpVkStWiQtXgOpYaMjZyJ~ZoHn[eFx[wC`\\kAb\\>~[lAx[xCl[dF~ZpHhZzJpY`MtXfOtWjQnVjSfUfU|S`WlRvXzPhZfOt[nM~\\vKb^zIb_@~G|_@~Er`@~Cba@~Ala@^ra@_@ra@_Bla@_Dba@_Fr`@}G|_@{Ib_@wKb^oM~\\gOt[{PhZmRvX}S`WgUfUoVjSuWjQuXfOqYbMiZzJ}ZpHm[dFy[xC_\\lAc\\>a\\kAy[wCo[cF_[oHkZyJsYaMuXgOuWiQqViSiUgU}SaWoRwX}PiZgOw[qM_]wKc^{Ic_@_H_`@aFs`@aDca@_Boa@_@sa@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.202378307496, -111.89057128058), new google.maps.LatLng(33.335954309044, -111.73165219347));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'CHANDLER MUNICIPAL AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CHANDLER MUNICIPAL AIRPORT CLASS D<br />SFC-3000');
    

// CHEYENNE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mhizFnl{}R|tJjj@gFxkBzHbEdHxD`H~D~GdE|GlExGrEvGxErG~EpGfFlGlFjGrFfGxFbG~F`GdG|FjGxFpGtFvGrFzGnF`HjFfHfFlHbFpH~EvHzE|HtE`IpEdIlEjIhEnIdEtI~DxIzD|IvD`JpDdJlDhJhDlJbDpJ~CtJxCxJtC|JnC~JjCbKdCfK~BhKzBlKtBnKpBpKjBtKdBvK`BxKzAzKtA|KnA~KjA`LdAbL~@dLx@dLr@fLn@hLh@hLb@jL\\jLVjLPlLLlLFlL@lLAlLGlLMlLQlLWjL]jLc@jLi@hLo@hLs@fLy@dL_AdLeAbLiA`LoA~KuA|K{AzK_BxKeBvKkBtKoBpKuBnK{BlK_ChKeCfKkCbKoC~JuC|JyCxJ_DtJcDpJiDlJmDhJqDdJwD`J{D|I_ExIeEtIiEnImEjIqEfIuE`I{E|H_FvHcFpHgFlHkFfHoF`HqF|GuFvGyFpG}FjGaGdGcG~FgGxFkGrFmGlFqGfFsG~EwGxEyGrE}GlE_HdEaH~DeHxDgHpDiHjDkHbDmH|CoHtCqHnCsHfCuH`CwHxByHpByHjB{HbB}H|A}HtA_IlA_IdAaI~@aIv@aIn@cIh@cI`@cIXcIPeIJeIBeIAeIIcIQcIWcI_@cIg@cIo@aIu@aI}@_IeA_IkA}HsA}H{A{HcByHiByHqBwHwBuH_CsHgCqHmCoHuCmH{CkHcDiHiDgHqDeHwDcH_E_HeE}GkE{GsEwGyEuG_FqGeFoGkFkGsFgGyFeG_GaGeG}FkGyFqGwFwGsF{GoFaHkFgHgFmHcFqH_FwH{E}HwEaIsEgImEkIiEoIeEuIaEyI{D}IwDaJsDeJmDkJiDoJcDsJ_DuJyCyJuC}JoCaKkCcKeCgKaCkK{BmKuBoKqBsKkBuKeBwKaByK{A}KuA_LoAaLkAcLeAcL_AeLy@gLu@iLo@iLi@kLc@kL]mLWmLSmLMmLGmLAoL@yLFmLLmLPmLVmL\\mLb@kLh@kLn@iLr@iLx@gL~@eLdAcLjAcLnAaLtA_LzA}K`B{KdBwKjBuKpBsKtBoKzBmK`CkKdCgKjCcKnCaKtC}JxCyJ~CuJbDsJhDoJlDkJrDgJvDaJzD}I`EyIdEuIhEoIlEkIrEgIvEaIzE}H~EwHbFqHfFmHjFgHnFaHrF{GvFwGxFqG|FkG`GeGdG_GfGyFjGsFnGkFpGeFtG_FvGyEzGsE|GkE~GeEbH_EdHwDfHqDhHiDjHcDlH{CnHuCpHmCrHgCtH_CvHyBxHqBbMgC`FmjB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.062394632896, -104.93640565299), new google.maps.LatLng(41.249270505476, -104.67544444444));
    polygon.altLow  = 0;
    polygon.altHigh = 8700;
    polygon.desc    = 'CHEYENNE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CHEYENNE CLASS D<br />SFC-8700');
    

// CHICO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_hnqFbmufVcAf@s@^s@^q@`@q@`@q@b@q@d@o@d@o@f@o@f@m@h@m@h@m@j@m@j@k@l@k@l@k@n@i@n@i@p@i@p@g@r@g@r@g@t@e@t@e@v@c@v@c@x@c@x@a@x@a@z@_@z@_@|@_@|@]|@]~@[~@[~@Y`AY`AW`AW`AWbAUbAUbASdASdAQdAQdAOdAOfAMfAMfAKfAKfAIfAIhAGhAGhAEhAEhAChAChAAhAAhA?jA?hA>hA>hA@hA@hABhABhADhADhAFhAFhAHhAHfAJfAJfALfALfANfANdAPdAPdARdARdATbATbAVbAV`AV`AX`AX`AZ~@Z~@\\~@\\|@^|@^|@^z@`@z@`@x@b@x@b@x@b@v@d@v@d@t@f@t@f@r@f@r@h@p@h@p@h@n@j@n@j@l@j@l@l@j@l@j@v@\\}AdJmA`HqA~GuA~GyA|G}AxGaBvGeBtGiBrGmBpGoBnGsBjGwBhG{BfG_CbGaC`GeC|FiCzFkCvFoCrFsCpFuClFyChF}CfF_DbFcD~EeDzEiDvEkDrEoDnEqDjEsDfEwDbEyD~D{DzD}DvDaErDcElDeEhDgEdDiE`DkEzCmEvCoErCqElCsEhCuEbCwE~ByExB{EtB}EnB}EjB_FdBaF`BaFzAcFvAeFpAeFjAgFfAgF`AiF|@iFv@iFp@kFl@kFf@kF`@kF\\mFVmFPmFJmFFmF@mFAmFEmFKmFQmFUkF[kFa@kFg@kFk@iFq@iFw@iF{@gFaAgFeAeFkAeFqAcFuAcF{AaF_B_FeB}EkB}EoB{EuByEyBwE_CuEcCsEgCsEmCqEqCoEwCmE{CiE_DgEeDeEiDcEmDaEqD_EwD{D{DyD_EwDcEsDgEqDkEoDoEkDsEiDwEeD{EcD_F_DcF}CeFyCiFwCmFsCqFoCsFmCwFiC{FeC}FcCaG_CcG{BgGwBiGsBkGqBoGmBqGiBsGeBuGaByG}A{GyA}GuA_HqAaHmAcHiAcHgAeHcAgH_AiHy@kHu@kHq@mHm@mHi@oHe@oHa@qH]qHYsHUsHQsHMsHIsHEsHAuH@}HDsHHsHLsHPsHTsHXsH\\qH`@qHd@oHh@oHl@mHp@mHt@kHx@kH|@iH`AgHdAeHhAeHlAcHpAaHtA_HxA}G|A{G`ByGdBuGhBsGlBqGpBoGrBkGvBiGzBgG~BcG`CaGdC}FhC{FlCwFnCsFrCqFvCmFxCiF|CgF~CcFbD_FdD{EhDwEjDsEnDoEpDkErDgEvDcExD_EzD{D~DwD`EqDbEmDdEiDfEeDhE_DjE{CnEwCpEqCrEmCrEiCtEcCvE_CxEyBzEuB|EoB|EkB~EeB`FaB`F{AbFuAdFqAdFkAfFgAfFaAhF{@hFw@hFq@jFk@jFg@jFa@jF[lFWlFQlFKlFElFAlF@lFFlFJlFPlFVjFZjF`@jFf@jFl@hFp@hFv@hF|@fF`AfFfAdFjAdFpAbFvA`FzA`F`B~EdB|EjB|EnBzEtBxExBvE~BtEbCrEhCpElCnEpClEvCjEzChE~CfEdDdEhDbElD`EpD~DvDzDzDxD~DvDbErDfEpDjEnDnEjDrEhDvEdDzEbD~E~CbF|CdFxChFtClFrCpFnCrFlCvFhCzFdC|F`C`G~BbGzBdGvBhGrBjGnBnGlBpGhBrGdBtG`BvG|AxGxAzGtA|GpA~GlA`HhAbHdAdH`AfH|@hHx@hHt@jHp@lHl@lHh@nHd@nH`@pHj@xK'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.727527777778, -121.94708917105), new google.maps.LatLng(39.864020562325, -121.76957745014));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'CHICO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CHICO CLASS D<br />SFC-2700');
    

// CHINA LAKE NWC CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_}gyE|limUb@cg@jB}f@tDqf@zF}e@bIee@fKgd@hMac@jOwa@hQg`@bSs^zTy\\pV{Z`XwXnYqVvZgT|[yQ|\\gOv]uLn^_J~^iGl_@oDr_@wAv_@>r_@xAl_@pD~^jGl^`Jv]vLz\\hOz[xQvZfTlYpV`XxXnVzZzTx\\bSr^fQf`@hOva@hM`c@fKdd@`Ibe@zFze@tDnf@jBzf@b@`g@c@`g@kBzf@sDnf@{Fze@aIbe@gKdd@iM`c@iOva@gQf`@cSr^{Tx\\oVzZaXxXmYrVwZfT{[zQ{\\hOw]vLm^`J__@jGm_@rDs_@xAw_@>s_@uAm_@oD__@gGo^_Jw]uL}\\gO}[yQwZgToYqVaXwXqV{Z}Ty\\eSs^iQg`@kOwa@kMac@gKgd@cIee@}F}e@uDqf@mB}f@c@cg@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.612670582635, -117.78256652317), new google.maps.LatLng(35.762884035927, -117.59854602999));
    polygon.altLow  = 0;
    polygon.altHigh = 4800;
    polygon.desc    = 'CHINA LAKE NWC CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CHINA LAKE NWC CLASS D<br />SFC-4800');
    

// CHINO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('omjnEjcwlU~Cb@KoFO{IU{IYyI_@yIe@yIi@wIo@wIs@uIy@uI}@sIaAqIgAqIkAoIqAmIuAkI{AiI_BgIcBeIiBcImBaIsB_IwB}H_CcIrFQfFOfFKfFEfFAfF@fFDfFJfFNfFTdFXdF\\dFb@dFf@bFl@bFp@bFt@`Fz@`F~@~EdA~EhA|ElA|ErAzEvAxEzAxE`BvEdBtEhBrElBpErBpEvBnEzBlE~BjEbChEfCfEjCdEpCbEtC`ExC|D|CzD`DxDdDvDhDtDlDpDnDnDrDlDvDhDzDfD~DdD`E`DdE~ChEzClExCnEtCrErCtEnCxEjCzEhC~EdC`F`CdF~BfFzBhFvBlFtBnFpBpFlBrFhBtFdBxFbBzF~A|FzA~FvA`GrA`GnAbGjAdGfAfGdAhG`AhG|@jGx@lGt@lGp@nGl@nGh@pGd@pG`@rG\\rGXrGTtGPtGLtGHtGDtG@tG?tGEtGItGMtGQtGUtGYrG]rGa@rGe@pGi@pGm@nGq@nGu@lGy@lG}@jGaAhGcAhGgAfGkAdGoAbGsA`GwA`G{A~F_B|FcBzFeBxFiBtFmBrFqBpFuBnFwBlF{BhF_CfFaCdFeC`FiC~EkCzEoCxEsCtEuCrEyCnE{ClE_DhEaDdEcDbEgD~DiDzDmDvDoDrDqDnDuDlDwDhDyDdD{D`D}D|CaExCcEtCeEpCgElCiEfCkEbCmE~BoEzBqEvBqErBsElBuEhBwEdByE`ByEzA{EvA}ErA}ElA_FhA_FdAaF~@aFz@cFv@cFp@cFl@eFf@eFb@eF\\eFXgFTgFNgFJgFDgF@gFAgFEgFIgFOgFSeFYeF]eFc@eFg@cFk@cFq@cFu@aF{@aF_A_FcA_FiA}EmA}EqA{EwAyE{AyE_BwEeBuEiBsEmBsEqBqEwBoE{BmE_CkEcCiEgCgEkCeEoCcEuCaEyC_E}C{DaDyDeDwDiDuDkDqDoDoDsDmDwDiD{DgD_EeDaE_B{AbD{AfGoCdGuCbG{C`G_D|FeDzFkDxFoDvFuDrF{DpF_ElFeEjFiEhFoEdFsE`FyE~E}EzEaFxEgFtEkFpEoFlEsFjEwFlEiGqAiA{AsAyAuAyAwAwAyAuA{AuA}AsA_BqAaBoAaBoAcBmAeBkAgBiAiBiAkBgAkBeAmBcAoBaAqBaAqB_AsB}@uB{@uBy@wBw@wBu@yBs@{Bs@{Bq@}Bo@}Bm@_Ck@_Ci@aCg@aCe@cCc@cCa@cC_@eC]eC[eCYgCWgCUgCSgCQiCOiCMiCKiCIiCGiCEiCCiCAkC?kC>mC@kCBiCDiCFiCHiCJiCLiCNiCPiCRgCTgCVgCXgCZeC\\eC^eC`@cCb@cCd@cCf@aCh@aCj@_Cl@_Cn@}Bp@}Br@{Br@{Bt@yBv@wBx@wBz@uB|@uB~@sB`AqB`AqBbAoBdAmBfAkBhAkBhAiBjAgBlAeBnAcBnAaBpAaBrA_BtA}AtA{AvAyAxAwAxAuAzAsAzAqA|AoA~AmA~AkA`BiA`BgAbBeAbBcAdBaAdB_AfB}@fB{@hBy@hBu@hBs@jBq@jBo@lBm@lBk@lBi@lBe@nBc@nBa@nB_@nB]pBYpBWpBUpBSpBQpBMrBKrBIrBGrBErBArB?rB>rB@rBD'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.90854845268, -117.71703944256), new google.maps.LatLng(34.022916666667, -117.55684941308));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'CHINO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CHINO CLASS D<br />SFC-2700');
    

// CLOVIS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k}mqEzbsuRn@us@pCms@pF}r@pIer@nLcq@jO{o@bRkn@xTsl@lWuj@zYoh@f\\cf@l^qc@l`@y`@hb@}]`d@{Zpe@uWzf@kT`h@}P~h@mMti@{Ifj@gFpj@qBtj@>pj@tBfj@jFti@~I|h@pM~g@`Qzf@lTne@vW~c@|Zhb@|]l`@z`@j^pc@d\\bf@zYnh@jWrj@xTpl@bRhn@hOxo@lL`q@pI`r@pFxr@pChs@n@ps@o@ps@oChs@qFxr@oI`r@mL`q@iOxo@aRhn@yTpl@kWrj@yYnh@e\\bf@k^pc@k`@z`@ib@~]_d@|Zoe@vW{f@lT_h@`Q}h@pMui@~Igj@jFqj@vBuj@@qj@qBgj@gFwi@{I_i@mMah@}P}f@kTqe@uWad@{Zkb@}]o`@y`@m^qc@g\\cf@}Yoh@mWuj@{Tsl@eRkn@kO{o@oLcq@qIcr@qF}r@qCms@o@us@?I'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.282613075663, -103.44296953144), new google.maps.LatLng(34.482940840113, -103.20147679127));
    polygon.altLow  = 0;
    polygon.altHigh = 6800;
    polygon.desc    = 'CLOVIS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CLOVIS CLASS D<br />SFC-6800');
    

// COLORADO SPRINGS USAF ACADEMY CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('o`dmFphv~RV}ZfAyZvBoZfDcZtEqYbG}XpHcXzIeWdKeVlL_UpMwStNkRtO}PrPkOnQwMfRaL|RiJnSoH|SuFhTwDpT{BvT{@xT>vT|@pTzBhTxD|StFnSpH|RjJfRbLnQxMrPlOtO|PtNjRpMvSjL~TdKbVzIdWpH`XbGzXtEpYfD`ZvBnZfAvZVzZWzZgAvZwBnZgD`ZuEpYcGzXoH`X{IdWeKbVkL~TqMvSuNjRuO|PsPlOoQxMgRbL{RjJoSpH}StFiTxDqTzBwT|@yT>wT{@qTyBiTwD}SsFoSoH}RiJgRaLoQwMsPkOuO}PuNkRqMwSmL_UeKcV{IeWqHcXeG{XwEqYgDcZwBoZgAyZW}Z?C'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.919678676124, -104.87712387751), new google.maps.LatLng(39.019765339302, -104.74898824465));
    polygon.altLow  = 0;
    polygon.altHigh = 8800;
    polygon.desc    = 'COLORADO SPRINGS USAF ACADEMY CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'COLORADO SPRINGS USAF ACADEMY CLASS D<br />SFC-8800');
    

// CONCORD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k{agFpfdhVq@eCwoCuXfs@cuM|`Dx[dDmC|BgB|BeB~BaB`C_B`C}AbCyAdCwAdCsAfCqAfCmAhCkAhCgAjCeAjCaAlC}@lC{@nCw@nCu@nCq@pCm@pCk@pCg@rCe@rCa@rC]rC[tCWtCStCQtCMtCItCGtCCtC?tC>tCBtCFtCHtCLtCPtCRtCVrCZrC\\rC`@rCd@pCf@pCj@pCl@nCp@nCt@nCv@lCz@lC|@jC`AjCdAhCfAhCjAfClAfCpAdCrAdCvAbCxA`C|A`C~A~B`B|BdB|BfBzBjBxBlBvBnBvBrBtBtBrBvBpBzBnB|BlB~BjB`ChBdChBfCfBhCdBjCbBlC`BnC~ApC|ArCzAtCxAvCtAxCrAzCpA|CnA~ClA`DjAbDhAdDfAdDbAfD`AhD~@jD|@jDz@lDv@nDt@nDr@pDp@rDn@rDj@tDh@tDf@vDb@vD`@vD^xD\\xDXxDVzDTzDPzDNzDL|DH|DF|DD|D@|D>|D?|DA|DE|DG|DI|DM|DOzDQzDUzDWzDYxD]xD_@xDa@vDc@vDg@vDi@tDk@tDm@rDq@rDs@pDu@nDw@nD{@lD}@jD_AjDaAhDcAfDgAfDiAdDkAbDmA`DoA~CqA|CsAzCuAxCwAvC{AtC}ArC_BpCaBnCcBlCeBjCgBhCiBfCiBdCkB`CmB~BoB|BqBzBsBvBuBtBwBrBwBnByBlB{BjB}BfB}BdB_CbBaC~AaC|AcCxAeCvAeCrAgCpAgClAiCjAiCfAkCdAkC`AmC|@mCz@oCv@oCt@oCp@qCn@qCj@qCf@sCd@sC`@sC\\sCZuCVuCRuCPuCLuCHuCFuCBuC>uC?uCCuCGuCIuCMuCQuCSuCWsC[sC]sCa@sCc@qCg@qCk@qCm@oCq@oCu@oCw@mC{@mC}@kCaAkCcAiCgAiCkAgCmAgCqAeCsAeCwAcCyAaC}AaC_B_CaB}BeB}BgB{BkByBmBwBoBwBsBuBuBsBwBqB{BoB}BmB_CkBaCkBcCiBgCgBiCeBkCcBmCaBoC_BqC}AsC{AuCyAwCuAyCsA{C'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.946355813442, -122.11173989228), new google.maps.LatLng(38.049083333333, -122.00214897875));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'CONCORD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CONCORD CLASS D<br />SFC-2500');
    

// EAGLE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g_lqF`kqkS`@kh@hBeh@pDyg@vFeg@zHkf@~Jke@~Led@~N{b@zPia@tRs_@jTw]~Uw[nWqYzXiWbZ{Tf[kRf\\yO`]cMv]kJh^qGt^uDz^yA~^>z^zAt^vDf^rGv]lJ`]dMd\\xOf[lRbZ|TzXhWnWpY~Uv[jTv]tRp_@zPfa@|Nxb@~Lbd@|Jhe@zHhf@tFbg@nDtg@hBbh@`@hh@a@hh@iBbh@oDtg@uFbg@yHhf@}Jhe@_Mdd@}Nxb@{Pha@sRr_@kTv]_Vv[oWrY{XhWcZ|Te[lRe\\zOa]dMw]lJg^rGu^xD{^|A__@>}^yAu^uDi^oGw]iJa]aMg\\wOg[kRcZ{T{XgWoWqY_Vw[mTw]uRs_@{Pia@_Oyb@_Med@_Kke@{Hkf@wFeg@qDyg@iBeh@c@kh@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.569111155705, -107.01264979642), new google.maps.LatLng(39.715887916265, -106.82290724077));
    polygon.altLow  = 0;
    polygon.altHigh = 9100;
    polygon.desc    = 'EAGLE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'EAGLE CLASS D<br />SFC-9100');
    

// EAU CLAIRE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oewtEpconUv@{|@hDq|@xG_|@hKa{@vN{y@`Rkx@hUsv@nXst@n[ir@j^wo@ba@}l@tc@}i@`f@wf@fh@ic@fj@w_@~k@_\\pm@aXzn@aT~o@}Oxp@wKlq@oGxq@eC|q@@xq@jClq@rGxp@zK|o@`Pzn@dTnm@dX|k@`\\dj@x_@dh@jc@~e@vf@rc@|i@`a@|l@h^to@l[fr@lXnt@hUnv@`Rfx@tNvy@hK|z@xGx{@hDl|@v@t|@w@t|@gDl|@yGx{@gK|z@uNvy@_Rfx@gUnv@mXnt@m[fr@i^to@_a@|l@qc@|i@_f@vf@eh@jc@cj@x_@}k@`\\om@dXyn@dT}o@bPyp@|Kmq@tGyq@jC}q@@yq@eCmq@oGyp@wK_p@}O{n@aTqm@aX_l@}[gj@u_@gh@ic@af@uf@uc@}i@ca@}l@k^wo@o[gr@oXqt@kUsv@cRkx@wN{y@iKa{@{G_|@iDq|@w@{|@?K'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.788151038858, -118.02537001293), new google.maps.LatLng(35.021846713493, -117.7418543996));
    polygon.altLow  = 0;
    polygon.altHigh = 4800;
    polygon.desc    = 'EAU CLAIRE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'EAU CLAIRE CLASS D<br />SFC-4800');
    

// EL CENTRO NAF CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('aaugEjju`UdfS?lDfGjCxEhCzEdC~E`C`F~BdFzBfFvBhFtBjFpBnFlBpFhBrFdBtFbBvF~AxFzAzFvA|FrA~FnA`GjAbGfAbGdAdG`AfG|@fGx@hGt@jGp@jGl@lGh@lGd@nG`@nG\\nGXpGTpGPpGLpGHpGDpG@pG?pGEpGIpGMpGQpGUpGYpG]nGa@nGe@nGi@lGm@lGq@jGu@jGy@hG}@fGaAfGcAdGgAbGkAbGoA`GsA~FwA|F{AzF_BxFcBvFeBtFiBrFmBpFqBnFuBjFwBhF{BfF_CdFaC`FeC~EiCzEkCxEoCvEsCrEuCnEyClE{ChE_DfEaDbEeD~DgD|DiDxDmDtDoDpDqDlDuDhDwDfDyDbD{D~C}DzCaEvCcErCeEnCgEjCiEfCkE`CmE|BoExBqEtBqEpBsElBuEfBwEbByE~AyEzA{EtA}EpA}ElA_FhA_FbAaF~@aFz@cFt@cFp@cFj@eFf@eFb@eF\\eFXgFRgFNgFJgFDgF@gFAgFEgFIgFOgFSgFYeF]eFa@eFg@cFk@cFq@cFu@aFy@aF_A_FcA_FgA}EmA}EqA{EuAyEyAyE_BwEcBuEgBsEkBsEqBqEuBoEyBmE}BkEaCiEeCgEiCeEoCcEsCaEwC_E{C{D_DyDcDwDeDuDiDqDmDoDqDmDuDiDyDgD{DeD_EaDcE_DgE{CiEyCmEuCoEsCsEoCwEmCyEiC{EeC_FcCaF_CeF{BgFwBiFuBkFqBoFmBqFiBsFgBuFcBwF_ByF{A{FwA}FsA_GoAaGkAcGiAcGeAeGaAgG}@iGy@iGu@kGq@kGm@mGi@mGe@oGa@oG]oGYqGUqGQqGMqGIqGEsGAsG@yGDsGHqGLqGPqGTqGXqG\\oG`@oGd@oGh@mGl@mGp@kGt@kGx@iG|@iG`AgGdAeGhAcGjAcGnAaGrA_GvA}FzA{F~AyFbBwFfBuFhBsFlBqFpBoFtBkFvBiFzBgF~BeFbCaFdC_FhC{EjCyE~C_G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.762391124378, -115.75075702687), new google.maps.LatLng(32.895941490187, -115.62166666667));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'EL CENTRO NAF CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'EL CENTRO NAF CLASS D<br />SFC-2500');
    

// EL PASO CLASS D2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('il`bEdcygSptDskFpfFlsFrD{BdF}CfFyChFsClFoCnFkCpFeCrFaCtF{BvFwBvFqBxFkBzFgB|FaB~F}A~FwA`GqA`GmAbGgAdGaAdG}@dGw@fGq@fGm@hGg@hGa@hG[hGWhGQjGKjGGjGAjG@jGFjGJnG`@qJbF_G`D{FfDyFjDwFpDuFtDqFzDoF~DkFdEiFhEeFlEcFrE_FvE{EzEyE`FuEdFqEhFoElFkEpFgEtFcExF_E|F{D`GwDdGsDhGoDlGkDpGgDtGcDvG_DzG{C~GwC`HsCdHmCfHiCjHeClHaCnH{BrHwBtHsBvHmBxHiB|HeB~H_B`I{AbIuAdIqAdImAfIgAhIcAjI}@jIy@lIs@nIo@nIi@pIe@pI_@pIYrIUrIOrIKrIE|IArI@rIDrIJrINrITrIZrI^pId@pIh@pIn@nIr@nIx@lI|@jIbAjIfAhIlAfIpAdItAbIzAbI~A`IdB~HhBzHlBxHrBvHvBtHzBrH`CnHdClHhCjHlCfHrCdHvC`HzC~G~CzGbDvGfDtGjDpGnDlGrDhGvDdGzD`G~D|FbExFfEtFjEpFnElFpEhFrE`FcxE?oHgHkEkEgEoEeEsEaEwE}D{E{D_FwDcFsDeFqDiFmDmFiDqFeDuFaDwF}C{F{C}FwCaGsCeGoCgGkCkGgCmGcCoG_CsG{BuGuBwGqByGmB}GiB_HeBaHaBcH}AeHwAgHsAiHoAkHkAkHeAmHaAoH}@oHy@qHs@sHo@sHk@uHe@uHa@uH]wHWwHSwHOyHIyHEyHAyH@aIDyHHyHNyHRwHVwH\\wH`@uHd@uHj@uHn@sHr@sHx@qH|@oH`AoHdAmHjAkHnAkHrAiHvAgH|AeH`BcHdBaHhB_HxCyKagFwsF'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.844027777778, -106.45055555556), new google.maps.LatLng(31.956055555556, -106.26425));
    polygon.altLow  = 0;
    polygon.altHigh = 5200;
    polygon.desc    = 'EL PASO CLASS D2';
    attachPolygonInfoBox(polygon, infoBox, 'EL PASO CLASS D2<br />SFC-5200');
    

// ENGLEWOOD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{{}pF~k}~R`@kh@hBch@pDwg@vFcg@zHkf@~Jke@~Led@~Nyb@zPga@tRq_@jTu]~Uu[nWqYzXgWbZ{Tf[kRf\\wO`]aMv]iJh^qGt^uDz^yA~^>z^zAt^vDf^rGv]jJ`]bMd\\xOf[lRbZzTzXhWnWpY~Ut[jTt]tRp_@zPfa@|Nvb@~Lbd@|Jhe@zHff@tF`g@nDtg@hB`h@`@fh@a@fh@iB`h@oDtg@uF`g@{Hff@}Jhe@_Mbd@}Nvb@{Pfa@sRp_@kTt]_Vt[oWpY{XhWcZ|Te[lRe\\xOa]dMw]lJg^rGu^vD{^|A__@>}^yAu^uDi^oGw]iJa]aMg\\wOg[kRcZ{T{XgWoWqY_Vu[mTu]uRq_@{Pga@_Oyb@_Med@_Kke@{Hif@wFcg@qDwg@iBch@c@kh@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.496888018702, -104.94421794587), new google.maps.LatLng(39.643666609255, -104.75467242324));
    polygon.altLow  = 0;
    polygon.altHigh = 8000;
    polygon.desc    = 'ENGLEWOOD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'ENGLEWOOD CLASS D<br />SFC-8000');
    

// EUGENE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qnwlGhcaoVb@mm@lBem@xDwl@`Gal@hIek@nKaj@rMwh@tOeg@tQoe@pSqc@jUoa@`We_@rXy\\`ZgZj[qWn\\wTp]yQl^yNb_@uKt_@qH``@kEh`@cBl`@>h`@fB``@nEt_@tHb_@xKj^zNn]zQn\\xTh[pW~YfZpXx\\~Vd_@hUla@pSpc@rQle@tObg@rMrh@nK|i@hI`k@`G|k@vDrl@lB`m@b@hm@c@hm@mB`m@wDrl@aG|k@iI`k@oK~i@sMth@uObg@sQle@oSpc@iUna@_Wf_@qXx\\_ZhZi[rWo\\xTo]zQk^|Nc_@xKu_@tHa`@nEi`@hBm`@@i`@cBa`@kEu_@qHc_@uKm^yNq]yQo\\uTk[oWaZgZsXy\\aWe_@kUma@qSqc@uQme@wOeg@uMwh@oKaj@iIek@aGal@yDwl@oBem@c@mm@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.045001903109, -123.32497772941), new google.maps.LatLng(44.198330399342, -123.11224614235));
    polygon.altLow  = 0;
    polygon.altHigh = 2900;
    polygon.desc    = 'EUGENE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'EUGENE CLASS D<br />SFC-2900');
    

// EVERETT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gqzcHrajiVb@so@jBko@rD}n@zFen@`Igm@fKcl@hMuj@hOci@fQig@bSie@zTcc@nVw`@`Xe^lYo[tZuXz[wUz\\uRt]qOl^iL|^_Ij_@uEp_@iBt_@@p_@lBh_@xE|^bIj^lLt]rOx\\xRx[xUtZvXjYp[~Wf^lVv`@xT`c@`Sfe@fQfg@hO`i@hMrj@dK~k@`Ibm@zF`n@rDxn@jBfo@b@no@c@no@kBfo@sDxn@{F`n@aIdm@eK~k@gMrj@iO`i@gQfg@aSfe@yTbc@mVv`@_Xf^kYp[uZvXy[zUy\\xRu]tOk^lL}^dIi_@xEq_@lBu_@@q_@gBk_@sE}^_Im^iLu]oO{\\uR{[wUwZuXmYo[aXe^oVw`@{Tcc@cSie@iQig@kOci@iMuj@gKcl@cIgm@{Fen@uD}n@kBko@c@so@?I'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.832551725143, -122.3927976318), new google.maps.LatLng(47.982447293847, -122.16998186595));
    polygon.altLow  = 0;
    polygon.altHigh = 3100;
    polygon.desc    = 'EVERETT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'EVERETT CLASS D<br />SFC-3100');
    

// FAIRFIELD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ue~hFz}dgV`@uf@fBof@lDaf@pFoe@rHwd@tJyc@tLub@rNka@nP{_@fRg^|So\\nUqZ|VoXhXiVnY_TrZqQp[aOj\\oL`]{Ip]eG|]mDd^uAf^>d^vA|]nDp]fG`]|Ij\\pLp[bOpZrQnY~SfXhV|VnXlUpZzSl\\fRf^lPz_@rNha@tLrb@tJvc@rHtd@pFle@jD~e@fBjf@`@rf@a@rf@gBjf@kD~e@oFle@sHtd@uJvc@uLrb@sNha@mPz_@eRf^{Sl\\mUpZ}VnXgXhVoY~SqZrQq[bOk\\pLa]|Iq]fG}]pDe^xAg^>e^uA}]mDq]eGa]{Ik\\oLq[aOsZqQoY_TiXgV}VmXoUoZ}Sm\\gRg^oP{_@sNka@uLub@uJyc@uHwd@qFoe@mDaf@gBof@a@uf@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.191039873543, -122.01843518798), new google.maps.LatLng(38.334514804574, -121.83656623528));
    polygon.altLow  = 0;
    polygon.altHigh = 2600;
    polygon.desc    = 'FAIRFIELD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FAIRFIELD CLASS D<br />SFC-2600');
    

// FALLON NAS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_a`pF|a|sUf@c@l@i@l@i@l@k@l@k@j@m@j@m@j@o@h@o@h@q@h@q@f@s@f@s@d@u@d@u@d@w@b@w@b@w@b@y@`@y@`@{@^{@^{@^}@\\}@\\}@Z_AZ_AX_AXaAVaAVaAVcATcATcARcAReAPeAPeANeANeALgALgAJgAJgAHgAHgAFgAFiADiADiABiABiA@iA@iA>iA>iA?iA?iAAiAAiACiACiAEiAEiAGiAGgAIgAIgAKgAKgAMgAMgAOeAOeAQeAQeASeAScAUcAUcAWcAWaAWaAYaAY_A[_A[_A]}@]}@_@}@_@{@_@{@a@{@a@y@c@y@c@w@c@w@e@w@e@u@g@u@g@s@g@s@i@q@i@q@i@o@k@o@k@m@k@m@m@k@m@k@m@i@m@i@o@g@o@g@o@e@q@e@q@c@q@a@q@a@s@_@s@_@s@]s@[s@[u@Yu@Yu@Wu@Uu@Uu@Sw@Sw@Qw@Ow@Ow@Mw@Kw@Kw@Iw@Gw@Gw@Ew@Cy@Cy@Ay@?y@?y@>y@>y@@y@Bw@Bw@Dw@Fw@Fw@Hw@Jw@Jw@Lw@Nw@Nw@Pw@RoA?cBoPcAoK}@qKy@qKs@sKm@uKg@uKc@wK]wKWwKQyKMyKGyKAyK@cLFyKJyKPyKVwK\\wKb@wKf@uKl@uKr@sKx@qK|@qKbAoKhAmKlAkKrAiKxAgK|AeKbBcKhBaKlB_KrB}JvByJ|BwJbCsJfCqJlCmJpCkJvCgJzCcJ~C_JdD}IhDyIlDuIrDqIvDmIzDiI~DcIdE_IhE{HlEwHpEqHtEmHxEgH|EcH`F}GdFyGhFsGlFmGpFiGrFcGvF}FzFwF~FqF`GmFdGgFfGaFjG{ElGuEpGoErGgEtGaExG{DzGuD|GoD~GgDbHaDdH{CfHuChHmCjHgCjH_ClHyBnHsBpHkBrHeBrH}AtHwAtHoAvHiAvHaAxH{@xHs@zHk@zHe@zH]zHW|HO|HI|HA|HB|HHzHPzHVzH^zHd@zHl@xHt@xHz@vHbAvHhAtHpAtHvArH~ArHdBpHlBnHrBlHxBjH`ChHfChHnCfHtCbHzC`H`D~GhD|GnDzGtDxGzDtGbErGhEpGnElGtEjGzEfG`FdGfF`GlF|FrFzFvFvF|FrFbGnFhGlFlGhFrGdFxG`F|G|EbHxEfHtElHpEpHlEtHhEzHbE~H~DbIzDfIvDjIrDnIlDrIhDvIdDzI~C~IzCbJtCfJpChJjClJfCpJ`CrJ|BtJvBxJrBzJlB|JhB`KbBbK|AdKxAfKrAhKlAjKhAlKbAnK|@nKv@pKr@rKl@rKf@tKb@tK\\tKVvKPvKJvKFvK@vKAvKGvKKvKQvKWvK]tKa@tKg@tKm@rKs@rKw@pK}@nKcAnKiAlKmAjKsAhKyAfK}AdKcBbKiB`KmB|JsBzJwBxJ}BtJaCrJgCpJkClJqChJuCfJ{CbJ_D~IeDzIiDvImDtIsDpIwDjI{DfI_EbIcE~HiEzHmEvHqEpHuElHyEfH}EbHaF|GeFxGiFrGmFnGoFhGsFbGwF|F{FxF}FrFaGlFeGfFgG`FkGzEmGtEqGnEsGhEuGbEyGzD{GtD}GnD_HhDaHbDcHzCeHtCgHnCiHfCkH`CmHxBoHrBqHlBsHdBsH~AuHvAuHpAwHhAwHbAyHz@yHt@{Hl@{Hd@{H^{HV{HP}HH}HB}HA}HI}HO{HW{H]{He@{Hk@yHs@yHy@yHaAwHiAwHoAuHwAsH}AsHeBqHkBoHqBmHyBkH_CkHgCiHmCgHsCeH{CcHaD_HgD}GoD{GuDyG{DuGaEsGgEqGmEmGuEkG{EgGaFeGgFaGkF_GqF{FwFwF}FsFcGqFiGmFmGiFsGeFyGaF}G}EcHyEgHuEmHqEqHmEwHiE{HeE_IaEcI{DgIaBqF'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.325475476987, -118.81867654511), new google.maps.LatLng(39.507856415332, -118.58354559993));
    polygon.altLow  = 0;
    polygon.altHigh = 6400;
    polygon.desc    = 'FALLON NAS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FALLON NAS CLASS D<br />SFC-6400');
    

// FARMINGTON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}{j_Fb|{rShoE_H`BzhBhItAhGfAfGlAfGrAdGxAdG~AbGdB`GjB~FnB~FtB|FzBzF`CxFdCvFjCtFpCrFtCpFzCnF`DjFdDhFjDfFnDdFtD`FxD~E~D|EbExEhEvElErEpEpEvElEzEjE~EfEbFdEfF`ElF|DpFzDtFvDxFrD|FnD`GjDdGhDfGdDjG`DnG|CrGxCtGtCxGpC|GlC~GhCbHdCdH`ChH|BjHvBlHrBpHnBrHjBtHfBvHbBxH|AzHxA|HtA~HpA`IjAbIfAdIbAfI|@hIx@hIt@jIn@jIj@lIf@lI`@nI\\nIXnIRpINpIHpIDpI@pIApIEpIIpIOpISpIYnI]nIa@nIg@lIk@lIo@jIu@jIy@hI}@hIcAfIgAdIkAbIqA`IuA~HyA~H}A|HcBxHgBvHkBtHoBrHsBpHwBlH}BjHaChHeCdHiCbHmC~GqC|GuCxGyCtG}CrGaDnGeDjGiDfGkDdGoD`GsD|FwDxF{DtF}DpFaElFeEfFgEbFkE~EmEzEqEvEsEpEwElEyEhE}EbE_F~DaFxDeFtDgFnDiFjDkFdDoF`DqFzCsFtCuFpCwFjCyFdC{F`C}FzB_GtB_GnBaGjBcGdBeG~AeGxAgGrAgGlAiGfAiGbAkG|@kGv@mGp@mGj@mGd@oG^oGXoGRoGLoGFoG@oGAoGGoGMoGSoGYoG_@mGe@mGi@mGo@kGu@kG{@kGaAiGgAgGmAgGsAeGyAeG_BcGcBaGiB_GoB_GuB}F{B{F_CyFeCwFkCuFoCsFuCqF{CoF_DmFeDiFkDgFoDeFuDcFyD_F_E}EcE{EgEwEmEuEqEqEuEoE{EkE_FgEcFeEgFaEmF}DqF{DuFwDyFsD}FoDaGmDeGiDgGeDkGaDoG}CsGyCwGuCyGqC}GmC_HiCcHeCeHaCiH}BkHyBoHsBqHoBsHkBuHgByHcB{H}A}HyA_IuAaIqAcIkAeIgAeIcAgI_AiIy@kIu@kIq@mIk@mIg@oIa@oI]oIYqISqIOqIKqIEsIAsI@{IDsIHqINqIRqIXqI\\oI`@oIf@oIj@mIn@mIt@kIx@kI|@iIbAgIfAeIjAeIpAcItAaIxA_I|A}HbB{HfByHjBuHnBsHrBqHxBoH|BkH`CiHdCeHhCcHlC_HpC}GtCyGxCwG|CsG`DoGdDkGhDiGlDeGnDaGrD}FvDyFzDuF|DqF`EmFdEgFfEcFjE_FnE{EpEwEtEqEvEmExEiE|EcE~E_EbFyDdFuDfFoDhFkDlFeDnF_DpF{CrFuCtFqCvFkCxFeCzF_C|F{B~FuB~FoB`GiBbGcBdG_BdGyAtHiB}AmfB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.663597965914, -108.32706980058), new google.maps.LatLng(36.82028988283, -108.11713888889));
    polygon.altLow  = 0;
    polygon.altHigh = 8000;
    polygon.desc    = 'FARMINGTON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FARMINGTON CLASS D<br />SFC-8000');
    

// FORT CARSON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sfpkFnqq~R`CeDlEcGhEgGdEkG`EoG~DsGzDyGvD}GrDaHnDeHjDiHfDkHbDoH~CsHxCwHtC{HpC}HlCaIhCcIbCgI~BiIzBmIvBoIpBsIlBuIhBwIbByI~A{IxA}ItA_JpAaJjAcJfAeJ`AgJ|@gJv@iJr@kJl@kJh@mJb@mJ^oJXoJToJNoJJqJDqJ@qJAqJEqJKqJOoJUoJYoJ_@oJc@mJi@mJa@_K|FsFfE{DhEwDlEsDnEoDpEiDrEeDtE_DvE{CzEwC|EqC~EmC`FgC`FcCbF}BdFyBfFsBhFmBjFiBjFcBlF}AnFyAnFsApFmApFiArFcArF}@tFw@tFs@tFm@vFg@vFa@vF]vFWvFQxFKxFGxFAxF@xFFxFLvFPvFVvF\\vFb@vFf@tFl@tFr@tFx@rF|@rFbApFhApFnAnFrAlFxAlF~AjFbBhFhBhFnBnDfAl{B}iBj_GtcNodBnvAJfEVzHP|HL|HH|HD|H@|HA|HE|HI|HM|HQ|HUzH[zH_@zHc@xHg@xHk@vHo@vHu@tHy@tH}@rHaApHeApHiAnHmAlHqAjHuAhHyAfH}AdHaBbHeB`HiB~GmBzGqBxGuBvGyBtG}BpGaCnGeCjGiChGkCdGoCbGsC~FwCzFyCxF}CtFaDpFcDlFgDhFkDdFmDbFqD~EsDzEwDvEyDpE}DlE_EhEaEdEeE`EgE|DiEvDmErDoEnDqEhDsEdDuE`DwEzCyEvC}EpC_FlC_FfCaFbCcF|BeFxBgFrBiFnBkFhBkFbBmF~AoFxAoFrAqFnAqFhAsFbAsF~@uFx@uFr@uFl@wFh@wFb@wF\\wFVyFPyFLyFFyF@yFAyFEyFKyFQwFWwF]wFa@wFg@uFm@uFs@uFw@sF}@sFcAqFiAqFmAoFsAoFyAmF}AkFcBkFiBiFmBgFsBeFwBcF}BcFcCaFgC_FmC}EqC{EwCyE{CuE_DsEeDqEiDoEoDmEsDkEwDgE{DeEaEcEeE_EiE}DmEyDqEwDuEsDyEqD}EmDaFkDeFgDiFeDmFaDqF}CuF{CyFwC{FsC_GoCcGmCeGiCiGeCkGaCoG}BqGyBuGuBwGqByGmB}GkB_HgBaHcBcH_BeHyAgHuAiHqAkHmAmHiAoHeAqHo@yG'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.597722222222, -104.85656451127), new google.maps.LatLng(38.7545, -104.66286111111));
    polygon.altLow  = 0;
    polygon.altHigh = 8400;
    polygon.desc    = 'FORT CARSON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FORT CARSON CLASS D<br />SFC-8400');
    

// FORT LEWIS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wmu~GjrxjVzbVnd@~CdK|BxHxBzHtB~HpB`IlBdIhBfIdBhI`BlI|AnIxApItArIpAtIlAvIhAxIdAzI`A|I|@~Ix@`Jr@bJn@bJj@dJf@dJb@fJ^fJZhJThJPhJLjJHjJDjJ@jJAjJEjJIjJMjJQhJUhJ[hJ_@fJc@fJg@dJk@dJo@bJs@bJy@`J}@~IaA|IeAzIiAxImAvIqAtIuArIyApI}AnIaBlIeBjIiBfImBdIqB`IuB~HyBzH}BxHaCtHcCpHgCnHkCjHoCfHsCbHuC~GyCzG}CvG_DrGcDnGgDjGiDfGmDbGoD~FsDxFuDtFyDpF{DjF_EfFaE`FcE|EgEvEiErEkElEmEfEqEbEsE|DuEvDwErDyElD{EfD}E`D_FzCaFtCcFpCeFjCeFdCgF~BiFxBkFrBkFlBmFfBoF`BoFxAqFrAqFlAsFfAsF`AuFz@uFt@uFn@uFf@wF`@wFZwFTwFNwFHwF@wFAwFGwFMwFSwF[wFa@uFg@uFm@uFs@uFy@sF_AsFgAqFmAqFsAoFyAoF_BmFeBmFkBkFqBiFwBgF}BgFcCeFiCcFoCaFuC_F{C}EaD{EgDyEkDwEqDuEwDsE}DqEaEoEgEkEmEiEqEgEwEeE}EaEaF_EgF{DkFyDoFwDuFsDyFqD}FmDcGiDgGgDkGcDoGaDsG}CwGyC{GwC_HsCcHoCgHkCkHgCoHeCsHaCuH}ByHyB}HuB_IqBcImBeIiBgIeBkIaBmI}AoIyAsIuAuIqAwImAyIiA{IeA}IaA_J}@_Jy@aJu@cJo@eJk@eJg@gJc@gJ_@iJ[iJWkJQkJMkJIkJEkJAkJ@uJDkJHkJLkJPkJTkJZiJ^iJb@gJf@gJj@eJn@eJt@cJx@aJ|@aJ`A_JdA}IhA{IlAyIpAwItAuIxAsI|AoI`BmIdBkIhBgIlBeIpBcItB_IxB}H|ByH`CuHdCsHfCoHjCkHzBwI'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.007686257033, -122.68602694651), new google.maps.LatLng(47.150646174223, -122.51958333333));
    polygon.altLow  = 0;
    polygon.altHigh = 2800;
    polygon.desc    = 'FORT LEWIS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FORT LEWIS CLASS D<br />SFC-2800');
    

// FRONT RANGE AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}w~qF`dn|RcShDcQPcQ\\mQb@~G_FjGcDlG}CnGwCpGqCrGkCtGeCvG_CvGwBxGqBzGkB|GeB|G_B~GwA`HqA`HkAbHcAbH}@bHw@dHo@dHi@dHc@fH[fHUfHOfHGfHAfH@fHHfHNfHTfH\\dHb@dHj@dHp@bHv@bH|@bHdA`HjA~GpA~GxA|G~A|GdBzGjBxGrBvGxBtG~BtGdCrGjCpGpCnGvClG|CjGdDfGjDdGpDbGtD`GzD|F`EzFfExFlEtFrErFxEnF|ElFbFhFhFfFlFbFrF~ExF|E|FxEbGtEfGpEjGnEpGjEtGfExGbE~G~DbHzDfHvDjHrDnHnDrHjDvHfDzH`D~H|CbIxCfItChIpClIjCpIfCrIbCvI|BxIxB|ItB~InB`JjBbJdBfJ`BhJ|AjJvAlJrAnJlApJhArJbArJ~@tJx@vJt@xJn@xJh@zJd@zJ^|JZ|JT|JP|JJ~JD~J@~JA~JE~JK~JQ|JU|J[|J_@|Je@zJi@zJo@xJu@xJy@vJ_AtJcAtJiArJmApJsAnJwAlJ}AjJaBhJeBfJkBbJoB`JuB~IyB|I}BxIcCvIgCrIkCpIqClIuChIyCfI}CbIaD~HgDzHkDvHoDrHsDnHwDjH{DfH_EbHcE~GgExGkEtGmEpGqEjGuEfGyEbG}E|F_FxFcFrFgFlFiFhFmFbFoF|EsFxEoEvDkE_a@gBeb@d@{mCd@ooBy[?e^?sh@CoxBBeaCNwaBOd@ghZ'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.700164182841, -104.63536111111), new google.maps.LatLng(39.824, -104.43273506994));
    polygon.altLow  = 0;
    polygon.altHigh = 8000;
    polygon.desc    = 'FRONT RANGE AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FRONT RANGE AIRPORT CLASS D<br />SFC-8000');
    

// FULLERTON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c}~mEnzcoUCu@{vCmqWxoOiqC|xCl~WCK^nD\\nDPlAn{Ad`NyoOhqCq}A{kNGw@_@oD]qD'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.814472222222, -118.07061111111), new google.maps.LatLng(33.938916666667, -117.84016666667));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'FULLERTON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FULLERTON CLASS D<br />SFC-2500');
    

// GILA BEND CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ormgEbckoTkB`B}DrD_EnDcEjDeEfDgEbDiE~CmEzCoEtCqEpCsElCuEhCwEdCyE~B{EzB}EvB_FpB_FlBaFhBcFbBeF~AeFzAgFtAiFpAiFjAkFfAkFbAmF|@mFx@oFr@oFn@oFh@qFd@qF^qFZqFTsFPsFJsFDsF@sFAsFEsFKsFOqFUqFYqF_@qFc@qFi@oFm@oFs@mFw@mF}@mFaAkFgAiFkAiFqAgFuAgFyAeF_BcFcBaFiBaFmB_FqB}EwB{E{ByE_CwEcCuEiCsEmCqEqCoEuCmEyCkE}CgEcDeEgDcEkDaEoD}DsD{DwDyD{DuD_EsDaEoDeEmDiEiDmEgDqEcDsEaDwE}C{EyC}EwCaFsCeFoCgFmCkFiCmFeCoFaCsF_CuF{BwFwB{FsB}FoB_GkBaGgBcGcBgG_BiG{AkGwAkGsAmGoAoGkAqGgAsGcAuG_AuG{@wGw@yGs@yGo@{Gk@{Gg@}Gc@}G_@}GY_HU_HQ_HM_HI_HEaHAaH@gHDaHH_HL_HP_HT_HX_H\\}Gb@}Gf@}Gj@{Gn@{Gr@yGv@yGz@wG~@uGbAuGfAsGjAqGnAoGrAmGvAmGzAkG~AiGbBgGfBcGjBaGnB_GrB}FvB{FzByF|BuF`CsFdCoFhCmFlCkFnCgFrCeFvCaFxC}E|C{E`DwEbDsEfDqEhDmElDiEnDeErDaEtD_ExD{DzDwD|DsD`EoDbEkDdEgDfEcDjE_DlEyCnEuCpEqCrEmCtEiCvEcCxE_CzE{B|EwB~EqB`FmB`FiBbFcBdF_BfFyAfFuAhFqAhFkAjFgAjFaAlF}@lFw@nFs@nFm@pFi@pFc@pF_@pFYpFUrFOrFKrFErFArF@rFDrFJrFNpFTpFXpF^pFd@nFh@nFn@nFr@lFv@lF|@jF`AjFfAhFjAhFpAfFtAfFzAdF~AbFbB`FhB`FlB~EpB|EvBzEzBxE~BvEdCtEhCrElCpEpCnEtClExChE~CfEbDdEfDbEjD`EnD|DrDzDvDxDzDtD~DrD`EnDdElDhEhDlEfDpEbDrE`DvE|CzExC|EvC`FrCbFnCfFlCjFhClFrD`I_xBtzFj^rkL'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.828472222222, -112.80309268299), new google.maps.LatLng(32.957607354786, -112.63690728228));
    polygon.altLow  = 0;
    polygon.altHigh = 3900;
    polygon.desc    = 'GILA BEND CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'GILA BEND CLASS D<br />SFC-3900');
    

// GILLETTE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k{bnGnddcS`@qj@fBkj@jD}i@pFii@rHmh@tJkg@tLef@rNwd@lPcc@fRia@zSk_@nUg]|V}ZfXqXnYaVpZkSp[sPj\\yM~\\}Jp]_H|]_Eb^}Af^>b^`B|]`Ep]`H~\\~Jh\\zMn[tPpZlSlY`VfXpXzV~ZlUf]zSh_@dRfa@lP`c@pNtd@tL`f@tJhg@rHjh@nFdi@jDxi@fBfj@`@lj@a@lj@gBfj@kDxi@oFdi@sHjh@uJhg@sLbf@qNtd@mP`c@eRha@{Sj_@mUf]{V~ZgXrXmY`VqZlSo[vPi\\|M_]`Kq]`H}]bEc^`Bg^@c^}A}]}Dq]}G_]}Jk\\yMq[sPqZkSoY_ViXqX}V}ZoUe]}Si_@gRia@oPcc@sNud@uLcf@uJkg@sHmh@qFgi@mD}i@gBij@a@qj@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.277226894733, -105.63925720027), new google.maps.LatLng(44.420549982223, -105.43963323997));
    polygon.altLow  = 0;
    polygon.altHigh = 6900;
    polygon.desc    = 'GILLETTE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'GILLETTE CLASS D<br />SFC-6900');
    

// GLENDALE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('irjkExcqlTyt@rG}vKqrC_uBskCx@eFr@eEt@eEx@cEz@cE~@aE`A_EbA_EfA}DhA{DlAyDnAwDpAwDtAuDvAsDxAqD|AoD~AmD`BkDbBiDfBgDhBeDjBaDlB_DnB}CrB{CtByCvBuCxBsCzBqC|BoC~BkC`CiCbCeCdCcCfCaChC}BjC{BlCwBnCuBpCqBpCoBrCkBtCiBvCeBxCaBxC_BzC{A|CyA|CuA~CqA`DoA`DkAbDgAbDcAdDaAdD}@fDy@fDu@fDs@hDo@hDk@hDg@jDe@jDa@jD]jDYlDUlDQlDOlDKlDGlDClD?lD>lDBlDFlDJlDNlDRlDTjDXjD\\jD`@jDd@hDf@hDj@hDn@fDr@fDv@fDx@dD|@dD`AbDbAbDfA`DjA~CnA~CpA|CtA|CxAzCzAxC~AxC`BvCdBtChBrCjBpCnBpCpBnCtBlCvBjCzBhC|BfC`CdCbCbCdC`ChC~BjC|BnCzBpCxBrCvBtCtBxCrBzCnB|ClB~CjB`DhBdDfBfDbBhD`BjD~AlD|AnDxApDvArDtAtDpAtDnAvDlAxDhAzDfA|DbA|D`A~D~@`Ez@`Ex@bEt@dEr@dEn@fEl@fEh@hEf@hEb@jE`@jE\\jEZlEVlETlEPlENnEJnEHnEDnEBnE>nE?nECnEEnEInEKnEOnEQlEUlEWlE[lE]jEa@jEc@jEg@hEi@hEm@fEo@fEs@dEu@dEy@bE{@bE_A`EaA~DcA|DgA|DiAzDmAxD_A`F'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.476991539626, -112.32472222222), new google.maps.LatLng(33.575555555556, -112.2350252971));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'GLENDALE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'GLENDALE CLASS D<br />SFC-3000');
    

// GRAND CANYON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s~zzEbwnkT`@oe@fBie@lD}d@pFkd@rHsc@tJub@tLsa@rNi`@nP{^fRi]|Sq[nUuY|VuWhXqUnYkSrZ_Qp[sNj\\cL`]qIr]}F~]iDd^sAf^>d^tA|]jDp]~F`]rIj\\dLp[rNrZ`QnYjShXrU|VtWnUtYzSp[fRh]lPz^rNh`@tLpa@tJrb@rHpc@pFhd@lDzd@fBfe@`@le@a@le@gBfe@kDzd@oFhd@sHpc@uJrb@uLpa@sNh`@mPz^gRh]{Sp[mUvY}VvWgXrUoYjSqZ`Qq[tNk\\dLa]rIq]~F}]jDe^tAg^>e^sA_^gDs]}Fa]qIk\\cLq[qNsZ_QqYiSiXqU_WuWoUuY}Sq[gRi]oP{^sNi`@uLqa@uJub@uHsc@qFkd@mD}d@gBie@a@oe@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.880734088437, -112.23543610097), new google.maps.LatLng(36.024265053509, -112.05900972736));
    polygon.altLow  = 0;
    polygon.altHigh = 9100;
    polygon.desc    = 'GRAND CANYON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'GRAND CANYON CLASS D<br />SFC-9100');
    

// GRAND JUNCTION CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qlgnFrrkuSd@{j@pBuj@|Dgj@fGsi@pIwh@xKug@~Mmf@`P_e@bRkc@`Tqa@zUs_@pWm]dYe[rZwX~[eVd]qSf^yPb_@}Mz_@aKl`@aHx`@aE`a@_Bda@>`a@`Bx`@bEl`@bHx_@bKb_@~Md^zPb]rS|[fVrZxXbYd[pWl]xUp_@~Spa@`Rjc@`P|d@|Mjf@vKrg@pIth@fGni@|Ddj@pBpj@d@xj@c@xj@qBpj@{Ddj@gGni@oIth@wKrg@}Mjf@aP~d@aRjc@_Tpa@yUr_@qWn]cYd[sZxX}[fVc]rSe^zPa_@`Ny_@bKm`@bHy`@bEaa@bBea@@aa@}Ay`@_Em`@aH{_@_Kc_@}Mg^wPe]qS_\\eVuZwXeYe[sWm]{Uq_@aTqa@cRkc@cP_e@_Nmf@yKug@qIwh@gGsi@}Dgj@qBuj@e@{j@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.0441003124, -108.62725819831), new google.maps.LatLng(39.200898632257, -108.4260767036));
    polygon.altLow  = 0;
    polygon.altHigh = 7400;
    polygon.desc    = 'GRAND JUNCTION CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'GRAND JUNCTION CLASS D<br />SFC-7400');
    

// GREAT FALLS INTL AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_vjaHrawfTj@_z@bCuy@|Ecy@rHgx@hKcw@|Muu@nP_t@~Rar@jU{o@rWmm@vYyj@v[}g@r]{d@h_@qa@z`@e^fb@qZnc@{Vpd@aSje@cO`f@cKpf@aGxf@_C|f@@xf@dCpf@fG`f@hKje@hOnd@dSlc@~Vfb@tZx`@f^f_@ra@p]zd@t[|g@tYvj@pWjm@hUxo@|R|q@lPzs@|Mpu@hK|v@rH`x@zE|x@bCny@j@vy@k@vy@cCny@{E|x@sH`x@iK|v@{Mpu@mPzs@}R~q@gUxo@oWjm@uYvj@u[|g@q]zd@g_@ta@y`@f^eb@tZmc@~Vod@fSke@hOaf@hKof@hGyf@dC}f@@yf@}Bqf@aGaf@cKke@cOqd@_Soc@{Vib@qZ{`@c^i_@qa@s]yd@w[{g@wYwj@sWmm@kU{o@_Sar@oP_t@_Nuu@kKcw@uHgx@}Ecy@eCuy@k@_z@?K'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.3903895923, -111.50573099226), new google.maps.LatLng(47.57360893949, -111.23560440783));
    polygon.altLow  = 0;
    polygon.altHigh = 6200;
    polygon.desc    = 'GREAT FALLS INTL AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'GREAT FALLS INTL AIRPORT CLASS D<br />SFC-6200');
    

// HAILEY CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_{_hGvmaxTjeCd_Ni`FvuBWnHYbI]bIa@`Ie@`Ii@~Hm@~Hq@|Hu@|Hy@zH}@xHaAvHeAvHiAtHmArHqApHuAnHyAlH}AjHaBfHeBdHiBbHkB`HoB|GsBzGwBxG{BtG}BrGaCnGeCjGiChGkCdGoC`GsC~FuCzFyCvF{CrF_DnFaDjFeDfFgDbFkD~EmDzEqDvEsDrEuDnEyDjE{DdE}D`E_E|DcEvDeErDgEnDiEhDkEdDmE~CoEzCqEtCsEpCuEjCwEfCyE`C{EzB{EvB}EpB_FjBaFfBaF`BcFzAcFtAeFpAeFjAgFdAgF~@iFz@iFt@iFn@kFh@kFb@kF\\kFXmFRmFLmFFmF@mFAmFGmFKmFQkFWkF]kFc@kFi@iFm@iFs@iFy@gF_AgFeAeFkAeFoAcFuAcF{AaFaBaFeB_FkB}EqB}EuB{E{ByEaCwEeCuEkCsEoCqEuCoE{CmE_DkEeDiEiDgEmDeEsDcEwDaE}D}DaE{DeEyDiEwDoEsDsEqDwEoD{EkD_FiDcFeDgFcDkF_DoF}CsFyCwFuC{FsC_GoCaGmCeGiCiGeCmGaCoG_CsG{BuGwByGsB{GqB_HmBaHiBcHeBeHaBiH}AkHyAmHuAoHqAqHmAsHiAuHeAwHaAyH}@{Hy@{Hu@}Hq@_Im@_Ii@aIe@aIa@cI]cIYcIUeIQeIMeIIeIEeIAgI@oIDeIHeILeIPeITeIXcI\\cI`@cId@aIh@aIl@_Ip@_It@}Hx@{H|@{H`AyHdAwHhAuHlAsHpAqHtAoHxAmH|AkH`BiHdBeHhBcHlBaHnB_HrB{GvByGzBuG~BsG`CoGdCmGhCiGjCeGnCcGrC_GtC{FxCwF|CsF~CoFbDkFdDgFhDcFjD_FlD{EpDwErDsEvDoExDiEzDeE|DaE`E}DbEwDdEsDfEmDhEiDjEeDlE_DnE{CpEuCrEqCtEkCvEeCxEaCzE{BzEuB|EqB~EkB`FeB`FaBbF{AbFuAdFoAdFkAfFeAfF_AhFy@hFs@hFo@jFi@jFc@jF]jFWlFQlFKlFGlFAlF@lFFlFLlFRjFXjF\\jFb@jFh@hFn@hFt@hFz@fF~@fFdAdFjAdFpAbFtAbFzA`F`B`FfB~EjB|EpBzEvBzEzBxE`CvEfCtEjCrEpCpEtCnEzClE~CjEdDhEhDfEnDdErDbEvD`E|D|D`EzDdExDjEtDnErDrEpDvErDzE~_FquB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.400583333333, -114.39054153017), new google.maps.LatLng(43.573052372333, -114.20279174914));
    polygon.altLow  = 0;
    polygon.altHigh = 7800;
    polygon.desc    = 'HAILEY CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'HAILEY CLASS D<br />SFC-7800');
    

// HAYWARD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y{zdFlu|gVnEKzmB{zFlgIxcFgnBj{FjBxF~A~E|A`FxAbFtAdFrAfFnAhFjAjFhAlFdAlF`AnF~@pFz@rFv@rFt@tFp@tFl@vFj@vFf@xFb@xF^zF\\zFXzFT|FP|FN|FJ|FF|FB|F>~F?~FC|FG|FK|FM|FQ|FU|FYzF]zF_@zFc@xFg@xFk@xFm@vFq@tFu@tFw@rF{@rF_ApFaAnFeAlFiAlFkAjFoAhFsAfFuAdFyAbF{A`F_B~EcB|EeBzEiBxEkBvEoBrEqBpEuBnEwBjEyBhE}BfE_CbEcC`EeC|DgCzDkCvDmCtDoCpDqCnDuCjDwCfDyCdD{C`D}C|C_DzCaDvCcDrCeDnCgDjCiDfCkDdCmD`CoD|BqDxBsDtBuDpBuDlBwDhByDdB{D`B{D|A}DvA}DrAmDt@cB{KuA{I{AyI_BwIeBuIiBsImBqIsBoIwBkI{BiIaCgIeCcIiCaImC}HqC{HwCwH{CsH_DoHcDmHgDiHkDeHoDaHsD}GwDyG{DuG_EqGcEmGgEiGkEcGmE_GqE{FuEuFyEqF{EmF_FgFcFcFeF}EiFyEkFsEoFmEqFiEsFcEwF}DyFyD{FsD_GmDaGgDcGaDeG}CgGwCiGqCkGkCmGeCoG_CqGyBsGsBsGmBuGgBwGaByG{AyGuA{GmA{GgA}GaA}G{@_Hu@_Ho@_Hg@aHa@aH[yJ]PaET}FX}F\\}F^{Fb@{Ff@yFj@yFl@wFp@wFt@uFx@uFz@sF~@qFbAqFdAoFhAmFlAkFnAiFrAgFtAeFxAcF|AaF~A_FbB}EdB{EhByEjBwEnBuEpBqEtBoEvBmEzBiE|BgE~BeEbCaEdC_EfC{DjCyDlCuDnCqDrCoDtCkDvCiDxCeDzCaD|C}C`D{CbDwCdDsCfDoChDkCjDgClDeClDaCnD}BpDyBrDuBtDqBvDmBvDiBxDeBzDaBzD{A|DwA~DsA~DoA`EkA`EgAbEcAbE_AdEy@dEu@fEq@fEm@fEi@fEc@hE_@hE[hEWhEQhEM'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.590861111111, -122.19216666667), new google.maps.LatLng(37.717416666667, -122.00866666667));
    polygon.altLow  = 0;
    polygon.altHigh = 1500;
    polygon.desc    = 'HAYWARD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'HAYWARD CLASS D<br />SFC-1500');
    

// HELENA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cos{Gho{iTzGoDh`@eaF`_M~iCaZrvDzBtCbEjF`EnF|DtFzDxFvD|FtDbGpDfGlDjGjDnGfDrGdDxG`D|G|C`HxCdHvChHrClHnCnHjCrHfCvHbCzH~B|HzB`IvBbItBfIpBhIlBlIhBnIbBrI~AtIzAvIvAxIrAzInA|IjA~IfA`JbAbJ~@dJx@fJt@fJp@hJl@jJh@jJb@lJ^lJZnJVnJRnJLpJHpJDpJ@pJApJEpJIpJMpJQnJWnJ[nJ_@lJc@lJi@jJm@jJq@hJu@hJy@fJ}@dJcAbJgA`JkA~IoA|IsAzIwAxI{AvI_BtIcBrIgBnIkBlIoBhIsBfIwBdI{B`I_C|HcCzHgCvHkCrHoCnHsClHuChHyCdH}C`HaD|GcDxGgDtGkDnGmDjGqDfGuDbGwD|F{DxF}DtFaEnFcEjFgEdFiE`FkEzEoEtEqEpEsEjEuEdEwE`E{EzD}EtD_FnDaFhDcFdDeF~CgFxCiFrCkFlCkFfCmF`CoFzBqFtBqFnBsFfBuF`BuFzAwFtAwFnAyFhAyFbA{Fz@{Ft@{Fn@}Fh@}Fb@}FZ}FT}FN}FHcHFs_@d}EivDqw@r_@u|EaHcEeF}CcFcDaFiD_FoD}EuD{EyDyE_EuEeEsEkEqEoEoEuEkE{EiE_FgEeFcEiFaEoF}DsF{DyFwD}FuDcGqDgGoDkGkDoGgDsGeDyGaD}G}CaHyCeHwCiHsCmHoCoHkCsHgCwHcC{HaC}H}BaIyBeIuBgIqBkImBmIiBoIeBsIaBuI{AwIwAyIsA}IoA_JkAaJgAcJcAeJ_AeJy@gJu@iJq@kJm@kJi@mJc@mJ_@oJ[oJWoJSqJMqJIqJEqJAqJ@{JDqJHqJLqJRqJVoJZoJ^oJb@mJh@mJl@kJp@kJt@iJx@gJ~@eJbAeJfAcJjAaJnA_JrA}IvAyIzAwI~AuIdBsIhBqIlBmIpBkItBgIxBeI|BaI~B_IbC{HfCwHjCsHnCqHrCmHvCiHxCeH|CaH`D}GdDyGfDuGjDoGnDkGpDgGtDcGvD}FzDyF|DsF`EoFbEiFfEeFhE_FjE{EnEuEpEqErEkEtEeExE_EzE{D|EuD~EoD`FiDbFcDdF}CfFwChFqC'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.533637815742, -112.12472222222), new google.maps.LatLng(46.680222687028, -111.84777777778));
    polygon.altLow  = 0;
    polygon.altHigh = 6400;
    polygon.desc    = 'HELENA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'HELENA CLASS D<br />SFC-6400');
    

// HENDERSON AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iuwzEdfg}TrEaCtE}BvEwBxEsBzEoB|EiB|EeB~E_B`F{A`FwAbFqAdFmAdFgAfFcAfF}@fFy@hFs@hFo@jFi@jFe@jF_@jFYjFUlFOlFKlFElFAlF@lFDlFJlFPjFTjFZjF^jFd@jFh@hFn@hFr@fFx@fF|@fFbAdFfAbFlAbFpA`FvA`FzA~E`B|EdB|EhBzEnBxErBvEvBtE|BrE`CpEdCnEjClEnCjErChEvCfEzCdE`DbEdD`EhD|DlDzDpDxDtDvDxDrD|DpD`ElDdEjDhEhDjEdDnEbDrE~CvE|CxExC|EtC`FrCbFnCfFjChFhClFdCnF`CrF~BtFzBxFvBzFrB|FnB~FlBbGhBdGdBfG`BhG|AjGxAlGtAnGpApGlArGhAtGdAtG`AvG|@xGx@zGt@zGp@|Gl@|Gh@~Gd@~G`@`H\\`HX`HTbHPbHLbHHbHDbH@bHAbHEbHIbHMbHQbHUbHY`H]`Ha@`He@~Gi@~Gm@|Gq@|Gu@zGy@zG}@xGaAvGeAtGiAtGmArGqApGuAnGyAlG}AjGaBhGeBfGiBdGmBbGoB~FsB|FwBzF{BxF_CtFaCrFeCnFiClFkCjFoCfFsCbFuC`FyC|E}CxE_DvEcDrEeDnEiDjEkDhEmDdEqD`EsD|DwDxDyDtD{DpD}DlDaEhDcEdDeE`DgEzCiEvCkErCmEnCoEjCqEdCsE`CuE|BwExByErB{EnB{EhB}EdB_F`BaFzAaFvAcFpAcFlAeFfAgFbAgF|@gFx@iFr@iFn@kFh@kFd@kF^kFZkFTmFPmFJmFFmF@mFAmFEmFKmFOkFUkFYkF_@kFc@kFi@iFo@iFs@eDc@lBcHtCcKnCeKhCiKbCkK|BoKxBqKrBsKlBwKfByK`B{KzA}KtA_LnAaLhAcLbAcL|@eLv@gLp@gLj@iLd@iL^kLXkLRkLLkLFmLFuKueCOgBHiAkBiAmBgAoBeAoBcAqBaAsBaAuB_AuB}@wB{@yBy@yBw@{Bu@}Bs@}Bs@_Cq@_Co@aCm@aCk@cCi@cCg@eCe@eCc@gCa@gC_@gC]iC[iCYiCWkCUkCSkCQkCOmCMmCKmCImCGmCEmCCmCAmC?mC>mC@qCBmCDmCFmCHmCJmCLmCNmCPkCRkCTkCNiBBauKtHyD'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.908004820345, -115.21690798522), new google.maps.LatLng(36.009816283366, -115.04864753225));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'HENDERSON AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'HENDERSON AIRPORT CLASS D<br />SFC-4000');
    

// HOBBS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('eo{fEtfwtRrBmF}}AioBx~DabFz`B|rBhF_C|EwB~EqB`FmBbFiBbFcBdF_BfFyAfFuAhFqAjFkAjFgAlFaAlF}@nFw@nFs@nFm@pFi@pFc@pF_@rFYrFUrFOrFKrFErFArF@rFDrFJrFNrFTrFXpF^pFd@pFh@nFn@nFr@nFx@lF|@lF`AjFfAjFjAhFpAfFtAfFzAdF~AbFbBbFhB`FlB~EpB|EvBzEzBxE~BvEdCtEhCrElCpEpCnEtClExCjE~ChEbDdEfDbEjD`EnD|DrDzDvDxDzDtD~DrD`EnDdElDhEhDlEfDpEbDrE`DvE|CzExC|EvC`FrCdFnCfFlCjFhClFdCnF`CrF~BtFzBvFvBzFrB|FnB~FjB`GfBbGbBdG~AfGzAhGvAjGrAlGnAnGjApGfArGbArG~@tGz@vGv@vGr@xGn@zGj@zGf@zGb@|G^|GX|GT~GP~GL~GH~GD~G@~GA~GE~GI~GM~GQ~GU~GY|G]|Gc@|Gg@zGk@zGo@zGs@xGw@vG{@vG_AtGcArGgArGkApGoAnGsAlGwAjG{AhG_BfGcBdGgBbGkB`GoB~FsB|FwBzF{BvF_CtFaCrFeCnFiClFmCjFoCfFsCdFwC`FyC|E}CzEaDvEcDrEgDpEiDlEmDhEoDdEsDbEuD~DyDzD{DvD}DrDaEnDcEjDeEfDiEbDkE~CmEzCoEtCqEpCsElCuEhCwEdCyE~B{EzB}EvB_FpBaFlBcFhBcFbBeF~AgFzAgFtAiFpAkFjAkFfAmFbAmF|@oFx@oFr@oFn@qFh@qFd@qF^sFZsFTsFPsFJsFDsF@sFAsFEsFKsFOsFUsFYqF_@qFc@qFi@oFm@oFs@oFw@mF}@mFaAkFgAkFkAiFqAiFuAgFyAeF_BcFcBcFiBaFmB_FqB}EwB{E{ByE_CwEcCuEiCsEmCqEqCoEuCmEyCkE}CiEcDeEgDcEkDaEoD_EsD{DwDyD{DuD_EsDaEqDeEmDiEkDmEgDqEcDsEaDwE}C{E{C}EwCaFsCeFqCgFmCkFiCmFeCoFaCsF_CuF{BwFwB{FsB}FoB_GkBaGgBcGcBgG_BiG}AkGyAkGuAmGqAoGkAqGgAsGcAuG_AuG{@wGw@yGs@yGo@{Gk@{Gg@}Gc@}G_@}GY_HU_HQ_HM_HIaHEaHAaH@gHDaHHaHL_HP_HT_HX_H^}Gb@}Gf@}Gj@{Gn@{Gr@yGv@yGz@wG~@uGbAuGfAsGjAqGnAoGrAmGvAmGzAkG~AiGbBgGfBcGjBaG'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.617224192508, -103.30032477564), new google.maps.LatLng(32.764722222222, -103.12397222222));
    polygon.altLow  = 0;
    polygon.altHigh = 6200;
    polygon.desc    = 'HOBBS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'HOBBS CLASS D<br />SFC-6200');
    

// IDAHO FALLS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ynciGdv_kTh@}t@`Cut@xEet@nHks@bKir@tMaq@dPoo@rRwm@|Twk@dWoi@fYag@f[md@`]sa@v^u^h`@o[ta@gXzb@{Tzc@kQvd@wMje@cJze@kFbf@uBff@@bf@xBxe@pFje@fJtd@zMzc@nQxb@|Tra@hXf`@p[t^t^~\\ra@d[ld@dY`g@bWli@zTtk@pRrm@dPjo@tM|p@`Kdr@lHfs@xE~s@`Cpt@j@xt@i@xt@aCpt@wE~s@mHfs@aKdr@sM|p@cPlo@qRtm@{Ttk@cWni@eY`g@e[ld@_]ta@u^t^g`@r[sa@jXyb@~Tyc@nQud@|Mke@fJye@pFcf@xBgf@@cf@sB{e@kFke@aJwd@wM{c@iQ{b@yTua@gXi`@o[w^s^a]sa@g[md@gYag@eWoi@}Tuk@sRum@ePoo@uMaq@cKir@oHks@yEet@cCut@k@}t@?I'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.424436973067, -112.19388472507), new google.maps.LatLng(43.604450495817, -111.94667273634));
    polygon.altLow  = 0;
    polygon.altHigh = 7200;
    polygon.desc    = 'IDAHO FALLS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'IDAHO FALLS CLASS D<br />SFC-7200');
    

// IDAHO FALLS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q`lhGpomjTv{@wmBdFbDtGdEpGlEnGrElGxEhG~EfGfFbGlF`GrF|FxFzF~FvFdGrFjGpFpGlFvGhF|GdF`H`FfH|ElHxEpHvEvHjBfD{{@|mBa@x@c@|@c@z@c@z@e@x@e@x@g@v@g@v@g@t@i@t@i@r@i@r@k@p@k@p@k@n@m@n@m@l@m@l@m@j@o@j@o@h@o@f@q@f@q@d@q@d@q@b@s@`@s@`@s@^s@\\s@\\u@Zu@Zu@Xu@Vu@Vu@Tw@Rw@Rw@Pw@Nw@Lw@Lw@Jw@Hw@Hw@Fw@Dw@Dy@By@@y@@y@>y@?y@Ay@Ay@Cw@Ew@Ew@Gw@Iw@Iw@Kw@Mw@Mw@Ow@Qw@Qw@Su@Uu@Uu@Wu@Yu@Yu@[s@]s@]s@_@s@a@s@a@q@c@q@e@q@e@q@g@o@g@o@i@o@k@m@k@m@m@m@m@m@o@k@o@k@q@k@q@i@s@i@s@i@u@g@u@g@w@g@w@e@y@e@y@c@{@c@{@c@}@a@}@a@_A_@_A_@_A_@aA]aA]cA[cA[cAYeAYeAWeAWgAWgAUgAUgASiASiAQiAQiAOkAOkAMkAMkAKkAKkAImAImAGmAGmAEmAEmACmACmAAmAAmA?mA?mA>oA>mA@mA@mABmABmADmADmAFmAFmAHmAHmAJkAJkALkALkANkANkAPiAPiARiARiATgATgAVgAVgAVeAXeAXeAZcAZcA\\cA\\aA^aA^_A^_A`@_A'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.448055555556, -112.01371112729), new google.maps.LatLng(43.487772923538, -111.95933333333));
    polygon.altLow  = 0;
    polygon.altHigh = 5300;
    polygon.desc    = 'IDAHO FALLS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'IDAHO FALLS CLASS D<br />SFC-5300');
    

// IMPERIAL BEACH NOLF CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{{~eE`r}iUyAeEgA{CeA}CaA_D_A_D}@aD{@cDy@cDu@eDs@eDq@gDo@gDk@iDi@iDg@kDe@kDa@mD_@mD]mDYoDWoDUoDQoDOqDMqDIqDGqDEqDCqD?qD>qDBuDDqDFqDHqDLqDNqDPoDToDVoDXoD\\mD^mD`@mDd@kDf@kDh@iDj@iDn@gDp@gDr@eDt@eDx@cDz@cD|@aDbAmDi`CqfI|GqHxEuF|EoF`FkFdFgFfFaFjF}EnFwEpFsEtFmEvFiEzFcE|F_E`GyDbGsDdGmDhGiDjGcDlG}CnGwCpGsCrGmCtGgCvGaCxG{BzGuB|GoB~GiB`HcB`H}AbHwAdHqAdHkAfHeAfH_AhHy@hHs@jHm@jHg@jH_@jHYlHSlHMlHGlHAlH@lHFlHLlHTjHZjH`@jHf@jHl@hHr@hHx@fH~@fHdAvKfBl|@fjUrrA~mMgFbDiGhDkGbDmG~CoGxCqGrCsGlCuGfCwG`CyGzB{GtB}GnB_HjBaHdBcH~AcHxAeHrAeHjAgHdAiH~@iHx@iHr@kHl@kHf@kH`@mHZmHTmHNmHFmH@mHAmHGmHMmHSmHYkH_@kHg@kHm@iHs@iHy@iH_AgHeAgHkAeHqAcHwAcH}AaHcB_HiB}GoB{GuB{G{ByGaCwGgCuGmCsGsCoGwCmG}CkGcDiGiDgGoDcGsDaGyD}F_E{FcEyFiEuFmEqFsEuHsGdxAmcI'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.520833333333, -117.21230018106), new google.maps.LatLng(32.625861111111, -117.00724976963));
    polygon.altLow  = 0;
    polygon.altHigh = 1500;
    polygon.desc    = 'IMPERIAL BEACH NOLF CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'IMPERIAL BEACH NOLF CLASS D<br />SFC-1500');
    

// INDIAN SPRINGS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qdh~Elpt`Ud_Du~FrIhDjGhChGnCfGrCdGxCbG~C`GdD|FjDzFnDxFtDvFzDrF`EpFdElFjEjFnEfFtEdFxE`F~E~EbFzEhFvElFtEpFpEvFlEzFhE~FfEbGbEhG~DlGzDpGvDtGrDxGnD|GjD`HfDbHbDfH~CjHzCnHvCpHpCtHlCvHhCzHdC|H~B`IzBbIvBfIrBhIlBjIhBlIbBnI~ApIzAtItAtIpAvIjAxIfAzI`A|I|@~Ix@~Ir@`Jn@`Jh@bJd@bJ^dJXdJTdJNdJJfJDfJ@fJAfJEfJKfJOdJUdJYdJ_@dJc@bJi@bJm@`Js@`Jw@~I}@~IaA|IgAzIkAxIqAvIuAvI{AtI_BrIcBnIiBlImBjIqBhIwBfI{BbI_C`IeC~HiCzHmCxHqCtHuCpH{CnH_DjHcDfHgDbHkD`HoD|GsDxGwDtG{DpG_ElGcEhGgEbGiE~FmEzFqEvFuErFwElF{EhF_FbFaF~EeFxEgFtEkFnEmFjEqFdEsF`EwFzDyFtD{FpD}FjDaGdDcG~CeGxCgGtCiGnCkGhCmGbCoG|BqGvBqGpBsGjBuGdBwG~AwGxAyGrA{GlA{GfA}G`A}Gz@}Gr@_Hl@_Hf@_H`@aHZuKb@Jya^'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.503807673635, -115.77669166667), new google.maps.LatLng(36.583361111111, -115.57660833333));
    polygon.altLow  = 0;
    polygon.altHigh = 5700;
    polygon.desc    = 'INDIAN SPRINGS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'INDIAN SPRINGS CLASS D<br />SFC-5700');
    

// JACKSON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q|qiGxo{bT`@_j@fByi@jDki@pFwh@rH}g@tJ{f@tLue@rNgd@lPub@fR{`@zS}^nU{\\|VsZfXgXnYwUpZcSp[mPj\\sM~\\yJp]{G|]}Dd^}Af^>b^~A|]~Dp]|G~\\zJh\\tMn[nPpZdSlYxUfXfXzVrZlUz\\zS|^dRz`@lPrb@pNdd@tLre@tJxf@rHxg@nFth@jDhi@fBti@`@|i@a@|i@gBti@kDhi@oFth@sHzg@uJxf@sLre@qNdd@mPrb@eRz`@{S|^mUz\\{VrZgXhXmYxUqZdSo[nPi\\vM_]zJq]~G}]~Dc^`Bg^@e^{A}]{Dq]{Ga]wJk\\sMq[mPsZcSoYwUiXgX}VsZoUy\\}S}^gR{`@oPsb@sNgd@uLue@uJ{f@sH}g@qFwh@mDki@gByi@a@_j@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.534995326493, -110.83663256183), new google.maps.LatLng(43.678337106696, -110.63948008284));
    polygon.altLow  = 0;
    polygon.altHigh = 8900;
    polygon.desc    = 'JACKSON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'JACKSON CLASS D<br />SFC-8900');
    

// KALISPELL CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wxhfHvljxT`@ym@fBsm@jDcm@pFml@rHqk@tJmj@tLci@rNqg@lPye@fR{c@zSwa@lUo_@|Va]fXoZnYwWpZ}Tn[_Rh\\}N~\\yKp]sH|]mEb^eBd^>b^hBz]pEn]vH~\\|Kh\\~Nn[`RpZ~TlYxWfXnZzV`]lUn_@zSva@dRzc@lPve@pNng@rL~h@tJhj@rHlk@nFjl@jD~l@fBnm@`@tm@a@tm@gBnm@kD~l@oFjl@sHlk@sJjj@sL~h@qNng@mPve@eRzc@ySva@mUn_@{V`]eXnZmYxWoZ~To[`Ri\\`O_]|Ko]vH{]pEc^hBe^@c^cB}]mEq]sH_]yKi\\}No[}QqZ{ToYwWgXmZ}Va]oUo_@{Swa@gR{c@mPye@sNqg@uLai@uJmj@sHqk@qFml@mDcm@gBsm@a@ym@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.239776728175, -114.3622945144), new google.maps.LatLng(48.383000155402, -114.14770714426));
    polygon.altLow  = 0;
    polygon.altHigh = 5500;
    polygon.desc    = 'KALISPELL CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'KALISPELL CLASS D<br />SFC-5500');
    

// KLAMATH FALLS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iez`Gp~~eVh@ys@`Cqs@xE_s@nHgr@bKgq@tM}o@dPmn@rRul@|Twj@dWqh@fYef@f[sc@`]{`@v^_^h`@}Zta@uWzb@kTzc@}Pvd@mMje@{Ize@gFbf@qBff@@bf@tBze@jFje@~Itd@pMzc@`Qxb@nTra@xWf`@|Zt^~]~\\z`@d[rc@fYdf@bWph@|Ttj@pRrl@dPjn@tMzo@bKbq@lHbr@xEzr@`Cjs@j@rs@i@rs@aCjs@wEzr@mHbr@aKbq@sMzo@cPjn@qRrl@{Ttj@cWph@eYdf@e[rc@_]|`@u^~]g`@~Zsa@xWyb@nT{c@`Qud@rMke@~I{e@jFcf@vBgf@@cf@qB{e@gFke@{Iwd@mM{c@}P{b@kTua@uWi`@{Zw^}]a]{`@g[sc@iYef@eWqh@}Twj@sRul@gPmn@uM}o@cKeq@oHgr@yE_s@cCos@k@ys@?I'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.066082209412, -121.853984299), new google.maps.LatLng(42.246138597453, -121.61212868053));
    polygon.altLow  = 0;
    polygon.altHigh = 6600;
    polygon.desc    = 'KLAMATH FALLS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'KLAMATH FALLS CLASS D<br />SFC-6600');
    

// LA VERNE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('i}tnEj|bnUy_CjDkAbBuBrDyBpD{BlD}BjD_ChDcCdDeCbDgC`DiC|CkCzCmCvCqCtCsCpCuClCwCjCyCfC{CdC}C`C_D|BaDzBaDvBcDrBeDnBgDlBiDhBiDdBkD`BmD|AoDzAoDvAqDrAsDnAsDjAuDfAuDbAwD~@wDz@yDx@yDt@yDp@{Dl@{Dh@{Dd@}D`@}D\\}DX}DT}DP}DL_EH_ED_E@_E?_EC_EG}DK}DO}DS}DW}D[}D_@{Dc@{Dg@{Dk@yDo@yDs@yDw@wD{@wD_AuDcAuDgAsDkAsDoAqDsAoDwAoDyAmD}AkDaBkDeBiDiBgDmBeDoBcDsBcDwBaD{B_D}B}CaC{CeCyCgCwCkCuCmCsCqCqCsCoCwCkC{CiC}CgC_DeCcDcCeD_CiD}BkD{BmDyBqDuBsDsBuDqBwDmB{DkB}DiB_EeBaEcBcE_BeE}AgEyAiEwAkEsAmEqAoEmAqEkAqEgAsEeAuEaAwE_AwE{@yEw@{Eu@{Eq@}Eo@}Ek@_Fg@_Fe@aFa@aF]cF[cFWcFScFQeFMeFIeFGeFCeF?eF>eFBkFFeFHeFLeFPeFRcFVcFZcF\\cF`@aFd@aFf@_Fj@_Fn@}Ep@}Et@{Ev@{Ez@yE~@wE`AwEdAuEfAsEjAsElAqEpAoErAmEvAkExAiE|AgE~AeEbBcEdBaEhB_EjB}DlB{DpBwDrBuDtBsDxBqDzBmD|BkD~BiDbCeDdCcDfC_DhC}CjC{CnCwCpCuCrCqCtCmCvCkCxCgCzCeC|CaC~C}B`D{B`DwBbDsBdDoBfDmBhDiBjDeBjDaBlD}AnD{AnDwApDsArDoArDkAtDgAtDcAvD_AvD{@xDw@xDs@xDo@zDk@zDg@zDe@|Da@|D]|DY|DU|DQ|DK~DG~DC~D?~D@~DD~DH|DL|DP|DT|DX|D\\|D`@zDd@zDh@zDl@xDp@xDt@xDv@vDz@vD~@tDbAtDfArDjArDnApDrAnDvAnDzAlD|AjD`BjDdBhDhBfDlBdDnBbDrB`DvB`DzB~C|B|C`CzCdCxCfCvCjCtClCrCpCpCtClCvCjCzChC|CfC~CdCbDbCdD~BhD|BjDzBlDxBpDtBrDrBtDpBvDlBzDjB|DhB~DdB`EbBbE~AdEvApDtwAsB~KxaM'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.02725, -117.84786896803), new google.maps.LatLng(34.14674473904, -117.71546434191));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'LA VERNE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LA VERNE CLASS D<br />SFC-2700');
    

// LANCASTER CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('glmsE~rppU^gb@~Aab@~Cwa@~Ega@~Gq`@zIu_@vKu^pMq]fOg\\|PyZlReY|SoWhUsUpVuStWuQtXoOpYiMjZ_K~ZuHl[iFx[{C~[kAb\\>~[lAx[zCl[hF|ZtHhZ`KpYhMtXpOtWtQnVtSfUrU|SnWlRdYzPvZfOd\\nMn]vKt^zIt_@|Gn`@~Eda@~Cta@~A`b@^db@_@db@_B`b@_Dta@_Fda@}Gn`@{It_@wKt^oMn]gOd\\{PvZmRdY{SnWgUtUoVvSsWtQuXpOqYjMiZ`K}ZvHm[hFy[|C_\\nAc\\>_\\kAy[yCm[gF_[uHkZ_KqYiMuXoOuWsQqVuSiUsU}SmWoReY}PwZgOg\\qMq]wKu^{Iu_@_Hq`@aFga@aDwa@_Bab@_@gb@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.674338750288, -118.29973201115), new google.maps.LatLng(34.807882740305, -118.13804703862));
    polygon.altLow  = 0;
    polygon.altHigh = 4800;
    polygon.desc    = 'LANCASTER CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LANCASTER CLASS D<br />SFC-4800');
    

// LEMOORE NAS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}fh}Ejdc{Uh@wm@|Bqm@pEam@bHml@tJok@dMkj@pOai@|Qog@bTwe@hV{c@hXwa@dZo_@~[a]r]mZ`_@wWl`@}Tpa@}Qpb@}Njc@yK~c@sHld@mEvd@eBxd@>vd@fBld@nE~c@vHjc@zKnb@~Npa@~Qj`@|T`_@vWp]nZ|[`]dZl_@hXva@fVxc@bTve@zQlg@pO~h@bMhj@tJlk@bHhl@pE~l@|Blm@h@tm@g@tm@}Blm@oE~l@cHhl@sJlk@cMhj@qO~h@{Qlg@cTve@gVxc@gXva@eZn_@}[`]q]nZa_@xWk`@~Toa@`Rob@~Nic@|K_d@vHmd@pEwd@hByd@@wd@eBmd@mE_d@sHkc@yKqb@}Nqa@}Qm`@{Tc_@wWs]mZ_\\_]gZm_@iXwa@iVyc@eTwe@}Qog@sOai@eMkj@uJok@cHkl@qEam@}Bqm@i@wm@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.246274286863, -120.05941668931), new google.maps.LatLng(36.419835563693, -119.84502942664));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'LEMOORE NAS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LEMOORE NAS CLASS D<br />SFC-2700');
    

// LEWISTON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{{mzGdreiU^aj@`Byi@bDmi@dFyh@dH}g@bJ}f@`Lue@zMgd@rOub@hQ{`@|R}^lT{\\xUsZ`WgXfXwUhYcSdZmP~ZsMr[yJb\\{Gn\\}Dt\\}Av\\>t\\~An\\~Db\\|Gr[zJ|ZvMdZnPfYdSfXxU`WhXvUrZjTz\\zR|^hQz`@rOrb@zMdd@~Kre@bJxf@dHzg@dFth@bDhi@`Bvi@^|i@_@|i@aBvi@cDhi@eFth@eHzg@cJzf@_Lre@yMfd@sOrb@iQz`@{R|^kTz\\wUtZaWhXeXxUgYfSeZnP}ZvMs[zJc\\~Gm\\~Du\\`Bw\\@u\\{Ao\\{Dc\\{Gs[wJ_[sMeZmPiYcSgXwUcWgXyUsZmT{\\}R}^iQ{`@uOub@{Mgd@aLue@cJ}f@eH}g@eFwh@eDmi@cByi@_@aj@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.306417695424, -117.11418448165), new google.maps.LatLng(46.443025931253, -116.91692816112));
    polygon.altLow  = 0;
    polygon.altHigh = 3900;
    polygon.desc    = 'LEWISTON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LEWISTON CLASS D<br />SFC-3900');
    

// LIVERMORE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m_neFt_pfV^sc@~Amc@~Cac@~Eqb@~Gya@zI}`@vK}_@pMu^fOk]zP{[lReZ|SmXhUoVpVoTtWkRtXcPpY{MhZoK|ZaIl[qFx[aD~[oA`\\>~[pAx[bDl[rF|Z`IhZnKpYzMtXdPrWjRnVnTfUnVzSlXlRdZzPx[fOh]nMt^vKz_@zI|`@|Gxa@~Enb@~C~b@~Ajc@^pc@_@pc@_Bjc@_D~b@_Fnb@}Gxa@{I|`@uKz_@oMt^gOh]{Px[mRdZ{SlXgUpVoVnTsWlRuXdPqYzMiZpK}ZbIm[rFy[bD_\\pAa\\>_\\oAy[_Dm[qF}Z_IiZmKqYyMuXcPuWkRqVoTiUoV}SmXoReZ}Py[gOk]qMu^wK}_@{I}`@_Hya@_Fqb@aDac@_Bmc@_@sc@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.626593952063, -121.90421732351), new google.maps.LatLng(37.760071959129, -121.73633954919));
    polygon.altLow  = 0;
    polygon.altHigh = 2900;
    polygon.desc    = 'LIVERMORE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LIVERMORE CLASS D<br />SFC-2900');
    

// LOMPOC CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kdlsEzd}~U`@{d@fBwd@lDkd@pFyc@rHac@tJeb@tLaa@rNy_@nPm^fR{\\|Se[nUiY|ViWhXgUpYaSrZwPp[kNj\\}K`]kIr]yF~]gDd^qAf^>d^rA~]fDp]zF`]lIj\\|Kp[lNrZxPnY`ShXfU|VjWnUhY|Sb[fRx\\nPj^rNx_@tL`a@tJbb@rH~b@pFvc@lDhd@fBrd@`@xd@a@xd@gBrd@kDhd@oFvc@sH~b@uJbb@uL`a@sNx_@mPj^gRz\\{Sd[oUhY}VjWiXfUoY`SsZxPq[lNk\\~Ka]lIq]zF_^hDe^tAg^>e^qA_^eDs]yFa]kIk\\{Kq[kNsZwPqYaSiXgU_WiWoUiY}Sc[gR{\\oPm^sNy_@uLaa@wJcb@uHac@qFyc@mDkd@gBud@a@{d@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.657941770385, -120.66383905576), new google.maps.LatLng(34.80150182855, -120.49005119792));
    polygon.altLow  = 0;
    polygon.altHigh = 2900;
    polygon.desc    = 'LOMPOC CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LOMPOC CLASS D<br />SFC-2900');
    

// LONG BEACH CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w`zmEzncpU`@od@fBid@lD}c@pFkc@rHub@tJwa@tLu`@rNo_@nPa^fRq\\|S{ZnUaY~VaWhX_UpYyRrZqPp[eNj\\wK`]iIr]wF~]eDd^qAh^>d^rA~]dDr]xF`]hIj\\xKp[fNrZrPnYzRhX~T|V`WnU~X|SxZfRn\\nP`^rNl_@tLt`@tJva@rHrb@pFhc@lDzc@fBfd@`@ld@a@ld@gBfd@kDzc@oFjc@sHrb@uJva@uLt`@sNl_@mP`^gRp\\{SzZoU`Y}VbWiX`UoYzRsZrPq[fNk\\xKa]jIq]xF_^fDe^rAi^>e^qA_^cDs]wFa]gIm\\wKq[eNsZqPqYyRiX_U_WaWoU_Y}SyZgRq\\oPa^sNm_@wLu`@wJwa@uHub@qFkc@mD}c@gBid@a@od@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.745986630549, -118.23762800266), new google.maps.LatLng(33.889568089867, -118.06570668197));
    polygon.altLow  = 0;
    polygon.altHigh = 2600;
    polygon.desc    = 'LONG BEACH CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LONG BEACH CLASS D<br />SFC-2600');
    

// LOS ALAMITOS AAF CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('estmEr_poU`@od@fBid@lD}c@pFkc@rHub@tJwa@tLu`@rNm_@nPa^fRq\\|S{ZnU_Y~VaWhX_UpYyRrZqPp[eNj\\wK`]iIr]wF~]eDd^qAh^>d^rA~]dDr]xF`]hIj\\xKp[fNrZpPnYzRhX~T|V`WnU~X|SxZfRn\\nP`^rNl_@tLt`@tJva@rHrb@pFhc@lDzc@fBfd@`@ld@a@ld@gBfd@kDzc@oFhc@sHrb@uJva@uLt`@sNl_@mP`^gRn\\{SzZoU`Y}V`WiX`UoYzRsZrPq[fNk\\xKa]jIq]xF_^fDe^rAi^>e^qA_^cDs]wFa]gIm\\wKq[eNsZqPqYyRiX_U_WaWoU_Y}SyZgRo\\oPa^sNm_@wLu`@wJwa@uHub@qFkc@mD}c@gBid@a@od@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.718208529119, -118.13787800838), new google.maps.LatLng(33.861790636071, -117.9660122314));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'LOS ALAMITOS AAF CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LOS ALAMITOS AAF CLASS D<br />SFC-2500');
    

// MEDFORD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qd`bGbp}lV^eg@`B_g@bDsf@dF_f@dHge@bJid@`Lcc@zMya@rOi`@hQu^|R{\\lT{ZxUyXbWqVfXgThYyQdZiO~ZuLr[_Jb\\iGn\\oDt\\wAx\\>t\\xAn\\rDb\\jGr[`J~ZvLdZjOhYzQfXhT`WrVxUxXjTzZ|Rx\\hQr^rOh`@zMva@`L`c@bJdd@dHde@dF|e@bDnf@`B|f@^bg@_@bg@aB|f@cDnf@eF|e@eHde@cJfd@_L`c@{Mva@sOh`@iQr^{Rz\\kT|ZyUxXaWrVgXhTgYzQeZjO_[vLs[bJc\\jGo\\rDu\\xAy\\>u\\uAo\\oDc\\gGs[_J_[uLgZgOiYyQgXgTcWqVyUyXmT{Z}R{\\kQs^uOi`@{Mya@aLcc@eJgd@eHge@eF_f@eDsf@cB_g@_@eg@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.303869659212, -122.96462934165), new google.maps.LatLng(42.440573969206, -122.780372096));
    polygon.altLow  = 0;
    polygon.altHigh = 3800;
    polygon.desc    = 'MEDFORD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'MEDFORD CLASS D<br />SFC-3800');
    

// MESA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('so|jEz{hiTkrR?cB{BmDsEkDwEgD{EeD}EaDaF}CeF{CgFwCkFsCoFoCqFmCuFiCwFeC{FaC}F}B_GyBcGuBeGqBgGmBiGkBkGgBoGcBqG_BsG{AuGuAwGqAwGmAyGiA{GeA}GaA_H}@_Hy@aHu@cHq@cHk@eHg@eHc@eH_@gH[gHWgHQiHMiHIiHEiHAiH@qHDiHHiHLiHPiHVgHZgH^gHb@eHf@eHj@eHn@cHt@cHx@aH|@_H`A_HdA}GhA{GlAyGpAwGtAwGxAuG|AsG`BqGdBoGhBkGlBiGpBgGtBeGxBcG|B_G`C}FdC{FhCwFlCuFnCqFrCoFvCkFzCiF|CeF`DaFdD}EfD{EjDwElDsEpDoErDkEvDgExDeE|DaE~D}DbEyDdEsDfEoDjEkDlEgDnEcDpE_DrE{CtEuCxEqCzEmC|EgC~EcC`F_CbFyBbFuBdFqBfFkBhFgBjFaBjF}AlFwAnFsAnFmApFiApFcArF_ArFy@tFu@tFo@tFi@vFe@vF_@vF[vFUxFQxFKxFExFAxF@xFFxFJxFPvFTvFZvF`@vFd@tFj@tFn@tFt@rFx@rF~@pFbApFhAnFnAnFrAlFxAjF|AjF`BhFfBfFjBdFpBbFtB`FzB`F~B~EbC|EhCzElCxEpCtEtCrEzCpE~CnEbDlEfDhEjDfEnDdEtDbExD~D|D|D`ExDdEvDfErDjEpDnElDrEjDvEfDzEbD|E`D`F|CdFxCfFvCjFrCnFnCpFjCtFhCvFdCxF`C|F|B~FxBbGtBdGpBfGlBhGhBjGdBlG`BnG|ApGxArGtAtGpAvGlAxGhAzGdA|G`A|G|@~Gx@`Ht@`Hn@bHj@bHf@dHb@dH^fHZfHVfHPfHLhHHhHDhH@hHAhHEhHIhHMhHQfHUfH[fH_@fHc@dHg@dHk@bHo@bHu@`Hy@`H}@~GaA|GeA|GiAzGmAxGqAvGuAtGyArG}ArGaBpGeBlGiBjGmBhGqBfGuBdGyBbG}B~FaC|FeCzFiCvFkCtFoCpFsCnFwCjFyCfF}CdFaD`FcD|EgDzEkDvEmDrE{BpC'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.389042202009, -111.78958333333), new google.maps.LatLng(33.532623626213, -111.64268223711));
    polygon.altLow  = 0;
    polygon.altHigh = 3400;
    polygon.desc    = 'MESA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'MESA CLASS D<br />SFC-3400');
    

// MISSOULA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('otx}G|hjwT`@um@hBmm@nD_m@tFil@zHkk@|Jgj@~L}h@~Nmg@zPue@tRwc@jTsa@~Uk_@nW}\\zXkZbZuWd[yTd\\}Q~\\{Nt]wKf^sHr^mEz^eB|^>z^fBr^nEf^vHt]zK~\\~Nd\\~Qd[zT`ZtWxXlZlW|\\|Uj_@jTra@rRtc@xPre@|Nhg@~Lzh@|Jdj@xHhk@tFdl@nDzl@hBhm@`@pm@a@pm@iBhm@oDzl@uFdl@yHhk@}Jdj@}Lzh@}Njg@yPre@sRvc@iTra@}Uj_@mW~\\yXlZaZvWe[|Te\\~Q_]~Nu]zKg^vHs^pE{^hB}^@{^cBs^kEg^sHu]wK_]{Ne\\{Qg[yTcZsW{XkZoW}\\_Vk_@kTsa@uRwc@{Pue@_Okg@_M}h@_Kgj@{Hkk@wFil@qD_m@iBmm@c@um@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.843093409711, -114.19746344968), new google.maps.LatLng(46.989683427249, -113.98364931588));
    polygon.altLow  = 0;
    polygon.altHigh = 5700;
    polygon.desc    = 'MISSOULA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'MISSOULA CLASS D<br />SFC-5700');
    

// MODESTO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('knaeFf|faV`@me@dBge@hD{d@jFid@lHqc@lJsb@jLqa@fNg`@`P{^xQg]lSq[~TuYjVuWtWqUzXiS~Y_QzZqNt[aLj\\qIz\\}Ff]iDl]sAp]>l]tAf]jDz\\~Fj\\pIt[bLzZrN|Y~PzXjStWpUjVtW|TtYlSn[vQf]`Px^fNf`@jLna@lJpb@lHnc@jFfd@fDxd@dBbe@`@he@_@he@cBde@gDxd@kFfd@kHnc@kJpb@kLna@gNf`@aPx^wQf]kSp[}TtYkVtWuWpU{XjS}Y`Q{ZrNu[bLi\\rI{\\~Fg]jDm]tAq]>m]sAg]gD{\\}Fk\\oIu[aL}ZqN_Z_Q}XiSwWqUmVsW_UsYmSo[yQg]aPy^gNg`@kLoa@mJsb@mHqc@kFid@iD{d@eBge@a@me@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.555756159438, -121.04250133308), new google.maps.LatLng(37.695909674726, -120.86638893583));
    polygon.altLow  = 0;
    polygon.altHigh = 2600;
    polygon.desc    = 'MODESTO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'MODESTO CLASS D<br />SFC-2600');
    

// MOJAVE, CA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ou{tE`rroUnoDzcGf~B?rCbItBhGpBlGlBnGhBpGdBrG`BtG|AvGxAxGtAzGpA|GlA~GhA`HdA`H`AbH|@dHx@fHt@fHn@hHj@hHf@jHb@jH^jHZlHVlHPlHLlHHnHDnH@nHAnHEnHInHMlHQlHUlH[lH_@jHc@jHg@jHk@hHo@hHu@fHy@fH}@dHaAbHeAbHiA`HmA~GqA|GuAzGyAxG}AvGaBtGeBrGiBpGmBnGqBlGuBhGyBfG}BdGaC`GeC~FiC|FkCxFoCvFsCrFwCnFyClF}ChFaDdFcDbFgD~EkDzEmDvEqDrEsDnEwDjEyDhE}DdE_E~DaEzDeEvDgErDiEnDmEjDoEfDqE`DsE|CuExCwEtC{EnC}EjC_FfCaF`CaF|BcFvBeFrBgFlBiFhBkFdBkF~AmFxAoFtAoFnAqFjAqFdAsF`AsFz@uFt@uFp@uFj@wFf@wF`@wFZwFVyFPyFJyFFyF@yFAyFEyFKyFQwFUwF[wFa@wFe@uFk@uFo@uFu@sF{@sF_AqFeAqFiAoFoAoFuAmFyAkF_BkFcBiFiBgFmBeFsBcFwBcF}BaFaC_FeC}EkC{EoCyEsCwEyCsE}CqEaDoEgDmEkDkEoDgEsDeEwDcE{D_E_E}DcEyDgEwDkEsDoEqDsEmDwEkD{EgD_FeDcFaDeF}CiF{CmFwCoFsCsFoCwFmCyFiC}FeC_GaCaG}BeGyBgGuBiGqBmGmBoGkBqGgBsGcBuG_BwG{AyGuA{GqA}GmA_HiAaHeAcHaAcH}@eHy@gHu@gHq@iHk@iHg@kHc@kH_@mH[mHWmHQoHMoHIoHEoHAoH@wHDoHHoHLoHPoHVmHZmH^mHb@kHf@kHj@iHp@iHt@gHx@gH|@eH`AcHdAcHhAaHlA_HpA}GtA{GxAyG|AwG`BuGdBsGhBqGlBoGpBmGtBiGxBgG|BeG`CaGdC_GhC}FlCyFnCwFrCsFvCoFzCmF|CiF`DeFdDcFfD_FjD{ElDwEpDsErDoEvDkExDgE|DcE~D_EbE{DdEwDfEsDjEoDlEkDnEgDpEaDrE}CvEyCxEsCzEoC|EkC~EeC`FaCbF}BbFwBdFsBfFmBhFiBjFcBjF_BlFyAnFuAnFoApFkApFeArF_ArF{@tFu@tFq@tFk@vFe@vFa@vF[vFUxFQxFKxFExFAxF@xFFxFJxFPvFVvFZvF`@vFd@tFj@tFp@|Dv@'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.986535262683, -118.23815028803), new google.maps.LatLng(35.130130546745, -118.06351633859));
    polygon.altLow  = 0;
    polygon.altHigh = 4800;
    polygon.desc    = 'MOJAVE, CA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'MOJAVE, CA CLASS D<br />SFC-4800');
    

// MOUNTAIN HOME CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('edifGbjfbUl@oy@lCgy@lFux@jIyw@fLuv@`Ogu@xQss@lTuq@~Voo@lYam@t[mj@z]sg@z_@qd@ta@ia@jc@}]zd@kZdf@uVhg@}Rfh@_O|h@aKli@_Gvi@}Bzi@@vi@bCli@dG|h@dKdh@dOfg@`Sbf@xVxd@nZhc@~]ra@ja@x_@pd@x]rg@r[lj@jY~l@|Vlo@jTpq@vQns@~Nbu@dLnv@hIrw@lFnx@lC`y@n@hy@m@hy@mC`y@kFnx@iIrw@eLnv@_Obu@wQns@kTpq@}Vlo@iY`m@s[lj@y]rg@y_@rd@sa@ja@ic@~]yd@nZcf@xVgg@`Seh@dO}h@fKmi@dGwi@dC{i@@wi@}Bmi@_G}h@_Kgh@_Oig@{Ref@uV{d@kZkc@{]ua@ia@{_@qd@{]qg@w[mj@mYam@_Woo@mTuq@yQqs@aOgu@gLuv@kIyw@mFsx@oCgy@o@oy@?K'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.94526141742, -116.00651518916), new google.maps.LatLng(43.141959110906, -115.73848687029));
    polygon.altLow  = 0;
    polygon.altHigh = 5500;
    polygon.desc    = 'MOUNTAIN HOME CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'MOUNTAIN HOME CLASS D<br />SFC-5500');
    

// MOUNTAIN VIEW CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yoocFralgVbCpLhBpIlBnIrBlIvBhIzBfI`CdIdC`IhC~HlCzHpCxHvCtHzCpH~CnHbDjHfDfHjDbHnD~GrDzGvDvGzDrG~DnGbEjGfEfGjE`GlE|FpExFtEtFxEnFzEjF~EdF`F`FdFzEhFvEjFpElFlEpFfErF`EvF|DxFvDzFpD|FjD`GdDbG`DdGzCfGtChGnCjGhClGbCnG|BpGvBrGpBrGjBtGdBvG~AvGxAxGrAzGlAzGfA|G~@|Gx@|Gr@~Gl@~Gf@~G`@`HZ`HR`HL`HF`H@`HA`HI`HO`HU`H[~Ga@~Gg@~Go@|Gu@|G{@|GaAnDWl@vIf@rHb@tH^tHZtHVvHPvHLvHHvHDvH@vHAvHEvHIvHMvHQvHUvH[tH_@tHc@tHg@rHk@rHo@pHu@pHy@nH}@lHaAlHeAjHiAhHmAfHqAdHuAdHyAbH}A`HaB|GeBzGiBxGmBvGqBtGuBrGyBnG}BlGaChGeCfGiCbGkC`GoC|FsCzFwCvFyCrF}CpFaDlFcDhFgDdFkD`FmD~EqDzEsDvEwDrEyDnE}DjE_EdEaE`EeE|DgExDiEtDmEpDoEjDqEfDsEbDuE|CwExC{EtC}EnC_FjCaFdCaF`CcFzBeFvBgFpBiFlBkFfBkFbBmF|AoFvAoFrAqFlAqFfAsFbAsF|@uFv@uFr@uFl@wFf@wF`@wF\\wFVyFPyFLyFFyF@yFAyFEyFKyFQwFWwF[wFa@wFg@uFm@uFq@uFw@sF}@sFaAqFgAqFmAoFqAoFwAmF}AkFaBkFgBiFkBgFqBeFuBcF{BcF_CaFeC_FiC}EoC{EsCyEyCwE}CsEaDqEgDoEkDmEoDkEuDgEyDeE}DcEaE_EeE}DiEyDoEwDsEsDwEqD{EmD_FkDaFgDeFeDiFaDmF}CqF{CsFwCwFsC{FoC}FmCaGiCeGeCgGaCiG}BmGyBoGuBsGqBuGoBwGkByGgB}GcB_H_BaH{AcHuAeHqAgHmAiHiAiHeAkHaAmH}@oHy@oHu@qHq@sHk@sHg@uHc@uH_@uH[wHWwHQwHMwHIyHEyHAyH@aIDyHHyHLwHPwHVwHZwH^uHb@uHf@uHj@sHp@sHt@qHx@oH|@oH`AmHdAkHhAiHlAiHpAgHtAeHxAcH|AaHbB_HfB}GhByGlBwGpBuGtBsGxBoG|BmG`CkGdCgGhCeGlCaGnC}FrC{FvCwFzCsF|CqF`DmFdDiFfDeFjDaFlD_FpD{ErDwEvDsExDoE|DkE~DeEbEaEdE}DfEyDjEuDlEoDnEkDpEgDrEcDvE}CxEyCzEsC|EoC~EkC`FeCbFaCbF{BdFwBfFqBfD_A'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.343475210112, -122.13835268395), new google.maps.LatLng(37.487079465438, -121.96394444444));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'MOUNTAIN VIEW CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'MOUNTAIN VIEW CLASS D<br />SFC-2500');
    

// NAPA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gfthFd~iiV`@we@dBqe@fDce@jFqd@lHyc@lJ}b@jLya@fNq`@`Pc_@xQo]lSw[|T{YjV{WtWwUzXoS|YcQzZuNt[eLj\\sIz\\_Gf]iDl]sAp]>l]tAf]jDz\\`Gh\\tIt[fLzZvN|YdQzXnStWvUjVzW|TzYlSv[vQn]`P`_@fNn`@jLva@lJzb@lHvc@jFnd@fD`e@dBle@`@re@_@re@cBle@gD`e@kFnd@kHxc@kJzb@kLva@gNn`@aP`_@wQn]kSv[}TzYkVzWuWvU{XnS}YdQ{ZvNu[fLi\\tI{\\`Gg]lDm]vAq]>m]sAg]iD{\\_Gk\\sIu[eL}ZuN_ZcQ}XoSuWuUkV{W_U{YmSw[yQo]aPa_@gNo`@kLya@mJ}b@mHyc@kFqd@iDce@eBoe@a@we@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.143263170734, -122.36959354654), new google.maps.LatLng(38.283402659214, -122.19207451035));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'NAPA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'NAPA CLASS D<br />SFC-2500');
    

// NORTH LAS VEGAS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ect{E|`l~TkC|FoCxFsCvFwCrFyCnF}ClFaDhFcDdFgD`FkD~EmDzEqDvEsDrEwDnEyDjE}DfE_EbEaE~DeEzDgEtDiEpDmElDoEhDqEdDsE~CuEzCwEvCyEpC}ElC_FhC_FbCaF~BcFxBeFtBgFnBiFjBiFdBkF`BmFzAoFvAoFpAqFjAqFfAsF`AsFz@uFv@uFp@uFl@wFf@wF`@wF\\wFVwFPyFJyFFyF@yFAyFEyFKwFQwFUwF[wFa@wFe@uFk@uFq@uFu@sF{@sFaAqFeAqFkAoFqAoFuAmF{AkF_BkFeBiFiBgFoBeFsBcFyBcF}BaFcC_FgC}EmC{EqCyEuCuE{CsE_DqEcDoEiDmEmDkEqDgEuDeEyDcE_E_EcE}DgEyDkEwDoEsDsEqDwEmD{EkD_FgDaFeDeFaDiF}CmF{CoFwCsFsCwFoCyFmC}FiC_GeCcGaCeG}BiGyBkGuBmGqBqGmBsGkBuGgBwGcByG_B{GyA}GuA_HqAaHmAcHiAeHeAgHaAiH}@iHy@kHu@kHq@mHk@oHg@oHc@oH_@qH[qHWqHQsHMsHIsHEsHAsH@sHD{HHsHLsHPsHVqHZqH^qHb@oHf@oHj@oHn@mHt@kHx@kH|@iH`AiHdAgHhAeHlAcHpAaHtA_HxA}G|A{G`ByGdBwGhBuGlBsGpBqGtBmGxBkG|BiG`CeGdCcGhC_GjC}FnCyFrCwFvCsFzCoFpE_IrbKxh@|BRlC`@lCd@jCh@jCj@jCn@hCp@hCt@hCv@fCz@fC|@dC~@dCbAbCdAbChA`CjA`CnA~BpA~BrA|BvAzBxAzBzAxB~AvB`BvBbBtBfBrBhBpBjBpBlBnBpBlBrBjBtBhBvBfBxBdB|BdB~BbB`C`BbC~AdC|AfCzAhCxAjCvAlCtAnCrApCpArCnArClAtCjAvCfAxCdAzCbAzC`A|C~@~C|@`Dz@`Dx@bDt@dDr@dDp@fDn@fDl@hDh@hDf@jDd@jDb@jD`@lD\\lDZnDXnDVnDRnDPpDNpDJpDHpDFpDDpD@pD>pD?pDApDEpDGpDIpDKpDOpDQpDSnDWnDYnD[nDUhCvBlInCfKtCbKzC~J~C|JdDxJjDtJnDpJtDlJzDhJ~DdJdE`JhE|InExIrErIvEnI|EjI`FdIdF`IjFzHpCfEcDzG'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.152166666667, -115.28548570851), new google.maps.LatLng(36.284250900269, -115.13958333333));
    polygon.altLow  = 0;
    polygon.altHigh = 4500;
    polygon.desc    = 'NORTH LAS VEGAS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'NORTH LAS VEGAS CLASS D<br />SFC-4500');
    

// OGDEN HILL AFB CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_hjzF~yajTrCiGvCeGxCaG|C}F`DyFbDuFfDsFjDoFlDkFpDeFrDaFvD}ExDyE|DuE~DqE`EkEdEgEfEcEhE_ElEyDnEuDpEoDrEkDtEeDvEaDzE{C|EwC~EqC~EmC`FgCbFaCdF}BfFwBhFqBhFmBjFgBlFaBnF{AnFwApFqApFkArFeArF_AtF{@tFu@tFo@vFi@vFc@vF]vFWvFQxFMxFGxFAxF@xFFvFLvFRvFXvF^vFb@vFh@tFn@tFt@tFz@rF`ArFdApFjApFpAnFvAlF|AlF`BjFfBhFlBhFrBfFvBdF|BbFbC`FfC~ElC|EpCzEvCxE|CvE`DtEfDrEjDpEnDnEtDlExDhE~DfEbEdEfE`ElE~DpE|DtExDxEvD|ErD`FpDdFlDhFjDlFfDpFbDtF`DxF|C|FxC`GvCdGrCfGnCjGjCnGhCpGdCtG`CvG|BzGxB|GtB`HpBbHlBdHhBhHdBjH`BlH|AnHxApHtArHpAtHlAvHhAxHdAzH`A|H|@~Hx@~Ht@`In@`Ij@bIf@dIb@dI^dIZfIVfIPfILfIHhIDhI@hIAhIEhIIhIMfIQfIUfI[fI_@dIc@dIg@dIk@bIo@`Iu@`Iy@~H}@~HaA|HeAzHiAxHmAvHqAtHuArHyApH}AnHaBlHeBjHiBhHmBdHqBbHuB`HyB|G}BzGaCxGeCtGgCpGkCnGoCjGsCfGwCdGyC`G}C|FaDxFcDtFgDrFkDnFmDjFqDfFsD`FwD|EyDxE}DtE_EpEaElEeEfEgEbEiE~DmExDoEtDqEpDsEjDuEfDwE`DyE|C{EvC}EpC_FlCaFfCcFbCeF|BgFvBiFrBiFlBkFfBmF`BmF|AoFvAqFpAqFjAsFfAsF`AsFz@uFt@uFn@wFh@wFb@wF^wFXwFRwFLyFFyF@yFAyFGyFKwFQwFWwF]wFc@wFi@uFo@uFu@cFq@yzG}v[|DuI'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.051916429701, -112.06786739235), new google.maps.LatLng(41.182555555556, -111.87824366593));
    polygon.altLow  = 0;
    polygon.altHigh = 7800;
    polygon.desc    = 'OGDEN HILL AFB CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'OGDEN HILL AFB CLASS D<br />SFC-7800');
    

// OGDEN-HINCKLEY AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('arazFt|~jT}DzIsChGwCdGyC`G}C|FaDxFcDvFgDrFkDnFmDjFqDfFsDbFwD|EyDxE}DtE_EpEaElEeEfEgEbEiE~DmExDoEtDqEpDsEjDuEfDwE`DyE|C{EvC}ErC_FlCaFfCcFbCeF|BgFvBiFrBiFlBkFfBmFbBmF|AoFvAqFpAqFjAsFfAsF`AsFz@uFt@uFn@wFh@wFb@wF^wFXwFRwFLyFFyF@yFAyFGyFKwFQwFWwF]wFc@wFi@uFo@uFu@uFy@sF_AsFeAqFkAqFqAoFwAoF{AmFaBkFgBiFmBiFqBgFwBeF}BcFaCaFgC_FmC_FqC}EwC{E{CwEaDuEeDsEkDqEoDoEuDmEyDiE_EgEcEeEgEcEmE_EqE}DuEyDyEwD}EsDaFqDgFmDkFkDoFgDsFeDwFaDyF}C}FyCaGwCeGsCiGoCkGkCoGiCsGeCuGaCyG}B{GyB_HuBaHqBcHmBgHiBiHeBkHaBmH}AqHyAsHuAuHqAwHmAyHiA{HeA{HaA}H}@_Iy@aIu@aIq@cIk@eIg@eIc@eI_@gI[gIWiIQiIMiIIiIEiIAiI@sIDiIHiILiIPiIViIZgI^gIb@eIf@eIj@eIn@cIt@aIx@aI|@_I`A}HdA{HhA{HlAyHpAwHtAuHxAsH|AqH`BoHdBkHhBiHlBgHpBeHtBaHxB_H|B{G`CyGdCuGhCsGjCoGnCkGrCiGvCeGxCaG|C}F`DyFbDwFfDsFjDoFlDkFpDgFrDcFvD}ExDyE|DuE~DqE`EmEdEgEfEcEhE_ElEyDnEuDpEoDrEkDtEeDvEaDzE{C|EwC~EqC~EmC`FgCbFaCdF}BfFwBhFqBhFmBjFgBlFaBlF{AnFwApFqApFkArFeArF_AtF{@tFu@tFo@vFi@vFc@vF]vFWvFQvFMxFGxFAxF@xFFvFLvFRvFXvF^vFb@vFh@tFn@tFt@vEn@xzGzv['), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.137130555556, -112.10713429297), new google.maps.LatLng(41.267800735878, -111.91731009847));
    polygon.altLow  = 0;
    polygon.altHigh = 7800;
    polygon.desc    = 'OGDEN-HINCKLEY AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'OGDEN-HINCKLEY AIRPORT CLASS D<br />SFC-7800');
    

// OLYMPIA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k}a~G`ocmV^mi@~Agi@~Cyh@~Eeh@|Gkg@zIkf@vKee@nMwc@fOeb@zPm`@lRo^zSm\\fUgZnV}WrWmUrX{RpYePhZmM|ZsJj[wGv[yD|[{A`\\>|[~Av[|Dj[xGzZtJfZnMnYfPrX|RrWnUnV|WfUfZzSl\\jRn^zPl`@dObb@nMtc@tKbe@zIhf@|Ghg@~Ebh@~Cvh@~Abi@^ji@_@ji@_Bbi@_Dvh@_Fbh@}Ghg@yIhf@uKbe@oMvc@eOdb@yPl`@kRn^{Sn\\eUfZmV|WsWnUsX|RoYhPgZpM{ZvJk[zGw[|D}[~Aa\\@}[{Aw[yDm[wG}ZsJiZmMqYePsX{RsWmUoV{WgUgZ{Sm\\mRo^{Pm`@gOeb@oMwc@wKee@{Ikf@_Hkg@_Feh@aDyh@_Bgi@_@mi@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.903923974128, -123.00034222904), new google.maps.LatLng(47.037186359721, -122.80577039311));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'OLYMPIA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'OLYMPIA CLASS D<br />SFC-2700');
    

// OXNARD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('eqbpEfkhvUheP{LpoGfrHCtKEjHIjHMjHQhHUhH[hH_@hHc@fHg@fHk@dHo@dHu@bHy@bH}@`HaA~GeA~GiA|GmAzGqAxGuAvGyAtG}ArGaBpGeBnGiBlGmBjGqBhGuBfGyBbG}B`GaC~FeCzFgCxFkCvFoCrFsCnFwClFyChF}CfFaDbFcD~EgDzEiDxEmDtEqDpEsDlEwDhEyDdE}D`E_E|DaExDeEtDgEpDiElDkEhDoEdDqE~CsEzCuEvCwErCyElC{EhC}EdC_F~BaFzBcFvBeFpBgFlBiFfBiFbBkF|AmFxAmFrAoFnAqFhAqFdAsF~@sFz@sFt@uFp@uFj@uFd@wF`@wFZwFTwFPwFJwFFyF@yFAyFEwFKwFQwFUwF[wF_@uFe@uFk@uFo@sFu@sFy@sF_AqFcAqFiAoFoAmFsAmFyAkF}AiFcBiFgBgFmBeFqBcFuBaF{B_F_C}EeC{EiCyEmCwEqCuEwCsE{CqE_DoEcDmEiDiEmDgEqDeEuDaEyD_E}D}DaEyDeEwDiEsDmEqDqEmDuEkDyEgD{EcD_FaDcF}CgFyCiFwCmFsCoFoCsFkCwFiCyFeC{FaC_G}BaGyBeGuBgGqBiGmBkGiBmGeBoGaBsG}AuGyAwGuAyGqAyGmA{GiA}GeA_HaAaH}@aHy@cHu@eHq@eHk@gHg@gHc@gH_@iH[iHWiHQkHMkHIkHEkHAkH@sHDkHHkHLkHPkHTiHZiH^iHb@gHf@gHj@gHn@eHt@eHx@cH|@aH`AaHdA_HhA}GlA{GpAyGtAyGxAwG|AuG`BsGdBqGhBmGlBkGpBiGtBgGxBeG|BaG`C_GtCaJ'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.129166666667, -119.29345386299), new google.maps.LatLng(34.272481553435, -119.1575));
    polygon.altLow  = 0;
    polygon.altHigh = 2000;
    polygon.desc    = 'OXNARD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'OXNARD CLASS D<br />SFC-2000');
    

// PALM SPRINGS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_a|mEdbbfU`@od@fBid@lD}c@pFkc@rHub@tJya@tLu`@rNo_@nPa^fRq\\|S{ZnUaY~VaWhX_UpYyRrZqPp[eNj\\yK`]iIr]wF~]eDd^qAh^>d^rA~]dDr]xF`]hIj\\xKp[fNrZrPnYzRhX~T|V`WnU~X|SzZfRn\\nP`^rNl_@tLt`@tJva@rHrb@pFjc@lDzc@fBfd@`@ld@a@ld@gBfd@kDzc@oFjc@sHrb@uJva@uLt`@sNl_@mP`^gRp\\{SzZoU`Y}VbWiX`UoYzRsZrPq[fNk\\xKa]jIq]xF_^fDe^rAi^>e^qA_^cDs]wFa]gIm\\wKq[eNsZqPqYyRiX_U_WaWoU_Y}S{ZgRq\\oPa^sNo_@wLu`@wJwa@uHub@qFkc@mD}c@gBid@a@od@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.75626452811, -116.59208273244), new google.maps.LatLng(33.89984574774, -116.42014084122));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'PALM SPRINGS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PALM SPRINGS CLASS D<br />SFC-3000');
    

// PALMDALE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sqxrEvjvoU`@{d@fBud@lDid@pFwc@rH_c@tJcb@tLaa@rNy_@nPk^fRy\\|Sc[nUiY|ViWhXgUpY_SrZwPp[kNj\\{K`]kIr]yF~]eDd^qAf^>d^rA~]fDp]zF`]lIj\\|Kp[jNrZvPnY`ShXfU|VhWnUfY|Sb[fRx\\nPj^rNv_@tL~`@tJ`b@rH|b@pFtc@lDfd@fBrd@`@xd@a@xd@gBrd@kDfd@oFtc@sH~b@uJ`b@uL~`@sNv_@mPj^gRx\\{Sb[oUhY}VhWiXfUoY`SsZvPq[lNk\\|Ka]lIq]zF_^hDe^tAg^>e^qA_^eDs]yFa]kIk\\{Kq[iNsZwPqY_SiXeU_WiWoUgY}Sc[gRy\\oPk^sNy_@uL_a@wJcb@uH_c@qFwc@mDid@gBud@a@{d@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.557662810062, -118.17123436102), new google.maps.LatLng(34.701225234416, -117.99765589115));
    polygon.altLow  = 0;
    polygon.altHigh = 5000;
    polygon.desc    = 'PALMDALE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PALMDALE CLASS D<br />SFC-5000');
    

// PALO ALTO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wdxcFrlthVmDyBuCiBuCmBsCqBqCsBoCwBmCyBmC}BkCaCiCcCgCgCeCiCcCmCaCoC_CqC}BuC{BwCyB{CwB}CuB_DqBaDoBeDmBgDkBiDiBkDeBmDcBqDaBsD_BuD{AwDyAyDwA{DuA}DqA_EoAaEkAaEiAcEgAeEcAgEaAiE_AiE{@kEy@mEu@mEs@oEo@qEm@qEi@sEg@sEc@sEa@uE]uE[wEWwEUwEQwEOyEKyEIyEEyECyE?yE>_FByEDyEHyEJyENyEPwETwEVwEZwE\\uE`@uEb@sEf@sEh@sEl@qEn@qEr@oEt@mEx@mEz@kE|@iE`AiEbAgEfAeEhAcEjAcEnAaEpA_ErA}DvA{DxAyDzAwD~AuD`BsDbBqDdBoDhBkDjBiDlBgDnBeDpBaDrB_DvB}CxB{CzBwC|BuC~BqCuAsIbqGxyCcoE`mN'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.451138888889, -122.1705), new google.maps.LatLng(37.511110857366, -122.06666666667));
    polygon.altLow  = 0;
    polygon.altHigh = 1500;
    polygon.desc    = 'PALO ALTO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PALO ALTO CLASS D<br />SFC-1500');
    

// PALO ALTO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qtqcFn~dhVdz@z]jfCfsI_CfEeBlDiBjDkBhDmBfDoBdDqB`DsB~CwB|CyBzC{BvC}BtC_CpCaCnCcClCeChCgCfCiCbCkC`CkC|BmCzBoCvBqCrBsCpBuClBuChBwCfByCbB{C~A{C|A}CxA}CtA_DpAaDnAaDjAcDfAcDbAeD`AeD|@gDx@gDt@gDp@iDl@iDh@iDf@kDb@kD^kDZkDVkDRkDNmDJmDFmDBmD@mD?mDCmDGmDKkDOkDSkDWkD[kD_@kDa@iDe@iDi@iDm@gDq@gDu@gDy@eD{@eD_AcDcAcDgAaDkAaDoA_DqA_DuA}CyA{C}A{C_BcCqAboEamN'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.42, -122.17772440728), new google.maps.LatLng(37.484444444444, -122.09144444444));
    polygon.altLow  = 0;
    polygon.altHigh = 2000;
    polygon.desc    = 'PALO ALTO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PALO ALTO CLASS D<br />SFC-2000');
    

// PASCO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yrhyG|gtvUmEj@uFr@uFl@wFf@wF`@wFZwFTwFNwFHwF@wFAwFGwFMwFSwFYwF_@wFg@uFm@uFs@uFy@sF_AsFeAsFkAqFqAqFwAoF}AmFcBmFiBkFoBiFuBiF{BgFaCeFgCcFmCaFsC_FyC}E_D{EeDyEiDwEoDuEuDsE{DqE_EoEeEmEiEiEoEgEuEeEyEaE_F_EcF}DgFyDmFwDqFsDuFqD{FmD_GkDcGgDgGcDkGaDqG}CuGyCyGwC}GsC_HoCcHkCgHiCkHeCoHaCqH}BuHyBwHuB{HqB}HmBaIiBcIeBgIaBiI}AkIyAmIuAoIqAsImAuIiAwIeAwIaAyI}@{Iy@}Iu@_Jq@_Jk@aJg@aJc@cJ_@cJ[eJWeJQeJMgJIgJEgJAgJ@qJDgJHgJLgJPeJTeJZeJ^cJb@cJf@aJj@aJn@_Jt@_Jx@}I|@{I`AyIdAyIhAwIlAuIpAsItAoIxAmI|AkI`BiIdBgIhBcIlBaIpB_ItB{HxBwH|BuH`CqHdCoHhCkHjCgHnCcHrC_HvC}GxCyG|CuG`DqGbDmGfDgGjDcGlD_GpD{FrDwFvDqFxDmF|DiF~DcF`E_FdEyEfEuEhEoElEkEnEeEpE_ErE{DtEuDvEoDxEiDzEeD|E_D~EyC`FsCbFmCdFgCfFaChF{BhFuBjFqBlFkBlFeBnF}ApFwApFqArFkArFeArF_AtFy@tFs@tFm@vFg@vFa@vFYvFSvFMvFGvFAvF@vFFvFNvFTvFZvF`@vFf@tFl@tFr@tFx@rF`ArFfArFlApFrAnFxAnF~AlFdBlFjBjFpBhFvBhF|BfFbCdFhCbFnC`FrC~ExC|E~CzEdDxEjDvEnDtEtDrEzDpE~DnEdEjEjEhEnEfEtEdExE`E~E~DbFzDhFxDlFvDpFrDvFpDzFlD~FhDbGfDfGbDjG`DnG|CtGxCvGvCzGrC~GnCbHjCfHfCjHdClH`CpH|BtHxBvHtBzHpB|HlB`IhBbIdBdI`BhI|AjIxAlItAnIpApIlArIhAtIdAvI`AxI|@zIx@|It@|In@~Ij@~If@`Jb@bJ^bJZbJTdJPdJLdJHdJDdJ@dJAdJEdJIdJMdJQdJUdJ[bJ_@bJc@bJg@`Jk@`Jo@~Is@|Iy@|I}@zIaAxIeAvIiAtImArIqApIuAnIyAlI}AjIaBhIeBdIiBbImB`Iw@dDmBmB}A}A_B{AaByAaBuAcBsAcBqAeBmAeBkAgBiAgBgAgBcAiBaAiB_AkB{@kBy@kBu@mBs@mBq@mBm@oBk@oBi@oBe@oBc@oB_@qB]qBYqBWqBSqBQqBOqBKsBIsBEsBCsB?sB>sBBsBDsBHqBJqBLqBPqBRqBVqBXqB\\oB^oBb@oBd@oBf@oBj@mBl@mBp@mBr@kBt@kBx@kBz@iB~@iB`AgBbAgBfAgBhAeBjAeBlAcBpAcBrAaBtAaBvA_BzA}A|A}A~A{A`B{AbByAfBwAhBwAjBuAlBsAnBsApBqArBoAtBoAvBmAxBkAzBiA|BgA~BgA`CeAbCcAdCaAfC_AhC_AhC}@jC{@lCy@nCw@nCu@pCs@rCq@rCq@tCo@vCm@vCk@xCi@xCg@zCe@|Cc@|Ca@|C_@~C]~C[`DY`DW`DUbDSbDQbDObDMdDKdDIdDGdDEdDCdDAjD?dD>dD@dDBdDDdDFdDHdDJdDLdDNbDPbDRbDTbDV`DX`DZ`D\\~C^~C`@|CPbB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.192816798992, -119.22216380715), new google.maps.LatLng(46.336071182701, -119.01561390285));
    polygon.altLow  = 0;
    polygon.altHigh = 2900;
    polygon.desc    = 'PASCO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PASCO CLASS D<br />SFC-2900');
    

// PENDLETON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ifvuG|_|tUsIpDsJnxHmuJ}ZrJquHaDaCsEiDqEoDoEsDmEyDkE_EgEcEeEiEcEmEaEsE}DwE{D{EyDaFuDeFsDiFoDmFmDsFiDwFgD{FcD_GaDcG}CgGyCkGwCoGsCsGoCwGmC{GiC}GeCaHaCeH}BgH{BkHwBmHsBqHoBsHkBwHgByHcB{H_B_I{AaIwAcIsAeIoAgIkAiIgAkIcAmI_AoI{@qIw@qIs@sIo@uIk@uIg@wIc@wI_@yIYyIUyIQ{IM{II{IE{IA{I@eJD{IH{IL{IP{ITyIXyI\\yIb@wIf@wIj@uIn@uIr@sIv@qIz@qI~@oIbAmIfAkIjAiInAgIrAeIvAcIzAaI~A_IbB{HfByHjBwHnBsHrBqHvBmHzBkH|BgH`CeHdCaHhC}GlC{GnCwGrCsGvCoGxCkG|CgG`DcGbD_GfD{FhDwFlDsFnDoFrDiFtDeFxDaFzD{E|DwE`EsEbEmEdEiEfEcEhE_ElEyDnEuDpEoDrEiDtEeDvE_DxEyCzEsC|EoC~EiC~EcC`F}BbFwBdFsBdFmBfFgBhFaBhF{AjFuAjFoAlFiAlFcAnF}@nFw@nFq@pFk@pFe@pF_@pFYrFSrFMrFGrFArF@rFFrFLpFRpFXpF^pFd@pFj@nFp@nFv@nF|@lFbAlFhAjFnAjFtAhFzAhF`BfFfBdFlBdFrBbFxB`F~B~EbC~EhC|EnCzEtCxExCvE~CtEdDrEhDpEnDnEtDlExDhE~DfEbEdEhEbElE~DrE|DvEzDzEvD`FtDdFrDhFnDnFlDrFhDvFfDzFbD~F~CbG|CfGxCjGvCnGrCrGnCvGjCxGhC|GdC`H`CbH|BfHxBjHvBlHrBpHnBrHjBtHfBxHbBzH~A|HzA~HvAbIrAdInAfIjAhIfAjIbAlI~@lIz@nIv@pIr@rIn@rIj@tIf@tIb@vI\\vIXxITxIPxILxIHzIDzI@zIAzIEzIIzIMxIQxIUxIYxI]vIc@vIg@tIk@tIo@rIs@rIw@pI{@nI_AlIcAlIgAjIkAhIoAfIsAdIwAbI{A`I_B|HcBzHgBxHkBtHoBrHsBpHwBlHyBjH}BfHaCdHeC`HiC|GkCxGoCvGsCrGuCnGyCjG}CfG_DbGcD~FgDzFiDvFmDrFoDnFsDhFuDdFwD`F{D|E}DvE_ErEcElEeEhEgEbEiE~DkExDoEtDqEnDsEjDuEdDwE~CyEzC{EtC}EnC'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.62496302167, -118.98369444444), new google.maps.LatLng(45.765036110327, -118.7414472693));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'PENDLETON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PENDLETON CLASS D<br />SFC-4000');
    

// PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ebamErbbkT`@ie@hBce@pDwd@vFed@zHmc@~Jqb@~Lma@~Ne`@zPw^tRe]lTm[`VsYnWsWzXoUbZgSf[}Pf\\qN`]aLv]oIh^}Ft^gD|^sA~^>|^tAt^hDh^|Fv]pI`]bLf\\pNf[~PbZhSzXnUnWrW~UrYjTl[tRd]zPv^~Nb`@~Lja@~Jnb@zHjc@vFbd@pDtd@hB`e@`@fe@a@fe@iB`e@oDtd@uFbd@{Hjc@}Jnb@_Mla@_Ob`@{Pv^uRd]kTl[_VrYoWrW{XnUcZhSg[~Pg\\pNa]bLw]pIi^~Fu^jD}^tA__@>}^sAu^gDi^{Fy]oIc]aLg\\oNg[}PeZgS}XoUqWqWaVqYmTm[wRe]}Pw^_Oe`@aMma@_Kob@{Hmc@wFed@qDwd@iBce@c@ie@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.614871072446, -112.17032839962), new google.maps.LatLng(33.761794721354, -111.9946729804));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS D<br />SFC-4000');
    

// PHOENIX-GOODYEAR MUNICIPAL AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kthkEtm{lTV_YfA{XvBsXfDgXvEwWdGcWpHkVzIqUdKqTlLoSrMiRtNaQtOuOrPiNnQwLfReK|RqInS{G~ScFhTkDrTqBvTw@xT>vTx@rTrBhTjD~SdFnSzG|RpIfRdKnQvLrPhNtOtOtN`QpMhRlLnSdKpTzInUpHjVbGbWvEvWfDfXvBrXfAzXV~XW~XgAzXwBrXgDfXuEvWcGbWqHjV{InUeKpTmLnSqMhRuN`QuOvOsPhNoQxLgRdK}RpIoSzG}SdFiTlDsTrBwTx@yT>wTw@sTqBkTkD_TcFoS{G}RqIgReKoQwLuPgNuOuOuNaQsMiRmLoSeKqT}IqUqHkVeGcWwEwWgDgXwBsXgA{XW_Y?C'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.372687816239, -112.43581059401), new google.maps.LatLng(33.472867335533, -112.31641257388));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'PHOENIX-GOODYEAR MUNICIPAL AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PHOENIX-GOODYEAR MUNICIPAL AIRPORT CLASS D<br />SFC-3000');
    

// POCATELLO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cdkeGvefnTb@ok@jBik@tD{j@zFej@`Iki@fKih@hM_g@jOqe@hQ{c@bSab@zTa`@nV{]`Xq[lYcYvZqVz[ySz\\aQv]eNl^eK~^eHj_@cEr_@_Bt_@>r_@bBj_@dE|^fHl^fKt]fNz\\bQz[zStZpVlYbY~Wp[nVz]zT``@bS~a@fQzc@hOne@hM|f@fKdh@`Ifi@zFbj@rDvj@jBdk@b@jk@c@jk@kBdk@sDvj@{Fbj@aIfi@eKdh@iM|f@iOne@gQzc@aS`b@yT``@oVz]_Xr[mYdYuZrVy[|Sy\\bQu]fNm^hK}^hHk_@fEs_@bBu_@@s_@_Bk_@cE__@eHm^eKw]cN{\\_Q{[ySwZoVmYcYaXq[qV{]{Ta`@cSab@iQ{c@kOqe@iM_g@gKgh@cIki@}Fej@uD{j@mBik@c@ok@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.838319294963, -112.69699809566), new google.maps.LatLng(42.988346387078, -112.49300348992));
    polygon.altLow  = 0;
    polygon.altHigh = 6900;
    polygon.desc    = 'POCATELLO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'POCATELLO CLASS D<br />SFC-6900');
    

// POINT MUGU NAWS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gzhoErpqvUqoGgrHqUcaQjfC}{BpCyA|EiC~EeC`F_CbF{BdFwBdFqBfFmBhFgBjFcBjF}AlFyAnFsAnFoApFiApFeArF_ArFy@tFu@tFo@vFk@vFe@vF_@vF[vFUxFQxFKxFExFAxF@xFFxFJxFPvFTvFZvF`@vFd@tFj@tFn@tFt@rFz@rF~@pFdApFhAnFnAnFrAlFxAjF|AjFbBhFfBfFlBdFpBbFvBbFzB`F~B~EdC|EhCzElCxErCtEvCrEzCpE`DnEdDlEhDjElDfEpDdEtDbExD~D|D|D`ExDdEvDhErDlEpDpElDtEjDxEfD|EdD~E`DbF|CfFzChFvClFrCpFnCrFjCvFhCxFdC|F`C~F|B`GxBdGtBfGpBhGlBjGhBlGdBpG`BrG|AtGxAvGtAxGpAxGlAzGhA|GdA~G`A`H|@`Hx@bHt@dHn@dHj@fHf@fHb@fH^hHZhHVhHPjHLjHHjHDjH@jHAjHEjHIjHMjHQjHUhH[hH_@hHc@fHg@fHk@fHo@dHu@dHy@bH}@`HaA`HeA~GiA|GmAzGqAzGuAxGyAvG}AtGaBrGeBpGiBlGmBjGqBhGuBfGyBdG}B`GaC~FeC|FiCxFkCvFoCrFsCpFwClFyChF}CfFaDbFcD~EgD|EkDxEmDtEqDpEsDlEwDhEyDdE}D`E_E|DcExDeEtDgEpDiElDmEhDoEdDqE`DsEzCuEvCyErC{EnC}EhC_FdCaF`CcFzBcFvBeFpBgFlBiFfBkFbBkF|AmFxAoFrAoFnAqFhAqFdAsF~@sFz@uFt@uFp@uFj@wFd@wF`@wFZwFVyFPyFJyFFyF@yFAyFEyFKyFQwFUwF[}GM'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.048442599584, -119.20720576393), new google.maps.LatLng(34.176388888889, -119.03446086432));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'POINT MUGU NAWS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'POINT MUGU NAWS CLASS D<br />SFC-3000');
    

// PORTLAND-HILLSBORO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('agkuGvrlmV`@mj@dBgj@fDyi@jFei@lHih@lJig@jLaf@fNsd@`P_c@vQea@lSg_@|Tc]jV{ZtWoXzX}U|YiSzZsPt[yMh\\{Jx\\}Gd]}Dl]}An]>l]`Bd]`Ex\\`Hh\\~Jr[zMxZtP|YjSxX~UrWnXhVzZ|Tb]jSf_@vQda@~O|b@fNpd@hL~e@jJdg@jHfh@jF`i@fDti@dBbj@`@hj@_@hj@cBbj@gDti@iF`i@kHfh@kJdg@iL~e@eNpd@_P|b@wQda@kSf_@{Tb]iV|ZsWnXyX~U{YjSyZtPs[zMi\\~Jy\\`He]`Em]`Bo]@m]}Ae]}Dy\\}Gi\\{Ju[wM{ZqP}YiS{X}UuWoXkV{Z}Tc]mSg_@yQea@aP_c@gNsd@kLaf@mJgg@mHih@kFei@iDyi@eBgj@a@mj@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.470297013341, -123.04925145287), new google.maps.LatLng(45.610257683018, -122.8501945375));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'PORTLAND-HILLSBORO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND-HILLSBORO CLASS D<br />SFC-2700');
    

// PORTLAND-TROUTDALE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cxfuGzspjVsDyDyDcEwDgEuDkEqDqEoDuEmDyEiD}EgDaFeDeFaDkF_DoF{CsFyCuFuCyFsC}FoCaGkCeGiCiGeCkGaCoG_CsG{BuGwByGuB{GqB_HmBaHiBcHeBgHcBiH_BkH{AmHwAqHsAsHoAuHkAwHgAyHeA{HaA{H}@}Hy@_Iu@aIq@aIm@cIi@cIe@eIa@eI]gIYgIUgIQiIMiIIiIEiIAiI@sIDiIHiILiIPiITgIXgI\\gI`@eId@eIh@cIl@cIp@aIt@aIx@_I|@}H`A{HdA{HfAyHjAwHnAuHrAsHvAqHzAmH~AkHbBiHdBgHhBcHlBaHpB_HtB{GvByGzBuG~BsG`CoGdCkGhCiGjCeGnCaGrC}FtCyFxCwFzCsF~CoF`DkFdDgFfDaFhD}ElDyEnDuEpDqEtDmEvDgExDcEzD_E|DyD`EuDbEoDdEkDfEeDhEaDjE{ClEwCnEqCpEmCpEgCrEaCtE}BvEwBvEqBxEmBzEgBzEaB|E{A~EwA~EqA`FkA`FeA`F_AbFy@bFu@dFo@dFi@dFc@dF]dFWfFQfFMfFGfFAfF@fFFfFLfFRdFXdF^dFb@dFh@dFn@bFt@bFz@`F`A`FdA`FjA~EpA~EvA|E|AzE`BzEfBxElBvErBvEvBtE|BrEbCpEfCnElCnEpClEvCjE|ChE`DfEfDdEjDbEnD~DtD|DxDzD~DxDbEvDfErDlEpDpEnDtElDxEhD|EfD`FbDfF`DjF~CnFzCrFxCtFtCxFpC|FnC`GjCdGhCfGdCjG`CnG~BpGzBtGvBxGrBzGpB|GlB`HhBbHdBfHbBhH~AjHzAlHvAnHrApHnArHjAtHfAvHbAxH`AzH|@|Hx@~Ht@~Hp@`Il@bIh@bId@dI`@dI\\dIXfITfIPfILhIHhIDhI@hI?hIEhIIhIMhIQfIUfIYfI]dIa@dIe@dIi@bIm@bIq@`Iu@~Hy@~H}@|H_AzHcAxHgAvHkAtHoArHsApHwAnH{AlH_BjHaBhHeBfHiBbHmB`HqB|GsBzGwBxG{BtG_CpGaCnGeCjGiChGkCdGoC`GqC|FuCxFwCtF{CrF}CnFaDjFcDfFgD`FiD|EmDxEoDtEqDpEsDlEwDfEyDbE{D~D}DxD_EtDcEpDeEjDgEfDiE`DkE|CmEvCoErCoElCqEfCsEbCuE|BwEvBwErByElB{EfB{E`B}E|A_FvA_FpAaFjAaFfAaF`AcFz@cFt@cFn@eFh@eFb@eF^eFXqFTyFkE{FkE}FcE_G}DcGwDeGqDgGkDiGcDkG}CmGwCoGoCoGiCqGaCsG{BuGuBwGmBwGgByG_ByGyA{GqA{GiA}GcA}G{@_Hu@_Hm@_Hg@_H_@aHWaHQyIK'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.482523989128, -122.49583333333), new google.maps.LatLng(45.615808557964, -122.30626173487));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'PORTLAND-TROUTDALE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND-TROUTDALE CLASS D<br />SFC-2500');
    

// PRESCOTT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m_csEj}cmTn@{s@pCss@pFcs@pIir@nLiq@jOap@bRon@xTyl@lWyj@zYsh@f\\gf@l^uc@l`@}`@hb@_^`d@}Zpe@wWzf@mT`h@_Q~h@oMti@}Ifj@gFpj@sBtj@>pj@tBfj@jFti@~I|h@pM~g@`Qzf@nTne@xW~c@~Zhb@`^l`@|`@j^tc@d\\ff@zYrh@jWvj@xTvl@bRln@hO|o@lLdq@pIdr@pF~r@pCns@n@vs@o@vs@oCns@qF~r@oIdr@mLdq@iO|o@aRln@yTvl@kWxj@yYrh@e\\ff@k^tc@k`@~`@ib@`^_d@~Zoe@xW{f@pT_h@bQ}h@rMui@`Jgj@jFqj@vBuj@@qj@qBgj@gFui@{I_i@oMah@_Q}f@mTqe@wWad@}Zkb@_^o`@}`@m^uc@g\\gf@}Ysh@mWyj@{Twl@eRon@kO_p@oLiq@qIir@qFas@qCss@o@{s@?I'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.554311980438, -112.54072333365), new google.maps.LatLng(34.754630818345, -112.29844521671));
    polygon.altLow  = 0;
    polygon.altHigh = 7500;
    polygon.desc    = 'PRESCOTT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PRESCOTT CLASS D<br />SFC-7500');
    

// PROVO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sk`tF~{yhT^vMPbILbIHbIDbI@bIAbIEbIIbIMbIQbIUbI[`I_@`Ic@`Ig@~Hk@~Ho@|Hu@|Hy@zH}@xHaAxHeAvHiAtHmArHqApHuAnHyAlH}AjHaBhHeBfHiBdHmB`HqB~GuB|GyBxG}BvGaCtGeCpGgClGkCjGoCfGsCdGwC`GyC|F}CxFaDvFcDrFgDnFiDjFmDfFqDbFsD~EwDzEyDvE}DrE_ElEaEhEeEdEgE`EiEzDkEvDoErDqElDsEhDuEbDwE~CyExC{EtC}EnC_FjCaFdCcF`CeFzBgFtBiFpBiFjBkFdBmF`BmFzAoFtAqFpAqFjAsFdAsF~@sFx@uFt@uFn@uFh@wFb@wF\\wFXwFRwFLyFFyF@yFAyFGwFKwFQwFWwF]wFc@wFi@uFm@uFs@sFy@sF_AsFeAqFiAqFoAoFuAmF{AmF_BkFeBiFkBiFoBgFuBeF{BcF_CaFeC_FkC}EoC}EuCyEyCwE_DuEcDsEiDqEmDoEqDmEwDiE{DgE_EeEeEaEiE_EmE}DqEyDwEwD{EsD_FqDcFmDgFkDkFgDoFcDsFaDwF}CyFyC}FwCaGsCeGoCgGkCkGiCoGeCqGaCuG}BwGyB{GuB}GqB_HmBcHiBeHeBgHaBiH}AkHyAmHuAoHqAqHmAsHiAuHeAwHaAyH}@{Hy@{Hu@}Hq@_Ik@_Ig@aIc@aI_@aI[cIWcIQcIMeIIeIEeIAeI@mIDeIHeILeIPcITcIZcI^aIb@aIf@aIj@_In@_It@}Hx@{H|@{H`AyHdAwHhAuHlAsHpAqHtAoHxAmH|AkH`BiHdBgHhBeHlBcHpB_HtB}GxB{G|BwG`CuGdCqGhCoGjCkGnCgGrCeGvCaGxC}F|CyF`DwFbDsFfDoFjDkFlDgFpDcFrD_FvD{ExDwE|DqE~DmE`EiEdEeEfE_EhE{DlEwDnEqDpEmDrEiDtEcDvE_DxEyCzEuC|EoC~EkC`FeCbF_CdF{BfFuBhFqBhFkBjFeBlF_BlF{AnFuApFoApFiArFeArF_ArFy@tFs@tFm@vFi@vFc@vF]vFWvFQvFKxFGxFAxF@xFFvFLvFRvFVvF\\vFb@tFh@tFn@tFt@rFx@rF~@rFdApFjApFnAnFtAlFzAlF`BjFdBhFjBhFpBfFtBdFzBbF`C`FdC~EjC|EnCzEtCxExCvE~CtEbDrEhDfHjFg@lDe@lDc@lDa@nD_@nD]nDYpDWpDUpDSpDQrDMrDKrDIrDGrDErDAxD?rD>rD@rDDrDFrDHrDJrDLrDPrDRpDTpDVpDXpD\\nD^nD`@nDb@lDd@lDh@jDj@jDl@hDn@hDp@fDr@fDt@dDv@bDz@bD|@`D~@~C`A|CbA|CdAzCfAxChAvCjAtClArCnArCpApCrAnCtAlCvAjCxAhCzAfC|AdC~A`C~A~B`B|BbBzBdBxBfBvBhBtBhBpBjBnBlBlBnBjBnBfBpBdBrBbBrB~AtB|AvBzAvBvAxBtAxBpAzBnAzBlA|BhA~BfA~BbA~B`A`C|@`Cz@bCv@bCt@bCp@dCn@dCj@dCh@fCd@fCb@fC^|BT'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.147506423024, -111.81681306437), new google.maps.LatLng(40.290826014589, -111.62985355171));
    polygon.altLow  = 0;
    polygon.altHigh = 7000;
    polygon.desc    = 'PROVO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PROVO CLASS D<br />SFC-7000');
    

// PUEBLO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ergiFbox|Rj@ur@fCmr@`F}q@xHeq@pKep@fN}n@zPom@jSyk@vU{i@`Xwg@fZke@h\\{b@d^e`@|_@k]pa@iZ~b@eWdd@}Sfe@sPbf@eMxf@uIhg@cFrg@oBvg@>rg@rBhg@fFxf@vIbf@fMfe@tPdd@`T|b@fWna@jZ|_@j]d^d`@f\\zb@dZje@`Xtg@vUxi@hStk@xPjm@fNzn@pK`p@xH`q@`Fxq@fChr@j@pr@k@pr@eChr@_Fxq@yH`q@qKbp@eNzn@yPlm@iSvk@wUxi@_Xtg@eZje@g\\zb@c^f`@}_@j]oa@lZ}b@hWed@`Tge@vPcf@hMyf@xIig@fFsg@tBwg@@sg@oBig@aF{f@sIef@cMie@qPgd@}S_c@eWqa@iZ_`@i]g^e`@i\\{b@gZke@cXug@yU{i@kSwk@{Pom@gN}n@sKep@{Heq@aF}q@gCmr@m@ur@?I'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.195740806945, -104.6151379527), new google.maps.LatLng(38.382591037132, -104.37819721851));
    polygon.altLow  = 0;
    polygon.altHigh = 7200;
    polygon.desc    = 'PUEBLO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PUEBLO CLASS D<br />SFC-7200');
    

// RAMONA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e_aiEl_rhU^qa@~Aka@`Daa@~Eq`@~G{_@zIa_@vKa^pM}\\fOu[|PgZnRuX|S_WhUeUpViStWiQtXeOpY_MjZyJ~ZoHn[cFx[wC`\\kAb\\>`\\jAx[xCl[dF~ZnHhZxJpY`MtXdOtWhQpVhSfUdU|S~VlRtXzPdZfOr[pM|\\vK`^zI~^~Gx_@~En`@~C~`@~Aja@^na@_@na@_Bja@_D~`@_Fn`@}Gz_@{I~^wK`^oM|\\gOr[{PfZmRtX}S~VgUdUoVhSuWhQuXfOqY`MiZxJ}ZpHm[dFy[xC_\\lAc\\>a\\iAy[wCo[cF_[oHkZwJsY_MuXeOuWgQqViSiUeU}S_WoRuX}PgZgOs[qM}\\wKa^{Ia_@_H{_@aFq`@aDaa@_Bka@_@qa@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.972375838466, -116.99453081277), new google.maps.LatLng(33.105956780565, -116.83602599159));
    polygon.altLow  = 0;
    polygon.altHigh = 3800;
    polygon.desc    = 'RAMONA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'RAMONA CLASS D<br />SFC-3800');
    

// RAPID CITY ELLSWORTH AFB CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yrclG`eqsRoB~CqDzFoD~FkDdGgDhGeDlGaDpG}CtG{CxGwCzGsC~GoCbHkCfHgChHeClH_DvJ`wExa[tB`AjFdClF~BlFxBnFrBpFnBpFhBrFbBtF|AtFvAvFpAvFjAxFdAxF~@zFv@~IbAgEtQqCjLwCfL}CdLaD`LgD|KkDxKqDrKuDnK{DjK_EfKeE`KiE|JoEvJsErJwElJ}EhJaFbJeF|IiFvIoFpIsFlIwFfI{F`I_GxHcGrHgGlHkGfHmG`HqGxGuGrGyGlG{GdG_H~FcHvFeHpFiHhFkH`FmHzEqHrEsHjEuHdEyH|D{HtD}HlD_IdDaI|CcItCeInCgIfCiI~BiIvBkInBmIdBoI|AoItAqIlAqIdAsI|@sIt@sIl@sId@uI\\uIRuIJuIBuIAuIIuIQuI[uIc@sIk@sIs@sI{@qIcAqIkAoIsAoI}AmIeBkImBkIuBiI}BgIeCeImCcIuCaI}C_IeD}HkD{HsDyH{DwHcEsHkEqHqEoHyEkHaFiHiFeHoFcHwF_H}F}GeGyGkGuGsGsGyGoG_HkGgHgGmHcGsH_GyH{F_IwFeIsFkIoFqIkFwIgF}IaFcJ}EiJyEmJsEsJoEyJkE}JeEaKaEgK{DkKwDqKqDuKmDyKgD}KcDaL}CeLwCiLsCmLmCoLgCsLaCwL}ByLwB}LqB_MkBcMeBeM_BgMyAiMuAkMoAmMiAoMcAqM}@sMw@uMq@uMk@wMe@yM_@yMYyMS{MM{MG{MA{M@gNF{ML{MR{MXyM^yMd@yMj@wMp@uMv@uM|@sMbAqMhAoMnAmMtAkMxAiM~AgMdBeMjBcMpB_MvB}LzByL`CwLfCsLlCqLpCmLvCiL|CeL`DaLfD}KlDyKpDuKvDqKzDkK`EgKdEcKjE}JnEyJrEsJxEmJ|EiJ`FcJfF}IjFwInFqIrFkIvFeIzF_I~FyHbGsHfGmHjGgHnG_HrGyGtGsGxGkG|GeG~G}FbHwFdHoFhHiFjHaFnHyEpHsErHkEvHcExH{DzHsD|HmD~HeD`I}CbIuCdImCfIeChI}BjIuBjImBlIeBnI}AnIuApIkApIcArI{@rIs@rIk@tIc@tI[tIStIItIAtIBtIJtIRtIZrId@rIl@rIt@rI|@pIdApIlAnItAnI|AlIdBjIlBhItBhI|BfIdCdIlCbItC`I|C~HdD|HlDzHtDxH|DtHdErHjEpHrEnHzErLdH'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.0549, -103.24009977521), new google.maps.LatLng(44.243280648381, -102.96712233491));
    polygon.altLow  = 0;
    polygon.altHigh = 5800;
    polygon.desc    = 'RAPID CITY ELLSWORTH AFB CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'RAPID CITY ELLSWORTH AFB CLASS D<br />SFC-5800');
    

// RAPID CITY REGIONAL AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ah_lG~rqtR}vE}a[~CoJbCmHfCiHjCgHnCcHrC_HvC{GzCwG|CuG`DqGdDmGfDiGjDcGnD_GpD{FtDwFvDsFzDmF|DiF`EeFbE_FfE{EhEwElEqEnEmEpEgErEaEvE}DxEwDzEsD|EmD~EgD`FaDbF}CdFwCfFqChFkCjFeClF_CnF{BnFuBpFoBrFiBrFcBtF}AvFwAvFqAxFkAxFeAxF_AzFy@zFs@zFk@|Fe@|F_@|FY|FS|FM~FG~FA~F@~FF|FL|FT|FZ|F`@|Ff@zFl@zFr@zFx@xF~@xFdAxFjAvFpAtFvAtF|ArFbBrFhBpFnBnFtBlFzBlF`CjFfChFjCfFpCdFvCbF|C`FbD~EfD|ElDzErDxEvDtE|DrEbEpEfEnElEjEpEhEvEfEzEbE~E`EdF|DhFzDlFvDrFtDvFpDzFnD~FjDbGfDfGdDjG`DnG|CrGxCvGvCzGrC~GnCbHjCdHfChHbClH~BnH|BrHxBtHtBxHpBzHlB~HhB`IdBbI~AdIzAhIvAjIrAlInAnIjApIfArIbArI~@tIx@vIt@xIp@xIl@zIh@zIb@|I^|IZ~IV~IR~IL`JH`JD`J@`JA`JE`JI`JM`JS~IW~I[~I_@|Ic@|Ii@zIm@zIq@xIu@xIy@vI}@tIcArIgArIkApIoAnIsAlIwAjI{AhI_BdIcBbIiB`ImB~HqBzHuBxHyBtH{BrH_CnHcClHgChHkCfHoCbHsC~GwCzGyCvG}CrGaDpGeDlGgDfGkDbGoD~FqDzFuDvFwDrF{DnF}DhFaEdFcE`FgEzEiEvEkEpEoElEqEfEsEbEuE|DyEvD{ErD}ElD_FfDaFbDcF|CeFvCgFpCiFlCkFfCmF`CmFzBoFtBqFnBsFhBsFbBuF|AuFvAwFpAwFjAyFdAyF~@{Fx@{Fr@{Fl@}Ff@}F`@}FZ}FT}FN_GF_G@_GA_GG}FM}FS}FY}F_@}Fe@}Fk@{Fq@{Fy@yF_AyFeAyFkAwFqAwFwAuF}AsFcBsFiBqFoBoFuBoFyBmF_CuIiF'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.971890083295, -103.15924381547), new google.maps.LatLng(44.108972222222, -102.95575612095));
    polygon.altLow  = 0;
    polygon.altHigh = 5700;
    polygon.desc    = 'RAPID CITY REGIONAL AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'RAPID CITY REGIONAL AIRPORT CLASS D<br />SFC-5700');
    

// REDDING CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('u{tvFhlliV`@_h@fBwg@jDkg@pFwf@rH_f@tJ_e@tLyc@rNob@nP}`@fRg_@|Sm]nUm[|ViYhXaWnYuTrZeRp[sOj\\}L`]gJp]mG|]sDd^yAf^>d^zA|]tDp]nG~\\hJj\\~Lp[tOpZfRnYtTfX`W|VhYlUl[zSl]dRf_@lP|`@rNlb@tLvc@tJ|d@rH|e@pFtf@jDhg@fBtg@`@zg@a@zg@gBtg@kDhg@oFtf@sH|e@uJ|d@uLxc@qNlb@mP|`@eRf_@{Sl]mUl[}VhYgX`WoYtTqZfRo[tOk\\`M_]hJq]pG}]vDe^zAg^>e^wA}]sDq]mGa]eJk\\}Lq[sOsZeRoYsTiX_W}ViYoUm[}Sm]gRg_@oP}`@sNob@uLyc@uJ_e@uH_f@qFwf@mDkg@gBwg@a@_h@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.437178739265, -122.38723164137), new google.maps.LatLng(40.580598147733, -122.19943649139));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'REDDING CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'REDDING CLASS D<br />SFC-3000');
    

// REDMOND CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_}rmGnbmbVf@sr@zBkr@lEyq@|Gaq@lJap@zL{n@fOkm@nQuk@vSwi@xUsg@xWie@tYyb@j[c`@~\\g]l^gZv_@cWz`@{Sxa@qPrb@cMfc@sItc@aF|c@oB`d@@|c@rBtc@dFfc@vIrb@fMxa@tPx`@~St_@fWj^hZ|\\h]j[b`@rYxb@vWhe@vUrg@tSti@nQrk@dOhm@zLvn@lJ|o@|G|p@jEtq@zBdr@f@lr@g@lr@yBdr@kEtq@}G|p@kJ~o@yLvn@eOhm@oQrk@uSti@wUrg@wWhe@sYxb@i[b`@}\\h]k^jZu_@fWy`@~Sya@tPqb@fMgc@vIuc@fF}c@tBad@@}c@oBuc@aFgc@sIsb@cMya@qP{`@{Sw_@cWm^gZ_]g]k[c`@uYyb@yWie@yUsg@wSwi@qQuk@gOkm@{Lyn@mJap@}Gaq@mEyq@{Bir@i@sr@?I'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.168892911811, -121.26819271007), new google.maps.LatLng(44.338883598426, -121.03180911482));
    polygon.altLow  = 0;
    polygon.altHigh = 5600;
    polygon.desc    = 'REDMOND CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'REDMOND CLASS D<br />SFC-5600');
    

// RENTON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ebkaHv_zhVt@aOn@eLr@eLx@cL|@aL`A_LfA}KjA{KpAyKtAwKzAuK~AsKbBqKhBmKlBkKrBgKvBeKzBaK~B_KdC{JhCwJlCsJpCoJvCkJzCgJ~CcJbD_JfD{IjDwInDsIrDmIvDiIzDeI~D_IbE{HfEuHhEoHlEkHpEeHtE_HvE{GzEuG~EoG`FiGdFcGfF}FjFwFlFqFpFkFrFeFtF}ExFwEzFqE|FkE~FcEbG}DdGwDfGoDhGiDjGaDlG{CnGsCpGmCpGeCrG_CtGwBvGqBvGiBxGaBxG{AzGsAzGkA|GeA|G}@~Gu@~Gm@~Gg@~G_@`HW`HQ`HI`HA`HB`HH`HP`HX~G`@~Gf@~Gn@~Gv@|G|@|GdAzGlAzGtAxGzAxGbBvGhBtGpBtGxBrG~BpGfCnGlCnGtClGzCjGbDhGhDfGpDdGvD`G|D~FdE|FjEzFpExFvEtF~ErFdFpFjFlFpFjFvFfF|FdFbG`FhG~EnGzEtGvEzGtE~GpEdHlEjHhEnHdEtHbExH~D~HzDbIvDhIrDlInDpIjDvIfDzIbD~I~CbJfEzMwZvoI}~EtbAsh@v{@u_E?u}BpmE}_GoyCowAuyE'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.422222222222, -122.25888888889), new google.maps.LatLng(47.575555555556, -122.09300333422));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'RENTON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'RENTON CLASS D<br />SFC-2500');
    

// RIVERSIDE MUNICIPAL AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oupnEj_tkUTlAR~@R~@T~@T~@V|@V|@X|@X|@Xz@Zz@Zz@\\x@\\x@^x@^v@^v@`@v@`@t@b@t@b@r@b@r@d@r@d@p@f@p@f@n@f@n@h@n@h@l@h@l@j@j@j@j@j@h@l@h@l@f@l@f@n@d@n@d@n@b@n@b@p@`@p@`@p@^p@^r@\\r@\\r@Zr@Xr@Xt@Vt@Vt@Tt@Tt@Rt@Pv@Pv@Nv@Nv@Lv@Jv@Jv@Hv@Hv@Fv@Dx@Dx@Bx@Bx@@x@>x@>x@?x@?x@Ax@Cx@Cx@Ev@Ev@Gv@Iv@Iv@Kv@Kv@Mv@Ov@Ov@Qt@Qt@St@Ut@Ut@Wt@Wr@Yr@Yr@[r@]r@]p@_@p@_@p@a@p@a@n@c@n@c@n@e@n@e@l@g@l@g@l@i@j@i@j@k@j@k@h@m@h@m@h@o@f@o@f@o@f@q@d@q@d@s@b@s@b@s@b@u@`@u@`@w@^w@^w@^y@\\y@\\y@Z{@Z{@X{@X}@V}@V}@V}@T_AT_AR_AR_AP_APaANaANaALaALaAJcAJcAHcAHcAFcAFcADcADcABcABcA@cA@cA>cA>cA?cA?cAAcAAcACcACcAEcAEcAGcAGcAIcAIcAKcAKcAMaAMaAOaAOaAQaAQ_AS_AS_AU_AU_AW}@W}@Y}@Y}@Y{@[{@[{@]y@]y@_@y@_@w@_@w@a@w@a@u@c@u@c@s@c@s@e@s@e@q@g@q@g@o@g@o@i@o@i@m@i@m@k@k@k@k@k@i@m@i@m@g@m@g@o@e@o@e@o@c@o@c@q@a@q@a@q@_@q@_@s@]s@]s@[s@Ys@Yu@Wu@Wu@Uu@Uu@Su@Qw@Qw@Ow@Ow@Mw@Kw@Kw@Iw@Iw@Gw@Ey@Ey@Ci@EjD_D~CsCbDoCdDmCfDiChDeCjDaCjD}BlD{BnDwBpDsBrDoBtDkBvDgBvDcBxD_BzD{AzDwA|DsA~DoA~DkA`EgA`EcAbE_AbE{@dEw@dEs@dEo@fEk@fEg@fEc@hE]hEYhEUhEQhEMhEIhEEhE?hE@hEDhEHhELhEPhEThEXhE^fEb@fEf@fEj@dEn@dEr@dEv@bEz@bE~@`EbA`EfA~DjA~DnA|DrAzDvAzDzAxD~AvDbBvDfBtDjBrDnBpDrBnDvBlDzBjD|BhD`ChDdCfDhCdDlC`DnC~CrC|CvCzCxCxC|CvC`DtCbDpCfDnChDlClDjCnDfCrDdCtDbCxD~BzD|B|DzB`EvBbEtBdEpBfEnBjEjBlEhBnEdBpEbBrE~AtE|AvExAxEtAzErA|EnA~ElA~EhA`FdAbFbAdF~@dFz@fFv@hFt@hFp@jFl@jFj@lFf@lFb@nF^nF\\nFXpFTpFPpFNpFJrFFrFBrF>rF?rFCrFGrFKrFMpFQpFUpFYpF]nF_@nFc@nFg@lFk@lFm@jFq@jFu@hFw@hF{@fF_AdFaAdFeAbFiA`FkA`FoA~EsA|EuAzEyAxE}AvE_BtEcBrEeBpEiBnEkBlEoBjEqBfEuBdEwBbE{B`E}B|D_CzDcCxDeCtDgCrDkCnDmClDoChDqCfDuCbDwC`DyC|C{CxC}CvC_DrCaDnCcDlCeDhCgDdCiD`CkD~BmDzBoDvBqDrBsDnBuDjBwDfBwDbByD~A{DzA{DvA}DrA_EnA_EjAaEfAaEbAcE~@cEz@eEv@eEr@eEn@gEj@gEf@gEb@iE^iEXiETiEPiELiEHiEDiE@iE?iEEiEIiEMiEQiEUiEYiE]gEa@gEg@gEk@eEo@eEs@eEw@cE{@cE_AaEcAaEgA_EkA_EoA}DsA{DwA{D{AyD_BwDcBwDgBuDkBsDoBqDsBoDwBmD{BmD}BkDaCiDeCgDiCeDkCcDoC_DsC}CwC{CyCyC}CwCaDuCcDsCgDoCiDmCmDkCoDgCsDeCuDcCyD_C{D}B}D{BaEwBcEuBeEqBgEoBkEkBmEiBoEeBqEcBsE_BuE}AwEyAyEuA{EsA}EoA_FmAaFiAaFeAcFcAeF_AgF{@gFy@iFu@iFq@kFm@mFk@mFg@mFc@oF_@oF]qFYqFUqFQqFOsFKsFGsFCsF?sF>yFBsFFsFJsFNsFPqFTqFXqF\\qF^oFb@oFf@mFj@mFl@mFp@kFt@iFv@iFz@gF~@gFbAeFdAcFhAaFtBoI'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.893507251566, -117.51512261539), new google.maps.LatLng(34.010381076935, -117.37487735867));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'RIVERSIDE MUNICIPAL AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE MUNICIPAL AIRPORT CLASS D<br />SFC-2700');
    

// ROSWELL CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mnwjE|b_}Rf@kj@vBcj@hEui@xGai@fJgh@rLeg@|N_f@dQqd@jS}b@jUca@jWe_@dYc]zZyZl\\mXz]}Ub_@iSf`@qPda@wM~a@{Jrb@}G`c@_Ehc@}Ajc@>hc@~A~b@`Epb@~G|a@|Jda@xMf`@rPb_@jSx]|Ul\\lXzZzZbY`]hWd_@jUba@hSzb@dQnd@|N|e@rLbg@fJdh@vG~h@hEri@vB`j@f@fj@g@fj@wB`j@gEri@wG~h@eJdh@qLbg@}N|e@cQnd@iS|b@kUba@iWd_@cYb]yZzZm\\nXy]~Uc_@jSg`@rPea@zM}a@~Jqb@`H_c@`Eic@`Bkc@>ic@}Aac@}Dsb@}G_b@{Jea@wMg`@qPc_@iS{]}Um\\mX{ZyZeYa]kWe_@mUca@kS}b@eQqd@}N}e@sLeg@gJgh@yGai@iEui@yBcj@g@kj@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.21790376092, -104.62991792059), new google.maps.LatLng(33.384872895769, -104.43119474708));
    polygon.altLow  = 0;
    polygon.altHigh = 6200;
    polygon.desc    = 'ROSWELL CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'ROSWELL CLASS D<br />SFC-6200');
    

// SACRAMENTO EXECUTIVE AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('usziF`u~dVmEbDmEfCoEbCoE|BqExBsEtBuEnBwEjBwEfByE`B{E|A{EvA}ErA_FlA_FhAaFbAaF~@cFx@cFt@cFn@eFj@eFd@eF^eFZgFTgFPgFJgFFgF@gFAgFEgFKgFOgFUeF[eF_@eFe@eFi@cFo@cFs@cFy@aF}@aFcA_FgA_FmA}EqA}EwA{E{AyEaByEeBwEkBuEoBsEsBqEyBqE}BoEaCmEgCkEkCiEoCgEuCeEyCcE}CaEaD}DeD{DiDyDoDwDsDuDwDqD{DoD_EmDcEiDgEgDiEeDmEaDqE_DuE{CyEyC{EuC_FsCcFoCeFkCiFiCmFeCoFcCsF_CuF{BwFwB{FuB}FqB_GmBcGiBeGgBgGcBiG_BkG{AmGwAoGsAqGoAsGkAuGiAwGeAyGaA{G}@{Gy@}Gu@_Hq@_Hm@aHi@aHe@cHa@cH]cHYeHUeHQeHMeHIgHEgHAgH>gHDoHHgHLgHPeHTeHXeH\\eH`@cHd@cHh@aHl@aHp@_Ht@_Hx@}G|@{G`A{GdAyGfAwGjAuGnAsGrAqGvAoGzAmG~AkGbBiGdBgGhBeGlBcGpBaGtB}FvB{FzByF~BuF`CsFdCoFhCmFjCiFnCeFrCcFtC_FxC{EzCyE~CuE`DqEdDmEfDiEhDgElDcEnD_EpD{DtDwDvDsDxDoDzDiD|DeD`EaDbE}CdEyCfEuChEoCjEkClEgCnEcCpE}BpEyBrEsBtEoBvEkBxEeBxEaBzE{A|EwA|EqA~EmA~EgA`FcA`F}@bFy@bFs@bFo@dFi@dFe@dF_@dF[fFUfFOfFKfFEfFAfF@fFDfFJfFPfFTdFZdF^dFd@dFj@bFn@bFt@bFx@`F~@`FbA~EhA~ElA|ErAzEvAzE|AxE`BvEdBvEjBtEnBrEtBpExBpE|BnEbClEfCjEjChEnCfEtCdExCbE|C`E`D|DdDzDjDxDnDvDrDtDvDpDzDnD~DlDbEhDfEfDhEbDlE`DpE~CtEzCxExCzEtC~ErCbFnCdFjChFhClFdCnF`CrF~BtFzBvFvBzFtB|FpB~FlBbGhBdGdBfGbBhG~AjGzAlGvAnGrApGnArGjAtGfAvGbAxG`AxG|@zGx@|Gt@|Gp@~Gl@`Hh@`Hd@`H`@bH\\bHXdHTdHPdHLdHHdHDdH@dH?dHEdHIdHMdHQdHUdH_@jKbsBh{A}eExsKg_C{dB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.42775, -121.584), new google.maps.LatLng(38.579194456566, -121.40872535196));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'SACRAMENTO EXECUTIVE AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SACRAMENTO EXECUTIVE AIRPORT CLASS D<br />SFC-2500');
    

// SACRAMENTO MATHER CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}uwjFj|icVb@uh@jBoh@tDah@zFog@bIuf@fKue@hMod@jOcc@hQqa@bSy_@zT}]pV}[`XwYnYoWvZaUz[oRz\\{Ov]eMl^mJ~^sGj_@wDr_@yAt_@>r_@|Aj_@xD~^tGl^nJv]fMz\\|Oz[pRvZ`UlYnW`XvYnV|[zT|]bSx_@fQna@hO`c@hMld@fKre@`Ipf@zFjg@tD~g@jBjh@b@rh@c@rh@kBjh@sD~g@{Fjg@aIrf@eKre@iMld@iO`c@gQpa@cSx_@{T|]oV|[aXxYmYnWwZbU{[pR{\\~Ow]fMm^nJ__@tGk_@xDs_@|Au_@>s_@yAk_@uD__@qGm^mJw]eM{\\{O{[oRwZaUoYmWaXwYqV}[}T}]eSy_@iQqa@kOcc@kMod@gKue@cIuf@}Fmg@uDah@mBoh@c@uh@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.478818054296, -121.39304744858), new google.maps.LatLng(38.628958760199, -121.20195404436));
    polygon.altLow  = 0;
    polygon.altHigh = 2600;
    polygon.desc    = 'SACRAMENTO MATHER CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SACRAMENTO MATHER CLASS D<br />SFC-2600');
    

// SALEM CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qkoqGr|vmV^}g@~Aug@~Cig@~Euf@|G}e@zI}d@vKwc@nMmb@fO}`@zPg_@lRk]zSk[fUgYnV_WrWsTrXcRpYqOhZ}L|ZeJl[mGv[sD~[wA`\\>~[zAv[tDj[nG|ZhJhZ~LnYrOrXdRrWtTnV~VfUfYzSj[lRj]zPd_@dOz`@nMjb@tKtc@zIzd@|Gxe@~Erf@~Cdg@~Arg@^xg@_@xg@_Brg@_Dfg@_Frf@}Gze@yIzd@uKvc@oMjb@eOz`@{Pd_@kRj]{Sj[gUhYoV`WsWtTsXdRoYrOgZ~L}ZhJk[pGw[vD_\\zAa\\>_\\wAw[sDm[mG}ZeJiZ}LqYqOuXcRsWsToV_WgUgY}Sk[mRk]{Pe_@gO{`@qMmb@wKwc@{I}d@_H}e@_Fuf@aDig@_Bug@_@}g@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.842788723274, -123.09624686473), new google.maps.LatLng(44.976099386133, -122.90875459506));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'SALEM CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SALEM CLASS D<br />SFC-2700');
    

// SALINAS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gye_FzffeV`@ye@fBse@lDge@pFud@rH}c@tJ_c@tL}a@rNs`@nPe_@fRs]|S{[nU}Y|V}WhXyUnYqSrZeQp[wNj\\gL`]sIp]_G~]kDd^sAf^>d^tA|]jDp]`G`]tIj\\fLp[xNrZfQnYpShXxU|V|WnU|YzSx[fRp]lPd_@rNr`@tLza@tJ|b@rHzc@pFrd@jDde@fBpe@`@ve@a@ve@gBpe@kDde@oFrd@sHzc@uJ~b@uLza@sNr`@mPd_@gRp]{Sz[mU|Y}V|WgXxUoYpSqZfQq[xNk\\hLa]vIq]`G}]lDe^vAg^>e^sA_^iDs]_Ga]sIk\\eLq[wNsZeQqYoSiXyU_W}WoU}Y}Sy[gRq]oPe_@sNs`@uL{a@uJ_c@uH}c@qFud@mDge@gBse@a@ye@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.591575969957, -121.69540715668), new google.maps.LatLng(36.735089832086, -121.51737201662));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'SALINAS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SALINAS CLASS D<br />SFC-2500');
    

// SAN CARLOS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('spfdFzchiVnv@i{AmiA}|@NcHJyENyEPwETwEVwEZwE\\uE`@uEb@sEf@sEh@sEl@qEn@qEr@oEt@mEx@mEz@kE|@iE`AiEbAgEfAeEhAcEjAcEnAaEpA_ErA}DvA{DxAyDzAwD~AuD`BsDbBqDdBoDhBkDjBiDlBgDnBeDpBcDrB_DvB}CxB{CzBwC|BuC~BqC`CoCbCmCdCiCfCgChCcCjCaClC}BlC{BnCwBpCsBrCqBtCmBtCiBvCgBxCcBzC_BzC}A|CyA~CuA~CqA`DoA`DkAbDgAbDcAdD_AdD}@fDy@fDu@fDq@hDm@hDi@hDe@jDc@jD_@jD[jDWjDSjDOlDKlDGlDClD?lD@lDBlDFlDJjDNjDRjDVjDZjD^jDb@hDf@hDh@hDl@fDp@fDt@fDx@dD|@dD~@bDbAbDfA`DjA`DnA~CpA|CtA|CxAzC|AzC~AxCbBvCfBtChBtClBrCpBpCrBnCvBlCzBjC|BjC`ChCbCfCfCdChCfEjDc`Md~OaCoEiBkDeBoDcBqDaBsD_BuD{AwDyAyDwA{DuA}DqA_EoAaEkAcEiAcEgAeEcAgEaAiE_AiEq@uC'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.477972222222, -122.28944444444), new google.maps.LatLng(37.561055555556, -122.18697343156));
    polygon.altLow  = 0;
    polygon.altHigh = 1500;
    polygon.desc    = 'SAN CARLOS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN CARLOS CLASS D<br />SFC-1500');
    

// SAN CARLOS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('i|vcFvtzhVlAzA~BrC|BtCzBvCxBzCvB|CtB~CpBbDnBdDlBfDjBhDhBlDfBnDbBpD`BrD~AtDzAvDxAxDvAzDtA|DpA~DnA`ElAbEhAdEfAdEbAfE`AhE~@jEz@jEx@lEt@nEr@nEn@pEl@pEh@rEf@rEb@tE`@tE\\tEZvEVvETvEPxENxEJxEHxEDxEBxE>xE?xECxEExEIxEKxEOxEQxEUvEWvE[vE]tEa@tEc@tEg@rEi@rEm@pEo@pEs@nEu@nEy@lE{@jE_AjEaAhEcAfEgAdEiAdEkAbEoA`EqA~DuA|DwAzDyAxD{AvD_BtDaBrDcBpDeBnDiBlDkBhDmBfDoBdDqBbDuB~CwB|CyBzC{BvC}BtC_CrCaCnCcClCeChCgCfCiCbCkC`CmC|BoCzBoCvBqCtBsCpBuClBwCjBwCfByCbB{C`B{C|A}CxA_DtA_DrAaDnAaDjAcDfAcDbAeD`AeD|@gDx@gDt@iDp@iDl@iDh@iDf@kDb@kD^kDZkDVmDRmDNmDJmDFmDBmD@mD?mDCmDGmDKmDOmDSkDWkD[kD_@kDc@kDe@iDi@iDm@iDq@gDu@gDy@eD}@eD_AcDcAcDgAaDkAaDoA_DqA_DuA}CyA{C}A{C_ByCcBwCgBwCiBuCmBsCqBqCsBoCwBoC{BmC}BkCaCiCcCgCgCeCiCcCmCaCoC_CsC}BuC{BwCyB{CwB}CuB_DsBcDoBeDeAuCb`Me~O'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.461000833206, -122.31262719445), new google.maps.LatLng(37.549833333333, -122.20252777778));
    polygon.altLow  = 0;
    polygon.altHigh = 2000;
    polygon.desc    = 'SAN CARLOS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN CARLOS CLASS D<br />SFC-2000');
    

// SAN CLEMENTE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q{~hEhvxrU`@cd@fB_d@lDsc@pFac@rHkb@tJma@tLk`@rNe_@nPy]fRg\\|SsZnUyX~V{VhXyTpYuRrZmPp[aNl\\uK`]eIr]uF~]cDd^qAh^>d^pA~]dDr]vF`]fIj\\tKp[bNrZlPnYtRhXxT|VzVnUxX|SpZfRf\\nPv]rNb_@tLj`@tJla@rHhb@pF~b@lDpc@fB|c@`@bd@a@bd@gB|c@kDpc@qF~b@sHhb@uJla@uLj`@sNb_@mPx]gRf\\}SrZoUxX}VzViXxToYtRsZlPq[bNk\\vKa]fIs]vF_^dDe^rAi^>e^oA_^cDs]uFa]eIm\\sKs[aNsZkPqYsRiXyT_W{VoUyX}SqZgRg\\oPy]sNe_@wLk`@wJma@uHkb@qFac@mDsc@gB_d@a@cd@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.951532981806, -118.67323749664), new google.maps.LatLng(33.095132859451, -118.50287495449));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'SAN CLEMENTE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN CLEMENTE CLASS D<br />SFC-2700');
    

// SAN DIEGO BROWN FIELD MUNICIPAL CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ucseEj~eiUsmJ?{CuDiB}BgB_CeBaCcBeCaBgC_BiC}AkC{AmCyAmCwAoCsAqCqAsCoAuCmAwCkAyCiAyCgA{CeA}CaA_D_A_D}@aD{@cDy@cDu@eDs@eDq@gDo@gDk@iDi@iDg@kDe@kDa@mD_@mD]mDYoDWoDUoDQoDOoDMqDIqDGqDEqDCqD?qD>uD@qDDqDFqDHqDLqDNqDPoDToDVoDXoD\\mD^mD`@mDb@kDf@kDh@iDj@iDn@gDp@gDr@eDt@eDx@cDz@cD|@aD~@_D`A_DdA}CfA{ChAyCjAyClAwCnAuCpAsCrAqCvAoCxAmCzAmC|AkC~AiC`BgCbBeCdBcCfB_ChB}BjB{BlByBlBwBnBuBpBsBrBoBtBmBvBkBvBiBxBeBzBcB|BaB|B_B~B{A`CyA`CwAbCsAdCqAdCmAfCkAfCiAhCeAjCcAjC_AlC}@lCy@lCw@nCs@nCq@pCm@pCk@pCg@rCe@rCa@rC_@rC[rCYtCUtCStCOtCKtCItCEtCCtC?tC>tCBtCDtCHtCLtCNtCRtCTrCXrCZrC^rC`@rCd@pCf@pCj@pCl@nCp@nCr@lCv@lCx@lC|@jC~@jCbAhCdAfChAfCjAdClAdCpAbCrAxCrBdj@h|N'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.543472222222, -117.0175), new google.maps.LatLng(32.615663318836, -116.92897407389));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'SAN DIEGO BROWN FIELD MUNICIPAL CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN DIEGO BROWN FIELD MUNICIPAL CLASS D<br />SFC-3000');
    

// SAN DIEGO-GILLESPIE FIELD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ixogEtnliUsxCcuYnCkDnDsEpDoEtDkEvDgEzDcE|D_E~D{DbEwDdEsDfEoDjEkDlEgDnEcDpE}CtEyCvEuCxEqCzEkC|EgC~EcC`F}BbFyBdFuBdFoBfFkBhFeBjFaBlF}AlFwAnFsAnFmApFiArFcArF_AtFy@tFs@tFo@vFi@vFe@vF_@vF[xFUxFOxFKxFExFAxF@xFDxFJxFPxFTvFZvF^vFd@vFj@tFn@tFt@rFx@rF~@rFbApFhAnFlAnFrAlFvAjF|AjF`BhFfBfFjBdFnBdFtBbFxB`F~B~EbC|EfCzEjCxEpCvEtCrExCpE|CnEbDlEfDjEjDfEnDdErDbEvD~DzD|D~DxDbEvDfEtDjEpDnElDrEjDtEfDxEdD|E`D`F|CbFzCfFvChFrClFnCnFlCrFhCtFdCxF`CzF|B~FxB`GtBbGpBdGlBfGjBjGfBlGbBnG~ApGxArGtAtGpAvGlAvGhAxGdAzG`A|G|@|Gx@~Gt@`Hp@`Hj@bHf@bHb@bH^dHZdHVdHPfHLfHHfHDfH@fHAfHEfHIfHMfHQfHUdH[dH_@dHc@bHg@bHk@bHo@`Hu@`Hy@~G}@|GaA|GeAzGiAxGmAvGqAvGuAtGyArG}ApGaBnGeBlGiBjGmBfGqBdGuBbGyB`G}B~FaCzFeCxFiCtFmCrFoCpFsClFwChF{CfF}CbFaD`FeD|EgDxEkDtEmDrEqDnEsDjEwDfEyDbE}D~D_EzDcEvDeErDgEnDkEjDmEfDoEbDqE|CsExCwEtCyEpC{ElC}EfC_FbCaF~BcFxBeFtBeFpBgFjBiFfBkF`BkF|AmFvAoFrAoFlAqFhAsFbAsF~@sFx@uFt@uFn@wFj@wFd@wF^wFZyFTyFPyFJyFFyF@yFAyFEyFKyFOyFUwF[wF_@wFe@wFi@uFo@uFs@uFy@sF_AsFcAqFiAoFmAoFsAmFwAmF}AkFaBiFeBgFkBaEeC'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.754192381642, -117.05767906191), new google.maps.LatLng(32.878555555556, -116.88732090176));
    polygon.altLow  = 0;
    polygon.altHigh = 2400;
    polygon.desc    = 'SAN DIEGO-GILLESPIE FIELD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN DIEGO-GILLESPIE FIELD CLASS D<br />SFC-2400');
    

// SAN DIEGO MONTGOMERY FIELD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qmngE`zfjUO}p@jj@wuA?ccLqIun@rAw@tCgBtCcBvCaBxC}AzC{AzCwA|CsA|CqA~CmA`DiA`DgAbDcAbD_AdD{@dDy@dDu@fDq@fDo@hDk@hDg@hDc@hD_@jD]jDYjDUjDQjDOjDKlDGlDClD?lD>lDBlDFjDJjDNjDPjDTjDXjD\\hD`@hDb@hDf@hDj@fDn@fDp@dDt@dDx@dD|@bD~@bDbA`DfA`DhA~ClA|CpA|CrAzCvAxCzAxC|AvC`BtCbBtCfBrChBpClBnCnBlCrBjCtBjCxBhCzBfC~BdC`CbCdC`CfC~BhC|BlCzBnCxBpCtBrCrBvCpBxCnBzClB|CjB~ChB`DdBbDbBdD`BhD~AjDzAlDxAlDvAnDrApDpArDnAtDjAvDhAxDfAxDbAzD`A|D|@|Dz@~Dx@`EvAdCgl@voI{@xAiBbDkB`DmB~CoBzCsBxCuBvCwBtCyBrC{BnC}BlC_CjCaCfCcCdCeCbCgC~BiC|BkCxBmCvBoCrBqCpBqClBsCjBuCfBwCdBwC`ByC|A{CzA}CvA}CtA_DpA_DlAaDjAcDfAcDbAeD`AeD|@gDx@gDt@gDr@iDn@iDj@iDf@kDd@kD`@kD\\kDXmDTmDRmDNmDJmDFmDBmD>mD?mDCmDGmDKmDOmDQmDUkDYkD]kDa@kDc@iDg@iDk@iDo@gDq@gDu@gDy@eD}@eD_AcDcAcDgAaDiA_DmA_DqA}CsA}CwA{C{AyC}AyCaBwCeBuCgBsCkBqCmBqCqBoCsBmCwBkCyBiC}BqAmB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.768166666667, -117.19891008272), new google.maps.LatLng(32.847222222222, -117.0803031221));
    polygon.altLow  = 0;
    polygon.altHigh = 2900;
    polygon.desc    = 'SAN DIEGO MONTGOMERY FIELD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN DIEGO MONTGOMERY FIELD CLASS D<br />SFC-2900');
    

// SAN DIEGO, NORTH ISLAND NAS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('idvfEzg|jU?{uOlkFseNlCd@rF~@pFbApFhAnFlAnFrAlFvAjF|AjF`BhFdBfFjBdFnBbFtB`FxB`F|B~EbC|EfCzEjCvEnCtEtCrExCpE|CnE`DlEdDhEjDfEnDdErDbEvD~DzD|D~DxDbEvDfErDhEpDlElDpEjDtEfDxEbDzE`D~E|CbFxCdFvChFrClFnCnFjCrFhCtFdCvF`CzF|B|FxB~FtBbGpBdGlBfGhBhGdBjG`BlG|AnGxApGtArGpAtGlAvGhAxGdAxG`AzG|@|Gx@|Gt@~Gn@`Hj@`Hf@bHb@bH^bHZdHVdHPdHLdHHdHDdH@fHAfHEdHIdHMdHQdHUdH[dH_@bHc@bHg@bHk@`Ho@`Hu@~Gy@|G}@|GaAzGeAxGiAxGmAvGqAtGuArGyApG}AnGaBlGeBjGiBhGmBfGqBdGuBbGyB~F}B|FaCzFeCvFiCtFkCrFoCnFsClFwChFyCdF}CbFaD~EcDzEgDxEkDtEmDpEqDlEsDjEwDfEyDbE}D~D_EzDaEvDeErDgEnDiEjDmEdDoE`DqE|CsExCuEtCwEpC{EjC}EfC_FbCaF|BaFxBcFtBeFnBgFjBiFfBkF`BkF|AmFvAoFrAoFlAqFhAqFbAsF~@sFx@uFt@uFn@uFj@wFd@wF^wFZwFTyFPyFJyFFyF@yFAyFEyFKyFOwFUwF[wF_@wFe@uFi@uFo@uFs@sFy@sF}@qFcAqFgAoFmAoFqAmFwAgHkB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.627386285328, -117.30017070771), new google.maps.LatLng(32.722777777778, -117.13205555556));
    polygon.altLow  = 0;
    polygon.altHigh = 2800;
    polygon.desc    = 'SAN DIEGO, NORTH ISLAND NAS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN DIEGO, NORTH ISLAND NAS CLASS D<br />SFC-2800');
    

// SAN JOSE REID-HILLVIEW AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mkdcFf|ofVViZfAeZvB}YfDoYvE_YbGiXpHqWzIuVdKsUlLoTpMiStN}QtOqPrPaOnQmMfRyK|RaJnSiH|SoFhTsDpTwBvT{@xT>vTz@pTxBhTtD|SnFnShH|RbJfRxKnQlMrP`OtOpPtN|QpMhSlLnTdKrUzIrVpHpWbGhXtE|XfDnYvBzYfAbZVfZWfZgAbZwBzYgDnYuE|XcGhXoHpW{IrVeKrUkLnTqMhSuN~QuOpPsP`OoQnMgRxK}RbJoShH}SnFiTtDqTxBwTz@yT>wT{@sTwBiTsD}SoFoSiH}RaJgRyKoQmMsP_OuOqPuN}QqMiSmLoTeKsU{IsVqHqWeGiXwE_YgDoYwB}YgAeZWiZ?C'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.282998030403, -121.88237449334), new google.maps.LatLng(37.383112657484, -121.75707094097));
    polygon.altLow  = 0;
    polygon.altHigh = 2000;
    polygon.desc    = 'SAN JOSE REID-HILLVIEW AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN JOSE REID-HILLVIEW AIRPORT CLASS D<br />SFC-2000');
    

// SAN LUIS OBISPO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ehovEr~i_V`@ce@fB}d@lDqd@pF_d@rHic@tJkb@tLia@rNa`@nPs^fRa]|Si[nUoY|VoWhXkUnYeSrZ{Pp[oNj\\_L`]mIr]{F~]gDd^sAf^>d^tA~]hDp]|F`]nIj\\`Lp[nNrZzPnYdShXjU|VnWnUnY|Sh[fR~\\lPp^rN~_@tLfa@tJhb@rHfc@pF|c@lDnd@fBzd@`@`e@a@`e@gBzd@kDnd@oF|c@sHfc@uJhb@uLfa@sN~_@mPr^gR`]{Sh[oUnY}VnWgXlUoYdSsZ|Pq[nNk\\`La]nIq]|F}]hDe^tAg^>e^qA_^gDs]{Fa]mIk\\_Lq[mNsZ{PqYeSiXkU_WoWoUmY}Si[gRa]oPs^sN_`@uLga@wJkb@uHic@qF_d@mDqd@gB}d@a@ce@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.165447778672, -120.72993249737), new google.maps.LatLng(35.308995814867, -120.55506887521));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'SAN LUIS OBISPO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN LUIS OBISPO CLASS D<br />SFC-2700');
    

// SAN NICOLAS ISLAND NOLF CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}cijExsbxU`@gd@fBad@lDuc@pFec@rHmb@tJqa@tLo`@rNg_@nP{]fRk\\|SuZnU{X~V}VhX{TpYuRrZmPp[cNj\\uK`]gIr]uF~]cDd^qAh^>d^rA~]dDr]vF`]fIj\\vKp[bNrZnPnYvRhXzT|V|VnUzX|StZfRh\\nPz]rNf_@tLl`@tJna@rHjb@pFbc@lDrc@fB~c@`@dd@a@dd@gB~c@kDrc@qFbc@sHjb@uJna@uLl`@sNf_@mPz]gRh\\{StZoUzX}V|ViXzToYvRsZnPq[dNk\\vKa]fIs]vF_^dDe^rAi^>e^oA_^cDs]uFa]eIm\\uKs[cNsZmPqYuRiX{T_W}VoU{X}SuZgRi\\oP{]sNg_@wLo`@wJqa@uHmb@qFcc@mDuc@gBad@a@gd@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.167924366868, -119.54344675553), new google.maps.LatLng(33.311519249453, -119.37266569862));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'SAN NICOLAS ISLAND NOLF CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN NICOLAS ISLAND NOLF CLASS D<br />SFC-3000');
    

// SANTA FE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mv{xE~qofSf@qk@vBkk@hE}j@xGgj@fJki@rLih@|Nag@dQse@hS}c@jUcb@jWc`@dY}]zZs[l\\eYz]qVb_@{Sf`@aQda@eN~a@gKpb@eH~b@cEhc@aBjc@>fc@bB~b@dEpb@fH|a@hKda@fNd`@bQb_@|Sx]rVj\\dYxZr[bY|]hW``@jU`b@hS|c@dQpe@|N~f@rLfh@dJhi@vGdj@hExj@vBfk@f@nk@g@nk@wBfk@gExj@wGdj@eJhi@qLfh@{N~f@cQpe@iS|c@kUbb@iWb`@cY|]yZr[k\\dYy]rVa_@|Se`@bQea@fN}a@hKqb@hH_c@fEgc@bBkc@>ic@_B_c@cEqb@eH_b@eKea@eNg`@aQc_@{S{]qVm\\cY{Zs[eY}]kWa`@mUcb@kS}c@eQqe@}Nag@sLih@gJki@yGgj@iE}j@yBkk@g@qk@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.533490964381, -106.19158898451), new google.maps.LatLng(35.700396768428, -105.98730150046));
    polygon.altLow  = 0;
    polygon.altHigh = 8800;
    polygon.desc    = 'SANTA FE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA FE CLASS D<br />SFC-8800');
    

// SANTA MARIA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uzpsE~qy}UsiA|aB|C`I~BfGzBhGvBjGrBnGnBpGjBrGfBtGbBvG~AxGzAzGvA|GrA~GnA`HjAbHdAdH`AdH|@fHx@hHt@hHp@jHl@jHf@lHb@lH^nHZnHVnHPpHLpHHpHDpH@pHApHEpHIpHMpHQpHWnH[nH_@nHc@lHg@lHm@jHq@jHu@hHy@hH}@fHaAdHeAdHkAbHoA`HsA~GwA|G{AzG_BxGcBvGgBtGkBrGoBpGsBnGwBjG{BhG_CfGcCbGeC`GiC~FmCzFqCxFuCtFwCpF{CnF_DjFcDfFeDdFiD`FmD|EoDxEsDtEuDpEyDlE{DhE_EdEaE`EeE|DgExDiEtDkEpDoElDqEfDsEbDuE~CyEzC{EtC}EpC_FlCaFfCcFbCeF|BgFxBgFrBiFnBkFhBmFdBoF~AoFzAqFtAqFpAsFjAuFfAuF`AwFz@wFv@wFp@yFj@yFf@yF`@{FZ{FV{FP{FJ{FF{F@{FA{FE{FK{FQ{FU{F[yFa@yFe@yFk@wFq@wFu@wF{@uFaAuFeAsFkAsFoAqFuAoF{AoF_BmFeBkFiBiFoBiFsBgFyBeF}BcFcCaFgC_FkC}EqC{EuCyEyCwE_DsEcDqEgDoEkDmEqDiEuDgEyDeE}DaEaE_EeE{DiEyDmEuDqEsDuEoDyEmD}EiDaFeDeFcDgF_DkF{CoFyCqFuCuFqCyFmC{FiC_GgCaGcCeG_CgG{BiGwBmGsBoGoBqGkBsGgBuGcBwG_B{G{A}GwA_HsA_HoAaHkAcHgAeHaAgH}@gHy@iHu@kHq@kHm@mHg@mHc@oH_@oH[oHWqHQqHMqHIqHEqHAqH@yHDqHHqHLqHPqHVqHZoH^oHb@oHf@mHl@mHp@kHt@kHx@iH|@gH`AgHdAeHjAcHnAaHrA_HvA_HzA}G~A{GbByGfBuGjBsGnBqGrBoGvBmGzBiG~BgGbCeGfCaGhC_GlC{FpCyFtCuFxCqFzCoF~CkFbDgFdDeFhDaFlD}EnDyErDuEtDqExDmEzDiE~DeE`EaEdE}DfEyDhEuDlEqDnEkDpEgDrEcDtE_DxEyCzEuC|EqC~EkC`FgCbFcCdF}BfFyBhFsBhFoBjFiBlFeBnF_BnF{ApFuArFoArFkAtFeAtFaAvF{@vFu@vFq@xFk@xFe@xFa@zF[zFUzFQzFKzFEzFAzF@zFFzFJzFPzFVzFZxF`@xFf@xFj@vFp@vFv@vFz@tF`AtFdArFjApFpApFtAnFzAnF~AlFdBjFhBhFnB`FbBtcBeaCnsDvsF'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.825555555556, -120.54555382964), new google.maps.LatLng(34.971434381085, -120.35555555556));
    polygon.altLow  = 0;
    polygon.altHigh = 2800;
    polygon.desc    = 'SANTA MARIA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA MARIA CLASS D<br />SFC-2800');
    

// SANTA ROSA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sinjFxzqlV`@yf@fBsf@lDgf@pFse@rH{d@tJ}c@tLyb@rNoa@nP_`@fRk^|Sq\\nUsZ|VqXhXkVnYaTrZsQp[cOj\\qL`]}Ip]eG|]oDd^uAf^>d^vA|]pDp]fG`]~Ij\\rLp[dOpZtQnY`TfXjV|VpXlUrZzSp\\fRh^lP|_@rNla@tLvb@tJzc@rHxd@pFpe@jDbf@fBpf@`@vf@a@vf@gBpf@kDbf@oFpe@sHxd@uJzc@uLvb@sNla@mP~_@eRj^{Sp\\mUrZ}VpXgXjVoYbTqZtQq[dOk\\rLa]~Iq]hG}]pDe^xAg^>e^uA}]mDq]eGa]{Ik\\qLq[cOsZsQoYaTiXkV}VqXoUsZ}Sq\\gRk^oP_`@sNoa@uLwb@uJ}c@uH{d@qFse@mDgf@gBsf@a@yf@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.437431784851, -122.90402202516), new google.maps.LatLng(38.580900669314, -122.72153495812));
    polygon.altLow  = 0;
    polygon.altHigh = 2600;
    polygon.desc    = 'SANTA ROSA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA ROSA CLASS D<br />SFC-2600');
    

// SCOTTSDALE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('a~slE|o`jT`@md@fBgd@lD{c@pFic@rHsb@tJua@tLs`@rNk_@nP_^fRo\\|SyZnU_Y~V_WhX}TpYyRrZoPp[eNj\\wK`]gIr]wF~]cDd^qAh^>d^rA~]dDr]vF`]hIj\\xKp[dNrZpPnYxRhX~T|V`WnU~X|SvZfRl\\nP~]rNj_@tLp`@tJra@rHpb@pFfc@lDxc@fBdd@`@jd@a@jd@gBdd@kDxc@qFfc@sHpb@uJta@uLr`@sNj_@mP~]gRl\\{SxZoU~X}V`WiX~ToYxRsZpPq[fNk\\xKa]hIs]xF_^fDe^rAi^>e^qA_^cDs]uFa]gIm\\wKq[eNsZoPqYwRiX}T_W_WoU}X}SwZgRm\\oP_^sNk_@wLs`@wJua@uHqb@qFic@mD{c@gBgd@a@md@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.550984361258, -111.99632273617), new google.maps.LatLng(33.694570361486, -111.82478972342));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'SCOTTSDALE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SCOTTSDALE CLASS D<br />SFC-4000');
    

// BOEING FIELD/KING COUNTY CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_j|`HbodjV{GvCoGlCqGfCsG~BuGxBwGpBwGjByGbByGzA{GtA{GlA}GdA}G~@_Hv@_Hn@_Hf@_H`@aHXaHPaHJaHBaHAaHIaHOaHW_H_@_Hg@_Hm@_Hu@}G}@}GeA{GkA{GsAyG{AyGaBwGiBwGoBuGwBsG_CqGeCqGmCoGsCmG{CkGaDiGiDgGoDeGwDcG}DaGcE}FkE{FqEyFwEwF}EsFeFqFkFmFqFkFwFgF}FeFcGaFiG_FoG{EuGyE{GuE_HqEeHmEkHkEqHgEuHcE{H_E_I{DeIwDiIsDmIoDsIkDwIgD{IcD_J_DeJ{CiJwCmJqCqJmCsJiCwJeC{JaC_K{BaKwBeKsBiKmBkKiBmKeBqK_BsK{AuKuAwKqA{KkA}KgA_LcA_L}@aLy@cLs@eLo@eLi@gLe@iL_@iL[iLUkLOkLKkLEkLAkL@wLDkLJkLNkLTkLXiL^iLd@iLh@gLn@gLr@eLx@cL|@aL`A_LfA_LjA}KpA{KtAwKzAuK~AsKbBqKhBmKlBkKrBiKvBeKzBaK~B_KdC{JhCwJlCsJpCqJvCmJzCiJ~CeJbDaJfD{IjDwInDsIrDoIvDiIzDeI~D_IbE{HfEuHhEqHlEkHpEeHtE_HvE{GzEuG~EoG`FiGdFcGfF}FjFwFlFqFbEqCnwAtyE|_GnyCt}BqmEt_E?rh@w{@|~EubAqU`lGaReDs_L`gI?bxU'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.426666666667, -122.4249253049), new google.maps.LatLng(47.613291817234, -122.19916666667));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'BOEING FIELD/KING COUNTY CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'BOEING FIELD/KING COUNTY CLASS D<br />SFC-2500');
    

// SEATTLE-TACOMA INTL AIRPORT CLASS D1

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{hd`HhqciVvCvKhCtJbCxJ~B|JzB~JvBbKpBdKlBhKhBjKbBnK~ApKxArKtAtKpAvKjAxKfAzK`A|K|@~Kv@`Lr@`Ll@bLh@dLb@dL^fLXfLTfLNhLJhLDhL@hLAhLEhLKhLOhLUfLYfL_@fLc@dLi@dLm@bLs@`Lw@`L}@~KaA|KgAzKkAxKqAvKuAtKyArK_BpKcBnKiBjKmBhKqBdKwBbK{B~J_C|JcCxJiCtJmCpJqCnJuCjJyCfJ}CbJcD~IgDzIkDtIoDpIsDlIwDfI{DbI}D~HaExHeEtHiEnHmEhHqEdHsE~GwExG{ErG}EnGaFhGcFbGgF|FiFvFmFpFoFjFsFdFuF|EwFvE{FpE}FjE_GbEaG|DcGvDeGnDgGhDiGbDkGzCmGtCoGlCqGfCsG~BuGxBuGpBwGhBwGbByGzA{GtA{GlA}GdA}G~@}Gv@_Hn@_Hf@_H`@_HX_HPaHJaHBaHAaHI_HO_HW_H_@_Hg@_Hm@}Gu@}G}@}GcA{GkA{GsAyGyAyGaBwGiBuGoBuGwBsG}BqGeCoGmCmGsCmG{CkGaDiGgDgGoDeGuDaG}D_GcE}FiE{FqEyFwEuF}EkEiCcDlBgGpDiGhDkGbD_GvC?cxUr_LagI`RdDhlIu@'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.365766991272, -122.43198206986), new google.maps.LatLng(47.5, -122.2475));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'SEATTLE-TACOMA INTL AIRPORT CLASS D1';
    attachPolygonInfoBox(polygon, infoBox, 'SEATTLE-TACOMA INTL AIRPORT CLASS D1<br />SFC-3000');
    

// SPOKANE FELTS FIELD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mbmbHrpakU^aj@~Ayi@~Cki@~Ewh@|G}g@zI}f@vKue@nMgd@fOub@zP{`@lR}^zS{\\fUsZnVgXrWwUrXcSnYmPhZsM|ZyJj[{Gv[}D|[}A~[>|[~Av[~Dj[|GzZzJfZvMnYnPrXdSrWxUlVfXdUrZzSz\\jR|^zPz`@dOrb@nMdd@tKre@zIxf@|Gzg@~Eth@~Chi@~Ati@^|i@_@|i@_Bti@_Dhi@_Fth@}Gzg@yIxf@uKre@oMdd@eOrb@yPz`@kR|^{Sz\\eUrZmVhXqWxUsXdSoYnPgZvM{ZzJk[~Gw[~D}[`B_\\@}[{Aw[{Dk[{G}ZwJiZsMqYmPsXcSsWwUoVgXgUsZ{S{\\mR}^{P{`@gOub@oMgd@wKue@{I{f@_H}g@_Fwh@aDki@_Byi@_@aj@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.616432297275, -117.42110388499), new google.maps.LatLng(47.749678038278, -117.22389764507));
    polygon.altLow  = 0;
    polygon.altHigh = 4500;
    polygon.desc    = 'SPOKANE FELTS FIELD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SPOKANE FELTS FIELD CLASS D<br />SFC-4500');
    

// STOCKTON CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ijveFvysbV{iCf{C`BrKfApH`ArH|@tHx@tHt@vHp@xHl@xHf@zHb@zH^zHZ|HV|HP|HL|HH~HD~H@~HA~HE~HI~HM|HQ|HW|H[|H_@zHc@zHg@zHm@xHq@xHu@vHy@tH}@tHaArHgApHkAnHoAnHsAlHwAjH{AhH_BfHcBdHgB`HkB~GoB|GsBzGwBvG{BtG_CrGcCnGgClGkChGmCfGqCbGuC~FyC|F}CxF_DtFcDpFgDnFiDjFmDfFqDbFsD~EwDzEyDvE}DrE_EnEcEjEeEdEgE`EkE|DmExDoErDqEnDuEjDwEdDyE`D{E|C}EvC_FrCaFlCcFhCeFbCgF~BiFxBkFrBmFnBmFhBoFdBqF~AqFxAsFtAuFnAuFhAwFbAwF~@wFx@yFr@yFl@{Fh@{Fb@{F\\{FV{FR{FL}FF}F@}FA}FE}FK{FQ{FW{F]{Fa@{Fg@yFm@yFs@yFy@wF}@wFcAuFiAuFmAsFsAqFyAqF_BoFcBmFiBmFoBkFsBiFyBgF}BeFcCcFgCaFmC_FqC}EwC{E{CyEaDwEeDuEkDsEoDoEsDmEyDkE}DgEaEeEeEcEiE_EoE}DsEyDwEwD{EsD_FqDcFmDgFiDkFgDoFcDqF_DuF}CyFyC}FuC_GqCcGoCgGkCiGgCmGcCoG_CsG{BuGwByGsB{GoB}GkB_HgBcHcBeH_BgH{AiHwAkHsAmHoAoHkAqHgAqHcAsH}@uHy@wHu@wHq@yHm@yHi@{Hc@{H_@}H[}HW}HS_IM_II_IE_IA_I@gID_IH_IL_IP_IV}HZ}H^}Hb@{Hf@{Hl@yHp@yHt@wHx@wH|@uHbAsHfAqHjAqHnAoHrAmHvAkHzAiH~AgHbBeHfBcHjB_HnB}GrB{GvByGzBuG~BsGbCoGfCmGjCiGnCgGpCcGtCaGxC}F|CyF~CuFbDsFfDoFhDkFlDgFpDcFrD_FvD{ExDwE|DsE~DoEbEkEdEeEfEaEjE}DlEyDnEsDrEoDtEkDvEeDxEaDzE{C|EwC~EqC`FmCbFgCdFcCfF}BhFyBjFsBlFoBlFiBnFcBpF_BpFyArFsAtFoAtFiAvFcAvF}@xFy@xFs@xFm@zFg@zFc@zF]zFWzFQ|FK|FG|FA|F@|FFzFLzFPzFVzF\\zFb@zFh@bCtVl~A{iC|vKdzI'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.802777777778, -121.3302513854), new google.maps.LatLng(37.967007519808, -121.12888888889));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'STOCKTON CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'STOCKTON CLASS D<br />SFC-2500');
    

// TACOMA MCCHORD AFB CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}i{~GzlhkVeHwCcH_DaHeD_HmD}GuD{G{DyGcEwGkEuGqEqGyEoG_FmGgFiGmFgGuFcG{FaGaG}FiG{FoGwFuGsF{GqFaHmFiHiFoHeFuHaFyH}E_I{EeIwEkIsEqIoEuIiE{IeEaJaEeJ}DkJyDoJuDuJoDyJkD}JgDaKcDeK}CkKyCoKsCqKoCuKkCyKeC}KaCaL{BcLwBgLqBiLmBmLgBoLaBsL}AuLwAwLsAyLmA{LgA}LcA_M}@aMw@cMq@cMm@eMg@gMa@gM]gMWiMQiMKiMGiMAkM@kMFwMJiMPiMViM\\gM`@gMf@gMl@eMp@cMv@cM|@aM`A_MfA}LlA{LpAyLvAwL|AuL`BsLfBoLjBmLpBiLvBgLzBcL`CaLdC}KjCyKnCuKrCsKxCoK|CkK`DeKfDaKjD}JnDyJtDuJxDoJ|DkJ`EeJdEaJhE{IlEwIpEqItEkIxEeI|E_I`F{HdFuHhFoHlFiHpFcHrF{GvFuGzFoG|FiG`GaGbG{FfGuFhGmFlGgFnG_FpGyEtGqEvGkExGcEzG}D|GuD~GmD`HeDbH_DdHwCfHoChHgCjH_ClHyBlHqBnHiBpHaBpHyArHqArHiAtHaAtHy@tHq@vHi@vHa@vHYvHQvHIvHAvHBvHJvHRvHZvHb@tHj@tHr@tHz@rHbArHjArHrApHzAnHbBnHhBlHpBjHxBjH`ChHhCfHpCdHvCbH~C`HfD~GnD|GtDzG|DxGdEvGjErGrEpGxEnG`FjGfFhGnFfGtFbGzF`GbG|FhGxFnGvFtGrF|GnFbHlFhHhFnHdFtH`FzH|E~HxEdItEjIpEpIlEtIhEzIdE`J`EdJ|DjJxDnJrDrJnDxJjD|JfD`K`DdK|ChKxClKrCpKnCtKhCxKdC|K~B~KzBbLtBdLpBhLjBjLfBnL`ChP|aB~CeLzbPolEBcjQ|aNyHwF'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.036666666667, -122.60186111111), new google.maps.LatLng(47.227849068958, -122.3445167062));
    polygon.altLow  = 0;
    polygon.altHigh = 2800;
    polygon.desc    = 'TACOMA MCCHORD AFB CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'TACOMA MCCHORD AFB CLASS D<br />SFC-2800');
    

// TACOMA NARROWS AIRPORT CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q{f_H~`ujV~@pLbA~LfA|LlAzLrAxLvAvL|AtL`BrLfBpLlBlLpBjLvBfLzBdL`C`LdC|KjCzKnCvKtCrKxCnK|CjKbDfKfDbKjD|JpDxJtDtJxDnJ|DjJ`EfJfE`JjEzInEvIrEpIvEjI`GlKHxGLrIHrIDrI@rI?rIErIIrIMrIQrIUpIYpI]pIa@nIe@nIi@lIm@lIq@jIu@hIy@hI}@fI_AdIcAbIgA`IkA~HoA|HsAzHwAxH{AvH_BtHaBrHeBnHiBlHmBhHqBfHsBdHwB`H{B|G_CzGaCvGeCrGiCpGkClGoChGqCdGuC`GwC|F{CxF}CtFaDpFcDlFgDhFiDdFkD`FoDzEqDvEsDrEwDnEyDhE{DdE}D~D_EzDaEtDeEpDgEjDiEfDkE`DmE|CmEvCoEpCqElCsEfCuE`CwEzBwEvByEpB{EjB{EdB}E~A}ExA_FtA_FnAaFhAaFbAcF|@cFv@cFp@eFj@eFd@eF^eFXgFRgFLgFFgF@gFAgFGgFMgFSeFYeF_@eFe@eFk@cFo@cFu@cF{@aFaAaFgAaFmA_FsA_FyA}E_B{EeB{EiByEoBwEuBwE{BuEaCsEeCqEkCoEqCoEwCmE{CkEaDiEeDgEkDeEqDcEuDaE{D}D_E{DeEyDiEwDmEuDsEqDwEoD{EmDaFiDeFgDiFeDmFaDqF_DuF{CyFyC}FuCaGsCeGoCiGkCmGiCqGeCuGaCwG_C{G{B_HwBaHuBeHqBgHmBkHiBmHeBoHcBsH_BuH{AwHwAyHsA}HoA_IkAaIgAcIeAeIaAeI}@gIy@iIu@kIq@kIm@mIi@oIe@oIa@qI]qIYqIUsIQsIMsIIsIEsIAsI@}IDsIHsILsIPsITsIXqI\\qI`@qId@oIh@oIl@mIp@kIt@kIx@iI|@gI`AeIbAeIfAcIjAaInA_IrA}HvAyHzAwH~AuHbBsHdBoHhBmHlBkHpBgHtBeHvBaHzB_H~B{G`CwGdCuGhCqGjCmGnCiGrCeGtCaGxC}FzCyF~CuF`DqFbDmFfDiFhDeFlDaFnD{EpDwEtDsEvDmExDiEzDeE|D_E~D{DbEuDdEqDfEkDhEeDjEaDlE{CnEwCnEqCpEkCrEeCtEaCvE{BvEuBxEoBzEkBzEeB|E_B~EyA~EsA`FmA`FgA`FaAbF{@bFw@bFq@dFk@dFe@dF_@dFYfFSfFMfFGfFAfF@fFFfFLfFRdFXdF^dFd@dFj@bFp@bFv@bF|@`FbA`FhA`FnA~ErA|ExA|E~AzEdBzEjBxEpBvEtBvEzBtE`CrEfCpEjCnEpClEvClEzCjE`DhEfDfEjDdEpD`EtD~DzD|D~DzDdExDhEhGhH'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.201167572651, -122.67591340431), new google.maps.LatLng(47.33438719957, -122.48019764474));
    polygon.altLow  = 0;
    polygon.altHigh = 2800;
    polygon.desc    = 'TACOMA NARROWS AIRPORT CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'TACOMA NARROWS AIRPORT CLASS D<br />SFC-2800');
    

// TORRANCE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kvfmE~zqqUgBv@mgCnqFqrC{uBwk@`_@sx@{qB__BqlAd]yt@mzAmuDttE_yChA}Ex@eDz@eD|@cD~@aD`AaDbA_DfA}ChA}CjA{ClAyCnAwCpAuCrAsCvAqCxAoCzAoC|AmC~AkC`BiCbBeCdBcCfBaChB_CjB}BjB{BlByBnBwBpBsBrBqBtBoBvBmBvBiBxBgBzBeB|BcB|B_B~B}A`C{A`CwAbCuAdCqAdCoAfCmAfCiAhCgAjCcAjCaAjC}@lC{@lCw@nCu@nCq@pCo@pCk@pCi@pCe@rCc@rC_@rC[rCYhDEjcDqzF~fHzsGe_DltFR~DPpDNrDLrDHrDFrDDrD@rD>rD?rDArDErDGrDIrDMrDOrDQpDUpDWpDYpD]nD_@nDa@nDc@lDg@lDi@jDk@jDm@hDq@hDs@fDu@fDw@dD{@dD}@bD_A`DaA`DcA~CgA|CiAzCkAzCmAxCoAvCqAtCsArCuApCwAnC{AlC}AjC_BhCaBfCcBdCeBbCgB`CiB~BiB|BkBzBmBxBoBvBqBrBsBpBuBnBwBlBwBhByBfB{BdB}BbB}B~A_C|AaCzAaCvAcCtAeCpAeCnAgClAgChAiCfAiCbAkC`AkC|@mCz@mCv@oCt@'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.734852777778, -118.42821388889), new google.maps.LatLng(33.878152777778, -118.24765277778));
    polygon.altLow  = 0;
    polygon.altHigh = 2400;
    polygon.desc    = 'TORRANCE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'TORRANCE CLASS D<br />SFC-2400');
    

// TUCSON-RYAN FIELD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ctqcEvspeT^ga@~Aaa@`Dw`@~Eg`@~Gq_@zIw^vKw]pMs\\fOk[|P}YnRmX|SwVhU_UpVaStWcQtXaOrY{LjZuJ~ZkHn[aFx[uC`\\iAb\\>`\\jAx[vCl[bF~ZlHjZtJpY|LtX`OtWbQpVbShU~T|SvVlRlXzP|YfOj[pMr\\vKv]zIt^~Gn_@~Ed`@`Dt`@~A~`@^da@_@da@_B~`@_Dt`@_Fd`@}Gn_@{It^wKv]oMr\\gOj[{P|YmRlX}SvVgU~ToVbSuWbQuX`OqY|LiZtJ_[lHm[bFy[vCa\\jAc\\>a\\iAy[uCo[aF_[kHkZsJsY{LuX_OuWcQqVaSiU}T}SwVoRmX}P}YiOk[qMs\\wKw]{Iw^_Hq_@aFe`@aDu`@_Baa@_@ga@?E'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.074588508569, -111.25235565167), new google.maps.LatLng(32.208188565077, -111.09542336345));
    polygon.altLow  = 0;
    polygon.altHigh = 4200;
    polygon.desc    = 'TUCSON-RYAN FIELD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON-RYAN FIELD CLASS D<br />SFC-4200');
    

// TWENTYNINE PALMS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m~tpEz}_dU`@ud@fBod@lDcd@pFsc@rH{b@tJ_b@tL{`@rNs_@nPg^fRu\\|S_[nUeY|VeWhXcUpY}RrZuPp[iNj\\{K`]iIr]yF~]eDd^qAh^>d^rA~]fDp]xF`]jIj\\zKp[hNrZtPnY|RhXbU|VdWnUdY|S~ZfRt\\nPf^rNr_@tLz`@tJ|a@rHxb@pFpc@lD`d@fBld@`@rd@a@rd@gBld@kD`d@oFpc@sHxb@uJ|a@uLz`@sNr_@mPf^gRt\\{S~ZoUdY}VfWiXdUoY~RsZtPq[jNk\\|Ka]jIq]zF_^fDe^rAi^>e^qA_^eDs]wFa]iIm\\yKq[gNsZsPqY}RiXcU_WeWoUeY}S_[gRu\\oPg^sNs_@uL{`@wJ}a@uH{b@qFsc@mDcd@gBod@a@ud@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.211547629488, -116.25393252158), new google.maps.LatLng(34.355118196638, -116.08106883652));
    polygon.altLow  = 0;
    polygon.altHigh = 4600;
    polygon.desc    = 'TWENTYNINE PALMS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'TWENTYNINE PALMS CLASS D<br />SFC-4600');
    

// TWIN FALLS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cgvbGp{wyT`@gi@fB_i@jDsh@pF_h@rHeg@tJef@tL_e@rNqc@nP_b@fRg`@|Sk^nUi\\|VcZhXyWnYiUpZwRp[cPj\\kM`]qJp]uG|]yDd^{Af^>d^|A|]zDp]xG~\\rJh\\lMn[dPpZxRnYjUfXxW|VbZlUh\\zSj^dRf`@lP~a@pNnc@tLzd@tJbf@rHbg@pF|g@jDnh@fB|h@`@bi@a@bi@gB|h@kDnh@oF|g@sHbg@uJbf@sL|d@qNpc@mP~a@eRf`@{Sj^mUh\\{VbZgXxWmYjUqZxRo[dPi\\lM_]tJq]xG}]|De^~Ag^@e^{A}]yDq]uGa]qJk\\kMq[cPsZwRoYiUiXwW}VcZoUi\\}Sk^gRg`@oP_b@sNqc@uL}d@uJef@sHeg@qF_h@mDsh@gB_i@a@gi@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.410258966143, -114.58457007032), new google.maps.LatLng(42.553629024784, -114.39098699308));
    polygon.altLow  = 0;
    polygon.altHigh = 6700;
    polygon.desc    = 'TWIN FALLS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'TWIN FALLS CLASS D<br />SFC-6700');
    

// VAN NUYS CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_h_pEps|qUxIpFzFjD~FdD`G~CbGzCdGtCfGnChGhCjGbClG~BnGxBpGrBrGlBtGfBtG`BvGzAxGtAxGnAzGhAzGbA|G|@|Gv@~Gp@~Gj@~Gd@`H^`HX`HR`HL`HF`H@`HA`HG`HM`HS`HY`Ha@~Gg@~Gm@~Gs@|Gy@|G_AzGeAzGkAxGqAxGwAvG}AtGcBrGgBrGmBpGsBnGyBlG_CjGeChGkCfGoCdGuCbG{C`GaD~FeDzFkDxFqDvFuDrF{DpF_EnFeEdFcE~AhDjCvFhCxFdC|F`C~F|B`GxBdGtBfGpBhGlBjGhBlGdBpG`BrG|AtGxAvGtAxGpAxGlAzGhA|GdA~G`A`H|@`Hx@bHt@bHn@dHj@fHf@fHb@fH^hHZhHVhHPjHLjHHjHDjH@jHAjHEjHIjHMjHQjHUhH[hH_@hHc@fHg@fHk@fHo@dHu@dHy@bH}@`HaA`HeA~GiA|GmAzGqAxGuAxGyAvG}AtGaBrGeBpGiBlGmBjGqBhGuBfGyBdG}B`GaC~FeC|FiCxFkCvFoCrFsCpFwClFyChF}CfFaDbFcD~EgD|EkDxEmDtEqDpEsFtHqIvAwPvCyPjC{P~B}PrB_QfB_QzAaQnAcQbAcQv@cQj@eQ^eQPeQDeQCeQOeQ[cQg@cQs@cQ_AaQkAaQwA_QeB}PqB{P}ByPiCwPuCuPaDsPmDoPyDmPcEkPoEgP{EcPgFaPsF}O}FgMwEaIrK_DwF{CsFwCwFsCyFoC}FkC_GiCcGeCeGaCiG}BkGyBmGuBoGqBsGmBuGiBwGeByGaB{G}A}GyA_HsAaHoAcHkAeHgAgHcAgH_AiH{@kHu@kHq@mHm@mHi@oHe@oH_@qH[qHWqHSsHMsHIsHEsHAsH@{HDsHHsHLsHRsHVqHZqH^qHb@oHh@oHl@mHp@mHt@kHx@kH~@iHbAgHfAgHjAeHnAcHrAaHvA_H|A}G`B{GdByGhBwGlBuGpBsGtBqGxBmG|BkGtKQdC`A|Aj@|Ah@~Af@~Ad@~Ab@~A`@`B^`B\\`BZ`BX`BVbBTbBRbBPbBLbBJbBHbBFbBDbBBbB@bB>bB?bBAbBCbBEbBGbBIbBKbBObBQbBSbBU`BW`BY`B[`B]`B_@~Aa@~Ac@~Ae@~Ag@|Ai@|Ak@|Am@zAo@zAq@zAs@xAu@xAw@vAy@vA{@zEvA'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.137989783293, -118.55930647406), new google.maps.LatLng(34.283218898397, -118.43963888889));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'VAN NUYS CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'VAN NUYS CLASS D<br />SFC-3000');
    

// VANCOUVER CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('i{ouGxh{kVqFcFoFiFkFoFiFuFeF{FcF_G_FeG{EkGyEqGuEwGqE{GmEaHkEeHgEkHcEoH_EuH{DyHwD_IsDcIoDgIkDkIgDoIcDsI_DwI{C{IwC_JsCcJmCgJiCkJeCoJaCqJ{BuJwBwJsB{JmB}JiBaKeBcKqCeQ~iGyiAf`AeYpNnd@|Epb@rGtq@ySzoA}_@dxA}_@zxAiPbh@aR~h@qQz]wIyH'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.609555555556, -122.69883333333), new google.maps.LatLng(45.667722222222, -122.61916666667));
    polygon.altLow  = 0;
    polygon.altHigh = 1100;
    polygon.desc    = 'VANCOUVER CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'VANCOUVER CLASS D<br />SFC-1100');
    

// WALLA WALLA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_ywxGhc~pU`@}k@fBuk@jDgk@pFsj@rHwi@tJuh@tLkg@rN{e@lPgd@fRkb@zSk`@lUe^|Vy[fXkYnYwVpZ_Tn[eQj\\iN~\\iKp]gH|]eEb^aBd^>b^bB|]fEn]jH~\\jKh\\jNn[fQpZ`TlYxVfXjYzVz[lUd^zSh`@dRjb@lPdd@pNxe@tLhg@tJph@rHri@nFnj@jDbk@fBpk@`@xk@a@xk@gBpk@kDbk@oFnj@sHri@sJph@sLhg@qNze@mPdd@eRjb@{Sj`@mUd^{Vz[gXjYmYxVqZbTo[hQi\\jN_]lKo]jH}]hEc^dBe^@c^_B}]cEq]gH_]iKk\\gNq[eQqZ_ToYwVgXiY}Vy[oUc^}Si`@gRkb@oPed@sN{e@uLkg@uJsh@sHwi@qFsj@mDgk@gBuk@a@}k@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.022804440367, -118.39097055438), new google.maps.LatLng(46.166083548494, -118.18514215266));
    polygon.altLow  = 0;
    polygon.altHigh = 3700;
    polygon.desc    = 'WALLA WALLA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'WALLA WALLA CLASS D<br />SFC-3700');
    

// WHITEMAN CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{l{oEp|~qU{BpC}BnC_ClCaChCcCfCeCbCgC`CiC~BkCzBmCxBmCtBoCrBqCnBsClBuChBwCdBwCbByC~A{C|A{CxA}CtA_DrA_DnAaDjAaDfAcDdAcD`AeD|@eDx@gDv@gDr@gDn@iDj@iDh@iDd@kD`@kD\\kDXkDVkDRmDNmDJmDFmDBmD@mD?mDCmDGmDKmDOkDQkDUkDYkD]kDa@iDe@iDg@iDk@gDo@gDs@gDw@eDy@eD}@cDaAcDeAaDgAaDkA_DoA_DqA}CuA{CyA{C{AyC_BwCcBwCeBuCiBsCkBqCoBoCsBoCuBmCyBkC{BiC_CgCaCeCcCcCgCaCiC_CmC}BoC{BqCyBuCwBwCuByCqB{CoB}CmBaDkBcDiBeDgBgDcBiDaBkD_BmD{AoDyAqDwAsDuAuDqAwDoAyDmA{DiA{DgA}DcA_EaAaE_AaE{@cEy@eEu@eEs@gEo@gEm@iEi@iEg@kEc@kEa@mE]mE[mEWoEUoEQoEOoEKoEIqEEqECqE?qE>qEBwEDqEHqEJoENoEPoEToEVoEZmE\\mE`@mEb@kEf@kEh@iEl@iEn@gEr@gEt@eEx@eEz@cE~@aE`AaEbA_EfA}DhA}DjA{DnAyDpAwDtAuDvAsDxAqDzAoD~AmD`BkDbBiDdBgDhBeDjBcDlBaDnB_DpB{CtByCvBwCxBuCzBqC|BoC~BmC`CiCbCgCdCcCfCaChC_CjC{BlCyBnCuBnCsBpCoBrCkBtCiBrCgB>bGJ|IN|ITzIZzI^zId@zIh@xIn@xIr@vIx@tI|@tIbArIfApIlApIt@nFv@_BjAsAlAqAlAqAnAoApAmApAkArAiArAgAtAeAtAcAvAaAvAaAxA_AxA}@zA{@zAy@|Aw@|Au@|As@~Aq@~Ao@~Am@`Bk@`Bi@`Bg@bBe@bBa@bB_@bB]dB[dBYdBWdBUdBSdBQfBOfBMfBKfBGfBEfBCfBAfB?fB>fB@fBBfBDfBFfBJfBLfBNdBPdBRdBTdBVdBXdBZbB\\bB^bB`@bBd@`Bf@`Bh@`Bj@~Al@~An@~Ap@|Ar@|At@|Av@zAx@zAz@xA|@xA~@vA`AvA`AtAbAtAdArAfArAhApAjApAlAnAnAlApAlApAjArAjAtAhAvAfAxAfAxAdAzAbA|AbA~A`A~A~@`B|@bB|@bBz@dBx@fBv@fBv@hBt@hBr@jBp@lBp@lBn@nBl@nBj@pBh@pBf@pBf@rBd@rBb@tB`@tB^tB\\vBZvBZvBXxBVxBTxBRxBPzBNzBLzBJzBHzBHzBF|BD|BB|B@|B>|B?|BA|BC|BE|BG|BIzBIzBKzBMzBOzBQzBSxBUxBWxBYxB[vB[vB]vB_@tBa@tBc@tBe@rBg@rBg@rBi@pBk@pBm@nBo@nBq@lBq@lBs@jBu@hBw@hBw@fBy@fB{@dB}@bB}@bB_A`BaA~AcA~AcA|AeAzAgAxAgAxAiAvAkAtAkArAmApAmApAoAnAqAlAqAjAsAhAsAfAuAdAuAbAwAbAm@b@`J~EzFjD~FdD`G~CbGzCdGtCfGnChGhCjGbClG~BnGxBpGrBrGlBrGfBxGfBeDdE'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.223472222222, -118.47362494233), new google.maps.LatLng(34.309782104119, -118.36058333333));
    polygon.altLow  = 0;
    polygon.altHigh = 3000;
    polygon.desc    = 'WHITEMAN CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'WHITEMAN CLASS D<br />SFC-3000');
    

// YAKIMA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s~s{Gfvv~U`@gk@dBak@fDsj@jF}i@lHci@lJah@jLwf@fNie@`Puc@vQ{a@lS{_@|Tu]jVm[tW}XzXkV|YuSzZ}Pt[aNh\\cKx\\cHd]aEl]_Bn]>l]bBd]dEx\\dHh\\dKr[bNxZ~PzYvSxXlVrW~XhVl[|Tt]jSz_@vQxa@~Orc@dNfe@hLtf@jJ|g@jH~h@jFzi@fDnj@dB|j@`@bk@_@bk@cB|j@gDnj@iFzi@kH~h@kJ|g@iLtf@eNfe@_Prc@wQxa@kSz_@{Tv]iVl[sW~XyXlV{YxSyZ~Ps[dNi\\fKy\\fHe]dEm]bBo]@m]_Be]aEy\\cHi\\cKu[aN{Z}P}YuS{XkVuW}XkVk[}Tu]mS{_@yQya@aPuc@gNie@kLwf@mJah@mHci@kF}i@iDsj@eBak@a@gk@?G'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.498087430623, -120.64528191999), new google.maps.LatLng(46.638022822635, -120.44249743054));
    polygon.altLow  = 0;
    polygon.altHigh = 3600;
    polygon.desc    = 'YAKIMA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'YAKIMA CLASS D<br />SFC-3600');
    

// EDWARDS AFB CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oewtEpconUv@{|@hDq|@xG_|@hKa{@vN{y@`Rkx@hUsv@nXst@n[ir@j^wo@ba@}l@tc@}i@`f@wf@fh@ic@fj@w_@~k@_\\pm@aXzn@aT~o@}Oxp@wKlq@oGxq@eC|q@@xq@jClq@rGxp@zK|o@`Pzn@dTnm@dX|k@`\\dj@x_@dh@jc@~e@vf@rc@|i@`a@|l@h^to@l[fr@lXnt@hUnv@`Rfx@tNvy@hK|z@xGx{@hDl|@v@t|@w@t|@gDl|@yGx{@gK|z@uNvy@_Rfx@gUnv@mXnt@m[fr@i^to@_a@|l@qc@|i@_f@vf@eh@jc@cj@x_@}k@`\\om@dXyn@dT}o@bPyp@|Kmq@tGyq@jC}q@@yq@eCmq@oGyp@wK_p@}O{n@aTqm@aX_l@}[gj@u_@gh@ic@af@uf@uc@}i@ca@}l@k^wo@o[gr@oXqt@kUsv@cRkx@wN{y@iKa{@{G_|@iDq|@w@{|@?K'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.788151038858, -118.02537001293), new google.maps.LatLng(35.021846713493, -117.7418543996));
    polygon.altLow  = 0;
    polygon.altHigh = 4800;
    polygon.desc    = 'EDWARDS AFB CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'EDWARDS AFB CLASS D<br />SFC-4800');
    

// ATWATER CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{qicFnkl_VeGcCcnAhrAs}Fu{JvhAwlA}@oH_A}H{@}Hw@_Is@aIm@aIi@cIe@cIa@cI[eIWeISeIOgIIgIEgIAgI@oIDgIHgINgIReIVeIZeI`@cId@cIh@cIl@aIr@aIv@_Iz@}H~@}HdA{HhAyHlAwHpAuHtAsHxAqH~AoHbBmHfBkHjBiHnBgHrBeHvBaHzB_H~B}GbCyGfCwGjCsGnCoGrCmGvCiGxCgG|CcG`D_GdD{FhDwFjDuFnDqFrDmFtDiFxDeF|DaF~D{EbEwEdEsEhEoEjEkEnEeEpEaErE}DvEwDxEsDzEoD|EiD~EeDbF_DdF{CfFuChFqCjFkClFeCnFaCpF{BpFwBrFqBtFkBvFeBxFaBxF{AzFuAzFoA|FkA|FeA~F_A~Fy@`Gs@`Go@`Gi@bGc@bG]bGWbGQbGMbGGdGAdG@bGFbGLbGRbGXbG\\bGb@`Gh@`Gn@`Gt@~Fz@~F~@|FdA|FjAzFpAzFtAxFzAvF`BvFfBtFjBrFpBpFvBpFzBnF`ClFfCjFjChFpCfFtCdFzC`F~C~EdD|EhDzEnDxErDtExDrE|DpE`ErGzEua@xy\\oFxD}EhD_FdDaF~CeFzCgFtCiFpCkFjCmFfCoF`CoFzBqFvBsFpBuFjBwFfBwF`ByFzA{FvA{FpA}FjA}FdA_G~@_Gz@aGt@aGn@aGh@cGb@cG\\cGXcGRcGLcGFcG@cGAcGGcGKcGQcGWcG]cGc@aGi@aGo@aGs@_Gy@_G_A}FeA}FkA{FoA{FuAyF{AwFaBwFeBuFkBsFqBqFuBqF{B'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.333888888889, -120.66747222222), new google.maps.LatLng(37.464472222222, -120.47407822016));
    polygon.altLow  = 0;
    polygon.altHigh = 2000;
    polygon.desc    = 'ATWATER CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'ATWATER CLASS D<br />SFC-2000');
    

// ALBUQUERQUE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cu{uExlqjStAiDoaCe~CprCurDzyBxtCdHgFpEaDrE}CtEyCxEuCzEoC|EkC~EeC`FaCbF}BbFwBdFsBfFmBhFiBjFcBjF_BlFyAnFuAnFoApFkApFeArF_ArF{@tFu@tFq@tFk@vFe@vFa@vF[vFUxFQxFKxFExFAxF@xFFxFJxFPvFVvFZvF`@vFf@tFj@tFp@tFt@rFz@rF`ApFdApFjAnFnAnFtAlFxAjF~AjFdBhFhBfFlBdFrBbFvB`F|B`F`C~EfC|EjCzEnCxEtCtExCrE|CpE`DnEfDlEjDhEnDfErDdEvDbEzD~D`E|DdExDhEvDlErDnEpDrElDvEjDzEfD~EbDbF`DdF|ChFxClFvCnFrCrFnCvFjCxFhC|FdC~F`C`G|BdGxBfGtBhGpBlGlBnGhBpGdBrG`BtG|AvGxAxGtAzGpA|GlA~GhA`HdAbH`AbH|@dHx@fHt@fHn@hHj@hHf@jHb@jH^lHZlHVlHPlHLnHHnHDnH@nHAnHEnHInHMnHQlHUlH[lH_@lHc@jHg@jHk@hHo@hHu@fHy@fH}@dHaAbHeAbHiA`HmA~GqA|GuAzGyAxG}AvGaBtGeBrGiBpGmBnGqBlGuBjGyBfG}BdGaCbGeC~FiC|FkCxFoCvFsCrFwCpFyClF}ChFaDdFcDbFgD~EkDzEmDvEqDrEsDpEwDlEyDhE}DdE_E`EaE|DeEvDgErDiEnDmEjDoEfDqEbDsE|CuExCwEtC{EnC}EjC_FfCaF`CaF|BcFvBeFrBgFnBiFhBkFdBkF~AmFzAoFtAoFnAqFjAqFdAsF`AsFz@uFt@uFp@uFj@wFf@wF`@wFZwFVyFPyFJyFFyF@yFAyFEyFKyFQwFUwF[wFa@wFe@uFk@uFo@uFu@sF{@sF_AqFeAqFkAoFoAoFuAmFyAkF_BkFcBiFiBgFmBeFsBcFwBcF}BaFaC_FeC}EkC{EoCyEsCwEyCsE}CqEaDoEgDmEkDkEoDgEsDeEwDcE{D_E_E}DcEyDiEwDkEsDoEqDsEmDwEkD{EgD_FeDcFaDeF}CiF{CmFwCqFsCsFoCwFmCyFiC}FeC_GaCcG}BeGyBgGuBkGqBmGmBoGkBqGgBsGcBuG_BwG{AyGuA{GqA}GmA_HiAaHeAcHaAeH}@eHy@gHu@iHq@iHk@kHg@kHc@kH_@mH[mHWmHQoHMoHIoHEoHAoH@wHDoHHoHLoHPoHVmHZmH^mHb@kHf@kHj@kHn@iHt@iHx@gH|@eH`AeHdAcHhAaHlA_HpA}GtA{GxA{G|AyG`BuGdBsGhBqGlBoGpBmG'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.073483782655, -106.88268378618), new google.maps.LatLng(35.229111111111, -106.69913888889));
    polygon.altLow  = 0;
    polygon.altHigh = 7500;
    polygon.desc    = 'ALBUQUERQUE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'ALBUQUERQUE CLASS D<br />SFC-7500');
    

// PHOENIX, LUKE AFB CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g_dkEflemTeBhGeC`JkC|IoCzIuCvIyCtI_DpIcDlIiDjImDfIqDbIwD~H{DzH_EvHeErHiEnHmEjHqEfHwEbH{E|G_FxGcFtGgFnGkFjGoFdGsF`GwFzFyFvF}FpFaGjFeGfFgG`FkGzEoGtEqGnEuGjEwGdE{G~D}GxD_HrDcHlDeHfDgH`DiHxCkHrCmHlCoHfCqH`CsHzBuHrBwHlByHfB{H`B{HxA}HrA}HlA_IdA_I~@aIx@aIp@cIj@cIb@cI\\cIVeINeIHeI@eIAeIGeIOcIUcI]cIc@cIi@aIq@aIw@aI}@_IeA_IkA}HqA{HyA{H_ByHeBwHmBuHsBsHyBqH_CqHgCmHmCkHsCiHyCgH_DeHeDcHkD_HqD}GwD{G}DwGcEuGiEqGoEoGuEkG{EiGaFeGeFaGkF}FqF{FuFwF{FsFaGoFeGkFkGgFoGcFuG_FyG{E}GwEaHsEgHmEkHiEoHeEsHaEwH{D{HwD_IsDcImDgIiDkIcDoI_DqI{CuIuCyIoC{IkC_JeCaJaCcJ{BgJuBiJqBkJkBmJeBqJaBsJ{AuJuAwJoAwJkAyJeA{J_A}Jy@}Ju@_Ko@aKi@aKc@aK]cKWcKScKMcKGeKAeK@oKFeKLcKPcKVcK\\cKb@aKh@aKn@aKr@_Kx@}J~@}JdA{JjAyJnAwJtAwJzAuJ`BsJdBqJjBmJpBkJtBiJzBgJ`CcJdCaJjC_JnC{ItCyIxCuI~CqIbDoIhDkIlDgIrDcIvD_IzD{H`EwHdEsHhEoHlEkHrEgHvEcHzE}G~EyGbFuGfFoGjFkGnFeGrFaGvF{FzFuF|FqF`GkFdGeFfGaFjG{EnGuEpGoEtGiEvGcEzG}D|GwD~GqDbHkDdHeDhGwBbfBr{B|vKprCtt@sGENHQA>fAgDf@u@lD~EjD~EfDbFdDfF`DhF|ClFxCpFvCrFrCvFnCxFjC|FfC~FbCbG~BdG|BfGxBjGtBlGpBnGlBpGhBrGpB|F{AbFiAzDgA|DcA|DaA~D_A`E{@`Ey@bEu@dEs@dEo@fEm@fEi@hEg@hEc@jEa@jE]jE[lEWlEUlEQlEOnEKnEInEEnECtE?nE>nEBnEDnEHnEJnENnEPlETlEVlEZlE^jE`@jEd@jEf@hEh@hEl@fEn@fEr@dEt@dEx@bEz@`E~@`E`A~DbA|DfA|DhAzDlAxDnAvDpAtDtArDvApDxApD|AnD~AlD`BjDbBhDfBdDhBbDjB`DlB~CnB|CrBzCtBvCvBtCxBrCzBpC|BlC~BjC`ChCbCdCdCbCfC~BhC|BjCzBlCvBnCtBpCpBvEtC'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.449, -112.49476708104), new google.maps.LatLng(33.628552365701, -112.28116666667));
    polygon.altLow  = 0;
    polygon.altHigh = 3600;
    polygon.desc    = 'PHOENIX, LUKE AFB CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'PHOENIX, LUKE AFB CLASS D<br />SFC-3600');
    

// SAN BERNARDINO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}cjoEli_kU?_gWzm@qpA`gP?hBpCjDhFhDlFdDpF`DtF|CvFxCzFvC~FrC`GnCdGjCfGfCjGbClG~BpGzBrGvBtGrBvGnBzGjB|GfB~GbB`H~AbHxAdHtAfHpAhHlAjHhAjHdAlH~@nHz@pHv@pHr@rHl@rHh@tHd@tH`@vHZvHVvHRvHNxHHxHDxH@xHAxHExHIxHMxHSvHWvH[vHa@vHe@tHi@tHm@rHs@rHw@pH{@pH_AnHcAlHiAjHmAjHqAhHuAfHyAdH}AbHcB`HgB~GkB|GoBzGsBvGwBtG{BrG_CpGcClGgCjGkCfGoCdGsC`GwC~FyCzF}CvFaDtFeDpFiDlFkDhFoDfFsDbFuD~EyDzE{DvE_ErEcEnEeEjEiEfEkEbEmE|DqExDsEtDuEpDyElD{EfD}EbD_F~CaFxCeFtCgFnCiFjCkFdCmF`CoFzBqFvBqFpBsFlBuFfBwFbBwF|AyFvA{FrA{FlA}FfA}FbA_G|@_Gv@aGr@aGl@aGf@cGb@cG\\cGVcGPcGLeGFeG@eGAeGEcGKcGQcGWcG[cGa@aGg@aGm@aGq@_Gw@_G}@}FaA}FgA{FmA{FqAyFwAyF}AwFaBuFgBsFmBqFqBqFwBoF{BmFaCkFeCiFkCgFoCeFuCcFyC_F}C}EcD_DaB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.020182117381, -117.32526578476), new google.maps.LatLng(34.135833333333, -117.17388888889));
    polygon.altLow  = 0;
    polygon.altHigh = 3200;
    polygon.desc    = 'SAN BERNARDINO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN BERNARDINO CLASS D<br />SFC-3200');
    

// NORTH BEND CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('unlhGnjhuVVuJzALtAJtAHtAFtADtABtA@tA>tA?tAAtACtAEtAGtAItAKtAMtAOtAQrASrAUrAYrA[rA]rA_@pAa@pAc@pAe@pAg@nAi@nAi@nAk@lAm@lAo@lAq@lAs@jAu@jAw@hAy@hA{@hA}@fA_AfAaAdAaAdAcAdAeAbAgAbAiA`AkA`AkA~@mA~@oA|@qA|@sAz@sAz@uAx@wAv@wAv@yAt@{At@{Ar@}Ap@_Bp@_Bn@aBn@aBl@cBj@eBj@eBh@gBf@gBf@iBd@iBb@kBb@kB`@kB^mB\\mB\\oBZoBXoBXqBVqBTqBRqBRsBPsBNsBLsBLuBJuBHuBFuBFuBDuBBuB@uB@uB>uB?uBAuBAuBCuBEuBGuBGuBIuBKuBMuBMsBOsBQsBSsBSqBUqBWqBYqBYoB[oB]oB]mB_@mBa@kBc@kBc@kBe@iBg@iBg@gBi@gBk@eBk@eBm@cBo@aBo@aBq@_Bq@_Bs@}Au@{Au@{Aw@yAw@wAy@wA{@uA{@sA}@yAjEeGrDaFtD}EvDwEzDsE|DoE~DiEbEeEdEaEfE{DhEwDlEqDnEmDpEgDrEcDtE}CvEyCxEsCzEoC|EiC~EcC~E_C`FyBbFsBdFmBdFiBfFcBhF}AhFwAjFqAjFkAlFgAlFaAnF{@nFu@nFo@pFi@pFc@pF]pFWpFSrFMrFGrFArF@rFFrFLpFRpFXpF^pFd@pFj@nFn@nFt@nFz@lF`AlFfAjFlAjFrAhFvAhF|AfFbBdFhBdFnBbFrB`FxB~E~B|EbC|EhCzEnCxErCvExCtE~CrEbDpEhDnElDjErDhEvDfEzDdE`EbEdE~DjE|DnEzDrEvDvEtD|ErD`FnDdFlDhFhDlFfDpFbDtF~CxF|C|FxC`GtCdGrCfGnCjGjCnGhCrGdCtG`CxG|BzGxB~GvB`HrBdHnBfHjBhHfBlHbBnH~ApHzArHvAtHrAvHnAxHjAzHfA|HbA~H~@`Iz@bIv@bIr@dIn@fIj@fIf@hIb@hI\\hIXjITjIPjILlIHlIDlI@lIAlIElIIlIMlIQjIUjIYjI]hIc@hIg@hIk@fIo@fIs@dIw@bI{@bI_A`IcA~HgA|HkAzHoAxHsAvHwAtH{ArH_BpHcBnHgBlHkBhHoBfHsBdHwB`HyB~G}BzGaCxGeCtGiCrGkCnGoCjGsCfGuCdGyC`G}C|F_DxFcDtFeDpFiDlFmDhFoDdFqD`FuD|EwDvE{DrE}DnE_EjEcEdEeE`EgE|DiEvDkErDoElDqEhDsEbDuE~CwExCyErC{EnC}EhC}EdC_F~BaFxBcFrBeFnBeFhBgFbBiF|AiFxAkFrAkFlAmFfAmF`AoFz@oFt@oFp@qFj@qFd@qF^qFXqFRsFLsFFsF@sFAsFGsFMqFQqFWqF]qFc@qFi@oFo@oFu@oF{@mFaAmFgAkFkAkFqAiFwAiF}AgFcBeFgBeFmBcFsBaFyB_F}B_FcC}EiC{EmCyEsCwEyCuE}CsEcDqEgDoEmDmEqDiEwDgE{DeEaEcEeEaEiE}DoE{DsEwDwEuD{EsDaFoDeFmDiFiDmFgDqFcDuFaDyF}C}FyCaGwCeGsCgGoCkGmCoGiCsGeCuGaCyG}B{G{B_HwBaHsBeHoBgHkBkHgBmHcBoH_BqH{AsHwAwHsAyHoA{HkA}HgA}HcA_I_AaI{@cIw@eIs@eIo@gIk@gIg@iIc@iI_@kIYkIUkIQmIMmIImIEmIAmI@wIDmIHmILmIPmI'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.346942926469, -124.34305715124), new google.maps.LatLng(43.486945096585, -124.15099834798));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'NORTH BEND CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'NORTH BEND CLASS D<br />SFC-2500');
    

// VICTORVILLE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('i|sqErfzkUgBrEQs@_@aB_@_Ba@_Bc@_Bc@}Ae@}Ag@{Ag@{Ai@yAk@yAk@yAm@wAo@wAo@uAq@sAs@sAs@qAu@qAu@oAw@oAw@mAy@kA{@kA{@iA}@iA}@gA_AeA_AcAaAcAaAaAcA_AcA_AeA}@eA{@gAy@gAy@gAw@iAu@iAs@kAs@kAq@kAo@mAm@mAk@mAi@oAi@oAg@oAe@oAc@qAa@qA_@qA]qA]sA[sAYsAWsAUsASsAQuAOuAMuAKuAIuAIuAGuAEuACuAAuA?uA>uA@uABuADuAFuAHuAHuAJuALuANsAPsARsATsAVsAXsAZqAZqA\\qA^qA`@oAb@oAd@oAf@oAh@mAh@mAj@mAl@kAn@kAp@kAr@iAr@iAt@gAv@gAx@gAx@eAz@eA|@cA~@cA~@aA`AaAbA_AdA_AdA}@fA}@hA{@hA{@jAy@jAw@lAw@nAu@nAu@pAs@pAs@rAq@tAo@tAo@vAm@vAk@xAk@xAi@xAg@zAg@zAe@|Ac@|Ac@~Aa@~A_@~A_@`B]`B[`BYbBYbBWbBUbBSdBSdBQdBOdBMdBMfBKfBIfBGfBGfBEfBCfBAfBAjB?fB>fB@fB@fBBfBDfBFfBFfBHfBJfBLfBLdBNdBPdBRdBRdBTbBVbBXbBXbBZ`B\\`B^`B^~A`@~Ab@~Ab@|Ad@|Af@zAf@zAh@xAj@xAj@xAl@vAn@vAn@tAp@rAr@rAr@pAt@pAt@nAv@nAv@lAx@jAz@jAz@hA|@hA|@fA~@dA~@bA`AbA`A`AbA~@bA~@dA|@dAz@fAx@fAx@fAv@hAt@hAr@jAp@jAp@jAn@lAl@lAj@r@`@wEjCqHhEsH`EwHzDyHtD{HlD_IfDaI`DcIxCeIrCgIjCiIdCkI|BmIvBoInBqIhBqI`BsIzAuIrAuIjAwIdAwI|@yIt@yIn@yIf@{I^{IX{IP{IH{IB{IA{II{IO{IW{I_@yIe@yIm@yIu@wI{@wIcAuIkAuIqAsIyAqIaBqIgBoIoBmIuBkI}BiIcCgIkCeIqCcIyCaI_D_IgD}HmDyHsDwH{DuHaEqHgEoHmEkHuEiH{EeHaFaHgF_HmF{GsFwGyFsG_GoGeGkGkGiGqGeGuG_G{G{FaHwFgHsFkHoFqHkFuHeF{HaF_I}EeIwEiIsEmIoEqIiEwIeE{I_E_J{DcJuDgJoDkJkDmJeDqJ_DuJ{CyJuC{JoC_KiCaKeCeK_CgKyBkKsBmKmBoKgBqKaBsK{AuKuAwKoAyKiA{KcA}K}@}Kw@_Lq@aLk@aLe@cL_@cLYcLSeLMeLGeLAeL@qLFeLLeLReLXcL^cLd@cLj@aLp@aLv@_L|@_LbA}KhA{KnAyKtAwKzAuK`BsKfBqKlBoKrBmKxBkK~BgKbCeKhCaKnC_KtC{JzCyJ~CuJdDqJjDoJnDkJtDgJxDcJ~D_JdE{IhEwInEqIrEmIvEiI|EeI`F_IdF{HjFuHnFqHrFkHvFgHzFaH~F{GbGuGfGqGjGkGnGeGrG_GvGyFzGsF~GmF`HgFdHaFhH{EjHuEnHmEpHgEtHaEvH{DxHsD|HmD~HgD`I_DbIyCdIqCfIkChIcCjI}BlIuBnIoBpIgBpIaBrIyAtIqAtIkAvIcAvI}@xIu@xIm@xIg@zI_@zIWzIOzIIzIAzIBzIHzIPzIXzI^xIf@xIn@xIt@vI|@vIdAtIjAtIrArIxApI`BpIhBnInBlIvBjI|BhIdCfIjCdIrCbIxC`I`D~HfDzHlDxHtDvHzDrH`EpHfEnHnEjHtEfHzEdH`F`HfF|GlFzGrFvGxFrG~FnGdGjGjGfGpGbGvG~FzGzF`HvFfHrFjHnFpHhFtHdFzH`F~H|EbIvEhIrElIlEpIhEtIbEzI~D~IxDbJtDfJnDhJhDlJdDpJ~CtJxCvJtCzJnC~JhC`KbCdK~BfKxBhKrBjKlBnKfBpK`BrKzAtKtAvKnAxKhAzKbAzK|@|Kv@~Kp@~Kj@`Ld@`L^bLXbLRbLLbLFbL@dLAdLGbLMbLSbLYbL_@bLe@`Lk@`Lq@~Kw@~K}@|KcAzKiAzKoAxKuAvK{AtKaBrKgBpKmBnKsBlKyBhK}BfKcCdKiC`KoC~JuCzJyCvJ_DtJeDpJiDlJoDhJuDfJyDbJ'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.497377844222, -117.50413282108), new google.maps.LatLng(34.697620501885, -117.26197821631));
    polygon.altLow  = 0;
    polygon.altHigh = 5400;
    polygon.desc    = 'VICTORVILLE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'VICTORVILLE CLASS D<br />SFC-5400');
    

// YUMA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iezfEp~nzT?Gh@wk@|Bqk@pEck@bHmj@tJqi@dMoh@pOgg@|Qwe@dTcd@hVgb@hXg`@fZa^~[w[r]gYb_@uVl`@}Spa@cQpb@gNjc@gK~c@gHnd@eEvd@aBzd@>vd@bBnd@fE~c@hHjc@hKpb@hNpa@dQj`@~S`_@tVr]hY~[v[dZ`^hXf`@fVfb@bT`d@zQve@pOdg@bMlh@tJni@bHjj@pE~j@|Blk@h@tk@g@tk@}Blk@oE~j@cHjj@sJni@cMlh@qOdg@sLxZgiEi@?jhFaXpNqa@fQqb@hNkc@jK_d@hHod@fEwd@bB{d@>wd@aBod@cE_d@gHkc@gKqb@gNqa@cQm`@}Sc_@uVs]gY_\\w[gZa^iXg`@iVgb@eTcd@}Qwe@sOgg@eMoh@uJqi@eHmj@qEck@}Bqk@i@wk@'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.56974980425, -114.70856078119), new google.maps.LatLng(32.743415661728, -114.5033852697));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'YUMA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'YUMA CLASS D<br />SFC-2700');
    

// YUMA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e_afE~n`{T?mhFnjE?mEfKaDlHeDhHiDdHmD`HsD|GwDzG{DvG_ErGcEnGgEjGkEfGoE`GsE|FuExFyEtF}EpFaFjFeFfFgFbFkF|EoFxEqFrEuFnEwFhE{FbE}F~DaGxDcGtDgGlD'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.581880555556, -114.69568611111), new google.maps.LatLng(32.614444444444, -114.65833333333));
    polygon.altLow  = 300;
    polygon.altHigh = 2700;
    polygon.desc    = 'YUMA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'YUMA CLASS D<br />300-2700');
    

// FLAGSTAFF CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('szjuExxdiTkyQi`Yt@iDbBkIhBgIlBeIrBcIvBaIzB}H~B{HdCyHhCuHlCsHpCoHvCmHzCiH~CeHbDcHfD_HjD{GnDwGrDsGvDoGzDkG~DgGbEcGfE_GjE{FlEwFpEqFtEmFxEiFzEeF~E_F`F{EdFuEhFqEjFkElFgEpFaErF}DvFwDxFqDzFmD|FgD`GaDbG{CdGwCfGqChGkCjGeClG_CnGyBpGsBrGoBrGiBtGcBvG}AvGwAxGqAzGkAzGeA|G_A|Gy@|Gs@~Gk@~Ge@~G_@`HY`HS`HM`HG`HA`H@`HF`HL`HR`HZ~G`@~Gf@~Gl@|Gr@|Gx@|G~@zGdAzGjAxGpAvGvAvG|AtGbBrGhBpGnBdDx@vjCu`F|xF|cFgkCdaFpFrL~CdHzChHtCjHpCnHlCrHhCtHdCxH~BzHzB|HvB`IrBbIlBdIhBfIbBhI~AjIzAlItAnIpApIjArIfAtI`AvI|@vIx@xIr@zIn@zIh@|Id@|I^|IX~IT~IN~IJ~ID~I@~IA~IE~IK~IO~IU~IY~I_@|Ic@|Ii@|Im@zIs@zIw@xI}@vIaAvIgAtIkArIqApIuAnI{AlI_BjIcBhIiBfImBdIqBbIwB`I{B|H_CzHeCxHiCtHmCrHqCnHuCjH{ChH_DdHcD`HgD~GkDzGoDvGsDrGwDnG{DjG_EfGcEbGgE~FiEzFmEvFqEpFuElFwEhF{EdF_F~EaFzEeFtEgFpEkFjEmFfEqF`EsF|DuFvDyFrD{FlD}FfDaG`DcG|CeGvCgGpCiGjCkGdCmG`CoGzBqGtBqGnBsGhBuGbBwG|AwGvAyGpAoEnB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.049916666667, -111.76861111111), new google.maps.LatLng(35.218888888889, -111.53741666667));
    polygon.altLow  = 0;
    polygon.altHigh = 9500;
    polygon.desc    = 'FLAGSTAFF CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FLAGSTAFF CLASS D<br />SFC-9500');
    

// FORT HUACHUCA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k~g`E~sn`T?Gd@_g@pByf@|Dkf@fGye@pIae@xKad@~M}b@bPsa@bRc`@`To^zUu\\rWwZdYuXtZoV~[cTd]wQf^gOb_@sLz_@_Jl`@gGz`@oDba@wAda@>ba@xAz`@pDl`@hGz_@~Ib_@tLf^fOd]vQ~[dTtZnVdYtXpWvZzUt\\`Tn^bRb`@`Ppa@~Mzb@xK~c@pI~d@fGve@|Dhf@pBtf@d@|f@c@|f@qBvf@{Dhf@gGve@qI~d@wK`d@}Mzb@aPra@cRb`@_Tn^{Ut\\qWvZeYtXsZnV_\\dTe]vQg^fOc_@tL{_@`Jm`@hG{`@pDca@xAea@>ca@uA{`@oDo`@gG{_@}Ie_@sLg^eOg]uQ_\\cTuZmVgYuXsWwZ{Uu\\aTo^cRc`@cPsa@_N}b@yKad@qIae@gGye@}Dkf@qByf@e@_g@'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.510113764674, -110.43609462088), new google.maps.LatLng(31.667107494165, -110.25279570861));
    polygon.altLow  = 0;
    polygon.altHigh = 7200;
    polygon.desc    = 'FORT HUACHUCA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'FORT HUACHUCA CLASS D<br />SFC-7200');
    

// LOS ANGELES CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kchnE~_nqU?j~Om}@keBU_@Y{Bc@uDe@uDi@sDk@sDm@sDo@qDs@qDu@oDw@mD{@mD}@kD_AiDaAiDeAgDgAeDiAcDkAcDmAaDqA_DsA}CuA{CwAyCyAwC{AuC}AsC_BqCcBoCeBmCgBkCiBiCkBgCmBeCoBcCqBaCqB}BsB{BuByBwBwByBsB{BqB}BoB_CkB_CiBaCgBcCcBeCaBeC}AgC{AiCyAiCuAkCsAkCoAmCmAoCiAoCgAaEiBOU?anBpnFirA'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.961666666667, -118.45638888889), new google.maps.LatLng(34, -118.36944444444));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'LOS ANGELES CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LOS ANGELES CLASS D<br />SFC-2700');
    

// LOS ANGELES CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ubbnE~wzqUt@{}KdbDjbFnyC~wEm~Ho\\'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.879722222222, -118.43944444444), new google.maps.LatLng(33.930833333333, -118.36833333333));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'LOS ANGELES CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LOS ANGELES CLASS D<br />SFC-2500');
    

// BOZEMAN CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('un}vG~jleT?Ih@cw@`Cyv@xEiv@nHou@bKkt@tMas@dPmq@rRqo@|Tom@dWek@fYuh@f[}e@`]_c@v^}_@f`@s\\ra@gYzb@wUzc@aRtd@kNje@qJxe@uFbf@yBdf@@bf@|Bxe@zFje@tJtd@nNxc@dRxb@xUra@hYf`@v\\t^|_@~\\~b@d[|e@dYrh@bWbk@zTlm@pRno@bPhq@tMzr@`Kft@lHhu@xEbv@`Ctv@j@|v@i@|v@aCtv@wEbv@mHhu@aKft@sM|r@cPhq@qRno@{Tlm@aWbk@eYrh@e[|e@_]`c@u^~_@e`@v\\qa@jYyb@zUyc@fRud@nNie@vJye@zFcf@~Bef@@cf@wBye@uFke@oJud@iN{c@aR{b@uUsa@gYi`@s\\w^{_@a]_c@g[}e@gYsh@eWek@}Tom@sRqo@ePmq@uM_s@cKkt@oHmu@yEiv@cCyv@k@cw@'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.687528325932, -111.28045369836), new google.maps.LatLng(45.867470253426, -111.02343716473));
    polygon.altLow  = 0;
    polygon.altHigh = 7000;
    polygon.desc    = 'BOZEMAN CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'BOZEMAN CLASS D<br />SFC-7000');
    

// HAWTHORNE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_osmEjlmqU{nGnzGaaEymGOxoBiAQsCc@qCe@qCi@qCk@oCo@oCq@oCu@mCw@mC{@kC}@kCaAiCcAiCgAgCiAgCkAeCoAeCqAcCuAaCwAaCyA_C}A}B_B}BcB{BeByBgBwBiBwBmBuBoBsBqBqBsBoBwBmByBkB{BiB}BiB_CgBaCeBcCcBeCaBgC_BiC}AkC{AmCyAoCuAqCsAsCqAuCoAwCmAyCkA{CiA{CgA}CcA_DaAaD_AaD}@cD{@eDw@eDu@gDs@gDq@iDo@kDk@kDi@kDg@mDc@mDa@oD_@oD]oDYqDWqDUqDQqDOsDMsDIsDGsDEsDCsD?sD>yD@sDDsDFsDHsDLsDNsDPqDTqDVqDXqD\\oD^oD`@oDb@mDf@mDh@kDj@kDl@kDp@iDr@gDt@gDv@eDz@eD|@cD~@aD`AaDbA_DfA}ChA{CjA{ClAyCnAwCpAuCrAsCtAqCvAoCzAmC|AkC~AiC`BgCbBeCdBcCfBaChB_Cx@mCfWauGhjJxl@mRb|E~AhBlBxBjBzBjB|BhB~BfB`CdBdCbBfC`BhC~AjC|AlCzAnCxApCvArCrArCpAtCnAvClAxCjAzChA|CfA|CdA~C`A`D~@bD|@bDz@dDx@dDt@fDr@hDp@hDn@jDj@jDh@lDf@lDb@lD`@nD^nD\\pDXpDVpDTpDPrDNrDLrDHrDFrDDrDIlBhqCzhE'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.856, -118.41166666667), new google.maps.LatLng(33.966093731611, -118.25330555556));
    polygon.altLow  = 0;
    polygon.altHigh = 2500;
    polygon.desc    = 'HAWTHORNE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'HAWTHORNE CLASS D<br />SFC-2500');
    

// BELLINGHAM CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_dfiHxb|jV?G^al@`B{k@bDmk@dFwj@dH{i@bJyh@`Log@zMaf@rOkd@hQob@|Ro`@lTg^xU}[`WmYfXyVfYcTdZgQ|ZiNr[kKb\\iHl\\eEt\\aBv\\>t\\dBl\\hE`\\jHp[lK|ZlNdZhQfYdTdXzV`WnYvU|[jTf^zRl`@hQnb@rOhd@zM~e@~Klg@bJth@dHxi@dFrj@bDhk@`Bvk@^|k@_@|k@aBvk@cDhk@eFrj@cHxi@cJvh@_Llg@yM~e@sOhd@gQnb@{Rn`@kTh^wU|[aWnYeXzVgYdTeZjQ}ZlNq[lKa\\lHm\\hEu\\dBw\\@u\\aBm\\eEc\\gHs[iK_[iNeZgQiYaTgXyVaWmYyU}[mTg^}Rm`@iQob@sOkd@{M_f@aLog@cJyh@eH{i@eFwj@eDmk@cB{k@_@al@'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.724418839416, -122.64080661163), new google.maps.LatLng(48.8609692384, -122.43425054253));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'BELLINGHAM CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'BELLINGHAM CLASS D<br />SFC-2700');
    

// CAMP GUERNSEY CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}wiaGbbs~RmhDbrA}iBckKlhD}qA?kEEeKAgK@qKDeKJeKNeKTeKXeK^cKd@cKh@aKn@aKr@_Kx@_K|@}J`A{JfAyJjAwJpAuJtAsJzAqJ~AoJbBmJhBkJlBiJrBeJvBcJzB_J~B}IdCyIhCwIlCsIpCoIvCmIzCiI~CeIbDaIfD}HjDyHnDuHrDqHvDmHzDgH~DcHbE_HfE{GjEuGlEqGpEkGtEgGxEaGzE}F~EwF`FqFdFmFhFgFjFaFlF{EpFuErFqEvFkExFeEzF_E|FyD`GsDbGmDdGgDfGaDhGyCjGsClGmCnGgCpGaCpGyBrGsBtGmBvGgBvG_BxGyAzGsAzGkA|GeA|G_A|Gw@~Gq@~Gi@~Gc@`H]`HU`HO`HG`HA`H@`HH`HN`HV~G\\~Gb@~Gj@~Gp@|Gx@|G~@zGdAzGlAxGrAxGxAvG`BvGfBtGlBrGtBpGzBpG`CnGfClGlCjGtChGzCfG`DdGfDbGlD~FrD|FxDzF~DxFdEtFjErFpEpFvElFzEjF`FfFfFdFlF`FpF~EvFzE|FvE`GtEfGpEjGlEpGhEtGfExGbE~G~DbHzDfHvDlHrDpHnDtHjDxHfD|HbD`I~CdIzChItCjIpCnIlCrIhCtIdCxI~B|IzB~IvB`JpBdJlBfJhBhJbBlJ~AnJzApJtArJpAtJjAvJfAxJ`AzJ|@zJv@|Jr@~Jn@~Jh@`Kb@`K^bKXbKTbKNdKJdKDdK@dKAdKEdKKdKOdKUbKYbK_@bKc@`Ki@`Km@~Js@~Jw@|J}@zJaAzJgAxJkAvJqAtJuArJ{ApJ_BnJcBlJiBjJmBfJqBdJwBbJ{B~I_C|IeCxIiCtImCrIqCnIuCjI{ChI_DdIcD`IgD|HkDxHoDtHsDpHwDlH{DfH_EbHcE~GeEzGiEtGmEpGqEjGuEfGwE`G{E|F_FvFaFpFeFlFgFfFkF`FmF|EqFvEsFpEuFjEyFdE{F~D}FxD_GrDcGlDeGfDgG`DiGzCkGtCmGnCoGfCqG`CqGzBsGtBuGlBwGfBwG`ByGxAyGrA{GlA{GdA}G~@}Gx@_Hp@_Hj@_Hd@_H\\aHVaHNaHHaHBaHAaHGaHOaHUaH]_Hc@_Hi@_Hq@}Gw@}G_A}GeA{GkA{GsAyGyAwG_BwGgBuGmBsGsBsGyBqGaCoGgCmGmCkGsCiGyCgG_DeGgDcGmDaGsD}FyD{F_EyFeEwFkEsFqEqFuEmF{EkFaFiFgFeFmFaFqF_FwF{E}FyEaGuEgGqEkGmEqGkEuGgEyGcE_H_EcH{DgHwDmHsDqHiBaD'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.176409246412, -104.84049730881), new google.maps.LatLng(42.370138888889, -104.61611372793));
    polygon.altLow  = 0;
    polygon.altHigh = 6900;
    polygon.desc    = 'CAMP GUERNSEY CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'CAMP GUERNSEY CLASS D<br />SFC-6900');
    

// EL MONTE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ms`oE`uynUt}Iv`Dua@rkBhDjFtCrErCvEnCxEjC|EhC~EdCbF`CdF~BfFzBjFvBlFtBnFpBpFlBtFhBvFdBxFbBzF~A|FzA~FvA`GrAbGnAdGjAdGfAfGdAhG`AjG|@jGx@lGt@nGp@nGl@pGh@pGd@rG`@rG\\rGXtGTtGPtGLtGHtGDtG@tG?tGEtGItGMtGQtGUtGYtG]rGa@rGe@rGi@pGm@pGq@nGu@nGy@lG}@jGaAjGcAhGgAfGkAdGoAdGsAbGwA`G{A~F_B|FcBzFeBxFiBvFmBtFqBpFuBnFwBlF{BjF_CfFaCdFeCbFiC~EkC|EoCxEsCvEuCrEyCnE{ClE_DhEaDdEeDbEgD~DiDzDmDvDoDtDqDpDuDlDwDhDyDdD{D`D}D|CaExCcEtCeEpCgElCiEhCkEbCmE~BoEzBqEvBsErBsElBuEhBwEdByE`ByEzA{EvA}ErA}ElA_FhA_FdAaF~@aFz@cFv@cFp@cFl@eFf@eFb@eF^gFXgFTgFNgFJgFDgF@gFAgFEgFIgFOgFSgFYeF]eFc@eFg@cFk@cFq@cFu@aF{@aF_A_FcA_FiA}EmA}EqA{EwAyE{AyE_BwEeBuEiBsEmBsEqBqEwBoE{BmE_CkEcCiEgCgEmCeEqCcEuCaEyC_E}C{DaDyDeDwDiDuDmDsDqDoDsDmDwDkD{DgD_EeDcEaDeE_DiE{CmEyCoEuCsEsCwEoCyEmC}EiC_FeCcFcCeF_CgF{BkFwBmFuBoFqBqFmBuFiBwFgByFcB{F_B}F{A_GwAaGsAcGoAeGkAgGiAgGeAiGaAkG}@mGy@mGu@oGq@oGm@qGi@qGe@sGa@sG]sGYuGUuGQuGMuGIwGEwGAwG@}GDwGHwGLuGPuGTuGXuG\\uG`@sGd@sGh@qGl@qGp@oGt@oGx@mG|@mG`AkGdAiGhAgGjAgGnAeGrAcGvAaGzA_G~A}FbB{FfByFhBwFlBuFpBqFtBoFvBmFzBkF~BgFbCeFdCcFhC_FjC}EnCyErCwEtCsExCoEzCmE~CiE`DeEdDcEfD_EhD{DlDwDnDsDpDqDtDmDvDiDxDeDzDaD~D}C`EyCbEuCdEqCfEmChEgCjEcClE_CnE{BpEwBrEsBrEmBtEiBvEeBxE_BxE{AzEwA|EsA|EmA~EiA~EcA`F_A`F{@bFu@bFq@bFm@dFg@dFc@|HQna@ikB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.019320536343, -118.11499649419), new google.maps.LatLng(34.152900953215, -117.93761111111));
    polygon.altLow  = 0;
    polygon.altHigh = 2400;
    polygon.desc    = 'EL MONTE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'EL MONTE CLASS D<br />SFC-2400');
    

// MOSES LAKE CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sd`_H`}lvUt~CtxKtzF?tC`K`DdL|ChLvClLrCpLlCtLfCxLbC|L|B~LvBbMrBdMlBhMfBjM`BnM|ApMvArMpAtMjAvMdAxM`AzMz@|Mt@|Mn@~Mh@`Nb@`N\\bNXbNRbNLdNFdN@dNAdNGdNMdNSbNWbN]bNc@`Ni@`No@~Mu@|M{@|MaAzMeAxMkAvMqAtMwArM}ApMaBnMgBjMmBhMsBdMwBbM}B~LcC|LgCxLmCtLqCpLwClL}ChLaDdLgD`LkD|KqDxKuDtKyDnK_EjKcEdKgE`KmEzJqEtJuEpJyEjJ_FdJcF~IgFxIkFrIoFlIsFfIwF`I{FzH}FtHaGlHeGfHiG`HmGxGoGrGsGjGuGdGyG|F{GtF_HnFaHfFeH~EgHxEiHpEkHhEoH`EqHxDsHpDuHhDwH`DyHxC{HpC}HhC}H`C_IxBaIpBcIhBcI`BeIvAeInAgIfAgI~@gIv@iIl@iId@iI\\iITiIJkIBkIAkIIiISiI[iIc@iIk@iIu@gI}@gIeAeImAeIuAcI_BcIgBaIoB_IwB_I_C}HgC{HoCyHwCwH_DuHgDsHoDqHwDoH_EmHgEkHoEgHwEeH_FcHeF_HmF}GuFyG}FwGcGsGkGqGqGmGyGiG_HeGgHcGmH_GsH{F{HwFaIsFgIoFmIkFsIgFyIcF_J_FeJ{EkJwEqJqEwJmE{JiEaKcEeK_EkK{DoKuDuKqDyKkD}KgDcLaDgL}CkLwCoLsCsLmCwLiCyLcC}L}BaMyBeMsBgMmBkMgBmMcBoM}AqMwAuMqAwMkAyMgA{MaA}M{@}Mu@_No@aNi@cNc@cN_@cNYeNSeNMeNGgNAgN@sNFgNLeNReNXeN\\cNb@cNh@cNn@aNt@_Nz@_N`A}MfA{MjAyMpAwMvAuM|AsMbBoMfBmMlBkMrBgMvBeM|BaMbC}LfC{LlCwLrCsLvCoL|CkL`DgLfDcLjD}KpDyKtDuKzDoK~DkKbEgKhEaKlE{JpEwJtEqJzEkJ~EeJbF_JfFyIjFsInFmIrFgIvFaIzF{H~FsHbGmHdGgHhG_HlGyGnGqGrGkGvGcGxG}F|GuF~GmFbHgFdH_FfHwEhHoElHgEnH_EpHwDrHqDtHiDvHaDxHwCzHoC|HgC~H_C~HwB`IoBbIgBbI_BdIwAdImAfIeAfI}@hIu@hIk@hIc@hI[hISjIIjIAjIBhIJhIThI\\hId@hIl@fIt@fI~@fIfAlD`C'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.112624950009, -119.45990829997), new google.maps.LatLng(47.302929010095, -119.18064713255));
    polygon.altLow  = 0;
    polygon.altHigh = 3700;
    polygon.desc    = 'MOSES LAKE CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'MOSES LAKE CLASS D<br />SFC-3700');
    

// SANTA MONICA CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gp~nErkwqUi~@qpAxcFq_Gt~@|pAjEuAxE{AzEwA|EsA|EmA~EiA~EcA`F_A`F{@bFu@bFq@dFm@dFg@dFc@dF]fFYfFSfFOfFKfFEfFAfF@fFDfFJfFNfFTfFXdF\\dFb@dFf@dFl@bFp@bFv@`Fz@`F~@~EdA~EhA|ElA|ErAzEvAxEzAxE`BvEdBtEhBrElBhDvAkkAnY?`nBxEfBnCfAnChAlClAlCnAjCrAhCtAhCxAfCzAdC~AdC`BbCbB`CfB~BhB~BjB|BnBzBpBxBrBvBvBtBxBtBzBrB|BpB`CnBbClBdCjBfChBhCfBjCdBlCbBpC`BrC|AtCzAvCxAxCvAzCtAzCrA|CpA~CnA`DjAbDhAdDfAdDdAfD`AhD~@jD|@jDz@lDv@nDt@nDr@pDp@pDl@rDj@rDh@tDd@tDb@vDB`CT^l}@jeB?cdIpBhEbCdF~BfFzBjFvBlFtBnFpBpFlBtFhBvFfBxFbBzF~A|FzA~FvA`GrAbGnAdGjAdGhAfGdAhG`AjG|@jGx@lGt@nGp@nGl@pGh@pGd@rG`@rG\\rGXtGTtGPtGLtGHtGDtG@tG?tGEtGItGMtGQtGUtGYtG]rGa@rGe@rGi@pGm@pGq@nGu@nGy@lG}@jGaAjGeAhGgAfGkAdGoAdGsAbGwA`G{A~F_B|FcBzFeBxFiBvFmBtFqBpFuBnFwBlF{BjF_CfFaCdFeCbFiC~EkC|EoCxEsCvEuCrEyCnE{ClE_DhEaDdEeDbEgD~DiDzDmDvDoDtDqDpDuDlDwDhDyDdD{D`D_E|CaExCcEtCeEpCgElCiEhCkEbCmE~BoEzBqEvBsErBsElBuEhBwEdByE`ByEzA{EvA}ErA}ElA_FhA_FdAaF~@aFz@cFv@cFp@eFl@eFf@eFb@eF^gFXgFTgFNgFJgFDgF@gFAgFEgFIgFOgFSgFYeF]eFc@eFg@eFk@cFq@cFu@aF{@aF_A_FcA_FiA}EmA}EqA{EwAyE{AyE_BwEeBuEiBuEmBsEqBqEwBoE{BmE_CkEcCiEgCgEkCeEqCcEuCaEyC_E}C}DaDyDeDwDiDuDmDsDqDoDsDmDwDkD{DgD_EeDcEaDeE_DiE{CmEyCoEuCsEsCwEoCyEmC}EiC_FeCcFcCeF_CgF{BkFyBmFuBoFqBqFmBuFiBwFgByFcB{F_B}F{A_GwAaGsAcGoAeGmAgGiAgGeAiGaAkG}@mGy@mGu@oGq@oGm@qGi@qGe@sGa@sG]sGYuGUuGQuGMuGIwGEwGAwG@}GDwGHwGLuGPuGTuGXuG\\sG`@sGd@sGh@qGl@qGp@oGt@oGx@mG|@mG`AkGdAiGhAgGjAgGnAeGrAcGvAaGzA_GfBiG'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.949002319774, -118.53164459682), new google.maps.LatLng(34.0865, -118.36327777778));
    polygon.altLow  = 0;
    polygon.altHigh = 2700;
    polygon.desc    = 'SANTA MONICA CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA MONICA CLASS D<br />SFC-2700');
    

// LAGUNA AAF CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wh}gEvkeyT?EZe]rA_]jCw\\bEi\\zFu[nH_[bJcZvKcYfM_XtNwV`PmUhQ}SnRkRrSwPrT_OnUcMfVgK|ViInWgG|WgEdXeCjXaAlX>jX`AdXdCzWfEnWhG|VhIfVfKnUdMpT~NpSvPnRjRhQ|S~OlUtNvVfM~WtKbYbJbZnH|ZzFt[bEf\\jCt\\rA~\\Zb][b]sA~\\kCt\\cEf\\yFt[oH|ZcJbZuKbYeM~WsNvV_PlUiQ|SoRjRqSvPqT~NmUdMgVfK}VhImWhG{WfEeXdCkXbAmX>kXaAeXcC}WgEoWgG}VgIgVgKoUcMsT}NsSuPoRkRiQ}SaPmUuNwVgM_XwKcYeJcZqH_[{Fu[cEi\\mCw\\sA_][e]'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.806278653126, -114.4622656478), new google.maps.LatLng(32.923165246097, -114.32384655703));
    polygon.altLow  = 0;
    polygon.altHigh = 1700;
    polygon.desc    = 'LAGUNA AAF CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'LAGUNA AAF CLASS D<br />SFC-1700');
    

// SAN BERNARDINO CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}cjoEli_kU?_gWzm@qpA`gP?hBpCjDhFhDlFdDpF`DtF|CvFxCzFvC~FrC`GnCdGjCfGfCjGbClG~BpGzBrGvBtGrBvGnBzGjB|GfB~GbB`H~AbHxAdHtAfHpAhHlAjHhAjHdAlH~@nHz@pHv@pHr@rHl@rHh@tHd@tH`@vHZvHVvHRvHNxHHxHDxH@xHAxHExHIxHMxHSvHWvH[vHa@vHe@tHi@tHm@rHs@rHw@pH{@pH_AnHcAlHiAjHmAjHqAhHuAfHyAdH}AbHcB`HgB~GkB|GoBzGsBvGwBtG{BrG_CpGcClGgCjGkCfGoCdGsC`GwC~FyCzF}CvFaDtFeDpFiDlFkDhFoDfFsDbFuD~EyDzE{DvE_ErEcEnEeEjEiEfEkEbEmE|DqExDsEtDuEpDyElD{EfD}EbD_F~CaFxCeFtCgFnCiFjCkFdCmF`CoFzBqFvBqFpBsFlBuFfBwFbBwF|AyFvA{FrA{FlA}FfA}FbA_G|@_Gv@aGr@aGl@aGf@cGb@cG\\cGVcGPcGLeGFeG@eGAeGEcGKcGQcGWcG[cGa@aGg@aGm@aGq@_Gw@_G}@}FaA}FgA{FmA{FqAyFwAyF}AwFaBuFgBsFmBqFqBqFwBoF{BmFaCkFeCiFkCgFoCeFuCcFyC_F}C}EcD_DaB'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.020182117381, -117.32526578476), new google.maps.LatLng(34.135833333333, -117.17388888889));
    polygon.altLow  = 0;
    polygon.altHigh = 3200;
    polygon.desc    = 'SAN BERNARDINO CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'SAN BERNARDINO CLASS D<br />SFC-3200');
    

// RIVERSIDE MARCH FIELD CLASS D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('erhnExfujU?Gf@sj@vBmj@hE_j@xGki@fJoh@rLog@|Ngf@dQyd@jSec@jUka@jWm_@dYi]zZ_[l\\sXz]aVb_@mSf`@uPda@{M~a@_Kpb@_H`c@_Ehc@_Bjc@>hc@`B~b@`Epb@`H|a@`Kda@|Mf`@vPb_@nSx]bVl\\rXzZ`[bYh]hWj_@jUja@hSbc@dQvd@|Ndf@rLlg@dJlh@vGhi@hE|i@vBjj@f@pj@g@pj@wBjj@gE|i@wGhi@eJlh@qLlg@}Ndf@cQvd@iSbc@kUja@iWl_@cYh]yZ`[k\\rXy]bVc_@nSe`@vPea@|M}a@`Kqb@bH_c@bEic@`Bkc@>ic@}Aac@_Esb@_H_b@}Jea@{Mg`@uPc_@mS{]aVm\\sX{Z_[eYi]kWk_@mUka@kSec@eQyd@}Ngf@sLog@gJoh@yGki@iE_j@yBmj@g@sj@'), map: map, strokeColor: "#527D90", strokeOpacity: 1, strokeWeight: 1, fillColor: "#527D90", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.797078249225, -117.35947309539), new google.maps.LatLng(33.964031731343, -117.15941735953));
    polygon.altLow  = 0;
    polygon.altHigh = 4000;
    polygon.desc    = 'RIVERSIDE MARCH FIELD CLASS D';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE MARCH FIELD CLASS D<br />SFC-4000');
    

// AKRON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gkzsF~`msR|bRhdO_ePnoa@b@fMItHMtHQtHUtHYrH]rHa@rHe@pHi@pHm@nHq@nHu@lHy@jH}@jHaAhHeAfHiAdHmAbHqA`HuA~GyA|G}AzGaBxGeBvGiBtGmBrGoBnGsBlGwBjG{BfG_CdGaC`GeC~FiCzFmCxFoCtFsCrFuCnFyCjF}CfF_DbFcD`FeD|EiDxEkDtEoDpEqDlEsDhEwDdEyD`E{DzD_EvDaErDcEnDeEjDgEdDiE`DkE|CoEvCqErCsEnCsEhCuEdCwE~ByEzB{EtB}EpB}EjB_FfBaF`BcF|AcFvAeFpAeFlAgFfAgF`AiF|@iFv@iFp@kFl@kFf@kF`@mF\\mFVmFPmFLmFFmF@mFAmFEmFKmFQmFWmF[kFa@kFg@kFk@iFq@iFw@iF{@gFaAgFgAeFkAeFqAcFwAcF{AaFaB_FeB_FkB}EoB{EuByE{BwE_CwEcCuEiCsEmCqEsCoEwCmE}CkEaDgEeDeEiDcEoDaEsD_EwD{D{DyD_EwDeEuDiEqDmEoDqEkDuEiDyEeD}EcDaF_DcF}CgFyCkFwCoFsCsFoCuFmCyFiC{FeC_GcCcG_CeG{BgGwBkGsBmGqBqGmBsGiBuGeBwGaByG}A}GyA_HuAaHqAcHoAeHkAeHgAgHcAiH_AkH{@mHu@mHq@oHm@oHi@qHe@qHa@sH]sHYuHUuHQuHMuHIuHEwHAwH>wHD_IHuHLuHPuHTuHXuH\\sH`@sHd@qHh@qHl@oHp@oHt@mHx@mH|@kH`AiHdAgHhAeHlAeHpAcHtAaHxA_H|A}G`ByGdBwGhBuGlBsGpBqGrBmGvBkGzBiG~BeGbCcGdC_GhC{FlCyFnCuFrCsFvCoFxCkF|CgF~CcFbDaFdD}EhDyEjDuEnDqEpDmErDiEvDeExDaEzD{D~DwD`EsDbEoDdEiDfEeDjEaDlE}CnEwCpEsCrEmChC}AxiPc{a@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.01925, -103.31155796332), new google.maps.LatLng(40.244082639535, -102.96352777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'AKRON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'AKRON CLASS E2<br />SFC-17999');
    

// ALAMOSA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yjgcFlwqdSnJdFd|Aiu@xjQcm]rrNbvMqhTtib@gbFrcCy@jI}@bJaA`JgA~IkA|IqA|IuAzI{AxI_BvIcBtIiBpImBnIsBlIwBjI{BfI_CdIeC`IiC~HmCzHqCxHwCtH{CrH_DnHcDjHgDfHkDbHoD~GsDzGwDvG{DrG_EnGcEjGgEfGkEbGmE~FqExFuEtFyEpF{EjF_FfFaF`FeF|EiFvEkFrEmFlEqFfEsFbEwF|DyFvD{FrD}FlDaGfDcG`DeGzCgGtCiGpCkGjCmGdCoG~BqGxBsGrBsGlBuGfBwG`ByGxAyGrA{GlA{GfA}G`A}Gz@_Ht@_Hn@_Hf@aH`@aHZaHTaHNaHHaH@aHAaHGaHMaHSaH[aHa@_Hg@_Hm@_Hs@}Gy@}GaA{GgA{GmAyGsAyGyAwG_BuGeBuGkBsGqBqGwBoG}BmGcCkGiCiGoCgGuCeG{CcGaDaGgD_GmD{FqDyFwDwF}DsFcEqFgEoFmEkFqEiFwEeF}EcFaF_FgF{EkFyEqFuEuFqEyFoE_GkEcGgEgGcEkG_EoG{DsGwDwGsD}GoD_HkDcHgDgHcDkH_DoH{CsHwCuHsCyHmC}HiC_IeCcIaCeI{BiIwBkIsBmImBoIiBsIeBuI_BwI{AyIuA{IqA}ImA_JgAaJcAaJ}@cJy@eJs@eJo@gJi@gJe@iJ_@iJ[kJUkJOkJKkJEkJAkJ@uJDkJJkJNkJTkJXkJ^iJd@iJh@gJn@gJr@eJx@eJ|@cJbAaJfAaJjA_JpA}ItA{IzAyI~AwIdBuIhBsIlBoIrBmIvBkIzBiI`CeIdCcIhC_IlC}HrCyHvCuHzCsH~CoHbDkHfDgHjDcHnDaHrD}GvDyGzDsG~DoGbEkGfEgGjEcGnE_GpEyFtEuFxEqFzEkF~EgFbFaFdF}EhFwEjFsEnFmEpFgErFcEvF}DxFwDzFqD~FmD`GgDbGaDdG{CfGuChGoCjGiClGcCnG}BpGwBrGqBtGkBtGeBvG_BxGyAxGsAzGmAzGgA|GaA|Gy@~Gs@~Gm@~Gg@`Ha@`H[`HS`HM`HG`HA`H@`HF`HN`HT`HZ`H`@~Gf@~Gn@~Gt@|Gz@|G`AzGfAzGlAxGrAxGxAvG~AtGfBrGlBrGrBpGxBnG~BlGdCjGjChGnCfGtCdGzC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.207611111111, -105.97165390266), new google.maps.LatLng(37.518496632513, -105.60947222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ALAMOSA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'ALAMOSA CLASS E2<br />SFC-17999');
    

// ALBUQUERQUE CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ytetEzosiSsg@d~IahDy[xAuFvBaIpBcIlBeIhBgIbBiI~AkIzAmItAoIpAqIjAsIfAuI`AwI|@wIv@yIr@yIl@{Ih@{Ib@}I^}IX_JT_JN_JJ_JD_J@_JA_JE_JK_JO_JU_JY_JSgGr`DpZ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.932133333333, -106.65730277778), new google.maps.LatLng(34.965688888889, -106.59668888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ALBUQUERQUE CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'ALBUQUERQUE CLASS E3<br />SFC-17999');
    

// ALBUQUERQUE CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}fwtE~hhjS?zsDcnG??{_EhIpBvG|AxGvAxGpAzGjAzGdA|G~@|Gv@~Gp@~Gj@~Gd@~G^`HX`HR`HL`HF`H@`HA`HG`HM`HU`H[~Ga@~Gg@~Gm@|Gs@|Gy@|G_AzGeAtG{@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.022075, -106.73647222222), new google.maps.LatLng(35.065463888889, -106.70561111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ALBUQUERQUE CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'ALBUQUERQUE CLASS E3<br />SFC-17999');
    

// ALLIANCE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yom_GvwxqRdIrB`rIq}HzuHlqQanIpyH`@tOVzKPzKJzKFzK@zKAzKEzKKzKQzKWzK[xKa@xKg@xKk@vKq@vKw@tK{@rKaApKeApKkAnKqAlKuAjK{AhK_BfKeBdKiB`KoB~JsB|JyBxJ}BvJcCrJgCpJmClJqChJuCfJ{CbJ_D~IcDzIiDvImDrIqDnIuDjIyDfI}DbIcE|HgExHkEtHoEnHsEjHwEdHyE`H}EzGaFvGeFpGiFjGkFdGoF`GsFzFuFtFyFnF}FhF_GbFcG|EeGvEgGpEkGjEmGdEoG|DsGvDuGpDwGjDyGbD{G|C}GvC_HnCaHhCcHbCeHzBeHtBgHlBiHfBkH~AkHxAmHpAmHjAoHbAoHz@qHt@qHl@qHf@qH^sHXsHPsHHsHBsHAsHIsHOwFcAi}@xdC{pBm~AyzA|mBq{IcgOh|BqvCmAyJqAmKkAoKgAqKaAqK{@sKw@uKq@uKk@wKg@yKa@yK[yKW{KQ{KK{KG{KA{K@gLF{KJ{KP{KV{KZyK`@yKf@yKj@wKp@wKv@uKz@sK`AqKdAqKjAoKpAmKtAkKzAiK~AgKdBcKhBaKnB_KrB}JxByJ|BwJbCsJfCqJlCmJpCiJtCeJzCcJ~C_JbD{IhDwIlDsIpDoItDkIxDeI|DaIbE}HfEyHjEsHnEoHrEiHvEeHxE_H|E{G`FuGdFoGhFkGjFeGnF_GrFyFtFsFxFmFzFgF~FaF`G{EdGuEfGoEjGiElGcEnG}DpGwDtGoDvGiDxGcDzG{C|GuC~GoC`HgCbHaCbHyBdHsBfHkBhHeBhH}AjHwAjHoAlHiAlHaAnH{@nHs@nHm@pHe@pH]pHWpHOpHIpHApHBpHHpHPpHVpH^pHf@nHl@nHt@nHz@lHbAlHhAjHpAjHvAhH~AhHdBfHlBdHrBbHzB`H`C`HhC~GnC|GtCzG|CxGbD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.911777777778, -102.94597222222), new google.maps.LatLng(42.157777777778, -102.64541666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ALLIANCE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'ALLIANCE CLASS E2<br />SFC-17999');
    

// ARCATA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cpuxFlcntVr`JjxJakFd_KyvGwiH_BzAyDtD{DpD}DlDaEfDcEbDeE~CgEzCiEtCkEpCmElCoEfCqEbCqE|BsExBuErBwEnBwEhByEdB{E~A{EzA}EtA_FpA_FjAaFfAaF`AcFz@cFv@cFp@eFj@eFf@eF`@eFZgFVgFPgFJgFFgF@gFAgFEgFKgFQgFUeF[eFa@eFe@eFk@cFq@cFu@cF{@aFaAaFeA_FkA_FoA}EuA}E{A{E_ByEeByEiBwEoBuEsBsEyBqE}BqEaCoEgCmEkCkEqCiEuCgEyCeE_DcEcDaEgD_EkD{DqDyDuDwDyDuD}DqDaEoDeEmDiEiDmEgDqEeDuEaDyE_D}E{CaFyCeFuCgFsCkFoCoFkCqFiCuFeCyFcC{F_C_G{BaGwBeGuBgGqBiGmBmGiBoGgBqGcBsG_BuG{AwGwA{GsA}GoA}GkA_HiAaHeAcHaAeH}@gHy@gHu@iHq@kHm@kHi@mHe@mHa@oH]oHYoHUqHQqHMqHIqHEqHAqH@yHDqHHqHLqHPqHTqHXoH\\oH`@oHd@mHh@mHl@kHp@kHt@iHx@gH|@gH`AeHdAcHfAaHjA_HnA_HrA}GvA{GzAwG~AuGbBsGdBqGhBoGlBmGpBiGtBgGvBeGzBaG~B_G`C{FdCyFhCuFjCqFnCoFrCkFtCgFxCeFzCaF~C}E`DyEdDuEfDqEhDmElDiEnDeEpDaEtD}DvDyDxDuDzDqD|DkD`EgDbEcDdE_DfEyChEuCjEqClEkCnEgCpEcCpE}BrEyBtEsBvEoBxEiBxEeBzE_B|E{A|EuA~EoA~EkA`FeA`FaAbF{@bFu@bFq@dFk@dFe@dFa@dF[fFUfFQfFKfFEfFAfF@fFFfFJfFPfFVdFZdF`@dFf@dFj@bFp@bFv@bFz@`F`A`FdA~EjA~EpA|EtA|EzAzE~AxEdBxEhBvEnBtErBrExBpE|BpEbCnEfClEjCjEpChEtCfEzCdE~CbEbD`EfD|DlDzDpDxDtDvDxDtD|DpD`EnDdElDhEhDlEfDpEbDtE`DxE~C|EzC`FxCdFtCfFrCjFnCnFjCpFhCtFdCvF`CzF~B~FzB`GvBbGtBfGpBhGlBjGhBnGdBpGbBrG~AtGzAvGvAxGrAzGnA|GjA~GfA`HbAbH`AdH|@dHx@fHt@hHp@hHl@jHh@jHd@lH`@lH\\nHXnHTnHPnHPtJ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.854958333333, -124.22626111111), new google.maps.LatLng(41.044888058749, -124.02065632527));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ARCATA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'ARCATA CLASS E2<br />SFC-17999');
    

// ASPEN CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('muynFrmikSa@oJM_IIaIEaIAaI@aIDiIHaIL_IP_IV_IZ_I^}Hb@}Hf@{Hj@{Hn@yHt@yHx@wH|@wH`AuHdAsHhAqHlAoHpAmHtAkHxAiH|AgH`BeHdBcHhBaHlB_HpB{GtByGxBwG|BsG`CqGdCmGhCkGjCgGnCeGrCaGvC}FzC{F|CwF`DsFdDoFfDkFjDgFlDcFpD_FrD{EvDwExDsE|DoE~DkEbEgEdEaEfE}DjEyDlEuDnEoDpEkDrEgDtEaDxE}CzEwC|EsC~EmC`FiCbFcCbF_CdFyBfFsBhFoBjFiBjFcBlF_BnFyAnFsApFoApFiArFcArF}@tFy@tFs@tFm@vFg@vFc@vF]vFWxFQxFKxFGxFAxF@xFFxFLxFPvFVvF\\vFb@vFh@tFl@tFr@tFx@rF~@rFbApFhApFnAnFtAnFxAlF~AjFdBjFhBhFnBfFtBdFxBbF~B`FbC`FhC~ElC|ErCzEvCvE|CtE`DrEfDpEjDnEnDlEtDhExDfE|DdEbE`EfE~DjE|DnExDrEvDvErDzEpD~ElDbFjDfFfDjFbDnF`DrF|CvFxCxFvC|FrC`GnCdGjCfGhCjGdClG`CpG|BrGxBvGtBxGpBzGlB|GhB`HdBbH`BdH|AfHxAhHtAjHpAlHlAnHhApHdArH`AtH|@tHx@vHt@xHn@xHj@zHf@zHb@|H^|HZ|HV~HP~HL~HH~HD~H@~HA~HE~HI~HM~HQ~HU~H[|H_@|Hc@|Hg@zHk@zHo@xHu@xHy@vH}@tHaAtHeArHiApHmAnHqAlHuAjHyAhH}AfHaBdHeBbHiB`HmB~GqBzGuBxGyBvG}BrGaCpGeClGiCjGkCfGoCdGsC`GwC|FyCzF}CvFaDrFcDnFgDjFkDfFmDbFqD~EsDzEwDvEyDrE}DnE_EjEaEfEeEbEgE|DiExDmEtDoEnDqEjDsEfDuE`DwE|CyEvC}ErC_FlC_FhCaFbCcF~BeFxBgFtBiFnBkFhBkFdBmF~AoFxAoFtAqFnAqFhAsFdAsF~@uFx@uFr@uFn@wFh@wFb@wF\\wFVyFRyFLyFFyF@yFAyFEyFKyFQwFWwF]yF_@uoHbyJcfKchOxnHkxJ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.151288999127, -107.021), new google.maps.LatLng(39.343083333333, -106.77662361136));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ASPEN CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'ASPEN CLASS E4<br />SFC-17999');
    

// ASTORIA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wpoxGtobtVsuJvQiKm_OiHmEoEsCmEyCkE}CiEcDgEgDeEmDcEqDaEwD}D{D{DaEyDeEwDiEuDoEqDsEoDwEmD{EiDaFgDeFeDiFaDmF_DqF{CuFyCyFuC}FsCaGoCeGkCgGiCkGeCoGaCqG_CuG{ByGwB{GuB_HqBaHmBeHiBgHgBiHcBmH_BoH{AqHwAsHsAuHoAwHkAyHgA{HeA}HaA_I}@aIy@cIu@cIq@eIm@gIi@gIe@iIa@iI]kIYkIUkIQmIMmIImIEmIAmI@wIDmIHmILmIPmITkIXkI\\kI`@iId@iIh@gIl@gIp@eIt@cIx@cI|@aI`A_IdA}HfA{HjAyHnAwHrAuHvAsHzAqH~AoHbBmHdBiHhBgHlBeHpBaHtB_HvB{GzByG~BuG`CsGdCoGhCkGjCgGnCeGrCaGtC}FxCyFzCuF~CqF`DmFdDiFfDeFhDaFlD{EnDwEpDsEtDoEvDiExDeEzDaE|D{D`EwDbEqDdEmDfEgDhEcDjE}ClEyCnEsCpEmCpEiCrEcCtE}BtDmA~jAcuf@ltJzm@kkAnzf@~BzB~DvD|DzDzD`ExDdEvDhErDnEpDrEnDvElDzEhD`FfDdFbDhF`DlF|CpFzCtFxCxFtC|FpC`GnCbGjCfGhCjGdCnG`CpG~BtGzBxGvBzGrB~GpB`HlBbHhBfHdBhHbBjH~AnHzApHvArHrAtHnAvHjAxHfAzHbA|H`A~H|@`Ix@`It@bIp@dIl@dIh@fId@fI`@hI\\hIXjIZbFuyCbbKbp@leAkCrE_DpFaDlFcDhFgDdFiD`FmD|EoDvEqDrEuDnEwDjEyDdE{D`E}D|DaEvDcErDeElDgEhD_F`EhK`aO'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.091638888889, -124.04791666667), new google.maps.LatLng(46.224707280555, -123.58602777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ASTORIA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'ASTORIA CLASS E2<br />SFC-17999');
    

// AURORA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k`qqFr~f~R|EiXxBuLe@giAHc{BH{qCHwMrHgF|EaD~E}C`FwCbFqCdFmCfFgChFcCjF}BlFwBnFqBnFmBpFgBrFaBrF{AtFwAvFqAvFkAxFeAxF_AxF{@zFu@zFo@|Fi@|Fc@|F]|FW|FQ|FM~FG~FA~F@~FF|FL|FR|FX|F^|Fb@zFh@zFn@zFt@xFz@xF`AxFfAvFjAtFpAtFvArF|ArF`BpFfBnFlBlFrBlFvBjF|BhFbCfFfCdFlCbFrC`FvC~E|C|E`DzEfDxEjDtEpDrEtDpExDnE~DjEbEhEfEfElEbEpE`EtE|DxEzD~EvDbFtDfFpDjFnDnFjDrFfDvFdDzF`D|F|C`GxCdGvChGrCjGnCnGjCrGfCtGbCxG~BzG|B~GxB`HtBbHpBfHlBhHhBjHdBlH~ApHzArHvAtHrAvHnAxHjAxHfAzHbA|H~@~Hx@`It@`Ip@bIl@bIh@dIb@dI^fIZfIVfIRhILhIHhIDhI@hIAhIEhIIhIMhIShIWfI[fI_@fIc@dIi@dIm@bIq@bIu@`Iy@`I_A~HcA|HgAzHkAzHoAxHsAvHwAtH{ArH_BpHcBlHiBjHmBhHqBfHuBdHyB`H{B~G_CzGcCxGgCtGkCrGoCnGsCjGwChGyCdG}C`GaD|FeDzFgDvFkDrFoDnFqDjFuDfFwDbF{D~E}DxEaEtEcEpEgElEiEhEkEbEoE~DqEzDsEtDuEpDyEjD{EfD}E`D_F|CaFvCcFrCeFlCgFfCiFbCkF|BmFvBmFrBoFlBqFfBsFbBsF|AuFvAuFpAwFjAyFfAyF`AyFz@{Ft@{Fn@{Fh@}Fb@}F^}FX}FR}FL_GF_G@_GA_GG}FM}FQ}FW}F]}Fc@}Fi@{Fo@{Fu@yFy@yF_AyFeAwFkAwFqAuFwAsF{AsFaBqFgBoFmBoFqBmFwBkF}BiFaCgFgCeFmCcFqCaFwC_F{C}EaD{EgDyEkDwEoDsEuDqEyDoE_EmEcEiEgEgEmEcEqEaEuE_EyE{D}EyDcFuDgFqDkFoDoFkDsFgDwFeD{FaD}F}CaG{CeGwCiGsCmGoCoGkCsGgCuGeCyGaC{G}B_HyBaHaBcHjIq^da@kdBjUg`AzPgs@`Nm[jE{HpIiPlh@_gA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.628351305259, -104.84699225921), new google.maps.LatLng(39.767027777778, -104.65695213356));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'AURORA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'AURORA CLASS E2<br />SFC-17999');
    

// AURORA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m_aqFbd{}RkBaBvkIg~ExbExzMohIpaFIgIIiIMiISiIWiI[gI_@gIc@eIi@eIm@eIq@cIu@aIy@aI_A_IcA}HgA{HkA{HoAyHsAwHwAuH{AsHaBqHeBoHiBkHmBiHqBgHuBeHyBaH}B_HaC{GcCyGgCuGkCsGoCoGsCmGwCiG{CeG}CaGaD_GeD{FgDwFkDsFoDoFqDkFuDgFwDcF{D_F}DyEaEuEcEqEgEmEiEiEmEcEoE_E'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.575555555556, -104.75027777778), new google.maps.LatLng(39.660138888889, -104.63788888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'AURORA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'AURORA CLASS E4<br />SFC-17999');
    

// BAKER CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sjvpGdxrnUgrHzdK_wJukQdiIeaLVmKTcIXcI\\aI`@aId@aIh@_Il@_Ip@}Ht@{Hx@{H|@yH`AwHbAuHfAsHjAqHnAoHrAmHvAkHzAiH~AgHbBeHdBcHhB_HlB}GpB{GrBwGvBuGzBqG~BoG`CkGdCgGhCeGjCaGnC}FpCyFtCwFvCsFzCoF|CkF`DgFbDcFfD_FhD{ElDwEnDqEpDmErDiEvDeExDaEzD{D|DwD~DqD`EmDdEiDfEcDhE_DjEyClEuClEoCnEkCpEeCrE_CtE{BvEuBvEqBxEkBzEeBzE_B|E{A|EuA~EoA~EiA`FeA`F_AbFy@bFs@bFm@dFi@dFc@dF]dFWdFQdFKfFGfFAfF@fFFdFLdFRdFVdF\\dFb@dFh@bFn@bFt@bFx@`F~@`FdA~EjA~EnA|EtA|EzAzE`BzEdBxEjBvEpBtEtBtEzBrE`CpEdCnEjClEnCjEtChExCfE~CdEbDbEhD`ElD~DrD|DvDzDzDxD`EvDdErDhEpDlEnDpEjDvEhDzEfD~EbDbF`DfF|CjFzCnFvCrFtCvFpCxFnC|FjC`GhCdGdCfG`CjG~BlGzBpGvBtGrBvGpBxGlB|GhB~GdB`H`BdH~AfHzAhHvAjHrAlHnAnHjApHfArHbAtH~@vH|@xHx@xHt@zHp@|Hl@|Hh@~Hd@~H`@`I\\`IX`ITbIPbILbIHbIDbI@bI?bIEbIIbIMbIQbIUbIY`I]`Ia@`Ie@~Hi@~Hm@|Hq@|Hu@zHy@xH{@xH_AvHcAtHgArHkApHoAnHsAlHwAjH{AhH_BfHaBdHeB`HiB~GmB|GqBxGsBvGwBtG{BpG}BnGaCjGeCfGgCdGkC`GoC|FqCxFuCvFwCrF{CnF}CjFaDfFcDbFgD~EiDzEkDvEoDrEqDlEsDhEwDdEyD`E{DzD}DvD_ErDaElDcEhDeEbDgE~CiExCkEtCmEnCoEjCqEdCsE`CuEzBuEtBwEpByEjB{EdB{E`B}EzA}EtA_FpA_FjAaFdAaF~@cFx@cFt@cFn@eFh@eFb@eF\\eFXeFReFLgFFgF@gFAgFGeFKeFQeFWeF]eFc@eFi@iCG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.771537579927, -117.96466666667), new google.maps.LatLng(44.957277777778, -117.71623375184));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BAKER CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BAKER CLASS E2<br />SFC-17999');
    

// BAKERSFIELD CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s|wwElgtuU?Gf@mk@vBgk@hEyj@xGej@fJii@rLgh@|N_g@dQoe@hS{c@jUab@jW_`@dY{]zZq[l\\cYz]oVb_@ySf`@aQda@cN~a@eKpb@eH~b@cEhc@_Bjc@>hc@bB~b@dEpb@fH|a@fKda@dNd`@`Qb_@zSx]pVj\\bYxZp[bYz]hW~_@jU~a@hSxc@dQle@|N|f@rLdh@dJfi@vG`j@hEvj@vBdk@f@jk@g@jk@wBdk@gEvj@wG`j@eJfi@qLdh@{N|f@cQne@iSxc@kU~a@iW~_@cYz]yZp[k\\bYy]pVa_@zSe`@bQea@fN}a@hKqb@fH_c@dEgc@bBkc@>ic@_B_c@cEqb@eH_b@eKea@cNg`@_Qc_@yS{]oVm\\aY{Zq[eY{]kW_`@mU_b@kS{c@eQoe@}N}f@sLgh@gJii@yGej@iEyj@yBgk@g@mk@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.350155090436, -119.15857913366), new google.maps.LatLng(35.517065978203, -118.95475579246));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BAKERSFIELD CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BAKERSFIELD CLASS E2<br />SFC-17999');
    

// BATTLE MOUNTAIN CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}bqvF`cyhUsCtBoEdDqE`DsE|CuEvCwErCyElC{EhC}EbC_F~B_FxBaFrBcFnBeFhBeFdBgF~AiFxAiFtAkFnAkFhAmFbAmF~@oFx@oFr@oFl@qFh@qFb@qF\\qFVqFRsFLsFFsF@sFAsFEsFKqFQqFWqF]qFa@qFg@oFm@oFs@oFy@mF}@mFcAkFiAkFmAiFsAiFyAgF_BeFcBeFiBcFmBaFsB_FyB_F}B}EcC{EgCyEmCwEqCuEwCsE{CqEaDoEeDmEkDiEoDgEsDeEwDcE}DaEaE}DeE{DiEyDoEuDsEsDwEoD{EmD_FiDcFgDgFcDkFaDoF}CqFyCuFwCyFsC}FoC_GmCcGiCgGeCiGaCmG}BoG{BsGwBuGsBwGoB{GkB}GgB_HcBaH_BeH{AgHwAiHsAkHoAmHkAoHgAqHcAqH_AsH{@uHw@wHs@wHo@yHk@yHg@{Hc@{H_@}HY}HU}HQ}HM_II_IE_IA_I@gID_IH_IL_IP}HT}HX}H\\}Hb@{Hf@{Hj@yHn@yHr@wHv@wHz@uH~@sHbAqHfAqHjAoHnAmHrAkHvAiHzAgH~AeHbBaHfB_HjB}GnB{GrBwGvBuGzBsG|BoG`CmGdCiGhCgGlCcGnC_GrC}FvCyFxCuF|CqF`DoFbDkFfDgFhDcFlD_FnD{ErDwEtDsEvDoEzDiE|DeE`EaEbE}DdEyDfEsDhEoDlEkDnEeDpEaDrE{CtEwCvEqCxEmCzEgC|EcC~E}B~EyB`FsBbFoBdFiBdFcBfF_BhFyAhFsAjFoAjFiAlFcAlF}@nFy@nFs@nFm@pFg@pFc@pF]pFWpFQrFKrFGrFArF@rFFrFLpFPpFVpF\\pFb@pFh@nFl@nFr@nFx@lF~@lFbAjFhAjFnAhFrAhFxAfF~AdFbBdFhBbFnB`FrB~ExB~E~B|EbCzEhCxElCvErCtEvCrE|CpE`DnEdDlEjDhEnDfErDdExDbE|D~D`E|DdEzDhEvDnEtDrErDvEnDzElD~EhDbFfDfFbDjF~CnF|CpFxCtFvCxFrC|FnC~FjCbGhCfGdChG`ClG|BnGxBrGvBtGrBvGnBzGjB|GfB~GbB`H~AbHzAdHvAhHrAjHnAjHjAlHfAnHbApH~@rHz@tHv@tHr@vHn@vHj@xHf@xHb@zH\\zHX|HT|HP|HL|HH|HD~H@~HA~HE~HI|HM|HQ|HU|HY|H]zHc@zHg@xHk@xHo@vHs@vHw@tH{@tH_ArHcApHkAtLryGn`HsrDflHiyGg`H'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.487352777778, -116.99798055556), new google.maps.LatLng(40.669187018671, -116.78258150403));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BATTLE MOUNTAIN CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BATTLE MOUNTAIN CLASS E2<br />SFC-17999');
    

// BELLINGHAM CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_dfiHxb|jV?G^al@`B{k@bDmk@dFwj@dH{i@bJyh@`Log@zMaf@rOkd@hQob@|Ro`@lTg^xU}[`WmYfXyVfYcTdZgQ|ZiNr[kKb\\iHl\\eEt\\aBv\\>t\\dBl\\hE`\\jHp[lK|ZlNdZhQfYdTdXzV`WnYvU|[jTf^zRl`@hQnb@rOhd@zM~e@~Klg@bJth@dHxi@dFrj@bDhk@`Bvk@^|k@_@|k@aBvk@cDhk@eFrj@cHxi@cJvh@_Llg@yM~e@sOhd@gQnb@{Rn`@kTh^wU|[aWnYeXzVgYdTeZjQ}ZlNq[lKa\\lHm\\hEu\\dBw\\@u\\aBm\\eEc\\gHs[iK_[iNeZgQiYaTgXyVaWmYyU}[mTg^}Rm`@iQob@sOkd@{M_f@aLog@cJyh@eH{i@eFwj@eDmk@cB{k@_@al@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.724418839416, -122.64080661163), new google.maps.LatLng(48.8609692384, -122.43425054253));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BELLINGHAM CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BELLINGHAM CLASS E2<br />SFC-17999');
    

// BISHOP CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qbpcFx{lqU?G`@ie@dBce@hDwd@jFed@lHmc@lJob@jLma@fNe`@`Pw^xQe]lSm[~TqYjVqWtWoUzXgS~Y}PzZoNt[aLj\\oIz\\{Ff]gDl]sAp]>l]tAf]hDz\\|Fj\\pIt[`LzZpN|Y|PzXfStWnUjVpW|TpYlSl[vQb]`Pt^fNb`@jLja@lJlb@lHjc@jFbd@fDrd@dB~d@`@de@_@de@cB~d@gDtd@kFbd@kHjc@kJlb@kLja@gNb`@aPt^wQb]kSl[}TpYkVrWuWnU{XhS}Y~P{ZpNu[bLk\\pI{\\~Fg]jDm]tAq]>m]qAg]gD{\\{Fk\\oIu[_L}ZoN_Z}P}XgSwWmUmVqW_UqYmSm[yQc]aPw^gNc`@kLma@mJob@mHmc@kFed@iDwd@eBce@a@ie@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.30297537641, -118.45137163979), new google.maps.LatLng(37.443134904122, -118.27585195816));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BISHOP CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BISHOP CLASS E2<br />SFC-17999');
    

// BLYTHE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sgslEzsd{T?E`@md@fBgd@lD{c@pFic@rHsb@tJua@tLs`@rNk_@nP_^fRo\\|SyZnU_Y~V_WhX}TpYyRrZoPp[eNj\\wK`]gIr]wF~]cDd^qAh^>d^rA~]dDr]vF`]hIj\\xKp[dNrZpPnYxRhX~T|V~VnU|X|SvZfRl\\nP~]rNj_@tLp`@tJra@rHpb@pFfc@lDxc@fBdd@`@jd@a@jd@gBdd@kDxc@qFfc@sHpb@uJta@uLr`@sNj_@mP~]gRl\\{SxZoU~X}V`WiX~ToYxRsZpPq[fNk\\xKa]hIs]xF_^fDe^rAi^>e^qA_^cDs]uFa]gIm\\wKq[eNsZoPqYwRiX}T_W_WoU}X}SwZgRm\\oP_^sNk_@wLs`@wJua@uHqb@qFic@mD{c@gBgd@a@md@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.547398208474, -114.80266918312), new google.maps.LatLng(33.690984292091, -114.63114327642));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BLYTHE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BLYTHE CLASS E2<br />SFC-17999');
    

// BOISE CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{owhGtl`eUkuHdaVqvRauNdsHg}UfBpMtAzJzAxJ~AvJdBtJhBrJlBnJrBlJvBjJzBfJ~BbJdC`JhC|IlCzIpCvIvCrIzCnI~CjIbDfIfDbIjD~HnDzHrDvHvDrHzDlH~DhHbEdHfE~GjEzGlEvGpEpGtEjGvEfGzE`G~E|F`FvFdFpFfFjFjFdFlF`FpFzErFtEvFnExFhEzFbE|F|D`GvDbGnDdGhDfGbDhG|CjGvClGnCnGhCpGbCpG|BrGtBtGnBvGhBvG`BxGzAxGrAzGlAzGfA|G~@|Gx@~Gp@~Gj@~Gb@~G\\`HT`HN`HF`H@`HC`HI`HQ`HW~G_@~Ge@~Gk@~Gs@|Gy@|GaAzGgAzGoAxGuAxG{AlEW'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.543183333333, -116.45183888889), new google.maps.LatLng(43.6939, -116.25401666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BOISE CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'BOISE CLASS E3<br />SFC-17999');
    

// BOISE CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{{diGtixcUz~Judd@nqXnsNksGztY~Dv`NatBvAJyHNmKJmKDmK@mKAmKEmKKmKOmKUmKYmK_@kKe@kKi@iKo@iKs@gKy@eK}@eKaAcKgAaKkA_KqA}JuA{J{AyJ_BwJcBuJiBsJmBoJsBmJwBiJ{BgJ_CeJeCaJiC}ImC{IqCwIwCsI{CoI_DkIcDgIgDcIkD_IoD{HsDwHwDsH{DoH_EiHcEeHgEaHiE{GmEwGqEqGuEmGwEgG{EcG_F}FaFwFeFqFgFmFkFgFmFaFqF{EsFuEwFoEyFiE{FcE}F}DaGwDcGqDeGkDgGeDiG}CkGwCmGqCoGkCqGeCsG}BsGwBuGqBwGiBwGcByG{A{GuA{GoA}GgA}GaA}Gy@_Hs@_Hk@_He@aH]aHWaHOaHIaHCaH@aHFaHNaHTaH\\_Hb@_Hj@_Hp@_Hx@}G~@}GfA{GlA{GtAyGzAyG`BwGhBuGnBsGtBsG|BqGbCoGhCmGpCkGvCiG|CgGbDeGjDcGpDaGvD_G|D{FbEyFhEwFnEsFtEqFzEwBfD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.419286111111, -116.23231388889), new google.maps.LatLng(43.611669444444, -115.93808333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BOISE CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'BOISE CLASS E3<br />SFC-17999');
    

// BOZEMAN CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('un}vG~jleT?Ih@cw@`Cyv@xEiv@nHou@bKkt@tMas@dPmq@rRqo@|Tom@dWek@fYuh@f[}e@`]_c@v^}_@f`@s\\ra@gYzb@wUzc@aRtd@kNje@qJxe@uFbf@yBdf@@bf@|Bxe@zFje@tJtd@nNxc@dRxb@xUra@hYf`@v\\t^|_@~\\~b@d[|e@dYrh@bWbk@zTlm@pRno@bPhq@tMzr@`Kft@lHhu@xEbv@`Ctv@j@|v@i@|v@aCtv@wEbv@mHhu@aKft@sM|r@cPhq@qRno@{Tlm@aWbk@eYrh@e[|e@_]`c@u^~_@e`@v\\qa@jYyb@zUyc@fRud@nNie@vJye@zFcf@~Bef@@cf@wBye@uFke@oJud@iN{c@aR{b@uUsa@gYi`@s\\w^{_@a]_c@g[}e@gYsh@eWek@}Tom@sRqo@ePmq@uM_s@cKkt@oHmu@yEiv@cCyv@k@cw@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.687528325932, -111.28045369836), new google.maps.LatLng(45.867470253426, -111.02343716473));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BOZEMAN CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BOZEMAN CLASS E2<br />SFC-17999');
    

// BOZEMAN CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qnovGn~dfTg{Xhub@_qLmcSfvX}ob@xA`RbAtLfArLlApLrAnLvAlL|AjLbBhLfBdLlBbLpB`LvB|KzBzK`CvKdCrKjCpKnClKtChKxCdK|C`KbD|JfDxJjDtJpDpJtDjJxDfJ|DbJbE|IfExIjErInEnIrEhIvEbIzE~H~ExHbFrHfFlHhFfHlF`HpFzGtFtGvFnGzFhG~FbG`G|FdGtFfGnFjGhFlG`FnGzErGrEtGlEvGdExG~D|GvD~GpD`HhDbH`DdHzCfHrChHjChHdCjH|BlHtBnHlBnHfBtJtB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.795777777778, -111.46077777778), new google.maps.LatLng(45.99775, -111.17575));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BOZEMAN CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'BOZEMAN CLASS E4<br />SFC-17999');
    

// BOZEMAN CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ymtuGvcteTwgGx{Qs}DciDnJsIbGwF`G}F|FcGzFiGvFoGrFuGnF{GlFaHhFgHdFmH`FsH|EyHxE_ItEcIpEiIlEoIhEsIdEyI`E}I|DaJxDgJtDkJnDoJjDsJfDyJ`D}J|CaKxCeKrCiKnCkKhCoKdCsK~BuKzByKtB}KpB_LjBaLfBeL`BgL|AiLvAkLpAmLlAoLfAqL`AsL|@uLv@wLp@wLl@yLf@{L`@aRh~DriD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.657416666667, -111.28858333333), new google.maps.LatLng(45.730277777778, -111.1645));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BOZEMAN CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'BOZEMAN CLASS E4<br />SFC-17999');
    

// BREMERTON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_dpaHtnalV~nDegNxuFz`ElDwD`EkEbEeEdE_EfE{DhEuDjEqDlEkDnEeDpEaDrE{CtEuCvEoCxEiCzEeCzE_C|EyB~EsB`FmB`FgBbFaBbF{AdFuAdFoAfFiAfFcAhF}@hFw@hFq@jFk@jFe@jF_@jFYjFSlFMlFGlFAlF@lFFlFLjFRjFZjF`@jFf@jFl@hFr@hFx@hF~@fFdAfFjAdFpAdFvAbF|AbFbB`FhB`FlB~ErB|ExBzE~BzEdCxEjCvEpCtEtCrEzCpE`DnEfDlEjDjEpDhEtDfEzDdE`EbEdE~DjE|DnEzDtExDxEtD|ErDbFpDfFlDjFjDpFfDtFdDxF`D|F~C`GzCdGxChGtClGrCpGnCtGjCxGhC|GdC~G`CbH|BfHzBhHvBlHrBnHnBrHlBtHhBxHdBzH`B|H|A`IxAbItAdIpAfIlAhIhAjIdAlI`AnI|@pIx@rIt@rIp@tIt@fIbcIvgGqoG~tUumIqpG{Bv@aFhBcFbBcF|AeFvAeFpAgFjAgFdAiF~@iFx@iFr@kFl@kFf@kF`@kFZkFTkFLmFFmF@mFAmFGmFMkFSkFYkF_@kFe@kFk@iFq@iFw@iF}@gFcAgFiAeFoAeFuAcF{AcFaBaFgBaFmB_FsB}EyB{E_C{EeCyEiCwEoCuEuCsE{CqE_DoEeDmEkDkEqDiEuDgE{DeE_EcEeEaEiE}DoE{DsEyDyEwD}EsDcFqDgFmDkFkDoFiDuFeDyFcD}F_DaG}CeGyCiGuCmGsCqGoCuGkCyGiC}GeC_HaCcH_CgH{BiHwBmHsBqHoBsHmBuHiByHeB{HaB_I}AaIyAcIuAeIqAgImAiIiAkIeAmIaAoI}@qIy@sIu@uIq@uIm@wIi@yIe@yIa@{I]{IY{IU}IQ}IM}II}IE}IA}IC{Jk{FgeE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.373833333333, -122.90172222222), new google.maps.LatLng(47.601444444444, -122.65080555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BREMERTON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BREMERTON CLASS E2<br />SFC-17999');
    

// BRYCE CANYON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{eqeFtnnkT?G`@me@dBge@hD{d@jFid@lHqc@lJub@jLqa@fNi`@`P{^xQi]lSq[~TuYjVuWtWqUzXkS~Y_QzZsNt[cLj\\qIz\\}Ff]iDl]sAp]>l]tAf]jDz\\~Fj\\rIt[bLzZrN|Y`QzXjStWpUjVtW|TtYlSp[vQf]`Pz^fNf`@jLna@lJrb@lHnc@jFfd@fDxd@dBde@`@je@_@je@cBde@gDxd@kFfd@kHpc@kJrb@kLpa@gNf`@aPz^wQh]kSp[}TtYkVtWuWrU{XjS}Y`Q{ZrNu[dLi\\rI{\\~Fg]jDm]tAq]>m]sAg]gD{\\}Fk\\oIu[aL}ZqN_Z_Q}XiSwWqUmVuW_UuYmSq[yQi]aP{^gNi`@kLqa@mJub@mHqc@kFid@iD{d@eBge@a@me@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.636312674189, -112.23398544973), new google.maps.LatLng(37.776464270488, -112.05768259835));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BRYCE CANYON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BRYCE CANYON CLASS E2<br />SFC-17999');
    

// BURBANK-GLENDALE-PASADENA CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e`gpEhdjqUX{I^{Id@yIh@yIn@yIr@wIx@uI|@uIbAsIfAqIjAqIpAoItAmIzAkI~AiIdBgIhBeIlBcIrB_IvB}HzB{H`CyHdCuHhCsHlCoHpCmHvCiHzCeH~CcHbD_HfD{GjDwGnDuGrDqGvDmGzDiG~DeGbEaGfE}FjEyFlEsFpEoFtEkFxEgFzEaF~E}EbFyEdFsEhFoEjFiEnFeEpF_ErF{DvFuDxFoDzFkD~FeD`G_DbG{CdGuCfGoChGiCjGcClG_CnGyBpGsBrGmBrGgBtGaBvG{AxGuAxGoAzGiAzGcA|G}@|Gw@~Gq@~Gk@~Ge@`H_@`HY`HS`HM`HG`HEsgO`gQVyI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.200533333333, -118.35138611111), new google.maps.LatLng(34.283836111111, -118.25793611111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BURBANK-GLENDALE-PASADENA CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'BURBANK-GLENDALE-PASADENA CLASS E3<br />SFC-17999');
    

// BURLEY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('am`cG~zguTt@mH}yGguGhjDw~HnzGxuG`DeC~D_D`EyCbEuCdEqCfEkChEgCjEaClE}BnEyBnEsBpEoBrEiBrEeBtE_BvEyAlGwBpeLkw\\rhPf`MejMji_@CdFCpHGpHKpHOnHSnHWnH[nH_@lHc@lHg@jHk@jHo@hHs@hHw@fH{@dH_AdHcAbHeA`HiA~GmA|GqAzGuAxGyAvG}AtG_BrGcBpGgBnGkBjGmBhGqBfGuBbGwB`G{B~F_CzFaCxFeCtFiCpFkCnFoCjFqCfFuCdFwC`F{C|E}CxE_DtEcDpEeDlEiDhEkDdEmD`EoD|DsDxDuDtDwDpDyDlD{DfD}DbD_E~CaEzCcEtCeEpCgElCiEfCkEbCmE|BoExBoErBqEnBsEhBuEdBaF`BgbO|cc@gaNogKvsCenIixB{xE~nKyvKl}@qkCs@yEgAaHcAcH_AeH{@eHw@gHs@iHo@iHk@kHg@kHc@mH_@mH[oHWoHSoHOoHKqHGqHEqHAqH>yHBqHFqHJqHNoHRoHVoHZoH^mHb@mHf@kHj@kHn@iHr@iH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.404194444444, -114.04047222222), new google.maps.LatLng(42.682277777778, -113.53463888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BURLEY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BURLEY CLASS E2<br />SFC-17999');
    

// BURNS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cauhGrpfuUpoGzpKcqGp~IunGyoKuBj@_FrA_FnAaFhAaFbAaF~@cFx@cFr@eFl@eFh@eFb@eF\\eFVgFRgFLgFFgF@gFAgFEgFKgFQgFWeF]eFa@eFg@eFm@cFs@cFw@cF}@aFcAaFiA_FmA_FsA}EyA}E}A{EcByEiByEmBwEsBuEyBsE}BqEcCqEgCoEmCmEqCkEwCiE{CgEaDeEeDcEiDaEoD}DsD{DwDyD}DwDaEuDeEqDiEoDmEmDsEiDwEgD{EeD_FaDcF_DgF{CiFyCmFuCqFsCuFoCyFkC}FiC_GeCcGaCeG_CiG{BmGwBoGuBqGqBuGmBwGiB{GgB}GcB_H_BaH{AcHwAeHsAiHoAkHkAmHiAmHeAoHaAqH}@sHy@uHu@uHq@wHm@yHi@yHe@{Ha@{H]{HY}HU}HQ}HM}HI_IE_IA_I@gID_IH_IL}HP}HT}HX}H\\{H`@{Hd@{Hh@yHl@yHp@wHt@uHx@uH|@sH`AqHdAoHfAmHjAmHnAkHrAiHvAgHzAcH~AaHbB_HdB}GhB{GlBwGpBuGtBsGvBoGzBmG~BiG`CeGdCcGhC_GjC}FnCyFrCuFtCqFxCmFzCkF~CgF`DcFdD_FfD{EhDwElDsEnDmEpDiEtDeEvDaExD}DzDwD|DsD`EoDbEiDdEeDfEaDhE{CjEwClEqC|ByACobT~uJ?B|}PjrIcyJt_H`hNkqKf_MD`DP|HL|HH~HD~H@~H?~HE~HI~HM|HQ|HU|HY|H]zHa@zHe@zHi@xHm@xHq@vHu@tHy@tH}@rHaApHcAnHgAlHqAdI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.462444444444, -119.10705555556), new google.maps.LatLng(43.660000215618, -118.76469444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BURNS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BURNS CLASS E2<br />SFC-17999');
    

// BUTTE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('owmwGbegnTopIpj_@kiIc|EqMfSseKkdQjyQiaYU}MMeJIeJEeJAeJ@oJDeJHeJLeJPcJTcJZcJ^aJb@aJf@_Jj@_Jn@}It@}Ix@{I|@yI`AwIdAwIhAuIlAsIpAqItAoIxAkI|AiI`BgIdBeIhBaIlB_IpB}HtByHxBwH|BsH`CoHdCmHhCiHjCeHnCaHrC_HvC{GxCwG|CsG`DoGbDkGfDgGjDcGlD}FpDyFrDuFvDqFxDkF|DgF~DaF`E}EdEyEfEsEhEoElEiEnEcEpE_ErEyDtEsDvEoDxEiDzEcD|E}C~EyC`FsCbFmCdFgCfFaChF{BhFuBjFoBlFiBlFcBnF}ApFwApFqArFkArFeArF_AtFy@tFs@tFm@vFg@vF_@vFYvFSvFMvFGxFAxF@vFFvFNvFTvFZvF`@vFf@tFl@tFr@tFx@rF~@rFdArFjApFrAnFxAnF~AlFdBlFjBjFpBhFtBhFzBfF`CdFfCbFlC`FrC~ExC|E~CzEbDxEhDvEnDtEtDrExDpE~DnEbEjEhEhEnEfErEdExE`E|E~DbFzDfFxDjFvDpFrDtFpDxFlD|FhD`GfDfGbDjG`DnG|CrGxCvGvCzGrC|GnC`HjCdHfChHdClH`CnH|BrHxBtHtBxHpBzHlB~HhB`IdBbI`BfI|AhIxAjItAlIpAnIlApIhArIdAtI`AvI|@xIx@zIt@zIn@|Ij@~If@~Ib@`J^`JZ`JTbJPbJLbJHbJDbJ@bJAbJEbJIbJMbJQbJUbJ[`J_@`Jc@`Jg@~Ik@~Io@|Is@zIy@zI}@xIaAvIeAtIiArImApIqAnIuAlIyAjI}AhIaBfIeBbIiB`ImB~HqBzHuBxHyBtH}BrHaCnHeClHgChHkCdHoC`HsC~GuCzGyCvG}CrGaDnGcDjGgDfGiDbGmD|FqDxFsDtFwDpFyDjF{DfF_EbFaE|EeExEgErEiEnEkEhEoEdEqE~DsExDuEtDwEnDyEhD{EbD}E~C_FxCaFrCcFlCeFfCgF`CiFzBiFvBkFpBmFjBmFdBoF~AoFxAqFrAsFlAsFfAsF~@uFx@uFr@uFl@wFf@wF`@wFZyEZ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.883147091658, -112.76572222222), new google.maps.LatLng(46.1225, -112.39474741988));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'BUTTE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'BUTTE CLASS E2<br />SFC-17999');
    

// CAMARILLO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e~epEletuUyBtHskB{}[p{Vi`ChpBjc]uByDwCmFyCiF}CgFaDcFcD_FgD}EkDyEmDuEqDqEsDmEwDiEyDeE}DaE_E}DcEyDeEuDgEqDiEmDmEiDoEeDqEaDsE{CuEwCyEsC{EoC}EiC_FeCaF_CaF{BcFwBeFqBgFmBiFgBkFcBkF}AmFyAoFsAoFoAqFiAqFeAsF_AsF{@uFu@uFo@uFk@wFe@wFa@wF[wFUyFQyFKyFGyFAyF@yFDyFJyFPwFTwFZwF^wFd@uFj@uFn@uFt@sFx@sF~@qFdAqFhAoFnAoFrAmFxAkF|AkFbBiFfBgFlBeFpBcFvBcFzBaF~B_FdC}EhC{ElCyErCwEvCsEzCqE~CoEdDmEhDkElDgEpDeEtDcExD_E|D}D`EyDdEwDhEsDlEqDpEmDtEkDxEgD|EeD~EaDbF}CfF{CjFwClFsCpFoCrFmCvFiCxFeC|FaC~F}BbGyBdGuBfGqBhGmBlG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.155805555556, -119.05794444444), new google.maps.LatLng(34.296277777778, -118.88894444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CAMARILLO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'CAMARILLO CLASS E4<br />SFC-17999');
    

// CAMP GUERNSEY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}wiaGbbs~RmhDbrA}iBckKlhD}qA?kEEeKAgK@qKDeKJeKNeKTeKXeK^cKd@cKh@aKn@aKr@_Kx@_K|@}J`A{JfAyJjAwJpAuJtAsJzAqJ~AoJbBmJhBkJlBiJrBeJvBcJzB_J~B}IdCyIhCwIlCsIpCoIvCmIzCiI~CeIbDaIfD}HjDyHnDuHrDqHvDmHzDgH~DcHbE_HfE{GjEuGlEqGpEkGtEgGxEaGzE}F~EwF`FqFdFmFhFgFjFaFlF{EpFuErFqEvFkExFeEzF_E|FyD`GsDbGmDdGgDfGaDhGyCjGsClGmCnGgCpGaCpGyBrGsBtGmBvGgBvG_BxGyAzGsAzGkA|GeA|G_A|Gw@~Gq@~Gi@~Gc@`H]`HU`HO`HG`HA`H@`HH`HN`HV~G\\~Gb@~Gj@~Gp@|Gx@|G~@zGdAzGlAxGrAxGxAvG`BvGfBtGlBrGtBpGzBpG`CnGfClGlCjGtChGzCfG`DdGfDbGlD~FrD|FxDzF~DxFdEtFjErFpEpFvElFzEjF`FfFfFdFlF`FpF~EvFzE|FvE`GtEfGpEjGlEpGhEtGfExGbE~G~DbHzDfHvDlHrDpHnDtHjDxHfD|HbD`I~CdIzChItCjIpCnIlCrIhCtIdCxI~B|IzB~IvB`JpBdJlBfJhBhJbBlJ~AnJzApJtArJpAtJjAvJfAxJ`AzJ|@zJv@|Jr@~Jn@~Jh@`Kb@`K^bKXbKTbKNdKJdKDdK@dKAdKEdKKdKOdKUbKYbK_@bKc@`Ki@`Km@~Js@~Jw@|J}@zJaAzJgAxJkAvJqAtJuArJ{ApJ_BnJcBlJiBjJmBfJqBdJwBbJ{B~I_C|IeCxIiCtImCrIqCnIuCjI{ChI_DdIcD`IgD|HkDxHoDtHsDpHwDlH{DfH_EbHcE~GeEzGiEtGmEpGqEjGuEfGwE`G{E|F_FvFaFpFeFlFgFfFkF`FmF|EqFvEsFpEuFjEyFdE{F~D}FxD_GrDcGlDeGfDgG`DiGzCkGtCmGnCoGfCqG`CqGzBsGtBuGlBwGfBwG`ByGxAyGrA{GlA{GdA}G~@}Gx@_Hp@_Hj@_Hd@_H\\aHVaHNaHHaHBaHAaHGaHOaHUaH]_Hc@_Hi@_Hq@}Gw@}G_A}GeA{GkA{GsAyGyAwG_BwGgBuGmBsGsBsGyBqGaCoGgCmGmCkGsCiGyCgG_DeGgDcGmDaGsD}FyD{F_EyFeEwFkEsFqEqFuEmF{EkFaFiFgFeFmFaFqF_FwF{E}FyEaGuEgGqEkGmEqGkEuGgEyGcE_H_EcH{DgHwDmHsDqHiBaD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.176409246412, -104.84049730881), new google.maps.LatLng(42.370138888889, -104.61611372793));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CAMP GUERNSEY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CAMP GUERNSEY CLASS E2<br />SFC-17999');
    

// CAMP PENDLETON CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yasjEnqakU_B|F}gFyxFrbEyaGtmF`_GoE|BmE~BkEbCiEfCgEjCeEnCcErCaEvC_EzC{D~CyDbDwDfDuDjDqDnDoDrDmDtDiDxDgD|DeD`EaDbE_DfE{CjEyClEuCpEsCtEoCvEkCzEiC|EeC~EcCbF_CdF{BhFwBjFuBlFqBnFmBpFiBtFgBvFcBxF_BzF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.330638888889, -117.32391666667), new google.maps.LatLng(33.400138888889, -117.24252777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CAMP PENDLETON CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'CAMP PENDLETON CLASS E4<br />SFC-17999');
    

// CARLSBAD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oufiEnydkUmpFdhHimGkuHrtFqmHVlDZjE\\jE`@hEb@hEf@hEh@fEl@fEn@dEr@dEt@bEx@bEz@`E~@~D`A~DbA|DfAzDhAxDlAxDnAvDpAtDtArDvApDxAnD|AlD~AjD`BhDbBfDfBdDhBbDjB`DlB~CnB|CrBxCtBvCvBtCxBrCzBnC|BlC~BjC`CfCbCdCdCbCfC~BhC|BjCxBlCvBnCrBpCpBpClBrCjBtCfBvCdBvC`BxC|AzCzA|CvA|CtA~CpA~ClA`DjA`DfAbDbAdD~@dD|@dDx@fDt@fDp@hDn@hDj@hDf@jDb@jD`@rCZ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.135122222222, -117.38684444444), new google.maps.LatLng(33.217008333333, -117.28875833333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CARLSBAD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'CARLSBAD CLASS E4<br />SFC-17999');
    

// CARLSBAD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cnliE~jqjUuBfC}pAirNzoJetAvpAbrN}BcA}CuA_DqA_DmAaDkAaDgAcDcAcD_AeD}@eDy@gDu@gDs@gDo@iDk@iDg@iDc@kDa@kD]kDYkDUkDQmDOmDKmDGmDCmD?mD>mDBmDFmDJmDNkDPkDTkDXkD\\kD`@iDb@iDf@iDj@gDn@gDp@gDt@eDx@eD|@cD~@cDbAaDfAaDjA_DlA_DpA}CtA{CvA{CzAyC|AwC`BwCdBuCfBsCjBqClBoCpBoCrBmCvBkCxBiC|BgC~BeCbCcCdCaCfC_CjC}BlC{BnCyBrCwBtC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.106261111111, -117.24036944444), new google.maps.LatLng(33.178372222222, -117.14683888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CARLSBAD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'CARLSBAD CLASS E4<br />SFC-17999');
    

// CARLSBAD CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w{zdE`}j{R?Gd@_i@tByh@dEmh@rGyg@~I_g@jL_f@rNyd@xPkc@|Rya@|Tc`@zVe^tXe\\hZ_Zz[uWf]gUn^uRp_@aPn`@iMha@oJza@uGhb@yDpb@{Atb@>pb@|Ahb@zDza@vGfa@pJn`@jMp_@`Pn^vRf]fUx[tWhZ~YrXd\\xVd^|T``@|Rxa@xPjc@rNvd@hL|e@~I|f@rGvg@dEhh@tBvh@f@|h@e@|h@uBvh@cEhh@qGvg@_J|f@iL|e@sNvd@yPjc@{Rxa@}Tb`@yVd^sXd\\iZ~Yy[tWg]fUm^vRq_@bPo`@jMga@rJ{a@vGib@zDqb@|Aub@>qb@{Aib@wD{a@uGia@oJo`@iMs_@_Po^uRg]eU{[uWiZ_ZuXe\\{Ve^_Uc`@}Rya@yPkc@sNwd@kL_f@_J_g@sGyg@eEkh@wByh@g@_i@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.255671978071, -104.35966240539), new google.maps.LatLng(32.419326961375, -104.16700577268));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CARLSBAD CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CARLSBAD CLASS E2<br />SFC-17999');
    

// CASPER CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}mieGzyxhS?G`@oi@fBii@jD{h@pFih@rHmg@tJmf@tLge@rNyc@nPgb@fRo`@|Sq^nUo\\|ViZfX}WnYoUpZ}Rp[gPj\\oM`]sJp]wG|]{Dd^{Af^>d^~A|]|Dp]zG~\\vJh\\pMn[hPpZ|RnYnUfX~W|VhZlUn\\zSp^dRn`@lPdb@pNvc@tLde@tJjf@rHjg@nFdh@jDxh@fBfi@`@li@a@li@gBfi@kDxh@oFdh@sHjg@uJjf@sLde@qNxc@mPfb@eRn`@{Sp^mUn\\{VhZgX~WmYpUqZ~Ro[hPi\\pM_]vJq]zG}]|De^~Ag^@e^{A}]yDq]wGa]sJk\\mMq[gPsZ{RoYoUiX}W}ViZoUo\\}Sq^gRo`@oPgb@sNyc@uLge@uJmf@sHmg@qFgh@mD{h@gBii@a@oi@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.836319872815, -106.56187293253), new google.maps.LatLng(42.979679228233, -106.36696191823));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CASPER CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CASPER CLASS E2<br />SFC-17999');
    

// CASPER CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c}ceGd_hiSyxb@qnb@nmO_|]|`c@hyb@lpf@d~e@umO|u]i_UirTjId{YoqPhL_Peyk@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.663361111111, -106.77158333333), new google.maps.LatLng(43.134722222222, -106.20216666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CASPER CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'CASPER CLASS E4<br />SFC-17999');
    

// CEDAR CITY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g`peFhwkqTq@{JqwCor@bm@_xEu}BsjBzpEegKxhFpeErG_EtEqCvEkCxEgCzEcC|E}B~EyB`FsB`FoBbFiBdFeBdF_BfF{AhFuAhFqAjFkAjFeAlFaAlF{@nFu@nFq@nFk@pFe@pFa@pF[pFUrFQrFKrFErFArF@rFFrFJrFPpFVpFZpF`@pFf@nFj@nFp@nFv@lFz@lF`AjFfAjFjAhFpAhFtAfFzAdF~AdFdBbFhB`FnB~ErB~ExB|E|BzEbCxEfCvElCtEpCrEtCpEzCnE~ClEbDhEfDfElDdEpDbEtD~DxD|D|DzD`EvDdEtDhErDlEnDpElDtEhDxEfD|EbD`F~CdF|CfFxCjFvCnFrCrFnCtFjCxFhCzFdC~F`C`G|BdGzBfGvBhGrBlGnBnGjBpGfBrGbBtG~AxGzAzGvA|GrA~GnA~GjA`HfAbHbAdH~@fHz@fHv@hHr@jHn@jHj@lHf@lHb@nH\\nHXnHTpHPpHLpHHpHDpH@pHApHEpHIpHMpHQpHUpHYnH]nHc@nHg@lHk@lHo@jHs@jHw@hH{@fH_AfHcAdHgAbHkA`HoA~GsA~GwA|G{AzG_BxGcBtGgBrGkBpGoBnGsBlGwBhGyBfG}BdGaC`GeC~FiCzFkCxFoCtFsCrFwCnFyCjF}ChF_DdFcD`FgD|EiDxEmDtEoDpEsDnEuDjEwDfE{D`E}D|D_ExDcEtDeEpDgElDiEhDmEbDoE~CqEzCsEtCuEpCwElCyEfC{EbC}E|B_FxB_FtBaFnBcFjBeFdBeF~AgFzAiFtAiFpAkFjAkFfAmF`AmFz@oFv@oFp@oFj@qFf@qF`@qFZqFVsFPsFJsFFsF@sFAsFEsFKsFQqFUqF[qFa@qFe@oFk@oFq@oFu@mF{@mFaAkFeAkFkAiFoAiFuAgF{AgF_BeFeBcFiBaFoBaFsB_FyB}E}B{EcCyEgCwEkCuEqCsEuCqEyCoE_DmEcDkEgDgEmDeEqDcEuDaEyD}D}D{DaEyDeEuDiEsDmEoDqEmDuEiDyEgD}EcDaFaDeF}CiFyCkFwCoFsCsFoCuFmCyFiC{FeC_GaCaG}BeG{BgGwBiGsBmGoBoGkBqGgBsGcBwG_ByG{A{GwA}GsA_HoAaHkAcHgAcHcAeH_AgH{@iHw@iHs@kHo@kH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.631597897588, -113.18624239232), new google.maps.LatLng(37.808, -112.99008333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CEDAR CITY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CEDAR CITY CLASS E2<br />SFC-17999');
    

// CHADRON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}f`eGpwgtRs}BcaAtyD}tSlwCrnAtFkG`GwGdGqGhGiGlGcGnG}FrGwFtGoFxGiFzGcF~G{E`HuEdHmEfHgEhH_EjHyDnHqDpHiDrHcDtH{CvHsCxHmCzHeC|H}B|HuB~HoB`IgB`I_BbIwAdIoAdIgAdI_AfIy@fIq@hIi@hIa@hIYhIQhIIhIAhIBhIJhIRhIZhI`@fIh@fIp@fIx@dI`AdIhAbIpAbIxA`I`B`IfB~HnB|HvBzH~BzHdCxHlCvHtCtH|CrHbDpHjDlHrDjHxDhH`EfHfEbHnE`HtE~G|EzGbFxGhFtGpFrGvFnG|FjGbGhGjGdGpG`GvG|F|GxFbHvFhHrFnHnFtHjFxHfF~HbFdI|EjIxEnItEtIpExIlE~IfEbJbEfJ~DlJxDpJtDtJnDxJjD|JfD`K`DdK|ChKvClKpCpKlCtKfCvKbCzK|B|KvB`LrBbLlBfLfBhL`BjL|AlLvAnLpApLjArLdAtL`AvLz@xLt@xLn@zLh@zLb@|L\\|LX~LR~LL~LF~L@~LA~LG~LM~LS~LW~L]|Lc@|Li@|Lo@zLu@xL{@xL_AvLeAtLkArLqApLwAnL{AlLaBjLgBhLmBfLqBbLwB`L}B|KaCzKgCvKmCtKqCpKwClK{ChKaDdKeD`KkD|JoDxJuDtJyDpJ_ElJcEhJgEbJmE~IqExIuEtIyEnI}EjIaFdIgF~HkFxHoFtHsFnHwFhHyFbH}F|GaGvGeGpGiGjGkGbGoG|FsGvFuGpFyGhF{GbF_H|EaHtEcHnEgHfEiH`EkHxDmHrDqHjDsHbDuH|CwHtCyHlC{HfC{H~B}HvB_InBaIfBaI`BcIxAcIpAeIhAeI`AgIx@gIp@gIj@iIb@iIZiIRiIJiIBiIAiIIiIQiIYiIa@iIi@gIq@gIw@eI_AeIgAeIoAcIwAaI_BaIgB_IoB}HuB}H}B{HeCyHmCwHsCuH{CsHcDqHiDoHqDkHyDiH_EgHgEeHmEaHuE_H{E{GcFyGiFuGoFsGwFoG}FmGcGiGiGeGoGaGwG_G}G{FcHwFiHsFoHoFsHkFyHgF_IcFeI_FkI{EoIuEuIqEyImE_JiEcJcEiJ_EmJ{DqJuDuJqD{JkD_KgDcKaDgK}CkKwCmKsCqKmCuKgCyKcC{K}B_LwBaLsBeLmBgLgBiLaBmL}AoLwAqLqAsLkAuLgAwLaAyL{@yLu@{Lo@}Li@}Lc@_M]_MY_MSaMWiL'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.74250989366, -103.22462706232), new google.maps.LatLng(42.952744444444, -102.96648395038));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CHADRON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CHADRON CLASS E2<br />SFC-17999');
    

// CHEYENNE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qoizF|w~}R`FmjB|tJjj@gFxkBzHbEdHxD`H~D~GdE|GlExGrEvGxErG~EpGfFlGlFjGrFfGxFbG~F`GdG|FjGxFpGtFvGrFzGnF`HjFfHfFlHbFpH~EvHzE|HtE`IpEdIlEjIhEnIdEtI~DxIzD|IvD`JpDdJlDhJhDlJbDpJ~CtJxCxJtC|JnC~JjCbKdCfK~BhKzBlKtBnKpBpKjBtKdBvK`BxKzAzKtA|KnA~KjA`LdAbL~@dLx@dLr@fLn@hLh@hLb@jL\\jLVjLPlLLlLFlL@lLAlLGlLMlLQlLWjL]jLc@jLi@hLo@hLs@fLy@dL_AdLeAbLiA`LoA~KuA|K{AzK_BxKeBvKkBtKoBpKuBnK{BlK_ChKeCfKkCbKoC~JuC|JyCxJ_DtJcDpJiDlJmDhJqDdJwD`J{D|I_ExIeEtIiEnImEjIqEfIuE`I{E|H_FvHcFpHgFlHkFfHoF`HqF|GuFvGyFpG}FjGaGdGcG~FgGxFkGrFmGlFqGfFsG~EwGxEyGrE}GlE_HdEaH~DeHxDgHpDiHjDkHbDmH|CoHtCqHnCsHfCuH`CwHxByHpByHjB{HbB}H|A}HtA_IlA_IdAaI~@aIv@aIn@cIh@cI`@cIXcIPeIJeIBeIAeIIcIQcIWcI_@cIg@cIo@aIu@aI}@_IeA_IkA}HsA}H{A{HcByHiByHqBwHwBuH_CsHgCqHmCoHuCmH{CkHcDiHiDgHqDeHwDcH_E_HeE}GkE{GsEwGyEuG_FqGeFoGkFkGsFgGyFeG_GaGeG}FkGyFqGwFwGsF{GoFaHkFgHgFmHcFqH_FwH{E}HwEaIsEgImEkIiEoIeEuIaEyI{D}IwDaJsDeJmDkJiDoJcDsJ_DuJyCyJuC}JoCaKkCcKeCgKaCkK{BmKuBoKqBsKkBuKeBwKaByK{A}KuA_LoAaLkAcLeAcL_AeLy@gLu@iLo@iLi@kLc@kL]mLWmLSmLMmLGmLAoL@yLFmLLmLPmLVmL\\mLb@kLh@kLn@iLr@iLx@gL~@eLdAcLjAcLnAaLtA_LzA}K`B{KdBwKjBuKpBsKtBoKzBmK`CkKdCgKjCcKnCaKtC}JxCyJ~CuJbDsJhDoJlDkJrDgJvDaJzD}I`EyIdEuIhEoIlEkIrEgIvEaIzE}H~EwHbFqHfFmHjFgHnFaHrF{GvFwGxFqG|FkG`GeGdG_GfGyFjGsFnGkFpGeFtG_FvGyEzGsE|GkE~GeEbH_EdHwDfHqDhHiDjHcDlH{CnHuCpHmCrHgCtH_CvHyBxHqBbMgC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.062394632896, -104.93640565299), new google.maps.LatLng(41.249270505476, -104.67544444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CHEYENNE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CHEYENNE CLASS E2<br />SFC-17999');
    

// CHICO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oharFraggVioE`jF_uFunJtgAaqAcc@kgA`pDgtCl@tL`@nHd@nHh@lHl@lHp@jHt@jHx@hH|@fH`AfHdAdHhAbHlA`HpA~GtA|GxAzG|AxG`BvGdBtGhBrGlBpGnBlGrBjGvBhGzBdG~BbG`C~FdC|FhCxFjCvFnCrFrCnFtClFxChF|CdF~C`FbD|EdDzEhDvEjDrElDnEpDjErDfEvDbExD~DzDxD|DtD`EpDbElDdEhDfEbDhE~CjEzClEtCnEpCpElCrEfCjBrA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.824883333333, -121.97595555556), new google.maps.LatLng(39.897575, -121.86850833333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CHICO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'CHICO CLASS E4<br />SFC-17999');
    

// CLOVIS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k}mqEdcsuR?In@us@pCms@pF}r@pIer@nLcq@jO{o@bRkn@xTsl@lWuj@zYoh@f\\cf@l^qc@l`@y`@hb@}]`d@{Zpe@uWzf@kT`h@}P~h@mMti@{Ifj@gFpj@qBtj@>pj@tBfj@jFti@~I|h@pM~g@`Qzf@lTne@vW~c@|Zhb@|]l`@z`@j^pc@d\\bf@zYnh@jWrj@xTpl@bRhn@hOxo@lL`q@pI`r@pFxr@pChs@n@ps@o@ps@oChs@qFxr@oI`r@mL`q@iOxo@aRhn@yTpl@kWrj@yYnh@e\\bf@k^pc@k`@z`@ib@~]_d@|Zoe@vW{f@lT_h@`Q}h@pMui@~Igj@jFqj@vBuj@@qj@qBgj@gFwi@{I_i@mMah@}P}f@kTqe@uWad@{Zkb@}]o`@y`@m^qc@g\\cf@}Yoh@mWuj@{Tsl@eRkn@kO{o@oLcq@qIcr@qF}r@qCms@o@us@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.282613075663, -103.44296953144), new google.maps.LatLng(34.482940840113, -103.20147679127));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CLOVIS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CLOVIS CLASS E2<br />SFC-17999');
    

// CODY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mscoGvxkxSP_Ek_GwoCjlBsyJnfG|sCnFqIhDgFjDcFlD_FpD{ErDwEvDqExDmEzDiE|DeE`E_EbE{DdEuDfEqDhEmDjEgDlEaDnE}CpEwCrEsCtEmCvEiCxEcCzE}BzEwB|EsB~EmB`FgB`FaBbF}AbFwAdFqAdFkAfFeAfFaAhF{@hFu@hFo@jFi@jFc@jF]jFWlFQlFMlFGlFAlF@lFFlFLlFRjFXjF^jFd@jFh@hFn@hFt@hFz@fF`AfFfAdFlAdFpAbFvAbF|A`FbB`FhB~ElB|ErBzExBzE|BxEbCvEhCtElCrErCpExCnE|ClEbDjEfDhElDfEpDdEvDbEzD`E~D|DdEzDhExDlEtDrErDvEpDzElD~EjDbFfDfFdDjFbDnF~CrFzCvFxCzFtC~FrCbGnCfGjChGhClGdCpG`CrG~BvGzBzGvB|GrB~GnBbHlBdHhBhHdBjH`BlH|AnHxApHtArHpAtHlAvHhAxHdAzH`A|H|@~Hx@`It@`Ip@bIl@dIh@dId@fI`@fI\\hIXhIThIPhILjIHjIDjI@jIAjIEjIIjIMjIQhIUhIYhI]hIa@fIe@fIi@dIm@dIq@bIu@`Iy@`I}@~HaA|HeAzHiAxHmAvHqAtHuArHyApH}AnHaBlHeBjHiBhHkBdHoBbHsB~GwB|G{BzG}BvGaCrGeCpGiClGkChGoCfGsCbGuC~FyCzF{CvF_DrFaDnFeDjFgDfFkDbFmD~EqDzEsDvEuDrEyDlE{DhE}DdE_E~DcEzDeEvDgEpDiElDkEfDmEbDoE|CqExCsErCuElCwEhCyEbC{E|B{ExB}ErB_FlBaFhBaFbBcF|AcFvAeFpAeFlAgFfAgF`AiFz@iFt@iFn@kFh@kFd@kF^kFXmFRmFLmFFmF@mFAmFGmFMmFQkFWkF]kFc@kFi@iFo@iFu@iF{@gF_AgFeAeFkAeFqAcFwAcF}AaFaBaFgB_FmB}EsB}EwB{E}ByEcCwEgCuEmCsEsCqEwCoE}CmEaDkEgDiEkDgEqDeEuDcE{DaE_E}DeE{DiEyDmEwDqEsDwEqD{EoD_FkDcFiDgFeDkFcDoF_DsF}CwFyC{FuC_GsCcGoCgGmCiGiCmGeCqGaCuG_CwG{B{GwB}GsBaHoBcHmBeHiBiHeBkHaBmH}AoHyAsHuAuHqAwHmAyHiA{HeA}HaA}H}@_Iy@aIu@cIq@cIm@eIi@gIe@gIa@iI]iIYiIUkIQkIMkIIkIEkIAkI@uIDkIHkI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.45167356387, -109.11966753164), new google.maps.LatLng(44.629166666667, -108.92866574493));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CODY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CODY CLASS E2<br />SFC-17999');
    

// COEUR D'ALENE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mpdbH~zwgUl{K|^qRxhPieJwZ~vAhzJapTt~IanB__NkDmDqEuEoE{EkE_FiEeFgEkFcEoFaEuF}DyF{D_GwDcGuDiGqDmGoDqGkDuGgD{GeD_HaDcH}CgH{CkHwCoHsCsHoCwHkC{HgC_IcCaIaCeI}BiIyBkIuBoIqBsImBuIiBwIeB{IaB}I}A_JwAcJsAeJoAgJkAiJgAkJcAmJ_AoJy@oJu@qJq@sJm@sJi@uJe@wJ_@wJ[wJWyJSyJMyJIyJE{JA{J@eKD{JHyJLyJRyJVyJZwJ^wJb@wJh@uJl@sJp@sJt@qJx@oJ~@oJbAmJfAkJjAiJnAgJrAeJvAcJzA_J`B}IdB{IhBwIlBuIpBsItBoIxBmI|BiI`CeIbCcIfC_IjC{HnCwHrCsHvCoHxCkH|CgH`DcHdD_HfD{GjDwGnDqGpDmGtDiGvDcGzD_G|DyF`EuFbEoFfEkFhEeFjE_FnE{EpEuErEoEvEiExEeEzE_E|EyD~EsD`FmDbFgDdFaDfF{ChFuCjFoClFiClFcCnF}BpFwBrFoBrFiBtFcBtF}AvFwAvFoAxFiAxFcAzF}@zFu@zFo@|Fi@|Fa@|F[|FU|FO|FG|FA|F@|FH|FN|FT|F\\|Fb@|Fh@zFp@zFv@zF|@xFbAxFjAvFpAvFvAtF|AtFbBrFjBrFpBpFvBnF|BlFbClFhCjFnChFtCfFzCdF`DbFfD`FlD~ErD|ExDzE~DxEdEtEjErEnEpEtEnEzEjE~EhEdFfEjFbEnF`EtF|DxFzD~FvDbGtDhGpDlGnDpGjDtGfDzGdD~G`DbH|CfHxCjHvCnHrCrHnCvHjCzHfC|HbC`I~BdIzBhIxBjItBnIpBpIlBtIhBvIbBxI~A|I`AfN'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.639833333333, -116.98769444444), new google.maps.LatLng(47.847502586096, -116.71093074269));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'COEUR D\'ALENE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'COEUR D\'ALENE CLASS E2<br />SFC-17999');
    

// COLORADO SPRINGS CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ajslFxef~R?ywHwnCwtAn}CwrLl}JbcF~DaHzDyG~DuGbEqGfEkGjEgGlEcGpE_GtEyFxEuFzEoF~EkFbFeFdFaFhF{EjFuEnFqEpFkErFeEvFaExF{DzFuD~FoD`GiDbGcDdG}CfGyChGsCjGmClGgCnGaCpGyBrGsBrGmBtGgBvGaBxG{AxGuAzGoAzGgA|GaA|G{@~Gu@~Go@~Gg@~Ga@`H[`HU`HM`HG`HA`H@`HH`HN`HT`HZ~Gb@~Gh@~Gn@|Gt@|Gz@|GbAzGhAzGnAxGtAvGzAvG`BtGhBrGnBrGtBpGzBnG`ClGfCjGlChGrCfGxCdG~CbGdD`GjD|FnDzFtDxFzDvF`ErFfEpFjElFpEjFvEfFzEdF`F`FdF~EjFzEnFvEtFtExFpE~FlEbGhEfGfEjGbEpG~DtGzDxGvD|GrD`HnDdHjDhHfDlHbDpH~CtHzCvHvCzHpC~HlC`IhCdIdCfI~BjIzBlIvBpIrBrIlBtIhBvIbBzI~A|IzA~ItA`JpAbJjAdJfAdJ`AfJ|@hJx@jJr@jJn@lJh@lJd@nJ^nJXpJTpJNpJJpJDpJ@pJApJEpJKpJOpJUpJYpJ_@nJc@nJi@lJm@lJs@jJw@jJ}@hJaAfJgAdJkAdJqAbJuA`J{A~I_B|IcBzIiBvImBtIqBrIwBpI{BlI_CjIeCfIiCdImC`IqC~HuCzH{CvH_DtHcDpHgDlHkDhHoDdHsD`HwD|G{DxG_EtGcEpGgElGiEfGmEbGqE~FuExFwEtF{EnF_FjFaFdFeF`FgFzEkFvEmFpEqFjEsFfEwF`EyFzD{FtD}FnDaGjDcGdDeG~CgGxCiGrCkGlCmGfCoG`CqGzBsGtBsGnBuGhBwG`BwGzAyGtA{GnA{GhA}GbA}Gz@}Gt@_Hn@_Hh@_Hb@aHZaHTaHNaHHaH@aHAaHGaHMaHUaH[_Ha@_Hg@_Ho@_Hu@}G{@}GaA{GgA{GoAyGuAyG{AwGaBuGgBsGmBsGsBqGyBoG_CmGeCkGkCiGqCgGwCeG}CcGcDaGiD_GoD{FuDyF{DwFaEsFeEqFkEoFqEkFuEiF{EeFaFcFeF_FkF{EoFyEuFuEyFqE_GmEcGkEgGgEkGcEqG_EuG{DyGwD}GsDaHoDeHkDiHgDmHcDqH_DuH{CwHwC{HsC_ImCcIiCeIeCiIaCkI{BoIwBqIsBsImBwIiByIeB{I_B}I{A_JuAaJq@uGkmH?'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.72240035486, -104.80746106511), new google.maps.LatLng(38.95725, -104.5942055383));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'COLORADO SPRINGS CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'COLORADO SPRINGS CLASS E3<br />SFC-17999');
    

// CORTEZ CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ssbcF~pavSe@mDosDuaC_wScy@jf@e`UxvWldAh|HhdF~IgClFwAnFqApFmApFgArFaArF}@tFw@tFq@tFm@vFg@vFa@vF[vFWvFQvFKxFExFAxF@xFFvFJvFPvFVvF\\vF`@tFf@tFl@tFp@rFv@rF|@rFbApFfApFlAnFpAlFvAlF|AjF`BhFfBhFjBfFpBdFvBbFzB`F`C~EdC|EhCzEnCxErCvExCtE|CrE`DpEfDnEjDlEnDhErDfExDdE|D`E`E~DdE|DhExDlEvDpErDtEpDxElD|EjD`FfDdFbDhF`DlF|CnFxCrFvCvFrCxFnC|FjC~FhCbGdCdG`ChG|BjGxBnGtBpGpBrGlBvGhBxGdBzG`B|G|A~GxA`HtAbHpAdHlAfHhAhHdAhH`AjH|@lHx@nHt@nHn@pHj@pHf@rHb@rH^tHZtHVtHPtHLvHHvHDvH@vHAvHEvHIvHMvHQtHUtH[tH_@tHc@rHg@rHk@pHo@pHu@nHy@nH}@lHaAjHeAjHiAhHmAfHqAdHuAbHyA`H}A~GaB|GeBzGiBxGmBvGqBrGuBpGyBnG}BjGaChGeCfGgCbGkC`GoC|FsCxFwCvFyCrF}CnFaDlFcDhFgDdFkD`FmD|EqDxEsDtEwDpEyDlE}DhE_EdEaE`EeE|DgExDiEtDmEnDoEjDqEfDsE`DuE|CwExCyErC{EnC}EhC_FdCaF`CcFzBeFvBgFpBiFjBiFfBkF`BmF|AmFvAoFrAqFlAqFfAsFbAsF|@sFv@uFr@uFl@uFf@wF`@wF\\wFVwFPwFLyFFyF@yFAyFEwFKwFQwFWwF[wFa@wFg@uFk@uFq@uFw@sF}@sFaAqFgAqFmAoFqAmFwAmF{AkFaBiFgBiFkBgFqBeFuBcF{BaF_C_FeC_FiC}EoCyEsCwEwCuE}CsEaDqEgDoEkDmEoDiEsDgEyDeE}DaEaE_EeE}DiEyDmEwDqEsDuEqDyEmD}EkDaFgDeFcDiFaDmF}CoFyCsFwCwFsCyFoC}FkCaGiCcGeCgGaCiG}BkGyBoGuBqGqBsGmBwGiByGeB{GaB}G}A_HyAaHuAcHqAeHmAgHiAiHeAkHaAkH}@mHy@oHu@oHq@qHk@sHg@sHc@sH_@uH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.231382181724, -108.71777753709), new google.maps.LatLng(37.509527777778, -108.49511111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CORTEZ CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CORTEZ CLASS E2<br />SFC-17999');
    

// CRESCENT CITY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ule~FztxuVesGdkGm{EauKrdGi}Fm@}Gu@eIq@gIk@gIg@iIc@iI_@kI[kIWkIQmIMmIImIEmIAmI@wIDmIHmILmIPmIVkIZkI^kIb@iIf@iIj@gIp@gIt@eIx@cI|@cI`AaIdA_IhA}HlA{HpAyHtAwHxAuH~AsHbBqHfBoHjBmHlBiHpBgHtBeHxBaH|B_H`C{GdCyGhCuGlCsGnCoGrCkGvCgGzCeG|CaG`D}FdDyFfDuFjDqFlDmFpDiFrDeFvDaFxD{E|DwE~DsEbEoEdEiEfEeEjEaElE{DnEwDpEqDrEmDvEgDxEcDzE}C|EyC~EsC`FmCbFiCbFcCdF}BfFyBhFsBjFmBjFgBlFcBnF}AnFwApFqApFkArFgArFaAtF{@tFu@tFo@vFi@vFc@vF]vFWxFSxFMxFGxFAxF@xFFxFLxFRvFXvF^vFd@vFj@tFn@tFt@tFz@rF`ArFfApFlApFrAnFvAnF|AlFbBjFhBjFnBhFrBfFxBdF~BbFbC`FhC`FnC~ErC|ExCzE|CxEbDtEhDrElDpErDnEvDlEzDhE`EfEdEdEhEbEnE~DrE|DvExDzEvD`FrDdFpDhFlDlFjDpFfDtFbDxF`D|F|C`GxCbGvCfGrCjGnCnGjCpGhCtGdCxG`CzG|B~GxB`HtBdHpBfHlBhHhBjHdBnHbAvJlvAaApEnsNkiBpAmCdJuBbHyB`H}B|GaCzGeCvGgCtGkCpGoClGsCjGuCfGyCbG}C~FaDzFcDxFgDtFiDpFmDlFqDhFsDbFwD~EyDzE{DvE_ErEaEnEeEhEgEdEiE`EkEzDoEvDqEpDsElDuEfDwEbDyE|C{ExC}ErC_FnCaFhCcFbCeF~BgFxBiFrBiFlBkFhBmFbBmF|AoFvAoFrAqFlAqFfAsF`AsFz@uFt@uFn@uFj@wFd@wF^wFXwFRwFLwFFwF@wFAwFGwFMwFQwFWwF]wFc@uFi@uFo@uFu@sF{@sFaAsFeAqFkAqFqAoFwAmF}AmFcBkFgBiFmBiFsBgFyBeF}BcFcCaFiC_FmCyCk@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.699, -124.36513888889), new google.maps.LatLng(41.891583333333, -124.14044892426));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CRESCENT CITY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CRESCENT CITY CLASS E2<br />SFC-17999');
    

// CUT BANK CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w_ogH`telTxD|Br~TscRpaI`gYqfVteSs@jGkAhKoAfKuAdKyA`K}A~JaB|JgBzJkBvJoBtJsBpJwBnJ{BjJaCfJeCdJiC`JmC|IqCxIuCtIyCpI}ClIaDhIeDdIgD`IkDzHoDvHsDrHwDlHyDhH}DbHaE~GcExGgEtGkEnGmEhGqEdGsE~FwExFyErF}ElF_FfFaF`FeFzEgFtEiFnEkFhEmFbEqF|DsFvDuFnDwFhDyFbD{F|C}FtC}FnC_GhCaG`CcGzBcGrBeGlBgGdBgG~AiGvAiGpAkGhAkGbAmGz@mGt@mGl@mGf@oG^oGVoGPoGHoGBoGAoGIoGOoGWoG]oGe@mGk@mGs@mG{@kGaAkGiAiGoAiGwAgG}AgGeBeGkBeGsBcGyBaGaC_GgC_GmC}FuC{F{CyFaDwFiDuFoDsFuDqF{DoFcEmFiEiFoEgFuEeF{EcFaF_FgF}EmFyEsFwEyFuE_GqEcGoEiGkEoGgEuGeEyGaE_H}DcH{DiHwDmHsDsHoDwHmD{HiDaIeDeIaDiI}CmIyCqIuCuIqCyImC}IiCaJeCeJaCiJ}BkJyBoJsBsJoBuJkByJgB{JcB}J}AaKyAcKuAeKqAgKkAiKgAkKcAmK}@oKy@qKu@sKo@sKk@uKg@wKa@wK]wKYyKSyKOyKK{KE{KA{K@eLD{KH{KNyKRyKXyK\\wK`@wKf@wKj@uKn@sKt@sKx@qK|@oKbAmKfAkKjAiKpAgKtAeKxAcK|AaKbB}JfB{JjByJnBuJrBsJxBoJ|BkJ`CiJdCeJhCaJlC}IpCyItCuIxCqI|CmI`DiIdDeIhDaIjD}HnDwHrDsHvDmHzDiH|DcH`E_HdEyGfEuGjEoGlEiGpEcGtE_GvEyFxEsF|EmF~EgFbFaFdF{EfFuEhFoEjFiEnFcEpF{DrFuDtFoDvFiDxFaDzF{C|FuC~FmC~FgC`GaCbGyBdGsBdGkBfGeBfG}AhGwAhGoAjGiAjGaAlG{@lGs@lGm@nGe@nG]nGWnGOnGInGAnGBnGHnGPnGVnG^lGf@lGl@lGt@lGz@jGbAjGhAhGpAhGvAfG~AfGdBdGlBbGrBbGzB`G`C~FfC|FnC|FtC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.413555555556, -112.49193063156), new google.maps.LatLng(48.686335048409, -112.16711111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'CUT BANK CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'CUT BANK CLASS E2<br />SFC-17999');
    

// DALHART CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yig{Et{`qRyBoK{pE_HnH_mIdpE~Gt@eDtAoGxAmG|AkG`BiGdBgGhBeGlBcGpBaGrB_GvB{FzByF~BwF`CsFdCqFhCmFlCkFnCgFrCeFvCaFxC}E|C{E~CwEbDsEdDoEhDmEjDiEnDeEpDaErD}DvDyDxDuDzDqD~DmD`EiDbEeDdEaDfE{ChEwCjEsCnEoCpEkCrEeCrEaCtE}BvEwBxEsBzEoB|EiB|EeB~EaB`F{A`FwAbFqAdFmAdFgAfFcAfF}@hFy@hFs@hFo@jFi@jFe@jF_@jFYlFUlFOlFKlFElFAlF@lFDlFJlFPlFTjFZjF^jFd@jFh@hFn@hFr@hFx@fF|@fFbAdFfAdFlAbFpA`FvA`FzA~E`B|EdB|EhBzEnBxErBvExBtE|BrE`CpEdCnEjClEnCjErChEvCfE|CdE`DbEdD`EhD~DlDzDpDxDtDvDxDrD|DpD`EnDdEjDhEhDlEdDnEbDrE~CvE|CzExC|EtC`FrCdFnCfFlCjFhClFdCpF`CrF~BtFzBxFvBzFrB|FnB`GlBbGhBdGdBfG`BhG|AjGxAlGtAnGpApGlArG`@|CftC`BuCnlIcpCcBuBpKqApGuAnGyAlG}AjGaBhGeBfGiBdGmBbGoB`GsB|FwBzF{BxF_CtFaCrFeCnFiClFkCjFoCfFsCbFuC`FyC|E{CxE_DvEcDrEeDnEiDjEkDhEmDdEqD`EsD|DuDxDyDtD{DpD}DlDaEhDcEdDeE`DgEzCiEvCkErCmEnCoEjCqEdCsE`CuE|BwExByErB{EnB{EhB}EdB_F`BaFzAaFvAcFpAcFlAeFfAeFbAgF|@gFx@iFr@iFn@iFh@kFd@kF^kFZkFTmFPmFJmFFmF@mFAmFEmFKmFOkFUkFYkF_@kFc@kFi@iFo@iFs@gFy@gF}@gFcAeFgAcFmAcFqAaFwAaF{A_F_B}EeB}EiB{EoByEsBwEwBuE}BsEaCqEeCoEiCmEoCkEsCiEwCgE{CeE_DcEeDaEiD}DmD{DqDyDuDwDyDsD}DqDaEoDeEkDiEiDkEeDoEcDsE_DwE}CyEyC}EuCaFsCcFoCgFmCkFiCmFeCqFaCsF_CuF{ByFwB{FsB}FqBaGmBcGiBeGeBgGaBiG}AkGyAmGuAoGqAqGmAsGiAuG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.933694444444, -102.63164556164), new google.maps.LatLng(36.121694444444, -102.46321447907));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DALHART CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'DALHART CLASS E2<br />SFC-17999');
    

// DEER PARK CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c{ddH`hvkU?G^kk@`Bck@bDuj@dFaj@dHei@bJch@`L{f@zMme@rOwc@hQ}a@|R}_@lTw]xUo[`W_YfXmVhYwSdZ_Q~ZcNr[cKb\\cHn\\aEt\\_Bv\\>t\\bBl\\dEb\\fHp[fK|ZdNdZ`QfYxSdXnV`W`YvUn[jTv]zR|_@hQza@rOtc@zMje@~Kxf@bJ`h@dHbi@dF|i@bDpj@`B~j@^fk@_@fk@aB~j@cDrj@eF|i@cHbi@cJ`h@_Lxf@yMje@sOvc@iQ|a@{R|_@kTx]wUn[aW`YeXnVgYxSeZ`Q}ZdNq[fKc\\fHm\\dEu\\bBw\\@u\\_Bo\\aEc\\cHs[cK_[aNeZ}PiYwSgXmVaW_YyUm[mTw]}R}_@iQ}a@sOwc@{Mke@aL{f@cJch@eHei@eFaj@eDuj@cBck@_@kk@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.898658988661, -117.530232844), new google.maps.LatLng(48.035229086216, -117.326990953));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DEER PARK CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'DEER PARK CLASS E2<br />SFC-17999');
    

// DEMING CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ufjdEtdnpS?E`@yc@fBuc@lDic@pFwb@rHab@tJea@tLc`@rN}^nPq]fR_\\|SkZnUqX~VuVhXsTpYoRrZgPp[}Ml\\qK`]cIr]sF~]aDd^oAh^>d^pA~]bDr]rF`]bIj\\rKp[~MrZhPnYnRhXrT|VtVnUpX|SjZfR~[nPn]rNz^tL``@tJba@rH~a@pFtb@lDfc@fBrc@`@xc@a@xc@gBrc@kDfc@qFtb@sH~a@uJba@uL``@sNz^mPn]gR~[}SjZoUpX}VtViXrToYnRsZhPq[~Mk\\rKa]dIs]tF_^bDe^pAi^>e^oA_^aDs]sFa]aIm\\qKs[}MsZgPqYoRiXsT_WsVoUqX}SkZgR_\\oPq]sN{^wLc`@wJea@uHab@qFwb@mDic@gBuc@a@yc@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.190413158206, -107.80501906197), new google.maps.LatLng(32.334030470753, -107.63609337876));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DEMING CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'DEMING CLASS E2<br />SFC-17999');
    

// DICKINSON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}{i|Gbo}qRvG`Er}F{tExpC~mJe~FduEj@|Il@lJh@lJb@nJ^nJZpJVpJRpJLrJHrJDrJ@rJArJErJIrJMrJSpJWpJ[pJ_@nJc@nJi@lJm@lJq@jJu@jJy@hJ_AfJcAdJgAbJkA`JoA~IsA|IwAzI{AxI_BvIeBtIiBpImBnIqBlIuBhIyBfI}BbI_C~HcC|HgCxHkCtHoCpHsClHwCjHyCfH}CbHaD~GeDzGgDtGkDpGoDlGqDhGuDbGwD~F{DzF}DtFaEpFcEjFgEfFiE`FkE|EoEvEqEpEsElEwEfEyE`E{EzD}EvD_FpDaFjDcFdDeF~CgFxCiFrCkFlCmFfCoF`CoFzBqFtBsFnBsFhBuFbBwF|AwFtAyFnAyFhA{FbA{F|@{Ft@}Fn@}Fh@}Fb@}FZ_GT_GN_GH_G@_GA_GG_GM_GU}F[}Fa@}Fg@}Fo@{Fu@{F{@{FaAyFgAyFoAwFuAwF{AuFaBuFgBsFmBqFsBoF{BoFaCmFgCkFmCiFsCgFyCeF_DcFeDaFkD_FoD}EuD{E{DyEaEwEgEuEkEqEqEoEwEmE{EiEaFgEgFeEkFaEqF_EuF{D{FyD_GuDcGsDiGoDmGkDqGiDuGeD{GaD_H}CcH{CgHwCkHsCoHoCqHkCuHiCyHeC}HaCaI}BcIyBgIuBiIqBmImBoIiBsIeBuIaBwI}AyIyA}IsA_JoAaJkAcJgAeJcAgJ_AiJ{@iJu@kJq@mJm@mJi@oJe@oJ_@qJ[qJWsJSsJMsJIsJEsJAuJ@}JDsJHsJLsJRsJVsJZqJ^qJb@oJh@oJl@mJp@mJt@kJx@iJ~@iJbAgJfAeJjAcJnAaJrA_JvA}I|AyI`BwIdBuIhBsIlBoIpBmItBiIxBgI|BcI`CaIdC}HfCyHjCuHnCsHrCoHvCkHzCgH|CcH`D_HdD{GhDuGjDqGnDmGpDiGtDcGxD_GzD{F~DuF`EqFdEkFfEgFhEaFlE}EnEwEpEqEtEkEvEgExEaEzE{D|EuD~EoD`FkDbFeDdF_DfFyChFsCjFmClFgCnFaCnF{BpFuBrFmBtFgBtFaBvF{AvFuAxFoAxFiAzFaAzF{@zFu@|Fo@|Fg@|Fa@|F[~FU~FM~FG~FA~F@~FH~FN~FT|FZ|Fb@|Fh@|Fn@zFt@zF|@zFbAxFhAxFnAvFtAvFzAtFbBrFhBrFnBpFtBnFzBnF`ClFfCjFlChFrCfFxCdF~CbFdD`FjD~EpD|EvDzEzDxE`EvEfErElEpEpEnEvElE|EhE`FfEfFbEjF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.68475, -102.90896294737), new google.maps.LatLng(46.870993609552, -102.68677777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DICKINSON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'DICKINSON CLASS E2<br />SFC-17999');
    

// DILLON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wwysGn|}mT?Kn@y}@rCo}@tF{|@tI_|@tLwz@rOgy@lRmw@dUku@xWas@hZmp@t\\sm@z^qj@~`@ig@zb@yc@rd@e`@bf@k\\ng@mXth@kTri@ePjj@}Kzj@sGdk@gChk@@dk@lCzj@xGhj@bLpi@jPrh@nTlg@pX`f@n\\pd@f`@xb@zc@z`@hg@x^pj@r\\rm@fZjp@vW|r@bUfu@jRhw@pO`y@rLpz@tIv{@tFt|@rCh}@n@p}@o@r}@qCh}@sFt|@uIx{@sLpz@qOby@kRhw@aUhu@uW~r@eZlp@q\\rm@y^pj@{`@jg@yb@|c@od@h`@af@n\\mg@rXsh@pTqi@jPij@bL{j@xGek@nCik@Bek@eC{j@qGkj@{Ksi@cPuh@iTog@kXef@k\\sd@e`@{b@yc@_a@gg@}^qj@u\\sm@iZmp@yWas@eUku@mRmw@sOgy@uLwz@wI_|@uF{|@sCo}@q@y}@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.153633671823, -112.69633212126), new google.maps.LatLng(45.356920069733, -112.40867007664));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DILLON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'DILLON CLASS E2<br />SFC-17999');
    

// DOUGLAS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gwi_Er_k|Sq|GfpDkoDmbKd|GapDIiJEcHAcH@kHDcHHcHLcHPaHVaHZaH^aHb@_Hf@_Hj@}Gn@}Gt@{Gx@{G|@yG`AwGdAwGhAuGlAsGpAqGtAqGxAoG|AmG`BkGdBiGhBgGlBcGpBaGtB_GxB}F|B{F`CwFdCuFhCqFlCoFnCmFrCiFvCgFzCcF|C_F`D}EdDyEfDuEjDsElDoEpDkErDgEvDcExD_E|D{D~DwDbEsDdEoDfEkDjEgDlEcDnE_DpE{CrEwCtEsCxEmCzEiC|EeC~EaC`F{BbFwBbFsBdFmBfFiBhFeBjF_BjF{AlFuAnFqAnFkApFgApFcArF}@rFy@tFs@tFo@tFi@vFc@vF_@vFYvFUxFOxFKxFExFAxF@xFDxFJxFPvFTvFZvF^vFd@tFh@tFn@tFr@rFx@rF|@pFbApFfAnFlAnFpAlFvAjFzAjF~AhFdBfFhBdFlBbFrB`FvB`FzB~E`C|EdCzEhCxEnCtErCrEvCpEzCnE~ClEbDhEfDfEjDdEnDbEtD~DvD|DzDxD~DvDbErDfEpDjElDnEjDrEfDtEbDxE`D|E|C~ExCbFvCdFrChFnCjFjCnFhCpFdCtF`CvF|BxFxB|FtB~FpB`GlBbGhBdGdBfG`BhG|AjGxAlGtAnGpApGlArGhAtGdAvG`AvG|@xGx@zGt@zGn@|Gj@|Gf@~Gb@~G^~GZ`HV`HP`HL`HH`HDbH@bHAbHEbHI`HM`HQ`HU`H[`H_@~Gc@~Gg@~Gk@|Go@|Gu@zGy@zG}@xGaAvGeAvGiAtGmArGqApGuAnGyAlG}AjGaBhGeBfGiBdGmBbGqB`GuB~FyB|F}BxFaCvFeCtFiCpFkCnFoCjFsChFwCdFyCbF}C~EaD|EcDxEgDtEkDrEmDnEqDjEsDfEwDbEyD~D}DzD_ExDaEtDeEpDgElDiEfDmEbDoE~CqEzCsEvCuErCwEnC{EhC}EdC_F`CaF|BaFvBcFrBeFnBgFhBiFdBkF~AkFzAmFvAoFpAoFlAqFfAqFbAsF|@sFx@uFr@uFn@uFh@wFd@wF^wFZwFTyFPyFJyFDyF@yFAyFEyFKyFOwFUwFYwF_@wFc@uFi@uFm@uFs@sFw@sF}@qFaAqFgAoFkAoFqAmFuAkF{AkF_BiFeBgFiBeFmBcFsBcFwBaF{B_FaC}EeC{EiCyEmCwEsCsEwCqE{CoE_DmEcDkEgDyFsE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.397151884549, -109.69886111111), new google.maps.LatLng(31.586277777778, -109.51998878986));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DOUGLAS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'DOUGLAS CLASS E2<br />SFC-17999');
    

// DURANGO CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wciaFfzupSbeG|zHifKnxNs|FaqHoHl@wF`@wF\\wFVyFPyFLyFFyF@yFAyFEyFKyFQwFWwF[wFa@wFg@uFk@uFq@uFw@sF}@sFaAqFgAqFkAoFqAoFwAmF{AkFaBkFgBiFkBgFqBeFuBcF{BcF_CaFeC_FiC}EoC{EsCyEwCwE}CsEaDqEeDoEkDmEoDkEsDgEwDeE}DcEaE_EeE}DiEyDmEwDqEsDuEqDyEmD}EkDaFgDeFeDiFaDkF}CoF{CsFwCwFsCyFoC}FmC_GiCcGeCgGaCiG}BkGyBoGuBqGqBsGmBwGkByGgB{GcB}G_B_H{AaHuAcHqAeHmAgHiAiHeAkHaAkH}@mHy@oHu@oHq@qHk@qHg@sHc@sH_@uH[uHWuHQwHMwHIwHEwHAwH@_IDwHHwHLwHPwHVuHZuH^uHb@sHf@sHj@sHn@qHt@oHx@oH|@mH`AkHdAkHhAiHlAgHpAeHtAcHxAaH|A_H`B}GdB{GhByGlBwGpBsGtBqGxBoG|BkG`CiGdCgGhCcGlCaGnC}FrCyFvCwFzCsF|CoF`DmFdDiFfDeFjDaFlD}EpDyErDuEvDqExDmE|DiE~DeEbEaEdE}DfEyDjEsDlEoDnEkDpEgDrEaDtE}CxEwCzEsC|EoC~EiC`FeCbF_CbF{BdFuBfFqBhFkBjFgBjFaBlF{AnFwAnFqApFmApFgArFaArF}@tFw@tFq@tFm@vFg@vFa@vF[vFWxFQxFKxFExFAxF@xFFxFJxFPvFVvF\\vF`@vFf@tFl@tFp@tFv@rF|@rF`ApFfApFlAnFpAnFvAlF|AjF`BjFfBhFjBfFpBdFtBbFzB`F~B`FdC~EhC|EnCzErCvExCtE|CrE`DpEfDnEjDlEnDhErDfExDdE|D`E`E~DdE|DhExDlEvDpErDtEpDxElD|EjD`FfDdFbDhF`DjF|CnFxCrFvCvFrCxFnC|FjC~FhCbGdCdG`ChG|BjGxBnGtBpGpBrGlBtGhBxGdBzG`B|G|A~GxA`HtAbHpAdHlAfHhAhHdAhH`AjH|@lHx@nHt@nHn@pHj@pHf@rHb@rH^tHZtHVtHPtHLvHHvHDvH@vHAvHEvHIvHQ`I'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.037861111111, -107.89133333333), new google.maps.LatLng(37.223165829497, -107.663940408));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DURANGO CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'DURANGO CLASS E2<br />SFC-17999');
    

// EAGLE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cstqF|gpiSpqXamEjhHzf|@xA|DfCtGbCxG~BzG|B~GxB`HtBbHpBfHlBhHhBjHdBlH~AnHzApHvArHrAtHnAvHjAxHfAzHbA|H~@~Hx@~Ht@`Ip@bIl@bIh@dIb@dI^fIZfIVfIRfILhIHhIDhI@hIAhIEhIIhIMhISfIWfI[fI_@fIc@dIi@dIm@bIq@bIu@`Iy@~H}@~HcA|HgAzHkAxHoAvHsAvHwAtH{ApH_BnHcBlHiBjHmBhHqBfHuBbHyB`H{B~G_CzGcCxGgCtGkCrGoCnGsCjGwChGyCdG}C`GaD|FeDxFgDvFkDrFoDnFqDjFuDfFwDbF{D|E}DxEaEtEcEpEgElEiEfEkEbEoE~DqExDsEtDuEpDyEjD{EfD}E`D_F|CaFvCcFrCeFlCgFfCiFbCkF|BmFvBmFrBoFlBqFfBsFbBsF|AuFvAuFpAwFjAwFfAyF`AyFz@{Ft@{Fn@{Fh@}Fb@}F^}FX}FR}FL_GF_G@_GA_GG}FK}FQ}FW}F]}Fc@{Fi@{Fo@{Fu@yFy@yF_AyFeAwFkAwFqAuFwAsF{AsFaBqFgBoFmBoFqBmFwBkF}BiFaCgFgCeFmCcFqCaFwC_F{C}EaD{EeDyEkDwEoDsEuDqEyDoE_EmEcEiEgEgEmEcEqEaEuE_EyE{D}EwDaFuDgFqDkFoDoFkDsFgDwFeDyFaD}F}CaG{CeGwCiGsCkGoCoGkCsGgCuGeCyGaC{G}B_HyBaHuBcHqBgHmBiHiBkHeBmHaBqH}AsHwAuHsAwHoAyHkA{HgA{HcA}H_A_Iy@aIu@aIq@cIm@eIi@eIe@eI_@gI[gIWiISiIMiIIiIEiIAiI@iIDsIHiILiIRiIViIZgI^gIb@eIh@eIl@eIp@cIt@aIx@aIjAqKsbHke{@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.569179683161, -107.01260292946), new google.maps.LatLng(39.760027777778, -106.5515));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EAGLE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'EAGLE CLASS E2<br />SFC-17999');
    

// EAGLE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}qkqF|zlkSlAqKsbHke{@pqXamEjhHzf|@zAzDfCtGbCxG~BzG|B~GxB`HtBbHpBfHlBhHhBjHdBlH~AnHzApHvAtHrAtHnAvHjAxHfAzHbA|H~@~Hx@~Ht@`Ip@bIl@bIh@dIb@dI^fIZfIVfIRfILhIHhIDhI@hIAhIEhIIhIMhISfIWfI[fI_@fIc@dIi@dIm@bIq@bIu@`Iy@~H}@~HcA|HgAzHkAxHoAvHsAvHwAtH{ArH_BnHcBlHiBjHmBhHqBfHuBbHyB`H{B~G_CzGcCxGgCtGkCrGoCnGsCjGwChGyCdG}C`GaD|FeDxFgDvFkDrFoDnFqDjFuDfFwDbF{D|E}DxEaEtEcEpEgElEiEfEkEbEoE~DqExDsEtDuEpDyEjD{EfD}E`D_F|CaFvCcFrCeFlCgFfCiFbCkF|BmFvBmFrBoFlBqFfBsFbBsF|AuFvAuFpAwFjAwFfAyF`AyFz@{Ft@{Fn@{Fh@}Fb@}F^}FX}FR}FL_GF_G@_GA_GG}FK}FQ}FW}F]}Fc@{Fi@{Fo@{Fu@yFy@yF_AyFeAwFkAwFqAuFwAsF{AsFaBqFgBoFmBoFqBmFwBkF}BiFaCgFgCeFmCcFqCaFwC_F{C}EaD{EeDyEkDwEoDsEuDqEyDoE_EmEcEiEgEgEmEcEqEaEuE_EyE{D}EwDaFuDgFqDkFoDoFkDsFgDwFeDyFaD}F}CaG{CeGwCiGsCkGoCoGkCsGgCuGeCyGaC{G}B_HyBaHuBcHqBgHmBiHiBkHeBmHaBqH}AsHwAuHsAwHoAyHkA{HgA{HcA}H_A_Iy@aIu@aIq@cIm@eIi@eIe@eI_@gI[gIWiISiIMiIIiIEiIAiI@sIDiIHiILiIRiIViIZgI^gIb@eIh@eIl@eIp@cIt@aIx@aI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.569176655241, -107.01260684592), new google.maps.LatLng(39.760027777778, -106.5515));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EAGLE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'EAGLE CLASS E2<br />SFC-17999');
    

// EDWARDS AFB CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oewtE|conU?Kv@{|@hDq|@xG_|@hKa{@vN{y@`Rkx@hUsv@nXst@n[ir@j^wo@ba@}l@tc@}i@`f@wf@fh@ic@fj@w_@~k@_\\pm@aXzn@aT~o@}Oxp@wKlq@oGxq@eC|q@@xq@jClq@rGxp@zK|o@`Pzn@dTnm@dX|k@`\\dj@x_@dh@jc@~e@vf@rc@|i@`a@|l@h^to@l[fr@lXnt@hUnv@`Rfx@tNvy@hK|z@xGx{@hDl|@v@t|@w@t|@gDl|@yGx{@gK|z@uNvy@_Rfx@gUnv@mXnt@m[fr@i^to@_a@|l@qc@|i@_f@vf@eh@jc@cj@x_@}k@`\\om@dXyn@dT}o@bPyp@|Kmq@tGyq@jC}q@@yq@eCmq@oGyp@wK_p@}O{n@aTqm@aX_l@}[gj@u_@gh@ic@af@uf@uc@}i@ca@}l@k^wo@o[gr@oXqt@kUsv@cRkx@wN{y@iKa{@{G_|@iDq|@w@{|@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.788151038858, -118.02537001293), new google.maps.LatLng(35.021846713493, -117.7418543996));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EDWARDS AFB CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'EDWARDS AFB CLASS E2<br />SFC-17999');
    

// ENGLEWOOD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{pqpFx`k~RmId@dv@mnE`}KdwDkj@raD|qa@_q@fVryYs`c@`s@lFiIjDsFfDuFdDyF`D}F|CaGxCeGvCiGrCkGnCoGjCsGfCuGbCyG~B{G|B_HxBaHtBcHpBgHlBiHhBkHdBmH~AoHzAqHvAsHrAuHnAwHjAyHfA{HbA}H~@_Ix@_It@aIp@cIl@cIh@eIb@eI^eIZgIVgIRgILiIHiIDiI@iIAiIEiIIiIMiISgIWgI[gI_@eIc@eIi@eIm@cIq@cIu@aIy@_I_A_IcA}HgA{HkAyHoAwHsAuHwAsH{AqHaBoHeBmHiBkHmBiHqBgHuBcHyBaH}B}G_C{GcCyGgCuGkCqGoCoGsCkGwCiGyCeG}CaGaD}FeDyFgDuFkDsFoDoFqDkFuDgFwDaF{D}E}DyEaEuEcEqEgEmEiEgEkEcEoE_EqEyDsEuDwEoDyEkD{EgD}EaD_F}CaFwCcFqCeFmCgFgCiFcCkF}BmFwBmFsBoFmBqFgBsFaBsF}AuFwAwFqAwFkAyFeAyFaAyF{@{Fu@{Fo@}Fi@}Fc@}F_@}FY}FS}FM_GG_GA_G@_GF_GL}FP}FV}F\\}Fb@}Fh@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.333166666667, -104.91572222222), new google.maps.LatLng(39.582138888889, -104.7225));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ENGLEWOOD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'ENGLEWOOD CLASS E4<br />SFC-17999');
    

// EPHRATA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wco`H`t{vUvlThm\\vHiBvFoAxFiAxFcAzF{@zFu@zFo@|Fi@|Fa@|F[|FU|FM|FG|FA|F@|FH|FN|FT|FZ|Fb@zFh@zFn@zFv@zF|@xFbAxFhAvFnAvFvAtF|AtFbBrFhBpFnBpFtBnFzBlF`CjFhCjFnChFtCfFzCdF`DbFdD`FjD~EpD|EvDzE|DvEbEtEhErElEpErElExEjE|EhEbFdEhFbElF`ErF|DvFzDzFvD`GtDdGpDjGlDnGjDrGfDvGbDzG`D~G|CbHxCfHtCjHrCnHnCrHjCvHfCzHbC~H~B`IzBdIvBfIrBjInBnIjBpIfBrIbBvI~AxIzAzIvA|IrA~InA`JjAbJfAdJbAfJ|@hJx@jJt@lJp@lJl@nJh@pJb@pJ^rJZrJVrJRtJLtJHtJDtJ@tJAtJEtJItJMtJQtJWrJ[rJ_@rJc@pJi@pJm@nJq@lJu@lJy@jJ}@hJcAfJgAdJkAdJoAbJsA~IwA|I{AzI_BxIcBvIgBrIkBpIoBnIsBjIwBhI{BdI_C`IcC~HgCzHkCvHoCrHsCnHuClHyChH}CdHaD~GcDzGgDvGkDrGmDnGqDjGuDdGwD`G{D|F}DvFaErFcElFeEhFiEbFkE|EmExEqErEsElEuEhEwEbE{E|D}EvD_FpDaFjDcFfDeF`DgFzCiFtCkFnCkFhCmFbCoFzBqFtBqFnBsFhBuFbBuF|AwFvAwFnAyFhAyFbA{F|@{Fv@{Fn@{Fh@}Fb@}F\\}FT}FN}FH}F@}FA}FG}FM}FU}F[}Fa@}Fg@{Fo@{Fu@{F{@yFaAyFiAwFoAwFuAuF{AuFaBsFiBqFoBqFuBoF{BmFaCmFgCkFmCiFsCgFyCeF_DcFeDaFkD_FqD}EwD{E}DyEcEuEgEsEmEqEsEoEwEkE}EiEcFgEgFcEmFaEqF}DwF{D{FwDaGuDeGqDiGoDoGkDsGgDwGeD{GaDaH}CeHyCiHwCmHsCqHoCsHkCwHgC{HcC_I_CcI}BeIyBiIuBkIqBoImBqIiBuIeBwIaByI{A}IwA_JsAaJoAcJkAeJgAgJcAiJ_AkJy@kJu@mJq@oJm@oJi@qJc@sJ_@sJ[sJWuJSuJMuJIuJEwJJ}DmsUuc^n~Ji{Q'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.23147904672, -119.62128910059), new google.maps.LatLng(47.493805555556, -119.25841666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EPHRATA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'EPHRATA CLASS E2<br />SFC-17999');
    

// EUGENE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qnwlGrcaoV?Gb@mm@lBem@xDwl@`Gal@hIek@nKaj@rMwh@tOeg@tQoe@pSqc@jUoa@`We_@rXy\\`ZgZj[qWn\\wTp]yQl^yNb_@uKt_@qH``@kEh`@cBl`@>h`@fB``@nEt_@tHb_@xKj^zNn]zQn\\xTh[pW~YfZpXx\\~Vd_@hUla@pSpc@rQle@tObg@rMrh@nK|i@hI`k@`G|k@vDrl@lB`m@b@hm@c@hm@mB`m@wDrl@aG|k@iI`k@oK~i@sMth@uObg@sQle@oSpc@iUna@_Wf_@qXx\\_ZhZi[rWo\\xTo]zQk^|Nc_@xKu_@tHa`@nEi`@hBm`@@i`@cBa`@kEu_@qHc_@uKm^yNq]yQo\\uTk[oWaZgZsXy\\aWe_@kUma@qSqc@uQme@wOeg@uMwh@oKaj@iIek@aGal@yDwl@oBem@c@mm@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.045001903109, -123.32497772941), new google.maps.LatLng(44.198330399342, -123.11224614235));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EUGENE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'EUGENE CLASS E2<br />SFC-17999');
    

// EUGENE CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_tzkGl{hoV~AwIzAyIvA{IrA}InA_JhAaJdAcJ`AeJ|@eJv@gJr@iJn@iJh@kJd@mJ`@mJ\\mJVoJRoJNoJHoJDqJ@qJAqJEqJIoJOoJSoJWoJ]mJa@mJe@mJk@kJo@iJs@iJw@gJ}@eJaAeJeAcJiAaJoA_JsA}IwA{I{AyI_BwIeBuIiBqImBoIqBmIuBiIyBgI}BcIaCaIeC}HiCyHmCwHsC_IlfKekAt~@duRc{K~nA|BuM'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.985416666667, -123.26066666667), new google.maps.LatLng(44.05825, -123.14702777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EUGENE CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'EUGENE CLASS E4<br />SFC-17999');
    

// EUGENE CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('knulGrpkoVv@tD_vIebA`mAgdWt|Hb}@uE`JiD|GeD`HaDdH}ChHyClHuCpHqCtHmCvHkCzHgC~HaC`I}BdIyBfIuBjIqBlImBpIiBrIeBtIaBxI{AzIwA|IsA~IoA`JkAbJeAdJaAfJ}@fJy@hJs@jJo@jJk@lJe@nJa@nJ]nJWpJSpJOpJIpJEzJArJ@rJDpJHpJNpJRpJVpJ\\nJ`@nJd@lJj@lJn@jJr@jJx@hJ|@fJ`AfJdAdJjAbJnA`JrA~IvA|IzAzI`BxIdBtIhBrIlBpIpBlItBjIxBfI|BdIbC`I'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.179333333333, -123.27286111111), new google.maps.LatLng(44.242666666667, -123.13838888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EUGENE CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'EUGENE CLASS E4<br />SFC-17999');
    

// EVERETT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ymzcHtcjiV?Ib@so@jBko@rD}n@zFen@`Igm@fKcl@hMuj@hOci@fQig@bSie@zTcc@nVw`@`Xe^lYo[tZuXz[wUz\\uRt]qOl^iL|^_Ij_@uEp_@iBt_@@p_@lBh_@xE|^bIj^lLt]rOx\\xRx[xUtZvXjYp[~Wf^lVv`@xT`c@`Sfe@fQfg@hO`i@hMrj@dK~k@`Ibm@zF`n@rDxn@jBfo@b@no@c@no@kBfo@sDxn@{F`n@aIdm@eK~k@gMrj@iO`i@gQfg@aSfe@yTbc@mVv`@_Xf^kYp[uZvXy[zUy\\xRu]tOk^lL}^dIi_@xEq_@lBu_@@q_@gBk_@sE}^_Im^iLu]oO{\\uR{[wUwZuXmYo[aXe^oVw`@{Tcc@cSie@iQig@kOci@iMuj@gKcl@cIgm@{Fen@uD}n@kBko@c@so@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.8319961623, -122.39307421725), new google.maps.LatLng(47.981891745577, -122.17026083604));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EVERETT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'EVERETT CLASS E2<br />SFC-17999');
    

// FAIRFIELD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wa}hFp_~fVq@zDwsIunMrqGcdIltIpoM_F`BiFfBiFlBgFrBeFvBcF|BaF`C_FfC_FjC}EpC{EtCwEzCuE~CsEbDqEhDoElDmEpDiEvDgEzDeE~DaEbE_EfE}DlEyDpEwDtEsDxEqD|EmD`FkDdFgDhFcDjFaDnF}CrFyCvFwCxFsC|FoC`GkCbGiCfGeChGaClG}BnGyBrGuBtGqBvGmBzGiB|GeB~GaB`H'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.284972222222, -121.89288888889), new google.maps.LatLng(38.383555555556, -121.76666666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FAIRFIELD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'FAIRFIELD CLASS E4<br />SFC-17999');
    

// FAIRFIELD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kechFftkgVbtIznMmqGfcIqjFi_IknFxkEudEesJbGpCbF|BdFvBfFpBhFlBjFfBjFbBlF|AnFvAnFrApFlApFfArFbArF|@tFv@tFp@tFl@vFf@vF`@vF\\vFVvFPxFJxFDxF@xFAxFGxFMvFQvFWvF]vFc@vFg@tFm@tFs@tFy@rF}@rFcApFiApFmAnFsAlFyAlF}AjFcBhFiBhFmBfFsBdFwBbF}B`FaC~EgC|EkCzEqCxEuCvE{CtE_DrEeDpEiDnEmDlEqDhEwDfE{DdE_E`EcE~DiE|DmExDqEvDuErDyEpD}ElDaFjDeFfDiFbDkF`DoF|CsFxCwFvCyFrC}FnCaGjCcGfCgGdCiG`CmG|BoGxBsGtBuGpBwGlByGhB}GdB_H`BaHjBiF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.141638888889, -122.08791666667), new google.maps.LatLng(38.293194444444, -121.96180555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FAIRFIELD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'FAIRFIELD CLASS E4<br />SFC-17999');
    

// FALLON NAS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}}_pFni|sUaBqFf@c@l@i@l@i@l@k@l@k@j@m@j@m@j@o@h@o@h@q@h@q@f@s@f@s@d@u@d@u@d@w@b@w@b@w@b@y@`@y@`@{@^{@^{@^}@\\}@\\}@Z_AZ_AX_AXaAVaAVaAVcATcATcARcAReAPeAPeANeANeALgALgAJgAJgAHgAHgAFgAFiADiADiABiABiA@iA@iA>iA>iA?iA?iAAiAAiACiACiAEiAEiAGiAGgAIgAIgAKgAKgAMgAMgAOeAOeAQeAQeASeAScAUcAUcAWcAWaAWaAYaAY_A[_A[_A]}@]}@_@}@_@{@_@{@a@{@a@y@c@y@c@w@c@w@e@w@e@u@g@u@g@s@g@s@i@q@i@q@i@o@k@o@k@m@k@m@m@k@m@k@m@i@m@i@o@g@o@g@o@e@q@e@q@c@q@a@q@a@s@_@s@_@s@]s@[s@[u@Yu@Yu@Wu@Uu@Uu@Sw@Sw@Qw@Ow@Ow@Mw@Kw@Kw@Iw@Gw@Gw@Ew@Cy@Cy@Ay@?y@?y@>y@>y@@y@Bw@Bw@Dw@Fw@Fw@Hw@Jw@Jw@Lw@Nw@Nw@Pw@RoA?cBoPcAoK}@qKy@qKs@sKm@uKg@uKc@wK]wKWwKQyKMyKGyKAyK@cLFyKJyKPyKVwK\\wKb@wKf@uKl@uKr@sKx@qK|@qKbAoKhAmKlAkKrAiKxAgK|AeKbBcKhBaKlB_KrB}JvByJ|BwJbCsJfCqJlCmJpCkJvCgJzCcJ~C_JdD}IhDyIlDuIrDqIvDmIzDiI~DcIdE_IhE{HlEwHpEqHtEmHxEgH|EcH`F}GdFyGhFsGlFmGpFiGrFcGvF}FzFwF~FqF`GmFdGgFfGaFjG{ElGuEpGoErGgEtGaExG{DzGuD|GoD~GgDbHaDdH{CfHuChHmCjHgCjH_ClHyBnHsBpHkBrHeBrH}AtHwAtHoAvHiAvHaAxH{@xHs@zHk@zHe@zH]zHW|HO|HI|HA|HB|HHzHPzHVzH^zHd@zHl@xHt@xHz@vHbAvHhAtHpAtHvArH~ArHdBpHlBnHrBlHxBjH`ChHfChHnCfHtCbHzC`H`D~GhD|GnDzGtDxGzDtGbErGhEpGnElGtEjGzEfG`FdGfF`GlF|FrFzFvFvF|FrFbGnFhGlFlGhFrGdFxG`F|G|EbHxEfHtElHpEpHlEtHhEzHbE~H~DbIzDfIvDjIrDnIlDrIhDvIdDzI~C~IzCbJtCfJpChJjClJfCpJ`CrJ|BtJvBxJrBzJlB|JhB`KbBbK|AdKxAfKrAhKlAjKhAlKbAnK|@nKv@pKr@rKl@rKf@tKb@tK\\tKVvKPvKJvKFvK@vKAvKGvKKvKQvKWvK]tKa@tKg@tKm@rKs@rKw@pK}@nKcAnKiAlKmAjKsAhKyAfK}AdKcBbKiB`KmB|JsBzJwBxJ}BtJaCrJgCpJkClJqChJuCfJ{CbJ_D~IeDzIiDvImDtIsDpIwDjI{DfI_EbIcE~HiEzHmEvHqEpHuElHyEfH}EbHaF|GeFxGiFrGmFnGoFhGsFbGwF|F{FxF}FrFaGlFeGfFgG`FkGzEmGtEqGnEsGhEuGbEyGzD{GtD}GnD_HhDaHbDcHzCeHtCgHnCiHfCkH`CmHxBoHrBqHlBsHdBsH~AuHvAuHpAwHhAwHbAyHz@yHt@{Hl@{Hd@{H^{HV{HP}HH}HB}HA}HI}HO{HW{H]{He@{Hk@yHs@yHy@yHaAwHiAwHoAuHwAsH}AsHeBqHkBoHqBmHyBkH_CkHgCiHmCgHsCeH{CcHaD_HgD}GoD{GuDyG{DuGaEsGgEqGmEmGuEkG{EgGaFeGgFaGkF_GqF{FwFwF}FsFcGqFiGmFmGiFsGeFyGaF}G}EcHyEgHuEmHqEqHmEwHiE{HeE_IaEcI{DgI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.325475476987, -118.81867654511), new google.maps.LatLng(39.507856415332, -118.58354559993));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FALLON NAS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'FALLON NAS CLASS E2<br />SFC-17999');
    

// FALLON NAS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}lcpFxypsUjCfL{jG{{Aj`BasMj{FhvAmEzLaDbJ}CdJwChJsClJmCpJiCrJcCvJ}BxJyB|JsB~JoB`KiBbKcBfK_BhKyAjKsAlKoAnKiApKcApK}@rKy@tKs@vKm@vKg@xKc@xK]xKWzKQzKKzKGfLAzK@zKFzKLzKPzKVzK'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.494336111111, -118.71362222222), new google.maps.LatLng(39.550305555556, -118.62386944444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FALLON NAS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'FALLON NAS CLASS E4<br />SFC-17999');
    

// FALLON NAS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_fjoF`qyrUyEcD|jBu~ChzGx{HupBpgDuDsKaDcJgDaJkD}IoDyIuDuIyDqI}DmIcEgIgEcIkE_IoE{HsEuHwEqH{EkH_FgHcFaHgF}GkFwGoFqGsFmGwFgG{FaG}F{FaGuFeGoFgGiFkGcFmG}EqGwEsGqEwGkEyGeE{G_E_HwDaHqDcHkD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.317530555556, -118.64361666667), new google.maps.LatLng(39.380141666667, -118.56594722222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FALLON NAS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'FALLON NAS CLASS E4<br />SFC-17999');
    

// FARMINGTON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}xj_Fpc_sS}AmfBhoE_H`BzhBhItAhGfAfGlAfGrAdGxAdG~AbGdB`GjB~FnB~FtB|FzBzF`CxFdCvFjCtFpCrFtCpFzCnF`DjFdDhFjDfFnDdFtD`FxD~E~D|EbExEhEvElErEpEpEvElEzEjE~EfEbFdEfF`ElF|DpFzDtFvDxFrD|FnD`GjDdGhDfGdDjG`DnG|CrGxCtGtCxGpC|GlC~GhCbHdCdH`ChH|BjHvBlHrBpHnBrHjBtHfBvHbBxH|AzHxA|HtA~HpA`IjAbIfAdIbAfI|@hIx@hIt@jIn@jIj@lIf@lI`@nI\\nIXnIRpINpIHpIDpI@pIApIEpIIpIOpISpIYnI]nIa@nIg@lIk@lIo@jIu@jIy@hI}@hIcAfIgAdIkAbIqA`IuA~HyA~H}A|HcBxHgBvHkBtHoBrHsBpHwBlH}BjHaChHeCdHiCbHmC~GqC|GuCxGyCtG}CrGaDnGeDjGiDfGkDdGoD`GsD|FwDxF{DtF}DpFaElFeEfFgEbFkE~EmEzEqEvEsEpEwElEyEhE}EbE_F~DaFxDeFtDgFnDiFjDkFdDoF`DqFzCsFtCuFpCwFjCyFdC{F`C}FzB_GtB_GnBaGjBcGdBeG~AeGxAgGrAgGlAiGfAiGbAkG|@kGv@mGp@mGj@mGd@oG^oGXoGRoGLoGFoG@oGAoGGoGMoGSoGYoG_@mGe@mGi@mGo@kGu@kG{@kGaAiGgAgGmAgGsAeGyAeG_BcGcBaGiB_GoB_GuB}F{B{F_CyFeCwFkCuFoCsFuCqF{CoF_DmFeDiFkDgFoDeFuDcFyD_F_E}EcE{EgEwEmEuEqEqEuEoE{EkE_FgEcFeEgFaEmF}DqF{DuFwDyFsD}FoDaGmDeGiDgGeDkGaDoG}CsGyCwGuCyGqC}GmC_HiCcHeCeHaCiH}BkHyBoHsBqHoBsHkBuHgByHcB{H}A}HyA_IuAaIqAcIkAeIgAeIcAgI_AiIy@kIu@kIq@mIk@mIg@oIa@oI]oIYqISqIOqIKqIEsIAsI@{IDsIHqINqIRqIXqI\\oI`@oIf@oIj@mIn@mIt@kIx@kI|@iIbAgIfAeIjAeIpAcItAaIxA_I|A}HbB{HfByHjBuHnBsHrBqHxBoH|BkH`CiHdCeHhCcHlC_HpC}GtCyGxCwG|CsG`DoGdDkGhDiGlDeGnDaGrD}FvDyFzDuF|DqF`EmFdEgFfEcFjE_FnE{EpEwEtEqEvEmExEiE|EcE~E_EbFyDdFuDfFoDhFkDlFeDnF_DpF{CrFuCtFqCvFkCxFeCzF_C|F{B~FuB~FoB`GiBbGcBdG_BdGyAtHiB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.663597965914, -108.32706980058), new google.maps.LatLng(36.82028988283, -108.11713888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FARMINGTON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'FARMINGTON CLASS E2<br />SFC-17999');
    

// FORT COLLINS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w`lvFl`}_S?If@sn@vBkn@hE}m@vGgm@fJil@rLek@|Nyi@dQgh@hSmf@jUod@hWkb@bYa`@zZq]l\\}Zx]eXb_@iUd`@iRda@eO|a@aLpb@yH~b@qEfc@gBhc@>fc@hB~b@rEpb@|H|a@bLba@hOd`@jR`_@jUx]fXj\\|ZxZp]bY``@hWhb@jUnd@hSlf@bQdh@zNvi@pL`k@dJdl@vGbm@hExm@vBfn@f@nn@g@nn@wBfn@gExm@wGbm@eJdl@qL`k@{Nvi@cQdh@gSlf@iUnd@gWjb@cY``@yZr]k\\~Zy]fXa_@jUe`@jRca@hO}a@dLqb@|H_c@tEgc@jBic@@gc@eB_c@oEqb@yH}a@_Lea@eOg`@gRc_@gUy]eXm\\}Z{Zq]eY_`@iWkb@kUod@iSmf@eQgh@}Nyi@sLck@gJil@yGem@iE}m@yBkn@g@sn@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.36855964109, -105.12048138053), new google.maps.LatLng(40.535328043394, -104.90229809194));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FORT COLLINS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'FORT COLLINS CLASS E2<br />SFC-17999');
    

// FORT HUACHUCA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mi~_Ed_~_TmHcyHxlIqLlHtyHmG_BeGyAgGsAgGoAiGiAiGcAkG_AkGy@mGs@mGm@mGi@oGc@oG]oGWoGQqGMqGGqGAqG@qGFqGJoGPoGVoG\\oGb@mGf@mGl@mGr@kGx@kG|@iGbAiGhAgGnAgGrAeGxAcG~AcGbBaGhB_GnBwDfB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.564255555556, -110.25923333333), new google.maps.LatLng(31.619188888889, -110.20678888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FORT HUACHUCA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'FORT HUACHUCA CLASS E4<br />SFC-17999');
    

// FORT HUACHUCA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gju_EbrcaTwoE?>kmB`IfAjGv@lGr@lGl@lGf@nG`@nG\\nGVnGPnGJnGDnG@nGAnGGnGMnGQnGWnG]lGc@lGi@lGm@jGs@jGy@rJgA?tmB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.571722222222, -110.45170833333), new google.maps.LatLng(31.605130555556, -110.43399722222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FORT HUACHUCA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'FORT HUACHUCA CLASS E4<br />SFC-17999');
    

// FORT LEWIS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wmu~GjrxjVzbVnd@~CdK|BxHxBzHtB~HpB`IlBdIhBfIdBhI`BlI|AnIxApItArIpAtIlAvIhAxIdAzI`A|I|@~Ix@`Jr@bJn@bJj@dJf@dJb@fJ^fJZhJThJPhJLjJHjJDjJ@jJAjJEjJIjJMjJQhJUhJ[hJ_@fJc@fJg@dJk@dJo@bJs@bJy@`J}@~IaA|IeAzIiAxImAvIqAtIuArIyApI}AnIaBlIeBjIiBfImBdIqB`IuB~HyBzH}BxHaCtHcCpHgCnHkCjHoCfHsCbHuC~GyCzG}CvG_DrGcDnGgDjGiDfGmDbGoD~FsDxFuDtFyDpF{DjF_EfFaE`FcE|EgEvEiErEkElEmEfEqEbEsE|DuEvDwErDyElD{EfD}E`D_FzCaFtCcFpCeFjCeFdCgF~BiFxBkFrBkFlBmFfBoF`BoFxAqFrAqFlAsFfAsF`AuFz@uFt@uFn@uFf@wF`@wFZwFTwFNwFHwF@wFAwFGwFMwFSwF[wFa@uFg@uFm@uFs@uFy@sF_AsFgAqFmAqFsAoFyAoF_BmFeBmFkBkFqBiFwBgF}BgFcCeFiCcFoCaFuC_F{C}EaD{EgDyEkDwEqDuEwDsE}DqEaEoEgEkEmEiEqEgEwEeE}EaEaF_EgF{DkFyDoFwDuFsDyFqD}FmDcGiDgGgDkGcDoGaDsG}CwGyC{GwC_HsCcHoCgHkCkHgCoHeCsHaCuH}ByHyB}HuB_IqBcImBeIiBgIeBkIaBmI}AoIyAsIuAuIqAwImAyIiA{IeA}IaA_J}@_Jy@aJu@cJo@eJk@eJg@gJc@gJ_@iJ[iJWkJQkJMkJIkJEkJAkJ@uJDkJHkJLkJPkJTkJZiJ^iJb@gJf@gJj@eJn@eJt@cJx@aJ|@aJ`A_JdA}IhA{IlAyIpAwItAuIxAsI|AoI`BmIdBkIhBgIlBeIpBcItB_IxB}H|ByH`CuHdCsHfCoHjCkHzBwI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.007686257033, -122.68602694651), new google.maps.LatLng(47.150646174223, -122.51958333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FORT LEWIS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'FORT LEWIS CLASS E2<br />SFC-17999');
    

// FRESNO CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('grv_F`pfzU__HzyFgvEy}JtwGssFdAhHpAxItAvIzAtI~ArIdBpIhBnIlBlIrBjIvBfIzBdI`CbIdC~HhC|HlCxHrCvHvCrHzCnH~CjHbDhHfDdHjD`HnD|GrDxGvDtGzDpG~DlGbEhGfEdGjE`GlEzFpEvFtErFxElFzEhF~EdFbF~EdFzEhFtEjFnEnFjEhIlG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.821005555556, -119.84576111111), new google.maps.LatLng(36.901533333333, -119.74536666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'FRESNO CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'FRESNO CLASS E3<br />SFC-17999');
    

// GALLUP CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gykwEdpmwSqnFtzCuq@ysBcHj@kF^kFZmFTmFPmFJmFFmF@mFAmFEmFKmFOmFUmFYkF_@kFc@kFi@iFm@iFs@iFw@gF}@gFaAeFgAeFkAcFqAcFuAaF{A_F_B_FeB}EiB{EmByEsBwEwBuE{BuEaCsEeCqEiCoEmCmEsCiEwCgE{CeE_DcEcDaEgD_EkD{DoDyDsDwDwDsD{DqD_EoDcEkDgEiDkEeDoEcDsE_DuE}CyEyC}EwC_FsCcFoCeFmCiFiCmFeCoFcCqF_CuF{BwFwB{FsB}FqB_GmBaGiBcGeBgGaBiG}AkGyAmGuAoGqAqGmAqGkAsGgAuGcAwG_AwG{@yGu@{Gq@{Gm@}Gi@}Ge@_Ha@_H]aHYaHUaHQaHMcHIcHEcHAcH@kHDcHHcHLcHPaHTaHXaH\\aH`@_Hd@_Hh@}Gl@}Gp@{Gt@{Gx@yG|@wG`AwGdAuGhAsGlAqGpAqGtAoGxAmG|AkG`BiGdBgGhBcGlBaGpB_GrB}FvB{FzBwF~BuFbCqFdCoFhCmFlCiFnCgFrCcFvC_FxC}E|CyE~CuEbDsEdDoEhDkEjDgEnDcEpD_ErD{DvDwDxDsDzDoD~DkD`EgDbEcDdE_DfE{ChEwClEsCnEmCpEiCrEeCtEaCtE{BvEwBxEsBzEmB|EiB~EeB~E_B`F{AbFuAbFqAdFkAdFgAfFcAfF}@hFy@hFs@hFo@jFi@jFc@jF_@jFYlFUlFOlFKlFElFAlF@lFDlFJlFPlFTjFZjF^jFd@jFh@hFn@hFr@hFx@fF|@fFbAdFfAdFlAbFpA`FvA`FzA~E~A|EdB|EhBzEnBxErBvEvBtE|BrE`CrEdCpEhCnEnCjErChEvCfEzCdE~CbEbD`EfD~DjDzDpDxDtDvDxDrDzDpD~DnDbEjDfEhDjEdDnEbDrE~CtE|CxExC|EvC~ErCbFnCdFlChFhCjFdCnF`CpF~BtFzBvFvBxFrB|FpB~FlB`GhBbGdBdG`BfG|AhGxAjGtAlGpAnGlApGhArGdAtG`AvG|@vGx@xGt@zGp@zGl@|Gh@|Gd@~G`@~G\\~GX`HT`HP`HL`HH`HDbH@bHAbHEbHI`HM`HQ`HU`HY`H]~Ga@~Ge@~Gi@|Gm@|Gq@zGu@zGy@xG}@vGaAvGeAtGiArGmApGqAnGuAlGyAlG}AjGaBfGeBdGiBbGmB`GoB~FsB|FwBxF{BvF_CtFaCpFeCnFiClFmChFoCdFsCbFuC~EyC|E}CxE_DtEcDrEiCbD`o@vmB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.442890165558, -108.88911111111), new google.maps.LatLng(35.579886827329, -108.7037238386));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GALLUP CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'GALLUP CLASS E2<br />SFC-17999');
    

// GILLETTE CLASS E4 AIRSPACE

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qukmGtmubS{B_Drz[sjEt`BhxYm`]|rEdB}DvCsGrCwGnCyGjC}GfCaHdCcH`CgH|BkHxBmHtBqHpBsHlBuHhByHdB{H`B}H|A_IxAcItAeIpAgIlAiIhAkIdAkI`AmI|@oIx@qIt@qIn@sIj@uIf@uIb@wI^wIZwITyIPyILyIHyID{I@{IA{IE{IIyIMyIQyIWyI[wI_@wIc@wIg@uIk@uIo@sIu@qIy@qI}@oIaAmIeAkIiAkImAiIqAgIuAeIyAcI}A_IaB}HeB{HiByHmBuHqBsHuBqHyBmH}BkHaCgHeCcHgCaHkC}GoCyGsCwGwCsGyCoG}CkGaDgGcDcGgD_GkD{FmDwFqDsFsDmFwDiFyDeF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.139063888889, -105.60180833333), new google.maps.LatLng(44.302480555556, -105.43071666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GILLETTE CLASS E4 AIRSPACE';
    attachPolygonInfoBox(polygon, infoBox, 'GILLETTE CLASS E4 AIRSPACE<br />SFC-17999');
    

// GLASGOW CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ihjeHrejjSscLxwKeqH}aU|yJqoJHgGLkJPkJTkJXiJ\\iJb@gJf@gJj@eJn@eJr@cJv@aJz@aJ~@_JbA}IfA{IjAyInAwIrAuIvAsIzAqI~AmIbBkIfBiIjBeInBcIrB_IvB}HzByH|BuH`CsHdCoHhCkHjCgHnCcHrCaHvC}GxCyG|CsG`DoGbDkGfDgGhDcGlD_GnDyFrDuFtDqFvDkFzDgF|DaF~D}EbEwEdEsEfEmEhEgElEcEnE}DpEwDrEqDtEmDvEgDxEaDzE{C|EuC~EoC~EiC`FcCbF}BdFwBdFqB`EoAtcBkmOh`Fn_BbX}p@hvAfaBjiEvuAeU|rBjtDnkEspFr~MRfEf@dJb@fJ\\fJXhJThJPhJLhJHjJDjJ@jJAjJEjJIjJMhJQhJUhJYhJ]fJa@fJg@dJk@dJo@bJs@bJw@`J{@~I_A|IcAzIgAxIkAvIoAtIsArIwApI{AnI_BlIcBhIgBfIkBdIoB`IsB~HuBzHyBxH}BtHaCpHeCnHiCjHkCfHoCbHsC~GuCzGyCvG}CrG_DnGcDjGeDfGiDbGkD~FoDxFqDtFuDpFwDjF{DfF}D`F_E|EaEvEeErEgElEiEfEkEbEmE|DqEvDsErDuElDwEfDyE`D{EzC{EtC}EpC_FjCaFdCcF~BcFxBeFrBgFlBgFfBiF`BkFxAkFrAmFlAmFfAmF`AoFz@oFt@oFn@qFf@qF`@qFZqFTqFNqFHsF@sFAqFGqFMqFSqF[qFa@qFg@qFm@oFs@oFy@oF_AgEk@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.105083333333, -106.78263888889), new google.maps.LatLng(48.343083333333, -106.43047222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GLASGOW CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'GLASGOW CLASS E2<br />SFC-17999');
    

// GRAND CANYON CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}}~yEbzmkTnkGfeEivGdzP}eHayEtBs@hFeBhFkBfFoBdFuBbFyB`F}B~EcC|EgCzEmCxEqCvEuCtE{CrE_DpEcDnEiDlEmDhEqDfEuDdEyD`E}D~DaE|DeExDiEvDmErDqEpDuElDyEjD}EfDaFbDeF`DgF|CkFxCoFvCsFrCuFnCyFjC{FfC_GdCaG`CeG|BgGxBiGtBmGpBoGlBqGhBsGdBuG`ByG|A{GxA}GtA_HpA_HlAaHhAcHdAeH`AgH|@gHx@iHt@kHn@kHj@mHf@mHb@oH^oHZoHTqHPqHLqHHqHDqH@qHAqHEqHLsH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.837822222222, -112.2657), new google.maps.LatLng(35.929708333333, -112.14258333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GRAND CANYON CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'GRAND CANYON CLASS E4<br />SFC-17999');
    

// GRAND JUNCTION CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qlgnF|rkuS?Gd@{j@pBuj@|Dgj@fGsi@pIwh@xKug@~Mmf@`P_e@bRkc@`Tqa@zUs_@pWm]dYe[rZwX~[eVd]qSf^yPb_@}Mz_@aKl`@aHx`@aE`a@_Bda@>`a@`Bx`@bEl`@bHx_@bKb_@~Md^zPb]rS|[fVrZxXbYd[pWl]xUp_@~Spa@`Rjc@`P|d@|Mjf@vKrg@pIth@fGni@|Ddj@pBpj@d@xj@c@xj@qBpj@{Ddj@gGni@oIth@wKrg@}Mjf@aP~d@aRjc@_Tpa@yUr_@qWn]cYd[sZxX}[fVc]rSe^zPa_@`Ny_@bKm`@bHy`@bEaa@bBea@@aa@}Ay`@_Em`@aH{_@_Kc_@}Mg^wPe]qS_\\eVuZwXeYe[sWm]{Uq_@aTqa@cRkc@cP_e@_Nmf@yKug@qIwh@gGsi@}Dgj@qBuj@e@{j@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.0441003124, -108.62725819831), new google.maps.LatLng(39.200898632257, -108.4260767036));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GRAND JUNCTION CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'GRAND JUNCTION CLASS E2<br />SFC-17999');
    

// GRAND JUNCTION CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qz{mFfu~uSmrBvrEmrHusGzxBq~EtDvJpCfHtCbHxC~G|CzG`DxGdDtGhDpGlDlGnDhGrDdGvD`GzD|F|DxF`EtFdEnFfEjFjEfFnE`FpE|EtExEvErEzEnE|EhE~EdEbF~DdFzDfFtDhFnDlFjDnFdDpF~CrFzCtFtCvFnCxFhCzFdC|F~B~FxB`GrB`GlBbGfBdG`BdGzAjExA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.141694444444, -108.65825), new google.maps.LatLng(39.209361111111, -108.57819444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GRAND JUNCTION CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'GRAND JUNCTION CLASS E4<br />SFC-17999');
    

// GREAT FALLS INTERNATIONAL AIRPORT CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('edjaHltpfTyA~KaqTwy^jgMkbTdgUrx_@qHfAyHjAyHrAwHzAwHbBuHjBsHrBsHzBqHbCoHjCmHrCkHzCiHbDgHjDeHpDcHxDaH`E_HhE}GnEyGvEwG~EuGdFqGlFoGrFkGzFiG`GeGhGcGnG_GvG{F|GyFbHuFhHqFnHmFvHiF|HgFbIcFhI_FnI{ErIwExIqE~ImEdJiEhJeEnJaEtJ}DxJwD|JsDbKoDfKiDjKeDpKaDtK{CxKwC|KqC`LmCdLgCfLcCjL}BnLyBrLsBtLoBxLiBzLcB|L_B`MyAbMsAdMoAfM'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.494658333333, -111.33991666667), new google.maps.LatLng(47.681633333333, -111.06884722222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GREAT FALLS INTERNATIONAL AIRPORT CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'GREAT FALLS INTERNATIONAL AIRPORT CLASS E4<br />SFC-17999');
    

// GREAT FALLS INTERNATIONAL AIRPORT CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('acp`Hf~_fTcK}Fl_]}tKpdFdwc@uqVl}H~nJ`}OmgMp~S{lN}wUrIsBtHmBrHuBrH}BpHeCnHmClHuCjH}ChHeDfHkDdHsDbH{D`HcE~GiE|GqExGyEvG_FtGgFpGoFnGuFjG}FhGcGdGiGbGqG~FwGzF}GxFeHtFkHpFqHlFwHhF}HdFcI`FiI|EoIxEuItE{IpE_JlEeJhEkJdEoJ`EuJzDyJvD_KrDcKnDgKhDkKdDqK`DuKzCyKvC}KpCaLlCcLfCgLbCkL|BoLxBqLrBuLlBwLhB{LbB}L|A_MxAaMrAeMlAgMhAiMbAkM|@kMx@mMr@oMl@qMf@qMb@sM\\sMVsMPuMJuMFuM@uMAuMGuMMuMQuMWsM]sMc@sMg@qMm@qMs@oMy@mM}@kMcAkMiAiMoAgMsAeMyAaM_B_McB}LiB{LmBwLsBuLyBqL}BoLcCkLgCgLmCcLqCaLwC}K{CyKaDuKeDqKiDkKoDgKsDcKwD}J}DyJaEuJeEoJiEkJmEeJqE_JuEyI{EuI_FoIaFiIeFcIiF}HmFwHqFqHuFkHyFcH{F}G_GwGcGqGeGiGiGcGkG{FoGuFqGmFuGgF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.248988888889, -111.61948611111), new google.maps.LatLng(47.462916666667, -111.18614444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GREAT FALLS INTERNATIONAL AIRPORT CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'GREAT FALLS INTERNATIONAL AIRPORT CLASS E4<br />SFC-17999');
    

// GUNNISON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}xsjFxjtkS?Gb@uh@jBoh@tDah@zFmg@bIsf@fKse@hMmd@jOcc@hQqa@bSy_@zT}]pV}[`XwYnYmWvZaUz[oRz\\{Ov]eMl^mJ~^sGj_@wDr_@yAt_@>r_@|Aj_@xD~^tGl^nJv]fMz\\|Oz[pRvZ`UlYnW`XvYnV|[zT|]bSx_@fQna@hO`c@hMld@fKpe@`Ipf@zFjg@tD~g@jBjh@b@ph@c@ph@kBjh@sD~g@{Fjg@aIpf@eKre@iMld@iO`c@gQna@cSx_@{T|]oV|[aXxYmYnWwZ`U{[pR{\\|Ow]fMm^nJ__@tGk_@xDs_@|Au_@>s_@yAk_@uD__@qGm^mJw]eM{\\{O{[oRwZ_UoYmWaXwYqV}[}T}]eSy_@iQqa@kOac@kMmd@gKse@cIsf@}Fmg@uDah@mBoh@c@uh@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.458817797222, -107.0285765431), new google.maps.LatLng(38.608959017423, -106.83753606058));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'GUNNISON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'GUNNISON CLASS E2<br />SFC-17999');
    

// HAVRE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('u_bgHbin}Ss`CfwOgoO{`HroB}pMqCoJuBkHqBoHmBqHiBuHeBwHcAoEquHcp@df@mqPzwGpk@hAaEpBoHtBmHvBiHzBeH~BcH`C_HdC{GhCwGjCsGnCqGtAaDmp@odLrhP_rC`t@fcMnGfHxDnEvDrErDxEpD|EnD`FlDfFhDjFfDnFbDrF`DvF~C|FzC`GxCdGtChGpClGnCpGjCrGhCvGdCzG`C~G~B`HzBdHvBhHrBjHpBnHlBpHhBtHdBvHbBxH~A|HzA~HvA`IrAbInAdIjAfIfAhIbAjI`AlI|@nIx@pIt@rIp@rIl@tIh@vId@vI`@xI\\xIXxITzIPzILzIHzIDzI@zI?zIEzIIzIMzIQzIUzIYxI]xIa@xIe@vIi@vIm@tIq@rIu@rIy@pI}@nI_AlIcAjIgAhIkAfIoAdIsAbIwA`I{A~H_B|HaBxHeBvHiBtHmBpHqBnHsBjHwBhH{BdH_CbHaC~GeCzGiCvGkCrGoCpGqClGuChGwCdG{C`G}C|FaDvFcDrFgDnFiDjFmDfFoD`FqD|EsDxEwDrEyDnE{DhE}DdE_E~DcEzDeEtDgEpDiEjD{GdE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.476401228349, -109.93702777778), new google.maps.LatLng(48.652916666667, -109.6075));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'HAVRE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'HAVRE CLASS E2<br />SFC-17999');
    

// HAWTHORNE CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ar}mEvjxpUobGs_@pYwiHhbGx_@kYpiH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.903472222222, -118.25852777778), new google.maps.LatLng(33.949222222222, -118.2055));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'HAWTHORNE CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'HAWTHORNE CLASS E4<br />SFC-17999');
    

// HAYDEN CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kx}uFla~mSipRhui@}hPuqLfjRyii@gAcKy@eIu@eIq@gIm@iIi@iIe@iI_@kI[kIWmISmIMmIImIEmIAmI@wIDmIHmILmIRmIVmIZkI^kIb@kIh@iIl@iIp@gIt@eIx@eI~@cIbAaIfA_IjA_InA}HrA{HvAyHzAwH`BuHdBqHhBoHlBmHpBkHtBgHxBeH|BcH`C_HbC}GfCyGjCuGnCsGrCoGvCkGzCiG|CeG`DaGdD}FfDyFjDuFnDqFpDmFtDiFvDeFzDaF|D}E`EwEbEsEfEoEhEkEjEeEnEaEpE{DrEwDvEsDxEmDzEiD|EcD~E}C`FyCbFsCdFoCfFiChFcCjF_ClFyBfDeAlcL}c_@ryPboKgqK|u]nBjLnAzHjA|HfA~HbA`I~@bIx@bIt@dIp@fIl@fIh@hIb@hI^jIZjIVjIRjILlIHlIDlI@lIAlIElIIlIMlISjIWjI[jI_@jIc@hIi@hIm@fIq@fIu@dIy@bI}@bIcA`IgA~HkA|HoAzHsAxHwAvH{AtH_BrHcBpHiBnHmBlHqBhHuBfHyBdH{B`H_C~GcCzGgCxGkCtGoCrGsCnGwCjGyChG}CdGaD`GeD|FgDxFkDtFoDpFqDlFuDhFwDdF{D`F}D|EaEvEcErEgEnEiEjEkEdEoE`EqE|DsEvDuErDyElD{EhD}EbD_F~CaFxCcFrCeFnCgFhCiFdCkF~BmFxBmFrBoFnBqFhBsFbBsF|AeH~B'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.347944444444, -107.52908333333), new google.maps.LatLng(40.651, -106.96277777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'HAYDEN CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'HAYDEN CLASS E2<br />SFC-17999');
    

// HOQUIAM CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ega~GvufsVkhBme]|nUmeDpiBpo]hErKdCrG`CtG~BxGzB|GvB~GrBbHpBdHlBhHhBjHdBlH`BpH~ArHzAtHvAvHrAxHnAzHjA|HfA~HbA`I~@bI|@dIx@fIt@fIp@hIl@jIh@jId@lI`@lI\\nIXnITnIPpILpIHpIDpI@pI?pIEpIIpIMpIQpIUnIYnI]nIa@lIe@lIi@jIm@jIq@hIu@fIy@fI{@dI_AbIcA`IgA~HkA|HoAzHsAxHwAvH{AtH_BrHaBpHeBlHiBjHmBhHqBdHsBbHwB~G{B|G_CxGaCtGeCrGiCnGkCjGoCfGqCbGuC`GwC|F{CxF}CtFaDpFcDlFgDfFiDbFkD~EoDzEqDvEsDpEwDlEyDhE{DbE}D~D_ExDaEtDeEnDuGxE`qAzvV__HraAwpA}tViCk@aFgAaFmA_FsA_FyA}E}A{EcB{EiByEoBwEuBwEyBuE_CsEeCqEkCoEoCoEuCmE{CkE_DiEeDgEiDeEoDcEuD_EyD}D_E{DcEyDgEwDmEuDqEqDuEoD{EmD_FiDcFgDgFcDkFaDqF_DuF{CyFyC}FuCaGsCcGoCgGkCkGiCoGeCsGaCuG_CyG{B}GwB_HuBcHqBeHmBiHiBkHeBmHcBqH_BsH{AuHwAwHsA{HoA}HkA_IgAaIeAcIaAcI}@eIy@gIu@iIq@iIm@kIi@mIe@mIa@oI]oIYoIUqIQqIMqIIqIEqIAqI@{IDqIHqILqIPqITqIXoI\\oI`@oId@mIh@mIl@kIp@iIt@iIx@gI|@eI`AcIbAcIfAaIpAgN'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.904521594408, -124.15333333333), new google.maps.LatLng(47.0505, -123.72125));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'HOQUIAM CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'HOQUIAM CLASS E2<br />SFC-17999');
    

// IDAHO FALLS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ynciG`z_kT?Ih@}t@`Cut@xEet@nHks@bKir@tMaq@dPoo@rRwm@|Twk@dWoi@fYag@f[md@`]sa@v^u^h`@o[ta@gXzb@{Tzc@kQvd@wMje@cJze@kFbf@uBff@@bf@xBxe@pFje@fJtd@zMzc@nQxb@|Tra@hXf`@p[t^t^~\\ra@d[ld@dY`g@bWli@zTtk@pRrm@dPjo@tM|p@`Kdr@lHfs@xE~s@`Cpt@j@xt@i@xt@aCpt@wE~s@mHfs@aKdr@sM|p@cPlo@qRtm@{Ttk@cWni@eY`g@e[ld@_]ta@u^t^g`@r[sa@jXyb@~Tyc@nQud@|Mke@fJye@pFcf@xBgf@@cf@sB{e@kFke@aJwd@wM{c@iQ{b@yTua@gXi`@o[w^s^a]sa@g[md@gYag@eWoi@}Tuk@sRum@ePoo@uMaq@cKir@oHks@yEet@cCut@k@}t@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.424436973067, -112.19444028063), new google.maps.LatLng(43.604450495817, -111.9472282919));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'IDAHO FALLS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'IDAHO FALLS CLASS E2<br />SFC-17999');
    

// IDAHO FALLS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{~ugGdkpkTmwL`gSyhIqeL`H}AnHcBlHkBlHqBjHyBhHaCfHgCdHoCbHuC`H}C~GcD|GkDzGqDxGyDvG_EtGeEpGmEnGsElGyEhG_FfGgFbGmF`GsF|FyFzF_GvFeGrFkGnFqGlFwGhF{GdFaH`FgH|EmHxEqHtEwHpE{HlEaIhEeIdEkI`EoI|DuIxDyIrD}InDaJjDeJfDiJ`DmJ|CqJxCuJrCyJnC}JhC_KdCcK~BgKzBiKtBkKpBoKjBqKfBuK`BwK|AyKvA{KpA}KlA_LfAaL`AcL|@cLv@eLp@gLr@eNjjIfgL'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.3715, -112.25925), new google.maps.LatLng(43.49475, -112.08766666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'IDAHO FALLS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'IDAHO FALLS CLASS E4<br />SFC-17999');
    

// IDAHO FALLS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('icciGnrckT}aHafFpkJgdZlrHzrFwFvBgHlCeHtCcHzCaHbD_HhD}GpDyGvDwG~DuGdEsGjEoGrEmGxEkG~EgGdFeGlFaGrF_GxF{F~FwFdGuFjGqFpGmFvGiF|GgF`HcFfH_FlH{ErHwEvHsE|HoE`IkEfIgEjIaEpI}DtIyDxIuD|IqDbJkDfJgDjJcDnJ}CrJyCvJuCzJoC|JkC`KeCdKaCfK{BjKwBlKqBpKmBrKgBtKaBxK}AzKwA|KsA~KmA`LgAbLcAdL}@dLw@fLq@hLm@hLg@jLa@jL]lLWlLQlLKnLGzLAnL@nLFnLJnLPlLVlL\\lL`@jLf@jLf@rK'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.541638888889, -112.09016666667), new google.maps.LatLng(43.649166666667, -111.91411111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'IDAHO FALLS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'IDAHO FALLS CLASS E4<br />SFC-17999');
    

// IMPERIAL COUNTY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}}xgEn}l`U?E^oa@~Aia@`D_a@~Eo`@~Gy_@zI__@vK_^pM{\\fOq[|PeZnRsX|S}VhUcUpVgStWgQtXeOpY_MjZwJ~ZmHn[cFx[wC`\\kAb\\>`\\jAx[xCl[dF~ZnHhZxJpY~LtXdOtWfQpVfSfUbU|S|VlRrXzPbZfOp[pMx\\vK|]zI|^~Gv_@~El`@~C|`@~Afa@^la@_@la@_Bfa@_D|`@_Fl`@}Gv_@{I|^wK~]oMz\\gOp[{PdZmRrX}S|VgUdUoVfSuWfQuXdOqY`MiZxJ}ZnHm[dFy[xCa\\lAc\\>a\\iAy[wCo[cF_[mHkZwJsY_MuXcOuWgQqVgSiUcU}S}VoRsX}PeZiOq[qM{\\wK_^{I__@_Hy_@aFo`@aD_a@_Bia@_@oa@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.767373645201, -115.65768150702), new google.maps.LatLng(32.90095897609, -115.49954196134));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'IMPERIAL COUNTY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'IMPERIAL COUNTY CLASS E2<br />SFC-17999');
    

// JACKSON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q|qiGbp{bT?G`@_j@fByi@jDki@pFwh@rH}g@tJ{f@tLue@rNgd@lPub@fR{`@zS}^nU{\\|VsZfXgXnYwUpZcSp[mPj\\sM~\\yJp]{G|]}Dd^}Af^>b^~A|]~Dp]|G~\\zJh\\tMn[nPpZdSlYxUfXfXzVrZlUz\\zS|^dRz`@lPrb@pNdd@tLre@tJxf@rHxg@nFth@jDhi@fBti@`@|i@a@|i@gBti@kDhi@oFth@sHzg@uJxf@sLre@qNdd@mPrb@eRz`@{S|^mUz\\{VrZgXhXmYxUqZdSo[nPi\\vM_]zJq]~G}]~Dc^`Bg^@e^{A}]{Dq]{Ga]wJk\\sMq[mPsZcSoYwUiXgX}VsZoUy\\}S}^gR{`@oPsb@sNgd@uLue@uJ{f@sH}g@qFwh@mDki@gByi@a@_j@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.534995326493, -110.83663256183), new google.maps.LatLng(43.678337106696, -110.63948008284));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'JACKSON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'JACKSON CLASS E2<br />SFC-17999');
    

// KALISPELL CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cwleHjdmxTz}[dk]{uEniMok[mx\\sBlBqEfEsEbEuE|DwEvDyEpD{EjD}EdD_F~CaFxCcFrCeFlCgFfCgF`CiFzBkFtBmFnBmFhBoFbBoF|AqFvAqFnAsFhAsFbAuF|@uFv@uFn@wFh@wFb@wF\\wFTwFNwFHwF@wFAwFGwFMwFUwF[wFa@wFg@uFo@uFu@uF{@sFaAsFiAsFoAqFuAqF{AoFaBmFgBmFoBkFuBiF{BiFaCgFgCeFmCcFsCaFyC_F_D}EeD{EkDyEqDwEwDuE{DsEaEqEgEoEmEmEqEiEwEgE}EeEaFaEgF_EmF}DqFyDwFwD{FsD_GqDeGmDiGkDmGgDsGcDwGaD{G}C_HyCcHwCgHsCkHoCoHkCsHiCwHeC{HaC}H}BaIyBeIuBgIqBkImBmIiBqIeBsIaBuI}AyIyA{IuA}IqA_JmAaJiAcJeAeJaAgJ}@iJy@kJu@mJq@mJk@oJg@oJc@qJ_@qJ[sJWsJQuJMuJIuJEuJAuJ@_KDuJHuJLuJPuJTsJZsJ^qJb@qJf@qJj@oJn@mJt@mJx@kJ|@iJ`AgJdAeJhAcJlAaJpA_JtA}IxA{I|AyI`BuIdBsIhBqIlBmIpBkItBgIxBeI|BaI`C}HdC{HhCwHjCsHnCoHrCkHvCgHxCcH|C_H`D{GbDwGfDsGjDmGlDiGpDeGrD_GvD{FxDwF|DqF~DmF`EgFdEaFfE}EhEwElEsEnEmEpEgErEaEtE{DvEwDxEqDzEkD|EeD~E_D`FyCbFsCdFmCfFgChFaChF{BjFuBlFoBlFiBnFaBpF{ApFuArFoArFiArFaAtF{@tFu@tFo@vFg@vFa@vF[vFUvFMvFGvFAvF@vFHvFNvFTvFZvFb@vFh@tFn@tFt@tF|@rFbArFhApFnApFtAnF|AnFbBlFhBlFnBjFtBhFzBhF`CfFfCdFlCbFrC`FxC~E~C|EdDzEjDxEpDvEvDtE|DrE`EpEfEnElEjErEhEvEfE|EdEbF`EfF~DlFzDpFxDvFvDzFrD~FpDdGlDhGhDlGfDrGbDvG`DzG|C~GxCbHvCfHrCjHnCnHjCrHfCvHdCxH`C|H|B`IxBbItBfIpBhIlBlIhBnIdBrI`BtI|AvIxAzItA|IpA~IlA`JhAbJdAdJ`AfJ|@hJx@hJt@jJn@lJj@lJf@nJb@pJ^pJZpJTrJPrJLrJHrJDtJ@tJAtJEtJIrJMrJQrJUrJYnJ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.091083333333, -114.49794444444), new google.maps.LatLng(48.382077717184, -114.14865714314));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'KALISPELL CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'KALISPELL CLASS E2<br />SFC-17999');
    

// KEMMERER CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('aku~Fro|aTudH??cvGtdH?`@mD|@cI`AaIdA_IhA}HlA{HpAyHtAwHxAuH|AsH`BqHdBoHhBmHlBiHpBgHtBeHxBaH|B_H`C{GdCyGhCuGjCqGnCoGrCkGvCgGxCcG|CaG`D}FbDyFfDuFjDqFlDmFpDiFrDeFvD_FxD{E|DwE~DsE`EoEdEiEfEeEhEaElE{DnEwDpEqDrEmDtEgDvEcDxE}C|EyC|EsC~EmC`FiCbFcCdF}BfFyBhFsBhFmBjFgBlFcBlF}AnFwApFqApFkArFgArFaAtF{@tFu@tFo@vFi@vFc@vF]vFWvFSvFMxFGxFAxF@xFFvFLvFRvFXvF^vFd@vFh@tFn@tFt@rFz@rF`ArFfApFlApFrAnFvAlF|AlFbBjFhBhFlBhFrBfFxBdF~BbFbC`FhC~EnC|ErCzExCxE|CvEbDtEfDrElDpEpDnEvDlEzDhE`EfEdEdEhE`EnE~DrE|DvExDzEvD~ErDdFpDhFlDlFjDpFfDtFbDxF`D|F|C~FxCbGvCfGrCjGnCnGjCpGfCtGdCvG`CzG|B|GxB`HtBbHpBfHlBhHhBjHdBnH`BpH|ArHxAtHtAvHpAxHlAzHhA|HdA~H`A~H|@`Ix@bIt@dIn@dIj@fIf@fIb@hI^hIZhIVjIPjILjIHjIDjI@lIAlIEjIIjIMjIQjIUjI[hI_@hIc@hIg@fIk@fIo@dIu@dIy@bI}@`IaA`IeA~HiA|HmAzHqAxHuAvHyAtH}ArHaBpHeBnHiBjHmBhHqBfHuBbHyB`H}B~GaCzGeCvGgCtGkCpGoCnGsCjGwCfGyCbG}C`GaD|FcDxFgDtFkDpFmDlFqDhFsDdFwD`FyDzE}DvE_ErEaEnEeEhEgEdEiE`EmEzDoEvDqEpDsElDuEhDwEbDyE|C{ExC}ErC_FnCaFhCcFbCeF~BgFxBiFrBiFnBkFhBmFbBmF|AoFvAqFrAqFlAsFfAsF`AsFz@uFt@uFn@uFj@wFd@wF^wFXwFRwFLyFFyF@yFAyFGwFMwFQwFWwF]wFc@wFi@uFo@uFu@uF{@sFaAsFeAqFkAqFqAoFwAmF}AmFcBkFgBiFmBiFsBgFyBeF}BcFcCaFiC_FmC_FsC}EyC{E}CwEcDuEgDsEmDqEqDoEwDmE{DiE_EgEeEeEiEaEoE_EsE}DwEyD{EwD_FsDeFqDiFmDmFkDqFgDuFcDyFaD}F}CaGyCcGwCgGsCkGoCoGkCqGiCuGeCyGaC{G}B_HyBaHuBeHqBgHmBiHiBmHeBoHaBqH}AsHyAuHuAwHqAyHmA{HiA}HeA_IaAaI}@cIc@uD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.752379195024, -110.65279747133), new google.maps.LatLng(41.940777777778, -110.46114691853));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'KEMMERER CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'KEMMERER CLASS E2<br />SFC-17999');
    

// KLAMATH FALLS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oez`Gx__fV?Ih@ys@`Cqs@xE_s@nHgr@bKgq@tM}o@dPmn@rRul@|Twj@dWqh@fYef@f[sc@`]{`@v^_^h`@}Zta@uWzb@kTzc@}Pvd@mMje@{Ize@gFbf@qBff@@bf@tBze@jFje@~Itd@pMzc@`Qxb@nTra@xWf`@|Zt^~]~\\z`@d[rc@fYdf@bWph@|Ttj@pRrl@dPjn@tMzo@bKbq@lHbr@xEzr@`Cjs@j@rs@i@rs@aCjs@wEzr@mHbr@aKbq@sMzo@cPjn@qRrl@{Ttj@cWph@eYdf@e[rc@_]|`@u^~]g`@~Zsa@xWyb@nT{c@`Qud@rMke@~I{e@jFcf@vBgf@@cf@qB{e@gFke@{Iwd@mM{c@}P{b@kTua@uWi`@{Zw^}]a]{`@g[sc@iYef@eWqh@}Twj@sRul@gPmn@uM}o@cKeq@oHgr@yE_s@cCos@k@ys@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.066109987628, -121.85412324078), new google.maps.LatLng(42.246166374793, -121.61226751653));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'KLAMATH FALLS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'KLAMATH FALLS CLASS E2<br />SFC-17999');
    

// KLAMATH FALLS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('a{t`Gp_pfV__KhrGynDe}LtgKaxGl@rLl@`Lr@~Kv@~K|@|KbAzKfAxKlAvKrAtKvArK|ApKbBnKfBlKlBjKpBfKvBdKzBbK`C~JdC|JjCxJnCtJtCpJxCnJ~CjJbDfJfDbJjD~IpDzItDvIxDrI|DlIbEhIfEdIjE~HnEzHrEtHvEpHzEjHxDzF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.218894444444, -121.86431388889), new google.maps.LatLng(42.308475, -121.74794722222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'KLAMATH FALLS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'KLAMATH FALLS CLASS E4<br />SFC-17999');
    

// KLAMATH FALLS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ux}_GvlleVqDmD|}JgpAruApzUm|F~t@`@kK`@aLZaLVaLPcLJcLFcL@cLAcLGcLKcLQcLWaL]aLa@aLg@_Lm@_Lq@}Kw@}K}@{KaAyKgAwKmAuKqAsKwAqK}AoKaBmKgBkKkBiKqBeKuBcK{BaKaC}JeC{JiCwJoCsJsCqJyCmJ}CiJaDeJgDaJkD}IoDyIuDuIyDqI}DmIaEgIeEcIiE_ImEyHqEuHuEoHyEkH}EeHaFaHeF{GiFuGmFoGoFkGsFeG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.026511111111, -121.74986111111), new google.maps.LatLng(42.10165, -121.62416111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'KLAMATH FALLS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'KLAMATH FALLS CLASS E4<br />SFC-17999');
    

// LANCASTER CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('glmsEfsppU?E^gb@~Aab@~Cwa@~Ega@~Gq`@zIu_@vKu^pMq]fOg\\|PyZlReY|SoWhUsUpVuStWuQtXoOpYiMjZ_K~ZuHl[iFx[{C~[kAb\\>~[lAx[zCl[hF|ZtHhZ`KpYhMtXpOtWtQnVtSfUrU|SnWlRdYzPvZfOd\\nMn]vKt^zIt_@|Gn`@~Eda@~Cta@~A`b@^db@_@db@_B`b@_Dta@_Fda@}Gn`@{It_@wKt^oMn]gOd\\{PvZmRdY{SnWgUtUoVvSsWtQuXpOqYjMiZ`K}ZvHm[hFy[|C_\\nAc\\>_\\kAy[yCm[gF_[uHkZ_KqYiMuXoOuWsQqVuSiUsU}SmWoReY}PwZgOg\\qMq]wKu^{Iu_@_Hq`@aFga@aDwa@_Bab@_@gb@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.674338750288, -118.29973201115), new google.maps.LatLng(34.807882740305, -118.13804703862));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LANCASTER CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'LANCASTER CLASS E2<br />SFC-17999');
    

// LANCASTER CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('enbsEnf`qUkfF`sJ}jHcqGjbFylJvAdElBvFpBrFtBpFvBnFzBlF~BhFbCfFdCbFhC`FlC~EnCzErCvEtCtExCpEzCnE~CjE`DfEdDbEfD`EjD|DlDxDnDtDrDpDtDlDvDhDxDdDzD`D~D|C`ExCbEtCdEpCfElChEhCjEdClE`CnEzBpEvBrErBrEnBtEhBvEdBxE`BxEzAzEvA|ErA|ElA~EhA~EdA`F~@`Fz@bFt@bFp@zCh@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.751872222222, -118.35833055556), new google.maps.LatLng(34.836894444444, -118.25593611111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LANCASTER CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'LANCASTER CLASS E4<br />SFC-17999');
    

// LANCASTER CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yw|rEfmapUoFiAlyCk~ErA~J`AbHdA`HhA~GlA|GpAzGtAxGxAxG~AvGbBtGfBpGjBnGlBlGpBjGtBhGxBdG|BbG`C`GdC|FhCzFlCvFnCtFrCpFvCnFzCjF|CfF`DdFdD`FfD|EjDxElDvEpDrErDnEvDjExDfE|DbE~D~DbEzDdEvDfErDjElDlEhDnEdDpE`DrE|CtEvCxErCzEnC|EhCtFjDeqBfdD_CqJ{AaG_B_GcB}FeB{FiByFmBuFqBsFuBqFwBoF{BkF_CiFaCgFeCcFiCaFkC}EoC{EsCwEuCuEyCqE{CoE_DkEaDgEeDcEgDaEiD}DmDyDoDuDqDqDuDmDwDiDyDeD{DaD}D}CaEyCcEuCeEqCgEmCiEiCkEeCmEaCoE}BqEwBqEsBsEoBuEkBwEeByEaByE}A{EwA}EsA}EoA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.660736111111, -118.18915833333), new google.maps.LatLng(34.7239, -118.10504444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LANCASTER CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'LANCASTER CLASS E4<br />SFC-17999');
    

// LARAMIE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w__{FroodSivJ`zXipRcrNjxKmf[NkGPaITaIXaI\\_Ib@_If@}Hj@}Hn@{Hr@{Hv@yHz@yH~@wHbAuHfAsHjAqHnAoHrAmHvAkHzAiH~AgHbBeHfBcHjBaHnB}GrB{GvByGzBuG|BsG`CoGdCmGhCiGlCeGnCcGrC_GvC{FxCyF|CuF`DqFbDmFfDiFhDeFlDaFnD}ErDyEtDuEvDqEzDmE|DgE~DcEbE_EdE{DlGuFfnXcsm@laTpgScdYnxn@q@`DwAjH{AhH_BfHcBdHgBbHkB~GoB|GsBzGwBxGyBtG}BrGaCnGeClGiChGkCdGoCbGsC~FuCzFyCxF}CtF_DpFcDlFgDhFiDdFmD`FoD|EsDxEuDtEwDpE{DlE}DfE_EbEcE~DeEzDgEtDiEpDkElDoEfDqEbDsE|CuExCwErCyEnC{EhC}EdC_F~B_FzB}HlD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.112916666667, -105.89372222222), new google.maps.LatLng(41.447916666667, -105.35836111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LARAMIE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'LARAMIE CLASS E2<br />SFC-17999');
    

// LAS VEGAS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('al`yEbtv`SwkCooAjoDunMtbDp|A`FkDnE{CpEwCrEqCtEmCvEiCxEcCzE_C|E{B~EuB`FqB`FkBbFgBdFaBfF}AfFwAhFsAhFmAjFiAlFcAlF_AlFy@nFu@nFo@pFk@pFe@pF_@pF[rFUrFQrFKrFErFArF@rFFrFJrFPpFTpFZpF`@pFd@pFj@nFn@nFt@lFx@lF~@jFdAjFhAhFnAhFrAfFxAfF|AdFbBbFfB`FlB`FpB~EtB|EzBzE~BxEbCvEhCtElCrEpCpEvCnEzClE~CjEbDfEfDdElDbEpD`EtD|DxDzD|DxD`EtDdErDhEnDlElDpEhDrEfDvEbDzE`D~E|C`FxCdFvChFrCjFnCnFlCrFhCtFdCvF`CzF|B|FzB`GvBbGrBdGnBfGjBjGfBlGbBnG~ApGzArGvAtGrAvGnAxGjAzGfAzGbA|G~@~Gz@`Hv@`Hr@bHn@bHj@dHf@dHb@fH\\fHXfHThHPhHLhHHhHDhH@hHAhHEhHIhHMhHQhHUhHYfHi@tG|qDxvDqxGzyKseDijDcFhBcFfBeFbBeF|AgFxAiFrAiFnAkFhAkFdAmF~@mFz@oFt@oFn@oFj@qFd@qF`@qFZqFTsFPsFJsFFsF@sFAsFEsFKsFOqFUqF[qF_@qFe@oFi@oFo@oFu@mFy@mF_AkFcAkFiAiFmAiFsAgFwAgF}AeFaBcFgBaFkBaFqB_FuB}EyB{E_CyEcCwEiCuEmCsEqCqEuCoE{CmE_DkEcDgEgDeEkDcEqDaEuD}DyD{D}DyDaEuDeEsDiEoDmEmDoEiDsEgDwEcD{EaD_F}CaFyCeFwCiFsCkFoCoFmCqFiCuFeCwFaC{F}B}F{BaGwBcGsBeGoBgGkBkGgBmGcBoG_BqG{AsGwAuGsAwGoAyGkA{GgA{GcA}G_A_H{@aHw@aHs@cHo@cHk@eHg@eHc@gH_@gHYgHUiHQiHMiHIiHEiHSaH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.556138888889, -105.2495), new google.maps.LatLng(35.746861111111, -105.0555));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LAS VEGAS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'LAS VEGAS CLASS E2<br />SFC-17999');
    

// LEMOORE NAS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}fh}Etdc{U?Gh@wm@|Bqm@pEam@bHml@tJok@dMkj@pOai@|Qog@bTwe@hV{c@hXwa@dZo_@~[a]r]mZ`_@wWl`@}Tpa@}Qpb@}Njc@yK~c@sHld@mEvd@eBxd@>vd@fBld@nE~c@vHjc@zKnb@~Npa@~Qj`@|T`_@vWp]nZ|[`]dZl_@hXva@fVxc@bTve@zQlg@pO~h@bMhj@tJlk@bHhl@pE~l@|Blm@h@tm@g@tm@}Blm@oE~l@cHhl@sJlk@cMhj@qO~h@{Qlg@cTve@gVxc@gXva@eZn_@}[`]q]nZa_@xWk`@~Toa@`Rob@~Nic@|K_d@vHmd@pEwd@hByd@@wd@eBmd@mE_d@sHkc@yKqb@}Nqa@}Qm`@{Tc_@wWs]mZ_\\_]gZm_@iXwa@iVyc@eTwe@}Qog@sOai@eMkj@uJok@cHkl@qEam@}Bqm@i@wm@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.246274286863, -120.05941668931), new google.maps.LatLng(36.419835563693, -119.84502942664));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LEMOORE NAS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'LEMOORE NAS CLASS E2<br />SFC-17999');
    

// LEMOORE NAS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{hj|EruuzUoFwJjhBcx@r}Cj`Lo`CfiAMoNKsJQsJUsJ[sJa@qJe@qJk@oJq@oJu@mJ{@mJ_AkJeAiJiAiJoAgJuAeJyAcJ_BaJcB_JiB}ImB{IqBwIwBuI{BsIaCoIeCmIiCiIoCgIsCcIwCaI}C}HaDyHeDwHiDsHmDoHsDkHwDgH{DcH_E_H'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.225508333333, -119.95094166667), new google.maps.LatLng(36.267755555556, -119.87227222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LEMOORE NAS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'LEMOORE NAS CLASS E4<br />SFC-17999');
    

// LEMOORE NAS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qib}Ej`s{UmiHjkDuuB{xHeQTkAaw@gRer@rOuHwMoyI|pGuPa@bHk@pJe@pJa@rJ[rJUrJQrJKtJG~JAtJ@tJFtJJtJPrJTrJZrJ`@rJd@pJj@pJp@nJt@nJz@lJ~@jJdAjJhAhJnAfJtAdJxAbJ~A`JbB~IhB|IlBzIrBvIvBtIzBrI`CnIdClIjChInCfIrCbIvC`I|C|H`DxHdDvHhDrHnDnHrDjHvDfHzDbH~D~GbEzGfEvGjEpGnElGrEhGvEdGxE~F|EzFhHrH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.389533333333, -120.06109166667), new google.maps.LatLng(36.462672222222, -119.933975));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LEMOORE NAS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'LEMOORE NAS CLASS E4<br />SFC-17999');
    

// LEWISTON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('czmzGvpeiU?G^aj@`Byi@bDmi@dFyh@dH}g@bJ}f@`Lue@zMgd@rOub@hQ{`@|R}^lT{\\xUsZ`WgXfXwUhYcSdZmP~ZsMr[yJb\\{Gn\\}Dt\\}Av\\>t\\~An\\~Db\\|Gr[zJ|ZvMdZnPfYdSfXxU`WhXvUrZjTz\\zR|^hQz`@rOrb@zMdd@~Kre@bJxf@dHzg@dFth@bDhi@`Bvi@^|i@_@|i@aBvi@cDhi@eFth@eHzg@cJzf@_Lre@yMfd@sOrb@iQz`@{R|^kTz\\wUtZaWhXeXxUgYfSeZnP}ZvMs[zJc\\~Gm\\~Du\\`Bw\\@u\\{Ao\\{Dc\\{Gs[wJ_[sMeZmPiYcSgXwUcWgXyUsZmT{\\}R}^iQ{`@uOub@{Mgd@aLue@cJ}f@eH}g@eFwh@eDmi@cByi@_@aj@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.306139914313, -117.11390620376), new google.maps.LatLng(46.442748156809, -116.91665088345));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LEWISTON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'LEWISTON CLASS E2<br />SFC-17999');
    

// LEWISTON CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ymtyGjymiUxmAd_s@gvUjhAukAgzq@`BnDrCjGvChGxCdG|C`G~C|FbDxFdDrFhDnFjDjFnDfFpDbFrD|EvDxExDtEzDnE~DjE`EfEbE`EdE|DfEvDhEpDjElDlEfDnEbDpE|CrEvCtErCvElCxEfCzE`C|EzB|EvB~EpB`FjB`FdBbF~AdFxAdFrAfFnAfFhAhFbAhF|@hFv@jFp@jFj@jFd@jF^lFXlFRlFLlFFlF@lFAlFGlFMlFSjFYjF_@jFe@jFk@jFq@hFw@hF}@fFcAfFiAfFoAdFuAbF{AbFaB`FgB`FkB~EqB|EwB|E}BzEcCxEgCvEmCtEsCrEyCpE}CnEcDlEiDjEmDhEsDfEwDdE}DbEaE`EgE|DkEzDqExDuEvDyErD_FpDcFlDgFjDkFhDoFdDuFbDyF~C}F|CaGxCeGtCiGrCkGnCoGjCsGhCwGdC{G`C}G~BaHzBcHvBgHrBkHnBmHlBoHhBsH^kD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.300166666667, -117.33569444444), new google.maps.LatLng(46.428805555556, -117.05766666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LEWISTON CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'LEWISTON CLASS E4<br />SFC-17999');
    

// LEWISTON CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gwfzGhpthUmFfDllDs~p@jjP`~BsqD|kr@sEmKsCkGuCgGyCcG{C_G_D{FaDwFeDsFgDoFkDkFmDgFqDaFsD}EuDyEyDuE{DoE}DkE_EeEcEaEeE{DgEwDiEqDkEmDmEgDoEcDqE}CsEwCuEsCwEmCyEgCyEaC{E}B}EwB_FqB_FkBaFeBcFaBcF{AeFuAeFoAgFiAgFcAiF}@iFw@iFq@kFk@kFe@kF_@kFYkFSkFMmFGmFAmF@mFFkFLkFRkFXkF^kFd@kFj@iFp@iFv@iF|@gFbAgFhAeFlAeFrAcFxAcF~AaFdB_FjB_FpB}EvB{EzB{E`CyEfCwElCuEpCsEvCqE|C'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.291027777778, -116.95663888889), new google.maps.LatLng(46.407638888889, -116.67311111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LEWISTON CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'LEWISTON CLASS E4<br />SFC-17999');
    

// LEWISTOWN CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('elz~Gbfc{S?Mt@kgAbD_gApGifA|JgeAfN{cAnQcbAtTa`AtWs}@rZ}z@l]_x@``@ut@pb@eq@zd@mm@~f@mi@|h@ee@rj@y`@bl@g\\lm@qWnn@wRho@{M|o@{Hfp@{Cjp@Bfp@bDzo@dIfo@bNln@~Rjm@xW`l@l\\pj@~`@xh@he@zf@ni@vd@lm@lb@dq@~_@tt@j]zw@pZxz@rWn}@rTx_AlQzaAdNpcA|J~dApG~eAbDtfAt@`gAu@`gAcDtfAoG~eA{J~dAeNrcAmQzaAqTz_AsWn}@qZzz@i]|w@_`@tt@mb@dq@wd@nm@{f@ni@yh@je@qj@~`@al@n\\km@xWmn@`Sgo@dN{o@dIgp@dDkp@Bgp@yC}o@{Hio@yMon@wRmm@qWcl@g\\sj@y`@}h@ee@_g@ki@{d@km@qb@eq@c`@ut@m]}w@uZ}z@wWs}@uT_`AqQabAiNycA}JgeAqGifAeD_gAw@kgA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.935894077204, -109.63230169655), new google.maps.LatLng(47.162437008195, -109.30103414232));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LEWISTOWN CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'LEWISTOWN CLASS E2<br />SFC-17999');
    

// LIVINGSTON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kacvG`rsaTs~JffEi_EorV|}JcfEhA}FxAyH|AwH`BsHdBqHhBoHlBmHnBiHrBgHvBcHzBaH~B}G`CyGdCwGhCsGjCoGnCmGrCiGtCeGxCaG|C}F~CyFbDuFdDqFhDmFjDiFlDcFpD_FrD{EvDwExDqEzDmE|DiE`EcEbE_EdEyDfEuDhEoDjEkDlEeDnEaDpE{CrEuCtEqCvEkCxEeCzE_CzE{B|EuB~EoB`FiB`FcBbF_BbFyAdFsAdFmAfFgAfFaAhF{@hFu@hFo@jFk@jFe@jF_@jFYjFSlFMlFGlFAlF@lFFlFLjFRjFXjF^jFd@jFj@hFp@hFv@hF|@fFbAfFfAdFlAdFrAbFxAbF~A`FdB`FjB~EnB|EtBzEzBzE`CxEdCvEjCtEpCrEvCpEzCnE`DlEdDjEjDhEnDfEtDdExDbE~D~DbE|DhEzDlExDpEtDvErDzEpD~ElDbFjDhFfDlFdDpF`DtF~CxFzC|FxC`GtCdGrChGnCjGjCnGhCrGdCvG`CxG|B|GzB~GvBbHrBdHnBhHlBjHhBnHdBpH`BrH|AtHxAxHtAzHpA|HlA~HhA`IdAbI`AbI|@dIx@fIt@hIp@hIl@jIh@lId@lI`@nI\\nIXnITpIPpILpIHpIDpI@pIApIEpIIpIMpIQpIUpIYnI]nIa@nIe@lIi@lIm@jIq@hIu@hIy@fI}@dIaAbIeAbIiA`ImA~HqA|HuAzHyAxH}AtHaBrHeBpHiBnHkBjHoBhHsBdHwBbH{B~G}B|GaCxGeCvGiCrGkCnGoCjGsChGuCdGyC`G{C|F_DxFaDtFeDpFgDlFkDhFmDbFqD~EsDzEuDvEyDpE{DlE}DhE_EbEcE~DeEzDgEtDiEpDkEjDmEdDoE`DqEzCsEvCuEpCwEjCyEfC{E`C{EzB}EtB_FnB_FjBaFdBcF~AcFxAeFrAeFlAgFhAgFbAiF|@iFv@iFp@kFj@kFd@kF^kFXkFRmFLmFFmF@mFAmFGmFMkFSkFYkF_@kFc@kFi@iFo@iFu@iF{@gFaAgFgAeFmAeFsAcFyAcF_BaFcBaFiB_FoB}EuB{E{B{E_CyEeCwEkCuEqCsEuCqE{C}CkB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.631114231216, -110.5655), new google.maps.LatLng(45.824388888889, -110.35055355635));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LIVINGSTON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'LIVINGSTON CLASS E2<br />SFC-17999');
    

// LOMPOC CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gtxrEfpm~UyFeCjaCerCU}AMcAMcAKcAKcAIcAIcAGcAGcAEcAEeACeACeAAeAAeA?eA?eA>gA>eA@eA@eABeABeADeADcAFcAFcAHcAHcAJcAJcALcALcANaANaAPaAPaARaAR_AT_AT_AV_AV}@X}@X}@X}@Z{@Z{@\\{@\\y@^y@^y@^w@`@w@`@u@b@u@b@u@b@s@d@s@d@s@f@q@f@q@f@o@h@o@h@m@h@m@j@k@j@k@j@i@l@i@l@g@l@g@n@e@n@e@n@c@n@c@p@a@p@a@p@_@p@_@r@]r@]r@[r@[r@Yt@Wt@Wt@Ut@Ut@St@Sv@Qv@Ov@Ov@Mv@Mv@Kv@Iv@Iv@Gv@Ex@Ex@Cx@Cx@Ax@?x@?x@>x@>x@@x@Bx@Bx@Dv@Dv@Fv@Hv@Hv@Jv@Lv@Lv@Nv@Nv@Pt@Rt@Rt@Tt@Tt@Vt@Vr@Xr@Zr@Zr@\\r@\\p@^p@^p@`@p@`@n@b@n@b@n@d@n@d@l@f@l@f@l@h@j@h@j@j@j@j@h@l@h@l@h@n@f@n@f@p@f@p@d@r@d@r@b@r@b@t@b@t@`@t@`@v@^v@^x@^x@\\x@\\z@Zz@Zz@X|@X|@X|@V|@V~@T~@T~@R~@R`AP`AP`AN`AN`AL`ALbAJbAJbAHbAHbAFbAFbADbADdABdABdA@dA@dA>dA>dA?dA?dAAdAAdACdACdAEdAEbAGbAGbAIbAIbAKbAKbAMbAMbAO`AO`AQ`AQ`AS`AS~@U~@U~@W~@W|@Y|@Y|@Y|@[z@[z@c@bAv{CbjEoxEltFsBgKuAyGyAyG}AwGaBuGeBqGiBoGmBmGqBkGuBiGyBeG}BcGaCaGeC}FiC{FkCwFoCuFsCqFwCoFyCkF}CiFaDeFcDaFgD}EkD{EmDwEqDsEsDoEwDkEyDgE}DcE_E_EaE{DeEwDgEsDiEoDmEiDoEeDqEaDsE}CuEyCwEsC{EoC}EkC_FeCaFaCaF{BcFwB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.626872222222, -120.54908333333), new google.maps.LatLng(34.7029, -120.4463325905));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'LOMPOC CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'LOMPOC CLASS E4<br />SFC-17999');
    

// MAMMOTH LAKES CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_rwdF|tysUtGoAf^gwFvpJriAg^fwFxCnC|DpDzDtDxDxDvD|DrD`EpDdElDhEjDlEhDpEdDtEbDvE~CzE|C~ExCbFtCdFrChFnClFjCnFhCrFdCtF`CxF~BzFzB|FvB`GrBbGnBdGlBhGhBjGdBlG`BnG|ApGxArGtAtGpAvGlAxGhAzGdA|G`A|G|@~Gx@`Ht@`Hp@bHl@bHh@dHd@dH`@fH\\fHXfHThHPhHLhHHhHDhH@hHAhHEhHIhHMhHQhHUhHYhH]fHa@fHe@dHi@dHm@bHq@bHu@`Hy@`H}@~GaA|GeA|GiAzGmAxGqAvGuAtGyArG}ApGaBnGeBlGiBjGmBhGoBdGsBbGwB`G{B|F_CzFaCxFeCtFiCrFkCnFoClFsChFuCdFyCbF}C~E_DzEcDvEeDtEiDpEkDlEmDhEqDdEsD`EwD|DyDxD{DtD}DpDaElDcEhDeEbDgE~CiEzCkEvCmErCoElCqEhCsEdCuE~BwEzByEtB{EpB}ElB}EfB_FbBaF|AaFxAcFrAeFnAeFhAgFdAgF~@gFz@iFt@iFn@kFj@kFd@kF`@kFZmFTmFPmFJmFFmF@mFAmFEmFKmFOmFUkF[kF_@kFe@kFk@iFo@iFu@iFy@gF_AgFcAeFiAeFmAcFsAaFwAaF}A_FaB}EgB}EkB{EqByEuBwE{BuE_CsEcCqEiCoEmCmEqCkEwCiE{CgE_DeEcDcEgDaEmD_EqD{DuDyDyDwD}DsDaEqDeEoDiEkDmEiDqEeDuEcDwE_D{E}C_FyCcFwCeFsCiFoCmFmCoFiCsFeCuFaCyF_C{F{B_GwBaGsBcGqBeGmBiGiBkGeBmGaBoG}AqGyAsGuAuGqAwGmAyGiA{GeA}GaA_H}@_Hy@aHu@cHq@cHm@eHi@eHe@gHa@gH]gHYiHUiHQiHMiHIkHEkHAkH@sHDkHHkHLiHPiHTiHXiH\\gH`@gHd@gHh@eHl@eHp@cHt@cHx@aH|@_H`A_HdA}GhA{GlAyGpAwGtAuGxAsG|AqG`BoGdBmGhBkGlBiGpBeGrBcGvBaGzB_G~B{F`CyFdCuFhCsFlCoFnCmFrCiFtCeFxCcF|C_F~C{EbDwEdDuEhDqEjDmEnDiEpDeErDaEvD}DxDyDzDuD~DqD`EmDbEgDdEcDfE_DhE{CjEwClEqCnEmCpEiCrEcCtE_CvE{BxEuBzEqB|EkB|EgB~EcB`F}A'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.555756439883, -118.92461996259), new google.maps.LatLng(37.692576092806, -118.71666666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MAMMOTH LAKES CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MAMMOTH LAKES CLASS E2<br />SFC-17999');
    

// MARYSVILLE BEALE AFB CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gvkmFdvucVtqCdzLeiBvx@AoHAsJEsJKsJOsJUsJYqJ_@qJe@qJi@oJo@oJs@mJy@kJ}@kJaAiJgAgJkAeJqAcJuAaJ{A_J_B}IcB{IiByImBwIqBuIwBqI{BoI_CmIeCiIiCgImCcIqC_IuC}H{CyH_DuHcDqHgDoHkDkHoDgHsDcHwD_HgG}KvxA}o@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.035616666667, -121.438125), new google.maps.LatLng(39.07345, -121.35795833333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MARYSVILLE BEALE AFB CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'MARYSVILLE BEALE AFB CLASS E3<br />SFC-17999');
    

// MARYSVILLE-YUBA COUNTY ARPT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qignFn}oeV}rBciMdjIiiC^gI\\oH`@mHd@mHh@mHl@kHp@kHt@iHx@gH|@gHbAeHfAcHhAaHlA_H~@cFbHnBtGfBvG`BvGzAxGtAzGnAzGfA|G`A|Gz@|Gt@~Gn@~Gf@~G`@~GZ`HT`HL`HF`H@`HA`HI`HO`HU~G[~Gc@~Gi@~Go@|Gu@|G}@zGcAzGiAxGoAxGuAvG}AvGcBtGiBrGoBpGuBpG{BnGaClGgCjGmChGsCfGyCdG_DbGeD~FkD|FqDzFwDxF{DtFaErFgEpFmElFqEjFwEfF}EdFaF`FgF~EkFzEqFvEuFtE{FpE_GlEcGhEiGdEmGbEqG~DuGzDyGvD_HrDcHnDgHjDkHfDmHbDqH~CuHlF{KvGlEjExChE|CfEbDdEfDbEjD`EnD|DtDxBxB`aHqdEdoDnhLykHzkECbIEnHInHMnHQnHUlHYlH]lHa@jHe@jHi@jHm@hHq@fHu@fHy@dH}@dHaAbHeA`HiA~GmA|GqAzGuAzGyAxG}AtGaBrGeBpGiBnGkBlGoBjGsBfGwBdG{BbG}B~FaC|FeCxFiCvFkCrFoCpFsClFuChFyCfF{CbF_D~EaDzEeDvEgDtEkDpEmDlEqDhEsDdEuD`EyD|D{DxD}DrD_EnDcEjDeEfDgEbDiE|CkExCmEtCoEpCqEjCsEfCuE`CwE|ByExByErB{EnB}EhB_FdB_F~AaFzAcFtAcFnAeFjAeFdAgF`AgFz@gFv@iFp@iFj@iFf@kF`@kFZkFVkFPkFJkFFmF@mFAkFEkFKkFQkFUkF[kFa@kFe@iFk@iFq@iFu@gF{@gF_AeFeAeFkAcFoAcFuAaFyA_F_B_FcB}EiB{EmB{EsByEwBwE}BuEaCsEgCqEkCoEoCmEuCkEyCiE}CgEaDeEgDcEkD_EoD}DsD{DwDyD}DuDaEsDeEqDiEmDmEqEsCmwI|nC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.981422222222, -121.65724390793), new google.maps.LatLng(39.218975, -121.46873611111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MARYSVILLE-YUBA COUNTY ARPT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MARYSVILLE-YUBA COUNTY ARPT CLASS E2<br />SFC-17999');
    

// MERCED MACREADY AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}d_cF`{p~U?G`@cf@fB}e@lDqe@pF_e@rHgd@tJic@tLeb@rN}`@nPm_@fR{]|Sa\\nUeZ|VcXhX_VnYuSrZiQp[{Nj\\iL`]wIp]aG|]kDd^uAf^>d^vA|]lDp]bG`]xIj\\jLp[|NpZjQnYvSfX~U|VbXnUdZzS`\\fRx]lPl_@rNz`@tLbb@tJfc@rHdd@pF|d@jDne@fBze@`@`f@a@`f@gBze@kDne@oF|d@sHdd@uJfc@uLbb@sNz`@mPl_@eRx]{S`\\mUdZ}VdXgX~UoYvSqZjQq[|Nk\\jLa]xIq]dG}]nDe^vAg^>e^sA}]kDq]aGa]wIk\\iLq[{NsZiQoYuSiX}U}VcXoUeZ}Sa\\gRy]oPm_@sN{`@uLeb@uJic@uHgd@qF_e@mDqe@gB}e@a@cf@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.212972383788, -120.60363388561), new google.maps.LatLng(37.35647119073, -120.4241452982));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MERCED MACREADY AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MERCED MACREADY AIRPORT CLASS E2<br />SFC-17999');
    

// MILES CITY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ynkyGjrbfSm`MdqRo~Bw}DgxLxaEcfDgxWaK}EeG{CcGaDaGiD_GoD}FuD{F{DyFcEwFiEsFoEqFuEoF{EkFaFiFgFgFmFcFsFaFyF}E_G{EcGwEiGsEoGqEuGmEyGiE_HeEcHcEiH_EmH{DsHwDwHsD{HoDaIkDeIgDiIcDmI_DqI{CuIwCyIsC}IoCaJkCeJgCiJaCkJ}BoJyBsJuBuJoByJkB{JgB}JcBaK}AcKyAeKsAgKoAiKkAkKeAmKaAoK{@qKw@sKs@sKm@uKi@uKc@wK_@wKYyKUyKOyKK{KE{KA{K@eLD{KJ{KNyKTyKXyK^wKb@wKh@uKl@uKp@sKv@sKz@qK`AoKdAmKjAkKnAiKrAgKxAeK|AcK`BaKfB}JjB{JnByJtBuJxBsJ|BoJ`CkJfCiJjCeJnCaJrC}IvCyIzCuI~CqIbDmIfDiIjDeInDaIrD{HvDwHzDsH~DmHbEiHdEcHhE_HlEyGpEuGrEoGvEiGxEcG|E_G`FyFbFsFfFmFhFgFjFaFnF{EpFuErFoEvFiExFcEzF{D|FuD~FoD`GiDbGaDdG{CfGuChGmCjGgClGaClGyBnGsBpGkBpGeBrG}AtGwAtGoAvGiAvGaAvG{@xGs@xGm@xGe@xG]zGWzGOzGIzGAzGBzGHzGPzGVxG^xGf@xGl@xGt@vGz@vGbAvGhAtGpAtGvArG~ApGdBpGlBnGrBlGzBlG`CjGfChGnCfGtCdG|CbGbD`GhD~FnD|FvDzF|DxFbEtFhErFnEpFtEnFzEjF`FhFfFdFlFbFrF~ExF|E~FxEdGvEhGrEnGnEtGlExGhE~GdEbH`EhH~DlHzDrHvDvHrDzHnD`IjDdIfDhIbDlI~CpIzCtIvCxIrC|InC`JjCdJdCfJ`CjJ|BnJxBpJtBtJnBvJjBzJfB|J`B~J|A`KxAdKrAfKnAhKjAjKdAlK`AlKz@nKv@pKp@rKl@rKh@tKb@tK^vKXvKTxKNxKJxKDxK@xKAxKExKKxKOxKUxKYvK_@vK_@|LttNxmV'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.266858333333, -106.12379444444), new google.maps.LatLng(46.509579645548, -105.7682295009));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MILES CITY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MILES CITY CLASS E2<br />SFC-17999');
    

// MIRAMAR NAS CLASS E3A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('clrgEf}}hUa_J~|Ku|BmzThwK}eBldAhcK'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.867388888889, -117.04261111111), new google.maps.LatLng(32.943833333333, -116.91422222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MIRAMAR NAS CLASS E3A';
    attachPolygonInfoBox(polygon, infoBox, 'MIRAMAR NAS CLASS E3A<br />SFC-17999');
    

// MISSOULA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('otx}GfijwT?G`@um@hBmm@nD_m@tFil@zHkk@|Jgj@~L}h@~Nmg@zPue@tRwc@jTsa@~Uk_@nW}\\zXkZbZuWd[yTd\\}Q~\\{Nt]wKf^sHr^mEz^eB|^>z^fBr^nEf^vHt]zK~\\~Nd\\~Qd[zT`ZtWxXlZlW|\\|Uj_@jTra@rRtc@xPre@|Nhg@~Lzh@|Jdj@xHhk@tFdl@nDzl@hBhm@`@pm@a@pm@iBhm@oDzl@uFdl@yHhk@}Jdj@}Lzh@}Njg@yPre@sRvc@iTra@}Uj_@mW~\\yXlZaZvWe[|Te\\~Q_]~Nu]zKg^vHs^pE{^hB}^@{^cBs^kEg^sHu]wK_]{Ne\\{Qg[yTcZsW{XkZoW}\\_Vk_@kTsa@uRwc@{Pue@_Okg@_M}h@_Kgj@{Hkk@wFil@qD_m@iBmm@c@um@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.843093409711, -114.19746344968), new google.maps.LatLng(46.989683427249, -113.98364931588));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MISSOULA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MISSOULA CLASS E2<br />SFC-17999');
    

// MISSOULA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uk}|GlgswTnPbOmoOhte@e|GkcGieJfdQ{`L{aP|fUyhc@v@|H~@fJbAdJfAbJjAbJnA`JrA|IvAzIzAxI`BvIdBtIhBpIlBnIpBjItBhIxBdI|BbI~B~HbC|HfCxHjCtHnCpHrClHvChHxCdH|C`H`D|GdDxGfDtGjDpGnDlGpDfGtDbGvD~FzDxF|DtF`EpFbEjFfEdFhE`FjEzEnEvEpEpErEjEtEfExE`EzEzD|EtD~EnD`FhDbFbDdF~CfFxChFrCjFlCjFfClF`CnFxBpFrBpFlBrFfBtF`BtFzAvFtAvFnAxFfAxF`AzFz@zFt@zFn@zFf@|F`@|FZ|FT|FL|FF|F@|FA|FI|FO|FU|F[|Fc@zFi@zFo@zFu@xF}@xFcAxFiAvFoAvFuAtF{AtFcBrFiBpFoBpFuBnF{BlFaCjFgChFmChFsCfFyCdF_DbFeD`FkD~EqD|EwDxE{DvEaEtEgErEmEpEqElEwEjE}EhEaFdEgFbEkF`EqF|DuFzD{FvD_GtDcGpDiGlDmGjDqGfDuGbDyG`D}G|CaHxCeHtCiHrCmHnCqHjCuHfCyHbC{H~B_IzBcIvBeIrBiInBkIhBwD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.847227777778, -114.38828611111), new google.maps.LatLng(47.101619444444, -114.11489166667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MISSOULA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MISSOULA CLASS E4<br />SFC-17999');
    

// MISSOULA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('an~|Gzr~vTaEeJrmQ}vB`s@`{OcyPbtBz@eLp@kJl@mJh@oJb@oJ^qJZqJVqJRsJLsJHsJDsJ@sJAsJEsJIsJMsJSsJWqJ[qJ_@qJc@oJi@oJm@mJq@kJu@kJy@iJ_AgJcAeJgAeJkAcJoAaJsA_JwA{I{AyI_BwIeBuIiBqImBoIqBmIuBiIyBgI}BcI_C_IcC}HgCyHkCuH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.753672222222, -114.11488888889), new google.maps.LatLng(46.856505555556, -114.00971944444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MISSOULA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MISSOULA CLASS E4<br />SFC-17999');
    

// MODESTO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ybrdF`yu`VeHc@l`DypIx`IzqF}`DzqImEsJmCyFoCuFsCsFwCoFyCkF}CiFaDeFcDaFgD}EiDyEmDuEoDqEsDoEuDkEyDeE{DaE}D}DaEyDcEuDeEqDgEmDkEiDmEcDoE_DqE{CsEuCuEqCwEmCyEgC{EcC}E}B_FyBaFsBaFoBcFkBeFeBgF_BgF{AiFuAiFqAkFkAmFgAmFaAmF{@oFw@oFq@qFk@qFg@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.541405555556, -120.90573611111), new google.maps.LatLng(37.618736111111, -120.81265));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MODESTO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MODESTO CLASS E4<br />SFC-17999');
    

// MONTEREY PENINSULA AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('osl~Etw`fV|xMokj@~~PvmH{{Mrrj@vAlEhCzHdC~H~B`IzBbIvBfIrBhIlBjIhBlIbBnI~ArIzAtItAvIpAvIjAxIfAzI`A|I|@~Ix@~Ir@`Jn@`Jh@bJd@bJ^dJXdJTdJNfJJfJDfJ@fJAfJEfJKfJOfJUdJYdJ_@dJc@bJi@bJm@`Js@`Jw@~I}@~IaA|IgAzIkAxIqAvIuAvI{AtI_BrIcBnIiBlImBjIqBhIwBfI{BbI_C`IeC~HiCzHmCxHqCtHuCpH{CnH_DjHcDfHgDbHkD`HoD|GsDxGwDtG{DpG_ElGcEhGgEbGiE~FmEzFqEvFuErFwElF{EhF_FbFaF~EeFzEgFtEkFnEmFjEqFdEsF`EwFzDyFtD{FpD}FjDaGdDcG~CeGxCgGtCiGnCkGhCmGbCoG|BqGvBsGpBsGjBuGdBwG~AwGxAyGrA{GlA{GfA}G`A}Gz@}Gr@_Hl@_Hf@_H`@aHZaHTaHNaHFaH@aHAaHGaHMaHSaHY_Ha@_Hg@_Hm@_Hs@}Gy@}G_A{GeA{GkAyGqAyGwAwG_BuGeBsGkBsGqBqGwBoG}BmGaCkGgCiGmCgGsCeGyCcG_DaGeD_GiD{FoDyFuDwF{DsF_EqFeEoFkEkFoEiFuEeFyEcF_F_FcF{EiFyEmFuEqFqEwFmE{FkE_GgEcGcEiG_EmG{DqGwDuGsDyGoD}GkDaHgDeHcDgH_DkH{CoHwCqHsCuHmCyHiC{HeC_IaCaI{BeIwBgIsBiImBkIiBoIeBqI_BsI{AuIuAwIqAyImA{IgA{IcA}I}@_Jy@aJs@aJo@cJi@cJe@eJ_@eJ[eJUgJOgJKgJEgJAgJ@qJDgJJgJNgJTgJXeJ^eJd@eJh@cJn@cJr@aJx@aJ|@_JbA}IfA{IjA{IpAyItAwIzAuI~AsIdBqIhBoIlBkIrBiIvBgIzBeI`CaIdC_IhC{HlCyHpCuHvCsHzCoH~CkHbDgHfDeHjDaHnD}GrDyGvDuGzDqG~DmGbEiGfEcGjE_GlE{FpEwFtEqFxEmFzEiF~EcFbF_FdFyEhFuEjFoEnFkEpFeErF_EvF{DxFuDzFoD~FkD`GeDbG_DdGyCfGsChGmCjGgClGcCnG}BpGwBrGqBrGkBtGeBvG_BxGyAbEcA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.438166666667, -121.946401713), new google.maps.LatLng(36.670431730089, -121.52002777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MONTEREY PENINSULA AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MONTEREY PENINSULA AIRPORT CLASS E2<br />SFC-17999');
    

// MONTEREY PENINSULA AIRPORT CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('osl~Etw`fV|xMokj@~~PvmH{{Mrrj@gE_LwCqH{CoH_DkHcDgHgDcHkDaHoD}GsDyGwDuG{DqG_EmGcEiGgEcGiE_GmE{FqEwFuEqFwEmF{EiF_FcFaF_FeFyEgFuEkFoEmFkEqFeEsFaEwF{DyFuD{FoD}FkDaGeDcG_DeGyCgGsCiGoCkGiCmGcCoG}BqGwBsGqBsGkBuGeBwG_BwGyAyGsA{GmA{GgA}GaA}Gy@}Gs@_Hm@_Hg@_Ha@aH[aHUaHOaHGaHAaH@aHFaHLaHRaHX_H`@_Hf@_Hl@_Hr@}Gx@}G~@{GdAqJzA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.438166666667, -121.79177777778), new google.maps.LatLng(36.606166666667, -121.52002777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MONTEREY PENINSULA AIRPORT CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'MONTEREY PENINSULA AIRPORT CLASS E3<br />SFC-17999');
    

// MONTROSE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{t}iFvscrS_zShl[ytOuyRngKgwOgpC??{wSxkL?pCkIfCsHjCqHpCmHtCkHxCgH|CcH`D_HdD}GhDyGlDuGnDqGrDmGvDiGzDeG~DaGbE{FdEwFhEsFlEoFnEiFrEeFtEaFxE{EzEwE~EqE`FmEdFgEfFcEhF}DlFwDnFsDpFmDrFgDtFcDxF}CzFwC|FqC~FkC`GeCbGaCbG{BdGuBfGoBhGiBjGcBjG}AlGwAlGqAnGkAnGeApG_ApGy@rGs@rGm@rGe@tG_@tGYtGStGMtGGtGAtG@tGFtGLtGTtGZtG`@rGf@rGl@rGr@pGx@pG~@nGdAnGjAlGpAlGvAjG|AhGbBhGhBfGnBdGtBbGzB`G`C`GfC~FlC|FpCzFvCvF|CtFbDrFfDpFlDnFrDlFvDhF|DfFbEdFfE`FlE~EpEzEvExEzEtE`FrEdFnEhFjEnFhErFdEvF`EzF~D~FzDdGvDhGrDlGnDpGjDtGhDxGdDzG`D~G|CbHxCfHtChHnClHjCpHfCrHbCvH~BxHzB|HvB~HpB`IlBbIhBfIdBhI~AjIzAlIvAnIrApIlArIhAtIbAtI~@vIz@xIt@zIp@zIl@|If@|Ib@~I\\~IX~IR`JN`JJ`JD`J@`JA`JE`JK`JO`JS`JY~I]~Ic@~Ig@|Im@|Iq@zIu@zI{@xI_AvIcAvIiAtImArIqApIwAnI{AlI_BjIeBhIiBfImBbIqB`IwB~H{B|H_CxHcCvHgCrHkCpHoClHsChHyCfH}CbHaD~GeDzGgDxGkDtGoDpGsDlGwDhG{DdG_E`GaEzFeEvFiErFkEnFoEhFsEdFuE`FyEzE{EvE_FpEaFlEeFfEgFbEiF|DmFxDoFrDqFlDsFhDuFbDwF|C{FvC}FpC_GlCaGfCaG`CcGzBeGtBgGnBiGhBiGbBkG|AmGvAmGpAoGjAoGdAqG~@uCZ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.428823468557, -108.13986111111), new google.maps.LatLng(38.687805555556, -107.79199160908));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MONTROSE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MONTROSE CLASS E2<br />SFC-17999');
    

// MOSES LAKE CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('aqq_Hn`ywUuoGfqDqwCcwNvaHa}DJbGRbNXbN\\bNb@`Nh@`Nn@~Mt@|Mz@|M`AzMdAxMjAvMpAtMvArM|ApM`BlMfBjMlBhMrBdMvBbM|B~LbCzLfCxLlCtLpCpLvClL|ChL`DdLfD`LjD|KpDvKtDrKxDnK~DhKbEdKfE~J~GnP'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.280972222222, -119.43741666667), new google.maps.LatLng(47.349027777778, -119.32633333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOSES LAKE CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MOSES LAKE CLASS E4<br />SFC-17999');
    

// MOSES LAKE CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gss_Hj}zvUmDrPcvPcf^x}IomLfs@h{AbfK_dHjpKtjc@_Eg@eIgAgI_AgIu@gIm@iIe@iI]iIUiIKiICiI@iIHiIRiIZiIb@gIj@gIt@gI|@eIdAeIlAcItAcI~AaIfBaInB_IvB}H~B{HfC{HnCyHvCwH~CuHfDsHnDqHvDoH~DkHfEiHnEgHvEeH~EaHdF_HlF{GtFyGzFuGbGsGjGoGpGkGxGiG~GeGdHaGlH}FrH{FxHwF`IsFfIoFlIkFrIgFxIcF~I_FdJyEjJuEnJqEtJmEzJgE~JcEdK_EjKyDnKuDrKqDxKkD|KgD`LaDdL}ChL'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.191888888889, -119.25761111111), new google.maps.LatLng(47.383194444444, -118.99675));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOSES LAKE CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MOSES LAKE CLASS E4<br />SFC-17999');
    

// MOUNTAIN HOME CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('edifGnjfbU?Kl@oy@lCgy@lFux@jIyw@fLuv@`Ogu@xQss@lTuq@~Voo@lYam@t[mj@z]sg@z_@qd@ta@ia@jc@}]zd@kZdf@uVhg@}Rfh@_O|h@aKli@_Gvi@}Bzi@@vi@bCli@dG|h@dKdh@dOfg@`Sbf@xVxd@nZhc@~]ra@ja@x_@pd@x]rg@r[lj@jY~l@|Vlo@jTpq@vQns@~Nbu@dLnv@hIrw@lFnx@lC`y@n@hy@m@hy@mC`y@kFnx@iIrw@eLnv@_Obu@wQns@kTpq@}Vlo@iY`m@s[lj@y]rg@y_@rd@sa@ja@ic@~]yd@nZcf@xVgg@`Seh@dO}h@fKmi@dGwi@dC{i@@wi@}Bmi@_G}h@_Kgh@_Oig@{Ref@uV{d@kZkc@{]ua@ia@{_@qd@{]qg@w[mj@mYam@_Woo@mTuq@yQqs@aOgu@gLuv@kIyw@mFsx@oCgy@o@oy@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.94526141742, -116.00651518916), new google.maps.LatLng(43.141959110906, -115.73848687029));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOUNTAIN HOME CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MOUNTAIN HOME CLASS E2<br />SFC-17999');
    

// MOUNTAIN HOME CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qy~eGrl}bUi}CfrEieGimJ|gCyuDgW}g@l[k^`CdKlCfLpCbLvC~K|C|K`DxKfDtKlDpKpDjKvDfKzDbK`E~JdExJhEtJnEpJrEjJvEdJ|E`J`FzIdFtIhFpInFjIrFdIvF~HzFxH~FrHbGlHfGfHjG`HlGxGpGrGtGlGxGdGzG~F~GxFbHpFdHjFhHbFjKfF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.089055555556, -116.02447222222), new google.maps.LatLng(43.156361111111, -115.92502777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOUNTAIN HOME CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MOUNTAIN HOME CLASS E4<br />SFC-17999');
    

// MOUNTAIN HOME CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ibneGfjnaUeDeDf[un@bh@ll@daCglDbeGflJ{zClnEeFoQcD{KgDwKmDsKqDoKwDiK{DeKaEaKeE}JkEwJoEsJuEmJyEiJ}EcJcF}IgFyIkFsIoFmIsFgIwFaI{F{H_GuHcGoHgGiHkGcHoG}GsGuGwGoGyGiG}GaGaH{FcHsFgHmFiHeFmH_FoHwEsHoEuHiEwHaE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.930361111111, -115.81236111111), new google.maps.LatLng(43.00425, -115.72072222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOUNTAIN HOME CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MOUNTAIN HOME CLASS E4<br />SFC-17999');
    

// MOUNTAIN VIEW CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yoocFralgVbCpLhBpIlBnIrBlIvBhIzBfI`CdIdC`IhC~HlCzHpCxHvCtHzCpH~CnHbDjHfDfHjDbHnD~GrDzGvDvGzDrG~DnGbEjGfEfGjE`GlE|FpExFtEtFxEnFzEjF~EdF`F`FdFzEhFvEjFpElFlEpFfErF`EvF|DxFvDzFpD|FjD`GdDbG`DdGzCfGtChGnCjGhClGbCnG|BpGvBrGpBrGjBtGdBvG~AvGxAxGrAzGlAzGfA|G~@|Gx@|Gr@~Gl@~Gf@~G`@`HZ`HR`HL`HF`H@`HA`HI`HO`HU`H[~Ga@~Gg@~Go@|Gu@|G{@|GaAnDWl@vIf@rHb@tH^tHZtHVvHPvHLvHHvHDvH@vHAvHEvHIvHMvHQvHUvH[tH_@tHc@tHg@rHk@rHo@pHu@pHy@nH}@lHaAlHeAjHiAhHmAfHqAdHuAdHyAbH}A`HaB|GeBzGiBxGmBvGqBtGuBrGyBnG}BlGaChGeCfGiCbGkC`GoC|FsCzFwCvFyCrF}CpFaDlFcDhFgDdFkD`FmD~EqDzEsDvEwDrEyDnE}DjE_EdEaE`EeE|DgExDiEtDmEpDoEjDqEfDsEbDuE|CwExC{EtC}EnC_FjCaFdCaF`CcFzBeFvBgFpBiFlBkFfBkFbBmF|AoFvAoFrAqFlAqFfAsFbAsF|@uFv@uFr@uFl@wFf@wF`@wF\\wFVyFPyFLyFFyF@yFAyFEyFKyFQwFWwF[wFa@wFg@uFm@uFq@uFw@sF}@sFaAqFgAqFmAoFqAoFwAmF}AkFaBkFgBiFkBgFqBeFuBcF{BcF_CaFeC_FiC}EoC{EsCyEyCwE}CsEaDqEgDoEkDmEoDkEuDgEyDeE}DcEaE_EeE}DiEyDoEwDsEsDwEqD{EmD_FkDaFgDeFeDiFaDmF}CqF{CsFwCwFsC{FoC}FmCaGiCeGeCgGaCiG}BmGyBoGuBsGqBuGoBwGkByGgB}GcB_H_BaH{AcHuAeHqAgHmAiHiAiHeAkHaAmH}@oHy@oHu@qHq@sHk@sHg@uHc@uH_@uH[wHWwHQwHMwHIyHEyHAyH@aIDyHHyHLwHPwHVwHZwH^uHb@uHf@uHj@sHp@sHt@qHx@oH|@oH`AmHdAkHhAiHlAiHpAgHtAeHxAcH|AaHbB_HfB}GhByGlBwGpBuGtBsGxBoG|BmG`CkGdCgGhCeGlCaGnC}FrC{FvCwFzCsF|CqF`DmFdDiFfDeFjDaFlD_FpD{ErDwEvDsExDoE|DkE~DeEbEaEdE}DfEyDjEuDlEoDnEkDpEgDrEcDvE}CxEyCzEsC|EoC~EkC`FeCbFaCbF{BdFwBfFqBfD_A'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.343475210112, -122.13835268395), new google.maps.LatLng(37.487079465438, -121.96394444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOUNTAIN VIEW CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MOUNTAIN VIEW CLASS E2<br />SFC-17999');
    

// MOUNTAIN VIEW CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_x|bFb__hV^uHZuHTwHPwHLwHHwHDwH@wHAwHEwHIwHMwHQwHWwH[uH_@uHc@uHg@sHm@yIhKgBxGsAvGyAvG_BtGgBrGmBrGsBpGyBnG_ClGeCjGkChGoCfGuCdG{CbGaD`GgD|FmDzFqDzDeCrt@beDisEfjB^gG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.310358333333, -122.06215555556), new google.maps.LatLng(37.344802777778, -122.01840277778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOUNTAIN VIEW CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MOUNTAIN VIEW CLASS E4<br />SFC-17999');
    

// MOUNTAIN VIEW CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yyvcF`{sgVmAlDuBpGqBtGmBvGiBxGeBzGiBhHoLmSvc@ee@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.477577777778, -122.01323888889), new google.maps.LatLng(37.483466666667, -122.00385));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOUNTAIN VIEW CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MOUNTAIN VIEW CLASS E4<br />SFC-17999');
    

// NEEDLES CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('opssEfurzT?G`@}d@fBwd@lDkd@pFyc@rHac@tJeb@tLaa@rN{_@nPm^fR{\\|Se[nUiY|VkWhXgUpYaSrZwPp[kNj\\}K`]kIr]yF~]gDd^qAf^>d^rA~]fDp]zF`]lIj\\|Kp[lNrZxPnY`ShXfU|VjWnUhY|Sd[fRz\\nPl^rNx_@tL`a@tJbb@rH~b@pFvc@lDhd@fBtd@`@zd@a@zd@gBtd@kDhd@oFvc@sH`c@uJbb@uL`a@sNx_@mPl^gRz\\{Sd[oUhY}VjWiXhUoYbSsZxPq[lNk\\~Ka]lIq]zF_^hDe^tAg^>e^qA_^eDs]yFa]kIk\\}Kq[kNsZwPqYaSiXgU_WiWoUiY}Se[gR{\\oPm^sNy_@uLaa@wJeb@uHac@qFyc@mDkd@gBwd@a@}d@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.695725549689, -114.71189808259), new google.maps.LatLng(34.839284715502, -114.53803106055));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'NEEDLES CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'NEEDLES CLASS E2<br />SFC-17999');
    

// NEWPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k{foGh_vtV_iRfl@ee@_|^hvPsh@vBqB|DwD`EqDbEmDdEgDfEcDhE_DjEyClEuCnEoCpEiCpEeCrE_CtE{BvEuBvEoBxEkBzEeBzE_B|E{A~EuA~EoA`FiA`FeA`F_AbFy@bFs@dFm@dFi@dFc@dF]dFWfFQfFKfFGfFAfF@fFFfFLfFRdFVdF\\dFb@dFh@dFn@bFt@bFx@`F~@`FdA`FjA~EnA~EtA|EzAzE`BzEdBxEjBvEpBvEtBtEzBrE~BpEdCnEjCnEnClEtCjExChE~CfEbDdEhDbElD~DpD|DvDzDzDxD~DvDdErDhEpDlEnDpElDtEhDxEfD~EbDbF`DfF~CjFzClFxCpFtCtFpCxFnC|FjC`GhCbGdCfG`CjG~BlGzBpGvBrGrBvGpBxGlBzGhB~GdB`HbBbH~AdHzAhHvAjHrAlHnAnHjApHfArHbAtH`AtH|@vHx@xHt@zHp@zHl@|Hh@|Hd@~H`@~H\\`IX`IT`IPbILbIHbIDbI@bI?bIEbIIbIMbIQbIU`IY`I]`Ia@~He@~Hi@|Hm@|Hq@zHu@zHy@xH}@vH_AtHcAtHgArHkApHoAnHsAlHwAjH{AhH_BdHaBbHeB`HiB~GmBzGqBxGsBvGwBrG{BpG_ClGaCjGeCfGiCbGkC`GoC|FqCxFuCtFwCpF{ClF}CjFaDfFcDbFgD~EiDxEmDtEoDpEqDlEsDhEwDdEyD~D{DzD}DvD_EpDcElDeEhDgEbDiE~CkExCmEtCoEnCoEjCqEdCsE`CuEzBwEtBwEpByEjB{EdB{E`B}EzA_FtA_FnAaFjAaFdAaF~@cFx@cFt@eFn@eFh@eFb@eF\\eFXgFRgFLgFFgF@gFAgFGgFKgFQeFWeF]eFc@eFi@eFm@cFs@cFy@cF_AaFcAaFiA_FoA_FuA}E{A{E_B{EeByEkByEoBuCc@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.513632296589, -124.15194444444), new google.maps.LatLng(44.709861111111, -123.9645291561));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'NEWPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'NEWPORT CLASS E2<br />SFC-17999');
    

// NORTH BEND CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y{fhGtxztVgbH}`K|{DskG~IwvLlaWzc@i^`yf@bAdEfBlHbBnH~ApHzArHvAtHrAvHnAxHjAzHfA|HbA~H~@`Iz@bIv@bIr@dIn@fIj@fIf@hIb@hI\\hIXjITjIPjILlIHlIDlI@lIAlIElIIlIMlIQjIUjIYjI]hIc@hIg@hIk@fIo@fIs@dIw@bI{@bI_A`IcA~HgA|HkAzHoAxHsAvHwAtH{ArH_AvFneH~wU_kNttJ}qH}wVaHgBiFwAiF}AgFcBeFgBeFmBcFsBaFyBaF}B_FcC}EiC{EoCyEsCwEyCuE}CsEcDqEgDoEmDmEqDkEwDgE{DeEaEcEeEaEiE}DoE{DsEyDwEuD}EsDaFoDeFmDiFiDmFgDqFcDuFaDyF}C}FyCaGwCeGsCiGoCkGmCoGiCsGeCuGaCyG}B}G{B_HwBcHsBeHoBgHkBkHgBmHcBoH_BqH{AuHwAwHsAyHoA{HkA}HgA_IcA_I_AaI{@cIw@eIs@eIo@gIk@iIg@iIc@kI_@kIYkIUmIQmIMmIImIEmIAmI@wIDmIHmILmIPmITmIXkI\\kIb@kIf@iIj@iIn@gIr@eIv@eIz@cI~@aIbA_IfA_IjA}HnA{HrAyHvAwHzAuH~AqHbBoHfBmHjBkHnBgHrBeHvBcHzB_H|B}G`CyGdCuGhCsGlCoGnCkGrCiGvCeGxCaG|C}F`DyFbDuFfDqFhDmFlDiFnDeFrDaFtD}ExDwEzDsE|DoE`EkEjEuD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.305713888889, -124.46208333333), new google.maps.LatLng(43.504652777778, -123.99413055556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'NORTH BEND CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'NORTH BEND CLASS E2<br />SFC-17999');
    

// OAKLAND CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m}jeFxnjhVgJzCb~D_sQ~hOlhGifDnhOsGwJgEiGkEcGmE_GqE{FuEwFyEqF{EmF_FgFcFcFeF}EiFyEkFsEoFoEqFiEsFcEwF_EyFyD{FsD_GmDaGgDcGcDeG}CgGwCiGqCkGkCmGeCoG_CqGyBsGsBuGmBuGgBwGaByG{AyGuA{GmA{GgA}GaA}G{@_Hu@_Ho@_Hg@aHa@aH[aHUaHOaHGaHAaH@aHFaHLaHTaHZaH`@_Hf@_Hl@_Hr@}Gz@}G`A{GfA{GlAyGrAyGxAwG~A'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.632083333333, -122.151), new google.maps.LatLng(37.746194444444, -122.02508333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'OAKLAND CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'OAKLAND CLASS E3<br />SFC-17999');
    

// OLYMPIA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k}a~GjocmV?G^mi@~Agi@~Cyh@~Eeh@|Gkg@zIkf@vKee@nMwc@fOeb@zPm`@lRo^zSm\\fUgZnV}WrWmUrX{RpYePhZmM|ZsJj[wGv[yD|[{A`\\>|[~Av[|Dj[xGzZtJfZnMnYfPrX|RrWnUnV|WfUfZzSl\\jRn^zPl`@dObb@nMtc@tKbe@zIhf@|Ghg@~Ebh@~Cvh@~Abi@^ji@_@ji@_Bbi@_Dvh@_Fbh@}Ghg@yIhf@uKbe@oMvc@eOdb@yPl`@kRn^{Sn\\eUfZmV|WsWnUsX|RoYhPgZpM{ZvJk[zGw[|D}[~Aa\\@}[{Aw[yDm[wG}ZsJiZmMqYePsX{RsWmUoV{WgUgZ{Sm\\mRo^{Pm`@gOeb@oMwc@wKee@{Ikf@_Hkg@_Feh@aDyh@_Bgi@_@mi@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.903923974128, -123.00034222904), new google.maps.LatLng(47.037186359721, -122.80577039311));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'OLYMPIA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'OLYMPIA CLASS E2<br />SFC-17999');
    

// OLYMPIA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yoa~GfmhmVhApI{aCs`@``AezOjeCta@mDzIeCrGcCvG_CxG{B|GwB`HuBbHqBfHmBhHiBlHgBnHcBpH_BrH{AvHwAxHsAzHoA|HkA~HgA`IeAbIaAdI}@fIy@fIu@hIq@jIm@jIi@lIe@nIa@nI]nIYpIUpIQpIMrIIrIEzI?rI@rIDrIHrILrIPpITpIXpI\\nI`@nId@nIh@lIl@jIp@jIt@hIx@fI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.023666666667, -122.93005555556), new google.maps.LatLng(47.055583333333, -122.83838888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'OLYMPIA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'OLYMPIA CLASS E4<br />SFC-17999');
    

// OLYMPIA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('aal}GbrulVbxUj{Go{Drc_@gnUowGtH_C|E_BzEeBzEkBxEoBvEuBtE{BtEaCrEeCpEkCnEqClEuCjE{ChEaDfEeDdEkDbEoD`EuD~DyD|D_EzDcExDgEtDmErDqEpDuEnD{EjD_FhDcFfDgFbDkF`DoF|CuFzCyFvC{FtC_GpCcGnCgGjCkGfCoGdCqG`CuG|ByGzB{GvB_HrBcHpBeHlBgHhBkHdBmH`BoH~AsHzAuHvAwHrAyHnA{HjA}HfA_IbAaI~@cIz@eIv@eIt@gIp@iIl@iIh@kId@mI`@mI\\mIXoIToIPoILqIHqIDqI>qIAqIEqIIqIMqIQoIUoIYoI]mIa@mIe@mIi@kIm@iIq@iIu@gIy@eI}@eI_AcIcAaIgA_IkA}HoA{HsAyHwAwH{AuH_BsHaBoHeBmHiBkHmBgHqBeHsBaHwB_H{B{G_CyGaCuGeCqGgCoGkCkGoCgGqCcGuC_GwC{F{CwF}CsFaDoFcDkF}CmG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.808472222222, -123.04194444444), new google.maps.LatLng(46.953722222222, -122.83186111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'OLYMPIA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'OLYMPIA CLASS E4<br />SFC-17999');
    

// ONTARIO CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k_`oE`oelUrd@{jSl_L`b@yd@blSuDkBcG{CeGuCgGoCiGiCkGeCmG_CoGyBqGsBsGmBsGgBuGaBwG{AyGuAyGoA{GkA{GeA}G_A}Gy@_Hs@_Hk@_He@_H_@aHYaHSaHMaHGaHAaH@aHFaHLaHRaHXaH^_Hd@_Hj@_Hp@}Gv@}G|@{GbA{GhAyGnAyGtAwGzAuG`BsGfBqK`D'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.011236111111, -117.51238333333), new google.maps.LatLng(34.0839, -117.40226944444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ONTARIO CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'ONTARIO CLASS E3<br />SFC-17999');
    

// OXNARD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('u}ooEfj`wU|c@fgLqtJdn@yd@eqLdGjBjF|AlFxAnFrAnFnApFhApFdArF~@rFx@tFt@tFn@tFj@vFd@vF^vFZvFTxFPxFJxFDxF@xFAxFGxFKxFQvFWvF[vFa@vFe@tFk@tFq@tFu@rF{@rF_ApFeApFiAnFoAnFsAlFyAjF}AjFcBhFgBfFmBdFqBbFwB`F{B`FaC~EeC|EiCnHmE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.159638888889, -119.35788888889), new google.maps.LatLng(34.225472222222, -119.28244444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'OXNARD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'OXNARD CLASS E4<br />SFC-17999');
    

// PALM SPRINGS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ef{mE|i{eUzEpHskCe`BbfHabRdyH~wEsiAl`DyCFyFJyFPyFTyFZyF^wFd@wFj@wFn@uFt@uFx@sF~@sFdAqFhAqFnAoFrAoFxAmF|AkFbBiFfBiFlBgFpBeFvBcFzBaF~B_FdC}EhC{ElCyErCwEvCuEzCsE~CqEdDmEhDkElDiEpDeEtDcExDaE|D}D`E{DdEwDhEuDlEqDpEoDtEkDxEiD|EeD~EaDbF_DfF{CjFwClFsCpFqCrFmCvFiCxFeC|FaC~F}BbG{BdGwBfGsBhGoBlGkBnGgBpG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.819444444444, -116.47305555556), new google.maps.LatLng(33.916944444444, -116.35972222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PALM SPRINGS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PALM SPRINGS CLASS E4<br />SFC-17999');
    

// PALM SPRINGS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}jkmEllqeUoDdCzcD{`HxgH~xF{cDvtGqEyJoC{FsCwFwCuFyCqF}CoFaDkFeDgFgDcFkDaFoD}EqDyEuDuEwDqE{DmE}DiEaEeEcEaEgE}DiEyDkEuDoEqDqEkDsEgDuEcDyE_D{EyC}EuC_FqCaFkCcFgCeFcCgF}BiFyBkFsBmFoBmFiBoFeBqF_BsF{AsFuAuFqAuFkAwFeAwFaA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.741388888889, -116.45944444444), new google.maps.LatLng(33.815277777778, -116.375));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PALM SPRINGS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PALM SPRINGS CLASS E4<br />SFC-17999');
    

// PALM SPRINGS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('czzmEjg{eUuCjKclCk`B`fHabRdyH~wEgiAv_DqIXwFTwFZwF^wFd@uFj@uFn@uFt@sFx@sF~@qFbAqFhAoFnAoFrAmFxAkF|AkFbBiFfBgFjBeFpBcFtBcFzBaF~B_FbC}EhC{ElCyEpCuEvCsEzCqE~CoEbDmEfDkElDgEpDeEtDcExD_E|D}D`EyDdEwDhEsDlEqDpEmDtEkDvEgDzEeD~EaDbF}CdF{ChFwClFsCnFoCrFkCtFiCxFeCzFaC~F}B`GyBbGuBdGqBhGmBjGiBlGeBnG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.819463888889, -116.47309444444), new google.maps.LatLng(33.916958333333, -116.35973333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PALM SPRINGS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PALM SPRINGS CLASS E4<br />SFC-17999');
    

// PALM SPRINGS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sjkmEvrqeUaDi@`cDsaHxgH~xFadD`tGqCaGkCuFoCsFsCoFwCkFyCiF}CeFaDcFcD_FgD{EkDwEmDuEqDqEsDmEwDiEyDeE}DaE_E}DaEyDeEuDgEqDiEmDmEiDoEcDqE_DsE{CuEwCwEqC{EmC}EiC_FeC_F_CaF{BcFuBeFqBgFmBiFgBkFcBkF}AmFyAoFsAoFoAqFiAqFeAsF_AsF{@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.741411111111, -116.45934722222), new google.maps.LatLng(33.815158333333, -116.37501111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PALM SPRINGS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PALM SPRINGS CLASS E4<br />SFC-17999');
    

// PALMDALE FLIGHT PLANT CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ubtrEx}ioUsDdEwdAugd@f|Osl@td@deSfyAhPu_AbnNyDyByEoC}EiC_FeC_FaCaF{BcFwBeFsBgFmBiFiBiFcBkF_BmFyAoFuAoFoAqFkAqFeAsF_AsF{@uFu@uFq@uFk@wFe@wFa@wF[wFUwFQyFKyFGyFAyF@yFDyFJwFPwFTwFZwF`@wFd@uFj@uFn@uFt@sFz@sF~@qFdAqFhAoFnAoFrAmFxAkF|AkFbBiFfBgFlBeFpBcFvBaFzBaF`C_FdC}EhC{EnCyErCuEvCsE|CqE`DoEdDmEhDiElDgErDeEvDcEzD_E~D}DbEyDfEwDjE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.583352777778, -118.02193055556), new google.maps.LatLng(34.690430555556, -117.82378611111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PALMDALE FLIGHT PLANT CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PALMDALE FLIGHT PLANT CLASS E4<br />SFC-17999');
    

// PASCO CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('glhyGvftvUcFv@uFx@uFr@uFl@wFf@wF`@wFZwFTwFNwFHwF@wFAwFGwFMwFSwFYwF_@wFg@uFm@uFs@uFy@sF_AsFeAqFkAqFqAoFwAoF}AmFcBmFiBkFoBiFuBiF{BgFaCeFgCcFmCaFsC_FyC}E_D{EcDyEiDwEoDuEuDsEyDqE_EoEeEmEiEiEoEgEsEeEyEaE}E_EcF}DgFyDmFwDqFsDuFqD{FmD_GkDcGgDgGcDkGaDoG}CsGyCwGwC{GsC_HoCcHkCgHiCkHeCmHaCqH}BuHyBwHuB{HqB}HmBaIiBcIeBeIaBiI}AkIyAmIuAoIqAqImAsIiAuIeAwIaAyI}@{Iy@}Iu@}Io@_Jk@aJg@aJc@cJ_@cJ[eJWeJQeJMeJIgJEgJAgJ@qJDgJHgJLeJPeJTeJZeJ^cJb@cJf@aJj@aJn@_Jt@}Ix@}I|@{I`AyIdAwIhAuIlAsIpAqItAoIxAmI|AkI`BiIdBeIhBcIlBaIpB}HtB{HxBwH|BuH`CqHdCmHfCkHjCgHnCcHrC_HvC{GxCwG|CsG`DoGbDkGfDgGjDcGlD_GpD{FrDuFvDqFxDmF|DgF~DcF`E_FdEyEfEuEhEoEjEiEnEeEpE_ErEyDtEuDvEoDxEiDzEeD|E_D~EyC`FsCbFmCdFgCfFaChF{BhFuBjFoBlFiBlFcBnF}AnFwApFqApFkArFeArF_AtFy@tFs@tFm@vFg@vFa@vFYvFSvFMvFGvFAvF@vFFvFNvFTvFZvF`@vFf@tFl@tFr@tFx@rF`ArFfApFlApFrAnFxAnF~AlFdBlFjBjFpBhFvBfF|BfFbCdFhCbFlC`FrC~ExC|E~CzEdDxEjDvEnDtEtDrEzDpE~DnEdEjEjEhEnEfEtEbExE`E~E~DbFzDfFxDlFtDpFrDtFnDzFlD~FhDbGfDfGbDjG`DnG|CrGxCvGtCzGrC~GnCbHjCfHfCjHdClH`CpH|BrHxBvHtBzHpB|HlB~HhBbIdBdI`BfI|AjIxAlItAnIpApIlArIhAtIdAvI`AxI|@zIx@zIt@|In@~Ij@~If@`Jb@`J^bJZbJTbJPdJLdJHdJDdJ@dJAdJEdJIdJMdJQdJUbJ[bJ_@bJc@`Jg@`Jk@~Io@~Is@|Iy@zI}@zIaAxIeAvIiAtImArIqApIuAnIyAlI}AjIaBfIeBdIiBbImB~HqB|Hu@bE}BcBeBoAeBkAgBiAgBgAgBcAiBaAiB_AkB{@kBy@kBw@mBs@mBq@mBm@oBk@oBi@oBe@oBc@qB_@qB]qBYqBWqBSqBQqBOsBKsBIsBEsBCsB?sB>sBBsBDsBHsBJqBLqBPqBRqBVqBXqB\\qB^oBb@oBd@oBf@oBj@mBl@mBp@mBr@kBt@kBx@kBz@iB~@iB`AgBbAgBfAgBhAeBjAeBlAcBpAcBrAaBtAaBxA_BzA}A|A}A~A{A`B{AdByAfBwAhBwAjBuAlBsAnBsApBqArBoAtBoAvBmAxBkAzBiA|BiA~BgA`CeAbCcAdCaAfC_AhC_AhC}@jC{@lCy@nCw@nCu@pCs@rCq@tCq@tCo@vCm@vCk@xCi@zCg@zCe@|Cc@|Ca@~C_@~C]~C[`DY`DW`DUbDSbDQbDObDMdDKdDIdDGdDEdDCdDAjD?dD>dD@dDBdDDdDFdDHdDJdDLdDNbDPbDRbDTbDZrA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.193174647515, -119.22232666347), new google.maps.LatLng(46.336268891756, -119.01600660223));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PASCO CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PASCO CLASS E2<br />SFC-17999');
    

// PASCO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_|xyGhocvUot[ajh@fbOmhVtwZb~f@nhFmbKlgL`rOadGroLg@}Go@_Js@}Iy@{I}@yIaAyIeAwIiAuImAsIqAqIuAoIyAmI}AkIaBgIeBeIiBcImB_IqB}HuByHyBwH}BsHaCqHcCmHgCiHkCgHoCcHsC_HuC{GyCwG}CsG_DoGcDkGgDgGiDcGmD_GoD{FsDuFuDqFyDmF{DgF_EcFaE_FcEyEgEuEiEoEkEiEmEeEqE_EsE{DuEuDwEoDyEiD{EeD}E_D_FyCaFsCcFmCeFgCgFcCgF}BiFwBkFqBkFkBmFeBoF_BoFyAqFsAqFmAsFgAsF_AuFy@uFs@uFm@uFg@wFa@wF[wFUwFOwFGwFAwF@wFFwFLwFRwFXwF`@uFf@uFl@uFr@uFx@sF~@sFdAqFjAqFpAoFvAoF|AmFbBmFhBkFnBiFtBgFzBgF`CeFfCcFlCaFrC_FxC}E~C{EbDyEhDwEnDuEtDsExDqE~DoEdEkEhEiEnEgErEeExEaE|E_EbF{DfFyDlFwDpFsDtFqDzFmD~FiDbGgDfGcDjGaDnG}CrGyCvGwCzGsC~GoCbHkCfHgCjHeClHaCpH}BtHyBvHuBzHqB|HmB`IiBbIeBdIaBhI}AjIyAlIuAnIqApImArIiAtIeAvIaAxI}@zIy@|Iu@|Io@~Ik@`Jg@`Jc@bJ_@bJ[bJUdJQdJMdJIdJEnJAfJ@fJDfJHdJLdJPdJVdJZbJ^bJ]bH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.152416666667, -119.13477777778), new google.maps.LatLng(46.482333333333, -118.80380555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PASCO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PASCO CLASS E4<br />SFC-17999');
    

// PASO ROBLES CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cufyEj_g_V?Gf@sk@vBkk@hE}j@xGij@fJmi@rLkh@|Ncg@dQse@hS_d@jUcb@jWc`@dY}]zZs[l\\eYz]qVb_@{Sf`@aQda@eN~a@gKpb@eH~b@cEhc@aBjc@>fc@bB~b@dEpb@fH|a@hKda@fNd`@bQb_@|Sx]rVj\\dYxZr[bY|]hWb`@jUbb@hS|c@dQpe@|N`g@rLhh@dJji@vGdj@hEzj@vBhk@f@nk@g@nk@wBhk@gEzj@wGdj@eJji@qLhh@{N`g@cQpe@iS|c@kUbb@iWb`@cY~]yZt[k\\dYy]rVa_@|Se`@dQea@fN}a@hKqb@hH_c@fEgc@bBkc@>ic@_B_c@cEqb@eH_b@eKea@eNg`@aQc_@{S{]qVm\\eY{Zs[eY}]kWc`@mUcb@kS}c@eQse@}Nag@sLkh@gJmi@yGij@iE}j@yBkk@g@sk@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.589602854184, -120.72943821203), new google.maps.LatLng(35.756507100094, -120.52500782951));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PASO ROBLES CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PASO ROBLES CLASS E2<br />SFC-17999');
    

// PENDLETON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_qvuGne|tUsJnxHmuJ}ZrJquHgDeCsEiDqEoDoEsDmEyDiE_EgEcEeEiEcEmE_EqE}DwE{D{EwDaFuDeFsDiFoDmFmDsFiDwFgD{FcD_GaDcG}CgGyCkGwCoGsCsGoCwGmCyGiC}GeCaHaCeH}BgH{BkHwBmHsBqHoBsHkBwHgByHcB{H_B}H{AaIwAcIsAeIoAgIkAiIgAkIcAmI_AoI{@oIw@qIs@sIo@sIk@uIg@wIc@wI_@wIYyIUyIQyIM{II{IE{IA{I@eJD{IH{IL{IPyITyIXyI\\wIb@wIf@wIj@uIn@sIr@sIv@qIz@oI~@oIbAmIfAkIjAiInAgIrAeIvAcIzAaI~A}HbB{HfByHjBwHnBsHrBqHvBmHzBkH|BgH`CeHdCaHhC}GjCyGnCwGrCsGvCoGxCkG|CgG~CcGbD_GfD{FhDwFlDsFnDmFrDiFtDeFvDaFzD{E|DwE~DsEbEmEdEiEfEcEhE_ElEyDnEsDpEoDrEiDtEeDvE_DxEyCzEsC|EoC~EiC~EcC`F}BbFwBdFsBdFmBfFgBhFaBhF{AjFuAjFoAlFiAlFcAnF}@nFw@nFq@pFk@pFe@pF_@pFYpFSrFMrFGrFArF@rFFpFLpFRpFXpF^pFd@pFj@nFp@nFv@nF|@lFbAlFhAjFnAjFtAhFzAhF`BfFfBdFlBdFrBbFxB`F~B~EbC|EhC|EnCzEtCxExCvE~CtEdDrEhDpEnDnEtDjExDhE~DfEbEdEhEbElE~DrE|DvEzDzEvD`FtDdFpDhFnDlFlDrFhDvFfDzFbD~F~CbG|CfGxCjGtCnGrCrGnCvGjCxGhC|GdC`H`CbH|BfHxBjHvBlHrBpHnBrHjBtHfBxHbBzH~A|HzA~HvA`IrAdInAfIjAhIfAjIbAjI~@lIz@nIv@pIr@pIn@rIj@tIf@tIb@vI\\vIXvITxIPxILxIHxIDxI@zIAzIExIIxIMxIQxIUxIYvI]vIa@vIg@tIk@tIo@rIs@pIw@pI{@nI_AlIcAjIgAjIkAhIoAfIsAdIwA`I{A~H_B|HcBzHgBxHkBtHoBrHsBpHwBlHyBjH}BfHaCbHeC`HiC|GkCxGoCvGsCrGuCnGyCjG}CfG_DbGcD~FeDzFiDvFmDrFoDnFqDhFuDdFwD`F{DzE}DvE_ErEcElEeEhEgEbEiE~DkExDoEtDqEnDsEhDuEdDwE~CyExC{EtC}EnCcIvD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.625079128746, -118.98369444444), new google.maps.LatLng(45.765031115857, -118.74158913043));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PENDLETON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PENDLETON CLASS E2<br />SFC-17999');
    

// PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('glllEvmqkTivDljU}qNmuD``DytRlEbFzDlE|DhE`EdEbE`EfE|DhExDjErDnEnDpEjDrEfDtEbDxE|CzExC|EtC~EnC`FjCbFfCdF`CfF|BhFvBjFrBlFlBlFhBnFbBpF~ArFxArFtAtFnAtFjAvFdAvF~@xFz@xFt@zFp@zFj@zFd@|F`@|FZ|FT|FP|FJ|FD|F@|FA|FG|FK|FQ|FW|F[|Fa@zFg@zFk@zFq@xFw@xF{@vFaAvFeAtFkAtFqArFuApF{ApF_BnFeBlFiBjFoBjFsBhFyBfF}BvGmD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.655888888889, -112.27555555556), new google.maps.LatLng(33.765055555556, -112.14558333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS E2<br />SFC-17999');
    

// PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('glllEvmqkTivDljU}qNmuD``DytRlEbFzDlE|DhE`EdEbE`EfE|DhExDjErDnEnDpEjDrEfDtEbDxE|CzExC|EtC~EnC`FjCbFfCdF`CfF|BhFvBjFrBlFlBlFhBnFbBpF~ArFxArFtAtFnAtFjAvFdAvF~@xFz@xFt@zFp@zFj@zFd@|F`@|FZ|FT|FP|FJ|FD|F@|FA|FG|FK|FQ|FW|F[|Fa@zFg@zFk@zFq@xFw@xF{@vFaAvFeAtFkAtFqArFuApF{ApF_BnFeBlFiBjFoBjFsBhFyBfF}BvGmD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.655888888889, -112.27555555556), new google.maps.LatLng(33.765055555556, -112.14558333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PHOENIX, DEER VALLEY MUNICIPAL AIRPORT CLASS E4<br />SFC-17999');
    

// POCATELLO CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cdkeG~efnT?Gb@ok@jBik@tD{j@zFej@`Iki@fKih@hM_g@jOqe@hQ{c@bSab@zTa`@nV{]`Xq[lYcYvZqVz[ySz\\aQv]eNl^eK~^eHj_@cEr_@_Bt_@>r_@bBj_@dE|^fHl^fKt]fNz\\bQz[zStZpVlYbY~Wp[nVz]zT``@bS~a@fQzc@hOne@hM|f@fKdh@`Ifi@zFbj@rDvj@jBdk@b@jk@c@jk@kBdk@sDvj@{Fbj@aIfi@eKdh@iM|f@iOne@gQzc@aS`b@yT``@oVz]_Xr[mYdYuZrVy[|Sy\\bQu]fNm^hK}^hHk_@fEs_@bBu_@@s_@_Bk_@cE__@eHm^eKw]cN{\\_Q{[ySwZoVmYcYaXq[qV{]{Ta`@cSab@iQ{c@kOqe@iM_g@gKgh@cIki@}Fej@uD{j@mBik@c@ok@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.838319294963, -112.69699809566), new google.maps.LatLng(42.988346387078, -112.49300348992));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'POCATELLO CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'POCATELLO CLASS E2<br />SFC-17999');
    

// POCATELLO CLASS E4 AIRSPACE

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_xodGfh|mTjwYhlc@qpMnxRFg@LcALcAJcAJcAHcAHcAFeAFeADeADeABeABeABeA@eA@eA>eA>eA?eA?eAAeAAeACeACeACeAEeAEeAGeAGeAIcAIcAKcAKcAMcAMcAMcAOaAOaAQaAQaAS_AS_AS_AU_AU}@W}@W}@W}@Y{@Y{@[{@[y@[y@]y@]w@_@w@_@u@_@u@a@u@a@s@a@s@c@q@c@q@c@q@e@o@e@o@e@m@e@m@g@k@g@k@g@i@i@i@i@g@i@g@i@e@k@e@k@c@k@c@k@a@m@a@m@_@m@]m@]m@[o@[o@Yo@Yo@Wo@Uo@Uq@Sq@Sq@Qq@Oq@Oq@Mq@Mq@Kq@Is@Is@Gs@Gs@Es@Cs@Cs@As@?s@?s@>s@>s@@s@Bs@Bs@Ds@Fs@Fs@Hq@Hq@Jq@Lq@Lq@Nq@Nq@Pq@Rq@Ro@To@To@Vo@Xo@Xo@Zm@Zm@\\m@\\m@^m@`@k@`@k@b@k@b@k@d@i@d@i@f@i@f@i@h@g@h@g@j@g@j@e@l@e@l@e@n@e@n@c@p@c@p@c@p@a@r@a@r@a@t@_@t@_@t@_@v@]v@]x@[x@[x@[z@Yz@Yz@W|@W|@W|@U|@U~@S~@S~@S~@Q`AQ`AO`AO`AMbAMbAMbAKbAKbAIbAIdAGdAGdAEdAEdACdACdACdAAdAAdA?fA?dA>dA>dA@dA@dABdABdABdADdADdAFdAFdAHbAHbAJbAJbALbALbALbAN`AN`AP`AP`AR~@R~@R~@T~@T|@V|@V|@V|@Xz@Xz@Zz@Zx@Zx@\\x@\\v@^v@^t@^t@`@t@`@r@`@r@b@p@b@p@b@p@d@n@d@n@d@l@f@l@f@j@f@j@f@h@h@h@h@f@h@f@h@d@j@d@j@b@j@b@j@`@l@`@l@^l@\\l@\\l@Zn@Zn@Xn@Xn@Vn@Tn@Tp@Rp@Rp@Pp@Np@Np@Lp@Lp@Jp@Hr@Hr@Fr@Fr@Dr@Br@Br@@r@>r@>r@?r@?r@Ar@Cr@Cr@Er@Gr@Gr@Ip@Ip@Kp@Mp@Mp@Op@Op@Qp@Sr@i@gjB`oCuaF_sHubDjgAigBmtLanIshMlHtDnFjCnFdCpF`CrFzBtFtBvFnBvFhBxFbBzF|AzFvA|FpA|FjA~FdA~F~@`Gx@`Gr@`Gj@bGd@bG^bGXbGRbGLbGFbG@bGAbGGbGObGUbG[bGa@`Gg@`Gm@`Gs@`Gy@~F_A~FeA|FkA|FqAzFwAzF}AxFcBvFiBvFoBtFuBrF{BpFaCnFgClFmCjFsCjFwChF}CdFcDbFiD`FmD~EsD|EyDzE}DxEcEtEgErEmEpEqElEwEjE{EfEaFdEeF`EkF~DoFzDsFxDwFtD{FpDaGnDeGjDiGfDmGdDqG`DuG|CyGxC}GtC_HrCcHnCgHjCkHfCmHbCqH~BsHzBwHvByHrB}HnB_IjBaIfBeI`BgI|AiIxAkItAmIpAoIlAqIhAsIbAuI~@wIz@wIv@yIr@{Il@{Ih@}Id@}I`@_JZ_JV_JRaJLaJHaJDaJ@aJAaJEaJIaJOaJSaJW_J[_Ja@_Je@}Ii@}Im@{Is@{Iw@yI{@wI_AwIcAuIiAsImAqIqAoIuAmIyAkI}AiIcBgIgBeIkBaIoB_IsB}HwByH{BwHoAsG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.711136111111, -112.86824444444), new google.maps.LatLng(42.945275, -112.54420555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'POCATELLO CLASS E4 AIRSPACE';
    attachPolygonInfoBox(polygon, infoBox, 'POCATELLO CLASS E4 AIRSPACE<br />SFC-17999');
    

// POINT MUGU NAWS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('aaznEz}fvUduQ`dG{EfT_FlTiFhTsFbT}F|SgGxSoGrSyGlScHfSmH`SuHzR_IrRgIlRqIdRyI~QcJvQkJnQsJhQ{J`QeKxPmKpPuKfP}K~OeLvOmLlOsLdO{LzNcMpNiMhNqM~MwMtM_NjMeN`MkNvLqNjLyN`L_OvKcOlKiO`KoOvJuOjJyO~I_PtIcPhIiP|HmPpHqPfHuPzGyPnG}PbGaQvFyUuHudEmvU~Bm@nFsAlFyAjF}AjFcBhFgBfFmBdFqBbFwBbF{B`FaC~EeC|EiCzEoCxEsCvEwCrE{CpEaDnEeDlEiDjEmDfEqDdEuDbEyD~D}D|DaExDeEvDiErDmEpDqElDuEjDyEfD}EdD_F`DcF|CgFxCkFvCmFrCqFnCsFjCwFhCyFdC}F`C_G|BaGxBeGtBgGpBiGlBkGhBoGdBqG`BsGbC_L'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.957730555556, -119.32205706677), new google.maps.LatLng(34.101061111111, -119.15246666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'POINT MUGU NAWS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'POINT MUGU NAWS CLASS E4<br />SFC-17999');
    

// PORT ANGELES CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('umudHxq_oVd~Cf~d@vEhCxElCvEpCtEvCrE|CpEbDnEhDlElDjErDhExDfE|DdEbEbEfE`ElE|DpEzDvExDzEtD`FrDdFpDjFlDnFjDrFfDvFdDzFbD`G~CdGzChGxClGtCpGrCtGnCxGjC|GhC~GdCbH`CfH~BjHzBlHvBpHrBrHnBvHlBxHhB|HdB~H`B`I|AdIxAfItAhIpAjIlAlIhAnIdApI`ArI|@tIx@vIt@vIp@xIl@zIh@zId@|I`@|I\\~IX~IT`JP`JL`JH`JD`J@`JA`JE`JI`JM`JQ`JU`JY~I]~Ia@|Ie@|Ii@zIm@zIq@xIu@vIy@vI}@tIaArIeApIiAnImAlIqAjIuAhIyAfI}AdIaB`IeB~HiB|HkBxHoBvHsBrHwBpH{BlH}BjHaCfHeCbHiC~GkC|GoCxGsCtGuCpGyClG{ChG_DdGaD`GeD|FgDvFkDrFmDnFqDjFsDdFuD`FyDzE{DvE}DrE_ElEcEfEeEbEgE|DiExDkErDmElDoEhDqEbDsE|CuEvCwErCyElC{EfC{E`C}EzB_FtBaFnBaFhBcFbBcF|AeFvAeFpAgFjAgFdAiF~@iFx@iFr@kFl@kFf@kF`@kFZmFTmFNmFFmF@mFAmFGmFMmFSkFYkF_@kFe@kFk@iFs@iFy@iF_AgFeAgFkAeFqAeFwAcF}AcFcBaFiBaFoB_FuB}E{B}EaC{EeCyEkCwEqCuEwCsE}CqEcDoEgDmEmDkEsDiEwDgE}DeEcEcEgEaEmE}DqE{DwEyD{EwDaFsDeFqDiFoDoFkDsFiDwFeD{FcDaG_DeG}CiGyCmGuCqGsCuGoCyGmC}GiCaHeCcHaCgH_CkH{BmHwBqHsBuHqBwHmB{HiB}HeB_IaBcI}AeIyAgIuAiIqAkImAoIiAqIeAsIaAsI}@uIy@wIu@yIq@{Im@{Ii@}Ie@}Ia@_J]_JYaJUaJQaJMaJIcJEcJAcJ@mJDcJHcJLaJPaJTaJXaJ\\_J`@_Jd@}Ih@}Il@{Ip@{It@yIx@wI|@uI`AsIdAsIhAqIlAoIpAkItAiIxAgI|AeI`BcIdB_IhB}HlB{HnBwHrBuHvBqHzBmH~AqDijDc{g@jrOiyC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.051953626719, -123.60176271205), new google.maps.LatLng(48.205138888889, -123.21069444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PORT ANGELES CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PORT ANGELES CLASS E2<br />SFC-17999');
    

// PORTLAND-HILLSBORO CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('eikuG~ulmV?G`@mj@dBgj@fDyi@jFei@lHih@lJig@jLaf@fNsd@`P_c@vQea@lSg_@|Tc]jV{ZtWoXzX}U|YiSzZsPt[yMh\\{Jx\\}Gd]}Dl]}An]>l]`Bd]`Ex\\`Hh\\~Jr[zMxZtP|YjSxX~UrWnXhVzZ|Tb]jSf_@vQda@~O|b@fNpd@hL~e@jJdg@jHfh@jF`i@fDti@dBbj@`@hj@_@hj@cBbj@gDti@iF`i@kHfh@kJdg@iL~e@eNpd@_P|b@wQda@kSf_@{Tb]iV|ZsWnXyX~U{YjSyZtPs[zMi\\~Jy\\`He]`Em]`Bo]@m]}Ae]}Dy\\}Gi\\{Ju[wM{ZqP}YiS{X}UuWoXkV{Z}Tc]mSg_@yQea@aP_c@gNsd@kLaf@mJgg@mHih@kFei@iDyi@eBgj@a@mj@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.470630350776, -123.04972426326), new google.maps.LatLng(45.61059101225, -122.85066617156));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PORTLAND-HILLSBORO CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND-HILLSBORO CLASS E2<br />SFC-17999');
    

// PORTLAND-HILLSBORO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wtttGh`~lVeCkDpvBkzBjyBpnFwvBpzBmA}F_B}HcByHgBwHkBuHoBsHsBoHwBmHyBiH}BgHaCcHeC_HiC}GkCyGoCuGsCqGuCmGyCkG}CgG_DcGcD_GgD{FiDuFmDqFoDmFqDiFuDeF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.456638888889, -122.91258333333), new google.maps.LatLng(45.495361111111, -122.85447222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PORTLAND-HILLSBORO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND-HILLSBORO CLASS E4<br />SFC-17999');
    

// PORTLAND-HILLSBORO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q{duG~e}mVa_GxqG_{DobJt~FsqG`AlHfAhIjAfInAdIrAbIvA`IzA~H~A|HbBzHfBvHjBtHnBrHrBnHvBlHzBhH|BfH`CbHdC~GhC|GlCxGnCtGrCpGvClGxCjG|CfG`DbGbD~FfDxFhDtFlDpFnDlFrDhFtDdFvD~EzDzE|DvE~DpEbElEdEfEfEbEhE|D~D|D'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.577694444444, -123.07869444444), new google.maps.LatLng(45.64875, -122.97786111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PORTLAND-HILLSBORO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND-HILLSBORO CLASS E4<br />SFC-17999');
    

// PORTLAND CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ihguGr__lVcy@btCuoKs{H|p@y_CtEbKrDbIvD~HzDxH~DtHbEnHfEjHjEdHnE`HpEzGtEvGxEpGzEjG~EdGbF~FdFzFhFtFjFnFnFhFpFbFrF|EvFvExFpEzFhE~FbE`G|DbGvDdGpDfGhDhGbDjG|ClGtCnGnCpGfCrG`CrGzBtGrBvGlBxGdBxG~AzGvAzGnA|GhA|G`A~Gz@~Gr@~Gl@~Gd@`H\\`HV`HN`HC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.589977777778, -122.740125), new google.maps.LatLng(45.663394444444, -122.66884722222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PORTLAND CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND CLASS E3<br />SFC-17999');
    

// PORTLAND CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yovuGr_okV_oD?Ds|NcnXixr@hgSwgS~wZn|w@vpAcqEzxKfbI_dB~aG_D{I_DwIcDsIgDoIkDkIoDeIsDaIwD}H{DyH_EsHaEoHeEiHiEeHmE_HqE{GsEuGwEoG{EkG}EeGaF_GeFyFgFsFkFoFmFiFoFcFsF}EuFwEwFqE{FiE}FcE_G}DaGwDcGqDeGiDgGcDiG}CkGuCmGoCoGiCqGaCsG{BuGsBuGmBwGeByG_ByGwA{GqA{GiA}GcA}G{@}Gu@_Hm@_Hg@_H_@_HW_HQaHIaHCaH@aHH_HN_HV_H\\_Hd@_Hl@}Gr@}Gz@}G`A{GhA{GnAyGvAyG|AwGdBuGjBuGrBsGxBqG`CoGfCmGnCmGtCkGzCiGbDgGhDeGnDaGvD_G|D}FbE{FhEyFnEuFtEsFzEqF`FmFfFkFlFgFrFeFxFaF~F_FdG{EjGwEnGuEtGqEzGmE~GiEdHeEhHcEnH_ErH{DxHwD|HsD`IoDfIkDjIgDnIcDrI_DvI{CzIuC~IqCbJmCfJiChJeClJ_CpJ{BrJwBvJqBxJmB|JiB~JcB`K_BdK{AfKuAhKqAjKkAlKgAnKaApK}@rKw@rKs@tKm@vKi@vKc@xK_@xKYzKUzKOzKKzKEfLAzK@zKDzKJzKNzKTzKXzK^xKd@xKh@vKn@vKr@tKx@rK|@rK`ApKfAnKjAlKpAjKVfL'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.501897222222, -122.63434722222), new google.maps.LatLng(45.826538888889, -122.18382222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PORTLAND CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND CLASS E3<br />SFC-17999');
    

// PORTLAND-TROUTDALE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('imfuGxspjVaLGqCyCyDcEwDgEsDkEqDoEoDuEmDyEiD}EgDaFcDeFaDiF}CmF{CqFyCuFuCyFqC}FoCaGkCeGiCgGeCkGaCoG_CqG{BuGwBwGuB{GqB}GmBaHiBcHeBeHcBiH_BkH{AmHwAoHsAqHoAsHkAuHgAwHcAyHaA{H}@}Hy@_Iu@_Iq@aIm@cIi@cIe@eIa@eI]eIYgIUgIQgIMiIIiIEiIAiI@qIDiIHiILiIPgITgIXgI\\eI`@eId@eIh@cIl@cIp@aIt@_Ix@_I|@}H~@{HbAyHfAwHjAuHnAsHrAqHvAoHzAmH~AkHbBiHdBeHhBcHlBaHpB}GrB{GvBwGzBuG~BqG`CoGdCkGhCgGjCeGnCaGpC}FtCyFvCuFzCqF|CmF`DiFbDeFfDaFhD}EjDyEnDuEpDqErDkEvDgExDcEzD}D|DyD~DuD`EoDdEkDfEeDhEaDjE{CjEwClEqCnEkCpEgCrEaCtE}BvEwBvEqBxEkBzEgBzEaB|E{A|EuA~EqA~EkA`FeA`F_AbFy@bFu@bFo@dFi@dFc@dF]dFWdFQdFMfFGfFAfF@fFFdFLdFRdFXdF^dFb@dFh@bFn@bFt@bFz@`F`A`FdA~EjA~EpA|EvA|E|AzE`BzEfBxElBvEpBtEvBtE|BrE`CpEfCnElClEpCjEvChEzCfE`DdEdDbEjD`EnD~DtD|DxDzD|DxDbEvDfErDjEpDpEnDtEjDxEhD|EfD`FbDdF`DhF|ClFzCpFvCtFtCxFpC|FnC`GjCbGfCfGdCjG`CnG~BpGzBtGvBvGrBzGpB|GlB`HhBbHdBdH`BfH~AjHzAlHvAnHrApHnArHjAtHfAvHbAxH~@zH|@zHx@|Ht@~Hp@`Il@`Ih@bId@bI`@dI\\dIXdITfIPfILfIHfIDfI@fI?fIEfIIfIMfIQfIUfIYdI]dIa@dIe@bIi@bIm@`Iq@`Iu@~Hw@|H{@|H_AzHcAxHgAvHkAtHoArHsApHwAnH{AlH_BjHaBfHeBdHiBbHmB`HqB|GsBzGwBvG{BtG}BpGaCnGeCjGgCfGkCdGoC`GqC|FuCxFwCtF{CpF}ClFaDhFcDdFgD`FiD|EkDxEoDtEqDpEsDjEuDfEyDbE{D~D}DxD_EtDaEnDcEjDeEdDgE`DiEzCkEvCmEpCoElCqEfCsEbCuE|BuEvBwErByElB{EfB{E`B}E|A}EvA_FpA_FjAaFdAaF`AcFz@cFt@cFn@eFh@eFb@eF^eFXkC\\aHmF{FkE}FeE_G}DcGwDeGqDgGkDiGcDkG}CmGwCoGoCqGiCqGaCsG{BuGuBwGmBwGgByG_ByGyA{GqA}GkA}GcA}G{@_Hu@_Hm@_Hg@aH_@aHWaHQ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.482945713842, -122.49594444444), new google.maps.LatLng(45.615942392188, -122.30674391335));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PORTLAND-TROUTDALE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PORTLAND-TROUTDALE CLASS E2<br />SFC-17999');
    

// PRESCOTT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m_csEt}cmT?In@{s@pCss@pFcs@pIir@nLiq@jOap@bRon@xTyl@lWyj@zYsh@f\\gf@l^uc@l`@}`@hb@_^`d@}Zpe@wWzf@mT`h@_Q~h@oMti@}Ifj@gFpj@sBtj@>pj@tBfj@jFti@~I|h@pM~g@`Qzf@nTne@xW~c@~Zhb@`^l`@|`@j^tc@d\\ff@zYrh@jWvj@xTvl@bRln@hO|o@lLdq@pIdr@pF~r@pCns@n@vs@o@vs@oCns@qF~r@oIdr@mLdq@iO|o@aRln@yTvl@kWxj@yYrh@e\\ff@k^tc@k`@~`@ib@`^_d@~Zoe@xW{f@pT_h@bQ}h@rMui@`Jgj@jFqj@vBuj@@qj@qBgj@gFui@{I_i@oMah@_Q}f@mTqe@wWad@}Zkb@_^o`@}`@m^uc@g\\gf@}Ysh@mWyj@{Twl@eRon@kO_p@oLiq@qIir@qFas@qCss@o@{s@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.554311980438, -112.54072333365), new google.maps.LatLng(34.754630818345, -112.29844521671));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PRESCOTT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PRESCOTT CLASS E2<br />SFC-17999');
    

// PROVO CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sk`tF~{yhT^vMPbILbIHbIDbI@bIAbIEbIIbIMbIQbIUbI[`I_@`Ic@`Ig@~Hk@~Ho@|Hu@|Hy@zH}@xHaAxHeAvHiAtHmArHqApHuAnHyAlH}AjHaBhHeBfHiBdHmB`HqB~GuB|GyBxG}BvGaCtGeCpGgClGkCjGoCfGsCdGwC`GyC|F}CxFaDvFcDrFgDnFiDjFmDfFqDbFsD~EwDzEyDvE}DrE_ElEaEhEeEdEgE`EiEzDkEvDoErDqElDsEhDuEbDwE~CyExC{EtC}EnC_FjCaFdCcF`CeFzBgFtBiFpBiFjBkFdBmF`BmFzAoFtAqFpAqFjAsFdAsF~@sFx@uFt@uFn@uFh@wFb@wF\\wFXwFRwFLyFFyF@yFAyFGwFKwFQwFWwF]wFc@wFi@uFm@uFs@sFy@sF_AsFeAqFiAqFoAoFuAmF{AmF_BkFeBiFkBiFoBgFuBeF{BcF_CaFeC_FkC}EoC}EuCyEyCwE_DuEcDsEiDqEmDoEqDmEwDiE{DgE_EeEeEaEiE_EmE}DqEyDwEwD{EsD_FqDcFmDgFkDkFgDoFcDsFaDwF}CyFyC}FwCaGsCeGoCgGkCkGiCoGeCqGaCuG}BwGyB{GuB}GqB_HmBcHiBeHeBgHaBiH}AkHyAmHuAoHqAqHmAsHiAuHeAwHaAyH}@{Hy@{Hu@}Hq@_Ik@_Ig@aIc@aI_@aI[cIWcIQcIMeIIeIEeIAeI@mIDeIHeILeIPcITcIZcI^aIb@aIf@aIj@_In@_It@}Hx@{H|@{H`AyHdAwHhAuHlAsHpAqHtAoHxAmH|AkH`BiHdBgHhBeHlBcHpB_HtB}GxB{G|BwG`CuGdCqGhCoGjCkGnCgGrCeGvCaGxC}F|CyF`DwFbDsFfDoFjDkFlDgFpDcFrD_FvD{ExDwE|DqE~DmE`EiEdEeEfE_EhE{DlEwDnEqDpEmDrEiDtEcDvE_DxEyCzEuC|EoC~EkC`FeCbF_CdF{BfFuBhFqBhFkBjFeBlF_BlF{AnFuApFoApFiArFeArF_ArFy@tFs@tFm@vFi@vFc@vF]vFWvFQvFKxFGxFAxF@xFFvFLvFRvFVvF\\vFb@tFh@tFn@tFt@rFx@rF~@rFdApFjApFnAnFtAlFzAlF`BjFdBhFjBhFpBfFtBdFzBbF`C`FdC~EjC|EnCzEtCxExCvE~CtEbDrEhDfHjFg@lDe@lDc@lDa@nD_@nD]nDYpDWpDUpDSpDQrDMrDKrDIrDGrDErDAxD?rD>rD@rDDrDFrDHrDJrDLrDPrDRpDTpDVpDXpD\\nD^nD`@nDb@lDd@lDh@jDj@jDl@hDn@hDp@fDr@fDt@dDv@bDz@bD|@`D~@~C`A|CbA|CdAzCfAxChAvCjAtClArCnArCpApCrAnCtAlCvAjCxAhCzAfC|AdC~A`C~A~B`B|BbBzBdBxBfBvBhBtBhBpBjBnBlBlBnBjBnBfBpBdBrBbBrB~AtB|AvBzAvBvAxBtAxBpAzBnAzBlA|BhA~BfA~BbA~B`A`C|@`Cz@bCv@bCt@bCp@dCn@dCj@dCh@fCd@fCb@fC^|BT'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.147506423024, -111.81681306437), new google.maps.LatLng(40.290826014589, -111.62985355171));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PROVO CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PROVO CLASS E2<br />SFC-17999');
    

// PUEBLO CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_rgiFlnx|R?Ij@ur@fCmr@`F}q@xHeq@pKep@fN}n@zPom@jSyk@vU{i@`Xwg@fZke@h\\{b@d^e`@|_@k]pa@iZ~b@eWdd@}Sfe@sPbf@eMxf@uIhg@cFrg@oBvg@>rg@rBhg@fFxf@vIbf@fMfe@tPdd@`T|b@fWna@jZ|_@j]d^d`@f\\zb@dZje@`Xtg@vUxi@hStk@xPjm@fNzn@pK`p@xH`q@`Fxq@fChr@j@pr@k@pr@eChr@_Fxq@yH`q@qKbp@eNzn@yPlm@iSvk@wUxi@_Xtg@eZje@g\\zb@c^f`@}_@j]oa@lZ}b@hWed@`Tge@vPcf@hMyf@xIig@fFsg@tBwg@@sg@oBig@aF{f@sIef@cMie@qPgd@}S_c@eWqa@iZ_`@i]g^e`@i\\{b@gZke@cXug@yU{i@kSwk@{Pom@gN}n@sKep@{Heq@aF}q@gCmr@m@ur@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.195713028724, -104.61497124087), new google.maps.LatLng(38.382563259798, -104.378030597));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PUEBLO CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PUEBLO CLASS E2<br />SFC-17999');
    

// PUEBLO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('edohFbgn}R`Bx_FivJhGaB}~EdFtAvHrBxHjBxHdBzH|A|HvA|HnA~HhA~H`A`Iz@`Ir@bIl@bId@bI\\bIVbINdIHdI@dICdIIbIQbIWbI_@bIg@`Im@`Iu@`I{@~HcA~HkA|HqA|HyAzH_BxHgBxHmBvHuBtH{BrHaCfFcB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.256972222222, -104.64533333333), new google.maps.LatLng(38.317527777778, -104.60802777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PUEBLO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PUEBLO CLASS E4<br />SFC-17999');
    

// PUEBLO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('aubiFhth|R_IzLk~Bup[zmU}_Df_Cdu[kGqD_H}DaHwDeHqDgHiDiHcDkH}CmHuCoHoCqHiCsHaCuH{BwHsByHmByHgB{H_B}HwA}HqA_IiA_IcAaI{@aIu@aIm@cIg@cI_@cIWcIQeIIeICeI@eIHcINcIVcI\\cId@cIl@aIr@aIz@_I`A_IhA}HpA}HvA{H~AyHdByHlBwHrBuHzBsH`CqHfCoHnCmHtCkH|CiHbDgHhDeHnDcHvD_H|D}GbE{GhEwGnEuGtEqG|EoGbFkGhFgGnFeGtFaGxF}F~FyFdGwFjGsFpGoFtGkFzGgF`HcFdH_FjH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.243888888889, -104.41780555556), new google.maps.LatLng(38.379444444444, -104.24586111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PUEBLO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'PUEBLO CLASS E4<br />SFC-17999');
    

// PULLMAN CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c{t|GpoqiU`AoIm{Ha|Mt}FieJh|H||MlC_A|EcB|E}A~EyA~EsA`FmA`FgAbFaAbF{@bFu@dFo@dFi@dFc@dF_@fFYfFSfFMfFGfFAfF@fFFfFLfFRfFXdF^dFd@dFj@dFp@bFv@bF|@bF`A`FfA`FlA~ErA~ExA|E~A|EdBzEhBxEnBxEtBvEzBtE~BrEdCpEjCpEpCnEtClEzCjE~ChEdDfEjDdEnDbEtD`ExD|D~DzDbExDfEvDlEtDpEpDtEnDzElD~EhDbFfDfFdDjF`DnF~CrFzCvFxCzFtC~FrCbGnCfGjCjGhCnGdCpG`CtG~BxGzBzGvB~GtB`HpBdHlBfHhBjHdBlHbBnH~ApHzAtHvAvHrAxHnAzHjA|HfA~HdA`I`AbI|@dIx@dIt@fIp@hIl@hIh@jId@jI`@lI\\lIXnITnIPnILnIHpIDpI@pI?pIEpIIpIMnIQnIUnIYnI]lIa@lIe@jIi@jIm@hIq@hIu@fIy@dI}@dIaAbIcA`IgA~HkA|HoAzHmA`F`hDnfG_bGt}IqgDyeGmExA}E~A}ExA_FrA_FlAaFfAaF`AcF|@cFv@cFp@eFj@eFd@eF^eFXeFRgFLgFFgF@gFAgFGgFMeFSeFWeF]eFc@eFi@cFo@cFu@cF{@aFaAaFgA_FmA_FsA}EwA}E}A{EcB{EiByEoBwEsBwEyBuE_CsEeCqEiCoEoCoEuCmEyCkE_DiEeDgEiDeEoDcEsD_EyD}D}D{DaEyDgEwDkEsDqEqDuEoDyEmD}EiDcFgDgFcDkFaDoF_DsF{CwFyC{FuC_GqCcGoCgGkCkGiCmGeCqGaCuG_CwG{B{GwB_HuBaHqBeHmBgHiBiHeBmHcBoH_BqH{AuHwAwHsAyHoA{HkA}HgA_IeAaIaAcI}@cIy@eIu@gIq@iIm@iIi@kIe@kIa@mI]mIYoIUoIQoIMoIIoIEqIAqI@yIDqIHqILoIPoIToIXoI\\mI`@mId@kIh@kIl@iIp@iIt@gIx@eI|@cI`AcIbAaIfA_IjA}H'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.654916666667, -117.24386111111), new google.maps.LatLng(46.856722222222, -116.94122222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'PULLMAN CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'PULLMAN CLASS E2<br />SFC-17999');
    

// RAPID CITY REGIONAL AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k}~kGhzqtRuIiF}vE}a[~CoJbCmHfCiHjCgHnCcHrC_HvC{GzCwG|CuG`DqGdDmGfDiGjDcGnD_GpD{FtDwFvDsFzDmF|DiF`EeFbE_FfE{EhEwElEqEnEmEpEgErEaEvE}DxEwDzEsD|EmD~EgD`FaDbF}CdFwCfFqChFkCjFeClF_CnF{BnFuBpFoBrFiBrFcBtF}AvFwAvFqAxFkAxFeAxF_AzFy@zFs@zFk@|Fe@|F_@|FY|FS|FM~FG~FA~F@~FF|FL|FT|FZ|F`@|Ff@zFl@zFr@zFx@xF~@xFdAxFjAvFpAtFvAtF|ArFbBrFhBpFnBnFtBlFzBlF`CjFfChFjCfFpCdFvCbF|C`FbD~EfD|ElDzErDxEvDtE|DrEbEpEfEnElEjEpEhEvEfEzEbE~E`EdF|DhFzDlFvDrFtDvFpDzFnD~FjDbGfDfGdDjG`DnG|CrGxCvGvCzGrC~GnCbHjCdHfChHbClH~BnH|BrHxBtHtBxHpBzHlB~HhB`IdBbI~AdIzAhIvAjIrAlInAnIjApIfArIbArI~@tIx@vIt@xIp@xIl@zIh@zIb@|I^|IZ~IV~IR~IL`JH`JD`J@`JA`JE`JI`JM`JS~IW~I[~I_@|Ic@|Ii@zIm@zIq@xIu@xIy@vI}@tIcArIgArIkApIoAnIsAlIwAjI{AhI_BdIcBbIiB`ImB~HqBzHuBxHyBtH{BrH_CnHcClHgChHkCfHoCbHsC~GwCzGyCvG}CrGaDpGeDlGgDfGkDbGoD~FqDzFuDvFwDrF{DnF}DhFaEdFcE`FgEzEiEvEkEpEoElEqEfEsEbEuE|DyEvD{ErD}ElD_FfDaFbDcF|CeFvCgFpCiFlCkFfCmF`CmFzBoFtBqFnBsFhBsFbBuF|AuFvAwFpAwFjAyFdAyF~@{Fx@{Fr@{Fl@}Ff@}F`@}FZ}FT}FN_GF_G@_GA_GG}FM}FS}FY}F_@}Fe@}Fk@{Fq@{Fy@yF_AyFeAyFkAwFqAwFwAuF}AsFcBsFiBqFoBoFuBoFyBmF_C'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.971890083295, -103.15924381547), new google.maps.LatLng(44.108972222222, -102.95575612095));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RAPID CITY REGIONAL AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'RAPID CITY REGIONAL AIRPORT CLASS E2<br />SFC-17999');
    

// RAPID CITY CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ylrkGtfnsRoG}FruVgiNxcFreTiuVvhNf@oIh@{Ib@}I^}IZ}IV_JP_JL_JH_JDaJ@aJAaJEaJI_JM_JS_JW_J[}I_@}Ic@}Ii@{Im@{Iq@yIu@wIy@wI_AuIcAsIgAqIkAoIoAmIsAkIwAiI{AgI_BeIcBcIiBaImB}HqB{HuByHwBuH{BsH_CoHcCmHgCiHkCeHoCcHsC_HwC{GyCwG}CsGaDoGeDkGgDgGkDcGmD_GqD{FuDwFwDsF{DmF}DiFaEeFcE_FgE{EiEuEkEqEoEmEqEgEsEaEuE}DwEwD{EsD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.851972222222, -103.07677777778), new google.maps.LatLng(44.009972222222, -102.88983333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RAPID CITY CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'RAPID CITY CLASS E4<br />SFC-17999');
    

// RAWLINS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iwz}FfxilShFfbPrBxCpDhFlDlFjDpFfDtFbDxF`D|F|C~FxCbGvCfGrCjGnCnGjCpGhCtGdCvG`CzG|B|GxB`HtBbHpBfHlBhHhBjHdBnH`BpH|ArHxAtHtAvHpAxHlAzHhA|HdA~H`A~H|@`Ix@bIt@dIn@dIj@fIf@fIb@hI^hIZhIVjIPjILjIHjIDjI@lIAlIEjIIjIMjIQjIUjI[hI_@hIc@hIg@fIk@fIo@dIu@dIy@bI}@`IaA`IeA~HiA|HmAzHqAxHuAvHyAtH}ArHaBpHeBnHiBjHmBhHqBfHuBbHyB`H}B~GaCzGeCvGgCtGkCpGoCnGsCjGwCfGyCbG}C`GaD|FcDxFgDtFkDpFmDlFqDhFsDdFwD`FyDzE}DvE_ErEaEnEeEhEgEdEiE`EmEzDoEvDqEpDsElDuEhDwEbDyE|C{ExC}ErC_FnCaFhCcFbCeF~BgFxBiFrBiFnBkFhBmFbBmF|AoFvAqFrAqFlAsFfAsF`AuFz@uFt@uFn@wFj@wFd@wF^wFXwFRyFLyFFyF@yFAyFGyFMwFQwFWwF]wFc@wFi@uFo@uFu@uF{@sFaAsFeAqFkAqFqAoFwAoF}AmFcBkFgBkFmBiFsBgFyBeF}BcFcCaFiCaFmC_FsC}EyC{E}CwEcDuEgDsEmDqEqDoEwDmE{DiEaEgEeEeEiEcEoE_EsE}DwEyD{EwD_FsDeFqDiFmDmFkDqFgDuFeDyFaD}F}CaG{CcGwCgGsCkGoCoGkCqGiCuGeCyGaC{G}B_HyBaHuBeHqBgHmBiHiBmHeBoHaBqH}AsHyAuHuAwHqAyHmA{HiA}HeA_IaAaI}@cIy@cIu@eIq@gIk@gIg@iIc@iI_@iI[kIWkIQkIMmIImIEmIAmI@uIDmIFgNuKw_\\rwVuP'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.733855558738, -107.29582895861), new google.maps.LatLng(41.879202777778, -107.04276944444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RAWLINS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'RAWLINS CLASS E2<br />SFC-17999');
    

// RED BLUFF CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('moqsFlqqhVxB|E`mKmqDnoDhySqmKrqDs@lSi@fNo@fNu@dN}@bNcAbNiA`NoA~MwA|M}AzMcBxMiBvMoBrMuBpM}BnMcCjMiChMoCdMuC`M{C~LaDzLgDvLmDrLsDnLyDjL}DfLcEbLiE|KoExKuEtKyEnK_FjKeFdKiF`KoFzJsFtJyFnJ}FhJcGbJgG|IkGvIqGpIuGjIyGdI}G~HaHxHeHpHiHjHmHbHqH|GuHtGyHnG}HfGaI`GcIxFgIpFkIhFmIbFqIzEsIrEwIjEyIbE{IzD}IrDaJjDcJbDeJzCgJrCiJjCkJbCmJzBmJrBoJhBqJ`BsJxAsJpAuJfAuJ~@wJv@wJn@wJd@wJ\\yJTyJJyJByJAyJIyJSwJ[wJc@wJm@wJu@uJ}@uJeAsJoAsJwAqJ_BoJgBoJqBmJyBkJaCiJiCgJqCeJyCcJaDaJkD_JsD}I{DyIcEwIiEuIqEqIyEoIaFkIiFgIqFeIwFaI_G}HgG{HmGwHuGsH}GoHcHkHiHgHqHcHwH_H_IyGeIuGkIqGqImGwIgG}IcGcJ_GiJyFoJuFuJoF{JkFaKeFeK_FkK{EoKuEuKoEyKiE_LeEcL_EgLyDkLsDoLmDsLgDwLaD{L{C_MuCcMoCgMiCiMcCmM}BoMwBsMqBuMiBwMcB{M}A}MwA_NqAaNiAcNcAcN}@eNw@gNo@gNi@iNc@iN[kNUkNOkNIkNAmN@yNFkNNkNTkNZkNb@iNh@iNn@gNv@gN|@eNbAcNhAcNpAaNvA_N|A}MbB{MhBwMpBuMvBsM|BoMbCmMhCiMnCgMtCcMzC_M`D{LfDyLlDuLrDqLxDkL~DgLdEcLhE_LnEyKtEuKzEoK~EkKdFeKhFaKnF{JtFuJxFoJ~FiJbGcJfG}IlGwIpGqItGkIxGeI~G_IbHwHfHqHjHkHnHcHrH}GvHuGxHoG|HgG`I_GdIyFfIqFjIiFnIaFpIyErIqEvIkExIcEzI{D~IsD`JkDbJcDdJyCfJqChJiCjJaClJyBnJqBnJiBpJ_BrJwArJoAtJgAtJ}@vJu@vJm@vJc@vJ[xJSxJKxJAxJBxJJxJTvJ\\vJd@vJl@vJv@tJ~@tJfArJpArJxApJ`BnJhBnJpBlJzBjJbChJjCfJrCdJzCbJbD`JjD~IrDzIzDxIbEvIjErIrEpIzElIbFjIhFfIpFbIxF`I`G|HfGxHnGtHtGpH|GnHbHjHjHfHpH`HvH|G~HxGdItGjIpGpIjGvIfG|IbGbJ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.979194444444, -122.39357334071), new google.maps.LatLng(40.259576871096, -122.1108709921));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RED BLUFF CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'RED BLUFF CLASS E2<br />SFC-17999');
    

// REDDING CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w}|uFro_iVjuNnvCg{Bd`UolIocBpByEjCmGhCoGdCsG`CuG|ByGxB{GtB_HpBaHlBcHhBgHdBiH`BkH|AmHxAoHtAqHpAsHlAuHhAwHdAyH`A{H|@{Hx@}Ht@_In@_Ij@aIf@aIb@cI^cIZcITeIPeILeIHeIDeI@eIAeIEeIIeIMeIQeIWeI[cI_@cIc@cIg@aIk@aIo@_Iu@_Iy@}H}@{HaA{HeAyHiAwHmAuHqAsHuAqHyAoH}AmHaBkHeBiHiBgHmBcHqBaHuB_HyB{G}ByGaCuGeCsGiCoGkCmGoCiGsCeGwCcGyC_G}C{FaDwFcDsFgDoFkDmFiBoC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.377652777778, -122.36439444444), new google.maps.LatLng(40.458041666667, -122.22730555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'REDDING CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'REDDING CLASS E4<br />SFC-17999');
    

// REDMOND CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mo}lG|`ocVmbH`FuCo{J_LkDyGyBwGaCuGgCuGoCsGuCqG{CoGcDmGiDkGoDgGuDeG}DcGcEaGiE_GoE{FuEyF{EuFaFsFgFoFmFmFsFiFyFgF_GcFeGaFkG}EoGyEuGuE{GsE_HoEeHkEiHgEoHcEsH_EyH{D}HwDaIsDeIoDkIkDoIgDsIcDwI}C{IyC_JuCcJqCeJkCiJgCmJcCoJ_CsJyBwJuByJoB{JkB_KgBaKaBcK}AgKwAiKsAkKmAmKiAoKcAqK_AqKy@sKu@uKo@uKk@wKe@yK_@yK[yKU{KQ{KK{KE{KA{K@gLD{KJ{KP{KT{KZyK^yKd@yKh@wKn@uKt@uKx@sK~@qKbAqKhAoKlAmKrAkKvAiK|AgK`BcKfBaKjB_KnB{JtByJxBwJ|BsJbCoJfCmJjCiJpCeJtCcJxC_J|C{IbDwIfDsIjDoInDkIrDeIvDaIzD}H~DyHbEsHfEoHjEiHnEeHpE_HtE{GxEuG|EoG~EkGbFeGfF_GhFyFlFsFnFmFrFgFtFaFxF{EzFuE|FoE`GiEbGcEdG}DfGuDjGoDlGiDnGcDpG{CrGuCtGoCtGgCvGaCxGyBzGsB|GkB|GeB~G}A~GwA`HoA`HiAbHaAbH{@dHs@dHm@dHe@dH]fHWfHOfHIfHAfHBfHHfHPfHVdH^dHf@dHl@dHt@bHz@bHbA`HhA`HpA~GvA~G~A|GdBzGlBzGrBxGzBvG`CtGhCrGnCrGtCpG|CnGbDjGhDhGpDfGvDdG|DbGbE`GhE|FnEzFvExF|EtFbFrFhFnFlFlFrFhFxFfF~FbFdG~EjG|EnGxEtGtEzGpE~GlEdHjEhHfEnHbErH~DvHzD|HvD`IrDdInDhIjDlIdDrI`DvI|CzIxC|ItC`JpCdJjChJfCjJbCnJ|BrJxBtJtBxJnBzJjB|JdB`K`BbK|AdKvAfKrAhKlAjKhAlKbAnK~@pKx@rKt@rKn@tKh@tKd@vK^vKZxKTxKPxKJzKDzK@zKAzKEzKKzKQxKUxK[xK_@vKe@vKi@tKo@tKs@rKy@rK_ApKcAnKiAlKmAjKsAhKwAfK{AdKaBbKeB`KkB|JoBzJuBxJyBtJ}BrJcCnJgClJkChJoCdJuC`JyC|I}CzIaDvIeDrIkDnIoDhIsDdIwD`I{D|H_ExHcErHgEnHkEhHmEdHqE~GuEzGyEtG}EnG_FjGcFdGgF~FiFxFmFrFoFnFsFhFuFbFyF|E{FvE}FpEaGhEcGbEeG|DgGvDiGpDkGhDoGbDqG|CsGtCsGnCuGhCwG`CyGzBgE|@rCpxJ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.168843489158, -121.32497222222), new google.maps.LatLng(44.338933010483, -121.03167378691));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'REDMOND CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'REDMOND CLASS E2<br />SFC-17999');
    

// REDMOND CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ct}lGhgccVrCpxJmbH`FuCo{JxCr@|GdB~G|A~GvA`HnA`HhAbH`AbHz@dHr@dHl@dHd@dH\\fHVfHNfHHfH@fHCfHIfHQfHWdH_@dHg@dHm@dHu@bH{@bHcA`HiA`HqA~GyA~G_B|GgBnJcD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.229194444444, -121.32497222222), new google.maps.LatLng(44.276583333333, -121.26341666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'REDMOND CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'REDMOND CLASS E4<br />SFC-17999');
    

// RENO CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yxppFxrwyUgBtJ_B`J{AbJuAdJqAfJmAhJgAjJcAlJ}@lJy@nJs@pJo@pJi@rJe@rJ_@tJYtJUtJOvJKvJE`KAvJ@vJDvJJvJNvJTtJZtJ^tJd@rJh@rJn@pJr@pJx@nJ|@lJbAlJfAjJlAhJpAfJtAdJzAbJ~A`Jl@`K{{V??wdNr}V?'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.576611111111, -119.80697222222), new google.maps.LatLng(39.699277777778, -119.72925));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RENO CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'RENO CLASS E3<br />SFC-17999');
    

// RENO CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ejroFr`xyUuBqKh_R??hbNi_R?xBqL~A}IxA_JtAcJpAcJjAeJfAgJ`AiJ|@kJv@kJr@mJl@oJh@oJb@qJ^qJXqJTsJNsJJsJDsJ@sJAsJEsJKsJOsJUsJYqJ_@qJc@oJi@oJm@oJs@mJw@kJ}@kJaAiJgAgJkAeJqAcJuAaJyA_J_B}I'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.323944444444, -119.80677777778), new google.maps.LatLng(39.421277777778, -119.72944444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RENO CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'RENO CLASS E3<br />SFC-17999');
    

// RIFLE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e`cpF||~oSnDjA`F`B~EdB|EjB|EnBzEtBxExBvE~BtEbCrEfCpElCnEpClEtCjEzChE~CfEbDdEhDbElD`EpD|DtDzDxDxD|DvDbErDfEpDjElDnEjDrEhDvEdDxEbD|E~C`F|CdFxChFtCjFrCnFnCrFjCtFhCxFdCzF`C~F~B`GzBdGvBfGrBjGnBlGlBnGhBpGdBtG`BvG|AxGxAzGtA|GpA~GlA`HhAbHdAbH`AdH|@fHx@hHt@hHp@jHl@jHh@lHd@lH`@nH\\nHXpHTpHPpHLpHHpHDpH@rHArHEpHIpHMpHQpHUpHYpH]nHa@nHe@lHi@lHm@jHq@jHu@hHy@hH}@fHaAdHeAbHiAbHmA`HqA~GuA|GyAzG}AxGaBvGeBtGiBpGmBnGoBlGsBjGwBfG{BdG_C`GaC~FeC|FiCxFkCtFoCrFsCnFuCjFyChF}CdF_D`FcD|EeDzEiDvEkDrEmDnEqDjEsDfEwDbEyD~D{DxD}DtDaEpDcElDeEhDgEbDiE~CkEzCmEvCoEpCqElCsEfCuEbCwE~ByExB{EtB}EnB}EjB_FdBaF`BaFzAcFtAeFpAeFjAgFfAgF`AgFz@iFv@iFp@kFj@kFf@kF`@kFZmFVmFPmFJmFFmF@mFAmFEmFKmFQmFUkF[kFa@kFe@kFk@iFq@iFu@iF{@gFaAgFeAeFkAeFqAcFuAaF{AaF_B_FeB}EiB}EoB{EsByEyBwE}BuEcCsEgCqEmCqEqCmEuCkE{CiE_DgEcDeEgDcEmDaEqD_EuD{DyDyD}DwDaEsDgEqDkEoDoEkDsEiDwEeDyEcD}E_DaF}CeFyCiFwCkFsCoFoCsFmCuFiCyFeC}FaC_G_CcG{BeGwBgGsBkGqBmGmBoGiBsGeBuGaBwG}AyGyA{GuA}GqA_HmAaHiAcHeAeHaAeH}@gHy@iHu@kHq@kHm@mHi@mHe@oHa@oH]qHYqHUqHQqHMsHIsHEsHAsH@{HDsHHsHLsHPqHTqHXqH\\qH`@oHd@oHh@mHl@mHp@kHt@kHx@iH|@gH`AeHdAeHhAcHlAaHpA_HtA}GxA{G|AyG`BwGdBuGhBsGlBoGpBmGrBkGvBgGzBeG~BcG`C_GdC}FhCyFlCuFnCsFrCoFvCmFxCiF|CeF~CaFbD}EdDyEhDwEjDsEnDoEpDkErDgEvDcExD}DzDyD~DuD`EqDbEmDdEiDfEcDhE_DjE{ClEuCnEqCpEmCrEgCtEcCvE}BxEyBzEsB|EoB|EiB~EeB`F_B`F{AbFuAdFqAdFkAfFeAfFaAhFq@bGokEhoE`MiGxkE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.457967739552, -107.81529484233), new google.maps.LatLng(39.594809225007, -107.60752777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RIFLE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'RIFLE CLASS E2<br />SFC-17999');
    

// RIVERSIDE-MARCH AFB CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cf~mEvmgkUueC`lG_aIagFnnDi}I`AxC`CvHdCtHhCpHlCnHrCjHvCfHzCdH~C`HbD|GfDzGjDvGnDrGrDnGvDjGzDfG~DbGbE~FfEzFjEvFnErFpEnFtEhFxEdFzE`F~E|EbFvEdFrEhFlEjFhEnFbEpF~DrFxDvFtDxFnDzFhD~FdD`G~CbGxCdGtCfGnChGhCjGbCjDzA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.910905555556, -117.39582222222), new google.maps.LatLng(33.983986111111, -117.302625));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RIVERSIDE-MARCH AFB CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE-MARCH AFB CLASS E3<br />SFC-17999');
    

// RIVERSIDE-MARCH AFB CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cnnmExrejUeCaBb_EycCdDfE`HtIzGzIvG`JpGfJlGlJfGpJ`GvJzF|JvF`KpFfKjFjKdFpK~EtKxEzKrE~KlEbLfEfL`EjLzDnLrDrLlDvLfDzL`D|LxC`MrCdMlCfMfCjM~BlMxBnMpBrMjBtMdBvM|AxMvAzMnA|MhA~M`A~Mz@`Nr@bNl@bNd@dN^dNVdNNdNHfN@fNAfNIfNOdNWdN]dNe@dNm@bNs@bN{@`NaA~MiA~MoA|MwAzM}AxMcBvMkBtMqBrMyBnM_ClMeCjMmCfMsCdMyC`MaD~LgDzLmDvLsDrLyDnLaEjLgEfLmEbLsE~KyEzK_FtKeFpK}EbL{gDyqCfDaHbD_H~CaHzCeHvCgHpCkHlCoHhCqHdCsH~BwHzByHvB{HrB_IlBaIhBcIbBeI~AgIzAiItAkIpAmIjAoIfAqI`AqI|@sIx@uIr@uIn@wIh@wIb@yI^yIXyIT{IN{IJ{ID{I@{IA{IE{IK{IO{IU{IYyI_@yIe@yIi@wIo@wIs@uIy@uI}@sIcAqIgAqIkAoIqAmIuAkI{AiI_BgIeBeIiBcImBaIsB_IwB{H{ByHaCwHeCsHiCqHmCoHqCkHwCgH{CeH_DaHcD}GgD{GkDwGoDsGsDoGwDkG{DgG_EcGcE_GgE{FkEwFmEsFqEoFuEkFyEeF{EaF_F}EcFwEeFsE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.763711445256, -117.34177777778), new google.maps.LatLng(33.830944444444, -117.15775));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RIVERSIDE-MARCH AFB CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE-MARCH AFB CLASS E3<br />SFC-17999');
    

// RIVERSIDE MUNICIPAL CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c_dnE|{flUoi@hdCu}Ig`Djf@wzBvAzBbCvDdCtDfCrDjCnDlClDnChDpCfDtCbDvC~CxC|CzCxC|CvC~CrC`DnCdDjCfDhChDdCjD`CjD|BlDxBnDvBpDrBrDnBtDjBvDfBvDbBxD~AzDzAzDvA|DrA~DnA~DjA`EfA`EbAbE~@bEz@dEv@dEr@dEn@fEj@fEf@fE`@hE\\hEXhEThEPhELhEHhEDhE>hEAhEEhEIhEMhEQhEUhEYhE_@fEc@fEg@zFq@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.9405, -117.53508333333), new google.maps.LatLng(34.003416666667, -117.48947222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RIVERSIDE MUNICIPAL CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE MUNICIPAL CLASS E4<br />SFC-17999');
    

// RIVERSIDE MUNICIPAL CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iqinEbklkUoF|Ar}@w_JzCnGzDfI~DbIbE~HhExHlEtHpEpHtElHzEhH~EbHbF~GfFxGjFtGnFnGrFjGvFdGzF`G~FzFbGtFdGpFhGjFlGdFnG~ErGxEvGrExGlE|GfE~G`EbHzDdHtDfHnDhHhDlHbDnH|CpHtCrHnCtHhCvHbCxHzBzHtBpFxAyGxp@~~@n\\ui@ndCcD{F}B}D_C{DcCyDeCuDgCsDkCoDmCmDoCiDqCgDuCcDwCaDyC}C{CyC}CwC_DsCaDoCcDmCgDiCiDeCiDaCkD}BmD{BoDwBqDsBsDoBuDkBwDgBwDcByD_B{D{A{DwA}DsA_EoA_EkAaEgAaEcAcE_AcE{@eEw@eEs@eEo@gEk@gEg@gEc@iE_@iEYiEUiEQiEMiEIiEEiEAiE>iEDiEHiELiEPiETiEXiE\\gEb@gEf@gEj@eEn@eEr@eEv@cEz@cE~@aEbA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.89825, -117.40311111111), new google.maps.LatLng(33.970222222222, -117.32197222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RIVERSIDE MUNICIPAL CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERSIDE MUNICIPAL CLASS E4<br />SFC-17999');
    

// RIVERTON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{myeGpdquScoBpmKc}IovDhtBi`LcE}HyC_GwCcGsCgGoCiGmCmGiCqGeCsGaCwG}B{G{B}GwBaHsBcHoBeHkBiHgBkHcBmH_BoH{AsHwAuHsAwHoAyHkA{HgA}HcA}H_A_I{@aIw@cIs@cIo@eIk@gIg@gIc@gI_@iIYiIUkIQkIMkIIkIEkIAkI@uIDkIHkILkIPkITkIXiI\\iIb@gIf@gIj@gIn@eIr@cIv@cIz@aI~@_IbA}HfA}HjA{HnAyHrAwHvAuHzAsH~AoHbBmHfBkHjBiHnBeHrBcHvBaHzB}G|B{G`CwGdCuGhCqGlCmGnCkGrCgGvCcGxC_G|C{F`DwFbDsFfDoFhDkFlDgFnDcFrD_FtD{EvDwEzDqE|DmE~DiEbEeEdE_EfE{DhEuDlEqDnEkDpEgDrEaDtE}CvEwCxEsCzEmC|EgC~EcC~E}B`FwBbFsBdFmBdFgBfFaBhF}AhFwAjFqAjFkAlFeAlFaAxDk@xcFa`NxvMn`LisEr|LvA~IjAxHfAzHbA|H~@~Hz@`Iv@`Ir@bIn@dIj@dIf@fIb@fI\\hIXhIThIPhILjIHjIDjI@jIAjIEjIIjIMjIQhIUhIYhI]hIc@fIg@fIk@dIo@dIs@bIw@`I{@`I_A~HcA|HgAzHkAxHoAvHsAtHwArH{ApH_BnHcBlHgBjHkBhHoBdHsBbHwB~GyB|G}BzGaCvGeCrGiCpGkClGoChGsCfGuCbGyC~F}CzF_DvFcDrFgDnFiDjFmDfFoDbFqD~EuDzEwDvE{DrE}DlE_EhEcEdEeE~DgEzDiEvDkEpDoElDqEfDsEbDuE|CwExCyErC{ElC}EhC}EbC_F|BaFxBcFrBeFlBeFhBgFbBiF|AiFvAkFpAkFlAmFfAmF`AoFz@oFt@oFn@qFh@qFd@qF^qFXqFRcFL'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.964444444444, -108.61891666667), new google.maps.LatLng(43.135555555556, -108.28877777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'RIVERTON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'RIVERTON CLASS E2<br />SFC-17999');
    

// ROCK SPRINGS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ken}F|imzSjqFskrBtc^bsBkqFtkrBsc^csB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.494930555556, -109.3733), new google.maps.LatLng(41.693186111111, -108.76388611111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ROCK SPRINGS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'ROCK SPRINGS CLASS E2<br />SFC-17999');
    

// ROSWELL CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mnwjEfc_}R?Gf@kj@vBcj@hEui@xGai@fJgh@rLeg@|N_f@dQqd@jS}b@jUca@jWe_@dYc]zZyZl\\mXz]}Ub_@iSf`@qPda@wM~a@{Jrb@}G`c@_Ehc@}Ajc@>hc@~A~b@`Epb@~G|a@|Jda@xMf`@rPb_@jSx]|Ul\\lXzZzZbY`]hWd_@jUba@hSzb@dQnd@|N|e@rLbg@fJdh@vG~h@hEri@vB`j@f@fj@g@fj@wB`j@gEri@wG~h@eJdh@qLbg@}N|e@cQnd@iS|b@kUba@iWd_@cYb]yZzZm\\nXy]~Uc_@jSg`@rPea@zM}a@~Jqb@`H_c@`Eic@`Bkc@>ic@}Aac@}Dsb@}G_b@{Jea@wMg`@qPc_@iS{]}Um\\mX{ZyZeYa]kWe_@mUca@kS}b@eQqd@}N}e@sLeg@gJgh@yGai@iEui@yBcj@g@kj@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.21790376092, -104.62991792059), new google.maps.LatLng(33.384872895769, -104.43119474708));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ROSWELL CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'ROSWELL CLASS E2<br />SFC-17999');
    

// ROSWELL CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('imajEdhq}R{hKzcg@utU{yHblLuxj@tAzJlAlIpAjItAhIzAfI~AdIdBbIhB`IlB~HrB|HvBzHzBvH`CtHdCrHhCnHlClHrChHvCfHzCbH~C~GbD|GfDxGjDtGnDpGrDlGvDhGzDfG~DbGbE~FfExFjEtFnEpFpElFtEhFxEdFzE~E~EzEbFvEdFpEhFlEjFfEnFbEpF|DtFxDvFrDxFnD|FhD~FbD`G~CbGxCdGrCfGlChGhCjGbClG|BnGvBpGpBrGjBtGfBtG`BvGzAxGtAxGnAzGhAzGbA|G|@|Gv@~Gp@~Gj@~Gd@`H^`HX`HR`HL`HF`H@`HA`HG`HM`HS`HY`H_@~Ge@~Gk@~Gq@|Gw@|G}@zGcAzGiAxGoAxGuAvG{AtGaBtGgBrGmBpGsBhC{A'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.272055555556, -104.82913888889), new google.maps.LatLng(33.451194444444, -104.55447222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ROSWELL CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'ROSWELL CLASS E4<br />SFC-17999');
    

// SACRAMENTO INTERNATIONAL ARPT CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('evukFf_neVbG}hQvtJrGHlATpCRpCPpCNpCLpCJrCHrCFrCDrCBrC@rC>rC?rCArCCrCErCGrCIrCKrCMpCOpCQpCSpCUpCWnCYnC[nC]lC_@lCa@lCc@jCe@jCg@hCi@hCk@fCm@fCo@dCq@dCs@bCs@bCu@`Cw@~By@~B{@|B}@zB_AzBaAxBaAvBcAtBeAtBgArBiApBiAnBkAlBmAlBoAjBoAhBqAfBsAdBuAbBuA`BwA~AyA|AyAzA{AxA{AvA}AtA_BrA_BpAaBnAaBlAcBhAcBfAeBdAeBbAgB`AgB~@iBz@iBx@iBv@kBt@kBr@mBn@mBl@mBj@mBh@oBd@oBb@oB`@qB^qBZqBXqBVqBTqBPsBNsBLsBHsBFsBDsBBsB>sB?sBAsBEsBGsBIsBMsBOqBQqBSqBWqBYqB[qB_@oBa@oBc@oBe@oBi@mBk@mBm@mBo@kBs@kBu@iBw@iBy@iB{@gB_AgBaAeBcAeBeAcBgAcBiAaBkAaBoA_BqA_BsA}AuA{AwA{AyAyA{AyA}AwA_BuAaBuAcBsAeBqAgBoAiBoAkBm@mCDrFDpJJpJNpJTpJZnJ^nJd@nJh@lJn@lJr@jJx@hJ|@hJbAfJfAdJjAbJpAbJtA`JzA~I~AzIdBxIhBvIlBtIrBrIvBnIzBlI~BjIdCfIhCdIlC`IxEvMccB{@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.720694200879, -121.64643333333), new google.maps.LatLng(38.782597222222, -121.552375));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SACRAMENTO INTERNATIONAL ARPT CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'SACRAMENTO INTERNATIONAL ARPT CLASS E3<br />SFC-17999');
    

// SACRAMENTO INTERNATIONAL ARPT CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{vsjF~n|dV}FtgQycB{@~AeEzCwHtC{HpC_IlCaIhCeIdCgI~BkIzBmIvBoIpBsIlBuIhBwIbByI~A{IzA_JtAaJpAaJjAcJfAeJ`AgJ|@iJv@iJr@kJl@mJh@mJb@oJ^oJXoJTqJNqJJqJDqJ@qJAqJEqJKqJOqJUqJYoJ_@oJe@mJi@mJo@mJs@kJy@iJ}@iJaAgJgAeJkAcJqAaJuAaJgAoIrp@j@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.608627777778, -121.65004166667), new google.maps.LatLng(38.626044444444, -121.55626388889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SACRAMENTO INTERNATIONAL ARPT CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'SACRAMENTO INTERNATIONAL ARPT CLASS E3<br />SFC-17999');
    

// MCCLELLAN AFB CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w}mkFt`~cV?Gb@wh@jBqh@tDch@zFqg@bIwf@fKwe@hMqd@jOec@hQsa@bS{_@zT_^pV_\\`XyYnYoWvZaUz[qRz\\}Ov]gMl^mJ~^sGj_@wDr_@{At_@>r_@|Aj_@xD~^tGl^nJv]hMz\\~Oz[rRvZbUlYnW`XxYnV~[zT~]bSz_@fQpa@hObc@hMnd@fKte@`Irf@zFlg@tD`h@jBlh@b@th@c@th@kBlh@sD`h@{Flg@aItf@eKte@iMnd@iObc@gQpa@cSz_@{T~]oV~[_XxYmYpWuZbU{[rR{\\~Ow]hMm^pJ__@tGk_@xDs_@|Au_@>s_@yAk_@wD__@sGm^mJw]eM{\\}O{[qRwZaUoYoWaXyYqV_\\}T_^cS{_@iQsa@kOcc@kMod@gKwe@cIwf@}Fog@uDch@mBqh@c@wh@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.592708407857, -121.49625418827), new google.maps.LatLng(38.74284618357, -121.30485841796));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MCCLELLAN AFB CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MCCLELLAN AFB CLASS E2<br />SFC-17999');
    

// SALEM CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qkoqGz|vmV?G^}g@~Aug@~Cig@~Euf@|G}e@zI}d@vKwc@nMmb@fO}`@zPg_@lRk]zSk[fUgYnV_WrWsTrXcRpYqOhZ}L|ZeJl[mGv[sD~[wA`\\>~[zAv[tDj[nG|ZhJhZ~LnYrOrXdRrWtTnV~VfUfYzSj[lRj]zPd_@dOz`@nMjb@tKtc@zIzd@|Gxe@~Erf@~Cdg@~Arg@^xg@_@xg@_Brg@_Dfg@_Frf@}Gze@yIzd@uKvc@oMjb@eOz`@{Pd_@kRj]{Sj[gUhYoV`WsWtTsXdRoYrOgZ~L}ZhJk[pGw[vD_\\zAa\\>_\\wAw[sDm[mG}ZeJiZ}LqYqOuXcRsWsToV_WgUgY}Sk[mRk]{Pe_@gO{`@qMmb@wKwc@{I}d@_H}e@_Fuf@aDig@_Bug@_@}g@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.842788723274, -123.09624686473), new google.maps.LatLng(44.976099386133, -122.90875459506));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SALEM CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SALEM CLASS E2<br />SFC-17999');
    

// SALEM CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qrupG`lzmVh@_Id@aI`@aI\\aIXcITcIPcILcIHeIDeI>eIAeIEeIIeIMcIQcIUcIYcI]aIa@aIe@aIi@_Im@_Iq@}Hu@{Hy@{H}@yH_AwHcAuHgAsHkAqHoAoHsAmHwAkH{AiH_BgHaBeHeBcHiB_HmB}GqB{GsBwGwBuG{BqG_CoGaCkGeCiGiCeGkCaGoC}FqC{FuCwFwCsF{CoF}CkFaDgFcDcFgD_FiD{EkDwEoDsEqDmEsDiEwDeEyDaE{D{D}DwD_EsDaEmDcEiDgEeDiE_DkE{CkEuCmEqCoEkCqEeCsEaCuE{BwEwBwEqByEkB{EeBsEaBzwWgcSdxGnjT{sWf_S`@iG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.718055555556, -123.02166666667), new google.maps.LatLng(44.889916666667, -122.80986111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SALEM CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SALEM CLASS E4<br />SFC-17999');
    

// SALEM CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ilmqGrdmmVeChHuBxGqBzGmB~GiB`HgBbHcBfH_BhH{AjHwAlHsAnHoApHkArHgAtHeAvHaAxH}@zHy@zHu@|Hq@~Hm@~Hi@`Ie@`Ia@bI]bIYdIUdIQdIMdIIdIEfIAnI@fIDfIHdILdIPdITdIXdI\\bI`@bId@`Ih@`Il@~Hp@~Ht@|Hx@zH|@zH`AxHdAvHhAtHjArHnApHrAnHvAlHzAjH~AhHbBfHfBbHhB`HlB~GpBzGtBxGvBtGzBrG~BnGbClGdChGhCdGlCbGnC~FrCzFtCvFxCrFzCnF~CjF`DfFdDbFfD~EhDzElDvEnDrEpDnEtDhEvDdExD`EzD|D~DvD`ErDbElDdEhDfEdDhE~CjEzClEtCnEnCpEjCrEdCrE`CtEzBvEtBxEpBxEjBzEdB|E`B|EzA~EtA~EnA`FjA`FdAbF~@bFx@bFr@dFl@dFh@dFb@dF\\fFVfFPfFJfFF~HByk^|nXqkJmzZ~s^qvX'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.908944444444, -123.227), new google.maps.LatLng(45.128055555556, -122.95258333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SALEM CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SALEM CLASS E4<br />SFC-17999');
    

// SAN CLEMENTE CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uxxhEdmfsUk~BvhAcyJqpN~tIgeEqBfKmAxGiAzGeAzGaA|G}@~Gy@~Gu@`Hq@`Hk@bHg@bHc@dH_@dH[fHWfHQfHMfHIfHEnHAfH@fHDfHHfHLfHPfHVfHZfH^dHb@dHf@bHj@bHp@`Ht@`Hx@~G|@~G`A|GdAzGhAzGlAxGpAvGvAtGzArG~ApGbBnGfBlGjBjGnBhGpBfGtBbGxB`G|B~F`CzFdCxFhCvFlCrFnCpFrClFvCjFzCfF|CbF`D`FdD|EfDxEjDtElDrEpDnEtDjEvDfEzDbE|D~D~DzDbEvDdErDfEnDdElC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.06395, -118.67008333333), new google.maps.LatLng(33.144838888889, -118.55874722222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SAN CLEMENTE CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SAN CLEMENTE CLASS E4<br />SFC-17999');
    

// SAN CLEMENTE CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}n{hElbnrUcBnC_hF_vPtpIsbEphF|vPyEHyFJyFNwFTwFZwF^wFd@uFh@uFn@uFt@sFx@sF~@qFbAqFhAoFlAoFrAmFvAkF|AkF`BiFfBgFjBeFnBcFtBcFxBaF|B_FbC}EfC{EjCyEpCwEtCsExCqE|CoEbDmEfDkEjDgEnDeErDcEvD_EzD}D~DyDbEwDfEsDjEqDnEmDrEkDtEgDxEeD|EaD`F'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.024136111111, -118.53440277778), new google.maps.LatLng(33.115538888889, -118.412375));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SAN CLEMENTE CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SAN CLEMENTE CLASS E4<br />SFC-17999');
    

// SAN DIEGO MONTGOMERY FIELD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}ojgE|rriUiDxA~`CeiIlsIbzDm{Bb|HyBqFyAmD{AkD}AiDaBgDcBeDeBcDgBaDkB_DmB}CoB{CqByCsBuCuBsCwBqCyBoC}BkC_CiCaCgCcCcCeCaCgC_CgC{BiCyBkCuBmCsBoCoBqCmBsCiBsCgBuCcBwCaByC}AyCyA{CwA}CsA}CqA_DmA_DiAaDgAaDcAcD_AcD{@eDy@eDu@gDq@gDo@gDk@iDg@iDc@iDa@iD]kDYkDUkDQkDOkDKkDGkDCkD?kD>kDBkDFkDJkDNkDPkDTkDXiD\\iD^iDb@iDf@gDj@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.752605555556, -117.11055833333), new google.maps.LatLng(32.827883333333, -117.02986111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SAN DIEGO MONTGOMERY FIELD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SAN DIEGO MONTGOMERY FIELD CLASS E4<br />SFC-17999');
    

// SAN DIEGO, NORTH ISLAND NAS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('msnfE|k|iUyI}AhdFuvMvF|BpMbFnMlFjMvFfM`GbMhG~LrGzL|GvLdHrLnHlLvHhL`IdLhI~KpIzKzItKbJnKjJjKrJdKzJ~JbKxJjKrJrKlJzKfJbL`JhLzIpLtIvLlI~LfIdM~HlMxHrMrHxMjH~MbHdN|GjNtGpNlGvNfG|N~F`OvFfOnFlOfFpO~EtOvEzOnE~OfEbP~DfPvDjPnDnPfDrPdDbQm_Lt~C_AqEqAuGuAsGyAqG}AoGaBmGeBkGiBiGmBgGqBeGuBcGyB_G}B}FaC{FeCwFiCuFkCqFoCoFsCkFwCiFyCeF}CcFaD_FcD{EgDyEkDuEmDqEqDmEsDiEwDgEyDcE}D_E_E{DaEwDeEsDgEoDiEiDmEeDoEaDqE}CsEyCuEuCwEoCyEkC}EgC}EcC_F}BaFyBcFuBeFoBgFkBiFeBiFaBkF}AmFwAmFsAoFmAqFiAqFcAsF_A'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.564388888889, -117.18872222222), new google.maps.LatLng(32.685972222222, -117.05636111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SAN DIEGO, NORTH ISLAND NAS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SAN DIEGO, NORTH ISLAND NAS CLASS E4<br />SFC-17999');
    

// SAN JOSE INTERNATIONAL AIRPORT CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('chxbFrisfVaGsD`|BufCrOyKtKqGtJsB~K_BvIJ~PbAdNc@pMqAnIaDdMmFnKiFfQuGvLgD`@Ox_EltGe~FltG}B{KiBqImBoIsBmIwBiI{BgI_CeIeCaIiC_ImC{HqCyHwCuH{CqH_DmHcDkHgDgHkDcHoD_HsD{GwDwG{DsG_EoGcEkGgEgGiEcGmE}FqEyFuEuFwEoF{EkF_FgFaFaFeF}EgFwEkFqEmFmEqFgEsFcEwF}DyFwD{FqD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.242277777778, -121.89320555556), new google.maps.LatLng(37.322441666667, -121.80441388889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SAN JOSE INTERNATIONAL AIRPORT CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'SAN JOSE INTERNATIONAL AIRPORT CLASS E3<br />SFC-17999');
    

// SAN LUIS OBISPO CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_|cvEbwz_Ve_DxuGsrHyeGhaDyyGtDtJ`CbGdC~FhC|FlCxFnCvFrCrFvCpFzClF|ChF`DfFdDbFfD~EjDzElDvEpDrErDpEvDlExDhE|DdE~D`EbEzDdEvDfErDjEnDlEjDnEfDpE`DrE|CtExCxEtCzEnC|EjC~EdC`F`CbF|BbFvBdFrBfFlBhFhBjFbBjF~AlFxAnFtAnFnApFjApFdArF~@hGdA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.250725, -120.77295277778), new google.maps.LatLng(35.325586111111, -120.68564444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SAN LUIS OBISPO CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SAN LUIS OBISPO CLASS E4<br />SFC-17999');
    

// SAN NICOLAS ISLAND NOLF CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('afxiEvjrwUeIi@nqI__Nv~Hz}HejIltMiC_JiBkGmBiGqBeGuBcGyBaG}B_GaC{FeCyFgCuFkCsFoCqFsCmFwCiFyCgF}CcFaDaFcD}EgDyEkDuEmDsEqDoEsDkEwDgEyDcE}D_E_E{DaEwDeEsDgEoDiEkDkEgDoEcDqE}CsEyCuEuCwEqCyEmC{EgC}EcC_F_CaFyBcFuBeFoBgFkBiFgBiFaBkF}AmFwAmFsAoFmAqFiAqFcAsF_A'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.121111111111, -119.42380555556), new google.maps.LatLng(33.226444444444, -119.29766666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SAN NICOLAS ISLAND NOLF CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SAN NICOLAS ISLAND NOLF CLASS E4<br />SFC-17999');
    

// SANTA BARBARA CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k`}pEvu_{UvAn{DovJxF}A{dEzJfDpGrBrGlBrGfBtG`BvGzAxGtAxGnAzGhAzGbA|G|@|Gv@~Gp@~Gj@~Gd@`H^`HX`HR`HL`HF`H@`HA`HG`HM`HS`H[~Ga@~Gg@~Gm@~Gs@|Gy@|G_AzGeAzGkAxGqAvGwAvG}AtGcBrGiBrGmBpGsB|EcB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.395938888889, -119.96594722222), new google.maps.LatLng(34.456494444444, -119.93427777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SANTA BARBARA CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA BARBARA CLASS E3<br />SFC-17999');
    

// SCOTTSBLUFF CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}wb_G`phwR?Ih@qr@~Bir@tEyq@hHaq@zJap@lMyn@zOkm@fRuk@pTwi@vVsg@xXie@vZyb@n\\c`@d^g]t_@gZ~`@cWdb@{Sdc@qP`d@cMtd@sIbe@aFle@oBne@@le@rBbe@dFtd@vI~c@fMdc@rPdb@~S~`@dWr_@hZb^h]n\\b`@tZxb@vXhe@tVpg@nTti@fRpk@zOfm@jMvn@zJ|o@hH|p@tEtq@~Bdr@h@lr@i@lr@_Cdr@sEtq@gH|p@{J|o@kMvn@yOhm@eRrk@oTti@uVrg@wXhe@uZxb@m\\b`@c^h]s_@hZ_a@fWeb@~Sec@tP_d@fMud@vIce@fFme@rBoe@@me@oBce@aFud@sIad@cMec@qPeb@{Saa@cWu_@gZe^g]q\\a`@wZwb@yXie@wVsg@qTwi@gRuk@{Okm@mMyn@}Jap@iHaq@uEyq@_Cir@i@qr@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.785661733695, -103.71380473736), new google.maps.LatLng(41.962392459799, -103.47747486833));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SCOTTSBLUFF CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SCOTTSBLUFF CLASS E2<br />SFC-17999');
    

// SHERIDAN CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wnlnGlcqkSews@rj^oFdCqFdCsF~BuFxBwFrBwFlByFfB{F`B{FzA}FtA}FnA_GfA_G`AaGz@aGt@aGn@{Fl@{z\\`mg@gmD}|FciA`hAeaLshYjsAcrAmpC{jMdrf@owWvAsCdDyGhDuGjDqGnDmGrDiGtDeGxD_GzD{F~DwFbEqFdEmFhEgFjEcFlE}EpEyErEsEtEmExEiEzEcE|E}D~EyD`FsDdFmDfFgDhFaDjF{ClFwCnFsC|tGwdDxk[_n`@hlFljK~fGw{ChmJttd@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(44.469722222222, -107.29202777778), new google.maps.LatLng(45.030638888889, -106.68544444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SHERIDAN CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SHERIDAN CLASS E2<br />SFC-17999');
    

// SIDNEY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wywyF~``sRxCJdtE_cKlnHhbHw~E`vKxBjJ|A~GxA`HtAbHpAdHlAfHhAhHdAjH`AlH|@lHx@nHt@pHp@pHl@rHh@rHd@tH`@tH\\vHXvHTvHPxHLxHHxHDxH@xHAxHExHIxHMxHQxHUvHYvH]vHa@tHe@tHi@rHm@rHq@pHu@pHy@nH}@lHaAlHeAjHiAhHmAfHqAdHuAbHyA`H}A~GaB|GeBzGiBxGmBtGoBrGsBpGwBlG{BjG_ChGaCdGeC`GiC~FkCzFoCxFsCtFuCpFyClF{CjF_DfFcDbFeD~EiDzEkDvEmDrEqDnEsDjEwDfEyDbE{D~D}DxDaEtDcEpDeElDgEfDiEbDkE~CmExCoEtCqEnCsEjCuEfCwE`CyE|B{EvB{EpB}ElB_FfBaFbBaF|AcFvAcFrAeFlAgFhAgFbAgF|@iFv@iFr@kFl@kFf@kFb@kF\\kFVmFPmFLmFFmF@mFAmFEmFKmFQkFWkF[kFa@kFg@kFm@iFq@iFw@gF}@gFaAgFgAeFmAeFqAcFwAaF}AaFaB_FgB}EmB}EqB{EwByE{BwEaCeB{Ak_Gn~Fy`FukKpwFuvFy@qKi@uHe@uHa@wH]wHYwHUyHQyHMyHIyHEyHAyH@aIDyHHyHLyHPyHTyHXwH\\wH`@wHd@uHh@uHl@sHp@sHt@qHx@oH|@oH`AmHdAkHhAiHlAgHpAeHtAcHxAaH|A_H`B}GdB{GhByGlBuGnBsGrBqGvBmGzBkG~BgG`CeGdCaGhC_GjC{FnCyFrCuFtCqFxCmF|CkF~CgFbDcFdD_FhD{EjDwElDsEpDoErDkEvDgExDcEzD}D|DyD`EuDbEqDdEkDfEgDhEcDjE}ClEyCnEuCpEoCrEkCtEeCvEaCxE{BzEwBzEqB|EmB~EgB`FaB`F}AbFwAbFqAdFmAdFgAfFaAfF}@hFw@hFq@hFm@jFg@jFa@jF[jFWjFQlFKlFElFAlF@lFFlFLjFPjFVjF\\jF`@jFf@hFl@hFr@hFv@fF|@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(41.003722222222, -103.10769444444), new google.maps.LatLng(41.207916666667, -102.83494444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SIDNEY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SIDNEY CLASS E2<br />SFC-17999');
    

// SOMERSET CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('anylFlsk{U?G`@_g@fByf@lDmf@pF{e@rHae@tJcd@tL_c@rNua@nPe`@fRo^|Sw\\nUyZ|VuXhXoVnYeTrZwQp[gOj\\sL`]_Jp]gG|]oDd^wAf^>d^xA|]pDp]hG`]`Jj\\tLp[fOpZxQnYdTfXnV|VtXlUvZzSt\\fRn^lPb`@rNra@tL|b@tJ`d@rH~d@pFve@jDjf@fBvf@`@|f@a@|f@gBvf@kDjf@oFxe@sH~d@uJ`d@uL|b@qNra@mPb`@eRn^{Sv\\mUxZ}VvXgXnVoYdTqZxQq[hOk\\tLa]`Jq]hG}]pDe^xAg^>e^uA}]oDq]gGa]}Ik\\sLq[eOsZwQoYcTiXoV}VuXoUwZ}Su\\gRo^oPe`@sNsa@uL_c@uJcd@uHae@qF{e@mDmf@gByf@a@_g@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.822158738303, -120.08729002602), new google.maps.LatLng(38.965618157736, -119.90382251991));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SOMERSET CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SOMERSET CLASS E2<br />SFC-17999');
    

// SOUTH LAKE TAHOE CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('u~xlFhfp{U\\fDwyQw}Arl@w|MnhR~_BiCtGeClGaCnG}BrGyBtGuBvGqBzGmB|GiB~GeB`HaBbH}AfHyAhHuAjHqAlHmAnHiAnHeApHaArH}@tHy@tHu@vHo@xHk@xHg@zHc@zH_@zH[|HW|HQ|HM~HI~HEfIA~H@~HD~HH~HL~HP|HV|HZ|H^zHb@zHf@zHj@xHp@xHt@vHx@tH|@tH'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.953333333333, -120.01994444444), new google.maps.LatLng(39.059444444444, -119.92833333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SOUTH LAKE TAHOE CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SOUTH LAKE TAHOE CLASS E4<br />SFC-17999');
    

// SPOKANE FAIRCHILD AFB CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mceaHt~ulUuBuGxByJzBaKvBeKpBgKlBkKhBmKbBqK~AsKzAuKtAwKpAyKjA{KfA}K`A_L|@aLv@cLr@eLl@eLh@gLb@gL^iLXiLTiLNkLJkLDkL@kLAkL?wI~cRbj^kxPzuVbK~h@wsMphHw{Cs{OxGv@~Gt@~Gl@~Gf@~G^`HV`HN`HH`H@`HC`HK`HQ`HY~Ga@~Gi@~Go@~Gw@|G_A|GeAzGmAzGuAxG{AxGcBvGkBtGqBtGyBrG_CpGgCnGoCnGuClG}CjGcDhGiDfGqDdGwD`G_E~FeE|FkEzFsExFyEtF_FrFeFpFkFlFqFjFwFfF}FdFcG`FiG|EoGzEuGvE{GtEaHpEgHlEkHhEqHdEuHbE{H~D_IzDeIvDiIrDoInDsIjDwIfD{IbDaJ~CeJxCiJtCmJpCqJlCsJhCwJbC{J~B_KzBaKvBeKpBgKlBkKhBmKbBqK~AsKzAuKtAwKpAyKjA{KfA}K`A_L|@aLv@cLr@eLl@eLh@gLb@gL^iLXiLTiLNkLJkLDkL@kLAkLEkLKkLOkLUiLYiL_@iLc@gLi@gLm@eLs@cLw@cL}@aLaA_LgA}KkA{KqAyKuAwK{AuK_BsKcBqKiBmKmBkKqBgKwBeK{BaK_C_KeC{JiCwJmCsJqCoJuCmJ{CiJ'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.438552777778, -117.86620277778), new google.maps.LatLng(47.627802777778, -117.52993055556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SPOKANE FAIRCHILD AFB CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'SPOKANE FAIRCHILD AFB CLASS E3<br />SFC-17999');
    

// SPOKANE FELTS FIELD CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mbmbHzpakU?G^aj@~Ayi@~Cki@~Ewh@|G}g@zI}f@vKue@nMgd@fOub@zP{`@lR}^zS{\\fUsZnVgXrWwUrXcSnYmPhZsM|ZyJj[{Gv[}D|[}A~[>|[~Av[~Dj[|GzZzJfZvMnYnPrXdSrWxUlVfXdUrZzSz\\jR|^zPz`@dOrb@nMdd@tKre@zIxf@|Gzg@~Eth@~Chi@~Ati@^|i@_@|i@_Bti@_Dhi@_Fth@}Gzg@yIxf@uKre@oMdd@eOrb@yPz`@kR|^{Sz\\eUrZmVhXqWxUsXdSoYnPgZvM{ZzJk[~Gw[~D}[`B_\\@}[{Aw[{Dk[{G}ZwJiZsMqYmPsXcSsWwUoVgXgUsZ{S{\\mR}^{P{`@gOub@oMgd@wKue@{I{f@_H}g@_Fwh@aDki@_Byi@_@aj@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.616432297275, -117.42110388499), new google.maps.LatLng(47.749678038278, -117.22389764507));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SPOKANE FELTS FIELD CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SPOKANE FELTS FIELD CLASS E2<br />SFC-17999');
    

// ST. GEORGE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uioaFn~xsT?Gb@yg@jBsg@tDgg@zFsf@bI{e@fK{d@hMuc@jOkb@hQ{`@bSe_@zTi]pVk[`XgYnY_WvZsTz[cRz\\qOv]}Ll^eJ~^mGl_@sDr_@yAv_@>r_@zAj_@tD~^nGl^fJv]|Lz\\rOz[dRvZrTlY~V`XfYnVj[zTh]bSb_@fQx`@hOhb@hMtc@fKxd@`Ixe@zFpf@tDdg@jBpg@b@vg@c@vg@kBpg@sDdg@{Fpf@aIxe@gKxd@iMtc@iOhb@gQx`@cSd_@{Th]oVj[aXfYmY~VwZrT{[dR{\\rOw]~Lm^fJ__@nGk_@tDs_@zAw_@>s_@wAm_@sD__@mGm^eJw]{L}\\qO}[cRwZqToY}VaXeYqVi[}Ti]eSe_@iQ{`@kOkb@kMuc@gK{d@cI{e@}Fsf@uDgg@mBsg@c@yg@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.961298674473, -113.6038903488), new google.maps.LatLng(37.111478152746, -113.41666667186));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ST. GEORGE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'ST. GEORGE CLASS E2<br />SFC-17999');
    

// TACOMA NARROWS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g_b_H`ubkVKwGtD|FbFzHdFtHhFnHlFhHpFbHtF|GvFtGzFnG|FhG`GbGdGzFfGtFhGlFlGfFnG~ErGxEtGpEvGjExGbEzG|D~GtD`HlDbHdDdH~CfHvCbIlEyXjkG{oGo~@pDaK~B{GzB}GvBaHrBeHpBgHlBkHhBmHdBoH`BsH~AuHzAwHvAyHrA{HnA}HjA_IfAaIbAcI~@eI|@gIx@iIt@iIp@kIl@mIh@mId@oI`@oI\\qIXqITqIPsILsIHsIDsI>sIAsIEsIIsIMsI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.165611111111, -122.64480555556), new google.maps.LatLng(47.213416666667, -122.56980555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TACOMA NARROWS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'TACOMA NARROWS CLASS E4<br />SFC-17999');
    

// TACOMA NARROWS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kh{_HpgjkVr@|H{xAiOrl@kbPzwAbOuDfLwB`HuBdHqBfHmBjHiBlHeBpHcBrH_BtH{AvHwAzHsA|HoA~HkA`IgAbIeAdIaAfI}@fIy@hIu@jIq@lIm@lIi@nIe@nIa@pI]pIYpIUrIQrIMrIIrIE|I?tI@tIDtIHrILrIPrITrIXpI\\pI`@pId@nIh@nIl@lIp@lIt@jIx@hI|@fI`AfIdAdIfAbI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.323375, -122.61160277778), new google.maps.LatLng(47.344902777778, -122.52140555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TACOMA NARROWS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'TACOMA NARROWS CLASS E4<br />SFC-17999');
    

// THERMAL CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w_tlElt~cU?E^ub@`Bob@dDcb@dFsa@dH}`@dJa`@`La_@|M{]tOq\\jQc[|RoYlTwWzU}UbW}ShX{QhYuOfZoM`[eKt[yHd\\kFp\\}Cv\\mAx\\>v\\nAp\\|Cd\\lFt[xH~ZdKfZnMhYvOhXzQbW|SxU|UlTvW|RnYjQ`[tOp\\zMz]`L~^bJ``@dHz`@dFpa@dD`b@bBlb@^rb@_@rb@aBlb@cDbb@eFpa@eHz`@cJ``@aL`_@{Mz]sOp\\iQb[}RnYmTvWyU|UcW|SgXzQiYvOgZnM_[dKu[xHe\\lFq\\~Cw\\nAy\\>w\\mAq\\{Ce\\kFu[wHa[cKgZmMkYuOiX{QcW}S{U{UmTwW_SoYkQc[uOq\\}M{]aLa_@eJa`@eH}`@eFsa@eDcb@cBob@_@ub@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.557934759556, -116.24261464747), new google.maps.LatLng(33.694842261126, -116.07905330647));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'THERMAL CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'THERMAL CLASS E2<br />SFC-17999');
    

// TONOPAH CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y`cgFhnrhU|LnBnfDw~KtrJdnFegDb`L|GjI|ItKvI|KrIdLlIlLfIrL`IzLxHbMrHhMlHnMfHvM`H|MxGbNrGhNlGnNdGtN~FzNvF`OnFdOhFjO`FnOzEtOrExOjE~ObEbP|DfPtDjPlDnPdDrP|CvPtCxPlC|PdC~P|BbQtBdQlBhQdBjQ|AlQtAnQlApQdArQ|@rQt@tQj@tQb@vQZvQRxQJxQBxQCxQKxQSxQ[vQc@vQk@tQs@tQ}@rQeArQmApQuAnQ}AlQeBjQmBhQuBdQ}BbQeC`QmC|PuCxP}CvPeDrPmDnPuDjP{DfPcEbPkE~OsExOyEtOaFpOiFjOoFdOwF`O}FzNeGtNkGnNsGhNyGbNaH|MgHvMmHnMsHhMyHbM_IzLgItLmIlLqIdLwI|K}IvKcJnKiJfKmJ~JsJvJyJlJ}JdJcK|IgKtIkKjIqKbIuKzHyKpH}KhHaL~GeLtGiLlGmLbGqLxFsLnFwLfFyL|E}LrE_MhEcM~DeMtDgMjDiM`DkMvCmMlCoM`CqMvBsMlBuMbBuMxAwMnAyMbAyMx@yMn@{Md@{MX{MN{MD{MA{MM{MW{Ma@{Mm@yMw@yMaAwMkAwMuAuMaBsMkBsMuBqM_CoMiCmMsCkM_DiMiDeMsDcM}DaMgE}LqE{L{EwLeFuLmFqLwFmLaGiLkGeLsGaL}G}KgHyKoHuKyHqKaImKkIgKsIcK}I_KeJyJmJuJuJoJ}JiJeKeJmK_JuKyI}KsIeLmImLgIsLaI{L{HcMuHiMoHoMgHwMaH}M{GcNsGiNmGoNgGuN_G{NyFaOqFgOiFkOcFqO{EwOsE{OmE_PeEeP}DiPuDmPmDqPeDuP}CwPuC{PoC_QeCaOmhGrJqMmoOphGwJ~A_OlBkQtBgQ|BeQdCaQlC_QtC{P|CyPdDuPlDqPtDmP|DiPdEePjE_PrE{OzEwObFqOhFmOpFgOvFaO~F{NdGuNlGqNrGiNzGcN`H}MfHwMnHqMtHiMzHcM`I{LfIuLlImLrIeLxI}K~IuKbJmKhJeKnJ}JtJuJxJmJ~JeJbK}IfKsIlKkIpKaItKyHxKoH|KgH`L}GdLuGhLkGlLaGpLwFtLoFvLeFzL{E|LqE`MgEbM}DdMsDfMiDjM_DlMuCnMkCpM_CpMuBrMkBtMaBvMwAvMkAxMaAxMw@xMm@zMa@zMWzMMzMCzMDzMNzMXzMb@xMn@xMx@xMbAvMlAvMxAtMbBrMlBpMvB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.923417738871, -117.25979525811), new google.maps.LatLng(38.236444444444, -116.85169444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TONOPAH CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'TONOPAH CLASS E2<br />SFC-17999');
    

// TRINIDAD CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wswbF|oc|R_uRzcAen@gdTlrUinAdEuFlDuEnDqErDmEtDiEvDeEzDaE|D}D`EyDbEsDdEoDfEkDhEgDlEcDnE}CpEyCrEuCtEoCvEkCxEgCzEaC|E}B~EwB~EsB`FmBbFiBdFcBdF_BfFyAhFuAhFoAjFkAjFeAlF_AlF{@nFu@nFq@nFk@pFe@pFa@pF[pFUpFQrFKrFErFArF@rFFrFJpFPpFVpFZpF`@pFf@nFj@nFp@nFt@lFz@lF`AjFdAjFjAhFnAhFtAfFzAdF~AdFdBbFhB`FnB~ErB~ExB|E|BzE`CxEfCvEjCtEpCrEtCpExCnE|ClEbDhEfDfEjDdEnDbErD~DxD|D|DzD`EvDdEtDhErDlEnDpElDtEhDxEfDzEbD~E~CbF|CfFxChFvClFrCpFnCrFjCvFhCxFdC|F`C~F|BbGxBdGvBfGrBjGnBlGjBnGfBpGbBtG~AvGzAxGvAzGrA|GnA~GjA~GfA`HbAbH~@dHz@dHv@fHr@hHn@hHj@jHf@jHb@lH\\lHXlHTnHPnHLnHHnHDnH@nHAnHEnHInHMnHQnHUnHYlH]lHc@lHg@jHk@jHo@hHs@hHw@fH{@dH_AdHcAbHgA`HkA~GoA~GsA|GwAzG{AxG_BvGcBtGgBpGkBnGoBlGsBjGwBhGyBdG}BbGaC~FeC|FiCxFkCvFoCrFsCpFuClFyChF}CfF_DbFcD~EgDzEiDxEmDtEoDpEsDlEuDhEwDdE{D`E}D|D_ExDcEtDeEnDgEjDiEfDmEbDoE|CqExCsEtCuEpCwEjCyEfC{E`C}E|B_FxB_FrBaFnBcFhBeFdBeF~AgFzAiFtAiFpAkFjAkFdAmF`AmFz@oFv@oFp@oFj@qFf@qF`@qFZqFVqFPsFJsFFsF@sFAsFEsFKqFQqFUqF[qFa@qFe@oFk@oFq@oFu@mF{@mF_AkFeAkFkAiFoAiFuAgFyAeF_BeFcBcFiBaFmB_FsB_FwB}E}B{EaCyEgCwEkCuEoCsEuCqEyCoE}CmEcDiEgDgEkDeEoDcEsDaEwD}D}D{DaEyDeEuDiEsDmEoDqEmDuEiDyEgD{EcD_FaDcF}CgFyCiFwCmFsCqFoCsFmCwFmBoE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.189969895239, -104.42761436033), new google.maps.LatLng(37.42625, -104.25238559744));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TRINIDAD CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'TRINIDAD CLASS E2<br />SFC-17999');
    

// TRUTH OR CONSEQUENCES CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oxgjE|ivmS?E^ob@`Bib@dD_b@dFoa@dHy`@dJ}_@`L}^|Mw]tOm\\jQ_[|RkYlTsWzUyUbW{ShXyQjYsOfZmM`[cKt[wHd\\iFp\\{Cv\\mAx\\>v\\nAp\\|Cd\\jFt[xH~ZbKfZlMhYtOhXxQbWzSxUxUlTrW|RjYjQ|ZtOl\\zMv]`Lz^bJz_@dHv`@dFla@dD|a@bBfb@^lb@_@lb@aBhb@cD|a@eFla@eHv`@cJz_@aLz^{Mv]sOl\\iQ~Z}RjYmTtWyUxUcWzSgXxQiYtOgZlM_[bKu[xHe\\jFq\\|Cw\\nAy\\>w\\mAq\\{Ce\\iFu[wHa[aKgZkMkYsOiXwQcWyS{UyUoTsW_SkYkQ}ZuOm\\}Mw]aL}^eJ}_@eHy`@eFma@eD_b@cBib@_@ob@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(33.167652669498, -107.35224939701), new google.maps.LatLng(33.30456879997, -107.18941855162));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TRUTH OR CONSEQUENCES CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'TRUTH OR CONSEQUENCES CLASS E2<br />SFC-17999');
    

// DAVIS-MONTHAN AFB CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qkzbEztpcTmB{HsBwHwBuH{BsH_CqHeCmHiCkHmCgHqCeHwCaH{C_H_D{GcDyGgDuGkDqGoDmGsDkGwDgG{DcG_E_GcE{FgEwFkEsFmEoFqEiFuEeFyEaF{E}E_FwEaFsEeFoEiFiEkFeEoFaEqF{DsFwDwFqDyFkD{FgD_GaDaG}CcGwCeGqCgGmC_KeExrA{wA`qGldJmdA|qA_DwM'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.077136111111, -110.84875277778), new google.maps.LatLng(32.134411111111, -110.77827777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DAVIS-MONTHAN AFB CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'DAVIS-MONTHAN AFB CLASS E3<br />SFC-17999');
    

// DAVIS-MONTHAN AFB CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('o{pcE`~hdTwnBjmBmpFuqIndBicB~BnJlBzHrBxHvBtHzBrH`CpHdCnHhCjHlChHrCdHvCbHzC~G~CzGbDxGfDtGjDpGnDlGrDjGvDfGzDbG~D~FbEzFfEvFjErFnEnFpEhFtEdFxE`FzE|E~EvEbFrEdFnEhFhEjFdEnF~DpFzDtFtDvFpDxFjDzFfD~F`DpGfD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.204244444444, -110.98839722222), new google.maps.LatLng(32.260769444444, -110.91814444444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'DAVIS-MONTHAN AFB CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'DAVIS-MONTHAN AFB CLASS E3<br />SFC-17999');
    

// TUCSON INTERNATIONAL AIRPORT CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wlwbEjaocTfmGpqHm}@~jAaBeF_CqHeCmHiCkHmCgHqCeHwCaH{C_H_D{GcDyGgDuGkDqGoDmGsDiGwDgG{DcG_E_GcE{FgEwFkEsFmEoFqEiFuEeFyEaF{E}E_FwEcFsEeFoEiFiEkFeEoFaEqF{DsFwDwFqDyFkD{FgD_GaDaG}CcGwCeGqCgGmCaKaE`_A}lA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.030636111111, -110.89936666667), new google.maps.LatLng(32.084136111111, -110.83814166667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TUCSON INTERNATIONAL AIRPORT CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON INTERNATIONAL AIRPORT CLASS E3<br />SFC-17999');
    

// TUCSON INTERNATIONAL AIRPORT CLASS E3

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{drbE`}mdT~cBvbCgtI|gJyO_UuUpvCu~PmvBbGou@a}D~nE{TcRmM_LgMgLaMqLyL{LsLcMmLmMeLuM_L}MwKgNoKoNiKwNaK_OyJgOqJoOiJwOaJ}OyIePqIkPiIsPaIyPwH_QkD{HzlKssLv@jDdB~HhB|HlBzHrBxHvBtHzBrH`CpHdClHhCjHlChHrCdHvC`HzC~G~CzGbDxGfDtGjDpGnDlGrDhGvDfGzDbG~D~FbEzFfEvFjErFnElFpEhFtEdFxE`FzE|E~EvEbFrEdFnEhFhEjFdEnF~DpFzDrFtDvFpDxFjDzFfD~F`D`GzCbGvCdGpCfGjChGfCjG`ClGzBnGtBpGnBrGjBtGdBtG~AvGxAxGrAxGlAzGfAzG`A|Gz@|Gv@~Gp@~Gj@~Gd@`H^`HX`HR`HL`HF`H@`HA`HG`HM`HS`HY`H_@~Ge@~Gk@~Gq@|Gw@|G}@zGcAzGiAxGoAxGuAvGyAtG_BrGeBrGkBpGqBnGwBlG{BjGaChGgCfGmCdGqCbGwC`G}C|FaDzFgDxFmDvFqDrFwDpF{DlFaEjFeEhFiEdFoE`FsE~EwEzE}ExEaFtEeFpEiFlEoFjEsFfEwFbE{F~D_GzDcGvDgGrDiGnDmGjDqGfDuGtCsF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.030858333333, -111.10118055556), new google.maps.LatLng(32.258575, -110.97395277778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TUCSON INTERNATIONAL AIRPORT CLASS E3';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON INTERNATIONAL AIRPORT CLASS E3<br />SFC-17999');
    

// TUCUMCARI CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uedvEzugwRoxBc_BfbFqiLt]fWpqKigBn\\pgDpGpBdF`BbFfB`FjB`FpB~EtB|ExBzE~BxEbCvEfCtElCrEpCpEtCnExClE~ChEbDfEfDdEjDbEnD`ErD|DvDzDzDxD~DtDbErDfEnDjElDnEhDrEfDvEbDxE`D|E|C`FxCbFvCfFrCjFnClFlCpFhCrFdCvF`CxF|B|FzB~FvB`GrBbGnBfGjBhGfBjGbBlG~AnGzApGvArGrAtGnAvGjAxGfAzGbAzG~@|Gz@~Gv@~Gr@`Hn@`Hj@bHf@bHb@dH\\dHXdHTfHPfHLfHHfHDfH@fHAfHEfHIfHMfHQfHUfHYdH]dHc@dHg@bHk@bHo@`Hs@`Hw@~G{@~G_A|GcAzGgAzGkAxGoAvGsAtGwArG{ApG_BnGcBlGgBjGkBhGoBfGsBbGwB`G{B~F}B|FaCxFeCvFiCrFkCpFoClFsCjFwCfFyCdF}C`FaD|EcDxEgDvEiDrEmDnEoDjEsDfEuDbEwD~D{DzD}DvDaErDcEnDeEjDgEfDiEbDmE~CoExCqEtCsEpCuElCwEfCyEbC{E~B}ExB_FtB_FpBaFjBcFfBeF`BeF|AgFvAiFrAiFlAkFhAkFbAmF~@mFx@oFt@oFn@oFj@qFd@qF`@qFZqFTsFPsFJsFFsF@sFAsFEsFKsFOqFUqF[qF_@qFe@qFi@oFo@oFs@mFy@mF_AmFcAkFiAiFmAiFsAgFwAgF}AeFaBcFgBaFkBaFoB_FuB}EyB{E_CyEcCwEgCuEkCsEqCqEuCoEyCmE}CkEcDgEgDeEkDcEoDaEsD}DwD{D{DyD_EuDcEsDgEoDkEmDoEiDsEgDwEcDyEaD}E}CaFyCcFwCgFsCkFoCmFmCqFiCsFeCwFaCyF_C}F{B_GwBaGsBeGoBgGkBiGgBkGcBmG_BoG{AqGwAsGsAuGoAwGkAyGgA{GcA{G_A}G{@_Hw@aHs@aHo@cHk@cHg@eHc@eH_@eHYgHUgHQgHMgHIiHEiHAiH@qHDiHHiHLgHPgHTgHXgHNyG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(35.112664197968, -103.688733244), new google.maps.LatLng(35.271722222222, -103.49505555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TUCUMCARI CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'TUCUMCARI CLASS E2<br />SFC-17999');
    

// TWENTYNINE PALMS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('shfpEjmncUgJaBduEwdNvjIbsE}oFhaPkA_DyBeG}BaGaC_GeC}FiCyFkCwFoCsFsCqFwCmFyCkF}CgFaDcFcDaFgD}EkDyEmDuEqDqEsDmEwDiEyDgE}DcE_E_EaEyDeEuDgEqDiEmDmEiDoEeDqEaDsE{CuEwCwEsC{EoC}EiC_FeCaFaCaF{BcFwBeFqBgFmBiFgBkFcBkF}AmFyAoFsAoFoAqFiAqFeA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.194388888889, -116.12097222222), new google.maps.LatLng(34.28175, -115.99961111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TWENTYNINE PALMS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'TWENTYNINE PALMS CLASS E4<br />SFC-17999');
    

// UKIAH CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oekoFldsoV}lAivMrrWcwEfc@k{JtdNtkAjDsIhCkGjCgGnCcGrCaGvC}FxCyF|CwF`DsFbDoFfDkFjDgFlDcFpD_FrD{EvDwExDsE|DoE~DkE`EeEdEaEfE}DhEyDlEsDnEoDpEkDrEeDtEaDvE}CzEwC|EsC~EmC`FiC`FcCbF}BdFyBfFsBhFoBjFiBjFcBlF_BnFyAnFsApFoApFiArFcArF}@tFy@tFs@tFm@vFg@vFc@vF]vFWvFQxFKxFGxFAxF@xFFxFLvFPvFVvF\\vFb@vFh@tFl@tFr@tFx@rF~@rFbApFhApFnAnFtAlFxAlF~AjFdBhFhBhFnBfFrBdFxBbF~B`FbC~EhC|ElCvHpEvzUqgMhcEtdOetTloL?dKA~HE~HI~HM~HQ~HU|H[|H_@|Hc@zHg@zHk@xHo@xHu@vHy@vH}@tHaArHeApHiApHmAnHqAlHuAjHyAhH}AfHaBdHeBbHiB~GmB|GqBzGuBxGyBtG}BrGaCnGeClGgChGkCfGoCbGsC`GwC|FyCxF}CtFaDrFcDnFgDjFkDfFmDbFqD~EsDzEwDvEyDrE}DnE_EjEaEfEeE`EgE|DiExDmEtDoEnDqEjDsEfDuE`DwE|CyEvC{ErC}ElC_FhCaFbCcF~BeFxBgFtBiFnBiFhBkFdBmF~AmFxAoFtAqFnAqFhAsFbAsF~@uFx@uFr@uFl@wFh@wFb@wF\\wFVwFRyFLyFFyF@yFAyFEyFKwFQwFWwF]wFa@wFg@uFm@uFs@uFy@sF}@sFcAqFiAqFoAoFsAoFyAmF_BkFcBkFiBiFoBgFsBeFyBcF}BaFcCaFiC_FmC}EsC{EwCyE{CuEaDsEeDqEkDoEoDmEsDiEyDgE}DeEaEcEeE_EkE}DoEyDsEwDwEsD{EqD_FmDcFkDgFgDkFeDoFaDsF}CuF{CyFcEiIwdf@vvI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.943372222222, -123.31095277778), new google.maps.LatLng(39.396552777778, -123.04683333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'UKIAH CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'UKIAH CLASS E2<br />SFC-17999');
    

// VERNAL CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c`quFhu}zStB`DtdUaiK|zEdcTqfYbqMgEfKiCdGkCbGoC~FsC|FwCxFyCtF}CpF_DlFcDjFgDfFiDbFmD~EoDzEsDvEuDrEwDnE{DhE}DdE_E`EcE|DeExDgErDiEnDmEjDoEdDqE`DsEzCuEvCwErCyElC{EhC}EbC_F~B_FxBaFrBcFnBeFhBeFbBgF~AiFxAiFrAkFnAkFhAmFbAmF~@oFx@oFr@oFl@qFh@qFb@qF\\qFVsFPsFLsFFsF@sFAsFEsFKsFQqFWqF]qFa@qFg@qFm@oFs@oFw@mF}@mFcAkFiAkFmAiFsAiFyAgF}AgFcBeFiBcFmBaFsBaFyB_F}B}EcC{EgCyEmCwEqCuEwCsE{CqEaDoEeDmEiDkEoDgEsDeEwDcE}DaEaE}DeE{DiEyDmEuDsEsDwEoD{EmD_FiDcFgDgFcDkFaDmF}CqFyCuFwCyFsC}FoC_GmCcGiCeGeCiGaCmG_CoG{BsGwBuGsBwGoB{GkB}GgB_HcBaH_BcH{AgHwAiHsAkHoAmHkAmHgAoHcAqH_AsH{@uHw@uHs@wHo@yHk@yHg@{Hc@{H_@{HY}HU}HQ}HM}HI_IE_IA_I@gID_IH_IL}HP}HT}HX}H\\{Hb@{Hf@{Hj@yHn@yHr@wHv@uHz@uH~@sHbAqHfAoHjAmHnAmHrAkHvAiHzAgH~AcHbBaHfB_HjB}GnB{GrBwGvBuGzBsG|BoG`CmGdCiGhCgGlCcGnC_GrC}FvCyFxCuF|CqF`DmFbDkFfDgFhDcFlD_FnD{ErDwEtDsExDmEzDiE|DeE`EaEbE}DdEwDfEsDjEoDlEiDnEeDpEaDrE{CtEwCvEqCxEmCzEgC|EcC~E}B`FyB`FsBbFmBdFiBfFcBfF_BhFyAhFsAjFmAjFiAlFcAlF}@nFy@nFs@pFm@pFg@pFa@pF]pFWrFQrFKrFGrFArF@rFFrFLrFPpFVpF\\pFb@pFh@nFl@nFr@nFx@lF~@lFbAjFhAjFnAhFrAhFxAfF~AdFbBdFhBbFnB`FrB~ExB~E|B|EbCzEhCxElCvErCtEvCrEzCpE`DnEdDlEjDhEnDfErDdExDbE|D`E`E|DdE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(40.247638888889, -109.60146869519), new google.maps.LatLng(40.511209082924, -109.37622222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'VERNAL CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'VERNAL CLASS E2<br />SFC-17999');
    

// VISALIA MUNICIPAL AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m_y|EnekxUk}H_uF|_Ce~FmBkIiAiFeAkFcAkF_AmF{@oFy@oFu@qFq@qFm@sFk@uFg@uFc@uF_@wF]wFYwFUyFQyFOyFKyFGyFCyF?{F>aGByFFyFJyFNyFPyFTyFXwF\\wF^wFb@uFf@uFj@uFl@sFp@sFt@qFv@oFz@oF~@mFbAkFdAkFhAiFlAgFnAeFrAcFtAaFxA_F|A}E~A{EbByEdBwEhBuEjBsEnBqEpBmEtBkEvBiEzBeE|BcE~BaEbC}DdC{DfCwDjCuDlCqDnCoDpCkDtCiDvCeDxCaDzC_D|C{C~CwC`DsCdDqCfDmChDiChDeCjDaClD}BnDyBpDwBrDsBtDoBvDkBvDgBxDcBzD_BzD{A|DwA~DqA~DmA`EiA`EeAbEaAbE}@dEy@dEu@dEq@fEk@fEg@fEc@hE_@hE[hEUhEQhEMhEIhEEhEAhE@hEDhEHhELhEPhEVhEZhE^fEb@fEf@fEl@dEp@dEt@dEx@bE|@bE`A`EdA`EhA~DnA~DrA|DvAzDzAzD~AxDbBvDfBtDjBtDnBrDrBpDvBnDzBlD|BjD`ChDdCfDhCdDlCbDpC`DrC~CvC|CzCzC~CxC`DvCdDtChDpCjDnCnDlCpDjCtDfCvDdCzDbC|D~B`E|BbEzBdEvBhEtBjEpBlEnBnEjBrEhBtEdBvEbBxE~AzE|A|ExA~EtA`FrAbFnAdFjAfFhAhFdAhFbAjF~@lFz@nFv@nFt@pFp@pFl@rFj@rFf@tFb@tF^vF\\vFXvFTxFPxFNxFJxFFxFBxF>xF?xFCxFGxFKxFMxFQxFUxFYvF]vF_@vFc@tFg@tFk@rFm@rFq@pFu@pFw@nF{@nF_AlFaAjFeAhFiAhFkAfFoAdFsAbFuA`FyA~E}A|E_BzEcBxEeBvEiBtEkBrEoBnEqBlEuBjEwBhEyBdE}BbE_C`EcC|DeCzDgCvDkCtDmCpDoCnDqCjDuChDwCdDyC`D{C~C}CzC_DvCaDrCcDpCeDlCgDhCiDdCkD`CmD|BoDzBqDvBsDrBuDnBuDjBwDfByDbB{D~A{DzA}DvA_ErA_EnAaEhAaEdAcE`AcE|@eEx@eEt@eEp@gEl@gEf@gEb@iE^iEZiEViERiELiEHiEDiE@iE?iEEiEIiEMgBA_tB`fF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.260162102361, -119.50184722222), new google.maps.LatLng(36.392783333333, -119.32073427648));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'VISALIA MUNICIPAL AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'VISALIA MUNICIPAL AIRPORT CLASS E2<br />SFC-17999');
    

// WALLA WALLA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('onoxGpppqUmo\\dnCuCsPcGu\\wF{\\kFa]aFg]uEm]iEs]}Dw]qD}]eDa^yCe^mCi^aCk^sBo^gBq^{Au^oAw^cAy^w@{^i@{^]}^Q}^E}^Dy_@P}^\\}^h@{^t@{^bAy^nAw^zAu^fBq^rBo^~Bm^jCi^xCe^dDa^pD}]|Dw]hEs]tEm]~Eg]jFc]vF{\\bGu\\nGo\\xGg\\dHa\\pHy[zHq[fIi[pIa[|IwZfJoZpJeZ|J{YfKqYpKgYzK}XdLsXnLgXxL}WbMqWjMeWtM{V~MoVfNaVpNuUxNiU`O{TjOoTrOaTzOsSbPeSjPwRtIcKjjVhnWmGKyFGyFAyF@yFFwFLwFRwFXwF`@wFf@wFl@uFr@uFx@sF~@sFdAsFjAqFpAqFvAoF|AmFbBmFhBkFnBiFtBiFzBgF`CeFfCcFlCaFrC_FxC}E~C{EbDyEhDwEnDuEtDsExDqE~DoEdEmEhEiEnEgErEeExEaE|E_EbF}DfFyDlFwDpFsDtFqDxFmD~FkDbGgDfGcDjGaDnG}CrGyCvGwCzGsC~GoCbHkCfHiChHeClHaCpH}BrHyBvHuBzHqB|HmB`IiBbIeBdIaBfI}AjIyAlIuAnIqApImArIiAtIeAvIaAxI}@zIy@zIu@|Io@~Ik@~Ig@`Jc@`J_@bJ[bJWdJQdJMdJIdJEnJAdJ@dJDdJHdJLdJPdJVdJZbJ^bJb@`Jf@`Jj@~Ip@~It@|Ix@zI|@zI`AxIdAvIhAtIlArIpApItAnIxAlI|AjI`BfIdBdIhBbIlB~HpB|HtBzHxBvH|BrH`CpHdClHhChHjCfHnCbHrC~GvCzGxCvG|CrG`DnGbDjGfDfGjDbGlD~FpDxFrDtFvDpFxDlF|DfF~DbF`E|EdExEfErEhEnElEhEnEdEpE~DrExDtEtDvEnDxEhD|EbD|E|C~ExCrFjD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.090555555556, -118.40525), new google.maps.LatLng(46.29019780518, -118.05986111111));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'WALLA WALLA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'WALLA WALLA CLASS E4<br />SFC-17999');
    

// WALLA WALLA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m|{wGjb|pUpgJriJqaIvsSqwI{yIxF{BhFwBfF}BfFcCdFgCbFmC`FsC~EyC|E_DzEeDxEiDvEoDtEuDrEyDpE_EnEeEjEiEhEoEfEsEdEyE`E}E~DcFzDgFxDmFtDqFrDuFnDyFlD_GhDcGfDgGbDkG`DoG|CsGxCwGtC{GrC_HnCcHjCeHfCiHdCmH`CqH|BsHxBwHtByHpB}HlB_IhBaIdBeI`BgI|AiIxAkItAoIpAqIlAsIhAuIdAuI`AwI|@yIx@{Ir@}In@}Ij@_Jf@_Jb@aJ^aJZcJTcJPcJLcJHeJDeJ@eJAeJEeJIeJMcJQcJ[wG'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(45.965583333333, -118.44141666667), new google.maps.LatLng(46.072333333333, -118.27766666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'WALLA WALLA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'WALLA WALLA CLASS E4<br />SFC-17999');
    

// WENATCHEE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gqj`Hv|a|UvIgAj}EaeNbqMlmM}bFjpNZzEl@lIh@nId@nI`@pI\\pIXpITrIPrILrIHrIDrI@tI?tIErIIrIMrIQrIUrIYpI]pIa@pIe@nIi@nIm@lIq@lIu@jIy@hI}@fI_AfIcAdIgAbIkA`IoA~HsA|HwAzH{AvH_BtHaBrHeBpHiBlHmBjHqBfHsBdHwB`H{B~G_CzGaCxGeCtGiCpGkClGoCjGqCfGuCbGwC~F{CzF}CvFaDrFcDnFgDhFiDdFkD`FoD|EqDxEsDrEwDnEyDhE{DdE}D`E_EzDaEvDeEpDgElDiEfDkE`DmE|CmEvCoEpCqElCsEfCuE`CwEzBwEvByEpB{EjB{EdB}E~A_FzA_FtAaFnAaFhAaFbAcF|@cFv@cFp@eFj@eFd@eF^eFXgFRgFLgFFgF@gFAgFGgFMgFSeFYeF_@eFe@eFk@eFq@cFw@cF{@aFaAaFgAaFmA_FsA_FyA}E_B{EeB{EkByEoBwEuBwE{BuEaCsEgCqEkCqEqCoEwCmE{CkEaDiEgDgEkDeEqDcEuDaE{D}D_E{DeEyDiEwDoEuDsEqDwEoD}EmDaFiDeFgDiFeDmFaDsF_DwF{C{FyC_GuCcGsCgGoCkGkCmGiCqGeCuGaCyG_C{G{B_HwBcHuBeHqBiHmBkHiBoHeBqHcBsH_BuH{AyHwA{HsA}HoA_IkAaIgAcIeAeIaAgI}@iIy@iIu@kIq@mIm@oIi@oIe@qIa@qI]qIYsIUsIQsIMuIIuIEuIAuI@_JDuIHuILuIPsITsIXsI\\sI`@qId@qIh@oIl@oIp@mIt@kIx@iI|@iI`AgIdAeIfAcIjAaInA_IrA}HvA{HzAyH~AuHbBsHdBqHhBoHlBkHpBiHtBeHvBcHzB_H~B{G`CyGdCuGhCqGjCmGnCkGrCgGtCcGxC_GzC{F~CwF`DsFdDoFfDiFhDeFlDaFnD}EpDwEtDsEvDoExDiEzDeE|D_E`E{DbEuDdEqDfEkDhEgDjEaDlE{CnEwCpEqCpEkCrEgCtEaCvE{BvEuBxEqBzEkBzEeB|E_B~EyA~EsA`FmA`FgA`FaAbF}@bFw@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.297111111111, -120.30480122581), new google.maps.LatLng(47.465242580737, -120.03158333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'WENATCHEE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'WENATCHEE CLASS E2<br />SFC-17999');
    

// WILLISTON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sc_eHlz}vRjGh@fnBuuFfaBbbBte@}x@pjFt~I}wClcFz@|ExAfItAhIpAjIlAlIhAnIdApI`ArI|@tIx@vIt@xIp@xIl@zIh@|Id@|I`@~I\\~IX`JT`JP`JL`JHbJDbJ@bJAbJEbJIbJM`JQ`JU`JY`J]~Ia@~Ie@|Ii@|Im@zIq@xIu@xIy@vI}@tIaArIeApIiApImAnIqAjIuAhIyAfI}AdIaBbIeB~HiB|HmBzHoBvHsBtHwBpH{BnH_CjHaCfHeCbHiC`HkC|GoCxGsCtGuCpGyClG{ChG_DdGcD`GeD|FiDxFkDrFmDnFqDjFsDdFuD`FyD|E{DvE}DrEaElEcEhEeEbEgE~DiExDkErDmEnDoEhDqEbDsE|CuExCwErCyElC{EfC{E`C}EzB_FtBaFnBaFhBcFbBcF|AeFvAeFpAgFjAgFdAiF~@iFx@iFr@kFl@kFf@kF`@kFZmFTmFNmFFmF@mFAmFGmFMmFSkFYkF_@kFe@kFk@kFs@iFy@iF_AgFeAgFkAgFqAeFwAeF}AcFcBaFiBaFoB_FuB}E{B}EaC{EgCyEkCwEqCuEwCcFcEayDnbGowDogHftDa|FsAqGaBcI}AeIyAgIuAiIqAkImAmIiAoIeAqIaAsI}@uIy@wIu@yIq@yIm@{Ii@}Ie@}Ia@_J]_JYaJUaJQaJMaJIaJEcJAcJ@kJDcJHcJLaJPaJTaJXaJ\\_J`@_Jd@}Ih@}Il@{Ip@yIt@yIx@wI|@uI`AsIdAqIhAoIlAmIpAkItAiIxAgI|AeI`BcIdB_IhB}HlByHnBwHrBsHvBqHzBmH~BkH`CgHdCcHhC_HjC}GnCyGrCuGtCqGxCmGzCiG~CeG`DaGdD{FfDwFjDsFlDoFpDiFrDeFtDaFxD{EzDwE|DqE~DmEbEgEdEcEfE}DhEwDjEsDlEmDnEgDpEcDrE}CtEwCvEqCxEkCxEeCzEaC|E{B~EuB~EoB`FiBbFcBbF}AdFwAdFqAfFkAfFeAhF_AhFy@hFs@jFm@jFe@jF_@jFYjFSjFMjFGlFAjF@jFFjFLjFTjFZjF`@jFf@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(48.090944444444, -103.77472222222), new google.maps.LatLng(48.268416666667, -103.50177777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'WILLISTON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'WILLISTON CLASS E2<br />SFC-17999');
    

// WINK CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_~jaEzo{tR?E^aa@~A}`@`Dq`@~Ea`@~Gm_@zIs^vKs]pMo\\fOg[|P{YnRiX|SuVhU{TpV_StWaQtX_OrYyLjZsJ~ZkHn[aFx[uC`\\iAb\\>`\\jAx[vCn[`F~ZjHjZrJpYzLtX~NtW`QpV~RhUzT|StVlRhXzPxYfOf[pMn\\vKr]zIp^~Gj_@~E``@`Dp`@~Az`@^`a@_@`a@_Bz`@_Dp`@_F``@}Gj_@{Ip^wKr]oMn\\gOf[{PzYmRhX}StVgU|ToV`SuW`QuX~NqYzLiZtJ_[jHm[bFy[vCa\\jAc\\>a\\iAy[uCo[_F_[iHkZsJsYyLuX}NuW_QqV_SiU{T}SsVoRiX}P{YiOg[qMo\\wKs]{Is^_Hm_@aFa`@aDq`@_B}`@_@aa@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.712640253079, -103.27954845711), new google.maps.LatLng(31.846247935977, -103.12323055353));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'WINK CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'WINK CLASS E2<br />SFC-17999');
    

// WINSLOW CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{|wtExubdT{J`C}KjC_LbCaLxBcLpBeLfBeL~AgLtAiLlAiLbAkLz@kLp@kLh@mL^mLTmLLmLBmLAmLKmLSmL]kLg@kLo@kLy@iLaAiLkAgLsAgL}AeLeBcLoBaLwB_LaC}KiC{KsCyK{CwKcDuKmDsKuDoK}DmKeEiKoEgKwEcK_FaKgF}JoFyJwFuJ_GqJgGoJoGkJwGeJ_HaJgH}IoHyIuHuI}HoIeIkIkIgIsIaIyI}HaJwHgJqHmJkGwI~bH{oZaBaJ_B{IyA}IuA_JoAaJkAcJeAeJ_AgJ{@gJu@iJq@iJk@kJe@kJa@mJ[mJUmJQoJKoJGoJAoJ@yJDoJJoJPoJTmJZmJ`@mJd@kJj@kJp@iJt@iJz@gJ~@gJdAeJhAcJnAaJtA_JxA}I~A{IbByIhBwIlBuIrBsIvBqIzBmI`CkIdCiIjCeInCcIrC_IvC{H|CyH`DuHdDqHhDmHnDkHrDgHvDcHzD_H~D{GbEwGfEsGjEmGnEiGrEeGvEaGzE{F|EwF`FsFdFmFhFiFjFcFnF_FpFyEtFsEvFoEzFiE|FcE`G_EbGyDdGsDhGmDjGgDlGcDnG}CpGwCtGqCvGkCxGeCzG_CzGyB|GsB~GmB`HgBbHaBbHyAdHsAfHmAfHgAhHaAhH{@hHu@jHm@jHg@jHa@lH[lHUlHMlHGlHAlH@lHFlHNlHTlHZjH`@jHh@jHn@hHt@hHz@hH`AfHfAdHnAdHtAbHzAbH`B`HfB~GlB|GrBzGxBxG~BvGdCtGjCrGpCpGvCnG|ClGbDjGhDhGnDdGrDbGxD`G~D|FdEzFhEvFnEtFtEpFxEnF~EjFbFfFhFdFlF`FrF|EvFxEzFvE`GrEdGnEhGjElGfEpGbEvG~DzGzD~GvDbHrDfHlDhHhDlHdDpH`DtH|CvHvCzHrC~HnC`IhCdIdCfI`CjIzBlIvBnIpBrIlBtIhBvIbBxI~AzIxA|ItA~InA`JhAbJdAbJ~@dJz@fJt@fJp@hJj@jJd@jJ`@jJZlJTlJPlJJlJDlJ@nJAnJElJKlJQlJUlJ[lJa@jJe@jJk@jJo@hJu@fJ{@fJ_AdJeAdJiAbJoA`JsA~IyA|I_BzIcBxIgBvImBtIqBrIwBnI{BlIaCjIeCfIiCdIoC`IsC~HwCzH}CxHaDtHeDpHiDlHmDhHsDfHwDbH{D~G_EzGcEvGgErGkElGoEhGsEdGwE`GyEzF}EvFaFrFeFlFgFhFkFbFoF~EqFxEuFtEwFnE{FhE}FdEaG~DcGxDeGrDiGnDkGhDmGbDoG|CqGvCsGpCuGjCwGdCyG~B{GxB}GrB_HlBaHfBcH`BcHzAeHtAeHnAgHfAgH`AiHz@iHt@kHn@kHh@iIr@qdAjtT'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.935090082482, -110.94524342328), new google.maps.LatLng(35.150277777778, -110.6169199414));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'WINSLOW CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'WINSLOW CLASS E2<br />SFC-17999');
    

// WORLAND CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('a~qkGlmjrSegWdvC}uAkzYp_WstCtCeGvCgGxCcG|C_G~C{FbDwFfDsFhDoFlDkFnDgFrDcFtD}EvDyEzDuE|DqE~DkEbEgEdEcEfE}DhEyDjEsDnEoDpEiDrEeDtE_DvEyCxEuCzEoC|EiC|EeC~E_C`FyBbFuBdFoBdFiBfFcBhF}AhFwAjFsAjFmAlFgAlFaAlF{@nFu@nFo@nFi@pFc@pF_@pFYpFSpFMpFGrFArF@pFFpFLpFRpFXpF^pFd@nFj@nFp@nFv@lFz@lF`AlFfAjFlAjFrAhFxAfF~AfFbBdFhBbFnBbFtB`FzB~E~B|EdCzEjCzEnCxEtCvEzCtE~CrEdDpEhDlEnDjErDhExDfE|DdEbEbEfE~DjE|DpEzDtEvDxEtD|EpDbFnDfFjDjFhDnFdDrFbDvF~CzF|C~FxCbGtCfGrChGnClGjCpGhCtGdCvG`CzG|B|GxB`HvBbHrBfHnBhHjBlHfBnHbBpH~ArHzAtHvAxHrAzHnA|HjA~HfA~HbA`I~@bIz@dIv@fIr@fIn@hIj@hIf@jIb@jI\\lIXlITlIPnILnIHnIDnI@nIAnIEnIInIMnIQnIUlIYlI]lIa@jIg@jIk@hIo@hIs@fIw@fI{@dI_AbIcA`IgA~HkA~HoA|HsAzHwAxH{AtH_BrHcBpHgBnHkBlHoBhHsBfHuBbHyB`H}B|GaCzGeCvGiCtGkCpGoClGsCjGuCfGyCbG}C~F_DzFcDvFeDrFiDnFkDjFoDfFqDbFuD~EwDxE{DtE}DpE_EjEaEfEeEbEgE|DiExDkErDmEnDqEhDsEdDuE~CwEzCyEtC{EnC{EjC}EdC_F~BaFzBcFtBcFnBeFhBgFdBgF~AiFxAkFrAkFlAmFfAmF`AmF|@oFv@oFp@oFj@qFd@qF^qFXqFRqFLqFFsF@sFAqFGqFMqFSqFWqF]qFc@qFi@oFo@oFu@oF{@mFaAmFgAkFmAkFsAiFwAiF}AgFcBeFiBeFoBcFsBaFyB_F_C}EeC}EiC{EoCyEuCwEyCuE_DsEeDqEiDoEoDmEsDiEyDgE}D_CyA'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.895636705855, -108.05338888889), new google.maps.LatLng(44.144361111111, -107.8534741226));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'WORLAND CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'WORLAND CLASS E2<br />SFC-17999');
    

// YAKIMA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s~s{Gpvv~U?G`@gk@dBak@fDsj@jF}i@lHci@lJah@jLwf@fNie@`Puc@vQ{a@lS{_@|Tu]jVm[tW}XzXkV|YuSzZ}Pt[aNh\\cKx\\cHd]aEl]_Bn]>l]bBd]dEx\\dHh\\dKr[bNxZ~PzYvSxXlVrW~XhVl[|Tt]jSz_@vQxa@~Orc@dNfe@hLtf@jJ|g@jH~h@jFzi@fDnj@dB|j@`@bk@_@bk@cB|j@gDnj@iFzi@kH~h@kJ|g@iLtf@eNfe@_Prc@wQxa@kSz_@{Tv]iVl[sW~XyXlV{YxSyZ~Ps[dNi\\fKy\\fHe]dEm]bBo]@m]_Be]aEy\\cHi\\cKu[aN{Z}P}YuS{XkVuW}XkVk[}Tu]mS{_@yQya@aPuc@gNie@kLwf@mJah@mHci@kF}i@iDsj@eBak@a@gk@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.498087430623, -120.64528191999), new google.maps.LatLng(46.638022822635, -120.44249743054));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'YAKIMA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'YAKIMA CLASS E2<br />SFC-17999');
    

// YAKIMA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wua{Gnki_V{jDdmXgqNm{ExjDwiXnEdKvCrGxCnG|CjG~CfGbDbGfD~FhDzFlDtFnDpFrDlFtDhFvDbFzD~E|DzE~DtEbEpEdEjEfEfEhE`ElEzDnEvDpEpDrEjDtEfDvE`DxEzCzEtC|EpC|EjC~EdC`F~BbFxBdFrBdFlBfFfBhF`BhF|AjFvAjFpAlFjAlFdAnF|@nFv@nFp@pFj@pFd@pF^pFXpFRpFLpFFrF@rFApFGpFOpFUpF[pFa@pFg@nFm@nFs@nFy@lF_AlFeAlFkAjFqAjFwAhF}AfFcBfFiBdFoBzCgB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.544444444444, -120.76972222222), new google.maps.LatLng(46.651666666667, -120.60472222222));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'YAKIMA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'YAKIMA CLASS E4<br />SFC-17999');
    

// YAKIMA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w~uzGpwf}Uu`Fbn`@gCmDuDiFwDcF{D_F}D{E_EuEcEqEeEkEgEgEiEaEkE}DoEwDqEqDsEmDuEgDwEaDyE}C{EwC}EqC}EkC_FeCaFaCcF{BeFuBeFoBgFiBiFcBiF}AkFwAkFqAmFkAmFeAmF_AoFy@oFs@qFm@qFg@qFa@qF[qFUqFMsFGsFAsF@sFFqFLqFRqFXqF^qFd@qFj@oFp@oFx@oF~@mFdAmFjAkFpAkFvAiF|AiFbBgFhBeFlBeFrBcFxBaF~B_FdC}EjC}EpC{EvCyEzCwE`DuEfDsElDqEpDoEvDmE|DiE`EgEfEeEjEcEpE_EtEiDhBhjGgyf@npOhiF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.484444444444, -120.46972222222), new google.maps.LatLng(46.611944444444, -120.26083333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'YAKIMA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'YAKIMA CLASS E4<br />SFC-17999');
    

// YUMA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e_afE~n`{TiGdDkGbDmG~CoGxCqGrCsGlCuGfCwG`CyGzB{GtB}GpB_HjBaHdBaH~AcHxAeHrAeHjAgHdAgH~@iHx@iHr@kHl@kHf@kH`@mHZmHTmHNmHFmH@mHAmHGmHMmHSmHYkH_@kHg@kHm@iHs@iHy@gH_AgHeAeHkAeHqAcHwAcH}AaHcB_HiB}GoB{GuByG{ByGaCwGgCuGmCqGsCoGwCmG}CkGcDiGiDeGoDcGsDaGyD}F_E{FcEwFiEuFmEqFsEoFwEkF}EiFaFeFgFaFkF}EoF{EuFwEyFsE}FoEaGkEeGgEkGcEoG_EsG{DwGwD{GsD}GoDaHiDeHeDiHaDmH}CoHyCsHsCuHoCyHkC{HeC_IaCaI{BeIwBgIsBiImBkIiBmIcBoI_BqIyAsIuAuIoAwIkAyIeA{I_A{I{@}Iu@_Jq@_Jk@aJe@aJa@cJ[cJUcJQcJKeJGeJAeJ@mJDeJJeJPcJTcJZcJ`@cJd@aJj@aJp@_Jt@_Jz@}I~@{IdA{IhAyInAwItAuIxAsI~AqIbBoIhBmIlBkIrBiIvBgIzBeI`CaIdC_IjC{HnCyHrCuHvCsH|CoH`DmHdDiHhDeHnDaHrD_HvD{GzDwG~DsGbEoGfEkGjEgGnEaGrE}FvEyFxEuF|EoF`FkFdFgFfFaFjF}EnFwEpFsEtFmEvFiEzFcE|F_E`GyDbGsDdGoDhGiDjGcDlG}CnGwCpGsCrGmCvGgCvGaCxG{BzGuB|GoB~GiB`HcBbH}AbHwAdHqAdHkAfHeAfH_AhHy@hHs@jHm@jHg@jHa@lHYlHSlHMlHGlHAlH@lHFlHLlHTlHZjH`@jHf@jHl@hHr@hHx@fH~@fHdAdHjAdHpAbHvA`H|A`HbB~GhB|GnBzGtBxGzBvG`CtGfCrGlCpGrCnGxClG|CjGbDhGhDdGnDbGrD`GxD|F~DzFbEvFhEtFnEpFrEnFxEjF|EfF`FdFfF`FjF|EnFxEtFtExFrE|FnE`GjEdGfEjGbEnG~DrGzDvGvDzGrD|GlD`HhDdHdDhH`DjH|CnHvCrHrCtHnCxHhCzHdC~H`C`IzBbIvBfIpBhIlBjIhBlIbBnI~ApIxArItAtInAvIhAxIdAxI~@zIz@|It@|Ip@~Ij@~Id@`J`@`JZbJTbJPbJJbJDbJ@bJAbJEbJKbJQbJUbJ[bJa@`Je@`Jk@~Io@~Iu@|I{@|I_AzIeAxIiAxIoAvIsAtIyArI}ApIcBnIgBlImBjIqBhIwBfI{BbIaC`IeC~HiCzHoCxHsCtHaB~EojE?>lhF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.56977774432, -114.70858556923), new google.maps.LatLng(32.743387713127, -114.50335882382));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'YUMA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'YUMA CLASS E2<br />SFC-17999');
    

// YUMA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('e_afE~n`{T?mhFnjE?mEfKaDlHeDhHiDdHmD`HsD|GwDzG{DvG_ErGcEnGgEjGkEfGoE`GsE|FuExFyEtF}EpFaFjFeFfFgFbFkF|EoFxEqFrEuFnEwFhE{FbE}F~DaGxDcGtDgGlD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.581880555556, -114.69568611111), new google.maps.LatLng(32.614444444444, -114.65833333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'YUMA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'YUMA CLASS E2<br />SFC-17999');
    

// YUMA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ujyfEteuzThAdFwyDwBpEw{L`}D~ByA|GiBlIcBnI_BpIyArIuAtIoAvIiAxIeAzI_AzI{@|Iu@~Iq@~Ik@`Je@`Ja@`J[bJUbJQbJKbJGlJAdJ@dJFdJJbJPbJTbJZbJ`@`Jd@`Jj@`Jp@~It@~Iz@|I~@zIdAzIjAxInAvItAtIxArI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.737194444444, -114.63902777778), new google.maps.LatLng(32.768666666667, -114.56725833333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'YUMA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'YUMA CLASS E4<br />SFC-17999');
    

// YUMA CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('akxfEl{ezT{BdKigRovGbgBs_Lln[~tIqDf@iH~@gHdAgHjAeHpAcHvAcH|AaHbB_HhB}GnB}GtB{GzByG`CwGfCuGlCsGrCoGxCmG|CkGbDiGhDgGnDcGrDaGxD}F~D{FbEyFhEuFnEqFrEoFxEkF|EiFbFeFfFaFjF}EpF{EtFwExFsE|FoEbGkEfGgEjGcEnG_ErG{DvGwDzGsD~GoDbHiDdHeDhHaDlH}CnHyCrHsCvHoCxHkC|H'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.670833333333, -114.56138888889), new google.maps.LatLng(32.833333333333, -114.45));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'YUMA CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'YUMA CLASS E4<br />SFC-17999');
    

// EVERETT CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g~tcHhc{iVi|K|rEsaDo_Un{KmrEcAzMs@|Jm@|Ji@~Je@~Ja@`K[`KWbKSbKObKIbKEnKAbK@bKDbKHbKNbKRbKVbKZ`K`@`Kd@~Jh@~Jl@|Jr@|Jv@zJz@xJ~@vJdAtJhArJlApJpAnJtAlJxAjJ~AhJbBfJfBbJjB`JnB|IrBzIvBvIzBtI~BpIbClIfCjIjCfInCbIrC~HvCzHxCvH|CrH`DnHdDjHhDfHjD`HnD|GrDxGtDrGxDnG|DhG~DdGbE~FdEzF`G`H'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.953805555556, -122.40261111111), new google.maps.LatLng(48.045972222222, -122.25605555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'EVERETT CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'EVERETT CLASS E4<br />SFC-17999');
    

// STOCKTON CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y{zeFvxxbV|AfKdAlH`AnH|@nHx@pHt@rHn@rHj@tHf@tHb@vH^vHZvHVxHPxHLxHHxHDxH@xHAxHExHIxHMxHQxHUxH[vH_@vHc@vHg@tHk@tHo@rHu@rHy@pH}@nHaAnHeAlHiAjHmAhHqAfHuAdHyAbH}A`HaB~GeB|GiBzGmBxGqBvGuBrGyBpG}BnGaCjGeChGiCdGkCbGoC~FsCzFwCxFyCtF}CpFaDnFcDjFgDfFkDbFmD~EqDzEsDvEwDrEyDnE}DjE_EfEaEbEeE~DgEzDiEtDmEpDoElDqEfDsEbDuE~CwExCyEtC{EpC}EjC_FfCaF`CcF|BeFvBgFrBiFlBiFfBkFbBmF|AmFxAoFrAqFlAqFhAsFbAsF|@uFv@uFr@uFl@wFf@wFb@wF\\wFVwFPyFLyFFyF@yFAyFEyFKwFQwFWwF[wFa@wFg@uFm@uFq@uFw@sF}@sFaAqFgAqFmAoFsAoFwAmF}AkFaBkFgBiFmBgFqBeFwBcF{BaFaCaFeC_FkC}EoC{EuCyEyCuE_DsEcDqEgDoEmDmEqDiEuDgEyDeE_EcEcE_EgE}DkEyDoEwDsEsDwEqD{EmD_FkDcFgDgFeDkFaDoF}CqF{CuFwCyFsC{FoC_GmCcGiCeGeCiGaCkG}BoGyBqGuBsGqBwGmByGiB{GgB}GcB_H}AcHyAeHuAgHqAgHmAiHiAkHeAmHaAoH}@qHy@qHu@sHq@sHk@uHg@uHc@wH_@wH[yHWyHQyHMyHIyHE{HA{H@cID{HHyHLyHPyHVyHZyH^wHb@wHf@uHj@uHn@sHt@sHx@qH|@qH`AoHdAmHhAkHlAiHpAiHtAgHxAeH|AcH`B_HdB}GhB{GlByGpBwGtBsGxBqG|BoG`CkGdCiGhCeGjCcGnC_GrC}FvCyFxCuF|CqF`DoFdDkFfDgFjDcFlD_FpD{ErDwEvDsExDoE|DkE~DgEbEcEdE_EfEyDhEuDlEqDnEmDpEgDrEcDtE_DvEyCzEuC|EoC~EkC`FeC`FaCbF{BdFwBfFqBhFmBjFgBjFcBlF}AnFwAnFsApFmApFgArFcArF}@tFw@tFq@tFm@vFg@vFa@vF]vFWvFQxFKxFExFAxF@xFFxFLvFPvFVvF\\vFb@vFf@zE`@v|Ay{B|vKdzImpC|}C'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.802777777778, -121.32881933459), new google.maps.LatLng(37.965894703366, -121.12888888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'STOCKTON CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'STOCKTON CLASS E2<br />SFC-17999');
    

// ASPEN CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('apynFrugkS?G`@eg@fB_g@lDsf@pFaf@rHge@tJid@tLcc@rNya@nPi`@fRu^|S{\\nU}Z|VyXhXsVnYgTrZyQp[iOj\\uL`]_Jp]iG|]qDd^wAf^>d^xA|]rDp]jG`]`Jj\\vLp[jOpZzQnYhTfXrV|VxXlU|ZzSz\\fRr^lPh`@rNva@tL`c@tJfd@rHde@pF|e@jDpf@fB|f@`@bg@a@bg@gB|f@kDpf@oF|e@sHde@uJfd@uLbc@qNxa@mPh`@eRt^{Sz\\mU|Z}VxXgXrVoYhTqZzQq[jOk\\vLa]bJq]jG}]rDe^xAg^>e^wA}]oDq]gGa]_Jk\\uLq[iOsZyQoYgTiXqV}VyXoU{Z}S{\\gRu^oPi`@sNya@uLcc@uJid@uHge@qF_f@mDsf@gB_g@a@eg@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(39.150162782868, -106.96038212786), new google.maps.LatLng(39.293614111103, -106.77606375755));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'ASPEN CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'ASPEN CLASS E2<br />SFC-17999');
    

// HAILEY CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_{_hGvmaxTjeCd_Ni`FvuBWnHYbI]bIa@`Ie@`Ii@~Hm@~Hq@|Hu@|Hy@zH}@xHaAvHeAvHiAtHmArHqApHuAnHyAlH}AjHaBfHeBdHiBbHkB`HoB|GsBzGwBxG{BtG}BrGaCnGeCjGiChGkCdGoC`GsC~FuCzFyCvF{CrF_DnFaDjFeDfFgDbFkD~EmDzEqDvEsDrEuDnEyDjE{DdE}D`E_E|DcEvDeErDgEnDiEhDkEdDmE~CoEzCqEtCsEpCuEjCwEfCyE`C{EzB{EvB}EpB_FjBaFfBaF`BcFzAcFtAeFpAeFjAgFdAgF~@iFz@iFt@iFn@kFh@kFb@kF\\kFXmFRmFLmFFmF@mFAmFGmFKmFQkFWkF]kFc@kFi@iFm@iFs@iFy@gF_AgFeAeFkAeFoAcFuAcF{AaFaBaFeB_FkB}EqB}EuB{E{ByEaCwEeCuEkCsEoCqEuCoE{CmE_DkEeDiEiDgEmDeEsDcEwDaE}D}DaE{DeEyDiEwDoEsDsEqDwEoD{EkD_FiDcFeDgFcDkF_DoF}CsFyCwFuC{FsC_GoCaGmCeGiCiGeCmGaCoG_CsG{BuGwByGsB{GqB_HmBaHiBcHeBeHaBiH}AkHyAmHuAoHqAqHmAsHiAuHeAwHaAyH}@{Hy@{Hu@}Hq@_Im@_Ii@aIe@aIa@cI]cIYcIUeIQeIMeIIeIEeIAgI@oIDeIHeILeIPeITeIXcI\\cI`@cId@aIh@aIl@_Ip@_It@}Hx@{H|@{H`AyHdAwHhAuHlAsHpAqHtAoHxAmH|AkH`BiHdBeHhBcHlBaHnB_HrB{GvByGzBuG~BsG`CoGdCmGhCiGjCeGnCcGrC_GtC{FxCwF|CsF~CoFbDkFdDgFhDcFjD_FlD{EpDwErDsEvDoExDiEzDeE|DaE`E}DbEwDdEsDfEmDhEiDjEeDlE_DnE{CpEuCrEqCtEkCvEeCxEaCzE{BzEuB|EqB~EkB`FeB`FaBbF{AbFuAdFoAdFkAfFeAfF_AhFy@hFs@hFo@jFi@jFc@jF]jFWlFQlFKlFGlFAlF@lFFlFLlFRjFXjF\\jFb@jFh@hFn@hFt@hFz@fF~@fFdAdFjAdFpAbFtAbFzA`F`B`FfB~EjB|EpBzEvBzEzBxE`CvEfCtEjCrEpCpEtCnEzClE~CjEdDhEhDfEnDdErDbEvD`E|D|D`EzDdExDjEtDnErDrEpDvErDzE~_FquB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(43.400583333333, -114.39054153017), new google.maps.LatLng(43.573052372333, -114.20279174914));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'HAILEY CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'HAILEY CLASS E2<br />SFC-17999');
    

// HELENA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cos{Gho{iTzGoDh`@eaF`_M~iCaZrvDzBtCbEjF`EnF|DtFzDxFvD|FtDbGpDfGlDjGjDnGfDrGdDxG`D|G|C`HxCdHvChHrClHnCnHjCrHfCvHbCzH~B|HzB`IvBbItBfIpBhIlBlIhBnIbBrI~AtIzAvIvAxIrAzInA|IjA~IfA`JbAbJ~@dJx@fJt@fJp@hJl@jJh@jJb@lJ^lJZnJVnJRnJLpJHpJDpJ@pJApJEpJIpJMpJQnJWnJ[nJ_@lJc@lJi@jJm@jJq@hJu@hJy@fJ}@dJcAbJgA`JkA~IoA|IsAzIwAxI{AvI_BtIcBrIgBnIkBlIoBhIsBfIwBdI{B`I_C|HcCzHgCvHkCrHoCnHsClHuChHyCdH}C`HaD|GcDxGgDtGkDnGmDjGqDfGuDbGwD|F{DxF}DtFaEnFcEjFgEdFiE`FkEzEoEtEqEpEsEjEuEdEwE`E{EzD}EtD_FnDaFhDcFdDeF~CgFxCiFrCkFlCkFfCmF`CoFzBqFtBqFnBsFfBuF`BuFzAwFtAwFnAyFhAyFbA{Fz@{Ft@{Fn@}Fh@}Fb@}FZ}FT}FN}FHcHFs_@d}EivDqw@r_@u|EaHcEeF}CcFcDaFiD_FoD}EuD{EyDyE_EuEeEsEkEqEoEoEuEkE{EiE_FgEeFcEiFaEoF}DsF{DyFwD}FuDcGqDgGoDkGkDoGgDsGeDyGaD}G}CaHyCeHwCiHsCmHoCoHkCsHgCwHcC{HaC}H}BaIyBeIuBgIqBkImBmIiBoIeBsIaBuI{AwIwAyIsA}IoA_JkAaJgAcJcAeJ_AeJy@gJu@iJq@kJm@kJi@mJc@mJ_@oJ[oJWoJSqJMqJIqJEqJAqJ@{JDqJHqJLqJRqJVoJZoJ^oJb@mJh@mJl@kJp@kJt@iJx@gJ~@eJbAeJfAcJjAaJnA_JrA}IvAyIzAwI~AuIdBsIhBqIlBmIpBkItBgIxBeI|BaI~B_IbC{HfCwHjCsHnCqHrCmHvCiHxCeH|CaH`D}GdDyGfDuGjDoGnDkGpDgGtDcGvD}FzDyF|DsF`EoFbEiFfEeFhE_FjE{EnEuEpEqErEkEtEeExE_EzE{D|EuD~EoD`FiDbFcDdF}CfFwChFqC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.533637815742, -112.12472222222), new google.maps.LatLng(46.680222687028, -111.84777777778));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'HELENA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'HELENA CLASS E2<br />SFC-17999');
    

// MEDFORD CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qd`bGjp}lV?G^eg@`B_g@bDsf@dF_f@dHge@bJid@`Lcc@zMya@rOi`@hQu^|R{\\lT{ZxUyXbWqVfXgThYyQdZiO~ZuLr[_Jb\\iGn\\oDt\\wAx\\>t\\xAn\\rDb\\jGr[`J~ZvLdZjOhYzQfXhT`WrVxUxXjTzZ|Rx\\hQr^rOh`@zMva@`L`c@bJdd@dHde@dF|e@bDnf@`B|f@^bg@_@bg@aB|f@cDnf@eF|e@eHde@cJfd@_L`c@{Mva@sOh`@iQr^{Rz\\kT|ZyUxXaWrVgXhTgYzQeZjO_[vLs[bJc\\jGo\\rDu\\xAy\\>u\\uAo\\oDc\\gGs[_J_[uLgZgOiYyQgXgTcWqVyUyXmT{Z}R{\\kQs^uOi`@{Mya@aLcc@eJgd@eHge@eF_f@eDsf@cB_g@_@eg@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.303869659212, -122.96462934165), new google.maps.LatLng(42.440573969206, -122.780372096));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MEDFORD CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MEDFORD CLASS E2<br />SFC-17999');
    

// MOSES LAKE CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('sd`_H`}lvUt~CtxKtzF?tC`K`DdL|ChLvClLrCpLlCtLfCxLbC|L|B~LvBbMrBdMlBhMfBjM`BnM|ApMvArMpAtMjAvMdAxM`AzMz@|Mt@|Mn@~Mh@`Nb@`N\\bNXbNRbNLdNFdN@dNAdNGdNMdNSbNWbN]bNc@`Ni@`No@~Mu@|M{@|MaAzMeAxMkAvMqAtMwArM}ApMaBnMgBjMmBhMsBdMwBbM}B~LcC|LgCxLmCtLqCpLwClL}ChLaDdLgD`LkD|KqDxKuDtKyDnK_EjKcEdKgE`KmEzJqEtJuEpJyEjJ_FdJcF~IgFxIkFrIoFlIsFfIwF`I{FzH}FtHaGlHeGfHiG`HmGxGoGrGsGjGuGdGyG|F{GtF_HnFaHfFeH~EgHxEiHpEkHhEoH`EqHxDsHpDuHhDwH`DyHxC{HpC}HhC}H`C_IxBaIpBcIhBcI`BeIvAeInAgIfAgI~@gIv@iIl@iId@iI\\iITiIJkIBkIAkIIiISiI[iIc@iIk@iIu@gI}@gIeAeImAeIuAcI_BcIgBaIoB_IwB_I_C}HgC{HoCyHwCwH_DuHgDsHoDqHwDoH_EmHgEkHoEgHwEeH_FcHeF_HmF}GuFyG}FwGcGsGkGqGqGmGyGiG_HeGgHcGmH_GsH{F{HwFaIsFgIoFmIkFsIgFyIcF_J_FeJ{EkJwEqJqEwJmE{JiEaKcEeK_EkK{DoKuDuKqDyKkD}KgDcLaDgL}CkLwCoLsCsLmCwLiCyLcC}L}BaMyBeMsBgMmBkMgBmMcBoM}AqMwAuMqAwMkAyMgA{MaA}M{@}Mu@_No@aNi@cNc@cN_@cNYeNSeNMeNGgNAgN@sNFgNLeNReNXeN\\cNb@cNh@cNn@aNt@_Nz@_N`A}MfA{MjAyMpAwMvAuM|AsMbBoMfBmMlBkMrBgMvBeM|BaMbC}LfC{LlCwLrCsLvCoL|CkL`DgLfDcLjD}KpDyKtDuKzDoK~DkKbEgKhEaKlE{JpEwJtEqJzEkJ~EeJbF_JfFyIjFsInFmIrFgIvFaIzF{H~FsHbGmHdGgHhG_HlGyGnGqGrGkGvGcGxG}F|GuF~GmFbHgFdH_FfHwEhHoElHgEnH_EpHwDrHqDtHiDvHaDxHwCzHoC|HgC~H_C~HwB`IoBbIgBbI_BdIwAdImAfIeAfI}@hIu@hIk@hIc@hI[hISjIIjIAjIBhIJhIThI\\hId@hIl@fIt@fI~@fIfAlD`C'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(47.112624950009, -119.45990829997), new google.maps.LatLng(47.302929010095, -119.18064713255));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MOSES LAKE CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MOSES LAKE CLASS E2<br />SFC-17999');
    

// SACRAMENTO EXECUTIVE AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('usziF`u~dVuEnCmEfCmEbCoE|BqExBsEtBuEnBwEjBwEdByE`B{E|A{EvA}ErA}ElA_FhA_FbAaF~@aFx@cFt@cFn@cFj@eFd@eF^eFZeFTgFPgFJgFFgF@gFAgFEgFKgFOeFUeFYeF_@eFe@cFi@cFo@cFs@aFy@aF}@aFcA_FgA_FmA}EqA{EwA{E{AyEaBwEeBwEkBuEoBsEsBqEyBoE}BoEaCmEgCkEkCiEoCgEsCeEyCcE}CaEaD}DeD{DiDyDmDwDqDuDwDqD{DoD_EmDaEiDeEgDiEcDmEaDqE_DuE{CyEyC{EuC_FsCcFoCeFkCiFiCkFeCoFaCqF_CuF{BwFwB{FuB}FqB_GmBcGiBeGeBgGcBiG_BkG{AmGwAoGsAqGoAsGkAuGgAwGeAyGaAyG}@{Gy@}Gu@}Gq@_Hm@aHi@aHe@cHa@cH]cHYeHUeHQeHMeHIeHEgHAgH@oHDgHHeHLeHPeHTeHXeH\\cH`@cHd@cHh@aHl@aHp@_Ht@}Gx@}G|@{G`AyGbAyGfAwGjAuGnAsGrAqGvAoGzAmG~AkGbBiGdBgGhBeGlBcGpB_GtB}FvB{FzBwF~BuF`CqFdCoFhCkFjCiFnCeFpCcFtC_FxC{EzCyE~CuE`DqEbDmEfDiEhDeElDcEnD_EpD{DtDwDvDsDxDmDzDiD|DeD~DaDbE}CdEyCfEuChEoCjEkClEgCnEaCnE}BpEyBrEsBtEoBvEkBvEeBxEaBzE{AzEwA|EqA~EmA~EgA`FcA`F}@`Fy@bFs@bFo@bFi@dFe@dF_@dF[dFUfFOfFKfFEfFAfF@fFDfFJfFPdFTdFZdF^dFd@bFh@bFn@bFt@`Fx@`F~@`FbA~EhA|ElA|ErAzEvAzE|AxE`BvEdBvEjBtEnBrEtBpExBnE|BlEbClEfCjEjChEnCfEtCdExCbE|C~D`D|DdDzDhDxDnDvDrDrDvDpDzDnD~DlDbEhDdEfDhEbDlE`DpE|CtEzCxEvCzEtC~EpCbFnCdFjChFhCjFdCnF`CpF~BtFzBvFvBzFrB|FpB~FlB`GhBdGdBfGbBhG~AjGzAlGvAnGrApGnArGjAtGfAvGbAvG`AxG|@zGx@|Gt@|Gp@~Gl@~Gh@`Hd@`H`@bH\\bHXbHTdHPdHLdHHdHDdH@dH?dHEdHIdHMdHQdHUdHMnKbsBh{A}eExsKg_C{dB'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(38.42775, -121.584), new google.maps.LatLng(38.579107919418, -121.40883549319));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SACRAMENTO EXECUTIVE AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SACRAMENTO EXECUTIVE AIRPORT CLASS E2<br />SFC-17999');
    

// TUCSON-RYAN FIELD CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ctqcE~speT?E^ga@~Aaa@`Dw`@~Eg`@~Gq_@zIw^vKw]pMs\\fOk[|P}YnRmX|SwVhU_UpVaStWcQtXaOrY{LjZuJ~ZkHn[aFx[uC`\\iAb\\>`\\jAx[vCl[bF~ZlHjZtJpY|LtX`OtWbQpVbShU~T|SvVlRlXzP|YfOj[pMr\\vKv]zIt^~Gn_@~Ed`@`Dt`@~A~`@^da@_@da@_B~`@_Dt`@_Fd`@}Gn_@{It^wKv]oMr\\gOj[{P|YmRlX}SvVgU~ToVbSuWbQuX`OqY|LiZtJ_[lHm[bFy[vCa\\jAc\\>a\\iAy[uCo[aF_[kHkZsJsY{LuX_OuWcQqVaSiU}T}SwVoRmX}P}YiOk[qMs\\wKw]{Iw^_Hq_@aFe`@aDu`@_Baa@_@ga@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.074588508569, -111.25235565167), new google.maps.LatLng(32.208188565077, -111.09542336345));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TUCSON-RYAN FIELD CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON-RYAN FIELD CLASS E2<br />SFC-17999');
    

// TUCSON, RYAN FIELD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gd{bEzc{eT|yAzdH}_J~uCkxAo_HbDNhFXhFRhFNhFHhFDhF@hFAhFEhFKhFOhFUhFYhF]fFc@fFg@fFk@dFq@dFu@bF{@bF_A`FcA`FiA~EmA~EqA|EwAzE{AzE_BxEcBvEiBtEmBtEqBrEuBpEyBnE_ClEcCjEgChEkCfEoCdEsCbEwC`E{C|D_DzDcDxDgDvDkDrDoDpDqDnDuDjDyDhD}DdDaEbDcEc@}F'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.078444444444, -111.29886111111), new google.maps.LatLng(32.149222222222, -111.22766666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TUCSON, RYAN FIELD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON, RYAN FIELD CLASS E4<br />SFC-17999');
    

// TUCSON, RYAN FIELD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{jjcEts~eTatDleEk_GgbIjmEeaFh@xEp@lGt@lGx@jG|@hG`AhGdAfGhAdGlAbGpAbGtA`GxA~F|A|F`BzFbBxFfBvFjBtFnBrFrBnFvBlFxBjF|BhF`CdFdCbFfC`FjC|EnCzEpCvEtCtEvCpEzCnE|CjE`DfEbDdEfD`EhD|DlDxDnDtDpDrDtDnDvDjDxDfD|DbD~D~C`EzCbEvCdErCfEnChEjCjEfClEbCnE~BrFjC'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(32.170861111111, -111.27730555556), new google.maps.LatLng(32.240861111111, -111.18938888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TUCSON, RYAN FIELD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'TUCSON, RYAN FIELD CLASS E4<br />SFC-17999');
    

// VAN NUYS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yg_pE~r|qUzIpFzFjD~FdD`G~CbGzCdGtCfGnChGhCjGbClG~BnGxBpGrBrGlBrGfBtG`BvGzAxGtAxGnAzGhAzGbA|G|@|Gv@~Gp@~Gj@~Gd@~G^`HX`HR`HL`HF`H@`HA`HG`HM`HS`HY~Ga@~Gg@~Gm@~Gs@|Gy@|G_AzGeAzGkAxGqAvGwAvG}AtGaBrGgBrGmBpGsBnGyBlG_CjGeChGkCfGoCdGuCbG{C`GaD|FeDzFkDxFqDvFuDrF{DpF_ElFeElFeEdBtDjCvFhCxFdC|F`C~F|B`GxBdGtBfGpBhGlBjGhBlGdBpG`BrG|AtGxAvGtAxGpAzGlAzGhA|GdA~G`A`H|@`Hx@bHt@dHn@dHj@fHf@fHb@fH^hHZhHVhHPjHLjHHjHDjH@jHAjHEjHIjHMjHQjHUhH[hH_@hHc@fHg@fHk@fHo@dHu@dHy@bH}@`HaA`HeA~GiA|GmAzGqAzGuAxGyAvG}AtGaBrGeBpGiBnGmBjGqBhGuBfGyBdG}B`GaC~FeC|FiCxFkCvFoCrFsCpFwClFyChF}CfFaDbFcD~EgD|EkDxEmDtEqDpEyC|CeMxBuPvCwPjCyP~B{PrB}PfB_QzA_QnAaQbAaQv@cQj@cQ^cQPcQDcQCcQOcQ[cQg@aQs@aQ_A_QkA_QwA}PcB{PoByP{BwPgCuPsCsP_DqPkDoPwDkPcEiPoEeP{EcPgF_PqF{O}FcQEgFhH_DwF{CsFwCwFsCyFoC}FkC_GiCcGeCeGaCiG}BkGyBmGuBoGqBsGmBuGiBwGeByGaB{G}A}GyA_HsAaHoAcHkAeHgAgHcAgH_AiH{@kHu@kHq@mHm@mHi@oHe@oH_@qH[qHWqHSsHMsHIsHEsHAsH@{HDsHHsHLsHRsHVqHZqH^qHb@oHh@oHl@mHp@mHt@kHx@kH~@iHbAgHfAgHjAeHnAcHrAaHvA_H|A}G`B{GdByGhBwGlBuGpBsGtBqGxBmG~LsBz@Z~An@~Al@`Bj@`Bh@`Bd@bBb@bB`@bB^bB\\bBZdBXdBVdBTdBRdBPdBNfBLfBJfBFfBDfBBfB@fB>fB?fBAfBCfBEfBGfBKfBMdBOdBQdBSdBUdBWdBYbB[bB]bB_@bBa@`Be@`Bg@`Bi@`Bk@~Am@~Ao@~Aq@|As@|Au@zAw@zAy@zA{@xA}@xA_Ar@_@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.137949368114, -118.55874079775), new google.maps.LatLng(34.283218898397, -118.43955555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'VAN NUYS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'VAN NUYS CLASS E2<br />SFC-17999');
    

// VAN NUYS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kjcpEdlprUmhPttBsnAg`PzoPavB}@hEuAxGqAzGmA|GiA|GeA~GaA`H}@bHy@bHu@dHo@dHk@fHg@fHc@hH_@hH[hHWjHQjHMjHIjHErHAjH@jHDjHHjHLjHPjHVjHZhH^hHb@hHf@fHj@fHp@dHt@dHx@bH|@bH`A`HdA~GhA|GlA|GpAzGtAxGxAvG~AtGbBrGfBpGjBnGlBjGpBhGtBfGxBdG|B`G`C~FdC|FhCxFlCvFnCrFrCpFvClFzChFxBlE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.264861111111, -118.56430555556), new google.maps.LatLng(34.366166666667, -118.458));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'VAN NUYS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'VAN NUYS CLASS E4<br />SFC-17999');
    

// WALLA WALLA CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_ywxGrc~pU?G`@}k@fBuk@jDgk@pFsj@rHwi@tJuh@tLkg@rN{e@lPgd@fRkb@zSk`@lUe^|Vy[fXkYnYwVpZ_Tn[eQj\\iN~\\iKp]gH|]eEb^aBd^>b^bB|]fEn]jH~\\jKh\\jNn[fQpZ`TlYxVfXjYzVz[lUd^zSh`@dRjb@lPdd@pNxe@tLhg@tJph@rHri@nFnj@jDbk@fBpk@`@xk@a@xk@gBpk@kDbk@oFnj@sHri@sJph@sLhg@qNze@mPdd@eRjb@{Sj`@mUd^{Vz[gXjYmYxVqZbTo[hQi\\jN_]lKo]jH}]hEc^dBe^@c^_B}]cEq]gH_]iKk\\gNq[eQqZ_ToYwVgXiY}Vy[oUc^}Si`@gRkb@oPed@sN{e@uLkg@uJsh@sHwi@qFsj@mDgk@gBuk@a@}k@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(46.022804440367, -118.39097055438), new google.maps.LatLng(46.166083548494, -118.18514215266));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'WALLA WALLA CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'WALLA WALLA CLASS E2<br />SFC-17999');
    

// TWIN FALLS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mkzaGhguyTfB|h@`@bi@a@bi@gB|h@{uDt|g@mnZsdFtdEezi@axAaf_@z|ZcrAvz@fte@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.410258966143, -114.71076944444), new google.maps.LatLng(42.580933333333, -114.27633333333));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TWIN FALLS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'TWIN FALLS CLASS E4<br />SFC-17999');
    

// SALINAS CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wmo~E|dxdVeCeCppJqgGrzD|qKcqJ`hGUoF[sH_@qHc@qHg@qHk@oHo@oHu@mHy@kH}@kHaAiHeAgHiAgHmAeHqAcHuAaHyA_H}A}GaB{GeByGiBwGmBsGqBqGuBoGyBmG}BiGaCgGeCcGiCaGkC}FoC{FsCwFwCuFyCqF}CmFaDkFcDgFgDcFkD_FmD{EqDwEsDsEwDoEyDkE}DgE_EcEaE_EeE{DgEwD'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(36.532111111111, -121.59827777778), new google.maps.LatLng(36.621277777778, -121.49138888889));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SALINAS CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'SALINAS CLASS E4<br />SFC-17999');
    

// MEDFORD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}g|aGf}jmVgkIdkD|A|Z{mb@dxEgmA_rVzmb@{uEhGzoA~~GgtCuAvIiAnHeApHaArH}@tHy@vHu@vHq@xHm@zHi@zHe@|Ha@|H]|HY~HU~HQ~HM~HI`IEhI?`I@`ID`IH`IL~HP~HT~HX~H\\|H`@|Hd@|Hh@zHl@zHp@xHt@vHx@vH~@tHbArHfApHhAnHlAlHpAlHtAhHxAfH|AdH`BbHdB`HhB~GlBzGpBxGrBvGvBrGzBpG~BlGbCjGdCfGhCdGlC`GnC|FrCzFvCvFxCrF|CnF~CjFbDfFdDbFhD~ElEtE'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.420638888889, -123.00794444444), new google.maps.LatLng(42.667444444444, -122.84180555556));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MEDFORD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MEDFORD CLASS E4<br />SFC-17999');
    

// MEDFORD CLASS E4

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('etsaGbxklVmIa@h}x@ilUxdFhr`@anx@|eUhEkDfEkDdEoDbEuD~DyD|D}DzDaExDgEtDkErDoEpDsElDwEjD{EfD_FdDcF`DgF~CkFzCoFxCsFtCuFrCyFnC}FjCaGhCcGdCgG`CiG|BmGzBoGvBsGrBuGnByGjB{GhB}GdB_H`BcH|AeHxAgHtAiHpAkHlAmHhAoHdAqH`AqH|@sHx@uHt@wHp@wHl@yHh@yHd@{H`@{H\\}HX}HT}HP}HL_IH_ID_I@_IA_IE_II_IM_IQ}HU}HY}H]}Ha@{He@{Hi@yHm@yHq@wHu@wHy@uH}@sHaAqHeAqHiAoHmAmHqAkHuAiHyAgH}AeHaBcHeB_HiB}GkB{GoByGsBuGwBsG{BoG}BmGaCiGeCgGiCcGkCaGoC}FsCyFuCuFyCsF{CoF_DkFaDgFeDcFgD_FkD{EmDwEqDsEsDoEuDkEyDgE{DaE}D}D_EyDcEuDeEoDgEkDiEeDkEaDmE}CoEwCqEsCsEmCuEiCwEcCyE_CyEyB{EsB}EoB_FiB_FeBaF_BcFyAcFuAeFoAeFiAgFcAgF_AiFy@iFs@iFm@kFi@kFc@kF]kFWkFQkFMmFGmFAmF@mFF'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.044722222222, -122.95247222222), new google.maps.LatLng(42.378194444444, -122.66666666667));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MEDFORD CLASS E4';
    attachPolygonInfoBox(polygon, infoBox, 'MEDFORD CLASS E4<br />SFC-17999');
    

// MIDLAND INTERNATIONAL AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oanbEjixnR?Gf@ui@vBoi@hEai@xGmh@fJsg@rLsf@|Nke@dQ_d@jSkb@lUs`@jWw^dYs\\zZmZl\\aXz]qUb_@_Sf`@iPda@qM~a@uJrb@yG`c@{Dhc@}Ajc@>hc@~A`c@|Dpb@zG~a@vJda@rMf`@jPb_@`Sz]rUl\\`XzZlZdYr\\hWt^jUr`@hSjb@dQ|c@|Nhe@rLpf@fJpg@vGjh@hE~h@vBli@f@ri@g@ri@wBli@gE~h@wGjh@eJpg@qLpf@}Nje@eQ|c@iSjb@kUr`@iWt^cYr\\{ZlZm\\bXy]rUc_@`Sg`@jPea@rM_b@xJqb@zGac@|Dic@~Akc@>ic@{Aac@{Dsb@yG_b@uJea@qMg`@iPc_@_S{]qUm\\aX{ZmZeYs\\kWu^mUs`@kSkb@eQ_d@}Nke@sLsf@gJsg@yGmh@iEai@yBoi@g@ui@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(31.858996793395, -102.29981663867), new google.maps.LatLng(32.026002109509, -102.10407378563));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'MIDLAND INTERNATIONAL AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'MIDLAND INTERNATIONAL AIRPORT CLASS E2<br />SFC-17999');
    

// SAN JOSE AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_locFnz}fVdBqIvN}AxB[zBg@pAc@RCHCBAz@WnDwAbCkA`Ae@rHiDt@[`CaAb@Qt@[rAk@~FaCLEbAc@|@a@fAe@xBu@~@[hEwATE~TuEhFeAzEaAbRyDxFy@LAVG|A_@nJiBzEeAlB[|EgAdCe@|EeAlJuB|EiA~]gHr@OrA[bFqA`Ba@|Ai@jBw@dBw@dAo@jCaBhCoBxCmC~AoBlGwGhH_IxHkIhBwB`CqChL}Md@c@LMPQzDkE|CmD`@_@tEaFbBeBn@q@dD{ChQqQTSPQd@e@`@_@lOeOlQqQpAqAdLiLf@a@HGRM`HqE|Aw@hI}DpFiCvEcCp@]bFmCjD_BFCJE~EeCdHoDhEyBr@[^QLExB{@fDw@vAMr@C`A?jBDpAFnALjAPp@Nf@LdBh@~@\\hBdAhAz@pAlAlAxA`FfGdHxJnA|AbEvFnEhGdHpKbB`DtGjMT^N\\@At@s@TUdAcAnAiAnCgCzEoE~ByBHIDEhG_G~B_CfDiDfLiLrDkDjNwMZYrVmUpAmAHGjC`B|FlDzFpDxFvDvF|DrFbEpFfElFlEjFpEfFvEdF|E`F`F~EfFzEjFvEnFtEtFpExFlE|FhEbGfEfGbEjG~DnGzDrGvDvGrDzGnD~GjDbHfDfHbDjH~ClHzCpHvCtHpCxHlCzHhC~HdC`I~BdIzBfIvBhIrBlIlBnIhBpIbBrI~AtIzAvItAxIpAzIjA|IfA~I`A`J|@`Jx@bJr@dJn@dJh@fJd@fJ^fJXhJThJNhJJhJDjJ@jJAjJEjJKhJOhJUhJYhJ_@fJc@fJi@fJm@dJs@dJw@bJ}@`JaA`JgA~IkA|IqAzIuAxI{AvI_BtIcBrIiBpImBnIqBlIwBhI{BfI_CdIeC`IiC~HmCzHqCxHuCtH{CpH_DnHcDjHgDfHkDbHoD~GsDzGwDvG{DrG_EnGcEjGgEfGiEbGmE|FqExFuEtFwEnF{EjF_FfFaF`FeF|EgFvEkFrEmFlEqFfEsFbEwF|DyFvD{FpD}FlDaGfDcG`DeGzCgGtCiGnCkGhCmGdCoG~BqGxBqGrBsGlBuGfBwG~AwGxAyGrA{GlA{GfA}G`A}Gz@}Gt@_Hn@_Hf@_H`@aHZaHTaHNaHHaH@aHAaHGaHMaHSaH[_Ha@_Hg@_Hm@}Gs@}Gy@}G_A{GgA{GmAyGsAwGyAwG_BuGeBsGkBsGqBqGwBoG}BmGcCkGiCiGoCgGuCeG{CcGaDaGgD_GkD{FqDyFwDwF}DsFaEqFgEoFmEkFqEiFwEeF{EcFaF_FeF{EkFyEoFuEuFqEyFmE}FkEcGgEgGcEkG_EoG{DsGwDwGsD{GoD_HkDcHgDgHcDkH_DoH{CqHwCuHsCyHmC{HiC_IeCaIaCeI{BgIwBkIsBmImBoIiBqIeBsI_BwI{AyIuA{IqA{ImA}IgA_JcAaJ}@cJy@cJs@eJo@gJi@gJe@gJ_@iJ[iJUiJOkJKkJEkJAkJ@uJDkJJkJNkJTiJXiJ^iJd@gJh@gJn@gJr@eJx@cJ|@cJbAaJfA_JjA}IpA}ItA{IzAyI~AwIdBsI'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(37.278259069075, -122.03310426261), new google.maps.LatLng(37.445073078497, -121.83589694444));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SAN JOSE AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SAN JOSE AIRPORT CLASS E2<br />SFC-17999');
    

// SANTA BARBARA AIRPORT CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ycsqEvjmzU?Gf@}j@vBuj@hEij@xGsi@fJyh@rLwg@|Nof@dQae@jSmc@jUsa@jWs_@dYo]zZe[l\\yXz]gVb_@qSf`@yPda@}M~a@aKpb@aH~b@aEhc@_Bjc@>hc@`B~b@bEpb@bH|a@bKda@~Mf`@zPb_@rSx]fVl\\xXzZd[bYn]hWr_@jUpa@hSjc@dQ~d@|Nlf@rLtg@dJvh@vGpi@hEdj@vBrj@f@xj@g@xj@wBrj@gEdj@wGpi@eJvh@qLtg@}Nlf@cQ~d@iSjc@kUpa@iWr_@cYn]yZf[k\\xXy]hVc_@rSe`@zPea@`N}a@bKqb@dH_c@bEic@`Bkc@>ic@_Bac@_Eqb@aH_b@_Kea@}Mg`@yPc_@qS{]gVm\\wX{Ze[eYo]kWs_@mUqa@kSkc@eQae@}Nof@sLwg@gJyh@yGsi@iEgj@yBuj@g@}j@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(34.342641231965, -119.941229535), new google.maps.LatLng(34.509579851234, -119.7398831513));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'SANTA BARBARA AIRPORT CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'SANTA BARBARA AIRPORT CLASS E2<br />SFC-17999');
    

// TWIN FALLS CLASS E2

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cgvbGz{wyT?G`@gi@fB_i@jDsh@pF_h@rHeg@tJef@tL_e@rNqc@nP_b@fRg`@|Sk^nUi\\|VcZhXyWnYiUpZwRp[cPj\\kM`]qJp]uG|]yDd^{Af^>d^|A|]zDp]xG~\\rJh\\lMn[dPpZxRnYjUfXxW|VbZlUh\\zSj^dRf`@lP~a@pNnc@tLzd@tJbf@rHbg@pF|g@jDnh@fB|h@`@bi@a@bi@gB|h@kDnh@oF|g@sHbg@uJbf@sL|d@qNpc@mP~a@eRf`@{Sj^mUh\\{VbZgXxWmYjUqZxRo[dPi\\lM_]tJq]xG}]|De^~Ag^@e^{A}]yDq]uGa]qJk\\kMq[cPsZwRoYiUiXwW}VcZoUi\\}Sk^gRg`@oP_b@sNqc@uL}d@uJef@sHeg@qF_h@mDsh@gB_i@a@gi@'), map: map, strokeColor: "#6E4E77", strokeOpacity: 1, strokeWeight: 1, fillColor: "#6E4E77", fillOpacity: 0.35});
    polygon.bounds  = new google.maps.LatLngBounds(new google.maps.LatLng(42.410258966143, -114.58457007032), new google.maps.LatLng(42.553629024784, -114.39098699308));
    polygon.altLow  = 0;
    polygon.altHigh = 17999;
    polygon.desc    = 'TWIN FALLS CLASS E2';
    attachPolygonInfoBox(polygon, infoBox, 'TWIN FALLS CLASS E2<br />SFC-17999');
    

// 51

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mbrbHnoilVlByfNfqN}ElBt{G{jDd|DilIxS'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '51');

// 2301E

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ubmgEboqoTxt}BnkX?ln[d}j@???y|XbkpAyr{Bn_a@{cD{~Sk|MwgsC'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2301E');

// 2301W

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ol|bEfwxsT??k{x@rx{D_jS??d~FygO??e~FaeN?yoBkr_@dDe_AhPsN`RqNdDkIt@cKdDySt@ySt@gWu@_Yt@sG`RcK?}_@t@iP?{f@dD_YrGyS?_YdDwZdDqU?wZdDqNdDcKlBySlBqNfWiPiPwZt@gWu@qUu@g^mBwZt@_Yu@}_@?aR?gW?ySkIwZeDyScKua@sGyS}EwZ?qN?}_@aRu@u@aRu@g^u@o\\u@gW?aRu@ySu@aRmBaRlB}_@eD_Y?kj@t@yt@t@iq@kI{f@cKgyAeD_YqNas@cKov@cKgx@eDmc@?ua@}_@qqBaRe`Bo\\u~CcKe`BkIqrCySw{@qUimCiPoxBkIynAcK{gAsGmdAcK}`A?qpAyS{gAsG}`AkImdAkIubAkIee@sGmdAkIynA?iPlBo\\t@u@?kI}Eo\\sGcKt@{Lt@ee@sG_YsGg^?ym@o\\aRsG_YbK_z@xr{Bo_a@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2301W');

// 2302

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kqtuEpkqiT??xPx@jPAnObKdNvKpLbMpJnOhHnQxE`SbCbTv@zUu@xUwCbUsFzSkI`RyKvO{M|LqOvIyPhFqQnCoLBgLuAkPaDoOiGeNkJqLcMqJqOiHoQyEaScCcTk@uTj@uTbCcTxEaShHqQpJoOpLcMdNkJnOiGjPaDxPy@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2302');

// 2303A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('aaj`Exdo_TluT}_G?vyj@bgBbgBr_L??ni{@ygOhoEusMu~C?}_GkcG_pR?_beAta@cgB'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2303A');

// 2303B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('odx`Ehnl`Tr_Li`Yta@cgBluT}_G?vyj@bgBbgBr_L??hoExgO??hb`AojcAfyA?mesA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2303B');

// 2303C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yrw_E~jk~Sxxb@??bkpAygO??ioEs_L?cgBcgB?wyj@muT|_GfmQyxb@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2303C');

// 2304

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kiffE~qllTroe@??ldrAkugA}xMvda@ojcA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2304');

// 2305

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ubmgEboqoT{m@}vRlaEuxKhb`Ar_L?|ia@{udA}xM'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2305');

// 2306A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_ilhE~gzyTsbH??r_Lyuf@ldA?q__Al}@?fx@?xt@jj@`mAzm@v{@zL`s@ta@hrApUvuAhPfyArNbgBpNbgBpo@rh@pUl}@lBl}@u@`oC{LzhBqUt~Cee@nwA?d_AlS?mS?bii@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2306A');

// 2306B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('smgkErwsyT?u~Cl}Gwyj@~Xu@`mAmBnwAdDxnA?rjB?rjB?`nB?zgA?d_A?`R?t@t@f^lc@lc@n\\ta@fWxSbKzf@fWhq@fWzf@pNfx@zf@?nyo@yxb@?ioEioE'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2306B');

// 2306C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oc}iE`nizTi`Y?mwHaeNxxb@??`eN'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2306C');

// 2306D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('smgkE|wnyT?wyj@l}G?m}Gvyj@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2306D');

// 2306E

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_ilhE~gzyT?cii@|`A~X`nB~XjkAbK|_@jIf{CnxB|aBbfAhrAldAldAxt@zgA~XzL?`mA~kU??yt@bKe_A?kkA?m}@u@mc@t@wZt@sh@`s@ua@~Xo\\dD{f@{Le_AgWcfAgWqo@u@aR`R`Rbl@?de@?vZkj@rNiq@bKyt@zLw{@pN'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2306E');

// 2307

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_ilhEx}oxT?}oRioEe`n@?ok}@r_L?dyOvwh@vuA`z^`mAljcAeaC?{L?{gA_YmdAyt@irAmdA}aBcfAg{CoxB}_@kIkkAcKanB_Y}`A_Y'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2307');

// 2308A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('eo~jEb}bxTvnOeeqAnvGmn[?|oRpmq@??brd@hoEd`n@?|oR?xSe_AySowA?u~Cde@{hBpUaoCzLm}@t@m}@mBsh@qUcgBqo@cgBqNgyAsNwuAiPirAqUas@ua@w{@{LamA{m@yt@kj@gx@?m}@?gx@{f@{f@qNiq@gW{f@gWyScKua@gWmc@o\\g^mc@u@u@aR?e_A?{gA?anB?sjB?sjB?ynA?owAeDamAlB_Yt@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2308A');

// 2308B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iyrhEnxguTqmq@??}oRpmq@??|oR'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2308B');

// 2308C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('smgkEb}bxTdmXeeqAwnOdeqAm}G?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2308C');

// 2309

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('umohExdbxT??tWlA`WxEzUfJbThNxQ`R`OhU|K~WlHbZvDp[`Af\\i@l\\wDt[oHfZ_LbXcOlU{QbReTjN}UhJeWzEwWp@sWmAaWyE{UgJaTyNyQqQaOiU}KaXmHcZwDq[}@g\\|@g\\vDq[lHcZ|KaX`OiUxQgS`TcMzUeJ`WyErWmA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2309');

// 2310A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('i{yiEtohfT?qiHnb]raNxoBxhIuqRqrCs`MimJ'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2310A');

// 2310B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('umtiEfcmfT?caJviQz`H?zbJwuH{gA_sGuyE'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2310B');

// 2310C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{|piEhxofT?s~J|xMhiF?zbJwuH{gAebDsdC'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2310C');

// 2311

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_jagE|iwxTewMwZgx@e|p@npO`R?zdq@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2311');

// 2312

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yad_Ezq~_T??lOxAzZxFnYxKlWlPvTvTrQlX|Mn[|Iz]tEn_@t@h`@o@j`@uEp_@}I|]_Np[sQlXyTvTmWnPoYxK{ZxFmOpAwg@wA{ZwFoYwKmWmPyTuTsQmX}Mo[}I{]uEq_@gAi`@fAk`@tEq_@|I{]|Mo[rQmXxTwTlWmPnYwKzZwFvg@wA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2312');

// 2501E

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('an`rEtznbUplDy|Xh`Y??mwHxxb@??bii@_pRhoEglWpcPu`FuqRkbM_YmdA}zH'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2501E');

// 2501N

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_hqqEfcueU_pRjgDusMxqDkcGezI?kp]fuDyog@~Xm`Dz{PygOvuA}zHldA|zHjbM~Xt`FtqRsiAllYaiKb`PhoEdp['), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2501N');

// 2501S

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('enkqEzpgdUriAmlYflWqcP~oRioE?hb`A{{PxiJ?kcNmqP~wEmxIk_Q'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2501S');

// 2501W

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_hqqEfcueUioEep[`iKc`PlxIj_QlqP_xE?jcNuda@peR'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2501W');

// 2502A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('o|fwEhm|dUf^}k\\hiFt@bft@jvaAkIbbK}fe@inp@i}U?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2502A');

// 2502E

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k~owEhm|dUf__@?|fe@hnp@?n|k@}}Dl~A{cDk{Sicz@{nkA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2502E');

// 2502N

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gymxEl~_fUnqI??iaShgRwmNhcz@znkAzcDj{SoxBn\\oh\\??zwSc`|@??qprA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2502N');

// 2503A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qevjEbezlUmuM}_GzwZsq`@fzBerVpkJ|g_@??e|DhmCgyAriAov@po@gx@nv@yt@po@as@`s@cl@|_@kj@bfAee@|_@g^n}@mc@rh@mc@`s@aR`s@_Y`s@ySvZqNpU{Lt@sGjj@?d^?xSu@jI_Y|_@iP~XwZhP'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2503A');

// 2503B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{t{jEvjtjUzwS~zA`s@nv@gzBdrV{wZrq`@mwHqiOr~Qyml@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2503B');

// 2503C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{t{jEvjtjUtpQve[{wZrq`@mwHqiOr~Qyml@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2503C');

// 2503D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qevjEbezlUmuM}_GzwZsq`@fzBerVpkJ|g_@??ogDdxBc`DxhCwvCdeC}hCdbDuoBrtCg|AnuD??yoA`dD'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2503D');

// 2504A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gs|xEfuh`V?w{@mdAwxD}|Jm~AmdAbKm}@`nBisBqNqmEbmAaRd{CvsF`qEbfHu@hoEwxDbgBhrAvZ{Lbl@_{A'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2504A');

// 2504B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gs|xEfuh`V?w{@mdAwxD}|Jm~AmdAbKm}@`nBisBqNqmEbmAaRd{CvsF`qEbfHu@hoEwxDbgBhrAvZ{Lbl@_{A'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2504B');

// 2505

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iyc|ExaonU?sczAp`lB?lwH|ia@?~`f@uut@tvPib`A?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2505');

// 2506

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g_mxEvgimUp|]as@?b|Rq|]fx@?iaS'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2506');

// 2507E

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yscjEjzj}ThjGqdQ?uzFhhLqNreDn\\izYlrX'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2507E');

// 2507N

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wsvkEnfj`UnxBccE~Xs|OjiFicUxhIuvPzcDd~FdaCe~Flh\\h`YglW`|`@u`Fjj@mvNbw[_qL_cZ'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2507N');

// 2507S

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ydwjErhk~TziCshGoxBioE~yl@sfj@ffX~e]cii@|zt@mh\\i`Y'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2507S');

// 2510A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q}jhEluiaUr_LoqIzcD???sBnnA|MvlAnWfiAp`@`dAzh@j}@fp@hu@nv@~k@p{@ta@f_AtVpjApG?th^s~Q?{{PjwV{aPesP?wiQbxUaaX'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2510A');

// 2510B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{|}gEzb_aU_Yfzn@{{PjwV{aPesP?wiQbxUaaXr_LoqI'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2510B');

// 2512

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yq|hEbau~TxgOs_Llh\\i`Y?tgd@cxUfx@cxUd~F?e~F'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2512');

// 2513

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cjb{EpuycVtcBs{NhfJuyLrhGqeKprCs_Lh}UtuO}yG~mP?xoB{yUtrS?ioEwrLnwH}|CwrE'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2513');

// 2515

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cxpvEbw~gUnh\\?nxBo\\~qFrp_@bii@nzi@xhIln`A|}D?`s@lwH?hssAqlD|rNo{c@?wxuAyp`Cdee@??etbBm~H??{wS'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2515');

// 2516

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_}rtE~eu_V~oRoh\\r_LcgBr_LygOr_LlwHzbJxpC{bJxhI?b{Q??}_@rGgWzLqNrGiPrGkIrGmBrGgWrGqNfWsNbKcKdD}E|EySbKsGrGg^rGqUrGqUrGwZrG_Y?iP?gWmBcK?cKt@cKu@qUmB{LmB{Lu@ySsGiPu@qNeDyt@qNwZ}EqUcKee@eDua@kIg^_Yee@?{L?iP?aR?cK?mB??t@_YxSkIt@kIrGiPpNkIpNqNhPcKpUu@d^_Y|_@cK`R{L`RkIt@cKfWcKbKiPrN?lBgWrGqUjIgWbKqUrGkI|E{f@t@wZ?mc@?g^?aR?gWu@o\\eDaReD}_@t@ua@u@iPdD??s_LkhE'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2516');

// 2517

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_jxrEx{o_V?c{QzbJyhIftJn}@rp_@ygObgBlwH??o\\lc@_Y|_@_YfWiPjIeD`RySjIySzLqNbKcK|E}ElBcKjIqNrGu@dD}_@rG{LdD{L?iPxSaRt@eDlBu@|E}_@|E{LlBsNbKcK|EiPbKkIbKo\\pNsNt@iPvZcKlBiPrGcKbKgWjI{LjIcK`ReDbKsGn\\}EjImBzL?|EmB|E}EbKmBrGmBpNsGxSmBfWySjI}EzL}E`Rt@hPeDvZ|Ext@t@xSmBnv@mBde@mBn\\sG|_@kI~X}ExSsG|EkIde@kIhPsGpU?bKg^bKqUd^cKfWaRpNaR`R?zLmc@t@kId^{LjIgWxSaRbKgWxSqU|EqU~Xe^pNwZzLg^zLua@|E{Lt@o\\t@qU|EgWu@ySmB}Et@_YmBqUsGsNeDaRsG{LsG}EmBgWsGgW{LySqUaRu@qNiPee@sNwZqNg^aRua@cKwZqUua@eDkj@}Eo\\{L_YeDaRiPiq@cK}_@}EySt@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2517');

// 2519

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('efgoExhbvUta@yqDvtGylFhoEldAucBl{Lgx@xjDosDfxGkj@apDyoByqD_YmaE'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2519');

// 2524

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ulnyE`pshU|rfB??dtbBgi`A??cq\\uhe@??_beA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2524');

// 2530

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('mf_uFpy|{U?uyEvsF??tyEwsF?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2530');

// 2531

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ur}dFhv}dVaR{eFrdC{hB|`Apo@iPlwHebDgW'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2531');

// 2534A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('afmrExur~UbfHyhIw{@wuAtrSsoe@`fO?ee@bl@dD?lBn\\dDrGt@rBlBvE?lB`RjIt@zL?jM?zH?lB?t@?xS?rG?jI?zL?bKu@jIt@pN?jI???xS?jI?jI?rG?jI?bKdD|E|E`R|EdDt@?zLfWshl@hrf@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2534A');

// 2534B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('afmrExur~Urhl@irf@ua@~gXsp_@xgOgtJo}@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2534B');

// 2535A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('anmjEtxnxUxqDyfNx}YxfNqmEjbM_rFt`F_rF`s@wsFcgBcgB}oR'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2535A');

// 2535B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('g{gjEzp_xU|`A{jDfnKowHplKjcG?njP?f{Cy}YyfN'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2535B');

// 2601A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iryjFrw`_ScdMmwHziCioExoB}`A~XmdAh`Y{gAj{S??r_Lcl@?t@zwZgtJ?yyA}HmdCp}@kqBem@wr@yeAwcBu_@q{A__CouD}|CgkAslC??abAor@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2601A');

// 2601B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iryjFrw`_ScdMmwHziCioExoB}`A~XmdAh`Y{gAj{S??r_Lcl@?t@zwZgtJ?yyA}HmdCp}@kqBem@wr@yeAwcBu_@q{A__CouD}|CgkAslC??abAqr@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2601B');

// 2601D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('iryjFrw`_ScdMmwHziCioExoB}`A~XmdAh`Y{gAj{S??r_Lcl@?t@zwZgtJ?yyA}HmdCp}@kqBgm@wr@yeAwcBu_@q{A__CouD_}CgkAslC??abAor@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2601D');

// 2602

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('w_{kFht_}R?{hBfyAu@?rjBgyA?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '2602');

// 3202 LOW

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ysvdGtveaU?szy@xiv@??rzy@yiv@?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '3202 LOW');

// 3203A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ywdgG~hfdU?cxUhoEs_LjcGym@`dT`~Ts_Lnb]s_L?mwH}xM'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '3203A');

// 3203B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ywdgG~hfdU?cxUhoEs_LjcGym@`dT`~Ts_Lnb]s_L?mwH}xM'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '3203B');

// 3203C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('acvfGf`acUnqIgx@nqIjwVadTa~T'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '3203C');

// 3203D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('i_{fG|budU_pK{LwvBqlD?}oY|zHoqPtcBySioEr_L?bxUlwH|xM'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '3203D');

// 3204A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ifkaGvde_U?wsMbgBcgBtzF??z{P{bJ?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '3204A');

// 3204B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wwt`Gfza_U????igBpcHkcCv|CmaFr_BwmHqzAy}Dm}FefAybLhgBueJ~`Hm}FhpH|Z|_GbjG|mA|wHsFz~E'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '3204B');

// 4803

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wmcoFbpctU??`p@nDxn@xMll@fW|h@b`@jd@bh@|^do@tX~t@xQny@lJp|@jCb~@_Bl~@oJz|@{Qvy@yXfu@a_@jo@qd@hh@ci@f`@sl@jWao@zMgp@tB}o@mD}n@wMml@eW}h@a`@kd@ch@}^eo@uXau@yQqy@mJs|@yBe~@xBe~@lJs|@xQqy@tXau@|^eo@jd@ih@|h@}_@ll@eW|n@wM|o@mD'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4803');

// 4804A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s{wnFzh{pU??????aa@qeA_YwiAuQgmAeJsoAmBwpAfCupA~JmoAnR}lAvYiiAp`@qdA|f@w~@rl@_x@tq@mp@~u@ah@ny@e_@b|@wUx}@_Lp~@aBj~@xEf}@tOf{@hYfx@pb@nt@fk@zo@fs@rj@nz@rd@z`Ab^ffAbWrjAxOxmAvKfoAtAfyAaGpxAgPjvAcYtrAqa@nmAki@zfAmp@~~@sv@~u@{{@~k@cbAl[aRtw@mYfs@k_@lm@qd@lf@{h@n^cl@zUin@rLmo@`Cio@oDan@_Nwk@eWih@w_@{c@qg@q^kn@oXct@yQqx@uJq{@iCe}@bBi}@rKs{@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4804A');

// 4806E

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y{pbF~ov~T?cxUxgOs_L~bmA?rp_@xxb@m}}B?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4806E');

// 4806W

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y{pbF~ov~Tn_eD??xgOoh\\hql@?ras@cgBlwH_t`B??ojcAyxb@??yiv@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4806W');

// 4807A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('og|_FvmlfU{prBb|cBadT~tBib`A??ywa@~oR?hql@_af@?yiv@ib`A??oyo@xxb@??}qy@nh\\??ygOxgO??~`f@~`f@??xxb@s_L?mwH|oR?xgOhoExgO?bxUxgOmwHh`Ys_Lbii@??fiTr_L?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4807A');

// 4807B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ssmbFx`cdUs_L?mwH|oR?xgOhoExgO?bxUxgOmwH?ib`A'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4807B');

// 4808N

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yu{~EhfrbU?he|@ygO|fe@ygO??bxUs_L??giTcii@?i`Yr_L?c|cB_af@??ckpArrfA??njcAbkpA?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4808N');

// 4808S

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s~k_FrtueUxgO}fe@?|fe@ygO?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4808S');

// 4809

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yaffFh{seUhb`A??xiv@iql@~`f@_pR??yk}A'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4809');

// 4810

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('svgnFx_ssU????mjA{w@iaAgfAew@msAqk@g~As^ofB{PykBqBcnBvIimBxWoiBfe@ubBpq@eyAn|@cmAveA}~@~lA}n@brAs]|tAoKhuA|DjsAdW`oAxh@phAfy@``A`hAvu@ztAzi@h_Bz\\bgB`O~kBv@|mBqKrlBoYthByf@naB{r@pyA|B~{@aCx{@cJjz@_Qnw@mWjs@i]~m@ob@rg@{f@f`@ij@bXyl@lOen@jFqn@y@wm@_J}k@_Sai@o[ge@ic@o`@ij@a[kp@wTgu@eLcy@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4810');

// 4811

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('k{lhFfi|rU??nWtA|VfFvU|J|ShOtQfS|NtVxKrYjHx[tDh]bAb^m@f^wDl]mH|[{KtY_OxVwQhSaTjOyU~J_WhFsWz@oWsA}VgFwU{J_TiOuQgS_OuVyKsYkHy[wDk]{@c^z@c^vDk]jHy[xKsY~NuVtQgS~SiOvU}J|VgFnWuA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4811');

// 4812

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ympmFfz|rU????????{UgeBi^g`Byi@yxAet@coAi}@mcA{dAcv@wjAmg@wnAuWwpAkGwpAbGynAlWyjAdg@_eA~u@m}@jcAit@boA}i@zxAm^l`BeRpeBmEdhBpGdhBmwHivoAxFdy@dL~w@`Pfv@xSbt@de@rq@eZpzBtNbzBbk@`nBjcAlwAbuAhx@r~AxS~~AsPfvAmu@beAauAhl@klB`cAyc@`~@yn@dx@uy@fq@kcAfi@wkAn`@qrA`WywAbMg{AzB{|AWc}AlwHhvoA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4812');

// 4813A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oefrFhqasUsp_@yziA?iql@lwH?hb`Aras@??fUboDzExjDmC|jDyNxiD_ZlgDae@zcDyo@`_Dgz@byCedA~qCumAxiCqvAr`Cy~AnvBkfBlkBcmBr_BsiBvkBeyO?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4813A');

// 4816N

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oefrF~zeoU?yk}Axiv@ryZ?lljByiv@gzg@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4816N');

// 4816S

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('yownFnfjqUcii@uvPs_LmwH?mljB??lBziCd^hsBlc@`oCjj@|bChq@xoBbfA|bCjkAbgB|`AvuAde@hPt@zf@jeBrh@|_@`s@xnApo@fzBriA|bC|_@`nBbl@nyChsBbhC|bCreDxjDjfCvrEzgA||C?pjIgWxkEfWrfEbKnuFeDjgDbK|_GvZ|_GhPxpCxS~wE`RdaC?zm@?lB'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '4816S');

// 5101

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y|kyEblngSowHhcUouFw|Aas@euKde@ioEz{P?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5101');

// 5103A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}vubErt~fSjj@_ss@nqIpiH_Yfwk@{bJym@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5103A');

// 5103B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oyycErt~fS?sczAzld@roe@kj@~rs@yoB}`AcgBhaSmh\\k_Q'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5103B');

// 5103C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('on{fExigeS?}`Af~d@yxgAbxU?n{c@~`f@?rczAg}MyfIeeIarEoxCiwDskGsfB??o~BkEta@ioE_cZ?mh\\cgB???????????}oR'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5103C');

// 5104A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('swjqEraaxR`lG_uIbpb@?vsM|oR?nh\\_ry@??mce@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5104A');

// 5105

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('oqnrEbfgyR?oyo@zek@?alG~tI?lce@yxb@?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5105');

// 5107A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gnhdErxliS?wc`@rbOeD`kFxt@rdJlrQ`Rr_Lmgb@?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5107A');

// 5107B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m~}lErckfSbfqD?hql@hoExxb@?`pDbgBe{ChoE`gPvzd@?vo|@{cmDpqg@csvB}qT~Xmz|A??vmNoxg@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5107B');

// 5107C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y}fpErckfSh~gB?wmNnxg@_Ylz|AissAmvNeaCe{{A?i`Y'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5107C');

// 5107D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s~zkErckfS~s`Bxiv@~s`B}oR?oh\\ioE?iql@ioEifnC?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5107D');

// 5107E

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wwfnE`gmjS????vtIbjGnddA~zf@hgRt}BuqY_af@{ogA{bL'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5107E');

// 5107H

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('y}fpErckfS`wnA??h_dAl}G??ts`AissAmvNeaCe{{A?i`Y'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5107H');

// 5107J

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wewmErckfSffX?wmNnxg@_Yve[m}G??i_dA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5107J');

// 5107K

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gnhdEzskhS?qjIagPwzd@d{CioEdqz@~~c@?rra@{iCxgO_rF?aRs_LsdJmrQakFyt@sbOdD'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5107K');

// 5111A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c~tfEnrpjSm}G~`f@_jSlwHmkpB?uqY_af@rrfAr_L~s`BcxU'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5111A');

// 5111B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c~tfEnrpjSm}G~`f@_jSlwHmkpB?uqY_af@rrfAr_L~s`BcxU'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5111B');

// 5111C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s|}fEntwkSeaClh\\cii@bxUojcAygOs~Qi`YlkpB?~iSmwH'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5111C');

// 5111D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s|}fEntwkSeaClh\\cii@bxUojcAygOs~Qi`YlkpB?~iSmwH'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5111D');

// 5113

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_sonEt}ylSvsM??xgOwsM??ygO'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5113');

// 5115

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('gslbExtcqS??jw@tIzq@l]hg@jn@zXtz@zGbaA{GbaA{Xtz@ig@jn@{q@l]kw@nIkw@mI{q@k]kg@kn@{Xuz@{GeaAzGeaAzXuz@jg@kn@zq@k]jw@sI??'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5115');

// 5117

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uagwE~kfuSynHlpV?jj@byVcfAiiMutU'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5117');

// 5123

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wzxpEn~zqSkcGi`Y~X_af@b~TcxUlwHbxUs_LnwHr_LnjPzLmdAlaEdzIq|]nh\\'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5123');

// 5701

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wfsvGxsnyUl~AsdJfuDijGw{@sdJmdAi{ZjcGcl@l}GjiF`s@|uQ~XvlMjiFhjG~XtrSzcDxnHl~Ad{C_YnqIqkJrdJas@cgB?h{Z_pR?iPysd@sGs_LcgBioEm~As_L'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5701');

// 5706

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}`xuGzvt{UkIp`TmvN???i_CitMomCwpJ_sC_`Mu^euMicB{vG|c@kdP??u{@cpLqmEoh\\j{S?de@r_L??{f@roe@lBjbr@~oR?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '5706');

// 6402A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('c{tuFhhhpT?xxb@`eN??bii@zmqArzTlwHn\\lwHcz|@xgO?ioE_af@iql@cii@cii@?}`f@bii@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6402A');

// 6402B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cymtFb~}nTmwH?mh\\bxU?~oR|`f@cii@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6402B');

// 6403

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('kpgvFvtkmT|{B??fuD}{B??guD'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6403');

// 6404A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{flzFvgfoTwsMnxpEflWfzg@bii@?`s@shG?iaaF_pRard@_pR?usMfiT'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6404A');

// 6404B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cpvxFrpvoT?haaF|oRib`AmwHc~jCmwH{~S'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6404B');

// 6404C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('s{zzFhaxuTvsMbkpA|`f@?r_Lyog@cii@?glWgzg@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6404C');

// 6404D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('cpvxFrpvoT?haaF|oRib`AmwHc~jCmwH{~S'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6404D');

// 6405

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ombwF~rxvTras@nyo@b~jC?xiv@oyo@?ymdCyziAoahAhoEtgd@ygO?mwHbz|@mwHo\\?~gdAygO??~`f@m}}B?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6405');

// 6406A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ombwF~hupT?~hbErrfA?ezIyxb@?_vgCaeN??yxb@s_Lr_Lsp_@?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6406A');

// 6406B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ombwF~hupTrp_@?r_Ls_L?_pRiql@rp_@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6406B');

// 6407

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('_ueuFhlvrTzmqArzT?~gdAygO??~`f@yiv@?ezIyxb@?yk}A'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6407');

// 6412A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q_}uF~~qjTr_L??|oRs_L??}oR'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6412A');

// 6412B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q_}uF~~qjTr_L??|oRs_L??}oR'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6412B');

// 6412C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q_}uFdmfjTr_L_vC?xgOs_L??wpJ'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6412C');

// 6412D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('q_}uFdmfjTr_L_vC?xgOs_L??wpJ'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6412D');

// 6413

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('olvlFj}j_Txxb@k`Kjen@mh\\?_pRajEygOylr@xxb@mn[`}ZbgBxkL'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6413');

// 6701

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{n~dHrtdkVtyLuvIwZjq^{}Ko\\?c|R'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6701');

// 6703A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('omd~GxqxkVebD?cKovG`nB_sGflPfvE_lNfsI'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6703A');

// 6703B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('umf~GffgkVrjBirA|}D?xnAppAxqD~wEglPgvE'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6703B');

// 6703C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('m`u}Gn}mkVj`KreKn\\l{Ew|AtcBemXorJ~kNgsI'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6703C');

// 6703D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('umf~GffgkVxpC}{Ibl@e_AhrAu@f^zcDxS|E`s@hpFynAqpA}}D?sjBhrA'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6703D');

// 6714A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wi}|Gr~e{U??joBqgC|dBgnAfvE|sA|uB|hD|yDrU??rvCu[vhWluMcfHhhx@ubAu@as@nzDezIz}K??s_Ag_EytAanCmqBcFk_AofAsqCofA??{_BaVqjI}ag@t@yxb@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6714A');

// 6714B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qra|Gr_g{U??|~BkdAhnD}yA??pz@}oAjeBpU?u}BhhL?yoB|nXwhWmuM'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6714B');

// 6714C

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('}we{Gbf|zUxoB??zs]_qLjcs@wuA?bfHihx@xoB}nX'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6714C');

// 6714D

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('wgv{Gdyt}U?t~C{cD`mHguD{m@dzI{}K'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6714D');

// 6714F

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('{_s|Gl{q}U??cv@mKimAfWoq@dTqrC??}bh@pjI|ag@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6714F');

// 6714G

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('ok}|Gtlb}UyiJebDpkJyiv@u@jnb@?p}W'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6714G');

// 6714H

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('uhj}Gfhn{U??|_@sjB??nnA{F|aBoX`}Bar@??flAmhAqkJxiv@owA?de@e`n@'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '6714H');

// 7001A

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qscbGdob_S?sp_@xgO?jcGrp_@glW?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '7001A');

// 7001B

    polygon = new google.maps.Polygon({path: google.maps.geometry.encoding.decodePath('qscbGdob_S???sp_@xgO?jcGrp_@glW?'), map: map, strokeColor: "#ff0000", strokeOpacity: 1, strokeWeight: 1});

    attachPolygonInfoBox(polygon, infoBox, '7001B');

    return polygons;
}