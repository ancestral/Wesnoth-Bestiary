{"idle_anim":[{"filter":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]},{"filter_adjacent":[{"is_enemy":"yes","count":"0"}]}],"frame":[{"duration":"100","image":"units/elves-wood/fighter-idle-1.png"},{"duration":"100","image":"units/elves-wood/fighter-idle-2.png"},{"duration":"125","image":"units/elves-wood/fighter-idle-3.png"},{"duration":"150","image":"units/elves-wood/fighter-idle-4.png"},{"duration":"175","image":"units/elves-wood/fighter-idle-5.png"},{"duration":"200","image":"units/elves-wood/fighter-idle-6.png"},{"duration":"200","image":"units/elves-wood/fighter-idle-5.png"},{"duration":"400","image":"units/elves-wood/fighter-idle-6.png"},{"duration":"175","image":"units/elves-wood/fighter-idle-7.png"},{"duration":"200","image":"units/elves-wood/fighter-idle-8.png"},{"duration":"250","image":"units/elves-wood/fighter-idle-9.png"},{"duration":"400","image":"units/elves-wood/fighter-idle-10.png"},{"duration":"150","image":"units/elves-wood/fighter-idle-9.png"},{"duration":"150","image":"units/elves-wood/fighter-idle-11.png"},{"duration":"150","image":"units/elves-wood/fighter-idle-12.png"}],"start_time":"0"}],"attack_anim":[{"filter_attack":[{"name":"bow"}],"else":[{"frame":[{"begin":"-380","end":"-305","image":"units/elves-wood/fighter-bow-attack1.png","sound":"bow-miss.ogg"}],"hits":"no"}],"frame":[{"begin":"-445","end":"-380","image":"units/elves-wood/fighter-bow.png"},{"begin":"-305","end":"-230","image":"units/elves-wood/fighter-bow-attack2.png"},{"begin":"-230","end":"-130","image":"units/elves-wood/fighter-bow-attack3.png"},{"begin":"-130","end":"0","image":"units/elves-wood/fighter-bow-attack4.png"},{"begin":"0","end":"65","image":"units/elves-wood/fighter-bow.png"}],"if":[{"frame":[{"begin":"-380","end":"-305","image":"units/elves-wood/fighter-bow-attack1.png","sound":"bow.ogg"}],"hits":"yes"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}]},{"filter_attack":[{"name":"sword"}],"frame":[{"begin":"-175","end":"-100","image":"units/elves-wood/fighter.png"},{"begin":"100","end":"150","image":"units/elves-wood/fighter-melee-2.png"},{"begin":"150","end":"175","image":"units/elves-wood/fighter.png"}],"else":[{"frame":[{"begin":"-100","end":"100","image":"units/elves-wood/fighter-melee-1.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"100","image":"units/elves-wood/fighter-melee-1.png","sound":"sword-1.ogg"}],"hits":"yes"}]}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/elves-wood/fighter.png"},{"duration":"100","image":"units/elves-wood/fighter-defend.png"},{"duration":"1","image":"units/elves-wood/fighter.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/fighter-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/fighter-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/elves-wood/fighter-bow.png"},{"duration":"100","image":"units/elves-wood/fighter-bow-defend.png"},{"duration":"1","image":"units/elves-wood/fighter-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/elves-wood/fighter-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/elves-wood/fighter-bow-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"sword","description":"sword","icon":"attacks/sword-elven.png","type":"blade","range":"melee","damage":"5","number":"4"},{"name":"bow","description":"bow","icon":"attacks/bow-elven.png","type":"pierce","range":"ranged","damage":"3","number":"3"}],"defense":[{"forest":"40"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/elves/transparent/fighter.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/elves/transparent/fighter.png"}],"id":"Elvish Fighter","name":"Elvish Fighter","race":"elf","image":"units/elves-wood/fighter.png","small_profile":"portraits/elves/transparent/fighter.png~SCALE(205,205)","profile":"portraits/elves/transparent/fighter.png","ellipse":"misc/ellipse","flag_rgb":"magenta","hitpoints":"33","movement_type":"woodland","movement":"5","experience":"40","level":"1","alignment":"neutral","advances_to":"Elvish Captain,Elvish Hero","cost":"14","usage":"fighter","description":"Elves are not warlike by nature, but in times of need, their natural grace and agility serve them well, as does their skillful craftsmanship. An elf can grasp the basics of swordsmanship and archery in a time uncannily short by the standards of other races, and put them to effective use on the battlefield.","die_sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,elf-hit-1.ogg,elf-hit-2.ogg"}