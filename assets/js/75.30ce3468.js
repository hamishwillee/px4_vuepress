(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1091:function(t,e,i){},1238:function(t,e,i){"use strict";var a=i(1091);i.n(a).a},1268:function(t,e,i){"use strict";i.r(e);i(1238);var a=i(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flight-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-modes"}},[t._v("#")]),t._v(" Flight Modes")]),t._v(" "),a("p",[a("em",[t._v("Flight Modes")]),t._v(" define how the autopilot responds to user input and controls vehicle movement. The tables below summarizes flight modes for fixed wing and copter ("),a("a",{attrs:{href:"#key"}},[t._v("table key is below")]),t._v('). Note that this is the "high level" default behaviour, and may vary based on vehicle parameters. The linked topics (sidebar) provide more detailed information about individual modes, including their tuning parameters.')]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" A "),a("em",[t._v("beginner friendly")]),t._v(" explanation of all flight modes is provided in "),a("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html"}},[t._v("Getting Started > Flight Modes")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"fixed-wing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing"}},[t._v("#")]),t._v(" Fixed Wing")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticClass:"col_modes"},[t._v("Modes")]),t._v(" "),a("th",{staticClass:"col_r_p"},[t._v("Roll & Pitch")]),t._v(" "),a("th",{staticClass:"col_yaw"},[t._v("Yaw")]),t._v(" "),a("th",{staticClass:"col_throttle"},[t._v("Throttle")]),t._v(" "),a("th",{staticClass:"col_sensor"},[t._v("Position Sensors")]),t._v(" "),a("th",{staticClass:"col_summary"},[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",{attrs:{id:"position_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/position_fw.md"}},[t._v("Position")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(304),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("RC mode where centered sticks put vehicle into straight and level flight where vehicle posture/attitude, altitude, and the straight line vehicle path are maintained against wind (and other forces).\n   "),a("ul",[a("li",[t._v("Centered RC RPY sticks – level flight that follows a straight line ground track in the current direction against any wind.")]),t._v(" "),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Pitch stick controls altitude (same as "),a("a",{attrs:{href:"#altitude_fw"}},[t._v("Altitude")]),t._v(").")]),t._v(" "),a("li",[t._v("Roll stick controls roll angle. Autopilot will maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v(" (same as "),a("a",{attrs:{href:"#stabilized_fw"}},[t._v("Stabilized")]),t._v(").")]),t._v(" "),a("li",[t._v("Throttle sets airspeed (same as "),a("a",{attrs:{href:"#altitude_fw"}},[t._v("Altitude")]),t._v(").")]),t._v(" "),a("li",[t._v("Roll, pitch and yaw are all angle-controlled (so it is impossible to roll over or loop the vehicle).")]),t._v(" "),a("li",[t._v("Yaw stick actuates the rudder (signal will be added to the one calculated by the autopilot to maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v("). This is the same as "),a("a",{attrs:{href:"#stabilized_fw"}},[t._v("Stabilized")]),t._v(".")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"altitude_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/altitude_fw.md"}},[t._v("Altitude")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(304),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[a("p",[t._v("S (roll)")]),a("p",[t._v("S"),a("sup",[t._v("+")]),t._v("(pitch)")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#altitude_only"}},[a("img",{attrs:{src:i(308),title:"Altitude required (e.g. Baro, Rangefinder)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("RC mode like "),a("a",{attrs:{href:"#stabilized_fw"}},[t._v("Stabilized")]),t._v(" mode but with "),a("em",[t._v("altitude stabilization")]),t._v(" (centered sticks put vehicle into straight and level flight and maintain current altitude). The vehicle course is not maintained, and can drift due to wind.\n  "),a("ul",[a("li",[t._v("Centered RPY sticks (inside deadband):\n      "),a("ul",[a("li",[t._v("Autopilot maintains altitude with wings also level.")]),t._v(" "),a("li",[t._v("Throttle stick controls the airspeed of the aircraft if an airspeed sensor is connected (without airspeed sensor, the user cannot control throttle).")])])]),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Pitch stick controls altitude.")]),t._v(" "),a("li",[t._v("Throttle stick controls the airspeed of the aircraft (as for centered RPY sticks).")]),t._v(" "),a("li",[t._v("Yaw stick actuates the rudder (signal will be added to the one calculated by the autopilot to maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v("). This is the same as "),a("a",{attrs:{href:"#stabilized_fw"}},[t._v("Stabilized")]),t._v(".")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"stabilized_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/stabilized_fw.md"}},[t._v("Stabilized")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(309),title:"Medium difficulty to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode where centered RP sticks levels vehicle attitude (roll and pitch). The vehicle course and altitude are not maintained, and can drift due to wind.")]),t._v(" "),a("ul",[a("li",[t._v("Pitch stick controls pitch angle.")]),t._v(" "),a("li",[t._v("Roll stick controls roll angle. Autopilot will maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v(".")]),t._v(" "),a("li",[t._v("Throttle stick controls throttle.")]),t._v(" "),a("li",[t._v("Yaw stick actuates the rudder (signal will be added to the one calculated by the autopilot to maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v(").")])])])]),t._v(" "),a("tr",{attrs:{id:"acro_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/acro_fw.md"}},[t._v("Acro")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(305),title:"Hard to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode for performing acrobatic maneuvers e.g. rolls, flips, stalls and acrobatic figures.")]),t._v(" "),a("p",[t._v("RPY stick inputs are translated to angular rate commands that are stabilized by autopilot. Throttle is passed directly to the output mixer.")])])]),t._v(" "),a("tr",{attrs:{id:"manual_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/manual_fw.md"}},[t._v("Manual")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(305),title:"Hard to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v('RC mode where stick input is sent directly to the output mixer (for "fully" manual control).')]),t._v(" "),a("p",[t._v("This is the only mode that overrides the FMU (commands are sent via the safety coprocessor). It provides a safety mechanism that allows full control of throttle, elevator, ailerons and rudder via RC in the event of an FMU firmware malfunction.\n   ")])])]),t._v(" "),a("tr",{attrs:{id:"takeoff_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/takeoff.md"}},[t._v("Takeoff")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle initiates the takeoff sequence using either "),a("em",[t._v("catapult/hand-launch mode")]),t._v(" or "),a("em",[t._v("runway takeoff mode")]),t._v(" (in the current direction).")])]),t._v(" "),a("tr",{attrs:{id:"land_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/land.md"}},[t._v("Land")])]),t._v(" "),a("td",{staticClass:"centred",attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle initiates the "),a("a",{attrs:{href:"../flying/fixed_wing_landing.md"}},[t._v("fixed-wing landing")]),t._v(" sequence.")])]),t._v(" "),a("tr",{attrs:{id:"hold_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/hold.md"}},[t._v("Hold")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle circles around the GPS hold position at the current altitude.")])]),t._v(" "),a("tr",{attrs:{id:"return_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/return.md"}},[t._v("Return")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle flies a clear path to a safe location. The return behaviour depends on parameter settings, and may follow a mission path and/or mission landing pattern (if defined).")])]),t._v(" "),a("tr",{attrs:{id:"mission_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/mission.md"}},[t._v("Mission")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle executes a "),a("a",{attrs:{href:"../flying/missions.md"}},[t._v("predefined mission/flight plan")]),t._v(" that has been uploaded to the flight controller. ")])]),t._v(" "),a("tr",{attrs:{id:"offboard_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/offboard.md"}},[t._v("Offboard")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle obeys attitude setpoints provided over MAVLink (often from a companion computer connected via serial cable or wifi).")])])])]),t._v(" "),a("h2",{attrs:{id:"multicopter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[t._v("#")]),t._v(" Multicopter")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Modes")]),t._v(" "),a("th",[t._v("Roll & Pitch")]),t._v(" "),a("th",[t._v("Yaw")]),t._v(" "),a("th",[t._v("Throttle")]),t._v(" "),a("th",[t._v("Position Sensors")]),t._v(" "),a("th",{staticClass:"col_summary"},[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",{attrs:{id:"position_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/position_mc.md"}},[t._v("Position")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(304),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("RC mode where RPT sticks control "),a("em",[t._v("speed")]),t._v(" in corresponding directions. Centered sticks level vehicle and hold it to fixed position and altitude against wind.\n  "),a("ul",[a("li",[t._v("Centered RPT sticks hold x, y, z position steady against any wind and levels attitude.")]),t._v(" "),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v('Roll/Pitch sticks control speed over ground in left-right and forward-back directions (respectively) relative to the "front" of the vehicle.')]),t._v(" "),a("li",[t._v("Throttle stick controls speed of ascent-descent.")]),t._v(" "),a("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),a("li",[t._v("Takeoff:\n      "),a("ul",[a("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"altitude_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/altitude_mc.md"}},[t._v("Altitude")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(304),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S")]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#altitude_only"}},[a("img",{attrs:{src:i(308),title:"Altitude required (e.g. Baro, Rangefinder)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("RC mode like "),a("a",{attrs:{href:"#manual_stabilized_mc"}},[t._v("Manual/Stabilized")]),t._v(" mode but with "),a("em",[t._v("altitude stabilization")]),t._v(" (centered sticks level vehicle and hold it to fixed altitude). The horizontal position of the vehicle can move due to wind (or pre-existing momentum).\n  "),a("ul",[a("li",[t._v("Centered sticks (inside deadband):\n      "),a("ul",[a("li",[t._v("RPY sticks levels vehicle.")]),t._v(" "),a("li",[t._v("Throttle (~50%) holds current altitude steady against wind.")])])]),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Roll/Pitch sticks control tilt angle in respective orientations, resulting in corresponding left-right and forward-back movement.")]),t._v(" "),a("li",[t._v("Throttle stick controls up/down speed with a predetermined maximum rate (and movement speed in other axes).")]),t._v(" "),a("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),a("li",[t._v("Takeoff:\n      "),a("ul",[a("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"manual_stabilized_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/manual_stabilized_mc.md"}},[t._v("Manual/ Stabilized")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(309),title:"Medium difficulty to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S")]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode where centered sticks level vehicle (only - position is not stabilized).")]),t._v(" "),a("p",[a("ul",[a("li",[t._v("Centered RP sticks level vehicle.")]),t._v(" "),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Roll/Pitch sticks control tilt angle in those orientations, resulting in corresponding left-right and forward-back movement.")]),t._v(" "),a("li",[t._v("Throttle stick controls up/down speed (and movement speed in other axes).")]),t._v(" "),a("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])])])]),a("p")])]),t._v(" "),a("tr",{attrs:{id:"rattitude_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/rattitude_mc.md"}},[t._v("Rattitude")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(305),title:"Hard to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S or S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode that allows pilots to fly using "),a("a",{attrs:{href:"#manual_stabilized_mc"}},[t._v("Manual/Stabilized")]),t._v(" flight most of the time, but still perform "),a("a",{attrs:{href:"#acro_mc"}},[t._v("Acro mode")]),t._v("-style flips and tricks when desired. Centered sticks level vehicle.\n  "),a("ul",[a("li",[t._v("Sticks within mode's threshold (like "),a("a",{attrs:{href:"#manual_stabilized_mc"}},[t._v("Manual/Stabilized mode")]),t._v(").\n      "),a("ul",[a("li",[t._v("Centered RP sticks level vehicle. Roll/Pitch sticks control tilt angle in those orientations, resulting in corresponding left-right and forward-back movement.")])])]),t._v(" "),a("li",[t._v("Sticks outside threshold (like "),a("a",{attrs:{href:"#acro_mc"}},[t._v("Acro mode")]),t._v("): \n      "),a("ul",[a("li",[t._v("RPY stick inputs control the rate of angular rotation around the respective axes.")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"acro_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/acro_mc.md"}},[t._v("Acro")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(305),title:"Hard to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode for performing acrobatic maneuvers e.g. flips, rolls and loops.")]),t._v(" "),a("p",[t._v("RC RPY stick inputs control the rate of angular rotation around the respective axes. Throttle is passed directly to the output mixer.  When sticks are centered the vehicle will stop rotating, but remain in its current orientation (e.g. possibly inverted) and moving according to its current momentum.")])])]),t._v(" "),a("tr",{attrs:{id:"orbit_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/orbit.md"}},[t._v("Orbit")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(304),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("GCS-initiated guided mode for flying a circle, always facing the center.")]),t._v(" "),a("p",[t._v("Mode must be started from GCS, specifying center point and initial radius and altitude. RC control is optional, and can be used to set the orbit altitude, radius, speed, and direction. Altitude control is the same as for "),a("a",{attrs:{href:"#position_mc"}},[t._v("Position Mode")]),t._v(".")])])]),t._v(" "),a("tr",{attrs:{id:"takeoff_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/takeoff.md"}},[t._v("Takeoff")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle ascends to takeoff altitude and holds position.")])]),t._v(" "),a("tr",{attrs:{id:"land_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/land.md"}},[t._v("Land")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle lands at the position where the mode was engaged.")])]),t._v(" "),a("tr",{attrs:{id:"hold_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/hold.md"}},[t._v("Hold")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle hovers at the current GPS position and altitude.")])]),t._v(" "),a("tr",{attrs:{id:"return_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/return.md"}},[t._v("Return")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle flies a clear path to a safe location. The return behaviour depends on parameter settings, and may follow a mission path and/or mission landing pattern (if defined).")])]),t._v(" "),a("tr",{attrs:{id:"mission_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/mission.md"}},[t._v("Mission")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle executes a "),a("a",{attrs:{href:"../flying/missions.md"}},[t._v("predefined mission/flight plan")]),t._v(" that has been uploaded to the flight controller.")])]),t._v(" "),a("tr",{attrs:{id:"followme_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/follow_me.md"}},[t._v("Follow Me")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle autonomously follows a user using an Android phone/tablet running QGC.")])]),t._v(" "),a("tr",{attrs:{id:"offboard_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/offboard.md"}},[t._v("Offboard")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle obeys a position, velocity or attitude setpoints provided over MAVLink (often from a companion computer connected via serial cable or wifi).")])])])]),t._v(" "),a("h2",{attrs:{id:"vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),a("p",[t._v("VTOL vehicles support both fixed-wing and multicopter flight modes, executing them based on the current vehicle mode (MC or FW).")]),t._v(" "),a("p",[t._v("VTOL supports "),a("a",{attrs:{href:"../flight_modes/offboard.md"}},[t._v("Offboard")]),t._v(" mode in either configuration.")]),t._v(" "),a("h2",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" Key")]),t._v(" "),a("p",[t._v("Key for understanding the table is as follows:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Symbol")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("M")]),t._v(" "),a("td",[t._v("Manual control via RC sticks. RC input is sent directly to the output mixer.")])]),t._v(" "),a("tr",[a("td",[t._v("S")]),t._v(" "),a("td",[t._v("Assistance from autopilot to stabilize the attitude. RC input is required. Position of RC stick maps to the orientation of vehicle.")])]),t._v(" "),a("tr",[a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("Assistance from autopilot to stabilize the attitude rate. RC input is required. Position of RC stick maps to the rate of rotation of vehicle in that orientation.")])]),t._v(" "),a("tr",[a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("Assistance from autopilot to hold position or altitude against wind. RC input is required.")])]),t._v(" "),a("tr",[a("td",[t._v("Auto")]),t._v(" "),a("td",[t._v("This mode is automatic (RC control is disabled by default except to change modes).")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"key_position_fixed"}}),a("img",{attrs:{src:i(302),title:"Position fix required (e.g. GPS)",width:"20px"}})]),t._v(" "),a("td",[t._v("Sensor(s) that measures position/height needed e.g. optical flow, GPS+barometer, visual-inertial odometry.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"altitude_only"}}),a("img",{attrs:{src:i(308),title:"Altitude fix required (e.g. barometer, rangefinder)",width:"20px"}})]),t._v(" "),a("td",[t._v("Sensor(s) that measures height/altitude needed e.g. barometer, rangefinder.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"key_difficulty"}},[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(304),title:"Easy to fly",width:"20px"}}),t._v(" "),a("img",{attrs:{src:i(309),title:"Medium difficulty to fly",width:"20px"}}),t._v(" "),a("img",{attrs:{src:i(305),title:"Hard to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("Flight mode difficulty (easy/medium/hard).")])])])]),t._v(" "),a("p",[t._v("Abbreviations:")]),t._v(" "),a("ul",[a("li",[t._v("RPY: Roll, Pitch, Yaw")]),t._v(" "),a("li",[t._v("RPT: Roll, Pitch Throttle")])])])}),[],!1,null,null,null);e.default=r.exports},302:function(t,e,i){t.exports=i.p+"assets/img/position_fixed.c1403cf0.svg"},304:function(t,e){t.exports="data:image/png;base64,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"},305:function(t,e){t.exports="data:image/png;base64,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"},308:function(t,e,i){t.exports=i.p+"assets/img/altitude_icon.ca9310b8.svg"},309:function(t,e){t.exports="data:image/png;base64,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"}}]);