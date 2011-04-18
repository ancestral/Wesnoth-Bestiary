{"death":[{"frame":[{"begin":"0","end":"80","image":"units/monsters/seaserpent-die-1.png"},{"begin":"80","end":"160","image":"units/monsters/seaserpent-die-2.png"},{"begin":"160","end":"240","image":"units/monsters/seaserpent-die-3.png"},{"begin":"240","end":"320","image":"units/monsters/seaserpent-die-4.png"},{"begin":"320","end":"400","image":"units/monsters/seaserpent-die-5.png"},{"begin":"400","end":"480","image":"units/monsters/seaserpent-die-6.png"},{"begin":"480","end":"560","image":"units/monsters/seaserpent-die-7.png"},{"begin":"560","end":"640","image":"units/monsters/seaserpent-die-8.png"},{"begin":"640","end":"720","image":"units/monsters/seaserpent-die-9.png"}]}],"attack_anim":[{"filter_attack":[{"name":"fangs"}],"frame":[{"begin":"-200","end":"-50","image":"units/monsters/seaserpent-attack.png"},{"begin":"100","end":"200","image":"units/monsters/seaserpent.png"}],"else":[{"frame":[{"begin":"-50","end":"100","image":"units/monsters/seaserpent-defend.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-50","end":"100","image":"units/monsters/seaserpent-defend.png","sound":"claws.ogg"}],"hits":"yes"}]}],"defend":[{"frame":[{"duration":"1","image":"units/monsters/seaserpent.png"},{"duration":"100","image":"units/monsters/seaserpent-defend.png"},{"duration":"1","image":"units/monsters/seaserpent.png"}],"else":[{"frame":[{"duration":"150","image":"units/monsters/seaserpent-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/monsters/seaserpent-defend.png","sound":"hiss-hit.wav"}],"hits":"hit"}],"start_time":"-126"}],"resistance":[{"arcane":"100"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"fangs","description":"fangs","icon":"attacks/fangs-snake.png","type":"pierce","range":"melee","damage":"18","number":"2"}],"id":"Sea Serpent","name":"Sea Serpent","race":"monster","image":"units/monsters/seaserpent.png","profile":"portraits/monsters/sea-serpent.png","hitpoints":"85","movement_type":"deepsea","movement":"8","experience":"150","level":"3","alignment":"chaotic","advances_to":"null","cost":"40","undead_variation":"swimmer","usage":"fighter","description":"Sea Serpents are gigantic monsters, capable of capsizing boats by themselves.","die_sound":"water-blast.wav"}