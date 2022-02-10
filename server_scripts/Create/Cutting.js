//Add cutting recipe slabs and stairs
onEvent('recipes', event => {
    for(let i = 0; i < cuttingslab.length; i++)
    event.recipes.createCutting(
        Item.of(cuttingslab[i], 2), [cuttingslabmaterial[i]])
    for(let i = 0; i < cuttingstairs.length; i++)
    event.recipes.createCutting(
        Item.of(cuttingstairs[i], 1), [cuttingstairsmaterial[i]])
})



//Add cutting recipe blocks to ingots
onEvent('recipes', event => {
  for(let i = 0; i < blockscu.length; i++)
  event.recipes.createCutting(
      Item.of(materialsbticu[i], 9), [blockscu[i]])
})