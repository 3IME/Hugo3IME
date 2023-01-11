---
title: "Le variateur pour moteur asynchrone triphasé"
date: 2022-12-26T21:04:53+01:00
categories:
  - Electricité
tags:
  - Moteur
draft: false
description: Le variateur pour moteur asynchrone triphasé
preview: /images/moteurs/Variateur.png
slug: Variateur
thumbnail: "/images/moteurs/Variateur.png"
katex: true
---

## Le variateur pour moteur asynchrone triphasé


Le variateur de tension est un appareillage électrique permettant de régler la vitesse d'un moteur électrique. <!--more-->  

{{< figure src="/images/moteurs/Variateur.png" alt="Variateur pour moteur asynchrone triphasé" width="150px" class="float_right">}}
Ce variateur de vitesse moteur triphasé va permettre de **contrôler l'accélération d'un moteur asynchrone, sa décélération et sa vitesse de rotation.**


{{< line_break >}}


{{% hint info %}}
On ne peut pas avoir des vitesses de rotations différentes sans variateur ?
{{% /hint %}}

Il est possible d'avoir différentes vitesses de rotation... Mais on ne pourra plus les changer quand le moteur sera construit.
{{< line_break >}}
###### __Explications :__

Un moteur asynchrone triphasé permet de mettre en rotation un objet.
**La vitesse de rotation** du moteur dépend directement de la **fréquence du réseau** ainsi que du **nombre de paires de pôles.**

{{< figure src="/images/moteurs/VarBobines.png" width="600px" class="follow">}}
{{< line_break >}}
                                   

|3 bobines       |6 bobines        |9 bobines |
|:---:           |:---:            |:---:     | 
|2 pôles         |4 pôles          |6 pôles   |
|1 Nord et 1 Sud |2 Nord et 2 Sud  |3 Nord et 3 Sud|


$$\fcolorbox{red}{transparent}{$\LARGE{Vitesse \lparen\frac {tr} s\rparen = \frac {fréquence \lparen Hz \rparen } {\textrm{Nb de paires de pôles}} - Glissement}$}$$

<div align="center">(Glissement ≈ 1 à 10%)</div>

###### __Exemple : Calcul de la vitesse de rotation :__ 
*En négligeant le glissement*

|Nombre de paire de pôles |V (tr/s)                    |V(tr/min)                         |
|:---                     |:---                        |:---                              |
|Avec 1 paire de pôles    |V (tr/s) = 50/1 = 50 tr/s   |V(tr/min) = 50x60 = 3000 tr/min   |
|Avec 2 paire de pôles    |V (tr/s) = 50/2 = 25 tr/s   |V(tr/min) = 25x60 = 1500 tr/min   |
|Avec 3 paire de pôles    |V (tr/s) = 50/3 = 16,66 tr/s|V(tr/min) = 16,6x60 = 1000 tr/min |
|Avec 4 paire de pôles    |V (tr/s) = 50/4 = 12,5 tr/s |V(tr/min) = 12,5x60 = 750 tr/min  |


$$\LARGE{V = \frac f p \space \Rightarrow \space }  \normalsize{\frac{\textrm{f : la  fréquence  est  fournie  par le réseau 50hz } } {\textrm{p : impossible à changer après fabrication}}}$$

{{% hint info %}}
Nous pouvons conclure qu’il est impossible de faire varier la vitesse de rotation de notre moteur après sa fabrication avec une fréquence réseau fixe (50Hz). &#128512;.
{{% hint info %}}
Il existe un composant qui se branche sur le réseau et qui fait varier la fréquence de sortie : **le variateur**...
{{% /hint %}}
{{% /hint %}}


###### __Principe de fonctionnement :__
{{< figure src="/images/moteurs/VarPrincipe.png" width="800px" class="follow">}}

**Le redresseur :** C’est un pont de diode monophasé (ou triphasé) permettant de redresser chaque tension.
{{< figure src="/images/moteurs/VarRedresseur.png" width="800px" class="follow">}}

**Le filtrage :** C’est un condensateur qui va permettre de lisser la tension.
{{< figure src="/images/moteurs/VarFiltre.png" width="800px" class="follow">}}

**Dernier étage l’onduleur :** C’est un ensemble électronique qui, à partir de la tension continue, va créer une tension quasi sinusoïdale.
{{< figure src="/images/moteurs/VarOnduleur.png" width="800px" class="follow">}}

Grâce à la **MLI (Modulation de Largeur d’Impulsion)** nous pouvons recréer un courant quasi sinusoïdal qui pourra piloter le moteur. En sortie du variateur nous obtenons **3 phases avec une fréquence différente de celle d’origine** que l’on peut régler.
{{% hint info %}}
Astuces :
- Le signal n’est pas propre et est parfois difficile à mesurer.
- Pour savoir si votre système est équipé d’un variateur de vitesse, il vous suffit d’écouter, il y a un sifflement caractéristique, ce sont les harmoniques qui peuvent créer des parasites dans le réseau.
- On règle le moteur d’après la plaque signalétique du moteur.
{{% /hint %}}
{{< line_break >}}
Vidéo :
{{< youtube -izSBjdqVZA >}}
