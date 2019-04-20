/* exported $dlgGoto */
var $dlgGoto = (function(){
    var $dlg = $(''
      +'<div class="notepad-dlg-mask notepad-dlg-goto">'
        +'<div class="dialogbox notepad-dlgbox">'
          +'<div class="notepad-dlg-titlebar">'
            +'<p class="title">转到指定行</p>'
            +'<span class="btn-close">✖</span>'
          +'</div>'
          +'<div class="main notepad-dlg-main">'
            +'<lable for="">行号(L):</lable><br>'
            +'<input class="line-num" type="text" autofocus><br>'
            +'<input class="btn-goto" type="button" value="转到">'
            +'<input class="btn-cancel" type="button" value="取消">'
          +'</div>'
      +'</div>');
    var $btnClose = $dlg.find('.btn-close');
    var $btnCancel = $dlg.find('.btn-cancel');
    var $titlebar = $dlg.find('.notepad-dlg-titlebar');
    var $btnGoto = $dlg.find('.btn-goto');
    var $txtLine = $dlg.find('.line-num');
    var cfg = {
      curLine:1,
      total:1,
      gotoHandler:null
    };

    function destory(){
      $dlg.remove();
    }
    
    function validation(){
      var num = Number($txtLine.val());
      if(num === 0 || num >cfg.total ){
        alert('行数超过总行数');
        return false;
      }
      return true;
    }
    function gotoHandler(){
      if(!validation()){
        return ;
      }
      cfg.gotoHandler($txtLine.val());
      destory();
    }

    function filieterKey(e){
      if(!/[0-9]/.test(e.key)){
        e.preventDefault();
        alert('不能输入数字以外的字符');
      }
    }

    var init = function(conf){
      $.extend(cfg,conf);
      $('body').append($dlg);
      $dlg.find('.dialogbox').draggable({handle: $titlebar});
      $txtLine.val(cfg.curLine);
      $txtLine.select();
      $btnClose.click(destory);
      $btnCancel.click(destory);
      $btnGoto.click(gotoHandler);
      $txtLine.keypress(filieterKey);
  };
  return {init:init};
}());
