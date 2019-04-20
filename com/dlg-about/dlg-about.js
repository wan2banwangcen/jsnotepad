/* exported $dlgAbout */
var $dlgAbout = (function(){
    var $dlg = $(''
      +'<div class="notepad-dlg-about">'
        +'<div class="dialogbox notepad-dlgbox">'
          +'<div class="notepad-dlg-titlebar">'
            +'<p class="title">关于“记事本”</p>'
            +'<span class="btn-close">✖</span>'
          +'</div>'
          +'<div class="main notepad-dlg-main">'
            +'<h1 class="slogan">JSNotepad</h1>'
            +'<hr>'
            +'<img class="logo" src="../images/notepad-icon-32.png" alt="JSNotepad">'
            +'<div class="info">'
              +'<p>作者：王岑</p>'
              +'<p>QQ：71596415</p>'
              +'<p>仓库地址：<a href="https://github.com/wan2banwangcen/spa-demo" target="_blank">https://github.com/wan2banwangcen/spa-demo</a></p>'
            +'</div>'
            +'<input class="btn-ok" type="button" value="确定">'
          +'</div>'
        +'</div>'
      +'</div>');
    var $btnOk = $dlg.find('.btn-ok');
    var $btnClose = $dlg.find('.btn-close');
    var $titlebar = $dlg.find('.notepad-dlg-titlebar');
    function destory(){
      $dlg.remove();
    }    
       
    var init = function(){
      $('body').append($dlg);
      $dlg.find('.dialogbox').draggable({handle: $titlebar});
      $btnOk.click(destory);
      $btnClose.click(destory);
  };
  return {init:init};
}());
