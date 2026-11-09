# Galban Labs - Sitio Web y Portfolio Profesional

Sitio web oficial de **Galban Labs**, marca freelance de desarrollo web fundada por **Martín Galban**. Diseñado para presentar servicios digitales, atraer negocios y emprendimientos locales, y canalizar contactos directamente a través de WhatsApp.

---

## 🎨 Identidad de Marca y Estilo

- **Nombre:** Galban Labs
- **Colores principales:** Azul marino oscuro (`#070b19`), Azul eléctrico, Cian (`#00c2ff`) y Púrpura (`#6e44ff`).
- **Logo:** Logotipo original de Galban Labs con fondo blanco removido, preservando ícono, colores, proporciones y tipografía.
- **Canal principal de contacto:** WhatsApp (+54 9 3765 093201 / [wa.me/5493765093201](https://wa.me/5493765093201))
- **Email:** galbanmartin01@gmail.com
- **Instagram:** [@galban_labs](https://www.instagram.com/galban_labs/)
- **GitHub:** [G-Martin24](https://github.com/G-Martin24)

---

## 📁 Estructura Completa del Proyecto

```text
├── public/
│   ├── assets/
│   │   ├── galban_labs_logo_dark_mode.png     # Logo con fondo transparente y texto adaptado a fondo oscuro
│   │   ├── galban_labs_logo_transparent.png   # Logo original con fondo transparente
│   │   └── aistudio/                          # Archivo de logo original provisto
│   ├── favicon.png                            # Favicon con el isotipo de Galban Labs
│   └── apple-touch-icon.png                   # Ícono táctil para dispositivos móviles
├── src/
│   ├── assets/
│   │   └── projects/                          # Capturas reales de proyectos
│   │       ├── cuenta_clara.png               # Proyecto Cuenta Clara
│   │       ├── vitality_ia.png                # Proyecto Vitality IA
│   │       └── vita_id.png                    # Proyecto VITA ID
│   ├── components/
│   │   ├── BrandLogo.tsx                      # Componente del logotipo vectorial
│   │   ├── Header.tsx                         # Barra superior con menú responsive
│   │   ├── Hero.tsx                           # Sección principal con titular y mockup
│   │   ├── Services.tsx                       # 6 servicios con iconos y enlace a WhatsApp
│   │   ├── Benefits.tsx                       # 6 beneficios claros y realistas
│   │   ├── Portfolio.tsx                      # 3 tarjetas de proyectos de ejemplo
│   │   ├── ProjectModal.tsx                   # Modal interactivo con detalles del proyecto
│   │   ├── About.tsx                          # Sección "Sobre Galban Labs" (bio de Martín Galban)
│   │   ├── Process.tsx                        # Proceso de 4 pasos
│   │   ├── CallToAction.tsx                   # Llamado a la acción con WhatsApp
│   │   ├── FAQ.tsx                            # Preguntas frecuentes para clientes
│   │   ├── Contact.tsx                        # Canales de contacto y formulario validado
│   │   ├── Footer.tsx                         # Pie de página y enlaces
│   │   ├── FloatingWhatsApp.tsx               # Botón flotante de WhatsApp
│   │   └── DeploymentGuideModal.tsx           # Modal explicativo para GitHub y Vercel
│   ├── data/
│   │   └── portfolioData.ts                   # Todos los textos, enlaces y constantes editables
│   ├── App.tsx                                # Ensamblado principal de la aplicación
│   ├── index.css                              # Tailwind CSS v4 y variables de tema
│   └── main.tsx                               # Punto de entrada de React 19
├── index.html                                 # HTML con metadatos SEO, Open Graph y JSON-LD
├── metadata.json                              # Configuración del applet en AI Studio
├── package.json                               # Dependencias y scripts
├── tsconfig.json                              # Configuración de TypeScript
└── vite.config.ts                             # Configuración del bundler Vite
```

---

## 🚀 Cómo Ejecutar en Tu Computadora

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abrí tu navegador en `http://localhost:3000` o la URL que indique la consola.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos listos para producción se generarán en la carpeta `dist/`.

---

## 🌐 Cómo Subir a GitHub

1. Creá una cuenta en [github.com](https://github.com) si todavía no tenés una.
2. Creá un nuevo repositorio vacío llamado `galban-labs` (o el nombre que prefieras).
3. En la terminal de tu computadora, dentro de la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Galban Labs Portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/galban-labs.git
   git push -u origin main
   ```

---

## ⚡ Cómo Desplegar en Vercel (Gratis)

1. Creá una cuenta en [vercel.com](https://vercel.com) e iniciá sesión con tu cuenta de GitHub.
2. Hacé clic en **"Add New... -> Project"**.
3. Seleccioná tu repositorio `galban-labs` y hacé clic en **"Import"**.
4. Vercel detectará automáticamente que es un proyecto **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Hacé clic en **"Deploy"**. En menos de un minuto tu sitio estará publicado y accesible en una URL gratuita `https://galban-labs.vercel.app`.
6. Si comprás un dominio propio (por ejemplo `galbanlabs.com`), podés vincularlo gratis en la sección **Settings -> Domains** de tu proyecto en Vercel.

---

## ✏️ Cómo Personalizar el Contenido

Todo el contenido editable se encuentra centralizado en el archivo:
`/src/data/portfolioData.ts`

Ahí podés cambiar fácilmente:
- Tu número o mensaje de WhatsApp (`BRAND_CONFIG.whatsappNumber`, `BRAND_CONFIG.whatsappDefaultMsg`)
- Tu correo electrónico o Instagram (`BRAND_CONFIG.email`, `BRAND_CONFIG.instagram`)
- Los servicios ofrecidos (`SERVICES`)
- Los proyectos de portfolio y sus imágenes (`PROJECTS`)
- Los pasos del proceso de trabajo (`PROCESS_STEPS`)
- Las preguntas frecuentes (`FAQ_ITEMS`)
