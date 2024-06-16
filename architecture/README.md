# Feefo Technical Assessment - Docker Setup

This document provides instructions to set up the Feefo Technical Assessment.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

## Project Structure

The project consists of the following services:

1. **PostgreSQL**: Database for the application.
2. **Backend**: Java API backend regarding the first part technical assessment.
3. **SonarQube**: Platform for continuous inspection of code quality.
4. **SonarQube Token Creator**: Service to create and configure a user and token in SonarQube.
5. **Frontend**: React application regarding the second part technical assessment.

## Usage Instructions

### 1. Clone the Repository

Clone the project repository to your local machine.

```sh
git clone https://github.com/roaugusto/feefo-tech-assessment.git
cd feefo-tech-assessment
```

### 2. Navigate to the Docker folder:

```sh
cd architecture/docker
```

### 3. Build and Run the Services

Use Docker Compose to build and run the services. Execute the following command:

```sh
docker-compose up -d
```

### 3. Access the Services

- **Swagger (API Documentation)**: http://localhost:8080/swagger-ui.html
- **SonarQube (Code Analysis)**: http://localhost:9000
- **Frontend (Second Technical Assessment)**: http://localhost:3000

### 4. Stop the Services

```sh
docker-compose down
```

### Additional Notes

- PostgreSQL data is persisted in the ./postgres-data directory within the architecture/docker folder.
- SonarQube data, extensions, logs, and temporary files are persisted in their respective directories: ./sonarqube_data, ./sonarqube_extensions, ./sonarqube_logs, and ./sonarqube_temp, all within the architecture/docker folder.
