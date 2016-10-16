class Player 
{
  constructor(warrior) 
  {
    this.MaxHealth = 20;
    this.CurrentHealth = 20;
  }

  playTurn(warrior) {
    if (warrior.health() < this.CurrentHealth) //we have lost health since the last round
    {
      if (warrior.feel().isEmpty()) //there is nothing ahead of us
      {
        warrior.walk();
      }
      else  //there is something ahead of us
      {
        takeAction(somethingIsAhead(warrior), warrior);
      }
    }
    else //we are not being attacked
    {
      //check health level to see what we should do
      if (warrior.health() < 0.8 * this.MaxHealth)  //we are below 80% health
      {
        if (warrior.feel().isEmpty()) //nothing ahead of us
        {
          warrior.rest();
        }
        else  //something is ahead of us
        {
          takeAction(somethingIsAhead(warrior), warrior);
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
          takeAction(somethingIsAhead(warrior), warrior);
        }
      }
    }
    this.CurrentHealth = warrior.health();
  }

  
}
function somethingIsAhead(warrior)
{
  if (warrior.feel().isCaptive())
  {
    var whatIsIt =  AHEAD.CAPTIVE;
  }
  else 
  {
    var whatIsIt =  AHEAD.MINION;
  }
  return whatIsIt;
}

function takeAction(whatIsIt, warrior)
{
  switch (whatIsIt)
  {
    case AHEAD.CAPTIVE:
      warrior.rescue();
      break;
    case AHEAD.MINION:
      warrior.attack();
      break;
  }
}

var AHEAD = 
{
  CAPTIVE : {name: "Captive", code: "C"},
  MINION  : {name: "Minion", code: "M"}
};

