{"attack":[{"specials":[{"drains":[{"id":"drains","name":"drains","description":"Drain:\nThis unit drains health from living units, healing itself for half the amount of damage it deals (rounded down)."}]}],"name":"jaw","description":"jaw","icon":"attacks/fangs.png","type":"blade","range":"melee","damage":"10","number":"4"},{"name":"claws","description":"claws","type":"blade","range":"melee","damage":"25","number":"2"}],"attack_anim":[{"filter_attack":[{"name":"claws"}],"frame":[{"begin":"-200","end":"-150","image":"units/monsters/skeletal-dragon-attack-claws1.png"},{"begin":"-50","end":"100","image":"units/monsters/skeletal-dragon-attack-claws3.png"}],"else":[{"frame":[{"begin":"-150","end":"-50","image":"units/monsters/skeletal-dragon-attack-claws2.png","sound":"claws.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-150","end":"-50","image":"units/monsters/skeletal-dragon-attack-claws2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}]},{"filter_attack":[{"name":"jaw"}],"frame":[{"begin":"-150","end":"-50","image":"units/monsters/skeletal-dragon-attack-jaw1.png"}],"else":[{"frame":[{"begin":"-50","end":"100","image":"units/monsters/skeletal-dragon-attack-jaw2.png","sound":"bite.ogg"}],"hits":"yes"}],"if":[{"frame":[{"begin":"-50","end":"100","image":"units/monsters/skeletal-dragon-attack-jaw2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}]}],"defend":[{"frame":[{"duration":"1","image":"units/monsters/skeletal-dragon.png"},{"duration":"100","image":"units/monsters/skeletal-dragon-defend.png"},{"duration":"1","image":"units/monsters/skeletal-dragon.png"}],"else":[{"frame":[{"duration":"150","image":"units/monsters/skeletal-dragon-defend.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/monsters/skeletal-dragon-defend.png","sound":"skeleton-big-hit-1.ogg,skeleton-big-hit-2.ogg,skeleton-big-hit-3.ogg"}],"hits":"hit"}],"start_time":"-126"}],"advancement":[{"effect":[{"apply_to":"hitpoints","increase_total":"3","heal_full":"yes"},{"apply_to":"max_experience","increase":"20%"},{"apply_to":"status","remove":"poisoned"},{"apply_to":"status","remove":"slowed"}],"strict_amla":"yes","max_times":"100","id":"amla_default","description":"Max HP bonus +3, Max XP +20%","image":"misc/icon-amla-tough.png"}],"resistance":[{"blade":"60","pierce":"40","impact":"120","fire":"100","arcane":"100"}],"id":"Skeletal Dragon","name":"Skeletal Dragon","race":"undead","image":"units/monsters/skeletal-dragon.png","hitpoints":"86","movement_type":"undeadfly","movement":"5","experience":"150","level":"4","alignment":"chaotic","advances_to":"null","cost":"100","usage":"fighter","description":"Long ago one of the mightiest living creatures, the feared Dragon has become only bones and dark sinew. Long after its death, it was raised through the dark powers of necromancy, which it now serves. The Skeletal Dragon may look like nothing more than a pile of bones, but few people who thought that way lived long enough to change their minds.\n\nSpecial Notes: During battle, this unit can drain life from victims to renew its own health.","die_sound":"skeleton-big-die.ogg"}