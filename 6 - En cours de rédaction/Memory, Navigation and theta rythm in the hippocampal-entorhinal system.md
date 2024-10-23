2024-10-17 12:19

Status: [[Open]]


Tags: [[mémoire]] [[navigation]] [[hippocampe]] [[Neurobiologie]] [[expérimentation animale]]


# Memory, Navigation and theta rythm in the hippocampal-entorhinal system


### Intro

Fonction de l'Hippocampe ? 
* Patient HM (lésion bilatérale de l'hippocampe suite chirurgie épilepsie) : amnésie antérograde.
* Chez les rats : activation en fonction de la position spatial.
-> Les deux ne semblent, a priori pas vraiment corrélés. 
Sauf si, hypothèse : **Les mécanismes de [[mémoire]] et [[planification]] ont évolués à partir des mécanismes de navigation et les bases & [[algorithmes neuronaux]] les supportant sont les mêmes.**

La navigation se base sur **2** méchanismes:
- "Map-based" ou [[allocentrique]] : utilisation de points de repères extérieurs fixes. "Prendre à l'Est"
- "Path-integration" ou [[égocentrique]]. Centré sur l'individu, le chemin à suivre est une suite d'action à effectuer du point de vue de l'individu. : 'Tourner à gauche'

Ex de composants égocentriques : la vitesse de déplacement, le temps écoulé depuis le départ, la direction de la tête et la position initiale. 

Ces deux mécanismes sont en permanence utilisés conjointement, en fonction de la disponibilité d'informations externes, l'un ou l'autre peut être favorisé. 

Expérimentalement : Les zones du cerveaux responsables du guidage de la navigation et de la [[mémoire déclarative]] (constituée des mémoires épisodique et sémantique) sont les mêmes : l'[[hippocampe]] et le [[cortex entorhinal]]   (1,2).

Les parallèles sont les suivants : 
- [[mémoire épisodique]] <--> navigation égocentrique
- [[mémoire sémantique]] <--> navigation allocentrique

La mémoire sémantique se forme à partir de la reproduction d'épisodes semblables, la connaissance s'abstrait du contexte. (généralisation hyper efficace // IA ?) <--> Contruction d'une carte mentale d'un environnement à force de le parcourir.

Pour qu'un système neuronal supporte la mémoire de manière efficace il est nécessaire qu'il puisse : 
- Stocker de grande quantité de données sous forme de représentations orthogonales (Dimensionalité ++)
- Générer de manière autonome des séquences d'assemblage de cellules temporellement évolutives.
Le système hippocampo-entorhinal offre ces propriétés anatomique & physiologique. 

### Cartes allocentriques & mémoire sémantique
*Section : évaluer et montrer que les mêmes bases neuronales peuvent servir pour la navigation allocentrique et l'établissement de liens en objet, événement et information factuelle, i.e la mémoire sémantique*

Consensus : la formation de mémoire déclarative se fait au niveau du complexe hippocampe-entorhinal. Le débat persiste quant à sa dépendance à l'hippocampe une fois consolidée (3, 4, 5 - faudra check ça).

Encodage des coordonnées spatiales implique beaucoup de cellules différentes avec des profil d'activité définis. Les deux les plus notables:
- "[[Place cells]]" dans l'hippocampe - Activation spécifique en fonction de l'environnement 
- ''[[Grid cells]]" dans le cortex entorhinal médian - Activité continue dans tous types d'environnement (ACTE). 

* Cortex entorhinal médian : "[[border cells]]", moins nombreuses (ACTE) : encode, via leur activation, les orientations géométriques précise des limites de l'environnement. participe à l'approximation des distances allocentriques + (peut-être) mise à l'échelle des grid size selon la surface de l'environnement. 

**Grid cells** :
	- Map la totalité de l'espace entourant l'individu, avec des patterns haxegonal périodique et fourni une métrique pour la représentation neuronale de l'espace.
			- Les couches profondes sont sensibles à   certains axes directionnels
			- Connectés avec les [[head direction cells]] (ACTE), qui elles s'activent selon la direction de la tête, avec un mapping uniforme sur 360.
	- Espacement croissant selon l'axe dorso-ventral : défini des patterns de plus en plus larges
	- Orientation des patterns discrétisée, pas aléatoire.
	![[Pasted image 20241021124038.png]] 
			*Grid cells organization along dorso-ventral axis*
	- Couches profondes : Souvent des préférences pour certaines directions. 

- Organisation "modulaire" des grid cells : chaque module encode l'environnement avec une **orientation** (alignement des patterns) et une **résolution spatiale** (espacement) **unique**. Il n'y a pas d'organisation hiérarchique entre modules, la même data de base est utilisé et encodée de manière différente, produisant des représentations orthogonales (sans overlap). --> Changement de représentation inter-module = indépendant, donc immense capacité de représentation. 

**Cortex Entorhinal** : dispose des infos de directions/distance/position & limites d'environnement et donc ==candidat idéal pour le calcul des métriques spatiales de l'environnement== (à lier : [[simplexité]] de calcul par géométrie euclidienne, semi-euclidienne et linéaire exposé dans Neuroscience cognitives @DeBoeck).

- Grid cells projettent leur représentation sur les place cells de l'hippocampe, la grande variabilité de ces projections permettrait l'encodage unique de chaque environnement --> pas d'interférences. 

**Hippocampe** : Capacité des place cells à créer des représentations uniques à partir des projections des grid cells (principalement dans le sous-champ [[CA3]] qui reçoit les projections combinées des grid modules). Même un changement mineur dans la configuration d'un paysage ou un contexte entraine un schéma de réponse des populations de cellules radicalement différent. 
Donc : ==capacité d'associer à chaque "élément"== (environnement ou contexte) ==une représentation unique== --> Parfait pour la mémoire. 

Système hippocampe + cortex entorhinal : ultra complexe. Bien trop complexe pour n'être issue d'un processus d'[[évolution]]  réservé à la navigation. Les insectes s'en sortent très bien avec quelques neurones uniquement. Chez les rats, pour une représentation d'environnements avec une précision de l'ordre du cm, quelques douzaines de grid/place cells (6,7) suffisent. Donc, supposition des auteurs du papier : *la capacité de représentation orthogonale et variée de l'environnement a été la base permettant le stockage des détails de chaque épisode de la vie d'un individu*

En outre : plusieurs [[expérimentations]]  (8 - d'autres dans l'article) démontrent que, chez plusieurs espèces, le rappel mnésique est associé à des activations de patterns uniques dans le système hippocampo-entorhinal. Chez l'humain, une activation sélective du-dit système est observée lors de l'évocation de mots/objets/individus précis, indépendemment de leur caractéristiques physique/visuelles (9).  

## Refs
Article de base:
Memory, Navigation and theta rythm in the hippocampal-entorhinal system - Buszaki G., Moser E.,  Nature Neurosciences, 2013. DOI: [10.1038/nn.3304](https://doi.org/10.1038/nn.3304) 09-2024)

***Refs citées dans la note:***
1 - Scoville, W.B. & Milner, B. Loss of recent memory after bilateral hippocampal lesions. J. Neurol. Neurosurg. Psychiatry 20, 11–21 (1957).
2 - Squire, L.R. Memory and the hippocampus: a synthesis from findings with rats, monkeys, and humans. Psychol. Rev. 99, 195–231 (1992). [[à check]]
3 - McClelland, J.L., McNaughton, B.L. & O’Reilly, R.C. Why there are complementary learning systems in the hippocampus and neocortex: insights from the successes and failures of connectionist models of learning and memory. Psychol. Rev. 102, 419–457 (1995).
4 - Nadel, L. & Moscovitch, M. Memory consolidation, retrograde amnesia and the hippocampal complex. Curr. Opin. Neurobiol. 7, 217–227 (1997).
5 - Manns, J.R., Hopkins, R.O., Reed, J.M., Kitchener, E.G. & Squire, L.R. Recognition memory and the human hippocampus. Neuron 37, 171–180 (2003).
6 - Fyhn, M., Hafting, T., Treves, A., Moser, M.B. & Moser, E.I. Hippocampal
remapping and grid realignment in entorhinal cortex. Nature 446, 190–194
(2007).
7 - Wilson, M.A. & McNaughton, B.L. Dynamics of the hippocampal ensemble code
for space. Science 261, 1055–1058 (1993).
8 - Manns, J.R., Hopkins, R.O., Reed, J.M., Kitchener, E.G. & Squire, L.R. Recognition
memory and the human hippocampus. Neuron 37, 171–180 (2003).
9 - Quiroga, R.Q., Reddy, L., Kreiman, G., Koch, C. & Fried, I. Invariant visual
representation by single neurons in the human brain. Nature 435, 1102–1107
(2005).