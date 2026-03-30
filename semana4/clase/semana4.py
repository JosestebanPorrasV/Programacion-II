class Molde:

    def __init__(self):
        self.tamano = "Mediano"
        self.forma = "Redondo"
        self.color = "Crema"
        self.material = "Harina"
        self.marcas = None

    def hornear(self):
        print("Horneando hasta dorar")


pastelUno = Molde()
pastelDos = Molde()

print(pastelDos.tamano)

pastelDos.tamano = "Grande"
print(pastelDos.tamano)

pastelUno.hornear()