---
title: ¿Qué opináis de GitHub Actions?
status: 'published'
author:
  name: 'Santi'
  picture: 'https://avatars.githubusercontent.com/u/7255298?v=4'
slug: 'que-opinais-de-github-actions'
description: 'GitHub Actions es el servicio de CI/CD de GitHub.'
publishedAt: '2020-02-05T10:53:07.000Z'
---

![¿Qué opináis de GitHub Actions?](/img/que-opinais-de-github-actions.png 'https://twitter.com/CDAOOC/status/1176224452151042054')

A lo mejor os preguntáis que son las GitHub Actions? Si vamos a [la web de GitHub](https://github.com/features/actions) nos dice:

> GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

Y yo de forma simplificada lo veo como una opción más a la hora de configurar el sistema de CI/CD para nuestros proyectos.

# Ahora sabemos que es pero… ¿merecen la pena?

![GIF](https://media.giphy.com/media/14mgxYFJHXGmoo/giphy.gif 'Ummmmh')

Al principio durante la beta/alpha he de reconocer que no me convencia mucho, aunque me parecía una funcionalidad necesaria.

_Estaba claro que si BitBucket y GitLab tenían sus implementaciones de CI/CD, siendo la de GitLab la mejor para mi gusto y BitBucket… al menos tenía algo que te podía sacar de un apuro, tarde o temprano le iba a tocar el turno a GitHub._

Por un lado el sistema estaba basado en “acciones” que creaba la comunidad, no imagenes de docker como GitLab CI, y además el fichero de configuración me parecía muy poco intuitivo.

Ahora que ya ha salido de beta y es _“world-class CI/CD”_ me decidí a darle una nueva oportunidad aprovechando que arrancaba un miniproyecto para jugar con Stackdriver, Datadog y algún otro sistema de monitorización que encuentre.

Y tras solo 5 intentos fallidos de configuración, y [gracias a una Action creada por la comunidad](https://github.com/GoogleCloudPlatform/github-actions), ya tenía configurado mi servicio de CI/CD para pasar mis tests y desplegar en Google App Engine. 🚀

# ¿Qué opnias de GitHub Actions?

Merece la pena tenerlo en cuenta si tienes tu repo en GitHub y a nivel personal me creo tengo que seguir dándole caña para poder escribir más sobre ellas.

**Y tras esta pequeña chapa ahora es vuestro turno, ¿qué opináis de GitHub Actions?**
