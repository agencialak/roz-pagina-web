# 📸 Instrucciones para Agregar Imágenes del Equipo

## Ubicación de las imágenes

Las imágenes PNG del equipo deben ir en la carpeta:
```
public/team/
```

## Archivos esperados

Copia tus imágenes PNG en esta carpeta con estos nombres exactos:

```
public/team/
├── felipe.png      (Felipe Vergara - Estratega Digital)
├── maria.png       (María González - Directora Creativa)
├── carlos.png      (Carlos Ruiz - Especialista en Meta Ads)
└── alejandra.png   (Alejandra López - Community Manager)
```

## Requisitos de las imágenes

- **Formato**: PNG (preferible con fondo transparente)
- **Dimensiones**: Cuadradas (ej: 400x400px, 500x500px, etc.)
- **Tamaño de archivo**: < 500KB cada una
- **Calidad**: Alta resolución para que se vea nítida

## ¿Cómo agregar tus propias imágenes?

### Opción 1: Copiar imágenes manualmente
1. Abre la carpeta: `public/team/`
2. Copia tus imágenes PNG
3. Renómbralas con los nombres exactos indicados arriba

### Opción 2: Si quieres cambiar nombres
Si quieres usar otros nombres, edita el archivo `src/components/Team.tsx`:

Busca esta sección (líneas 8-43):
```tsx
const teamMembers = [
  {
    id: 1,
    name: 'Felipe Vergara',
    role: 'Estratega Digital',
    image: '/team/felipe.png',  // ← Cambia este nombre
    // ...
  },
  // ...
]
```

Y reemplaza `/team/felipe.png` con la ruta correcta a tu imagen.

## ¿Qué pasa si falta una imagen?

Si falta una imagen PNG, aparecerá un placeholder vacío. Las imágenes son opcionales — la sección funcionará igual aunque falten algunas.

## Personalizar los datos del equipo

Para cambiar nombres, cargos, bios o links de contacto, edita `src/components/Team.tsx`:

```tsx
{
  id: 1,
  name: 'Tu Nombre',           // Nombre del miembro
  role: 'Tu Cargo',            // Cargo/puesto
  image: '/team/imagen.png',   // Ruta de la imagen
  bio: 'Tu descripción',       // Biografía corta
  social: {
    email: 'email@example.com',
    linkedin: 'https://linkedin.com/in/tu-perfil',
  },
}
```

## Ejemplo de estructura completa

Si tienes 4 miembros del equipo con fotos:

```
C:\Users\Usuario\Desktop\Agencia la K\Claude code\pagina web\
├── public/
│   ├── team/
│   │   ├── felipe.png
│   │   ├── maria.png
│   │   ├── carlos.png
│   │   └── alejandra.png
│   └── project-1.mp4
└── src/
    └── components/
        └── Team.tsx
```

## 💡 Tips

- **Fondo transparente**: Las imágenes PNG con fondo transparente se ven mejor
- **Consistencia**: Usa imágenes con iluminación y estilo similar
- **Proporción**: Todas en formato cuadrado para un grid perfecto
- **Hover effect**: Las imágenes tienen zoom automático al pasar el mouse

## ❓ ¿Necesitas ayuda?

Si quieres:
- Cambiar número de miembros
- Agregar más datos (teléfono, ubicación, especialidades)
- Modificar el diseño de las tarjetas
- Cambiar animaciones

Solo avísame y lo hacemos al toque 👍
