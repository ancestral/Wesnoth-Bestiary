{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/humans/transparent/thug.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/humans/transparent/thug.png"}],"defend":[{"frame":[{"duration":"1","image":"units/human-outlaws/thug-defend-1.png"},{"duration":"100","image":"units/human-outlaws/thug-defend-2.png"},{"duration":"1","image":"units/human-outlaws/thug-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-outlaws/thug-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-outlaws/thug-defend-2.png","sound":"human-hit-1.ogg,human-hit-2.ogg,human-hit-3.ogg,human-hit-4.ogg,human-hit-5.ogg"}],"hits":"hit"}],"start_time":"-126"}],"idle_anim":[{"filter":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]},{"filter_adjacent":[{"is_enemy":"yes","count":"0"}]}],"frame":[{"duration":"100","image":"units/human-outlaws/thug-idle-1.png"},{"duration":"100","image":"units/human-outlaws/thug-idle-2.png"},{"duration":"100","image":"units/human-outlaws/thug-idle-3.png"},{"duration":"400","image":"units/human-outlaws/thug-idle-4.png"},{"duration":"300","image":"units/human-outlaws/thug-idle-5.png"},{"duration":"400","image":"units/human-outlaws/thug-idle-4.png"},{"duration":"300","image":"units/human-outlaws/thug-idle-5.png"},{"duration":"600","image":"units/human-outlaws/thug-idle-4.png"},{"duration":"100","image":"units/human-outlaws/thug-idle-5.png"},{"duration":"100","image":"units/human-outlaws/thug-idle-2.png"},{"duration":"100","image":"units/human-outlaws/thug-idle-1.png"}]}],"attack":[{"name":"club","description":"club","type":"impact","range":"melee","damage":"5","number":"4"}],"attack_anim":[{"filter_attack":[{"name":"club"}],"frame":[{"duration":"100","image":"units/human-outlaws/thug-melee-1.png"},{"duration":"100","image":"units/human-outlaws/thug-melee-3.png"},{"duration":"100","image":"units/human-outlaws/thug-melee-4.png"},{"duration":"100","image":"units/human-outlaws/thug-melee-5.png"},{"duration":"100","image":"units/human-outlaws/thug-melee-6.png"},{"duration":"100","image":"units/human-outlaws/thug-melee-7.png"},{"duration":"100","image":"units/human-outlaws/thug-melee-8.png"}],"else":[{"frame":[{"duration":"100","image":"units/human-outlaws/thug-melee-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/human-outlaws/thug-melee-2.png","sound":"staff.wav"}],"hits":"yes"}],"offset":"0.0~0.2,0.2~0.6,0.6~0.4,0.4~0.0","start_time":"-500"}],"id":"Thug","name":"Thug","race":"human","image":"units/human-outlaws/thug.png","profile":"portraits/humans/thug.png","flag_rgb":"magenta","ellipse":"misc/ellipse","hitpoints":"32","movement_type":"smallfoot","movement":"5","experience":"42","level":"1","alignment":"chaotic","advances_to":"Bandit","cost":"13","usage":"fighter","description":"Thugs come from a wide variety of sources; while a few are born into thuggery, many are former soldiers deemed unfit to serve in the army or peasants thrown off their lands. They become thugs as a means of sustenance. Regardless of their background, they all share a penchant for beating their victims with large clubs.","die_sound":"human-die-1.ogg,human-die-2.ogg,human-die-3.ogg"}