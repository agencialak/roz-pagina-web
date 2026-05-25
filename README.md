# ROZ Social Media - Website Premium

Página web cinematográfica y futurista para una agencia de marketing digital de alto nivel.

## 🎨 Características

- ✨ Diseño premium con glassmorphism y animaciones cinematográficas
- 🎬 Animaciones smooth con Framer Motion
- 📱 Totalmente responsive
- ⚡ Performance optimizado
- 🎯 Navegación smooth
- 🌙 Dark mode por defecto
- 🔮 Efectos visuales premium (glow, blur, gradientes)

## 🛠 Stack Tecnológico

- **React 18** - Librería UI
- **Vite** - Build tool ultra-rápido
- **TypeScript** - Type safety
- **Tailwind CSS** - Utilidades de estilo
- **Framer Motion** - Animaciones avanzadas
- **Lucide React** - Iconos modernos

## 📋 Requisitos

- Node.js 16+ 
- npm o yarn

## 🚀 Instalación y Ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Hacer build para producción
npm run build

# 4. Previewar el build
npm run preview
```

El servidor de desarrollo abrirá automáticamente en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes principales
│   ├── Navbar.tsx       # Barra de navegación
│   ├── Hero.tsx         # Sección hero
│   ├── Services.tsx     # Servicios
│   ├── Philosophy.tsx   # Filosofía/Sobre nosotros
│   ├── Results.tsx      # Resultados/Métricas
│   ├── Showcase.tsx     # Galería de proyectos
│   ├── FinalCTA.tsx     # Call to action final
│   └── Footer.tsx       # Footer
├── utils/
│   └── animations.ts    # Variantes de animación reutilizables
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
```

## 🎨 Paleta de Colores

- **Primario**: `#6D28FF` (Morado estratégico)
- **Secundario**: `#8B5CFF` (Morado claro)
- **Fondo**: `#000000` (Negro puro)
- **Texto**: `#FFFFFF` (Blanco)
- **Texto secundario**: `rgba(255,255,255,0.65)`
- **Bordes**: `rgba(255,255,255,0.08)`

## ✨ Componentes Visuales

- **Glassmorphism**: Efecto vidrio con blur y transparencia
- **Glow Effects**: Brillo morado que responde a interacciones
- **Animations**: Fade-up, blur-in, slide, scale, rotate
- **Gradientes**: Morado a oscuro, efectos de profundidad
- **Hover States**: Interactividad visual premium

## 📦 Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.3.0"
}
```

## 🔧 Configuración

### Vite
- Fast refresh habilitado
- Build optimizado con terser
- Sourcemap deshabilitado en producción

### Tailwind CSS
- Dark mode compatible
- Colores personalizados (primary palette)
- Animaciones custom
- Sombras glow

### TypeScript
- Strict mode habilitado
- Rutas alias configuradas (@/*)
- JSX en React 18 mode

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Menú móvil colapsable

## 🚀 Optimización

- Lazy loading con IntersectionObserver via Framer Motion
- Animaciones GPU-accelerated
- Font optimization (Google Fonts)
- Code splitting automático
- Image optimization ready

## 🎯 Secciones

1. **Navbar** - Navegación fija con scroll detection
2. **Hero** - Sección introductoria con animaciones cinematográficas
3. **Services** - Grid de servicios con efecto hover
4. **Philosophy** - Sobre la agencia y pilares
5. **Results** - Métricas y números con contadores animados
6. **Showcase** - Galería de proyectos con overlay effects
7. **Final CTA** - Call to action con urgencia
8. **Footer** - Información de contacto y enlaces

## 💡 Notas Técnicas

- Las animaciones usan `whileInView` para triggering al scroll
- Los contadores de resultados son dinámicos
- Las transiciones son suaves con easing personalizado
- El código es modular y reutilizable
- Optimizado para performance y SEO

## 📝 Personalización

Para personalizar la página:

1. **Colores**: Edita `tailwind.config.js`
2. **Contenido**: Modifica los componentes en `src/components/`
3. **Animaciones**: Ajusta las variantes en `src/utils/animations.ts`
4. **Tipografía**: Cambia en `index.css` y `tailwind.config.js`

## 🤝 Contribuir

Este es un proyecto de producción. Para cambios:

1. Crea una rama nueva
2. Haz tus cambios
3. Commit con descripción clara
4. Push y crea un PR

## 📄 Licencia

Proyecto propietario de ROZ Social Media.

## 📧 Contacto

- Email: hola@rozsocial.com
- Teléfono: +1 (234) 567-890

---

Construido con ❤️ y animaciones cinematográficas ✨
