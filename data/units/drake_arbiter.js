{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/drakes/transparent/clasher.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/drakes/transparent/clasher.png"}],"defend":[{"frame":[{"duration":"1","image":"units/drakes/arbiter-defend-1.png"},{"duration":"100","image":"units/drakes/arbiter-defend-2.png"},{"duration":"1","image":"units/drakes/arbiter-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/drakes/arbiter-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/drakes/arbiter-defend-2.png","sound":"drake-hit-1.ogg,drake-hit-2.ogg,drake-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"halberd","description":"halberd","type":"blade","range":"melee","damage":"11","number":"3","icon":"attacks/halberd.png"},{"specials":[{"firststrike":[{"id":"firststrike","name":"firststrike","description":"First Strike:\nThis unit always strikes first with this attack, even if they are defending."}]}],"name":"halberd","description":"halberd","type":"pierce","range":"melee","damage":"17","number":"2","icon":"attacks/halberd.png"}],"resistance":[{"pierce":"90"}],"attack_anim":[{"filter_attack":[{"name":"halberd","type":"pierce"}],"frame":[{"duration":"50","image":"units/drakes/arbiter.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-se-1.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-s-3.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-s-4.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-s-5.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-s-6.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-s-7.png"},{"duration":"100","image":"units/drakes/arbiter.png"}],"else":[{"frame":[{"duration":"100","image":"units/drakes/arbiter-pierce-se-2.png","sound":"spear-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/drakes/arbiter-pierce-se-2.png","sound":"spear.ogg"}],"hits":"yes"}],"direction":"s","offset":"0.0~0.1,0.1~0.0","start_time":"-300"},{"filter_attack":[{"name":"halberd","type":"pierce"}],"frame":[{"duration":"50","image":"units/drakes/arbiter.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-se-1.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-se-3.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-se-4.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-se-5.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-se-6.png"},{"duration":"100","image":"units/drakes/arbiter-pierce-se-7.png"},{"duration":"100","image":"units/drakes/arbiter.png"}],"else":[{"frame":[{"duration":"100","image":"units/drakes/arbiter-pierce-se-2.png","sound":"spear-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/drakes/arbiter-pierce-se-2.png","sound":"spear.ogg"}],"hits":"yes"}],"direction":"se,sw","offset":"0.0~0.1,0.1~0.0","start_time":"-300"},{"filter_attack":[{"name":"halberd","type":"pierce"}],"else":[{"frame":[{"duration":"100","image":"units/drakes/arbiter.png","sound":"spear-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/drakes/arbiter.png","sound":"spear.ogg"}],"hits":"yes"}],"direction":"ne,n,nw"},{"filter_attack":[{"name":"halberd","type":"blade"}],"frame":[{"duration":"50","image":"units/drakes/arbiter.png"},{"duration":"100","image":"units/drakes/arbiter-blade-se-1.png"},{"duration":"100","image":"units/drakes/arbiter-blade-se-3.png"},{"duration":"100","image":"units/drakes/arbiter-blade-s-4.png"},{"duration":"100","image":"units/drakes/arbiter-blade-s-5.png"},{"duration":"100","image":"units/drakes/arbiter-blade-s-6.png"},{"duration":"100","image":"units/drakes/arbiter.png"}],"else":[{"frame":[{"duration":"100","image":"units/drakes/arbiter-blade-se-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/drakes/arbiter-blade-se-2.png","sound":"axe.ogg"}],"hits":"yes"}],"direction":"s","offset":"0.0~0.1,0.1~0.0","start_time":"-300"},{"filter_attack":[{"name":"halberd","type":"blade"}],"frame":[{"duration":"50","image":"units/drakes/arbiter.png"},{"duration":"100","image":"units/drakes/arbiter-blade-se-1.png"},{"duration":"100","image":"units/drakes/arbiter-blade-se-3.png"},{"duration":"100","image":"units/drakes/arbiter-blade-se-4.png"},{"duration":"100","image":"units/drakes/arbiter-blade-se-5.png"},{"duration":"100","image":"units/drakes/arbiter-blade-se-6.png"},{"duration":"100","image":"units/drakes/arbiter.png"}],"else":[{"frame":[{"duration":"100","image":"units/drakes/arbiter-blade-se-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/drakes/arbiter-blade-se-2.png","sound":"axe.ogg"}],"hits":"yes"}],"direction":"se,sw","offset":"0.0~0.1,0.1~0.0","start_time":"-300"},{"filter_attack":[{"name":"halberd","type":"blade"}],"else":[{"frame":[{"duration":"100","image":"units/drakes/arbiter.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/drakes/arbiter.png","sound":"axe.ogg"}],"hits":"yes"}],"direction":"ne,n,nw"}],"id":"Drake Arbiter","name":"Drake Arbiter","race":"drake","image":"units/drakes/arbiter.png","flag_rgb":"magenta","hitpoints":"62","movement_type":"drakefoot","movement":"5","experience":"105","level":"2","alignment":"lawful","advances_to":"Drake Warden","undead_variation":"drake","cost":"31","usage":"fighter","profile":"portraits/drakes/clasher.png","description":"Arbiters take their caste duty of enforcing order very seriously. In order to better execute their duties, they have abandoned the drakes\u2019 traditional hand-mounted claws and traded their spears for the spike and blade of the halberd. In their minds, the loss of maneuverability is a fair price for the raw heft the massive metal head provides. The thick plate these drakes wear protects them well against weapons that could slip between their scales.\n\nSpecial Notes: The length of this unit\u2019s weapon allows it to strike first in melee, even in defense.","die_sound":"drake-die.ogg"}