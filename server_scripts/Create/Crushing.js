//Add cutting recipe blocks to ingots
onEvent('recipes', event => {
    for(let i = 0; i < blockscr.length; i++)
    event.recipes.createCrushing(
        Item.of(materialsbticr[i], 9), [blockscr[i]])
  })