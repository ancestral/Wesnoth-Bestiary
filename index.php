<?php
  /* index.php */
  $data_directory = "../trunk/data/";
  $advancement = file_get_contents('html/advancement.html');
  $attacks = file_get_contents('html/attacks.html');
  $description = file_get_contents('html/description.html');
  $resistances = file_get_contents('html/resistances.html');
  $statistics = file_get_contents('html/statistics.html');
  $terrain = file_get_contents('html/terrain.html');
  $footer = "by ancestral";
  require('html/template.html');
?>
<script>
  var dataDirectory = <?php echo json_encode($data_directory); ?>;
</script>