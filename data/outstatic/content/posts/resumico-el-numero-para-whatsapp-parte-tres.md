---
title: 'resumico, el número para WhatsApp [parte 3]'
status: 'draft'
author:
  name: 'Santi'
  picture: 'https://avatars.githubusercontent.com/u/7255298?v=4'
slug: 'resumico-el-numero-para-whatsapp-parte-tres'
description: ''
coverImage: ''
publishedAt: '2023-01-06T12:15:40.000Z'
---

![](/images/quino-al-4snuchpic8c-unsplash-MzMT.jpg)Foto de [Quino Al](https://unsplash.com/@quinoal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) en [Unsplash](https://unsplash.com/es/fotos/4SNUcHPiC8c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Esta es la tercera parte de la serie de posts sobre resumico: [parte 1](https://www.santiagomartin.dev/blog/resumico-el-bot-que-resume-audios-de-whatsapp-parte-uno) y [parte 2](https://www.santiagomartin.dev/blog/resumico-el-repositorio-publico-parte-dos).

Si buscas como poder usar resumico sin tener que configurar/mantener nada: puedes apuntarte a [la lista de espera para la alpha](https://www.resumi.co/).

---

Esta vez voy toca hablar del proceso de conseguir un número para usar en resumico.

## Un número... ¿para qué?

Es como funciona WhatsApp, aquí no hay el concepto de bot o nombre de usuario que tienen otros servicios, aquí todo va por número de teléfono.

Si bien es cierto que si solo quieres hacer pruebas Meta te da uno de prueba, ese número solo puede comunicarse con otros 5 números que añadas a la lista de contactos permitidos.

## Los problemas

### La cuenta deshabilitada

Cuando decides añadir un número de teléfono, Meta te pide más datos sobre tu negocio, entre ellos una página web. En mi caso como página web use [https://resumi.co](https://resumi.co), que en ese momento era una redirección al formulario para la alpha.

Parece que no le gusto al bot de facebook que no pudo acceder y me toco hacer la primera apelación.

No se si una persona llego a revisar esta apelación, pero el mensaje de error cambio de *"no hemos podido acceder"* a "*no podemos verificar que sigas las condiciones de uso de WhatsApp for Business".*

Como me dejaba poner cualquier enlace puse el link al articulo, el link al repositorio... todos sin éxito.

Al final la solución fue hacer [un fichero markdown con una explicación ](https://github.com/SantiMA10/resumico/blob/main/docs/ABOUT.en.md)acorde a las condiciones de uso y listo.

### Conseguir un número

No quería usar mi propio número de WhatsApp, imaginaros el lío recibiendo audios de gente que no conozco 😱.

En ese momento me acordé de que en Twilio puedes comprar números de teléfono y me decidí a probar suerte.

Lo primero que descubrí es que con la cuenta en modo *"free trial", *tu número solo recibe SMS y/o llamadas de teléfonos que hayas verificado previamente, por tanto no me servía.

Después una vez tenía un número comprado, descubrí que por defecto no puedes recibir SMS de servicios tipo 2FA, tienes que abrir un ticket y solicitar que te lo activen. Además una vez activado tampoco te garantizan que te vayan a llegar 🤦🏻‍♂️.

Tras un par de pruebas con un número de EEUU, Canada y UK. Logre que me llegara el SMS de WhatsApp a mi número de UK.

🎉 Ya tengo número para resumico 🎉

## Los costes de todo

Como varias personas me habéis preguntado cuánto cuesta la API de WhatsApp, os hago un mini resumen y os dejo el [link al pricing](https://developers.facebook.com/docs/whatsapp/pricing/).

En mi caso el primer coste es el 1,50$/mes que me cobra Twilio por el número.

Luego en WhatsApp hay muchos depende:

- El país del usuario.

- Quien inicia la conversación:

    - Si es el usuario (las primeras 1.000 son gratis) (en españa son 0,03€/conversación)

    - Si es el "negocio" (las primeras 50 son gratis) (en españa son 0,05€/conversación)

    <!-- -->

- Cómo se inicia la conversación:

    - Si es mediante el número de teléfono, lo que hemos hablado arriba.

    - Si es mediante un anuncio en la plataforma de Meta, es gratis.

    <!-- -->

Para los resúmenes se utiliza la API de OpenAI depende de:

- El modelo que utilices, en el caso de resumico: *Davinci, *el más poderoso.

- El número de tokens que utilice tu petición (0,02$/1k tokens), en el caso de resumico el máximo de tokens por resumen es 120.

Para las transcripciones usando Whisper depende 100% de la infraestructura en la que lo tengas desplegado, ahora mismo mientras escribo este post está dentro de la capa gratuita de Google Cloud.



Hasta aquí esta tercera parte, no se si habrá cuarta, pero si la hay no tengo muy claro que voy a contar 😅.

Repositorio del proyecto: [https://github.com/SantiMA10/resumico](https://github.com/SantiMA10/resumico)

---

Si te ha molado 😍 o tienes alguna duda 🤔 puedes preguntarme en [Twitter](https://twitter.com/SantiMA10) o durante un directo [en mi canal de Twitch](https://twitch.tv/SantiMA10). También puedes visitar [mi web](https://santiagomartin.dev/) 🌍 donde puedes encontrar mis otros posts, formas de contacto y side projects.



