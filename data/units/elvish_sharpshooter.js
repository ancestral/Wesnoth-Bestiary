{"attack_anim":[{"filter_attack":[{"name":"longbow"}],"else":[{"frame":[{"begin":"-380","end":"-305","image":"units/elves-wood/sharpshooter-bow-attack1.png","sound":"bow.ogg"}],"hits":"yes"}],"frame":[{"begin":"-445","end":"-380","image":"units/elves-wood/sharpshooter-bow.png"},{"begin":"-305","end":"-230","image":"units/elves-wood/sharpshooter-bow-attack2.png"},{"begin":"-230","end":"-130","image":"units/elves-wood/sharpshooter-bow-attack3.png"},{"begin":"-130","end":"0","image":"units/elves-wood/sharpshooter-bow-attack4.png"},{"begin":"0","end":"150","image":"units/elves-wood/sharpshooter-bow-attack5.png"}],"if":[{"frame":[{"begin":"-380","end":"-305","image":"units/elves-wood/sharpshooter-bow-attack1.png","sound":"bow-miss.ogg"}],"hits":"no"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}]},{"filter_attack":[{"name":"sword"}],"frame":[{"begin":"-200","end":"-175","image":"units/elves-wood/sharpshooter-sword.png"},{"begin":"-175","end":"-75","image":"units/elves-wood/sharpshooter-sword-1.png"},{"begin":"100","end":"175","image":"units/elves-wood/sharpshooter-sword-3.png"},{"begin":"175","end":"200","image":"units/elves-wood/sharpshooter-sword.png"}],"else":[{"frame":[{"begin":"-75","end":"100","image":"units/elves-wood/sharpshooter-sword-2.png","sound":"sword-1.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-75","end":"100","image":"units/elves-wood/sharpshooter-sword-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}]}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/elves-wood/sharpshooter-sword.png"},{"duration":"100","image":"units/elves-wood/sharpshooter-sword-defend.png"},{"duration":"1","image":"units/elves-wood/sharpshooter-sword.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/sharpshooter-sword-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/sharpshooter-sword-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/elves-wood/sharpshooter-bow.png"},{"duration":"100","image":"units/elves-wood/sharpshooter-bow-defend.png"},{"duration":"1","image":"units/elves-wood/sharpshooter-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/sharpshooter-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/sharpshooter-bow-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"sword","description":"sword","icon":"attacks/sword-elven.png","type":"blade","range":"melee","damage":"7","number":"2"},{"specials":[{"chance_to_hit":[{"id":"marksman","name":"marksman","description":"Marksman:\nWhen used offensively, this attack always has at least a 60% chance to hit.","value":"60","cumulative":"yes","active_on":"offense"}]}],"name":"longbow","description":"longbow","icon":"attacks/bow-elven-magic.png","type":"pierce","range":"ranged","damage":"10","number":"5"}],"female":[{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/elves/transparent/marksman+female.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/elves/transparent/marksman+female.png"}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/elves-wood/sharpshooter+female-sword.png"},{"duration":"100","image":"units/elves-wood/sharpshooter+female-sword-defend.png"},{"duration":"1","image":"units/elves-wood/sharpshooter+female-sword.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/sharpshooter+female-sword-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/sharpshooter+female-sword-defend.png","sound":"human-female-hit-1.ogg,human-female-hit-2.ogg,human-female-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/elves-wood/sharpshooter+female-bow.png"},{"duration":"100","image":"units/elves-wood/sharpshooter+female-bow-defend.png"},{"duration":"1","image":"units/elves-wood/sharpshooter+female-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/sharpshooter+female-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/sharpshooter+female-bow-defend.png","sound":"human-female-hit-1.ogg,human-female-hit-2.ogg,human-female-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack_anim":[{"filter_attack":[{"name":"longbow"}],"frame":[{"image":"units/elves-wood/sharpshooter+female-bow.png"},{"image":"units/elves-wood/sharpshooter+female-bow-attack2.png"},{"image":"units/elves-wood/sharpshooter+female-bow-attack3.png"},{"image":"units/elves-wood/sharpshooter+female-bow-attack4.png"},{"image":"units/elves-wood/sharpshooter+female-bow-attack5.png"}],"else":[{"frame":[{"image":"units/elves-wood/sharpshooter+female-bow-attack1.png"}],"hits":"yes"}],"if":[{"frame":[{"image":"units/elves-wood/sharpshooter+female-bow-attack1.png"}],"hits":"no"}]},{"filter_attack":[{"name":"sword"}],"frame":[{"image":"units/elves-wood/sharpshooter+female-sword.png"},{"image":"units/elves-wood/sharpshooter+female-sword-1.png"},{"image":"units/elves-wood/sharpshooter+female-sword-3.png"},{"image":"units/elves-wood/sharpshooter+female-sword.png"}],"else":[{"frame":[{"image":"units/elves-wood/sharpshooter+female-sword-2.png"}],"hits":"yes"}],"if":[{"frame":[{"image":"units/elves-wood/sharpshooter+female-sword-2.png"}],"hits":"no"}]}],"name":"female^Elvish Sharpshooter","gender":"female","image":"units/elves-wood/sharpshooter+female.png","profile":"portraits/elves/marksman+female.png","die_sound":"human-female-hit-1.ogg,human-female-hit-2.ogg,human-female-hit-3.ogg"}],"portrait":[{"size":"400","side":"left","mirror":"true","image":"portraits/elves/transparent/marksman.png"},{"size":"400","side":"right","mirror":"false","image":"portraits/elves/transparent/marksman.png"}],"id":"Elvish Sharpshooter","name":"Elvish Sharpshooter","race":"elf","gender":"male,female","image":"units/elves-wood/sharpshooter.png","profile":"portraits/elves/marksman.png","flag_rgb":"magenta","hitpoints":"47","movement_type":"woodland","movement":"6","experience":"150","level":"3","alignment":"neutral","advances_to":"null","undead_variation":"archer","cost":"55","usage":"archer","description":"There was a legend of an elf who stopped an arrow by shooting it out of the air with one of his own. It is a testament to the skill of the elves that such a story could be taken seriously. The sharpshooters of the elves have, quite simply, mastered the art of archery.\n\nSpecial Notes: This unit\u2019s marksmanship gives it a high chance of hitting targeted enemies, but only on the attack.","die_sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}