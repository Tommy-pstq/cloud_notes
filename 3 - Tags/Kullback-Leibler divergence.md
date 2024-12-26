---
aliases:
  - KLD
---
Aussi appelé : entropie relative.

Distance statistique mesurant à quel point un modèle de distribution statistique Q est différent d'une distribution de probabilité réelle P.

$$D_{KL}\left(P\Vert Q\right)=\sum_{x\in X}^{{}}P\left(x\right)\log\left(\frac{P\left(x\right)}{Q\left(x\right)}\right)$$
Pas véritablement une métrique:
- N'est pas symétrique 
- Ne respecte pas l'inégalité triangulaire
mais une mesure de divergence. 