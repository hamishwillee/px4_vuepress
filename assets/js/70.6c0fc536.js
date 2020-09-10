(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1317:function(t,e,r){"use strict";r.r(e);var o=r(42),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"cuav-v5-wiring-quick-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-wiring-quick-start"}},[t._v("#")]),t._v(" CUAV V5+ Wiring Quick Start")]),t._v(" "),o("p",[t._v("This quick start guide shows how to power the "),o("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_plus.html"}},[t._v("CUAV V5+")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(322),alt:"V5+ AutoPilot - Hero Image"}})]),t._v(" "),o("h2",{attrs:{id:"wiring-chart-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-chart-overview"}},[t._v("#")]),t._v(" Wiring Chart Overview")]),t._v(" "),o("p",[t._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs).\nWe'll go through each of these in detail in the following sections.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(352),alt:"V5+ AutoPilot"}})]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Main interface")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Function")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Power1")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect power module. Power input with "),o("em",[t._v("analog")]),t._v(" voltage and current detection. Do not use a Digital PM on this connector!")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Power2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect i2c smart battery.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TF CARD")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("SD card for log storage (card pre-inserted in factory).")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("M1~M8")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("PWM outputs. Can be used to control motors or servos.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("A1~A6")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("PWM outputs. Can be used to control motors or servos.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("DSU7")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Used for FMU debug, reading debug information.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("I2C1/I2C2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect an I2C device such as an external compass.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("CAN1/CAN2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect UAVCAN devices such as CAN GPS.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE-C(USB)")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to a computer for communication between the flight controller and the computer, such as loading firmware.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("SBUS OUT")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect SBUS devices (e.g. camera gimbals).")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("GPS&SAFETY")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to Neo GPS, which includes GPS, safety switch, buzzer interface.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TELEM1/TELEM2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to the Telemetry System.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("DSM/SBUS/RSSI")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Includes DSM, SBUS, RSSI signal input interface, DSM interface can be connected to DSM satellite receiver, SBUS interface to SBUS remote control receiver, RSSI for signal strength return module.")])])])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" For more interface information, please read "),o("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("V5+ Manual"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(419),alt:"V5+ AutoPilot"}})]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),o("RouterLink",{attrs:{to:"/en/advanced_features/rtk-gps.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"gps-compass-safety-switch-led"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-safety-switch-led"}},[t._v("#")]),t._v(" GPS + Compass + Safety Switch + LED")]),t._v(" "),o("p",[t._v("The recommended GPS module is the "),o("em",[t._v("Neo v2 GPS")]),t._v(", which contains GPS, compass, safety switch, buzzer, LED status light.")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" Other GPS modules may not work (see "),o("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_nano.html#compatibility_gps"}},[t._v("this compatibility issue")]),t._v(")).")],1)]),t._v(" "),o("p",[t._v("The GPS/Compass module should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle ("),o("em",[t._v("Neo v2 GPS")]),t._v(" arrow is in the same direction as the flight control arrow).\nConnect to the flight control GPS interface using a cable.")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" If you use the "),o("a",{attrs:{href:"http://doc.cuav.net/gps/neo-v2-pro/en/#enable",target:"_blank",rel:"noopener noreferrer"}},[t._v("NEO V2 PRO GNSS (CAN GPS)"),o("OutboundLink")],1),t._v(", please use the cable to connect to the flight control CAN interface.")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(420),alt:"V5+ AutoPilot"}})]),t._v(" "),o("h2",{attrs:{id:"safety-switch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#safety-switch"}},[t._v("#")]),t._v(" Safety Switch")]),t._v(" "),o("p",[t._v("The dedicated safety switch that comes with the V5+ is only required if you are not using the recommended "),o("em",[t._v("Neo V2 GPS")]),t._v(" (which has an inbuilt safety switch).")]),t._v(" "),o("p",[t._v("If you are flying without the GPS you must attach the switch directly to the "),o("code",[t._v("GPS1")]),t._v(" port in order to be able to arm the vehicle and fly (if you use the old 6-pin GPS, please read the definition of the bottom interface to change the line).")]),t._v(" "),o("h2",{attrs:{id:"buzzer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#buzzer"}},[t._v("#")]),t._v(" Buzzer")]),t._v(" "),o("p",[t._v("If you do not use the recommended GPS, the buzzer may not work.")]),t._v(" "),o("h2",{attrs:{id:"radio-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),o("p",[t._v("A remote control (RC) radio system is required if you want to manually control your vehicle (PX4 does not require a radio system for autonomous flight modes).\nYou will need to select a compatible transmitter/receiver and then bind them so that they communicate (read the instructions that come with your specific transmitter/receiver).")]),t._v(" "),o("p",[t._v("The figure below shows how you can access your remote receiver (please find the SBUS cable in the kit).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(421),alt:"V5+ AutoPilot"}})]),t._v(" "),o("h2",{attrs:{id:"spektrum-satellite-receivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-satellite-receivers"}},[t._v("#")]),t._v(" Spektrum Satellite Receivers")]),t._v(" "),o("p",[t._v("The V5+ has a dedicated DSM cable.\nIf using a Spektrum satellite receiver, this should be connected to the flight controller DSM/SBUS/RSSI interface.")]),t._v(" "),o("h2",{attrs:{id:"power"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),o("p",[t._v("The V5+ kit includes the "),o("em",[t._v("HV_PM")]),t._v(" module, which supports 2~14S LiPo batteries.\nConnect the 6pin connector of the "),o("em",[t._v("HW_PM")]),t._v(" module to the flight control "),o("code",[t._v("Power1")]),t._v(" interface.")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Warning")]),t._v(" The supplied power module is unfused.\nPower "),o("strong",[t._v("must")]),t._v(" be turned off while connecting peripherals.")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(352),alt:"V5+ AutoPilot"}})]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The power module is not a power source for peripherals connected to the PWM outputs.\nIf you're connecting servos/actuators you will need to separately power them using a BEC.")])]),t._v(" "),o("h2",{attrs:{id:"telemetry-system-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-system-optional"}},[t._v("#")]),t._v(" Telemetry System (Optional)")]),t._v(" "),o("p",[t._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),o("p",[t._v("The communication channel is via Telemetry Radios.\nThe vehicle-based radio should be connected to either the "),o("code",[t._v("TELEM1")]),t._v(" or "),o("code",[t._v("TELEM2")]),t._v(" port (if connected to these ports, no further configuration is required).\nThe other radio is connected to your ground station computer or mobile device (usually via USB).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(422),alt:"V5+ AutoPilot"}})]),t._v(" "),o("h2",{attrs:{id:"sd-card-optional-sd-card"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-optional-sd-card"}},[t._v("#")]),t._v(" SD Card (Optional) {#sd_card}")]),t._v(" "),o("p",[t._v("An "),o("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("SD card")]),t._v(" is inserted in the factory (you do not need to do anything).")],1),t._v(" "),o("h2",{attrs:{id:"motors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[t._v("#")]),t._v(" Motors")]),t._v(" "),o("p",[t._v("Motors/servos are connected to the MAIN and AUX ports in the order specified for your vehicle in the "),o("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(423),alt:"V5+ AutoPilot"}})]),t._v(" "),o("h2",{attrs:{id:"pinouts-pinouts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pinouts-pinouts"}},[t._v("#")]),t._v(" Pinouts {#pinouts}")]),t._v(" "),o("p",[t._v("Download "),o("strong",[t._v("V5+")]),t._v(" pinouts from "),o("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"further-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/frames_multicopter/dji_f450_cuav_5plus.html"}},[t._v("Airframe build-log using CUAV v5+ on a DJI FlameWheel450")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5+ Manual"),o("OutboundLink")],1),t._v("  (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"http://doc.cuav.net/flight-controller/v5-autopilot/en/v5+.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5+ docs"),o("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 reference design pinout"),o("OutboundLink")],1),t._v("  (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github"),o("OutboundLink")],1),t._v("  (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cuav/hardware/tree/master/V5_Autopilot/V5%2B/V5%2BBASE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base board design reference"),o("OutboundLink")],1),t._v(" (CUAV)")])])])}),[],!1,null,null,null);e.default=a.exports},322:function(t,e,r){t.exports=r.p+"assets/img/v5+_01.e440c966.png"},352:function(t,e,r){t.exports=r.p+"assets/img/v5+_quickstart_01.709e00df.png"},419:function(t,e,r){t.exports=r.p+"assets/img/v5+_quickstart_02.bf70c46a.png"},420:function(t,e,r){t.exports=r.p+"assets/img/v5+_quickstart_03.0e9a2e9f.png"},421:function(t,e,r){t.exports=r.p+"assets/img/v5+_quickstart_04.b866bc60.png"},422:function(t,e,r){t.exports=r.p+"assets/img/v5+_quickstart_06.cc819a92.png"},423:function(t,e,r){t.exports=r.p+"assets/img/v5+_quickstart_07.f496a32c.png"}}]);