class Carro:
    def __init__(this, ano):
        this.ano = ano

class Gol(Carro):
    def __init__(this, ano, modelo):
        super().__init__(ano)
        this.modelo = modelo

    def showAno(self):
        return self.ano
    
    def returFormatedName(self):
        return f"Gol {self.modelo}"
    

gol1 = Gol(2000, "Special")
print(gol1.ano)
print(gol1.returFormatedName())