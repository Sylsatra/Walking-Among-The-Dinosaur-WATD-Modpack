const CapabilityExtendedHealthSystem = java("ichttt.mods.firstaid.api.CapabilityExtendedHealthSystem");

const COOLDOWN_MS = 10 * 60 * 1000; 

let cooldown = {};

onEvent('server.load', event => {
  function scheduledTask() {
    const players = event.server.players;
    if (players.length === 0) {
      event.server.schedule(SECOND, event.server, scheduledTask);
      return;
    }
    
    players.forEach(player => {
      if (!player.isAlive()) {
        return;
      }
      
      let now = Date.now();
      if (cooldown[player.name.string] && now < cooldown[player.name.string]) {
        return;
      }
      
      let internalPlayer = (typeof player.getMinecraftEntity === 'function')
        ? player.getMinecraftEntity()
        : null;
      if (!internalPlayer) {
        return;
      }
      
      let damageCapOpt = internalPlayer.getCapability(CapabilityExtendedHealthSystem.INSTANCE, null);
      damageCapOpt.ifPresent(capProvider => {
        let headHealth = capProvider.HEAD.currentHealth;
        let bodyHealth = capProvider.BODY.currentHealth;
        
        if (headHealth <= 2 || bodyHealth <= 2) {
          let damageTaken = player.stats.getDamageTaken();
          
          const thresholds = [500, 1000, 2500, 5000, 10000];
          let effectLevel = 0;
          for (let i = 0; i < thresholds.length; i++) {
            if (damageTaken >= thresholds[i]) {
              effectLevel = i + 1;
            } else {
              break;
            }
          }
          
          if (effectLevel > 0) {
            event.server.runCommandSilent(`effect give ${player.name.string} feathers:endurance 5 ${effectLevel - 1} true`);
            event.server.runCommandSilent(`effect give ${player.name.string} minecraft:speed 3 ${effectLevel - 1} true`);
            cooldown[player.name.string] = now + COOLDOWN_MS;
          } else {
          }
        } else {
        }
      });
      
      if (!damageCapOpt.isPresent()) {
      }
    });
    
    event.server.schedule(SECOND, event.server, scheduledTask);
  }
  
  event.server.schedule(SECOND, event.server, scheduledTask);
});
