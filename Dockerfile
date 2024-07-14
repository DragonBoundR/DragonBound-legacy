# Usa una imagen base de Node.js
FROM node:14

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000  

# Comando por defecto
CMD ["node", "src/web.js"]