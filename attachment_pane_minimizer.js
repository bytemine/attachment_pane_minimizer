// display the attachment section in composer
function showAttachmentSection()
{
  if($('#compose-attachments').css('display') == 'none')
  {
    // display attachment section
    $('#compose-attachments').show();
    $('#composebodycontainer').css('right', '260px');
    $(window).resize();
    $("#show_attachments").attr("disabled", true);
  }
}

$(document).ready(function()
{
  $('#compose-attachments').hide();
  $('#composebodycontainer').css('right', '0px');
  $(window).resize();
});
