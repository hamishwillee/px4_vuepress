(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{1729:function(t,e,a){"use strict";a.r(e);var _=a(42),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"起飞模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#起飞模式"}},[t._v("#")]),t._v(" 起飞模式")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[_("img",{attrs:{src:a(302),title:"需要定位修复（例如GPS）",width:"30px"}})])],1),t._v(" "),_("p",[_("em",[t._v("起飞")]),t._v("飞行模式使飞机起飞到指定高度并等待进一步指令。")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" * This mode requires GPS. * The vehicle must be armed before this mode can be engaged. * This mode is automatic - no user intervention is "),_("em",[t._v("required")]),t._v(" to control the vehicle. * RC control switches can be used to change flight modes on any vehicle. The effect of RC stick movement depends on the vehicle type. * The "),_("RouterLink",{attrs:{to:"/zh/config/safety.html#failure_detector"}},[t._v("Failure Detector")]),t._v(" will automatically stop the engines if there is a problem on takeoff.")],1)]),t._v(" "),_("p",[t._v("下面描述每种类型飞机的具体行为。")]),t._v(" "),_("h2",{attrs:{id:"多旋翼-mc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[t._v("#")]),t._v(" 多旋翼（MC）")]),t._v(" "),_("p",[t._v("多旋翼上升到"),_("code",[t._v("MIS_TAKEOFF_ALT")]),t._v("中定义的高度并保持位置。")]),t._v(" "),_("p",[t._v("RC stick movement will "),_("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),_("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1),t._v(" "),_("p",[t._v("Takeoff is affected by the following parameters:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"MIS_TAKEOFF_ALT"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),_("td",[t._v("起飞期间的目标高度 (默认值: 2.5 米)")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"MPC_TKO_SPEED"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[t._v("MPC_TKO_SPEED")])],1),t._v(" "),_("td",[t._v("上升速度 (默认值: 1.5 m/s)")])]),t._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"COM_RC_OVERRIDE"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),_("td",[t._v("If enabled stick movement gives control back to the pilot in "),_("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (except when vehicle is handling a critical battery failsafe). Enabled by default.")],1)])])]),t._v(" "),_("h2",{attrs:{id:"固定翼-fw-fixed-wing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#固定翼-fw-fixed-wing"}},[t._v("#")]),t._v(" 固定翼（FW） {#fixed_wing}")]),t._v(" "),_("p",[t._v("The aircraft takes off in the current direction using either "),_("em",[t._v("catapult/hand-launch mode")]),t._v(" or "),_("em",[t._v("runway takeoff mode")]),t._v(". The mode defaults to catapult/hand launch, but can be set to runway takeoff using "),_("a",{attrs:{href:"#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")]),t._v(". RC stick movement is ignored in both cases.")]),t._v(" "),_("h3",{attrs:{id:"catapult-hand-launch-hand-launch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#catapult-hand-launch-hand-launch"}},[t._v("#")]),t._v(" Catapult/Hand Launch {#hand_launch}")]),t._v(" "),_("p",[t._v("In "),_("em",[t._v("catapult/hand launch mode")]),t._v(" the vehicle waits to detect launch (based on acceleration trigger). On launch it ramps up to full throttle ("),_("a",{attrs:{href:"#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(") in about 2 seconds and then performs a full throttle climbout, with "),_("em",[t._v("minimum")]),t._v(" 10 degree takeoff pitch. Once it reaches "),_("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v(" it will transition to "),_("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[t._v("Hold mode")]),t._v(" and loiter.")],1),t._v(" "),_("blockquote",[_("p",[t._v("除了上面讨论的行为之外，还有一个启动检测器可以阻止启动程序开始直到满足某些条件。 对于弹射器发射，这是一些加速度阈值。")])]),t._v(" "),_("h3",{attrs:{id:"runway-takeoff-runway-launch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#runway-takeoff-runway-launch"}},[t._v("#")]),t._v(" Runway Takeoff {#runway_launch}")]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("runway takeoff mode")]),t._v(" has the following phases:")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("Throttle ramp")]),t._v(": Clamped to the runway (pitch fixed, no roll, and heading hold) until reach the minimum airspeed for takeoff ("),_("a",{attrs:{href:"#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")]),t._v(" x "),_("a",{attrs:{href:"#RWTO_AIRSPD_SCL"}},[t._v("RWTO_AIRSPD_SCL")]),t._v(").")]),t._v(" "),_("li",[_("strong",[t._v("起飞")]),t._v("：增加俯仰直到飞机高度>导航高度（"),_("a",{attrs:{href:"#RWTO_NAV_ALT"}},[t._v(" RWTO_NAV_ALT ")]),t._v("）。")]),t._v(" "),_("li",[t._v("** 爬出**：爬升至地面以上的高度> "),_("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[t._v(" FW_CLMBOUT_DIFF ")]),t._v("。 在此阶段中, 将移除滚转和航向限制。")])]),t._v(" "),_("h3",{attrs:{id:"fixed-wing-takeoff-parameters"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-takeoff-parameters"}},[t._v("#")]),t._v(" Fixed Wing Takeoff Parameters")]),t._v(" "),_("p",[t._v("Takeoff is affected by the following parameters:高于地平面（AGL）的高度，留有足够的离地间隙以允许一些滚转。 在达到"),_("code",[t._v("RWTO_NAV_ALT")]),t._v("之前，飞机保持水平，并且仅使用方向舵来保持航向（参见"),_("span",{attrs:{id:"RWTO_HDG"}},[t._v(" </ 1> "),_("a",{attrs:{href:"../advanced_config/parameter_reference.md#RWTO_HDG"}},[t._v(" RWTO_HDG ")]),t._v("）。 如果"),_("code",[t._v(" FW_CLMBOUT_DIFF ")]),t._v("> 0，则应低于"),_("code",[t._v(" FW_CLMBOUT_DIFF ")]),t._v("。")])]),t._v(" "),_("blockquote",[_("p",[t._v("\n    在起飞期间飞机总是遵守标准的固定翼最大/最小油门设置（"),_("a",{attrs:{href:"../advanced_config/parameter_reference.md#FW_THR_MIN"}},[t._v(" FW_THR_MIN ")]),t._v("，"),_("a",{attrs:{href:"../advanced_config/parameter_reference.md#FW_THR_MAX"}},[t._v(" FW_THR_MAX ")]),t._v("）。\n  ")])]),t._v(" "),_("h2",[t._v("\n  垂直起降（VTOL）\n")]),t._v(" "),_("p",[t._v("\n  VTOLs default to MC mode on boot, and it is generally expected that they will take off in "),_("a",{attrs:{href:"#multi-copter-mc"}},[t._v("multicopter mode")]),t._v(" (and also safer).\n")]),t._v(" "),_("p",[t._v("\n  That said, if transitioned to Fixed wing before takeoff, they will takeoff in "),_("a",{attrs:{href:"#fixed_wing"}},[t._v("Fixed Wing")]),t._v(" mode.\n")])])}),[],!1,null,null,null);e.default=r.exports},302:function(t,e,a){t.exports=a.p+"assets/img/position_fixed.c1403cf0.svg"}}]);