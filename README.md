# Webpack Standard Configuration

Este proyecto es una configuración estándar de Webpack diseñada para servir como base para otros proyectos. 
Es flexible, eficiente y fácil de personalizar.

## Características principales

- **Módulos modernos:** Soporte para TypeScript y ES Modules.
- **CSS:** Compatibilidad con CSS.
- **Optimización:** Minificación, división de código y carga diferida (lazy loading).
- **Archivos estáticos:** Soporte para imágenes.
- **Servidor de desarrollo:** Recarga en caliente con Webpack Dev Server.
- **Configuración amigable:** Código limpio y organizado, ideal para proyectos pequeños y medianos.

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/GustavoSDS/webpack-config.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd webpack-config
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

---

## Uso

### Modo desarrollo

Ejecuta el servidor de desarrollo con recarga en caliente:
```bash
npm run dev
```

### Modo producción

Genera una versión optimizada para producción:
```bash
npm run build
```
Los archivos se generarán en la carpeta `dist/`.

---

## Estructura del proyecto

```
webpack-standard-config/
├── src/
│   ├── assets/          # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── css/             # Estilos globales y componentes CSS/SCSS
│   ├── ts/              # Código TypeScript
│   └── index.html       # Archivo HTML principal
├── dist/                # Archivos generados (carpeta ignorada en Git)
├── webpack.config.js    # Configuración principal de Webpack
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # Documentación del proyecto
```

---

## Configuración personalizada

Puedes personalizar la configuración editando el archivo `webpack.config.js`. 
Este archivo ya incluye configuraciones básicas para:

- Entrada y salida
- Loaders para archivos JavaScript, CSS y activos estáticos
- Plugins como `HtmlWebpackPlugin` y `CleanWebpackPlugin`

---

## Scripts disponibles

- `npm run build`: Construye la aplicación para producción.
- `npm run start`: Inicia el servidor de desarrollo.
- `npm run dev`: Inicia el servidor de desarrollo y construye la aplicación en segundo plano.

---

## Requisitos

- Node.js (v14 o superior)
- npm o yarn

---

## Contribuir

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza los cambios y haz un commit: `git commit -m "Agrega nueva funcionalidad"`.
4. Envía tus cambios: `git push origin mi-nueva-funcionalidad`.
5. Abre un Pull Request.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
