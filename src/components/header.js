import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  if (window.innerWidth > 769) {
    setOpen(false)
  }

  return (
    <Nav>
      <NavLink to="/">Explorer</NavLink>
      <Bars onClick={handleClick} />
      <Fragment>
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink key={index} to={item.link}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/trips">
            Book a Flight
          </Button>
        </NavBtn>
      </Fragment>
      {open && (
        <MobileMenu>
          {menuData.map((item, index) => (
            <NavLink key={index} to={item.link} onClick={() => setOpen(false)}>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </MobileMenu>
      )}
    </Nav>
  )
}

export default Header

const MobileMenu = styled.div`
  background: #542c85;
  /* background: #56abdb; */
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 75px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    display: block;
    margin: 25px auto;
    &:hover {
      color: #f26a2e;
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`
const Nav = styled.nav`
  background: #542c85;
  /* background: transparent; */
  border-bottom: 5px solid #f26a2e;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;

  span {
    display: block;
    padding: 10px;

    &:hover {
      text-align: center;
      width: 100vw;
      background: rgba(0,0,0, 0.2);
    }
  }
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
