{"abilities":[{"leadership":[{"affect_adjacent":[{"filter":[{"level":"0"}],"adjacent":"n,ne,se,s,sw,nw"}],"id":"leadership","value":"75","cumulative":"no","name":"leadership","female_name":"female^leadership","description":"Leadership:\nThis unit can lead our own units that are next to it, making them fight better.\n\nAdjacent own units of lower level will do more damage in battle. When a unit adjacent to, of a lower level than, and on the same side as a unit with Leadership engages in combat, its attacks do 25% more damage times the difference in their levels.","affect_self":"no"},{"affect_adjacent":[{"filter":[{"level":"1"}],"adjacent":"n,ne,se,s,sw,nw"}],"id":"leadership","value":"50","cumulative":"no","affect_self":"no"},{"affect_adjacent":[{"filter":[{"level":"2"}],"adjacent":"n,ne,se,s,sw,nw"}],"id":"leadership","value":"25","cumulative":"no","affect_self":"no"}]}],"attack_anim":[{"filter_attack":[{"name":"bow"}],"frame":[{"begin":"-445","end":"-380","image":"units/elves-wood/marshal-bow.png"},{"begin":"-380","end":"-305","image":"units/elves-wood/marshal-bow-attack1.png","sound":"bow.ogg"},{"begin":"-305","end":"-230","image":"units/elves-wood/marshal-bow-attack2.png"},{"begin":"-230","end":"-130","image":"units/elves-wood/marshal-bow-attack3.png"},{"begin":"-130","end":"0","image":"units/elves-wood/marshal-bow-attack4.png"},{"begin":"0","end":"65","image":"units/elves-wood/marshal-bow.png"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}],"hits":"yes"},{"filter_attack":[{"name":"bow"}],"frame":[{"begin":"-445","end":"-380","image":"units/elves-wood/marshal-bow.png"},{"begin":"-380","end":"-305","image":"units/elves-wood/marshal-bow-attack1.png","sound":"bow-miss.ogg"},{"begin":"-305","end":"-230","image":"units/elves-wood/marshal-bow-attack2.png"},{"begin":"-230","end":"-130","image":"units/elves-wood/marshal-bow-attack3.png"},{"begin":"-130","end":"0","image":"units/elves-wood/marshal-bow-attack4.png"},{"begin":"0","end":"65","image":"units/elves-wood/marshal-bow.png"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}],"hits":"no"},{"filter_attack":[{"name":"sword"}],"frame":[{"begin":"-175","end":"-100","image":"units/elves-wood/marshal-melee-2.png"},{"begin":"75","end":"150","image":"units/elves-wood/marshal-melee-2.png"},{"begin":"150","end":"200","image":"units/elves-wood/marshal.png"}],"else":[{"frame":[{"begin":"-100","end":"75","image":"units/elves-wood/marshal-melee-1.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"75","image":"units/elves-wood/marshal-melee-1.png","sound":"sword-1.ogg"}],"hits":"yes"}]}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/elves-wood/marshal.png"},{"duration":"100","image":"units/elves-wood/marshal-defend.png"},{"duration":"1","image":"units/elves-wood/marshal.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/marshal-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/marshal-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/elves-wood/marshal-bow.png"},{"duration":"100","image":"units/elves-wood/marshal-bow-defend.png"},{"duration":"1","image":"units/elves-wood/marshal-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/marshal-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/marshal-bow-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"sword","description":"sword","icon":"attacks/sword-elven.png","type":"blade","range":"melee","damage":"10","number":"4"},{"name":"bow","description":"bow","icon":"attacks/bow-elven.png","type":"pierce","range":"ranged","damage":"8","number":"3"}],"defense":[{"forest":"40"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/elves/transparent/captain.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/elves/transparent/captain.png"}],"leading_anim":[{"frame":[{"begin":"-150","end":"150","image":"units/elves-wood/marshal-leading.png"}]}],"id":"Elvish Marshal","name":"Elvish Marshal","race":"elf","image":"units/elves-wood/marshal.png","profile":"portraits/elves/captain.png","flag_rgb":"magenta","hitpoints":"62","movement_type":"woodland","movement":"5","experience":"150","level":"3","alignment":"neutral","advances_to":"null","cost":"55","usage":"fighter","description":"The longevity and natural intelligence of elves make them apt for military matters, enough even to counter their general distaste for war. Elves remember things much more clearly than humankind, and can often intuit what others can only be trained to do. Certainly, on those rare occasions when an elf sets his mind to war, the strategy that results is often the work of a master.\n\nSpecial Notes: The leadership of this unit enables adjacent units of the same side to deal more damage in combat, though this only applies to units of lower level.","die_sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}