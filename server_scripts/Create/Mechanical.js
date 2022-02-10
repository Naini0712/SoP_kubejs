//Large Cogwheel
onEvent('recipes', event => {
    event.recipes.createMechanicalCrafting('create:large_cogwheel', 
    [' BBB ','BWWWB','BWSWB','BWWWB',' BBB '], {
        B: '#minecraft:wooden_buttons',
        W: '#minecraft:wooden_slabs',
        S: 'create:shaft'
    })
})