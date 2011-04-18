{"attack_anim":[{"filter_attack":[{"name":"throwing knives"}],"else":[{"frame":[{"begin":"-150","end":"-100","image":"units/orcs/slayer-ranged1.png","sound":"throwing-knife-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-150","end":"-100","image":"units/orcs/slayer-ranged1.png","sound":"throwing-knife.ogg"}],"hits":"yes"},{"filter_second":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]}],"poisoned_sound_frame":[{"duration":"100","sound":"poison.ogg"}],"hits":"hit","poisoned_sound_start_time":"-100"}],"frame":[{"begin":"-100","end":"0","image":"units/orcs/slayer-ranged2.png"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/dagger-n.png","image_diagonal":"projectiles/dagger-ne.png"}]},{"filter_attack":[{"name":"dagger"}],"frame":[{"duration":"75","image":"units/orcs/slayer-attack-1.png"},{"duration":"75","image":"units/orcs/slayer-attack-2.png"},{"duration":"75","image":"units/orcs/slayer-attack-3.png"},{"duration":"50","image":"units/orcs/slayer-attack-5.png"},{"duration":"50","image":"units/orcs/slayer-attack-6.png"},{"duration":"75","image":"units/orcs/slayer-attack-7.png"},{"duration":"75","image":"units/orcs/slayer-attack-8.png"},{"duration":"75","image":"units/orcs/slayer-attack-9.png"},{"duration":"75","image":"units/orcs/slayer-attack-10.png"},{"duration":"75","image":"units/orcs/slayer-attack-11.png"},{"duration":"65","image":"units/orcs/slayer-attack-12.png"},{"duration":"55","image":"units/orcs/slayer-attack-13.png"},{"duration":"50","image":"units/orcs/slayer-attack-14.png"}],"else":[{"frame":[{"duration":"75","image":"units/orcs/slayer-attack-4.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"75","image":"units/orcs/slayer-attack-4.png","sound":"dagger-swish.wav"}],"hits":"yes"}],"start_time":"-250","offset":"0.0~0.3:200,0.3~0.7:150,0.7~0.5:150,0.5~0.2:275,0.2~0.0:125"}],"defend":[{"frame":[{"duration":"1","image":"units/orcs/slayer.png"},{"duration":"100","image":"units/orcs/slayer-defend.png"},{"duration":"1","image":"units/orcs/slayer.png"}],"else":[{"frame":[{"duration":"150","image":"units/orcs/slayer-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/orcs/slayer-defend.png","sound":"orc-hit-1.ogg,orc-hit-2.ogg,orc-hit-3.ogg,orc-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"resistance":[{"arcane":"100"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"dagger","description":"dagger","icon":"attacks/dagger-orcish.png","type":"blade","range":"melee","damage":"9","number":"2"},{"specials":[{"chance_to_hit":[{"id":"marksman","name":"marksman","description":"Marksman:\nWhen used offensively, this attack always has at least a 60% chance to hit.","value":"60","cumulative":"yes","active_on":"offense"}],"poison":[{"id":"poison","name":"poison","description":"Poison:\nThis attack poisons living targets. Poisoned units lose 8 HP every turn until they are cured or are reduced to 1 HP. Poison can not, of itself, kill a unit."}]}],"name":"throwing knives","description":"throwing knives","icon":"attacks/dagger-thrown-poison-orcish.png","type":"blade","range":"ranged","damage":"6","number":"3"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/orcs/transparent/slayer.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/orcs/transparent/slayer.png"}],"id":"Orcish Slayer","name":"Orcish Slayer","race":"orc","image":"units/orcs/slayer.png","flag_rgb":"magenta","profile":"portraits/orcs/slayer.png","hitpoints":"36","movement_type":"elusivefoot","movement":"6","experience":"150","level":"2","alignment":"chaotic","advances_to":"null","cost":"33","usage":"mixed fighter","description":"The larger or more skilled orcish assassins are called \u2018Slayers\u2019 by their enemies. Slayers are fast on their feet, and quite nimble in combat, although they achieve that end by forgoing armor. Their weapon of choice, poison, is a vicious tool, and its common use on the battlefield is often the real cause of orcish supremacy.\n\nSpecial Notes: This unit\u2019s marksmanship gives it a high chance of hitting targeted enemies, but only on the attack. The victims of this unit\u2019s poison will continually take damage until they can be cured in town or by a unit which cures.","die_sound":"orc-die-1.ogg,orc-die-2.ogg,orc-die-3.ogg"}