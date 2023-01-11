---
title: "Les résistances en électronique"
date: 2022-12-29T14:53:35+01:00
categories:
  - Electronique
tags:
  - Composants
draft: false
description: Les résistances en électronique
preview: /images/resistances/Resistance.png
slug: Resistance
thumbnail: "/images/resistances/Resistance.png"
---

Une **résistance** *(dit aussi « résisteur » ou « résistor » pour ne pas utiliser le même terme pour l’objet et sa caractéristique)* est un composant électronique ou électrique passif dont la principale caractéristique est d'opposer une plus ou moins grande résistance à la circulation du courant électrique. <!--more--> 

La résistance est **mesurée en ohms**, dont l'unité est symbolisée par la lettre **grecque oméga (Ω)**.

###### __Symbole et notation :__
Une résistance est généralement représentée par le symbole suivant :

{{< figure src="/images/resistances/ResistanceSymbole_IEC.png" alt="Symbole de la résistance (norme IEC)" width="300px" class="follow">}}

On utilise parfois les lettres R, K et M dans la notation des valeurs des résistances, placés à la place de la décimale :

R = ohms ; K = kiloohms ; M = mégaohms.

Ainsi par exemple : 100R = 100 ohms ; 2K2 = 2,2 kiloohms ; 1M2 = 1,2 mégaohms.

###### __Technologies :__

Différents types de résistances

+ Résistances agglomérés

De la poudre de carbone est mélangée à un isolant et à un liant. Le tout est aggloméré et moulé en tube. Ces résistances sont maintenant remplacés par des résistances à couches.
{{< figure src="/images/resistances/ResistanceAgglo.png" alt="Résistance agglomérée"  width="200px" class="follow">}} 


+ Résistances à couche de carbone

A chaud et sous atmosphère d'hydrocarbure et d'argon, une couche de carbone est déposée sur de petits barreaux isolants. On fixe des bagues de connexion aux extrémités et on ajuste la résistance à la valeurs désirée en creusant la couche de carbone en forme d'hélice.
{{< figure src="/images/resistances/ResistanceCoucheCarbone.png" alt="Résistance couche de carbone"  width="300px" class="follow">}} 

+ Résistances à couche métallique: 

Elles sont obtenues par un dépôt d'une couche fine (0,1mm) d'un alliage résistant sur un barreau isolant  en céramique ou en quartz.. 
{{< figure src="/images/resistances/ResistanceCoucheMetal.png" alt="Résistance couche métallique"  width="300px" class="follow">}} 

+ Résistances bobinés

Elles sont principalement utilisés pour les faibles valeurs de résistance et pour des puissances élevées. Il sont constitués d'un fil résistant (nichrome ou cupronickel)
{{< figure src="/images/resistances/ResistanceBobine.png" alt="Résistance bobiné"  width="300px" class="follow">}} 

###### __Repérage et valeurs normalisées :__

La valeur des résistances à couche standard est habituellement indiquée sur le composant sous forme d'anneaux de couleurs. Le code en est défini par la norme CEI 60757 .
{{< figure src="/images/resistances/ResistanceCode.png" alt="Code couleurs des résistances"  width="600px" class="follow">}} 

Phrases mnémotechniques pour se souvenir du code de ces couleurs :

**N**e **B**uvez **R**ien **O**u **J**e **V**ous **B**attrai **V**iolemment **G**rand **B**êta

Pour: **N**oir, **B**run, **R**ouge, **O**range, **J**aune, **V**ert, **B**leu, **V**iolet, **G**ris, **B**lanc


**Exemples :**

<iframe src="/html/code couleurs/index.html"  scrolling="no" width="650" height="640"></iframe>


Vidéo :
{{< youtube BPmf8vhQIS4>}}

###### __Série E de numéros préférés :__

La série E est un système de nombres préférés (également appelés valeurs préférées) dérivé pour une utilisation dans les composants électroniques .

Il se compose des séries E3 , E6 , E12 , E24 , E48 , E96 et E192.

Historiquement, la série E est divisée en deux grands groupes :

+ E3, E6, E12, E24 — E3, E6, E12 sont des sous- ensembles de E24. Les valeurs de ce groupe sont arrondies à 2 chiffres significatifs .
+ E48, E96, E192 – E48 et E96 sont des sous-ensembles de E192. Les valeurs de ce groupe sont arrondies à 3 chiffres significatifs.

E3 est maintenant obsolète.

**Exemples :**

Si un fabricant vendait des résistances avec toutes les valeurs dans une plage de 10 ohms à 10 mégaohms, les valeurs de résistance disponibles pour E3 à E12 seraient :

|E3 (en ohms)         |E6 (en ohms)           |E12 (en ohms)                                             |
|:---                 |:---                   |:---                                                      |
|10, 22, 47,          |10, 15, 22, 33, 47, 68,|10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82,           |
|100, 220, 470,|100, 150, 220, 330, 470, 680,|100, 120, 150, 180, 220, 270, 330, 390, 470, 560, 680, 820,|
|1 k, 2,2 k, 4,7 k,|1 k, 1,5 k, 2,2 k, 3,3 k, 4,7 k, 6,8 k,|1 k, 1,2 k, 1,5 k, 1,8 k, 2,2 k, 2,7 k, 3,3 k, 3,9 k, 4,7 k, 5,6 k, 6,8 k, 8,2 k,|
|10k, 22k, 47k,|10 000, 15 000, 22 000, 33 000, 47 000, 68 000,|10 k, 12 k, 15 k, 18 k, 22 k, 27 k, 33 k, 39 k, 47 k, 56 k, 68 k, 82 k, |
|100k, 220k, 470k,|100 k, 150 k, 220 k, 330 k, 470 k, 680 k,|100 k, 120 k, 150 k, 180 k, 220 k, 270 k, 330 k, 390 k, 470 k, 560 k, 680 k, 820 k,|
|1 million, 2,2 millions, 4,7 millions,|1 M, 1,5 M, 2,2 M, 3,3 M, 4,7 M, 6,8 M,|1 M, 1,2 M, 1,5 M, 1,8 M, 2,2 M, 2,7 M, 3,3 M, 3,9 M, 4,7 M, 5,6 M, 6,8 M, 8,2 M, |
|10M|10M|10M|
		
###### __Résistances CMS :__

Le composant monté en surface (CMS, SMD (surface mounted device) en anglais) désigne une technique de fabrication des cartes électroniques et, par extension un type de composants utilisés par l'industrie électronique. Cette technique consiste à braser les composants d'une carte à sa surface, plutôt que d'en faire passer les broches au travers.

{{< figure src="/images/resistances/CMS.png" alt="Composant monté en surface"  width="600px" class="follow">}} 

###### __Marquage des résistances CMS :__

Les résistances CMS sont marquées d'un code numérique de trois ou quatre chiffres.

Le plus simple est d'utiliser un calculateur :

https://www.digikey.fr/fr/resources/conversion-calculators/conversion-calculator-smd-resistor-code






