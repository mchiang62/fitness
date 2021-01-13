import './App.css';
import Cards from "./Components/Cards";
import Counter from "./Components/Counter";




function App() {
  

  return (
    <div className="App">
        <Cards />
        <Counter 
        name={'melissa'}
        initialVal={56} 
        />
    </div>
  );
}

export default App;
