#Steps to create main SVG element
1. create the main SVG element
2. d3.geo.path() object takes the features in the GEOJSON and coverts them into an SVG path.
3. svg.selectAll('path') adds a path to the main SVG elemnt, binds the data and sets the d propert of the path to the d3.geo.path() object

#adding state names the the map
1. create a svg.selectAll('text') that creates the boundaries for all the states.
    this statement creates a text element for each geometric feature in the data file and sets the text to be the value of the name peroperty of the geometry obejct.
2. .centroid() is the mathematical center of geometry

#adding the symbols for specific geographic locations
1. use the us-cities.csv
2. queue() allows to load two data files asyncronously and when both are dont exetute the ready() function
3. convert the latitude and langitude values to x and y pixel locations using d3.js projects object. for each circle that is created the latitude and longitude of each city is passed into the projects function. The return value is the x and y location of the pixel representing that location

#about the albersUsa projection
by default, D3.js uses a projection known as an albersUsa projection, which has a number of assumptions that come with it:

The dimensions of the resulting map are 1024 x 728

The map is centered at half of the width and height (512, 364)
the projection also places Alaska and Hawaii in the lower-left side of the map 