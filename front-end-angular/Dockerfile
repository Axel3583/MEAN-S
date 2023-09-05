# Utilisez une image de base Node.js pour construire l'application
FROM node:latest AS build

# Créez un répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers de dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers
COPY . .

# Construisez l'application
RUN npm run build

# Utilisez une image légère pour exécuter l'application
FROM nginx:latest

# Supprimez les fichiers par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiez les fichiers de construction depuis l'étape build dans le répertoire approprié de Nginx
COPY --from=build /usr/src/app/dist/front-end-angular /usr/share/nginx/html

# Exposez le port d'écoute de Nginx
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]
