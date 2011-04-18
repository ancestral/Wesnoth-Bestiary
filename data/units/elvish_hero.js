{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/elves/transparent/hero.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/elves/transparent/hero.png"}],"attack":[{"name":"sword","description":"sword","icon":"attacks/sword-elven.png","type":"blade","range":"melee","damage":"8","number":"4"},{"name":"bow","description":"bow","icon":"attacks/bow-elven.png","type":"pierce","range":"ranged","damage":"6","number":"3"}],"defense":[{"forest":"40"}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/elves-wood/hero.png"},{"duration":"100","image":"units/elves-wood/hero-defend.png"},{"duration":"1","image":"units/elves-wood/hero.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/hero-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/hero-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/elves-wood/hero-bow.png"},{"duration":"100","image":"units/elves-wood/hero-bow-defend.png"},{"duration":"1","image":"units/elves-wood/hero-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/hero-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/hero-bow-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack_anim":[{"filter_attack":[{"name":"bow"}],"else":[{"frame":[{"begin":"-380","end":"-305","image":"units/elves-wood/hero-bow-attack1.png","sound":"bow-miss.ogg"}],"hits":"no"}],"frame":[{"begin":"-445","end":"-380","image":"units/elves-wood/hero-bow.png"},{"begin":"-305","end":"-230","image":"units/elves-wood/hero-bow-attack2.png"},{"begin":"-230","end":"-130","image":"units/elves-wood/hero-bow-attack3.png"},{"begin":"-130","end":"0","image":"units/elves-wood/hero-bow-attack4.png"},{"begin":"0","end":"65","image":"units/elves-wood/hero-bow.png"}],"if":[{"frame":[{"begin":"-380","end":"-305","image":"units/elves-wood/hero-bow-attack1.png","sound":"bow.ogg"}],"hits":"yes"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}]},{"filter_attack":[{"name":"sword"}],"frame":[{"begin":"-200","end":"-175","image":"units/elves-wood/hero.png"},{"begin":"-175","end":"-110","image":"units/elves-wood/hero-melee-1.png"},{"begin":"-110","end":"-75","image":"units/elves-wood/hero-melee-2.png"},{"begin":"75","end":"120","image":"units/elves-wood/hero-melee-4.png"},{"begin":"120","end":"180","image":"units/elves-wood/hero-defend.png"},{"begin":"180","end":"200","image":"units/elves-wood/hero.png"}],"else":[{"frame":[{"begin":"-75","end":"75","image":"units/elves-wood/hero-melee-3.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-75","end":"75","image":"units/elves-wood/hero-melee-3.png","sound":"sword-1.ogg"}],"hits":"yes"}]}],"id":"Elvish Hero","name":"Elvish Hero","race":"elf","image":"units/elves-wood/hero.png","profile":"portraits/elves/hero.png","flag_rgb":"magenta","hitpoints":"51","movement_type":"woodland","movement":"5","experience":"90","level":"2","alignment":"neutral","advances_to":"Elvish Champion","cost":"32","usage":"fighter","description":"Elves, though not warlike by nature, are swift to learn; a relatively small amount of experience will turn an elf from a competent fighter into a master of combat. Those who are honored as heroes are strong with both sword and bow, and their skill once acquired does not fade for lack of practice.","die_sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}