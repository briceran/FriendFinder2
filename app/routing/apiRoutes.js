// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  //app.get("/api/tables", function(req, res) {
  //  res.json(tableData);
  //});

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    var result = {
      name: "TO BE FILLED",
      photo:"TO BE FILLED"
    }
    var newcomer = req.body;
    var minDiff = 50;
      for (var i = 0; i < friends.length; i++) {
        var diffTotal = 0;
        var scoresIt = friends[i].scores;

        for(let i = 0; i < scoresIt.length; i++) {
          diffTotal+= Math.abs(scoresIt[i] - newcomer.scores[i]);
        }
        if(diffTotal < minDiff){
          minDiff = diffTotal;
          result.name = friends[i].name;
          result.photo = friends[i].photo;

        }

      }
      friends.push(newcomer);


      res.json(result);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];

    console.log(friends + "Emptied");
  });
};
