import "./App.css";
import UserList from "./Components/UserList/UserList";

function App() {

  // console.log("Inside App function");

  // const [isUserLogedIn, changeIsLoggedInState] = useState(false);

  //useState is React predefined Function which returns two thing => variable and Function
  // by using the second variable i.e. function we can change the value of first parameter i.e. variable
  // when the state is changed by using the function the whole function is reloaded(called)
  // console.log(isUserLogedIn);
  // o/p 0:false
  // 1:ƒ ()

  //console.log(`isUserLogedIn1-> ${isUserLogedIn}`);

  // const test=()=>{
  //   console.log(1);
  //   setTimeout(()=>{
  //     console.log(2);
  //     changeIsLoggedInState(!isUserLogedIn);
  //   },3000);
  // }

  // const test=()=>{
  //   console.log(1);
  //     changeIsLoggedInState(!isUserLogedIn);
  //   console.log(2);
  // }

  // this test function leads to infinite loop because when test function is called state changes anf function reload and t
  //then test function called again 
  
 // test();

  //console.log(`isUserLogedIn2-> ${isUserLogedIn}`);


  return (
    <div>
       <UserList />
      
    </div>
  );
}

export default App;
