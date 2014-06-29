<?php
class attachment_pane_minimizer extends rcube_plugin {
  public $task = 'mail';
  public $rc;

  function init() {
    $this->rc = rcube::get_instance();
    $this->include_script('attachment_pane_minimizer.js');
  }
}
