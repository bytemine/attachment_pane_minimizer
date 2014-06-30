$(document).ready(function() {
  // the list of attachments at composing
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

  // the list of attachments at reading and forwarding
  var attlist = $("#attachment-list").parent();
  attlist.resizable({ 
    handles: "w",
    stop: function(e, ui) {
      $('#composebodycontainer').css('right', $('#compose-attachments').css('width'));
      $(window).resize();
      
      // trick to keep an eventually visible scrollbar within the editor iframe visible
      if($('#composebody_ifr').contents()[0].documentElement.scrollHeight > $('#composebody_ifr').height()) {
        $('#compose-attachments').css('width', $('#compose-attachments').width()-20+'px');
        $('#compose-attachments').css('left', $('#compose-attachments').position().left+20+'px');
      }
    },
    resize: function(e, ui) {
      // trick to keep the list in shape, else resizing would also resize the left value
      if ($("#attachment-list").parent().attr("id") != "compose-attachments") {
        attlist.css('left', '0px');
      }
    }
  });
  attlist.find("div.ui-resizable-w").addClass("ui-icon");
  attlist.find("div.ui-resizable-w").addClass("ui-icon-arrowthick-2-e-w");
  attlist.find("div.ui-resizable-w").css('cursor', 'w-resize');
  attlist.find("div.ui-resizable-w").css('height', '15px');
  attlist.find("div.ui-resizable-w").css('left', '-2px');
  attlist.find("div.ui-resizable-w").css('top', '12px');
  attlist.find("div.ui-resizable-w").css('width', '14px');
  $("#attachment-list").css('margin-left', '4px');
  
});
