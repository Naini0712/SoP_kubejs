//Planks, Slabs, Stairs, Nuggets, Ingots, Blocks, etc...
onEvent('recipes', event => {
  for(let i = 0; i < removecraftingid.length; i++)
  event.remove({id: removecraftingid[i], type: 'minecraft:crafting_shapeless'})
  for(let i = 0; i < removecraftingoredict.length; i++)
  event.remove({output: removecraftingoredict[i], type: 'minecraft:crafting_shapeless'})
  for(let i = 0; i < removecrafting.length; i++)
  event.remove({output: removecrafting[i], type: 'minecraft:crafting_shapeless'})
  for(let i = 0; i < removecraftingidsd.length; i++)
  event.remove({id: removecraftingidsd[i], type: 'minecraft:crafting_shaped'})
  for(let i = 0; i < removecraftingoredictsd.length; i++)
  event.remove({output: removecraftingoredictsd[i], type: 'minecraft:crafting_shaped'})
  for(let i = 0; i < removecraftingsd.length; i++)
  event.remove({output: removecraftingsd[i], type: 'minecraft:crafting_shaped'})
})



//Normal Removing Recipes
onEvent('recipes', event => {
  for(let i = 0; i < removeshaped.length; i++)
  event.remove({output: removeshaped[i], type: 'minecraft:crafting_shaped'})
  for(let i = 0; i < removeshapeless.length; i++)
  event.remove({output: removeshapeless[i], type: 'minecraft:crafting_shapeless'})
  for(let i = 0; i < removeshapedid.length; i++)
  event.remove({id: removeshapedid[i], type: 'minecraft:crafting_shaped'})
  for(let i = 0; i < removeshapelessid.length; i++)
  event.remove({id: removeshapelessid[i], type: 'minecraft:crafting_shapeless'})
  for(let i = 0; i < uniquecraftingtypeid.length; i++)
  event.remove({output: uniquecraftingtypeid[i], type: uniquecraftingtype[i]})
})



//Remove all types of recipes
onEvent('recipes', event => {
  for(let i = 0; i < removealltyperecipeid.length; i++)
  event.remove({id: removealltyperecipeid[i]})
  for(let i = 0; i < removealltyperecipe.length; i++)
  event.remove({output: removealltyperecipe[i]})
})

//Remove Smelting Recipes
onEvent('recipes', event => {
  for(let i = 0; i < removesmelting.length; i++)
  event.remove({id: removesmelting[i], type: 'minecraft:smelting'})
})

//Add recipes stripped log->wood with chisel
onEvent('recipes', event => {
  for(let i = 0; i < planks.length; i++)
  event.shaped(planks[i],['C','L'], {
    C: 'minecraft:flint',
    L: logs[i]
  }),
  event.shaped(planks[i],['C','L'], {
    C: Item.of(chisels[0]).ignoreNBT(),
    L: logs[i]
  }).damageIngredient(1).keepIngredient(chisels[1]),
  event.shaped(planks[i],['C','L'], {
    C: Item.of(chisels[1]).ignoreNBT(),
    L: logs[i]
  }).damageIngredient(1).keepIngredient(chisels[2]),
  event.shaped(planks[i],['C','L'], {
    C: Item.of(chisels[2]).ignoreNBT(),
    L: logs[i]
  }).damageIngredient(1).keepIngredient(chisels[3])
})



//Add recipes of bookshelves
onEvent('recipes', event => {
  for(let i = 0; i < bookshelves.length; i++)
  event.shaped(bookshelves[i],['BSB','BWB','BBB'], {
    B: 'minecraft:book',
    S: Item.of(saws[0]).ignoreNBT(),
    W: planksforbs[i]
  }).damageIngredient(1).keepIngredient(saws[0]),
  event.shaped(bookshelves[i],['BSB','BWB','BBB'], {
    B: 'minecraft:book',
    S: Item.of(saws[1]).ignoreNBT(),
    W: planksforbs[i]
  }).damageIngredient(1).keepIngredient(saws[1]),
  event.shaped(bookshelves[i],['BSB','BWB','BBB'], {
    B: 'minecraft:book',
    S: Item.of(saws[2]).ignoreNBT(),
    W: planksforbs[i]
  }).damageIngredient(1).keepIngredient(saws[2])
})



//Add recipes of slabs
onEvent('recipes', event => {
  for(let i = 0; i < slabs.length; i++)
  event.shaped(
    Item.of(slabs[i], 6),
    [' S ','WWW'], {
    S: Item.of(saws[0]).ignoreNBT(),
    W: slabmaterialswood[i]
  }).damageIngredient(3).keepIngredient(saws[0]),
  event.shaped(
    Item.of(slabs[i], 6),
    [' S ','WWW'], {
    S: Item.of(saws[1]).ignoreNBT(),
    W: slabmaterialswood[i]
  }).damageIngredient(3).keepIngredient(saws[1]),
  event.shaped(
    Item.of(slabs[i], 6),
    [' S ','WWW'], {
    S: Item.of(saws[2]).ignoreNBT(),
    W: slabmaterialswood[i]
  }).damageIngredient(3).keepIngredient(saws[2])
})



//Add recipes of stairs
onEvent('recipes', event => {
  for(let i = 0; i < stairs.length; i++)
  event.shaped(
    Item.of(stairs[i], 8),
    ['W S','WW ','WWW'], {
    S: Item.of(saws[0]).ignoreNBT(),
    W: stairmaterialswood[i]
  }).damageIngredient(6).keepIngredient(saws[0]),
  event.shaped(
    Item.of(stairs[i], 8),
    ['W S','WW ','WWW'], {
    S: Item.of(saws[1]).ignoreNBT(),
    W: stairmaterialswood[i]
  }).damageIngredient(6).keepIngredient(saws[1]),
  event.shaped(
    Item.of(stairs[i], 8),
    ['W S','WW ','WWW'], {
    S: Item.of(saws[2]).ignoreNBT(),
    W: stairmaterialswood[i]
  }).damageIngredient(6).keepIngredient(saws[2])
})



//Add recipes block of sugarcane and bamboo
onEvent('recipes', event => {
  for(let i = 0; i < nineblock.length; i++)
  event.shaped(nineblock[i],
    ['FFF','FFF','FFF'], {
    F: nine[i]
  })
})



//Plates
onEvent('recipes', event => {
  for(let i = 0; i < plates.length; i++)
  event.shaped(plates[i],
    ['H','I','I'], {
    H: Item.of('immersiveengineering:hammer').ignoreNBT(),
    I: platemts[i]
  }).damageIngredient(1).keepIngredient('immersiveengineering:hammer')
})



//Casings
onEvent('recipes', event => {
for(let i = 0; i < casings.length; i++)
event.shaped(casings[i],
['PPP','PWP','PPP'], {
  P: casingsmts[i],
  W: 'appliedenergistics2:certus_quartz_wrench'
}).keepIngredient('appliedenergistics2:certus_quartz_wrench'),
event.shaped(casings[i],
['PPP','PWP','PPP'], {
  P: casingsmts[i],
  W: 'appliedenergistics2:nether_quartz_wrench'
}).keepIngredient('appliedenergistics2:nether_quartz_wrench')
})



//Ludicrous Ingots(affected by PO3)
onEvent('recipes', event => {
  for(let i = 0; i < lingots.length; i++)
  event.shaped(lingots[i],
  ['RRR','RIR','RRR'], {
    R: lingotmts[i],
    I: lingotbasemts[i]
  })
})