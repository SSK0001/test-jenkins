pipeline {
    agent any
    tools {nodejs "node"}
    environment {
        registry = "docksanthosh/testing-jenkins"
        registryCredential = "dockerhub"
        dockerImage = ""
      }

      stages {
        stage("Build") {
           steps {
             sh "npm install"
             sh "npm run bowerInstall"
           }
        }
        stage("Building image") {
          steps{
            script {
              dockerImage = docker.build registry + ":$BUILD_NUMBER"
            }
          }
        }
        stage("Deploy Image") {
          steps{
            script {
              docker.withRegistry( '', registryCredential ) {
                dockerImage.push()
              }
            }
          }
        }
      }
}
