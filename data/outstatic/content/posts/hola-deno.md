---
title: ¡Hola deno! 🦕
status: 'published'
author:
  name: 'Santi'
  picture: 'https://avatars.githubusercontent.com/u/7255298?v=4'
slug: 'hola-deno'
description: 'Una nueva forma de utilizar TypeScript/JavaScript para crear aplicaciones en el lado del servidor más seguras.'
publishedAt: '2020-03-09T10:53:07.000Z'
---

![Photo by Daiga Ellaby on Unsplash](/img/hello-deno.jpeg)

El pasado 4 de mayo se publicó la 1.0.0-rc1 de deno, una nueva forma de utilizar JavaScript/TypeScript para crear aplicaciones en el lado del servidor.

https://deno.land/

Seguro que esta descripción os encaja con otra tecnología llamada node y es normal que sea así ya que ambas fueron iniciadas por la misma persona [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl).

# ¿En que se diferencian node y deno? 🤔

Por lo que he podido probar estos días yo lo resumiria en 3:

- Soporte para **TypeScript por defecto**.
- **Seguro por defecto**, si queremos acceder a ciertos elementos del sistema como la red, entorno, sistema de fichero… tendremos que dar esos permisos cuando ejecutemos nuestros programas.
- **Imports utilizando URLs** en lugar de un gestor de paquetes centralizado. Si utilizais goland os sonará el sistema.

PD: Otra diferencia "importate" es el orden de las silabas no-de -> de-no 😜.

# Show me the code! 😬

## Primero instalar deno

Mi opción recomendada y la única que cuando escribo este post descarga la versión 1.0.0-rc1 es utilizar el siguiente comando:

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

👀 No os olvideis de añadir las variables de entorno que nos da el instalador al terminar.

## Hello world

Una vez todo instalado, toca comprobar que funciona, para ello vamos a ejecutar el primer script de deno y que de paso nos permite ver una de las caracteristicas chulas, ¡podemos ejecutar código que este en una URL!

```sh
deno run https://deno.land/std/examples/welcome.ts
```

## Piquemos un poco

Una vez nos hemos asegurado que todo funciona… vamos a crear un primer servidor con deno que devuelva siempre hello world.

```typescript
import { serve } from 'https://deno.land/std/http/server.ts';

const s = serve({ port: 8000 });
console.log('http://localhost:8000/');

for await (const req of s) {
	req.respond({ body: 'Hello World\n' });
}
```

Lo guardamos en un fichero .ts, por ejemplo lo podemos llamar server.ts, y ejecutamos con deno.

```sh
deno run server.ts
```

¡💥💥💥! Como deno es seguro por defecto, no tenemos acceso a la red, necesitamos darle ese permiso para poder ejecutar el servidor.

```sh
deno run --allow-net server.ts
```

Ahora ya podemos visitar https://localhost:8080 y ver como deno nos devuelve “Hello world”.

# Bonus track: Deplegando deno en Google Cloud Run 🚀

Es el último paso para acabar de probar una tecnología ponerla en producción.

En este caso vamos a utilizar Google Cloud Run ya que nos permite desplegar contenedores de docker sin preocuparnos por la infraestructura.

## Dockerfile

```dockerfile
FROM debian

RUN apt-get update
RUN apt-get upgrade
RUN apt-get install curl unzip -y

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"
ENV PORT="1234"

WORKDIR /usr/src/app
COPY . .

CMD ["deno", "run", "--allow-env", "--allow-net", "server.ts"]
```

## El fichero server.ts

Necesitamos hacer un pequeño cambio, para poder utilizar el puerto que Cloud Run nos asigne en la variable de entorno PORT, en lugar de usar siempre el 8080.

```typescript
import { serve } from 'https://deno.land/std/http/server.ts';

const PORT = parseInt(Deno.env.get('PORT') || '', 10) || 8080;

const s = serve(`0.0.0.0:${PORT}`);
console.log(`Listen on: ${PORT}`);

for await (const req of s) {
	req.respond({ body: 'Hello World\n' });
}
```

## Generando la imagen y deplegando a Google Cloud Run

Los requisitos para poder hacerlo son simples:

- un proyecto en Google Cloud, con las APIs de Cloud Run y Cloud Build activadas.
- tener instalada y configurada la cli de Google Cloud, gcloud.
- Toda la información de como hacer este paso la podeis encontrar en la documentación de Cloud Run, pero yo os lo resumo.

https://cloud.run

### Enviamos la imagen a Cloud Build para que Google la genere

```sh
gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld
```

### Desplegamos la imagen en Cloud Run

```sh
gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --platform managed
```

## Mi repo de ejemplo

https://github.com/SantiMA10/deno-example

Estos días le estamos dando caña a deno en mi canal de Twitch, por lo que te invito a pasarte si te quedas con ganas de charla sobre deno.
