(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1504:function(e,t,r){"use strict";r.r(t);var n=r(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"femtones-mini2-receiver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#femtones-mini2-receiver"}},[e._v("#")]),e._v(" Femtones MINI2 Receiver")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://www.femtomes.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("MINI2 Receiver"),n("OutboundLink")],1),e._v(" is an RTK GPS receiver that delivers high-rate and reliable RTK initialization for centimeter level positioning.\nIt is intended for applications that requre high-precision positioning (e.g. navigation and mapping, etc.).")]),e._v(" "),n("p",[e._v("The receiver is connected to PX4 via a serial port (UART) and may be configured over Ethernet using a standard web browser.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(642),alt:"MINI II Receiver"}})]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" PX4 drivers for Ethernet, CAN and USB are under development.")])]),e._v(" "),n("h2",{attrs:{id:"required-firmware-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#required-firmware-options"}},[e._v("#")]),e._v(" Required Firmware Options")]),e._v(" "),n("p",[e._v("The following firmware options need to be selected when buying the device:")]),e._v(" "),n("ul",[n("li",[e._v("5Hz, 10Hz, 20Hz")]),e._v(" "),n("li",[e._v("INS")]),e._v(" "),n("li",[e._v("HEADING")]),e._v(" "),n("li",[e._v("OBS")]),e._v(" "),n("li",[e._v("RTK")]),e._v(" "),n("li",[e._v("BASE")])]),e._v(" "),n("h2",{attrs:{id:"purchase"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[e._v("#")]),e._v(" Purchase")]),e._v(" "),n("p",[e._v("Contact "),n("a",{attrs:{href:"http://www.femtomes.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Femtones"),n("OutboundLink")],1),e._v(" directly for sales quote:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Email:")]),e._v(" "),n("a",{attrs:{href:"mailto:sales@femtomes.com"}},[e._v("sales@femtomes.com")])]),e._v(" "),n("li",[n("strong",[e._v("Telephone:")]),e._v(" +86-10-53779838")])]),e._v(" "),n("h2",{attrs:{id:"functional-ports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functional-ports"}},[e._v("#")]),e._v(" Functional Ports")]),e._v(" "),n("p",[n("img",{attrs:{src:r(643),alt:"MINI II 1"}})]),e._v(" "),n("h2",{attrs:{id:"wiring-and-connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[e._v("#")]),e._v(" Wiring and Connections")]),e._v(" "),n("p",[e._v("The "),n("a",{attrs:{href:"http://www.femtomes.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("MINI2 Receiver"),n("OutboundLink")],1),e._v(" is connected to a UART on the flight controller (GPS port) for data.\nTo power the module you will need a separate 12V power supply.\nThe pins on the 12-pin connector are numbered as shown below.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(644),alt:"MINI_II_2"}})]),e._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("p",[e._v("For heading estimation the two antennas need to be on the same level and at least 30 cm apart from each other.\nThe direction that they are facing does not matter as it can be configured with the "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(" parameter.")],1),e._v(" "),n("p",[e._v("Configure the serial port on which the "),n("a",{attrs:{href:"http://www.femtomes.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("MINI2 Receiver"),n("OutboundLink")],1),e._v(" will run using "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(", and set the baud rate to 115200 using "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[e._v("SER_GPS1_BAUD")]),e._v(".")],1),e._v(" "),n("p",[e._v("Once configured the receiver is used in the same way as any other "),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[e._v("RTK GPS")]),e._v(" (i.e. with respect to the Survey-in process).")],1),e._v(" "),n("h2",{attrs:{id:"additional-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[e._v("#")]),e._v(" Additional Information")]),e._v(" "),n("p",[e._v("The MINI2 incorporates the following components:")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"http://www.femtomes.com/FB672_EN.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FB672"),n("OutboundLink")],1),e._v(": Compact, dual antenna, dual frequency GNSS OEM board (delivers centimeter accurate position and precise heading).")]),e._v(" "),n("p",[n("img",{attrs:{src:r(645),alt:"FB672"}})])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://www.femtomes.com/FB6A0_EN.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FB6A0"),n("OutboundLink")],1),e._v(": Compact, quadruple frequency GNSS OEM board (delivers centimeter-accurate positioning)")]),e._v(" "),n("p",[n("img",{attrs:{src:r(646),alt:"FB6A0"}})])])]),e._v(" "),n("p",[e._v("Detailed product instructions can be obtained on the official website or by contacting us.")])])}),[],!1,null,null,null);t.default=a.exports},642:function(e,t,r){e.exports=r.p+"assets/img/rtk_fem_miniII_receiver.38b5f96d.jpg"},643:function(e,t,r){e.exports=r.p+"assets/img/rtk_fem_miniII_1.58cf8787.jpg"},644:function(e,t,r){e.exports=r.p+"assets/img/rtk_fem_miniII_2.c9d9094c.jpg"},645:function(e,t,r){e.exports=r.p+"assets/img/rtk_fem_fb_1.d46ee0f3.jpg"},646:function(e,t,r){e.exports=r.p+"assets/img/rtk_fem_fb_2.9db249d3.jpg"}}]);