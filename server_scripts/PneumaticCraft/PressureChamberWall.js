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
})
