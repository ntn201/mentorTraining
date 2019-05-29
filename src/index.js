import "./index.css";
import "./mx.css";

import firebase from "firebase";
import riot from "riot";
import route from "riot-route";
import {mxFirebase} from "./mx";

import "./tags/signin.tag";
import "./tags/home.tag";
import "./tags/upload.tag";
import "./tags/signup.tag";
import "./tags/account.tag";

async function writeUserData(userId, name, email) {
  console.log("Writting");
  try {
    await firebase.firestore().doc('users/' + userId).set({
      username: name,
      email: email
    });
    console.log("Write Successful");
  }
  catch(err){
    console.log(err);
  }
}

var firebaseConfig = {
    apiKey: "AIzaSyDqyfKDNNukvQ6GxxgcgWbiBFJvvrOg3P4",
    authDomain: "code-camp-2019.firebaseapp.com",
    databaseURL: "https://code-camp-2019.firebaseio.com",
    projectId: "code-camp-2019",
    storageBucket: "code-camp-2019.appspot.com",
    messagingSenderId: "671184391294",
    appId: "1:671184391294:web:0d76e3b466e2ba43"
  };
firebase.initializeApp(firebaseConfig);

route.base("/");
route("/upload",async () => {
    var user = await firebase.auth().currentUser;
    // console.log(user);
    if (user){
      riot.mount("#root","upload");
      var sellButton = document.getElementById("sellButton");
      sellButton.addEventListener('click', async (e) => {
        // const ref = firebase.firestore().collection("test").doc();
        // console.log(ref.id);
        // ref.set({id: ref.id}).then(() => {
        //   ref.get().then(doc => {
        //     console.log(doc.data());
        //     })
        //   })
        // const r
        e.preventDefault();
        const upLoadTitle = document.getElementById("upLoadTitle").value

        const upLoadPhoto1 = document.getElementById("upLoadPhoto1").files;
        const upLoadPhoto2 = document.getElementById("upLoadPhoto2").files;
        const upLoadPhoto3 = document.getElementById("upLoadPhoto3").files;
        const upLoadPrice = document.getElementById("upLoadPrice").value;
        const option = document.getElementById("upLoadCategory");
        const upLoadCategory = option.options[option.selectedIndex].text;
        const upLoadItem = document.getElementById("upLoadItem").value;
        const upLoadReason = document.getElementById("upLoadReason").value;
        console.log(upLoadTitle);
        // console.log(upLoadPhoto);
        console.log(upLoadPrice);
        console.log(upLoadCategory);
        console.log(upLoadItem);
        console.log(upLoadReason);
        firebase.firestore().collection("product").doc().set({
          title: upLoadTitle,
          // photo1: upLoadPhoto1,
          // photo2: upLoadPhoto2,
          // photo3: upLoadPhoto3,
          price: upLoadPrice,
          option: upLoadCategory,
          item: upLoadItem,
          reason: upLoadReason
        });
      });
    }
    else{
      // console.log(user);
      riot.mount("#root","account");
      var signInButton = document.getElementById("signInButton");
      var signUpButton = document.getElementById("signUpButton");
      signInButton.addEventListener('click', () => {
        route("/signin");
      });
      signUpButton.addEventListener('click', () => {
        route("/signup");
      });
    }
});
route("/signin", () => {
    // var user = firebase.auth().currentUser;
    // console.log(user);
    riot.mount("#root", "signin");
    var signForm = document.getElementById("signinForm");
    // console.log(signinForm);
    signForm.addEventListener('submit',async (e) => {
      e.preventDefault()
      const email = document.getElementById("signinEmail").value;
      const password = document.getElementById("signinPassword").value;
      try{
        await firebase.auth().signInWithEmailAndPassword(email,password);
        console.log("Sign In Successful");
        route("/");
      }
      catch(err){
        console.log(err);
        document.getElementById("err-message").innerText = "Wrong email or password"
      }
    } )
});

route("/signup", () =>{
    riot.mount("#root","signup");
    var signUpForm = document.getElementById('signUpForm');
    // console.log(signUpForm);
    signUpForm.addEventListener('submit',async (e) =>{
        e.preventDefault();
        const name  = document.getElementById("signUpName").value;
        const email = document.getElementById("signUpEmail").value;
        const password = document.getElementById("signUpPass").value;
        const passConfirm = document.getElementById("signUpPassConfirm").value;
        console.log(email,password,passConfirm);
        if (passConfirm == password){
          try{
            await firebase.auth().createUserWithEmailAndPassword(email,password);
            console.log("Sign Up Succesful");
            await firebase.auth().signInWithEmailAndPassword(email,password);
            var user = firebase.auth().currentUser;
            writeUserData(user.uid,name,email);
            route("/")
          }
          catch(err){
            console.log(err);
          }
        }
    })
});
route("/",() => {
  riot.mount("#root","home");
})

route.start(true);