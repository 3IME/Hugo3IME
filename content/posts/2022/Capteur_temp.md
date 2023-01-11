---
title: "Les capteurs de température thermocouples et thermistances"
date: 2022-12-30T22:26:19+01:00
categories: 
- Electricité
tags:
  - Composants
draft: false
description: Les capteurs de température thermocouples et thermistances
preview: /images/temp/PT100.jpg
slug: temppt100
thumbnail: "/images/temp/PT100.jpg"
---

Ce type de capteur n’est pas du TOR *(Tout Ou Rien)*, il n’y a pas de contact qui s’ouvre ou se ferme mais un courant, une tension ou une résistance qui varient en fonction de la température. <!--more--> 

C'est de **l'analogique**

{{< figure src="/images/temp/TempAna.jpg" alt="Courbe analogique" width="400px" class="follow">}}

{{% hint info %}}
- Grandeur physique mesurée : température
- Image informationnelle : signal analogique
{{% /hint %}}

###### __Thermistance :__

Une thermistance est un composant électronique dont la résistance électrique varie en fonction de la température.

{{< figure src="/images/temp/Thermistance.jpg" alt="Thermistance" width="300px" class="follow">}}

**Symbole :**

{{< figure src="/images/temp/ThermistanceSymb.jpg" alt="Thermistance symbole" width="300px" class="follow">}}

**Classification :**

On distingue deux types de thermistances : les CTN et les CTP.

- Les CTN (Coefficient de Température Négatif, en anglais NTC, Negative Temperature Coefficient) sont des thermistances dont la résistance diminue, de façon relativement uniforme, quand la température augmente, et vice-versa.

- Les CTP (Coefficient de Température Positif, en anglais PTC, Positive Temperature Coefficient) sont des thermistances dont la résistance augmente avec la température. 

{{< figure src="/images/temp/CtnCtp.jpg" alt="Courbes d'une CTN et d'une CTP" width="500px" class="follow">}}

**Les PT100 :**

Les sondes PT100 ont une valeur ohmique qui varie proportionnellement à la température. Elles permettent de mesurer des températures de -100 à 400°C.

{{< figure src="/images/temp/PT100Fil.jpg" alt="PT100" width="400px" class="follow">}}

{{% hint info %}}
- Elle a une valeur de 100 Ohm à 0°C.
- La résistance augmente de 0,38 Ohm par degrés.
- t° max supportée par la sonde = +800°C
- t° min supportée par la sonde = -200°C
{{% /hint %}}

**Tracé ci-dessous la droite caractéristique de la sonde PT100 :**

{{< figure src="/images/temp/PT100Tracer.jpg" alt="Tracé d'une PT100" width="800px" class="follow">}}

Les sondes PT100 ont une valeur ohmique qui varie proportionnellement à la température. Elles permettent de mesurer des températures de -100 à 400°C.

Vidéo :
{{< youtube ed9INKvfwaA >}}

###### __Thermocouple :__

Un thermocouple est un **couple de matériaux** utilisé pour la mesure de la température.

{{< figure src="/images/temp/ThermocoupleFonc.jpg" alt="Fonctionnement d'un thermocouple" width="800px" class="follow">}}

Les thermocouples génèrent une tension qui varie en fonction de la température. Ils permettent de mesurer des températures allant jusqu’à 750°C (type J) ou 1100°C (type K).

Vidéo :
{{< youtube s3pUyHHDkyc >}}

###### __Utilisation :__

Les sondes PT100 et les thermocouples permettent de mesurer précisément la température. Ils doivent être reliés à un régulateur électronique de température.

###### __Montage :__

{{% hint warning %}}
- Les sondes PT100 sont sensibles aux longueurs de lignes et aux perturbations environnantes, elles doivent être raccordées aux régulateurs à l’aide de câbles blindés à 3 conducteurs.

- Les thermocouples doivent être raccordés par des câbles et des borniers compensés (de même type que le capteur) et suivant une polarité repérée par couleurs.

- Pour les sondes éloignées du régulateur de température, il est recommandé d’utiliser un transmetteur qui transforme le signal en 4-20mA.
{{% /hint %}}




