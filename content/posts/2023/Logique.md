---
title: "Logique"
date: 2023-04-01T17:03:52+02:00
categories:
  - Electricité
  - Electronique
  - Automatisme
tags:
  - Théorie
draft: false
description: Les portes logiques
preview: /images/logique/ic-board.jpg
slug: Logique
thumbnail: "/images/logique/ic-board.jpg"
---

Une fonction logique est une relation entre une ou plusieurs variables d’entrées et une seule variable de sortie.
On réalise des opérations logiques (booléennes) sur une séquence de bits.
Le bit est l'unité la plus simple dans un système de numération, **ne pouvant prendre que deux valeurs**, désignées le plus souvent par les chiffres **0 et 1**<!--more-->

George Boole (1815 – 1864)  
Il est le créateur de la logique moderne, que l'on appelle [algèbre de Boole](https://fr.wikipedia.org/wiki/Alg%C3%A8bre_de_Boole_(logique)) en son honneur.

{{< figure src="/images/logique/George_Boole_color.jpg" alt="George Boole" width="400px" class="follow">}}

{{% hint info %}}
Principe :  
S’exprime au moyen de deux chiffres, on ne considère que deux états :
- la grandeur physique n’existe pas :   **0**
- la grandeur physique existe :         **1**
{{% /hint %}}

De nombreux dispositifs électroniques, électromécanique, mécaniques, électriques, pneumatiques, fonctionnement en tout ou rien.
Ceci sous-entend qu'ils peuvent prendre 2 états. 
En voici quelques exemples :  
- Arrêt marche,
- Ouvert fermé,
- Enclenché déclenché,
-  Avant arrière,
- Vrai faux,
- Conduction blocage.  

