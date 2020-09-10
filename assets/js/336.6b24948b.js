(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1696:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"raspberry-pi-2-3-navio2-autopilot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-2-3-navio2-autopilot"}},[t._v("#")]),t._v(" Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Warning")]),t._v(" PX4 support for this flight controller is "),a("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_experimental.html"}},[t._v("experimental")]),t._v(".")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:e(523),alt:"Ra Pi Image"}})]),t._v(" "),a("h2",{attrs:{id:"developer-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-quick-start"}},[t._v("#")]),t._v(" Developer Quick Start")]),t._v(" "),a("h3",{attrs:{id:"os-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-image"}},[t._v("#")]),t._v(" OS Image")]),t._v(" "),a("p",[t._v("Use the "),a("a",{attrs:{href:"https://docs.emlid.com/navio2/Navio-APM/configuring-raspberry-pi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emlid RT Raspbian image for Navio 2"),a("OutboundLink")],1),t._v(". The default image will have most of the setup procedures shown below already done.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Warning")]),t._v(" Make sure not to upgrade the system (more specifically the kernel). By upgrading, a new kernel can get installed which lacks the necessary HW support (you can check with "),a("code",[t._v("ls /sys/class/pwm")]),t._v(", the directory should not be empty).")])]),t._v(" "),a("h3",{attrs:{id:"setting-up-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-access"}},[t._v("#")]),t._v(" Setting up Access")]),t._v(" "),a("p",[t._v('The Raspbian image has SSH setup already. Username is "pi" and password is "raspberry". You can connect to your RPi2/3 over a network (Ethernet is set to come up with DHCP by default) and then proceed to configure WiFi access. We assume that the username and password remain at their defaults for the purpose of this guide.')]),t._v(" "),a("p",[t._v("To setup the RPi2/3 to join your local wifi, follow "),a("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Find the IP address of your Pi from your network, and then you can proceed to connect to it using SSH.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" pi@"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP-ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"expand-the-filesystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expand-the-filesystem"}},[t._v("#")]),t._v(" Expand the Filesystem")]),t._v(" "),a("p",[t._v("After installing the OS and connecting to it, make sure to "),a("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/raspi-config.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("expand the Filesystem"),a("OutboundLink")],1),t._v(", so there is enough space on the SD Card.")]),t._v(" "),a("h3",{attrs:{id:"disable-navio-rgb-overlay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-navio-rgb-overlay"}},[t._v("#")]),t._v(" Disable Navio RGB Overlay")]),t._v(" "),a("p",[t._v("The existing Navio RGB overlay claims GPIOs used by PX4 for RGB Led. Edit "),a("code",[t._v("/boot/config.txt")]),t._v(" by commenting the line enabling the "),a("code",[t._v("navio-rgb")]),t._v(" overlay.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("#dtoverlay=navio-rgb\n")])])]),a("h3",{attrs:{id:"changing-hostnames"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-hostnames"}},[t._v("#")]),t._v(" Changing Hostnames")]),t._v(" "),a("p",[t._v('To avoid conflicts with any other RPis on the network, we advise you to change the default hostname to something sensible. We used "px4autopilot" for our setup. Connect to the Pi via SSH and follow the below instructions.')]),t._v(" "),a("p",[t._v("Edit the hostname file:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/hostname\n")])])]),a("p",[t._v("Change "),a("code",[t._v("raspberry")]),t._v(" to whatever hostname you want (one word with limited characters apply)")]),t._v(" "),a("p",[t._v("Next you need to change the hosts file:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/hosts\n")])])]),a("p",[t._v("Change the entry "),a("code",[t._v("127.0.1.1 raspberry")]),t._v(" to "),a("code",[t._v("127.0.1.1 <YOURNEWHOSTNAME>")])]),t._v(" "),a("p",[t._v("Reboot the Pi after this step is completed to allow it to re-associate with your network.")]),t._v(" "),a("h3",{attrs:{id:"setting-up-avahi-zeroconf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-avahi-zeroconf"}},[t._v("#")]),t._v(" Setting up Avahi (Zeroconf)")]),t._v(" "),a("p",[t._v("To make connecting to the Pi easier, we recommend setting up Avahi (Zeroconf) which allows easy access to the Pi from any network by directly specifying its hostname.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" avahi-daemon\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" insserv avahi-daemon\n")])])]),a("p",[t._v("Next, setup the Avahi configuration file")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/avahi/services/multiple.service\n")])])]),a("p",[t._v("Add this to the file :")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v("<?xml version=\"1.0\" standalone='no'?>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("service-group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("SYSTEM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avahi-service.dtd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service-group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("replace-wildcards")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("%h"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("_device-info._tcp"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("txt-record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("model=RackMac"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("txt-record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("_ssh._tcp"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("22"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service-group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("p",[t._v("Restart the daemon")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /etc/init.d/avahi-daemon restart\n")])])]),a("p",[t._v("And that's it. You should be able to access your Pi directly by its hostname from any computer on the network.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" You might have to add .local to the hostname to discover it.")])]),t._v(" "),a("h3",{attrs:{id:"configuring-a-ssh-public-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-ssh-public-key"}},[t._v("#")]),t._v(" Configuring a SSH Public-Key")]),t._v(" "),a("p",[t._v("In order to allow the PX4 development environment to automatically push executables to your board, you need to configure passwordless access to the RPi. We use the public-key authentication method for this.")]),t._v(" "),a("p",[t._v("To generate new SSH keys enter the following commands (Choose a sensible hostname such as "),a("code",[t._v("<YOURNANME>@<YOURDEVICE>")]),t._v(". Here we have used "),a("code",[t._v("pi@px4autopilot")]),t._v(")")]),t._v(" "),a("p",[t._v("These commands need to be run on the HOST development computer!")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ssh-keygen -t rsa -C pi@px4autopilot\n")])])]),a("p",[t._v("Upon entering this command, you'll be asked where to save the key. We suggest you save it in the default location ($HOME/.ssh/id_rsa) by just hitting Enter.")]),t._v(" "),a("p",[t._v("Now you should see the files "),a("code",[t._v("id_rsa")]),t._v(" and "),a("code",[t._v("id_rsa.pub")]),t._v(" in your "),a("code",[t._v(".ssh")]),t._v(" directory in your home folder:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" ~/.ssh\nauthorized_keys  id_rsa  id_rsa.pub  known_hosts\n")])])]),a("p",[t._v("The "),a("code",[t._v("id_rsa")]),t._v(" file is your private key. Keep this on the development computer. The "),a("code",[t._v("id_rsa.pub")]),t._v(" file is your public key. This is what you put on the targets you want to connect to.")]),t._v(" "),a("p",[t._v("To copy your public key to your Raspberry Pi, use the following command to append the public key to your authorized_keys file on the Pi, sending it over SSH:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/id_rsa.pub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" pi@px4autopilot "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat >> .ssh/authorized_keys'")]),t._v("\n")])])]),a("p",[t._v('Note that this time you will have to authenticate with your password ("raspberry" by default).')]),t._v(" "),a("p",[t._v("Now try "),a("code",[t._v("ssh pi@px4autopilot")]),t._v(" and you should connect without a password prompt.")]),t._v(" "),a("p",[t._v('If you see a message "'),a("code",[t._v("Agent admitted failure to sign using the key.")]),t._v('" then add your RSA or DSA identities to the authentication agent, ssh-agent and the execute the following command:')]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ssh-add\n")])])]),a("p",[t._v("If this did not work, delete your keys with "),a("code",[t._v("rm ~/.ssh/id*")]),t._v(" and follow the instructions again.")]),t._v(" "),a("h3",{attrs:{id:"testing-file-transfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-file-transfer"}},[t._v("#")]),t._v(" Testing file transfer")]),t._v(" "),a("p",[t._v("We use SCP to transfer files from the development computer to the target board over a network (WiFi or Ethernet).")]),t._v(" "),a("p",[t._v("To test your setup, try pushing a file from the development PC to the Pi over the network now. Make sure the Pi has network access, and you can SSH into it.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hello.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" hello.txt pi@px4autopilot:/home/pi/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" hello.txt\n")])])]),a("p",[t._v('This should copy over a "hello.txt" file into the home folder of your RPi. Validate that the file was indeed copied, and you can proceed to the next step.')]),t._v(" "),a("h3",{attrs:{id:"native-builds-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-builds-optional"}},[t._v("#")]),t._v(" Native Builds (optional)")]),t._v(" "),a("p",[t._v("You can run PX4 builds directly on the Pi if you desire. This is the "),a("em",[t._v("native")]),t._v(" build. The other option is to run builds on a development computer which cross-compiles for the Pi, and pushes the PX4 executable binary directly to the Pi. This is the "),a("em",[t._v("cross-compiler")]),t._v(" build, and the recommended one for developers due to speed of deployment and ease of use.")]),t._v(" "),a("p",[t._v("For cross-compiling setups, you can skip this step.")]),t._v(" "),a("p",[t._v("The steps below will setup the build system on the Pi to that required by PX4. Run these commands on the Pi itself!")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cmake python-empy\n")])])]),a("p",[t._v("Then clone the Firmware directly onto the Pi.")]),t._v(" "),a("h3",{attrs:{id:"building-the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-code"}},[t._v("#")]),t._v(" Building the Code")]),t._v(" "),a("p",[t._v("Continue with our "),a("a",{attrs:{href:"https://dev.px4.io/master/en/setup/dev_env_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("standard build system installation"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports},523:function(t,s,e){t.exports=e.p+"assets/img/hardware-rpi2.44769dea.jpg"}}]);