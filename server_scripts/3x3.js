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


//Remove all types of recipes
onEvent('recipes', event => {
  for(let i = 0; i < removerecipeid.length; i++)
  event.remove({id: removerecipeid[i], type: 'minecraft:crafting_shaped'})
  for(let i = 0; i < removerecipeoredict.length; i++)
  event.remove({output: removerecipeoredict[i], type: 'minecraft:crafting_shaped'})
  for(let i = 0; i < removerecipe.length; i++)
  event.remove({output: removerecipe[i], type: 'minecraft:crafting_shaped'})
})



//Remove all recipes of bookshelves
onEvent('recipes', event => {
  for(let i = 0; i < bookshelves.length; i++)
  event.remove({id: bookshelves[i], type: 'minecraft:crafting_shaped'})
})



//Remove IO Unit
onEvent('recipes', event => {
  for(let i = 0; i < removemirror.length; i++)
  event.remove({output: removemirror[i], type: 'pneumaticcraft:crafting_shaped_no_mirror'})
})



//Remove RS Engineering
onEvent('recipes', event => {
  for(let i = 0; i < removeiecrafting.length; i++)
  event.remove({output: removeiecrafting[i], type: 'immersiveengineering:turn_and_copy'})
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
event.shaped('create:mechanical_press',
  [' C ','WAW',' Z '], {
    C: 'create:andesite_alloy',
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
//Advanced Precision Mechanism
event.recipes.createSequencedAssembly('kubejs:precision_mechanism_advanced', '#forge:plates/steel', [
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['create:incomplete_large_cogwheel', 'create:cogwheel']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['create:incomplete_large_cogwheel', 'create:large_cogwheel']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['create:incomplete_large_cogwheel', 'pneumaticcraft:compressed_iron_gear']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['create:incomplete_large_cogwheel', 'kubejs:red_ingot']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['create:incomplete_large_cogwheel', 'thermal:enderium_nugget']),
  ]).transitionalItem('kubejs:precision_mechanism_advanced_icp').loops(9)
})



//ImmersiveEngineering
onEvent('recipes', event => {
  //hammer
  event.shaped('immersiveengineering:hammer',
  [' ZS',' WZ','W  '], {
    Z: '#forge:ingots/zinc',
    S: '#forge:string',
    W: '#forge:rods/wooden'
  }),
  //Invar Machine Hull
  event.shaped('kubejs:hull_invar',
  ['PSP','SCS','RSR'], {
    C: 'kubejs:casing_invar',
    P: 'kubejs:precision_mechanism_advanced',
    R: 'immersiveengineering:wirecoil_copper',
    S: '#forge:plates/steel'
  }),
  //Redstone Engineering Block
  event.shaped('immersiveengineering:rs_engineering',
  ['RSR','SCS','RSR'], {
    C: 'kubejs:hull_ciron',
    R: 'immersiveengineering:wirecoil_copper',
    S: 'kubejs:red_ingot'
  }),
  //Heavy Engineering Block
  event.shaped('4x immersiveengineering:heavy_engineering',
  ['RSR','SCS','RSR'], {
    R: 'immersiveengineering:sheetmetal_steel',
    C: 'kubejs:hull_invar',
    S: 'immersiveengineering:component_steel'
  }),
  //Light Engineering Block
  event.shaped('4x immersiveengineering:light_engineering',
  ['RSR','SCS','RSR'], {
    R: 'immersiveengineering:sheetmetal_iron',
    C: 'kubejs:hull_invar',
    S: 'immersiveengineering:component_iron'
  }),
  //kinetic Dynamo
  event.shaped('immersiveengineering:dynamo',
  [' R ','CHC','PPP'], {
    R: 'immersiveengineering:coil_lv',
    H: 'kubejs:hull_invar',
    C: 'kubejs:red_ingot',
    P: '#forge:plates/iron'
  }),
  //LV Capacitor
  event.shaped('immersiveengineering:capacitor_lv',
  ['RRR','CHC','PIP'], {
    R: '#forge:plates/iron',
    H: 'kubejs:casing_invar',
    C: 'immersiveengineering:coil_lv',
    P: '#forge:treated_wood',
    I: 'kubejs:red_ingot'
  }),
  //MV Capacitor
  event.shaped('immersiveengineering:capacitor_mv',
  ['RRR','CHC','PIP'], {
    R: 'kubejs:plate_compressed_iron',
    H: 'kubejs:casing_invar',
    C: 'immersiveengineering:coil_mv',
    P: '#forge:treated_wood',
    I: 'kubejs:block_red'
  }),
  //HV Capacitor
  event.shaped('immersiveengineering:capacitor_hv',
  ['RRR','CHC','PIP'], {
    R: '#forge:plates/steel',
    H: 'kubejs:casing_invar',
    C: 'immersiveengineering:coil_hv',
    P: '#forge:treated_wood',
    I: 'kubejs:block_red'
  })
  //Thermoelectric Generator
  event.shaped('immersiveengineering:thermoelectric_generator',
  ['RRR','CHC','POP'], {
    R: '#forge:plates/steel',
    H: 'kubejs:hull_invar',
    C: '#forge:plates/constantan',
    P: 'kubejs:plate_compressed_iron',
    O: 'immersiveengineering:coil_hv'
  })
  //Garden Cloche
  event.recipes.createMechanicalCrafting('immersiveengineering:cloche', [
    'GGVGG',
    'G   G',
    'G   G',
    'G   G',
    'G   G',
    'TTTTT',
    'TRCRT',
    'TRPRT',
    'TTTTT'
  ], {
    V: 'immersiveengineering:electron_tube',
    G: '#forge:glass',
    T: '#forge:treated_wood',
    C: 'immersiveengineering:coil_hv',
    P: 'pneumaticcraft:printed_circuit_board',
    R: 'kubejs:red_ingot'
  })
})

//PneumaticCraft
onEvent('recipes', event => {
  //Pressure Chamber Wall
  event.shaped('8x pneumaticcraft:pressure_chamber_wall',
  ['NRN','RCR','NRN'], {
    N: '#forge:plates/netherite',
    R: 'pneumaticcraft:reinforced_bricks',
    C: 'kubejs:casing_ciron'
  }),
  //Pressure Chamber Interface
  event.shaped('pneumaticcraft:pressure_chamber_interface',
  ['NHN','RCR','NHN'], {
    H: 'minecraft:hopper',
    N: '#forge:plates/netherite',
    C: 'kubejs:hull_ciron',
    R: 'pneumaticcraft:reinforced_bricks',
  }),
  //Compressed Iron Machine Hull
  event.shaped('kubejs:hull_ciron',
  ['PSP','SCS','RSR'], {
    C: 'kubejs:casing_ciron',
    R: 'immersiveengineering:wirecoil_copper',
    P: 'create:precision_mechanism',
    S: '#forge:plates/invar'
  }),
  //Refinery Controller
  event.shaped('pneumaticcraft:refinery',
  ['SSS','THG','SSS'], {
    H: 'kubejs:hull_ciron',
    T: 'pneumaticcraft:small_tank',
    S: 'pneumaticcraft:reinforced_stone_slab',
    G: 'pneumaticcraft:compressed_iron_gear'
  }),
  //Thermopneumatic Processing Unit
  event.shaped('pneumaticcraft:thermopneumatic_processing_plant',
  ['ASA','PLP','TST'], {
    A: 'pneumaticcraft:small_tank',
    T: 'pneumaticcraft:pressure_tube',
    S: 'pneumaticcraft:reinforced_stone_slab',
    P: 'create:precision_mechanism',
    L: 'kubejs:plate_compressed_iron'
  }),
  //Refinery Output
  event.shaped('pneumaticcraft:refinery_output',
  ['SSS','GLG','SSS'], {
    G: 'mekanism:structural_glass',
    S: 'pneumaticcraft:reinforced_stone_slab',
    L: 'minecraft:iron_bars'
  }),
  //Assembly IO Unit(import)
  event.shaped('pneumaticcraft:assembly_io_unit_import',
  ['HCC',' PC','SBS'], {
    H: 'minecraft:hopper',
    C: 'pneumaticcraft:pneumatic_cylinder',
    P: 'kubejs:precision_mechanism_advanced',
    S: 'kubejs:plate_compressed_iron',
    B: 'pneumaticcraft:printed_circuit_board'
  }),
  //Assembly IO Unit(export)
  event.shaped('pneumaticcraft:assembly_io_unit_export',
  ['HCC','CP ','SBS'], {
    H: 'minecraft:hopper',
    C: 'pneumaticcraft:pneumatic_cylinder',
    P: 'kubejs:precision_mechanism_advanced',
    S: 'kubejs:plate_compressed_iron',
    B: 'pneumaticcraft:printed_circuit_board'
  }),
  //Assembly Drill
  event.shaped('pneumaticcraft:assembly_drill',
  ['HCC',' PC','SBS'], {
    H: 'minecraft:diamond',
    C: 'pneumaticcraft:pneumatic_cylinder',
    P: 'kubejs:precision_mechanism_advanced',
    S: 'kubejs:plate_compressed_iron',
    B: 'pneumaticcraft:printed_circuit_board'
  }),
  //Assembly Laser
  event.shaped('pneumaticcraft:assembly_laser',
  ['HCC',' PC','SBS'], {
    H: '#forge:glass/red',
    C: 'pneumaticcraft:pneumatic_cylinder',
    P: 'kubejs:precision_mechanism_advanced',
    S: 'kubejs:plate_compressed_iron',
    B: 'pneumaticcraft:printed_circuit_board'
  })
})