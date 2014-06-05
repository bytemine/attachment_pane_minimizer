<?php
class attachment_pane_minimizer extends rcube_plugin {
  public $task = 'mail';
  public $rc;

  function init() {
    $this->rc = rcube::get_instance();
    $this->include_script('attachment_pane_minimizer.js');
    $this->add_texts('localization/', true);

    if ($this->rc->task == 'mail') {
      if ($this->rc->action == 'compose') {
        $box = array('id' => 'show_attachments', 'type' => 'checkbox', 'onclick' => 'showAttachmentSection()');
        $box_input = new html_inputfield($box);
        $this->api->add_content(
              html::span('composeoption', html::label(null, $box_input->show() . $this->gettext('attachmentdisplay'))),
              "composeoptions"
        );
      }
    }
  }
}
