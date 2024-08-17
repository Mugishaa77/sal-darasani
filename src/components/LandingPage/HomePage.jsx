import React from 'react'
import { Element } from 'react-scroll';
import Hero from './Hero'
import About from './About'
import JoinOrg from './JoinOrg'
import Partners from './Partners'
import Footer from './Footer'

function HomePage() {
  return (
    <div>
      <Element name='home'><Hero /></Element>
      <Element name='services'><About /></Element>
      <Element name='join-org'><JoinOrg /></Element>
      <Element name='our-partners'><Partners /></Element>
      <Element name='footer'><Footer /></Element>    
        
    </div>
  )
}

export default HomePage