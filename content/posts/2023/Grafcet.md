---
title: "Le Grafcet"
date: 2023-04-08T20:09:42+02:00
categories:
  - Electricité
  - Automatisme
tags:
  - Théorie
draft: false
description: Le grafcet
preview: /images/grafcet/grafcet00.png
slug: Grafcet
thumbnail: "/images/grafcet/grafcet00.png"
---

Le GRAFCET est un diagramme fonctionnel dont le but est de **décrire graphiquement** les différents comportements d'un automatisme séquentiel. <!--more-->

Le GRAFCET décrit les cycles par une succession d'ETAPES et de TRANSITIONS ; aux étapes sont associées des ACTIONS, aux transitions des RECEPTIVITES.

Son nom est l'acronyme de « **gra**phe **f**onctionnel de **c**ommande **é**tapes / **t**ransitions »  

La norme européenne correspondante est l'EN 60848  

Les avantages du GRAFCET :
- Il est indépendant de la matérialisation technologique;
- Il traduit de façon cohérente le cahier des charges;
- Il est bien adapté aux systèmes automatisés.  

Le grafcet est généralement implémenté dans un API (Automate Programmable Industriel)

{{< figure src="/images/grafcet/grafcet01.png" alt="API" width="400px" class="follow">}}  

**Constitution du grafcet :**  
Un Grafcet est une suite d'étapes qui font des actions et de transitions  

**1/ Étapes :**  
Définition:
Une étape correspond à une situation du système automatisé dans laquelle le comportement de la partie commande est stable vis à vis de ses entrées et ses sorties. Une étape est symbolisée par un carré repéré numériquement. Une étape, à un instant t, peut être active ou inactive. Ce repérage peut se faire à l'aide d'un point placé sous le chiffre.

{{< figure src="/images/grafcet/grafcet02.png" alt="Etapes" width="400px" class="follow">}}  

{{% hint info %}}
*L'étape initiale (qui est validée à la mise sous tension) ou toute étape initialement activée est repérée par un carré double.*
{{% /hint%}}  

**2/ Actions :**  
Une ou plusieurs Actions élémentaires ou complexes peuvent être associées à une étape. Les actions associées à une étape traduisent ce qui doit être fait si l'étape est active.

Les actions qui sont les résultats du traitement logique des informations par la partie commande peuvent être :

- Externes et elles correspondent aux ordres émis vers la partie opérative ou vers les éléments externes.
- Internes et concernent des fonctions spécifiques de l'automatisme telles que : temporisation, comptage, etc ..

Les actions sont précisées dans un ou plusieurs rectangles :

{{< figure src="/images/grafcet/grafcet03.png" alt="Actions" width="600px" class="follow">}}  

{{% hint info %}}
*N.B: On utilise toujours dans les actions les verbes à l'infinitif: allumer la lampe mais pas allumage de la lampe*
{{% /hint%}}  

**3/ Transitions et réceptivités associées**  
*Transition*  
- Une transition indique la possibilité d'évolution d'une étape à l'étape suivante. Le passage de l'une à l'autre s'effectue par le franchissement d'une transition.

- Une transition est soit validée soit non validée. Elle est dite validée lorsque toutes les étapes immédiatement précédentes reliées à cette transition sont achevées.

- Une transition entre deux étapes se représente par une barre perpendiculaire aux liaisons orientées.

{{< figure src="/images/grafcet/grafcet04.png" alt="Transition" width="400px" class="follow">}}

{{% hint info %}}
*NB: Il n'y a toujours qu'une et qu'une seule transition entre deux étapes, quel que soit le chemin parcouru.*  
{{% /hint %}}  

*Réceptivité*  
- **A chaque transition est associée une proposition logique appelée réceptivité** qui peut être soit vraie soit fausse.

- La réceptivité écrite sous forme de proposition logique est une fonction combinatoire:

- D'informations externes provenant de la partie opérative ou du poste opérateur,

- D'informations internes en rapport avec les fonctions spécifiques de l'automatisme (temporisation, comptage), ou les états actifs ou inactifs des autres étapes.

EXEMPLE :  

{{< figure src="/images/grafcet/grafcet05.png" alt="Réceptivité" width="500px" class="follow">}}  

