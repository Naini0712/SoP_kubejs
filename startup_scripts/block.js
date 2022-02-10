//Witchstone
onEvent('block.registry', event => {
  event.create('witchstone')
  	   .material('rock')
       .hardness(0.5)
       .displayName('Witchstone')
})



//Andesite Machine Hull
onEvent('block.registry', event => {
  event.create('hull_andesite')
  	   .material('iron')
       .hardness(0.5)
       .displayName('Andesite Machine Hull')
})



//Brass Machine Hull
onEvent('block.registry', event => {
  event.create('hull_brass')
  	   .material('iron')
       .hardness(0.5)
       .displayName('Brass Machine Hull')
})



//Compressed Iron Machine Casing
onEvent('block.registry', event => {
  event.create('casing_ciron')
  	   .material('iron')
       .hardness(0.5)
       .displayName('Compressed Iron Machine Casing')
})



//Compressed Iron Machine Hull
onEvent('block.registry', event => {
  event.create('hull_ciron')
  	   .material('iron')
       .hardness(0.5)
       .displayName('Compressed Iron Machine Hull')
})