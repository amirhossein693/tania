module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      // define the files to lint
      files: ['gruntfile.js', 'src/js/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    uglify: {
      build: {
        files: [{
          expand: true,
          dot: true,
          extDot: 'last',
          cwd: 'dist',
          src: ['js/*.js', 'js/**/*.js'],
          dest: 'dist/',
          ext: '.js',
        }],  
      }
    },

    sass: {
      options: {
        sourceMap: true,
        includePaths: [
          'src/scss',
          'src/vendor'
        ]
      },
      app: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['**/*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 15 version']
      },
      build: {
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['css/**/*.css'],
            dest: 'dist/',
            ext: '.css',
          }
        ]
      }
    },    

    cssmin: {
      build: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'dist',
          src: ['css/*.css', 'css/**/*.css'],
          dest: 'dist/',
          ext: '.css',
        }],  
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          src: ['**/*', '!scss/**'],
          dest: 'dist/'
        }],
      },
      serve: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          src: ['**/*', '!scss/**'],
          dest: 'dist/'
        }],
      },      
    },

    webfont: {
      build: {
          src: 'src/images/iconfonts/*.svg',
          dest: 'src/fonts/iconfonts',
          destCss: 'src/scss/base',
          options: {
            htmlDemo: false,
            autoHint: false,
            stylesheet: 'scss',
            templateOptions: {
              baseClass: 'ico',
              classPrefix: 'ico-',
              mixinPrefix: 'mico-'
            },
          },
      }
    },  

    watch: {
      scss: {
        files: ['src/scss/**'],
        tasks: ['compass:build', 'autoprefixer:build', 'copy:serve'],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ['src/js/**'],
        tasks: ['jshint', 'copy:serve'],
        options: {
          spawn: false,
        },
      },
      images: {
        files: ['src/images/**'],
        tasks: ['webfont:build', 'compass:build', 'autoprefixer:build',  'copy:serve'],
        options: {
          spawn: false,
        },
      },
    },

    clean: {
      build: ["dist"]
    }

  });

  // module(s)
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');

  // task(s).
  grunt.registerTask('build', [
                                'jshint',
                                'clean:build',
                                'webfont:build',
                                'compass:build',
                                'autoprefixer:build',
                                'copy:build',
                                'uglify:build',
                                'cssmin:build'
                              ]);

  grunt.registerTask('serve', [
                                'jshint',
                                'clean:build',
                                'webfont:build',
                                'sass:app',
                                'autoprefixer:build',
                                'copy:serve',
                                'watch'
                              ]);  

};