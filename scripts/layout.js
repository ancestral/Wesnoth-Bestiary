var unitFile = "";
var unitMap = [];
var movementTypeMap = [];
var unitData = {};

$(document).ready(function() {
  load();
});

function load() {
  var get = window.location.hash.substring(1, window.location.hash.length);
  get = get.replace(/%20/g," ");
  get = get.replace(/\s+/g,"_");
  window.location.hash = "#" + get.toLowerCase();
  var unitFile = "data/units/" + get.toLowerCase() + ".js";

	$.ajax ({
	  url: unitFile,
	  async: false,
	  dataType: 'json',
	  success: function(data) {
	    unitData = data;
	  }
	});
	
  var resistanceFile = "data/movetypes/" + unitData.movement_type + ".js";
  
	$.ajax ({
	  url: resistanceFile,
	  async: false,
	  dataType: 'json',
	  success: function(data) {
	    resistanceData = data;
	  }
	});
  	
	var d = unitData.description;
	d = d.replace(/\n\n/g,"<br /><br />");
	d = d.replace(/>([^:<]+):/,"><em>$1:</em>");
  d = d.replace(/SPECIAL_NOTE\^/,"");

	$('#title').html(unitData.id);
	$('#description').html(d);
	$('#race td').html(unitData.race);
	$('#alignment td').html(unitData.alignment);
	$('#level td').html(unitData.level);
	$('#cost td').html(unitData.cost);
	$('#hitpoints td').html(unitData.hitpoints);
	$('#movement td').html(unitData.movement);
	$('#experience td').html(unitData.experience);
			
	$('#attacks').html("<tr><th><p><td><p>");

	var resistances = ["blade", "pierce", "impact", "fire", "cold", "arcane"];

	for (var i in resistances) {
	  $('#'+resistances[i]).html(100 - (resistanceData.resistance[0][resistances[i]]).replace(/-/,"−") + "%");
	  if (unitData.resistance != null) {
	    if (unitData.resistance[0][resistances[i]] != null) {
		    $('#'+resistances[i]).html(100 - (unitData.resistance[0][resistances[i]]).replace(/-/,"−") + "%"); 	
		  }
		}
  }

	var defenses = ["castle", "cave", "reef", "deep_water", "flat", "forest", "frozen", "hills", "impassable", "mountains", "fungus", "sand", "shallow_water", "swamp_water", "unwalkable", "village"];		

	for (var i in defenses) {
	  if (resistanceData.defense != null) {
	    if (resistanceData.defense[0][defenses[i]]) {
    	  $('#'+defenses[i]+' td').html(100 - (resistanceData.defense[0][defenses[i]]).replace(/-/,"−") + "%");
    	  $('#'+defenses[i]+' td+td').html(resistanceData.movement_costs[0][defenses[i]]);
      }
      else {
        $('#'+defenses[i]+' td').html("—&nbsp;&nbsp;");
    	  $('#'+defenses[i]+' td+td').html("–");
  	  }
	  }
    if (unitData.defense != null) {
  	  if (unitData.defense[0][defenses[i]] != null) {
        $('#'+defenses[i]+' td').html(100 - (unitData.defense[0][defenses[i]]).replace(/-/,"−") + "%");
      }
    }
    
    if (unitData.movement_costs != null) {
  	  if (unitData.movement_costs[0][defenses[i]] != null) {
        $('#'+defenses[i]+' td+td').html(unitData.movement_costs[0][defenses[i]]);
      }
    }
  }
}