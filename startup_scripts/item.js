onEvent('item.registry', event => {
    //Sheets
    event.create('sheet_aluminum').displayName('Aluminum Sheet'),
    event.create('sheet_aluminum_icp').type('create:sequenced_assembly').displayName('Incomplete Aluminum Sheet')
    //Isotopes of Einsteinium
    event.create('einsteinium_252').displayName('Einsteinium-252'),
    event.create('einsteinium_254').displayName('Einsteinium-254'),
    event.create('einsteinium_255').displayName('Einsteinium-255'),
    event.create('einsteinium_252_ox').displayName('Einsteinium-252 Oxide'),
    event.create('einsteinium_254_ox').displayName('Einsteinium-254 Oxide'),
    event.create('einsteinium_255_ox').displayName('Einsteinium-255 Oxide'),
    //An Isotope of Fermium
    event.create('fermium_257_ox').displayName('Fermium-257 Oxide'),
    //Tiny Clump of Isotopes of Einsteinium
    event.create('einsteinium_252_tc').displayName('Tiny Clump of Einsteinium-252'),
    event.create('einsteinium_254_tc').displayName('Tiny Clump of Einsteinium-254'),
    event.create('einsteinium_255_tc').displayName('Tiny Clump of Einsteinium-255'),
    event.create('einsteinium_252_tc_ox').displayName('Tiny Clump of Einsteinium-252 Oxide'),
    event.create('einsteinium_254_tc_ox').displayName('Tiny Clump of Einsteinium-254 Oxide'),
    event.create('einsteinium_255_tc_ox').displayName('Tiny Clump of Einsteinium-255 Oxide'),
    //Tiny Clums of An Isotope of Fermium
    event.create('fermium_257_tc_ox').displayName('Tiny Clump of Fermium-257 Oxide'),
    //More Fuels for Fission Reactor
    event.create('fuel_einsteinium_252_l').displayName('LEEs-252 Fuel'),
    event.create('fuel_einsteinium_252_h').displayName('HEEs-252 Fuel'),
    event.create('fuel_einsteinium_254_l').displayName('LEEs-254 Fuel'),
    event.create('fuel_einsteinium_252_h').displayName('HEEs-254 Fuel'),
    event.create('fuel_einsteinium_252_l_ox').displayName('LEEs-252 Fuel Oxide'),
    event.create('fuel_einsteinium_252_h_ox').displayName('HEEs-252 Fuel Oxide'),
    event.create('fuel_einsteinium_254_l_ox').displayName('LEEs-254 Fuel Oxide'),
    event.create('fuel_einsteinium_252_h_ox').displayName('HEEs-254 Fuel Oxide'),
    //More Depleted Fuels for Fission Reactor
    event.create('fuel_einsteinium_252_l_d').displayName('Depleted LEEs-252 Fuel'),
    event.create('fuel_einsteinium_252_h_d').displayName('Depleted HEEs-252 Fuel'),
    event.create('fuel_einsteinium_254_l_d').displayName('Depleted LEEs-254 Fuel'),
    event.create('fuel_einsteinium_252_h_d').displayName('Depleted HEEs-254 Fuel')
    event.create('fuel_einsteinium_252_l_d_ox').displayName('Depleted LEEs-252 Fuel Oxide'),
    event.create('fuel_einsteinium_252_h_d_ox').displayName('Depleted HEEs-252 Fuel Oxide'),
    event.create('fuel_einsteinium_254_l_d_ox').displayName('Depleted LEEs-254 Fuel Oxide'),
    event.create('fuel_einsteinium_252_h_d_ox').displayName('Depleted HEEs-254 Fue Oxide')
    //Plates
    event.create('plate_andesite_alloy').displayName('Andesite Alloy Plate'),
    event.create('plate_zinc').displayName('Zinc Plate'),
    event.create('plate_compressed_iron').displayName('Compressed Iron Plate'),
    event.create('plate_shadow_steel').displayName('Shadow Steel Plate'),
    //Advanced Precision Mechanism
    event.create('precision_mechanism_advanced_icp').type('create:sequenced_assembly').displayName('Incomplete Advanced Precision Mechanism')
    event.create('precision_mechanism_advanced').displayName('Advanced Precision Mechanism'),
    //Elite Precision Mechanism
    event.create('precision_mechanism_elite').displayName('Elite Precision Mechanism'),
    //Ultimate Precision Mechanism
    event.create('precision_mechanism_ultimate').displayName('Ultimate Precision Mechanism'),
    //Ludicrous Ingots
    event.create('red_ingot').displayName('Red Alloy Ingot'),
    event.create('blue_ingot').displayName('Blue Alloy Ingot')
    event.create('white_ingot').displayName('White Alloy Ingot')
    event.create('yellow_ingot').displayName('Yellow Alloy Ingot')
    event.create('black_ingot').displayName('Black Alloy Ingot')
    //PCB
    event.create('pcb_icp').type('create:sequenced_assembly').displayName('Incomplete PCB')
    //Compressed Netherite
    event.create('ingot_compressed_netherite').displayName('Compressed Netherite Ingot')
    event.create('block_compressed_netherite').displayName('Compressed Netherite block')
  }) 