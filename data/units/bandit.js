{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/humans/transparent/bandit.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/humans/transparent/bandit.png"}],"defend":[{"frame":[{"duration":"1","image":"units/human-outlaws/bandit-defend-1.png"},{"duration":"100","image":"units/human-outlaws/bandit-defend-2.png"},{"duration":"1","image":"units/human-outlaws/bandit-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-outlaws/bandit-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-outlaws/bandit-defend-2.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,human-hit-5.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"mace-spiked","description":"mace","type":"impact","range":"melee","damage":"8","number":"4"}],"attack_anim":[{"filter_attack":[{"name":"mace-spiked"}],"frame":[{"duration":"100","image":"units/human-outlaws/bandit-melee-1.png"},{"duration":"100","image":"units/human-outlaws/bandit-melee-3.png"},{"duration":"100","image":"units/human-outlaws/bandit-melee-4.png"},{"duration":"100","image":"units/human-outlaws/bandit-melee-5.png"},{"duration":"100","image":"units/human-outlaws/bandit-melee-6.png"},{"duration":"100","image":"units/human-outlaws/bandit-melee-7.png"},{"duration":"100","image":"units/human-outlaws/bandit-melee-8.png"}],"else":[{"frame":[{"duration":"100","image":"units/human-outlaws/bandit-melee-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/human-outlaws/bandit-melee-2.png","sound":"staff.wav"}],"hits":"yes"}],"offset":"0.0~0.2,0.2~0.6,0.6~0.4,0.4~0.0","start_time":"-500"}],"id":"Bandit","name":"Bandit","race":"human","image":"units/human-outlaws/bandit.png","flag_rgb":"magenta","profile":"portraits/humans/bandit.png","hitpoints":"50","movement_type":"smallfoot","movement":"5","level":"2","alignment":"chaotic","experience":"70","advances_to":"Highwayman","cost":"23","usage":"fighter","description":"Bandits are a motley collection of men, most of dubious background. They are the strong arm of any organized group of criminals, and though they may lack in finesse, or intelligence, they excel at their preferred task of pummeling victims into submission. Like any sort of outlaw, they\u2019re not comfortable fighting in broad daylight, being used to working at night.","die_sound":"human-die-1.ogg,human-die-2.ogg,human-die-3.ogg"}