{
  "attack_anim":
 [
  {
    "filter_attack":
   [
    {
      "name": "fangs"
    }
   ],
    "frame":
   [
    {
      "duration": "30",
      "image": "units/undead/bat-se-3.png"
    },
    {
      "duration": "30",
      "image": "units/undead/bat-se-2.png"
    },
    {
      "duration": "30",
      "image": "units/undead/bat-se-1.png",
      "sound": "bat-flapping.wav"
    },
    {
      "duration": "30",
      "image": "units/undead/bat-se-2.png"
    },
    {
      "duration": "30",
      "image": "units/undead/bat-se-3.png"
    },
    {
      "duration": "50",
      "image": "units/undead/bat-se-3.png"
    },
    {
      "duration": "50",
      "image": "units/undead/bat-se-2.png"
    },
    {
      "duration": "40",
      "image": "units/undead/bat-se-3.png"
    }
   ],
    "else":
   [
    {
      "frame":
     [
      {
        "duration": "70",
        "image": "units/undead/bat-se-4.png",
        "sound": "miss-1.ogg,miss-2.ogg,miss-3.ogg"
      }
     ],
      "hits": "no"
    }
   ],
    "if":
   [
    {
      "frame":
     [
      {
        "duration": "70",
        "image": "units/undead/bat-se-4.png",
        "sound": "bite-small.ogg"
      }
     ],
      "hits": "yes"
    }
   ],
    "direction": "s,se,sw",
    "offset": "0.0~0.9:200,0.9~0.0:160",
    "start_time": "-200"
  },
  {
    "filter_attack":
   [
    {
      "name": "fangs"
    }
   ],
    "frame":
   [
    {
      "duration": "30",
      "image": "units/undead/bat-ne-3.png"
    },
    {
      "duration": "30",
      "image": "units/undead/bat-ne-2.png"
    },
    {
      "duration": "30",
      "image": "units/undead/bat-ne-1.png",
      "sound": "bat-flapping.wav"
    },
    {
      "duration": "30",
      "image": "units/undead/bat-ne-2.png"
    },
    {
      "duration": "30",
      "image": "units/undead/bat-ne-3.png"
    },
    {
      "duration": "50",
      "image": "units/undead/bat-ne-3.png"
    },
    {
      "duration": "50",
      "image": "units/undead/bat-ne-2.png"
    },
    {
      "duration": "40",
      "image": "units/undead/bat-ne-3.png"
    }
   ],
    "else":
   [
    {
      "frame":
     [
      {
        "duration": "70",
        "image": "units/undead/bat-ne-4.png",
        "sound": "miss-1.ogg,miss-2.ogg,miss-3.ogg"
      }
     ],
      "hits": "no"
    }
   ],
    "if":
   [
    {
      "frame":
     [
      {
        "duration": "70",
        "image": "units/undead/bat-ne-4.png",
        "sound": "bite-small.ogg"
      }
     ],
      "hits": "yes"
    }
   ],
    "direction": "n,ne,nw",
    "offset": "0.0~0.9:200,0.9~0.0:160",
    "start_time": "-200"
  }
 ],
  "trait":
 [
  {
    "id": "feral",
    "availability": "musthave",
    "male_name": "feral",
    "female_name": "female^feral",
    "description": "Receive only 40% defense in villages"
  }
 ],
  "defend":
 [
  {
    "frame":
   [
    {
      "duration": "1",
      "image": "units/undead/bat-se-3.png"
    },
    {
      "duration": "100",
      "image": "units/undead/bat-se-4.png"
    },
    {
      "duration": "1",
      "image": "units/undead/bat-se-3.png"
    }
   ],
    "else":
   [
    {
      "frame":
     [
      {
        "duration": "150",
        "image": "units/undead/bat-se-4.png"
      }
     ],
      "hits": "miss,kill"
    }
   ],
    "if":
   [
    {
      "hits": "miss",
      "offset": "0.0~-0.15,-0.15~0.0"
    },
    {
      "frame":
     [
      {
        "duration": "150",
        "image": "units/undead/bat-se-4.png",
        "sound": "bat-hit-1.ogg,bat-hit-2.ogg,bat-hit-3.ogg,bat-hit-4.ogg"
      }
     ],
      "hits": "hit"
    }
   ],
    "direction": "s,sw,se",
    "start_time": "-126"
  },
  {
    "frame":
   [
    {
      "duration": "1",
      "image": "units/undead/bat-ne-3.png"
    },
    {
      "duration": "100",
      "image": "units/undead/bat-ne-4.png"
    },
    {
      "duration": "1",
      "image": "units/undead/bat-ne-3.png"
    }
   ],
    "else":
   [
    {
      "frame":
     [
      {
        "duration": "150",
        "image": "units/undead/bat-ne-4.png"
      }
     ],
      "hits": "miss,kill"
    }
   ],
    "if":
   [
    {
      "hits": "miss",
      "offset": "0.0~-0.15,-0.15~0.0"
    },
    {
      "frame":
     [
      {
        "duration": "150",
        "image": "units/undead/bat-ne-4.png",
        "sound": "bat-hit-1.ogg,bat-hit-2.ogg,bat-hit-3.ogg,bat-hit-4.ogg"
      }
     ],
      "hits": "hit"
    }
   ],
    "direction": "n,nw,ne",
    "start_time": "-126"
  }
 ],
  "resistance":
 [
  {
    "cold": "70"
  }
 ],
  "attack":
 [
  {
    "specials":
   [
    {
      "drains":
     [
      {
        "id": "drains",
        "name": "drains",
        "description": "Drain:\nThis unit drains health from living units, healing itself for half the amount of damage it deals (rounded down)."
      }
     ]
    }
   ],
    "name": "fangs",
    "description": "fangs",
    "icon": "attacks/fangs-animal.png",
    "type": "blade",
    "range": "melee",
    "damage": "4",
    "number": "2"
  }
 ],
  "defense":
 [
  {
    "village": "-60"
  }
 ],
  "portrait":
 [
  {
    "size": "400",
    "side": "left",
    "mirror": "false",
    "image": "portraits/monsters/transparent/bat.png"
  },
  {
    "size": "400",
    "side": "right",
    "mirror": "true",
    "image": "portraits/monsters/transparent/bat.png"
  }
 ],
  "standing_anim":
 [
  {
    "frame":
   [
    {
      "duration": "50",
      "image": "units/undead/bat-se-3.png"
    },
    {
      "duration": "60",
      "image": "units/undead/bat-se-2.png"
    },
    {
      "duration": "80",
      "image": "units/undead/bat-se-1.png"
    },
    {
      "duration": "60",
      "image": "units/undead/bat-se-2.png"
    },
    {
      "duration": "50",
      "image": "units/undead/bat-se-3.png"
    },
    {
      "duration": "60",
      "image": "units/undead/bat-se-4.png"
    },
    {
      "duration": "80",
      "image": "units/undead/bat-se-5.png"
    },
    {
      "duration": "60",
      "image": "units/undead/bat-se-4.png"
    }
   ],
    "direction": "s,se,sw",
    "start_time": "0",
    "layer": "60"
  },
  {
    "frame":
   [
    {
      "duration": "50",
      "image": "units/undead/bat-ne-3.png"
    },
    {
      "duration": "60",
      "image": "units/undead/bat-ne-2.png"
    },
    {
      "duration": "80",
      "image": "units/undead/bat-ne-1.png"
    },
    {
      "duration": "60",
      "image": "units/undead/bat-ne-2.png"
    },
    {
      "duration": "50",
      "image": "units/undead/bat-ne-3.png"
    },
    {
      "duration": "60",
      "image": "units/undead/bat-ne-4.png"
    },
    {
      "duration": "80",
      "image": "units/undead/bat-ne-5.png"
    },
    {
      "duration": "60",
      "image": "units/undead/bat-ne-4.png"
    }
   ],
    "layer": "60",
    "direction": "n,ne,nw",
    "start_time": "0"
  }
 ],
  "id": "Vampire Bat",
  "name": "Vampire Bat",
  "race": "bats",
  "image": "units/undead/bat-se-3.png",
  "profile": "portraits/monsters/bat.png",
  "flag_rgb": "magenta",
  "ellipse": "misc/ellipse-nozoc",
  "hitpoints": "16",
  "movement_type": "smallfly",
  "movement": "8",
  "experience": "22",
  "level": "0",
  "alignment": "chaotic",
  "advances_to": "Blood Bat",
  "undead_variation": "bat",
  "cost": "13",
  "usage": "scout",
  "description": "Vampire bats are flying beasts that feed on the blood of other creatures. While their fangs are not very powerful, the health of victims is drained away along with their blood, and given to the Bats.\n\nSpecial Notes: During battle, this unit can drain life from victims to renew its own health.",
  "die_sound": "bat-flapping.wav"
}