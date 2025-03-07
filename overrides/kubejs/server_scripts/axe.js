const EntityDamageSource = java("net.minecraft.world.damagesource.EntityDamageSource");
const weaponItems = [
  "spartanweaponry:diamond_halberd",
  "spartanweaponry:golden_halberd",
  "spartanweaponry:iron_halberd",
  "spartanweaponry:netherite_halberd",
  "spartanweaponry:stone_halberd",
  "spartanweaponry:wooden_halberd",
  "spartanweaponry:cooper_halberd",
  "spartanweaponry:diamond_battleaxe",
  "spartanweaponry:golden_battleaxe",
  "spartanweaponry:iron_battleaxe",
  "spartanweaponry:netherite_battleaxe",
  "spartanweaponry:stone_battleaxe",
  "spartanweaponry:wooden_battleaxe",
  "spartanweaponry:cooper_battleaxe",
  "minecraft:wooden_axe",
  "minecraft:stone_axe",
  "minecraft:iron_axe",
  "minecraft:golden_axe",
  "minecraft:diamond_axe",
  "minecraft:netherite_axe",
  "spartanweaponry:aluminum_flanged_mace",
  "spartanweaponry:bronze_flanged_mace",
  "spartanweaponry:constantan_flanged_mace",
  "spartanweaponry:copper_flanged_mace",
  "spartanweaponry:diamond_flanged_mace",
  "spartanweaponry:electrum_flanged_mace",
  "spartanweaponry:golden_flanged_mace",
  "spartanweaponry:invar_flanged_mace",
  "spartanweaponry:iron_flanged_mace",
  "spartanweaponry:lead_flanged_mace",
  "spartanweaponry:netherite_flanged_mace",
  "spartanweaponry:nickel_flanged_mace",
  "spartanweaponry:platinum_flanged_mace",
  "spartanweaponry:silver_flanged_mace",
  "spartanweaponry:steel_flanged_mace",
  "spartanweaponry:stone_flanged_mace",
  "spartanweaponry:tin_flanged_mace",
  "spartanweaponry:wooden_flanged_mace",
  "spartanweaponry:studded_club",
  "spartanweaponry:wooden_club",
  "htm:hammer",
  "htm:hammer_head",
  "spartanweaponry:aluminum_battle_hammer",
  "spartanweaponry:aluminum_warhammer",
  "spartanweaponry:bronze_battle_hammer",
  "spartanweaponry:bronze_warhammer",
  "spartanweaponry:constantan_battle_hammer",
  "spartanweaponry:constantan_warhammer",
  "spartanweaponry:copper_battle_hammer",
  "spartanweaponry:copper_warhammer",
  "spartanweaponry:diamond_battle_hammer",
  "spartanweaponry:diamond_warhammer",
  "spartanweaponry:electrum_battle_hammer",
  "spartanweaponry:electrum_warhammer",
  "spartanweaponry:golden_battle_hammer",
  "spartanweaponry:golden_warhammer",
  "spartanweaponry:invar_battle_hammer",
  "spartanweaponry:invar_warhammer",
  "spartanweaponry:iron_battle_hammer",
  "spartanweaponry:iron_warhammer",
  "spartanweaponry:lead_battle_hammer",
  "spartanweaponry:lead_warhammer",
  "spartanweaponry:netherite_battle_hammer",
  "spartanweaponry:netherite_warhammer",
  "spartanweaponry:nickel_battle_hammer",
  "spartanweaponry:nickel_warhammer",
  "spartanweaponry:platinum_battle_hammer",
  "spartanweaponry:platinum_warhammer",
  "spartanweaponry:silver_battle_hammer",
  "spartanweaponry:silver_warhammer",
  "spartanweaponry:steel_battle_hammer",
  "spartanweaponry:steel_warhammer",
  "spartanweaponry:stone_battle_hammer",
  "spartanweaponry:stone_warhammer",
  "spartanweaponry:tin_battle_hammer",
  "spartanweaponry:tin_warhammer",
  "spartanweaponry:wooden_battle_hammer",
  "spartanweaponry:wooden_warhammer"
];
let weaponUsageCache = {};
onEvent('entity.hurt', event => {
  let source = event.getSource();
  if (!source) return;
  let sourceStr = source.toString();
  let match = sourceStr.match(/ServerPlayer\['([^'\/]+)/);
  if (!match || !match[1]) return;
  let playerName = match[1];
  let kubejsPlayer = event.getServer().getPlayer(playerName);
  if (!kubejsPlayer) return;
  let mcPlayer = kubejsPlayer.getMinecraftEntity ? kubejsPlayer.getMinecraftEntity() : null;
  if (!mcPlayer) return;
  let mainItemStack = mcPlayer.getMainHandItem();
  if (!mainItemStack) return;
  let item = mainItemStack.getItem();
  let usedId = item.getRegistryName().toString();
  if (!weaponItems.includes(usedId)) return;
  
  FeathersHelper.subFeathers(mcPlayer, 1);
  
  let uuid = mcPlayer.getUUID ? mcPlayer.getUUID().toString() : kubejsPlayer.name.string;
  let totalUsage = 0;
  weaponItems.forEach(itemId => {
    totalUsage += kubejsPlayer.stats.getItemsUsed(Item.of(itemId));
  });
  weaponUsageCache[uuid] = totalUsage;
  let effectLevel = 0;
  if (totalUsage >= 1000) effectLevel = 3;
  else if (totalUsage >= 500) effectLevel = 2;
  else if (totalUsage >= 100) effectLevel = 1;
  let hasStrength = false;
  let activeEffects = mcPlayer.getActiveEffects();
  let iterator = activeEffects.iterator();
  while (iterator.hasNext()) {
    let effectInstance = iterator.next();
    let effectType = effectInstance.getEffect();
    let registryName = effectType.getRegistryName().toString();
    if (registryName === "minecraft:strength") {
      hasStrength = true;
      break;
    }
  }
  if (effectLevel > 0 && !hasStrength) {
    event.getServer().runCommandSilent(`effect give ${kubejsPlayer.name.string} minecraft:strength 5 ${effectLevel - 1} true`);
  }
});
