const TEMP_CAP = java("com.momosoftworks.coldsweat.common.capability.ModCapabilities").ENTITY_TEMPERATURE;
const TemperatureTrait = java("com.momosoftworks.coldsweat.api.util.Temperature$Trait");

let lastSubtraction = {};

onEvent('server.load', event => {
  event.server.schedule(100, event.server, function tempCheck(callback) {
    let now = Date.now();
    event.server.players.forEach(player => {
      if (!player.isSprinting()) return;
      let mPlayer = player.getMinecraftEntity();
      let capOpt = mPlayer.getCapability(TEMP_CAP, null);
      if (!capOpt.isPresent()) {
        return;
      }
      capOpt.ifPresent(tempCap => {
        let bodyTemp = tempCap.getTrait(TemperatureTrait.BODY);
        let units = tempCap.getPreferredUnits().toString();
        
        let isHot = false;
        if (units === "CELSIUS" || units === "C") {
          isHot = bodyTemp > 38.0;
        } else if (units === "FAHRENHEIT" || units === "F") {
          isHot = bodyTemp > 100.4;
        }
        
        if (!isHot) {
          return;
        }
        
        let playerName = player.name.string;
        if (!lastSubtraction[playerName] || now - lastSubtraction[playerName] >= 5000) {
          lastSubtraction[playerName] = now;
          FeathersHelper.subFeathers(mPlayer, 1);
        } else {
        }
      });
    });
    callback.reschedule(100);
  });
});