{{% hint warning %}}
Remarque:	
Les notations a↑ ou a↓ sont employés lorsque la condition de réceptivité est liée au changement d'état variable.

a↑: front montant de a, a↓: front descendant de a.
{{% /hint%}}  

*Réceptivité et temps*  
Pour faire intervenir le temps dans une réceptivité, il suffit d'indiquer après le repère t son origine et sa durée.

EXEMPLE :  

{{< figure src="/images/grafcet/grafcet06.png" alt="Temporisation" width="300px" class="follow">}}    

10s/X4: passer à l'étape 5 si 10s sont écoulées depuis la dernière activation de l'étape 4.  

**4/ Liaisons orientées**  
Les liaisons orientées permettent de relier les étapes aux transitions et inversement. Le sens général du parcours est *du haut vers le bas*. Lorsque le parcours est *différent des flèches sont nécessaires*.

Exemple :  

{{< figure src="/images/grafcet/grafcet07.png" alt="Liaisons orientées" width="400px" class="follow">}}   

**5/ Les règles du grafcet**  
La modification de l'état un automatisme est appelée évolution, et est régie par différentes règles.

**Règle 1 :** Les étapes initiales sont celles qui sont actives au début du fonctionnement, on les précise par un double carré.

{{< figure src="/images/grafcet/grafcet08.png" alt="Etape initiale" class="follow">}}   

**Règle 2 :** Une transition est soit validée, soit non validée.
- Elle est validée lorsque toutes les étapes immédiatement précédentes sont actives.
- Elle ne peut être franchie que lorsqu'elle est validée et que sa réceptivité est vraie.
Elle est alors obligatoirement franchie.  

**Règle 3 :** Le franchissement d'une transition entraîne :
- L'activation de toutes les étapes immédiatement suivantes
- La désactivation de toutes les étapes immédiatement précédentes.  

Exemple :  

{{< figure src="/images/grafcet/grafcet09.png" alt="Franchissement" width="500px" class="follow">}}  

Cas 1: La transition 1-2 est non validée, l'étape 1 et 2 sont inactives.
Cas 2: L'étape 1 est active, la transition 1-2 est validée mais ne peut être franchie car la réceptivité n'est pas vraie: a=0.
Cas 3: La transition 1-2 est franchie car la réceptivité est vraie :a=1. Dans ce cas l'étape 2 est activée et l'étape 1 est désactivée.  

**Règle 4 :** Évolutions simultanées
Plusieurs transitions simultanément franchissables sont simultanément franchies

Cette règle de franchissement permet notamment de décomposer un grafcet en plusieurs diagrammes indépendants.

Exemple :  

{{< figure src="/images/grafcet/grafcet10.png" alt="Évolutions simultanées" width="500px" class="follow">}}  

{{% hint warning %}}
Remarque :  
X1 :Variable Booléenne correspondant à l'étape 1. 
Si l'étape 1 est active X1=1  
Si l'étape 1 est inactive X1=0  
{{% /hint %}}  

*Un trait double représente un "ET" (voir plus bas)*

**Règle 5 :** Activation et désactivation simultanées  
Si au cours du fonctionnement de l'automatisme une même étape doit être simultanément activée et désactivée, elle reste activée.  

Exemple :  

{{< figure src="/images/grafcet/grafcet11.png" alt="Activation et désactivation simultanées " width="250px" class="follow">}}  

**6/ Les structures**  

**Définition:**  
Le début du Grafcet est constitué d'une suite d'étapes qui peuvent être activées les unes après les autres. Cette suite d'étapes est appelée une **séquence unique**.
Chaque étape n'est suivie que par *une seule transition* et chacune d'elle n'est *validée que par une seule étape*.
La séquence est dite active si au moins une des étapes est active. Elle est dite inactive si toutes les étapes son inactives.

{{< figure src="/images/grafcet/grafcet12.png" alt="Séquence unique" width="300px" class="follow">}}  


**Séquences simultanées**  
**Définition:**  	
Lorsque le franchissement d'une transition conduit à activer plusieurs séquences en même temps ces séquences sont dites séquences simultanées. Après l'activation simultanée de ces séquences, les évolutions des étapes actives dans chacune des *séquences deviennent alors indépendantes*.  

