# geoip2
Get the latitude and longitude of any valid IP address. Built with React, Node, and Maxmind's GeoIP2 database. Runnable with Docker.

# Getting Started
## Use Docker (recommended)
The best experience comes from using [docker compose](https://docs.docker.com/compose/).   
Simply clone the repo to your machine, and run `docker-compose up`. You should then be able to view the app at localhost:3000

## Run without Docker
If you don't want to use Docker, you could run the following:
### In one terminal:
// install server dependencies and start  
cd api  
npm install  
npm run dev  

### In another terminal:
// install react dependencies and start  
cd my-app  
npm install  
npm start  


# Testing
Testing is currently done manually.
* Put in any string that isn't a valid IP address, and expect an alert: (Error: yourString is invalid)
* Put in any valid IP address that isn't in the Maxmind GeoIP2 DB, such as 127.0.0.1, and expect an alert: (Error: The address 127.0.0.1 is not in the database)
* Put in any valid IP address that is in the Maxmind GeoIP2 DB, such as 107.152.101.212, and expect an alert: (Latitude: 40.7876, Longitude: -74.06)
* Close your server instance with the app still open, search for any string, and expect an alert: (TypeError: Failed to fetch)
* The submit button should be disabled when there is no input, and enabled when there is an input.
* The input text should disappear after submitting the form.
* The submit should not refresh the page.
* Clicking your 'enter' key should have the same effect as manually clicking the 'Submit' button.
