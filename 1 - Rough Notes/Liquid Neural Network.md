2024-11-04 12:16

Status:

Tags: [[intelligence artificielle]] [[neurone]] [[attention]] [[circuit neuronaux]] [[constante de temps]]

# Liquid Neural Network

- Objectif : se rapprocher des systèmes naturels au dépend du côté algorithmique.
	- Neurone flexible
	(Finalement, j'vais prendre des notes à partir de la vidéo.)

- Need more **new** ideas, otherwise results will becomre more & more incremental. 
- LNN : more compact, explainable, sustainable. 

### Fundamental differences btwn brains & NN

- Reprensentation learning capacity
- Understand the world, capture causality
	- --> Easily go out of distribution 
* Robustness & flexibility
* Efficiency 

Ex : Autonomous car, trained CCN pays attention to the side of the road instead of the road itself to compute its stearing angle. whereas humans look at the road and slightly around. (attention map displayed on video)
			- If noise added : attention map becomes trash.

#### How to use neuroscience to improve AI ?

Study:
* Neural circuits
*  Neurons & synapses 

--> **Liquid Networks**
		- Expressivity ++
		- Memory capable
		- Causality ++
		- Robust + 
		- Extrapolation 

Ex : Autonomous car : the attention map is now mainly centered on the road. More causal.

#### Building blocks' differences

![[Pasted image 20241104144349.png]]

Common ground between neurosciences & machine learning :
	**Continuous time/depth neural network** = Neural [[ODE]]

![[Pasted image 20241104144610.png]]
Depth dimension = continuous 

Advantages:
1. Explorable space to generate function is wider 
2. Arbitrary timestep
	1. depth is variable 

### How to implement ?

#### How to train ? 

![[Pasted image 20241104145511.png]]

Backward pass ? 
Adjoint state method. 
![[Pasted image 20241104150015.png]]
1) Compute loss function using data & ODE solver 
2) Adjoint method : create new state. 
	- connect the dynamic of the loss to the state of the system
	- run ODE backward to get gradient of the loss in respect of the system, and in the system in respect to the parameters. 


Backprop through time
![[Pasted image 20241104150615.png]]
Way more complex, but more accurate. 

--> in real world, a simple LSTM generalize better.

#### How to improve Neural ODE ? --> Liquid Time-Constant Networks 

![[Pasted image 20241104151224.png]]

Non-linearity is moved to synapses instead of neuron themself. 
x(t) serve as memory, if set to 0, the output is purely inputs dependants -> linear system. 

![[Pasted image 20241104151514.png]]

Non-fixed dynamics:
![[Pasted image 20241104151717.png]]
y-axis = steering angle (blue = right, yellow = left), x-axis = time constant.
--> faster dynamics when steering angle increase : associate its timing behavior.


LTC : have stable state & time constant.

- Theorem1 : Time-constant of each neuron is bouded:
	* $\tau$_i / (1+$\tau$_iW_i) <= $\tau$_sys <= $\tau$_i 
- Theorem 2: state of each LTC neuron is bounded. each synapse has a bias 'A', max(A) = max of the state. 
- Theorem 3: Universal approximators. 

#### Expressivity 

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

- Complexity depends on ODE solver's complexity
	- Long training and test time for larger networks. 
## Refs
- https://www.youtube.com/watch?v=IlliqYiRhMU&