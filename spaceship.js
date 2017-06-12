class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name
    this.crewMembers = crewMembers
    this.phasers = phasers
    this.shields = shields

    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"

    if (crewMembers.length === 0) {
        this.docked = true
    } else {
        this.docked = false
    }
    this.something()
  }


  something () {
    this.crewMembers.forEach((member)=>{member.currentShip = this})
  }

}