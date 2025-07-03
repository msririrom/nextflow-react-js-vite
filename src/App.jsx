import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let Hello = (props) => {
  // if move <div> to new line , it will error
  // because it is not a valid JSX syntax
  // we can use () to wrap the return value
  // or we can use <React.Fragment> to wrap the return value
  // or we can use <></> to wrap the return value
  // or we can use <div> to wrap the return value
  // or we can use <section> to wrap the return value
  // or we can use <article> to wrap the return value
  // or we can use <main> to wrap the return value

  if(props.username === 'undefined') {
    return <div>
      <h1 className='soft'>Hello : {props.username}</h1>
      <p>Username is undefined</p>
    </div>;
  }else{
 return <div>
    <h1 className='soft'>Hello : {props.username}</h1>
    </div>;
  }

 
}


let Hello2 = (a,b) => {
    return <div>
      <p>username : {a.username}</p>
      <p>password : {b.password}</p>
    </div>;
}

function Goodbye() {
  return (
  <div>
    <h1>Goodbye</h1>
  </div>
  )
}

function App() {
  
  let city = 'Bangkok';

  const onSawasdee = () => {
    console.log('Sawasdee Ka');
  }

  return (
    <div>
      <h1>Helloooooooo Malinee</h1>
      <h1 id='header' className='danger' >Are you live in {city}</h1>
      <Hello username="Maple"></Hello>
      <Hello username={city}></Hello>
      <Hello2 username="AAA" password="BBB"></Hello2>
      <button onClick={onSawasdee}>SAWASDEE</button>
    </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <h1>Hello Malinee S.</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
