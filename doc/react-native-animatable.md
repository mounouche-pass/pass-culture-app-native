---
theme : "robot-lung-ebi"
---
# Journée micro-interactions !

---

## Choix de la lib

--

### Problématique :

* React Native + Web
* Facile à utiliser
    * déclaratif
* Animations visées type :
    * agrandissement et déplacement de composants
    * changement de couleur et d'opacité
    * synchronisation des animations

--

`Animation` de `react-native`

* ❌ trop bas niveau
    * donc pas facile
* ❌ ne permet d’animer que `opacity`, `scaleX|Y|XY`
* ❌ on n’a pas réussi à le faire fonctionner sur Android

--

`react-native-reanimated`

* ✅ facile à utiliser/comprendre
* ✅ permet d’animer toutes sortes de propriétés CSS
* ✅ permet la séquence des animations (pas testé)
* ✅ compatibilité web (pas testé)
* ❌ que de l'impératif
    * pas de déclaratif

--

`react-native-pose` (`popmotion`)

* ✅ facile à utiliser
* ✅ s’utilise de la même façon que `styled`
* ❌ n’offre pas beaucoup d'animations built-in
* ❌ très (très) mauvais typage

--

`moti`

* ✅ animation basique facile
* ✅ animation avancée possible
* ✅ permet un séquence très facile des animations
* ❌ limité en terme de types d'animation
* ❌ on n'a pas réussi à le faire marcher en web

--

[`react-native-animatable`](https://github.com/oblador/react-native-animatable)

* ✅ native & web
* ✅ animation basique facile
* ✅ animation avancée possible
* ✅ style déclaratif ou impératif

💯

---

## Déclaratif

#### Props classiques

`animation` : Type d'animation (`bounce`, `slideInLeft` etc.)

![](https://cloud.githubusercontent.com/assets/378279/10590307/ef73b1ba-767d-11e5-8fb9-9779d3a53a50.gif)
![](https://cloud.githubusercontent.com/assets/378279/10590304/ef4f09b4-767d-11e5-9a43-06e97e8ee2c1.gif)

--

![](https://cloud.githubusercontent.com/assets/378279/10590300/ef36dfe2-767d-11e5-932b-1cccce78087b.gif)
![](https://cloud.githubusercontent.com/assets/378279/10590299/ef35a3ca-767d-11e5-94e0-441fd49b6444.gif)
![](https://cloud.githubusercontent.com/assets/378279/10590296/ef3076ca-767d-11e5-9f62-6b9c696dad51.gif)
![](https://cloud.githubusercontent.com/assets/378279/10590302/ef37d438-767d-11e5-8480-a212e21c2192.gif)
![](https://cloud.githubusercontent.com/assets/378279/10590298/ef33fa52-767d-11e5-80fe-6b8dbb5e53d0.gif)

--

* `duration` : Durée de l'animation en `ms`
* `delay` : Délai de lancement de l'animation en `ms`
* `direction` : Direction de l'animation (`reverse`, `alternate` etc.)

--

## Déclaratif

#### Props supplémentaires

* `iterationCount` : Nombre de répétition de l'animation, `infinite` pour animer en boucle
* `iterationDelay` : Délai entre chaque itération en `ms`

* `onAnimationBegin` : Fonction appelée au lancement de l'animation
* `onAnimationEnd` : Fonction appelée à la fin de l'animation

--

`easing`

<iframe src="https://animate.style/" loading="lazy" width="100%" style="background-color: white; height: 80vh;"></iframe>

--

<iframe src="https://easings.net/" loading="lazy" width="100%" style="background-color: white; height: 80vh;"></iframe>

--

<iframe src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/easing-function/_sample_.comparing_the_easing_functions.html" loading="lazy" width="100%" style="background-color: white; height: 80vh;"></iframe>

---

## Exemple

```html
<AnimatedText
    animation="slideInLeft"
    duration={1500}
    delay={500}
>
    Slide in left, with a 500ms delay and 1500ms duration
</AnimatedText>
```

Plus d'exemple dans `AppComponents.tsx`, sur la branche `animatable-poc`

---

## Au menu aujourd'hui :

[Animation de l'écran `AgeInformation`](https://www.figma.com/proto/vus736tZfCpYnNoIlYcw2k/Micro-interactions?page-id=220%3A2165&node-id=229%3A4208&viewport=620%2C260%2C0.15&scaling=min-zoom&starting-point-node-id=229%3A4208&show-proto-sidebar=1)

1. le bloc d'âge en fondu-enchainé de 25ms
2. le bloc de l'âge "cette année" s'agrandit de 5%
3. le bloc de CTA qui s'affiche en venant du bas en 250ms

--

![](https://files.slack.com/files-pri/TP5BEEAF4-F04N17F9T2L/frame_1404651.png)

![](https://files.slack.com/files-pri/TP5BEEAF4-F04MBD4MYFM/frame_1404650.png)

---

C'est parti pour les sessions de [mobs](https://mobtime.hadrienmp.fr/mob/Pass-culture) !
