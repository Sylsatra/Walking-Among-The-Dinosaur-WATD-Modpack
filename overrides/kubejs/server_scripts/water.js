let wasUnderwater = {};
const COOLDOWN_MS2 = 10 * 1000;
let cooldown = {};

onEvent('server.load', event => {
  function scheduledTask() {
    event.server.players.forEach(player => {
      let playerName = player.name.string;
      let underwaterReq = new (java("de.keksuccino.fancymenu.customization.loadingrequirement.requirements.world.player.IsPlayerUnderWaterRequirement"))();
      let currentlyUnderwater = underwaterReq.isRequirementMet(playerName);
      
      if (currentlyUnderwater && !wasUnderwater[playerName]) {
        let now = Date.now();
        if (!(cooldown[playerName] && now < cooldown[playerName])) {
          let swimDistance = player.stats.getSwimDistance();
          let duration = 0;
          if (swimDistance >= 10000) {
            duration = 12;
          } else if (swimDistance >= 5000) {
            duration = 10;
          } else if (swimDistance >= 2000) {
            duration = 7;
          } else if (swimDistance >= 1000) {
            duration = 5;
          }
          if (duration > 0) {
            player.server.runCommandSilent(`effect give ${playerName} minecraft:water_breathing ${duration} 0 true`);
            cooldown[playerName] = now + COOLDOWN_MS2;
          }
        }
      }
      wasUnderwater[playerName] = currentlyUnderwater;
    });
    event.server.schedule(20, event.server, scheduledTask);
  }
  event.server.schedule(20, event.server, scheduledTask);
});
