{"movement_costs":[{"swamp_water":"2"}],"attack_anim":[{"filter_attack":[{"name":"bow"}],"else":[{"frame":[{"begin":"-325","end":"-250","image":"units/human-outlaws/huntsman-attack1.png","sound":"bow-miss.ogg"}],"hits":"no"}],"frame":[{"begin":"-400","end":"-325","image":"units/human-outlaws/huntsman-bow.png"},{"begin":"-250","end":"-100","image":"units/human-outlaws/huntsman-attack2.png"},{"begin":"-100","end":"0","image":"units/human-outlaws/huntsman-attack3.png"},{"begin":"0","end":"100","image":"units/human-outlaws/huntsman-bow.png"}],"if":[{"frame":[{"begin":"-325","end":"-250","image":"units/human-outlaws/huntsman-attack1.png","sound":"bow.ogg"}],"hits":"yes"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}]},{"filter_attack":[{"name":"dagger"}],"frame":[{"begin":"-200","end":"-150","image":"units/human-outlaws/huntsman.png"},{"begin":"100","end":"150","image":"units/human-outlaws/huntsman.png"}],"else":[{"frame":[{"begin":"-150","end":"100","image":"units/human-outlaws/huntsman-attack-melee.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-150","end":"100","image":"units/human-outlaws/huntsman-attack-melee.png","sound":"dagger-swish.wav"}],"hits":"yes"}],"hits":"yes"}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/human-outlaws/huntsman.png"},{"duration":"100","image":"units/human-outlaws/huntsman-defend.png"},{"duration":"1","image":"units/human-outlaws/huntsman.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-outlaws/huntsman-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-outlaws/huntsman-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,human-hit-5.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/human-outlaws/huntsman-bow.png"},{"duration":"100","image":"units/human-outlaws/huntsman-bow-defend.png"},{"duration":"1","image":"units/human-outlaws/huntsman-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-outlaws/huntsman-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-outlaws/huntsman-bow-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,human-hit-5.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"dagger","description":"dagger","icon":"attacks/dagger-human.png","type":"blade","range":"melee","damage":"5","number":"4"},{"specials":[{"chance_to_hit":[{"id":"marksman","name":"marksman","description":"Marksman:\nWhen used offensively, this attack always has at least a 60% chance to hit.","value":"60","cumulative":"yes","active_on":"offense"}]}],"name":"bow","description":"bow","icon":"attacks/bow.png","type":"pierce","range":"ranged","damage":"9","number":"4"}],"defense":[{"forest":"40","swamp_water":"40"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/humans/transparent/huntsman.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/humans/transparent/huntsman.png"}],"id":"Huntsman","name":"Huntsman","race":"human","image":"units/human-outlaws/huntsman.png","profile":"portraits/humans/huntsman.png","flag_rgb":"magenta","hitpoints":"57","movement_type":"smallfoot","movement":"5","experience":"150","level":"3","alignment":"chaotic","advances_to":"null","undead_variation":"archer","cost":"54","usage":"archer","description":"Hunting is a popular sport of noblemen, but it can also be a livelihood for commoners. Like any other craft, it has men of masterful skill in its practice. Huntsmen know all the tricks of their trade, and are skilled at navigating the wilderness, at tracking, and at the use of the bow. They are a fair shot at moving targets, and targets hiding under brush and cover; a skill wrought from years of practice at shooting game, and one which garrisoned bowmen often lack.\n\nMaster hunters are employed by any group living in or passing through wild country, be they men of the law, or those working against it. Even nature itself can have deadly surprises, and any commander who fails to hire a such a guide can lose his men to nothing more than terrain. Good woodsmen can save lives, ease travel, provide food, and their skill with a bow is capitally useful in a fight.\n\nSpecial Notes: This unit\u2019s marksmanship gives it a high chance of hitting targeted enemies, but only on the attack.","die_sound":"human-die-1.ogg,human-die-2.ogg,human-die-3.ogg"}