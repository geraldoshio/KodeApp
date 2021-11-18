import logo from './logo.svg';
import Bloglist from './Bloglist';


//to import just type the name of the component created
//you will notice a closeTAG below for the bloglist, ...either ways it works its just a short for opening and closing

function App() {
  const name = 'blessing';

  return (
    <div className="App">
      <h1>welcome to my first react application</h1>
      <p>hello {name}</p>
      <p>{name === 'blessing'? 'hello blessing, how are you?' : 'i am sorry, i do not know you' }</p> 
      <Bloglist /> 
    </div>
  );
}

export default App;
