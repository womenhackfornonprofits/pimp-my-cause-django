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
		    '../fashrevwall/static/styles/screen.css': ['styles/css/styles.css']
		  }
		}
	},
	//------- SASS -------//
	sass: {
		dist: {
			files: {
				'styles/css/styles.css': 'styles/styles.scss'
			}
		}
	},
	//------- Watch SASS -> CSS -------//
	watch: {
		sass: {
		  files: 'styles/styles.scss',
		  tasks: ['sass']
		}
	},
	uglify: {
	    my_target: {
	      files: {
	        '../fashrevwall/static/scripts/fashrevwall.min.js': ['scripts/lazyload.js']
	      }
	    }
  	}

});

	grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);

}