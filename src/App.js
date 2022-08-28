function fiveAndGreaterOnly (data){
  return data.filter(x => x > 5)
}

const evensOnly = (data) => {
    return data.filter( x => x % 2 === 0)
}

function App() {
    const fiveAndGreater = fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]
    const evens = evensOnly([3, 6, 8, 2]); /// [6, 8, 2]
  return (
    <>
      fiveAndGreater: {fiveAndGreater.map(x => <p> {x} </p>)}
        evensOnly = {evens.map ( x=> <>{x}, </> )}
      <br/>
    </>
  );
}

export default App;
