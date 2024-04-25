# palavra_base = input("Qual a palavra: ")
# repete = bool(input("Tem repetição: "))

def fatorial(n):
    multiplo = 1
    final = 1
    while(multiplo <= n):
        final *= multiplo
        multiplo += 1

    return final

def fatorial_sem_repetição(p):
    return fatorial(len(p))


def has_repetition(word):
    for letter in word:
        if word.count(letter) > 1:
            return True
    
    return False


def fatorial_com_repeticao(word):
    already_repeated = []
    baixo = 1
    cima = fatorial_sem_repetição(word)
    for letter in word:
        if word.count(letter) > 1:#repete essa letra
            already_repeated.append(letter)

    already_repeated.sort()
    index = len(already_repeated) -1
    letra_atual = '1'
    num_baixo_pre_fatorial = 1
    while index >= 0:
        if already_repeated[index] == letra_atual:
            # varias somas
            num_baixo_pre_fatorial += 1
        else:
            letra_atual = already_repeated[index]
            baixo *=  fatorial(num_baixo_pre_fatorial)
            num_baixo_pre_fatorial = 1

        print(baixo)
        index -= 1

    baixo *= fatorial(num_baixo_pre_fatorial)#precisa fazer mais uma vez 

    return int(cima / baixo)



def recursiveRequest():
    while True: 
        palavra_base = input("Qual a palavra: ").lower()
        repete = has_repetition(palavra_base)
        if repete:
            resposta = fatorial_com_repeticao(palavra_base)
        else:
            resposta = fatorial_sem_repetição(palavra_base)
        
        print(f"A palavra {palavra_base} {resposta} anagramas")
        if input("Quer mais um[s][n]: ").lower() == "n": break
        



recursiveRequest()
print("Volte Sempre!!!!!!!!!!!!!")