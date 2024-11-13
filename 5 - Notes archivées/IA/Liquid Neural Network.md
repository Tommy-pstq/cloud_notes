2024-11-04 12:16

Status:

Tags: [[intelligence artificielle]] [[neurone]] [[attention]] [[circuit neuronaux]] [[constante de temps]]

# Liquid Neural Network

- Objectif : se rapprocher des systèmes naturels au dépend du côté algorithmique.
	- [[neurone]] flexible
	(Finalement, j'vais prendre des notes à partir de la vidéo.)

- Besoin de nouvelles idées, au risque de voir les futurs résultats n'être plus qu'incrémentaux. 
- LNN : plus compact, explicable, durable.

### Différences fondamentales en cerveaux & [[ANN]]

- Capacité à apprendre des représentations
* Compréhension du monde, capture la [[causalité]]
	- --> Extrapole facilement en dehors des distributions
* Robustesse & [[flexibilité]]
* efficacité 


Ex : Voiture autonome, réseau de neurones convolutifs ([[CNN]]) entraîné se concentre sur le bord de la route plutôt que sur la route elle-même pour calculer l'angle de direction, tandis que les humains regardent la route et un peu autour. (carte d'[[attention]] affichée dans la vidéo)

- Si du bruit est ajouté : la carte d'[[attention]] devient inutile

#### Comment utiliser les neurosciences pour améliorer l'intelligence artificielle ? 

Etudes:
* [[circuit neuronaux]]
*  Neurones & [[synapses]] 

--> **Liquid Neural Networks**
		- Expressivité ++
		- Capacité de [[mémoire]]
		- [[causalité]] ++
		- Robustesse + 
		- [[Extrapolation]] 

Ex : Voiture autonome : la carte d'[[attention]] est maintenant centrée sur la route. bien plus causal

#### Différences des composants 

![[Pasted image 20241104144349.png]]

Point commun entre [[neurosciences]] & [[machine learning]] :
	**Réseau neuronal en temps/profondeur continue** = Neural [[ODE]]

![[Pasted image 20241104144610.png]]
Profondeur = valeur continue

Avantages:
1. L'espace explorable des fonctions est bien plus conséquent 
2. Intervalle de temps arbitraire

### Implémentation

#### Entrainement 

![[Pasted image 20241104145511.png]]

[[Backpropagation]] ? méthode des états adjoints
![[Pasted image 20241104150015.png]]

- Calculer la fonction de perte en utilisant les données et un solveur d'EDO
- Méthode des adjoints : créer un nouvel état
    - relier la dynamique de la perte à l'état du système
    - exécuter l'EDO à rebours pour obtenir le gradient de la perte par rapport au système, et celui du système par rapport aux paramètres

[[Backpropagation]] temporelle:
![[Pasted image 20241104150615.png]]
Beaucoup plus complexe mais plus précise. 

--> in real world, a simple [[LSTM]] generalize better.

#### How to improve Neural ODE ? --> Liquid Time-Constant Networks 

![[Pasted image 20241104151224.png]]

La non-linéarité est déplacée des neurones vers les [[synapses]] 

x(t) est utilisé comme [[mémoire]], si pris égale à 0, le système dépend entièrement des inputs, c'est un [[système linéaire]]. 

![[Pasted image 20241104151514.png]]

Non-fixed dynamics:
![[Pasted image 20241104151717.png]]
y-axis = steering angle (blue = right, yellow = left), x-axis = time constant.
--> faster dynamics when steering angle increase : associate its timing behavior.

LTC : Possède des états d'équilibre et des [[constante de temps]]

Théorème 1 : La [[constante de temps]] de chaque [[neurone]] est bornée :

    $\tau_i / (1 + \tau_i W_i) \leq \tau_{sys} \leq \tau_i$

Théorème 2 : L’état de chaque [[neurone]] LTC est borné. Chaque synapse a un biais "A", max(A) = maximum de l’état.

Théorème 3 : Approximateurs universels.
#### Expressivité

![[Pasted image 20241104152905.png]]

![[Pasted image 20241104153028.png]]

Expressivity draw the line between shallow and deep networks 

#### Performance
![[Pasted image 20241104153258.png]]  ![[Pasted image 20241104153329.png]]
![[Pasted image 20241104153453.png]]

"Gradient backprop is problematic in long sequence for LTC"

##  Liquid Neural Network

![[Pasted image 20241104154310.png]]

DCM = Dynamic Causal Models

![[Pasted image 20241104154443.png]]

### Performances 
![[Pasted image 20241104154809.png]]

NCP: the only one that seems to "understand" what's he is aiming for. 

![[Pasted image 20241104154904.png]]

## LNN Limitations

- Complexity depends on [[ODE]] solver's complexity
	- Long training and test time for larger networks. 
## Refs
- https://www.youtube.com/watch?v=IlliqYiRhMU&