{"portrait":[{"size":"400","side":"left","mirror":"false","image":"portraits/orcs/transparent/grunt.png"},{"size":"400","side":"right","mirror":"true","image":"portraits/orcs/transparent/grunt.png"}],"defend":[{"frame":[{"duration":"1","image":"units/orcs/grunt-defend-1.png"},{"duration":"100","image":"units/orcs/grunt-defend-2.png"},{"duration":"1","image":"units/orcs/grunt-defend-1.png"}],"else":[{"frame":[{"duration":"150","image":"units/orcs/grunt-defend-2.png"}],"hits":"miss,kill"}],"if":[{"frame":[{"duration":"150","image":"units/orcs/grunt-defend-2.png","sound":"orc-hit-1.ogg,orc-hit-2.ogg,orc-hit-3.ogg,orc-hit-4.ogg"}],"hits":"hit"}],"start_time":"-126"}],"death":[{"frame":[{"duration":"120","image":"units/orcs/grunt-die-1.png"},{"duration":"120","image":"units/orcs/grunt-die-2.png"},{"duration":"120","image":"units/orcs/grunt-die-3.png"},{"duration":"120","image":"units/orcs/grunt-die-4.png"},{"duration":"120","image":"units/orcs/grunt-die-5.png"},{"duration":"120","image":"units/orcs/grunt-die-6.png"},{"duration":"120","image":"units/orcs/grunt-die-7.png"},{"duration":"120","image":"units/orcs/grunt-die-8.png"}],"start_time":"0"}],"attack":[{"name":"sword","description":"sword","icon":"attacks/sword-orcish.png","type":"blade","range":"melee","damage":"9","number":"2"}],"attack_anim":[{"filter_attack":[{"name":"sword"}],"frame":[{"duration":"50","image":"units/orcs/grunt.png"},{"duration":"50","image":"units/orcs/grunt-defend-1.png"},{"duration":"100","image":"units/orcs/grunt-attack-1.png"},{"duration":"100","image":"units/orcs/grunt-attack-3.png"},{"duration":"20","image":"units/orcs/grunt-attack-4.png"},{"duration":"30","image":"units/orcs/grunt-attack-4.png"},{"duration":"75","image":"units/orcs/grunt-attack-5.png"},{"duration":"75","image":"units/orcs/grunt.png"}],"else":[{"frame":[{"duration":"75","image":"units/orcs/grunt-attack-2.png","sound":"miss-1.ogg,miss-2.ogg,miss-3.ogg"}],"hits":"no"}],"if":[{"frame":[{"duration":"75","image":"units/orcs/grunt-attack-2.png","sound":"sword-1.ogg"}],"hits":"yes"}],"offset":"0.0~0.15:100,0.15~0.35:100,0.35~0.45:75,0.45~0.5:100,0.5:20,0.5~0.4:30,0.4~0.2:75,0.2~0.0:75","start_time":"-300"}],"id":"Orcish Grunt","name":"Orcish Grunt","race":"orc","image":"units/orcs/grunt.png","ellipse":"misc/ellipse","small_profile":"portraits/orcs/transparent/grunt.png~SCALE(205,205)","profile":"portraits/orcs/transparent/grunt.png","flag_rgb":"magenta","hitpoints":"38","movement_type":"orcishfoot","movement":"5","experience":"42","level":"1","alignment":"chaotic","advances_to":"Orcish Warrior","cost":"12","usage":"fighter","description":"Orcish Grunts form the core of the orcish forces. Although slower than human or elven fighters, Grunts can deliver much more powerful blows, and take more hits before falling.","die_sound":"orc-die-1.ogg,orc-die-2.ogg,orc-die-3.ogg"}