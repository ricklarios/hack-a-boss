Algoritmo sin_titulo
	Escribir "Dia: "
	Leer dia
	Escribir "Mes: "
	Leer mes
	Escribir "Año: "
	Leer year
	Si dia > 0 y dia <=31 Entonces
		Si mes > 0 y mes <=5 Entonces
			Si year >= 0 y year <2031 Entonces
				Segun mes Hacer
					1:
						Escribir "enero"
					2:
						Escribir "febrero"
					3:
						Escribir "marzo"
					4:
						Escribir "abril"
					5:
						Escribir "mayo"
				FinSegun
			SiNo
				Escribir "Año incorrecto"
			FinSi
		SiNo
			Escribir "Mes incorrecto"
		FinSi
	SiNo
		Escribir "Mes incorrecto"
	FinSi
FinAlgoritmo
