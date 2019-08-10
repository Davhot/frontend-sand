import React from 'react'
import { Sidebar, Content } from '../../components'
import './style.css'

const Main = () => (
  <div className="main">
    <Sidebar />
    <Content />
  </div>
)

export { Main }
