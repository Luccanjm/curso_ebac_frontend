module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                   'dist/css/styles.css': 'src/less/styles.less'
                }
            }
        },
        concurrent:{
            target: ['less']
        },
        uglify:{
            uglify: {
                target:{
                   files:{
                    'main.min.js' : 'main.js'
                   } 
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify'])

}