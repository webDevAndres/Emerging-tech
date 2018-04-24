#Getting started with gulp

1. Install Node.js and npm if you have not already on your computer.
   Verify that the installation was successfuly by running node -v and npm -v in your command line.

2. Create a package.json file to keep track of all the packages/dependencies in your projects.
   Use the following command in your project folder npm init and follow the steps. It alright to leave the defaults.

3. Install gulp in your project root directory by running npm install --save-dev gulp. All Node.js and npm store packages and       dependencies will be stored in the node_modules folder.

4. In order to use gulp you need to install the gulp-cli module globally on your computer. npm install -g gulp-cli

##Gulp vocabulary
#### Basic gulp methods
1. .task() method is the wrapper for tasks. The syntax is .task(some string goes here, function goes here). as you can see this method takes two arguments, a string value that represents the name of the task and a function that will be run when the task is called.

2. .src() method is how we gain access to the source files we want to work with. The src method accepts a single glob string or an array of glob strings.A Globs is another word for a filename pattern, kind of like selected all files with a wildcard character like *.html. Select all files with that match the pattern of the .html extension.

3. .watch() method looks for changes in our files. The syntax for verseion 3.x of gulp is .watch( a string goes here || array,array). For version 4 the syntax is .watch(a string goes here || array, gulp.series() || gulp.parallel()).
4. .dest() method sets the destination of the processed file.

5. .pipe() method is used to pipe together smaller single-purpose plugins or applications into a pipechain.

6. .parallel() and .series() methods controls in what order your taks are run. The syntax is .series( a task goes here) and .parallel(a task goes here)

#### --save-dev 
    This is a flag that tells npm to add this module the dev dependencies list in the package.json file that is created when y ou run npm init.

##### Streams what are they?
    Streams were created to operate ono data without the need to buffer the entire file. This lead to quicker processing compared to other task runners.
    More informatiokn about streams can be found on the Node.js website. https://nodejs.org/api/stream.html.