---
title: "Tension, intensité et résistance"
date: 2023-01-01T10:57:00+01:00
categories: 
- Electricité
tags:
  - Théorie
draft: false
description: Tension, intensité et résistance
preview: /images/uir/OhmsLoiDessin.jpg
slug: uir
thumbnail: "/images/uir/OhmsLoiDessin.jpg"
---

Un courant électrique, c’est un déplacement d’électrons, des particules chargées négativement.

En ce qui concerne la qualification d’un courant électrique, les valeurs qui rentrent en jeu sont les suivantes :

- **La tension électrique**, mesurées en volts (symbole V) et notée U, décrit la quantité d’électricité. <!--more--> 
Exemple : 230 V (tension du courant électrique au secteur en France), 12 V.

- **L’intensité électrique**, mesurée en ampères (symbole A) et notée I, indique le mouvement de cette électricité.
Exemple : 100 A pour un démarreur automobile, 1 A pour une ampoule à incandescence, 500 mA pour une petite alimentation électrique.

- **La résistance** est quelque chose qui résiste au flux d'électrons, mesurée en ohms (symbole Ω) et notée R.

Tous les matériaux opposent une résistance au courant dans une certaine mesure. Ils se répartissent en deux catégories :

+ Conducteurs : matériaux qui offrent très peu de résistance et au travers desquels les électrons peuvent se déplacer facilement. Exemples : argent, cuivre, or et aluminium.
+ Isolants : matériaux qui opposent une résistance élevée et qui restreignent le flux des électrons. Exemples : caoutchouc, papier, verre, bois et plastique.

{{% hint info %}}
+ Plus la résistance est élevée, moins le courant circule. 
+ Plus la résistance est faible, plus le courant circule. 
{{% /hint %}}

###### __Loi d'Ohm :__

Cette loi se réfère au physicien allemand Georg Simon Ohm (1784-1854) qui a étudié la relation entre la tension, le courant et la résistance. Il a découvert la loi qui porte son nom, **la loi d'Ohm**.

{{< figure src="/images/uir/Georg_Simon_Ohm.jpg" alt="Georg Simon Ohm (1789–1854)" width="300px" class="follow">}}

{{% hint info %}}
On note :
+ U la tension aux bornes de la résistance
+ I l’intensité du courant qui circule à travers la résistance
+ R la valeur de la résistance
{{% /hint %}}

**Unités :**
Dans la loi d'Ohm, la tension est exprimée en volts (V), la résistance en ohms (Ω) et l’intensité en ampères (A).
 
$$\fcolorbox{red}{transparent}{$\LARGE{U = \textrm{R ∗ I } \rightarrow I = \frac U R \rightarrow R = \frac U I}$}$$

La relation entre le courant, la tension et la résistance s'appelle la loi d'Ohm.

Voici une belle illustration :

{{< figure src="/images/uir/OhmsLoiDessin.jpg" alt="Relation entre le courant, la tension et la résistance" width="400px" class="follow">}}

Regardez le dessin ci-dessus et voyez s'il est logique pour vous que :

- Si vous augmentez la tension (Volt) dans un circuit alors que la résistance est la même, vous obtenez plus de courant (Amp).
- Si vous augmentez la résistance (Ohm) dans un circuit alors que la tension reste la même, vous obtenez moins de courant.

Sur un circuit très conducteur, la résistance est proche de 0 Ω. Deux éléments qui ne sont pas en contact auront une résistance approchant l’infini.

Vidéo :
{{< youtube uDP-eph3Vzc>}}

###### __La tension :__
Vidéo :
{{< youtube imCJI3UUvO8>}}

{{% hint info %}}
N.B. : en raison de leur unité de mesure, la tension est parfois appelée « voltage » et l’intensité est parfois appelée « ampérage ». Ces termes ne sont pas officiels mais ils restent assez courants.
{{% /hint %}}

###### __Danger du courant sur le corps humain :__

Lorsqu’un courant traverse le corps humain (composé d’environ 75 % d’eau), celui-ci agit comme une résistance.

La résistance du corps humain, est variable selon :
- Les personnes,
- L’humidité de la peau,
- Et aussi le chemin qu’emprunte le courant dans le corps.

En moyenne, le corps humain présente une résistance de l’ordre de 3 à 5 kΩ.
D’après la formule de la loi d'Ohs, on voit donc qu’avec une tension de 12V, le corps sera traversé par une intensité de 2.5mA (non dangereux). Par contre avec une tension de 230V, on arrive à une intensité de 45mA qui peut être dangereuse.

Le courant qui traverse le corps humain est **dangereux** suivant son intensité :
- à 0,5 mA : c’est le seuil de **perception** : ça chatouille comme on dit
- à 10 mA : contractions musculaires, **seuil de non lâcher** : maximum 3-4 minutes
- à 30 mA : **seuil de la paralysie respiratoire** : maximum 20-30 secondes
-  à 75 mA : **seuil de fibrillation cardiaque irréversible** : maximum 2 à 5 secondes
- à 1000 mA : **arrêt cardiaque** : maximum 30 à 100 ms

À partir de combien de volts est-on électrocuté ?
{{% hint warning %}}
La réglementation définie une tension limite de sécurité de : 50 V en courant alternatif ; 120 V en courant continu.
{{% hint danger %}}
*En milieu sec*
{{% /hint%}}
{{% /hint %}}

###### __Courant alternatif et courant continu :__

Avant d’aller plus loin, abordons la notion d’**AC/DC**… il s’agit de la description de deux types de courant : **courant alternatif (AC ou CA) et courant continu (DC pour Direct Current, ou CC)**.

Cette notion de AC ou DC est généralement indiquée juste après la tension, pour indiquer ce qu’une alimentation délivre ou le type d’alimentation électrique dont un appareil à besoin : il y a par exemple un courant alternatif 230 VAC pour le courant
au secteur en sortie d’une prise électrique, et un courant continu de 12 VDC pour une alimentation d’un petit appareil.

- Dans un courant continu, les charges électriques ne vont que dans un seul sens, du [-] vers le [+], tandis que dans un courant alternatif, le sens des charges change très régulièrement.

- Un courant alternatif est donc défini par sa tension mais également par sa **fréquence**, à savoir le nombre de fois que les charges changent de sens.

Cette fréquence est de 50 Hz dans la plupart des pays, y compris la France, et de 60 Hz aux États-Unis. Vous constaterez sur la signalétique des alimentations la mention 50/60 Hz, indiquant qu’elles acceptent les deux fréquences.

{{< figure src="/images/uir/CourantACDC.jpg" alt="Courant continu et alternatif" width="400px" class="follow">}}

Vidéo :
{{< youtube LAReDwzwXtQ>}}

Calculateur :
<iframe src="/html/ohm/index.html"  scrolling="yes" width="774" height="550"></iframe>



