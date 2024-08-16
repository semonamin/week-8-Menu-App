class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

// describe method return the player name and position
  describe(){
    return `${this.name} plays ${this.position}.`;
  }
}
// team class to show the team of players
class Team{
  constructor(name){
    this.name = name;
    this.players = [];
  }
  addPlayer(player){
    if (player instanceof Player){
      this.players.push(player);
    } else{
      throw new Error(`You can only add an instance of player. Argument is not a player: ${player}`);
    }
  }
  describe(){
    return `${this.name} has ${this.players.length} players.`;
  }
}
// this show who is current playing
 
class Menu {
  constructor(){
   this.teams = []; 
   this.selectedTeam = null;
  }

  start(){
     let selection = this.showMainMenuOptions();
     while (selection !=0){
      switch(selection){
        case '1' :
          this.creatTeam();
          break;
        case '2' :
          this.viewTeam();
          break;
        case '3' :
          this.deleteTeam();
          break;
        case '4' :
          this.displayAllTeams();
          break;
        default:
           selection = 0;
      }
     selection = this.showMainMenuOptions();
     }

     alert('Goodbye!');
  }

  showMainMenuOptions (){
    return prompt(`
    0) exit
    1) creat new team
    2) view team
    3) delete team
    4) display all teams
    `);
  }


 showTeamMainMenuOptions(teamInfo){
  return prompt (`
  0) back
  1) creat player
  2) delete player
  -------------------
  ${teamInfo}
  `);
 }
  displayAllTeams() {
    let teamString ='';
    for (let i = 0; i < this.teams.length; i++){
       teamString += i + ') ' + this.teams[i].name + '\n';
    }
    alert(teamString);
  }
  creatTeam(){
    let name = prompt('Enter namr for new team');
    this.teams.push(new Team(name));
  }
 viewTeam (){
  let index = prompt(`Enter the index of the team you wish to view:`);
  if(index > -1 && index< this.teams.length) {
     this.selectedTeam = this.teams[index];
     let description = 'Team Name: ' + this.selectedTeam.name + '\n';

      for (let i = 0; i< this.selectedTeam.players.length; i++){
        description += i + ') ' + this.selectedTeam.players[i].name 
        + '-' + this.selectedTeam.players.position + '\n';
      } 


      let selection1 = this.showTeamMainMenuOptions(description);
      switch (selection1) {
        case '1':
          this.creatPlayer();
          break;
        case '2':
        this.deletePlayer();
      }
    }
  }

  creatPlayer(){ 
    let name = prompt("Enter name for new player");
    let position = prompt('Enter position for new player');
    this.selectedTeam.addPlayer.push(new Player(name, position));
  }

   deleteTeam(){
    let index= prompt("Enter the index of the team you want to delete");
    if(index>-1 && index<this.teams.length) {
      this.teams.splice(index, 1);
    }
   }  
  deletePlayer() { 
    let index = prompt("Enter the index of the player that you wish to delete");
    if (index > -1 && index < this .selectedTeam.players.length) {
       this.selectedTeam.players.splice(index, 1);
    }

  }
}

let menu = new Menu();
menu.start();
