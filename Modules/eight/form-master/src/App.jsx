import { data } from "react-router-dom";
import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import GrandPa from "./components/GrandPa/GrandPa";
// import Hookform from "./components/Hookform/Hookform";
// import RefForm from "./components/RefForm/RefForm";
// import Statefulform from "./components/StatefulForm/Statefulform";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign Up data ", data);
  // };

  // const handleUpdateSubmit = (data) => {
  //   console.log("Update data ", data);
  // };

  return (
    <>
      <h1>Form Master</h1>

      <GrandPa></GrandPa>

      {/* <SimpleForm></SimpleForm> */}

      {/* <Statefulform></Statefulform> */}

      {/* <RefForm></RefForm> */}

      {/* <Hookform></Hookform> */}

      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitButtonTxt={"Update"}
        handleSubmit={handleUpdateSubmit}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Please update the profile right now</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
