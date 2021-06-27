import Header from './components/header'
import Footer from './components/footer'
import Group from './components/group'

import './App.css'

function App() {
  
  const groups = [
    'Not Started',
    'In Progress',
    'Completed'
  ]

  return (
    <div className="App">
        <Header name="Lokesh" fanOf="shakira" />
        <div className="groups">
          {
            // (a, b) => (a+b)
            //map function takes each element of an array or object and returns something from it
            groups.map((group) => (
              <Group name={group} />
            ))
          }
        </div>
    </div>
  );
}

export default App