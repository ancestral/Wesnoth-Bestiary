{"trait":[{"id":"fearless","availability":"musthave","male_name":"fearless","female_name":"female^fearless","description":"Fights normally during unfavorable times of day/night"}],"defend":[{"frame":[{"duration":"1","image":"units/undead/ghoul-defend-1.png"},{"duration":"100","image":"units/undead/ghoul-defend-2.png"},{"duration":"1","image":"units/undead/ghoul-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/undead/ghoul-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/undead/ghoul-defend-2.png","sound":"ghoul-hit.wav"}],"hits":"hit"}],"start_time":"-126"}],"attack_anim":[{"filter_attack":[{"name":"claws"}],"frame":[{"begin":"-250","end":"-200","image":"units/undead/ghoul.png"},{"begin":"-200","end":"-125","image":"units/undead/ghoul-attack-1.png"},{"begin":"-50","end":"50","image":"units/undead/ghoul-attack-3.png"},{"begin":"50","end":"125","image":"units/undead/ghoul-attack-4.png"},{"begin":"125","end":"200","image":"units/undead/ghoul.png"}],"else":[{"frame":[{"begin":"-125","end":"-50","image":"units/undead/ghoul-attack-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-125","end":"-50","image":"units/undead/ghoul-attack-2.png","sound":"claws.ogg"}],"hits":"yes"},{"filter_second":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]}],"poisoned_sound_frame":[{"duration":"100","sound":"poison.ogg"}],"hits":"hit","poisoned_sound_start_time":"-100"}]}],"attack":[{"specials":[{"poison":[{"id":"poison","name":"poison","description":"Poison:\nThis attack poisons living targets. Poisoned units lose 8 HP every turn until they are cured or are reduced to 1 HP. Poison can not, of itself, kill a unit."}]}],"name":"claws","description":"claws","icon":"attacks/claws-undead.png","type":"blade","range":"melee","damage":"4","number":"3"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/undead/transparent/ghoul.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/undead/transparent/ghoul.png"}],"id":"Ghoul","name":"Ghoul","race":"undead","flag_rgb":"magenta","image":"units/undead/ghoul.png","ellipse":"misc/ellipse","profile":"portraits/undead/ghoul.png","hitpoints":"33","movement_type":"gruefoot","movement":"5","experience":"35","level":"1","alignment":"chaotic","advances_to":"Necrophage","cost":"16","usage":"fighter","description":"Only the more perverse and sadistic of necromancers know what must be done to turn a person into a ghoul, and it is a secret they are not telling. The result, however, is all too well known; it is a beast that knows nothing of its days as a human being, a creature that shambles about as naked as the day it was born, and gorges itself on the flesh of the dead.\n\nIt is because of such things that necromancy is condemned with an almost primal hatred in all civilized lands.\n\nSpecial Notes: The victims of this unit\u2019s poison will continually take damage until they can be cured in town or by a unit which cures.","die_sound":"ghoul-hit.wav"}