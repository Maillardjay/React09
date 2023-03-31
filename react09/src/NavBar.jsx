import React from 'react'
import Jeremy from './components/jeremy.jsx'
import Laure from './components/laure.jsx'
import Tony from './components/anthony.jsx'
import Flo from './components/floriane.jsx'
import CardNicolas from './components/nicolas.jsx'
import SuperMocca from './components/marta.jsx'
const Navbar = () => {
  return (
    <div>
      <PrimaryNav>
        <Persons>
          <PersonLink to="/jeremy" activeStyle>
            Jeremy
          </PersonLink>
          <PersonLink to="/laure" activeStyle>
            Laure
          </PersonLink>
          <PersonLink to="/anthony" activeStyle>
            Tony
          </PersonLink>
          <PersonLink to="/floriane" activeStyle>
            Flo
          </PersonLink>
          <PersonLink to="/nicolas" activeStyle>
            Nicolas
          </PersonLink>
          <PersonLink to="/marta" activeStyle>
            Marta Mocca
          </PersonLink>

        </Persons>
      </PrimaryNav>
    </div>
  )
}
export default Navbar