
let vidID = "BOgRhiQFsx8"; // 2 comments

//let vidID = "kl39KHS07Xc"; // 44k comments

let pageTkn ="";

function loadClient() {
    gapi.client.setApiKey("AIzaSyCBMnGF1NUgLpHOFELJuMx9k8loGb_5uHE");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
}
  // Make sure the client is loaded before calling this method.
   
function execute() {
    return gapi.client.youtube.commentThreads.list({
        "part": [
            "snippet"
        ],
          "videoId": vidID,
          "maxResults": 100,
          //"pageToken": pageTkn
        })
        .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);

                    for (let index = 0; index < 100; index++) {
                      console.log(response.result.items[index].snippet.topLevelComment.snippet.textOriginal);
                    }
                    
                   
                    
                  },
                  function(err) { console.error("Execute error", err); });
}

  gapi.load("client");

 