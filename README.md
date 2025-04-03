# Express SonarQube Demo

Proyecto base de Express.js para realizar prácticas de análisis con SonarQube.

## Requisitos

- Node.js (v12 o superior)
- SonarQube instalado localmente o mediante Docker

## Instalación

1. Descomprime el archivo ZIP
2. Navega al directorio del proyecto:
   ```
   cd express-sonarqube-demo
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar la aplicación:
```
npm start
```

La aplicación estará disponible en: http://localhost:3000

## Configuración de SonarQube

### Instalación rápida con Docker

```
docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
```

### Acceder a SonarQube
- URL: http://localhost:9000
- Usuario por defecto: admin
- Contraseña por defecto: admin

### Ejecutar análisis

1. Crea un proyecto en SonarQube con la clave "express-sonarqube-demo"
2. Genera un token de análisis
3. Ejecuta el análisis con tu token:
   ```
   npm run sonar -- -Dsonar.login=TU_TOKEN
   ```

## Características del proyecto

Este proyecto incluye deliberadamente varios problemas que SonarQube puede detectar:

- Code smells (uso de var, manipulación ineficiente del DOM)
- Vulnerabilidades potenciales (falta de validación de entradas)
- Duplicación de código
- Problemas de seguridad (exposición de stacktrace)

Puedes usar este proyecto para aprender a identificar y corregir estos problemas mediante SonarQube.
