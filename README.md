# Colimobis

## Project overview
TBD

## Platform Support

This app is intended for use on **Android** and has been developed and tested specifically for Android devices. iOS builds are not officially supported, so attempting to build or run the app on iOS may result in compatibility issues or errors.

## Prerequisites
- Node.js (version 22.9.0 or above)
- [Ionic CLI](https://www.npmjs.com/package/@ionic/cli)
- Capacitor CLI (Comes with Ionic)

## Installation
1. Clone the repository : 
    ```sh
    $ git clone https://github.com/Frozzie89/Colimobis.git
    $ cd Colimobis
    ```

2. Install dependencies : 
    ```sh
    $ npm install
    ```

## Building and running the web-app
To build and run the app locally without Docker, follow these steps :

1. Serve the app
    ```sh
    $ ionic serve
    ```
    This command will start a development server on http://localhost:8100, or another port if specified.



## Build and run with Docker
1. Build and start the app :
    ```sh
    $ docker-compose up --build
    ```

    This command will build the Docker image, install dependencies and start the ionic development server.

2. Access the app :
    Open http://localhost:8100 in your browser, or replace 8100 with your configured port if customized.

    You can configure the host and port by creating a .env file in the project root with the following variables : 

    ```txt
    HOST=0.0.0.0   # Custom host
    PORT=8100      # Custom port
    ```

## Running the App on Android using Capacitor

To run the Ionic app as a native Android app using Capacitor:

1. Set up Capacitor :
Initialize Capacitor in your project if not done already (this step only needs to be done once):
    ```sh
    $ npx cap init            # Initialize Capacitor
    $ npx cap add android     # Add the android platform
    $ npx cap sync android    # Syny the web assets and Capactitor configuration to the Android project
    ```
2. Run the app 

    2.1. with Android Studio
    ```sh
    $ npx cap open android
    ```


    2.2. without Android Studio (on a connected device)
    ```sh
    $ ionic cap run android --external -livereload --consolelogs --serverlogs
    ```

## Testing
This project includes Jasmine test. This command runs tests on a Firefox browser

```sh
$ npm run test:firefox
```