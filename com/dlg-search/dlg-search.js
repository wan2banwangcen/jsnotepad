/* exported $dlgSearch */
var $dlgSearch = (function(){
    var $dlg = $(''
      +'<div class="notepad-dlg-search">'
        +'<div class="dialogbox notepad-dlgbox">'
          +'<div class="notepad-dlg-titlebar">'
            +'<p class="title">查找</p>'
            +'<span class="btn-close">✖</span>'
          +'</div>'
          +'<div class="main notepad-dlg-main">'
            +'<label>查找内容(N):<input class="txt-content" type="text" autofocus></label><br>'
            +'<label><input type="checkbox" value="capital-sense">区分大小写(C)</label>'
            +'<fieldset class="search-direction">'
              +'<legend>方向</legend>'
              +'<label><input type="radio" name="direction" value="up">向上(U)</label>'
              +'<label><input type="radio" name="direction" value="down" checked>向下(D)</label>'
            +'</fieldset>'
            +'<input class="btn-search btn" type="button" value="查找下一个(F)" disabled>'
            +'<input class="btn-cancel btn" type="button" value="取消">'
          +'</div>'
        +'</div>'
      +'</div>');
    var $btnClose = $dlg.find('.btn-close');
    var $btnCancel = $dlg.find('.btn-cancel');
    var $titlebar = $dlg.find('.notepad-dlg-titlebar');
    var $btnSearch = $dlg.find('.btn-search');
    var $txtContent = $dlg.find('.txt-content');

    function destory(){
      $dlg.remove();
    }
    function verify(){
      if($txtContent.val() !== ''){
        $btnSearch.removeAttr('disabled');
      } else{
        $btnSearch.attr('disabled','disabled');
      }
    }
    function init(){
      $dlg.find('.dialogbox').draggable({handle: $titlebar});
      $dlg.find('input[value="up"]').removeAttr('checked');
      $dlg.find('input[value="down"]')[0].checked = true;
      $dlg.find('input[type="checkbox"]').removeAttr('checked');
      $btnSearch.attr('disabled','disabled');
      $txtContent.val('');
      $txtContent.focus();
    }

    function show(searchHandler){
      $('body').append($dlg);
      init();

      $btnClose.click(destory);
      $btnCancel.click(destory);
      $txtContent.keyup(verify);
      $btnSearch.click(function(){
        searchHandler({
          content:$txtContent.val(),
          capitalSense:$dlg.find('input[type="checkbox"]:checked').val() === 'capital-sense',
          direction:$dlg.find('input[name="direction"]:checked').val()
        });
      });
    }
  return {show:show};
}());
