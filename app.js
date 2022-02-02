const express = require("express");
const app = express();

app.use(express.json());
  
app.post("/post", (req, res) => {
    const { ip } = req.body;
    // Asynchronous database opening
    const Reader = require('@maxmind/geoip2-node').Reader;

    Reader.open('./GeoLite2-City.mmdb').then(reader => {

        try {
          const response = reader.city(ip);
          const {latitude, longitude} = response.location;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          res.end(JSON.stringify({latitude: latitude, longitude: longitude}));
          
        } catch (e) {
            console.error(e.message);
            res.end(JSON.stringify({error: e.message}));
        }

    });
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
