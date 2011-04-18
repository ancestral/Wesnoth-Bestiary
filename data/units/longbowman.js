{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/humans/transparent/longbowman.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/humans/transparent/longbowman.png"}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/human-loyalists/longbowman-melee-defend-1.png"},{"duration":"100","image":"units/human-loyalists/longbowman-melee-defend-2.png"},{"duration":"1","image":"units/human-loyalists/longbowman-melee-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-loyalists/longbowman-melee-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-loyalists/longbowman-melee-defend-2.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,human-hit-5.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/human-loyalists/longbowman-bow.png"},{"duration":"100","image":"units/human-loyalists/longbowman-bow-defend.png"},{"duration":"1","image":"units/human-loyalists/longbowman-bow.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-loyalists/longbowman-bow-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-loyalists/longbowman-bow-defend.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,human-hit-5.ogg"}],"hits":"hit"}],"start_time":"-126"}],"idle_anim":[{"filter":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]},{"filter_adjacent":[{"is_enemy":"yes","count":"0"}]}],"frame":[{"duration":"1000","image":"units/human-loyalists/longbowman-idle-1.png"},{"duration":"400","image":"units/human-loyalists/longbowman-idle-2.png"},{"duration":"100","image":"units/human-loyalists/longbowman-idle-3.png"},{"duration":"200","image":"units/human-loyalists/longbowman-idle-4.png"},{"duration":"100","image":"units/human-loyalists/longbowman-idle-3.png"},{"duration":"200","image":"units/human-loyalists/longbowman-idle-4.png"},{"duration":"100","image":"units/human-loyalists/longbowman-idle-3.png"},{"duration":"200","image":"units/human-loyalists/longbowman-idle-4.png"},{"duration":"100","image":"units/human-loyalists/longbowman-idle-3.png"},{"duration":"400","image":"units/human-loyalists/longbowman-idle-4.png"},{"duration":"100","image":"units/human-loyalists/longbowman-idle-1.png"}],"start_time":"0"}],"attack":[{"name":"sword","description":"sword","icon":"attacks/sword-human.png","type":"blade","range":"melee","damage":"8","number":"2"},{"name":"bow","description":"longbow","type":"pierce","range":"ranged","damage":"10","number":"3"}],"attack_anim":[{"filter_attack":[{"name":"bow"}],"else":[{"frame":[{"duration":"100","image":"units/human-loyalists/longbowman-bow-attack-3.png","sound":"bow.ogg"}],"hits":"yes"}],"frame":[{"duration":"65","image":"units/human-loyalists/longbowman-bow.png"},{"duration":"75","image":"units/human-loyalists/longbowman-bow-attack-1.png"},{"duration":"75","image":"units/human-loyalists/longbowman-bow-attack-2.png"},{"duration":"130","image":"units/human-loyalists/longbowman-bow-attack-4.png"},{"duration":"65","image":"units/human-loyalists/longbowman-bow-attack-1.png"}],"if":[{"frame":[{"duration":"100","image":"units/human-loyalists/longbowman-bow-attack-3.png","sound":"bow-miss.ogg"}],"hits":"no"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/missile-n.png","image_diagonal":"projectiles/missile-ne.png"}],"start_time":"-445"},{"filter_attack":[{"name":"sword"}],"frame":[{"duration":"50","image":"units/human-loyalists/longbowman-melee-defend-1.png"},{"duration":"100","image":"units/human-loyalists/longbowman-melee-attack-1.png"},{"duration":"100","image":"units/human-loyalists/longbowman-melee-attack-3.png"},{"duration":"100","image":"units/human-loyalists/longbowman-melee-attack-4.png"},{"duration":"50","image":"units/human-loyalists/longbowman-melee-defend-1.png"}],"else":[{"frame":[{"duration":"100","image":"units/human-loyalists/longbowman-melee-attack-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/human-loyalists/longbowman-melee-attack-2.png","sound":"sword-1.ogg"}],"hits":"yes"}],"start_time":"-275"}],"id":"Longbowman","name":"Longbowman","race":"human","gender":"male","image":"units/human-loyalists/longbowman.png","profile":"portraits/humans/longbowman.png","flag_rgb":"magenta","hitpoints":"51","movement_type":"smallfoot","movement":"5","experience":"68","level":"2","alignment":"lawful","advances_to":"Master Bowman","undead_variation":"archer","cost":"26","usage":"archer","description":"Longbows are fearsome weapons, but too difficult for beginning archers to wield. It takes great strength to draw one, and the added range and power it confers remain useless unless one has good aim with the weapon. Longbowmen carry their weapons as a badge of pride, and most bowmen look forward to the day they can begin using one.","die_sound":"human-die-1.ogg,human-die-2.ogg,human-die-3.ogg"}