import React from 'react'
import CakeList from '../containers/CakeList'
import AddCake from '../containers/AddCake'

const App = () => (
  <div className="container">
    <div className="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg/1280px-Red_Velvet_Cake_Waldorf_Astoria.jpg"
      alt="Red velvet cake" width="100" height="80" />
      <h1>Cake Manager</h1>
      <p>Welcome to the Cake Manager - add a new cake or browse existing cakes below!</p>
    </div>
    <AddCake />
    <br/>
    <CakeList />
  </div>
)

export default App
