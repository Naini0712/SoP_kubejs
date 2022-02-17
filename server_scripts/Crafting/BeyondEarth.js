onEvent('recipes', event => {
    //Shadow Steel Machine Hull
    event.shaped('kubejs:hull_shadow_steel',
    ['PNP','ICO','RNR'], {
      C: 'create:shadow_steel_casing',
      R: 'immersiveengineering:wirecoil_steel',
      P: 'pneumaticcraft:printed_circuit_board',
      I: 'pneumaticcraft:assembly_io_unit_import',
      O: 'pneumaticcraft:assembly_io_unit_export',
      N: '#forge:plates/netherite',
    })

    //Solar Panel
    event.shaped('boss_tools:solar_panel',
    ['GGG','SCS','RIR'], {
      G: '#forge:glass',
      S: '#forge:plates/steel',
      C: 'create:shadow_steel_casing',
      R: 'immersiveengineering:wirecoil_steel',
      I: 'kubejs:red_ingot'
    })

    //Coal Generator
    event.shaped('boss_tools:coal_generator',
    [' T ','SCS','RIR'], {
      T: 'pneumaticcraft:turbine_rotor',
      S: '#forge:plates/iron',
      C: 'create:shadow_steel_casing',
      R: 'immersiveengineering:wirecoil_steel',
      I: 'kubejs:red_ingot'
    })

    //Blast Furnace
    event.shaped('boss_tools:blast_furnace',
    ['OBO','BCB','OBO'], {
      B: 'immersiveengineering:blastbrick_reinforced',
      O: 'immersiveengineering:coil_lv',
      C: 'kubejs:hull_shadow_steel',
    })
    
    //Compressor
    event.shaped('boss_tools:compressor',
    ['OIO','ACA','OBO'], {
      O: '#forge:plates/steel',
      C: 'kubejs:hull_shadow_steel',
      A: 'pneumaticcraft:advanced_pressure_tube',
      I: 'pneumaticcraft:compressed_iron_block',
      B: 'kubejs:red_ingot'
    })
    
    //Fuel Refinery
    event.shaped('boss_tools:fuel_refinery',
    ['OIO','ACA','OBO'], {
      O: '#forge:plates/steel',
      C: 'kubejs:hull_shadow_steel',
      A: 'pneumaticcraft:small_tank',
      I: 'pneumaticcraft:advanced_pressure_tube',
      B: 'immersiveengineering:furnace_heater'
    })

    //Oxygen Loader
    event.shaped('boss_tools:oxygen_loader',
    ['OIO','ACA','OBO'], {
      O: '#forge:plates/steel',
      C: 'kubejs:hull_shadow_steel',
      A: 'pneumaticcraft:small_tank',
      I: 'pneumaticcraft:advanced_pressure_tube',
      B: 'kubejs:red_ingot'
    })

    //Oxygen Bubble Distributor //After NucleaCraft Motor Added
    //Rocket Nose Cone
    event.shaped('boss_tools:rocket_nose_cone',
    [' T ',' P ','PCP'], {
      T: 'minecraft:redstone_torch',
      C: 'boss_tools:compressed_steel',
      P: 'kubejs:plate_compressed_iron',
    })

    //Rocket Fin
    event.shaped('boss_tools:rocket_fin',
    [' P ','IPI','OPO'], {
      O: 'boss_tools:compressed_steel',
      P: '#forge:plates/steel',
      I: '#forge:plates/iron',
    })

    //Iron Tank
    event.shaped('boss_tools:iron_tank',
    ['ISI','STS','ISI'], {
      T: 'pneumaticcraft:small_tank',
      S: 'boss_tools:compressed_steel',
      I: 'jaopca:boss_tools_compresseds.iron',
    })

    //Golden Tank
    event.shaped('boss_tools:golden_tank',
    ['ISI','STS','ISI'], {
      T: 'pneumaticcraft:small_tank',
      S: 'boss_tools:compressed_steel',
      I: 'boss_tools:compressed_desh',
    })

    //Diamond Tank
    event.shaped('boss_tools:diamond_tank',
    ['ISI','STS','ISI'], {
      T: 'pneumaticcraft:small_tank',
      S: 'boss_tools:compressed_steel',
      I: 'boss_tools:compressed_silicon',
    })

    //Iron Engine //After NuclearCraft Motor Added

    //Golden Engine //After NuclearCraft Motor Added

    //Diamond Engine //After NuclearCraft Motor Added

    //Fuel Loader
    event.shaped('boss_tools_giselle_addon:fuel_loader',
    ['OIO','ACA','OTO'], {
      O: '#forge:plates/steel',
      A: 'immersiveengineering:fluid_pipe',
      I: 'pneumaticcraft:advanced_pressure_tube',
      T: 'pneumaticcraft:small_tank',
      C: 'kubejs:hull_shadow_steel'
    })

    //Electric Blast Furnace
    event.shaped('boss_tools_giselle_addon:electric_blast_furnace',
    ['OIO','ACA','OBO'], {
      O: '#forge:plates/steel',
      C: 'boss_tools:blast_furnace',
      A: 'immersiveengineering:fluid_pipe',
      B: 'immersiveengineering:furnace_heater',
      I: 'pneumaticcraft:advanced_pressure_tube',
    })

    //Advanced Compressor
    event.shapeless('boss_tools_giselle_addon:advanced_compressor',
    ['pneumaticcraft:advanced_pcb','boss_tools:compressor']
    )
    
    //Gravity Normalizer
    event.shaped('boss_tools_giselle_addon:gravity_normalizer',
    ['SBS','ACA','SRS'], {
      S: 'boss_tools:compressed_steel',
      C: 'create:shadow_steel_casing',
      A: '#forge:plates/iron',
      B: 'boss_tools:space_boots',
      R: 'kubejs:red_ingot'
    })
})