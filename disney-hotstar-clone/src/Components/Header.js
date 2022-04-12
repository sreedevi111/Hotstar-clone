import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth, signInWithGoogle } from "../firebase";
import {
  selectUserName,
  setUserLogin,
  setSignOut,
} from "../features/User/userSlice";
import { useDispatch, useSelector } from "react-redux";
// useDispatch returns reference to dispatch function from the redux-store
// useSelector allows to extract data from redux store
import { useNavigate } from "react-router-dom";


function Header() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);

//displays the user details on loading the page if user is present
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history("/");
      }
    });
  }, []);

  //sign in =>google and sets the userdetails
  const signIn = () => {
    signInWithGoogle().then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history("/");
    });
  };
//if sign out the user details is set to null and navigates to login page
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut);
      history("/login");
      window.location.reload();
    });
  };

  return (
    //added imdb logo and icons
    //if not user login is displayed else the icons
    <Nav>
      <Logo src="https://eyeinkfx.com/wp-content/uploads/2019/10/ICON-imdb.png" />
     
     
      {!userName ? (
        <LoginConatiner>
          <Login onClick={signIn}>LOGIN</Login>

        </LoginConatiner>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <Link to="/" style={{ textDecoration: "none" }}>
                <span>HOME</span>
              </Link>
            </a>

            <a>
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
          </NavMenu>

          {/* added userimage */}

          <UserImage
            onClick={signOut}
            src="https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png"
          />
        </>
      )}
    </Nav>
  );
}

export default Header;

//style

const Nav = styled.nav`
  height: 70px;
  background: #0d1a26;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 35px;
  overflow-x: hidden;
  z-index: 3;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  dislpay: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a {
    display: inline;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      
      height: 20px;
      color: white;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      color: white;

      //inserts something after the content of each selected element
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        //transition : selector duration timing-function delay
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  transitio: all 0.2w ease 0s;
  &:hover {
    background: rgb(198, 198, 198);

    color: #000;
    border-color: transparent;
  }
`;
const LoginConatiner = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
