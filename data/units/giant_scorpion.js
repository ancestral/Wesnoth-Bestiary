{"defend":[{"frame":[{"duration":"1","image":"units/monsters/scorpion.png"},{"duration":"100","image":"units/monsters/scorpion-defend.png"},{"duration":"1","image":"units/monsters/scorpion.png"}],"else":[{"frame":[{"duration":"150","image":"units/monsters/scorpion-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/monsters/scorpion-defend.png","sound":"hiss.wav"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"specials":[{"poison":[{"id":"poison","name":"poison","description":"Poison:\nThis attack poisons living targets. Poisoned units lose 8 HP every turn until they are cured or are reduced to 1 HP. Poison can not, of itself, kill a unit."}]}],"name":"sting","description":"sting","type":"pierce","range":"melee","damage":"9","defense_weight":"4.0","number":"1"},{"name":"pincers","description":"pincers","type":"impact","range":"melee","damage":"4","number":"4"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack_anim":[{"filter_attack":[{"name":"pincers"}],"frame":[{"begin":"-200","end":"-150","image":"units/monsters/scorpion.png"},{"begin":"50","end":"100","image":"units/monsters/scorpion.png"},{"begin":"100","end":"200","image":"units/monsters/scorpion-defend.png"}],"else":[{"frame":[{"begin":"-150","end":"50","image":"units/monsters/scorpion-pincers-attack.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-150","end":"50","image":"units/monsters/scorpion-pincers-attack.png","sound":"pincers.ogg"}],"hits":"yes"}]},{"filter_attack":[{"name":"sting"}],"frame":[{"begin":"-225","end":"-175","image":"units/monsters/scorpion.png"},{"begin":"-175","end":"-100","image":"units/monsters/scorpion-defend.png"},{"begin":"-50","end":"100","image":"units/monsters/scorpion-sting-attack.png"},{"begin":"100","end":"200","image":"units/monsters/scorpion.png"}],"else":[{"frame":[{"begin":"-100","end":"-50","image":"units/monsters/scorpion-sting-attack.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"-50","image":"units/monsters/scorpion-sting-attack.png","sound":"spear.ogg"}],"hits":"yes"},{"filter_second":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]}],"poisoned_sound_frame":[{"duration":"100","sound":"poison.ogg"}],"hits":"hit","poisoned_sound_start_time":"-100"}]}],"id":"Giant Scorpion","name":"Giant Scorpion","race":"monster","image":"units/monsters/scorpion.png","ellipse":"misc/ellipse","profile":"portraits/monsters/scorpion.png~RIGHT()","hitpoints":"40","movement_type":"scuttlefoot","movement":"8","experience":"150","level":"1","alignment":"neutral","advances_to":"null","cost":"22","usage":"fighter","description":"A normal scorpion is dangerous enough \u2014 the deadliness of one the size of a man needs little explanation.\n\nSpecial Notes: The victims of this unit\u2019s poison will continually take damage until they can be cured in town or by a unit which cures.","die_sound":"hiss-big.wav"}