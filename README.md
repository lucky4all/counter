# Contador Simple con React y Vite ⚛️⚡

Un proyecto básico pero útil.

> [!NOTE]
> Este proyecto tiene como objetivo demostrar mis conocimientos básicos en React, Vite y Git. Puedes visitar mis otros proyectos para ver más.

---

## ✨ Características

* **Incrementar**: Aumenta el valor del contador en uno.
* **Decrementar**: Disminuye el valor del contador en uno.
* **Reiniciar**: Restablece el valor del contador a cero.
* Interfaz de usuario limpia y sencilla.
* Desarrollo rápido y eficiente gracias a Vite.

---

## 🚀 Empezando

Sigue estas instrucciones para tener una copia local del proyecto funcionando en tu máquina.

### 📋 Prerrequisitos

Asegúrate de tener Node.js y npm (o yarn) instalados en tu sistema.

* [Node.js](https://nodejs.org/) (v18 o superior recomendado, incluye npm)
* [Yarn](https://yarnpkg.com/) (opcional, si prefieres usar yarn en lugar de npm)

### 💻 Instalación

1.  **Clona el repositorio** (si está en un repositorio Git) o descarga los archivos del proyecto.
    ```bash
    # Si usas Git
    git clone https://github.com/lucky4all/counter.git
    cd counter
    ```
2.  **Navega al directorio del proyecto** (si descargaste los archivos manualmente):
    ```bash
    cd ruta/a/tu-proyecto
    ```
3.  **Instala las dependencias** del proyecto:
    * Usando npm:
        ```bash
        npm install
        ```
    * O usando yarn:
        ```bash
        yarn install
        ```

### 🏃 Ejecutando el Proyecto

Para iniciar la aplicación en modo de desarrollo:

* Usando npm:
    ```bash
    npm run dev
    ```
* O usando yarn:
    ```bash
    yarn dev
    ```
Esto iniciará el servidor de desarrollo de Vite. Abre tu navegador y ve a la dirección que se muestra en la consola (usualmente `http://localhost:5173`).

> [!IMPORTANT]
> Vite es muy rápido. inicia el servidor en milisegundos y además posee HMR (Hot Module Replacement)

---

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

* `npm run dev` o `yarn dev`:
    Inicia la aplicación en modo de desarrollo con HMR.
* `npm run build` o `yarn build`:
    Compila la aplicación para producción. Los archivos optimizados se generan en la carpeta `dist/`.
* `npm run lint` o `yarn lint`:
    Ejecuta el linter (ESLint en este caso, si está configurado en tu proyecto Vite) para analizar el código en busca de errores y problemas de estilo.
* `npm run preview` o `yarn preview`:
    Sirve localmente la build de producción generada en la carpeta `dist/` para previsualizarla antes de desplegarla.

---

## 🛠️ Tecnologías Utilizadas

* **[React](https://reactjs.org/)**: Biblioteca de JavaScript para construir interfaces de usuario.
* **[Vite](https://vitejs.dev/)**: Herramienta de frontend moderna que proporciona un entorno de desarrollo rápido y una compilación optimizada.
* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**

---

## 🤔 ¿Cómo funciona?

Este contador utiliza el hook `useState` de React para manejar el estado del valor actual del contador. Cada botón (incrementar, decrementar, reiniciar) invoca una función que actualiza este estado, lo que provoca que React vuelva a renderizar el componente con el nuevo valor.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    // JSX para mostrar el contador y los botones
  );
}