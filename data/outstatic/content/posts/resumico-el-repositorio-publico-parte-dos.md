---
title: 'resumico, el repositorio público [parte 2]'
status: 'published'
author:
  name: 'Santi'
  picture: 'https://avatars.githubusercontent.com/u/7255298?v=4'
slug: 'resumico-el-repositorio-publico-parte-dos'
description: 'Hablamos de los pasos que dí antes de hacer público el repositorio de resumico.'
coverImage: ''
publishedAt: '2022-12-30T10:07:29.993Z'
---

![](/images/nick-morrison-fhnnjk1yj7y-unsplash-Q4NT.jpg)*Foto de *[*Nick Morrison*](https://unsplash.com/@nickmorrison?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)* en *[*Unsplash*](https://unsplash.com/es/fotos/FHnnjk1Yj7Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Esta es la segunda parte de la serie de posts sobre resumico: [parte1.](https://www.santiagomartin.dev/blog/resumico-el-bot-que-resume-audios-de-whatsapp-parte-uno)

Si buscas como poder usar resumico sin tener que configurar/mantener nada: puedes apuntarte a [la lista de espera para la alpha](https://www.resumi.co/).

---

Normalmente cuando hago un proyecto siempre acabo haciendo público el repositorio ya que puede que a alguien le interese o lo simplemente quiera cotillear como esta hecho y con [resumico](https://resumi.co) no iba a ser menos.

# Limpiar y ordenar 

La versión que tenía cuando publique el tweet era un fichero index.js de \~600 líneas con todos los tokens puestos directamente en el sitio donde se usaban e incluso repetidos si hacían falta, por eso me dedique un par de días a ordenar el código y mover los tokens a variables de entorno.

Durante este proceso, al quedar cada servicio más claro, me fue posible incorporar algunas mejoras como: las reacciones a los mensajes, las diferentes opciones para los audios en forma de botones...; de forma bastante sencilla.

## ¿Google Cloud Speech to Text o Whisper?

Creo que empezar por *Google Cloud Speech to Text *fue todo un acierto ya que me permitió tener una versión funciona en un par de días, pero había oído hablar tanto de *Whisper* que no podia no probarlo.

Como ahora tenía una interfaz definida para el servicio que hacía la transcripción cambiar uno por otro debía ser sencillo... ¿no?

### Los requisitos de whisper

Si queréis verlos todos os recomiendo echar un [vistazo a su repositorio](https://github.com/openai/whisper).

En mi caso había un problema necesitaba python y todo mi código estaba en TypeScript y ejecutándose con NodeJs en AppEngine, que un su versión *standard* no te deja instalar nada a nivel de SO o ejecutar un container de Docker.

Mi solución ha sido aprovecharme de la cola de tareas que ya tenía, ahora en lugar de mandar las tareas de vuelta a mi instancia de AppEngine, las tareas se envían a una instancia de Google Cloud Run en la que está desplegada la imagen de Docker con *whisper* y tiene recursos suficientes para ejecutarlo.

![](/images/resumico-full-M0Mj.png)

Al final la misma base de código desplegada en dos servicios diferentes cada una con los recursos necesarios para ejecutar su parte.

### Entonces cual es "mejor"

Pues en mi caso diría que *Whisper *es cierto que con los recursos que tengo ahora mismo asignados (2GiB y 1vCPU) va mucho más lento que la opción de Google, pero tiene un punto a favor insalvable y es que añade signos de puntuación a las transcripciones.

Os pongo un ejemplo: "podemos quedar mañana por la mañana a las 5 u otro día." vs "podemos quedar mañana por la mañana, a las 5 u otro día."

Las palabras son las mismas, pero esa coma cambia completamente el sentido, de querer quedar a las 5 de mañana a ser una opción más en la lista de opciones.

Por eso me quedo con *Whisper *y más si después de la transcripción quieres hacer un resumen.

# Documentación

Fue una de mis grandes dudas: ¿incluyo una especie de tutorial de como conseguir todo en el README.md? ¿o solo lo básico?

Al final me decante por la segunda opción, al menos de primeras, ya que cosas como crear una app para WhatsApp es bastante engorroso.

En unas semanas sí que me gustaría añadir una pequeña guia, incluso un botón de desplegar en Google Cloud, DigitalOcean... (al estilo del típico de Heroku), pero en esta primera versión toca hacer un poco de investigación sobre cómo obtener los tokens para todo.

---

Hasta aquí esta segunda parte, os puedo hacer un pequeño spoiler de la siguiente parte, ya que os contaré la "aventura" para conseguir un número de teléfono para resumico.

Repositorio del proyecto: [https://github.com/SantiMA10/resumico](https://github.com/SantiMA10/resumico)

---

Si te ha molado 😍 o tienes alguna duda 🤔 puedes preguntarme en [Twitter](https://twitter.com/SantiMA10) o durante un directo [en mi canal de Twitch](https://twitch.tv/SantiMA10). También puedes visitar [mi web](https://santiagomartin.dev/) 🌍 donde puedes encontrar mis otros posts, formas de contacto y side projects.

