{"defend":[{"frame":[{"duration":"1","image":"units/merfolk/entangler.png"},{"duration":"100","image":"units/merfolk/entangler.png"},{"duration":"1","image":"units/merfolk/entangler.png"}],"else":[{"frame":[{"duration":"150","image":"units/merfolk/entangler.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/merfolk/entangler.png","sound":"mermen-hit.wav"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"club","description":"club","type":"impact","range":"melee","damage":"8","number":"3"},{"specials":[{"slow":[{"id":"slow","name":"slows","description":"Slow:\nThis attack slows the target until it ends a turn. Slow halves the damage caused by attacks and the movement cost for a slowed unit is doubled. A unit that is slowed will feature a snail icon in its sidebar information when it is selected."}]}],"name":"net","description":"net","type":"impact","range":"ranged","damage":"8","number":"3","icon":"attacks/net.png"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack_anim":[{"filter_attack":[{"name":"net"}],"else":[{"frame":[{"begin":"-150","end":"-75","image":"units/merfolk/entangler.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-150","end":"-75","image":"units/merfolk/entangler.png","sound":"net.wav"}],"hits":"yes"},{"filter_second":[{"not":[{"filter_wml":[{"status":[{"slowed":"yes"}]}]}]}],"slowed_sound_frame":[{"duration":"100","sound":"slowed.wav"}],"hits":"hit","slowed_sound_start_time":"-100"}],"frame":[{"begin":"-75","end":"100","image":"units/merfolk/entangler.png"}],"missile_frame":[{"begin":"-200","end":"0","image":"projectiles/web.png","image_diagonal":"projectiles/web.png"}]},{"filter_attack":[{"name":"club"}],"frame":[{"begin":"-200","end":"-100","image":"units/merfolk/entangler.png"}],"else":[{"frame":[{"begin":"-100","end":"150","image":"units/merfolk/entangler.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"150","image":"units/merfolk/entangler.png","sound":"club.ogg"}],"hits":"yes"}]}],"id":"Merman Entangler","name":"Merman Entangler","race":"merman","image":"units/merfolk/entangler.png","flag_rgb":"magenta","profile":"portraits/merfolk/netcaster.png","hitpoints":"55","movement_type":"swimmer","movement":"7","experience":"150","level":"3","alignment":"lawful","advances_to":"null","undead_variation":"swimmer","cost":"46","usage":"mixed fighter","description":"Merfolk tend to use a combination of both nets and clubs in fishing; nets to collect the fish, and clubs to finish the kill. Both of these tools have seen adaptation for warfare, and are valuable enough that auxilliaries who specialize in using them are deliberately brought to battle.\n\nMermen often find themselves in a standoff with land-based enemies; the merfolk are too strong in the water, and are too weak to make any offense on land. Nets are a key bit of leverage; without nets, mermen can\u2019t give any effective chase over land, and are at a great disadvantage in hand-to-hand combat.\n\nSpecial Notes: This unit is able to slow its enemies, halving their movement speed and attack damage until they end a turn.","die_sound":"mermen-die.ogg"}