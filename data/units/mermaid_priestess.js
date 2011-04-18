{"abilities":[{"heals":[{"affect_adjacent":[{"adjacent":"n,ne,se,s,sw,nw"}],"affect_allies":"yes","id":"curing","name":"cures","female_name":"female^cures","description":"Cures:\nA curer can cure a unit of poison, although that unit will receive no additional healing on the turn it is cured of the poison.","affect_self":"no","poison":"cured"},{"affect_adjacent":[{"adjacent":"n,ne,se,s,sw,nw"}],"value":"8","id":"healing","affect_allies":"yes","name":"heals +8","female_name":"female^heals +8","description":"Heals +8:\nThis unit combines herbal remedies with magic to heal units more quickly than is normally possible on the battlefield.\n\nA unit cared for by this healer may heal up to 8 HP per turn, or stop poison from taking effect for that turn.\nA poisoned unit cannot be cured of its poison by a healer, and must seek the care of a village or a unit that can cure.","affect_self":"no","poison":"slowed"}]}],"attack_anim":[{"filter_attack":[{"name":"lightbeam"}],"frame":[{"begin":"-175","end":"0","image":"units/merfolk/priestess.png"}],"else":[{"missile_frame":[{"duration":"30","halo":"halo/holy/light-beam-1.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-2.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-3.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-4.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-5.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-6.png~FL(vert)","offset":"1.0"},{"duration":"130","halo":"halo/holy/light-beam-7.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-6.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-5.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-4.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-3.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-2.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-1.png~FL(vert)","offset":"1.0"}],"direction":"s,se,sw"},{"frame":[{"begin":"-250","end":"-175","image":"units/merfolk/priestess.png","sound":"magic-holy-miss-1.ogg,magic-holy-miss-2.ogg,magic-holy-miss-3.ogg,magic-holy-miss-4.ogg"}],"hits":"no"}],"if":[{"missile_frame":[{"duration":"30","halo":"halo/holy/light-beam-1.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-2.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-3.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-4.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-5.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-6.png","offset":"1.0"},{"duration":"130","halo":"halo/holy/light-beam-7.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-6.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-5.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-4.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-3.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-2.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-1.png","offset":"1.0"}],"direction":"n,ne,nw"},{"frame":[{"begin":"-250","end":"-175","image":"units/merfolk/priestess.png","sound":"magic-holy-1.ogg,magic-holy-2.ogg,magic-holy-3.ogg,magic-holy-4.ogg"}],"hits":"yes"}],"missile_start_time":"-245"},{"filter_attack":[{"name":"staff"}],"frame":[{"begin":"-200","end":"-150","image":"units/merfolk/priestess.png"},{"begin":"-150","end":"100","image":"units/merfolk/priestess.png"},{"begin":"100","end":"175","image":"units/merfolk/priestess.png"}],"else":[{"attack_sound_frame":[{"sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no","attack_sound_start_time":"-100"}],"if":[{"attack_sound_frame":[{"sound":"staff.wav"}],"hits":"yes","attack_sound_start_time":"-100"}]}],"defend":[{"frame":[{"duration":"1","image":"units/merfolk/priestess.png"},{"duration":"100","image":"units/merfolk/priestess.png"},{"duration":"1","image":"units/merfolk/priestess.png"}],"else":[{"frame":[{"duration":"150","image":"units/merfolk/priestess.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/merfolk/priestess.png","sound":"mermaid-hit.ogg"}],"hits":"hit"}],"start_time":"-126"}],"resistance":[{"arcane":"80"}],"attack":[{"name":"staff","description":"staff","icon":"attacks/staff-magic.png","type":"impact","range":"melee","damage":"5","number":"3"},{"specials":[{"chance_to_hit":[{"id":"magical","name":"magical","description":"Magical:\nThis attack always has a 70% chance to hit regardless of the defensive ability of the unit being attacked.","value":"70","cumulative":"no"}]}],"name":"lightbeam","description":"lightbeam","type":"arcane","range":"ranged","damage":"6","number":"4"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/merfolk/transparent/priestess.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/merfolk/transparent/priestess.png"}],"healing_anim":[{"frame":[{"duration":"75","image":"units/merfolk/priestess.png"},{"duration":"75","image":"units/merfolk/priestess.png"},{"duration":"75","image":"units/merfolk/priestess.png","halo":"halo/holy/halo6.png"},{"duration":"75","image":"units/merfolk/priestess.png","halo":"halo/holy/halo1.png"},{"duration":"75","image":"units/merfolk/priestess.png","halo":"halo/holy/halo2.png"},{"duration":"75","image":"units/merfolk/priestess.png","halo":"halo/holy/halo3.png"},{"duration":"75","image":"units/merfolk/priestess.png","halo":"halo/holy/halo4.png"},{"duration":"75","image":"units/merfolk/priestess.png","halo":"halo/holy/halo5.png"},{"duration":"75","image":"units/merfolk/priestess.png","halo":"halo/holy/halo6.png"},{"duration":"75","image":"units/merfolk/priestess.png"},{"duration":"75","image":"units/merfolk/priestess.png"}],"start_time":"-525"}],"id":"Mermaid Priestess","name":"female^Mermaid Priestess","race":"merman","gender":"female","image":"units/merfolk/priestess.png","flag_rgb":"magenta","profile":"portraits/merfolk/priestess.png","hitpoints":"31","movement_type":"swimmer","movement":"6","experience":"132","level":"2","alignment":"lawful","advances_to":"Mermaid Diviner","undead_variation":"swimmer","cost":"38","usage":"healer","description":"Among mermen, mysticism is generally left to the mermaids, who are more inclined to it. It is they who dedicate themselves to the ideal of bringing peace and life to the world, and to the arts which make that possible. Their piety also grants them certain powers, allowing them to guard their people against magical or unnatural things.\n\nSpecial Notes: The unit has magical attacks, which always have a high chance of hitting an opponent. This unit\u2019s arcane attack deals tremendous damage to magical creatures, and even some to mundane creatures. This unit is capable of healing those around it, and curing them of poison.","die_sound":"mermaid-die.ogg"}