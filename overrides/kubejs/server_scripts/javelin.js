const speedWeaponItems = [
"fossil:tooth_dagger",
"spartanweaponry:aluminum_dagger",
"spartanweaponry:aluminum_parrying_dagger",
"spartanweaponry:bronze_dagger",
"spartanweaponry:bronze_parrying_dagger",
"spartanweaponry:constantan_dagger",
"spartanweaponry:constantan_parrying_dagger",
"spartanweaponry:copper_dagger",
"spartanweaponry:copper_parrying_dagger",
"spartanweaponry:diamond_dagger",
"spartanweaponry:diamond_parrying_dagger",
"spartanweaponry:electrum_dagger",
"spartanweaponry:electrum_parrying_dagger",
"spartanweaponry:golden_dagger",
"spartanweaponry:golden_parrying_dagger",
"spartanweaponry:invar_dagger",
"spartanweaponry:invar_parrying_dagger",
"spartanweaponry:iron_dagger",
"spartanweaponry:iron_parrying_dagger",
"spartanweaponry:lead_dagger",
"spartanweaponry:lead_parrying_dagger",
"spartanweaponry:netherite_dagger",
"spartanweaponry:netherite_parrying_dagger",
"spartanweaponry:nickel_dagger",
"spartanweaponry:nickel_parrying_dagger",
"spartanweaponry:platinum_dagger",
"spartanweaponry:platinum_parrying_dagger",
"spartanweaponry:silver_dagger",
"spartanweaponry:silver_parrying_dagger",
"spartanweaponry:steel_dagger",
"spartanweaponry:steel_parrying_dagger",
"spartanweaponry:stone_dagger",
"spartanweaponry:stone_parrying_dagger",
"spartanweaponry:tin_dagger",
"spartanweaponry:tin_parrying_dagger",
"spartanweaponry:wooden_dagger",
"spartanweaponry:wooden_parrying_dagger",
"htm:flint_knife",
"htm:knife_handle",
"spartanweaponry:aluminum_throwing_knife",
"spartanweaponry:bronze_throwing_knife",
"spartanweaponry:constantan_throwing_knife",
"spartanweaponry:copper_throwing_knife",
"spartanweaponry:diamond_throwing_knife",
"spartanweaponry:electrum_throwing_knife",
"spartanweaponry:golden_throwing_knife",
"spartanweaponry:invar_throwing_knife",
"spartanweaponry:iron_throwing_knife",
"spartanweaponry:lead_throwing_knife",
"spartanweaponry:netherite_throwing_knife",
"spartanweaponry:nickel_throwing_knife",
"spartanweaponry:platinum_throwing_knife",
"spartanweaponry:silver_throwing_knife",
"spartanweaponry:steel_throwing_knife",
"spartanweaponry:stone_throwing_knife",
"spartanweaponry:tin_throwing_knife",
"spartanweaponry:wooden_throwing_knife",
"spartanweaponry:aluminum_tomahawk",
"spartanweaponry:bronze_tomahawk",
"spartanweaponry:constantan_tomahawk",
"spartanweaponry:copper_tomahawk",
"spartanweaponry:diamond_tomahawk",
"spartanweaponry:electrum_tomahawk",
"spartanweaponry:golden_tomahawk",
"spartanweaponry:invar_tomahawk",
"spartanweaponry:iron_tomahawk",
"spartanweaponry:lead_tomahawk",
"spartanweaponry:netherite_tomahawk",
"spartanweaponry:nickel_tomahawk",
"spartanweaponry:platinum_tomahawk",
"spartanweaponry:silver_tomahawk",
"spartanweaponry:steel_tomahawk",
"spartanweaponry:stone_tomahawk",
"spartanweaponry:tin_tomahawk",
"spartanweaponry:wooden_tomahawk",
"fossil:ancient_javelin",
"fossil:diamond_javelin",
"fossil:gold_javelin",
"fossil:iron_javelin",
"fossil:stone_javelin",
"fossil:wooden_javelin",
"spartanweaponry:aluminum_javelin",
"spartanweaponry:bronze_javelin",
"spartanweaponry:constantan_javelin",
"spartanweaponry:copper_javelin",
"spartanweaponry:diamond_javelin",
"spartanweaponry:electrum_javelin",
"spartanweaponry:golden_javelin",
"spartanweaponry:invar_javelin",
"spartanweaponry:iron_javelin",
"spartanweaponry:lead_javelin",
"spartanweaponry:netherite_javelin",
"spartanweaponry:nickel_javelin",
"spartanweaponry:platinum_javelin",
"spartanweaponry:silver_javelin",
"spartanweaponry:steel_javelin",
"spartanweaponry:stone_javelin",
"spartanweaponry:tin_javelin",
"spartanweaponry:wooden_javelin",
"minecraft:bow",
"minecraft:bowl",
"minecraft:crossbow",
"spartanweaponry:aluminum_heavy_crossbow",
"spartanweaponry:aluminum_longbow",
"spartanweaponry:bronze_heavy_crossbow",
"spartanweaponry:bronze_longbow",
"spartanweaponry:constantan_heavy_crossbow",
"spartanweaponry:constantan_longbow",
"spartanweaponry:copper_heavy_crossbow",
"spartanweaponry:copper_longbow",
"spartanweaponry:diamond_heavy_crossbow",
"spartanweaponry:diamond_longbow",
"spartanweaponry:electrum_heavy_crossbow",
"spartanweaponry:electrum_longbow",
"spartanweaponry:golden_heavy_crossbow",
"spartanweaponry:golden_longbow",
"spartanweaponry:invar_heavy_crossbow",
"spartanweaponry:invar_longbow",
"spartanweaponry:iron_heavy_crossbow",
"spartanweaponry:iron_longbow",
"spartanweaponry:lead_heavy_crossbow",
"spartanweaponry:lead_longbow",
"spartanweaponry:leather_heavy_crossbow",
"spartanweaponry:leather_longbow",
"spartanweaponry:netherite_heavy_crossbow",
"spartanweaponry:netherite_longbow",
"spartanweaponry:nickel_heavy_crossbow",
"spartanweaponry:nickel_longbow",
"spartanweaponry:platinum_heavy_crossbow",
"spartanweaponry:platinum_longbow",
"spartanweaponry:silver_heavy_crossbow",
"spartanweaponry:silver_longbow",
"spartanweaponry:steel_heavy_crossbow",
"spartanweaponry:steel_longbow",
"spartanweaponry:tin_heavy_crossbow",
"spartanweaponry:tin_longbow",
"spartanweaponry:wooden_heavy_crossbow",
"spartanweaponry:wooden_longbow",
"spartanweaponry:aluminum_boomerang",
"spartanweaponry:bronze_boomerang",
"spartanweaponry:constantan_boomerang",
"spartanweaponry:copper_boomerang",
"spartanweaponry:diamond_boomerang",
"spartanweaponry:electrum_boomerang",
"spartanweaponry:golden_boomerang",
"spartanweaponry:invar_boomerang",
"spartanweaponry:iron_boomerang",
"spartanweaponry:lead_boomerang",
"spartanweaponry:netherite_boomerang",
"spartanweaponry:nickel_boomerang",
"spartanweaponry:platinum_boomerang",
"spartanweaponry:silver_boomerang",
"spartanweaponry:steel_boomerang",
"spartanweaponry:stone_boomerang",
"spartanweaponry:tin_boomerang",
"spartanweaponry:wooden_boomerang"
];
if(typeof speedUsageCache==="undefined"){var speedUsageCache={};}
onEvent('entity.hurt',event=>{
  let source=event.getSource();
  if(!source)return;
  let sourceStr=source.toString();
  let match=sourceStr.match(/ServerPlayer\['([^'\/]+)/);
  if(!match||!match[1])return;
  let playerName=match[1];
  let kubejsPlayer=event.getServer().getPlayer(playerName);
  if(!kubejsPlayer)return;
  let mcPlayer=kubejsPlayer.getMinecraftEntity?kubejsPlayer.getMinecraftEntity():null;
  if(!mcPlayer)return;
  let mainItemStack=mcPlayer.getMainHandItem();
  if(!mainItemStack)return;
  let item=mainItemStack.getItem();
  let usedId=item.getRegistryName().toString();
  if(!speedWeaponItems.includes(usedId))return;
  let uuid=mcPlayer.getUUID?mcPlayer.getUUID().toString():kubejsPlayer.name.string;
  let totalUsage=0;
  speedWeaponItems.forEach(itemId=>{totalUsage+=kubejsPlayer.stats.getItemsUsed(Item.of(itemId));});
  speedUsageCache[uuid]=totalUsage;
  let effectLevel=0;
  if(totalUsage>=1000)effectLevel=3;else if(totalUsage>=500)effectLevel=2;else if(totalUsage>=100)effectLevel=1;
  let hasSpeed=false;
  let activeEffects=mcPlayer.getActiveEffects();
  let iterator=activeEffects.iterator();
  while(iterator.hasNext()){
    let effectInstance=iterator.next();
    let effectType=effectInstance.getEffect();
    let registryName=effectType.getRegistryName().toString();
    if(registryName==="minecraft:speed"){hasSpeed=true;break;}
  }
  if(effectLevel>0&&!hasSpeed){
    event.getServer().runCommandSilent(`effect give ${kubejsPlayer.name.string} minecraft:speed 5 ${effectLevel-1} true`);
  }
});
