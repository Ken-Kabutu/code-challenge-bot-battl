import React from "react";
import BotCard from "./BotCard"

function BotCollection({ bots, addToArmy, releaseFromArmy }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <div className="column" key={bot.id}>
            <BotCard bot={bot} addToArmy={addToArmy}
            releaseFromArmy={releaseFromArmy} />
            </div>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
