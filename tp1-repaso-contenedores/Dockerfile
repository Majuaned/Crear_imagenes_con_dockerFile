FROM php:apache-bullseye

COPY index.php /var/www/html/

#  Instalación de los drivers para que el contenedor entienda mysql
RUN docker-php-ext-install mysqli

RUN docker-php-ext-enable mysqli

EXPOSE 8088

#Comando para crear la imágen determinada en el dockerfile
#docker build -t imagentp1-apache .

#Comando para crear y levantar el contenedor:
#docker run -d --name contenedor-apache1 -p 8080:80 imagentp1-apache
