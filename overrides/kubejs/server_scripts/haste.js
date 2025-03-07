onEvent('server.load', event => {
  let featherCooldowns = {};
  function scheduledTask() {
    event.server.players.forEach(player => {
      if (!(player.isAlive() && player.stats)) return;
      const mainHandItem = player.getMainHandItem();
      if (!mainHandItem || mainHandItem.isEmpty()) return;
      
      let obsidianMined = player.stats.getBlocksMined('minecraft:obsidian');
      const thresholds = [50, 100, 250, 500, 1000];
      let level = 0;
      for (let i = 0; i < thresholds.length; i++) {
        if (obsidianMined >= thresholds[i]) {
          level = i + 1;
        } else {
          break;
        }
      }
            
      if (level > 0) {
        event.server.runCommandSilent(`effect give ${player.name.string} minecraft:haste 2 ${level - 1} true`);
        
        let cooldown = 10 - (level - 1);
        if (cooldown < 1) cooldown = 1;
        let timer = featherCooldowns[player.name.string] || cooldown;
        timer -= 1;
        if (timer <= 0) {
          let mcPlayer = player.getMinecraftEntity ? player.getMinecraftEntity() : player;
          FeathersHelper.addFeathers(mcPlayer, 1);
          timer = cooldown;
        }
        featherCooldowns[player.name.string] = timer;
      }
    });
    event.server.schedule(60, event.server, scheduledTask);
  }
  event.server.schedule(60, event.server, scheduledTask);
});
