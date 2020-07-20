---
title: GitLab/GitHub en el Stream Deck
date: "2020-03-16"
spoiler: Una nueva forma de utilizar TypeScript/JavaScript para crear aplicaciones en el lado del servidor más seguras.
tags: ["GitHub", "GitLab", "StreamDeck"]
language: "es"
---

¡Hola! 👋🏻

Primer side project de 2020 🚀 se llama DevOps for Stream Deck, no se si el nombre es lo más acertado, pero era lo que se me ocurría.

![Las acciones en el Stream Deck con varios proyectos de GitLab/GitHub.](/img/gitlab-github-streamdeck.png "Las acciones en el Stream Deck con varios proyectos de GitLab/GitHub.")

# La idea 💡

Utilizar el Stream Deck de elgato para poder visualizar el estado del CI de proyectos que tengo alojados en GitLab y GitHub.

Nota: si no sabeis lo que es un Stream Deck os dejo el link a la página de elgato donde lo explican mejor que yo.

https://www.elgato.com/en/gaming/stream-deck

# El MVP 🚀

## Lo primero… ¿cómo se crean aplicaciones para el Stream Deck?

Pues muy sencillo, como casi todo en esta vida con JavaScript 🥳.

https://developer.elgato.com/documentation/stream-deck/sdk/overview/

## Siguiente paso: ¿cómo vamos a autenticarnos contra GitLab/GitHub?

Utilizando los tokens que nos dejan generar ambos servicios desde los ajustes, por lo que en esta primera versión no vamos a tener que implementar el login con ningún servicio.

## ¿Cómo ha quedado?

Una vez configuado nuestro token y el nombre del repo que queremos controlar el funcionamiento es supercillo: cada vez que pulsamos la tecla en el Stream Deck, se hace la petición al serivio correspondiente y se pinta el estado que nos devuelve.

![Configuración del Stream Deck desde Mac.](/img/gitlab-github-streamdeck-config.png "Configuración del Stream Deck desde Mac.")

Por ahora es compatible con GitHub Actions y GitLab CI, pero encantado de añadir soporte a otros servicios como Circle CI, Google Cloud Build… o revisar PRs si alguien se anima 😜 .

Como ideas futuras tengo un par de issues abiertas en el repo:

- Poder elegir el repositorio con un select en lugar de tener que escribir el nombre.
- Autorefresco para no tener que andar pulsando la tecla para actualizar.

Pero me encantaría recibir nuevas issues con vuestras ideas si se os ocurre algo.

# Los problemas 🤦🏻‍♂️

## HTML, CSS y JS

Acostumbrado a las facilidades que hoy en día nos dan Vue o React o TypeScript hacerlo “a pelo” ha sido un poco duro… vamos que no me acordaba de todas las comodidades que dan.
No hay ninguna reestricción que impida usar frameworks o TypeScript, simplemente no pense que fuera necesario para este proyecto tan simple.

---

Si queréis ver como fue el proceso lo podéis ver en mi canal de Twitch: [SantiMA10](https://twitch.tv/SantiMA10), si aún no me han silenciado todos los directos por poner música con copyright 😅 (las BSO de Los Vengadores y Uncharted 4).

---

https://github.com/SantiMA10/devops-streamdeck
