// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//   };

  return (
    <div>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
