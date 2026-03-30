texto = "Juan va a comprar 400 celulares nuevos y 300 celulares de segunda en Brasil"
celularesNuevos = 400
celularesUsados = 300

palabras = texto.split()

contador = 0
for palabra in palabras:
    if palabra.isdigit():
        if contador == 0:
            celularesNuevos = int(palabra)
        elif contador == 1:
            celularesUsados = int(palabra)
        contador += 1


total = celularesNuevos + celularesUsados

print("El total de celulares comprados por Juan es:", total)