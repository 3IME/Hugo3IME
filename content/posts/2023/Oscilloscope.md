---
title: "Oscilloscope"
date: 2023-01-22T15:29:26+01:00
categories:
  - Electricité
  - Electronique
tags:
  - Métrologie
draft: false
description: Utilisation d'un oscilloscope
preview: /images/oscilloscope/Oscilloscope.png
slug: Oscilloscope
thumbnail: "/images/oscilloscope/Oscilloscope.png"
---

Un oscilloscope est un instrument utilisé afin de visualiser soit des tensions électriques, soit d’autres grandeurs physiques (pince ampèremétrique par exemple) préalablement transformées en tension au moyen d’un convertisseur adapté.<!--more-->

L’oscilloscope affiche une courbe de rendu appelée oscillogramme.

{{< figure src="/images/oscilloscope/Oscillogramme.png" alt="Oscillogramme d'une tension alternative" width="600px" class="follow">}}

Cette courbe trace la tension **u(t)** relevée en fonction du temps. L’expérimentateur peut visualiser cette courbe, en temps réel, sur l’écran.

Tout d’abord, comme le multimètre, on distingue les oscilloscopes analogiques des numériques.

###### __Oscilloscope analogique :__

L’oscilloscope analogique utilisent directement un multiple de la tension d’entrée pour *produire la déviation du spot*.

{{% hint info %}}
Le spot est une tache lumineuse affichée au centre de l’oscilloscope. Voici une représentation de celui-ci :
{{% /hint %}}

{{< figure src="/images/oscilloscope/spot.jpg" alt="Le spot" width="600px" class="follow">}}

L’oscilloscope analogique ne permet généralement que l’observation de tensions périodiques. Le signal à mesurer est visualisé sur un tube cathodique généralement vert. Voici un exemple d’oscilloscope analogique :

{{< figure src="/images/oscilloscope/oscilloscope ana.jpg" alt="Oscilloscope analogique" width="600px" class="follow">}}

###### __Oscilloscope numérique :__

Contrairement à l’oscilloscope analogique, l’oscilloscope numérique, comme son nom l’indique, numérise via un convertisseur analogique-numérique (CAN) le signal à visualiser. Pour faire simple, **il convertit la tension d’entrée en nombre**. 

Voici un exemple d’oscilloscope numérique :

{{< figure src="/images/oscilloscope/oscilloscope num.png" alt="Oscilloscope numérique" width="600px" class="follow">}}

**Remarque :** Visualiser les grandeurs physiques sur des écrans à cristaux liquides, rend ces appareils faciles à déplacer et beaucoup moins gourmands en énergie.

###### __Présentation de l’appareil :__

Qu’il soit analogique ou numérique, l’oscilloscope est équipé d’un écran sur lequel s’affiche la forme de la tension envoyée sur son entrée. La plupart des oscilloscopes sont équipés de deux à quatre entrées (voies) qui permettent de visualiser simultanément deux à quatre tensions. 

Les différentes voies sur l’oscilloscope numérique précédent sont encadrées en **rouge** :

{{< figure src="/images/oscilloscope/oscilloscope voies.png" alt="Les voies de l'oscilloscope (rouge)" width="600px" class="follow">}}

Chaque voie de l’oscilloscope est communément connectée à un connecteur BNC (Bayonet NeillConcelman) comme ci-dessous:

{{< figure src="/images/oscilloscope/bnc.png" alt="Connecteur BNC" width="600px" class="follow">}}

{{% hint danger %}}
**Remarque :** Lors d’une utilisation simultanée de plusieurs entrées, il est nécessaire d’être très attentif au raccordement. En effet, les bornes noires des entrées sont reliées en interne, elles sont appelées bornes communes ou masse, elles servent de potentiel de référence.
{{% /hint %}}

###### __Entrée différentielle :__

Pour palier le problème que l’on vient de remarquer précédemment, il est possible d’utiliser des oscilloscopes à entrées différentielles intégrées ou des **sondes différentielles**.

{{< figure src="/images/oscilloscope/sonde.png" alt="Sonde différentielle" width="600px" class="follow">}}

 Ces appareils ont pour but d’assurer **l’isolation galvanique** (avec des optocoupleurs par exemple) entre les différents potentiels de mesure sur le circuit et les potentiels de l’oscilloscope (entrée et masse).

 On pourra ainsi mesurer une tension et un courant, ou deux tensions avec une masse différente.

###### __Les principaux systèmes d’un oscilloscope :__
 
###### ___Le système vertical (Mesure de tensions)___

Le système vertical, situé en ***ordonné***, permet d’ajuster ***l’échelle du potentiel*** (tension) du signal mesuré. Il est composé d’un certain nombre de divisions auxquelles on appose une valeur de potentiel. Voici un exemple :

{{< figure src="/images/oscilloscope/vertical.png" alt="Mesure de tensions" width="600px" class="follow">}}

Ici, l’écran de l’oscilloscope comporte huit divisions verticales et chacune équivaut à un volt, on pourra au maximum mesurer un signal crête-crête de huit volts et on dira que l’échelle verticale est ajustée à un volt par division. En augmentant l’échelle verticale (tourner molette vers la gauche), on augmente le nombre de volt par division.

{{< figure src="/images/oscilloscope/vertical bouton.png" alt="Bouton de réglage de la sensibilité verticale" width="350px" class="follow">}}

###### ___Le système horizontal (Mesure de la période)___

Le système horizontal, quant à lui est situé en ***abscisse*** et permet d’ajuster ***l’échelle de temps*** de la visualisation du signal mesuré. Comme le système vertical, il se compose d’un certain nombre de division auxquelles on appose une valeur de durée. Prenons le même exemple, pris plus haut :

{{< figure src="/images/oscilloscope/horizontal.png" alt="Mesure de la période de temps" width="600px" class="follow">}}

Ici, l’écran de l’oscilloscope comporte dix divisions horizontales et chacune équivaut à une milliseconde, on visualisera dix millisecondes du signal.

En diminuant l’échelle horizontale (tourner molette à droite), on diminue l’échelle du temps par division (comme sur l’illustration précédente) sans modifier l’échelle de l’axe vertical. De la même manière si l’on effectue l’action inverse.

{{< figure src="/images/oscilloscope/horizontal bouton.png" alt="Bouton de réglage de la sensibilité horizontale" width="350px" class="follow">}}

###### __Essais (cliquez sur "here") :__

<p class="codepen" data-height="900" data-slug-hash="KzPwrK" data-user="nitnelav" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nitnelav/pen/KzPwrK">
  The Oscilloscope</a> by Valentin (<a href="https://codepen.io/nitnelav">@nitnelav</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

{{< line_break >}}

###### __Vidéo utilisation d'un oscilloscope analogique :__

{{< youtube 0vba5r_h6fA >}}

###### __Vidéo utilisation d'un oscilloscope numérique :__

{{< youtube ojkZfKH0fC0 >}}





