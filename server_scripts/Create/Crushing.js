//Add cutting recipe blocks to ingots
onEvent('recipes', event => {
    for(let i = 0; i < blockscr.length; i++)
    event.recipes.createCrushing(
        Item.of(materialsbticr[i], 9), [blockscr[i]])
  })

//Add Witchstone Crushing Recipe
onEvent('recipes', event => {
    event.custom({
        type: 'create:crushing',
        ingredients: [
          Ingredient.of('kubejs:witchstone').toJson()
        ],
        results: [
          Item.of('minecraft:coal').withChance(0.125).toResultJson(),
        Item.of('minecraft:diamond').withChance(0.008).toResultJson(),
        Item.of('minecraft:emerald').withChance(0.008).toResultJson(),
        Item.of('minecraft:lapis_lazuli').withChance(0.05).toResultJson(),
        Item.of('exnihilosequentia:piece_aluminum').withChance(0.05).toResultJson(),
        Item.of('exnihilosequentia:piece_copper').withChance(0.05).toResultJson(),
        Item.of('exnihilosequentia:piece_lead').withChance(0.05).toResultJson(),
        Item.of('exnihilosequentia:piece_nickel').withChance(0.05).toResultJson(),
        Item.of('exnihilosequentia:piece_platinum').withChance(0.05).toResultJson(),
        Item.of('exnihilosequentia:piece_silver').withChance(0.05).toResultJson(),
        Item.of('exnihilosequentia:piece_tin').withChance(0.05).toResultJson(),
        Item.of('exnihilosequentia:piece_zinc').withChance(0.05).toResultJson(),
        ],
        processingTime: 4000
      })
  })
