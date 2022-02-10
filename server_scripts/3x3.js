//Remove shapeless recipes
onEvent('recipes', event => {
  for(let i = 0; i < removecraftingid.length; i++)
  event.remove({id: removecraftingid[i], type: 'minecraft:crafting_shapeless'})
  for(let i = 0; i < removecraftingoredict.length; i++)
  event.remove({output: removecraftingoredict[i], type: 'minecraft:crafting_shapeless'})
  for(let i = 0; i < removecrafting.length; i++)
  event.remove({output: removecrafting[i], type: 'minecraft:crafting_shapeless'})
})



//Remove shaped recipes
onEvent('recipes', event => {
  for(let i = 0; i < removecraftingidsd.length; i++)
  event.remove({id: removecraftingidsd[i], type: 'minecraft:crafting_shaped'})
  for(let i = 0; i < removecraftingoredictsd.length; i++)
  event.remove({output: removecraftingoredictsd[i], type: 'minecraft:crafting_shaped'})
  for(let i = 0; i < removecraftingsd.length; i++)
  event.remove({output: removecraftingsd[i], type: 'minecraft:crafting_shaped'})
})



//Remove all recipes of bookshelves
onEvent('recipes', event => {
  for(let i = 0; i < bookshelves.length; i++)
  event.remove({id: bookshelves[i], type: 'minecraft:crafting_shaped'})
})



//remove all compacting recipes


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
  for(let i = 0; i < nineblock.length; i++)
  event.shaped(plates[i],
    ['H','I','I'], {
    H: Item.of('immersiveengineering:hammer').ignoreNBT(),
    I: platemts[i]
  }).damageIngredient(1).keepIngredient('immersiveengineering:hammer')
})


//Create
onEvent('recipes', event => {
//Shaft
  event.shaped(
    Item.of('create:shaft', 3),
    [' S ',' A ',], {
    S: Item.of(saws[1]).ignoreNBT(),
    A: 'create:andesite_alloy'
  }).damageIngredient(2).keepIngredient(saws[1]),
  event.shaped(
    Item.of('create:shaft', 3),
    [' S ',' A ',], {
    S: Item.of(saws[2]).ignoreNBT(),
    A: 'create:andesite_alloy'
  }).damageIngredient(2).keepIngredient(saws[2]),
//Wooden Gear
  event.shaped('appliedenergistics2:wooden_gear',
  ['BSB','S S','BSB'], {
    B: '#minecraft:wooden_buttons',
    S: '#forge:rods/wooden'
  }),
//Cogwheel
  event.shaped('create:cogwheel',
  [' G ',' S '], {
    G: 'appliedenergistics2:wooden_gear',
    S: 'create:shaft'
  })
//Mechanical Press
})
