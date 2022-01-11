# Questão

Um grupo de amigos vai a um restaurante.
Cada amigo pode ou não ter alergias alimentares.

Desenvolva uma solucão capaz de identificar quais Itens do menu são seguros e podem ser consumidos por todos os amigos sem medo.

# Entrada de dados

```
const people = [
  {
    "name": "João Silva",
    "allergies": ["pasta","milk"]
  },
  {
    "name": "Vitória Costa",
    "allergies": []
  },
  ...
]

const menu = [
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
```

# Como rodar

Basta executar os seguintes comandos:
```
node allergies/selution1.js
node allergies/selution2.js
...
```

