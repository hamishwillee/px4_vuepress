(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1366:function(e,t,r){"use strict";r.r(t);var o=r(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"铱星-rockblock卫通系统"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#铱星-rockblock卫通系统"}},[e._v("#")]),e._v(" 铱星/RockBlock卫通系统")]),e._v(" "),o("p",[e._v("A satellite communication system can be used to provide long range high latency link between a ground station and a vehicle.")]),e._v(" "),o("p",[e._v("This topic describes how to set up a system that uses RockBlock as the service provider for the Iridium SBD Satellite Communication System. Given good signal quality, users can expect a latency between 10 to 15 seconds.")]),e._v(" "),o("h2",{attrs:{id:"综述"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[e._v("#")]),e._v(" 综述")]),e._v(" "),o("p",[e._v("The following components are needed for the satellite communication link:")]),e._v(" "),o("ul",[o("li",[e._v("A "),o("a",{attrs:{href:"http://www.rock7mobile.com/products-rockblock-9603",target:"_blank",rel:"noopener noreferrer"}},[e._v("RockBlock 9603"),o("OutboundLink")],1),e._v(" module connected to a Pixhawk flashed with the PX4 Autopilot.")]),e._v(" "),o("li",[e._v("A message relay server running Ubuntu Linux.")]),e._v(" "),o("li",[e._v("A ground station computer running "),o("em",[e._v("QGroundControl")]),e._v(" on Ubuntu Linux")])]),e._v(" "),o("p",[e._v("The full system architecture is shown below:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(713),alt:"Architecture"}})]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" The setup was tested with the current release of "),o("em",[e._v("QGroundControl")]),e._v(" running on Ubuntu 14.04 and 16.04.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("- It may be possible to run the system on other ground stations and operating systems, but this has not been tested (and is not guaranteed to work).\n- The [RockBlock MK2](http://www.rock7mobile.com/products-rockblock) module can also be used. \n  The RockBlock 9603 module is recommended because it is smaller and lighter, while providing the same functionality.\n")])])]),o("h2",{attrs:{id:"costs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#costs"}},[e._v("#")]),e._v(" Costs")]),e._v(" "),o("p",[e._v("The UK link running cost consists of a line rental and per message cost:")]),e._v(" "),o("ul",[o("li",[e._v("Each module needs to be activated which costs £10.00 per month")]),e._v(" "),o("li",[e._v("Each message transmitted over the system costs one "),o("em",[e._v("credit")]),e._v(" per 50 bytes. Bundles of credits can be bought from RockBlock for £0.04-£0.11 per credit, depending on the bundle size.")])]),e._v(" "),o("p",[e._v("Refer to the "),o("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("RockBlock Documentation"),o("OutboundLink")],1),e._v(" for a detailed explanation of the modules, running costs and "),o("em",[e._v("RockBlock")]),e._v(" in general.")]),e._v(" "),o("h2",{attrs:{id:"vehicle-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-setup"}},[e._v("#")]),e._v(" Vehicle Setup")]),e._v(" "),o("h3",{attrs:{id:"布线"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#布线"}},[e._v("#")]),e._v(" 布线")]),e._v(" "),o("p",[e._v("Connect the RockBlock module to a serial port of the Pixhawk. Due to the power requirements of the module it can only be powered over a high-power serial port as a maximum of 0.5 A at 5 V are required. If none is available/free then another power source which has the same ground level as the Pixhawk and can provide required power has to be setup. The details of the "),o("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/connectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("connectors"),o("OutboundLink")],1),e._v(" and the "),o("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/power-supply",target:"_blank",rel:"noopener noreferrer"}},[e._v("power requirements"),o("OutboundLink")],1),e._v(" can be found in the RockBlock documentation.")]),e._v(" "),o("h3",{attrs:{id:"module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[e._v("#")]),e._v(" Module")]),e._v(" "),o("p",[e._v("The module can either use the internal antenna or an external one connected to the SMA connector. To "),o("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/switching-rockblock-9603-antenna-mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("switch between the two antennas modes"),o("OutboundLink")],1),e._v(" the position of a small RF link cable needs to changed. If an external antenna is used always make sure that the antenna is connected to the module before powering it up to avoid damage to the module.")]),e._v(" "),o("p",[e._v("The default baud rate of the module is 19200. However, the PX4 "),o("em",[e._v("iridiumsbd")]),e._v(" driver requires a baud rate of 115200 so it needs to be changed using the "),o("a",{attrs:{href:"http://www.rock7mobile.com/downloads/IRDM_ISU_ATCommandReferenceMAN0009_Rev2.0_ATCOMM_Oct2012.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("AT commands"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("ol",[o("li",[e._v("Connect to the module with using a 19200/8-N-1 setting and check if the communication is working using the command: "),o("code",[e._v("AT")]),e._v(". The response should be: "),o("code",[e._v("OK")]),e._v(".")]),e._v(" "),o("li",[e._v("Change the baud rate: "),o("code",[e._v("AT+IPR=9")])]),e._v(" "),o("li",[e._v("Reconnect to the model now with a 115200/8-N-1 setting and save the configuration using: "),o("code",[e._v("AT&W0")])])]),e._v(" "),o("p",[e._v("The module is now ready to be used with PX4.")]),e._v(" "),o("h3",{attrs:{id:"software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[e._v("Configure the serial port")]),e._v(" on which the RockBlock module will run using "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[e._v("ISBD_CONFIG")]),e._v(". There is no need to set the baud rate for the port, as this is configured by the driver.")],1),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" If the configuration parameter is not available in "),o("em",[e._v("QGroundControl")]),e._v(" then you may need to "),o("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[e._v("add the driver to the firmware")]),e._v(": "),o("code",[e._v("drivers/telemetry/iridiumsbd")])],1)]),e._v(" "),o("h2",{attrs:{id:"rockblock-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rockblock-setup"}},[e._v("#")]),e._v(" RockBlock Setup")]),e._v(" "),o("p",[e._v("When buying the first module on RockBlock an user account needs to be created in a first step.")]),e._v(" "),o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://rockblock.rock7.com/Operations",target:"_blank",rel:"noopener noreferrer"}},[e._v("account"),o("OutboundLink")],1),e._v(" and register the RockBlock module under the "),o("code",[e._v("My RockBLOCKs")]),e._v(". Activate the line rental for the module and make sure that enough credits for the expected flight duration are available on the account. When using the default settings one message per minute is sent from the vehicle to the ground station.")]),e._v(" "),o("p",[e._v("Set up a delivery group for the message relay server and add the module to that delivery group:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(714),alt:"Delivery Groups"}})]),e._v(" "),o("h2",{attrs:{id:"relay-server-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relay-server-setup"}},[e._v("#")]),e._v(" Relay Server Setup")]),e._v(" "),o("p",[e._v("The relay server should be run on either Ubuntu 16.04 or 14.04 OS.")]),e._v(" "),o("ol",[o("li",[e._v("The server working as a message relay should have a static IP address and two publicly accessible, open, TCP ports:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("5672")]),e._v(" for the "),o("em",[e._v("RabbitMQ")]),e._v(" message broker (can be changed in the "),o("em",[e._v("rabbitmq")]),e._v(" settings)")]),e._v(" "),o("li",[o("code",[e._v("45679")]),e._v(" for the HTTP POST interface (can be changed in the "),o("strong",[e._v("relay.cfg")]),e._v(" file)")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[e._v("Install the required python modules:")]),e._v(" "),o("p",[e._v("bash\nsudo pip install pika tornado future")])]),e._v(" "),o("li",[o("p",[e._v("Install the "),o("code",[e._v("rabbitmq")]),e._v(" message broker: "),o("code",[e._v("sudo apt install rabbitmq-server")])])]),e._v(" "),o("li",[o("p",[e._v("Configure the broker's credentials (change PWD to your preferred password):\nbash\nsudo rabbitmqctl add_user iridiumsbd PWD\nsudo rabbitmqctl set_permissions iridiumsbd \"."),o("em",[e._v('" ".')]),e._v('" ".*"')])]),e._v(" "),o("li",[o("p",[e._v("Clone the "),o("a",{attrs:{href:"https://github.com/acfloria/SatComInfrastructure.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("SatComInfrastructure"),o("OutboundLink")],1),e._v(" repository: "),o("code",[e._v("git clone https://github.com/acfloria/SatComInfrastructure.git")])])]),e._v(" "),o("li",[o("p",[e._v("Go to the location of the "),o("em",[e._v("SatComInfrastructure")]),e._v(" repo and configure the broker's queues: "),o("code",[e._v("./setup_rabbit.py localhost iridiumsbd PWD")])])]),e._v(" "),o("li",[o("p",[e._v("Verify the setup: "),o("code",[e._v("sudo rabbitmqctl list_queues")])])])]),e._v(" "),o("p",[e._v("This should give you a list of 4 queues: "),o("code",[e._v("MO")]),e._v(", "),o("code",[e._v("MO_LOG")]),e._v(", "),o("code",[e._v("MT")]),e._v(", "),o("code",[e._v("MT_LOG")])]),e._v(" "),o("ol",{attrs:{start:"8"}},[o("li",[o("p",[e._v("Edit the "),o("code",[e._v("relay.cfg")]),e._v(" configuration file to reflect your settings.")])]),e._v(" "),o("li",[o("p",[e._v("Start the relay script in the detached mode: "),o("code",[e._v("screen -dm bash -c 'cd SatcomInfrastructure/; ./relay.py")])])])]),e._v(" "),o("p",[e._v("Other instructions include:")]),e._v(" "),o("ul",[o("li",[e._v("Detach from the screen: "),o("code",[e._v("ctrl+a d")])]),e._v(" "),o("li",[e._v("Kill execution of the script: "),o("code",[e._v("ctrl+a :quit")])]),e._v(" "),o("li",[e._v("Reattach to the screen:: "),o("code",[e._v("screen -dr")])])]),e._v(" "),o("h2",{attrs:{id:"ground-station-computer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ground-station-computer"}},[e._v("#")]),e._v(" Ground Station Computer")]),e._v(" "),o("p",[e._v("To setup the ground station:")]),e._v(" "),o("ol",[o("li",[e._v("Install the required python modules: "),o("code",[e._v("sudo pip install pika tornado future")])]),e._v(" "),o("li",[e._v("Clone the SatComInfrastructure repository: "),o("code",[e._v("git clone https://github.com/acfloria/SatComInfrastructure.git")])]),e._v(" "),o("li",[e._v("Edit the "),o("strong",[e._v("udp2rabbit.cfg")]),e._v(" configuration file to reflect your settings.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install "),o("em",[e._v("QGroundControl")]),o("OutboundLink")],1),e._v(" (daily build).")]),e._v(" "),o("li",[e._v("Add a UDP connection in QGC with the parameters:")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Listening port: 10000")])]),e._v(" "),o("li",[o("p",[e._v("Target hosts: 127.0.0.1:10001")])]),e._v(" "),o("li",[o("p",[e._v("High Latency: checked")]),e._v(" "),o("p",[o("img",{attrs:{src:r(715),alt:"High Latency Link Settings"}})])])]),e._v(" "),o("h3",{attrs:{id:"verification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open a terminal on the ground station computer and change to the location of the "),o("em",[e._v("SatComInfrastructure")]),e._v(" repository. Then start the "),o("strong",[e._v("udp2rabbit.py")]),e._v(" script: "),o("code",[e._v("./udp2rabbit.py")])])]),e._v(" "),o("li",[o("p",[e._v("Send a test message from "),o("a",{attrs:{href:"https://rockblock.rock7.com/Operations",target:"_blank",rel:"noopener noreferrer"}},[e._v("RockBlock Account"),o("OutboundLink")],1),e._v(" to the created delivery group in the "),o("code",[e._v("Test Delivery Groups")]),e._v(" tab.")])])]),e._v(" "),o("p",[e._v("If in the terminal where the "),o("code",[e._v("udp2rabbit.py")]),e._v(" script is running within a couple of seconds the acknowledge for a message can be observed, then the RockBlock delivery group, the relay server and the udp2rabbit script are set up correctly:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(716),alt:"udp2rabbit message acknowledge"}})]),e._v(" "),o("h2",{attrs:{id:"running-the-system"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-the-system"}},[e._v("#")]),e._v(" Running the System")]),e._v(" "),o("ol",[o("li",[e._v("Start "),o("em",[e._v("QGroundControl")]),e._v(". Manually connect the high latency link first, then the regular telemetry link:")])]),e._v(" "),o("p",[o("img",{attrs:{src:r(717),alt:"Connect the High Latency link"}})]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[e._v("Open a terminal on the ground station computer and change to the location of the "),o("em",[e._v("SatComInfrastructure")]),e._v(" repository. Then start the "),o("strong",[e._v("udp2rabbit.py")]),e._v(" script: "),o("code",[e._v("./udp2rabbit.py")])])]),e._v(" "),o("li",[o("p",[e._v("Power up the vehicle.")])]),e._v(" "),o("li",[o("p",[e._v("Wait until the first "),o("code",[e._v("HIGH_LATENCY2")]),e._v(" message is received on QGC. This can be checked either using the "),o("em",[e._v("MAVLink Inspector")]),e._v(" widget or on the toolbar with the "),o("em",[e._v("LinkIndicator")]),e._v(". If more than one link is connected to the active vehicle the "),o("em",[e._v("LinkIndicator")]),e._v(" shows all of them by clicking on the name of the shown link:")])])]),e._v(" "),o("p",[o("img",{attrs:{src:r(718),alt:"Link Toolbar"}})]),e._v(" "),o("p",[e._v("The link indicator always shows the name of the priority link.")]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("The satellite communication system is now ready to use. The priority link, which is the link over which commands are send, is determined the following ways:")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("If no link is commanded by the user a regular radio telemetry link is preferred over the high latency link.")])]),e._v(" "),o("li",[o("p",[e._v("The autopilot and QGC will fall back from the regular radio telemetry to the high latency link if the vehicle is armed and the radio telemetry link is lost (no MAVLink messages received for a certain time). As soon as the radio telemetry link is regained QGC and the autopilot will switch back to it.")])]),e._v(" "),o("li",[o("p",[e._v("The user can select a priority link over the "),o("code",[e._v("LinkIndicator")]),e._v(" on the toolbar. This link is kept as the priority link as long as this link is active or the user selects another priority link:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(719),alt:"Prioritylink Selection"}})])])]),e._v(" "),o("h2",{attrs:{id:"故障处理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[e._v("#")]),e._v(" 故障处理")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Satellite communication messages from the airplane are received but no commands can be transmitted (the vehicle does not react)")]),e._v(" "),o("ul",[o("li",[e._v("Check the settings of the relay server and make sure that they are correct, especially the IMEI.")])])]),e._v(" "),o("li",[o("p",[e._v("No satellite communication messages from the airplane arrive on the ground station:")]),e._v(" "),o("ul",[o("li",[e._v("Check using the system console if the "),o("em",[e._v("iridiumsbd")]),e._v(" driver started and if it did that a signal from any satellite is received by the module: "),o("code",[e._v("iridiumsbd status")])]),e._v(" "),o("li",[e._v("Make sure using the verification steps from above that the relay server, the delivery group and the "),o("code",[e._v("udp2rabbit.py")]),e._v(" script are set up correctly.")]),e._v(" "),o("li",[e._v("Check if the link is connected and that its settings are correct.")])])]),e._v(" "),o("li",[o("p",[e._v("The IridiumSBD driver does not start:")]),e._v(" "),o("ul",[o("li",[e._v("Reboot the vehicle. If that helps increase the sleep time in the "),o("code",[e._v("extras.txt")]),e._v(" before the driver is started. If that does not help make sure that the Pixhawk and the module have the same ground level. Confirm also that the baudrate of the module is set to 115200.")])])]),e._v(" "),o("li",[o("p",[e._v("A first message is received on the ground but as soon as the vehicle is flying no message can be transmitted or the latency is significantly larger (in the order of minutes)")]),e._v(" "),o("ul",[o("li",[e._v("Check the signal quality after the flight. If it is decreasing during the flight and you are using the internal antenna consider using an external antenna. If you are already using the external antenna try moving the antenna as far away as possible from any electronics or anything which might disturb the signal. Also make sure that the antenna is is not damaged.")])])])])])}),[],!1,null,null,null);t.default=a.exports},713:function(e,t,r){e.exports=r.p+"assets/img/architecture.b6a18ffd.jpg"},714:function(e,t,r){e.exports=r.p+"assets/img/deliverygroup.dbcd30c3.png"},715:function(e,t,r){e.exports=r.p+"assets/img/linksettings.a9148990.png"},716:function(e,t,r){e.exports=r.p+"assets/img/verification.8fd74e1a.png"},717:function(e,t,r){e.exports=r.p+"assets/img/linkconnect.37d200e0.png"},718:function(e,t,r){e.exports=r.p+"assets/img/linkindicator.20c22640.jpg"},719:function(e,t,r){e.exports=r.p+"assets/img/linkselection.3b904861.png"}}]);