// set maximum width of attachment panel to always reserve 240px for editor panel
$(window).resize(function() {
  $("#attachment-list").parent().resizable("option", "maxWidth", $('#composebody').width());
  $("#compose-attachments").resizable("option", "maxWidth", $('#composebody').width());
  $("#compose-attachments").resizable("option", "minWidth", 240);
  $("#compose-attachments").css('left', '');
  $('#composebody').css('width', $('#composeview-bottom').width()-$("#attachment-list").width()-25+'px');
  $('#composebodycontainer').css('width', $('#composeview-bottom').width()-$("#attachment-list").width()-25+'px');
});

$(document).ready(function() {
  $("#compose-attachments").resizable({
    handles: "w",
    stop: function(e, ui) {
      $('#composebodycontainer').css('right', $('#compose-attachments').css('width'));
      $(window).resize();
    }
  });

  $("#compose-attachments").find("div.ui-resizable-w").css('cursor', 'w-resize');
  $("#compose-attachments").find("div.ui-resizable-w").css('height', '100%');
  $("#compose-attachments").find("div.ui-resizable-w").css('left', '-2px');
  $("#compose-attachments").find("div.ui-resizable-w").css('width', '14px');
  //$("#compose-attachments").find("div.ui-resizable-w").css({"background-image": "url(plugins/attachment_pane_minimizer/arrow-grey.png)", 'background-repeat': 'no-repeat'});

  $("#compose-attachments").css({position: 'absolute', top: '1px', right: '0px', width: '240px'});
  $("#compose-attachments").css('left', '');
  $("#compose-attachments").css('min-width', '240px');
  $("#compose-attachments").resizable("option", "minWidth", 240);

  // the list of attachments at reading and forwarding
  var attlist = $("#attachment-list").parent();
  attlist.resizable({
    handles: "w",
    stop: function(e, ui) {
      $('#composebodycontainer').css('right', $('#compose-attachments').css('width'));
      $(window).resize();
      $('#composebody').css('width', $('#composeview-bottom').width()-$("#attachment-list").width()-25+'px');
      $('#composebodycontainer').css('width', $('#composeview-bottom').width()-$("#attachment-list").width()-25+'px');
    },
    resize: function(e, ui) {
      // trick to keep the list in shape, else resizing would also resize the left value
      if ($("#attachment-list").parent().attr("id") != "compose-attachments") {
        attlist.css('left', '0px');
      }
    }
  });
  attlist.find("div.ui-resizable-w").css('cursor', 'w-resize');
  attlist.find("div.ui-resizable-w").css('height', '100%');
  attlist.find("div.ui-resizable-w").css('left', '-2px');
  attlist.find("div.ui-resizable-w").css('width', '14px');
  //attlist.find("div.ui-resizable-w").css({"background-image": "url(plugins/attachment_pane_minimizer/arrow-grey.png)", 'background-repeat': 'no-repeat'});
  $("#attachment-list").css('margin-left', '4px');

});
