const FeathersHelper = java("com.elenai.feathers.api.FeathersHelper");
let lastSubtraction = {};

onEvent('block.left_click', event => {
  let player = event.getPlayer();
  let tool = event.getItem();
  if (!tool) return;
  
  let toolId = tool.id;
  if (toolId !== "minecraft:diamond_pickaxe" && toolId !== "minecraft:netherite_pickaxe") return;
  
  let block = event.getBlock();
  if (!block) return;
  
  let blockId = block.id;
  if (blockId !== "minecraft:obsidian" && blockId !== "minecraft:ancient_debris") return;
  
  let playerName = player.name.string;
  let now = Date.now();
  if (!lastSubtraction[playerName] || now - lastSubtraction[playerName] >= 2000) {
    lastSubtraction[playerName] = now;
    let mPlayer = event.getMinecraftPlayer();
    FeathersHelper.subFeathers(mPlayer, 1);
  }
});
