{"abilities":[{"hides":[{"filter_self":[{"filter_location":[{"time_of_day":"chaotic"}]}],"id":"nightstalk","name":"nightstalk","female_name":"nightstalk","description":"Nightstalk:\nThe unit becomes invisible during night.\n\nEnemy units cannot see this unit at night, except if they have units next to it. Any enemy unit that first discovers this unit immediately loses all its remaining movement.","name_inactive":"nightstalk","female_name_inactive":"female^nightstalk","description_inactive":"Nightstalk:\nThe unit becomes invisible during night.\n\nEnemy units cannot see this unit at night, except if they have units next to it. Any enemy unit that first discovers this unit immediately loses all its remaining movement.","affect_self":"yes"}],"skirmisher":[{"id":"skirmisher","name":"skirmisher","female_name":"female^skirmisher","description":"Skirmisher:\nThis unit is skilled in moving past enemies quickly, and ignores all enemy Zones of Control.","affect_self":"yes"}]}],"attack_anim":[{"filter_attack":[{"name":"claws"}],"frame":[{"duration":"25","image":"units/undead/shadow-s-2.png"},{"duration":"75","image":"units/undead/shadow-s-attack-1.png"},{"duration":"75","image":"units/undead/shadow-s-attack-2.png"},{"duration":"50","image":"units/undead/shadow-s-attack-3.png","sound":"wail-sml.wav"},{"duration":"75","image":"units/undead/shadow-s-attack-5.png"},{"duration":"200","image":"units/undead/shadow-s-attack-6.png"},{"duration":"100","image":"units/undead/shadow-s-attack-2.png"},{"duration":"100","image":"units/undead/shadow-s-attack-1.png"},{"duration":"25","image":"units/undead/shadow-s-2.png"}],"else":[{"frame":[{"duration":"50","image":"units/undead/shadow-s-attack-4.png","sound":"claws.ogg"}],"hits":"yes"}],"if":[{"frame":[{"duration":"50","image":"units/undead/shadow-s-attack-4.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"start_time":"-500","offset":"0.0~1.0:550,0.0:225","alpha":"0.8~0.7:350,0.7~0.0:200,0.0~0.8:225","direction":"s,se,sw"},{"filter_attack":[{"name":"claws"}],"frame":[{"duration":"25","image":"units/undead/shadow-n-2.png"},{"duration":"75","image":"units/undead/shadow-n-attack-1.png"},{"duration":"75","image":"units/undead/shadow-n-attack-2.png"},{"duration":"50","image":"units/undead/shadow-n-attack-3.png","sound":"wail-sml.wav"},{"duration":"75","image":"units/undead/shadow-n-attack-5.png"},{"duration":"200","image":"units/undead/shadow-n-attack-6.png"},{"duration":"100","image":"units/undead/shadow-n-attack-2.png"},{"duration":"100","image":"units/undead/shadow-n-attack-1.png"},{"duration":"25","image":"units/undead/shadow-n-2.png"}],"else":[{"frame":[{"duration":"50","image":"units/undead/shadow-n-attack-4.png","sound":"claws.ogg"}],"hits":"yes"}],"if":[{"frame":[{"duration":"50","image":"units/undead/shadow-n-attack-4.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"start_time":"-500","offset":"0.0~1.0:550,0.0:225","alpha":"0.8~0.7:350,0.7~0.0:200,0.0~0.8:225","direction":"n,ne,nw"}],"defend":[{"else":[{"frame":[{"duration":"1","image":"units/undead/shadow-s-2.png"},{"duration":"100","image":"units/undead/shadow-s-attack-1.png"},{"duration":"150","image":"units/undead/shadow-s-attack-1.png"},{"duration":"1","image":"units/undead/shadow-s-2.png"}],"hits":"miss","offset":"0.0~-0.1:126,-0.1~0.0:126","alpha":"0.8~0.25:126,0.25~0.8:126"}],"if":[{"frame":[{"duration":"1","image":"units/undead/shadow-s-2.png"},{"duration":"100","image":"units/undead/shadow-s-attack-1.png"},{"duration":"150","image":"units/undead/shadow-s-attack-1.png","sound":"wail-sml.wav"},{"duration":"1","image":"units/undead/shadow-s-2.png"}],"hits":"hit,kill","offset":"0.0~-0.05:126,-0.05~0.0:126","alpha":"0.8~0.5:126,0.5~0.8:126"}],"direction":"s,se,sw","start_time":"-126"},{"else":[{"frame":[{"duration":"1","image":"units/undead/shadow-n-2.png"},{"duration":"100","image":"units/undead/shadow-n-attack-1.png"},{"duration":"150","image":"units/undead/shadow-n-attack-1.png"},{"duration":"1","image":"units/undead/shadow-n-2.png"}],"hits":"miss","offset":"0.0~-0.1:126,-0.1~0.0:126","alpha":"0.8~0.25:126,0.25~0.8:126"}],"if":[{"frame":[{"duration":"1","image":"units/undead/shadow-n-2.png"},{"duration":"100","image":"units/undead/shadow-n-attack-1.png"},{"duration":"150","image":"units/undead/shadow-n-attack-1.png","sound":"wail-sml.wav"},{"duration":"1","image":"units/undead/shadow-n-2.png"}],"hits":"hit,kill","offset":"0.0~-0.05:126,-0.05~0.0:126","alpha":"0.8~0.5:126,0.5~0.8:126"}],"direction":"n,ne,nw","start_time":"-126"}],"attack":[{"specials":[{"damage":[{"id":"backstab","name":"backstab","description":"Backstab:\nWhen used offensively, this attack deals double damage if there is an enemy of the target on the opposite side of the target, and that unit is not incapacitated (turned to stone or otherwise paralyzed).","multiply":"2","backstab":"yes","active_on":"offense"}]}],"name":"claws","description":"claws","type":"blade","icon":"attacks/claws-undead.png","range":"melee","damage":"8","number":"3"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/undead/transparent/shadow.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/undead/transparent/shadow.png"}],"standing_anim":[{"frame":[{"duration":"250","image":"units/undead/shadow-s-2.png"},{"duration":"250","image":"units/undead/shadow-s-1.png"},{"duration":"250","image":"units/undead/shadow-s-2.png"},{"duration":"250","image":"units/undead/shadow-s-3.png"},{"duration":"250","image":"units/undead/shadow-s-2.png"},{"duration":"250","image":"units/undead/shadow-s-1.png"},{"duration":"250","image":"units/undead/shadow-s-2.png"},{"duration":"250","image":"units/undead/shadow-s-3.png"},{"duration":"250","image":"units/undead/shadow-s-2.png"},{"duration":"250","image":"units/undead/shadow-s-1.png"},{"duration":"250","image":"units/undead/shadow-s-2.png"},{"duration":"250","image":"units/undead/shadow-s-3.png"},{"duration":"250","image":"units/undead/shadow-s-2.png"},{"duration":"250","image":"units/undead/shadow-s-1.png"},{"duration":"250","image":"units/undead/shadow-s-2.png"},{"duration":"250","image":"units/undead/shadow-s-3.png"}],"direction":"s,se,sw","start_time":"0","alpha":"0.8~0.4:1400,0.4~0.6:600,0.6~0.4:600,0.4~0.8:1400"},{"frame":[{"duration":"250","image":"units/undead/shadow-n-2.png"},{"duration":"250","image":"units/undead/shadow-n-1.png"},{"duration":"250","image":"units/undead/shadow-n-2.png"},{"duration":"250","image":"units/undead/shadow-n-3.png"},{"duration":"250","image":"units/undead/shadow-n-2.png"},{"duration":"250","image":"units/undead/shadow-n-1.png"},{"duration":"250","image":"units/undead/shadow-n-2.png"},{"duration":"250","image":"units/undead/shadow-n-3.png"},{"duration":"250","image":"units/undead/shadow-n-2.png"},{"duration":"250","image":"units/undead/shadow-n-1.png"},{"duration":"250","image":"units/undead/shadow-n-2.png"},{"duration":"250","image":"units/undead/shadow-n-3.png"},{"duration":"250","image":"units/undead/shadow-n-2.png"},{"duration":"250","image":"units/undead/shadow-n-1.png"},{"duration":"250","image":"units/undead/shadow-n-2.png"},{"duration":"250","image":"units/undead/shadow-n-3.png"}],"direction":"n,ne,nw","start_time":"0","alpha":"0.8~0.4:1400,0.4~0.6:600,0.6~0.4:600,0.4~0.8:1400"}],"id":"Shadow","name":"Shadow","race":"undead","image":"units/undead/shadow-s-2.png","profile":"portraits/undead/shadow.png","flag_rgb":"magenta","hitpoints":"24","movement_type":"undeadspirit","movement":"7","experience":"100","level":"2","alignment":"chaotic","advances_to":"Nightgaunt","cost":"38","usage":"scout","description":"When light came into the world and gave form to the unknown, fear was forced to retreat into darkness. Since that day, the shadows of the world have held terror for humanity, though it knows not why.\n\nThat is a question which is easily answered by a necromancer.\n\nSpecial Notes: If there is an enemy of the target on the opposite side of the target while attacking it, this unit may backstab, inflicting double damage by creeping around behind that enemy. Spirits have very unusual resistances to damage, and move quite slowly over open water. This unit is able to hide at night, leaving no trace of its presence. This unit\u2019s skill at skirmishing allows it to ignore enemies\u2019 zones of control and thus move unhindered around them.","die_sound":"wail-long.wav"}