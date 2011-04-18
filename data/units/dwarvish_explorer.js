{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/dwarves/transparent/explorer.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/dwarves/transparent/explorer.png"}],"defend":[{"frame":[{"duration":"1","image":"units/dwarves/explorer-defend-1.png"},{"duration":"100","image":"units/dwarves/explorer-defend-2.png"},{"duration":"1","image":"units/dwarves/explorer-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/explorer-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/explorer-defend-2.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"battle axe","description":"battle axe","type":"blade","range":"melee","damage":"10","number":"3","icon":"attacks/battleaxe.png"},{"name":"axe","description":"axe","type":"blade","range":"ranged","damage":"11","number":"3"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack_anim":[{"filter_attack":[{"range":"ranged","name":"axe"}],"else":[{"frame":[{"begin":"-100","end":"100","image":"units/dwarves/explorer-ranged-2.png","sound":"hatchet-miss.wav"}],"hits":"no"}],"frame":[{"begin":"-300","end":"-100","image":"units/dwarves/explorer-ranged-1.png"},{"begin":"0","end":"100","image":"units/dwarves/explorer-ranged-3.png"}],"if":[{"frame":[{"begin":"-100","end":"100","image":"units/dwarves/explorer-ranged-2.png","sound":"hatchet.wav"}],"hits":"yes"}],"missile_frame":[{"begin":"-200","end":"-150","image":"projectiles/hatchet-2.png","image_diagonal":"projectiles/hatchet-2.png"},{"begin":"-150","end":"-100","image":"projectiles/hatchet-3.png","image_diagonal":"projectiles/hatchet-3.png"},{"begin":"-100","end":"-50","image":"projectiles/hatchet-4.png","image_diagonal":"projectiles/hatchet-4.png"},{"begin":"-50","end":"0","image":"projectiles/hatchet-1.png","image_diagonal":"projectiles/hatchet-1.png"}]},{"filter_attack":[{"range":"melee","name":"battle axe"}],"frame":[{"duration":"80","image":"units/dwarves/explorer-melee-1.png"},{"duration":"80","image":"units/dwarves/explorer-melee-2.png"},{"duration":"50","image":"units/dwarves/explorer-melee-3.png"},{"duration":"100","image":"units/dwarves/explorer-melee-5.png"},{"duration":"100","image":"units/dwarves/explorer-melee-6.png"}],"else":[{"frame":[{"duration":"50","image":"units/dwarves/explorer-melee-4.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"50","image":"units/dwarves/explorer-melee-4.png","sound":"axe.ogg"}],"hits":"yes"}],"start_time":"-260","offset":"0.0~0.1:210,0.1~0.6:150,0.6~0.0:150"}],"id":"Dwarvish Explorer","name":"Dwarvish Explorer","race":"dwarf","image":"units/dwarves/explorer.png","profile":"portraits/dwarves/explorer.png","flag_rgb":"magenta","hitpoints":"60","movement_type":"dwarvishfoot","movement":"5","experience":"150","level":"3","alignment":"neutral","advances_to":"null","cost":"45","usage":"scout","description":"Dwarvish Explorers are peerless survivalists. Using only the equipment they carry, they can range for months around the forests and mountains looking for new seams of ore and deposits of minerals. Whilst their skill in a melee is less than some other dwarves, they are unmatched with throwing axes, having practiced this skill hunting in the mountains. Their maneuverability makes them dangerous and tricky foes.","die_sound":"dwarf-die-1.ogg,dwarf-die-2.ogg"}