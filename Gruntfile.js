module.exports = function (grunt) {
	//configuration
	grunt.initConfig({
		// pass in options for plugins, references to  files etc
		concat: {
			// we can divide into sub-tasks
			js: {
				src: ["js/*.js"],
				dest: "build/scripts.js",
			},
		},
		uglify: {
			build: {
				files: [
					{
						src: ["build/scripts.js"],
						dest: [""],
					},
				],
			},
		},
	});

	//load plugins
	/*Load tasks from the specified Grunt plugin. This plugin must be installed locally via npm, and must be relative to the Gruntfile. Grunt plugins can be created by using the grunt-init gruntplugin template: grunt init:gruntplugin */
	// grunt.loadNpmTasks();
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	//register tasks
	grunt.registerTask("run", function () {
		console.log("I am running");
	});

	grunt.registerTask("sleep", function () {
		console.log("I am running");
	});
	// register all tasks
	grunt.registerTask("all", ["run", "sleep"]);
};
