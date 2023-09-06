# Projet MEAN - Plateforme Web

***Un projet MEAN (MongoDB, Express.js, Angular, Node.js) pour créer une plateforme web évolutive et performante, avec Docker et Elasticsearch.*

# Table des Matières
# Aperçu
# Technologies Utilisées
# Mise en Place
       . Prérequis
       . Installation
       . Configuration
# Structure du Projet
# Utilisation
# Développement
# Contribuer
# Licence


****************************************************************

# Aperçu

Ce projet MEAN vise à créer une plateforme web qui permettra aux utilisateurs de faire X, Y et Z. 
Il offre une architecture robuste basée sur MongoDB, Express.js, Angular et Node.js pour garantir des performances et une évolutivité optimales. 
De plus, il intègre Docker pour la gestion des conteneurs et Elasticsearch pour la recherche et l'analyse des logs.

# Technologies Utilisées
             . Node.js
             . Express.js
             . MongoDB
             . Angular
             . Docker
             . Elasticsearch

# Mise en Place

***Suivez ces étapes pour configurer et exécuter le projet localement. 😎***

# Prérequis

                Node.js (version latest)
                MongoDB (version latest)
                Docker (version latest)
                Elasticsearch (version latest)
                Angular CLI (version latest)

# Installation

               1. Cloner le référentiel depuis GitHub :
              
                git clone https://github.com/Axel3583/MEAN-S.git
                
                cd MEAN-S
              
               2. Installer les dépendances du backend :
              
                cd back-end-express-server
              
                npm install
              
              3. Installer les dépendances du frontend :
              
                cd ../front-end-angular

  npm install

# Configuration

              1. Créez un fichier .env à la racine du répertoire back-end-express-server et définissez les variables d'environnement requises :
              
              NODE_ENV=development
              MONGODB_URI=mongodatabase://localhost:xxxx/monappdb
              PORT=xxxx
              
              Assurez-vous d'ajuster les valeurs en fonction de votre environnement.
              
              2. Configurez le fichier .env.prod dans back-end-express-server pour les variables d'environnement de production.
              
              3. Pour la configuration d'Elasticsearch, suivez les instructions de la documentation officielle d'Elasticsearch.

# Structure du Projet

              🔥 La structure du projet est organisée de la manière suivante :
              
              back-end-express-server: Contient le code source du backend Node.js.
              
              front-end-angular: Contient le code source du frontend Angular.
              
              haproxy: Contient les fichiers de configuration pour HAProxy (production uniquement).
              
              elasticsearch: Contient la configuration d'Elasticsearch.
              
              Autres dossiers et fichiers pertinents.

# Utilisation

                Pour lancer le projet en mode de développement, suivez ces étapes :
                
                Dans le répertoire #back-end-express-server, exécutez le backend :
                
                npm start
              
                Dans le répertoire #front-end-angular, exécutez le frontend :
                
                ng serve
              
                Ouvrez un navigateur et accédez à http://localhost:4200 pour voir l'application en cours d'exécution.


****************************************************

# Pour exécuter le projet en mode de production avec Docker, consultez les instructions de déploiement dans docker-compose.prod.yml.

# Développement

  Développez de nouvelles fonctionnalités dans des branches de fonctionnalités distinctes.
  Assurez-vous de suivre les normes de codage et d'effectuer des tests appropriés.
  Soumettez des demandes de tirage vers la branche develop pour la revue.

# Contribuer

  Si vous souhaitez contribuer à ce projet, veuillez consulter le fichier 😁 pour obtenir des instructions détaillées sur la manière de contribuer.

# License

  Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails 🤪.





