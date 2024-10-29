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
- Générer de manière autonome des séquences d'[[assemblage]] de cellules temporellement évolutives.
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

En outre : plusieurs [[expérimentations]]  (8 - d'autres dans l'article) démontrent que, chez plusieurs espèces, le rappel mnésique est associé à des activations de patterns uniques dans le système hippocampo-entorhinal. Chez l'humain, une activation **spécifique & sélective**  du dit système est observée lors de l'évocation de mots/objets/individus précis, indépendemment de leur caractéristiques physique/visuelles (9).  

La mémoire sémantique peut être vue comme une mise en relation de représentations uniques de différents items, comme une tâche de classification assigne une partition d'un espace latent à un concept. l'architecture et le fonctionnement du système hippocampo-entorhinal permet et est optimisé pour générer de telles représentations (grid cells) et leur assignation à un concept (place cells), que ce soit les mesures de distances associés à un environnement précis, ou le concept d'amitié associé à sa notion.

### Navigation Egocentrique & mémoire épisodique

Travaux récents : superposition conséquente entre les réseaux cérébraux responsable de la navigation, de l'effort mémoriel dirigé vers le passé ou les suppositions pour le futur (10,11). 

Propriétés de la mémoire épisode:
- Relier des éléments disparates & arbitraires en un narratif cohérent
- Récupération/accès aux expérience vécues et leur contexte spatio-temporel
- Un indice unique peut déclencher la recollection d'une suite plus longue d'événement
- Revivre le passé est perçu comme un processus continu alors qu'il s'agit d'un assemblage de courts segments
	- --> Forte coopération entre les mécanismes et structures utilisées dans la mémoire déclarative à long terme et la mémoire de travail pour simuler cette impression de continuité.
#### Rappel épisodique via génération interne de séquences d'assemblage de cellules  
Q: Comment le cerveau génère et stock des séquence ? 
Hypothèse: Les mécanismes de représentation d'un chemin à travers un environnement est similaire à ceux permettant la représentation d'une séquence mémorielle. 
![[Pasted image 20241023162634.png]]
	*Activation neuronale (normalisée) durant un parcours linéaire*

De la même manière que les neurones s'activent successivement en fonction de la position de l'animal le long d'un chemin linéaire, les souvenirs épisodiques sont également rappelés sous forme de séquences d'éléments qui suivent un ordre précis. Dans les deux cas, qu'il s'agisse de la navigation spatiale ou du rappel de souvenirs, le cerveau traite l'information de manière unidimensionnelle, c'est-à-dire en activant les neurones dans une séquence ordonnée. Cette séquence reflète soit un parcours dans l'espace, soit une succession d'événements dans le temps.

--> Des mécanismes similaires peuvent être utilisés pour effectuer l'[[intégration temporelle]] de différentes positions ou d'épisodes mémoriels.

Le caractère associatif unidirectionnel de l'association d'éléments dans la mémoire épisodique, similaire à l'association de places cells (12) explique deux points important du rappel volontaire:
- Son asymétrie: les associations dans le sens "direct" sont plus fortes que dans le sens "contraire"
- La contiguïté temporelle: Le rappel d'un élément est facilité par des informations temporellement proche de celui-ci. 
Cependant, un élément clé diffère: le système de navigation se base sur des éléments externes ou informations internes, le "voyage simulé" doit, quant à lui, se baser sur des séquences d'assemblage interne. Des neurones de l'hippocampe permettent également de prédire d'où vient un individu (rat) ou quels seront ses futurs choix de déplacement.
(13): l'hippocampe, notamment la zone [[CA3]] possède toutes les caractéristiques pour la génération interne de séquence. 

--> Deux mécanismes de génération de séquences d'assemblage:
	- Input externe (environnement, infos corporelles)
	- Génération spontanées --> supportent le "voyage interne"
Il existe probablement des interaction entre ces deux mécanismes.

#### Chunking de mémoires / chemins

Globalement : l'info, que ce soit un chemin complet ou un épisode, est découpée en [[chunk]] - avec des déclencheurs extérieurs dans le cadre de la navigation - plutôt que stockée comme que comme une représentation unique.
Double intérêt:
- Réduction des erreurs (drift, erreur neuronale, bruit)
- Facilité d'accéder à des infos simples.

