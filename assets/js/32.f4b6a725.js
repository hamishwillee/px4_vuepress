(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1076:function(e,t,o){e.exports=o.p+"assets/img/px4_vision_kit_hero.8eef78c9.jpg"},1077:function(e,t,o){e.exports=o.p+"assets/img/warning_power_port.c56d4749.png"},1078:function(e,t,o){e.exports=o.p+"assets/img/px4_vision_schematic_overview.a1281851.jpg"},1079:function(e,t,o){e.exports=o.p+"assets/img/px4_vision_schematic_layered.91fc5d55.png"},1080:function(e,t,o){e.exports=o.p+"assets/img/raise_gps_mast.5081b5cf.jpg"},1081:function(e,t,o){e.exports=o.p+"assets/img/upcore_port_usb1.7d4feac6.png"},1082:function(e,t,o){e.exports=o.p+"assets/img/motor_order_diagram.64560394.png"},1083:function(e,t,o){e.exports=o.p+"assets/img/propeller_directions.4bfa5377.jpg"},1084:function(e,t,o){e.exports=o.p+"assets/img/propeller_nuts.2ad4cf8c.jpg"},1085:function(e,t,o){e.exports=o.p+"assets/img/qgc_console_vision_system_started.254399c4.jpg"},1086:function(e,t,o){e.exports=o.p+"assets/img/upcore_port_usb2.8efb3345.png"},1087:function(e,t,o){e.exports=o.p+"assets/img/usb_jst_cable.77e81012.jpg"},1088:function(e,t,o){e.exports=o.p+"assets/img/upcore_port_hdmi.8ab92b22.png"},1089:function(e,t,o){e.exports=o.p+"assets/img/qgc_airframe_px4_vision_devkit_platform.77e43013.jpg"},1270:function(e,t,o){"use strict";o.r(t);var n=o(42),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"px4-vision-autonomy-development-kit-early-adopter-edition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-autonomy-development-kit-early-adopter-edition"}},[e._v("#")]),e._v(" PX4 Vision Autonomy Development Kit (Early Adopter Edition)")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("PX4 Vision Autonomy DevKit")]),e._v(" is a robust and inexpensive kit for enabling computer vision development on autonomous vehicles.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1076),alt:"Overview"}})]),e._v(" "),n("p",[e._v("The kit contains a near-ready-to-fly carbon-fiber quadcopter equipped with a "),n("em",[e._v("Pixhawk 4")]),e._v(" flight controller, "),n("em",[e._v("UP Core")]),e._v(" companion computer, and Occipital "),n("em",[e._v("Structure Core")]),e._v(" depth camera sensor.\nThe vehicle comes with software for PX4 "),n("RouterLink",{attrs:{to:"/en/computer_vision/obstacle_avoidance.html"}},[e._v("Obstacle Avoidance")]),e._v(" and "),n("RouterLink",{attrs:{to:"/en/computer_vision/collision_prevention.html"}},[e._v("Collision Prevention")]),e._v(" enabled “out of the box”.\nDevelopers can use the kit to try out other features provided by the "),n("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Avoidance"),n("OutboundLink")],1),e._v(" project, modify the existing code, or experiment with completely new computer vision-based functionality.")],1),e._v(" "),n("p",[e._v("The guide explains the minimal additional setup required to get the vehicle ready to fly (installing an RC system and battery).\nIt also covers the first flight, and how to get started with modifying the computer vision code.")]),e._v(" "),n("h2",{attrs:{id:"purchase"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[e._v("#")]),e._v(" Purchase")]),e._v(" "),n("p",[e._v('The kit is currently an "early adopter" release.\nContact sale01@holybro.com for sales enquiries.')]),e._v(" "),n("h2",{attrs:{id:"warnings-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#warnings-notifications"}},[e._v("#")]),e._v(" Warnings & Notifications")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("The kit is intended for computer vision projects that use a forward-facing camera (it does not have downward or rear-facing depth cameras).\nConsequently it can’t be used (without modification) for testing "),n("RouterLink",{attrs:{to:"/en/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(", or other features that require a downward-facing camera.")],1)]),e._v(" "),n("li",[n("p",[e._v("Obstacle avoidance in missions can only be tested when GPS is available (missions use GPS co-ordinates).\nCollision prevention can be tested in position mode provided there is a good position lock from either GPS or optical flow.")])]),e._v(" "),n("li",[n("p",[e._v("The port labeled "),n("code",[e._v("USB1")]),e._v(" may jam the GPS if used with a "),n("em",[e._v("USB3")]),e._v(" peripheral (disable GPS-dependent functionality including missions).\nThis is why the boot image is supplied on a "),n("em",[e._v("USB2.0")]),e._v(" memory stick.")])]),e._v(" "),n("li",[n("p",[e._v("The "),n("em",[e._v("UP Core")]),e._v(" should only be powered using the battery (do not remove the "),n("em",[e._v("UP Core")]),e._v(" power socket safety cover).")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1077),alt:"Warning - do not connect power port"}})])])]),e._v(" "),n("h2",{attrs:{id:"getting-to-know-your-devkit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-to-know-your-devkit"}},[e._v("#")]),e._v(" Getting to Know Your DevKit")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1078),alt:"Schematic Overview"}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(1079),alt:"Schematic Layered"}})]),e._v(" "),n("p",[e._v("The DevKit contains following components:")]),e._v(" "),n("ul",[n("li",[e._v("PX4 Vision drone kit with these internal parts:\n"),n("ul",[n("li",[e._v("1x Pixhawk 4 flight controller (with custom PX4 firmware)")]),e._v(" "),n("li",[e._v("1x pmw3901 optical flow sensor")]),e._v(" "),n("li",[e._v("1x distance sensor")]),e._v(" "),n("li",[e._v("1x Structure Core depth camera")]),e._v(" "),n("li",[e._v("1x "),n("em",[e._v("UP Core")]),e._v(" computer (with Ubuntu and PX4 avoidance)\n"),n("ul",[n("li",[e._v("Atom CPU")]),e._v(" "),n("li",[e._v("FTDI UART connected to flight controller")]),e._v(" "),n("li",[n("code",[e._v("USB1")]),e._v(": USB3.0 A port used for booting PX4 avoidance environment from a USB2.0 stick (connecting a USB3.0 peripheral may jam GPS).")]),e._v(" "),n("li",[n("code",[e._v("USB2")]),e._v(": USB2.0 port on a JST-GH connector.\nCan be used for second camera, LTE, etc. (or keyboard/mouse during development).")]),e._v(" "),n("li",[n("code",[e._v("USB3")]),e._v(": USB2.0 JST-GH port connected to depth camera")]),e._v(" "),n("li",[n("code",[e._v("HDMI")]),e._v(": HDMI out")]),e._v(" "),n("li",[e._v("SD card slot")]),e._v(" "),n("li",[e._v("WiFi (attached to external antenna #1).\nAllows computer to access home WiFi network for Internet access/updates.")])])]),e._v(" "),n("li",[e._v("ESP8266 connected to flight controller (attached to external antenna #2).\nEnables wireless connection to the ground station.")])])]),e._v(" "),n("li",[e._v("A USB2.0 stick with pre-flashed software that bundles:\n"),n("ul",[n("li",[e._v("Ubuntu 18.04 LTS")]),e._v(" "),n("li",[e._v("ROS Melodic")]),e._v(" "),n("li",[e._v("Occipital Structure Core ROS driver")]),e._v(" "),n("li",[e._v("MAVROS")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Avoidance"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[e._v("Assorted cables, propellers, and other accessories (these can be used to attach additional peripherals).")])]),e._v(" "),n("h2",{attrs:{id:"what-else-do-you-need"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-else-do-you-need"}},[e._v("#")]),e._v(" What Else do you Need?")]),e._v(" "),n("p",[e._v("The kit contains all the essential drone hardware except a battery and a radio control system, which must be purchased separately:")]),e._v(" "),n("ul",[n("li",[e._v("Battery:\n"),n("ul",[n("li",[e._v("4S LiPo with XT60 female connector")]),e._v(" "),n("li",[e._v("Less than 115mm long (to fit between power connector and GPS mast)")])])]),e._v(" "),n("li",[e._v("Radio control system\n"),n("ul",[n("li",[e._v("Any "),n("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("PX4-compatible RC System")]),e._v(" can be used.")],1),e._v(" "),n("li",[e._v("An "),n("em",[e._v("FrSky Taranis")]),e._v(" transmitter with R-XSR receiver is one of the more popular setups.")])])]),e._v(" "),n("li",[e._v("An H2.0 Hex Key (to unscrew the top plate so that an RC receiver can be connected)")])]),e._v(" "),n("p",[e._v("In addition, users will need ground station hardware/software:")]),e._v(" "),n("ul",[n("li",[e._v("Laptop or tablet running "),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),n("OutboundLink")],1),e._v(" (QGC).")])]),e._v(" "),n("h2",{attrs:{id:"first-time-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#first-time-setup"}},[e._v("#")]),e._v(" First-time Setup")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Attach a "),n("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[e._v("compatible RC reciever")]),e._v(" to the vehicle (not supplied with kit):")],1),e._v(" "),n("ul",[n("li",[e._v("Remove/unscrew the top plate (where the battery goes) using an H2.0 hex key tool.")]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk4.html#radio-control"}},[e._v("Connect the receiver to the flight controller")]),e._v(".")],1),e._v(" "),n("li",[e._v("Re-attach the top plate.")]),e._v(" "),n("li",[e._v("Mount the RC receiver on the "),n("em",[e._v("UP Core")]),e._v(" carrier board plate at the back of the vehicle (use zipties or double-sided tape).")]),e._v(" "),n("li",[e._v("Ensure the antennas are clear of any obstructions and electrically isolated from the frame (e.g. secure them under the carrier board or to the vehicle arms or legs).")])])]),e._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html#binding"}},[e._v("Bind")]),e._v(" the RC ground and air units (if not already done).\nThe binding procedure depends on the specific radio system used (read the receiver manual).")],1)]),e._v(" "),n("li",[n("p",[e._v("Raise the GPS mast to the vertical position and screw the cover onto the holder on the base plate.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1080),alt:"Raise GPS mast"}})])]),e._v(" "),n("li",[n("p",[e._v("Insert the pre-imaged USB2.0 stick from the kit into the "),n("em",[e._v("UP Core")]),e._v(" port labeled "),n("code",[e._v("USB1")]),e._v(" (highlighted below).")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1081),alt:"UP Core: USB1 Port "}})])]),e._v(" "),n("li",[n("p",[e._v("Power the vehicle with a fully charged battery.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v("  Ensure propellers are removed before connecting the battery.")])])]),e._v(" "),n("li",[n("p",[e._v("Connect the ground station to the vehicle WiFi network (after a few seconds) using the following default credentials:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("SSID:")]),e._v(" pixhawk4")]),e._v(" "),n("li",[n("strong",[e._v("Password:")]),e._v(" pixhawk4")])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip")]),e._v(" WiFi network SSID, password, and other credentials may be changed after connecting (if desired), by using a web browser to open the URL: "),n("code",[e._v("http://192.168.4.1")]),e._v(".\nThe baud rate must not be changed from 921600.")])])]),e._v(" "),n("li",[n("p",[e._v("Start "),n("em",[e._v("QGroundControl")]),e._v(" on the ground station.")])]),e._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Configure/calibrate")]),e._v(" the vehicle:")],1),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" The vehicle should arrive pre-calibrated (e.g. with firmware, airframe, battery, and sensors all setup).\nYou will however need to calibrate the radio system (that you just connected) and it is often worth re-doing the compass calibration.")])]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/config/radio.html"}},[e._v("Calibrate the Radio System")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config/compass.html"}},[e._v("Calibrate the Compass")])],1)])]),e._v(" "),n("li",[n("p",[e._v("(Optional) Configure a "),n("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[e._v("Flight Mode selector switch")]),e._v(" on the remote controller.")],1),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" Modes can also be changed using "),n("em",[e._v("QGroundControl")])])]),e._v(" "),n("p",[e._v("We recommend RC controller switches are define for:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position Mode")]),e._v(" - a safe manual flight mode that can be used to test collision prevention.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[e._v("Mission Mode")]),e._v(" - run missions and test obstacle avoidance.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[e._v("Return Mode")]),e._v(" - return vehicle safely to its launch point and land.")],1)])]),e._v(" "),n("li",[n("p",[e._v("Attach the propellers with the rotations as shown:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1082),alt:"Motor Order Diagram"}})]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The propellers directions can be determined from the labels: "),n("em",[e._v("6045")]),e._v(" (normal, counter-clockwise) and "),n("em",[e._v("6045")]),n("strong",[e._v("R")]),e._v(" (reversed, clockwise).")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1083),alt:"Propeller identification"}})])]),e._v(" "),n("li",[n("p",[e._v("Screw down firmly using the provided propellor nuts:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1084),alt:"Propeller nuts"}})])])])])]),e._v(" "),n("h2",{attrs:{id:"fly-the-drone-with-avoidance-fly-drone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fly-the-drone-with-avoidance-fly-drone"}},[e._v("#")]),e._v(" Fly the Drone (with avoidance) {#fly_drone}")]),e._v(" "),n("p",[e._v("When the vehicle setup described above is complete:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Connect the battery to power the vehicle.")])]),e._v(" "),n("li",[n("p",[e._v("Wait until the boot sequence completes and the avoidance system has started (the vehicle will reject arming commands during boot).")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip")]),e._v(" The boot/startup process takes around 1 minute from the supplied USB stick (or 30 seconds from "),n("a",{attrs:{href:"#install_image_mission_computer"}},[e._v("internal memory")]),e._v(").")])])]),e._v(" "),n("li",[n("p",[e._v("Check that the avoidance system has started properly:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The "),n("em",[e._v("QGroundControl")]),e._v(" notification log displays the message: "),n("strong",[e._v("Avoidance system connected")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1085),alt:"QGC Log showing avoidance system has started"}})])]),e._v(" "),n("li",[n("p",[e._v("A red laser is visible on the front of the "),n("em",[e._v("Structure Core")]),e._v(" camera.")])])])]),e._v(" "),n("li",[n("p",[e._v("Wait for the GPS LED to turn green.\nThis means that the vehicle has a GPS fix and is ready to fly!")])]),e._v(" "),n("li",[n("p",[e._v("Connect the ground station to the vehicle WiFi network.")])]),e._v(" "),n("li",[n("p",[e._v("Find a safe outdoor location for flying, ideally with a tree or some other convenient obstacle for testing PX4 Vision.")])]),e._v(" "),n("li",[n("p",[e._v("To test "),n("RouterLink",{attrs:{to:"/en/computer_vision/collision_prevention.html"}},[e._v("collision prevention")]),e._v(", enable "),n("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position Mode")]),e._v(" and fly manually towards an obstacle.\nThe vehicle should slow down and then stop within 6m of the obstacle (the distance can be "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("changed")]),e._v(" using the "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CP_DIST"}},[e._v("CP_DIST")]),e._v(" parameter).")],1)]),e._v(" "),n("li",[n("p",[e._v("To test "),n("RouterLink",{attrs:{to:"/en/computer_vision/obstacle_avoidance.html"}},[e._v("obstacle avoidance")]),e._v(", create a mission where the path is blocked by an obstacle.\nThen switch to "),n("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[e._v("Mission Mode")]),e._v(" to run the mission, and observe the vehicle moving around the obstacle and then returning to the planned course.")],1)])]),e._v(" "),n("h2",{attrs:{id:"development-using-the-kit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development-using-the-kit"}},[e._v("#")]),e._v(" Development using the Kit")]),e._v(" "),n("p",[e._v("The following sections explain how to use the kit as an environment for developing computer vision software.")]),e._v(" "),n("h3",{attrs:{id:"px4-avoidance-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-avoidance-overview"}},[e._v("#")]),e._v(" PX4 Avoidance Overview")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("PX4 Avoidance")]),e._v(" system consists of computer vision software running on a companion computer (with attached depth camera) that provides obstacle and/or route information to the PX4 flight stack running on a "),n("em",[e._v("flight controller")]),e._v(".")]),e._v(" "),n("p",[e._v("Documentation about the companion computer vision/planning software can be found on github here: "),n("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),n("OutboundLink")],1),e._v(".\nThe project provides a number of different planner implementations (packaged as ROS nodes):")]),e._v(" "),n("ul",[n("li",[e._v("The PX4 Vision Kit runs the "),n("em",[e._v("localplanner")]),e._v(" by default and this is the recommended starting point for your own software.")]),e._v(" "),n("li",[e._v("The "),n("em",[e._v("globalplanner")]),e._v(" has not been tested with this kit.")]),e._v(" "),n("li",[e._v("The "),n("em",[e._v("landing planner")]),e._v(" requires a downward facing camera, and cannot used without first modifying the camera mounting.")])]),e._v(" "),n("p",[e._v("PX4 and the companion computer exchange data over "),n("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink"),n("OutboundLink")],1),e._v(" using these interfaces:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Interface")]),e._v(" - API for implementing avoidance features in automatic modes.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/computer_vision/collision_prevention.html"}},[e._v("Collision Prevention Interface")]),e._v(" - API for vehicle based avoidance in manual position mode based on an obstacle map (currently used for collision prevention).")],1)]),e._v(" "),n("h3",{attrs:{id:"installing-the-image-on-the-companion-computer-install-image-mission-computer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-image-on-the-companion-computer-install-image-mission-computer"}},[e._v("#")]),e._v(" Installing the image on the Companion Computer {#install_image_mission_computer}")]),e._v(" "),n("p",[e._v("You can install the image on the "),n("em",[e._v("UP Core")]),e._v(" and boot from internal memory (instead of the USB stick).")]),e._v(" "),n("p",[e._v("This is recommended because booting from internal memory is much faster, frees up a USB port, and may well provide more memory than your USB stick.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" Booting from internal memory takes around 30 seconds while booting from the supplied USB2 stick boots in about a minute (other cards may take several times longer).")])]),e._v(" "),n("p",[e._v("To flash the USB image to the "),n("em",[e._v("UP Core")]),e._v(":")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Insert the pre-flashed USB drive into the "),n("em",[e._v("UP Core")]),e._v(" port labeled "),n("code",[e._v("USB1")]),e._v(".")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#login_mission_computer"}},[e._v("Login to the companion computer")]),e._v(" (as described above).")])]),e._v(" "),n("li",[n("p",[e._v("Open a terminal and run the following command to copy the image onto internal memory (eMMC).\nThe terminal will prompt for a number of responses during the flashing process.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/catkin_ws/src/px4vision_ros\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ./flash_emmc.sh\n")])])]),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" All information saved in the "),n("em",[e._v("UP Core")]),e._v(" computer will be removed when executing this script")])])]),e._v(" "),n("li",[n("p",[e._v("Pull out the USB stick.")])]),e._v(" "),n("li",[n("p",[e._v("Restart the vehicle.\nThe "),n("em",[e._v("UP Core")]),e._v(" computer will now boot from internal memory (eMMC).")])])]),e._v(" "),n("h3",{attrs:{id:"boot-the-companion-computer-boot-mission-computer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#boot-the-companion-computer-boot-mission-computer"}},[e._v("#")]),e._v(" Boot the Companion Computer {#boot_mission_computer}")]),e._v(" "),n("p",[e._v("First insert the provided USB2.0 stick into the "),n("em",[e._v("UP Core")]),e._v(" port labeled "),n("code",[e._v("USB1")]),e._v(", and then power the vehicle using a 4S battery.\nThe avoidance system should start within about 1 minute (though this does depend on the USB stick supplied).")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip")]),e._v(" "),n("a",{attrs:{href:"#fly_drone"}},[e._v("Fly the Drone (with avoidance)")]),e._v(" additionally explains how to verify that the avoidance system is active.")])]),e._v(" "),n("p",[e._v("If you've already "),n("a",{attrs:{href:"#install_image_mission_computer"}},[e._v("installed the image on the companion computer")]),e._v(" you can just power the vehicle (i.e. no USB stick is needed).\nThe avoidance system should be up and running within around 30 seconds.")]),e._v(" "),n("p",[e._v("Once started the companion computer can be used both as a computer vision development environment and for running the software.")]),e._v(" "),n("h3",{attrs:{id:"login-to-the-companion-computer-login-mission-computer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#login-to-the-companion-computer-login-mission-computer"}},[e._v("#")]),e._v(" Login to the Companion Computer {#login_mission_computer}")]),e._v(" "),n("p",[e._v("To login to the companion computer:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Connect a keyboard and mouse to the "),n("em",[e._v("UP Core")]),e._v(" via port "),n("code",[e._v("USB2")]),e._v(":")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1086),alt:"UP Core: USB2"}})]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Use the USB-JST cable from the kit to get a USB A connector")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1087),alt:"USB to JST cable"}})])]),e._v(" "),n("li",[n("p",[e._v("A USB hub can be attached to the cable if the keyboard and mouse have separate connectors.")])])])]),e._v(" "),n("li",[n("p",[e._v("Connect a monitor to the "),n("em",[e._v("UP Core")]),e._v(" HDMI port.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1088),alt:"UP Core: HDMI port"}})]),e._v(" "),n("p",[e._v("The Ubuntu login screen should then appear on the monitor.")])]),e._v(" "),n("li",[n("p",[e._v("Login to the "),n("em",[e._v("UP Core")]),e._v(" using the credentials:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Username:")]),e._v(" px4vision")]),e._v(" "),n("li",[n("strong",[e._v("Password:")]),e._v(" px4vision")])])])]),e._v(" "),n("h3",{attrs:{id:"developing-extending-px4-avoidance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#developing-extending-px4-avoidance"}},[e._v("#")]),e._v(" Developing/Extending PX4 Avoidance")]),e._v(" "),n("p",[e._v("The PX4 Vision’s "),n("em",[e._v("UP Core")]),e._v(" computer provides a complete and fully configured environment for extending PX4 Avoidance software (and more generally, for developing new computer vision algorithms using ROS2).\nYou should develop and test your software on the vehicle, sync it to your own git repository, and share any fixes and improvements with the wider PX4 community on the github "),n("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/Avoidance"),n("OutboundLink")],1),e._v(" repo.")]),e._v(" "),n("p",[e._v("The catkin workspace is at "),n("code",[e._v("~/catkin_ws")]),e._v(", and is preconfigured for running the PX4 avoidance local planner.\nThe launch-from-boot file ("),n("code",[e._v("avoidance.launch")]),e._v(") is in the "),n("code",[e._v("px4vision_ros")]),e._v(" package (modify this file to change what planner is launched).")]),e._v(" "),n("p",[e._v("The avoidance package is started on boot.\nTo integrate a different planner, this needs to be disabled.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Disable the avoidance process using the following command:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("systemctl stop avoidance.service\n")])])]),n("p",[e._v("You can simply reboot the machine to restart the service.")]),e._v(" "),n("p",[e._v("Other useful commands are:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# restart service")]),e._v("\nsystemctl start avoidance.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# disable service (stop service and do not restart after boot)")]),e._v("\nsystemctl disable avoidance.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# enable service (start service and enable restart after boot)")]),e._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" avoidance.service  \n")])])])]),e._v(" "),n("li",[n("p",[e._v("The source code of the obstacle avoidance package can be found in https://github.com/PX4/avoidance which is located in "),n("code",[e._v("~/catkin_ws/src/avoidance")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Make changes to the code! To get the latest code of avoidance pull the code from the avoidance repo:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull origin\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout origin/master\n")])])])]),e._v(" "),n("li",[n("p",[e._v("Build the package")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("catkin build local_planner\n")])])])])]),e._v(" "),n("p",[e._v("The ROS workspace is placed in "),n("code",[e._v("~/catkin_ws")]),e._v(".\nFor reference on developing in ROS and using the catkin workspace, see the "),n("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS catkin tutorials"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"developing-px4-firmware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#developing-px4-firmware"}},[e._v("#")]),e._v(" Developing PX4 Firmware")]),e._v(" "),n("p",[e._v("The kit is designed for creating computer vision software that runs on the companion computer, and which integrates with PX4’s flexible path planning and collision prevention interfaces.")]),e._v(" "),n("p",[e._v("You can also modify PX4 itself, and "),n("RouterLink",{attrs:{to:"/en/config/firmware.html#custom"}},[e._v("install it as custom firmware")]),e._v(":")],1),e._v(" "),n("ul",[n("li",[e._v("You will need to connect "),n("em",[e._v("QGroundControl")]),e._v(" to the kit's "),n("em",[e._v("Pixhawk 4")]),e._v(" "),n("strong",[e._v("via USB")]),e._v(" in order to update firmware.")]),e._v(" "),n("li",[e._v("Select the "),n("em",[e._v("PX4 Vision DevKit")]),e._v(" airframe after loading new firmware:\n"),n("img",{attrs:{src:o(1089),alt:"Airframe Selection - PX4 Vision DevKit"}})])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" Modification of PX4 code is not "),n("em",[e._v("needed")]),e._v(" to meet most computer vision use cases.\nTo discuss the interfaces or how to integrate other features join the PX4 slack channel: #computer-vision.")])]),e._v(" "),n("h2",{attrs:{id:"other-development-resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-development-resources"}},[e._v("#")]),e._v(" Other Development Resources")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://wiki.up-community.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[n("em",[e._v("UP Core")]),e._v(" Wiki"),n("OutboundLink")],1),e._v(" - companion computer technical information")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Occipital Developer Forum"),n("OutboundLink")],1),e._v(" - "),n("em",[e._v("Structure Core")]),e._v(" camera information")]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4.html"}},[e._v("Pixhawk 4 Overview")])],1),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Avoidance software/documentation"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Interface")])],1)]),e._v(" "),n("h2",{attrs:{id:"how-to-get-technical-support"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-technical-support"}},[e._v("#")]),e._v(" How to get Technical Support?")]),e._v(" "),n("p",[e._v("For hardware issues, please contact Holybro at: "),n("a",{attrs:{href:"mailto:productservice@holybro.com"}},[e._v("productservice@holybro.com")]),e._v(".")]),e._v(" "),n("p",[e._v("For software issues, use the following "),n("RouterLink",{attrs:{to:"/en/complete_vehicles/#support"}},[e._v("community support channels")]),e._v(":")],1),e._v(" "),n("ul",[n("li",[e._v("PX4 discuss: "),n("a",{attrs:{href:"https://discuss.px4.io/c/Vision-based-navigation-and-obstacle-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Computer Vision"),n("OutboundLink")],1),e._v(" category.")]),e._v(" "),n("li",[e._v("PX4 slack channel: #avoidance")])])])}),[],!1,null,null,null);t.default=i.exports}}]);