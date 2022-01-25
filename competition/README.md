# Questão

Em um concurso de restaurantes, os finalistas são aqueles que possuam no máximo um prato "idêntico".
Um prato é considerado idêntico quando ele tem
**uma combinação identica e exata de ingredientes de outro prato**.

Independentemente do preparo, se um prato tem os mesmos ingredientes de outro prato, eles são considerados idênticos.

Por exemplo, considere os ingredientes dos seguintes pratos:
```
Prato 1: Alho, Cebola, Frango
Prato 2: Alho, Cebola, Frango, Brócolis
Prato 3: Alho, Cebola, Frango, Brócolis
Prato 4: Alho, Cebola, Brócolis, Frango
Prato 5: Pepino, Alface, Cebola
```
* Os pratos 2, 3 e 4 são idênticos pois possuem exatamente os mesmos ingredientes.
* Os Pratos 1 e 5 são únicos, pois possuem combinações únicas e exclusivas de ingredientes.

Desenvolva uma solucão capaz de identificar os restaurantes finalistas.

# Entrada de dados

```
const restaurants = [
  {
    name: "restaurant 1",
    menu: [
      {
        "name": "item 1",
        "ingredients": ["bean","garlic","oatmeal"]
      },
      {
        "name":"item 2",
        "ingredients":["fig","octopus","beef","milk"]
      },
      ...
    ]
  },
  {
    name: "restaurant 2",
    menu: [
      {
        "name": "item 1",
        "ingredients": ["bean","garlic","oatmeal"]
      },
      {
        "name":"item 2",
        "ingredients":["fig","octopus","beef","milk"]
      },
      ...
    ]
  },
  ...
]
```

