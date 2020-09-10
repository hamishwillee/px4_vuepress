(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1411:function(t,e,s){"use strict";s.r(e);var r=s(42),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"holybro-s500-v2-pixhawk-4-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#holybro-s500-v2-pixhawk-4-build"}},[t._v("#")]),t._v(" Holybro S500 V2 + Pixhawk 4 Build")]),t._v(" "),r("p",[t._v("This topic provides full instructions for building the kit and configuring PX4 using "),r("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"key-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-information"}},[t._v("#")]),t._v(" Key information")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Frame:")]),t._v(" Holybro S500")]),t._v(" "),r("li",[r("strong",[t._v("Flight controller:")]),t._v(" "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")])],1),t._v(" "),r("li",[r("strong",[t._v("Assembly time (approx.):")]),t._v(" 90 minutes (45 minutes for frame, 45 minutes for autopilot installation/configuration)")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(902),alt:"Full S500 Kit"}})]),t._v(" "),r("h2",{attrs:{id:"bill-of-materials"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of materials")]),t._v(" "),r("p",[t._v("The Holybro "),r("a",{attrs:{href:"https://shop.holybro.com/s500-v2-kitmotor2216-880kv-propeller1045_p1153.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("S500 V2 Kit"),r("OutboundLink")],1),t._v(" includes almost all the required components:")]),t._v(" "),r("ul",[r("li",[t._v("Pixhawk 4 autopilot（PM07 not included)")]),t._v(" "),r("li",[t._v("Power Management PM02（Assembled）")]),t._v(" "),r("li",[t._v("ARM adopts high strength plastics")]),t._v(" "),r("li",[t._v("Motors - 2216 KV880（ V2 Update）")]),t._v(" "),r("li",[t._v("Propeller 1045（ V2 Update）")]),t._v(" "),r("li",[t._v("Pixhawk4 GPS")]),t._v(" "),r("li",[t._v("Fully assembled Power Management Board with ESCs")]),t._v(" "),r("li",[t._v("433MHz Telemetry Radio / 915MHz Telemetry Radio")]),t._v(" "),r("li",[t._v("Power and Radio Cables")]),t._v(" "),r("li",[t._v("Battery Straps")]),t._v(" "),r("li",[t._v("Dimensions:383"),r("em",[t._v("385")]),t._v("240mm")]),t._v(" "),r("li",[t._v("Wheelbase:480mm")])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" No LiPo battery is included.\nIn addition, we use a FrSky Taranis controller.")])]),t._v(" "),r("h2",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Item Description")]),t._v(" "),r("th",[t._v("Quantity")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Wheelbase: 480mm")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Arms")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("Set of Landing Gear")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("M3*8 screws")]),t._v(" "),r("td",[t._v("18")])]),t._v(" "),r("tr",[r("td",[t._v("M2 5*6 screws")]),t._v(" "),r("td",[t._v("24")])]),t._v(" "),r("tr",[r("td",[t._v("Battery Straps")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Propeller 1045 (V2 Update)")]),t._v(" "),r("td",[t._v("1")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:s(903),alt:"S500 Hardware"}})]),t._v(" "),r("h2",{attrs:{id:"package"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[t._v("#")]),t._v(" Package")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Items")]),t._v(" "),r("th",[t._v("Package")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Pixhawk 4")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Pixhawk4 GPS MODULE")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("I2C splitter Board")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("6 to 6 pin cable (power)")]),t._v(" "),r("td",[t._v("3")])]),t._v(" "),r("tr",[r("td",[t._v("4 to 4 pin cable (CAN)")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("6 to 4 pin cable (Data)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("10 to 10 pin cable (PWM)")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("8 to 8 pin cable(AUX)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("7 to 7 pin cable(SPI)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("6 to 6 pin cable(Debug)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("PPM/SBUS out cable")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("XSR receiver cable")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("DSMX receiver cable")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("SBUS receiver cable")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("USB cable")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("'X'type folding pedestal mount")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("70mm & 140mm carbon rod standoff")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("6*3 2.54mm pitch Horizontal Pin")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("8*3 2.54mm pitch Horizontal Pin")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("Foam Set")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Pixhawk4 Quick Start Guide")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Pixhawk4 Pinouts")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("GPS Quick Start Guide")]),t._v(" "),r("td",[t._v("1")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:s(904),alt:"S500 Package Contents"}})]),t._v(" "),r("h3",{attrs:{id:"electronics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[t._v("#")]),t._v(" Electronics")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Item Description")]),t._v(" "),r("th",[t._v("Quantity")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Pixhawk 4 autopilot (PM06 not included)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Power Management PM02 (Assembled)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Motors - 2216 KV880 (V2 Update)")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("Pixhawk 4 GPS")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Fully assembled Power Management Board with ESCs")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("433MHz Telemetry Radio / 915MHz Telemetry Radio")]),t._v(" "),r("td",[t._v("1")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:s(905),alt:"S500 Electronics"}})]),t._v(" "),r("h3",{attrs:{id:"tools-needed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tools-needed"}},[t._v("#")]),t._v(" Tools needed")]),t._v(" "),r("p",[t._v("The following tools are used in this assembly:")]),t._v(" "),r("ul",[r("li",[t._v("1.5 mm Hex screwdriver")]),t._v(" "),r("li",[t._v("2.0 mm Hex screwdriver")]),t._v(" "),r("li",[t._v("2.5 mm Hex screwdriver")]),t._v(" "),r("li",[t._v("3mm Phillips screwdriver")]),t._v(" "),r("li",[t._v("Wire cutters")]),t._v(" "),r("li",[t._v("Precision tweezers")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(906),alt:"S500 Tools"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(907),alt:"S500 Tools"}})]),t._v(" "),r("h2",{attrs:{id:"assembly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),r("p",[t._v("Estimate time to assemble is 90 minutes, about 45 minutes for frame assembly and 45 minutes installing and configuring the autopilot in QGroundControl.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Assembling the Landing Gear.\nWe are going to start by assembling the landing gear to the vertical pole. Unscrew the landing gear screws and insert the vertical pole as shown below.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(908),alt:"Figure 1"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(909),alt:"Figure 2"}})])]),t._v(" "),r("li",[r("p",[t._v("Assemble the Power Management Board to the landing gear. Screw the landing gear with a vertical pole to the Fully assembled Power Management Board.")])])]),t._v(" "),r("p",[t._v("The Board has 4 holes (see arrows below).")]),t._v(" "),r("p",[r("img",{attrs:{src:s(910),alt:"Figure 3"}})]),t._v(" "),r("p",[t._v("Connect with the M3X8 screws, a total of 8 pieces, 4 on each side.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(911),alt:"Figure 4"}})]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Assemble the arms to the Power Management Board.\nAttach the arm to the Power Management Board.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(912),alt:"Figure 6"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(913),alt:"Figure 7"}})]),t._v(" "),r("p",[t._v("Use M2 5X6 screws a total of 2 in each arm.\nInsert the screws from the bottom of the plate.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(914),alt:"Figure 8"}})]),t._v(" "),r("p",[t._v("Make sure the ESC cables run through the middle of the arm.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(915),alt:"Figure 9"}})])]),t._v(" "),r("li",[r("p",[t._v("Assemble the 8"),r("em",[t._v("3 2.54mm pitch Horizontal Pin to the 10 to 10 pin cable (PWM) to the Power Management Board.\nConnect the 10 to 10 pin cable (PWM) to the 8")]),t._v("3 2.54mm pitch Horizontal Pin.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(916),alt:"Figure 10"}})]),t._v(" "),r("p",[t._v("Cut a piece of 3M Tape and attach to the bottom of the Horizontal Pin:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(917),alt:"Figure 11"}})]),t._v(" "),r("p",[t._v("Stick the Horizontal Pin to the Power Management Board:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(918),alt:"Figure 12"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(919),alt:"Figure 13"}})])]),t._v(" "),r("li",[r("p",[t._v("Assemble the motors to the arms. For this, we will need the 16 screws M3X7, 4 motors, and the 4 arms.")]),t._v(" "),r("p",[t._v("Mount the motors in each arm put the screw through the bottom of the arm:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(920),alt:"Figure 14"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(921),alt:"Figure 15"}})]),t._v(" "),r("p",[t._v("After the 4 motors are mounted on the arm grab the cables(red, blue, black) and put them through the arm thread.\nThe 3 cables that are color-coded go connected to the ESC.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(922),alt:"Figure 16"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(923),alt:"Figure 17"}})])]),t._v(" "),r("li",[r("p",[t._v("Mounting the GPS on the frame.\nFor this, we will need the Pixhawk 4 GPS and the mounting plate.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(924),alt:"GPS Parts"}})]),t._v(" "),r("p",[t._v("Mount the GPS mast to the back of the Board, use the 4 screws:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(925),alt:"Figure 18"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(926),alt:"Figure 19"}})]),t._v(" "),r("p",[t._v("Use the tape and stick the GPS to the top of the GPS mast:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(927),alt:"Figure 20"}})])]),t._v(" "),r("li",[r("p",[t._v("Paste the FrSky to the Board. Paste FrSky with double-sided tape (3M) to the bottom board.\nAttach the FrSky to the frame:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(928),alt:"Figure 21"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(929),alt:"Figure 22"}})])]),t._v(" "),r("li",[r("p",[t._v("Attach the Telemetry to the frame.\nThe next step is to take the Holybro telemetry radio and attach it onto the frame, use 3M tape.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(930),alt:"Figure 23"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(931),alt:"Figure 24"}})]),t._v(" "),r("p",[t._v("This assembly attached it inside the frame facing outwards to the front of the vehicle.\nA picture is shown below of the radio sitting inside the bottom of the frame.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(932),alt:"Figure 25"}})])]),t._v(" "),r("li",[r("p",[t._v("Mounting the Pixhawk 4 to the plate.\nUse double-sided tape to attach the Pixhawk 4 to the center plate:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(933),alt:"Figure 26"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(934),alt:"Figure 27"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(935),alt:"Figure 28"}})]),t._v(" "),r("p",[t._v("The next step is to mount the Pixhawk 4 with the plate to the frame.\nFor this, we will need the M2 5X6 screws.\nAlign the plate to the frame and insert the screws.\nBefore you mount the plate we recommend putting tape on the Power Module (that way it's tight).")]),t._v(" "),r("p",[r("img",{attrs:{src:s(936),alt:"Figure 29"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(937),alt:"Figure 30"}})])]),t._v(" "),r("li",[r("p",[t._v("Assembling the Battery Mount to the frame.\nFor this we will need the M2 5X6 screws and the battery mount:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(938),alt:"Figure 31"}})]),t._v(" "),r("p",[t._v("Insert the long rods to the small rings:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(939),alt:"Figure 32"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(940),alt:"Figure 33"}})]),t._v(" "),r("p",[t._v("Attach that to the frame, make sure all four sides are aligned to insert the screws:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(941),alt:"Figure 34"}})]),t._v(" "),r("p",[t._v("Assemble the small plate to the legs and screw on all four sides.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(942),alt:"Figure 35"}})]),t._v(" "),r("p",[t._v("The final step is to attach the plate:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(943),alt:"Figure 36"}})])]),t._v(" "),r("li",[r("p",[t._v("Pixhawk 4 wiring. The Pixhawk 4, which has several different wires and connections with it.\nIncluded below is a picture of every wire needed with the Pixhawk and how it looks when connected.")])]),t._v(" "),r("li",[r("p",[t._v("Plugin Telemetry and GPS module to the flight controller as seen in Figure 37; plug in the RC receiver, all 4 ESCs to the flight controller as well as the power module.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(944),alt:"Figure 37"}})])])]),t._v(" "),r("p",[t._v("Fully assembled, the kit looks as shown below:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(945),alt:"Pixhawk Assembled"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(946),alt:"Fully Assembled"}})]),t._v(" "),r("h2",{attrs:{id:"install-configure-px4-configure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-configure-px4-configure"}},[t._v("#")]),t._v(" Install/Configure PX4 {#configure}")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(" is used to install the PX4 autopilot and configure/tune it for the QAV250 frame.\n"),r("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install"),r("OutboundLink")],1),t._v(" "),r("em",[t._v("QGroundControl")]),t._v(" for your platform.")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Tip")]),t._v(" Full instructions for installing and configuring PX4 can be found in "),r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("First update the firmware and airframe:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Firmware")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("Airframe")])],1)]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" You will need to select the "),r("em",[t._v("Holybro S500")]),t._v(" airframe ("),r("strong",[t._v("Quadrotor x > Holybro S500")]),t._v(").")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(947),alt:"QGroundControl - Select HolyBro X500 airframe"}})]),t._v(" "),r("p",[t._v("Then perform the mandatory setup/calibration:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Sensor Orientation")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/compass.html"}},[t._v("Compass")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/accelerometer.html"}},[t._v("Accelerometer")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/radio.html"}},[t._v("Radio Setup")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[t._v("Flight Modes")])],1)]),t._v(" "),r("p",[t._v("Ideally you should also do:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/esc_calibration.html"}},[t._v("ESC Calibration")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/battery.html"}},[t._v("Battery")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/safety.html"}},[t._v("Safety")])],1)]),t._v(" "),r("h2",{attrs:{id:"tuning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[t._v("#")]),t._v(" Tuning")]),t._v(" "),r("p",[t._v("Airframe selection sets "),r("em",[t._v("default")]),t._v(" autopilot parameters for the frame.\nThese are good enough to fly with, but it is a good idea to tune the parameters for a specific frame build.")]),t._v(" "),r("p",[t._v("For general information on tuning see: "),r("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"acknowledgements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[t._v("#")]),t._v(" Acknowledgements")]),t._v(" "),r("p",[t._v("This build log was provided by the Dronecode Test Flight Team.")])])}),[],!1,null,null,null);e.default=a.exports},902:function(t,e,s){t.exports=s.p+"assets/img/s500_hero.3b82ca9a.png"},903:function(t,e,s){t.exports=s.p+"assets/img/s500_hardware.088b1077.jpg"},904:function(t,e,s){t.exports=s.p+"assets/img/s500_package.b2818c83.jpg"},905:function(t,e,s){t.exports=s.p+"assets/img/s500_electronics.d8261114.jpg"},906:function(t,e,s){t.exports=s.p+"assets/img/s500_tools2.643e3d50.png"},907:function(t,e,s){t.exports=s.p+"assets/img/s500_tools.b6f5f6ac.jpg"},908:function(t,e,s){t.exports=s.p+"assets/img/s500_fig1.515a4e4c.jpg"},909:function(t,e,s){t.exports=s.p+"assets/img/s500_fig2.2a3d42e7.jpg"},910:function(t,e,s){t.exports=s.p+"assets/img/s500_fig3.3f31db30.jpg"},911:function(t,e,s){t.exports=s.p+"assets/img/s500_fig4.81966b4c.jpg"},912:function(t,e,s){t.exports=s.p+"assets/img/s500_fig7.0e756f77.jpg"},913:function(t,e,s){t.exports=s.p+"assets/img/s500_fig8.79f17552.jpg"},914:function(t,e,s){t.exports=s.p+"assets/img/s500_fig9.194bc647.jpg"},915:function(t,e,s){t.exports=s.p+"assets/img/s500_fig91.cd73ee55.jpg"},916:function(t,e,s){t.exports=s.p+"assets/img/s500_fig10.98268639.jpg"},917:function(t,e,s){t.exports=s.p+"assets/img/s500_fig11.b7ecf835.jpg"},918:function(t,e,s){t.exports=s.p+"assets/img/s500_fig12.c6c27be2.jpg"},919:function(t,e,s){t.exports=s.p+"assets/img/s500_fig13.98e4a15a.jpg"},920:function(t,e,s){t.exports=s.p+"assets/img/s500_fig14.688e64f9.jpg"},921:function(t,e,s){t.exports=s.p+"assets/img/s500_fig15.9315a9a7.jpg"},922:function(t,e,s){t.exports=s.p+"assets/img/s500_fig16.5607636a.jpg"},923:function(t,e,s){t.exports=s.p+"assets/img/s500_fig17.2b8bf78f.jpg"},924:function(t,e,s){t.exports=s.p+"assets/img/s500_gpskit.13779d48.png"},925:function(t,e,s){t.exports=s.p+"assets/img/s500_fig18.a81fab99.jpg"},926:function(t,e,s){t.exports=s.p+"assets/img/s500_fig19.fb93ee97.jpg"},927:function(t,e,s){t.exports=s.p+"assets/img/s500_fig20.77af8ca4.jpg"},928:function(t,e,s){t.exports=s.p+"assets/img/s500_fig21.1131f42b.jpg"},929:function(t,e,s){t.exports=s.p+"assets/img/s500_fig22.467e5013.jpg"},930:function(t,e,s){t.exports=s.p+"assets/img/s500_fig23.23c4ab74.jpg"},931:function(t,e,s){t.exports=s.p+"assets/img/s500_fig24.9a8f97b2.jpg"},932:function(t,e,s){t.exports=s.p+"assets/img/s500_fig25.f81fc5a4.jpg"},933:function(t,e,s){t.exports=s.p+"assets/img/s500_fig26.9c426add.jpg"},934:function(t,e,s){t.exports=s.p+"assets/img/s500_fig27.7065c9f8.jpg"},935:function(t,e,s){t.exports=s.p+"assets/img/s500_fig28.e4a8425d.jpg"},936:function(t,e,s){t.exports=s.p+"assets/img/s500_fig29.0eff3291.jpg"},937:function(t,e,s){t.exports=s.p+"assets/img/s500_fig30.661eacfc.jpg"},938:function(t,e,s){t.exports=s.p+"assets/img/s500_fig31.25f0cd1d.jpg"},939:function(t,e,s){t.exports=s.p+"assets/img/s500_fig32.98fd686d.png"},940:function(t,e,s){t.exports=s.p+"assets/img/s500_fig33.84c94652.png"},941:function(t,e,s){t.exports=s.p+"assets/img/s500_fig34.e8c464b4.jpg"},942:function(t,e,s){t.exports=s.p+"assets/img/s500_fig35.f39ecedd.jpg"},943:function(t,e,s){t.exports=s.p+"assets/img/s500_fig36.232e5d11.jpg"},944:function(t,e,s){t.exports=s.p+"assets/img/s500_fig37.34326319.png"},945:function(t,e,s){t.exports=s.p+"assets/img/s500_pixhawk.6cf743f1.jpg"},946:function(t,e,s){t.exports=s.p+"assets/img/s500_assembled.32b66ddc.jpg"},947:function(t,e,s){t.exports=s.p+"assets/img/S500_airframe.e6e9f1fe.jpg"}}]);