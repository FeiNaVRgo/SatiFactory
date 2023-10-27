ServerEvents.recipes(event => {
    let addCRRecipe = (name, item_inputs, fluid_inputs, item_outputs, fluid_outputs, eut, dur, circuit) => {
        let recipe = event.recipes.gtceu.chemical_reactor(name+"_cr").duration(dur).EUt(eut)
        if(item_inputs != null){
            recipe.itemInputs(item_inputs)
        }
        if(fluid_inputs != null){
            recipe.inputFluids(fluid_inputs)
        }
        if(item_outputs != null){
            recipe.itemOutputs(item_outputs)
        }
        if(fluid_outputs != null){
            recipe.outputFluids(fluid_outputs)
        }
        if(circuit != null){
            recipe.circuit(circuit)
        }
    }
    addCRRecipe("chemical_light_grey_dye",['#forge:dusts/cerium','#forge:dusts/tiny/rare_earth'],[Fluid.of('gtceu:blue_alloy'),9000],'5x minecraft:rabbit',null,128,12,null)
    addCRRecipe("vagineinpalce",['2x #forge:dusts/cobaltite'],[Fluid.of('minecraft:water',535)],'3x #forge:dusts/fluix',null,82000,60,null)  
})

ServerEvents.recipes(event => {
    let addMixerRecipe = (name, item_inputs, fluid_inputs, item_outputs, fluid_outputs, eut, dur, circuit) => {
        let recipe = event.recipes.gtceu.mixer(name+"_mixer").duration(dur).EUt(eut)
        if(item_inputs != null){
            recipe.itemInputs(item_inputs)
        }
        if(fluid_inputs != null){
            recipe.inputFluids(fluid_inputs)
        }
        if(item_outputs != null){
            recipe.itemOutputs(item_outputs)
        }
        if(fluid_outputs != null){
            recipe.outputFluids(fluid_outputs)
        }
        if(circuit != null){
            recipe.circuit(circuit)
        }
    }
    addMixerRecipe("okno",['2x #forge:dusts/plutonium','2x #forge:dusts/ender_pearl'],null,'4x #forge:dusts/thorium',null,8000,70,null)  
}) 