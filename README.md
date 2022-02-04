# geoip2
Get the latitude and longitude of any valid IP address. Built with React, Node, and Maxmind's GeoIP2 database. Runnable with Docker.

# Getting Started
## Docker
To run the app, you'll need to use [docker compose](https://docs.docker.com/compose/).   

## Steps
1. Clone the repo to your local environment.
2. Sign up for a [GeoLite2 account](https://www.maxmind.com/en/geolite2/signup), if you don't already have one.
3. Once logged in, go to the GeoLite2 [Downloads page](https://www.maxmind.com/en/accounts/current/geoip/downloads) and download 'GeoLite2 City'.
4. Extract the Gzip file, and move `GeoLite2-City.mmdb` to the `api/` directory of the cloned repo.
5. ** This is not ideal, but for now, you will probably need to change directories to `my-app` and run `npm install` (this requires npm to be installed). 
* The reason for this was that when I included node_modules as a volume in `docker-compose.yml` file, for the react-ui service, I got [this permissions error](https://stackoverflow.com/questions/67087735/eacces-permission-denied-mkdir-usr-app-node-modules-cache-how-can-i-creat). The only solution available online that worked for me was removing node_modules as a volume for the react-ui service. However, when I did that, I got [THIS](https://stackoverflow.com/questions/50920521/sh-1-react-scripts-not-found-in-docker) error. The only fix that worked for me was running `npm install` before building the docker image.  
7. From the root directory, run `docker-compose up --build` to build and run the docker images. 
8. You should then be able to view the app at localhost:3000

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
