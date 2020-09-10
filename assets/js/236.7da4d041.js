(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1546:function(t,e,a){"use strict";a.r(e);var r=a(42),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"optical-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow"}},[t._v("#")]),t._v(" Optical Flow")]),t._v(" "),r("p",[r("em",[t._v("Optical Flow")]),t._v(" uses a downward facing camera and a downward facing distance sensor for velocity estimation.\nOptical Flow based navigation is enabled by the estimators: EKF2 and LPE (deprecated).")]),t._v(" "),r("h2",{attrs:{id:"setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),r("p",[t._v("An Optical Flow setup requires a downward facing camera and a "),r("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(" (preferably a LiDAR).\nThese can be connected via MAVLink, I2C or any other bus that supports the peripheral.")],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" If connected to PX4 via MAVLink the Optical Flow device must publish to the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPTICAL_FLOW_RAD",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPTICAL_FLOW_RAD"),r("OutboundLink")],1),t._v(" topic, and the distance sensor must publish to the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#DISTANCE_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("DISANCE_SENSOR"),r("OutboundLink")],1),t._v(" topic.")])]),t._v(" "),r("p",[t._v("The output of the flow when moving in different directions must be as follows:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vehicle movement")]),t._v(" "),r("th",[t._v("Integrated flow")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Forwards")]),t._v(" "),r("td",[t._v("+ Y")])]),t._v(" "),r("tr",[r("td",[t._v("Backwards")]),t._v(" "),r("td",[t._v("- Y")])]),t._v(" "),r("tr",[r("td",[t._v("Right")]),t._v(" "),r("td",[t._v("- X")])]),t._v(" "),r("tr",[r("td",[t._v("Left")]),t._v(" "),r("td",[t._v("+ X")])])])]),t._v(" "),r("p",[t._v("For pure rotations the "),r("code",[t._v("integrated_xgyro")]),t._v(" and "),r("code",[t._v("integrated_x")]),t._v(" (respectively "),r("code",[t._v("integrated_ygyro")]),t._v(" and "),r("code",[t._v("integrated_y")]),t._v(") have to be the same.")]),t._v(" "),r("p",[t._v("An popular setup is the "),r("RouterLink",{attrs:{to:"/en/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v(" and "),r("RouterLink",{attrs:{to:"/en/sensor/lidar_lite.html"}},[t._v("Lidar-Lite")]),t._v(", as shown below.")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(682),alt:"Optical flow lidar attached"}})]),t._v(" "),r("h2",{attrs:{id:"flow-sensors-cameras"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-sensors-cameras"}},[t._v("#")]),t._v(" Flow Sensors/Cameras")]),t._v(" "),r("h3",{attrs:{id:"px4flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4flow"}},[t._v("#")]),t._v(" PX4Flow")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v(" is an optical flow camera that works indoors and and in low outdoor light conditions without the need for an illumination LED.\nIt is one of the easiest and most established ways to calculate the optical flow.")],1),t._v(" "),r("h3",{attrs:{id:"pmw3901-based-sensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pmw3901-based-sensors"}},[t._v("#")]),t._v(" PMW3901-Based Sensors")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/sensor/pmw3901.html"}},[t._v("PMW3901")]),t._v(" is an optical flow tracking sensor similar to what you would find in a computer mouse, but adapted to work between 80 mm and infinity.\nIt is used in a number of products, including some from: Bitcraze, Tindie, Hex, Thone and Alientek.")],1),t._v(" "),r("h3",{attrs:{id:"other-cameras-sensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-cameras-sensors"}},[t._v("#")]),t._v(" Other Cameras/Sensors")]),t._v(" "),r("p",[t._v("It is also possible to use a board/quad that has an integrated camera (e.g. Snapdragon Flight).\nFor this the "),r("a",{attrs:{href:"https://github.com/PX4/OpticalFlow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optical Flow repo"),r("OutboundLink")],1),t._v(" can be used (see also "),r("a",{attrs:{href:"https://github.com/PX4/snap_cam",target:"_blank",rel:"noopener noreferrer"}},[t._v("snap_cam"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("h2",{attrs:{id:"range-finders"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#range-finders"}},[t._v("#")]),t._v(" Range Finders")]),t._v(" "),r("p",[t._v("You can use any supported "),r("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(".\nHowever we recommend using LIDAR rather than sonar sensors, because of their robustness and accuracy.")],1),t._v(" "),r("h2",{attrs:{id:"estimators"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#estimators"}},[t._v("#")]),t._v(" Estimators")]),t._v(" "),r("h3",{attrs:{id:"extended-kalman-filter-ekf2-ekf2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#extended-kalman-filter-ekf2-ekf2"}},[t._v("#")]),t._v(" Extended Kalman Filter (EKF2) {#ekf2}")]),t._v(" "),r("p",[t._v("For optical flow fusion using EKF2, set the use optical flow flag in the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")]),t._v(" parameter, as shown using QGroundControl below:")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(683),alt:"QGroundControl - Calibrate Sensors"}})]),t._v(" "),r("p",[t._v("If your optical flow sensor is offset from the vehicle centre, you can set this using the following parameters.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"EKF2_OF_POS_X"}}),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[t._v("EKF2_OF_POS_X")])],1),t._v(" "),r("td",[t._v("X position of optical flow focal point in body frame (default is 0.0m).")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"EKF2_OF_POS_Y"}}),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[t._v("EKF2_OF_POS_Y")])],1),t._v(" "),r("td",[t._v("Y position of optical flow focal point in body frame (default is 0.0m).")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"EKF2_OF_POS_Z"}}),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[t._v("EKF2_OF_POS_Z")])],1),t._v(" "),r("td",[t._v("Z position of optical flow focal point in body frame (default is 0.0m).")])])])])])}),[],!1,null,null,null);e.default=o.exports},682:function(t,e,a){t.exports=a.p+"assets/img/flow_lidar_attached.63b8acb4.jpg"},683:function(t,e,a){t.exports=a.p+"assets/img/qgc_ekf2_enable_flow.ac4d0802.png"}}]);