import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Menu, Close } from '@material-ui/icons';

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  padding: 50px 80px;
  transition: 0.5s;
  z-index: 30;

  .nav-items {
    &-open {
      margin: 1rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

const Logo = styled.a`
  font-family: 'DM Serif Text', serif;
  font-size: 2.6rem;
  cursor: pointer;
`;

const ToggleBtn = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 2rem;
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  display: none;
  cursor: pointer;
`;

const Button = styled.a`
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid;
  }
`;

export default function Header() {
  const router = useRouter();

  const [navToggleOpen, setNavToggleOpen] = useState(false);

  const navStyle = {
    color: router.pathname !== '/' ? 'black' : 'white',
  };

  const navItemsBg = {
    backgroundColor: router.pathname !== '/' ? 'white' : 'transparent',
  };

  const links = [
    { label: 'Sign Up', href: '/auth/signup' },
    { label: 'Sign In', href: '/auth/signin' },
  ]
    .filter(link => link)
    .map(({ label, href }) => {
      return (
        <Link href={href} key={href}>
          <Button>{label}</Button>
        </Link>
      );
    });

  return (
    <NavBar style={navStyle}>
      <Link href='/'>
        <Logo>Life Manager</Logo>
      </Link>

      <ToggleBtn onClick={() => setNavToggleOpen(!navToggleOpen)}>
        {navToggleOpen ? <Close /> : <Menu />}
      </ToggleBtn>

      <div
        style={navItemsBg}
        className={`${
          navToggleOpen ? 'nav-items nav-items-open' : 'nav-items'
        }`}
      >
        <Link href='/streams'>
          <Button>Streams</Button>
        </Link>
        {links}
      </div>
    </NavBar>
  );
}
