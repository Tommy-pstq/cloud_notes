2024-11-04 16:17

Status:

Tags: [[intelligence artificielle | IA]] 

# Generalized Framework for Liquid Neural Network upon Sequential and Non-Sequential Tasks


## Introduction 
Neural ordinary differential equations ([[ODE]]) : nouveau paradigme en deep-learning : profondeur/temps continue.

- 1 Profondeur du réseau = [[variable continue]]. 
- 2 [[Complexité]] s'ajuste en fonction des inputs 
- Bon alignement avec la nature continue des systèmes physiques.
	- Intéressant pour des modèles "[[physics-informed]]" 
* Robuste contre les perturbations 
* Efficacité paramétrique
* Supporte bien les données irrégulièrement échantillonnées 
* Efficace pour l'inter ou [[Extrapolation]]
* Principalement utilisé pour les signaux à durée variable 
	* Récemment : [[reconnaissance vocale]] en temps réel, [[analyse de données]] issues de capteurs, prise de décision séquentielle 

1 + 2 : Architecture fournissant une [[adaptabilité dynamique]] incomparable.

Mais:
- [[Entrainement]] complexe et demande beaucoup de ressources computationnelles 
- Application limitées en dehors des tâches séquentielles.

**Objectif du papier** 
- Nouvelle amélioration aux [[LNN]] : Runge-Kutta DOPRI 5 method (1)
	- Permet son application aux tâches non-séquentielles en améliorant sa prédictibilité et stabilité grâce à une amélioration numérique de la dynamique. 
		- Réorganisation du modèle : dépendance [[tempo]]relle -> indépendance en supposant qu'il est à l'équilibre. 

3 cas d'études:
	1. Prédiction de trajectoires sinusoïdales atténuées. 
	2. Estimation de l'output de circuit RLC non-linéaire
	3. Classification d'images d'afflictions rétiniennes 

### Travaux connexes 
- Efficace pour [[modélisation]] fine de dynamiques temporelles. 
- [[ODE]]-RNN -> [[échantillonnage]] irrégulier
- Intégration de Neural [[ODE]] dans des [[CNN]].
- nODE efficace pour structure graphée -> systèmes biologiques / réseaux sociaux
- Réinterprétation de ResNets en tant que solver d'équation différentielle ordinaire ([[ODE]]) : ResNets ~~ discretized [[ODE]].
### nODE-based Model's background

- ResNets : skip connections, préserve les données d'entrée. Aide à l'entrainement.

- [[Système dynamique]] [[déterministe]] : gouvernés par des règles décrites par des équations différentielles. 
	- Beaucoup de méthodes ont été développés pour les résoudre numériquement et sont prêtes à être intégrées dans des réseaux de neurones artificiels. 

- ResNets -> ODEnet:
	- La dimension [[tempo]]relle devient un paramètre du réseau.
	- Trajectoire d'un ODEnet définit par des conditions initiales locales et des dynamiques partagées dans toutes les séries temporelles. 
	- Résoudre des [[ODE]] par un ODEnet implique l'utilisation de solver d'[[ODE]], calculant l'output du réseau comme une [[fonction temporelle]] . 
- Entraînement d'ODEnet:
	- [[Backpropagation]] temporelle continue
	- Soucis de valeur initiale: résolue par la méthode des états adjoints
		- Second [[ODE]] en temps inverse calculant le gradient : facilite l'optimisation des poids et de la dynamique du réseau.

Sujet de cette recherche: "Augmented state", prenant en compte les gradients des paramètres du réseau.
	- Premiers aperçus de l'intégrations d'[[ODE]] dans des réseaux, permettant un [[apprentissage]] efficace & précis pour des tâches non séquentielles.

##### Systèmes dynamiques

[[Système dynamique]] = $$f_t(M->M)$$ $t$ = continu ou discrétisé. 
Système opérant dans une structure topologique & différentiable.
$f_t$ = Continue & différentiable. 

##### Equations différentielles  + Num Methods

- Utilisation de méthodes numériques quand des solutions analytiques sont innaccessibles:
	- Runge-Kutha methods (RK4)
	- Dormand Prince methods (DOPRI5) 
-> Décomposition en problèmes simples & résolution sur des intervalles discrets.

##### Backprog pour les nODE

