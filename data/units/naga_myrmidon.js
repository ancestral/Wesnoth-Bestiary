{"attack_anim":[{"filter_attack":[{"name":"sword"}],"frame":[{"duration":"130","image":"units/nagas/myrmidon-melee-1.png"},{"duration":"100","image":"units/nagas/myrmidon-melee-3.png"},{"duration":"90","image":"units/nagas/myrmidon-melee-4.png"},{"duration":"80","image":"units/nagas/myrmidon-melee-5.png"},{"duration":"70","image":"units/nagas/myrmidon-melee-6.png"}],"else":[{"frame":[{"duration":"100","image":"units/nagas/myrmidon-melee-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/nagas/myrmidon-melee-2.png","sound":"sword-1.ogg"}],"hits":"yes"}],"start_time":"-250","offset":"0.0~0.3,0.3~0.5,0.5~0.60,0.60~0.3,0.3~0.0"}],"defend":[{"frame":[{"duration":"1","image":"units/nagas/myrmidon-defend-1.png"},{"duration":"100","image":"units/nagas/myrmidon-defend-2.png"},{"duration":"1","image":"units/nagas/myrmidon-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/nagas/myrmidon-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/nagas/myrmidon-defend-2.png","sound":"naga-hit-1.ogg,naga-hit-2.ogg,naga-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"sword","description":"sword","icon":"attacks/sword-orcish.png","type":"blade","range":"melee","damage":"9","number":"5"}],"defense":[{"flat":"50","sand":"40"}],"female":[{"name":"Nagini Myrmidon","gender":"female","description":"The most practiced of the nagani blademasters are initiated into the caste of the Myrmidon, masters of their twin-bladed art. They strike as fast as the snakes which they resemble, and dance away from attacks with grace. Not only are they potent enemies on any open terrain, but their ability to swim allows them a deadly mobility."}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/nagas/transparent/myrmidon.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/nagas/transparent/myrmidon.png"}],"id":"Naga Myrmidon","name":"Naga Myrmidon","race":"naga","gender":"male,female","image":"units/nagas/myrmidon.png","profile":"portraits/nagas/myrmidon.png","flag_rgb":"magenta","hitpoints":"49","movement_type":"naga","movement":"7","experience":"150","level":"3","alignment":"neutral","advances_to":"null","undead_variation":"swimmer","cost":"48","usage":"fighter","description":"The most practiced of the naga blademasters are initiated into the caste of the Myrmidon, masters of their twin-bladed art. They strike as fast as the snakes which they resemble, and dance away from attacks with grace. Not only are they potent enemies on any open terrain, but their ability to swim allows them deadly mobility in water.","die_sound":"naga-die.ogg"}