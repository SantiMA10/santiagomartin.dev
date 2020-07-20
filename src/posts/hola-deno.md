---
title: ¡Hola deno! 🦕
date: "2020-05-09"
spoiler: Una nueva forma de utilizar TypeScript/JavaScript para crear aplicaciones en el lado del servidor más seguras.
tags: ["deno", "TypeScript", "Nodejs", "Google Cloud Run"]
language: "es"
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
import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
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
