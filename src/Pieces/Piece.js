export default class Piece {

  constructor(name, playerNum, imageURL) {
    this.name = name;
    this.playerNum = playerNum; 
    this.style = { backgroundImage: 'url(' + imageURL + ')'};
  }
  
}

