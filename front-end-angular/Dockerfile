# Utilise une image de base Node.js pour construire l'application
FROM node:latest AS build

# Crée un répertoire de travail
WORKDIR /usr/src/app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers
COPY . .

# Utilise une image légère pour exécuter l'application
FROM nginx:latest

# Copie les fichiers de construction dans le répertoire approprié de Nginx
COPY --from=build /usr/src/app/dist/front-end-angular /usr/share/nginx/html

# Expose le port d'écoute de Nginx
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]
