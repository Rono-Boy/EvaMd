const _0x5e2d95=_0x3fcc;(function(_0x302636,_0x9ba6ea){const _0x271192=_0x3fcc,_0x435d1e=_0x302636();while(!![]){try{const _0xf39c5e=-parseInt(_0x271192(0xe3))/0x1*(parseInt(_0x271192(0xd2))/0x2)+parseInt(_0x271192(0xd5))/0x3+-parseInt(_0x271192(0xdd))/0x4+parseInt(_0x271192(0xc4))/0x5*(parseInt(_0x271192(0xe4))/0x6)+parseInt(_0x271192(0xd4))/0x7*(-parseInt(_0x271192(0xd3))/0x8)+-parseInt(_0x271192(0xd6))/0x9+parseInt(_0x271192(0xde))/0xa;if(_0xf39c5e===_0x9ba6ea)break;else _0x435d1e['push'](_0x435d1e['shift']());}catch(_0x157fa6){_0x435d1e['push'](_0x435d1e['shift']());}}}(_0x3494,0x70e11));let fetch=require(_0x5e2d95(0xca)),axios=require(_0x5e2d95(0xc7));const {servers,ytv}=require(_0x5e2d95(0xc3)),{youtubedl,youtubedlv2,youtubedlv3}=require('@bochilteam/scraper');let handler=async(_0x12e5cf,{conn:_0x198a29,text:_0x4ec3f6,args:_0x40ac59,command:_0x52abfe,isPrems:_0x49f751,isOwner:_0x191d8f})=>{const _0x1686fe=_0x5e2d95;if(!_0x4ec3f6)throw'uhm\x20where\x20is\x20the\x20url?';let _0x509515=_0x1686fe(0xd0);if(!_0x40ac59[0x0][_0x1686fe(0xce)](/(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)\/(watch|shorts)|(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)/gi))throw _0x509515;let _0xfff8;if(_0x191d8f||_0x49f751)_0xfff8=0x12c;else _0xfff8=0x64;if(!_0x40ac59||!_0x40ac59[0x0])throw _0x1686fe(0xd8);const _0x37feb9=await _0x12e5cf[_0x1686fe(0xcb)](wait);try{let _0x4c4310=await youtubedl(_0x40ac59[0x0]),{thumbnail:_0x550192,video:_0x1e9c59,title:_0x359172}=_0x4c4310,_0x13c825=_0x4c4310[_0x1686fe(0xc6)][_0x1686fe(0xdc)],{quality:_0x375020,fileSizeH:_0x42ebb2,fileSize:_0x1abcb2}=_0x13c825,_0x43a80b=await _0x13c825[_0x1686fe(0xcc)](),_0x4b5c08=(_0x49f751||_0x191d8f?_0xfff8:_0xfff8)*0x400<_0x1abcb2,_0x49708c=await(await axios[_0x1686fe(0xc8)](_0x1686fe(0xe1)+_0x43a80b))[_0x1686fe(0xe2)],_0x4b541b=_0x1686fe(0xe5)+_0x359172+'\x0a🎚\x20*Size:*\x20'+_0x42ebb2+_0x1686fe(0xdb)+_0x375020+'\x0a'+(_0x4b5c08?'❌\x20*File\x20size\x20above\x20'+_0xfff8+_0x1686fe(0xc9):'')+_0x1686fe(0xcf)+_0x49708c;await _0x198a29[_0x1686fe(0xd9)](_0x12e5cf[_0x1686fe(0xd1)],_0x550192,_0x37feb9,{'jpegThumbnail':await(await fetch(_0x550192))[_0x1686fe(0xd7)](),'caption':_0x4b541b});if(!_0x4b5c08)await _0x198a29[_0x1686fe(0xd9)](_0x12e5cf[_0x1686fe(0xd1)],_0x43a80b,0x0,{'contextInfo':{'mentionedJid':[_0x12e5cf['sender']],'externalAdReply':{'mediaUrl':''+_0x40ac59[0x0],'mediaType':0x2,'description':deslink,'title':titlink,'body':bodlink,'thumbnail':await(await fetch(_0x550192))['buffer']()}}});}catch{try{let _0x5432b1=await youtubedlv2(_0x40ac59[0x0]),{thumbnail:_0x24c07e,video:_0x37de7a,title:_0x44f438}=_0x5432b1,_0x2d2f86=_0x5432b1[_0x1686fe(0xc6)][_0x1686fe(0xdc)],{quality:_0x39448a,fileSizeH:_0x586964,fileSize:_0x5cb23f}=_0x2d2f86,_0x24e785=await _0x2d2f86[_0x1686fe(0xcc)](),_0x10ff80=(_0x49f751||_0x191d8f?_0xfff8:_0xfff8)*0x400<_0x5cb23f;if(!_0x10ff80)await _0x198a29['sendMedia'](_0x12e5cf['chat'],_0x24e785,0x0,{'contextInfo':{'mentionedJid':[_0x12e5cf[_0x1686fe(0xda)]],'externalAdReply':{'mediaUrl':''+_0x40ac59[0x0],'mediaType':0x2,'description':deslink,'title':titlink,'body':bodlink,'thumbnail':await(await fetch(_0x24c07e))['buffer']()}}});}catch{try{let _0xb213cd=await youtubedlv3(_0x40ac59[0x0]),{thumbnail:_0x51ad26,video:_0x200c85,title:_0x6287f1}=_0xb213cd,_0x329ffa=_0xb213cd[_0x1686fe(0xc6)][_0x1686fe(0xdc)],{quality:_0x2e1844,fileSizeH:_0x568b4d,fileSize:_0x1356c7}=_0x329ffa,_0x374c7c=await _0x329ffa[_0x1686fe(0xcc)](),_0x38690a=(_0x49f751||_0x191d8f?_0xfff8:_0xfff8)*0x400<_0x1356c7;if(!_0x38690a)await _0x198a29[_0x1686fe(0xd9)](_0x12e5cf[_0x1686fe(0xd1)],_0x374c7c,0x0,{'contextInfo':{'mentionedJid':[_0x12e5cf[_0x1686fe(0xda)]],'externalAdReply':{'mediaUrl':''+_0x40ac59[0x0],'mediaType':0x2,'description':deslink,'title':titlink,'body':bodlink,'thumbnail':await(await fetch(_0x51ad26))[_0x1686fe(0xd7)]()}}});}catch{try{let _0x5a3783=(_0x40ac59[0x1]||servers[0x0])['toLowerCase'](),{dl_link:_0x2ba777,thumb:_0xc0e95b,title:_0x17508e,filesize:_0x5d3376,filesizeF:_0x512d58}=await yta(_0x40ac59[0x0],servers[_0x1686fe(0xdf)](_0x5a3783)?_0x5a3783:servers[0x0]),_0x19adae=(_0x49f751||_0x191d8f?_0xfff8:_0xfff8)*0x400<_0x5d3376;if(!_0x19adae)await _0x198a29[_0x1686fe(0xd9)](_0x12e5cf[_0x1686fe(0xd1)],_0x2ba777,null,{'contextInfo':{'mentionedJid':[_0x12e5cf['sender']],'externalAdReply':{'mediaUrl':''+_0x40ac59[0x0],'mediaType':0x2,'description':deslink,'title':titlink,'body':bodlink,'thumbnail':await(await fetch(_0xc0e95b))[_0x1686fe(0xd7)]()}}});}catch{throw eror;}}}}};handler[_0x5e2d95(0xc5)]=['ytmp4\x20<url>'],handler['tags']=[_0x5e2d95(0xe0)],handler[_0x5e2d95(0xcd)]=/^yt(v?(ideo)?|mpp?4|v?short)(d(oc(ument)?)?)?$/i,handler['limit']=!![],module['exports']=handler;function _0x3fcc(_0x28d2e3,_0x4f7b60){const _0x349413=_0x3494();return _0x3fcc=function(_0x3fcc1d,_0x141459){_0x3fcc1d=_0x3fcc1d-0xc3;let _0x1221a9=_0x349413[_0x3fcc1d];return _0x1221a9;},_0x3fcc(_0x28d2e3,_0x4f7b60);}function _0x3494(){const _0x5ab2a1=['help','video','axios','get','\x20MB,\x20download\x20it\x20yourself*\x0a','node-fetch','reply','download','command','match','🚀\x20*Link:*\x20','wrong\x20url,\x20this\x20command\x20to\x20download\x20watch/shorts','chat','776aoXxvl','27728xTapsm','1561XTuycV','333666XhkHnK','4567482GJlCNp','buffer','Uhm...\x20where\x20is\x20the\x20url?','sendMedia','sender','\x0a✨\x20*Quality:*\x20','360p','3067036jNCoVn','21293380SMHxug','includes','downloader','https://tinyurl.com/api-create.php?url=','data','24HRhzsI','166968ZXmPqE','📽\x20*YouTube\x20MP4*\x0a\x0a📌\x20*Title:*\x20','../lib/y2mate','50YdIkNR'];_0x3494=function(){return _0x5ab2a1;};return _0x3494();}