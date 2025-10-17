import React from 'react'

function Navigation() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="\image\brand_logo (1).png" alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigation
