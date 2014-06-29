$(document).ready(function()
{
  $("#compose-attachments").resizable({ 
    handles: "w",
    stop: function(e, ui) {
      $('#composebodycontainer').css('right', $('#compose-attachments').css('width'));
      $(window).resize();
    }
  });
  $("#compose-attachments").find("div.ui-resizable-w").addClass("ui-icon");
  $("#compose-attachments").find("div.ui-resizable-w").addClass("ui-icon-arrowthick-2-e-w");
  $("#compose-attachments").find("div.ui-resizable-w").css('cursor', 'w-resize');
  $("#compose-attachments").find("div.ui-resizable-w").css('height', '15px');
  $("#compose-attachments").find("div.ui-resizable-w").css('left', '-2px');
  $("#compose-attachments").find("div.ui-resizable-w").css('top', '12px');
  $("#compose-attachments").find("div.ui-resizable-w").css('width', '14px');
});
