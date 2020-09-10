(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1588:function(t,e,a){"use strict";a.r(e);var n=a(42),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"air-traffic-avoidance-uas-traffic-management-utm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#air-traffic-avoidance-uas-traffic-management-utm"}},[t._v("#")]),t._v(" Air Traffic Avoidance: UAS Traffic Management (UTM)")]),t._v(" "),n("p",[t._v("PX4 can use MAVLink "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("UTM_GLOBAL_POSITION")]),n("OutboundLink")],1),t._v(" messages to support simple air traffic avoidance in "),n("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("missions")]),t._v(". If a potential collision is detected, PX4 can "),n("em",[t._v("warn")]),t._v(", immediately "),n("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("land")]),t._v(", or "),n("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("return")]),t._v(" (depending on the value of "),n("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[n("code",[t._v("NAV_TRAFF_AVOID")])]),t._v(").")],1),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" This implementation is exactly the same as for "),n("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADS-B traffic avoidance")]),t._v(" (except for the source of other-vehicle data). For more information see "),n("a",{attrs:{href:"#implementation"}},[t._v("implementation")]),t._v(" below.")],1)]),t._v(" "),n("h2",{attrs:{id:"configure-traffic-avoidance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-traffic-avoidance"}},[t._v("#")]),t._v(" Configure Traffic Avoidance")]),t._v(" "),n("p",[t._v("Configure the trigger distance and action when there is a potential collision using the parameters below:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Parameter")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("!!crwdBlockTags_4_sgaTkcolBdwrc!"),n("img",{attrs:{src:a(1199)+"#NAV_TRAFF_AVOID",alt:"NAV_TRAFF_AVOID"}})]),t._v(" "),n("td",[t._v("Enable traffic avoidance mode specify avoidance response. 0: Disable, 1: Warn only, 2: Return mode, 3: Land mode.")])]),t._v(" "),n("tr",[n("td",[t._v("!!crwdBlockTags_5_sgaTkcolBdwrc!"),n("img",{attrs:{src:a(1199)+"#NAV_TRAFF_A_RADM",alt:"NAV_TRAFF_A_RADM"}})]),t._v(" "),n("td",[t._v("Set traffic avoidance trigger distance for "),n("em",[t._v("manned")]),t._v(" aviation")])]),t._v(" "),n("tr",[n("td",[t._v("!!crwdBlockTags_6_sgaTkcolBdwrc!"),n("img",{attrs:{src:a(1199)+"#NAV_TRAFF_A_RADU",alt:"NAV_TRAFF_A_RADU"}})]),t._v(" "),n("td",[t._v("Set traffic avoidance trigger distance for "),n("em",[t._v("unmanned")]),t._v(" aviation")])])])]),t._v(" "),n("h2",{attrs:{id:"implementation-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation-implementation"}},[t._v("#")]),t._v(" Implementation {#implementation}")]),t._v(" "),n("p",[t._v("PX4 listens for "),n("code",[t._v("UTM_GLOBAL_POSITION")]),t._v(" MAVLink messages during missions. When a valid message is received, its validity flags, position and heading are mapped into the same "),n("code",[t._v("transponder_report")]),t._v(" UORB topic used for "),n("em",[t._v("ADS-B traffic avoidance")]),t._v(".")]),t._v(" "),n("p",[t._v("The implementation is otherwise "),n("em",[t._v("exactly")]),t._v(" as described in: "),n("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html#implementation"}},[t._v("ADS-B traffic avoidance > Implementation")]),t._v(".")],1),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM_GLOBAL_POSITION"),n("OutboundLink")],1),t._v(" contains additional fields that are not provided by an ADSB transponder (see "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADSB_VEHICLE"),n("OutboundLink")],1),t._v("). The current implementation simply drops the additional fields (including information about the vehicle's planned next waypoint).")])]),t._v(" "),n("h2",{attrs:{id:"further-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADS-B Traffic Avoidance")])],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);