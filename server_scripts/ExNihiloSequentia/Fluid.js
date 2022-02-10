onEvent('recipes', event => {
    event.custom({
        "type": "exnihilosequentia:fluid_item",
        "fluid": {
            "fluid": "exnihilosequentia:witchwater"
          },
          "input": {
            "item": "minecraft:stone"
          },
          "result": {
            "item": "kubejs:witchstone"
          }
        })
})