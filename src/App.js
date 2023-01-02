import React, { useState } from 'react';
import List from './List'
import data from './data';
//import List from './List';
function App() {

const [people, setPeople]= useState(data)
console.log(data)

  return <main>
    <section className="container">
 <h4>{people.length} Birthdays Today</h4>
 <List people ={people}/>
<button className='btn' onClick={()=>setPeople([])}>Clear</button>
    </section>
  </main>




}

export default App;
