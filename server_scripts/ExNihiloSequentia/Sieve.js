onEvent('recipes', event => {
    for(let i = 0; i < removesieve.length; i++)
    event.remove({output: removesieve[i], type: 'exnihilosequentia:sieve'})
})