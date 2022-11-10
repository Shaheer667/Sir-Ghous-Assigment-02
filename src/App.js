import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Hello World";
  const obj = {name: "Hello World Object"};
  const data = ['We', 'are', 'United'] ;
  let dataMap = data.map((item)=> {
    return <h1>{item}</h1>
  });
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}];
  let listMap = list.map((item)=>{
    return <h1>{item.name}</h1>
  });
  const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}];
  let complexMap = complex.map((item)=>{
    return <div>
      <h1>{item.company}</h1>
      <h1>{item.jobs[0]}</h1>
      <h1>{item.jobs[1]}</h1> <hr/>
    </div>
  })


  return (
    
    <div className='App'>
      <h1>{name}</h1> <hr/>
      <h1>{obj.name}</h1><hr/>
      <div>{dataMap}</div><hr/>
      <div>{listMap}</div><hr/>
      <div>{complexMap}</div>

    </div>
  );
}

export default App;
