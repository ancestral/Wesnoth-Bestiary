{"movement_anim":[{"frame":[{"begin":"0","end":"150","image":"units/human-loyalists/cavalier-moving.png"}]}],"attack_anim":[{"filter_attack":[{"name":"crossbow"}],"frame":[{"begin":"-1100","end":"-1000","image":"units/human-loyalists/cavalier-ranged-1.png"},{"begin":"-1000","end":"-900","image":"units/human-loyalists/cavalier-ranged-2.png"},{"begin":"-800","end":"-700","image":"units/human-loyalists/cavalier-ranged-3.png"},{"begin":"-700","end":"-600","image":"units/human-loyalists/cavalier-ranged-4.png"},{"begin":"-600","end":"-500","image":"units/human-loyalists/cavalier-ranged-5.png"},{"begin":"-300","end":"-0","image":"units/human-loyalists/cavalier-ranged-7.png"}],"else":[{"frame":[{"begin":"-500","end":"-300","image":"units/human-loyalists/cavalier-ranged-6.png","sound":"crossbow-miss.ogg"}],"hits":"no"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}],"if":[{"frame":[{"begin":"-500","end":"-300","image":"units/human-loyalists/cavalier-ranged-6.png","sound":"crossbow.ogg"}],"hits":"yes"}]},{"filter_attack":[{"name":"sword"}],"frame":[{"begin":"-225","end":"-200","image":"units/human-loyalists/cavalier.png"},{"begin":"-200","end":"-150","image":"units/human-loyalists/cavalier-moving.png","sound":"horse-canter.wav"},{"begin":"150","end":"200","image":"units/human-loyalists/cavalier-moving.png"},{"begin":"200","end":"225","image":"units/human-loyalists/cavalier.png"}],"else":[{"frame":[{"begin":"-150","end":"150","image":"units/human-loyalists/cavalier-attack.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-150","end":"150","image":"units/human-loyalists/cavalier-attack.png","sound":"sword-1.ogg"}],"hits":"yes"}]}],"defend":[{"frame":[{"duration":"1","image":"units/human-loyalists/cavalier.png"},{"duration":"100","image":"units/human-loyalists/cavalier-defend.png"},{"duration":"1","image":"units/human-loyalists/cavalier.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-loyalists/cavalier-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-loyalists/cavalier-defend.png","sound":"horse-hit-1.ogg,horse-hit-2.ogg,horse-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"resistance":[{"blade":"70","impact":"60","cold":"80"}],"attack":[{"name":"sword","description":"longsword","icon":"attacks/greatsword-human.png","type":"blade","range":"melee","damage":"10","number":"4"},{"name":"crossbow","description":"crossbow","icon":"attacks/crossbow-human.png","type":"pierce","range":"ranged","damage":"20","number":"1"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/humans/transparent/cavalier.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/humans/transparent/cavalier.png"}],"id":"Cavalier","name":"Cavalier","race":"human","image":"units/human-loyalists/cavalier.png","profile":"portraits/humans/cavalier.png","flag_rgb":"magenta","hitpoints":"68","movement_type":"mounted","movement":"9","experience":"150","level":"3","alignment":"lawful","advances_to":"null","undead_variation":"mounted","cost":"52","usage":"scout","description":"Cavaliers are masters at the use of both sword and crossbow from horseback. Their combination of striking power and mobility is fearsome; and they have a reputation for dash and aggressiveness to match it. The daring deeds of Cavaliers are the subject of many a tale and song.","die_sound":"horse-die.ogg"}