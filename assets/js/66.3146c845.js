(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1068:function(e,t,r){e.exports=r.p+"assets/img/PID_algorithm_Mixed.23989b63.png"},1069:function(e,t,r){e.exports=r.p+"assets/img/PID_algorithm_Parallel.58e2bc93.png"},1070:function(e,t,r){e.exports=r.p+"assets/img/PID_algorithm_Standard.66c2b8e0.png"},1071:function(e,t,r){e.exports=r.p+"assets/img/roll_rate_tracking.51318206.png"},1072:function(e,t,r){e.exports=r.p+"assets/img/yaw_rate_tracking.53d8af15.png"},1073:function(e,t,r){e.exports=r.p+"assets/img/roll_rate_tracking_flip.0c74efe5.png"},1074:function(e,t,r){e.exports=r.p+"assets/img/thrust-curve-compensation.50b7ab15.svg"},1075:function(e,t,r){e.exports=r.p+"assets/img/MC_PID_tuning-Airmode.463322ff.svg"},1262:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"多轴飞行器-pid-调参指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多轴飞行器-pid-调参指南"}},[e._v("#")]),e._v(" 多轴飞行器 PID 调参指南")]),e._v(" "),a("p",[e._v("本教程介绍如何在 PX4 上调整 "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter"}},[e._v(" 多轴飞行器 ")]),e._v(" (四、六、八旋翼等) 的 PID 参数 。")],1),e._v(" "),a("p",[e._v("通常, 如果您使用的是 "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter"}},[e._v(" 已经支持的机型 ")]),e._v(" （例如, "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[e._v(" QGroundControl ")]),e._v(" 中的机身），则默认参数应足以安全地飞行。 为了获得最好的性能, 最好能整定新飞机的 PID 参数。 例如, 不同的电调或电机需要不同的控制增益, 才能获得最佳飞行效果。")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Warning")]),e._v(" 本指南仅适用于高级用户。 不合适的参数可能会导致飞行器不稳定，甚至炸机。 确保预先指定保护开关 ( Kill-switch ) 。")])]),e._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),a("p",[e._v("PX4 uses "),a("strong",[e._v("P")]),e._v("roportional, "),a("strong",[e._v("I")]),e._v("ntegral, "),a("strong",[e._v("D")]),e._v("erivative (PID) controllers (these are the most widespread control technique).")]),e._v(" "),a("p",[e._v("The controllers are layered, which means a higher-level controller passes its results to a lower-level controller. The lowest-level controller is the the "),a("strong",[e._v("rate controller")]),e._v(", then there is the "),a("strong",[e._v("attitude contoller")]),e._v(", and then the "),a("strong",[e._v("velocity & position controller")]),e._v(". The PID tuning needs to be done in the same order, starting with the rate controller, as it will affect all other controllers.")]),e._v(" "),a("h2",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[e._v("#")]),e._v(" 前置条件")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("您已为您的飞行器选择了最接近的 "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[e._v(" 默认机型配置 ")]),e._v("。 这应该可以让你的飞行器飞起来。")],1)]),e._v(" "),a("li",[a("p",[e._v("您应该已经执行过 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[e._v(" 电调（ESC）校准 ")]),e._v("。")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MIN"}},[e._v(" PWM_MIN ")]),e._v(" 正确设置。 它需要设置一个小值, 但当飞行器解锁时, 需要保证 ** 电机不停转 **。")],1),e._v(" "),a("p",[e._v("可以在 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/acro_mc.html"}},[e._v("特技 Acro 模式")]),e._v(" 或 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[e._v(" 手动/自稳模式 ")]),e._v(" 中进行测试：")],1),e._v(" "),a("ul",[a("li",[e._v("卸下螺旋桨")]),e._v(" "),a("li",[e._v("解锁，并将油门杆拉到最低")]),e._v(" "),a("li",[e._v("把飞行器倾斜到各个方向, 大约60度")]),e._v(" "),a("li",[e._v("确保没有电机停转")])])]),e._v(" "),a("li",[a("p",[e._v("可以通过 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v(" SDLOG_PROFILE ")]),e._v(" 参数，启用高速率日志记录配置文件, 以便使用日志来查看角速率和姿态跟踪性能 (之后可以禁用该选项) 。")],1)])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("警告")]),e._v(" 在调参过程中，禁用 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_AIRMODE"}},[e._v("MC_AIRMODE")]),e._v("。")],1)]),e._v(" "),a("h2",{attrs:{id:"调参步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调参步骤"}},[e._v("#")]),e._v(" 调参步骤")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" For safety reasons, the default gains are set to low values. You must increase the gains before you can expect good control responses.")])]),e._v(" "),a("p",[e._v("以下是做调参时要遵循的一些一般要点：")]),e._v(" "),a("ul",[a("li",[e._v("调整增益时，所有的增益值都应该慢慢增加, 因为增益过大可能会导致危险的振荡! 一般情况下，每次增益值的调整幅度大约在20%到30%，获得最优增益值后，基于最优值再下调5%到10%。")]),e._v(" "),a("li",[e._v("在修改参数之前务必先着陆。 慢慢增加油门，观察振荡的现象。")]),e._v(" "),a("li",[e._v("Tune the vehicle around the hovering thrust point, and use the "),a("a",{attrs:{href:"#thrust_curve"}},[e._v("thrust curve parameter")]),e._v(" to account for thrust non-linearities or high-thrust oscillations.")])]),e._v(" "),a("h3",{attrs:{id:"速率控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#速率控制器"}},[e._v("#")]),e._v(" 速率控制器")]),e._v(" "),a("p",[e._v("The rate controller is the inner-most loop with three independent PID controllers to control the body rates (yaw, pitch, roll).")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("注意")]),e._v(" 把角速度控制器调好是非常重要的，因为它会影响到 "),a("em",[e._v("所有的")]),e._v("飞行模式。 角速度控制器跳得好不好可以在"),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("位置模式")]),e._v("中显现出来，举个例子，你的飞机可能会「抽搐」（飞行器无法很好地悬停在空中）")],1)]),e._v(" "),a("h4",{attrs:{id:"rate-controller-architecture-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate-controller-architecture-form"}},[e._v("#")]),e._v(" Rate Controller Architecture/Form")]),e._v(" "),a("p",[e._v('PX4 supports two (mathematically equivalent) forms of the PID rate controller in a single "mixed" implementation: '),a("a",{attrs:{href:"#parallel_form"}},[e._v("Parallel")]),e._v(" and "),a("a",{attrs:{href:"#standard_form"}},[e._v("Standard")]),e._v(".")]),e._v(" "),a("p",[e._v('Users can select the form that is used by setting the proportional gain for the other form to "1" (i.e. in the diagram below set '),a("strong",[e._v("K")]),e._v(" to 1 for the parallel form, or "),a("strong",[e._v("P")]),e._v(" to 1 for the standard form - this will replace either the K or P blocks with a line).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1068),alt:"PID_Mixed"}})]),e._v(" "),a("ul",[a("li",[a("em",[e._v("G(s)")]),e._v(" represents the angular rates dynamics of a vehicle")]),e._v(" "),a("li",[a("em",[e._v("r")]),e._v(" is the rate setpoint")]),e._v(" "),a("li",[a("em",[e._v("y")]),e._v(" is the body angular rate (measured by a gyro)")]),e._v(" "),a("li",[a("em",[e._v("e")]),e._v(" is the error between the rate setpoint and the measured rate")]),e._v(" "),a("li",[a("em",[e._v("u")]),e._v(" is the output of the PID controller")])]),e._v(" "),a("p",[e._v("The two forms are described below.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The derivative term ("),a("strong",[e._v("D")]),e._v(") is on the feedback path in order to avoid an effect known as the "),a("a",{attrs:{href:"http://brettbeauregard.com/blog/2011/04/improving-the-beginner%E2%80%99s-pid-derivative-kick/",target:"_blank",rel:"noopener noreferrer"}},[e._v("derivative kick"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[a("span")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" For more information see:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("- [Not all PID controllers are the same](https://www.controleng.com/articles/not-all-pid-controllers-are-the-same/) (www.controleng.com) \n- [PID controller > Standard versus parallel (ideal) PID form](https://en.wikipedia.org/wiki/PID_controller#Standard_versus_parallel_(ideal)_PID_form) (Wikipedia)\n")])])]),a("h5",{attrs:{id:"parallel-form-parallel-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallel-form-parallel-form"}},[e._v("#")]),e._v(" Parallel Form {#parallel_form}")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("parallel form")]),e._v(" is the simplest form, and is (hence) commonly used in textbooks. In this case the output of the controller is simply the sum of the proportional, integral and derivative actions.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1069),alt:"PID_Parallel"}})]),e._v(" "),a("h5",{attrs:{id:"standard-form-standard-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-form-standard-form"}},[e._v("#")]),e._v(" Standard Form {#standard_form}")]),e._v(" "),a("p",[e._v("This form is mathematically equivalent to the parallel form, but the main advantage is that (even if it seems counter intuitive) it decouples the proportional gain tuning from the integral and derivative gains. This means that a new platform can easily be tuned by taking the gains of a drone with similar size/inertia and simply adjust the K gain to have it flying properly.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1070),alt:"PID_Standard"}})]),e._v(" "),a("h4",{attrs:{id:"rate-pid-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate-pid-tuning"}},[e._v("#")]),e._v(" Rate PID Tuning")]),e._v(" "),a("p",[e._v("The related parameters for the tuning of the PID rate controllers are:")]),e._v(" "),a("ul",[a("li",[e._v("Roll rate control ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ROLLRATE_P"}},[e._v("MC_ROLLRATE_P")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ROLLRATE_I"}},[e._v("MC_ROLLRATE_I")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ROLLRATE_D"}},[e._v("MC_ROLLRATE_D")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ROLLRATE_K"}},[e._v("MC_ROLLRATE_K")]),e._v(")")],1),e._v(" "),a("li",[e._v("Pitch rate control ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_PITCHRATE_P"}},[e._v("MC_PITCHRATE_P")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_PITCHRATE_I"}},[e._v("MC_PITCHRATE_I")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_PITCHRATE_D"}},[e._v("MC_PITCHRATE_D")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_PITCHRATE_K"}},[e._v("MC_PITCHRATE_K")]),e._v(")")],1),e._v(" "),a("li",[e._v("Yaw rate control ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_YAWRATE_P"}},[e._v("MC_YAWRATE_P")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_YAWRATE_I"}},[e._v("MC_YAWRATE_I")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_YAWRATE_D"}},[e._v("MC_YAWRATE_D")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_YAWRATE_K"}},[e._v("MC_YAWRATE_K")]),e._v(")")],1)]),e._v(" "),a("p",[e._v("The rate controller can be tuned in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/acro_mc.html"}},[e._v("Acro mode")]),e._v(" or "),a("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[e._v("Manual/Stabilized mode")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[a("em",[e._v("Acro mode")]),e._v(" is preferred, but is harder to fly. If you choose this mode, disable all stick expo:\n"),a("ul",[a("li",[a("code",[e._v("MC_ACRO_EXPO")]),e._v(" = 0, "),a("code",[e._v("MC_ACRO_EXPO_Y")]),e._v(" = 0, "),a("code",[e._v("MC_ACRO_SUPEXPO")]),e._v(" = 0, "),a("code",[e._v("MC_ACRO_SUPEXPOY")]),e._v(" = 0")]),e._v(" "),a("li",[a("code",[e._v("MC_ACRO_P_MAX")]),e._v(" = 200, "),a("code",[e._v("MC_ACRO_R_MAX")]),e._v(" = 200")]),e._v(" "),a("li",[a("code",[e._v("MC_ACRO_Y_MAX")]),e._v(" = 100")])])]),e._v(" "),a("li",[a("em",[e._v("Manual/Stabilized mode")]),e._v(" is simpler to fly, but it is also more difficult to see if the attitude or the rate controller needs more tuning.")])]),e._v(" "),a("p",[e._v("If the vehicle does not fly at all:")]),e._v(" "),a("ul",[a("li",[e._v("If there are strong oscillations when first trying to takeoff (to the point where it does not fly), decrease all "),a("strong",[e._v("P")]),e._v(" and "),a("strong",[e._v("D")]),e._v(" gains until it takes off.")]),e._v(" "),a("li",[e._v("If the reaction to RC movement is minimal, increase the "),a("strong",[e._v("P")]),e._v(" gains.")])]),e._v(" "),a("p",[e._v("The actual tuning is roughly the same in "),a("em",[e._v("Manual mode")]),e._v(" or "),a("em",[e._v("Acro mode")]),e._v(": You iteratively tune the "),a("strong",[e._v("P")]),e._v(" and "),a("strong",[e._v("D")]),e._v(" gains for roll and pitch, and then the "),a("strong",[e._v("I")]),e._v(" gain. Initially you can use the same values for roll and pitch, and once you have good values, you can fine-tune them by looking at roll and pitch response separately (if your vehicle is symmetric, this is not needed). For yaw it is very similar, except that "),a("strong",[e._v("D")]),e._v(" can be left at 0.")]),e._v(" "),a("h5",{attrs:{id:"proportional-gain-p-k"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proportional-gain-p-k"}},[e._v("#")]),e._v(" Proportional Gain (P/K)")]),e._v(" "),a("p",[e._v("The proportional gain is used to minimize the tracking error (below we use "),a("strong",[e._v("P")]),e._v(" to refer to both "),a("strong",[e._v("P")]),e._v(" or "),a("strong",[e._v("K")]),e._v("). It is responsible for a quick response and thus should be set as high as possible, but without introducing oscillations.")]),e._v(" "),a("ul",[a("li",[e._v("If the "),a("strong",[e._v("P")]),e._v(" gain is too high: you will see high-frequency oscillations.")]),e._v(" "),a("li",[e._v("If the "),a("strong",[e._v("P")]),e._v(" gain is too low:\n"),a("ul",[a("li",[e._v("the vehicle will react slowly to input changes.")]),e._v(" "),a("li",[e._v("In "),a("em",[e._v("Acro mode")]),e._v(" the vehicle will drift, and you will constantly need to correct to keep it level.")])])])]),e._v(" "),a("h5",{attrs:{id:"derivative-gain-d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derivative-gain-d"}},[e._v("#")]),e._v(" Derivative Gain (D)")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("D")]),e._v(" (derivative) gain is used for rate damping. It is required but should be set only as high as needed to avoid overshoots.")]),e._v(" "),a("ul",[a("li",[e._v("If the "),a("strong",[e._v("D")]),e._v(" gain is too high: the motors become twitchy (and maybe hot), because the "),a("strong",[e._v("D")]),e._v(" term amplifies noise.")]),e._v(" "),a("li",[e._v("If the "),a("strong",[e._v("D")]),e._v(" gain is too low: you see overshoots after a step-input.")])]),e._v(" "),a("p",[e._v("Typical values are:")]),e._v(" "),a("ul",[a("li",[e._v("standard form ("),a("strong",[e._v("P")]),e._v(' = 1): between 0.01 (4" racer) and 0.04 (500 size), for any value of '),a("strong",[e._v("K")])]),e._v(" "),a("li",[e._v("parallel form ("),a("strong",[e._v("K")]),e._v(" = 1): between 0.0004 and 0.005, depending on the value of "),a("strong",[e._v("P")])])]),e._v(" "),a("h5",{attrs:{id:"integral-gain-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integral-gain-i"}},[e._v("#")]),e._v(" Integral Gain (I)")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("I")]),e._v(" (integral) gain keeps a memory of the error. The "),a("strong",[e._v("I")]),e._v(" term increases when the desired rate is not reached over some time. It is important (especially when flying "),a("em",[e._v("Acro mode")]),e._v("), but it should not be set too high.")]),e._v(" "),a("ul",[a("li",[e._v("If the I gain is too high: you will see slow oscillations.")]),e._v(" "),a("li",[e._v("If the I gain is too low: this is best tested in "),a("em",[e._v("Acro mode")]),e._v(", by tilting the vehicle to one side about 45 degrees, and keeping it like that. It should keep the same angle. If it drifts back, increase the "),a("strong",[e._v("I")]),e._v(" gain. A low "),a("strong",[e._v("I")]),e._v(" gain is also visible in a log, when there is an offset between the desired and the actual rate over a longer time.")])]),e._v(" "),a("p",[e._v("Typical values are:")]),e._v(" "),a("ul",[a("li",[e._v("standard form ("),a("strong",[e._v("P")]),e._v(' = 1): between 0.5 (VTOL plane), 1 (500 size) and 8 (4" racer), for any value of '),a("strong",[e._v("K")])]),e._v(" "),a("li",[e._v("parallel form ("),a("strong",[e._v("K")]),e._v(" = 1): between 0.3 and 0.5 if "),a("strong",[e._v("P")]),e._v(" is around 0.15 The pitch gain usually needs to be a bit higher than the roll gain.")])]),e._v(" "),a("h4",{attrs:{id:"testing-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-procedure"}},[e._v("#")]),e._v(" Testing Procedure")]),e._v(" "),a("p",[e._v("To test the current gains, provide a fast "),a("strong",[e._v("step-input")]),e._v(" when hovering and observe how the vehicle reacts. It should immediately follow the command, and neither oscillate, nor overshoot (it feels 'locked-in').")]),e._v(" "),a("p",[e._v("You can create a step-input for example for roll, by quickly pushing the roll stick to one side, and then let it go back quickly (be aware that the stick will oscillate too if you just let go of it, because it is spring-loaded — a well-tuned vehicle will follow these oscillations).")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" A well-tuned vehicle in "),a("em",[e._v("Acro mode")]),e._v(" will not tilt randomly towards one side, but keeps the attitude for tens of seconds even without any corrections.")])]),e._v(" "),a("h4",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[e._v("#")]),e._v(" Logs")]),e._v(" "),a("p",[e._v("Looking at a log helps to evaluate tracking performance as well. Here is an example for good roll and yaw rate tracking:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1071),alt:"roll rate tracking"}}),e._v(" "),a("img",{attrs:{src:r(1072),alt:"yaw rate tracking"}})]),e._v(" "),a("p",[e._v("And here is a good example for the roll rate tracking with several flips, which create an extreme step-input. You can see that the vehicle overshoots only by a very small amount: "),a("img",{attrs:{src:r(1073),alt:"roll rate tracking flips"}})]),e._v(" "),a("h3",{attrs:{id:"角度控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#角度控制"}},[e._v("#")]),e._v(" 角度控制")]),e._v(" "),a("p",[e._v("This controls the orientation and outputs desired body rates with the following tuning parameters:")]),e._v(" "),a("ul",[a("li",[e._v("Roll control ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ROLL_P"}},[e._v("MC_ROLL_P")]),e._v(")")],1),e._v(" "),a("li",[e._v("Pitch control ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_PITCH_P"}},[e._v("MC_PITCH_P")])],1),e._v(" "),a("li",[e._v("Yaw control ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_YAW_P"}},[e._v("MC_YAW_P")]),e._v(")")],1)]),e._v(" "),a("p",[e._v("The attitude controller is much easier to tune. In fact, most of the time the defaults do not need to be changed at all.")]),e._v(" "),a("p",[e._v("To tune the attitude controller, fly in "),a("em",[e._v("Manual/Stabilized mode")]),e._v(" and increase the "),a("strong",[e._v("P")]),e._v(" gains gradually. If you start to see oscillations or overshoots, the gains are too high.")]),e._v(" "),a("p",[e._v("The following parameters can also be adjusted. These determine the maximum rotation rates around all three axes:")]),e._v(" "),a("ul",[a("li",[e._v("Maximum roll rate ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ROLLRATE_MAX"}},[e._v("MC_ROLLRATE_MAX")]),e._v(")")],1),e._v(" "),a("li",[e._v("Maximum pitch rate ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_PITCHRATE_MAX"}},[e._v("MC_PITCHRATE_MAX")])],1),e._v(" "),a("li",[e._v("Maximum yaw rate ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_YAWRATE_MAX"}},[e._v("MC_YAWRATE_MAX")]),e._v(")")],1)]),e._v(" "),a("h3",{attrs:{id:"thrust-curve-thrust-curve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thrust-curve-thrust-curve"}},[e._v("#")]),e._v(" Thrust Curve {#thrust_curve}")]),e._v(" "),a("p",[e._v("The tuning above optimises performance around the hover throttle. But it can be that you start to see oscillations when going towards full throttle.")]),e._v(" "),a("p",[e._v("To counteract that adjust the "),a("strong",[e._v("thrust curve")]),e._v(" with the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#THR_MDL_FAC"}},[e._v("THR_MDL_FAC")]),e._v(" parameter.")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The rate controller might need to be re-tuned if you change this parameter.")])]),e._v(" "),a("p",[e._v("The mapping from motor control signals (e.g. PWM) to expected thrust is linear by default — setting "),a("code",[e._v("THR_MDL_FAC")]),e._v(" to 1 makes it quadratic. Values in between use a linear interpolation of the two. Typical values are between 0.3 and 0.5.")]),e._v(" "),a("p",[e._v("If you have a "),a("a",{attrs:{href:"https://www.rcbenchmark.com/pages/series-1580-thrust-stand-dynamometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("thrust stand"),a("OutboundLink")],1),e._v(" (or can otherwise "),a("em",[e._v("measure")]),e._v(" thrust), you can determine the relationship between the PWM control signal and the motor's actual thrust, and fit a function to the data. "),a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/blob/master/assets/config/mc/ThrustCurve.ipynb",target:"_blank",rel:"noopener noreferrer"}},[e._v("This Notebook"),a("OutboundLink")],1),e._v(" shows how the thrust model factor "),a("code",[e._v("THR_MDL_FAC")]),e._v(" may be calculated from previously measured thrust data.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/blob/master/assets/config/mc/ThrustCurve.ipynb",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(1074),alt:"Thrust Curve Compensation"}}),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The mapping between PWM and static thrust depends highly on the battery voltage.")])]),e._v(" "),a("p",[e._v("If you don't have access to a thrust stand, you can also tune the modeling factor empirically. Start off with 0.3 and increase it by 0.1 at a time. If it is too high, you will start to notice oscillations at lower throttle values. If it is too low you'll notice oscillations at higher throttle values.")]),e._v(" "),a("h3",{attrs:{id:"airmode-混控器饱和-airmode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airmode-混控器饱和-airmode"}},[e._v("#")]),e._v(" Airmode & 混控器饱和 {#airmode}")]),e._v(" "),a("p",[e._v("The rate controller outputs torque commands for all three axis (roll, pitch and yaw) and a scalar thrust value, which need to be converted into individual motor thrust commands. This step is called mixing.")]),e._v(" "),a("p",[e._v("It can happen that one of the motor commands becomes negative, for example for a low thrust and large roll command (and similarly it can go above 100%). This is a mixer saturation. It is physically impossible for the vehicle to execute these commands (except for reversible motors). PX4 has two modes to resolve this:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Either by reducing the commanded torque for roll such that none of the motor commands is below zero (Airmode disabled). In the extreme case where the commanded thrust is zero, it means that no attitude correction is possible anymore, which is why a minimum thrust is always required for this mode.")])]),e._v(" "),a("li",[a("p",[e._v("Or by increasing (boosting) the commanded thrust, such that none of the motor commands is negative (Airmode enabled). This has the big advantage that the attitude/rates can be tracked correctly even at low or zero throttle. It generally improves the flight performance.")]),e._v(" "),a("p",[e._v("However it increases the total thrust which can lead to situations where the vehicle continues to ascend even though the throttle is reduced to zero. For a well-tuned, correctly functioning vehicle it is not the case, but for example it can happen when the vehicle strongly oscillates due to too high P tuning gains.")])])]),e._v(" "),a("p",[e._v("Both modes are shown below with a 2D illustration for two motors and a torque command for roll "),a("span",{staticStyle:{color:"#9673A6"}},[e._v("r")]),e._v(". On the left motor "),a("span",{staticStyle:{color:"#9673A6"}},[e._v("r")]),e._v(" is added to the commanded thrust, while on the right motor it is subtracted from it. The motor thrusts are in "),a("span",{staticStyle:{color:"#6A9153"}},[e._v("green")]),e._v(". With Airmode enabled, the commanded thrust is increased by "),a("span",{staticStyle:{color:"#B85450"}},[e._v("b")]),e._v(". When it is disabled, "),a("span",{staticStyle:{color:"#9673A6"}},[e._v("r")]),e._v(" is reduced.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1075),alt:"Airmode"}})]),e._v(" "),a("p",[e._v("If mixing becomes saturated towards the upper bound the commanded thrust is reduced to ensure that no motor is commanded to deliver more than 100% thrust. This behaviour is similar to the Airmode logic, and is applied whether Airmode is enabled or disabled.")]),e._v(" "),a("p",[e._v("Once your vehicle flies well you can enable Airmode via the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_AIRMODE"}},[e._v("MC_AIRMODE")]),e._v(" parameter.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);