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
//Andesite Casing
  event.shaped('create:andesite_casing',
  ['PPP','PWP','PPP'], {
    P: 'kubejs:plate_andesite_alloy',
    W: 'appliedenergistics2:certus_quartz_wrench'
  }).keepIngredient('appliedenergistics2:certus_quartz_wrench'),
  event.shaped('create:andesite_casing',
  ['PPP','PWP','PPP'], {
    P: 'kubejs:plate_andesite_alloy',
    W: 'appliedenergistics2:nether_quartz_wrench'
  }).keepIngredient('appliedenergistics2:nether_quartz_wrench')
//Andesite Machine Hull
  event.shaped('kubejs:hull_andesite',
  ['ZSZ','PCP'], {
    C: 'create:andesite_casing',
    Z: 'kubejs:plate_zinc',
    S: 'create:shaft',
    P: '#minecraft:planks'
  })
//Brass Casing
  event.shaped('create:brass_casing',
  ['PPP','PWP','PPP'], {
    P: '#forge:plates/brass',
    W: 'appliedenergistics2:certus_quartz_wrench'
  }).keepIngredient('appliedenergistics2:certus_quartz_wrench'),
  event.shaped('create:brass_casing',
  ['PPP','PWP','PPP'], {
    P: '#forge:plates/brass',
    W: 'appliedenergistics2:nether_quartz_wrench'
  }).keepIngredient('appliedenergistics2:nether_quartz_wrench')
//Andesite Machine Hull
  event.shaped('kubejs:hull_brass',
  ['ZSZ','PCP'], {
    C: 'create:brass_casing',
    Z: 'kubejs:plate_zinc',
    S: 'create:shaft',
    P: '#minecraft:planks'
  })
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'create:andesite_casing', 'kubejs:hull_andesite')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'create:brass_casing', 'kubejs:hull_brass')
//Mechanical Press
event.shaped('kubejs:hull_brass',
  [' S ','WAW',' Z '], {
    C: 'create:brass_casing',
    W: 'create:cogwheel',
    A: 'kubejs:hull_andesite',
    Z: '#forge:storage_blocks/zinc'
  })
//Propeller
event.shaped('create:propeller',
  [' P ','PAP',' P '], {
    P: 'kubejs:plate_zinc',
    A: 'create:andesite_alloy'
  })
//Sail Frame
event.shaped('create:sail_frame',
  ['BSB','SAS','BSB'], {
    B: '#minecraft:wooden_buttons',
    S: '#forge:rods/wooden',
    A: 'create:andesite_alloy'
  })
//Basin
event.shaped('create:basin',
  ['Z Z','ZZZ'], {
    Z: 'kubejs:plate_zinc'
  })
//Empty Blaze Burner
event.shaped('create:empty_blaze_burner',
  ['B B','BPB','BTB'], {
    B: 'minecraft:iron_bars',
    T: 'minecraft:iron_trapdoor',
    P: '#forge:plates/iron'
  })
//Depot
event.shaped('create:depot',
  ['AC'], {
    A: 'kubejs:plate_andesite_alloy',
    C: 'create:andesite_casing'
  })
//Chute
event.shaped('create:chute',
  ['AA','II'], {
    A: 'kubejs:plate_andesite_alloy',
    I: '#forge:plates/iron'
  })
})



//ImmersiveEngineering
onEvent('recipes', event => {
  //hammer
  event.shaped('immersiveengineering:hammer',
  [' ZS',' WZ','W  '], {
    Z: '#forge:ingots/zinc',
    S: '#forge:string',
    W: '#forge:rods/wooden'
  })
})

