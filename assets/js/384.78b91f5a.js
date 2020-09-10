(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{1334:function(e,t,n){"use strict";n.r(t);var a=n(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"safe-landing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#safe-landing"}},[e._v("#")]),e._v(" Safe Landing")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("Safe Landing")]),e._v(" feature ensures that vehicles only land on flat terrain.")]),e._v(" "),n("p",[e._v("The feature can be enabled in both "),n("RouterLink",{attrs:{to:"/en/flight_modes/land.html"}},[e._v("Land mode")]),e._v(" and "),n("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(" on multicopter vehicles that have a companion computer running the appropriate vision software.\nIt can also be used for VTOL vehicles in MC mode.")],1),e._v(" "),n("p",[e._v("If commanded to land, the vehicle first descends to a height where it can measure the surface (companion computer "),n("code",[e._v("loiter_height")]),e._v(" parameter).\nIf the landing area is not sufficiently flat, the vehicle moves outwards in a square-spiral pattern, periodically stopping to re-check the terrain for a landing spot that isn't too rough.")]),e._v(" "),n("p",[e._v("{% youtube %}https://youtu.be/9SuJYcT0Mgc{% endyoutube %}")]),e._v(" "),n("h2",{attrs:{id:"limitations-capabilities"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#limitations-capabilities"}},[e._v("#")]),e._v(" Limitations/Capabilities")]),e._v(" "),n("p",[e._v("Safe landing is designed for finding flat areas in rough terrain.")]),e._v(" "),n("ul",[n("li",[e._v('Landing on a road is not prevented; if a car is detected it will be "forgotten" once it moves past.')]),e._v(" "),n("li",[e._v("Landing on water may occur if using radar or ultrasound sensors, but should not occur if using stereo cameras or LIDAR.\n"),n("ul",[n("li",[e._v("The system will only land if it is able to detect ground.\nFor stereo cameras, water that is rough enough to have sufficient distinguishing features for analysis will not be flat enough to land on.")])])])]),e._v(" "),n("h2",{attrs:{id:"px4-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),n("p",[e._v("Safe landing is enabled within PX4 by "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("setting")]),e._v(" the "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[e._v("COM_OBS_AVOID")]),e._v(" to 1.")],1),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" "),n("code",[e._v("COM_OBS_AVOID")]),e._v(" also enables "),n("RouterLink",{attrs:{to:"/en/computer_vision/obstacle_avoidance.html#mission_mode"}},[e._v("Obstacle Avoidance in Missions")]),e._v(" and any other features that use the "),n("RouterLink",{attrs:{to:"/en/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Offboard Interface")]),e._v(" (Trajectory Interface) to integrate external path planning services with PX4.")],1)]),e._v(" "),n("h2",{attrs:{id:"companion-computer-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-setup"}},[e._v("#")]),e._v(" Companion Computer Setup")]),e._v(" "),n("p",[e._v("Companion-side setup and configuration is provided in the "),n("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),n("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),n("p",[e._v("This covers the common setup for obstacle avoidance and collision prevention, and includes specific sections for using the "),n("em",[e._v("safe landing planner")]),e._v(" (which provides companion-side support for this feature):")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simulation setup"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Harware setup"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("The configuration information includes, among other things, how to set up safe landing for different cameras, sizes of vehicles, and the height at which the decision to land or not is taken.")]),e._v(" "),n("h2",{attrs:{id:"safe-landing-interface-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#safe-landing-interface-interface"}},[e._v("#")]),e._v(" Safe Landing Interface {#interface}")]),e._v(" "),n("p",[e._v("PX4 uses the "),n("RouterLink",{attrs:{to:"/en/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Interface")]),e._v(" for integrating path planning services from a companion computer (including "),n("RouterLink",{attrs:{to:"/en/computer_vision/obstacle_avoidance.html#mission_mode"}},[e._v("Obstacle Avoidance in missions")]),e._v(", "),n("RouterLink",{attrs:{to:"/en/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(", and future services).")],1),e._v(" "),n("p",[e._v("The interface (messages sent) between PX4 and the companion are exactly the same as for any other path planning services.\nNote however that the safe landing planner only uses information in Point 0 of the "),n("code",[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS")]),e._v(" message for the desired path.")]),e._v(" "),n("h2",{attrs:{id:"supported-hardware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),n("p",[e._v("Tested companion computers and cameras are listed in "),n("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"further-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://youtu.be/CxIsJWtVaTA?t=963",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vision and offboard control interfaces"),n("OutboundLink")],1),e._v(" (PX4 Developer Summit 2019: Martina Rivizzigno, Auterion Computer Vision Engineer)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),n("OutboundLink")],1),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simulation setup > Safe Landing Planner"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/PX4/avoidance#ssafe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hardware setup > Safe Landing Planner"),n("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);