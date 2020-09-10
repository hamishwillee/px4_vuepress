(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1253:function(e,t,i){"use strict";i.r(t);var n=i(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"px4-飞行模式总览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-飞行模式总览"}},[e._v("#")]),e._v(" PX4 飞行模式总览")]),e._v(" "),n("p",[e._v("飞行模式定义了自驾仪如何响应遥控输入，以及它如何在全自主飞行期间管理飞行器运动。")]),e._v(" "),n("p",[e._v("这些模式为用户（飞行员）提供不同类型／级别的自动驾驶辅助，包括从起飞和着陆等常见任务的自动化，到更容易重新获得水平飞行及将飞行器保持在固定路径或位置的机制，等等。")]),e._v(" "),n("p",[e._v("这一主题概述了可用的飞行模式，以及多旋翼飞行器（MC）、固定翼（FW）和 VTOL 默认行为中的（大部分情况下很小）差异。")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip")]),e._v(" More detailed information about specific flight modes can be found in "),n("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[e._v("Flying > Flight Modes")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"飞行模式切换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式切换"}},[e._v("#")]),e._v(" 飞行模式切换")]),e._v(" "),n("p",[e._v("飞行员可以使用遥控上的开关或地面站来切换飞行模式（见 "),n("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[e._v("飞行模式配置")]),e._v("）。")],1),e._v(" "),n("p",[e._v("并非所有飞行器都可以使用所有飞行模式，并且某些模式在不同飞行器类型上表现不同。")]),e._v(" "),n("p",[e._v("一些飞行模式仅在飞行前和飞行中某些特定条件下起作用（如 GPS 锁定，空速传感器，某个轴的姿态感测）。 除非满足合适的条件，否则 PX4 不会允许切换到这些模式。")]),e._v(" "),n("p",[e._v("Last of all, in "),n("a",{attrs:{href:"#categories"}},[e._v("autonomous modes")]),e._v(" RC stick movement will "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[e._v("by default")]),e._v(" change the vehicle to "),n("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" when flying as a multicopter (unless handling a critical battery failsafe). Stick movement is ignored for fixed-wing flight.")],1),e._v(" "),n("h2",{attrs:{id:"自主和手动模式-categories"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自主和手动模式-categories"}},[e._v("#")]),e._v(" 自主和手动模式 {#categories}")]),e._v(" "),n("p",[e._v("Flight Modes are, generally speaking, either "),n("em",[e._v("manual")]),e._v(" or "),n("em",[e._v("autonomous")]),e._v(". Manual modes are those where the user has control over vehicle movement via the RC control sticks (or joystick), while "),n("em",[e._v("autonomous")]),e._v(" modes are fully controlled by the autopilot, and "),n("em",[e._v("require")]),e._v(" no pilot/remote control input.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip")]),e._v(" Some manual modes may have autopilot-assisted mechanisms to make it easier to gain or restore controlled flight. For example, most modes will level out the vehicle when the RC sticks are centered.")])]),e._v(" "),n("p",[e._v('Manual modes may further be divided into "easy" and "acrobatic" modes. In the easy modes, roll and pitch sticks set the vehicle angle, resulting in left-right and forward-back movement '),n("em",[e._v("in the horizontal plane")]),e._v(" (respectively). Not only does this make movement predictable, but because angles are controlled, the vehicle is impossible to flip. In acrobatic modes RC sticks control the rate of angular rotation (around the respective axis). Vehicles can flip, and while more maneuverable, are harder to fly.")]),e._v(" "),n("p",[e._v("Fixed Wing:")]),e._v(" "),n("ul",[n("li",[e._v("手动－简单： "),n("a",{attrs:{href:"#position_fw"}},[e._v("位置")]),e._v(", "),n("a",{attrs:{href:"#altitude_fw"}},[e._v("高度")]),e._v(", "),n("a",{attrs:{href:"#stabilized_fw"}},[e._v("自稳")]),e._v(", "),n("a",{attrs:{href:"#manual_fw"}},[e._v("手动")])]),e._v(" "),n("li",[e._v("手动－特技："),n("a",{attrs:{href:"#acro_fw"}},[e._v("特技")])]),e._v(" "),n("li",[e._v("Autonomous: "),n("a",{attrs:{href:"#hold_fw"}},[e._v("Hold")]),e._v(", "),n("a",{attrs:{href:"#return_fw"}},[e._v("Return")]),e._v(", "),n("a",{attrs:{href:"#mission_fw"}},[e._v("Mission")]),e._v(", "),n("a",{attrs:{href:"#takeoff_fw"}},[e._v("Takeoff")]),e._v(", "),n("a",{attrs:{href:"#land_fw"}},[e._v("Land")]),e._v(", "),n("a",{attrs:{href:"#offboard_fw"}},[e._v("Offboard")])])]),e._v(" "),n("p",[e._v("Multicopter:")]),e._v(" "),n("ul",[n("li",[e._v("Manual-Easy: "),n("a",{attrs:{href:"#position_mc"}},[e._v("Position")]),e._v(", "),n("a",{attrs:{href:"#altitude_mc"}},[e._v("Altitude")]),e._v(", "),n("a",{attrs:{href:"#manual_stabilized_mc"}},[e._v("Manual/Stabilized")]),e._v(", "),n("a",{attrs:{href:"#orbit_mc"}},[e._v("Orbit")])]),e._v(" "),n("li",[e._v("手动-特技： "),n("a",{attrs:{href:"#rattitude_mc"}},[e._v("半自动")]),e._v(", "),n("a",{attrs:{href:"#acro_mc"}},[e._v("特技")])]),e._v(" "),n("li",[e._v("自主："),n("a",{attrs:{href:"#hold_mc"}},[e._v("保持")]),e._v(", "),n("a",{attrs:{href:"#return_mc"}},[e._v("返航")]),e._v(", "),n("a",{attrs:{href:"#mission_mc"}},[e._v("任务")]),e._v(", "),n("a",{attrs:{href:"#takeoff_mc"}},[e._v("起飞")]),e._v(", "),n("a",{attrs:{href:"#land_mc"}},[e._v("降落")]),e._v(", "),n("a",{attrs:{href:"#followme_mc"}},[e._v("跟随我")]),e._v(", "),n("a",{attrs:{href:"#offboard_mc"}},[e._v("Offboard")])])]),e._v(" "),n("h2",{attrs:{id:"键"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#键"}},[e._v("#")]),e._v(" 键")]),e._v(" "),n("p",[e._v("The icons below are used within the document:"),n("span",{attrs:{id:"key_manual"}},[n("a",{attrs:{href:"#key_manual"}},[n("img",{attrs:{src:i(303),title:"需要手动或遥控控制",width:"30px"}})])])]),e._v(" "),n("td",[e._v("\n  手动模式 需要遥控\n")]),e._v(" "),n("tr",[n("td",[n("span",{attrs:{id:"key_automatic"}},[n("a",{attrs:{href:"#key_automatic"}},[n("img",{attrs:{src:i(306),title:"自动模式",width:"30px"}})])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<td>\n  自动模式. 除非切换模式，否则 RC 控制被默认失能。\n</td></tr> \n\n<tr>\n  <td>\n    <span id="key_position_fixed"><a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="需要定位修复（例如GPS）" width="30px" /></a></td> \n    \n    <td>\n      需要定位（如 GPS，VIO， 或其它定位系统）。\n    </td></tr> \n    \n    <tr>\n      <td>\n        <span id="altitude_only"></span><img src="../../assets/site/altitude_icon.svg" title="需要高度修复（例如气压计、测距仪）" width="30px" />\n      </td>\n      \n      <td>\n        需要高度（如来自气压计、测距仪）。\n      </td>\n    </tr>\n    \n    <tr>\n      <td>\n        <span id="key_difficulty"><a href="#key_difficulty"><img src="../../assets/site/difficulty_easy.png" title="易于使用" width="30px" />&nbsp;<img src="../../assets/site/difficulty_medium.png" title="中等飞行难度" width="30px" />&nbsp;<img src="../../assets/site/difficulty_hard.png" title="很难飞" width="30px" /></a></td> \n        \n        <td>\n          飞行模式难度（简单到困难）\n        </td></tr> </tbody> </table> \n        \n        <h2 id="mc_flight_modes">\n          多旋翼\n        </h2>\n        \n        <h3 id="position_mc">\n          位置控制模式\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_easy.png" title="Easy to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/position_mc.md">Position mode</a> is an easy-to-fly RC mode in which roll and pitch sticks control speed over ground in the left-right and forward-back directions (relative to the "front" of the vehicle), and throttle controls speed of ascent-descent. When the sticks are released/centered the vehicle will actively brake, level, and be locked to a position in 3D space — compensating for wind and other forces.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Tip</strong> Position mode is the safest manual mode for new fliers. Unlike <a href="#altitude_mc">Altitude</a> and <a href="#manual_stabilized_mc">Manual/Stabilized</a> modes the vehicle will stop when the sticks are centered rather than continuing until slowed by wind resistance.\n          </p>\n        </blockquote>\n        \n        <p>\n          <img src="../../assets/flight_modes/position_MC.png" alt="MC Position Mode" />\n        </p>\n        \n        <h3 id="altitude_mc">\n          高度模式\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_easy.png" title="Easy to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;<a href="#altitude_only"><img src="../../assets/site/altitude_icon.svg" title="Altitude required (e.g. Baro, Rangefinder)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/altitude_mc.md">Altitude mode</a> is a <em>relatively</em> easy-to-fly RC mode in which roll and pitch sticks control vehicle movement in the left-right and forward-back directions (relative to the "front" of the vehicle), yaw stick controls rate of rotation over the horizontal plane, and throttle controls speed of ascent-descent.\n        </p>\n        \n        <p>\n          When the sticks are released/centered the vehicle will level and maintain the current <em>altitude</em>. If moving in the horizontal plane the vehicle will continue until any momentum is dissipated by wind resistance. If the wind blows the aircraft will drift in the direction of the wind.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Tip</strong> <em>Attitude mode</em> is the safest non-GPS manual mode for new fliers. It is just like <a href="#manual_stabilized_mc">Manual/Stabilized</a> mode but additionally stabilizes the vehicle altitude when the sticks are released.\n          </p>\n        </blockquote>\n        \n        <p>\n          <img src="../../assets/flight_modes/altitude_MC.png" alt="MC Altitude Mode" />\n        </p>\n        \n        <h3 id="manual_stabilized_mc">\n          手动／自稳模式\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_medium.png" title="Medium difficulty to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;\n        </p>\n        \n        <p>\n          The <a href="../flight_modes/manual_stabilized_mc.md">Manual/Stabilized</a> mode stabilizes the multicopter when the RC control sticks are centered. To manually move/fly the vehicle you move the sticks outside of the center.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Note</strong> This multicopter mode is enabled if you set either <em>Manual</em> or <em>Stabilized</em> modes for an MC vehicle.\n          </p>\n        </blockquote>\n        \n        <p>\n          When under manual control the roll and pitch sticks control the angle of the vehicle (attitude), the yaw stick controls the rate of rotation above the horizontal plane, and the throttle controls altitude/speed.\n        </p>\n        \n        <p>\n          As soon as you release the control sticks they will return to the center deadzone. The multicopter will level out and stop once the roll and pitch sticks are centered. The vehicle will then hover in place/maintain altitude - provided it is properly balanced, throttle is set appropriately, and no external forces are applied (e.g. wind). The craft will drift in the direction of any wind and you have to control the throttle to hold altitude.\n        </p>\n        \n        <p>\n          <img src="../../assets/flight_modes/manual_stabilized_MC.png" alt="MC Manual Flight" />\n        </p>\n        \n        <h3 id="rattitude_mc">\n          半自稳\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_hard.png" title="Hard to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;\n        </p>\n        \n        <p>\n          <a href="../flight_modes/rattitude_mc.md">Rattitude mode</a> allows pilots to fly using <a href="#manual_stabilized_mc">Manual/Stabilized</a> flight most of the time, but still perform <a href="#acro_mc">Acro mode</a>-style flips and tricks when desired.\n        </p>\n        \n        <p>\n          The vehicle behaves as in <em>Manual/Stabilized mode</em> when the Roll/Pitch stick is moved within the central area and like <em>Acro mode</em> when the stick is moved in the outer circumference (by default Manual/Stabilized mode occupies about 80% of the range). When the sticks are centered the multicopter will level out (but will still drift in the direction of any wind and with any pre-existing momentum).\n        </p>\n        \n        \x3c!-- Image missing: https://github.com/PX4/px4_user_guide/issues/189 --\x3e\n        \n        <h3 id="acro_mc">\n          特技模式\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_hard.png" title="Hard to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;\n        </p>\n        \n        <p>\n          <a href="../flight_modes/acro_mc.md">Acro mode</a> is the RC mode for performing acrobatic maneuvers e.g. rolls and loops.\n        </p>\n        \n        <p>\n          The roll, pitch and yaw sticks control the rate of angular rotation around the respective axes and throttle is passed directly to the output mixer. When sticks are centered the vehicle will stop rotating, but remain in its current orientation (on its side, inverted, or whatever) and moving according to its current momentum.\n        </p>\n        \n        <p>\n          <img src="../../assets/flight_modes/manual_acrobatic_MC.png" alt="MC Manual Acrobatic Flight" />\n        </p>\n        \n        \x3c!-- image above incorrect: https://github.com/PX4/px4_user_guide/issues/182 --\x3e\n        \n        <h3 id="orbit_mc">\n          Orbit Mode\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_easy.png" title="Easy to fly" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          The <a href="../flight_modes/orbit.md">Orbit mode</a> allows you to command a multicopter (or VTOL in multicopter mode) to fly in a circle, yawing so that it always faces towards the center.\n        </p>\n        \n        <p>\n          A GCS is <em>required</em> to enable the mode, and to set the center position and initial radius of the orbit. By default the vehicle will then perform a slow ongoing orbit around the center position (1m/s) in a clockwise direction. RC control is optional, and can be used to change the orbit altitude, radius, speed, and direction.\n        </p>\n        \n        <p>\n          <img src="../../assets/flight_modes/orbit_MC.png" alt="Orbit Mode - MC" />\n        </p>\n        \n        <h3 id="hold_mc">\n          Hold Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/hold.md">Hold mode</a> causes the multicopter to stop and hover at its current position and altitude (maintaining position against wind and other forces). The mode can be used to pause a mission or to help regain control of a vehicle in an emergency. It can be activated with a pre-programmed RC switch or the <em>QGroundControl</em> <strong>Pause</strong> button.\n        </p>\n        \n        <h3 id="return_mc">\n          Return Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/return.md">Return mode</a> causes the vehicle to fly a clear path to a safe location. The mode may be activated manually (via a pre-programmed RC switch) or automatically (i.e. in the event of a <a href="../config/safety.md">failsafe</a> being triggered).\n        </p>\n        \n        <p>\n          The return behaviour depends on parameter settings, and may follow a mission path and/or mission landing pattern (if defined). By default a mulitcopter will simply ascend to a safe height, fly to its home position, and then land.\n        </p>\n        \n        <h3 id="mission_mc">\n          Mission Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/mission.md">Mission mode</a> causes the vehicle to execute a predefined autonomous <a href="../flying/missions.md">mission</a> (flight plan) that has been uploaded to the flight controller. The mission is typically created and uploaded with a Ground Control Station (GCS) application.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Tip</strong> The PX4 GCS is called <a href="https://docs.qgroundcontrol.com/en/">QGroundControl</a>. <em>QGroundControl</em> is the same application we use for <a href="../config/README.md">configuring PX4</a>.\n          </p>\n        </blockquote>\n        \n        <h3 id="takeoff_mc">\n          Takeoff Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/takeoff.md">Takeoff</a> mode causes the multicopter to climb vertically to takeoff altitude and hover in position.\n        </p>\n        \n        <h3 id="land_mc">\n          Land Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/land.md">Land mode</a> causes the multicopter to land at the location at which the mode was engaged.\n        </p>\n        \n        <h3 id="followme_mc">\n          Follow Me Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/follow_me.md">Follow Me mode</a> causes a multicopter to autonomously follow and track a user providing their current position setpoint. Position setpoints might come from an Android phone/tablet running <em>QGroundControl</em> or from a MAVSDK app.\n        </p>\n        \n        <h3 id="offboard_mc">\n          Offboard Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/offboard.md">Offboard mode</a> causes the multicopter to obey a position, velocity or attitude setpoint provided over MAVLink.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Note</strong> This mode is intended for companion computers and ground stations!\n          </p>\n        </blockquote>\n        \n        <h2 id="fw_flight_modes">\n          固定翼\n        </h2>\n        \n        <h3 id="position_fw">\n          Position Mode\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_easy.png" title="Easy to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/position_fw.md">Position mode</a> is an easy-to-fly RC mode in which, when the sticks are released/centered, the vehicle will level and fly a straight line ground track in the current direction — compensating for wind and other forces.\n        </p>\n        \n        <p>\n          The throttle determines airspeed (at 50% throttle the aircraft will hold its current altitude with a preset cruise speed). Pitch is used to ascend/descend. Roll, pitch and yaw are all angle-controlled (so it is impossible to roll over or loop the vehicle).\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Tip</strong> Position mode is the safest fixed-wing manual mode for new fliers.\n          </p>\n        </blockquote>\n        \n        <p>\n          <img src="../../assets/flight_modes/position_FW.png" alt="FW Position Mode" />\n        </p>\n        \n        <h3 id="altitude_fw">\n          Altitude Mode\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_easy.png" title="Easy to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;<a href="#altitude_only"><img src="../../assets/site/altitude_icon.svg" title="Altitude required (e.g. Barometer, Rangefinder)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/altitude_fw.md">Altitude mode</a> makes it easier for users to control vehicle altitude, and in particular to reach and maintain a fixed altitude. The mode will not attempt to hold the vehicle course against wind.\n        </p>\n        \n        <p>\n          The climb/descent rate is controlled via the pitch/elevator stick. Once centered the autopilot latches onto the current altitude and will maintain it during yaw/roll, and at any airspeed. The throttle input controls airspeed. Roll and pitch are angle-controlled (so it is impossible to roll over or loop the vehicle).\n        </p>\n        \n        <p>\n          When all remote control inputs are centered (no roll, pitch, yaw, and ~50% throttle) the aircraft will return to straight, level flight (subject to wind) and keep its current altitude.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Tip</strong> <em>Altitude mode</em> is the safest non GPS guided mode appropriate for beginners learning how to fly. It is just like <a href="#manual_fw">Manual</a> mode but additionally stabilizes the vehicle altitude when the pitch stick is released.\n          </p>\n        </blockquote>\n        \n        <p>\n          <img src="../../assets/flight_modes/altitude_FW.png" alt="FW Altitude Mode" />\n        </p>\n        \n        <h3 id="stabilized_fw">\n          Stabilized Mode\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_medium.png" title="Medium difficulty to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;\n        </p>\n        \n        <p>\n          <a href="../flight_modes/stabilized_fw.md">Stabilized mode</a> mode puts the vehicle into straight and level flight when the RC sticks are centered, maintaining the horizontal posture against wind (but not vehicle heading and altitude).\n        </p>\n        \n        <p>\n          The vehicle climb/descends based on pitch input and performs a coordinated turn if the roll/pitch sticks are non-zero. Roll and pitch are angle controlled (you can\'t roll upside down or loop).\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Tip</strong> <em>Stabilized mode</em> is much easier to fly than <a href="#manual_fw">Manual mode</a> because you can\'t roll or flip it, and it is easy to level the vehicle by centering the control sticks.\n          </p>\n        </blockquote>\n        \n        <p>\n          The vehicle will glide if the throttle is lowered to 0% (motor stops). In order to perform a turn the command must beheld throughout the maneuver because if the roll is released the plane will stop turning and level itself (the same is true for pitch and yaw commands).\n        </p>\n        \n        <p>\n          <img src="../../assets/flight_modes/manual_stabilized_FW.png" alt="FW Manual Flight" />\n        </p>\n        \n        <h3 id="acro_fw">\n          Acro Mode\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_hard.png" title="Hard to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;\n        </p>\n        \n        <p>\n          <a href="../flight_modes/acro_fw.md">Acro mode</a> is the RC mode for performing acrobatic maneuvers e.g. rolls, flips, stalls and acrobatic figures.\n        </p>\n        \n        <p>\n          The roll, pitch and yaw sticks control the rate of angular rotation around the respective axes and throttle is passed directly to the output mixer. When sticks are centered the vehicle will stop rotating, but remain in its current orientation (on its side, inverted, or whatever) and moving according to its current momentum.\n        </p>\n        \n        <p>\n          <img src="../../assets/flight_modes/manual_acrobatic_FW.png" alt="FW Manual Acrobatic Flight" />\n        </p>\n        \n        <h3 id="manual_fw">\n          Manual Mode\n        </h3>\n        \n        <p>\n          <a href="#key_difficulty"><img src="../../assets/site/difficulty_hard.png" title="Hard to fly" width="30px" /></a>&nbsp;<a href="#key_manual"><img src="../../assets/site/remote_control.svg" title="Manual/Remote control required" width="30px" /></a>&nbsp;\n        </p>\n        \n        <p>\n          <a href="../flight_modes/manual_fw.md">Manual mode</a> sends RC stick input directly to the output mixer for "fully" manual control.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Tip</strong> This is the hardest mode to fly, because nothing is stabilised. Unlike <a href="#acro_fw">Acro Mode</a> if the RP stick is centered the vehicle will not automatically stop rotating around the axis - the pilot actually has to move the stick to apply force in the other direction.\n          </p>\n        </blockquote>\n        \n        <p>\n')])])]),n("p",[n("span")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Note</strong> This is the only mode that overrides the FMU (commands are sent via the safety coprocessor). It provides a safety mechanism that allows full control of throttle, elevator, ailerons and rudder via RC in the event of an FMU firmware malfunction.\n          </p>\n        </blockquote>\n        \n        <h3 id="hold_fw">\n          Hold Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/hold.md">Hold</a> causes a fixed-wing vehicle to start circling around the current position at its current altitude. The mode can be used to pause a mission or to help regain control of a vehicle in an emergency. It can be activated with a pre-programmed RC switch or the <em>QGroundControl</em> <strong>Pause</strong> button.\n        </p>\n        \n        <h3 id="return_fw">\n          Return Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/return.md">Return mode</a> causes the vehicle to fly a clear path to a safe location. The mode may be activated manually (via a pre-programmed RC switch) or automatically (i.e. in the event of a <a href="../config/safety.md">failsafe</a> being triggered).\n        </p>\n        \n        <p>\n          The return behaviour depends on parameter settings, and may follow a mission path and/or mission landing pattern (if defined). By default a fixed wing vehicle will ascend to a safe height and use a mission landing pattern if one exists, otherwise it will fly to the home position and circle.\n        </p>\n        \n        <h3 id="mission_fw">\n          Mission Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/mission.md">Mission mode</a> causes the vehicle to execute a predefined autonomous <a href="../flying/missions.md">mission</a> (flight plan) that has been uploaded to the flight controller. The mission is typically created and uploaded with a Ground Control Station (GCS) application.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Tip</strong> The PX4 GCS is called <a href="https://docs.qgroundcontrol.com/en/">QGroundControl</a>. <em>QGroundControl</em> is the same application we use for <a href="../config/README.md">configuring PX4</a>.\n          </p>\n        </blockquote>\n        \n        <h3 id="takeoff_fw">\n          Takeoff Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;\n        </p>\n        \n        <p>\n          <a href="../flight_modes/takeoff.md#fixed_wing">Takeoff</a> mode initiates the vehicle takeoff sequence. The specific launch behaviour depends on the configured takeoff mode (catapult/hand-launch mode or runway takeoff mode).\n        </p>\n        \n        <h3 id="land_fw">\n          Land Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;\n        </p>\n        \n        <p>\n          <a href="../flight_modes/land.md">Land mode</a> causes the vehicle to turn and land at the location at which the mode was engaged. Fixed wing landing logic and parameters are explained in the topic: <a href="../flying/fixed_wing_landing.md">Landing (Fixed Wing)</a>.\n        </p>\n        \n        <h3 id="offboard_fw">\n          Offboard Mode\n        </h3>\n        \n        <p>\n          <a href="#key_automatic"><img src="../../assets/site/automatic_mode.svg" title="Automatic mode" width="30px" /></a>&nbsp;<a href="#key_position_fixed"><img src="../../assets/site/position_fixed.svg" title="Position fix required (e.g. GPS)" width="30px" /></a>\n        </p>\n        \n        <p>\n          <a href="../flight_modes/offboard.md">Offboard mode</a> causes the fixed wing vehicle to obey attitude setpoints provided over MAVLink.\n        </p>\n        \n        <blockquote>\n          <p>\n            <strong>Note</strong> This mode is intended for companion computers and ground stations!\n          </p>\n        </blockquote>\n        \n        <h2>\n          垂直起降（VTOL）\n        </h2>\n        \n        <p>\n          A VTOL aircraft can fly as either a multicopter or as fixed-wing vehicle. The multicopter mode is mainly used for take off and landing while the fixed wing mode is used for efficient travel and/or mission execution.\n        </p>\n        \n        <p>\n          Generally the flight modes for VTOL vehicles are the same as for <a href="#mc_flight_modes">multicopter</a> when flying in MC mode and <a href="#fw_flight_modes">fixed-wing</a> when flying in FW mode.\n        </p>\n        \n        <p>\n          The switch between modes is initiated either by the pilot using an RC switch or automatically by PX4 when needed in the Auto modes.\n        </p>\n        \n        <p>\n          A few notes:\n        </p>\n        \n        <ul>\n          <li>\n            VTOL <a href="../flight_modes/return.md">Return mode</a> uses a mission landing by default, if defined.\n          </li>\n        </ul>\n        \n        <h2>\n          更多信息\n        </h2>\n        \n        <ul>\n          <li>\n            <a href="../flight_modes/README.md">Flying > Flight Modes</a> - Detailed technical explanation of all modes\n          </li>\n          <li>\n            <a href="../config/flight_mode.md">Basic Configuration > Flight Modes</a> - How to map RC control switches to specific flight modes\n          </li>\n        </ul>')])])])])])}),[],!1,null,null,null);t.default=a.exports},303:function(e,t,i){e.exports=i.p+"assets/img/remote_control.e49232a6.svg"},306:function(e,t,i){e.exports=i.p+"assets/img/automatic_mode.ee3ebc1d.svg"}}]);