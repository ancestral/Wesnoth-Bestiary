var Bestiary = {
  load: function() {
    Bestiary.unitFile = 'data/units/' + window.location.pathname.split('/')[2] + '.json';
    Bestiary.resistanceFile = '';
    var coolpage1 = [ 'Ancient Lich', 'Mermaid Enchantress', 'Mudcrawler', 'Orcish Sovereign', 'Sea Serpent', 'Troll Shaman', 'Woodsman', 'Young Ogre' ];
    var faction = [ 'drakes', 'khalifate', 'knalgan_alliance', 'loyalists', 'northerners', 'rebels', 'undead' ];
    Bestiary.faction = {
      misc: {
        recruit: coolpage1
      }
    }
  	$('#advancement').html('');
    var imgs = [];
    $.getJSON(Bestiary.unitFile).done(function(data) {
      Bestiary.unitData = data;
      resistanceFile = 'data/movetypes/' + Bestiary.unitData.movement_type + '.json';
    	$.getJSON(resistanceFile).done(function(data) {  	  
  	    Bestiary.resistanceData = data;

        var jxhr = [];
        var result = [];
        
        for (var i in faction) {
          jxhr.push($.getJSON('data/factions/' + faction[i] + '.json').done(function(data) {
            data.recruit = data.recruit.split(',');
            result.push(data);
          }));
        }
        
        $.when.apply($, jxhr).done(function() {
          for (var i in result) {
            var id = result[i].id.slugify();
            Bestiary.faction[id] = result[i];
          }
          Bestiary.setup();
        });
      });
    });
  },
  setup: function() {
    $('#portrait').hide();
    
  	var d = Bestiary.unitData.description;
  	d = d.replace(/\n\n/g,'<br /><br />')
  	  .replace(/>([^:<]+):/,'><em>$1:</em>')
      .replace(/SPECIAL_NOTE\^/,'');

  	$('#title').html(Bestiary.unitData.id);
  	$('#description + p').html(d);
  	$('#race td').html(Bestiary.unitData.race);
  	$('#alignment td').html(Bestiary.unitData.alignment);
  	$('#level td').html(Bestiary.unitData.level);
  	$('#cost td').html(Bestiary.unitData.cost);
  	$('#hitpoints td').html(Bestiary.unitData.hitpoints);
  	$('#movement td').html(Bestiary.unitData.movement);
  	$('#experience td').html(Bestiary.unitData.experience);
		
  	if (typeof Bestiary.unitData.profile !== 'undefined') {
      $('#portrait').attr('src', (Bestiary.dataDirectory + 'core/images/' + Bestiary.dropLast(Bestiary.unitData.profile.split('~')[0])));
  		$('#portrait').show();
    } else {
      $('#portrait').attr('src', (Bestiary.dataDirectory + 'core/images/' + Bestiary.unitData.image));
      $('#portrait').attr('height', '400px');
      $('#portrait').show();
    }	
  	$('#attacks tbody').html('');
  	$('#advancement').html('<li id="current"></li>');
  	$('#current').html(Bestiary.unitData.name.split('^').slice(-1)[0]);

    if (Bestiary.unitData.advances_to !== 'null') {
      var advances_to = Bestiary.unitData.advances_to.split(',')
      if ($('advancement').length < 1) {
        for (var i in advances_to) {
      	  that = Bestiary.unitData.advances_to.split(',')[i];
          $('#advancement').append('<li class="next">' + that + '</li>');
      	}
      }
    }
  	$('#current').css('background', '#ffd url(' + Bestiary.dataDirectory + 'core/images/' + Bestiary.unitData.image + ') top center no-repeat');
  	$('.next').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/units/unknown-unit.png) top center no-repeat');

  	for (var i in Bestiary.unitData.attack) {
  	  $('#attacks tbody').append('<tr><th><td>');
  		if (Bestiary.unitData.attack[i].icon) {
  		  $('#attacks tbody tr:last-child th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/' + Bestiary.unitData.attack[i].icon + ') left top no-repeat');
  		} else {
  		  $('#attacks tbody tr:last-child th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/' + Bestiary.unitData.attack[i].name + '.png) left top no-repeat');
  		}
  		$('#attacks tbody tr:last-child th').html(Bestiary.unitData.attack[i].name + '<p>' + Bestiary.unitData.attack[i].range);
  		$('#attacks tbody tr:last-child td').html(Bestiary.unitData.attack[i].damage + '&nbsp;–&nbsp;' + Bestiary.unitData.attack[i].number + '<p>' + Bestiary.unitData.attack[i].type);
  	}

  	var resistances = ['blade', 'pierce', 'impact', 'fire', 'cold', 'arcane'];

  	$('#blade th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/sword-human.png) left top no-repeat');
  	$('#pierce th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/spear.png) left top no-repeat');
  	$('#impact th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/club.png) left top no-repeat');
  	$('#fire th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/fireball.png) left top no-repeat');
  	$('#cold th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/iceball.png) left top no-repeat');
  	$('#arcane th').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/attacks/faerie-fire.png) left top no-repeat');

  	for (var i in resistances) {
  	  $('#'+resistances[i]+' td').html(100 - parseInt(Bestiary.resistanceData.resistance[0][resistances[i]]) + '%');
  	  if (Bestiary.unitData.resistance != null) {
  	    if (Bestiary.unitData.resistance[0][resistances[i]] != null) {
  		    $('#'+resistances[i]+' td').html(100 - parseInt(Bestiary.unitData.resistance[0][resistances[i]]) + '%'); 	
  		  }
  		}
    }

  	var defenses = [ 'castle', 'cave', 'reef', 'deep_water', 'flat', 'forest', 'frozen', 'hills', 'impassable', 'mountains', 'fungus', 'sand', 'shallow_water', 'swamp_water', 'unwalkable', 'village' ];		
    
    for (var i in defenses) {
  	  if (Bestiary.resistanceData.defense) {
  	    if (Bestiary.resistanceData.defense[0][defenses[i]]) {
      	  Bestiary.adjustments[defenses[i]].defense = (100 - parseInt(Bestiary.resistanceData.defense[0][defenses[i]]) + '%');
      	  Bestiary.adjustments[defenses[i]].movement = parseInt(Bestiary.resistanceData.movement_costs[0][defenses[i]]);
        }
        else {
          Bestiary.adjustments[defenses[i]].defense = '<span class="emdash"></span>';
      	  Bestiary.adjustments[defenses[i]].movement = '<span class="figuredash"></span>';
    	  }
  	  }
      if (Bestiary.unitData.defense) {
    	  if (Bestiary.unitData.defense[0][defenses[i]]) {
          Bestiary.adjustments[defenses[i]].defense = (100 - parseInt(Bestiary.unitData.defense[0][defenses[i]]) + '%');
        }
      }
    
      if (Bestiary.unitData.movement_costs) {
    	  if (Bestiary.unitData.movement_costs[0][defenses[i]]) {
          Bestiary.adjustments[defenses[i]].movement = parseInt(Bestiary.unitData.movement_costs[0][defenses[i]]);
        }
      }
      
      $('#' + defenses[i] + ' th + td').html(Bestiary.adjustments[defenses[i]].defense);
      $('#' + defenses[i] + ' th + td + td').html(Bestiary.adjustments[defenses[i]].movement);
    }
    $('#terrainadjustments').trigger('update').tablesorter({
      sortList: [[0,0]],
      headers: {
        0: {
          lockedOrder: 'asc'
        }
      }
    });
  },
  dropLast: function(path) {
    last = path.lastIndexOf('/');
    if ((last !== -1) && (path.substring(last - 11, last) !== 'transparent')) {
      path = path.substr(0, last) + '/transparent' + path.substr(last);
    }
    return path;
  },
  dataDirectory: '../data/',
  adjustments: {
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
  },
  unitData: {},
  unitFile: {},
  resistanceData: {},
  state: {}
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
  var queryUnit = $.QueryString['unit'];
  if (queryUnit) {
    queryUnit = queryUnit.toLowerCase();
  }
  else {
    queryUnit = window.location.pathname.split('/')[2]    
  }
  Bestiary.state = { unit: queryUnit };
  history.replaceState(Bestiary.state, queryUnit, queryUnit);
  Bestiary.load();
});

