{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/orcs/transparent/crossbowman.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/orcs/transparent/crossbowman.png"}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/orcs/xbowman-melee-defend-1.png"},{"duration":"100","image":"units/orcs/xbowman-melee-defend-2.png"},{"duration":"1","image":"units/orcs/xbowman-melee-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/orcs/xbowman-melee-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/orcs/xbowman-melee-defend-2.png","sound":"orc-hit-1.ogg,orc-hit-2.ogg,orc-hit-3.ogg,orc-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/orcs/xbowman.png"},{"duration":"100","image":"units/orcs/xbowman-defend.png"},{"duration":"1","image":"units/orcs/xbowman.png"}],"else":[{"frame":[{"duration":"150","image":"units/orcs/xbowman-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/orcs/xbowman-defend.png","sound":"orc-hit-1.ogg,orc-hit-2.ogg,orc-hit-3.ogg,orc-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"short sword","description":"short sword","icon":"attacks/sword-orcish.png","type":"blade","range":"melee","damage":"4","number":"3"},{"name":"crossbow","description":"crossbow","icon":"attacks/crossbow-orcish.png","type":"pierce","range":"ranged","damage":"8","number":"3"},{"name":"crossbow","description":"crossbow","icon":"attacks/crossbow-orcish.png","type":"fire","range":"ranged","damage":"10","number":"2"}],"attack_anim":[{"filter_attack":[{"name":"crossbow","type":"fire"}],"frame":[{"begin":"-100","end":"0","image":"units/orcs/xbowman-ranged-2.png"}],"else":[{"frame":[{"begin":"-300","end":"-100","image":"units/orcs/xbowman-ranged-1.png","sound":"crossbow-fire-miss.ogg"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-fire-n.png","image_diagonal":"projectiles/missile-fire-ne.png"}],"hits":"no"}],"if":[{"frame":[{"begin":"-300","end":"-100","image":"units/orcs/xbowman-ranged-1.png","sound":"crossbow-fire.ogg"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-fire-n.png","image_diagonal":"projectiles/missile-fire-ne.png","offset":"0~0.8"},{"begin":"0","end":"75","image":"projectiles/fire-burst-small-1.png","image_diagonal":"projectiles/fire-burst-small-1.png","offset":"0.8"},{"begin":"75","end":"150","image":"projectiles/fire-burst-small-2.png","image_diagonal":"projectiles/fire-burst-small-2.png","offset":"0.83"},{"begin":"150","end":"225","image":"projectiles/fire-burst-small-3.png","image_diagonal":"projectiles/fire-burst-small-3.png","offset":"0.86"},{"begin":"225","end":"300","image":"projectiles/fire-burst-small-4.png","image_diagonal":"projectiles/fire-burst-small-4.png","offset":"0.89"},{"begin":"300","end":"375","image":"projectiles/fire-burst-small-5.png","image_diagonal":"projectiles/fire-burst-small-5.png","offset":"0.92"},{"begin":"375","end":"450","image":"projectiles/fire-burst-small-6.png","image_diagonal":"projectiles/fire-burst-small-6.png","offset":"0.95"},{"begin":"450","end":"525","image":"projectiles/fire-burst-small-7.png","image_diagonal":"projectiles/fire-burst-small-7.png","offset":"0.98"},{"begin":"525","end":"600","image":"projectiles/fire-burst-small-8.png","image_diagonal":"projectiles/fire-burst-small-8.png","offset":"1.0"}],"hits":"yes"}]},{"filter_attack":[{"name":"crossbow","type":"pierce"}],"else":[{"frame":[{"begin":"-300","end":"-150","image":"units/orcs/xbowman-ranged-1.png","sound":"crossbow-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-300","end":"-150","image":"units/orcs/xbowman-ranged-1.png","sound":"crossbow.ogg"}],"hits":"yes"}],"frame":[{"begin":"-150","end":"0","image":"units/orcs/xbowman-ranged-2.png"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}]},{"filter_attack":[{"name":"short sword"}],"frame":[{"duration":"100","image":"units/orcs/xbowman-melee.png"},{"duration":"100","image":"units/orcs/xbowman-melee-attack-2.png"},{"duration":"100","image":"units/orcs/xbowman-melee-attack-3.png"},{"duration":"150","image":"units/orcs/xbowman-melee-attack-4.png"},{"duration":"100","image":"units/orcs/xbowman-melee.png"}],"else":[{"frame":[{"duration":"100","image":"units/orcs/xbowman-melee-attack-1.png","sound":"sword-1.ogg"}],"hits":"yes"}],"if":[{"frame":[{"duration":"100","image":"units/orcs/xbowman-melee-attack-1.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"offset":"0.0~0.3,0.3~0.55,0.55~0.3,0.3~0.0","start_time":"-250"}],"id":"Orcish Crossbowman","name":"Orcish Crossbowman","race":"orc","image":"units/orcs/xbowman.png","flag_rgb":"magenta","small_profile":"portraits/orcs/transparent/crossbowman.png~SCALE(205,205)","profile":"portraits/orcs/transparent/crossbowman.png","hitpoints":"43","movement_type":"orcishfoot","movement":"5","experience":"80","level":"2","alignment":"chaotic","advances_to":"Orcish Slurbow","undead_variation":"archer","cost":"26","usage":"archer","description":"Orcish crossbows are crude imitations of human or dwarvish design; a crossbow of any make, though, is a fairly potent device. The orcs privileged enough to wield them are capable warriors, and what they lack in finesse, they make up for in numbers.","die_sound":"orc-die-1.ogg,orc-die-2.ogg,orc-die-3.ogg"}