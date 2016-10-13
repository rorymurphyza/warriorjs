class Player 
{
  constructor(warrior) 
  {
    
  }

  playTurn(warrior) {
    //check if there is anything ahead
    if (!(warrior.feel().isEmpty())) //there is something in front of us
    {
      warrior.attack();
    }
    else  //nothing in front of us\
    {
      warrior.walk();
    }
  }
}
