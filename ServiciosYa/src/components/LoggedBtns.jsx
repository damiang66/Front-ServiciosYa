import React from 'react'

function LoggedBtns() {
  return (
    <nav>
      <Link to="/" ><img src="/search.svg" alt="search" /></Link>
      <Link to="/logOut"><img src="/logout.svg" alt="logout" /></Link>
    </nav>
  )
}

export default LoggedBtns
