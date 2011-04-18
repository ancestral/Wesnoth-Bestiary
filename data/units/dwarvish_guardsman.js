{"abilities":[{"resistance":[{"filter_base_value":[{"greater_than":"0","less_than":"50"}],"id":"steadfast","multiply":"2","max_value":"50","name":"steadfast","female_name":"female^steadfast","description":"Steadfast:\nThis unit\u2019s resistances are doubled, up to a maximum of 50%, when defending. Vulnerabilities are not affected.","affect_self":"yes","active_on":"defense"}]}],"attack_anim":[{"filter_attack":[{"name":"javelin"}],"else":[{"frame":[{"begin":"-150","end":"-50","image":"units/dwarves/guard-attack.png"}],"hits":"no"}],"frame":[{"begin":"-250","end":"-150","image":"units/dwarves/guard-defend-1.png","sound":"throw-1.wav,throw-2.wav,throw-3.wav,throw-4.wav"},{"begin":"-50","end":"0","image":"units/dwarves/guard.png"}],"if":[{"frame":[{"begin":"-150","end":"-50","image":"units/dwarves/guard-attack.png","sound":"spear.ogg"}],"hits":"yes"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/spear-n.png","image_diagonal":"projectiles/spear-ne.png"}]},{"filter_attack":[{"name":"spear"}],"frame":[{"duration":"100","image":"units/dwarves/guard-attack-1.png"},{"duration":"100","image":"units/dwarves/guard-attack-2.png"},{"duration":"50","image":"units/dwarves/guard-attack-3.png"},{"duration":"50","image":"units/dwarves/guard-attack-5.png"},{"duration":"100","image":"units/dwarves/guard-attack-6.png"},{"duration":"100","image":"units/dwarves/guard-attack-7.png"},{"duration":"100","image":"units/dwarves/guard-attack-1.png"}],"else":[{"frame":[{"duration":"50","image":"units/dwarves/guard-attack-4.png","sound":"spear-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"50","image":"units/dwarves/guard-attack-4.png","sound":"spear.ogg"}],"hits":"yes"}],"start_time":"-300"}],"defend":[{"frame":[{"duration":"1","image":"units/dwarves/guard-defend-1.png"},{"duration":"100","image":"units/dwarves/guard-defend-2.png"},{"duration":"1","image":"units/dwarves/guard-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/guard-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/guard-defend-2.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"spear","description":"spear","icon":"attacks/spear.png","type":"pierce","range":"melee","damage":"5","number":"3"},{"name":"javelin","description":"javelin","icon":"attacks/javelin-human.png","type":"pierce","range":"ranged","damage":"5","number":"1"}],"defense":[{"mountains":"40","hills":"50"}],"idle_anim":[{"filter":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]},{"filter_adjacent":[{"is_enemy":"yes","count":"0"}]}],"frame":[{"duration":"100","image":"units/dwarves/guard-idle-1.png"},{"duration":"500","image":"units/dwarves/guard-idle-2.png"},{"duration":"100","image":"units/dwarves/guard-idle-3.png"},{"duration":"100","image":"units/dwarves/guard-idle-4.png"},{"duration":"400","image":"units/dwarves/guard-idle-5.png"},{"duration":"500","image":"units/dwarves/guard-idle-6.png"},{"duration":"100","image":"units/dwarves/guard-idle-1.png"}],"start_time":"0"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/dwarves/transparent/guard.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/dwarves/transparent/guard.png"}],"standing_anim":[{"frame":[{"duration":"400","image":"units/dwarves/guard.png"},{"duration":"150","image":"units/dwarves/guard-bob-1.png"},{"duration":"150","image":"units/dwarves/guard-bob-2.png"},{"duration":"300","image":"units/dwarves/guard-bob-3.png"},{"duration":"100","image":"units/dwarves/guard-bob-2.png"},{"duration":"100","image":"units/dwarves/guard-bob-1.png"},{"duration":"400","image":"units/dwarves/guard.png"},{"duration":"150","image":"units/dwarves/guard-bob-1.png"},{"duration":"150","image":"units/dwarves/guard-bob-2.png"},{"duration":"300","image":"units/dwarves/guard-bob-3.png"},{"duration":"100","image":"units/dwarves/guard-bob-2.png"},{"duration":"100","image":"units/dwarves/guard-bob-1.png"},{"duration":"400","image":"units/dwarves/guard.png"},{"duration":"150","image":"units/dwarves/guard-bob-1.png"},{"duration":"150","image":"units/dwarves/guard-bob-2.png"},{"duration":"300","image":"units/dwarves/guard-bob-3.png"},{"duration":"100","image":"units/dwarves/guard-bob-4.png"},{"duration":"100","image":"units/dwarves/guard-bob-5.png"}],"start_time":"0"}],"id":"Dwarvish Guardsman","name":"Dwarvish Guardsman","race":"dwarf","image":"units/dwarves/guard.png","ellipse":"misc/ellipse","profile":"portraits/dwarves/guard.png","flag_rgb":"magenta","hitpoints":"42","movement_type":"dwarvishfoot","movement":"4","experience":"47","level":"1","alignment":"neutral","advances_to":"Dwarvish Stalwart","undead_variation":"dwarf","cost":"19","usage":"fighter","description":"The dwarven race has always been famed for its sturdiness of build, and many of their warriors outfit themselves to take advantage of this. Dwarven guardsmen march into battle with tower shields and spears. Most often, their role is to hold the line, and to take a heavy toll on those who try to break it. As the line marches forward, they act to secure its hard-won advance.\n\nSpecial Notes: The steadiness of this unit reduces damage from some attacks, but only while defending.","die_sound":"dwarf-die-1.ogg,dwarf-die-2.ogg"}