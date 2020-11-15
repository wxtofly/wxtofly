// Global variables
var mCenter = {
  lat: 0,
  lng: 0
};
var mStep_direction = 1;
var mCoordList = [];
var mPolygons = [];

const STEP_SIZE = 1;

//fs.readFile(
//  path.join(__dirname, 'public', 'areas.txt'), 'utf8',
//  function(err, contents) {
//    let lines = contents.split('\n');
//    let groups = groupLines(lines);

//    groups.forEach(function(group) {
//      group.forEach(function(cmd) {
//        parseCommand(cmd);
//      });
//      plotAndReset();
//    });
//  });


function parseOpenAir(contents) {
    let lines = contents.split('\n');
    let groups = groupLines(lines);

    groups.forEach(function (group) {
        group.forEach(function (cmd) {
            parseCommand(cmd);
        });
        plotAndReset();
    });
}


/**
 * Read through the lines and group everything into definition groups.
 *
 * Create an array for each group of commands and add them all to an
 * array holding all command groups.
 *
 * @param  {Array of String} lines Raw file contents
 * @return {Array[ Array of String]}      Array with line groups each in array
 */
function groupLines(lines) {
  let groups = [];
  let i = 0;

  while (i < lines.length) {
    let g = [];

    // get ready for first group by ignoring repeating blank lines
    while (i < lines.length && lines[i].trim() == '') {
      i++;
    }

    while (i < lines.length && lines[i].trim() != '') {
      // add all this to group g
      g.push(lines[i++]);
    }

    groups.push(g);
  }

  return groups;
}



function plotAndReset() {
  console.log('Plot and reset');

  // Add the coordinates for this polygon to the master list
  mPolygons.push(mCoordList);

  // Reset internal storage
  mCoordList = [];

}


function parseCommand(cmd) {
  // First pattern matches two groups - the main command and the rest of the line
  let pattern = /(AN|AC|AL|AT|AH|DC|DA|DP|DB|V|\*) ([\w\d\s\:\.\=\+\-\,]*)/g;
  let m = pattern.exec(cmd);

  if (m != null) {
    let command = m[1].toUpperCase();
    let rest = m[2].trim().toUpperCase();

    let pos = null;
    let radius = 0;
    let fromDeg = 0;
    let toDeg = 0;

    console.log('command: ' + command);
    console.log('rest: ' + rest);

    switch (command) {
      case "*":
        // Comment - do nothing
        console.log("parseCommand: comment");
        break;

      case "AC":
        // Airspace Class - expect a simple one letter argument
        console.log("parseCommand: Airspace Class");

        // implement coloring for different airspaces
        break;

      case "AT":
        // Airspace Type - expect a type like "TMA", "CTR" etc.
        console.log("parseCommand: Airspace Type");

        // implement coloring for different airspace type
        break;

      case "AN":
        // Airport name, expect string parameter
        // not implemented yet

        console.log("parseCommand: Airport Name: " + rest);
        break;

      case "AL":
        // Altitude Low, expect a parameters like "3500 ft" or "SFC"
        // Not implemented yet

        console.log("parseCommand: Altitude Low");
        break;

      case "AH":
        // Altitude High, expect a parameters like "35000ft" or "35000 ft"
        // Not implemented yet

        console.log("parseCommand: Altitude High");
        break;

      case "DC":
        console.log("parseCommand: Draw Circle");

        // Draw Circle command - expect an decimal argument
        radius = Math.floor(parseFloat(rest) * 1852);
        pos = null;
        if (mCenter != null) {
          for (let deg = 0; deg < 360; deg++) {
            pos = {
              lat: 1,
              lng: 1
            };
            pos = geometry.computeOffset(mCenter, radius, deg);
            addPosToCoordList(pos);
          }
        }
        break;

      case "V":
        // Variable Assignment Command
        // The pattern matches a variable name and the value argument from the rest of the line above

        console.log("parseCommand: Variable assignment");

        let assignPattern = /([\w]+)\s*=([\s\w\d\:\.\+\-]*)/g;
        m = assignPattern.exec(rest);

        if (m != null) {
          if (m[1] == "D") {
            // Variable name D means this is a Direction assignment
            console.log('Direction command, sign: ' + m[2]);
            if (m[2] == "+") {
              mStep_direction = 1;
            } else {
              mStep_direction = -1;
            }

          } else {
            // A position variable assignment, any variable name us supported although I have only seen X used
            console.log('Variable assignment: ' + m[1] +
              ' identified, remaining arguments: ' + m[2]);

            pos = parseCoordinateString(rest);
            if (pos != null) {
              console.log(`Setting mCenter to: (${pos.lat}, ${pos.lng})`);
              mCenter = pos;

            } else {
              // If we cannot parse this as a position, we need to look into this later
              console.log("parseCommand: Unsupported assignment...");
              process.exit(1);
            }

          }

        } else {
          // We did not find anything useful in the arugument string after the name

          console.log("parseCommand: Variable argument parsing error");
        }
        break;

      case "DA":
        // Draw Arc Command
        // Pattern matches three comma separated integer aruments

        console.log("parseCommand: Draw Arc command");

        let threeArgsPattern = /([\d]+)\s*\,\s*([\d]+)\s*\,\s*([\d]+)/g;
        m = threeArgsPattern.exec(rest);

        if (m != null) {
          radius = parseInt(m[1]) * 1852;
          fromDeg = parseInt(m[2]);
          toDeg = parseInt(m[3]);
          drawArcFromTo(radius, fromDeg, toDeg);
        } else {
          // We did not find the expected three integers in the argument string
          console.log("parseCommand: Draw arc parameters not recognized");
        }
        break;

      case "DP":
        // Define Point Command
        // Pattern matches a potential coordinate string

        console.log("parseCommand: Draw Point Commannd");

        let coordPattern = /([\d\:\. \w]+)/g;
        m = coordPattern.exec(rest);
        if (m != null) {
          pos = parseCoordinateString(m[1]);
          addPosToCoordList(pos);

          console.log(`Got a coordinate: (${pos.lat}, ${pos.lng})`);
        } else {
          console.log("parseCommand: Problem parsing DP argument");
          process.exit(1);
        }
        break;

      case "DB":
        // Draw Between Command
        console.log("parseCommand: Draw between command");

        // Pattern matches two possible coordinates separated by a comma
        betweenPattern = /([\d\:\. \w]+) *, *([\d\:\. \w]+)/g;
        m = betweenPattern.exec(rest);

        if (m != null) {
          let pos1 = parseCoordinateString(m[1]);
          let pos2 = parseCoordinateString(m[2]);
          console.log(
            `parseCommand: Got two coordinates : \n  (${pos1.lat}, ${pos1.lng}) and\n  (${pos2.lat}, ${pos2.lng})`
          );

          if (pos1 != null && pos2 != null) {
            fromDeg = (geometry.computeHeading(mCenter, pos1) + 360) % 360;
            toDeg = (geometry.computeHeading(mCenter, pos2) + 360) % 360;
            radius = geometry.computeDistanceBetween(mCenter, pos1);
            drawArcFromTo(radius, fromDeg, toDeg);
          }
        } else {
          console.log("parseCommand: Problem parsing draw between arguments");
          return;
        }
        break;

      default:
        console.log("parseCommand: not recognized");
        return(1);
        break;


    } // Switch ending here

  } else {
    console.log('problems parsing command');
    return(1);
  }
}



