# Utilisez une image de base Node.js
FROM node:latest

# Créez un répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers de dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers
COPY . .

# Exposez le port
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
