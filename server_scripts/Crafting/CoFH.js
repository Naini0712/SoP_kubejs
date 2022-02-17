onEvent('recipes', event => {
    //Iron Machine Casing(Machine Frame)
    event.shaped(
        Item.of('thermal:machine_frame'),
            ['SDS','ICO','LDL'], {
                S: 'kubejs:precision_mechanism_elite',
                C: 'kubejs:casing_iron',
                I: 'pneumaticcraft:assembly_io_unit_import',
                O: 'pneumaticcraft:assembly_io_unit_export',
                D: 'boss_tools:desh_plate',
                L: 'immersiveengineering:wirecoil_structure_steel'
            })
    //Redstone Furnace
    event.shaped(
        Item.of('thermal:machine_furnace'),
            ['SDS','ICO','LDL'], {
                S: 'kubejs:precision_mechanism_elite',
                C: 'kubejs:casing_iron',
                I: 'pneumaticcraft:assembly_io_unit_import',
                O: 'pneumaticcraft:assembly_io_unit_export',
                D: 'boss_tools:desh_plate',
                L: 'immersiveengineering:wirecoil_structure_steel'
            })
})