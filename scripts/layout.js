var Bestiary = {};

Bestiary.dataDirectory = '../data/';
Bestiary.adjustments = {
 castle: { name: 'Castle', defense: 0, movement: 0 },
 cave: { name: 'Cave', defense: 0, movement: 0 },
 reef: { name: 'Coastal Reef', defense: 0, movement: 0 },
 deep_water: { name: 'Deep Water', defense: 0, movement: 0 },
 flat: { name: 'Flat', defense: 0, movement: 0 },
 forest: { name: 'Forest', defense: 0, movement: 0 },
 frozen: { name: 'Frozen', defense: 0, movement: 0 },
 hills: { name: 'Hills', defense: 0, movement: 0 },
 impassable: { name: 'Impassable', defense: 0, movement: 0 },
 mountains: { name: 'Mountains', defense: 0, movement: 0 },
 fungus: { name: 'Mushroom', defense: 0, movement: 0 },
 sand: { name: 'Sand', defense: 0, movement: 0 },
 shallow_water: { name: 'Shallow Water', defense: 0, movement: 0 },
 swamp_water: { name: 'Swamp', defense: 0, movement: 0 },
 unwalkable: { name: 'Unwalkable', defense: 0, movement: 0 },
 village: { name: 'Village', defense: 0, movement: 0 }
};

(function($) {
  $.QueryString = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p=a[i].split('=');
      if (p.length != 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split('&'))
})(jQuery);

$(window).load(function() {
  var queryUnit = $.QueryString['unit'].toLowerCase();
  Bestiary.state = { unit: queryUnit };
  history.pushState(Bestiary.state, queryUnit, queryUnit);
});

