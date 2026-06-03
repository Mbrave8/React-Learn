import './App.css'

function App() {
  let age = 0;

  const increaseAge = () => {
    age = age + 1;
    console.log(age)
  }
  return (
    <div className="hero">
      <h1>{age}</h1>
      <button onClick={increaseAge}>increase age</button>
    </div>
  )
}
export default App;

