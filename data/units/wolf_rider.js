{"movement_anim":[{"frame":[{"begin":"0","end":"150","image":"units/goblins/wolf-rider-moving.png"}]}],"idle_anim":[{"filter":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]},{"filter_adjacent":[{"is_enemy":"yes","count":"0"}]}],"frame":[{"duration":"100","image":"units/goblins/wolf-rider-idle-1.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-2.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-3.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-4.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-5.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-4.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-3.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-4.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-5.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-4.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-3.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-2.png"},{"duration":"100","image":"units/goblins/wolf-rider-idle-1.png"}],"start_time":"0"}],"attack_anim":[{"filter_attack":[{"name":"fangs"}],"frame":[{"begin":"-350","end":"-250","image":"units/goblins/wolf-rider.png","sound":"wolf-growl-1.ogg,wolf-growl-2.ogg,wolf-growl-3.ogg,wolf-growl-4.ogg"},{"begin":"-250","end":"-100","image":"units/goblins/wolf-rider-attack.png"},{"begin":"-50","end":"200","image":"units/goblins/wolf-rider-moving.png"},{"begin":"200","end":"250","image":"units/goblins/wolf-rider.png"}],"else":[{"frame":[{"begin":"-100","end":"-50","image":"units/goblins/wolf-rider-attack.png","sound":"bite.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-100","end":"-50","image":"units/goblins/wolf-rider-attack.png"}],"hits":"no"}],"offset":"0.0~-0.1:100,-0.1~0.0:50,0.0~0.3:50,0.3~0.5:100,0.5~0.6:50,0.6~0.4:100,0.4~0.2:50,0.2~0.0:100"}],"defend":[{"frame":[{"duration":"1","image":"units/goblins/wolf-rider-defend-1.png"},{"duration":"100","image":"units/goblins/wolf-rider-defend-2.png"},{"duration":"1","image":"units/goblins/wolf-rider-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/goblins/wolf-rider-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/goblins/wolf-rider-defend-2.png","sound":"wolf-hit-1.ogg,wolf-hit-2.ogg,wolf-hit-3.ogg,wolf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"fangs","description":"fangs","icon":"attacks/fangs-animal.png","type":"blade","range":"melee","damage":"5","number":"3"}],"defense":[{"village":"50"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/goblins/transparent/wolf-rider.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/goblins/transparent/wolf-rider.png"}],"standing_anim":[{"frame":[{"image":"units/goblins/wolf-rider.png","duration":"50"}],"start_time":"-50"},{"frame":[{"image":"units/goblins/wolf-rider-water.png","duration":"50"}],"start_time":"-50","terrain_type":"Wo,Ww,Ww^Vm,Chs,Chw,Ss"}],"id":"Wolf Rider","name":"Wolf Rider","race":"wolf","image":"units/goblins/wolf-rider.png","profile":"portraits/goblins/wolf-rider.png","flag_rgb":"magenta","ellipse":"misc/ellipse","hitpoints":"32","movement_type":"orcishfoot","movement":"8","experience":"30","level":"1","alignment":"chaotic","advances_to":"Goblin Knight,Goblin Pillager","undead_variation":"mounted","cost":"17","usage":"scout","description":"No one is quite sure how the practice of taming and riding wolves came into being, but the advantages of it for a goblin are obvious. Goblins are smaller and much weaker than their orcish kin, and are often tasked to the most dangerous and unwanted parts of a fight. Any who can manage to win themselves a mount have a much safer, and daresay, more amusing role in combat.\n\nWolves, likely, could never support the weight of a man in plate, but a goblin in leather armor is a simple load to bear. Quite unlike horses, these mounts have a rather easy time traversing the mountains, though water and woods will still slow them down.","die_sound":"wolf-die-1.ogg,wolf-die-2.ogg,wolf-die-3.ogg,wolf-die-4.ogg"}