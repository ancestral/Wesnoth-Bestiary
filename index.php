<?php
  /* index.php */
  $data_directory = "../trunk/data/";
  $content = file_get_contents('html/content.html');
  $footer = "by ancestral";
  require('html/template.html');
?>
<script>
  var dataDirectory = <?php echo json_encode($data_directory); ?>;
</script>