$(function() {  
  var get = '';
  var unitFile = '';
  var unitData = {};
  var resistanceData = {};

  $('#terrain').click(function() {
    sortTable('name');
  });
  
  $('#defense').click(function() {
    sortTable('defense');
    alert('hi');
  });
  
  $('#movement').click(function() {
    sortTable('movement');
  });

  load();

  function load() {
    get = window.location.hash.substring(1, window.location.hash.length);
    get = get.replace(/%20/g,' ');
    get = get.replace(/\s+/g,'_');
    window.location.hash = '#' + get.toLowerCase();

    unitFile = 'data/units/' + get.toLowerCase() + '.json';

  	$.getJSON(unitFile).done(function(data) {
	    unitData = data;
      var resistanceFile = 'data/movetypes/' + unitData.movement_type + '.json';
    	$.getJSON(resistanceFile).done(function(data) {  	  
  	    resistanceData = data;
        setup();
    	});
	  });
  }
  
  function dropLast(path) {
    last = path.lastIndexOf('/');
    if (last !== -1) {
      path = path.substr(0, last) + '/transparent' + path.substr(last)
    }
    return path
  }
  
  function sortTable(sortedBy) {
    var stats = [];

    for (var i in Object.keys(Bestiary.adjustments)) {
      stats.push({ name: Bestiary.adjustments[Object.keys(Bestiary.adjustments)[i]].name, defense: Bestiary.adjustments[Object.keys(Bestiary.adjustments)[i]].defense, movement: Bestiary.adjustments[Object.keys(Bestiary.adjustments)[i]].movement});
    }
    stats = _.sortBy(stats, stats[sortedBy]);
    $('#adjustments').html('');
    for (var i = 0; i < stats.length; i++) {
      $('#adjustments').append('<tr><th>' + stats[i].name + '<td>' + stats[i].defense + '<td>' + stats[i].movement);
    }
  }
  
  function setup() {
    $('#portrait').hide();
  
  	var d = unitData.description;
  	d = d.replace(/\n\n/g,'<br /><br />')
  	  .replace(/>([^:<]+):/,'><em>$1:</em>')
      .replace(/SPECIAL_NOTE\^/,'');

  	$('#title').html(unitData.id);
  	$('#description + p').html(d);
  	$('#race td').html(unitData.race);
  	$('#alignment td').html(unitData.alignment);
  	$('#level td').html(unitData.level);
  	$('#cost td').html(unitData.cost);
  	$('#hitpoints td').html(unitData.hitpoints);
  	$('#movement td').html(unitData.movement);
  	$('#experience td').html(unitData.experience);
		
  	if (typeof unitData.profile !== 'undefined') {
      $('#portrait').attr('src', (Bestiary.dataDirectory + 'core/images/' + dropLast(unitData.profile)));
  		$('#portrait').show();
    } else {
      $('#portrait').attr('src', (Bestiary.dataDirectory + 'core/images/' + unitData.image));
      $('#portrait').attr('height', '400px');
      $('#portrait').show();
    }	
  	$('#attacks tbody').html('');
  	$('#advancement tbody').html('<tr><td id="current">');

  	$('#current').html(unitData.name);

    if (unitData.advances_to !== 'null')
  	for (var i in unitData.advances_to.split(',')) {
  	  that = unitData.advances_to.split(',')[i];
      $('#advancement tbody tr').append('<td class="next">' + that + '</td>');
  	}
  	$('#current').css('background', '#ffd url(' + Bestiary.dataDirectory + 'core/images/' + unitData.image + ') top center no-repeat');
  	$('.next').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/units/unknown-unit.png) top center no-repeat');

  	for (var i in unitData.attack) {
  	  $('#attacks tbody').append('<tr><th><td>');
  		if (unitData.attack[i].icon) {
  		  $('#attacks tbody tr:last-child th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/' + unitData.attack[i].icon + ') left top no-repeat');
  		} else {
  		  $('#attacks tbody tr:last-child th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/' + unitData.attack[i].name + '.png) left top no-repeat');
  		}
  		$('#attacks tbody tr:last-child th').html(unitData.attack[i].name + '<p>' + unitData.attack[i].range);
  		$('#attacks tbody tr:last-child td').html(unitData.attack[i].damage + '&nbsp;–&nbsp;' + unitData.attack[i].number + '<p>' + unitData.attack[i].type);
  	}

  	var resistances = ['blade', 'pierce', 'impact', 'fire', 'cold', 'arcane'];

  	$('#blade th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/sword-human.png) left top no-repeat');
  	$('#pierce th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/spear.png) left top no-repeat');
  	$('#impact th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/club.png) left top no-repeat');
  	$('#fire th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/fireball.png) left top no-repeat');
  	$('#cold th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/iceball.png) left top no-repeat');
  	$('#arcane th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/faerie-fire.png) left top no-repeat');

  	for (var i in resistances) {
  	  $('#'+resistances[i]+' td').html(100 - (resistanceData.resistance[0][resistances[i]]) + '%');
  	  if (unitData.resistance != null) {
  	    if (unitData.resistance[0][resistances[i]] != null) {
  		    $('#'+resistances[i]+' td').html(100 - (unitData.resistance[0][resistances[i]]) + '%'); 	
  		  }
  		}
    }

  	var defenses = [ 'castle', 'cave', 'reef', 'deep_water', 'flat', 'forest', 'frozen', 'hills', 'impassable', 'mountains', 'fungus', 'sand', 'shallow_water', 'swamp_water', 'unwalkable', 'village' ];		
    
  	for (var i in defenses) {
  	  if (resistanceData.defense != null) {
  	    if (resistanceData.defense[0][defenses[i]] != null) {
      	  Bestiary.adjustments[defenses[i]].defense = (100 - (resistanceData.defense[0][defenses[i]]) + '%');
      	  Bestiary.adjustments[defenses[i]].movement = (resistanceData.movement_costs[0][defenses[i]]);
        }
        else {
          Bestiary.adjustments[defenses[i]].defense = '—&nbsp;';
      	  Bestiary.adjustments[defenses[i]].movement = '–';
    	  }
  	  }
      if (unitData.defense != null) {
    	  if (unitData.defense[0][defenses[i]] != null) {
          Bestiary.adjustments[i].defense = (100 - (unitData.defense[0][defenses[i]]) + '%');
        }
      }
    
      if (unitData.movement_costs != null) {
    	  if (unitData.movement_costs[0][defenses[i]] != null) {
          Bestiary.adjustments[i].movement = (unitData.movement_costs[0][defenses[i]]);
        }
      }
    }
    
  sortTable('name');

  }
});