Similaire aux [[ANN]] habituels. Mais avec un petit bonus:
- Prise en compte des conditions initiales en plus des paramètres.

##### Solutions des nODE

Calcule de l'output du réseau comme une [[fonction temporelle]]. Le réseau est traité comme un système continu. 
		-> [[ODE]] solvers déterminent l'[[évolution]] des états cachés du réseau au cours du temps. 
		-> nODE output la dérivée d'une fonction, utilisée pour calculer la loss. 

## Design de modèles pour GLNN

De base : dépendance temporelle de la dynamique. Objectif : atteindre une indépendance temporelle. 

Continuous-Time RNN (CT-RNN) : $$\frac{dx(t)}{dt} = -x(t)/\tau + f(x(t), I(t), \theta)$$ 
ou $\frac{dx(t)}{dt}$  aide le système à atteindre l'équilibre avec la [[constante de temps]] $\tau$.
$x(t)$ est la variable dépendante. 
$f(x(t), I(t), \theta)$ : input externe ou "forcing function"
$\theta$ = paramètres.

Dynamique de potentiel neuronal sans [[spike]]: $$\frac{dx}{dt}(t) = -g_l(t) + s(t)$$
$g_l$ = "leakage [[conductance]]".
$s(t)$ = somme des inputs [[synaptique]] sur la node. En prenant compte des non-linéarités: $$s(t) = f(x(t), I(t), (A-x(t)))$$ 
$A$ = potentiel [[synaptique]] entre deux nodes. 

--> $$\frac{dx}{dt}(t) = -g_l(t) + f(x(t), I(t), (A-x(t))$$
--> $$\frac{dx}{dt}(t) = -\frac{x(t)}{\tau} + f(x(t), I(t), \theta, (A-x(t)))$$
##### Condition d'équilibre
$$\frac{dx}{dt}=0 = -\frac{x}{\tau} + f(x, I, \theta, (A-x))$$

Suppose que le système a atteint un état d'équilibre, donc indépendant du temps. 


*Bon, après ça déroule les calculs etc, j'vais pas trop creuser car pas nécessaire pour l'instant.*
In fine, on se retrouve avec des fonctions pour : 
- Les inputs externes
- l'auto-[[régulation]]
- les interactions synaptiques entre neurones
- Paramètres d'interaction [[synaptique]].
-> Pleins de trucs qui peuvent être résolu numériquement. 

![[{F791808C-6E51-40F7-BC1C-5A2AD249318F}.png]]

## Applications des GNNs 

Cas 1: Sinusoïde 2D atténuée.
![[{FFD76FB8-B820-4C02-8000-96A3B45045E7}.png|500]]

Cas 2:  RLC non linéaire.
![[{205BD407-6BD5-402A-B904-BEC164EDA79F}.png]]
![[{1BEE8459-54BB-4522-8017-B584247BCE2B}.png]]

-> Permet l'étude de système complexes non linéaire présentant des paramètres variants avec un bruti signifiant : présente son utilité potentielle dans des applications concrètes.

Res :

	- LNN = 75% précision
	- GLNN = 95% précision

![[{9EDA6CFC-8099-4A4E-8BA7-36A385595D38} 1.png]]

Cas 3: Classification d'image rétiniennes. 

- Intégration de Neural Circuit Policies (NCP) dans des architecture d'encoder pour l'extraction de features. NCP head configurée de manière similaire à la structure observée chez C.nematode
- LNN framework avec 19 neurones cachés, pour traités les séquences de 32 features extraites des images. 

![[{114B1447-0BA0-4F1A-85F8-545938F821FA}.png]]

![[{CD7714B2-EF0E-4E72-981E-F1AB5F341686}.png]]
![[{1BEE3B75-5462-4D2C-9EE8-A05476CA4380}.png]]


--> CCL : ça marche très bien.

## Refs

- Generalized Framework for [[Liquid Neural Network]] upon Sequential and Non-Sequential Tasks, Prakash Kumar Karn, Iman Ardekani, Iman Ardekani, Mathematics 2024. DOI: https://doi.org/10.3390/math12162525

1. Dormand, J.R.; Prince, P.J. A family of embedded Runge-Kutta formulae. J. Comput. Appl. Math. **1980**, 6, 19–26.
