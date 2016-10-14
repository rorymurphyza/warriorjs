class Player 
{
  constructor(warrior) 
  {
    this.MaxHealth = 20;
  }

  playTurn(warrior) {
    //check health level to see what we should do
    if (warrior.health() < 0.8 * this.MaxHealth)  //we are below 80% health
    {
      if (warrior.feel().isEmpty()) //nothing ahead of us
      {
        warrior.rest();
      }
      else  //something is ahead of us
      {
        warrior.attack();
      }
    }
    else //we have a high enough health to carry on
    {
      if (warrior.feel().isEmpty()) //nothing is ahead of us
      {
        warrior.walk();
      }
      else  //something is ahead of us
      {
        warrior.attack();
      }
    }
  }
}
