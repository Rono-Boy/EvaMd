const _0x5c3939=_0x4a0c;(function(_0x130d4d,_0x43551a){const _0x42b3f0=_0x4a0c,_0x43627f=_0x130d4d();while(!![]){try{const _0x4f6923=-parseInt(_0x42b3f0(0x210))/0x1+parseInt(_0x42b3f0(0x20b))/0x2*(-parseInt(_0x42b3f0(0x1fa))/0x3)+-parseInt(_0x42b3f0(0x1eb))/0x4*(parseInt(_0x42b3f0(0x20d))/0x5)+-parseInt(_0x42b3f0(0x1ff))/0x6+parseInt(_0x42b3f0(0x216))/0x7+-parseInt(_0x42b3f0(0x1ef))/0x8+parseInt(_0x42b3f0(0x202))/0x9;if(_0x4f6923===_0x43551a)break;else _0x43627f['push'](_0x43627f['shift']());}catch(_0x12df49){_0x43627f['push'](_0x43627f['shift']());}}}(_0x323c,0xe8742));function _0x4a0c(_0x43bc1f,_0x2904bc){const _0x323c76=_0x323c();return _0x4a0c=function(_0x4a0cb2,_0x2fd816){_0x4a0cb2=_0x4a0cb2-0x1eb;let _0x52bb53=_0x323c76[_0x4a0cb2];return _0x52bb53;},_0x4a0c(_0x43bc1f,_0x2904bc);}function _0x323c(){const _0x2ef912=['getName','202843XFJikY','./src/premium.json','\x2030\x20@user','Just\x20a\x20number,\x20representing\x20the\x20day!','includes','premium','4207693NEzzrR','@s.whatsapp.net','1767476fRvqWe','trans','premiumTime','resolve','10143344OFZfMW','quoted','isGroup','\x20During\x20','tags','users','Success\x20','catch','reply','@tag\x20or\x20reply\x20user\x0aexample\x20','language','892623uJYVzt','owner','sender','rowner','replace','10214232UYbAqw','data','exports','43727904msrBrg','stringify','addprem\x20<day>\x20<@user>','trans2','chat','parse','\x20days','How\x20many\x20days?\x0aexample:\x20','cache','6IYMPAj','mentionedJid','5mMieuz','push'];_0x323c=function(){return _0x2ef912;};return _0x323c();}let handler=async(_0x1d84bd,{conn:_0x3da7b0,text:_0x1eaef5,args:_0x2044d1,usedPrefix:_0x592fab,command:_0x567879})=>{const _0x3e869f=_0x4a0c;let _0x2ec96e=db[_0x3e869f(0x200)][_0x3e869f(0x1f4)][_0x1d84bd[_0x3e869f(0x1fc)]][_0x3e869f(0x1f9)];const _0x5f2b8c=JSON[_0x3e869f(0x207)](fs['readFileSync'](_0x3e869f(0x211)));try{let _0x3e0aa0;if(_0x1d84bd[_0x3e869f(0x1f1)])_0x3e0aa0=_0x1d84bd['mentionedJid'][0x0]?_0x1d84bd[_0x3e869f(0x20c)][0x0]:_0x1d84bd[_0x3e869f(0x1f0)][_0x3e869f(0x1fc)]?_0x1d84bd['quoted'][_0x3e869f(0x1fc)]:_0x1eaef5[_0x3e869f(0x1fe)](/[^0-9]/g,'')+_0x3e869f(0x217);else _0x3e0aa0=_0x1d84bd[_0x3e869f(0x1f0)][_0x3e869f(0x1fc)]?_0x1d84bd['quoted'][_0x3e869f(0x1fc)]:_0x1d84bd[_0x3e869f(0x206)]?_0x1d84bd['chat']:_0x1eaef5[_0x3e869f(0x1fe)](/[^0-9]/g,'')+'@s.whatsapp.net';let _0x78789a=_0x3e869f(0x209)+_0x592fab+_0x567879+'\x2030\x20@tag\x20or\x20reply',_0x18cf7f=await _0x3da7b0[_0x3e869f(0x1ec)](_0x2ec96e,_0x78789a)[_0x3e869f(0x1f6)](async _0x15db48=>await _0x3da7b0['trans2'](_0x2ec96e,_0x78789a));if(!_0x2044d1[0x0])return _0x1d84bd[_0x3e869f(0x1f7)](_0x18cf7f);let _0x513dd7=_0x3e869f(0x213),_0x4d6884=await _0x3da7b0[_0x3e869f(0x1ec)](_0x2ec96e,_0x513dd7)[_0x3e869f(0x1f6)](async _0xa2eddd=>await _0x3da7b0['trans2'](_0x2ec96e,_0x513dd7));if(isNaN(_0x2044d1[0x0]))return _0x1d84bd[_0x3e869f(0x1f7)](_0x4d6884);let _0x958b97=db[_0x3e869f(0x200)][_0x3e869f(0x1f4)][_0x3e0aa0],_0x346981=_0x3da7b0['getName'](_0x3e0aa0)+'\x20already\x20premium,\x20left\x20'+_0x958b97['premiumTime']+_0x3e869f(0x208),_0x4aa8cf=await _0x3da7b0[_0x3e869f(0x1ec)](_0x2ec96e,_0x346981)['catch'](async _0x5f2e94=>await _0x3da7b0[_0x3e869f(0x205)](_0x2ec96e,_0x346981));if(_0x5f2b8c[_0x3e869f(0x214)](_0x3e0aa0['split']`@`[0x0]))return _0x1d84bd['reply'](_0x4aa8cf);db[_0x3e869f(0x200)][_0x3e869f(0x1f4)][_0x3e0aa0][_0x3e869f(0x215)]=!![],db[_0x3e869f(0x200)]['users'][_0x3e0aa0][_0x3e869f(0x1ed)]=_0x2044d1[0x0],_0x5f2b8c[_0x3e869f(0x20e)](''+_0x3e0aa0['split']`@`[0x0]),fs['writeFileSync'](_0x3e869f(0x211),JSON[_0x3e869f(0x203)](_0x5f2b8c));let _0x8f8f4a=_0x3e869f(0x1f5)+_0x567879+'\x20'+_0x3da7b0[_0x3e869f(0x20f)](_0x3e0aa0)+_0x3e869f(0x1f2)+_0x2044d1[0x0]+'\x20days!',_0x1e8ebb=await _0x3da7b0[_0x3e869f(0x1ec)](_0x2ec96e,_0x8f8f4a)[_0x3e869f(0x1f6)](async _0x5a9ac8=>await _0x3da7b0[_0x3e869f(0x205)](_0x2ec96e,_0x8f8f4a));_0x1d84bd[_0x3e869f(0x1f7)](_0x1e8ebb),delete require[_0x3e869f(0x20a)][require[_0x3e869f(0x1ee)]('../config')],require('../config');}catch{let _0x28da37=_0x3e869f(0x1f8)+_0x592fab+_0x567879+_0x3e869f(0x212);return _0x1d84bd[_0x3e869f(0x1f7)](await _0x3da7b0[_0x3e869f(0x1ec)](_0x2ec96e,_0x28da37)[_0x3e869f(0x1f6)](async _0x277bce=>await _0x3da7b0[_0x3e869f(0x205)](_0x2ec96e,_0x28da37)));}};handler['help']=[_0x5c3939(0x204)],handler[_0x5c3939(0x1f3)]=[_0x5c3939(0x1fb)],handler['command']=/^(add|tambah|\+)prem$/i,handler[_0x5c3939(0x1fd)]=!![],module[_0x5c3939(0x201)]=handler;