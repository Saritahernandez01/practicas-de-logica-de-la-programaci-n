


const  VehicleOncreate = (model, color, year, isfuncional, brand) => {


    if (!model || !color || !year || !isfuncional || !brand) throw new Error ("Tienes que enviarme todos los argumentos para poder ejecutar correctamentela funcion")    
    
    return{
        modelo     : model,
        color      : color,
        anio       : year,
        esfuncional: isfuncional,
        marca      : brand,
    }

}


module.exports = VehicleOncreate







