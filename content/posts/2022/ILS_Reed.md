---
title: "Interrupteur à lames souples"
date: 2022-12-30T17:58:40+01:00
categories: 
- Electricité
tags:
  - Composants
draft: false
description: Interrupteur à lames souples
preview: /images/ils/Ils.jpg
slug: ils
thumbnail: "/images/ils/Ils.jpg"
---

Un **interrupteur ILS (Interrupeur à Lames Souples)** est constitué de deux lames en matériau magnétique scellées à l' intérieur d'un tube de verre contenant un gaz neutre.  <!--more--> Les lames sont disposées avec un léger recouvrement au niveau des contacts à l'intérieur du verre, espacées de quelques centièmes de millimètre entre elles (entrefer).

{{< figure src="/images/ils/Ils.jpg" alt="Interrupteur ILS" width="250px" class="follow">}}


{{< figure src="/images/ils/IlsConstitution.jpg" alt="Constitution" width="400px" class="follow">}}



###### __Fonctionnement :__

{{< figure src="/images/ils/IlsChamp.png" alt="" width="600px" class="follow">}}

{{< figure src="/images/ils/Reed-relais-ani.gif" alt="" width="300px" class="follow">}}

Lorsque l'interrupteur est placé dans un **champ magnétique**, les lames s'aimantent par influence et s'attirent mutuellement jusqu'au contact. La suppression du champ magnétique provoque la séparation des lames.

---

###### __Utilisation :__

{{< figure src="/images/ils/IlsVerin.png" alt="" width="400px" class="follow">}}

On trouve le plus souvent les capteurs magnétiques comme capteurs de position sur les vérins. Ils se montent directement sur le vérin et détectent la position du piston qui doit être muni d’un aimant.

###### __Symbolisation :__

{{< figure src="/images/ils/IlsSymbole.jpg" alt="Symbole ILS" width="400px" class="follow">}}

###### __Forme des contacts :__

Par construction il existe deux types de formes de contacts:
- Les contacts normalement ouverts (forme A ou NO)
- Les contacts inverseurs (forme C)
{{< figure src="/images/ils/IlsContactC.jpg" alt="Contacts inverseurs" width="400px" class="follow">}}

- Contact normalement fermé (forme B)
Ce type de contact est obtenu par l'utilisation d'un aimant permanent placé contre un interrupteur forme A.

{{< figure src="/images/ils/IlsContactB.jpg" alt="Contacts inverseurs" width="400px" class="follow">}}

###### __Pouvoir de coupure :__

Le pouvoir de coupure d'un interrupteur est lié à sa dimension et à sa technologie de fabrication. Il est caractérisé par sa puissance maximale commutable exprimée en watt (W) ou volt/ampère (VA), sa tension maximale commutable et son intensité maximale commutable.

{{% hint danger %}}
- Compte tenu de la puissance maximale commutable de 18VA, l'intensité de 400 mA ne sera pas commutée au delà de 45 volts. De même, avec 200 Volts on limitera l'intensité à 90 mA.

- Ne pas commuter un contacteur sans diode de roue libre ou filtre RC *(protection surtension)*
{{% /hint %}}

