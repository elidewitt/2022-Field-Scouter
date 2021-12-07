const ScoutingSource = {
  "Pregame" : {
    "Scouter Name" : ["text"],
    "Match Number" : ["number"],
    "Team Number" : ["options", [
      "93 : Apple Corps Robotics",
      "167 : Children of the Corn"
    ]],
    "No Show" : ["checkbox"],
    "Alliance" : ["options", [ "Red", "Blue" ]],
    "Start Position" : ["options", [ "Left", "Middle", "Right" ]],
  },
  "Autonomous" : {
    "Auto Upper" : ["number"],
    "Auto Lower" : ["number"],
    "Exit Initiation Line" : ["checkbox"]
  },
  "Teleop" : {
    "Teleop Upper" : ["number"],
    "Teleop Lower" : ["number"],
    "Rotation Control" : ["checkbox"],
    "Position Control" : ["checkbox"],
    "Shoot from Trench" : ["checkbox"],
    "Shoot from Target Zone" : ["checkbox"],
    "Effective Defensive Gameplay" : ["checkbox"]
  },
  "Endgame" : {
    "Hang" : ["checkbox"],
    "Active Leveling Method" : ["checkbox"]
  },
  "Postgame" : {
    "Technical Issues" : ["checkbox"],
    "Final Alliance Score" : ["number"]
  }
}
