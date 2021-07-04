import {useState,useEffect} from 'react'

import Header from './components/header'
import Group from './components/group'
import {taskContext} from './context/taskContext'


import './App.css'

function App() {

    const getLocalItems = () =>{
        let list = localStorage.getItem('lists');
        console.log(list);

        if(list){
            return JSON.parse(localStorage.getItem('lists'));
        }
        else{
            return [];
        }
    }

    const groups = [
        'Not Started',
        'In Progress',
        'Completed'
    ]

    const [tasks, setTasks] = useState(
            getLocalItems());

    const click= () =>{   
        localStorage.removeItem('lists')
        setTasks([])
    }        

    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(tasks))
    }, [tasks])

    return (
        <taskContext.Provider value={[tasks, setTasks]}>
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
            <button onClick={click} className="glow-on-hover">Reset</button>
        </div>
        </taskContext.Provider>
    );
}

export default App