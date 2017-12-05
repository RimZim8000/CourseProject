import  { auth, provider } from './firebase';
import  {mainStore} from '../mainStore';
import DataCollector from '../Data/getData';
// class Authenticator
// {
    export  default function Login()
    {
        console.log('In GoogAuth.js.:Login REACT_APP_GOOGLE_KEY is ', process.env.REACT_APP_GOOGLE_KEY);
        
        auth.signInWithPopup(provider)
        .then(
            (result) => {
                mainStore.dispatch({type: 'USER_LOGIN',payLoad:result.user.uid});
                console.log('in Login function - user is - ', result.user.uid);
                let d = new DataCollector();
                d.getData();
            }
            );
        // var result = async auth.signInWithPopup(provider);
        // await mainStore.dispatch({type: 'USER_LOGIN',payLoad: result.user});
        
    }
// }
// export default Authenticator;

export function Logout()
{
    console.log('In GoogAuth.js.:Logout REACT_APP_GOOGLE_KEY is ', process.env.REACT_APP_GOOGLE_KEY);
    
      auth.signOut().then(()=> {
        mainStore.dispatch({type: 'USER_LOGIN',payLoad:false});
        console.log('in export function Logout()-- after Logged out ');
      });
}


export  function Login2()
{
    fetch('http://courseproject2017.azurewebsites.net/auth/login/google', {
        //mode: 'no-cors',
        method: "GET",
        headers: {
            'Accept': 'application/json',
                      'Content-Type': ' application/json',
                      'X-API-SERVER': '85499f9f'
                  },
      }).then(response => {
                response.text();
                console.log(response);
            }
        )      // 1
          .then(json => {                    // 2
               console.log("typeof json: " + typeof json);
               console.log(json);
               })
          .catch(error => {                  // 3
           console.log(error);
          });
}

export function Logout2()
{

}