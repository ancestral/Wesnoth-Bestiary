{"movement_anim":[{"frame":[{"begin":"0","end":"150","image":"units/goblins/pillager-moving.png"}]}],"attack_anim":[{"filter_attack":[{"name":"net"}],"else":[{"frame":[{"begin":"-150","end":"-75","image":"units/goblins/pillager-attack2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"frame":[{"begin":"-200","end":"-150","image":"units/goblins/pillager-defend-1.png"},{"begin":"-75","end":"100","image":"units/goblins/pillager.png"}],"if":[{"frame":[{"begin":"-150","end":"-75","image":"units/goblins/pillager-attack2.png","sound":"net.wav"}],"hits":"yes"},{"filter_second":[{"not":[{"filter_wml":[{"status":[{"slowed":"yes"}]}]}]}],"slowed_sound_frame":[{"duration":"100","sound":"slowed.wav"}],"hits":"hit","slowed_sound_start_time":"-100"}],"missile_frame":[{"begin":"-200","end":"0","image":"projectiles/web.png","image_diagonal":"projectiles/web.png"}]},{"filter_attack":[{"name":"torch"}],"frame":[{"begin":"-100","end":"50","image":"units/goblins/pillager-attack.png"},{"begin":"50","end":"150","image":"units/goblins/pillager-moving.png"}],"else":[{"frame":[{"begin":"-200","end":"-100","image":"units/goblins/pillager-moving.png","sound":"torch-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-200","end":"-100","image":"units/goblins/pillager-moving.png","sound":"torch.ogg"}],"hits":"yes"}]},{"filter_attack":[{"name":"fangs"}],"frame":[{"begin":"-350","end":"-250","image":"units/goblins/pillager.png","sound":"wolf-growl-1.ogg,wolf-growl-2.ogg,wolf-growl-3.ogg,wolf-growl-4.ogg"},{"begin":"-250","end":"-100","image":"units/goblins/pillager-attack.png"},{"begin":"-50","end":"200","image":"units/goblins/pillager-moving.png"},{"begin":"200","end":"250","image":"units/goblins/pillager.png"}],"else":[{"frame":[{"begin":"-100","end":"-50","image":"units/goblins/pillager-attack.png","sound":"bite.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-100","end":"-50","image":"units/goblins/pillager-attack.png"}],"hits":"no"}],"offset":"0.0~-0.1:100,-0.1~0.0:50,0.0~0.3:50,0.3~0.5:100,0.5~0.6:50,0.6~0.4:100,0.4~0.2:50,0.2~0.0:100"}],"defend":[{"frame":[{"duration":"1","image":"units/goblins/pillager-defend-1.png"},{"duration":"100","image":"units/goblins/pillager-defend-2.png"},{"duration":"1","image":"units/goblins/pillager-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/goblins/pillager-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/goblins/pillager-defend-2.png","sound":"wolf-hit-1.ogg,wolf-hit-2.ogg,wolf-hit-3.ogg,wolf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"fangs","description":"fangs","icon":"attacks/fangs-animal.png","type":"blade","range":"melee","damage":"5","number":"3"},{"name":"torch","description":"torch","icon":"attacks/torch.png","type":"fire","range":"melee","damage":"7","number":"3"},{"specials":[{"slow":[{"id":"slow","name":"slows","description":"Slow:\nThis attack slows the target until it ends a turn. Slow halves the damage caused by attacks and the movement cost for a slowed unit is doubled. A unit that is slowed will feature a snail icon in its sidebar information when it is selected."}]}],"name":"net","description":"net","type":"impact","damage":"6","number":"2","range":"ranged","icon":"attacks/net.png"}],"defense":[{"village":"50"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/goblins/transparent/pillager.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/goblins/transparent/pillager.png"}],"id":"Goblin Pillager","name":"Goblin Pillager","race":"wolf","image":"units/goblins/pillager.png","profile":"portraits/goblins/pillager.png","flag_rgb":"magenta","hitpoints":"44","movement_type":"orcishfoot","movement":"9","experience":"150","level":"2","alignment":"chaotic","advances_to":"null","undead_variation":"mounted","cost":"32","usage":"scout","description":"Some Goblins train their wolves to overcome their fear of fire. In raids, these goblins take a supporting role; they will torch the homes and crops of their foes, and also carry nets to wreak havoc against those attempting to rally for defense or reprisal.\n\nSpecial Notes: This unit is able to slow its enemies, halving their movement speed and attack damage until they end a turn.","die_sound":"wolf-die-1.ogg,wolf-die-2.ogg,wolf-die-3.ogg,wolf-die-4.ogg"}