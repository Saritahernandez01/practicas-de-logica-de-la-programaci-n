Algoritmo CrearUsuario
	Definir inicial Como Numerica
	Definir nombreCompleto , correo, password Como Cadena
	Definir arrobaValidator , i , error Como Entero
	
	error <- 0
	
	Escribir "Porfavor ingrese su nombre completo"
	Leer nombreCompleto
	
	Si Longitud(nombreCompleto) < 3 Entonces
		Escribir "El nombre debe tener almenos 3 caracteres"
		error <- 1
	FinSi
	
	
	Escribir "Porfavor ingrese su correo"
	Leer correo
	Para inicial <- 1 Hasta Longitud(correo) Hacer

		Si Subcadena(correo , inicial ,inicial ) = "@" Entonces
			arrobaValidator <- 1
		FinSi
		
	FinPara
	
	Si arrobaValidator = 0 Entonces
		
		Escribir "Porfavor ingrese un correo valido"
		error <- 1 
	FinSi
	
	Escribir "Porfavor ingrese su contraseņa"
	Leer password
	
	Si Longitud(password) < 8 Entonces
		Escribir "La contraseņa debe ser mayor a 8 caracteres"
		error <- 1
		
		Si error > 0 Entonces
			Escribir "Debe cumplir con todos las validaciones para poder registrarse"
		FinSi
	FinSi
	
	Si error = 0 Entonces
		Escribir "registro exitoso"
		Escribir nombreCompleto
		Escribir correo
		Escribir password
	FinSi
	
FinAlgoritmo