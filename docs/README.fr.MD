# Colimobis
[🇬🇧 English](../README.md)

![GitHub Tag](https://img.shields.io/github/v/tag/Frozzie89/Colimobis)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Frozzie89/Colimobis/android-build-signed.yml)
![GitHub License](https://img.shields.io/github/license/Frozzie89/Colimobis)
![Platform](https://img.shields.io/badge/platform-Android-blue)

<p align="center">
  <img src="../src/assets/icons/icon-192.webp" alt="Colimobis icon"/>
</p>


Colimobis est une application conçue pour gérer et suivre le statut des permis de travail, en contrôlant leur progression et l'état des installations. Elle permet aux utilisateurs d'enregistrer les changements d'état pour un suivi détaillé. L'application comprend un compte administrateur qui permet d'ajouter, de modifier et de supprimer des permis de travail, ainsi que de superviser les mises à jour de l'état d'avancement.

## Plateformes supportées

Cette application est destinée à être utilisée sur **Android** et a été développée et testée spécifiquement pour les appareils Android. Les versions iOS ne sont pas officiellement prises en charge, de sorte que toute tentative de création ou d'exécution de l'application sur iOS peut entraîner des problèmes de compatibilité ou des erreurs.

## Prérequis
- Node.js (version 22.9.0 or plus)
- [Ionic CLI](https://www.npmjs.com/package/@ionic/cli)
- Capacitor CLI (comes with Ionic)

## Installation
1. Cloner the dépôt : 
    ```sh
    $ git clone https://github.com/Frozzie89/Colimobis.git
    $ cd Colimobis
    ```

2. Installer les dépendances : 
    ```sh
    $ npm install
    ```

## Compiler et exécuter l'application web
Pour compiler et exécuter l'application localement sans Docker, suivez les étapes suivantes :

1. Démarrer l'application
    ```sh
    $ ionic serve
    ```
    Cette commande démarre un serveur de développement sur http://localhost:8100, ou sur un autre port si spécifié.

## Compiler et exécuter avec Docker
1. Compilier et démarrer l'application :
    ```sh
    $ docker-compose up --build
    ```

    Cette commande va construire l'image Docker, installer les dépendances et démarrer le serveur de développement Ionic.

2. Accéder à l'application :
    
    Ouvrir http://localhost:8100 dans votre navigateur, ou remplacer 8100 par votre port configuré s'il est personnalisé.
    
    Vous pouvez configurer l'hôte et le port en créant un fichier .env à la racine du projet avec les variables suivantes : 

    ```txt
    HOST=0.0.0.0   # hote personnalise
    PORT=8100      # port personnalise
    ```

## Lancer l'application sur Android avec Capacitor

Pour exécuter l'application Ionic comme une application native Android en utilisant Capacitor:

1. Configurer Capacitor :
    
    Initialiser Capacitor dans votre projet si ce n'est pas déjà fait (cette étape ne doit être faite qu'une seule fois):
    ```sh
    $ npx cap init            # Initialiser Capacitor
    $ npx cap add android     # Ajouter la plateforme Android
    $ npx cap sync android    # Synchroniser les ressources web et la configuration de Capacitor avec le projet Android
    ```
2. Lancer l'application 

    2.1. Avec Android Studio
    ```sh
    $ npx cap open android
    ```

    2.2. Sans Android Studio (depuis un appareil connecté)
    ```sh
    $ ionic cap sync
    $ ionic cap build android
    $ ionic cap run android --external -livereload --consolelogs --serverlogs
    ```

## Tests
Ce projet comprend des tests Jasmine. Cette commande exécute les tests sur un navigateur Firefox
```sh
$ npm run test:firefox
```
