{"abilities":[{"leadership":[{"affect_adjacent":[{"filter":[{"level":"0"}],"adjacent":"n,ne,se,s,sw,nw"}],"id":"leadership","value":"75","cumulative":"no","name":"leadership","female_name":"female^leadership","description":"Leadership:\nThis unit can lead our own units that are next to it, making them fight better.\n\nAdjacent own units of lower level will do more damage in battle. When a unit adjacent to, of a lower level than, and on the same side as a unit with Leadership engages in combat, its attacks do 25% more damage times the difference in their levels.","affect_self":"no"},{"affect_adjacent":[{"filter":[{"level":"1"}],"adjacent":"n,ne,se,s,sw,nw"}],"id":"leadership","value":"50","cumulative":"no","affect_self":"no"},{"affect_adjacent":[{"filter":[{"level":"2"}],"adjacent":"n,ne,se,s,sw,nw"}],"id":"leadership","value":"25","cumulative":"no","affect_self":"no"}]}],"attack_anim":[{"filter_attack":[{"name":"crossbow"}],"else":[{"frame":[{"begin":"-300","end":"-150","image":"units/orcs/sovereign-ranged-attack-1.png","sound":"crossbow-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-300","end":"-150","image":"units/orcs/sovereign-ranged-attack-1.png","sound":"crossbow.ogg"}],"hits":"yes"}],"frame":[{"begin":"-150","end":"0","image":"units/orcs/sovereign-ranged-attack-2.png"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}]},{"filter_attack":[{"name":"greatsword"}],"frame":[{"duration":"50","image":"units/orcs/sovereign.png"},{"duration":"50","image":"units/orcs/sovereign-defend-1.png"},{"duration":"100","image":"units/orcs/sovereign-attack-1.png"},{"duration":"100","image":"units/orcs/sovereign-attack-3.png"},{"duration":"20","image":"units/orcs/sovereign-attack-4.png"},{"duration":"30","image":"units/orcs/sovereign-attack-4.png"},{"duration":"75","image":"units/orcs/sovereign-attack-5.png"},{"duration":"75","image":"units/orcs/sovereign.png"}],"else":[{"frame":[{"duration":"75","image":"units/orcs/sovereign-attack-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"75","image":"units/orcs/sovereign-attack-2.png","sound":"sword-1.ogg"}],"hits":"yes"}],"offset":"0.0~0.15:100,0.15~0.35:100,0.35~0.45:75,0.45~0.5:100,0.5:20,0.5~0.4:30,0.4~0.2:75,0.2~0.0:75","start_time":"-300"}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/orcs/sovereign-defend-1.png"},{"duration":"100","image":"units/orcs/sovereign-defend-2.png"},{"duration":"1","image":"units/orcs/sovereign-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/orcs/sovereign-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/orcs/sovereign-defend-2.png","sound":"orc-hit-1.ogg,orc-hit-2.ogg,orc-hit-3.ogg,orc-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/orcs/sovereign-ranged.png"},{"duration":"100","image":"units/orcs/sovereign-ranged-defend.png"},{"duration":"1","image":"units/orcs/sovereign-ranged.png"}],"else":[{"frame":[{"duration":"150","image":"units/orcs/sovereign-ranged-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/orcs/sovereign-ranged-defend.png","sound":"orc-hit-1.ogg,orc-hit-2.ogg,orc-hit-3.ogg,orc-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"greatsword","description":"greatsword","icon":"attacks/greatsword-orcish.png","type":"blade","range":"melee","damage":"10","number":"4"},{"name":"crossbow","description":"crossbow","icon":"attacks/crossbow-orcish.png","type":"pierce","range":"ranged","damage":"9","number":"3"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/orcs/transparent/leader.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/orcs/transparent/leader.png"}],"leading_anim":[{"frame":[{"duration":"1","image":"units/orcs/sovereign-lead-1.png"},{"duration":"100","image":"units/orcs/sovereign-lead-2.png"},{"duration":"150","image":"units/orcs/sovereign-lead-2.png"},{"duration":"1","image":"units/orcs/sovereign-lead-1.png"}],"halo_frame":[{"begin":"-120","end":"-100","halo":"","halo_x":"0","halo_y":"-30"},{"begin":"-100","end":"-80","halo":"halo/misc/leadership-flare-1.png","halo_x":"0","halo_y":"-30"},{"begin":"-80","end":"-60","halo":"halo/misc/leadership-flare-2.png","halo_x":"0","halo_y":"-30"},{"begin":"-60","end":"-40","halo":"halo/misc/leadership-flare-3.png","halo_x":"0","halo_y":"-30"},{"begin":"-40","end":"-20","halo":"halo/misc/leadership-flare-4.png","halo_x":"0","halo_y":"-30"},{"begin":"-20","end":"0","halo":"halo/misc/leadership-flare-5.png","halo_x":"0","halo_y":"-30"},{"begin":"0","end":"20","halo":"halo/misc/leadership-flare-6.png","halo_x":"0","halo_y":"-30"},{"begin":"20","end":"40","halo":"halo/misc/leadership-flare-7.png","halo_x":"0","halo_y":"-30"},{"begin":"40","end":"60","halo":"halo/misc/leadership-flare-8.png","halo_x":"0","halo_y":"-30"},{"begin":"60","end":"80","halo":"halo/misc/leadership-flare-9.png","halo_x":"0","halo_y":"-30"},{"begin":"80","end":"100","halo":"halo/misc/leadership-flare-10.png","halo_x":"0","halo_y":"-30"},{"begin":"100","end":"120","halo":"halo/misc/leadership-flare-11.png","halo_x":"0","halo_y":"-30"},{"begin":"120","end":"140","halo":"halo/misc/leadership-flare-12.png","halo_x":"0","halo_y":"-30"},{"begin":"140","end":"160","halo":"halo/misc/leadership-flare-13.png","halo_x":"0","halo_y":"-30"},{"begin":"160","end":"200","halo":"","halo_x":"0","halo_y":"-30"}],"start_time":"-126"}],"id":"Orcish Sovereign","name":"Orcish Sovereign","race":"orc","image":"units/orcs/sovereign.png","profile":"portraits/orcs/leader.png","flag_rgb":"magenta","hitpoints":"75","movement_type":"orcishfoot","movement":"6","experience":"150","level":"3","alignment":"chaotic","advances_to":"null","cost":"50","usage":"mixed fighter","description":"From time to time, an orc will arise who has a natural charisma and command over his ilk. If he is also strong and cunning enough to survive early leadership struggles, he will inevitably find himself leading a great horde of warriors, and he will also inevitably cause a great deal of trouble for the civilized races of the world. The surest way to disperse such a host is to slay this rare orc who can hold it together.\n\nSpecial Notes: The leadership of this unit enables adjacent units of the same side to deal more damage in combat, though this only applies to units of lower level.","die_sound":"orc-die-1.ogg,orc-die-2.ogg,orc-die-3.ogg"}