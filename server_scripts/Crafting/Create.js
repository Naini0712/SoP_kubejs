onEvent('recipes', event => {
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'create:andesite_casing', 'kubejs:hull_andesite')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'create:brass_casing', 'kubejs:hull_brass')
    //Shaft
      event.shaped(
        Item.of('create:shaft', 3),
        [' S ',' A ',], {
        S: Item.of(saws[1]).ignoreNBT(),
        A: 'create:andesite_alloy'
      }).damageIngredient(2).keepIngredient(saws[1]),
      event.shaped(
        Item.of('create:shaft', 3),
        [' S ',' A ',], {
        S: Item.of(saws[2]).ignoreNBT(),
        A: 'create:andesite_alloy'
      }).damageIngredient(2).keepIngredient(saws[2]),
    //Wooden Gear
      event.shaped('appliedenergistics2:wooden_gear',
      ['BSB','S S','BSB'], {
        B: '#minecraft:wooden_buttons',
        S: '#forge:rods/wooden'
      }),
    //Cogwheel
      event.shaped('create:cogwheel',
      [' G ',' S '], {
        G: 'appliedenergistics2:wooden_gear',
        S: 'create:shaft'
      })
    //Andesite Casing
      event.shaped('create:andesite_casing',
      ['PPP','PWP','PPP'], {
        P: 'kubejs:plate_andesite_alloy',
        W: 'appliedenergistics2:certus_quartz_wrench'
      }).keepIngredient('appliedenergistics2:certus_quartz_wrench'),
      event.shaped('create:andesite_casing',
      ['PPP','PWP','PPP'], {
        P: 'kubejs:plate_andesite_alloy',
        W: 'appliedenergistics2:nether_quartz_wrench'
      }).keepIngredient('appliedenergistics2:nether_quartz_wrench')
    //Andesite Machine Hull
      event.shaped('kubejs:hull_andesite',
      ['ZSZ','PCP'], {
        C: 'create:andesite_casing',
        Z: 'kubejs:plate_zinc',
        S: 'create:shaft',
        P: '#minecraft:planks'
      })
    //Brass Casing
      event.shaped('create:brass_casing',
      ['PPP','PWP','PPP'], {
        P: '#forge:plates/brass',
        W: 'appliedenergistics2:certus_quartz_wrench'
      }).keepIngredient('appliedenergistics2:certus_quartz_wrench'),
      event.shaped('create:brass_casing',
      ['PPP','PWP','PPP'], {
        P: '#forge:plates/brass',
        W: 'appliedenergistics2:nether_quartz_wrench'
      }).keepIngredient('appliedenergistics2:nether_quartz_wrench')
    //Andesite Machine Hull
      event.shaped('kubejs:hull_brass',
      ['ZSZ','PCP'], {
        C: 'create:brass_casing',
        Z: 'kubejs:plate_zinc',
        S: 'create:shaft',
        P: '#minecraft:planks'
      })
    //Mechanical Press
    event.shaped('create:mechanical_press',
      [' C ','WAW',' Z '], {
        C: 'create:andesite_alloy',
        W: 'create:cogwheel',
        A: 'kubejs:hull_andesite',
        Z: '#forge:storage_blocks/zinc'
      })
    //Propeller
    event.shaped('create:propeller',
      [' P ','PAP',' P '], {
        P: 'kubejs:plate_zinc',
        A: 'create:andesite_alloy'
      })
    //Sail Frame
    event.shaped('create:sail_frame',
      ['BSB','SAS','BSB'], {
        B: '#minecraft:wooden_buttons',
        S: '#forge:rods/wooden',
        A: 'create:andesite_alloy'
      })
    //Basin
    event.shaped('create:basin',
      ['Z Z','ZZZ'], {
        Z: 'kubejs:plate_zinc'
      })
    //Empty Blaze Burner
    event.shaped('create:empty_blaze_burner',
      ['B B','BPB','BTB'], {
        B: 'minecraft:iron_bars',
        T: 'minecraft:iron_trapdoor',
        P: '#forge:plates/iron'
      })
    //Depot
    event.shaped('create:depot',
      ['AC'], {
        A: 'kubejs:plate_andesite_alloy',
        C: 'create:andesite_casing'
      })
    //Chute
    event.shaped('create:chute',
      ['AA','II'], {
        A: 'kubejs:plate_andesite_alloy',
        I: '#forge:plates/iron'
      })
})