2024-11-18 15:33

Publication : 24/12/2013


# Information gain in the brain's resting state - A new perspective on autism

## Introduction 

- Neurosciences : focus sur l'activité en réponse à des [[stimulus|stimuli]].
	- L'activité cérébrales [[spontanéité|spontanée]] est considérée comme du bruit/ tâche de fond sans grande importance. 
- Mais : de plus en plus d'évidences que cette activité spontanée influence le traitement des inputs [[sensorialité|sensoriels]]. 
	- Le cerveau reçoit des informations [[sensorialité|sensorielles]] en permanence. Et même pendant le sommeil profond, on observe une activité coordonnée dans le réseau thalamo-cortical.
- Même en cas de privation [[sensorialité|sensorielle]], le cerveau génère [[spontanéité|spontanément]] son propre monde d'[[Hallucinations|hallucination]]. 

- Débat actuel autour de l'[[TSA|autisme]] et des possibles différences de connectivités se reflétant dans les mode [[cognition|cognitifs]] spéciaux des personnes [[TSA]].
	- Le cerveau des [[TSA]] serait plus "déconnecté": idée venant de mesures PET et IRMf
	- Observation de pattern de [[synchronicité|synchronisation]] différents en [[EEG]] et [[magnetoencephalographic|MEG]] entre TSA et reste de la population.
	- Différences anatomiques:
		- cortex [[frontal]]
			- organisation spatiale anormale des composants microgliale-neuronaux. 
		- matière blanche
			- latéralisation atypique
			- développement de trajectoires atypiques

- Récemment: l'activité du cerveau au repos peut être décrite précisément en utilisant une dynamique linéaire stochastique.
	- Utilisation d'un [[multivariate Ornstein-Uhlenbeck process]] (mOUP) pour étudier les mesures [[magnetoencephalographic|MEG]] issues de personnes TSA et contrôle. 
	- ![[Pasted image 20241226165719.png]]
			- dt = 1.6ms, N = nombre de nodes
		- Permet d'estimer:
			- Les connexions au niveau [[sensorialité|sensoriels]]
				- Connexions fonctionnelles responsables de:
					- Corrélation de covariance retardée entre signaux issus de régions différentes
			- Les inputs dirigeant le réseau.
				- Via la variance des signaux mesurés non expliquée par la covariance avec les autres signaux du réseau.
	- <u>Résultats, différence entre TSA et population générale</u>:
		- Augmentation des connexions excitatrices entres les régions frontales et pariétales/occipitales 
		- Les inputs stochastiques responsables de l'activité de fond du [[default mode|mode par défaut]] sont spatialement plus homogènes
			- [[Complexité]] spatiale plus faible
				- Spéculation : projections thalamo-corticales moins spécifiques
	- -> Le cerveau TSA ne serait pas moins connecté mais présente des connexions différentes entre zones spécialisées. 
		- On parle ici de connectivité fonctionnelle pouvant être mesurée en [[magnetoencephalographic|MEG]] et [[EEG]] et non anatomique

- Etudié ici : Est-ce que la<u> production d'information</u> en période de stimulation [[sensorialité|sensorielle]] minime ([[default mode|mode par défaut]]) diffère entre TSA et popG ?
	- Métrique : [[Kullback-Leibler divergence]] 
		- Entre les inputs : Densité de probabilité des inputs stochastiques 
			- inputs stochastiques = variance inexpliquée par la covariance entre signaux au repos. 
		- et Outputs : Densité de probabilité de l'activité cérébrales
	- <u>Résultats</u>:
		- Divergence supérieure chez les enfants TSA au repos, donc plus d'information est générée. 
			- Conjecture : ce gain d'information pourrait être relié à une caractéristique bien connu du TSA : le retrait dans son monde intérieur. 

## Résultats

![[Pasted image 20241226164631.png]]



![[Pasted image 20241226165942.png|400]]![[Pasted image 20241226170031.png|400]]![[Pasted image 20241226170456.png|400]]

![[Pasted image 20241226170248.png|400]]

### Prise de recul
Eléments identifiés par IA:
#### **1. Validité des modèles**

- Modèle linéaire (mOUP) simplifie des dynamiques cérébrales complexes.
- Hypothèse de normalité des distributions (inputs/outputs) pourrait être biaisée.
#### **2. Limites des données**

- Échantillon petit (19 enfants) et déséquilibré (sexe, taille).
- Enregistrements [[magnetoencephalographic|MEG]] courts (30-60 s), pas assez pour des fluctuations longues.
#### **3. Interprétation**

- Difficulté à distinguer inputs internes (sous-corticaux) et externes ([[sensorialité|sensoriels]]).
- Divergence [[Kullback-Leibler divergence|KLD]] abstraite, nécessite des hypothèses pour relier aux comportements.
#### **4. Méthodes**

- Artefacts [[magnetoencephalographic|MEG]] (mouvements/muscles) possibles malgré correction.
- Analyse limitée au niveau des capteurs, pas des sources anatomiques.
#### **5. Contexte et alternatives**

- Comparaison avec d’autres techniques (IRMf, EEG) absente.
- Étudier des tâches actives compléterait l’analyse au repos.
#### **6. Reproductibilité et biais**

- Nécessité de répliquer avec des échantillons plus grands et diversifiés.
- Connexion hypothétique entre [[Kullback-Leibler divergence|KLD]] et comportements (retrait [[social]]).
#### **7. Perspectives**

- Approches multimodales ([[magnetoencephalographic|MEG]] + IRMf/EEG).
- Études longitudinales pour suivre l’évolution ou l’impact des interventions.

## Refs
- Velázquez, J. L., & Galán, R. F. (2013). Information gain in the brain's resting state: A new perspective on autism. Frontiers in Neuroinformatics, 7, 1–10. http://dx.doi.org/10.3389/fninf.2013.00037.

