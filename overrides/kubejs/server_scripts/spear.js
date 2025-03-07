const spearItems = [
"spartanweaponry:copper_spear",
"spartanweaponry:diamond_spear",
"spartanweaponry:golden_spear",
"spartanweaponry:iron_spear",
"spartanweaponry:netherite_spear",
"spartanweaponry:stone_spear",
"spartanweaponry:wooden_spear",
"spartanweaponry:aluminum_glaive",
"spartanweaponry:bronze_glaive",
"spartanweaponry:constantan_glaive",
"spartanweaponry:copper_glaive",
"spartanweaponry:diamond_glaive",
"spartanweaponry:electrum_glaive",
"spartanweaponry:golden_glaive",
"spartanweaponry:invar_glaive",
"spartanweaponry:iron_glaive",
"spartanweaponry:lead_glaive",
"spartanweaponry:netherite_glaive",
"spartanweaponry:nickel_glaive",
"spartanweaponry:platinum_glaive",
"spartanweaponry:silver_glaive",
"spartanweaponry:steel_glaive",
"spartanweaponry:stone_glaive",
"spartanweaponry:tin_glaive",
"spartanweaponry:wooden_glaive",
"dynamictrees:staff",
"spartanweaponry:aluminum_quarterstaff",
"spartanweaponry:bronze_quarterstaff",
"spartanweaponry:constantan_quarterstaff",
"spartanweaponry:copper_quarterstaff",
"spartanweaponry:diamond_quarterstaff",
"spartanweaponry:electrum_quarterstaff",
"spartanweaponry:golden_quarterstaff",
"spartanweaponry:invar_quarterstaff",
"spartanweaponry:iron_quarterstaff",
"spartanweaponry:lead_quarterstaff",
"spartanweaponry:netherite_quarterstaff",
"spartanweaponry:nickel_quarterstaff",
"spartanweaponry:platinum_quarterstaff",
"spartanweaponry:silver_quarterstaff",
"spartanweaponry:steel_quarterstaff",
"spartanweaponry:stone_quarterstaff",
"spartanweaponry:tin_quarterstaff",
"spartanweaponry:wooden_quarterstaff",
"spartanweaponry:aluminum_pike",
"spartanweaponry:bronze_pike",
"spartanweaponry:constantan_pike",
"spartanweaponry:copper_pike",
"spartanweaponry:diamond_pike",
"spartanweaponry:electrum_pike",
"spartanweaponry:golden_pike",
"spartanweaponry:invar_pike",
"spartanweaponry:iron_pike",
"spartanweaponry:lead_pike",
"spartanweaponry:netherite_pike",
"spartanweaponry:nickel_pike",
"spartanweaponry:platinum_pike",
"spartanweaponry:silver_pike",
"spartanweaponry:steel_pike",
"spartanweaponry:stone_pike",
"spartanweaponry:tin_pike",
"spartanweaponry:wooden_pike",
"spartanweaponry:aluminum_lance",
"spartanweaponry:bronze_lance",
"spartanweaponry:constantan_lance",
"spartanweaponry:copper_lance",
"spartanweaponry:diamond_lance",
"spartanweaponry:electrum_lance",
"spartanweaponry:golden_lance",
"spartanweaponry:invar_lance",
"spartanweaponry:iron_lance",
"spartanweaponry:lead_lance",
"spartanweaponry:netherite_lance",
"spartanweaponry:nickel_lance",
"spartanweaponry:platinum_lance",
"spartanweaponry:silver_lance",
"spartanweaponry:steel_lance",
"spartanweaponry:stone_lance",
"spartanweaponry:tin_lance",
"spartanweaponry:wooden_lance"
];
if (typeof spearUsageCache === "undefined") { var spearUsageCache = {}; }
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
  if (!spearItems.includes(usedId)) return;
  let uuid = mcPlayer.getUUID ? mcPlayer.getUUID().toString() : kubejsPlayer.name.string;
  let totalUsage = 0;
  spearItems.forEach(itemId => { totalUsage += kubejsPlayer.stats.getItemsUsed(Item.of(itemId)); });
  spearUsageCache[uuid] = totalUsage;
  let effectLevel = 0;
  if (totalUsage >= 1000) effectLevel = 3; else if (totalUsage >= 500) effectLevel = 2; else if (totalUsage >= 100) effectLevel = 1;
  let hasHaste = false;
  let activeEffects = mcPlayer.getActiveEffects();
  let iterator = activeEffects.iterator();
  while (iterator.hasNext()) {
    let effectInstance = iterator.next();
    let effectType = effectInstance.getEffect();
    let registryName = effectType.getRegistryName().toString();
    if (registryName === "minecraft:haste") { hasHaste = true; break; }
  }
  if (effectLevel > 0 && !hasHaste) {
    event.getServer().runCommandSilent(`effect give ${kubejsPlayer.name.string} minecraft:haste 5 ${effectLevel - 1} true`);
  }
});
