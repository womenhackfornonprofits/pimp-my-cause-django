module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sync');


grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	//------- CSS Minify -------//
	cssmin: {
		combine: {
		  files: {
		    '../pimpmycause/static/styles/styles.css': ['css/styles.css']
		  }
		}
	},
	//------- SASS -------//
	sass: {
		dist: {
			files: {
				'css/styles.css': 'src/sass/styles.scss'
			}
		}
	},
	//------- Watch SASS -> CSS -------//
	watch: {
		sass: {
		  files: 'sass/styles.scss',
		  tasks: ['sass']
		}
	},
	jspaths: {
        src: {
                js: 'src/**/**.js'
            },
            dest: {
                jsMin: '../pimpmycause/static/scripts/pimpmycause.min.js'
            }
    },
    uglify: {
        options: {
            compress: true,
            mangle: true,
            sourceMap: true
        },
        target: {
            src: '<%= jspaths.src.js %>',
            dest: '<%= jspaths.dest.jsMin %>'
        }
    },
    sync: {
        main: {
            files: [{
                src: [ 'src/img/**' ],
                dest: '../pimpmycause/static/img/'
            }],
            verbose: true, // Default: false 
            pretend: true, // Don't do any disk operations - just write log. Default: false 
            failOnError: true, // Fail the task when copying is not possible. Default: false 
            ignoreInDest: "**/*.js", // Never remove js files from destination. Default: none 
            updateAndDelete: true, // Remove all files from dest that are not found in src. Default: false 
            compareUsing: "md5" // compares via md5 hash of file contents, instead of file modification time. Default: "mtime" 

        }
    }
});

	grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'sync']);

}