2024-12-23 12:42


Tags:

# Altered grid-like coding in early blind people


### Etat de l'art 

- Réseau neuronal de navigation humain : régions temporales médiales, paritétales et occipitales.
- Pas de connaissance sur la résilience de l'encodage des places cells et head directions cells ainsi que du développement des [[grid cells]] en absence de vision fonctionnelle.
- La capacité à générer des cartes mentales est conservées chez les personnes atteintes de [[cécité]].
	- Une absence précoce de vision peut diminuer les capacités d'[[représentation spatiale|encodage spatial]] [[allocentrique]] 
		- Moins bonne estimation des distances
		- Dépendance plus marquée aux informations [[égocentrique|égocentriques]].
- Quelques études sur les effets d'une privation précoce de la vision sur l'activité du réseau de navigation, sans résultats consistants.
	- Aucune sur l'activité du complexe hippocampo-entorhinral.

### Methods

- Individus sains (19) dont les yeux ont été bandés et personnes avec cécité précoce (19):
		- Cécité précoce = avant 5 ans, sans souvenirs visuels déclarés.
	- Il leur est demandé de s'imaginer naviguer à l'intérieur d'un espace similaire à une horloge, allant d'un nombre à un autre en ligne droite.
		- <u>Objectif</u>: étudier si l'absence de vision avait influencé l'émergence de représentation similaire à une grille dans le [[cortex entorhinal]].

- Expérimentations:
	- Echantillonnage de direction tous les 15°
		- Permet des directions hexa-directionnelles : ce qui est présent dans les [[grid cells]] donc d'intérêt pour les mesures.
	- Vérification de la [[navigation]] via des questions 
		- Réponses  dépendant d'inférences basés sur les relations entre les positions des différents nombres à l'intérieur de l'horologe
	- Comparaison navigations VS tâches arithmétique
		- Vérification que les [[circuit neuronaux|circuits neuronaux]] liés à la [[navigation]] sont les mêmes pour les deux groupes. 
		- Tâche arithmétique : permet d'avoir une référence sans [[activité|activation]] de l'[[hippocampe]]. 
	- Tâche de navigation:
		- Position de départ + position cible, participants doivent s'imaginer effectuer ce trajet.
			- Ensuite : Annonce d'une position supplémentaire, les participants doivent répondre si elle se trouve à gauche ou droite de leur position d'arrivée.
	- Tâche arithmétique:
		- Annonce de 3 nombres + opérations élémentaires à effectuer.

### Résultats 

#### Résilience du réseau de navigation 

![[Pasted image 20241223144511.png]]


-  Pas de différences statistiquement significative sur ces tâches.
	- Le réseau de navigation humain est résilient face à la privation visuelle précoce.
- Etudes précédentes : des différences significatives étaient observées. 
	- Analyse Small Volume Correction (SVC), ROI sphérique. dans le [[cortex pariétal inférieur]].
	![[Pasted image 20241223153854.png|400]]
		- Région impliquée dans le <u>codage égocentrique d'informations spatiales et non spatiales</u>.
			- <u>Différence significative</u>. (voxel-level: p<0.001, cluster-level : p<0.05)
				- Utilisation de cette région comme référence pour rechercher une compensation durant la tâche de navigation.


#### Absence d'émergence de codage grid-like hexa directionnel chez les individus atteints de cécité précoce. 

- IRMf : codage grid-like détecté par la modulation sinusoïdale à 60° qu'il génère sur le [[signal BOLD]].
	- Suscité par les trajectoires spatiales alignées avec l'axe principal de la grille hexagonale. 
		- -> L'activité des grid cells augmente lorsqu'une trajectoire est alignée.
			- Modulation plus importante du [[signal BOLD]] 
![[Pasted image 20241223155804.png|500]]
![[Pasted image 20241223155958.png|600]]
- Individu sains
	- Différence significative de modulation entre le cortex entorhinal droit et gauche (C-1).
	- Modulation présente uniquement une périodicité de 60° (C-3), pas lors des autres alternatives (i.e : nombre de fold différent).
		- Modulation uniquement détectée dans le cortex entorhinal gauche (D)
- Cécité précoce : pas de modulation significative par une sinusoïde avec cette périodicité (F)
![[Pasted image 20241223160250.png|500]]

- Comme attendu : symétrie hexa-directionnelle observée chez les individus sains, non observée chez les individus atteints de cécité précoce.
	- Cependant : pas suffisant pour conclure à une différence d'encodage hexadirectionnel entre les groupes. 
		- -> Hypothèse : il y a une altération de la géométrie hexadirectionnelle dans les grid cells des patients atteints de cécité précoce.

