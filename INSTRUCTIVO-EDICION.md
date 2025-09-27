# 📝 INSTRUCTIVO: Cómo editar el sitio web de Tecniprop

## 🎯 **Ubicación de archivos**
Tu sitio web está guardado en:
```
E:\00-AlertaGráfica\Tecniprop\Web actual\Web-Rediseño\Starter-Astro\
```

## 📁 **Archivos principales que podés editar:**

### 🏠 **Página principal** (`src/pages/index.astro`)
- **Hero section**: Títulos y textos principales
- **Sección bienvenida**: Contenido corporativo  
- **Servicios**: Textos de Inversiones, Terrenos, Naves
- **Propiedad destacada**: Detalles de la propiedad
- **Servicios corporativos**: Descripciones

### 🔝 **Header** (`src/components/Header.astro`)
- **Logo**: Cambiar imagen del logo
- **Navegación**: Modificar menú y enlaces
- **Iconos flotantes**: Teléfono, email, horarios

### 🔻 **Footer** (`src/components/Footer.astro`)
- **Logo del footer**
- **Enlaces**: Propiedades, Soluciones, Contacto
- **Información de contacto**
- **Redes sociales**

## 🛠️ **Pasos para editar:**

### 1️⃣ **Editar archivos**
- Abrí VS Code
- Navegá a la carpeta del proyecto
- Editá los archivos que necesites
- Guardá los cambios (Ctrl+S)

### 2️⃣ **Ver cambios localmente (opcional)**
```powershell
# Navegar al directorio
cd "E:\00-AlertaGráfica\Tecniprop\Web actual\Web-Rediseño\Starter-Astro"

# Instalar dependencias (solo la primera vez)
npm install

# Ejecutar servidor local
npm run dev
```
El sitio estará disponible en `http://localhost:4321` o el puerto que indique.

### 3️⃣ **Subir cambios a Internet**
```powershell
# Navegar al directorio del proyecto
cd "E:\00-AlertaGráfica\Tecniprop\Web actual\Web-Rediseño\Starter-Astro"

# Agregar cambios
git add .

# Guardar cambios con descripción
git commit -m "Descripción de lo que cambiaste"

# Subir a Internet
git push
```

### 4️⃣ **Verificar actualización**
- Esperá 1-2 minutos
- Visitá https://tecniprop-broker.netlify.app/
- Refrescá la página (F5) para ver los cambios

## 🖼️ **Para cambiar imágenes:**

### **Opción 1: Usar ImgBB (recomendado)**
1. Subí tu imagen a https://imgbb.com/
2. Copiá la URL directa de la imagen
3. Reemplazá la URL en el código

### **Opción 2: Carpeta public**
1. Guardá la imagen en `public/nombre-imagen.jpg`
2. En el código usá `/nombre-imagen.jpg`
3. Hacé commit y push

## 📄 **Para agregar/cambiar PDFs:**
1. Guardá el PDF en la carpeta `public/`
2. En el código usá `/nombre-archivo.pdf`
3. Hacé commit y push

## ⚠️ **Consejos importantes:**
- **Siempre hacé backup** antes de cambios grandes
- **Probá localmente** antes de subir (paso 2)
- **Usá nombres descriptivos** en los commits
- **Un cambio por vez** es más fácil de manejar

## 🆘 **Si algo sale mal:**
- **Git status**: Ver qué cambió
- **Git log**: Ver historial de cambios  
- **Git checkout -- archivo**: Deshacer cambios de un archivo
- **Contactá a Claude** para ayuda específica

## 📞 **URLs importantes:**
- **Sitio web**: https://tecniprop-broker.netlify.app/
- **GitHub**: https://github.com/PatoCeriani/tecniprop-website
- **Netlify**: Panel de control de deploy

---
*Creado: 23 de septiembre 2025 - Para Tecniprop Broker Consulting*