{{< figure src="/images/grafcet/grafcet13.png" alt="Séquences simultanées" width="400px" class="follow">}} 

{{% hint info %}}
Pour assurer la synchronisation de la désactivation de plusieurs séquences en même temps, des **étapes d'attente** réciproques sont généralement prévues. La condition sous la convergence en ET est toujours vrai.
{{% hint info %}}
On peut observer une "divergence en ET" et une "convergence en ET"  
{{% /hint %}}
{{% /hint %}}  

**Sélection de séquence**
Une sélection ou un choix d'évolution entre plusieurs étapes ou séquence se représente, à partir d'une ou plusieurs étapes, par autant de transitions validées qu'il y a d'évolutions possibles.

{{< figure src="/images/grafcet/grafcet14.png" alt="Sélection de séquence" width="300px" class="follow">}}  

{{% hint info %}}
On peut observer une "divergence en OU" et une "convergence en OU"  
{{% /hint %}}  

**Saut d'étapes et reprise de séquence**  

{{< figure src="/images/grafcet/grafcet15.png" alt="Saut d'étapes et reprise de séquence" width="500px" class="follow">}}  

{{% hint info %}}
- Le saut en avant permet de sauter une ou plusieurs étapes lorsque les actions à réaliser deviennent inutiles.  
- Le saut en arrière permet de reprendre une séquence lorsque les actions à réaliser sont répétitives.
{{% /hint %}}  


**Macro-Etape**  
Une macro-étape (ME) est la représentation unique d'un ensemble d'étapes et de transition nommé "Expansion d'étapes", la macro-étape se substitue à une étape du GRAFCET.  
{{% hint warning %}}  
L'expansion de ME comporte une étape d'entrée et une étape de sortie repérées par E et S.
{{% /hint %}}  

Tout franchissement de la transition amont de la macro-étape active l'étape E d'entrée de son Expansion.  
L'étape de sortie participe à la validation des transitions aval de la macro-étape.  
La transition suivant la macro-étape n'est validée que lorsque la dernière étape de l'expansion de macro-étape est active.  

Symbole : Une étape avec un rectangle en haut et un autre en bas, voir repère M10.  

{{< figure src="/images/grafcet/grafcet16.png" alt="Macro-Etape" width="500px" class="follow">}}  

Lorsque l'étape 9 est active et que la réceptivité a est vraie, alors la ME est activée, l'étape d'entrée de l'expansion est activée simultanément et le cycle décrit dans l'expansion se déroule jusqu'à l'étape de sortie S10. Dès que l'étape S10 est active, si la réceptivité b qui suit la ME est vraie alors l'étape suivante est activée.  

{{% hint info %}}  
Il est préférable de ne pas associer d'actions aux étapes d'entrées et de sortie de la macro-étape
{{% /hint %}}  

**Tâches – Sous–programme**
Un sous-programme est un grafcet indépendant dont l'exécution et le déroulement sont synchronisés à un grafcet principal.

Lorsqu'une **tâche** doit être réalisée plusieurs fois dans un cycle, la description de cette tâche sous la forme d'un grafcet indépendant permet de simplifier l'analyse et de simplifier la programmation. Ce grafcet indépendant est un sous programme lancé par le programme (le grafcet) principal.  

Dans l'exemple suivant, la tâche « dosage » est exécutée 2 fois dans le cycle.  

Le grafcet dosage décrit cette tâche. Le lancement de cette tâche est réalisé par l'activation de l'étape X2 ou l'activation de l'étape X5.  

Lorsque la tâche est terminée, une information d'état (fin de tâche) est retournée au grafcet principal qui peut alors évoluer. Il est souhaitable de terminer le grafcet de la tâche par la vérification que l'étape de lancement du grafcet principal est bien désactivée avant de le boucler.  

{{< figure src="/images/grafcet/grafcet17.png" alt="Tâches – Sous–programme" width="500px" class="follow">}}   

*Exemple de grafcet de feu rouge*  

<iframe src="/html/grafcet/index.html"  scrolling="no" width="900" height="600"></iframe>  


Vidéo :
{{< youtube sn7G4rEM3m8>}}








