FROM php:apache-bullseye

COPY index.php /var/www/html/

#  Instalación de los drivers para que el contenedor entienda mysql
RUN docker-php-ext-install mysqli

RUN docker-php-ext-enable mysqli

EXPOSE 8081

#Comando para crear la imágen determinada en el dockerfile
#docker build -t imagentp42-apache .

#Comando para crear y levantar el contenedor:
#docker run -d --name conte-apache1 -p 8081:80 imagentp42-apache

#docker inspect conte-apache1; 172.17.0.3

