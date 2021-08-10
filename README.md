# vite-react-ts-starter
Vitejs starter using React &amp; Typescript.

Styling done with TailwindCSS (using JIT mode).

Testing done with Jest.


## Docker

### Build Docker image
`sudo docker build -t vite-react-ts -f Dockerfile.dev .` build app with Docker and creates the image

#### Nota: para evitar dependencias duplicadas en docker vamos a eliminar los node_modules de nuestro directorio

### Show Docker images
`sudo docker images` returns the image that we have recently built

### Execute Docker image
`sudo docker run -it -p 3000:3000 <IMAGE_ID>` run app in docker

### Execute image with live reload
`sudo docker run -it -p 3000:3000 -v /home/node/node_modules -v "$(pwd)":/home/node <IMAGE_ID>` if we want to run in dev with live reload

### Execute tests in the instance
`sudo docker run -it <IMAGE_ID> npm run test` run tests inside Docker for CI in Travis

### Execute with Docker-compose
`sudo docker-compose up --build` run docker image throw Docker Compose

### Execute tests with live reload
`sudo docker exec -it <IMAGE_ID> npm run test` execute test inside Docker with live reload

### Access to one container instance
`sudo docker exec -it <IMAGE_ID> sh` para acceder a uno de los contenedores

### Create dist
`sudo docker build .` para generar la versión de producción y ejecuitarla en un nginx utilizamos el fichero Dockerfile

### Execute app with Nginx
`sudo docker run -p  8080:80 f290a9dbcd4f` ejecutamos la imagen de nuestra aplicación con el nginx y la mostramos en el puerto 8080