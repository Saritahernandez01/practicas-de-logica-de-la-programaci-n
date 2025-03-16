



const AnimalFactory = (name, age, color, race) => {

    try{

        if(!name || !age || !color || !race) return "Porfavor ingrese todos los argumentos para poder crear el animal"

        const newAnimal = {
            nombre: name,
            edad  : age,
            color : color,
            raza  : race
        }

        return newAnimal

    } catch (error) {


        throw new Error(`Hubo un problema al crear el animal : ${error}`);

    }

}

module.exports = AnimalFactory


