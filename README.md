### 📝 Mettre à jour les objets d'un état (Défi 2 sur 3) : Repérer et corriger la mutation

- **Problème résolu :** Correction d'un effet de bord anormal où l'arrière-plan statique « sautait » à la position de la boîte mobile lors d'un changement de couleur. Le gestionnaire modifiait directement l'objet partagé `initialPosition` en cassant l'immutabilité, altérant ainsi la référence de l'arrière-plan en cache.
- **Compétence acquise :** Isolation des références d'objets JavaScript partagés et apprentissage du clonage imbriqué via le déversement d'objet (`{ ...shape, position: { ...shape.position, x: ... } }`) afin d'éviter les mutations accidentelles de variables globales.
- **Lien vers le code :** [Cliquez ici pour voir l'exercice](https://react.dev)
