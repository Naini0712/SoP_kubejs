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