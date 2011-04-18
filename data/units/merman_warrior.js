{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/merfolk/transparent/fighter.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/merfolk/transparent/fighter.png"}],"defend":[{"frame":[{"duration":"1","image":"units/merfolk/warrior-defend-1.png"},{"duration":"100","image":"units/merfolk/warrior-defend-2.png"},{"duration":"1","image":"units/merfolk/warrior-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/merfolk/warrior-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/merfolk/warrior-defend-2.png","sound":"mermen-hit.wav"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"trident","description":"trident","type":"pierce","range":"melee","damage":"10","number":"3"}],"attack_anim":[{"filter_attack":[{"name":"trident"}],"frame":[{"duration":"100","image":"units/merfolk/warrior-attack-1.png"},{"duration":"100","image":"units/merfolk/warrior-attack-3.png"},{"duration":"100","image":"units/merfolk/warrior-attack-4.png"},{"duration":"100","image":"units/merfolk/warrior-attack-5.png"},{"duration":"100","image":"units/merfolk/warrior-attack-6.png"},{"duration":"100","image":"units/merfolk/warrior-attack-7.png"},{"duration":"100","image":"units/merfolk/warrior-attack-8.png"},{"duration":"100","image":"units/merfolk/warrior-attack-9.png"}],"else":[{"frame":[{"duration":"100","image":"units/merfolk/warrior-attack-2.png","sound":"spear-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/merfolk/warrior-attack-2.png","sound":"spear.ogg"}],"hits":"yes"}],"offset":"0~0.3,0.3~0","direction":"se,sw"},{"filter_attack":[{"name":"trident"}],"frame":[{"begin":"-200","end":"-150","image":"units/merfolk/warrior.png"},{"begin":"100","end":"150","image":"units/merfolk/warrior.png"}],"else":[{"frame":[{"begin":"-150","end":"100","image":"units/merfolk/warrior.png","sound":"spear-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-150","end":"100","image":"units/merfolk/warrior.png","sound":"spear.ogg"}],"hits":"yes"}],"direction":"n,ne,nw,s"}],"id":"Merman Warrior","name":"Merman Warrior","race":"merman","image":"units/merfolk/warrior.png","flag_rgb":"magenta","profile":"portraits/merfolk/fighter.png","hitpoints":"50","movement_type":"swimmer","movement":"6","experience":"80","level":"2","alignment":"lawful","advances_to":"Merman Triton,Merman Hoplite","undead_variation":"swimmer","cost":"28","usage":"fighter","description":"The Mermen Warriors form the core of the mermen armies. Wielding powerful tridents, they are a bane to any who dare enter their waters.","die_sound":"mermen-die.ogg"}