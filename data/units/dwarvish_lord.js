{"attack_anim":[{"filter_attack":[{"name":"hatchet"}],"else":[{"frame":[{"duration":"100","image":"units/dwarves/lord-ranged-5.png","sound":"hatchet-miss.wav"}],"hits":"no"}],"frame":[{"duration":"100","image":"units/dwarves/lord-ranged-1.png"},{"duration":"100","image":"units/dwarves/lord-ranged-2.png"},{"duration":"100","image":"units/dwarves/lord-ranged-3.png"},{"duration":"100","image":"units/dwarves/lord-ranged-4.png"},{"duration":"100","image":"units/dwarves/lord-ranged.png"}],"if":[{"frame":[{"duration":"100","image":"units/dwarves/lord-ranged-5.png","sound":"hatchet.wav"}],"hits":"yes"}],"missile_frame":[{"begin":"-200","end":"-150","image":"projectiles/hatchet-2.png","image_diagonal":"projectiles/hatchet-2.png"},{"begin":"-150","end":"-100","image":"projectiles/hatchet-3.png","image_diagonal":"projectiles/hatchet-3.png"},{"begin":"-100","end":"-50","image":"projectiles/hatchet-4.png","image_diagonal":"projectiles/hatchet-4.png"},{"begin":"-50","end":"0","image":"projectiles/hatchet-1.png","image_diagonal":"projectiles/hatchet-1.png"}],"start_time":"-450"},{"filter_attack":[{"name":"hammer"}],"frame":[{"duration":"40","image":"units/dwarves/lord-hammer.png"},{"duration":"100","image":"units/dwarves/lord-hammer-1.png"},{"duration":"100","image":"units/dwarves/lord-hammer-3.png"},{"duration":"100","image":"units/dwarves/lord-hammer-4.png"},{"duration":"100","image":"units/dwarves/lord-hammer-5.png"},{"duration":"100","image":"units/dwarves/lord-hammer-6.png"},{"duration":"100","image":"units/dwarves/lord-hammer.png"}],"else":[{"frame":[{"duration":"100","image":"units/dwarves/lord-hammer-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/dwarves/lord-hammer-2.png","sound":"mace.wav"}],"hits":"yes"}],"start_time":"-350","offset":"0.0~0.3,0.3~0.6,0.6~0.3,0.3~0.0"},{"filter_attack":[{"name":"battle axe"}],"frame":[{"duration":"40","image":"units/dwarves/lord-axe-1.png"},{"duration":"60","image":"units/dwarves/lord-axe-2.png"},{"duration":"60","image":"units/dwarves/lord-axe-3.png"},{"duration":"60","image":"units/dwarves/lord-axe-4.png"},{"duration":"60","image":"units/dwarves/lord-axe-6.png"},{"duration":"60","image":"units/dwarves/lord-axe-7.png"},{"duration":"60","image":"units/dwarves/lord-axe-8.png"},{"duration":"60","image":"units/dwarves/lord-axe-9.png"},{"duration":"20","image":"units/dwarves/lord.png"}],"else":[{"frame":[{"duration":"60","image":"units/dwarves/lord-axe-5.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"60","image":"units/dwarves/lord-axe-5.png","sound":"axe.ogg"}],"hits":"yes"}],"start_time":"-350","offset":"0.0~-0.15:30,-0.15~0.1:60,0.1~0.5:190,0.5~0.6:30,0.6~0.6:40,0.6~0.15:150,0.15~0.0:40"}],"defend":[{"filter_second_attack":[{"name":"battle axe"}],"frame":[{"duration":"1","image":"units/dwarves/lord-defend-1.png"},{"duration":"100","image":"units/dwarves/lord-defend-2.png"},{"duration":"1","image":"units/dwarves/lord-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/lord-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/lord-defend-2.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_second_attack":[{"name":"hammer"}],"frame":[{"duration":"1","image":"units/dwarves/lord-hammer-defend-1.png"},{"duration":"100","image":"units/dwarves/lord-hammer-defend-2.png"},{"duration":"1","image":"units/dwarves/lord-hammer-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/lord-hammer-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/lord-hammer-defend-2.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/dwarves/lord-ranged-defend-1.png"},{"duration":"100","image":"units/dwarves/lord-ranged-defend-2.png"},{"duration":"1","image":"units/dwarves/lord-ranged-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/lord-ranged-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/lord-ranged-defend-2.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"resistance":[{"blade":"60","pierce":"70","impact":"70"}],"attack":[{"name":"battle axe","description":"battle axe","type":"blade","range":"melee","icon":"attacks/battleaxe.png","damage":"15","number":"3"},{"name":"hammer","description":"hammer","icon":"attacks/hammer-dwarven.png","type":"impact","range":"melee","damage":"19","number":"2"},{"name":"hatchet","description":"hatchet","type":"blade","range":"ranged","damage":"10","number":"2"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/dwarves/transparent/lord.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/dwarves/transparent/lord.png"}],"id":"Dwarvish Lord","name":"Dwarvish Lord","race":"dwarf","image":"units/dwarves/lord.png","profile":"portraits/dwarves/lord.png","flag_rgb":"magenta","hitpoints":"79","movement_type":"dwarvishfoot","movement":"4","experience":"150","level":"3","alignment":"neutral","advances_to":"null","undead_variation":"dwarf","cost":"54","usage":"fighter","description":"Clad in shining armor, these dwarves look like kings from under the mountains. They wield axe and hammer with masterful skill, and can hit a target with a thrown hand axe at several paces. Though slow on their feet, these dwarves are a testament to the prowess of their kin.","die_sound":"dwarf-die-1.ogg,dwarf-die-2.ogg"}