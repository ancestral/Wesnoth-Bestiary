{"idle_anim":[{"filter":[{"not":[{"filter_wml":[{"status":[{"poisoned":"yes"}]}]}]},{"filter_adjacent":[{"is_enemy":"yes","count":"0"}]}],"frame":[{"duration":"100","image":"units/human-magi/arch-mage-idle-1.png"},{"duration":"100","image":"units/human-magi/arch-mage-idle-2.png"},{"duration":"100","image":"units/human-magi/arch-mage-idle-3.png"},{"duration":"100","image":"units/human-magi/arch-mage-idle-4.png"},{"duration":"2000","image":"units/human-magi/arch-mage-idle-5.png"},{"duration":"100","image":"units/human-magi/arch-mage-idle-4.png"},{"duration":"100","image":"units/human-magi/arch-mage-idle-3.png"},{"duration":"100","image":"units/human-magi/arch-mage-idle-2.png"},{"duration":"100","image":"units/human-magi/arch-mage-idle-1.png"}],"start_time":"0"}],"attack_anim":[{"filter_attack":[{"name":"fireball"}],"frame":[{"duration":"50","image":"units/human-magi/arch-mage.png"},{"duration":"100","image":"units/human-magi/arch-mage-attack-magic-1.png","sound":"fire.wav"},{"duration":"150","image":"units/human-magi/arch-mage-attack-magic-2.png"},{"duration":"75","image":"units/human-magi/arch-mage-attack-magic-1.png"},{"duration":"75","image":"units/human-magi/arch-mage.png"}],"else":[{"missile_frame":[{"duration":"40","image":"projectiles/fireball-n-1.png","image_diagonal":"projectiles/fireball-nw-1.png","offset":"0.0~0.10"},{"duration":"100","image":"projectiles/fireball-n-2.png","image_diagonal":"projectiles/fireball-nw-2.png","offset":"0.1~0.30"},{"duration":"125","image":"projectiles/fireball-n.png","image_diagonal":"projectiles/fireball-nw.png","offset":"0.3~0.60"},{"duration":"55","image":"projectiles/fireball-n-2.png","image_diagonal":"projectiles/fireball-nw-2.png","offset":"0.7~0.8"},{"duration":"30","image":"projectiles/fireball-n-1.png","image_diagonal":"projectiles/fireball-nw-1.png","offset":"0.8~0.9"},{"duration":"60","halo":"projectiles/fireball-impact-1.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-2.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-3.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-4.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-5.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-6.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-7.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-8.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-9.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-10.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-11.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-12.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-13.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-14.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-15.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-16.png~FL(vert)","offset":"1.0"}],"direction":"s,se,sw","hits":"yes"},{"missile_frame":[{"duration":"100","halo":"projectiles/fireball-fail-1.png"},{"duration":"100","halo":"projectiles/fireball-fail-2.png"},{"duration":"100","halo":"projectiles/fireball-fail-3.png"},{"duration":"100","halo":"projectiles/fireball-fail-4.png"},{"duration":"100","halo":"projectiles/fireball-fail-5.png"},{"duration":"100","halo":"projectiles/fireball-fail-6.png"},{"duration":"100","halo":"projectiles/fireball-fail-7.png"}],"direction":"n,ne,nw","hits":"no","missile_offset":"0.0~0.20,0.20~0.35,0.35~0.40,0.4~0.45"},{"missile_frame":[{"duration":"100","halo":"projectiles/fireball-fail-1.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-2.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-3.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-4.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-5.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-6.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-7.png~FL(vert)"}],"direction":"s,se,sw","hits":"no","missile_offset":"0.0~0.20,0.20~0.35,0.35~0.40,0.4~0.45"}],"if":[{"missile_frame":[{"duration":"40","image":"projectiles/fireball-n-1.png","image_diagonal":"projectiles/fireball-nw-1.png","offset":"0.0~0.10"},{"duration":"100","image":"projectiles/fireball-n-2.png","image_diagonal":"projectiles/fireball-nw-2.png","offset":"0.1~0.30"},{"duration":"125","image":"projectiles/fireball-n.png","image_diagonal":"projectiles/fireball-nw.png","offset":"0.3~0.60"},{"duration":"55","image":"projectiles/fireball-n-2.png","image_diagonal":"projectiles/fireball-nw-2.png","offset":"0.7~0.8"},{"duration":"30","image":"projectiles/fireball-n-1.png","image_diagonal":"projectiles/fireball-nw-1.png","offset":"0.8~0.9"},{"duration":"60","halo":"projectiles/fireball-impact-1.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-2.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-3.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-4.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-5.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-6.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-7.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-8.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-9.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-10.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-11.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-12.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-13.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-14.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-15.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-16.png","offset":"1.0"}],"direction":"n,ne,nw","hits":"yes"}],"missile_start_time":"-350","start_time":"-575"},{"filter_attack":[{"name":"staff"}],"frame":[{"begin":"-250","end":"-200","image":"units/human-magi/arch-mage.png"},{"begin":"-200","end":"-100","image":"units/human-magi/arch-mage-attack-staff-1.png"},{"begin":"100","end":"175","image":"units/human-magi/arch-mage-attack-magic-1.png"},{"begin":"175","end":"250","image":"units/human-magi/arch-mage.png"}],"else":[{"frame":[{"begin":"-100","end":"100","image":"units/human-magi/arch-mage-attack-staff-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"100","image":"units/human-magi/arch-mage-attack-staff-2.png","sound":"staff.wav"}],"hits":"yes"}]}],"defend":[{"frame":[{"duration":"1","image":"units/human-magi/arch-mage.png"},{"duration":"100","image":"units/human-magi/arch-mage-defend.png"},{"duration":"1","image":"units/human-magi/arch-mage.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-magi/arch-mage-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-magi/arch-mage-defend.png","sound":"human-old-hit-1.ogg,human-old-hit-2.ogg,human-old-hit-3.ogg,human-old-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"resistance":[{"fire":"80"}],"attack":[{"name":"staff","description":"staff","icon":"attacks/staff-magic.png","type":"impact","range":"melee","damage":"7","number":"2"},{"specials":[{"chance_to_hit":[{"id":"magical","name":"magical","description":"Magical:\nThis attack always has a 70% chance to hit regardless of the defensive ability of the unit being attacked.","value":"70","cumulative":"no"}]}],"name":"fireball","description":"fireball","type":"fire","range":"ranged","damage":"12","number":"4"}],"female":[{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/humans/transparent/mage-arch+female.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/humans/transparent/mage-arch+female.png"}],"defend":[{"frame":[{"duration":"1","image":"units/human-magi/arch-mage+female.png"},{"duration":"100","image":"units/human-magi/arch-mage+female-defend.png"},{"duration":"1","image":"units/human-magi/arch-mage+female.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-magi/arch-mage+female-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-magi/arch-mage+female-defend.png","sound":"human-female-hit-1.ogg,human-female-hit-2.ogg,human-female-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"idle_anim":[{"frame":[{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female.png"}]}],"attack_anim":[{"filter_attack":[{"name":"fireball"}],"frame":[{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female-attack-magic-1.png"},{"image":"units/human-magi/arch-mage+female-attack-magic-2.png"},{"image":"units/human-magi/arch-mage+female-attack-magic-1.png"},{"image":"units/human-magi/arch-mage+female.png"}],"else":[{"missile_frame":[{"duration":"40","image":"projectiles/fireball-n-1.png","image_diagonal":"projectiles/fireball-nw-1.png","offset":"0.0~0.10"},{"duration":"100","image":"projectiles/fireball-n-2.png","image_diagonal":"projectiles/fireball-nw-2.png","offset":"0.1~0.30"},{"duration":"125","image":"projectiles/fireball-n.png","image_diagonal":"projectiles/fireball-nw.png","offset":"0.3~0.60"},{"duration":"55","image":"projectiles/fireball-n-2.png","image_diagonal":"projectiles/fireball-nw-2.png","offset":"0.7~0.8"},{"duration":"30","image":"projectiles/fireball-n-1.png","image_diagonal":"projectiles/fireball-nw-1.png","offset":"0.8~0.9"},{"duration":"60","halo":"projectiles/fireball-impact-1.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-2.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-3.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-4.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-5.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-6.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-7.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-8.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-9.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-10.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-11.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-12.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-13.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-14.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-15.png~FL(vert)","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-16.png~FL(vert)","offset":"1.0"}],"direction":"s,se,sw","hits":"yes"},{"missile_frame":[{"duration":"100","halo":"projectiles/fireball-fail-1.png"},{"duration":"100","halo":"projectiles/fireball-fail-2.png"},{"duration":"100","halo":"projectiles/fireball-fail-3.png"},{"duration":"100","halo":"projectiles/fireball-fail-4.png"},{"duration":"100","halo":"projectiles/fireball-fail-5.png"},{"duration":"100","halo":"projectiles/fireball-fail-6.png"},{"duration":"100","halo":"projectiles/fireball-fail-7.png"}],"direction":"n,ne,nw","hits":"no","missile_offset":"0.0~0.20,0.20~0.35,0.35~0.40,0.4~0.45"},{"missile_frame":[{"duration":"100","halo":"projectiles/fireball-fail-1.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-2.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-3.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-4.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-5.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-6.png~FL(vert)"},{"duration":"100","halo":"projectiles/fireball-fail-7.png~FL(vert)"}],"direction":"s,se,sw","hits":"no","missile_offset":"0.0~0.20,0.20~0.35,0.35~0.40,0.4~0.45"}],"if":[{"missile_frame":[{"duration":"40","image":"projectiles/fireball-n-1.png","image_diagonal":"projectiles/fireball-nw-1.png","offset":"0.0~0.10"},{"duration":"100","image":"projectiles/fireball-n-2.png","image_diagonal":"projectiles/fireball-nw-2.png","offset":"0.1~0.30"},{"duration":"125","image":"projectiles/fireball-n.png","image_diagonal":"projectiles/fireball-nw.png","offset":"0.3~0.60"},{"duration":"55","image":"projectiles/fireball-n-2.png","image_diagonal":"projectiles/fireball-nw-2.png","offset":"0.7~0.8"},{"duration":"30","image":"projectiles/fireball-n-1.png","image_diagonal":"projectiles/fireball-nw-1.png","offset":"0.8~0.9"},{"duration":"60","halo":"projectiles/fireball-impact-1.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-2.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-3.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-4.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-5.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-6.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-7.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-8.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-9.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-10.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-11.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-12.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-13.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-14.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-15.png","offset":"1.0"},{"duration":"60","halo":"projectiles/fireball-impact-16.png","offset":"1.0"}],"direction":"n,ne,nw","hits":"yes"}],"missile_start_time":"-350"},{"filter_attack":[{"name":"staff"}],"frame":[{"image":"units/human-magi/arch-mage+female.png"},{"image":"units/human-magi/arch-mage+female-attack-staff-1.png"},{"image":"units/human-magi/arch-mage+female-attack-magic-1.png"},{"image":"units/human-magi/arch-mage+female.png"}],"else":[{"frame":[{"image":"units/human-magi/arch-mage+female-attack-staff-2.png"}]}],"if":[{"frame":[{"image":"units/human-magi/arch-mage+female-attack-staff-2.png"}]}]}],"name":"female^Arch Mage","gender":"female","image":"units/human-magi/arch-mage+female.png","profile":"portraits/humans/mage-arch+female.png","die_sound":"human-female-die-1.ogg,human-female-die-2.ogg,human-female-die-3.ogg"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/humans/transparent/mage-arch.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/humans/transparent/mage-arch.png"}],"id":"Arch Mage","name":"Arch Mage","race":"human","gender":"male,female","image":"units/human-magi/arch-mage.png","flag_rgb":"magenta","profile":"portraits/humans/mage-arch.png","hitpoints":"54","movement_type":"smallfoot","movement":"5","experience":"220","level":"3","alignment":"neutral","advances_to":"Great Mage","cost":"59","usage":"mixed fighter","description":"The title of Arch Mage is traditionally conferred only after a lifetime of study and achievement to match. Arch Magi are often employed in positions of education, or as advisors to those sensible enough to seek the fruits of their wisdom. Many tend to wealthy patrons, a profitable enterprise for both as, outside of the occasional thaumaturgy or word of advice, it gives the mage leave to pursue their research undisturbed. From this flows the greater body of human knowledge; the sciences, the philosophies, and the arts which give beauty to the world at large.\n\nThough not trained for any sort of combat, if need arises an Arch Mage can unleash the full power of their art, something which is not to be taken lightly.\n\nSpecial Notes: The unit has magical attacks, which always have a high chance of hitting an opponent.","die_sound":"human-old-die-1.ogg,human-old-die-2.ogg,human-old-die-3.ogg"}