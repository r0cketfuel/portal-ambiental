# Usa una imagen de node como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# # Expone el puerto 3000 para que pueda ser accedido desde el exterior
# EXPOSE 3000

RUN npm run build

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm", "start"]
