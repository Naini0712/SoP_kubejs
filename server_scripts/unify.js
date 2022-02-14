onEvent('recipes', event => {
    for(let i = 0; i < unify.length; i++)
    event.replaceOutput({}, unify[i], unifymts[i])
})