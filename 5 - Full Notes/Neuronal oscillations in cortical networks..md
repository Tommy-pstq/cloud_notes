2024-10-24 18:07

Status: [[Closed]]

Tags: [[Oscillation neuronale]] [[réseaux corticaux]] [[EEG]] 

# Neuronal oscillations in cortical networks.

### Intro
Début de l'EEG:
Sclap EEG en phase d'éveil montrent des variation de faible amplitudes & désynchronisées. Apparemment antithétique  d'avoir des perturbations des rythmes du cerveau, surtout que ces oscillations étaient encore plus importantes dans le cas d'anesthésies ou d'épisodes épileptiques. Il était donc supposé que ces perturbations n'étaient pas nécessairement liées à des opérations cognitives.
"Recent" (dans le texte, paru en 2004) résurgence d'intérêt pour ces oscillations due à des avancées parallèles :
- Possibilité de les reproduire
- Etudes [[biophysique]]s : même des neurones uniques font preuve de grande variations de dynamiques et peuvent oscillés et résonner à différentes fréquences, suggérant ainsi que le timing précis de leur activité au sein d'un réseau serait porteur d'information.
* Découverte que des assemblages de structures corrélées aux activité de la journée précédente s'activent en fonctions des pattern d'oscillations. Conjecture : utilité dans la mémorisation.

-> L'activité synchrones des réseaux oscillants désormais perçue comme le lien critique liant l'activité de neurones unitaires pour générer des comportements.
-> [[neuronal oscillation]] nouveau domaine de recherche interdisciplinaire.

### Un système d'oscillateurs cérébraux

![[Pasted image 20241025173959.png]] ![[Pasted image 20241025174019.png]] 

Bandes de fréquence **voisines** dans un même réseau neuronal = marqueurs d'états mentaux différents, sont exclusives ("compete with each other"). Cependant, différents rythmes peuvent êtres observés en même temps et interagir entre eux intra & inter-structures.

Densité de puissance des signaux EEG = F(1/f)
--> basses fréquences modules les hautes fréquences. 
<-- résultat de l'architecture des réseaux neuronaux, de la vitesse de communication limitée ainsi que de la conduction synaptique (2004, à moduler post lecture de papiers sur l'importance (potentiellement surévalué) des constantes de temps).

Localité des connexion neuronale --> période des oscillations possible limitée par la taille du réseau impliqué --> oscillations hautes fréquences limités à des réseaux spatialement limités, alors que les basses fréquences impliquent des réseaux plus étendus.

### Synchronisation d'assemblage via oscillations

