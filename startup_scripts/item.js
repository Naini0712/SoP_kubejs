onEvent('item.registry', event => {
    //Aluminum Sheet
    event.create('sheet_aluminum').displayName('Aluminum Sheet'),
    //Isotopes of Einsteinium
    event.create('einsteinium_252').displayName('Einsteinium-252'),
    event.create('einsteinium_254').displayName('Einsteinium-254'),
    event.create('einsteinium_255').displayName('Einsteinium-255'),
    //An Isotope of Fermium
    event.create('fermium_257').displayName('Fermium-257'),
    //Tiny Clump of Isotopes of Einsteinium
    event.create('einsteinium_252_tc').displayName('Tiny Clump of Einsteinium-252'),
    event.create('einsteinium_254_tc').displayName('Tiny Clump of Einsteinium-254'),
    event.create('einsteinium_255_tc').displayName('Tiny Clump of Einsteinium-255'),
    //Tiny Clums of An Isotope of Fermium
    event.create('fermium_257_tc').displayName('Tiny Clump of Fermium-257'),
    //More Fuels for Fission Reactor
    event.create('fuel_einsteinium_252_l').displayName('LEEs-252 Fuel'),
    event.create('fuel_einsteinium_252_h').displayName('HEEs-252 Fuel'),
    event.create('fuel_einsteinium_254_l').displayName('LEEs-254 Fuel'),
    event.create('fuel_einsteinium_252_h').displayName('HEEs-254 Fuel'),
    //More Depleted Fuels for Fission Reactor
    event.create('fuel_einsteinium_252_l_d').displayName('Depleted LEEs-252 Fuel'),
    event.create('fuel_einsteinium_252_h_d').displayName('Depleted HEEs-252 Fuel'),
    event.create('fuel_einsteinium_254_l_d').displayName('Depleted LEEs-254 Fuel'),
    event.create('fuel_einsteinium_252_h_d').displayName('Depleted HEEs-254 Fuel')
    //Andesite Alloy Plate
    event.create('plate_andesite_alloy').displayName('Andesite Alloy Plate'),
    //Zinc Plate
    event.create('plate_zinc').displayName('Zinc Plate')
  })