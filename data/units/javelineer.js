{"attack_anim":[{"filter_attack":[{"name":"javelin"}],"else":[{"frame":[{"begin":"-50","end":"50","image":"units/human-loyalists/javelineer-attack-ranged-3.png"}],"hits":"no"}],"frame":[{"begin":"-250","end":"-150","image":"units/human-loyalists/javelineer-attack-ranged-1.png"},{"begin":"-150","end":"-50","image":"units/human-loyalists/javelineer-attack-ranged-2.png","sound":"throw-1.wav,throw-2.wav,throw-3.wav,throw-4.wav"},{"begin":"50","end":"100","image":"units/human-loyalists/javelineer-attack-ranged-4.png"}],"if":[{"frame":[{"begin":"-50","end":"50","image":"units/human-loyalists/javelineer-attack-ranged-3.png","sound":"spear.ogg"}],"hits":"yes"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/spear-n.png","image_diagonal":"projectiles/spear-ne.png"}]},{"filter_attack":[{"name":"spear"}],"frame":[{"begin":"-300","end":"-200","image":"units/human-loyalists/javelineer-attack-melee-1.png"},{"begin":"-200","end":"-100","image":"units/human-loyalists/javelineer-attack-melee-2.png"},{"begin":"100","end":"175","image":"units/human-loyalists/javelineer-attack-ranged-1.png"},{"begin":"175","end":"250","image":"units/human-loyalists/javelineer-attack-melee-1.png"},{"begin":"250","end":"300","image":"units/human-loyalists/javelineer.png"}],"else":[{"frame":[{"begin":"-100","end":"100","image":"units/human-loyalists/javelineer-attack-melee-3.png","sound":"spear-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"100","image":"units/human-loyalists/javelineer-attack-melee-3.png","sound":"spear.ogg"}],"hits":"yes"}]}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/human-loyalists/javelineer.png"},{"duration":"100","image":"units/human-loyalists/javelineer-defend.png"},{"duration":"1","image":"units/human-loyalists/javelineer.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-loyalists/javelineer-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-loyalists/javelineer-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,human-hit-5.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/human-loyalists/javelineer-attack-ranged-1.png"},{"duration":"100","image":"units/human-loyalists/javelineer-defend-ranged.png"},{"duration":"1","image":"units/human-loyalists/javelineer-attack-ranged-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-loyalists/javelineer-defend-ranged.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-loyalists/javelineer-defend-ranged.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,human-hit-5.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"resistance":[{"pierce":"60"}],"attack":[{"specials":[{"firststrike":[{"id":"firststrike","name":"firststrike","description":"First Strike:\nThis unit always strikes first with this attack, even if they are defending."}]}],"name":"spear","description":"spear","type":"pierce","range":"melee","damage":"8","number":"3"},{"name":"javelin","description":"javelin","icon":"attacks/javelin-human.png","type":"pierce","range":"ranged","damage":"11","number":"2"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/humans/transparent/javelineer.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/humans/transparent/javelineer.png"}],"id":"Javelineer","name":"Javelineer","race":"human","image":"units/human-loyalists/javelineer.png","profile":"portraits/humans/javelineer.png","flag_rgb":"magenta","hitpoints":"48","movement_type":"smallfoot","movement":"5","experience":"150","level":"2","alignment":"lawful","advances_to":"null","cost":"25","usage":"fighter","description":"Spearmen almost always equip themselves with a few javelins, to harry, if not kill, enemies at range. Some, however, take to them rather well, finding that they have a natural talent in their use. Javelineers are a valuable asset to an army, being able to supplement their skill in melee combat with an ability to handle distant foes. They can hurl javelins into enemy ranks from a distance, often without retribution, and still hold their ground in melee.\n\nSpecial Notes: The length of this unit\u2019s weapon allows it to strike first in melee, even in defense.","die_sound":"human-die-1.ogg,human-die-2.ogg,human-die-3.ogg"}