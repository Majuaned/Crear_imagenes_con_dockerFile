FROM php:apache-bullseye

COPY index.php /var/www/html/

#  Instalación de los drivers para que el contenedor entienda mysql
RUN docker-php-ext-install mysqli

RUN docker-php-ext-enable mysqli

EXPOSE 8082


#Comando para crear la imágen determinada en el dockerfile
#docker build -t imagentp43-apache .

#Comando para crear y levantar el contenedor:
#docker run -d --name conte-apache2 -p 8082:80 imagentp43-apache

#docker inspect conte-apache2; 172.17.0.4