/**
 * Parse coordinates in the String 'openAir format.
 *
 * Uses a Regular Expression to parse the components of a coordinate string, convert into double
 * and create a LatLng object that can be used in Google Maps.
 *
 * @param coordString for example "39:29.9 N 119:46.1W" or "39 : 29:9 N 119:46 :1W" for KRNO airport
 * @return LatLng object
 */
function parseCoordinateString(coord) {
  let myRegexp =
    /([\d]+) *: *([\d]+) *[:.] *([\d])+ *([NS]) *([\d]+) *: *([\d]+) *[:.] *([\d]+) *([EW])/g;
  let m = myRegexp.exec(coord);
  let lat = 0;
  let lng = 0;

  if (m.length == 9) {

    // Given a string like "39:29.9 N 119:46.1W" we will get 8 matches:
    // "39", "29", "9", "N" and "119", "46", "1", "W" starting at index 1

    lat = parseFloat(m[1]) + parseFloat(m[2]) / 60. + parseFloat(m[3]) / 3600;
    lng = parseFloat(m[5]) + parseFloat(m[6]) / 60. + parseFloat(m[7]) / 3600;
    if (m[4].toUpperCase() == "S") lat *= -1;
    if (m[8].toUpperCase() == "W") lng *= -1;

  } else {
    console.log("parseCoordinateString: Cannot parse coordinate String: " +
      coord);
    exit - 1;
  }

  return {
    lat: lat,
    lng: lng
  };
}


function addPosToCoordList(pos) {
  mCoordList.push(pos);
}


/**
 * Utility function producing Arc coodinates with a given radius between to headings.
 *
 * Requires a center point to be in place - will ignore command if not defined.
 *
 * @param int radius
 * @param int fromDeg
 * @param int toDeg
 */
function drawArcFromTo(radius, fromDeg, toDeg) {
  if (mCenter != null) {
    let x = 0;
    let y = 0;
    let newPos = {};
    let degrees = fromDeg;
    let step = mStep_direction * STEP_SIZE;
    do {
      newPos = geometry.computeOffset(mCenter, radius, degrees);
      addPosToCoordList(newPos);
      degrees += step;
      if (Math.abs(((degrees + 360) % 360) - toDeg) < STEP_SIZE)
        break;
    } while (true);
  }
}


/**
 * Utility function converting navigation headings to normal math angle notation.
 *
 * For example in Navigation 270 degrees is West, but in a coordinate system this is more like south.
 * Though i would need this, but will just leave it here anyway...
 *
 * @param compass navigational degrees
 * @return corodinate system degrees
 */
function compasToMathDegrees(compass) {
  return (((90 - compass) + 360) % 360);
}
