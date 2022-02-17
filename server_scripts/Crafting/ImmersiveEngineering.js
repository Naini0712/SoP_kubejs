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
      C: 'kubejs:hull_invar',
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
      H: 'immersiveengineering:capacitor_lv',
      C: 'immersiveengineering:coil_mv',
      P: '#forge:treated_wood',
      I: 'kubejs:block_red'
    }),
    //HV Capacitor
    event.shaped('immersiveengineering:capacitor_hv',
    ['RRR','CHC','PIP'], {
      R: '#forge:plates/steel',
      H: 'immersiveengineering:capacitor_mv',
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
})