{"abilities":[{"resistance":[{"filter_base_value":[{"greater_than":"0","less_than":"50"}],"id":"steadfast","multiply":"2","max_value":"50","name":"steadfast","female_name":"female^steadfast","description":"Steadfast:\nThis unit\u2019s resistances are doubled, up to a maximum of 50%, when defending. Vulnerabilities are not affected.","affect_self":"yes","active_on":"defense"}]}],"attack_anim":[{"filter_attack":[{"name":"javelin"}],"else":[{"frame":[{"begin":"-150","end":"-50","image":"units/dwarves/stalwart-attack.png"}],"hits":"no"}],"frame":[{"begin":"-250","end":"-150","image":"units/dwarves/stalwart-defend-1.png","sound":"throw-1.wav,throw-2.wav,throw-3.wav,throw-4.wav"},{"begin":"-50","end":"0","image":"units/dwarves/stalwart.png"}],"if":[{"frame":[{"begin":"-150","end":"-50","image":"units/dwarves/stalwart-attack.png","sound":"spear.ogg"}],"hits":"yes"}],"missile_frame":[{"begin":"-150","end":"0","image":"projectiles/spear-n.png","image_diagonal":"projectiles/spear-ne.png"}]},{"filter_attack":[{"name":"spear"}],"frame":[{"begin":"-200","end":"-150","image":"units/dwarves/stalwart.png"},{"begin":"-150","end":"-100","image":"units/dwarves/stalwart-defend-1.png"},{"begin":"50","end":"75","image":"units/dwarves/stalwart-defend-1.png"},{"begin":"75","end":"150","image":"units/dwarves/stalwart.png"}],"else":[{"frame":[{"begin":"-100","end":"50","image":"units/dwarves/stalwart-attack.png","sound":"spear-miss.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"50","image":"units/dwarves/stalwart-attack.png","sound":"spear.ogg"}],"hits":"yes"}]}],"defend":[{"frame":[{"duration":"1","image":"units/dwarves/stalwart-defend-1.png"},{"duration":"100","image":"units/dwarves/stalwart-defend-2.png"},{"duration":"1","image":"units/dwarves/stalwart-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/stalwart-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/stalwart-defend-2.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"spear","description":"spear","icon":"attacks/spear.png","type":"pierce","range":"melee","damage":"7","number":"3"},{"name":"javelin","description":"javelin","icon":"attacks/javelin-human.png","type":"pierce","range":"ranged","damage":"8","number":"1"}],"defense":[{"flat":"60","forest":"60","sand":"60","mountains":"40","hills":"50"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/dwarves/transparent/sentinel.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/dwarves/transparent/sentinel.png"}],"id":"Dwarvish Stalwart","name":"Dwarvish Stalwart","race":"dwarf","image":"units/dwarves/stalwart.png","profile":"portraits/dwarves/sentinel.png","flag_rgb":"magenta","hitpoints":"54","movement_type":"dwarvishfoot","movement":"4","experience":"85","level":"2","alignment":"neutral","advances_to":"Dwarvish Sentinel","undead_variation":"dwarf","cost":"32","usage":"fighter","description":"The wiles of experience and training turn guardsmen into worthy soldiers. These stalwart troops are equipped to match their skills, and can hold their ground against all but the most visceral assault. It is a dangerous thing to lose a foothold to one such as these, for it will not be easily reprised.\n\nSpecial Notes: The steadiness of this unit reduces damage from some attacks, but only while defending.","die_sound":"dwarf-die-1.ogg,dwarf-die-2.ogg"}