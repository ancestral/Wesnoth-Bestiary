{"movement_anim":[{"frame":[{"duration":"150","image":"units/dwarves/gryphon-rider-flying-1.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-2.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-3.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-4.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-5.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-6.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-7.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-8.png"}],"start_time":"0"}],"attack_anim":[{"filter_attack":[{"name":"claws"}],"frame":[{"begin":"-200","end":"-100","image":"units/dwarves/gryphon-rider-flying-5.png"},{"begin":"100","end":"200","image":"units/dwarves/gryphon-rider-flying-5.png"}],"else":[{"frame":[{"begin":"-100","end":"100","image":"units/dwarves/gryphon-rider-flying-4.png","sound":"claws.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-100","end":"100","image":"units/dwarves/gryphon-rider-flying-4.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}]}],"defend":[{"frame":[{"duration":"1","image":"units/dwarves/gryphon-rider-flying-5.png"},{"duration":"100","image":"units/dwarves/gryphon-rider-flying-4.png"},{"duration":"1","image":"units/dwarves/gryphon-rider-flying-5.png"}],"else":[{"frame":[{"duration":"150","image":"units/dwarves/gryphon-rider-flying-4.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/dwarves/gryphon-rider-flying-4.png","sound":"gryphon-hit-1.ogg,gryphon-hit-2.ogg,gryphon-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"resistance":[{"arcane":"90"}],"attack":[{"name":"claws","description":"claws","icon":"attacks/claws-animal.png","type":"blade","range":"melee","damage":"12","number":"2"}],"defense":[{"mountains":"40"}],"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/dwarves/transparent/gryphon-rider.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/dwarves/transparent/gryphon-rider.png"}],"standing_anim":[{"frame":[{"duration":"150","image":"units/dwarves/gryphon-rider-flying-1.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-2.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-3.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-4.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-5.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-6.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-7.png"},{"duration":"150","image":"units/dwarves/gryphon-rider-flying-8.png"}],"start_time":"0","layer":"60"}],"id":"Gryphon Rider","name":"Gryphon Rider","race":"gryphon","image":"units/dwarves/gryphon-rider.png","small_profile":"portraits/dwarves/transparent/gryphon-rider.png~SCALE(205,205)","profile":"portraits/dwarves/transparent/gryphon-rider.png","ellipse":"misc/ellipse","flag_rgb":"magenta","hitpoints":"34","movement_type":"fly","movement":"8","experience":"38","level":"1","alignment":"neutral","advances_to":"Gryphon Master","undead_variation":"gryphon","cost":"24","usage":"scout","description":"Only a few are able to bond with the mighty Gryphons. Those who do may become Gryphon Riders, and discover the world of the skies upon the backs of these flying beasts.","die_sound":"gryphon-die-1.ogg,gryphon-die-2.ogg"}