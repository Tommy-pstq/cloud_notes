2024-11-04 16:17

Status:

Tags: [[intelligence artificielle]] 

# Generalized Framework for Liquid Neural Network upon Sequential and Non-Sequential Tasks


## Introduction 
Neural ordinary differential equations ([[ODE]]) : nouveau paradigme en deep-learning : profondeur/temps continue.

- 1 Profondeur du réseau = variable continue. 
- 2 Complexité s'ajuste en fonction des inputs 
- Bon alignement avec la nature continue des système physique.
	- Intéressant pour des modèles "[[physics-informed]]" 
* Robuste contre les perturbations 
* Efficacité paramétrique
* Supporte bien les données irrégulièrement échantillonnées 
* Efficace pour l'inter ou extrapolation
* Principalement utilisé pour les signaux à durée variable 
	* Récemment : [[reconnaissance vocale]] en temps réel, [[analyse de données]] issues de capteurs, prise de décision séquentielle 

1 + 2 : Architecture fournissant une adaptabilité dynamique incomparable.

Mais:
- Entrainement complexe et demande beaucoup de ressources computationnelles 
- Application limitées en dehors des tâches séquentielles.

**Objectif du papier** 
- Nouvelle amélioration aux LNN : Runge-Kutta DOPRI 5 method (1)
	- Permet son application aux tâches non-séquentielles en améliorant sa prédictibilité et stabilité grâce à une amélioration numérique de la dynamique. 
		- Réorganisation du modèle : dépendance [[tempo]]relle -> indépendance en supposant qu'il est à l'équilibre. 

3 cas d'études:
	1. Prédiction de trajectoires sinusoïdales atténuées. 
	2. Estimation de l'output de circuit RLC non-linéaire
	3. Classification d'images d'afflictions rétiniennes 

### Travaux connexes 
- Efficace pour modélisation fine de dynamiques temporelles. 
- ODE-RNN -> échantillonnage irrégulier
- Intégration de Neural ODE dans des CNN.
- nODE efficace pour structure graphée -> systèmes biologiques / réseaux sociaux
- Réinterprétation de ResNets en tant que solver d'équation différentielle ordinaire (ODE) : ResNets ~~ discretized ODE.
### nODE-based Model's background

- ResNets : skip connections, préserve les données d'entrée. Aide à l'entrainement.

- Système dynamique déterministe : gouvernés par des règles décrites par des équations différentielles. 
	- Beaucoup de méthodes ont été développés pour les résoudre numériquement et sont prêtes à être intégrées dans des réseaux de neurones artificiels. 

- ResNets -> ODEnet:
	- La dimension temporelle devient un paramètre du réseau.
	- Trajectoire d'un ODEnet définit par des conditions initiales locales et des dynamiques partagées dans toutes les séries temporelles. 
	- Résoudre des ODE par un ODEnet implique l'utilisation de solver d'ODE, calculant l'output du réseau comme une fonction temporelle . 
- Entraînement d'ODEnet:
	- Backpropagation temporelle continue
	- Soucis de valeur initiale: résolue par la méthode des états adjoints
		- Second ODE en temps inverse calculant le gradient : facilite l'optimisation des poids et de la dynamique du réseau.

Sujet de cette recherche: "Augmented state", prenant en compte les gradients des paramètres du réseau.
	- Premiers aperçus de l'intégrations d'ODE dans des réseaux, permettant un apprentissage efficace & précis pour des tâches non séquentielles.

##### Systèmes dynamiques

## Refs

- Generalized Framework for Liquid Neural Network upon Sequential and Non-Sequential Tasks, Prakash Kumar Karn, Iman Ardekani, Iman Ardekani, Mathematics 2024. DOI: https://doi.org/10.3390/math12162525

1. Dormand, J.R.; Prince, P.J. A family of embedded Runge-Kutta formulae. J. Comput. Appl. Math. **1980**, 6, 19–26.
