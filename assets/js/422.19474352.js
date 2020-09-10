(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{1519:function(e,t,r){"use strict";r.r(t);var o=r(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"companion-computer-peripherals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-peripherals"}},[e._v("#")]),e._v(" Companion Computer Peripherals")]),e._v(" "),r("p",[e._v("This section contains information about peripherals for connecting Pixhawk (PX4) to a companion computer, and peripherals that might be connected to such a companion computer (and potentially triggered/accessed by PX4).")]),e._v(" "),r("h2",{attrs:{id:"companion-pixhawk-communication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-pixhawk-communication"}},[e._v("#")]),e._v(" Companion/Pixhawk Communication")]),e._v(" "),r("p",[e._v("Typical companion computer work with Pixhawk requires a companion link to transmit/receive the data between the companion computer and Pixhawk hardware (e.g. Intel NUC and Pixhawk 4).")]),e._v(" "),r("p",[e._v("There are a few devices that allow this communication bridge such as FTDI USB breakouts and level shifters (see below).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" PX4 configuration for communicating with a companion computer over MAVLink configuration is covered in "),r("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html#example"}},[e._v("MAVLink (OSD / Telemetry)")]),e._v(".\nRelevant topics/sections in the developer guide include: "),r("a",{attrs:{href:"http://dev.px4.io/en/companion_computer/pixhawk_companion.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Companion Computer for Pixhawk Series"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"http://dev.px4.io/en/robotics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Robotics"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"http://dev.px4.io/en/middleware/micrortps.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTPS/ROS2 Interface: PX4-FastRTPS Bridge"),r("OutboundLink")],1),e._v(".")],1)]),e._v(" "),r("h3",{attrs:{id:"ftdi-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ftdi-devices"}},[e._v("#")]),e._v(" FTDI Devices")]),e._v(" "),r("p",[e._v("The FTDI USB adapters are the most common way of communicating between companion computer and Pixhawk.\nThey are usually plug and play as long as the IO of the adapter is set to 3.3v.\nIn order to utilize the full capability/reliability of the serial link offered on the Pixhawk hardware, flow control is recommended.")]),e._v(" "),r("p",[e._v("Options are listed below:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Device")]),e._v(" "),r("th",[e._v("3.3v IO (Default)")]),e._v(" "),r("th",[e._v("Flow Control")]),e._v(" "),r("th",[e._v("Tx/Rx LEDs")]),e._v(" "),r("th",[e._v("JST-GH")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://pixdev.myshopify.com/products/ftdi-breakout-jst-gh",target:"_blank",rel:"noopener noreferrer"}},[e._v("PixDev FTDI JST-GH Breakout"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("Yes")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://store.mrobotics.io/USB-FTDI-Serial-to-JST-GH-p/mro-ftdi-jstgh01-mr.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo USB FTDI Serial to JST-GH (Basic)"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Capable")]),e._v(" "),r("td",[e._v("Capable")]),e._v(" "),r("td",[e._v("No")]),e._v(" "),r("td",[e._v("Yes")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://www.sparkfun.com/products/9873",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun FTDI Basic Breakout"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("No")]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("No")])])])]),e._v(" "),r("h3",{attrs:{id:"logic-level-shifters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#logic-level-shifters"}},[e._v("#")]),e._v(" Logic Level Shifters")]),e._v(" "),r("p",[e._v("On occasion a companion computer may expose hardware level IO that is often run at 1.8v or 5v, while the Pixhawk hardware operates at 3.3v IO.\nIn order to resolve this, a level shifter can be implemented to safely convert the transmitting/receiving signal voltage.")]),e._v(" "),r("p",[e._v("Options include:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.sparkfun.com/products/12009",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun Logic Level Converter - Bi-Directional"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.adafruit.com/product/757",target:"_blank",rel:"noopener noreferrer"}},[e._v("4-channel I2C-safe Bi-directional Logic Level Converter - BSS138"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"cameras"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cameras"}},[e._v("#")]),e._v(" Cameras")]),e._v(" "),r("p",[e._v("Cameras are used image and video capture, and more generally to provide data for "),r("RouterLink",{attrs:{to:"/en/computer_vision/"}},[e._v("computer vision")]),e._v(' applications (in this case the "cameras" may only provide processed data, not raw images)')],1),e._v(" "),r("h3",{attrs:{id:"stereo-cameras"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stereo-cameras"}},[e._v("#")]),e._v(" Stereo Cameras")]),e._v(" "),r("p",[e._v("Stereo cameras are typically used for depth perception, path planning and SLAM.\nThey are in no way guaranteed to be plug and play with your companion computer.")]),e._v(" "),r("p",[e._v("Popular stereo cameras include:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://click.intel.com/intelr-realsensetm-depth-camera-d435.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel® RealSense™ Depth Camera D435"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://click.intel.com/intelr-realsensetm-depth-camera-d415.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel® RealSense™ Depth Camera D415"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.perceptin.io/products",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ironsides"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://duo3d.com/product/duo-minilx-lv1",target:"_blank",rel:"noopener noreferrer"}},[e._v("DUO MLX"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"vio-cameras-sensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vio-cameras-sensors"}},[e._v("#")]),e._v(" VIO Cameras/Sensors")]),e._v(" "),r("p",[e._v("The following sensors can be used for "),r("RouterLink",{attrs:{to:"/en/computer_vision/visual_inertial_odometry.html"}},[e._v("Visual Inertial Odometry (VIO)")]),e._v(":")],1),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/camera_t265_vio.html"}},[e._v("T265 Realsense Tracking Camera")])],1)]),e._v(" "),r("h2",{attrs:{id:"data-telephony-lte-data-telephony"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-telephony-lte-data-telephony"}},[e._v("#")]),e._v(" Data Telephony (LTE) {#data_telephony}")]),e._v(" "),r("p",[e._v("An LTE USB module can be attached to a companion computer and used to route MAVLink traffic between the flight controller and the Internet.")]),e._v(" "),r("p",[e._v('There is no "standard method" for a ground station and companion to connect over the Internet.\nGenerally you can\'t connect them directly because neither of them will have a public/static IP on the Internet.')]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" Typically your router (or the mobile network) has a public IP address, and your GCS computer/vehicle are on a "),r("em",[e._v("local")]),e._v(" network.\nThe router uses network address translation (NAT) to map "),r("em",[e._v("outgoing")]),e._v(" requests from your local network to the Internet, and can use the map to route the "),r("em",[e._v("responses")]),e._v(" back to requesting system.\nHowever NAT has no way to know where to direct the traffic from an arbitrary external system, so there is no way to "),r("em",[e._v("initiate")]),e._v(" a connection to a GCS or vehicle running in the local network.")])]),e._v(" "),r("p",[e._v("A common approach is to set up a virtual private network between the companion and GCS computer (i.e. install a VPN system like "),r("a",{attrs:{href:"https://www.zerotier.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zerotier"),r("OutboundLink")],1),e._v(" on both computers).\nThe companion then uses "),r("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("mavlink-router"),r("OutboundLink")],1),e._v(" to route traffic between the serial interface (flight controller) and GCS computer on the VPN network.")]),e._v(" "),r("p",[e._v("This method has the benefit that the GCS computer address can be static within the VPN, so the configuration of the "),r("em",[e._v("mavlink router")]),e._v(" does not need to change over time.\nIn addition, the communication link is secure because all VPN traffic is encrypted (MAVLink 2 itself does not support encryption).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" You can also choose to route to the VPN broadcast address (i.e. "),r("code",[e._v("x.x.x.255:14550")]),e._v(", where 'x' depends on the VPN system).\nThis approach means that you do not need to know the IP address of the GCS computer, but may result in more traffic than desired (since packets are broadcast to every computer on the VPN network).")])]),e._v(" "),r("p",[e._v("Some USB modules that are known to work include:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e8372/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Huawei E8372"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e3372/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Huawei E3372"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("The "),r("em",[e._v("E8372")]),e._v(" includes WiFi which you can use to configure the SIM while it is plugged into the companion (making the development workflow a little easier). The "),r("em",[e._v("E3372")]),e._v(" lacks WiFi, so you have to configure it by plugging the stick into a laptop.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);