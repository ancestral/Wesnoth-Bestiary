{ String.prototype.capitalize = function()
  { return this.replace( /(^|\s|_)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
  };

  $(document).ready(function()
  { /*$('#advancement ul li').click(function()
  	{ //window.location.hash = ($.trim($(this).text()).replace(" ", "_"));
  	});

  	$('#sidebar p span').click(function()
  	{	$('#portrait img').removeClass('opaque');
		
  		$('#sidebar p span').css('background-color', 'transparent');
  		$(this).css('background-color', '#ffd');		

  		var imageToShow = $(this).attr('id').replace('portrait', 'pic');

  		console.log(imageToShow);

  		$('#portrait #'+imageToShow).addClass('opaque');

  		$('#sidebar p span').removeClass('selected');
  		$(this).addClass('selected');
  	});
  	*/
    $('select').change(function()
  	{ window.location = '#' + $('option:selected').text();
  	  $(window).load();
      return false;
  	});
  	
  	//$("#terraintypes").tablesorter(); 
  });
  
	
  $(window).load(function()
  { var get = window.location.hash.substring(1, window.location.hash.length);
    get = get.replace(/%20/g," ");
    get = get.replace(/_/g," ");
    window.location.hash = "#" + get.replace(/ /g,"_").toLowerCase();

    var unitFile = "data/units/" + $.trim(get).replace(/ /g, "_").toLowerCase() + ".js";
    
  	var unitMap = [];
  	var movementTypeMap = [];
  	var unitData = {};

  	$.ajax (
  	{ url: unitFile,
  	  async: false,
  	  dataType: 'json',
  	  success: function(data)
  	  { unitData = data;
  	  }
  	});
  	
    var resistanceFile = "data/movetypes/" + unitData.movement_type + ".js";
    
  	$.ajax (
  	{ url: resistanceFile,
  	  async: false,
  	  dataType: 'json',
  	  success: function(data)
  	  { resistanceData = data;
  	  }
  	});
    	
  	var d = unitData.description;
  	d = d.replace(/\n\n/g,"<br /><br />");
  	d = d.replace(/>([^:<]+):/,"><em>$1:</em>");
    d = d.replace(/SPECIAL_NOTE\^/,"");

  	$('#title').html(unitData.id);
  	$('#description p').html(d);
  	$('#race').html(unitData.race);
  	$('#alignment').html(unitData.alignment);
  	$('#level').html(unitData.level);
  	$('#cost').html(unitData.cost);
  	$('#hp').html(unitData.hitpoints);
  	$('#movement').html(unitData.movement);
  	$('#xp').html(unitData.experience);
				
  	$('#attacks').html("");
	
  	var buffer = "";
  	for (var i in unitData.attack)
  	{ buffer += ("<table cellpadding=\"0\" cellspacing=\"0\"><tbody><tr class=\"top-row\"><th style=\"background: transparent url(");
  		if (unitData.attack[i].icon)
  		{ buffer += unitData.attack[i].icon;
  		} else
  		{ buffer += "attacks/" + unitData.attack[i].name + ".png";
  		}
		
  		buffer += ") left center no-repeat\" rowspan=\"2\"></th><td class=\"weapon\">" + unitData.attack[i].name + "<td class=\"atk\">" + unitData.attack[i].damage + "&nbsp;–&nbsp;" + unitData.attack[i].number + "<tr class=\"bottom-row\"><td class=\"range\">" + unitData.attack[i].range + "<td class=\"type\">" + unitData.attack[i].type + "</table>";
  	}
  	if (buffer != "") { buffer = "<h3>Attacks</h3>" + buffer; }
  	$('#attacks').append(buffer);

  	if (unitData.portrait != null)
  	{ var tempImage = new Image();
  	  tempImage.src = unitData.portrait[0].image;

      //  $('#portrait').animate({height:tempImage.height},'slow');
    	  if (tempImage.width > 400)
      	{ $('#container').animate({width:tempImage.width + 396},'slow');
      	  $('#sidebar').animate({width:tempImage.width + 4},'slow');
      	} else
      	{ $('#container').animate({width:796},'slow');
      	  $('#sidebar').animate({width:404},'slow');
      	}

  	  $('#pic1').attr('src', unitData.portrait[0].image);
  	} else
  	{ $('#pic1').attr('src', 'images/transparent.png');
  	}

    $('#pic1').load(function()
    { //$('#portrait').animate({height:$('#pic1').height()},'slow');
  	  if ($('#pic1').width() > 400)
    	{ $('#container').animate({width:$('#pic1').width() + 396},'slow');
    	  $('#sidebar').animate({width:$('#pic1').width() + 4},'slow');
    	} else
    	{ //$('#container').animate({width:796},'slow');
    	  //$('#sidebar').animate({width:404},'slow');
    	}
    });

  	var resistances = ["blade", "pierce", "impact", "fire", "cold", "arcane"];

  	for (var i in resistances)
  	{ $('#'+resistances[i]).html(100 - (resistanceData.resistance[0][resistances[i]]).replace(/-/,"−") + "%");
  	  if (unitData.resistance != null)
  	  { if (unitData.resistance[0][resistances[i]] != null)
  		  { $('#'+resistances[i]).html(100 - (unitData.resistance[0][resistances[i]]).replace(/-/,"−") + "%"); 	
  		  }
  		}
	  }

  	var defenses = ["castle", "cave", "reef", "deep_water", "flat", "forest", "frozen", "hills", "impassable", "mountains", "fungus", "sand", "shallow_water", "swamp_water", "unwalkable", "village"];		
	
  	for (var i in defenses)
  	{ if (resistanceData.defense != null)
  	  { if (resistanceData.defense[0][defenses[i]])
      	{ $('#'+defenses[i]+' .percent').html(100 - (resistanceData.defense[0][defenses[i]]).replace(/-/,"−") + "%");
      	  $('#'+defenses[i]+' .movement').html(resistanceData.movement_costs[0][defenses[i]]);
        }
        else
        { $('#'+defenses[i]+' .percent').html("—&nbsp;&nbsp;");
      	  $('#'+defenses[i]+' .movement').html("–");
    	  }
  	  }
    	if (unitData.defense != null)
    	{ if (unitData.defense[0][defenses[i]] != null)
        { $('#'+defenses[i]+' .percent').html(100 - (unitData.defense[0][defenses[i]]).replace(/-/,"−") + "%");
        }
      }
      
      if (unitData.movement_costs != null)
    	{ if (unitData.movement_costs[0][defenses[i]] != null)
        { $('#'+defenses[i]+' .movement').html(unitData.movement_costs[0][defenses[i]]);
        }
      }
    }
  });
}
