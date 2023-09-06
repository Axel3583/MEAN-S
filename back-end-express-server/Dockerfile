# Utilisez une image de base Node.js pour construire le backend
FROM node:latest

# Créez un répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers de dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install --production

# Copiez le reste des fichiers
COPY . .

# Exposez le port d'écoute du backend
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
