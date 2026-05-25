# Guía de Configuración - ROZ Social Media

## 🎯 Inicio Rápido (3 pasos)

### 1️⃣ Instalar Dependencias

```bash
npm install
```

Esto instalará:
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- TypeScript
- Lucide React Icons

**Tiempo estimado**: 2-3 minutos (depende de tu conexión)

### 2️⃣ Ejecutar en Desarrollo

```bash
npm run dev
```

✅ La página se abrirá automáticamente en `http://localhost:5173`

### 3️⃣ Disfrutar

¡La página web está lista! Puedes:
- Ver cambios en tiempo real (hot reload)
- Abrir DevTools para inspeccionar
- Probar en móvil con `http://localhost:5173` desde tu teléfono en la misma red

---

## 📦 Para Producción

```bash
npm run build
```

Esto generará una carpeta `dist/` lista para producción.

```bash
npm run preview
```

Previewizar el build de producción localmente.

---

## ✨ Personalizaciones Recomendadas

### 1. Editar Colores

Archivo: `tailwind.config.js`

```js
colors: {
  primary: {
    600: '#6D28FF', // Morado principal
    800: '#6D28FF', // Ajusta según necesidad
  },
}
```

### 2. Cambiar Contenido

- `src/components/Hero.tsx` - Título y CTA principal
- `src/components/Services.tsx` - Servicios ofrecidos
- `src/components/Results.tsx` - Métricas y números
- `src/components/Footer.tsx` - Email y teléfono

### 3. Agregar Imágenes

Para reemplazar los placeholders `<ImageIcon />` en Showcase:

```tsx
<img 
  src="/path/to/image.jpg" 
  alt="Project" 
  className="w-full h-full object-cover"
/>
```

### 4. Conectar Formularios

En `FinalCTA.tsx` y `Navbar.tsx`, reemplaza los `href="#"` con tus endpoints:

```tsx
<button onClick={() => window.location.href = 'https://tu-formulario.com'}>
  AGENDAR LLAMADA
</button>
```

---

## 🔗 Cambios Rápidos

### Email de Contacto
- Archivo: `src/components/Footer.tsx`
- Busca: `hola@rozsocial.com`
- Reemplaza con tu email

### Teléfono
- Archivo: `src/components/Footer.tsx`
- Busca: `+1 (234) 567-890`
- Reemplaza con tu teléfono

### Redes Sociales
- Archivo: `src/components/Navbar.tsx` y `src/components/Footer.tsx`
- Busca los links `href="#"`
- Agrega tus URLs de redes sociales

---

## 🐛 Troubleshooting

### "npm: command not found"
1. Instala Node.js desde https://nodejs.org/
2. Reinicia tu terminal
3. Verifica: `npm --version`

### Puerto 5173 ocupado
Vite usará automáticamente otro puerto. O fuerza uno específico:

```bash
npm run dev -- --port 3000
```

### Slow performance
1. Limpia node_modules: `rm -r node_modules` (o `rmdir /s /q node_modules` en Windows)
2. Reinstala: `npm install`
3. Reinicia el servidor

---

## 📋 Checklist Pre-Producción

- [ ] Cambié el email de contacto
- [ ] Cambié el teléfono
- [ ] Agregué links de redes sociales
- [ ] Personalicé el contenido de servicios
- [ ] Cambié los números de resultados
- [ ] Agregué imágenes en Showcase
- [ ] Verifiqué que todo se vea bien en móvil
- [ ] Ejecuté `npm run build` sin errores

---

## 🚀 Desplegar a Producción

### Opción 1: Netlify (Recomendado - Gratis)

1. Haz push a GitHub
2. Ve a https://netlify.com
3. Connect tu repositorio
4. Deploy automático ✅

### Opción 2: Vercel

1. Haz push a GitHub
2. Ve a https://vercel.com
3. Import proyecto
4. Deploy automático ✅

### Opción 3: Servidor Propio

```bash
npm run build
# Sube la carpeta dist/ a tu servidor web
```

---

## 📚 Recursos

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

---

## 💬 Preguntas Frecuentes

**P: ¿Puedo cambiar los colores?**
A: Sí, edita `tailwind.config.js` y `src/index.css`

**P: ¿Cómo agrego más secciones?**
A: Crea un nuevo archivo en `src/components/` y importa en `App.tsx`

**P: ¿Es compatible con móvil?**
A: 100% responsive. Probado en todos los dispositivos.

**P: ¿Necesito backend?**
A: No para mostrar la web. Sí si quieres formularios, contacto, etc.

---

## ✅ Listo

¡Tu página premium está lista! 🚀

Cualquier duda, revisa el `README.md` o los comentarios en el código.

Bienvenido a ROZ Social Media. 

Construimos marcas que venden. 💜
