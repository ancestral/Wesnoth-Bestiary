{"defend":[{"frame":[{"duration":"1","image":"units/human-magi/elder-mage.png"},{"duration":"100","image":"units/human-magi/elder-mage-defend.png"},{"duration":"1","image":"units/human-magi/elder-mage.png"}],"else":[{"frame":[{"duration":"150","image":"units/human-magi/elder-mage-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/human-magi/elder-mage-defend.png","sound":"human-old-hit-1.ogg,human-old-hit-2.ogg,human-old-hit-3.ogg,human-old-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"attack":[{"name":"staff","description":"staff","icon":"attacks/staff-magic.png","type":"impact","range":"melee","damage":"8","number":"2"},{"specials":[{"chance_to_hit":[{"id":"magical","name":"magical","description":"Magical:\nThis attack always has a 70% chance to hit regardless of the defensive ability of the unit being attacked.","value":"70","cumulative":"no"}]}],"name":"lightning","description":"lightning","icon":"attacks/lightning.png","type":"fire","range":"ranged","damage":"14","number":"4"}],"resistance":[{"fire":"80"}],"attack_anim":[{"filter_attack":[{"name":"staff"}],"frame":[{"begin":"-225","end":"-200","image":"units/human-magi/elder-mage-ranged1.png"},{"begin":"-200","end":"-100","image":"units/human-magi/elder-mage-melee1.png"},{"begin":"100","end":"150","image":"units/human-magi/elder-mage-ranged1.png"},{"begin":"150","end":"200","image":"units/human-magi/elder-mage.png"}],"else":[{"frame":[{"begin":"-100","end":"100","image":"units/human-magi/elder-mage-melee2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"begin":"-100","end":"100","image":"units/human-magi/elder-mage-melee2.png","sound":"staff.wav"}],"hits":"yes"}]},{"filter_attack":[{"name":"lightning"}],"frame":[{"begin":"-200","end":"-100","image":"units/human-magi/elder-mage-ranged2.png"},{"begin":"-100","end":"100","image":"units/human-magi/elder-mage-ranged3.png"},{"begin":"100","end":"200","image":"units/human-magi/elder-mage-ranged2.png"},{"begin":"200","end":"250","image":"units/human-magi/elder-mage-ranged1.png"}],"else":[{"missile_frame":[{"begin":"-250","end":"150","halo":"halo/lightning-bolt-1-1.png:100,halo/lightning-bolt-1-2.png:100,halo/lightning-bolt-1-3.png:100,halo/lightning-bolt-1-4.png:100","halo_y":"-125","offset":"1.0"}],"direction":"nw,n,ne"},{"frame":[{"begin":"-300","end":"-200","image":"units/human-magi/elder-mage-ranged1.png","sound":"lightning-miss.ogg"}],"hits":"no"}],"if":[{"missile_frame":[{"begin":"-250","end":"150","halo":"halo/lightning-bolt-1-1.png~FL(vert):100,halo/lightning-bolt-1-2.png~FL(vert):100,halo/lightning-bolt-1-3.png~FL(vert):100,halo/lightning-bolt-1-4.png~FL(vert):100","halo_y":"-125","offset":"1.0"}],"direction":"sw,s,se"},{"frame":[{"begin":"-300","end":"-200","image":"units/human-magi/elder-mage-ranged1.png","sound":"lightning.ogg"}],"hits":"yes"}]},{"filter_attack":[{"name":"lightning"}],"frame":[{"begin":"-200","end":"-100","image":"units/human-magi/elder-mage-ranged2.png"},{"begin":"-100","end":"100","image":"units/human-magi/elder-mage-ranged3.png"},{"begin":"100","end":"200","image":"units/human-magi/elder-mage-ranged2.png"},{"begin":"200","end":"250","image":"units/human-magi/elder-mage-ranged1.png"}],"else":[{"missile_frame":[{"begin":"-250","end":"150","halo":"halo/lightning-bolt-2-1.png:100,halo/lightning-bolt-2-2.png:100,halo/lightning-bolt-2-3.png:100,halo/lightning-bolt-2-4.png:100","halo_y":"-125","offset":"1.0"}],"direction":"nw,n,ne"},{"frame":[{"begin":"-300","end":"-200","image":"units/human-magi/elder-mage-ranged1.png","sound":"lightning-miss.ogg"}],"hits":"no"}],"if":[{"missile_frame":[{"begin":"-250","end":"150","halo":"halo/lightning-bolt-2-1.png~FL(vert):100,halo/lightning-bolt-2-2.png~FL(vert):100,halo/lightning-bolt-2-3.png~FL(vert):100,halo/lightning-bolt-2-4.png~FL(vert):100","halo_y":"-125","offset":"1.0"}],"direction":"sw,s,se"},{"frame":[{"begin":"-300","end":"-200","image":"units/human-magi/elder-mage-ranged1.png","sound":"lightning.ogg"}],"hits":"yes"}]},{"filter_attack":[{"name":"lightning"}],"frame":[{"begin":"-200","end":"-100","image":"units/human-magi/elder-mage-ranged2.png"},{"begin":"-100","end":"100","image":"units/human-magi/elder-mage-ranged3.png"},{"begin":"100","end":"200","image":"units/human-magi/elder-mage-ranged2.png"},{"begin":"200","end":"250","image":"units/human-magi/elder-mage-ranged1.png"}],"else":[{"missile_frame":[{"begin":"-250","end":"150","halo":"halo/lightning-bolt-3-1.png:100,halo/lightning-bolt-3-2.png:100,halo/lightning-bolt-3-3.png:100,halo/lightning-bolt-3-4.png:100","halo_y":"-125","offset":"1.0"}],"direction":"nw,n,ne"},{"frame":[{"begin":"-300","end":"-200","image":"units/human-magi/elder-mage-ranged1.png","sound":"lightning-miss.ogg"}],"hits":"no"}],"if":[{"missile_frame":[{"begin":"-250","end":"150","halo":"halo/lightning-bolt-3-1.png~FL(vert):100,halo/lightning-bolt-3-2.png~FL(vert):100,halo/lightning-bolt-3-3.png~FL(vert):100,halo/lightning-bolt-3-4.png~FL(vert):100","halo_y":"-125","offset":"1.0"}],"direction":"sw,s,se"},{"frame":[{"begin":"-300","end":"-200","image":"units/human-magi/elder-mage-ranged1.png","sound":"lightning.ogg"}],"hits":"yes"}]}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"id":"Elder Mage","name":"Elder Mage","race":"human","image":"units/human-magi/elder-mage.png","hitpoints":"55","movement_type":"smallfoot","movement":"6","experience":"150","level":"5","alignment":"neutral","advances_to":"null","cost":"65","usage":"mixed fighter","die_sound":"human-old-die-1.ogg,human-old-die-2.ogg,human-old-die-3.ogg","description":"Once great, Elder Magi have seen their power a little diminished from wearying years of battle. Nevertheless they remain feared on the battlefield on account of their powerful lightning bolts.\n\nSpecial Notes: The unit has magical attacks, which always have a high chance of hitting an opponent."}