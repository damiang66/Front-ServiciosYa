import React from 'react'

function OfflineBtns() {
  return (
    <nav>
      <Link to="/" ><img src="/search.svg" alt="search" /></Link>
      <Link to="/logOut"><img src="/logout.svg" alt="LogIn" /></Link>
      <Link to="/LogIn"><img src="/logout.svg" alt="Register" /></Link>
    </nav>
  )
}

export default OfflineBtns
