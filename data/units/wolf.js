{"movement_anim":[{"frame":[{"begin":"0","end":"150","image":"units/monsters/wolf-moving.png"}]}],"attack_anim":[{"filter_attack":[{"name":"fangs"}],"frame":[{"begin":"-350","end":"-250","image":"units/monsters/wolf.png","sound":"wolf-growl-1.ogg,wolf-growl-2.ogg,wolf-growl-3.ogg,wolf-growl-4.ogg"},{"begin":"-250","end":"-100","image":"units/monsters/wolf-attack.png"},{"begin":"-50","end":"200","image":"units/monsters/wolf-moving.png"},{"begin":"200","end":"250","image":"units/monsters/wolf.png"}],"else":[{"frame":[{"begin":"-100","end":"-50","image":"units/monsters/wolf-attack.png","sound":"bite.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-100","end":"-50","image":"units/monsters/wolf-attack.png"}],"hits":"no"}],"offset":"0.0~-0.1:100,-0.1~0.0:50,0.0~0.3:50,0.3~0.5:100,0.5~0.6:50,0.6~0.4:100,0.4~0.2:50,0.2~0.0:100"}],"defend":[{"frame":[{"duration":"1","image":"units/monsters/wolf-defend-1.png"},{"duration":"100","image":"units/monsters/wolf-defend-2.png"},{"duration":"1","image":"units/monsters/wolf-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/monsters/wolf-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/monsters/wolf-defend-2.png","sound":"wolf-hit-1.ogg,wolf-hit-2.ogg,wolf-hit-3.ogg,wolf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"fangs","description":"fangs","icon":"attacks/fangs-animal.png","type":"blade","range":"melee","damage":"5","number":"3"}],"defense":[{"village":"50"}],"standing_anim":[{"frame":[{"image":"units/monsters/wolf.png","duration":"50"}],"start_time":"-50"},{"frame":[{"image":"units/monsters/wolf-water.png","duration":"50"}],"start_time":"-50","terrain_type":"Wo,Ww,Ww^Vm,Chs,Chw,Ss"}],"id":"Wolf","name":"Wolf","race":"wolf","generate_name":"no","image":"units/monsters/wolf.png","ellipse":"misc/ellipse","hitpoints":"32","movement_type":"orcishfoot","movement":"8","experience":"150","level":"1","alignment":"neutral","advances_to":"null","undead_variation":"mounted","cost":"17","usage":"scout","description":"Wolves are aggressive animals that hunt in packs. Although weak individually, a wolf pack can kill even the strongest man in minutes.","die_sound":"wolf-die-1.ogg,wolf-die-2.ogg,wolf-die-3.ogg,wolf-die-4.ogg"}