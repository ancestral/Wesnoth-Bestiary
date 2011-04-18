{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/merfolk/transparent/initiate.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/merfolk/transparent/initiate.png"}],"defend":[{"frame":[{"duration":"1","image":"units/merfolk/initiate-defend-1.png"},{"duration":"100","image":"units/merfolk/initiate-defend-2.png"},{"duration":"1","image":"units/merfolk/initiate-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/merfolk/initiate-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/merfolk/initiate-defend-2.png","sound":"mermaid-hit.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"staff","description":"staff","icon":"attacks/staff-magic.png","type":"impact","range":"melee","damage":"7","number":"1"},{"specials":[{"chance_to_hit":[{"id":"magical","name":"magical","description":"Magical:\nThis attack always has a 70% chance to hit regardless of the defensive ability of the unit being attacked.","value":"70","cumulative":"no"}]}],"name":"water spray","description":"water spray","icon":"attacks/waterspray.png","type":"impact","range":"ranged","damage":"8","number":"2"}],"attack_anim":[{"filter_attack":[{"name":"water spray"}],"frame":[{"duration":"70","image":"units/merfolk/initiate-magic-1.png"},{"duration":"230","image":"units/merfolk/initiate-magic-2.png"},{"duration":"50","image":"units/merfolk/initiate-magic-2.png","sound":"water-blast.wav"},{"duration":"80","image":"units/merfolk/initiate-magic-1.png"}],"water_frame":[{"duration":"60","halo":"halo/merfolk/water-halo-1.png"},{"duration":"60","halo":"halo/merfolk/water-halo-2.png"},{"duration":"60","halo":"halo/merfolk/water-halo-3.png"},{"duration":"60","halo":"halo/merfolk/water-halo-4.png"},{"duration":"60","halo":"halo/merfolk/water-halo-5.png"},{"duration":"60","halo":"halo/merfolk/water-halo-6.png"},{"duration":"60","halo":"halo/merfolk/water-halo-7.png"},{"duration":"10"}],"flare_frame":[{"duration":"60","halo":"halo/merfolk/staff-flare-1.png","halo_x":"16","halo_y":",-12"},{"duration":"60","halo":"halo/merfolk/staff-flare-2.png","halo_x":"16","halo_y":",-12"},{"duration":"60","halo":"halo/merfolk/staff-flare-3.png","halo_x":"16","halo_y":",-12"},{"duration":"60","halo":"halo/merfolk/staff-flare-4.png","halo_x":"16","halo_y":",-12"},{"duration":"60","halo":"halo/merfolk/staff-flare-5.png","halo_x":"16","halo_y":",-12"},{"duration":"60","halo":"halo/merfolk/staff-flare-6.png","halo_x":"16","halo_y":",-12"},{"duration":"60","halo":"halo/merfolk/staff-flare-7.png","halo_x":"16","halo_y":",-12"},{"duration":"10"}],"missile_frame":[{"begin":"-165","end":"0","image":"projectiles/water-spray.png","image_diagonal":"projectiles/water-spray.png"}],"start_time":"-420","water_start_time":"-420","flare_start_time":"-420"},{"filter_attack":[{"name":"staff"}],"frame":[{"duration":"50","image":"units/merfolk/initiate.png"},{"duration":"100","image":"units/merfolk/initiate-staff-attack-1.png"},{"duration":"50","image":"units/merfolk/initiate-magic-1.png"},{"duration":"50","image":"units/merfolk/initiate.png"}],"else":[{"frame":[{"duration":"200","image":"units/merfolk/initiate-staff-attack-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"200","image":"units/merfolk/initiate-staff-attack-2.png","sound":"staff.wav"}],"hits":"yes"}],"start_time":"-250"}],"id":"Mermaid Initiate","name":"female^Mermaid Initiate","race":"merman","gender":"female","image":"units/merfolk/initiate.png","flag_rgb":"magenta","ellipse":"misc/ellipse","profile":"portraits/merfolk/initiate.png","hitpoints":"27","movement_type":"swimmer","movement":"6","experience":"50","level":"1","alignment":"lawful","advances_to":"Mermaid Priestess,Mermaid Enchantress","undead_variation":"swimmer","cost":"19","usage":"mixed fighter","description":"Young mermaids are often initiated into the water magics native to their people. The wondrous abilities this grants are inimitable by any other race, a mark of the faerie side of these creatures.\n\nDespite their frailty, this makes them quite formidable in combat, as they can call upon the very water about them to smite their enemies.\n\nSpecial Notes: The unit has magical attacks, which always have a high chance of hitting an opponent.","die_sound":"mermaid-die.ogg"}