/*eslint no-console:["error",{allow:["log"]}] */
/* exported menuData */

var menuData = [
  {
    title:'文件(F)',
    width:'202px',
    left:0,
    items:[
      {
        title:'新建(N)',
        shortcut:'Ctrl+N',
        enabled:true,
        handler:function(){console.log('menu clicked(新建)');}
      },
      {
        title:'打开(O)',
        shortcut:'Ctrl+O',
        enabled:true,
        handler:function(){console.log('menu clicked 打开(O)');}
      },
      {
        title:'保存(S)',
        shortcut:'Ctrl+S',
        enabled:true,
        handler:function(){console.log('menu clicked 保存(S)');}
      },
      {
        title:'另存为(A)...',
        shortcut:'',
        enabled:true,
        handler:function(){console.log('menu clicked 另存为(A)');}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
      {
        title:'页面设置(U)...',
        shortcut:'',
        enabled:true,
        handler:function(){console.log('menu clicked 页面设置(U)');}
      },
      {
        title:'打印(P)...',
        shortcut:'Ctrl+P',
        enabled:true,
        handler:function(){console.log('menu clicked 打印(P)');}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
      {
        title:'退出(X)',
        shortcut:'',
        enabled:true,
        handler:function(){console.log('menu clicked 退出(X)');}
      }
    ]
  },
  {
    title:'编辑(E)',
    width:'218px',
    left:'55px',
    items:[
      {
        title:'撤销(U)',
        shortcut:'Ctrl+Z',
        enabled:true,
        handler:function(){console.log('menu clicked 撤销(U)');}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null,
      },
      {
        title:'剪切(T)',
        shortcut:'Ctrl+X',
        enabled:true,
        handler:function(){console.log('menu clicked 剪切(T)');}
      },
      {
        title:'复制',
        shortcut:'Ctrl+C',
        enabled:true,
        handler:function(){console.log('menu clicked 复制(C)');}
      },
      {
        title:'粘贴(P)',
        shortcut:'Ctrl+P',
        enabled:true,
        handler:function(){console.log('menu clicked 粘贴(P)');}
      },
      {
        title:'删除(L)',
        shortcut:'Del',
        enabled:true,
        handler:function(){console.log('menu clicked 删除(L)');}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null,
      },
      {
        title:'查找(F)',
        shortcut:'Ctrl+F',
        enabled:true,
        handler:function(){console.log('menu clicked 查找(F)');}
      }
    ] 
  }
];
