# Test technique
# Développeur React

## Sujet

La société TapAndGo met à disposition des parcs de vélos pour les usagers dans plusieurs villes de
France. Elle souhaite faire développer une application web en ReactJS permettant de
visualiser l’emplacement des stations et le nombre de vélos disponibles pour chacune.
L’interface de cette application se composera d’au moins deux parties :

- Une partie pour visualiser le nombre et l’emplacement des stations de Bicloo sous forme de
carte et de liste
- Une partie pour consulter le détail d’une station
Le client aimerait également que les utilisateurs puissent filtrer et chercher une station en fonction
de son nom, de son état (ouvert ou fermé) et de la disponibilité de Bicloo.
L’utilisateur doit pouvoir renseigner un point de départ ainsi qu’un point d'arrivée et l’application
doit lui proposer une station de départ et d’arrivée correspondantes.
Lors de la recherche des stations, l’algorithme doit permettre à l’utilisateur de prendre un vélo et le
déposer dans la station la plus proche du point d’arrivée. Il faut donc prendre en compte le nombre
de places et de vélos disponibles.

## Éléments techniques

Le projet devra être versionné sur Git et le projet sera livré sur un compte Github ou Bitbucket.
Le code et les commentaires devront être rédigés en anglais.
Utiliser Redux pour gérer le flux de données
L’app devra être conforme à la spec PWA
Mise en place de tests unitaires (quelques uns pour montrer le principe)
Vous avez carte blanche sur les librairies à utiliser. À vous de faire les bons choix pour gagner un
maximum de temps.
La récupération des données se fera via [l’API Rest de JCDecaux](https://developer.jcdecaux.com/#/opendata/vls?page=dynamic) (vous devrez vous créer un compte
pour générer une clé d’API).

## Conseils

Ce projet servira de base de discussion pour l’entretien technique et peut prendre une bonne
journée de travail.
Pour votre information, l’évaluation portera principalement sur ces critères :

- Qualité et lisibilité du code
- Respect des bonnes pratiques (isolation de responsabilité, injection de dépendances,
normes de nommage, ...)
- Capacité à être force de suggestion
- Pertinence d’utilisation des librairies
- Choix design (navigation, composants graphiques utilisés, couleurs, ...)

## To Do List

- [ ] Une partie pour visualiser le nombre et l’emplacement des stations de Bicloo sous forme de carte et de liste
- [x] Une partie pour visualiser l’emplacement des stations de Bicloo sous forme de liste
- [x] Une partie pour afficher un google map
- [ ] Une partie pour consulter le détail d’une station
- [x] Filtrer et chercher une station en fonction de son nom.
- [ ] Filtrer et chercher une station en fonction de son état (ouvert ou fermé) et de la disponibilité de Bicloo.
- [x] Permettre à l'utilisateur de programmer un itinéraire (en utilisant un site tierce)
- [ ] Permettre à l’utilisateur de prendre un vélo et le déposer dans la station la plus proche du point d’arrivée.
- [ ] Prendre en compte le nombre de places et de vélos disponibles.
- [x] Le code et les commentaires devront être rédigés en anglais.