{"movement_anim":[{"frame":[{"duration":"150","image":"units/monsters/gryphon-flying-1.png"},{"duration":"150","image":"units/monsters/gryphon-flying-2.png"},{"duration":"150","image":"units/monsters/gryphon-flying-3.png"},{"duration":"150","image":"units/monsters/gryphon-flying-4.png"},{"duration":"150","image":"units/monsters/gryphon-flying-5.png"},{"duration":"150","image":"units/monsters/gryphon-flying-6.png"},{"duration":"150","image":"units/monsters/gryphon-flying-7.png"},{"duration":"150","image":"units/monsters/gryphon-flying-8.png"}],"start_time":"0"}],"attack_anim":[{"filter_attack":[{"name":"claws"}],"frame":[{"begin":"-200","end":"-100","image":"units/monsters/gryphon-flying-5.png"},{"begin":"100","end":"200","image":"units/monsters/gryphon-flying-5.png"}],"else":[{"frame":[{"begin":"-100","end":"100","image":"units/monsters/gryphon-flying-4.png","sound":"claws.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-100","end":"100","image":"units/monsters/gryphon-flying-4.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}]}],"defend":[{"frame":[{"duration":"1","image":"units/monsters/gryphon-flying-5.png"},{"duration":"100","image":"units/monsters/gryphon-flying-4.png"},{"duration":"1","image":"units/monsters/gryphon-flying-5.png"}],"else":[{"frame":[{"duration":"150","image":"units/monsters/gryphon-flying-4.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/monsters/gryphon-flying-4.png","sound":"gryphon-hit-1.ogg,gryphon-hit-2.ogg,gryphon-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"resistance":[{"arcane":"90"}],"attack":[{"name":"claws","description":"claws","icon":"attacks/claws-animal.png","type":"blade","range":"melee","damage":"10","number":"3"}],"defense":[{"mountains":"40"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/monsters/transparent/gryphon.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/monsters/transparent/gryphon.png"}],"standing_anim":[{"frame":[{"duration":"150","image":"units/monsters/gryphon-flying-1.png"},{"duration":"150","image":"units/monsters/gryphon-flying-2.png"},{"duration":"150","image":"units/monsters/gryphon-flying-3.png"},{"duration":"150","image":"units/monsters/gryphon-flying-4.png"},{"duration":"150","image":"units/monsters/gryphon-flying-5.png"},{"duration":"150","image":"units/monsters/gryphon-flying-6.png"},{"duration":"150","image":"units/monsters/gryphon-flying-7.png"},{"duration":"150","image":"units/monsters/gryphon-flying-8.png"}],"start_time":"0","layer":"60"}],"id":"Gryphon","name":"Gryphon","race":"gryphon","image":"units/monsters/gryphon.png","profile":"portraits/monsters/gryphon.png","hitpoints":"44","movement_type":"fly","movement":"9","experience":"150","level":"2","alignment":"neutral","advances_to":"null","cost":"40","usage":"scout","undead_variation":"gryphon","description":"These majestic and powerful creatures are masters of the sky. Gryphons are both dangerous and wary of other intelligent creatures, and thus should not be disturbed without a good reason.","die_sound":"gryphon-die-1.ogg,gryphon-die-2.ogg"}