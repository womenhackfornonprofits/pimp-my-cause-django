module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');


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
});

	grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);

}