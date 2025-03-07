onEvent('item.right_click', event => {
  let player = event.player;
  let item = event.item;
  if (!item || item.id !== "minecraft:fishing_rod") return;
  
  function extractBiomeId(biome) {
    let str = biome.toString();
    let matches = str.match(/([a-z0-9_]+:[a-z0-9_]+)/gi);
    return matches && matches.length ? matches[matches.length - 1].toLowerCase() : "";
  }
  
  function getLocalBiomeId(levelJS, pos) {
    let serverLevel = levelJS.minecraftLevel;
    let biomeManager = serverLevel.getBiomeManager();
    let BlockPos = java("net.minecraft.core.BlockPos");
    let blockPos = new BlockPos(pos.getX(), pos.getY(), pos.getZ());
    let biomeHolder = biomeManager.getBiome(blockPos);
    let rawBiome = (typeof biomeHolder.get === "function") ? biomeHolder.get() : biomeHolder;
    return extractBiomeId(rawBiome);
  }
  
  function friendlyBiomeName(biomeId) {
    let name = biomeId;
    let colonIndex = name.indexOf(':');
    if (colonIndex >= 0) {
      name = name.substring(colonIndex + 1);
    }
    name = name.replace(/_/g, ' ');
    return name;
  }
  
  let pos = player.blockPosition ?? {
    getX: () => (typeof player.x === "number" && !isNaN(player.x)) ? Math.floor(player.x) : 0,
    getY: () => (typeof player.y === "number" && !isNaN(player.y)) ? Math.floor(player.y) : 64,
    getZ: () => (typeof player.z === "number" && !isNaN(player.z)) ? Math.floor(player.z) : 0
  };
  
  let level = player.level;
  let biomeId = getLocalBiomeId(level, pos);
  let friendlyBiome = friendlyBiomeName(biomeId);
  
  const allowedBiomes = [
    "minecraft:dripstone_caves",
    "minecraft:lush_caves",
    "terralith:cave/fungal_caves",
    "terralith:cave/underground_jungle",
    "minecraft:river", 
    "terralith:warm_river",
    "minecraft:swamp", 
    "terralith:orchid_swamp",
    "minecraft:warm_ocean",
    "minecraft:lukewarm_ocean",
    "minecraft:cold_ocean",
    "minecraft:deep_ocean",
    "minecraft:deep_cold_ocean",
    "minecraft:deep_frozen_ocean"
  ];
  
  if (!allowedBiomes.includes(biomeId)) {
    player.runCommandSilent(
      `title ${player.name.string} actionbar {"text":"No fish, mate! These ${friendlyBiome} waters be barren!","color":"gold","bold":true}`
    );
  }
});
