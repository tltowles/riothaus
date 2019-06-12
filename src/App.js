import React, { Component } from 'react'
import themeJSON from './theme-data'



class App extends Component {
  render() {
    
    const colorList = Object.keys(themeJSON.color.base).map((color) => {
      console.log(color)
      
      
      return(
        <li style={{
          listStyle: 'none',
          padding: '8px 10px',
          backgroundColor: `${themeJSON.color.base[color]}`
        }}>
        {color}
        </li>
      )

    })

    return (
      <div style={{padding: '20px'}}>
        <h1>Test Pulling data from sketch</h1>
        <ul style={{padding: '0'}}>
          {colorList}
        </ul>
      </div>
    )  
  }
}

export default App
