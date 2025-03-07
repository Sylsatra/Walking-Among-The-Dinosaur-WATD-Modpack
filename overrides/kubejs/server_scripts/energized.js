onEvent('server.load', event => {
  function scheduledTask() {
    const players = event.server.players;
    if (players.length === 0) {
      event.server.schedule(MINUTE, event.server, scheduledTask);
      return;
    }
    
    players.forEach(player => {
      if (!(player.isAlive() && player.stats)) return;
      let walked = player.stats.getWalkDistance();
      
      const thresholds = [
        100000,   
        250000,  
        500000,   
        1000000,  
        2000000,  
        4000000,  
        8000000,  
        16000000,
        32000000, 
        64000000  
      ];
      
      let effectLevel = 0;
      for (let i = 0; i < thresholds.length; i++) {
        if (walked >= thresholds[i]) {
          effectLevel = i + 1;
        } else {
          break;
        }
      }
      
      if (effectLevel > 0) {
        event.server.runCommandSilent(`effect give ${player.name.string} feathers:energized 2 ${effectLevel - 1} true`);
      }
    });
    
    event.server.schedule(MINUTE, event.server, scheduledTask);
  }
  
  event.server.schedule(MINUTE, event.server, scheduledTask);
});
