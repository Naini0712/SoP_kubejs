//Add recipes of nugget to ingot
onEvent('recipes', event => {
    for(let i = 0; i < ingot.length; i++)
    event.recipes.createCompacting(ingot[i], [Item.of(nuggets[i], 9)]).heated()
})



//Add recipes of ingot to block
onEvent('recipes', event => {
    for(let i = 0; i < block.length; i++)
    event.recipes.createCompacting(block[i], [Item.of(materialtoblock[i], 9)]).heated()
    for(let i = 0; i < block8.length; i++)
    event.recipes.createCompacting(block8[i], [Item.of(materialtoblock8[i], 8)]).heated()
    for(let i = 0; i < block4.length; i++)
    event.recipes.createCompacting(block4[i], [Item.of(materialtoblock4[i], 4)]).heated()
})



//Sheets
onEvent('recipes', event => {
event.recipes.createSequencedAssembly('kubejs:sheet_aluminum', '#forge:plates/aluminum', [
    event.recipes.createPressing('kubejs:sheet_aluminum_icp', 'kubejs:sheet_aluminum_icp'),
    event.recipes.createPressing('kubejs:sheet_aluminum_icp', 'kubejs:sheet_aluminum_icp'),
    event.recipes.createPressing('kubejs:sheet_aluminum_icp', 'kubejs:sheet_aluminum_icp'),
    event.recipes.createPressing('kubejs:sheet_aluminum_icp', 'kubejs:sheet_aluminum_icp'),
    event.recipes.createPressing('kubejs:sheet_aluminum_icp', 'kubejs:sheet_aluminum_icp'),
    event.recipes.createCutting('kubejs:sheet_aluminum_icp', 'kubejs:sheet_aluminum_icp')
  ]).transitionalItem('kubejs:sheet_aluminum_icp').loops(1)
})



//Plate
onEvent('recipes', event => {
    for(let i = 0; i < kubeplates.length; i++)
    event.recipes.createPressing(kubeplates[i], kubeplatemts[i])
})