{"attack_anim":[{"filter_attack":[{"name":"hammer"}],"frame":[{"begin":"-350","end":"-100","image":"units/dwarves/runemaster.png"}],"else":[{"frame":[{"begin":"-100","end":"300","image":"units/dwarves/runemaster.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"300","image":"units/dwarves/runemaster.png","sound":"mace.wav"}],"hits":"yes"}],"offset":"0.0~0.3,0.3~0.5,0.5~0.6,0.6~0.5,0.5~0.3,0.3~0.0"}],"defend":[{"frame":[{"duration":"1","image":"units/dwarves/runemaster.png"},{"duration":"100","image":"units/dwarves/runemaster.png"},{"duration":"1","image":"units/dwarves/runemaster.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/runemaster.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/runemaster.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"resistance":[{"blade":"50","pierce":"60","impact":"60"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"specials":[{"chance_to_hit":[{"id":"magical","name":"magical","description":"Magical:\nThis attack always has a 70% chance to hit regardless of the defensive ability of the unit being attacked.","value":"70","cumulative":"no"}]}],"name":"hammer","description":"hammer","icon":"attacks/hammer-dwarven-runic.png","type":"impact","range":"melee","damage":"18","number":"2"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/dwarves/transparent/runemaster.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/dwarves/transparent/runemaster.png"}],"id":"Dwarvish Runemaster","name":"Dwarvish Runemaster","race":"dwarf","image":"units/dwarves/runemaster.png","profile":"portraits/dwarves/runemaster.png","flag_rgb":"magenta","hitpoints":"48","movement_type":"dwarvishfoot","movement":"4","level":"3","alignment":"neutral","cost":"50","undead_variation":"dwarf","usage":"fighter","experience":"150","advances_to":"null","description":"Except for those with almost supernatural skill, the highest rank a runecrafter can rise to is that of the Dwarvish Runemaster. Striking blows nearly as powerful as those of the best warriors, they would be fearsome without their craft, but with it they are also nigh on invincible, since their runes cause the physical blows of their enemies to deal less damage than would be expected.\n\nSpecial Notes: The unit has magical attacks, which always have a high chance of hitting an opponent.","die_sound":"dwarf-die-1.ogg,dwarf-die-2.ogg"}