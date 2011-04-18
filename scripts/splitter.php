<!DOCTYPE html>
<html>
<head>
	<title>JSON File Splitter</title>
</head>

<body>
<?php
  echo '<h2>JSON File Splitter</h2>
  <p>This file should be run before publishing the Bestiary data to the server. It looks for a file called <tt style="color: #333; font-weight: 700">everything.js</tt> one level up from the project’s main directory (two levels up from “scripts”) and splits it into several files in the “data” directory.</p>';

$fail = "no";

@mkdir("../data/races");
@mkdir("../data/movetypes");
@mkdir("../data/units");

if (!is_readable("../../everything.js"))
{ echo '<p><strong>Please put the file "everything.js" one level up from the project’s main directory, make sure it’s readable, then execute this file again.</strong></p>';
$fail = "yes";
}
if (!is_writable("../data/movetypes"))
{ echo '<p style="color: red; font-weight: 700">Please set the permissions of <tt style="color: #333">data/movetypes</tt> to writable, then execute this file again.</p>';
$fail = "yes";
}
if (!is_writable("../data/races"))
{ echo '<p style="color: red; font-weight: 700">Please set the permissions of <tt style="color: #333">data/races</tt> to writable, then execute this file again.</p>';
$fail = "yes";
}
if (!is_writable("../data/units"))
{ echo '<p style="color: red; font-weight: 700">Please set the permissions of <tt style="color: #333">data/units</tt> to writable, then execute this file again.</p>';
$fail = "yes";
}
if ($fail == "yes") { die; }
else
{ echo '<p style="color: red; font-weight: 700">Please remember to change the permissions of folders <tt style="color: #333"> data/movetypes </tt>, <tt style="color: #333"> data/races </tt> and <tt style="color: #333"> data/units </tt> back to read-only.</p><p>You may also delete the <tt style="color: #333; font-weight: 700">everything.js</tt> file now.</p>';}

  $everything = json_decode(file_get_contents('../../everything.js'), true);

  echo '<h3>Units</h3>';
  $arr = $everything['+units'][0]['unit_type'];

  for($item = 0; $item < count($arr); $item++)
  { file_put_contents('../data/units/' . str_replace(" ","_",strtolower($arr[$item]['id'])).'.js',str_replace("\/","/",json_encode($arr[$item])));
	}
  echo '✓ Done (' . count($arr) . ' items)';
	
  echo '<h3>Movetypes</h3>';
	$arr = $everything['+units'][0]['movetype'];
	
  for($item = 0; $item < count($arr); $item++)
  { file_put_contents('../data/movetypes/' . str_replace(" ","_",strtolower($arr[$item]['name'])).'.js',json_encode($arr[$item]));
	}
  echo '✓ Done (' . count($arr) . ' items)';

  echo '<h3>Races</h3>';
	$arr = $everything['+units'][0]['race'];
	
  for($item = 0; $item < count($arr); $item++)
  { file_put_contents('../data/races/' . str_replace(" ","_",strtolower($arr[$item]['id'])).'.js',json_encode($arr[$item]));
	}
  echo '✓ Done (' . count($arr) . ' items)';
?>
</body>
</html>