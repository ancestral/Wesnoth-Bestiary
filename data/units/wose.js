{"abilities":[{"regenerate":[{"value":"8","id":"regenerates","name":"regenerates","female_name":"female^regenerates","description":"Regenerates:\nThe unit will heal itself 8 HP per turn. If it is poisoned, it will remove the poison instead of healing.","affect_self":"yes","poison":"cured"}],"hides":[{"filter_self":[{"filter_location":[{"terrain":"*^Fp,*^Fet,*^Ft,*^Fpa,*^Fd*,*^Fm*"}]}],"id":"ambush","name":"ambush","female_name":"female^ambush","name_inactive":"ambush","female_name_inactive":"female^ambush","description":"Ambush:\nThis unit can hide in forest, and remain undetected by its enemies.\n\nEnemy units cannot see this unit while it is in forest, except if they have units next to it. Any enemy unit that first discovers this unit immediately loses all its remaining movement.","description_inactive":"Ambush:\nThis unit can hide in forest, and remain undetected by its enemies.\n\nEnemy units cannot see this unit while it is in forest, except if they have units next to it. Any enemy unit that first discovers this unit immediately loses all its remaining movement.","affect_self":"yes"}]}],"attack_anim":[{"filter_attack":[{"name":"crush"}],"frame":[{"duration":"150","image":"units/woses/wose-attack-2.png"},{"duration":"75","image":"units/woses/wose-attack-1.png"}],"else":[{"frame":[{"duration":"400","image":"units/woses/wose-attack-1.png","sound":"wose-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"400","image":"units/woses/wose-attack-1.png","sound":"wose-attack.ogg"}],"hits":"yes"}],"start_time":"-500"}],"defend":[{"frame":[{"duration":"1","image":"units/woses/wose.png"},{"duration":"100","image":"units/woses/wose-defend.png"},{"duration":"1","image":"units/woses/wose.png"}],"else":[{"frame":[{"duration":"150","image":"units/woses/wose-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/woses/wose-defend.png","sound":"wose-hit.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"crush","description":"crush","icon":"attacks/crush-wose.png","type":"impact","range":"melee","damage":"13","number":"2"}],"death":[{"filter_attack":[{"type":"blade,impact,pierce"}],"frame":[{"duration":"100","image":"units/woses/wose-die-fall-1.png"},{"duration":"100","image":"units/woses/wose-die-fall-2.png"},{"duration":"100","image":"units/woses/wose-die-fall-3.png"},{"duration":"100","image":"units/woses/wose-die-fall-4.png"},{"duration":"100","image":"units/woses/wose-die-fall-5.png"},{"duration":"100","image":"units/woses/wose-die-fall-6.png"},{"duration":"100","image":"units/woses/wose-die-fall-7.png"},{"duration":"100","image":"units/woses/wose-die-fall-8.png"},{"duration":"100","image":"units/woses/wose-die-fall-9.png"},{"duration":"100","image":"units/woses/wose-die-fall-10.png"},{"duration":"100","image":"units/woses/wose-die-fall-11.png"},{"duration":"100","image":"units/woses/wose-die-fall-12.png"},{"duration":"100","image":"units/woses/wose-die-fall-13.png"},{"duration":"100","image":"units/woses/wose-die-fall-14.png"},{"duration":"100","image":"units/woses/wose-die-fall-15.png"}],"start_time":"0"},{"filter_attack":[{"type":"arcane,fire,cold"}],"frame":[{"duration":"150","image":"units/woses/wose-die-decay-1.png"},{"duration":"150","image":"units/woses/wose-die-decay-2.png"},{"duration":"150","image":"units/woses/wose-die-decay-3.png"},{"duration":"150","image":"units/woses/wose-die-decay-4.png"},{"duration":"150","image":"units/woses/wose-die-decay-5.png"},{"duration":"150","image":"units/woses/wose-die-decay-6.png"},{"duration":"150","image":"units/woses/wose-die-decay-7.png"},{"duration":"150","image":"units/woses/wose-die-decay-8.png"},{"duration":"150","image":"units/woses/wose-die-decay-9.png"}],"start_time":"0"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/woses/transparent/ancient-wose.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/woses/transparent/ancient-wose.png"}],"id":"Wose","name":"Wose","race":"wose","image":"units/woses/wose.png","profile":"portraits/woses/ancient-wose.png","flag_rgb":"magenta","ellipse":"misc/ellipse","hitpoints":"52","movement_type":"treefolk","movement":"4","experience":"40","level":"1","alignment":"lawful","advances_to":"Elder Wose","undead_variation":"wose","cost":"20","description":"Rarely seen even by elves, the Wose is an order of creature about which little is known. The elves are the source of most of this knowledge; they know that these beings are not descended from trees, despite the similarity in form, and they know that a wose is more closely tied to the faerie world than the elves themselves, though in a different way. The motives and workings of their kind are unknown, though most subscribe to the obvious theory that woses are dedicated wardens of the natural world.\n\nWoses are utterly unwarlike, but possess a great strength. They are, however, neither used to, nor quick at moving around.\n\nSpecial Notes: In woodlands, this unit\u2019s ambush skill renders it invisible to enemies unless it is immediately adjacent or has revealed itself by attacking. This unit regenerates, which allows it to heal as though always stationed in a village.","usage":"fighter","die_sound":"wose-die.ogg"}