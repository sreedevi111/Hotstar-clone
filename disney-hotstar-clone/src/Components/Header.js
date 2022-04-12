import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
   <Nav>
      <Logo src = "/images/logo.svg"/>
      <NavMenu>
          <a>
            <img src='/images/home-icon.svg'/>
            <span>HOME</span>
          </a>

          <a>
            <img src='/images/search-icon.svg'/>
            <span>SEARCH</span>
          </a>

          <a>
            <img src='/images/watchlist-icon.svg'/>
            <span>WATCHLIST</span>
          </a>

          <a>
            <img src='/images/original-icon.svg'/>
            <span>ORIGINALS</span>
          </a>

          <a>
            <img src='/images/movie-icon.svg'/>
            <span>MOVIES</span>
          </a>

          <a>
            <img src='/images/series-icon.svg'/>
            <span>SERIES</span>
          </a>


      </NavMenu>
      <UserImg src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAANlBMVEWVu9////+QuN6Mtt3K3O7j7Pby9vvE2OyavuCvy+akxOPY5fLp8Pj6/P260umqyOWFstvR4PDphOmSAAADqElEQVR4nO1b27KiMBCECbkCgfz/zy43dT0HyTRmdGuLfrJKyzSTuXZIVV24cOFCARCpGURfWVy54G3TzmisD059lMb00LE19d8wOlafs8UY2noPbRg/sj45vbv+DO0+YAayL9efYcUp0GsDbGYQpqBMhsDkk0qSAHVZAnXdCVqB9mPgJ1oxChRZBOo6ilHomQx6ofVVYhKo6yTjjcQmUNci20ANwKARoZBPBQ8YCQIDQKCuh/IEoE0Q2YZsQXiGQHlwiBtMjuCKM8DcQMIRPMjAlyZAKIPitSHTGn2CARaMAuF4MTjhB8WbZnZ/dEN5T4TzQfG0/P2cGLhN4oo+FGfw/crEGlYeEBhbFG9auUGX75bBcJQYWgLEoLwjVvyJaYbI1AQ1iiIqwj8wsSCOIOIG1QgwkBHVCJidhQQEfnESmNkWMGSsFWJiFrtPEhQVeUYQqIs3KJ4RRHVVjhFE1IsbWAVSTsubMeb7lE5Y4ne5CtnLueGK7D7I7sFC4dvnC1NIHlXpRlTav1N4vRFRnMBqYvL7acFsk5rcRlBl1fZhr1CnbWllZTiQctPE0G5mVi49h2Wf3PbVOP+s+AEoqSquueh+fkI0JG1mGr3RaXicdq6TTRerciSmp/f6vvOde3Ag50IIztF9fXL3pGm0L2OJ6VnbJ4P3/rXDq/j803Z4+ySYyP72ex32Oajwe6Qw9j07kN8vA3r49b+TrfZHmv4dNeVgSOma4GZPWFG50LyumufHl8zRltGtjd77aFt93LmcPfiCBbzXOFmvsHH9GKeaBvBQ5RinZmlUvjvGiSlKlTTBKV0J1A9zwPXFgoGwAg6HERMw8zBoE+8KE4ADEhbz8wDbeEAv4QLUVUAVmQNQaUbeduACY1A2Ia6A0mLxbDADygiglM9DCyXm8o44uSJCADzS4QESuEo2Jw8AxQk+XOQBaJpFQgEKBpFQgIJBSYTCFAx8BiQRClMw8HchK9mdAyD0Fe4R7wz44SgTjMAbQkLpAEgIAi3aCnajJpSQgJQEv3fDBVtIEEqJQFK8GEAvJmNgqznfj8ay8skDkJCSyleGPgHrz9r5jpb6Dox1qIpCozsQKTF0jRtP6XlEzma0yjyMtu4deZuUG5ruLAvTNUMJhZ9UNfy8wsVYvY1DwUOO5Q5dsElzQqTXyQaZ+3aLij7EpDuzx6Q3nU7TgxMJX3AjtZzuDD42KS13+1Jqoh+W056P3vCbH1Wp7YLjd644Xrhw4T/DHzhTKer8tGZTAAAAAElFTkSuQmCC'/>
   </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
display:flex;
flex:1;
margin-left: 20px;
align-items: center;
a{
  display:flex;
  align-items:center;
  padding: 0 12px;
  cursor: pointer;

  img{
    height:20px;
  }
  span{
    font-size:13px;
    letter-spacing: 1.42px;
    position: relative;

    &:after{
      content: "";
      height: 2px:
      background: white;
      position: absolute;
      top: 0;
      left:0;
      right: 0;
      bottom: -6px;
    }
  }
}

`

const UserImg = styled.img`
  width: 48px;
  height:48px;
  border-radius:50px;
  cursor: pointer;
`