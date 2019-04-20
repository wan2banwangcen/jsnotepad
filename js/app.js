/* Notepad */

var np = {};

np.config = {
  'appContainer':'.notepad-app'
};

np.bShowStatusBar = true;  //是否显示状态栏
np.bLinerWrap = false; //是否换行

/* global $menubar $editor $statusbar :true */
$(function(){
  $menuber.init();
  $editor.init();
  $statusbar.init();
});