#### Une géométrie différente dans le cortex entorhinal des personnes aveugles. 

- Pas de modulation hexa, donc test si présence d'une autre modulation dans le groupe aveugle.
	- émergence d'une <u>modulation à 90°</u> plutôt que 60°.
		- Modulation [[bilatérale]] du [[cortex entorhinal]] (A-1), et unilatérale avec une intensité moins marquée.
	- Pas d'autre modulation (A-3)
	- Modulation plus marquée que dans le groupe sans cécité.
	- Corrélée à une  activité plus importante dans le [[cortex pariétal inférieur]] (E)

![[Pasted image 20241223162426.png]]

![[Pasted image 20241223162517.png]]


- Il existe donc une différence significative de géométrie entre le cortex entorhinal de personnes atteintes de cécité précoce  et celui d'individus sans lors des tâches de navigation imaginées. 

#### Comparé aux individus contrôles, les personnes atteintes de cécité précoce se reposent davantage sur les informations égocentriques dans les activités de tous les jours et sont moins performantes dans les tâches de navigation réelles. 

- Pour étudier les performances dans des [[activité|activités]] hors laboratoire: questionnaire. 
	- Calcul d'un score de confiance dans la navigation
	- Usage relatif des stratégies allocentrique ou égocentrique
		- score dRS : valeur positive = favorise les stratégies [[égocentrique|égocentriques]].
- Score de confiance exprimé similaire entre les groupes. 
- Différence <u>significative</u> :
	- Personnes atteinte de cécité précoce : <u>préférence marquée</u> pour les stratégies <u>égocentriques</u> dans les tâches de navigation de tous les jours. 

![[Pasted image 20241224151744.png]]

- Est-ce que cette préférence impacte les capacités mentales de représentation de l'environnement ? 
		- Expérimentation d'[[intégration de trajectoire]].
			- Déplacement le long d'une ligne, estimation de l'orientation et distance parcourue par rapport au départ. 
			- **[[intégration de trajectoire]]** : capacité à utiliser des éléments [[égocentrique|idiothétiques]] pour se repérer par rapport à une position précédente.  
				- Connu pour être un moyen sensible pour tester la mémoire spatiale allocentrique via l'activité du complexe hippocampo-entorhinal.
		- <u>Résultats</u> : les personnes atteintes de cécité précoce sont significativement moins performantes que le groupe contrôle. 

![[Pasted image 20241224151711.png]]
- Activité de l'[[cortex pariétal inférieur|IPC]] : reliée à la précision avec laquelle les informations spatiales sont encodées, principalement lorsque des représentations [[égocentrique|égocentriques]] sont impliquées. 
	- Groupe aveugle : <u>corrélation positive</u> entre activité de l'[[cortex pariétal inférieur|IPC]] et précision dans la tâche d'intégration de trajectoire. 
		- Conservée lors de la prise en compte des symétries. 
	- Pas de corrélation de ce type dans le groupe contrôle. 
- Résultats préliminaires et obtenus sur un faible nombre d'individus mais néanmoins très prometteurs. 
![[Pasted image 20241224151823.png]]


### Discussion

- D'autres études présentaient une activité des régions occipitales reliées aux tâches de navigation dans les études comparants groupe aveugle et contrôle, pas ici.
	- Pourquoi ? Probablement dû au fait qu'ici la référence prise est l'activité neuronale mesurée lors de la résolution de problèmes arithmétiques, alors que la référence des autres études était l'activité au repos ou lors de la stimulation électrique de la langue. 
		- La résolution des problèmes arithmétique implique une activité [[cognition|cognitive]] plus proche de la navigation (basé sur des nombres dans les deux cas), ce qui induit une spécificité plus marquée des résultats.
- Géométrie a symétrie quadra (90°) vs hexa (60°) directionnelle dans le groupe atteint de cécité précoce  vs contrôle. 
	- Hypothèse : cette géométrie favorise les références [[égocentrique|égocentriques]].
	- Phénomène déjà observé dans d'autres études quand le nombre de référence visuelles était limité par des barrières.
## Refs

- Sigismondi, F., Xu, Y., Silvestri, M., & Bottini, R. (2023). Altered grid-like coding in early blind people. _Nature Communications_, 15. https://doi.org/10.1038/s41467-024-47747-x.
