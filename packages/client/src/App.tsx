import React from 'react'

import { FirebaseContext, Firebase } from './firebase'
import './App.css'

const FirebaseClass = new Firebase()

const TestContext = React.createContext({
  mensaje: '',
  setMensaje: null,
})

const App: React.FC = () => {
  const [state, setState] = React.useState('Esto se debe de ver donde sea')
  return (
    <TestContext.Provider
      value={{
        mensaje: state,
        setMensaje: setState,
      }}>
      <FirebaseContext.Provider value={FirebaseClass}>
        <div className="App">
          <Idea mensaje={state} />
        </div>
      </FirebaseContext.Provider>
    </TestContext.Provider>
  )
}

// class Counter extends React.Component<any, any> {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0,
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState({
//       counter: this.state.counter + 1,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>{this.state.counter}</button>
//       </div>
//     )
//   }
// }

function CounterWithHooks() {
  const [person, setPerson] = React.useState({ name: '', lastName: '' })
  const [counter, setCounter] = React.useState(0)

  React.useEffect(() => {
    console.log('Trigger de effect')
  }, [])

  const updatePerson = () => {
    // codigo loquisisisisisismo
    const newPerson = {
      name: 'Jorge',
      lastName: 'Bohorquez',
    }

    setPerson(newPerson)
  }
  return (
    <div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <button onClick={() => updatePerson()}>Update</button>
      <button onClick={() => setCounter(counter + 1)}>Count: {counter}</button>
    </div>
  )
}

//useState
//useEffect
//useContext

const Idea = ({ mensaje }) => {
  const firebase = React.useContext(FirebaseContext)
  const [data, setData] = React.useState<any>({})

  React.useEffect(() => {
    const fetchData = async () => {
      const snap = await firebase.db
        .collection('Ideas')
        .where('type', '==', '1')
        .get()
      const dataArray = snap.docs.map(doc => doc.data())
      console.log(dataArray)
    }
    fetchData()
  }, [firebase])

  return (
    <div>
      Data: {JSON.stringify(data, null, 2)}
      <HijoAnidado />
    </div>
  )
}

const HijoAnidado = () => {
  return (
    <div>
      <TestContext.Consumer>
        {({ mensaje, setMensaje }) => {
          return (
            <>
              Estoy muy anidado y uso render props <b>{mensaje}</b>
              <button
                onClick={() => setMensaje('Cambió el mensaje desde el hijo')}>
                Cambia mensaje desde el hijo
              </button>
            </>
          )
        }}
      </TestContext.Consumer>
    </div>
  )
}

export default App
