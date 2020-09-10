(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1303:function(t,e,r){"use strict";r.r(e);var a=r(42),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"omnibus-f4-sd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#omnibus-f4-sd"}},[t._v("#")]),t._v(" Omnibus F4 SD")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Omnibus F4 SD")]),t._v(" is a controller board designed for racers. In contrast to a typical racer board it has some additional features, such as an SD card and a faster CPU.")]),t._v(" "),a("img",{attrs:{src:r(797),width:"400px",title:"Omnibus F4 SD"}}),t._v(" "),a("p",[t._v("These are the main differences compared to a "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(":")],1),t._v(" "),a("ul",[a("li",[t._v("Lower price")]),t._v(" "),a("li",[t._v("Fewer IO ports (though it's still possible to attach a GPS or a Flow sensor for example)")]),t._v(" "),a("li",[t._v("Requires external pull up resistor on the I2C bus for external GPS, see "),a("a",{attrs:{href:"#i2c"}},[t._v("I2C")]),t._v(" below.")]),t._v(" "),a("li",[t._v("Less RAM (192 KB vs. 256 KB) and FLASH (1 MB vs. 2 MB)")]),t._v(" "),a("li",[t._v("Same board dimensions as a "),a("em",[t._v("Pixracer")]),t._v(", but slightly smaller form factor (because it has less connectors)")]),t._v(" "),a("li",[t._v("Integrated OSD (not yet implemented in software)")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" All the usual PX4 features can still be used for your racer!")])]),t._v(" "),a("p",[a("span")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" This flight controller is "),a("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"主要特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要特性"}},[t._v("#")]),t._v(" 主要特性")]),t._v(" "),a("ul",[a("li",[t._v("Main System-on-Chip: "),a("a",{attrs:{href:"https://www.st.com/en/microcontrollers/stm32f405rg.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F405RGT6"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("CPU: 168 MHz ARM Cortex M4 with single-precision FPU")]),t._v(" "),a("li",[t._v("RAM: 192 KB SRAM")]),t._v(" "),a("li",[t._v("FLASH: 1 MB")])])]),t._v(" "),a("li",[t._v("Standard racer form factor: 36x36 mm with standard 30.5 mm hole pattern")]),t._v(" "),a("li",[t._v("MPU6000 Accel / Gyro")]),t._v(" "),a("li",[t._v("BMP280 Baro (not all boards have it mounted)")]),t._v(" "),a("li",[t._v("microSD (for logging)")]),t._v(" "),a("li",[t._v("Futaba S.BUS and S.BUS2 / Spektrum DSM2 and DSMX / Graupner SUMD / PPM input / Yuneec ST24")]),t._v(" "),a("li",[t._v("OneShot PWM out (configurable)")]),t._v(" "),a("li",[t._v("Built-in current sensor")]),t._v(" "),a("li",[t._v("Built-in OSD chip (AB7456 via SPI)")])]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("p",[t._v("The board is produced by different vendors, with some variations (e.g. with or without a barometer).")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" PX4 is compatible with boards that support the Betaflight OMNIBUSF4SD target (if "),a("em",[t._v("OMNIBUSF4SD")]),t._v(" is present on the product page the board should work with PX4).")])]),t._v(" "),a("p",[a("span")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" Any Omnibus F4 labeled derivative (e.g. clone) should work as well. However, power distribution on these boards is of varying quality.")])]),t._v(" "),a("p",[t._v("These are the boards tested and known to work:")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://a.hobbywing.com/goods.php?id=636",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbywing XRotor Flight Controller F4"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" This board fits on top of the "),a("a",{attrs:{href:"http://www.hobbywing.com/goods.php?id=588",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbywing XRotor Micro 40A 4in1 ESC"),a("OutboundLink")],1),t._v(" without soldering. This ESC board also provides power for the Omnibus board.")])]),t._v(" "),a("p",[t._v("Purchase from:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.getfpv.com/hobbywing-xrotor-f4-flight-controller-w-osd.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbywing XRotor F4 Flight Controller w/OSD"),a("OutboundLink")],1),t._v(" (getfpv)")])])]),t._v(" "),a("li",[a("p",[t._v("Original Airbot Omnibus F4 SD")]),t._v(" "),a("p",[t._v("Purchase from:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://store.myairbot.com/omnibusf4prov3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbot (CN manufacturer)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.readytoflyquads.com/flip-32-f4-omnibus-v2-pro",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ready To Fly Quads (US reseller)"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[t._v("Accessories include:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/telemetry/esp8266_wifi_module.html"}},[t._v("ESP8266 WiFi Module")]),t._v(" for MAVLink telemetry. You need to connect these pins: GND, RX, TX, VCC and CH-PD (CH-PD to 3.3V). The baud rate is 921600.")],1)]),t._v(" "),a("h2",{attrs:{id:"连接器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[t._v("#")]),t._v(" 连接器")]),t._v(" "),a("p",[t._v("Boards from different vendors (based on this design) can have significantly different layout. Layouts/Silkscreens for various versions are shown below.")]),t._v(" "),a("h3",{attrs:{id:"airbot-omnibus-f4-sd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airbot-omnibus-f4-sd"}},[t._v("#")]),t._v(" Airbot Omnibus F4 SD")]),t._v(" "),a("p",[t._v("Below are silkscreens for the Airbot Omnibus F4 SD (V1), showing both top and bottom.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(798),alt:"Omnibus F4 SD v1 Silkscreen Top"}}),t._v(" "),a("img",{attrs:{src:r(799),alt:"Omnibus F4 SD v1 Silkscreen Bottom"}})]),t._v(" "),a("h3",{attrs:{id:"hobbywing-xrotor-flight-controller-f4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hobbywing-xrotor-flight-controller-f4"}},[t._v("#")]),t._v(" Hobbywing XRotor Flight Controller F4")]),t._v(" "),a("p",[t._v("Below are silkscreens for the Hobbywing XRotor Flight Controller F4.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(800),alt:"Hobbywing XRotor Flight Controller F4 Silkscreen"}})]),t._v(" "),a("h2",{attrs:{id:"针脚定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),a("h3",{attrs:{id:"radio-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),a("p",[t._v("RC is connected to one of the following ports:")]),t._v(" "),a("ul",[a("li",[t._v("UART1")]),t._v(" "),a("li",[t._v("SBUS/PPM port (via inverter, internally goes to UART1)")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" Some Omnibus F4 boards have a jumper connecting either or both the MCU SBUS and PPM to a single pin header. Set your jumper or solder bridge to the appropriate MCU pin before use.")])]),t._v(" "),a("h3",{attrs:{id:"uarts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uarts"}},[t._v("#")]),t._v(" UARTs")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("UART6: GPS port")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("TX: MCU pin PC6")])]),t._v(" "),a("li",[a("p",[t._v("RX: MCU pin PC7")])]),t._v(" "),a("li",[a("p",[t._v("Airbot Omnibus F4 SD Pinout is on Port J10 (TX6/RX6):")])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(367),alt:"Omnibus F4 SD UART6"}})])]),t._v(" "),a("li",[a("p",[t._v("UART4")]),t._v(" "),a("ul",[a("li",[t._v("TX: MCU pin PA0")]),t._v(" "),a("li",[t._v("RX: MCU pin PA1")]),t._v(" "),a("li",[t._v("57600 baud")]),t._v(" "),a("li",[t._v("This can be configured as the "),a("code",[t._v("TELEM 2")]),t._v(" port.")]),t._v(" "),a("li",[t._v("Airbot Omnibus F4 SD Pinout:\n"),a("ul",[a("li",[t._v("TX: RSSI pin")]),t._v(" "),a("li",[t._v("RX: PWM out 5")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(801),alt:"Omnibus F4 SD UART4"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(802),alt:"Omnibus F4 SD UART4 Top"}})])])]),t._v(" "),a("h3",{attrs:{id:"i2c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i2c"}},[t._v("#")]),t._v(" I2C")]),t._v(" "),a("p",[t._v("There is one I2C port available via:")]),t._v(" "),a("ul",[a("li",[t._v("SCL: MCU pin PB10 (might be labeled as TX3)")]),t._v(" "),a("li",[t._v("SDA: MCU pin PB11 (might be labeled as RX3)")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" You will need external pullups on both signals (clock and data). You can use 2.2k pullups for example to attach an external mag.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- Airbot Omnibus F4 SD Pinout is on Port J10 (SCL [clock] / SCA [data]):\n")])])]),a("p",[a("img",{attrs:{src:r(367),alt:"",title:"Omnibus F4 SD UART6"}})]),t._v(" "),a("p",[t._v("Here is an example implementation. I used a Spektrum plug to get 3.3v from the DSM port, connecting only 3.3v + to each line via 2.2k resistor.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(803),alt:"Omnibus F4 SD Pullup"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(804),alt:"Omnibus F4 SD Pullup Implementation"}})]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("USART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("SerialRX")])]),t._v(" "),a("tr",[a("td",[t._v("USART4")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("GPS")])])])]),t._v(" "),a("h2",{attrs:{id:"rc-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-telemetry"}},[t._v("#")]),t._v(" RC Telemetry")]),t._v(" "),a("p",[t._v("The Omnibus supports telemetry to the RC Transmitter using "),a("RouterLink",{attrs:{to:"/zh/peripherals/frsky_telemetry.html"}},[t._v("FrSky Telemetry")]),t._v(" or "),a("a",{attrs:{href:"#crsf_telemetry"}},[t._v("CRSF Crossfire Telemetry")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"crsf-crossfire-telemetry-crsf-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crsf-crossfire-telemetry-crsf-telemetry"}},[t._v("#")]),t._v(" CRSF Crossfire Telemetry {#crsf_telemetry}")]),t._v(" "),a("p",[t._v("TBS CRSF Crossfire telemetry is used to send telemetry data from the flight controller (the vehicle's attitude, battery, flight mode and GPS data) to the RC transmitter (Taranis).")]),t._v(" "),a("p",[t._v("Benefits over FrSky telemetry include:")]),t._v(" "),a("ul",[a("li",[t._v("Only a single UART is needed for RC and telemetry.")]),t._v(" "),a("li",[t._v("The CRSF protocol is optimized for low latency.")]),t._v(" "),a("li",[t._v("150 Hz RC update rate.")]),t._v(" "),a("li",[t._v("The signals are uninverted and thus no (external) inverter logic is required.")])]),t._v(" "),a("p",[t._v("For Omnibus we recommend the "),a("a",{attrs:{href:"http://team-blacksheep.com/products/prod:crossfire_nano_rx",target:"_blank",rel:"noopener noreferrer"}},[t._v("TBS Crossfire Nano RX"),a("OutboundLink")],1),t._v(", since it is specifically designed for small Quads.")]),t._v(" "),a("p",[t._v("On the handheld controller (e.g. Taranis) you will also need a "),a("a",{attrs:{href:"http://team-blacksheep.com/shop/cat:rc_transmitters#product_listing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transmitter Module"),a("OutboundLink")],1),t._v(". This can be plugged into the back of the RC controller.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" The referenced links above contains the documentation for the TX/RX modules.")])]),t._v(" "),a("h4",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("Connect the Nano RX and Omnibus pins as shown:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Omnibus UART1")]),t._v(" "),a("th",[t._v("Nano RX")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("TX")]),t._v(" "),a("td",[t._v("Ch2")])]),t._v(" "),a("tr",[a("td",[t._v("RX")]),t._v(" "),a("td",[t._v("Ch1")])])])]),t._v(" "),a("p",[t._v("Nothing else needs to be configured on PX4 flight controller side - the RC protocol is auto-detected.")]),t._v(" "),a("p",[t._v("Next update the TX/RX modules to use the CRSF protocol and set up telemetry. Instructions for this are provided in the "),a("a",{attrs:{href:"https://www.team-blacksheep.com/tbs-crossfire-manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("TBS Crossfire Manual"),a("OutboundLink")],1),t._v(" (search for 'Setting up radio for CRSF').")]),t._v(" "),a("h2",{attrs:{id:"schematics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schematics"}},[t._v("#")]),t._v(" Schematics")]),t._v(" "),a("p",[t._v("The schematics are provided by "),a("a",{attrs:{href:"https://myairbot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbot"),a("OutboundLink")],1),t._v(": "),a("a",{attrs:{href:"http://bit.ly/obf4pro",target:"_blank",rel:"noopener noreferrer"}},[t._v("OmnibusF4-Pro-Sch.pdf"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"px4-bootloader-update-bootloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-bootloader-update-bootloader"}},[t._v("#")]),t._v(" PX4 Bootloader Update {#bootloader}")]),t._v(" "),a("p",[t._v("The board comes pre-installed with "),a("a",{attrs:{href:"https://github.com/betaflight/betaflight/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Betaflight"),a("OutboundLink")],1),t._v(". Before PX4 firmware can be installed, the "),a("em",[t._v("PX4 bootloader")]),t._v(" must be flashed. Download the "),a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/omnibus_f4_sd/omnibusf4sd_bl_d52b70cb39.hex",target:"_blank",rel:"noopener noreferrer"}},[t._v("omnibusf4sd_bl.hex"),a("OutboundLink")],1),t._v(" bootloader binary and read "),a("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update_from_betaflight.html"}},[t._v("this page")]),t._v(" for flashing instructions.")],1),t._v(" "),a("h2",{attrs:{id:"building-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-firmware"}},[t._v("#")]),t._v(" Building Firmware")]),t._v(" "),a("p",[t._v("To "),a("a",{attrs:{href:"https://dev.px4.io/master/en/setup/building_px4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("build PX4"),a("OutboundLink")],1),t._v(" for this target:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("make omnibus_f4sd_default\n")])])]),a("h2",{attrs:{id:"installing-px4-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-px4-firmware"}},[t._v("#")]),t._v(" Installing PX4 Firmware")]),t._v(" "),a("p",[t._v("The firmware can be installed in any of the normal ways:")]),t._v(" "),a("ul",[a("li",[t._v("Build and upload the source "),a("code",[t._v("make omnibus_f4sd_default upload")])]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("Load the firmware")]),t._v(" using "),a("em",[t._v("QGroundControl")]),t._v(". You can use either pre-built firmware or your own custom firmware.")],1)]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("In addition to the "),a("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("basic configuration")]),t._v(", the following parameters are important:")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Setting")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_HAS_MAG"}},[t._v("SYS_HAS_MAG")])],1),t._v(" "),a("td",[t._v("This should be disabled since the board does not have an internal mag. You can enable it if you attach an external mag.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_HAS_BARO"}},[t._v("SYS_HAS_BARO")])],1),t._v(" "),a("td",[t._v("Disable this if your board does not have a barometer.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MOT_ORDERING"}},[t._v("MOT_ORDERING")])],1),t._v(" "),a("td",[t._v("If you use a 4-in-1 ESC with Betaflight/Cleanflight motor assignment, this parameter can be set accordingly.")])])])]),t._v(" "),a("h2",{attrs:{id:"further-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-info"}},[t._v("#")]),t._v(" Further Info")]),t._v(" "),a("p",[t._v("A review with further information of the board can be found "),a("a",{attrs:{href:"https://nathan.vertile.com/blog/2016/10/12/omnibusf4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.dronetrest.com/omnibus-f4-flight-controller-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("This page"),a("OutboundLink")],1),t._v(" also provides a nice overview with pinouts and setup instructions.")])])}),[],!1,null,null,null);e.default=o.exports},367:function(t,e,r){t.exports=r.p+"assets/img/uart6.d7b3e6d7.jpg"},797:function(t,e,r){t.exports=r.p+"assets/img/board.edf0b869.jpg"},798:function(t,e,r){t.exports=r.p+"assets/img/silk-top.62ae26a4.jpg"},799:function(t,e,r){t.exports=r.p+"assets/img/silk-bottom.b71ab159.jpg"},800:function(t,e,r){t.exports=r.p+"assets/img/hobbywing_xrotor_silk.425dd852.png"},801:function(t,e,r){t.exports=r.p+"assets/img/uart4.cafd2630.jpg"},802:function(t,e,r){t.exports=r.p+"assets/img/uart4-top.a50ebc4f.jpg"},803:function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNjc3MUQzNTc3RDgxMUU4QTg2NkJCQUMzNzQ2RkU0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNjc3MUQzNjc3RDgxMUU4QTg2NkJCQUMzNzQ2RkU0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE2NzcxRDMzNzdEODExRThBODY2QkJBQzM3NDZGRTQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE2NzcxRDM0NzdEODExRThBODY2QkJBQzM3NDZGRTQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAEAsLCwwLEAwMEBcPDQ8X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"},804:function(t,e,r){t.exports=r.p+"assets/img/pullup.d4431abe.jpg"}}]);