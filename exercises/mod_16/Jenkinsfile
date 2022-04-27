pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/vhonorato/ebac.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Executar no browserstack') {
            steps {
                sh 'npm run android.browserstack.app'
            }
        }
    }
}