$(function() {  
  $(['../data/core/images/units/unknown-unit.png', 
     '../data/core/images/attacks/sword-human.png',
     '../data/core/images/attacks/spear.png',
     '../data/core/images/attacks/club.png',
     '../data/core/images/attacks/fireball.png',
     '../data/core/images/attacks/iceball.png',
     '../data/core/images/attacks/faerie-fire.png'
  ]).preload(); 
  $(document).on('click', '.next', function() {
    var next = $(this).html().slugify();
    history.pushState({ unit: next }, next, next);
    Bestiary.load();
  });
  
  $('nav a').click(function() {
    $('nav a').trigger('mouseenter');
  })
  
  $('nav a').mouseenter(function() {
    if (!$(this).hasClass('hovered') && !$(this).hasClass('selected')) {
      $('nav a').removeClass('hovered');
      $(this).addClass('hovered');
      var that = $(this).html().slugify();
      var recruits = Bestiary.faction[that].recruit;
      $('#browserUnits').html('');
      for (var i in recruits) {
        $('#browserUnits').append('<li class="next">' + recruits[i] + '</li>');
      	$('.next').css('background', 'transparent url() top center no-repeat');
        $('.next').css('background', 'transparent url(' + Bestiary.dataDirectory + 'core/images/units/unknown-unit.png) top center no-repeat');
      }
    }
    if ($('#browser').is(':hidden')) {
      if (!$(this).hasClass('selected')) {
        $('#browser').slideDown();        
      }
    }
  });
  
  $('#content').mouseenter(function() {
    $('#browser').slideUp();
  });
});

window.onpopstate = function() {
  Bestiary.load();
}

String.prototype.slugify= function() {
  var str = this;
  str = str.replace(/[\s|%20|\-]+/g, '_').toLowerCase();
  return str
};

$.fn.preload = function() {
  this.each(function(){
    $('<img/>')[0].src = this;
  });
}