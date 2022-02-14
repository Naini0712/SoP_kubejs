// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

let hideoredict = [
	//plates
	'#forge:plates/iron',
	'#forge:plates/gold',
	'#forge:plates/copper',
	'#forge:plates/lead',
	'#forge:plates/silver',
	'#forge:plates/nickel',
	'#forge:plates/electrum',
	'#forge:plates/constantan',
	//nuggets
	'#forge:nuggets/copper',
	'#forge:nuggets/silver',
	'#forge:nuggets/lead',
	'#forge:nuggets/nickel',
	'#forge:nuggets/uranium',
	'#forge:nuggets/constatan',
	'#forge:nuggets/electrum',
	'#forge:nuggets/steel',
	'#forge:nuggets/tin',
	'#forge:nuggets/bronze',
	//blocks
	'#forge:storage_blocks/copper',
	'#forge:storage_blocks/silver',
	'#forge:storage_blocks/lead',
	'#forge:storage_blocks/nickel',
	'#forge:storage_blocks/uranium',
	'#forge:storage_blocks/constantan',
	'#forge:storage_blocks/electrum',
	'#forge:storage_blocks/steel',
	'#forge:storage_blocks/tin',
	'#forge:storage_blocks/bronze',
	//ingots
	'#forge:ingots/copper',
	'#forge:ingots/silver',
	'#forge:ingots/lead',
	'#forge:ingots/nickel',
	'#forge:ingots/uranium',
	'#forge:ingots/constatan',
	'#forge:ingots/electrum',
	'#forge:ingots/steel',
	'#forge:ingots/tin',
	'#forge:ingots/bronze',
]

let showitems = [
	//plates
	'immersiveengineering:plate_iron',
	'immersiveengineering:plate_gold',
	'create:copper_sheet',
	'immersiveengineering:plate_lead',
	'immersiveengineering:plate_silver',
	'immersiveengineering:plate_nickel',
	'immersiveengineering:plate_electrum',
	'immersiveengineering:plate_constantan',
	//nuggets
	'tconstruct:copper_nugget',
	'immersiveengineering:nugget_silver',
	'immersiveengineering:nugget_lead',
	'immersiveengineering:nugget_nickel',
	'immersiveengineering:nugget_uranium',
	'immersiveengineering:nugget_constantan',
	'immersiveengineering:nugget_electrum',
	'immersiveengineering:nugget_steel',
	'mekanism:nugget_tin',
	'mekanism:nugget_bronze',
	//blocks
	'tconstruct:copper_block',
	'immersiveengineering:storage_silver',
	'immersiveengineering:storage_lead',
	'immersiveengineering:storage_nickel',
	'immersiveengineering:storage_uranium',
	'immersiveengineering:storage_constantan',
	'immersiveengineering:storage_electrum',
	'immersiveengineering:storage_steel',
	'mekanism:block_tin',
	'mekanism:block_bronze',
	//ingots
	'tconstruct:copper_ingot', 
	'immersiveengineering:ingot_silver',
	'immersiveengineering:ingot_lead',
	'immersiveengineering:ingot_nickel',
	'immersiveengineering:ingot_uranium',
	'immersiveengineering:ingot_constantan',
	'immersiveengineering:ingot_electrum',
	'immersiveengineering:ingot_steel',
	'mekanism:ingot_tin',
	'mekanism:ingot_bronze',
]

onEvent('jei.hide.items', event => {
	for(let i = 0; i < hideoredict.length; i++)
    event.hide(hideoredict[i])
  })

onEvent('jei.add.items', event => {
	for(let i = 0; i < showitems.length; i++)
	event.add(showitems[i])
})