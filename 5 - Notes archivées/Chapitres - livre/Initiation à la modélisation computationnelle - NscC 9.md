2024-12-26 10:44


Anne Collins, Mehdi Khamassi

# Initiation à la modélisation computationnelle - NscC 9

## Introduction

- Modélisation computationnelle = Décrire un phénomène par des équations. Offre un outil complémentaire à l'expérimentation et donc de plus en plus en vogue en [[psychologie]] expérimentale et neurosciences [[cognition|cognitives]].

<u>A quoi sert la modélisation computationnelle ?</u>

- Décrire des phénomènes observés de manière synthétique.
	- Représenter de grandes quantités de données expérimentales à l'aide de quelques équations : offre une explication fondée sur des mécanismes simples au phénomèe observé. 
- Bénéficie de la précision du langage mathématique.  Pas d'ambiguïté (interdisciplinarité).
- Analyse *model-based* de données : les résultats sont confrontés aux variables. 
- Pouvoir de prédiction.
- Peut donner des idées d'[[expérimentations]] pour tester la validité du modèle. 

<u>Que veut dire computationnel ?</u>

- David Marr, 1980 : concept de neurosciences computationnelles en cherchant à élaborer une méthode qui permette de modéliser, et donc de mieux comprendre, le traitement de l'information visuelle dans le cerveau. Il distingue 3 niveaux d'élaboration:
	1. Le niveau computationnel / fonctionnel. *objectif, fonction étudiée*
	2. Le niveau algorithmique. *structuration mathématique pour atteindre l'objectif*
	3. Le niveau implémentationnel.
	- Ex système visuel:
		1. Reconnaitre un objet distinct dans son environnement : description série de calculs nécessaires qu'il effectue pour délimiter les contours 
		2. Description de la suite d'opération permettant de limiter les bords à partir des niveaux de contrastes 
		3. Répartition et [[communication]] des régions du cerveau impliquées dans ces calculs.

Un modèle computationnel est constitué de:
- Un ensemble de d'équations.
	- Description du processus supposé sous-jacent au phénomène observé.
- Un ensemble de paramètres. 
- Un ensemble de variables. 
	- Représentent l'état du modèle 

<u>Différence modèle prédictif / descriptif </u>

- **Modèles descriptifs** : rendre compte des données expérimentales sans proposer de fonction - au sens de leur [[raisonnement|raison]] d'être, de leur utilité fonctionnelle - à ces données. C'est une simple description mathématique. 
- **Modèles prédictifs** : Description de la fonction sous-tendant les données de manière à pouvoir expliquer pourquoi ces données sont observées dans telle ou telle situation. C'est une proposition fonctionnelle du phénomène observé. 

<u>Modèle validé par une expérience = modèle juste ?</u>

Non. Il est valide jusqu'à ce qu'il soit invalidé par une autre expérience. 
George Box  (statisticien): "Tous les modèles sont faux, mais certains sont utiles"

<u>Une équation simple suffit pour constituer un modèle ?</u>

