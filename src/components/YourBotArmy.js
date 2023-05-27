import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, releaseFromArmy, dischargeFromArmy }) {
  //your bot army code here...
  const handleRelease = (bot) => {
    releaseFromArmy(bot);
  };

  const handleDischarge = (bot) => {
    dischargeFromArmy(bot);
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army.map((bot) => (
            <div className="column" key={bot.id}>
              <BotCard 
                bot={bot} 
                releaseBot={() => releaseFromArmy(bot)}
                dischargeBot={() => handleDischarge(bot)}
              />
              </div>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
