import  { auth, provider } from './firebase';
import  {mainStore} from '../mainStore';
// class Authenticator
// {
    export default  function Login()
    {
        auth.signInWithPopup(provider)
        .then(
            (result) => {
                mainStore.dispatch({type: 'USER_LOGIN',payLoad:result.user.uid});
                console.log('in Login function - user is - ', result.user.uid);
            }
            );
        // var result = async auth.signInWithPopup(provider);
        // await mainStore.dispatch({type: 'USER_LOGIN',payLoad: result.user});
        
    }
// }
// export default Authenticator;

export function Logout()
{
      auth.signOut().then(()=> {
        mainStore.dispatch({type: 'USER_LOGIN',payLoad:false});
        console.log('in export function Logout()-- after Logged out ');
      });
}