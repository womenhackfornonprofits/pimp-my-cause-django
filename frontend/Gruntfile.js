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
	uglify: {
	    my_target: {
	      files: {
	        '../pimpmycause/static/scripts/pimpmycause.min.js': ['src/scripts/scripts.js']
	      }
	    }
  	}

});

	grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);

}