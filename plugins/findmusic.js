const _0x37b53a=_0x264e;function _0x264e(_0x24c1af,_0x43cc29){const _0x3948a7=_0x3948();return _0x264e=function(_0x264ef1,_0x494da8){_0x264ef1=_0x264ef1-0x19c;let _0x3166f6=_0x3948a7[_0x264ef1];return _0x3166f6;},_0x264e(_0x24c1af,_0x43cc29);}(function(_0x3027eb,_0x392609){const _0x1552a0=_0x264e,_0x504186=_0x3027eb();while(!![]){try{const _0x154222=parseInt(_0x1552a0(0x1a7))/0x1+parseInt(_0x1552a0(0x1aa))/0x2+-parseInt(_0x1552a0(0x1be))/0x3*(-parseInt(_0x1552a0(0x1ac))/0x4)+parseInt(_0x1552a0(0x1af))/0x5*(parseInt(_0x1552a0(0x1c1))/0x6)+-parseInt(_0x1552a0(0x1a5))/0x7*(-parseInt(_0x1552a0(0x1bc))/0x8)+parseInt(_0x1552a0(0x19e))/0x9*(parseInt(_0x1552a0(0x1c4))/0xa)+-parseInt(_0x1552a0(0x1a4))/0xb*(parseInt(_0x1552a0(0x1bd))/0xc);if(_0x154222===_0x392609)break;else _0x504186['push'](_0x504186['shift']());}catch(_0x4d3b61){_0x504186['push'](_0x504186['shift']());}}}(_0x3948,0xd5455));let FormData=require(_0x37b53a(0x1ae)),axios=require(_0x37b53a(0x1a1)),handler=async(_0x6c9a86,{conn:_0x1c22c9,usedPrefix:_0xc5679,command:_0x332c6b})=>{const _0x39fe18=_0x37b53a;let _0x444d4d=_0x6c9a86['quoted']?_0x6c9a86['quoted']:_0x6c9a86,_0x2da6aa=(_0x6c9a86['quoted']?_0x6c9a86[_0x39fe18(0x19f)]:_0x6c9a86[_0x39fe18(0x1ab)])[_0x39fe18(0x1ad)]||'';if(!/video|audio/[_0x39fe18(0x19d)](_0x2da6aa))throw'Reply\x20to\x20the\x20music\x20you\x20want\x20to\x20find\x20with\x20a\x20caption\x20*'+(_0xc5679+_0x332c6b)+'*';_0x6c9a86['reply']('Is\x20There\x20A\x20Song\x20Like\x20This,Wait\x20Let\x20Me\x20Serach\x20It....');const _0x5ea2b3=new FormData();_0x5ea2b3['append']('audio',await _0x444d4d['download'](),_0x39fe18(0x1b3)),_0x5ea2b3['append'](_0x39fe18(0x1b1),_0x39fe18(0x1b9)),axios(_0x39fe18(0x1b7),{'method':'POST','headers':{'Content-Type':_0x39fe18(0x1b5),..._0x5ea2b3[_0x39fe18(0x1a9)]()},'data':_0x5ea2b3})['then'](({data:_0x29748f})=>{const _0x1d9dfb=_0x39fe18;_0x6c9a86[_0x1d9dfb(0x1b0)](_0x1d9dfb(0x1c0)+_0x29748f[_0x1d9dfb(0x1ba)][_0x1d9dfb(0x1b8)]+_0x1d9dfb(0x1b6)+_0x29748f[_0x1d9dfb(0x1ba)]['artists']+'\x0a*Genre*\x20:\x20'+_0x29748f['data'][_0x1d9dfb(0x1bb)]+_0x1d9dfb(0x1b4)+_0x29748f[_0x1d9dfb(0x1ba)][_0x1d9dfb(0x19c)]+_0x1d9dfb(0x1a3)+_0x29748f[_0x1d9dfb(0x1ba)][_0x1d9dfb(0x1b2)]);})[_0x39fe18(0x1bf)](()=>{const _0x13faa5=_0x39fe18;_0x6c9a86[_0x13faa5(0x1b0)]('There\x20Is\x20No\x20Song\x20Like\x20This');});};handler[_0x37b53a(0x1c3)]=[_0x37b53a(0x1a8)],handler[_0x37b53a(0x1a6)]=[_0x37b53a(0x1c2)],handler[_0x37b53a(0x1a2)]=/^(whatmusic|find)$/i,module[_0x37b53a(0x1a0)]=handler;function _0x3948(){const _0x5c93a6=['36ULqLEH','mimetype','form-data','5OkehQg','reply','apikey','release_date','music.mp3','\x0a*Album*\x20:\x20','multipart/form-data','\x0a*Artist*\x20:\x20','https://api.zeks.me/api/searchmusic?apikey=apivinz&audio=https://media1.vocaroo.com/mp3/1ePZvzWDKxIh','title','apivinz','data','genre','9516184OqSBCQ','1128ExUGpI','430083sthIam','catch','*Ya,There\x20Is\x20A\x20Song..*\x0a\x0a*Title*\x20:\x20','9641928OdCYai','tools','help','1730gPioJZ','album','test','58545ITNPdC','quoted','exports','axios','command','\x0a*Release*\x20:\x20','686906cQjpmk','7HsWIdD','tags','1301742lbbgJf','whatmusic','getHeaders','459228sJOnoM','msg'];_0x3948=function(){return _0x5c93a6;};return _0x3948();}