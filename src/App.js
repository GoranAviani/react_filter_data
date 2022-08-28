function fiveAndGreaterOnly (data){
  return data.filter(x => x > 5)
}

const evensOnly = (data) => {
    return data.filter( x => x % 2 === 0)
}

const fiveCharactersOrFewerOnly = (data) => {
    return data.filter( x => x.length <= 5)
}


function App() {
    const fiveAndGreater = fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]
    const evens = evensOnly([3, 6, 8, 2]); /// [6, 8, 2]
    const chars = fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["by", "dog", "wolf", "eaten"]
  return (
    <>
      fiveAndGreater: {fiveAndGreater.map(x => <p> {x} </p>)}
        evensOnly = {evens.map ( x=> <>{x}, </> )}
        fiveCharactersOrFewerOnly = {chars.map ( x=> <li>{x}</li>)}
      <br/>
    </>
  );
}

export default App;
