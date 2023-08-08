nota1 = float(input("Digite sua nota: "))
nota2 = float(input("Digite sua nota: "))
nota3 = float(input("Digite sua nota: "))
nota4 = float(input("Digite sua nota: "))

nota =   ( nota1 + nota2 + nota3 + nota4 )/4

#saída 
print(nota)

if nota < 60:
    print('Reprovado')
elif nota  <70:
    print('Mediano')
elif nota < 80:
    print('Muito Bom')
elif nota < 90:
    print('Excelente')

else:
    print('Parabens')
