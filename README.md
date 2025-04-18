# Sena Prime - Plataforma de Películas

**Sena Prime** es una plataforma de películas desarrollada con React y Vite. Permite explorar diferentes categorías de películas como Ciencia Ficción, Comedia y Animadas, y ver detalles de cada película, incluyendo su descripción y tráiler.

## 🚀 Características

- Navegación entre categorías: Ciencia Ficción, Comedia y Animadas.
- Visualización de detalles de cada película, incluyendo descripción, año y tráiler.
- Diseño responsivo y moderno utilizando `styled-components`.
- Galería interactiva en la página principal.
- Manejo de rutas dinámicas con React Router.

---

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para proyectos modernos.
- **React Router**: Manejo de rutas en la aplicación.
- **Styled Components**: Estilización de componentes en React.
- **React Player**: Reproducción de videos de YouTube.

---
src/ <br>
├── assets/                
│   ├── images/           
│   └── styles/           
├── components/            
│   ├── Banner.jsx         
│   ├── Gallery.jsx        
│   ├── GlobalStyles.jsx   
│   ├── HamburgerMenu.jsx  
│   └── Pie.jsx            
├── data/                  
│   ├── animadas.json     
│   ├── ciencia-ficcion.json <br>
│   └── comedia.json <br>
├── hooks/                 
├── pages/                 
│   ├── Home.jsx           
│   ├── Animadas.jsx       
│   ├── Ficcion.jsx        
│   ├── Comedia.jsx        
│   ├── DetallePelicula.jsx <br>
│   └── Error404.jsx      
├── utils/                 
│   └── fetchData.js       
├── App.jsx                
├── main.jsx               
└── vite.config.js         
---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Artur0M/sena-prime.git
   cd sena-prime

2. **Instalar dependencias**:
   ```bash
   npm install

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev

Abrir en el navegador: La aplicación estará disponible en http://localhost:5173.

## 📜 Scripts Disponibles
- npm run dev: Inicia el servidor de desarrollo.
- npm run build: Genera una versión optimizada para producción.
- npm run preview: Previsualiza la versión de producción.
- npm run lint: Ejecuta ESLint para verificar errores en el código.
## 🌟 Funcionalidades Clave
- Página Principal
- Galería interactiva con imágenes destacadas.
- Listado de todas las películas disponibles.
- Categorías
- Ciencia Ficción: Explora películas de ciencia ficción.
- Comedia: Encuentra películas de comedia.
- Animadas: Descubre películas animadas.
## 🖼️ Capturas de Pantalla

![inicio](https://github.com/user-attachments/assets/ed93e2b7-29c5-478b-b04d-ee54ad22d22d)

## 🧑‍💻 Desarrollador
- Luis Arturo Ospino
- Desarrollador Frontend
