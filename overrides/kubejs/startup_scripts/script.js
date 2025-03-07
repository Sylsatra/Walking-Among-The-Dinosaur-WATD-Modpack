onEvent("lootjs", (event) => {

  event.addLootTypeModifier(LootType.FISHING)
       .removeLoot(ItemFilter.ALWAYS_TRUE);

  let fishingModifier = event.addLootTableModifier("minecraft:gameplay/fishing");

  fishingModifier.pool((pool) => {
    pool.rolls(1);
    pool.anyBiome(
      "minecraft:dripstone_caves", 
      "minecraft:lush_caves", 
      "terralith:cave/fungal_caves", 
      "terralith:cave/underground_jungle"
    );
    pool.addWeightedLoot([
      Item.of("minecraft:red_mushroom").withChance(30),
      Item.of("minecraft:brown_mushroom").withChance(40),
      Item.of("fossil:meat_scotoharpes").withChance(10),
      Item.of("fossil:meat_lonchodomas").withChance(10),
      Item.of("fossil:meat_dicranurus").withChance(8),
      Item.of("fossil:meat_diplocaulus").withChance(2)
    ]);
  });

  fishingModifier.pool((pool) => {
    pool.rolls(1);
    pool.anyBiome("minecraft:river", "terralith:warm_river");
    pool.addWeightedLoot([
      Item.of("dynamictrees:jungle_branch").withChance(10),
      Item.of("dynamictrees:oak_branch").withChance(10),
      Item.of("dynamictrees:spruce_branch").withChance(10),
      Item.of("dynamictrees:dark_oak_branch").withChance(10),
      Item.of("dynamictrees:acacia_branch").withChance(10),
      Item.of("dynamictrees:birch_branch").withChance(10),
      Item.of("fossil:meat_henodus").withChance(8),
      Item.of("fossil:meat_tiktaalik").withChance(29),
      Item.of("fossil:meat_alligator_gar").withChance(3)
    ]);
  });

  fishingModifier.pool((pool) => {
    pool.rolls(1);
    pool.anyBiome("minecraft:swamp", "terralith:orchid_swamp");
    pool.addWeightedLoot([
      Item.of("immersive_weathering:moss_clump").withChance(36),
      Item.of("minecraft:moss_block").withChance(4),
      Item.of("minecraft:rooted_dirt").withChance(15),
      Item.of("minecraft:vine").withChance(20),
      Item.of("fossil:meat_tiktaalik").withChance(13),
      Item.of("fossil:meat_henodus").withChance(7),
      Item.of("fossil:meat_alligator_gar").withChance(5)
    ]);
  });

  fishingModifier.pool((pool) => {
    pool.rolls(1);
    pool.anyBiome("minecraft:warm_ocean", "minecraft:lukewarm_ocean");
    pool.addWeightedLoot([
      Item.of("fossil:meat_walliserops").withChance(11),
      Item.of("fossil:meat_aquilolamna").withChance(10),
      Item.of("fossil:meat_coelacanth").withChance(10),
      Item.of("fossil:meat_ichthyosaurus").withChance(7),
      Item.of("fossil:meat_plesiosaurus").withChance(5),
      Item.of("fossil:meat_mosasaurus").withChance(1),
      Item.of("minecraft:horn_coral_fan").withChance(2),
      Item.of("minecraft:tube_coral_block").withChance(2),
      Item.of("minecraft:brain_coral_block").withChance(2),
      Item.of("minecraft:horn_coral_block").withChance(2),
      Item.of("minecraft:horn_coral").withChance(2),
      Item.of("minecraft:tube_coral").withChance(2),
      Item.of("minecraft:bubble_coral").withChance(2),
      Item.of("minecraft:brain_coral_fan").withChance(2),
      Item.of("minecraft:brain_coral").withChance(2),
      Item.of("minecraft:bubble_coral_fan").withChance(2),
      Item.of("minecraft:bubble_coral_block").withChance(2),
      Item.of("minecraft:tube_coral_fan").withChance(2),
      Item.of("minecraft:fire_coral_block").withChance(2),
      Item.of("minecraft:fire_coral_fan").withChance(2),
      Item.of("minecraft:fire_coral").withChance(2),   
      Item.of("minecraft:dead_bubble_coral_fan").withChance(2),
      Item.of("minecraft:dead_brain_coral_block").withChance(2),
      Item.of("minecraft:dead_fire_coral_block").withChance(2),
      Item.of("minecraft:dead_horn_coral_block").withChance(2),
      Item.of("minecraft:dead_bubble_coral").withChance(2),
      Item.of("minecraft:dead_tube_coral_fan").withChance(2),
      Item.of("minecraft:dead_tube_coral_block").withChance(2),
      Item.of("minecraft:dead_brain_coral").withChance(2),
      Item.of("minecraft:dead_horn_coral").withChance(2),
      Item.of("minecraft:dead_brain_coral_fan").withChance(2),
      Item.of("minecraft:dead_tube_coral").withChance(2),
      Item.of("minecraft:dead_fire_coral_fan").withChance(2),
      Item.of("minecraft:dead_bubble_coral_block").withChance(2),
      Item.of("minecraft:dead_fire_coral").withChance(2),
      Item.of("minecraft:dead_horn_coral_fan").withChance(2)
    ]);
  });

  fishingModifier.pool((pool) => {
    pool.rolls(1);
    pool.anyBiome(
      "minecraft:cold_ocean",
      "minecraft:deep_ocean",
      "minecraft:deep_cold_ocean",
      "minecraft:deep_frozen_ocean"
    );
    pool.addWeightedLoot([
      Item.of("fossil:fossil_shale").withChance(5),
      Item.of("fossil:frozen_meat").withChance(8),
      Item.of("fossil:bone_unique_megalodon").withChance(9),
      Item.of("fossil:bone_unique_mosasaurus").withChance(8),
      Item.of("fossil:meat_megalograptus").withChance(15),
      Item.of("fossil:meat_nautilus").withChance(34),
      Item.of("fossil:meat_sturgeon").withChance(20),
      Item.of("fossil:meat_megalodon").withChance(1)

    ]);
  });

  const branchMapping = {
    "minecraft:plains": "dynamictrees:oak_branch",
    "minecraft:sunflower_plains": "dynamictrees:oak_branch",
    "minecraft:snowy_plains": "dynamictrees:spruce_branch",
    "minecraft:ice_spikes": "dynamictrees:spruce_branch",
    "minecraft:desert": "minecraft:stick",
    "minecraft:forest": "dynamictrees:oak_branch",
    "minecraft:flower_forest": "dynamictrees:oak_branch",
    "minecraft:birch_forest": "dynamictrees:birch_branch",
    "minecraft:dark_forest": "dynamictrees:dark_oak_branch",
    "minecraft:old_growth_birch_forest": "dynamictrees:birch_branch",
    "minecraft:old_growth_pine_taiga": "dynamictrees:spruce_branch",
    "minecraft:old_growth_spruce_taiga": "dynamictrees:spruce_branch",
    "minecraft:taiga": "dynamictrees:spruce_branch",
    "minecraft:snowy_taiga": "dynamictrees:spruce_branch",
    "minecraft:savanna": "dynamictrees:acacia_branch",
    "minecraft:savanna_plateau": "dynamictrees:acacia_branch",
    "minecraft:windswept_hills": "dynamictrees:oak_branch",
    "minecraft:windswept_gravelly_hills": "dynamictrees:oak_branch",
    "minecraft:windswept_forest": "dynamictrees:oak_branch",
    "minecraft:windswept_savanna": "dynamictrees:acacia_branch",
    "minecraft:jungle": "dynamictrees:jungle_branch",
    "minecraft:sparse_jungle": "dynamictrees:jungle_branch",
    "minecraft:bamboo_jungle": "minecraft:bamboo",
    "minecraft:badlands": "minecraft:stick",
    "minecraft:eroded_badlands": "minecraft:stick",
    "minecraft:wooded_badlands": "minecraft:stick",
    "minecraft:meadow": "dynamictrees:oak_branch",
    "minecraft:grove": "dynamictrees:spruce_branch",
    "minecraft:beach": "minecraft:nautilus_shell",
    "minecraft:snowy_beach": "minecraft:nautilus_shell",
    "minecraft:stony_shore": "fossil:bone_ribcage_dodo",
    "minecraft:mushroom_fields": "dynamictreesplus:mushroom_branch",
  };

  for (let biome in branchMapping) {
    fishingModifier.pool((pool) => {
      pool.rolls(1);
      pool.biome(biome);
      pool.addWeightedLoot([
        Item.of(branchMapping[biome]).withChance(100)
      ]);
    });
  }
});
