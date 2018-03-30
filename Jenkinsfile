pipeline {
    agent { dockerfile true }
    stages {
        stage('Unit Test') {
            steps {
                sh 'cd test/unit && start_test -junit-xml -junit-xml-file ${WORKSPACE}/test/unit/Logs/chapel-unit-tests.xml -numlocales 4'
            }
            post {
                always { 
                    junit 'test/unit/Logs/*.xml' 
                    perfReport 'test/unit/Logs/*.xml'
                }
            }
        }
        stage('Performance Test') {
            steps {
                sh 'export CHPL_TEST_PERF_DIR=${WORKSPACE}/test/performance/dat && cd test/performance && start_test --performance -junit-xml -junit-xml-file ${WORKSPACE}/test/performance/Logs/chapel-perf-tests.xml -numlocales 4'
                sh 'cd test/performance && ./correctHtml.sh'
            }
            post {
                always { 
                    junit 'test/performance/Logs/*.xml' 
                    perfReport 'test/performance/Logs/*.xml'
                }
            }
        }
    }
}