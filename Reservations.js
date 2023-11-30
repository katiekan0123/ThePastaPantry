const firebaseConfig = {
    apiKey: "AIzaSyCBgPBdnrKW5sWUlhiKRKHvqISjdrl3GtI",
    authDomain: "pasta-pantry-a9e13.firebaseapp.com",
    databaseURL: "https://pasta-pantry-a9e13-default-rtdb.firebaseio.com",
    projectId: "pasta-pantry-a9e13",
    storageBucket: "pasta-pantry-a9e13.appspot.com",
    messagingSenderId: "359080659470",
    appId: "1:359080659470:web:e34ac434b1a531a15b8a5f"
  };
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('customerdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send(){
    var number = document.getElementById("peopleCount").value;
    var date = document.getElementById("reservationDate").value; 
    var time = document.getElementById("reservationTime").value;
    var location = document.getElementById("location").value;
    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var concerns = document.getElementById("concerns").value;
    
    detailsRef.push().set({ 
        number: number, 
        date: date, 
        time: time, 
        location: location, 
        name: name,
        phoneNumber: phoneNumber, 
        email: email, 
        concerns: concerns
    }); 
}