**Notion de variable binaire**  
La variable logique est une grandeur qui peut prendre 2 valeurs qui sont repérées habituellement 0 ou 1.
On appelle cette grandeur un [bit](https://fr.wikipedia.org/wiki/Bit).
Cette variable est dite binaire et se note par une lettre comme en algèbre. Exemple : a, b, x
La variable binaire est aussi appelée variable booléenne.  

**Table de vérité**  
Une fonction X peut comporter n variables.  
Pour chacune de ces combinaisons, la fonction peut prendre une valeur 0 ou 1.  

*Table de vérité avec une fonction ET*  

|a    |b    |a ET b |
|:---:|:---:|:---:|
|0    |0    |0    |
|0    |1    |0    |
|1    |0    |0    |
|1    |1    |1    |  

**De la base 10 (décimal) à la base 2 (binaire)**  

{{% hint warning %}}
C'est simple, il suffit de savoir que 1+1=10...
{{% /hint %}}

Et oui, en binaire il n'existe pas de chiffres comme 2,3,4... Il n'y a que 1 et 0.  

Calcul simple :  
$$0+0 = 0$$
$$0+1 = 1$$
$$1+1 = 10$$
$$10+1 = 11$$
$$11+1 = 100$$ 
et ainsi de suite.  

*Tableau de 1 à 15*  

|Décimal    |Binaire    |Décimal    |Binaire    |
|:---:|:---:|:---:|:---:|
|0    |0000 |8    |1000 |
|1    |0001 |9    |1001 |
|2    |0010 |10   |1010 |
|3    |0011 |11   |1011 |
|4    |0100 |12   |1100 |
|5    |0101 |13   |1101 |
|6    |0110 |14   |1110 |
|7    |0111 |15   |1111 |  

**Exemples :**  

<div align="center"><iframe src="/html/logique/index.html"  scrolling="no" width="400" height="300"></iframe></div>  

**Les fonctions logiques de base**  
**1/ La fonction OUI** (us: buffer) 

<div>
    <style>
        .row {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .block {
            width: 400px;
        }
        td {
            text-align: center;
        }
    </style>
    <div class="row">
        <div class="block">
            Schéma électrique
            <img src="/images/logique/Logique01.png" alt="OUI schéma">
        </div>
        <div class="block">
        </div>
        <div class="block">
            Table de vérité
            <table>
                <tr>
                    <th>a</th>
                    <th>L</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="block">
            Symbole logique <img src="/images/logique/european-union.png" width="15%" height="15%">
            <img src="/images/logique/Logique01b.png" alt="OUI symbole EU">
        </div>
        <div class="block">
            Symbole logique <img src="/images/logique/united-states-of-america.png" width="15%" height="15%">
            <img src="/images/logique/Logique01c.png" alt="OUI symbole US">
        </div>
        <div class="block" style="margin-top: 25px;">
            Équation
            $$\LARGE L=a$$
        </div>
    </div>
</div>  

***  

**2/ La fonction NON** (us: NOT)  

<div>
    <div class="row">
        <div class="block">
            Schéma électrique
            <img src="/images/logique/Logique02.png" alt="NON schéma">
        </div>
        <div class="block">
        </div>
        <div class="block">
            Table de vérité
            <table>
                <tr>
                    <th>a</th>
                    <th>L</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="block">
            Symbole logique <img src="/images/logique/european-union.png" width="15%" height="15%">
            <img src="/images/logique/Logique02b.png" alt="NON symbole EU">
        </div>
        <div class="block">
            Symbole logique <img src="/images/logique/united-states-of-america.png" width="15%" height="15%">
            <img src="/images/logique/Logique02c.png" alt="NON symbole US">
        </div>
        <div class="block" style="margin-top: 25px;">
            Équation
            $$\LARGE L=\overline{a}$$
            Se prononce "a barre"
        </div>
    </div>
</div>  

***  

**3/ La fonction OU**  (us: OR)  

<div>
    <div class="row">
        <div class="block">
            Schéma électrique
            <img src="/images/logique/Logique03.png" alt="OU schéma">
        </div>
        <div class="block">
        </div>
        <div class="block">
            Table de vérité
            <table>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>L</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="block">
            Symbole logique <img src="/images/logique/european-union.png" width="15%" height="15%">
            <img src="/images/logique/Logique03b.png" alt="OU symbole EU">
        </div>
        <div class="block">
            Symbole logique <img src="/images/logique/united-states-of-america.png" width="15%" height="15%">
            <img src="/images/logique/Logique03c.png" alt="OU symbole US">
        </div>
        <div class="block" style="margin-top: 25px;">
            Équation
            $$\LARGE L=a + b$$
            Le " + " se prononce " OU "
        </div>
    </div>
</div>  

***  

**4/ La fonction ET**  (us: AND)  

<div>
    <div class="row">
        <div class="block">
            Schéma électrique
            <img src="/images/logique/Logique04.png" alt="ET schéma">
        </div>
        <div class="block">
        </div>
        <div class="block">
            Table de vérité
            <table>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>L</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="block">
            Symbole logique <img src="/images/logique/european-union.png" width="15%" height="15%">
            <img src="/images/logique/Logique04b.png" alt="ET symbole EU">
        </div>
        <div class="block">
            Symbole logique <img src="/images/logique/united-states-of-america.png" width="15%" height="15%">
            <img src="/images/logique/Logique04c.png" alt="ET symbole US">
        </div>
        <div class="block" style="margin-top: 25px;">
            Équation
            $$\LARGE L=a . b$$
            Le " . " se prononce " ET "
        </div>
    </div>
</div>  

***  

**5/ La fonction NON OU**  (us: NOR)

<div>
    <div class="row">
        <div class="block">
            Schéma électrique
            <img src="/images/logique/Logique05.png" alt="NON OU schéma">
        </div>
        <div class="block">
        </div>
        <div class="block">
            Table de vérité
            <table>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>L</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="block">
            Symbole logique <img src="/images/logique/european-union.png" width="15%" height="15%">
            <img src="/images/logique/Logique05b.png" alt="NON OU symbole EU">
        </div>
        <div class="block">
            Symbole logique <img src="/images/logique/united-states-of-america.png" width="15%" height="15%">
            <img src="/images/logique/Logique05c.png" alt="NON OU symbole US">
        </div>
        <div class="block" style="margin-top: 25px;">
            Équation
            $$\LARGE L=\overline{a} . \overline{b} = \overline{a + b}$$
            Se prononce "a barre ET b barre = a OU b, le tout barre"
        </div>
    </div>
</div>  

*** 

**6/ La fonction NON ET**  (us: NAND)

<div>
    <div class="row">
        <div class="block">
            Schéma électrique
            <img src="/images/logique/Logique06.png" alt="NON ET schéma">
        </div>
        <div class="block">
        </div>
        <div class="block">
            Table de vérité
            <table>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>L</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="block">
            Symbole logique <img src="/images/logique/european-union.png" width="15%" height="15%">
            <img src="/images/logique/Logique06b.png" alt="NON ET symbole EU">
        </div>
        <div class="block">
            Symbole logique <img src="/images/logique/united-states-of-america.png" width="15%" height="15%">
            <img src="/images/logique/Logique06c.png" alt="NON ET symbole US">
        </div>
        <div class="block" style="margin-top: 25px;">
            Équation
            $$\LARGE L=\overline{a} + \overline{b} = \overline{a . b}$$
            Se prononce "a barre OU b barre = a ET b, le tout barre"
        </div>
    </div>
</div>  

*** 

**7/ La fonction OU EXCLUSIF**  (us: XOR)

<div>
    <div class="row">
        <div class="block">
            Schéma électrique
            <img src="/images/logique/Logique07.png" alt="OU EXCLUSIF schéma">
        </div>
        <div class="block">
        </div>
        <div class="block">
            Table de vérité
            <table>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>L</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="block">
            Symbole logique <img src="/images/logique/european-union.png" width="15%" height="15%">
            <img src="/images/logique/Logique07b.png" alt="OU EXCLUSIF symbole EU">
        </div>
        <div class="block">
            Symbole logique <img src="/images/logique/united-states-of-america.png" width="15%" height="15%">
            <img src="/images/logique/Logique07c.png" alt="OU EXCLUSIF symbole US">
        </div>
        <div class="block" style="margin-top: 25px;">
            Équation
            $$\LARGE L=a . \overline{b} + \overline{a} . b =a \oplus b$$
            Se prononce "a b barre  OU a barre b = a ou exclusif b"
        </div>
    </div>
</div>  

***   

**Il est possible de faire une simulation ici :** https://logic.ly/demo/

Essayons de faire ce montage :  

<img src="/images/logique/Logique08.png" alt="Bascule RS">  
C'est une fonction mémoire (RS) (Set - Reset). Autre simulation : 

Autre simulation :

{{< line_break >}}  

<p class="codepen" data-height="500" data-slug-hash="ExpgVvj" data-user="maxcswann" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/maxcswann/pen/ExpgVvj">
  :has() logic gates</a> by Max Swann (<a href="https://codepen.io/maxcswann">@maxcswann</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

{{< line_break >}}   

Vidéo :
{{< youtube Dx49ONipTV0>}}




