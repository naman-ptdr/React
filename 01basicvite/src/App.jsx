// vites default configuration say that file will be jsx
// And we can see as below code that function call tags 'chai' name must start with upper case
// This is only basic practise this things in basic react project are no need to do
// like upper case of any importing file name and file name can be js
import Chai from "./Chai";

// this importing function is bassicaly called as component
// and insure component name must cap its good practise
function App() {
  const expression = "Evaluated Expression";  //js final outcome jo evaluate ho gaya hai 
  return (
    // and here we can only return one element and in basic react project this all ele. are in div tag
    // but in vite they may be in <> </> tags this are also called fragment
    <>
      <Chai />
      <h1>Chai Aur react {expression}</h1>
      <p>test para</p>
    </>
  );
}

export default App;
