{"idle_anim":[{"filter":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]},{"filter_adjacent":[{"is_enemy":"yes","count":"0"}]}],"frame":[{"begin":"0","end":"100","image":"units/ogres/ogre-idle-1.png"},{"begin":"100","end":"1100","image":"units/ogres/ogre-idle-2.png"},{"begin":"1100","end":"1200","image":"units/ogres/ogre-idle-1.png"}]}],"attack_anim":[{"filter_attack":[{"name":"cleaver"}],"frame":[{"begin":"-325","end":"-250","image":"units/ogres/ogre-attack1.png"},{"begin":"-250","end":"-150","image":"units/ogres/ogre-attack2.png"},{"begin":"-150","end":"-75","image":"units/ogres/ogre-attack3.png"},{"begin":"100","end":"200","image":"units/ogres/ogre-attack5.png"}],"else":[{"frame":[{"begin":"-75","end":"100","image":"units/ogres/ogre-attack4.png","sound":"axe.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-75","end":"100","image":"units/ogres/ogre-attack4.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}]}],"defend":[{"frame":[{"duration":"1","image":"units/ogres/ogre.png"},{"duration":"100","image":"units/ogres/ogre-defend.png"},{"duration":"1","image":"units/ogres/ogre.png"}],"else":[{"frame":[{"duration":"150","image":"units/ogres/ogre-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/ogres/ogre-defend.png","sound":"ogre-hit-1.ogg,ogre-hit-2.ogg,ogre-hit-3.ogg,ogre-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"resistance":[{"arcane":"80"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"cleaver","description":"cleaver","type":"blade","range":"melee","damage":"10","number":"3"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/monsters/transparent/ogre.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/monsters/transparent/ogre.png"}],"id":"Ogre","name":"Ogre","race":"ogre","image":"units/ogres/ogre.png","small_profile":"portraits/monsters/transparent/ogre.png~SCALE(205,205)","profile":"portraits/monsters/transparent/ogre.png","flag_rgb":"magenta","hitpoints":"68","movement_type":"largefoot","movement":"5","experience":"150","level":"2","alignment":"neutral","advances_to":"null","cost":"33","usage":"fighter","description":"Ogres are giant creatures that usually live alone in the wilderness, remarkably similar to humans in form, though large and misshapen. While they can be easily outrun or outsmarted, their strength is not to be underestimated.","die_sound":"ogre-die-1.ogg,ogre-die-2.ogg,ogre-die-3.ogg"}