{"death":[{"frame":[{"begin":"0","end":"160","image":"units/elves-wood/marksman-die-1.png"},{"begin":"160","end":"400","image":"units/elves-wood/marksman-die-2.png"},{"begin":"400","end":"580","image":"units/elves-wood/marksman-die-3.png"},{"begin":"580","end":"780","image":"units/elves-wood/marksman-die-4.png"},{"begin":"780","end":"1000","image":"units/elves-wood/marksman-die-5.png"}]}],"attack_anim":[{"filter_attack":[{"name":"longbow"}],"else":[{"frame":[{"begin":"-400","end":"-325","image":"units/elves-wood/marksman-bow-attack1.png","sound":"bow-miss.ogg"}],"hits":"no"}],"frame":[{"begin":"-475","end":"-400","image":"units/elves-wood/marksman-bow.png"},{"begin":"-325","end":"-250","image":"units/elves-wood/marksman-bow-attack2.png"},{"begin":"-250","end":"-150","image":"units/elves-wood/marksman-bow-attack3.png"},{"begin":"-150","end":"0","image":"units/elves-wood/marksman-bow-attack4.png"},{"begin":"0","end":"75","image":"units/elves-wood/marksman-bow.png"}],"if":[{"frame":[{"begin":"-400","end":"-325","image":"units/elves-wood/marksman-bow-attack1.png","sound":"bow.ogg"}],"hits":"yes"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}]},{"filter_attack":[{"name":"sword"}],"frame":[{"begin":"-200","end":"-175","image":"units/elves-wood/marksman-sword.png"},{"begin":"-175","end":"-75","image":"units/elves-wood/marksman-sword-1.png"},{"begin":"100","end":"175","image":"units/elves-wood/marksman-sword-3.png"},{"begin":"175","end":"200","image":"units/elves-wood/marksman-sword.png"}],"else":[{"frame":[{"begin":"-75","end":"100","image":"units/elves-wood/marksman-sword-2.png","sound":"sword-1.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-75","end":"100","image":"units/elves-wood/marksman-sword-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}]}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/elves-wood/marksman-sword.png"},{"duration":"100","image":"units/elves-wood/marksman-sword-defend.png"},{"duration":"1","image":"units/elves-wood/marksman-sword.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/marksman-sword-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/marksman-sword-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/elves-wood/marksman-bow.png"},{"duration":"100","image":"units/elves-wood/marksman-bow-defend.png"},{"duration":"1","image":"units/elves-wood/marksman-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/marksman-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/marksman-bow-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"sword","description":"sword","icon":"attacks/sword-elven.png","type":"blade","range":"melee","damage":"6","number":"2"},{"specials":[{"chance_to_hit":[{"id":"marksman","name":"marksman","description":"Marksman:\nWhen used offensively, this attack always has at least a 60% chance to hit.","value":"60","cumulative":"yes","active_on":"offense"}]}],"name":"longbow","description":"longbow","icon":"attacks/bow-elven-magic.png","type":"pierce","range":"ranged","damage":"9","number":"4"}],"female":[{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/elves/transparent/marksman+female.png"},{"size":"400","side":"right","mirror":"true","image":" "}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/elves-wood/marksman+female-sword.png"},{"duration":"100","image":"units/elves-wood/marksman+female-sword-defend.png"},{"duration":"1","image":"units/elves-wood/marksman+female-sword.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/marksman+female-sword-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/marksman+female-sword-defend.png","sound":"human-female-hit-1.ogg,human-female-hit-2.ogg,human-female-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/elves-wood/marksman+female-bow.png"},{"duration":"100","image":"units/elves-wood/marksman+female-bow-defend.png"},{"duration":"1","image":"units/elves-wood/marksman+female-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/marksman+female-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/marksman+female-bow-defend.png","sound":"human-female-hit-1.ogg,human-female-hit-2.ogg,human-female-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"death":[{"frame":[{"image":"units/elves-wood/marksman+female-die-1.png"},{"image":"units/elves-wood/marksman+female-die-2.png"},{"image":"units/elves-wood/marksman+female-die-3.png"},{"image":"units/elves-wood/marksman-die-4.png"},{"image":"units/elves-wood/marksman-die-5.png"}]}],"attack_anim":[{"filter_attack":[{"name":"longbow"}],"frame":[{"image":"units/elves-wood/marksman+female-bow.png"},{"image":"units/elves-wood/marksman+female-bow-attack2.png"},{"image":"units/elves-wood/marksman+female-bow-attack3.png"},{"image":"units/elves-wood/marksman+female-bow-attack4.png"},{"image":"units/elves-wood/marksman+female-bow.png"}],"else":[{"frame":[{"image":"units/elves-wood/marksman+female-bow-attack1.png"}]}],"if":[{"frame":[{"image":"units/elves-wood/marksman+female-bow-attack1.png"}]}]},{"filter_attack":[{"name":"sword"}],"frame":[{"image":"units/elves-wood/marksman+female-sword.png"},{"image":"units/elves-wood/marksman+female-sword-1.png"},{"image":"units/elves-wood/marksman+female-sword-3.png"},{"image":"units/elves-wood/marksman+female-sword.png"}],"else":[{"frame":[{"image":"units/elves-wood/marksman+female-sword-2.png"}],"hits":"yes"}],"if":[{"frame":[{"image":"units/elves-wood/marksman+female-sword-2.png"}],"hits":"no"}]}],"name":"female^Elvish Marksman","gender":"female","image":"units/elves-wood/marksman+female.png","profile":"portraits/elves/marksman+female.png","die_sound":"human-female-hit-1.ogg,human-female-hit-2.ogg,human-female-hit-3.ogg"}],"portrait":[{"size":"400","side":"left","mirror":"true","image":"portraits/elves/transparent/marksman.png"},{"size":"400","side":"right","mirror":"false","image":"portraits/elves/transparent/marksman.png"}],"id":"Elvish Marksman","name":"Elvish Marksman","race":"elf","gender":"male,female","image":"units/elves-wood/marksman.png","flag_rgb":"magenta","profile":"portraits/elves/marksman.png","hitpoints":"37","movement_type":"woodland","movement":"6","experience":"80","level":"2","alignment":"neutral","advances_to":"Elvish Sharpshooter","undead_variation":"archer","cost":"41","usage":"archer","description":"Elves are wonderously keen-sighted, a gift which contributes to their mastery of the bow. An elf practiced at archery can hit targets that a man couldn\u2019t even see, and can nock a second arrow almost as soon as the first is let fly. Realizing this prodigious skill does come with one cost, that being a lack of practice with the sword.\n\nSpecial Notes: This unit\u2019s marksmanship gives it a high chance of hitting targeted enemies, but only on the attack.","die_sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}