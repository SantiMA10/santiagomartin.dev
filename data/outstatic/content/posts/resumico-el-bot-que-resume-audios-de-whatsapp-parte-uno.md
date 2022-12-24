---
title: 'resumico, el bot que resume audios de WhatsApp [parte 1]'
status: 'published'
author:
  name: 'Santi'
  picture: 'https://avatars.githubusercontent.com/u/7255298?v=4'
slug: 'resumico-el-bot-que-resume-audios-de-whatsapp-parte-uno'
description: 'Explico el funcionamiento básico de mi bot de WhatsApp que permite transcribir y resumir mensajes de audio'
coverImage: ''
publishedAt: '2022-12-24T16:41:23.516Z'
---

![](/images/group-1-2x-EyNz.png)

# La idea 💡

Cuando vi que WhatsApp había publicado su API hace unos meses mi primera idea fue "un bot para transcribir audios", pero esa idea quedó en cajón durante meses.

Hace un par de semanas una conversación con [Nukeador](https://twitter.com/nukeador) me hizo recordar con la idea con un extra: resúmenes usando ChatGPT.

Tras unos días trabajando en ello probando diferentes opciones, tenía una primera versión, puse un [tweet](https://twitter.com/santima10/status/1604933925872160768) (que está cerca ya de las 100k impresiones) y me fui a dormir.

El día siguiente tras ver multitud de respuestas, RTs y favoritos, me di cuenta que lo mismo esto era más interesante de lo que yo pensaba.

---

Si buscas como poder usar resumico sin tener que configurar/mantener nada: puedes apuntarte a [la lista de espera para la alpha](https://resumi.co/).

---

## Esa primera versión 🚀

Para este tipo de proyectos que al final son una API respondiendo a un webhook me gusta utilizar [AppEngine de Google Cloud,](https://cloud.google.com/appengine) ya que tiene un free tier muy generoso y es super sencillo tenerlo funcionando.

Como AppEngine no tiene muchos recursos en lugar de usar [whisper](https://github.com/openai/whisper), el modelo que publicó OpenAI para pasar voz a texto, me decidi por Google [Cloud Speech to Text](https://cloud.google.com/speech-to-text), el servicio de Google Cloud para lo mismo.

### La voz a texto

Mire la API de WhatsApp y me descargue un audio mio para probar, pero… resulta que pese a que Google dice que admite ficheros de audio en .ogg, la realidad era que no estaba transcribiendo nada 🤦

Tras darle unas vueltas, me di cuenta que podía utilizar ffmpeg para transformar los ficheros .ogg que me daba WhatsApp a .mp3 de los cuales Google si me sacaba el texto.

### La API de WhatsApp

Por suerte cuando salió la API si había hecho un bot que mandaba mensajes, por lo que parte del proceso configuración ya lo tenía hecho.

Solo necesitaba "orquestar" el proceso:

![](/images/sin-ti-tulo-2021-03-15-1850-M1OD.png)Y también entender los diferentes tipos de mensajes que se pueden enviar, texto, interactivos con botones, plantillas…

### Toca resumir las transcripciones

Mi primera intención era usar ChatGPT, pero la API no oficial no esta pensada para ser usada desde un servidor 😅.

Tocaba usar GPT-3 directamente y la verdad es que fue la parte más sencilla, la propia web de OpenAI tiene un montón de ejemplos tanto de código como de "prompt" para pedirle cosas.

El proceso completo queda así:

![](/images/sin-ti-tulo-2021-03-15-1850-2-Q3Nz.png)

En esta primera iteración sólo se hacen resúmenes de audios que tienen una duración mayor de 1 minuto.

# **Los problemas 🤦🏻‍♂️**

### Las limitaciones de WhatsApp ❌

Cada mensaje tiene sus limitaciones, por ejemplo, si es texto normal "sólo" puedes mandar \~4000 caracteres. Si es un mensaje con botones ese límite baja a 1/4, \~1000 caracteres.

Si quieres hacer interacciones con botones, esta limitado a 3 por mensaje.

Si quieres enviar un header/footer, solo puedes en mensajes interactivos o plantillas.

### Responder rápido al webhook de WhatsApp 🏃

Esto es bastante común, si tardas un poco en responder que sí, el proveedor te lo re-envía y en este caso eso implicaba que me acababa mandando 4 o 5 mensajes con cada transcripción.

La solución, usar la cola de tareas para solo tener que transformar el mensaje y que sea otra parte del sistema quien se encargue de la transcripción, resumen…

## La versión del repositorio

En el repositorio en el que está publicado el código de resumico hay varias mejoras sobre lo que he comentado en este artículo: la posibilidad de usar whisper (en lugar del servicio de Google), opciones para transcribir, resumir o las dos cosas a la vez cada audio…

Pero eso me lo dejo para otro día, aquí está el resumen hasta el día del [tweet](https://twitter.com/santima10/status/1604933925872160768).

---

[https://github.com/SantiMA10/resumico](https://github.com/SantiMA10/resumico)

---

Si te ha molado 😍 o tienes alguna duda 🤔 puedes preguntarme en [Twitter](https://twitter.com/SantiMA10) o durante un directo [en mi canal de Twitch](https://twitch.tv/SantiMA10). También puedes visitar [mi web](https://santiagomartin.dev/) 🌍 donde puedes encontrar mis otros posts, formas de contacto y side projects.

