function fiveAndGreaterOnly (data){
  return data.filter(x => x > 5)
}

const evensOnly = (data) => {
    return data.filter( x => x % 2 === 0)
}

const fiveCharactersOrFewerOnly = (data) => {
    return data.filter( x => x.length <= 5)
}

const peopleWhoBelongToTheMovieClub = (data) => {
    return data.filter(x => x.member === true)
}

const ofAge = (data) => {
    return data.filter(x=> x.age > 18)
}

function App() {
    const fiveAndGreater = fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]
    const evens = evensOnly([3, 6, 8, 2]); /// [6, 8, 2]
    const chars = fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["by", "dog", "wolf", "eaten"]
    const club = peopleWhoBelongToTheMovieClub([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: false },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]);

    const age = ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 50 },
    { name: "Bob Ziroll", age: 100 }])

    return (
    <>
      fiveAndGreater: {fiveAndGreater.map(x => <p> {x} </p>)}
        evensOnly: {evens.map ( x=> <>{x}, </> )}
        fiveCharactersOrFewerOnly: {chars.map ( x=> <li>{x}</li>)}
        peopleWhoBelongToTheMovieClub: {club.map (x=> <p>Name: {x.name} member: {x.member.toString()}</p>)}
        age: {age.map (x => <p>Name: {x.name}</p>)}
      <br/>
    </>
  );
}

export default App;
