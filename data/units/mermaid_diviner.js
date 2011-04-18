{"abilities":[{"illuminates":[{"id":"illumination","value":"25","max_value":"25","cumulative":"no","name":"illuminates","female_name":"female^illuminates","description":"Illuminates:\nThis unit illuminates the surrounding area, making lawful units fight better, and chaotic units fight worse.\n\nAny units adjacent to this unit will fight as if it were dusk when it is night, and as if it were day when it is dusk.","affect_self":"yes"}],"heals":[{"affect_adjacent":[{"adjacent":"n,ne,se,s,sw,nw"}],"affect_allies":"yes","id":"curing","name":"cures","female_name":"female^cures","description":"Cures:\nA curer can cure a unit of poison, although that unit will receive no additional healing on the turn it is cured of the poison.","affect_self":"no","poison":"cured"},{"affect_adjacent":[{"adjacent":"n,ne,se,s,sw,nw"}],"value":"8","id":"healing","affect_allies":"yes","name":"heals +8","female_name":"female^heals +8","description":"Heals +8:\nThis unit combines herbal remedies with magic to heal units more quickly than is normally possible on the battlefield.\n\nA unit cared for by this healer may heal up to 8 HP per turn, or stop poison from taking effect for that turn.\nA poisoned unit cannot be cured of its poison by a healer, and must seek the care of a village or a unit that can cure.","affect_self":"no","poison":"slowed"}]}],"attack_anim":[{"filter_attack":[{"name":"lightbeam"}],"frame":[{"begin":"-175","end":"0","image":"units/merfolk/diviner.png"}],"else":[{"missile_frame":[{"duration":"30","halo":"halo/holy/light-beam-1.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-2.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-3.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-4.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-5.png~FL(vert)","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-6.png~FL(vert)","offset":"1.0"},{"duration":"130","halo":"halo/holy/light-beam-7.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-6.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-5.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-4.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-3.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-2.png~FL(vert)","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-1.png~FL(vert)","offset":"1.0"}],"direction":"s,se,sw"},{"frame":[{"begin":"-250","end":"-175","image":"units/merfolk/diviner.png","sound":"magic-holy-miss-1.ogg,magic-holy-miss-2.ogg,magic-holy-miss-3.ogg,magic-holy-miss-4.ogg"}],"hits":"no"}],"if":[{"missile_frame":[{"duration":"30","halo":"halo/holy/light-beam-1.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-2.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-3.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-4.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-5.png","offset":"1.0"},{"duration":"30","halo":"halo/holy/light-beam-6.png","offset":"1.0"},{"duration":"130","halo":"halo/holy/light-beam-7.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-6.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-5.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-4.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-3.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-2.png","offset":"1.0"},{"duration":"70","halo":"halo/holy/light-beam-1.png","offset":"1.0"}],"direction":"n,ne,nw"},{"frame":[{"begin":"-250","end":"-175","image":"units/merfolk/diviner.png","sound":"magic-holy-1.ogg,magic-holy-2.ogg,magic-holy-3.ogg,magic-holy-4.ogg"}],"hits":"yes"}],"missile_start_time":"-245"},{"filter_attack":[{"name":"staff"}],"frame":[{"begin":"-200","end":"-150","image":"units/merfolk/diviner.png"},{"begin":"-150","end":"100","image":"units/merfolk/diviner.png"},{"begin":"100","end":"175","image":"units/merfolk/diviner.png"}],"else":[{"attack_sound_frame":[{"sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no","attack_sound_start_time":"-100"}],"if":[{"attack_sound_frame":[{"sound":"staff.wav"}],"hits":"yes","attack_sound_start_time":"-100"}]}],"defend":[{"frame":[{"duration":"1","image":"units/merfolk/diviner.png"},{"duration":"100","image":"units/merfolk/diviner.png"},{"duration":"1","image":"units/merfolk/diviner.png"}],"else":[{"frame":[{"duration":"150","image":"units/merfolk/diviner.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/merfolk/diviner.png","sound":"mermaid-hit.ogg"}],"hits":"hit"}],"start_time":"-126"}],"resistance":[{"arcane":"60"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"attack":[{"name":"staff","description":"staff","icon":"attacks/staff-magic.png","type":"impact","range":"melee","damage":"7","number":"3"},{"specials":[{"chance_to_hit":[{"id":"magical","name":"magical","description":"Magical:\nThis attack always has a 70% chance to hit regardless of the defensive ability of the unit being attacked.","value":"70","cumulative":"no"}]}],"name":"lightbeam","description":"lightbeam","type":"arcane","range":"ranged","damage":"8","number":"4"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/merfolk/transparent/priestess.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/merfolk/transparent/priestess.png"}],"healing_anim":[{"frame":[{"duration":"75","image":"units/merfolk/diviner.png"},{"duration":"75","image":"units/merfolk/diviner.png"},{"duration":"75","image":"units/merfolk/diviner.png","halo":"halo/holy/halo6.png"},{"duration":"75","image":"units/merfolk/diviner.png","halo":"halo/holy/halo1.png"},{"duration":"75","image":"units/merfolk/diviner.png","halo":"halo/holy/halo2.png"},{"duration":"75","image":"units/merfolk/diviner.png","halo":"halo/holy/halo3.png"},{"duration":"75","image":"units/merfolk/diviner.png","halo":"halo/holy/halo4.png"},{"duration":"75","image":"units/merfolk/diviner.png","halo":"halo/holy/halo5.png"},{"duration":"75","image":"units/merfolk/diviner.png","halo":"halo/holy/halo6.png"},{"duration":"75","image":"units/merfolk/diviner.png"},{"duration":"75","image":"units/merfolk/diviner.png"}],"start_time":"-525"}],"id":"Mermaid Diviner","name":"female^Mermaid Diviner","race":"merman","gender":"female","image":"units/merfolk/diviner.png","profile":"portraits/merfolk/priestess.png","flag_rgb":"magenta","halo":"halo/illuminates-aura.png","hitpoints":"41","movement_type":"swimmer","movement":"6","experience":"150","level":"3","alignment":"lawful","advances_to":"null","undead_variation":"swimmer","cost":"57","usage":"healer","description":"Years of devotion may endow a priestess with great wisdom on the workings of the world, and grants some the favor of the light. The power thus given to these ladies of the water is a recurring motif in tale and song; such as the that of the knights of the silver spire, cornered and slain to a man at the banks of the Alavynne, but who rode again the next day, in full number, and wrought the downfall of the crimson duke.\n\nSpecial Notes: The unit has magical attacks, which always have a high chance of hitting an opponent. This unit\u2019s arcane attack deals tremendous damage to magical creatures, and even some to mundane creatures. This unit is capable of healing those around it, and curing them of poison. Illumination increases the lighting level in adjacent areas.","die_sound":"mermaid-die.ogg"}