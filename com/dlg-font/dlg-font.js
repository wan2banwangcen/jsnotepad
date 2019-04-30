/* eslint no-console:["error",{allow:["log"]}] */
/* exported $dlgFont */
/* global comList :true*/
var $dlgFont = (function(){
    var $dlg = $(''
       +'<div class="notepad-dlg-mask notepad-dlg-font">'
        +'<div class="dialogbox notepad-dlgbox">'
          +'<div class="notepad-dlg-titlebar">'
            +'<p class="title">字体</p>'
            +'<span class="btn-close" title="取消">✖</span>'
          +'</div>'
          +'<div class="main notepad-dlg-main">'
            +'<div class="font-family"><p>字体(F):</p></div>'
            +'<div class="font-style"><p>格式(Y):</p></div>'
            +'<div class="font-size"><p>大小(S):</p></div>'
            +'<fieldset class="sample">'
              +'<legend>示例</legend>'
              +'<p class="sample-txt">SeHhUuNn</p>'
            +'</fieldset>'
            +'<div class="script">'
              +'<label>'
              +'脚本(R):<br>'
              +'<select>'
                +'<option value="西欧语言">西欧语言</option>'
                +'<option value="中文 GB2312">中文 GB2312</option>'
              +'</select> '  
            +'</label>'
          +'</div>'
          +'<input class="btn-ok btn" type="button" value="确定">'
          +'<input class="btn-cancel btn" type="button" value="取消">'
      +'</div>'
    +'</div>'
  +'</div>');
    var $btnClose = $dlg.find('.btn-close');
    var $btnCancel = $dlg.find('.btn-cancel');
    var $titlebar = $dlg.find('.notepad-dlg-titlebar');
    var $btnOk = $dlg.find('.btn-ok');
    var $sample = $dlg.find('.sample-txt');
  
    function destory(){
      $dlg.remove();
    }

    var fonts =  ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
    var styles = ['斜体','粗体','常规','粗偏斜体'];
    var sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
    var cfg = {
      family:'Arial',
      style:'常规',
      size:'16',
      okHandler:null
    };
    
    function sample(){
      $sample.css({'font-family':cfg.family,'font-size':cfg.size+'pt'});
      if(cfg.style === '斜体'){
        $sample.css({'font-style':'italic'});
        return;
      }
      if(cfg.style === '粗体'){
        $sample.css({'font-weight':'bold'});
        return ;
      }
      if(cfg.style === '粗偏斜体'){
        $sample.css({'font-wight':'bold','font-style':'italic'});
        return;
      }
    }


    function init(){
      var lstFamily = new comList();
      lstFamily.show({
        container:'.notepad-dlg-font .font-family',
        width:'176px',
        list:fonts,
        select:fonts.indexOf(cfg.family),
        isFont:true,
        selectHandler:function(e){
          cfg.family = fonts[e];
          sample();
        }
      });
      var lstStyle = new comList();
      lstStyle.show({
        container:'.notepad-dlg-font .font-style',
        width:'132px',
        list:styles,
        select:styles.indexOf(cfg.style),
        isFontStyle:true,
        selectHandler:function(e){
          cfg.style = styles[e];
          sample();
        }
      });
      var lstSize = new comList();
      lstSize.show({
        container:'.notepad-dlg-font .font-size',
        width:'64px',
        list:sizes,
        select:sizes.indexOf(cfg.size),
        selectHandler:function(e){
          cfg.size = sizes[e];
          sample();
        }
      });
      sample();
    } 
    function show(conf){
      $.extend(cfg,conf);
      $('body').append($dlg);
      init();
      $dlg.find('.dialogbox').draggable({handle: $titlebar});
      $btnClose.click(destory);
      $btnCancel.click(destory);
      $btnOk.click(function(){
        cfg.okHandler({
          family:cfg.family,
          style:cfg.style,
          size:cfg.size
        });
        destory();
      });
      $dlg.click(function(e){
        e.stopPropagation();
      });
    }
  return {show:show};
}());
