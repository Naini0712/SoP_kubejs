onEvent('recipes', event => {
//Printed Circuit Board
event.recipes.createSequencedAssembly('pneumaticcraft:printed_circuit_board', 'pneumaticcraft:unassembled_pcb', [
    event.recipes.createDeploying('kubejs:pcb_icp', ['kubejs:pcb_icp', 'pneumaticcraft:capacitor']),
    event.recipes.createDeploying('kubejs:pcb_icp', ['kubejs:pcb_icp', 'pneumaticcraft:transistor']),
    event.recipes.createDeploying('kubejs:pcb_icp', ['kubejs:pcb_icp', 'create:electron_tube']),
  ]).transitionalItem('kubejs:pcb_icp').loops(2)



//Advanced Precision Mechanism
event.recipes.createSequencedAssembly('kubejs:precision_mechanism_advanced', '#forge:plates/steel', [
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['kubejs:precision_mechanism_advanced_icp', 'create:cogwheel']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['kubejs:precision_mechanism_advanced_icp', 'create:large_cogwheel']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['kubejs:precision_mechanism_advanced_icp', 'pneumaticcraft:compressed_iron_gear']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['kubejs:precision_mechanism_advanced_icp', 'kubejs:red_ingot']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['kubejs:precision_mechanism_advanced_icp', 'pneumaticcraft:plastic']),
    event.recipes.createDeploying('kubejs:precision_mechanism_advanced_icp', ['kubejs:precision_mechanism_advanced_icp', 'thermal:enderium_nugget']),
  ]).transitionalItem('kubejs:precision_mechanism_advanced_icp').loops(9)


/*
//Advanced Printed Circuit Board
event.recipes.createSequencedAssembly('pneumaticcraft:advanced_pcb', 'pneumaticcraft:printed_circuit_board', [
  event.recipes.createDeploying('kubejs:advpcb_icp', ['kubejs:advpcb_icp', 'boss_tools:desh_plate']),
  event.recipes.createDeploying('kubejs:advpcb_icp', ['kubejs:advpcb_icp', 'pneumaticcraft:capacitor']),
  event.recipes.createDeploying('kubejs:advpcb_icp', ['kubejs:advpcb_icp', 'pneumaticcraft:transistor']),
  event.recipes.createDeploying('kubejs:advpcb_icp', ['kubejs:advpcb_icp', 'create:electron_tube']),
]).transitionalItem('kubejs:advpcb_icp').loops(1)
*/
})
