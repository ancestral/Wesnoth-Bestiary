{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/dwarves/transparent/thunderer.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/dwarves/transparent/thunderer.png"}],"defend":[{"filter_attack":[{"range":"melee"}],"frame":[{"duration":"1","image":"units/dwarves/thunderguard-blade-defend-1.png"},{"duration":"100","image":"units/dwarves/thunderguard-blade-defend-2.png"},{"duration":"1","image":"units/dwarves/thunderguard-blade-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/thunderguard-blade-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/thunderguard-blade-defend-2.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"},{"filter_attack":[{"range":"ranged"}],"frame":[{"duration":"1","image":"units/dwarves/thunderguard.png"},{"duration":"100","image":"units/dwarves/thunderguard-defend.png"},{"duration":"1","image":"units/dwarves/thunderguard.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/thunderguard-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/thunderguard-defend.png","sound":"dwarf-hit-1.ogg,dwarf-hit-2.ogg,dwarf-hit-3.ogg,dwarf-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"dagger","description":"dagger","icon":"attacks/dagger-human.png","type":"blade","range":"melee","damage":"6","number":"3"},{"name":"thunderstick","description":"thunderstick","type":"pierce","range":"ranged","damage":"28","number":"1","icon":"attacks/thunderstick.png"}],"attack_anim":[{"filter_attack":[{"name":"thunderstick"}],"frame":[{"begin":"0","end":"1","image":"units/dwarves/thunderguard-attack-ranged-se.png"}],"else":[{"frame":[{"begin":"-400","end":"0","image":"units/dwarves/thunderguard-attack-ranged-se.png","sound":"thunderstick-miss.ogg"}],"missile_frame":[{"duration":"100","halo":"projectiles/misfire-spark-1.png"},{"duration":"100","halo":"projectiles/misfire-spark-2.png"},{"duration":"100","halo":"projectiles/misfire-spark-3.png"},{"duration":"100","halo":"projectiles/misfire-spark-4.png"}],"missile_start_time":"-250","missile_offset":"0.1","direction":"se,sw","hits":"no"},{"frame":[{"begin":"-400","end":"0","image":"units/dwarves/thunderguard-attack-ranged-ne.png","sound":"thunderstick.ogg"}],"missile_frame":[{"duration":"100","halo":"projectiles/muzzle-flash-ne-1.png"},{"duration":"80","halo":"projectiles/muzzle-flash-ne-2.png"},{"duration":"70","halo":"projectiles/muzzle-flash-ne-3.png"},{"duration":"60","halo":"projectiles/muzzle-flash-4.png"},{"duration":"60","halo":"projectiles/muzzle-flash-5.png"},{"duration":"60","halo":"projectiles/muzzle-flash-6.png"},{"duration":"60","halo":"projectiles/muzzle-flash-7.png"},{"duration":"60","halo":"projectiles/muzzle-flash-8.png"},{"duration":"60","halo":"projectiles/muzzle-flash-9.png"},{"duration":"60","halo":"projectiles/muzzle-flash-10.png"},{"duration":"60","halo":"projectiles/muzzle-flash-11.png"},{"duration":"60","halo":"projectiles/muzzle-flash-12.png"},{"duration":"60","halo":"projectiles/muzzle-flash-13.png"},{"duration":"60","halo":"projectiles/muzzle-flash-14.png"}],"missile_start_time":"-250","missile_offset":"0.5~1.1:250,1.1~1.5:200,1.5~1.7:360","missile_halo_x":"0~0","missile_halo_y":"20~0","direction":"ne,nw","hits":"yes"},{"frame":[{"begin":"-400","end":"0","image":"units/dwarves/thunderguard-attack-ranged-ne.png","sound":"thunderstick-miss.ogg"}],"missile_frame":[{"duration":"100","halo":"projectiles/misfire-spark-1.png"},{"duration":"100","halo":"projectiles/misfire-spark-2.png"},{"duration":"100","halo":"projectiles/misfire-spark-3.png"},{"duration":"100","halo":"projectiles/misfire-spark-4.png"}],"missile_start_time":"-250","missile_offset":"0.1","direction":"ne,nw","hits":"no"},{"frame":[{"begin":"-400","end":"0","image":"units/dwarves/thunderguard-attack-ranged-n.png","sound":"thunderstick.ogg"}],"missile_frame":[{"duration":"100","halo":"projectiles/muzzle-flash-n-1.png"},{"duration":"80","halo":"projectiles/muzzle-flash-n-2.png"},{"duration":"70","halo":"projectiles/muzzle-flash-n-3.png"},{"duration":"60","halo":"projectiles/muzzle-flash-4.png"},{"duration":"60","halo":"projectiles/muzzle-flash-5.png"},{"duration":"60","halo":"projectiles/muzzle-flash-6.png"},{"duration":"60","halo":"projectiles/muzzle-flash-7.png"},{"duration":"60","halo":"projectiles/muzzle-flash-8.png"},{"duration":"60","halo":"projectiles/muzzle-flash-9.png"},{"duration":"60","halo":"projectiles/muzzle-flash-10.png"},{"duration":"60","halo":"projectiles/muzzle-flash-11.png"},{"duration":"60","halo":"projectiles/muzzle-flash-12.png"},{"duration":"60","halo":"projectiles/muzzle-flash-13.png"},{"duration":"60","halo":"projectiles/muzzle-flash-14.png"}],"missile_start_time":"-250","missile_offset":"0.5~1.1:250,1.1~1.5:200,1.5~1.7:360","missile_halo_x":"0~0","missile_halo_y":"20~0","direction":"n","hits":"yes"},{"frame":[{"begin":"-400","end":"0","image":"units/dwarves/thunderguard-attack-ranged-n.png","sound":"thunderstick-miss.ogg"}],"missile_frame":[{"duration":"100","halo":"projectiles/misfire-spark-1.png"},{"duration":"100","halo":"projectiles/misfire-spark-2.png"},{"duration":"100","halo":"projectiles/misfire-spark-3.png"},{"duration":"100","halo":"projectiles/misfire-spark-4.png"}],"missile_start_time":"-250","missile_offset":"0.1","direction":"n","hits":"no"},{"frame":[{"begin":"-400","end":"0","image":"units/dwarves/thunderguard-attack-ranged-s.png","sound":"thunderstick.ogg"}],"missile_frame":[{"duration":"100","halo":"projectiles/muzzle-flash-s-1.png~FL(vertical)"},{"duration":"80","halo":"projectiles/muzzle-flash-s-2.png~FL(vertical)"},{"duration":"70","halo":"projectiles/muzzle-flash-s-3.png~FL(vertical)"},{"duration":"60","halo":"projectiles/muzzle-flash-4.png"},{"duration":"60","halo":"projectiles/muzzle-flash-5.png"},{"duration":"60","halo":"projectiles/muzzle-flash-6.png"},{"duration":"60","halo":"projectiles/muzzle-flash-7.png"},{"duration":"60","halo":"projectiles/muzzle-flash-8.png"},{"duration":"60","halo":"projectiles/muzzle-flash-9.png"},{"duration":"60","halo":"projectiles/muzzle-flash-10.png"},{"duration":"60","halo":"projectiles/muzzle-flash-11.png"},{"duration":"60","halo":"projectiles/muzzle-flash-12.png"},{"duration":"60","halo":"projectiles/muzzle-flash-13.png"},{"duration":"60","halo":"projectiles/muzzle-flash-14.png"}],"missile_start_time":"-250","missile_offset":"0.5~1.1:250,1.1~1.5:200,1.5~1.7:360","missile_halo_x":"0~0","missile_halo_y":"0~0","direction":"s","hits":"yes"},{"frame":[{"begin":"-400","end":"0","image":"units/dwarves/thunderguard-attack-ranged-s.png","sound":"thunderstick-miss.ogg"}],"missile_frame":[{"duration":"100","halo":"projectiles/misfire-spark-1.png"},{"duration":"100","halo":"projectiles/misfire-spark-2.png"},{"duration":"100","halo":"projectiles/misfire-spark-3.png"},{"duration":"100","halo":"projectiles/misfire-spark-4.png"}],"missile_start_time":"-250","missile_offset":"0.1","direction":"s","hits":"no"}],"if":[{"frame":[{"begin":"-400","end":"0","image":"units/dwarves/thunderguard-attack-ranged-se.png","sound":"thunderstick.ogg"}],"missile_frame":[{"duration":"100","halo":"projectiles/muzzle-flash-se-1.png~FL(vertical)"},{"duration":"80","halo":"projectiles/muzzle-flash-se-2.png~FL(vertical)"},{"duration":"70","halo":"projectiles/muzzle-flash-se-3.png~FL(vertical)"},{"duration":"60","halo":"projectiles/muzzle-flash-4.png"},{"duration":"60","halo":"projectiles/muzzle-flash-5.png"},{"duration":"60","halo":"projectiles/muzzle-flash-6.png"},{"duration":"60","halo":"projectiles/muzzle-flash-7.png"},{"duration":"60","halo":"projectiles/muzzle-flash-8.png"},{"duration":"60","halo":"projectiles/muzzle-flash-9.png"},{"duration":"60","halo":"projectiles/muzzle-flash-10.png"},{"duration":"60","halo":"projectiles/muzzle-flash-11.png"},{"duration":"60","halo":"projectiles/muzzle-flash-12.png"},{"duration":"60","halo":"projectiles/muzzle-flash-13.png"},{"duration":"60","halo":"projectiles/muzzle-flash-14.png"}],"missile_start_time":"-250","missile_offset":"0.5~1.1:250,1.1~1.5:200,1.5~1.7:360","missile_halo_x":"0~0","missile_halo_y":"0~0","direction":"se,sw","hits":"yes"}]},{"filter_attack":[{"name":"dagger"}],"frame":[{"duration":"50","image":"units/dwarves/thunderguard-blade.png"},{"duration":"100","image":"units/dwarves/thunderguard-blade-1.png"},{"duration":"100","image":"units/dwarves/thunderguard-blade-2.png"},{"duration":"100","image":"units/dwarves/thunderguard-blade-4.png"},{"duration":"100","image":"units/dwarves/thunderguard-blade-5.png"}],"else":[{"frame":[{"duration":"100","image":"units/dwarves/thunderguard-blade-3.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"100","image":"units/dwarves/thunderguard-blade-3.png","sound":"axe.ogg"}],"hits":"yes"}],"start_time":"-250","offset":"0.0~0.1:200,0.1~0.6:200,0.6~0.0:250"}],"id":"Dwarvish Thunderguard","name":"Dwarvish Thunderguard","race":"dwarf","image":"units/dwarves/thunderguard.png","profile":"portraits/dwarves/thunderer.png","flag_rgb":"magenta","hitpoints":"44","movement_type":"dwarvishfoot","movement":"4","experience":"95","level":"2","alignment":"neutral","advances_to":"Dwarvish Dragonguard","undead_variation":"dwarf","cost":"30","usage":"mixed fighter","description":"The Dwarven Thunderguards are famed for their curious weaponry, these strange staffs of wood and iron that make a thunderous noise in their anger. The machinations behind this weaponry are a mystery, a secret taken to the grave by the dwarves of Knalga who wield them, and are assumed to have even forged them. The most that is known are reports of dwarves pouring a strange black dust into the mouth of their weapons, which some say is a food to fuel the beast imprisoned within.\n\nThough a single shot from these \u2018thundersticks\u2019 can take several minutes to prepare, the results are seen by the Dwarves as being well worth the wait.","die_sound":"dwarf-die-1.ogg,dwarf-die-2.ogg"}