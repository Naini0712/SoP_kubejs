//Large Cogwheel
onEvent('recipes', event => {
    event.recipes.createMechanicalCrafting('create:large_cogwheel', [
        ' BBB ',
        'BWWWB',
        'BWSWB',
        'BWWWB',
        ' BBB '
    ], {
        B: '#minecraft:wooden_buttons',
        W: '#minecraft:wooden_slabs',
        S: 'create:shaft'
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
//NASA Workbench
event.recipes.createMechanicalCrafting('boss_tools:nasa_workbench', [
    ' LBD ',
    'SPNPS',
    ' ICO ',
    'SRNRS',
  ], {
    C: 'create:shadow_steel_casing',
    R: 'immersiveengineering:wirecoil_steel',
    P: 'pneumaticcraft:printed_circuit_board',
    I: 'pneumaticcraft:assembly_io_unit_import',
    O: 'pneumaticcraft:assembly_io_unit_export',
    N: '#forge:plates/netherite',
    L: 'pneumaticcraft:assembly_laser',
    D: 'pneumaticcraft:assembly_drill',
    S: 'boss_tools:compressed_steel',
    B: 'pneumaticcraft:assembly_platform'
    })
})