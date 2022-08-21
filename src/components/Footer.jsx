import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>      
        <h6>
            {'Copyright © '}
            Zdrowo i Domowo Mariusz 
            {"  " + new Date().getFullYear()}.
        </h6>
  </div>
  )
}