Oui, et c'est même souhaitable. 
- Principe de parcimonie (aussi appelé Rasoir d'Ockham en philosophie):
	- Il faut éliminer toutes les explications improbables qui ajouent de la [[Complexité]] au modèle sans augmenter les capacité descriptives et prédictives du dit modèle. 
		- i.e : Entre deux explications possibles, la meilleures est la plus simple.

...

- Loi de Weber-Fechner. Révolutionne la psychologie expérimentale au milieu du XIX° en donnant naissance au champ de la [[psychophysique]]. 
	- En étudiant la relation force d'un [[stimulus]] et intensité perçue: relation quantitative régulière. 
		- La différence des intensités ressenties divisée par la magnitude est constante: $\frac{\left(i_1-i_2\right)}{i}=k$
			- On obtient donc l'équation donnant l'intensité perçue d'un stimulus: $$i=k\cdot\log\left(s\right)$$
			- avec : $k$ un paramètre du modèle et $s$ la magnitude du [[stimulus]].

## Exemple approfondi : la théorie des perspectives. 

- Lié à la [[prise de décision]] chez l'humain.
### Prise de décision fondée sur les valeurs en économie

- Situation ou [[prise de décision|un choix]] doit être fait entre 2 ou N option basé sur les valeurs subjectives de ces différentes possibilités. 
- Humain dans des situations de loteries/gambling:
	- Observation e phénomènes [[psychologie|psychologiques]] : 
		- **l'aversion au risque** 
		- **l'aversion à la perte**

### Un modèle computationnel 

- Résultat d'une loterie : variable aléatoire.
	- $U\left(X\right)=E\left(X\right)=\sum_{i=1}^{n}p_{i}x_{i}$
- Théorie des perspectives : 
	- l'agent considère la [[valeur subjective]] des valeurs $x_i$ par le biais d'une fonction $v(x_i)$ qui déforme l'utilité pour créer une asymétrie gain/perte.
	- De même, l'agent de considère par les probabilité abosules $p_i$ mais une fonction $w(p_i)$ qui donne un poids gonflé au probabilité faibles (événement rares) et un poids réduits aux probabilités proches de 1:
$$V\left(X\right)=\sum_{i=1}^{n}w\left(p_{i}\right)v\left(p_{i}\right)$$
![[images.png]]


### Apprentissage par renforcement - les bases

- Théorie de l'[[apprentissage par renforcement]]: un agent apprend son comportement à partir d'un signal de renforcement, soit une récompense, soit une punition. 
	- L'agent peut se trouver dans un **état s** et y répondre par des **actions a** et recevoir un **renforcement r** 
- Les modèles de RL n'estiment pas seulement l'[[association]] entre un état et l'US (unconditionnal stimulus) qui le suit juste après mais essaient d'estimer la **valeur future cumulée** d'un état, qui correspond à l'ensemble des renforcements que je m'attends à recevoir dans le futur. 
	- Modèle de RL : si je suis dans un état $s$, quelle récompense vais-je obtenir immédiatement, puis à l'itération $i+1$, puis $i+2$ etc.
		- Permet au modèle d'[[apprentissage|apprendre]] à prédire la récompense, même lorsqu'elle n'est pas instantanée.
			- Les récompenses futures sont dévaluées par rapport à leur distance de prédiction.

### Dopamine et [[troubles psychiatriques]]

Les modèles d'[[apprentissage par renforcement]] peuvent être vus comme des solutions aux niveux computationnel & algorithmique de Marr. 
1. Computationnel : l'apprentissage a pour but d'estimer et d'optimiser les renforcements futurs cumulés.
2. Algorithmique : Proposent une solution simple pour ce calcul, rendant compte de beaucoup de phénomène [[psychologie|psychologiques]]. 
Une des raisons du succès des algorithmes de RL : le niveau implémentationnel, l'activité physiologiques du cerveau lors des [[apprentissage|apprentissages]] est similaire à ce fonctionnement. 

--> [[dopamine|Dopamine]]. 
- Neuromodulateur: molécule biochimique neurotransmettrice qui régule l'activité de population de neurones dans le cerveau. 
- Les réponses phasique des neurones [[dopamine|dopaminergiques]] ressemble fortement à un calcul très particulier : celui d'une erreur de prédiction. 

- Signal [[dopamine|dopaminergique]] utilisé pour [[apprentissage|apprendre]] la valeur des états et actions pour implémenter une forme d'apprentissage par renforcement. 
	- [[Striatum]] : neurones dont l'activité semble représenter la valeur des [[stimulus|stimuli]] présentés.
		- Signal envoyé aux neurones [[dopamine|dopaminergique]].
			- Calcul de l'erreur de prédiction. 
				- Signal renvoyé au [[striatum]] où il module la [[plasticité synaptique]]. 
					- Renforcement des connexions cortico-striatales qui soutiennent [[prise de décision|un choix]] menant à une récompense, diminution des autres.

- Meilleur compréhension des symptômes de [[Parkinson]]
- Nouveau domaine de recherche:
	- Psychiatrie computationnelle. 

## Refs
