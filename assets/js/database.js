//grab a form
const form = document.querySelector('#con');

//grab an input


//config your firebase push
const config = {
    apiKey: "AIzaSyD_Ze1vPI2hdWjYNgw1NCtfmvv2EDxJ0nc",
    authDomain: "tensor-f772a.firebaseapp.com",
    databaseURL: "https://tensor-f772a.firebaseio.com",
    projectId: "tensor-f772a",
    storageBucket: "tensor-f772a.appspot.com",
    messagingSenderId: "1041924637939",
    appId: "1:1041924637939:web:b05e1f6d39c6d1213d2386",
    measurementId: "G-8NJFLKC7VF"
  };

//create a functions to push
    function firebasePush(email,uname,uquery) {

        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('Queries').push().set(
            {
                Question: [uname.value,email.value,uquery.value]
            }
        );

    }

//push on form submit
function send_info(){
    const inputEmail = form.querySelector('#u_email');
    const name = form.querySelector("#u_name");
    const query = form.querySelector("#subject");
    if (form) {
        firebasePush(inputEmail,name,query);
    }
    console.log(inputEmail,name,query);
}
