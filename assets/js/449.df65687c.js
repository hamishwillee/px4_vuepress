(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{1612:function(e,a,t){"use strict";t.r(a);var n=t(42),i=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"自主避障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自主避障"}},[e._v("#")]),e._v(" 自主避障")]),e._v(" "),t("p",[t("em",[e._v("自主避障")]),e._v(" 使飞机沿预定路线前进时，能够自动绕开障碍物。")]),e._v(" "),t("p",[e._v("该功能需要运行计算机视觉软件的机载计算机。 该软件对期望路线重新规划，在导航绕开障碍物，并选取最佳路径。")]),e._v(" "),t("p",[e._v("自主避障适用于自动化模式，目前仅支持多旋翼飞行器的 "),t("a",{attrs:{href:"#mission_mode"}},[e._v("任务Missions")]),e._v(" 和 "),t("a",{attrs:{href:"#offboard_mode"}},[e._v("Offboard")]),e._v(" 模式。")]),e._v(" "),t("p",[e._v("本文将阐述怎样在这两种模式中设置自主避障功能。")]),e._v(" "),t("p",[e._v("{% youtube %}https://youtu.be/PrGt7pKj3tI{% endyoutube %}")]),e._v(" "),t("h2",{attrs:{id:"limitations-capabilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-capabilities"}},[e._v("#")]),e._v(" Limitations/Capabilities")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The maximum speed for obstacle avoidance is currently approximately 3 m/s (due to the cost of computing the avoidance path).")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Note")]),e._v(" Obstacle avoidance can use the "),t("em",[e._v("local planner")]),e._v(" planner emits messages at ~30Hz and can move at around 3 m/s) or global planner (emits messages at ~10Hz and mission speed with obstacle avoidance is around 1-1.5 m/s).")])])])]),e._v(" "),t("h2",{attrs:{id:"offboard-mode-avoidance-offboard-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#offboard-mode-avoidance-offboard-mode"}},[e._v("#")]),e._v(" Offboard Mode Avoidance {#offboard_mode}")]),e._v(" "),t("p",[e._v("PX4 supports obstacle avoidance in "),t("RouterLink",{attrs:{to:"/zh/flight_modes/offboard.html"}},[e._v("Offboard mode")]),e._v(".")],1),e._v(" "),t("p",[e._v("The desired route comes from a "),t("a",{attrs:{href:"http://dev.px4.io/en/ros/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS"),t("OutboundLink")],1),e._v(" node running on a companion computer. This is passed into an obstacle avoidance module (another ROS node). The avoidance software sends the planned path to the flight stack as a stream of "),t("code",[e._v("SET_POSITION_TARGET_LOCAL_NED")]),e._v(" messages.")]),e._v(" "),t("p",[e._v("The only required PX4-side setup is to put PX4 into "),t("em",[e._v("Offboard mode")]),e._v(".")]),e._v(" "),t("p",[e._v("Companion-side hardware setup and hardware/software configuration is provided in the "),t("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),t("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),t("h2",{attrs:{id:"mission-mode-avoidance-mission-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mission-mode-avoidance-mission-mode"}},[e._v("#")]),e._v(" Mission Mode Avoidance {#mission_mode}")]),e._v(" "),t("p",[e._v("PX4 supports obstacle avoidance in "),t("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(", using avoidance software running on a separate companion computer.")],1),e._v(" "),t("h3",{attrs:{id:"任务模式的变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务模式的变化"}},[e._v("#")]),e._v(" 任务模式的变化")]),e._v(" "),t("p",[e._v("开启自主避障功能的任务模式的行为有"),t("em",[e._v("些许不同")]),e._v("。")]),e._v(" "),t("p",[e._v("激活避障之后的不同之处有：")]),e._v(" "),t("ul",[t("li",[e._v('A waypoint is "reached" when the vehicle is within the acceptance radius, regardless of its heading.\n'),t("ul",[t("li",[e._v('This differs from normal missions, in which the vehicle must reach a waypoint with a certain heading (i.e. in a "close to" straight line from the previous waypoint). This constraint cannot be fulfilled when obstacle avoidance is active because the obstacle avoidance algorithm has full control of the vehicle heading, and the vehicle always moves in the current field of view.')])])]),e._v(" "),t("li",[e._v("PX4 starts emitting a new current/next waypoint once the previous waypoint is reached (i.e. as soon as vehicle enters its acceptance radius).")]),e._v(" "),t("li",[e._v("If a waypoint is "),t("em",[e._v("inside")]),e._v(" an obstacle it may unreachable (and the mission will be stuck).\n"),t("ul",[t("li",[e._v("If the vehicle projection on the line previous-current waypoint passes the current waypoint, the acceptance radius is enlarged such that the current waypoint is set as reached")]),e._v(" "),t("li",[e._v("If the vehicle within the x-y acceptance radius, the altitude acceptance is modified such that the mission progresses (even if it is not in the altitude acceptance radius).")])])]),e._v(" "),t("li",[e._v("The original mission speed (as set in "),t("em",[e._v("QGroundControl")]),e._v("/PX4) is ignored. The speed will be determined by the avoidance software:\n"),t("ul",[t("li",[t("em",[e._v("local planner")]),e._v(" mission speed is around 3 m/s.")]),e._v(" "),t("li",[t("em",[e._v("global planner")]),e._v(" mission speed is around 1-1.5 m/s.")])])])]),e._v(" "),t("p",[e._v("If PX4 stops receiving setpoint updates for more than half a second it will switch into "),t("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"px4-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),t("p",[e._v("Obstacle avoidance is enabled within PX4 by "),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("setting")]),e._v(" the "),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[e._v("COM_OBS_AVOID")]),e._v(" to 1.")],1),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Note")]),e._v(" "),t("code",[e._v("COM_OBS_AVOID")]),e._v(" also enables "),t("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(" and any other features that use the PX4 "),t("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Offoard Interface")]),e._v(" (Trajectory Interface) to integrate external path planning services with PX4.")],1)]),e._v(" "),t("h2",{attrs:{id:"companion-computer-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-setup"}},[e._v("#")]),e._v(" Companion Computer Setup")]),e._v(" "),t("p",[e._v("Companion-side hardware setup and hardware/software configuration is provided in the "),t("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),t("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),t("p",[e._v("Obstacle avoidance in missions can use either the "),t("em",[e._v("local planner")]),e._v(" or "),t("em",[e._v("global planner")]),e._v(" (the local planner is recommended/better performing).")]),e._v(" "),t("h2",{attrs:{id:"obstacle-avoidance-interface-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obstacle-avoidance-interface-interface"}},[e._v("#")]),e._v(" Obstacle Avoidance Interface {#interface}")]),e._v(" "),t("p",[e._v("PX4 uses the "),t("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Offboard Interface")]),e._v(" for integrating path planning services from a companion computer (including "),t("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html#mission_mode"}},[e._v("Obstacle Avoidance in missions")]),e._v(", "),t("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(", and future services).")],1),e._v(" "),t("p",[e._v("The interface (messages sent) between PX4 and the companion are "),t("em",[e._v("exactly")]),e._v(" the same as for any other path planning services.")]),e._v(" "),t("h2",{attrs:{id:"supported-hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),t("p",[e._v("Tested companion computers and cameras are listed in "),t("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=i.exports}}]);