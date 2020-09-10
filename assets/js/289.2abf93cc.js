(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1431:function(e,t,o){"use strict";o.r(t);var i=o(42),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"follow-me-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#follow-me-mode"}},[e._v("#")]),e._v(" Follow-Me Mode")]),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[i("img",{attrs:{src:o(302),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),i("p",[i("em",[e._v("Follow Me")]),e._v(" mode allows a multicopter to autonomously follow and track another system that is broadcasting its position using the "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#FOLLOW_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("FOLLOW_TARGET"),i("OutboundLink")],1),e._v(" MAVLink message.")]),e._v(" "),i("p",[e._v("The vehicle will automatically yaw to face and follow the target from a specified "),i("a",{attrs:{href:"#NAV_FT_FS"}},[e._v("relative position")]),e._v(", "),i("a",{attrs:{href:"#NAV_FT_DST"}},[e._v("horizontal separation")]),e._v(" and "),i("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[e._v("height")]),e._v(" above the home position.\nBy default it will follow from directly behind the target at a distance of 8 meters, and a height of 8 meters above the home/arming position.\nWhile in this mode no user input is required.")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Tip")]),e._v(" PX4 currently ignores the altitude of/from the target and follows at a constant altitude above home.\nThis limitation is because altitude sources from GPS on ground stations are often inaccurate.")])]),e._v(" "),i("p",[e._v("The mode is supported by "),i("em",[e._v("QGroundControl")]),e._v(" on Android tablets that have a GPS module, and by the "),i("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/api_reference/classmavsdk_1_1_follow_me.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note")])]),e._v(" "),i("ul",[i("li",[e._v("This mode requires GPS.")]),e._v(" "),i("li",[e._v("This mode is currently only supported on multicopter.")]),e._v(" "),i("li",[e._v("The follow target must also be able to supply position information.")]),e._v(" "),i("li",[i("em",[e._v("QGroundControl")]),e._v(" only supports this mode on Android devices that have GPS.")])])]),e._v(" "),i("p",[e._v("{% youtube %}\nhttps://www.youtube.com/watch?v=RxDL4CtkzAQ\n{% endyoutube %}")]),e._v(" "),i("h2",{attrs:{id:"safety-precautions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#safety-precautions"}},[e._v("#")]),e._v(" Safety Precautions")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Warning")]),e._v(" "),i("strong",[e._v("Follow-me mode")]),e._v(" does not implement any type of obstacle avoidance.\nSpecial care must be taken when this mode is used.")])]),e._v(" "),i("p",[e._v("The following flight precautions should be observed:")]),e._v(" "),i("ul",[i("li",[e._v("Follow me mode should only be used in wide open areas that are unobstructed by trees, power lines, houses, etc.\n"),i("ul",[i("li",[e._v("Set the "),i("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[e._v("follow-me height")]),e._v(" to a value that is well above any surrounding obstructions.\nBy "),i("em",[e._v("default")]),e._v(" this is 8 metres/26 feet above the home (arming) position.")])])]),e._v(" "),i("li",[e._v("It is "),i("em",[e._v("safer")]),e._v(" to manually fly to a safe height before engaging follow-me mode than to engage follow-me mode when landed (even though the mode implements auto take off).")]),e._v(" "),i("li",[e._v("Give your vehicle sufficient room to stop, especially when it is moving fast.\nMany Android devices do not update their position very frequently, and autopilot estimations of the speed and direction can be inaccurate.")]),e._v(" "),i("li",[e._v("Be ready to take manual RC control if something goes wrong when using follow me mode for the first time.\nThe accuracy of positioning is dependent on the quality of the GPS used by target system.\nIf the GPS is not accurate, this will be reflected in follow me.")])]),e._v(" "),i("h2",{attrs:{id:"using-follow-me-with-qgroundcontrol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-follow-me-with-qgroundcontrol"}},[e._v("#")]),e._v(" Using Follow Me with QGroundControl")]),e._v(" "),i("p",[i("em",[e._v("Follow Me")]),e._v(" mode is supported by "),i("em",[e._v("QGroundControl")]),e._v(" on ground station hardware that has a GPS module.\nThe recommended configuration is a USB OTG-capable Android device with two telemetry radios.")]),e._v(" "),i("p",[e._v("To setup "),i("em",[e._v("Follow Me")]),e._v(" mode:")]),e._v(" "),i("ul",[i("li",[e._v("Connect a telemetry radio to your Android device and another to the vehicle (this allows positioning information to be relayed between the two radios).")]),e._v(" "),i("li",[e._v("Disable sleep-mode on your Android device:\n"),i("ul",[i("li",[e._v("This setting can usually be found under: "),i("strong",[e._v("Settings > Display")]),e._v(".")]),e._v(" "),i("li",[e._v("It is important that you set your Android device to not go to sleep as this could cause the GPS signal to cease being emitted at regular intervals.")])])]),e._v(" "),i("li",[e._v("Takeoff to a height of at least 2-3 metres (recommended even though auto-takeoff is supported).\n"),i("ul",[i("li",[e._v("Set the vehicle on the ground, press the safety switch and step back at least 10 meters.")]),e._v(" "),i("li",[e._v("Arm the vehicle and takeoff.")])])]),e._v(" "),i("li",[e._v("Switch into follow me mode.\n"),i("ul",[i("li",[e._v("The copter will ascend to the specified "),i("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[e._v("minimum height")]),e._v(" and then pause for a moment to assess the radio link.\nIf the link update rate is OK the multicopter will then yaw to face the target.")])])])]),e._v(" "),i("p",[e._v("At this point you should be able to start moving and the copter should follow your movements.")]),e._v(" "),i("p",[e._v("The mode has been tested on the following Android devices:")]),e._v(" "),i("ul",[i("li",[e._v("Nexus 5")]),e._v(" "),i("li",[e._v("Nexus 7 Tablet")])]),e._v(" "),i("h2",{attrs:{id:"configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),i("p",[e._v("The follow-me behaviour can be configured using the following parameters:")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Parameter")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("span",{attrs:{id:"NAV_FT_DST"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_FT_DST"}},[e._v("NAV_FT_DST")])],1),e._v(" "),i("td",[e._v("Vehicle/ground station separation in the "),i("em",[e._v("horizontal")]),e._v(" (x,y) plane. Minimum allowed separation is 1 meter. Default distance is 8 meters (about 26 ft).")])]),e._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"NAV_MIN_FT_HT"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_MIN_FT_HT"}},[e._v("NAV_MIN_FT_HT")])],1),e._v(" "),i("td",[e._v("Vehicle follow-me height. Note that this height is fixed "),i("em",[e._v("relative to the home/arming position")]),e._v(" (not the target vehicle). Default and minimum height is 8 meters (about 26 ft).")])]),e._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"NAV_FT_FS"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_FT_FS"}},[e._v("NAV_FT_FS")])],1),e._v(" "),i("td",[e._v("Flight position relative to the user when follow-me mode is active."),i("br"),e._v("- "),i("code",[e._v("0")]),e._v(" = Follow from the front right."),i("br"),e._v("- "),i("code",[e._v("1")]),e._v(" = Follow from behind or trail the user (Default)."),i("br"),e._v("- "),i("code",[e._v("2")]),e._v(" = Follow from the front."),i("br"),e._v("- "),i("code",[e._v("3")]),e._v(" = Follow from the front left.")])])])]),e._v(" "),i("h2",{attrs:{id:"known-issues"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),i("ul",[i("li",[e._v("The SiK 915 Mhz "),i("RouterLink",{attrs:{to:"/en/telemetry/sik_radio.html"}},[e._v("telemetry radio")]),e._v(" is known to interfere with the GPS signal being received by some Android devices.\nKeep the radio and Android device as far apart as possible when using the follow target mode to avoid interference.")],1)])])}),[],!1,null,null,null);t.default=a.exports},302:function(e,t,o){e.exports=o.p+"assets/img/position_fixed.c1403cf0.svg"}}]);