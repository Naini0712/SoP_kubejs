onEvent('recipes', event => {
    event.custom(
        {
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/copper",
                "count": 3
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/redstone",
                "count": 4
              },
              {
                "tag": "forge:dusts/silver",
              }
            ],
            "pressure": 1.0,
            "results": [
              {
                "item": "thermal:signalum_dust",
                "count": 4
              }
            ]
          }
    ),
    event.custom(
        {
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/tin",
                "count": 3
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/glowstone",
                "count": 2
              },
              {
                "tag": "forge:dusts/silver",
              }
            ],
            "pressure": 1.0,
            "results": [
              {
                "item": "thermal:lumium_dust",
                "count": 4
              }
            ]
          }
    )
    event.custom(
        {
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/lead",
                "count": 3
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/ender_pearl",
                "count": 2
              },
              {
                "tag": "forge:dusts/diamond",
              }
            ],
            "pressure": 1.0,
            "results": [
              {
                "item": "thermal:enderium_dust",
                "count": 4
              }
            ]
          }
    ),
    event.custom(
        {
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/lead",
                "count": 3
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/ender_pearl",
                "count": 2
              },
              {
                "tag": "forge:dusts/diamond",
              }
            ],
            "pressure": 1.0,
            "results": [
              {
                "item": "thermal:enderium_dust",
                "count": 4
              }
            ]
          }
    )
    event.custom(
        {
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:dusts/lead",
                "count": 3
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "tag": "forge:ender_pearls",
                "count": 2
              },
              {
                "tag": "forge:dusts/diamond",
              }
            ],
            "pressure": 1.0,
            "results": [
              {
                "item": "thermal:enderium_dust",
                "count": 4
              }
            ]
          }
    )
    event.custom(
      {
          "type": "pneumaticcraft:pressure_chamber",
          "inputs": [
            {
              "item": "pneumaticcraft:plastic",
            },
            {
              "item": "immersiveengineering:logic_circuit",
            }
          ],
          "pressure": 1.5,
          "results": [
            {
              "item": 'pneumaticcraft:empty_pcb',
              "count": 1
            }
          ]
        }
    )
    event.custom(
      {
          "type": "pneumaticcraft:pressure_chamber",
          "inputs": [
            {
              "item": "pneumaticcraft:plastic",
            },
            {
              "type": "pneumaticcraft:stacked_item",
              "item": "minecraft:gold_nugget",
              "count": 2
            },
            {
              "item": "minecraft:paper",
            },
            {
              "type": "pneumaticcraft:stacked_item",
              "item": "kubejs:sheet_aluminum",
              "count": 2
            }
          ],
          "pressure": 1,
          "results": [
            {
              "item": 'pneumaticcraft:capacitor',
              "count": 1
            }
          ]
        }
    )
    event.custom(
      {
          "type": "pneumaticcraft:pressure_chamber",
          "inputs": [
            {
              "item": "pneumaticcraft:plastic",
            },
            {
              "type": "pneumaticcraft:stacked_item",
              "item": "minecraft:gold_nugget",
              "count": 3
            },
            {
              "type": "pneumaticcraft:stacked_item",
              "item": "appliedenergistics2:silicon",
              "count": 3
            }
          ],
          "pressure": 1,
          "results": [
            {
              "item": 'pneumaticcraft:transistor',
              "count": 1
            }
          ]
        }
    )
    event.custom(
      {
          "type": "pneumaticcraft:pressure_chamber",
          "inputs": [
            {
              "item": "pneumaticcraft:printed_circuit_board",
            },
            {
              "item": "kubejs:precision_mechanism_advanced",
            }
          ],
          "pressure": 4,
          "results": [
            {
              "item": 'kubejs:precision_mechanism_elite',
              "count": 1
            }
          ]
        }
    )
    event.custom(
      {
          "type": "pneumaticcraft:pressure_chamber",
          "inputs": [
            {
              "item": "minecraft:netherite_ingot",
            }
          ],
          "pressure": 4,
          "results": [
            {
              "item": 'kubejs:ingot_compressed_netherite',
              "count": 1
            }
          ]
        }
    )
    event.custom(
      {
          "type": "pneumaticcraft:pressure_chamber",
          "inputs": [
            {
              "item": "minecraft:netherite_block",
            }
          ],
          "pressure": 4,
          "results": [
            {
              "item": 'kubejs:block_compressed_netherite',
              "count": 1
            }
          ]
        }
    )
})
