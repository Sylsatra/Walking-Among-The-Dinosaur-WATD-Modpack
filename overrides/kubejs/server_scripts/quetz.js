const ALLOWED_BIOMES2 = [
            "minecraft:desert",
            "minecraft:badlands",
            "minecraft:eroded_badlands",
            "terralith:bryce_canyon",
            "terralith:savanna_badlands",
            "terralith:volcanic_crater",
            "terralith:ancient_sands",
            "terralith:arid_highlands",
            "terralith:desert_canyon",
            "terralith:desert_oasis",
            "terralith:desert_spires",
            "terralith:gravel_desert",
            "terralith:lush_desert",
            "terralith:red_oasis",
            "terralith:sandstone_valley",
            "terralith:warped_mesa",
            "terralith:white_mesa"
];

function extractBiomeId(biome) {
  let str = biome.toString();
  let matches = str.match(/([a-z0-9_]+:[a-z0-9_]+)/gi);
  if (matches && matches.length) {
    return matches[matches.length - 1].toLowerCase();
  }
  return "";
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

onEvent('server.load', event => {
  event.server.schedule(26 * MINUTE, event.server, callback => {
    const players = event.server.players;
    if (players.length === 0) {
      callback.reschedule(26 * MINUTE);
      return;
    }

    players.forEach(player => {
      let level = player.level;

      let pos = player.blockPosition ?? {
        getX: () => (typeof player.x === "number" && !isNaN(player.x)) ? Math.floor(player.x) : 0,
        getY: () => {
          let py = player.y;
          return (typeof py === "number" && !isNaN(py)) ? Math.floor(py) : 64;
        },
        getZ: () => (typeof player.z === "number" && !isNaN(player.z)) ? Math.floor(player.z) : 0
      };

      let biomeId = getLocalBiomeId(level, pos);

      if (ALLOWED_BIOMES2.includes(biomeId) && Math.random() < 0.01) {
        let offsetX = 42;
        let offsetZ = Math.floor(Math.random() * 31) - 20; 

        let newX = pos.getX() + offsetX;
        let newZ = pos.getZ() + offsetZ;

        let serverLevel = level.minecraftLevel;
        let HeightmapTypes = java("net.minecraft.world.level.levelgen.Heightmap$Types");
        let newY = serverLevel.getHeight(HeightmapTypes.WORLD_SURFACE, newX, newZ);

        let mob = level.createEntity('fossil:quetzalcoatlus');
        mob.mergeFullNBT({
          Age: 312000,         
          ForcedAge: 312000,
          Gender: "FEMALE",
          Health: 60.0,       
          HandItems: [
            { id: "fossil:egg_item_quetzalcoatlus", Count: 1 },
            {}
          ],
          HandDropChances: [
            0.4,   
            0.085
          ],
          ForgeData: {
            creeperfear: 5.0,
            creeperfearInRange: "yes",
            vmhScaleAttackSpeed: 0.8021593570709229,
            vmhScaleDistribution: 2.0,
            vmhScaleMedian: 1.0,
            vmhScaleSpeed: 1.2494635462760925,
            vmhScaleMax: 1.6,
            vmhScaleMean: 1.0,
            vmhScaleJumpHeight: 1.0004273653030396,
            vmhScaleDefense: 1.2,
            vmhScaleAttackDamage: 1.4,
            vmhScaleHealth: 1.3,
            vmhScaleAttackKnockback: 1.1,
            vmhScale: 1.6,
            vmhBreedingCoefficient: 1.01,
            vmhScaleMin: 0.8,
            vmhDoScaleBreeding: "1b"
          }
        });

        mob.x = newX;
        mob.y = newY;
        mob.z = newZ;
        mob.spawn();
      }
    });

    callback.reschedule(26 * MINUTE);
  });
});
