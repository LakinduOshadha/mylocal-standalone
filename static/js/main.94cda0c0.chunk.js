(this.webpackJsonpmylocal=this.webpackJsonpmylocal||[]).push([[0],{153:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var r,a,c,i=n(1),o=n.n(i),s=n(38),u=n.n(s),l=(n(94),n(4)),p=n(5),h=n(9),d=n(10),b=n(65),f=n(11),j=n(7),v={COUNTRY:"country",PROVINCE:"province",DISTRICT:"district",DSD:"dsd",GND:"gnd",ED:"ed",PD:"pd",PS:"ps",MOH:"moh",LG:"lg",UNKNOWN:"unknown"},O="LK-1127015",g=(Object.values(v),r={},Object(j.a)(r,v.COUNTRY,"Country"),Object(j.a)(r,v.PROVINCE,"Province"),Object(j.a)(r,v.DISTRICT,"Administrative District"),Object(j.a)(r,v.DSD,"Divisional Secretariat Division"),Object(j.a)(r,v.GND,"Grama Niladari Division"),Object(j.a)(r,v.PD,"Polling Division"),Object(j.a)(r,v.ED,"Electoral District"),Object(j.a)(r,v.PS,"Police Station"),Object(j.a)(r,v.LG,"Local Authority"),Object(j.a)(r,v.MOH,"Medical Office of Health Area"),r),m=(a={},Object(j.a)(a,v.COUNTRY,""),Object(j.a)(a,v.PROVINCE,"Province"),Object(j.a)(a,v.DISTRICT,"District"),Object(j.a)(a,v.DSD,"DSD"),Object(j.a)(a,v.GND,"GND"),Object(j.a)(a,v.PD,"PD"),Object(j.a)(a,v.ED,"ED"),Object(j.a)(a,v.PS,"PS"),Object(j.a)(a,v.LG,""),Object(j.a)(a,v.MOH,"MOH"),a),y=(c={},Object(j.a)(c,v.COUNTRY,2),Object(j.a)(c,v.PROVINCE,4),Object(j.a)(c,v.DISTRICT,5),Object(j.a)(c,v.DSD,7),Object(j.a)(c,v.GND,10),{2:[v.COUNTRY],4:[v.PROVINCE],5:[v.DISTRICT],7:[v.DSD],10:[v.GND]}),_={5:v.ED,6:v.PD},x=n(3),k=n(2),D=n.n(k),I=n(6),w=(n(96),!1);var N=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"getEntTypes",value:function(){return Object.values(v)}},{key:"getEntType",value:function(e){if("LK"===e.substring(0,2))switch(e.length){case 2:return v.COUNTRY;case 4:return v.PROVINCE;case 5:return v.DISTRICT;case 7:return v.DSD;case 10:return v.GND;default:return v.UNKNOWN}if("EC"===e.substring(0,2))switch(e.length){case 5:return v.ED;case 6:return v.PD;default:return v.UNKNOWN}return"LG"===e.substring(0,2)?v.LG:"MOH"===e.substring(0,3)?v.MOH:v.UNKNOWN}}]),e}(),C=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"get",value:function(){var e=Object(I.a)(D.a.mark((function e(t,n){var r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=localStorage.getItem(t))){e.next=3;break}return e.abrupt("return",JSON.parse(r));case 3:return console.debug("\u231b","Cache.get","cold",t),e.next=6,n();case 6:a=e.sent;try{localStorage.setItem(t,JSON.stringify(a))}catch(c){localStorage.clear()}return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getSync",value:function(e,t){var n=localStorage.getItem(e);if(n)return JSON.parse(n);console.debug("\u231b","Cache.getSync","cold",e);var r=t();try{localStorage.setItem(e,JSON.stringify(r))}catch(a){localStorage.clear()}return r}}]),e}(),S={headers:{Accept:"application/json"}},E={headers:{Accept:"text/csv"}};function L(e){return T.apply(this,arguments)}function T(){return(T=Object(I.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,S);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"pathJoin",value:function(e){return e.join("/")}},{key:"json",value:function(){var e=Object(I.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("WWW.json.".concat("v20210823",".").concat(t),Object(I.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(t));case 1:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"tsv",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r,a,c,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,E);case 2:return n=e.sent,e.next=5,n.text();case 5:return r=e.sent,a=r.split("\n"),c=a[0].split("\t").map((function(e){return e.replace("\r","")})),i=a.slice(1,-1).map((function(e){var t=e.split("\t");return c.reduce((function(e,n,r){return e[n]=t[r].replace("\r",""),e}),{})})).filter((function(e){return e})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),R=n(39),P=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"getEntsByType",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://raw.githubusercontent.com/LakinduOshadha/mylocal-data/main","/ents/").concat(t,".tsv"),e.next=3,M.tsv(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getEntIndexByType",value:function(){var t=Object(I.a)(D.a.mark((function t(n){var r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getEntsByType(n);case 2:return r=t.sent,t.abrupt("return",r.reduce((function(e,t){return e[t.id]=t,e}),{}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getAllEntIndex",value:function(){var t=Object(I.a)(D.a.mark((function t(){var n,r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=N.getEntTypes(),t.next=3,Promise.all(n.map(function(){var t=Object(I.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getEntIndexByType(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:return r=t.sent,t.abrupt("return",n.reduce((function(e,t,n){return e[t]=r[n],e}),{}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getEnt",value:function(){var t=Object(I.a)(D.a.mark((function t(n){var r,a,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=N.getEntType(n),t.next=3,e.getEntIndexByType(r);case 3:return a=t.sent,(c=a[n]).centroid&&(c.centroid=JSON.parse(c.centroid)),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}(),A="https://raw.githubusercontent.com/LakinduOshadha/mylocal-data/main",G=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"getGeoForRegionID",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N.getEntType(t),r=A+"/geo/json/".concat(n,"/").concat(t,".json"),e.next=4,M.json(r);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"latlngToRegion",value:function(){var t=Object(I.a)(D.a.mark((function t(n){var r,a,c,i,o;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(x.a)(n,2),a=r[0],c=r[1],t.next=3,e.getLatLangRegion([a,c],v.GND);case 3:return i=t.sent,t.next=6,e.getRegionIDsFromGndID(i);case 6:return o=t.sent,t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getRegionIDsFromGndID",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getEnt(t);case 2:return r=e.sent,n={},Object(j.a)(n,v.PROVINCE,r["".concat(v.PROVINCE,"_id")]),Object(j.a)(n,v.DISTRICT,r["".concat(v.DISTRICT,"_id")]),Object(j.a)(n,v.DSD,r["".concat(v.DSD,"_id")]),Object(j.a)(n,v.GND,r["".concat(v.GND,"_id")]),a=n,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGeoForRegionType",value:function(){var t=Object(I.a)(D.a.mark((function t(n){var r,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAllGeodata(n);case 2:return r=t.sent,a={},r.objects.data.geometries.forEach((function(e){var t=[];e.arcs.forEach((function(e){e=e.shift(),t.push(r.arcs[e])})),a[e.properties.id]={coordinates:t,properties:e.properties}})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getAllGeodata",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"topojson",n=A+"/geo/topo-geo_json/".concat(t,".").concat("topojson"),e.next=4,M.json(n);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getLatLangRegion",value:function(){var t=Object(I.a)(D.a.mark((function t(n,r){var a,c,i,o,s,u,l,p;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(x.a)(n,2),c=a[0],i=a[1],o=R.point([i,c]),t.next=4,e.getGeoForRegionType(r);case 4:s=t.sent,t.t0=D.a.keys(s);case 6:if((t.t1=t.t0()).done){t.next=14;break}if(u=t.t1.value,l=s[u],p=R.multiPolygon([l.coordinates],l.properties),!R.inside(o,p)){t.next=12;break}return t.abrupt("return",s[u].properties.id);case 12:t.next=6;break;case 14:return t.abrupt("return",null);case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}]),e}(),W=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"getGeo",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getGeoForRegionID(t);case 2:return n={coordinates:n=e.sent,type:"MultiPolygon"},e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRegionInfo",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r,a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(x.a)(t,2),r=n[0],a=n[1],e.next=3,G.latlngToRegion([r,a]);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),H=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"getTable",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://raw.githubusercontent.com/nuuuwan/gig-data/master/gig2","/").concat(t,".tsv"),e.next=3,M.tsv(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"getEntity",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getEnt(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCensus",value:function(){var e=Object(I.a)(D.a.mark((function e(t,n){var r,a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getTable(t);case 2:for(c in r=e.sent,(a=r.filter((function(e){return e.entity_id===n})))[0])try{a[0][c]=parseInt(a[0][c])}catch(i){}return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),B=(n(153),n(0));function K(e){var t=Object.entries({TEST_CACHE_DISABLED:w,TEST_GIG_SERVER_DISABLED:false,TEST_GEO_SERVER_DISABLED:false}).filter((function(e){var t=Object(x.a)(e,2);t[0];return t[1]})).map((function(e){var t=Object(x.a)(e,2),n=t[0];t[1];return n})).join(" ;");return t?Object(B.jsx)("div",{className:"div-test-mode",children:"Test Mode: ".concat(t)}):null}var F=n(19),V=n(183),z=n(184),J=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"isISORegionType",value:function(e){return"LK"===e.substring(0,2)}},{key:"isECType",value:function(e){return"EC"===e.substring(0,2)}},{key:"getEntityType",value:function(t){if(!t)return v.UNKNOWN;var n=t.length;return e.isISORegionType(t)?y[n]||void 0:e.isECType(t)?_[n]||void 0:"PS"===t.substring(0,2)?v.PS:"MOH"===t.substring(0,3)?v.MOH:"LG"===t.substring(0,2)?v.LG:void 0}},{key:"getEntityLabel",value:function(e){return g[e]}},{key:"getEntityLabelShort",value:function(e){return m[e]}},{key:"getIDEntries",value:function(e){return Object.entries(e).filter((function(e){var t=Object(x.a)(e,2),n=t[0];t[1];return n.includes("_id")}))}}]),e}(),Y={COLOMBO_LIPTON_CIRCUS:[6.91727721553381,79.86479316713498],COLOMBO_THUNMULLA:[6.898934602923438,79.86047296462549],WARWICK:[6.899161363627201,80.82915891540118],PARLIAMENT:[6.886788895029474,79.91874847062672],COLOMBO:[6.9271,79.8612],KANDY:[7.2906,80.6337],KURUNEGALA:[7.4818,80.3609]};function q(e){return e.reduce((function(e,t){return e.concat(t)}),[])}function Z(e){var t,n=e.type;return"MultiPolygon"===n?t=q(q(e.coordinates)):"Polygon"===n&&(t=q(e.coordinates)),function(e){return e.reduce((function(e,t){var n=Object(x.a)(e,2),r=Object(x.a)(n[0],2),a=r[0],c=r[1],i=Object(x.a)(n[1],2),o=i[0],s=i[1],u=Object(x.a)(t,2),l=u[0],p=u[1];return[[Math.min(a,l),Math.min(c,p)],[Math.max(o,l),Math.max(s,p)]]}),[[180,180],[-180,-180]])}(t.map((function(e){return[e[1],e[0]]})))}function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(I.a)(D.a.mark((function e(t){var n,r,a,c,i,o,s,u,l;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getGeo(t);case 2:return n=e.sent,r=Z(n),a=Object(x.a)(r,2),c=Object(x.a)(a[0],2),i=c[0],o=c[1],s=Object(x.a)(a[1],2),u=s[0],l=s[1],e.abrupt("return",[[i,o],[u,l]]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(155);function $(e){return Object(B.jsx)("div",{className:"div-x-button",onClick:e.onClick,children:"\u2715"})}var ee={"Demographic Information":["population-gender.regions.2012","population-age_group.regions.2012","population-marital_status.regions.2012"],"Ethno-Religious Information":["population-ethnicity.regions.2012","population-religion.regions.2012"],"Household Information":["social-household-communication_items.regions.2012","social-household-lighting.regions.2012","social-household-cooking_fuel.regions.2012","social-household-source_of_drinking_water.regions.2012","social-household-solid_waste_disposal.regions.2012","social-household-toilet_facilities.regions.2012","social-household-roof_type.regions.2012","social-household-floor_type.regions.2012","social-household-wall_type.regions.2012","social-household-structure.regions.2012","social-household-living_quarters.regions.2012","social-household-type_of_unit.regions.2012","social-household-occupation_status.regions.2012","social-household-year_of_construction.regions.2012","social-household-number_of_rooms.regions.2012","social-household-number_of_persons.regions.2012","social-household-relationship_to_head.regions.2012","social-household-number-of-households.regions.2012","social-household-ownership-status.regions.2012"]},te={"population-age_group.regions.2012":[["less_than_10",10],["10_~_19",10],["20_~_29",10],["30_~_39",10],["40_~_49",10],["50_~_59",10],["60_~_69",10],["70_~_79",10],["80_~_89",10],["90_and_above",10]],"social-household-year_of_construction.regions.2012":[["before_80",25],["1980_1989",10],["1990_1994",5],["1995_1999",5],["2000_2004",5],["2005",1],["2006",1],["2007",1],["2008",1],["2009",1],["2010",1],["2011",1]],"social-household-number_of_rooms.regions.2012":[["1_room",1],["2_rooms",1],["3_rooms",1],["4_rooms",1],["5_rooms",1],["6_rooms",1],["7_rooms",1],["8_rooms",1],["9_rooms",1],["10_and_above",1]],"social-household-number_of_persons.regions.2012":[["1_person",1],["2_persons",1],["3_persons",1],["4_persons",1],["5_persons",1],["6_persons",1],["7_persons",1],["8_persons",1],["9_persons",1],["10_or_more",1]],"social-household-number-of-households.regions.2012":[["1_household",1],["2_households",1],["3_households",1],["4_households",1],["5_or_more",1]]},ne=n(40),re=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"area",value:function(t){return"".concat(e.numWithComma(t)," km\xb2")}},{key:"altitude",value:function(t){return"".concat(e.numWithComma(t)," m\n      (").concat(e.numWithComma(Math.round(3.28084*t))," ft)")}},{key:"phoneNum",value:function(e){var t=e.replaceAll("-",""),n=t.substring(0,3)+" "+t.substring(3,6)+" "+t.substring(6,10);return Object(B.jsx)("a",{href:"tel:".concat(t),className:"monospace",children:"\u260e "+n})}},{key:"titleCase",value:function(e){return(e=e.replaceAll("_"," ")).split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}},{key:"percentAndTotal",value:function(t,n){if(0===n)return"-";var r=t/n,a=Math.max(12,parseInt(24*Math.sqrt(r))),c={fontSize:a},i={fontSize:parseInt(.8*a),color:"gray"};return Object(B.jsxs)("span",{children:[Object(B.jsx)("div",{className:"div-percent",style:c,children:e.percent(r)}),Object(B.jsx)("div",{className:"div-total",style:i,children:e.numWithComma(t)})]})}},{key:"popDensity",value:function(e,t){return ne.a(",.0f")(e/t)+"/km\xb2"}}]),e}();function ae(e){return re.titleCase(e.replace("population-","").replace(".regions","").replace(".2012","").replace("social-household-","").replace("-"," "))}re.numWithComma=ne.a(","),re.percent=ne.a(".2p"),re.population=re.numWithComma;var ce=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"sum",value:function(e){return e.reduce((function(e,t){return e+t}),0)}},{key:"randomInt",value:function(e,t){return Math.random()*(t-e)+e}}]),e}();function ie(e){var t=e.dataMap,n=Object.entries(Object.values(t)[0]).filter((function(e){return"entity_id"!==e[0]&&!e[0].includes("total_")})).sort((function(e,t){return t[1]-e[1]})),r=ce.sum(n.map((function(e){return e[1]})));return n.map((function(e,t){var n=Object(x.a)(e,2),a=n[0],c=n[1],i=re.percent(c/r),o='"'.concat(re.titleCase(a),'"');return c>.99*r?"Almost completely ".concat(o," (").concat(i,"). "):c>.8*r?"Overwhelmingly ".concat(o," (").concat(i,"). "):c>.6*r?"Mostly ".concat(o," (").concat(i,"). "):0===t||c>.1*r?"".concat(o," (").concat(i,"). "):void 0})).join("")}n(156);function oe(e){return Object(B.jsx)("div",{className:"div-loader"})}n(157);function se(e){var t=e.title,n=e.label,r=e.link;return Object(B.jsxs)("div",{className:"div-reference",children:["(","".concat(t,": "),Object(B.jsx)("a",{href:r,children:n}),")"]})}var ue="hsl(21, 100%, 50%)",le="hsl(165, 100%, 17%)",pe={other:"ghostwhite",others:"gray",bharatha:"cyan",burgher:"purple",chetty:"blue",indian_tamil:ue,malay:le,moor:le,sinhalese:"hsl(355, 63%, 34%)",sri_lankan_tamil:ue,buddhist:"hsl(43, 100%, 50%)",islam:le,hindu:ue,roman_catholic:"purple",other_christian:"blue",female:"pink",male:"lightblue",son_or_daughter:"green",head:"blue",wife_or_husband:"pink",grandchild_or_great_grand_child:"darkgreen",other_relative:"yellow",non_relative:"silver",son_or_daughter_in_law:"lightgreen",parent_of_head_or_spouse:"red",boarder:"gray",domestic_employee:"brown",clergy:"yellow",tv:"green",mobile:"purple",radio:"maroon",fixed_tp:"blue",pc:"red",laptop:"pink",fax:"silver",fire_wood:"brown",gas:"orange",kerosene:"purple",electricity:"blue",asbestos:"gray",tile:"darkred",metal_sheet:"silver",concrete:"green",zink_aluminium_sheet:"blue",cement:"lightgray",tile_or_granite_or_terrazo:"orange",mud:"darkbrown",wood:"brown",occupants_burn:"red",occupants_bury:"orange",collected_by_local_authorities:"blue",occupants_composting_solid_waste:"green",tap_within_unit_main_line:"darkgreen",tap_within_premises_but_outside_unit_main_line:"green",tap_outside_premises_main_line:"orange",protected_well_within_premises:"blue",protected_well_outside_premises:"lightblue",unprotected_well:"purple",tube_well:"cyan",rural_water_projects:"pink",river_or_tank_or_stream:"red",bottled_water:"silver",single_house_single_floor:"darkgreen",single_house_double_floor:"green",single_house_more_than_2_floors:"lightgreen",row_house_or_line_room:"orange",attached_house_or_annex:"silver",twin_house:"cyan",flat:"blue",condominium:"purple",hut_or_shanty:"red",owned_by_a_household_member:"green",rent_or_lease_privately_owned:"blue",rent_or_lease_government_owned:"cyan",occupied_free_of_rent:"orange",encroached:"red",water_seal_and_connected_to_a_piped_sewer_system:"green",water_seal_and_connected_to_a_septic_tank:"lightgreen",pour_flush_toilet_not_water_seal:"orange",direct_pit:"red",not_using_a_toilet:"black",electricity_national_electricity_network:"blue",solar_power:"yellow",bio_gas:"orange",housing_unit:"green",collective_living_quarter:"orange",non_housing_unit:"red",semi_permanent:"orange",permanent:"green",improvised:"red",unclassified:"black",married_registered:"blue",never_married:"green",widowed:"orange",married_customary:"lightblue",separated_not_legally:"pink",divorced:"red",legally_separated:"maroon",cement_block_or_stone:"darkgray",brick:"maroon",cabook:"orange",soil_bricks:"green",plank_or_metal_sheet:"silver",cadjan_or_palmyrah:"orange",occupied:"green",vacant:"red"};function he(e,t,n,r){return"hsl(".concat(e,",").concat(t,"%,").concat(n,"%, ").concat(r,")")}function de(e){var t=pe[e];return t||(pe[e]=he(ce.randomInt(0,360),ce.randomInt(20,80),ce.randomInt(20,80),1),pe[e])}n(158);var be=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tableInfos,n=e.total,r=e.valueIsPercent;return Object(B.jsx)("table",{children:Object(B.jsx)("tbody",{children:t.map((function(e,t){var a=e.key,c=e.value,i=e.color;return Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:Object(B.jsx)("svg",{width:"10",heigh:"10",children:Object(B.jsx)("circle",{cx:"5",cy:"9",r:"4",style:{fill:i}})})}),Object(B.jsx)("th",{children:re.titleCase(a)}),Object(B.jsx)("td",{className:"align-right highlight",children:Object(B.jsx)("div",{children:r?re.percent(c):re.percent(c/n)})}),Object(B.jsx)("td",{className:"align-right",children:Object(B.jsx)("div",{children:r?null:re.numWithComma(c)})})]},"tr-".concat(t,"-").concat(a))}))})})}}]),n}(i.Component),fe=(n(159),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dataMap,n=e.tableName,r=e.valueIsPercent,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object.entries(Object.values(e)[0]).map((function(e){var t=Object(x.a)(e,2);return[t[0],t[1]]})).filter((function(e){var t=Object(x.a)(e,2),n=t[0];return t[1],!n.includes("total_")&&!n.includes("entity_id")})).sort((function(e,t){var n=Object(x.a)(e,2),r=(n[0],n[1]),a=Object(x.a)(t,2);return a[0],a[1]-r})),r=t?1:ce.sum(n.map((function(e){var t=Object(x.a)(e,2);return t[0],t[1]}))),a=n.filter((function(e){var t=Object(x.a)(e,2),n=t[0];return t[1]>.001*r&&"other"!==n})),c=ce.sum(a.map((function(e){var t=Object(x.a)(e,2);return t[0],t[1]}))),i=t?0:r-c,o=a;return i&&o.push(["others",i]),{extendedData:o,total:r}}(t,r),c=a.extendedData,i=a.total,o=Math.min(60,60),s=0,u=[],l=c.map((function(e,t){var n=Object(x.a)(e,2),r=n[0],a=n[1],c=s/i,l=(s+=a)/i,p=2*c*Math.PI,h=60+o*Math.sin(p),d=60-o*Math.cos(p),b=2*l*Math.PI,f=60+o*Math.sin(b),j=60-o*Math.cos(b),v=Math.abs(b-p)>Math.PI?1:0,O=b>0?1:0,g=["M".concat(60,",").concat(60),"L".concat(h,",").concat(d),"A".concat(o,",").concat(o,",").concat(0,",").concat(v,",").concat(O,",").concat(f,",").concat(j),"Z"].join(" "),m=de(r);return u.push({key:r,value:a,color:m}),Object(B.jsx)("path",{d:g,fill:m},"pie-chart-"+t)}));return Object(B.jsxs)("div",{className:"div-pie-chart-outer",children:[Object(B.jsx)("div",{className:"div-table",children:Object(B.jsx)(be,{tableInfos:u,total:i,valueIsPercent:r})}),r?null:Object(B.jsx)("div",{className:"div-pie-chart",children:Object(B.jsx)("svg",{className:"svg-pie-chart",width:120,height:120,children:l})})]},"div-"+n)}}]),n}(i.Component)),je=n(67),ve=(n(160),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dataMap,n=e.tableName,r=e.ageKeys,a=Object.values(t)[0],c=r.map((function(e){return a[e[0]]})),i=ce.sum(r.map((function(e){return e[1]}))),o=ce.sum(c),s=Math.max.apply(Math,Object(je.a)(r.map((function(e){return a[e[0]]/e[1]})))),u=r.length,l=120,p=19*u,h={width:240,height:p},d=[],b=0,f=r.map((function(e,t){var n=Object(x.a)(e,2),r=n[0],c=n[1],o=a[r],h=r,f=l*(o/s)/c,j=p*(c/i),v=60-f/2,O=p*b/i;b+=c;var g=he(120*(1-t/u),80,50,1);return d.push({key:h,value:o,color:g}),Object(B.jsx)("rect",{x:v,y:O,width:f,height:j,fill:g},"pyramid-"+t)}));return Object(B.jsxs)("div",{className:"div-pyramid-outer",children:[Object(B.jsx)("div",{className:"div-table",children:Object(B.jsx)(be,{tableInfos:d,total:o})}),Object(B.jsx)("div",{className:"div-pyramid",style:h,children:Object(B.jsx)("svg",{className:"svg-pyramid",width:l,height:p,children:f})})]},"div-"+n)}}]),n}(i.Component)),Oe=(n(161),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={dataMap:void 0},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(I.a)(D.a.mark((function e(){var t,n,r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.tableName,r=t.entityID,e.prev=1,e.next=4,U.getCensus(n,r);case 4:a=e.sent,this.setState({dataMap:a}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return(null===(e=this.state)||void 0===e?void 0:e.dataMap)?this.renderWithData():Object(B.jsx)(oe,{})}},{key:"renderWithData",value:function(){var e,t=this.props,n=t.tableName,r=t.iTable,a=this.state.dataMap;e=te[n]?ve:fe;var c="communication_items_owned_by_household"===n;return Object(B.jsxs)("div",{className:"div-census-info",children:[Object(B.jsx)("h4",{className:"h4-census-label",children:ae(n)}),Object(B.jsx)(se,{title:"Data Source",label:"Department of Census and Statistics, Sri Lanka",link:"http://www.statistics.gov.lk/"}),c?null:Object(B.jsx)(ie,{dataMap:a}),Object(B.jsx)("div",{className:"div-census-chart-component",children:Object(B.jsx)(e,{dataMap:a,tableName:n,ageKeys:te[n],valueIsPercent:c})})]},"div-census-info-".concat(r,"-").concat(n))}}]),n}(i.Component));n(162);function ge(e){var t=e.groupName,n=e.tableNames,r=e.entityID,a=n.map((function(e,t){var n="census-info-".concat(t,"-").concat(e,"-");return Object(B.jsx)(Oe,{tableName:e,entityID:r,iTable:t},n)}));return Object(B.jsxs)("div",{children:[Object(B.jsx)("h3",{className:"h3-census-group-name",children:t}),a]})}function me(e){var t=e.entityID;return Object.entries(ee).map((function(e,n){var r=Object(x.a)(e,2),a=r[0],c=r[1],i="census-info-group-".concat(n,"-").concat(a,"-");return Object(B.jsx)(ge,{groupName:a,tableNames:c,entityID:t},i)}))}n(163);var ye=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={showDetails:!1},r.onClickShow=r.onClickShow.bind(Object(F.a)(r)),r.onClickHide=r.onClickHide.bind(Object(F.a)(r)),r}return Object(p.a)(n,[{key:"onClickShow",value:function(e){this.setState({showDetails:!0})}},{key:"onClickHide",value:function(e){this.setState({showDetails:!1})}},{key:"render",value:function(){var e=this.state.showDetails,t=this.props.entityID;if(!e)return Object(B.jsx)("div",{className:"div-detailed-info",children:Object(B.jsxs)("div",{className:"div-show-details",onClick:this.onClickShow.bind(this),children:["Click to see Details about ",t]})});var n=e?"show":"hide";return Object(B.jsxs)("div",{className:"div-detailed-info ".concat(n),children:[Object(B.jsx)($,{onClick:this.onClickHide}),Object(B.jsx)("div",{className:"div-summary-outer",children:Object(B.jsx)(me,{entityID:t})})]})}}]),n}(i.Component),_e=(n(164),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"renderRow",value:function(e,t){var n=Object(x.a)(e,2),r=n[0],a=n[1],c="row-".concat(t,"-").concat(r);return Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:r}),Object(B.jsx)("td",{children:a})]},c)}},{key:"render",value:function(){var e=this.props,t=e.dataMap,n=e.title;return Object(B.jsxs)("div",{className:"div-info-table",children:[Object(B.jsx)("h3",{className:"h3-info-table-title",children:n}),Object(B.jsx)("table",{className:"table-info-table",children:Object(B.jsx)("tbody",{children:Object.entries(t).map(this.renderRow)})}),Object(B.jsx)(se,{title:"Data Source",label:"Department of Census and Statistics, Sri Lanka",link:"http://www.statistics.gov.lk/"})]})}}]),n}(i.Component)),xe=(n(165),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={entity:void 0},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(I.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.getEntity(this.props.entityID);case 3:t=e.sent,this.setState({entity:t}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.entityID,n=e.iEntityID,r=J.getEntityType(t);if("LK"===t)return"Sri Lanka";var a=this.state.entity,c=t,i="entity-link ";a?(c="".concat(a.name," ").concat(J.getEntityLabelShort(r)),i+="link-name"):i+="link-id";var o="admin";r===v.PS&&(o="place");var s="a-".concat(n,"-").concat(t);return Object(B.jsx)("a",{className:i,href:"/mylocal/".concat(o,"/").concat(t),children:c},s)}}]),n}(i.Component));function ke(e){var t=e.entityIDList,n=e.iEntityIDList;return Object(B.jsx)("div",{className:"div-entity-link-list",children:t.sort().map((function(e,t){var n="div-entity-link-".concat(t,"-").concat(e);return Object(B.jsx)("div",{children:Object(B.jsx)(xe,{entityID:e,iEntityID:t})},n)}))},"div-entity-link-list-".concat(n))}function De(e){var t=e.entityIDListList,n=e.ientityIDListList;return Object(B.jsx)("div",{className:"div-entity-link-list-list",children:t.sort().map((function(e,t){var n="entity-link-list-".concat(t);return Object(B.jsx)(ke,{entityIDList:e,iEntityIDList:t},n)}))},"div-entity-linkt-list-list-".concat(n))}function Ie(e){return Object.assign({},{"ISO 3166 code":e.id,"FIPS code":e.fips})}function we(e){return Object.assign({},{"ISO 3166 code":e.id,"FIPS code":e.fips,"HASC code":e.hasc})}function Ne(e){return Object.assign({},{"ISO 3166 code":e.id,"HASC code":e.hasc})}function Ce(e){return Object.assign({},{"ISO 3166 code":e.id,"GND Num":e.gnd_num})}function Se(e){return J.getIDEntries(e).reduce((function(e,t){var n=Object(x.a)(t,2),r=(n[0],n[1]);return e[J.getEntityLabel(J.getEntityType(r))]=Object(B.jsx)(xe,{entityID:r}),e}),{})}function Ee(e){return[["eqs","Equivalent to"],["subs","Contains"],["supers","Contained in"],["ints","Overlaps with"]].reduce((function(t,n){var r,a,c=Object(x.a)(n,2),i=c[0],o=c[1],s=Object.values((r=JSON.parse(e[i].replace(/'/g,'"')),a=J.getEntityType,Array.isArray(r)?r.reduce((function(e,t){var n=a(t);return e[n]||(e[n]=[]),e[n].push(t),e}),{}):[]));return 0===s.length?t:Object.assign(t,Object(j.a)({},o,Object(B.jsx)(De,{entityIDListList:s})))}),{})}function Le(e){var t=J.getEntityType(e.id);return Object.assign({},{Name:"".concat(e.name," ").concat(J.getEntityLabel(t)),Area:re.area(e.area),Population:re.population(e.population),"Pop. Density":re.popDensity(e.population,e.area),"Altitude (Centroid)":re.altitude(e.centroid_altitude)})}function Te(e){var t,n=J.getEntityType(e.id),r=(t={},Object(j.a)(t,v.PROVINCE,Ie),Object(j.a)(t,v.DISTRICT,we),Object(j.a)(t,v.DSD,Ne),Object(j.a)(t,v.GND,Ce),t);return Object.assign({},r[n]?r[n](e):{})}n(166);var Me=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(I.a)(D.a.mark((function e(){var t,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.entityID,e.prev=1,e.next=4,U.getEntity(t);case 4:n=e.sent,this.setState({baseInfo:Le(n),parentEntityInfo:Se(n),customInfo:Te(n),relatedEntityInfo:Ee(n)}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state)return Object(B.jsx)(oe,{});var e=this.state,t=e.baseInfo,n=e.parentEntityInfo,r=e.customInfo,a=e.relatedEntityInfo;return Object(B.jsxs)("div",{className:"div-entity-info-pane",children:[Object(B.jsx)(_e,{title:"Basic Info",dataMap:t}),Object(B.jsx)(_e,{title:"Parent Regions",dataMap:n}),Object(B.jsx)(_e,{title:"Alternative Region Codes",dataMap:r}),Object(B.jsx)(_e,{title:"Related Regions",dataMap:a})]})}}]),n}(i.Component),Re=(n(167),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.subTitle;return Object(B.jsxs)("div",{className:"div-infobox",children:[Object(B.jsx)("div",{className:"div-sub-title",children:n}),Object(B.jsx)("div",{className:"div-title",children:t}),this.props.children]})}}]),n}(i.Component)),Pe=n(181),Ae=(n(168),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={geoDataForRegion:void 0},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(I.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.regionID,e.prev=1,e.t0=this,e.next=5,W.getGeo(t);case 5:e.t1=e.sent,e.t2={geo:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=12;break;case 10:e.prev=10,e.t3=e.catch(1);case 12:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state.geo;return t?(e=(e="Polygon"===t.type?t.coordinates:q(t.coordinates)).map((function(e){return e.map((function(e){var t=Object(x.a)(e,2),n=t[0];return[t[1],n]}))})),Object(B.jsx)(Pe.a,{className:"polyline-region-map",positions:e})):null}}]),n}(i.Component)),Ge=n(182);function We(e){var t=e.onChangeLocation,n=Object(Ge.a)({click:function(e){var r=e.latlng,a=r.lat,i=r.lng;n.flyTo({lat:a,lng:i},n.getZoom()),c({lat:a,lng:i}),t([a,i])}}),r=Object(i.useState)(n.getCenter()),a=Object(x.a)(r,2),c=(a[0],a[1]);return null}n(169);var He=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r,a,c;return Object(l.a)(this,n),(c=t.call(this,e)).state=Object.assign({},n.getDefaultLatLngAndZoom(),{regionID:(null===(r=c.props.match)||void 0===r||null===(a=r.params)||void 0===a?void 0:a.regionID)||O}),c.onChangeLocation=c.onChangeLocation.bind(Object(F.a)(c)),c}return Object(p.a)(n,[{key:"getRegionID",value:function(){return this.state.regionID}},{key:"onChangeLocation",value:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r,a,c,i,o,s,u;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(x.a)(t,2),r=n[0],a=n[1],c=this.state.regionID,i=J.getEntityType(c),e.prev=3,e.next=6,W.getRegionInfo([r,a]);case 6:s=e.sent,console.debug("onChangeLocation",s),u=null!==(o=s[i])&&void 0!==o?o:s[v.DISTRICT],this.setState({regionID:u}),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(3);case 14:case"end":return e.stop()}}),e,this,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getLatLngAndZoom",value:function(){var e=Object(I.a)(D.a.mark((function e(){var t,n,r,a,c,i,o,s,u,l,p;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getRegionID(),e.prev=1,e.next=4,Q(t);case 4:return n=e.sent,r=Object(x.a)(n,2),a=Object(x.a)(r[0],2),c=a[0],i=a[1],o=Object(x.a)(r[1],2),s=o[0],u=o[1],l=[(c+s)/2,(i+u)/2],h=s-c,p=parseInt(-Math.log2(h/1e3)),e.abrupt("return",{latLng:l,zoom:p});case 17:return e.prev=17,e.t0=e.catch(1),e.abrupt("return",{latLng:Y.COLOMBO,zoom:13});case 20:case"end":return e.stop()}var h}),e,this,[[1,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){var e=this.getRegionID(),t=J.getEntityType(e);return Object(B.jsxs)("div",{children:[Object(B.jsx)(Re,{subTitle:g[t],title:e,children:Object(B.jsx)(Me,{entityID:e})}),Object(B.jsx)(ye,{entityID:e})]},"div-admin-inner-".concat(e))}},{key:"renderInnerMapLayer",value:function(){var e=this.getRegionID();return Object(B.jsx)(Ae,{regionID:e},"RegionMap-".concat(e))}},{key:"render",value:function(){var e;if(!(null===this||void 0===this||null===(e=this.state)||void 0===e?void 0:e.latLng))return Object(B.jsx)(oe,{});var t=this.state,n=t.zoom,r=t.latLng,a=Object(x.a)(r,2),c=a[0],i=a[1];return Object(B.jsxs)("div",{children:[Object(B.jsxs)(V.a,{center:[c,i],zoom:n,children:[Object(B.jsx)(z.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),this.renderInnerMapLayer(),Object(B.jsx)(We,{onChangeLocation:this.onChangeLocation})]}),this.renderInner()]},"page-".concat(c,"-").concat(i,"-").concat(n))}}],[{key:"getDefaultLatLngAndZoom",value:function(){return{latLng:Y.COLOMBO,zoom:13}}}]),n}(i.Component),Ue=(n(170),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(K,{}),Object(B.jsx)(b.a,{basename:"/mylocal",children:Object(B.jsxs)(f.d,{children:[Object(B.jsx)(f.b,{path:"/admin/:regionID",component:He}),Object(B.jsx)(f.b,{children:Object(B.jsx)(f.a,{to:"/admin/".concat(O)})})]})})]})}}]),n}(i.Component)),Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};u.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(Ue,{})}),document.getElementById("root")),Be()},94:function(e,t,n){}},[[179,1,2]]]);
//# sourceMappingURL=main.94cda0c0.chunk.js.map