// Initialize Firebase
var config = {
  apiKey: "AIzaSyCK8v4mS7joKuDEI03pAmCqQ2CJH77UBFM",
  authDomain: "project1-drafthopper.firebaseapp.com",
  databaseURL: "https://project1-drafthopper.firebaseio.com",
  projectId: "project1-drafthopper",
  storageBucket: "project1-drafthopper.appspot.com",
  messagingSenderId: "1018212755473"
};
firebase.initializeApp(config);

var database = firebase.database();
var index = 0;

database.ref().on("child_added", function (childSnapshot, prevChildKey) {
  // console.log(childSnapshot.val());
  
  var beerStyle = childSnapshot.val().beerStyle;
  var beerABV = childSnapshot.val().beerABV;
  var beerBody = childSnapshot.val().beerBody;
  var beerColor = childSnapshot.val().beerColor;
  var glassType = childSnapshot.val().glassType;
  var servingTemp = childSnapshot.val().servingTemp;
  var beerImg = childSnapshot.val().beerImg;

  // removed class='active' from below a tag:
  var newTab = ("<li class='tab'>" + "<a href='#beer" + index + "'>" + beerStyle + "</a></li>");
  var newRow = [`
      <div id="beer${index}" class="col s12">${beerStyle} at Index: ${index}</div>
  `];
  
  var newRow = [
    `<div id="beer${index}" class="col s12" style="display: none">
        <div class="row">
          <div class="col s12 m12 valign-wrapper">
          <div class="card horizontal flex-s">
          <div class="beerImg box-a">
          <img src="assets/images/beers/${beerImg}" width="150" height="350">
        </div>
        <div class="card-content">
          <span class="card-title">${beerStyle} Facts:</span>
          <div class="divider"></div>
          <table>
          <tbody>
            <tr>
              <td>Body:</td>
              <td>${beerBody}</td>
            </tr>
            <tr>
              <td>Color:</td>
              <td>${beerColor}</td>
            </tr>                            
            <tr>
              <td>ABV:</td>
              <td>${beerABV}</td>
            </tr>
            <tr>
              <td>Glass Style:</td>
              <td>${glassType}</td>
            </tr>
            <tr>
              <td>Serving<br>Temperature:</td>
              <td>${servingTemp}</td>
            </tr>
          </tbody>
        </table>
      </div>      
    </div>
  </div>
</div>`
  ];  

  $("#beerTabs").append(newTab);
  $("#beerInfo").append(newRow);
  index++;
  // console.log(index); 
});
