const Jsl_0x5d5937=Jsl_0x2224;function Jsl_0x2224(_0xdb3a6,_0x53a3e6){const _0x120d7c=Jsl_0x120d();return Jsl_0x2224=function(_0x222486,_0x133a41){_0x222486=_0x222486-0xa7;let _0x2c2790=_0x120d7c[_0x222486];return _0x2c2790;},Jsl_0x2224(_0xdb3a6,_0x53a3e6);}function Jsl_0x120d(){const _0x50a81b=['6677ZJrYRo','all','stringify','time','5108824PiBaZr','filter','data','node-cron','push','36MoaLWI','584336xkYykk','218595cNWqKj','Asia/Kolkata','11320khAZIn','\x20*\x20*\x20*','548906LGGacj','split','func','write','41190nXyjJD','156wIQtyb','1JopsRu','exports','cron','chat','1094696QSQZWw'];Jsl_0x120d=function(){return _0x50a81b;};return Jsl_0x120d();}(function(_0x55fdde,_0x3e33e5){const _0x4c1ee0=Jsl_0x2224,_0xfd1f41=_0x55fdde();while(!![]){try{const _0x42dd4b=-parseInt(_0x4c1ee0(0xb6))/0x1*(parseInt(_0x4c1ee0(0xb0))/0x2)+-parseInt(_0x4c1ee0(0xac))/0x3+parseInt(_0x4c1ee0(0xba))/0x4+parseInt(_0x4c1ee0(0xb4))/0x5*(parseInt(_0x4c1ee0(0xb5))/0x6)+-parseInt(_0x4c1ee0(0xbf))/0x7+parseInt(_0x4c1ee0(0xab))/0x8*(parseInt(_0x4c1ee0(0xaa))/0x9)+parseInt(_0x4c1ee0(0xae))/0xa*(parseInt(_0x4c1ee0(0xbb))/0xb);if(_0x42dd4b===_0x3e33e5)break;else _0xfd1f41['push'](_0xfd1f41['shift']());}catch(_0xf9d9fb){_0xfd1f41['push'](_0xfd1f41['shift']());}}}(Jsl_0x120d,0x5f374));var cron=require(Jsl_0x5d5937(0xa8));const {db}=require('.');module[Jsl_0x5d5937(0xb7)]={'cron':async(_0x449dd1,_0xf987c8)=>{const _0x52d051=Jsl_0x5d5937;let [_0x47e41f,_0x410d92]=_0x449dd1[_0x52d051(0xb1)](':'),_0x1a8569=cron['schedule'](_0x410d92+'\x20'+_0x47e41f+_0x52d051(0xaf),()=>{_0xf987c8();},{'scheduled':![],'timezone':_0x52d051(0xad)});return _0x1a8569['start']();},'saveSchedule':async(_0xc27e14,_0x5f8915,_0x230877)=>{const _0x210def=Jsl_0x5d5937;let _0x18ea9e=db['data']['cron']=[];_0x18ea9e[_0x210def(0xa9)]({'time':_0x5f8915,'func':JSON[_0x210def(0xbd)](_0x230877),'chat':_0xc27e14}),await db[_0x210def(0xb3)]();},'getSchedule':async _0x32239c=>{const _0x376809=Jsl_0x5d5937;return db['data']['cron']!==[]?db[_0x376809(0xa7)][_0x376809(0xb8)][_0x376809(0xc0)](_0x36e697=>{const _0x435a1e=_0x376809;_0x36e697[_0x435a1e(0xb9)]==_0x32239c;}):[];},'startSchedule':async(_0x42bf71='all')=>{const _0x1ba3a8=Jsl_0x5d5937;if(_0x42bf71==_0x1ba3a8(0xbc))for(let _0x5ced71 of db[_0x1ba3a8(0xa7)]['cron']){this['cron'](_0x5ced71['time'],_0x5ced71[_0x1ba3a8(0xb2)]);}else{let _0x3009a4=db[_0x1ba3a8(0xa7)][_0x1ba3a8(0xb8)][_0x1ba3a8(0xc0)](_0x2392b2=>{const _0x2a01b5=_0x1ba3a8;_0x2392b2[_0x2a01b5(0xb9)]==_0x42bf71;});for(let _0x493c56 of _0x3009a4){this[_0x1ba3a8(0xb8)](_0x493c56[_0x1ba3a8(0xbe)],_0x493c56['func']);}}}};