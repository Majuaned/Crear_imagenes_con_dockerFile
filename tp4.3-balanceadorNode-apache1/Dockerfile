# Usa la imagen php:apache-bullseye como punto de partida
FROM php:apache-bullseye

# Copia tu archivo PHP al directorio raíz de Apache
#COPY index.js /var/www/html/ 
#si coloco copy . copia toda la carpeta
COPY . /var/www/html/ 

# Instalación de los drivers para que el contenedor entienda MySQL
RUN docker-php-ext-install mysqli
RUN docker-php-ext-enable mysqli

# Instala Node.js y npm
RUN apt-get update && apt-get install -y ca-certificates curl gnupg && mkdir -p /etc/apt/keyrings && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
&& echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && apt-get update && apt-get install -y nodejs && npm update && npm start

# Expón el puerto 8081 para Express (si es necesario)
EXPOSE 8070

# Deja que Apache siga ejecutándose (esto arrancará tu servidor PHP) 
CMD ["apache2-foreground"]

#Comando para crear la imágen determinada en el dockerfile
#docker build -t imagentp4prueba-apache .

#Comando para crear y levantar el contenedor:
#docker run -d --name conte-apacheNode -p 8070:80 imagentp4prueba-apache

#docker inspect conte-apache1; 172.17.0.3
 