l'intégration d'information repose sur la [[synchronicité]] , dépendante de la [[fenêtre d'intégration temporelle]].

Bien que des signaux externes irréguliers puissant (libération dopa/flash lumineux/bruit intense/commande motrice) puisse engendrer l'activation synchrone de réseaux (=synchrony), le mécanisme physique le plus énergétiquement efficace de générer une telle coordination temporelle est l'utilisation des oscillations (1,2).

Les oscillateurs cérébraux présentent des caractéristiques propres aux oscillateurs harmoniques et de relaxation (=deux états d'équilibre instable).

Ex: oscillations theta dans l'hippocampe ressemblent aux variations sinusoïdales d'un oscillateur harmonique.

**Gros avantage**: le comportement à long terme peut être prédit à partir d'une courte observation de leur phase. 
**Problème**: Des groupe d'oscillateurs harmoniques montrent une faible capacité à synchroniser leur phases (ils sont indep, donc même si très petite différence de phase --> [[phase drift]])

En revanche, ces oscillations macros (theta) sont issues de neurones, dont les patterns d'activation ressemble quant à eux à des oscillateurs de relaxation. Ces derniers présentent une excitabilité dépendante de leur phase, permettant la définition d'une phase de transfert et d'une phase de réception tout en offrant une synchronisation robuste et stable.

### Fonctions des oscillateurs cérébraux

Les bénéfices spécifiques liés à chacun de ces deux types d'oscillateur dépend du système neuronal qui le supporte. On peut cependant définir des principes généraux.
#### Input selection & [[plasticité]] 

Input puissant -> réponse des neurones & réseaux par des oscillations transitoires.
- [[Membrane neuronal]] : conductance et capacitance de fuite --> filtre passe bas. 
- Courants dirigés par un seuil de tension, dont la l'activation est proche du potentiel au repos de la membrane --> filtre passe haut. Permet au neurone de répondre à des arrivés rapides de signaux proches.
--> **passe bas & passe haut : résonateurs, coupe bande, oscillateurs à seuil réduit, passe bande**.  
Comportement de résonance, permet la sélection d'input à partir de leur caractéristique fréquentielle. Changement de potentiel/conductance de la membre = changement de fréquence de préférence. 
[[Interneurone]]s corticaux: capacité à modifier leur fréquence et modifient ainsi la dynamique de leur réseau. Ex: [[cellule pyramidale]] dont les décharges haute fréquence entraine les basket cells (cellules de Purkinje) en résonnance, supprimant ainsi l'activité des autres cellules pyramidales avoisinante. 

Résonateurs/oscillateur à seuil réduit: détection & amplification de signaux faibles. Ex: cortical feedback jusqu'au [[thalamus]] --> amplification des oscillations thalamo-corticale. 

De manière générale: Les oscillations des réseaux permettent la mise en place de "[[fenêtre d'opportunité]]", en abaissant le voltage nécessaire à la perception d'un signal en modifiant le potentiel de la membrane cellulaire. un input bien timé nécessite donc une énergie plus faible pour entrainer une réponse --> [[efficacité énergétique]]. 
Ex : Dans l'[[hippocampe]], les spike d'activité en phase avec les [[oscillations theta]] entraine une potentialisation à long terme [[LTP]] (via activité [[NMDA]] ?) alors qu'une activation en décalage de phase amoindri des inputs renforcés préalablement (3). 
De manière analogue, des signaux déphasés peuvent supprimé les oscillations d'un réseau, comme c'est le cas dans l'hippocampe, lorsque que [[gyrus denté]] décharge en déphasage des [[oscillations gamma]]  présentent dans l'hippocampe, les annulant. 

#### Liaison des [[assemblage]]s cellulaires

Il semblerait que l'information soit traitée/transférée/stockée par des [[assemblage]]s dynamique de cellules, synchronisés par des connections dynamique. 
- Le mécanisme induisant de telles coalition temporaires est encore inconnu (papier = 2004). 
- Un mécanisme possible serait un changement dynamique de la puissance synaptique entre assemblages. Cependant, un tel procédé serait très énergivore. 
- Un autre processus serait la [[synchronisation oscillatoire]] (4), bien plus énergétiquement efficace. La synchronisation dépend de la force de couplage et la distribution de fréquences propres entre les assemblages.
	Tant que les fréquences des oscillateurs couplés demeurent similaires, la [[synchronicité]] peut être assurée même avec des liens synaptiques faibles.  Par conséquent, cette propriété des oscillations permets à des groupes neuronaux distant, reliés par des liens synaptiques éparses d'être temporellement reliés 
--> Par exemple, un stimulus visuel peut être traité de plusieurs manières par des assemblages distinct dans des régions corticales différentes mais reliés par des oscillation à fréquence gamma. Les décharges conditionnées par la phase de ces oscillations permettrait la constitution d'un concept cognitif cohérent à partir des variables générées par les différent assemblages (5). Plusieurs expérimentation confirment ce "lien-gamma".
#### Consolidation et combinaison des informations apprises

Les oscillations sont une caractéristique intrinsèque des systèmes à l'équilibre et sont définies par les constantes de temps de leur composant.
- Des réseaux construits à partir de cellules pyramidale sans oscillations (reproduction d'un réseau [[feed-forward]] in vitro à partir d'une slice de cortex de rat) produisent spontanément et maintiennent des oscillations (6). 
- Le pattern d'activité neuronale dépend non seulement de son architecture précise mais aussi de ses conditions initiales, et, en l'absence de perturbation, la séquence d'activité neuronale se répète indéfiniment dans un système sans bruit. 
--> les conditions générant un rythme sont "gelées" dans la nature déterministe de la dynamique oscillatoire. (affirmation puissante, à vérifier à l'avenir)

- Etat par défaut du cerveau endormis = système complexe présentant une association complexe d'oscillation auto-générées. - particulièrement dans le système [[système thalamo-cortical]] -
- Ces oscillations contiennent des spikes représentant les activités effectuées plus tôt dans la journée.
--> Replay durant le sommeil, consolidation des modifications structurales des synapses.

- (7) : Le sommeil permet la restructuration de nouvelle représentations mémorielles, facilitant l'abstraction de connaissances explicites. 

#### Représentation par information de phase

Le [[spiking]] des neurones dans un système oscillant est sous l'influence de (8):

*  Input externes - un input faible entrainera un input tardif par rapport à un input puissant entrainent une dépolarisation plus forte, rapprochant plus fortement le [[potentiel membranaire]] de son seuil et donc une activation en avance de phase. 

- Dynamique interne du réseau - Couplage rythmique d'[[inhibition]] somatique (frein) et [[dépolarisation]] dendritique (accel.)

Si l'oscillation d'inhibition somatique est stable mais que la dépolarisation dendritique augmente, le seuil d'activation sera atteint plus tôt lors des cycles d'inhibition.

--> Input important = spike tôt - propriété universelle des système oscillants.

Avance de phase croissant (phase-shift) des potentiels d'action élevé peut être exploité pour du stockage d'information à cours terme (9).

Exemple de la première expérimentation permettant de conclure sur l'utilisation de la phase comme vecteur d'information:
- Mesure de l'activité d'une cellule pyramidale ([[Place cells]]) dans l'hippocampe d'un rat:
	- Déplacement du timing des spikes de cette cellule, plus le rat se rapproche de la zone activant cette cellule, plus elle s'exprime dans un creux de l'onde Theta.
				- ![[Pasted image 20241029113942.png]]

--> La position future des places fields peut être prédite ) partir d'une seule séquence de spiking dans un cycle theta.


## Refs
Base article: 
- Neuronal oscillations in cortical networks. Buzsáki, G. & Draguhn, A.  Science 304, 1926–1929 (2004) DOI:10.1126/science.1099745

1. R. E. Mirollo, S. H. Strogatz, SIAM J. Appl. Math. 50, 1645 (1990).
2. A. Winfree, The Geometry of Biological Time (Spring-er-Verlag, New York, 1980).
3. P. T. Huerta, J. E. Lisman, Neuron 15, 1053 (1995).
4. A. K. Engel, P. Fries, W. Singer, Nature Rev. Neurosci. 2, 704 (2001).
5. C. M. Gray, P. Ko¨nig, A. K. Engel, W. Singer, Nature 338, 334 (1989).
6. A. D. Reyes, Nature Neurosci. 6, 593 (2003).
7. U. Wagner, S. Gais, H. Haider, R. Verleger, J. Born, Nature 427, 352 (2004).
8. K. D. Harris, J. Csicsvari, H. Hirase, G. Dragoi, G. Buzsa´ki, Nature 424, 552 (2003).
9. J. E. Lisman, M. A. Idiart, Science 267, 1512 (1995).