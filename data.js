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
    "Starting Tarmac" : ["options", [ "Left", "Middle", "Right" ]],
  },
  "Autonomous" : {
    "Auto Upper" : ["number"],
    "Auto Lower" : ["number"],
    "Taxi" : ["checkbox"]
  },
  "Teleop" : {
    "Teleop Upper" : ["number"],
    "Teleop Lower" : ["number"],
    "Shoot from Launchpad" : ["checkbox"],
    "Effective Defensive Gameplay" : ["checkbox"]
  },
  "Endgame" : {
    "Rung thing" : ["options", [
      "idk what its called",
      "please help",
      "ill read the manual later",
      "i just now that there are four"
    ]]
  },
  "Postgame" : {
    "Technical Issues" : ["checkbox"],
    "Final Alliance Score" : ["number"]
  }
}
