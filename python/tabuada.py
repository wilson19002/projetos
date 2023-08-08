#Algoritimo que faz tabuada de número

def multiplicar(numero):
    for i in range(0,11):
     print(numero , "x", i , " = ", numero* i )


multiplicar(2)


def verificarPar(numero):
    if numero % 2 == 0:
        print("É um número par")
    else:
        print("É um número impar")

    verificarPar(numero)