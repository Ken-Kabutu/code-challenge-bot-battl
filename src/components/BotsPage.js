import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
//import BotSpecs from "./BotSpecs";
//import BotArmy from "./BotArmy";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  //DATA FETCHING
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((response) => response.json())
    .then((data) => setBots(data))
    .catch((error) => console.error("Error fetching bots:", Error))
  }, []);


  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

 

  const releaseFromArmy = async (bot) => {
    try {
      await fetch('http://localhost:8002/bots/${bot.id}', {
        method: 'DELETE',
      });
      setArmy(army.filter((b) => b.id !== bot.id));
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };


  return (
    <div>
      <YourBotArmy 
        army={army} 
        releaseFromArmy={releaseFromArmy} 
        releaseFromArmy={releaseFromArmy}
      />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}

export default BotsPage;