En cas de situation complexe (ex: labyrinthe avec environnement similaire), l'information est chunkée de manière encore plus fine, pour permettre une représentation plus fine. Sachant que les grid cells ont un output différent selon la direction de l'individu, et que les place-cells activées dans une direction ne seront pas les mêmes que dans une autre, cela permet d'avoir des représentation différentes d'un environnement extérieur a priori très similaire. 

Le parallèle avec la mémoire épisodique est assez direct : on se souvient d'élément uniques, qui simulent un continuum (interaction [[mémoire de travail]] mentionnée plus haut). Une séparation fine de ces éléments permet une représentation plus précise de chacun d'eux, donc une mémorisation de plus de détail, moins d'interactions possible entre diff items. (espace latent extrêmement complex et haute dimension, donc pas de soucis d'avoir énormément d'élément distincts.)


### Organisation temporelle de l'exploration et mémoire épisodique

Rappel épisodique: 
- Fragments d'informations permettent la reconstruction d'épisodes bien plus long. ("predict" dans le texte, porte à confusion si l'on pense au caractère réellement prédictif de signaux prédisant une décision avant que celle-ci soit consciente)
* Orientation temporelle directe largement favorisée. 

Hypothèse des auteurs: ces deux caractéristiques du rappel mnésique s'expliquent par une organisation temporelle multi-échelle de séquences neuronales permises par les oscillations theta dans l'hippocampe.

### L'organisation temporelle multi-échelle des assemblages neuronaux
à lire avant de s'atteler à cette partie : Neuronal oscillations in cortical networks. Buzsáki, G. & Draguhn, A.  Science 304, 1926–1929 (2004) (c'est fait. )




## Refs
Article de base:
Memory, Navigation and theta rythm in the hippocampal-entorhinal system - Buszaki G., Moser E.,  Nature Neurosciences, 2013. DOI: [10.1038/nn.3304](https://doi.org/10.1038/nn.3304) 09-2024)

***Refs citées dans la note:***
1.  Scoville, W.B. & Milner, B. Loss of recent memory after bilateral hippocampal lesions. J. Neurol. Neurosurg. Psychiatry 20, 11–21 (1957).
2. Squire, L.R. Memory and the hippocampus: a synthesis from findings with rats, monkeys, and humans. Psychol. Rev. 99, 195–231 (1992). [[à check]]
3. McClelland, J.L., McNaughton, B.L. & O’Reilly, R.C. Why there are complementary learning systems in the hippocampus and neocortex: insights from the successes and failures of connectionist models of learning and memory. Psychol. Rev. 102, 419–457 (1995).
4. Nadel, L. & Moscovitch, M. Memory consolidation, retrograde amnesia and the hippocampal complex. Curr. Opin. Neurobiol. 7, 217–227 (1997).
5. Manns, J.R., Hopkins, R.O., Reed, J.M., Kitchener, E.G. & Squire, L.R. Recognition memory and the human hippocampus. Neuron 37, 171–180 (2003).
6. Fyhn, M., Hafting, T., Treves, A., Moser, M.B. & Moser, E.I. Hippocampal remapping and grid realignment in entorhinal cortex. Nature 446, 190–194 (2007).
7. Wilson, M.A. & McNaughton, B.L. Dynamics of the hippocampal ensemble code
for space. Science 261, 1055–1058 (1993).
8. Manns, J.R., Hopkins, R.O., Reed, J.M., Kitchener, E.G. & Squire, L.R. Recognition
memory and the human hippocampus. Neuron 37, 171–180 (2003).
9. Quiroga, R.Q., Reddy, L., Kreiman, G., Koch, C. & Fried, I. Invariant visual
representation by single neurons in the human brain. Nature 435, 1102–1107
(2005).
10. Buckner, R.L. & Carroll, D.C. Self-projection and the brain. Trends Cogn. Sci. 11,
49–57 (2007). [[à check]] 
11.  Burgess, N., Maguire, E.A. & O’Keefe, J. The human hippocampus and spatial
and episodic memory. Neuron 35, 625–641 (2002).
12. Lisman, J.E. Relating hippocampal circuitry to function: recall of memory sequences
by reciprocal dentate-CA3 interactions. Neuron 22, 233–242 (1999).
13. Internally generated cell assembly sequences in the rat hippocampus. Pastalkova, E., Itskov, V., Amarasingham, A. & Buzsáki, G.  Science 321, 1322–1327 (2008). 10-2024
