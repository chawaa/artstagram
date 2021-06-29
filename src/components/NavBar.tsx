import * as OpenColor from "open-color";
import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Sorting } from "../Sorting";

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import URL from 'url-parse';

export default function (props) {
    const { to, children, newTab, className } = props;
    const { origin, pathname, query } = new URL(to);
    const linkProps = {
        ...props,
        to: pathname + query
    };
    return (
        (origin === window.location.origin && !newTab)
        ? <RouterLink {...linkProps} />
        : <a className={className} href={to} target="_blank">{children}</a>
    );
}


const is = (sorting: Sorting) => match =>
  !match ? false : match.url === `/feed/${sorting}/`;

const scrollToTop = () => window.scrollTo(0, 0);

const links = [
  {
    icon: `<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><style type="text/css">.st0{fill:none;}</style><g><path class="st0" d="M0.3,12.1L0.3,12.1c-0.4,0.5-0.1,1.1,0.4,1.1h3.1v9.4c0,0.3,0.3,0.6,0.6,0.6h5c0.3,0,0.6-0.3,0.6-0.6v-5 c0-1,0.8-1.9,1.9-1.9s1.9,0.8,1.9,1.9v5c0,0.3,0.3,0.6,0.6,0.6h5l0.1,0c0.3,0,0.5-0.3,0.5-0.6v-9.4h3.1c0.6,0,0.8-0.7,0.4-1.1 L12.4,0.8c-0.2-0.2-0.6-0.2-0.9,0L0.3,12.1z M12,2.1l9.7,9.7h-2.2l-0.1,0c-0.3,0-0.5,0.3-0.5,0.6v9.4h-3.8v-4.4 c0-1.7-1.4-3.1-3.1-3.1l-0.2,0c-1.6,0.1-2.9,1.5-2.9,3.1v4.4H5.1v-9.4l0-0.1c0-0.3-0.3-0.5-0.6-0.5H2.3L12,2.1z"/></g></svg>`,
    title: "Home",
    to: "https://www.timcha.net"
  },
  {
    icon: `<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><style type="text/css">.st0{fill:none;}</style><g><path class="st0" d="M0.3,12.1L0.3,12.1c-0.4,0.5-0.1,1.1,0.4,1.1h3.1v9.4c0,0.3,0.3,0.6,0.6,0.6h5c0.3,0,0.6-0.3,0.6-0.6v-5 c0-1,0.8-1.9,1.9-1.9s1.9,0.8,1.9,1.9v5c0,0.3,0.3,0.6,0.6,0.6h5l0.1,0c0.3,0,0.5-0.3,0.5-0.6v-9.4h3.1c0.6,0,0.8-0.7,0.4-1.1 L12.4,0.8c-0.2-0.2-0.6-0.2-0.9,0L0.3,12.1z M12,2.1l9.7,9.7h-2.2l-0.1,0c-0.3,0-0.5,0.3-0.5,0.6v9.4h-3.8v-4.4 c0-1.7-1.4-3.1-3.1-3.1l-0.2,0c-1.6,0.1-2.9,1.5-2.9,3.1v4.4H5.1v-9.4l0-0.1c0-0.3-0.3-0.5-0.6-0.5H2.3L12,2.1z"/></g></svg>`,
    title: "Home",
    to: "https://www.timcha.net"
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    sorting: Sorting.TRENDING,
    title: "Trending",
    to: "/feed/trending/"
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    sorting: Sorting.LATEST,
    title: "Latest",
    to: "/feed/latest/"
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    sorting: Sorting.COMMUNITY,
    title: "Community",
    to: "/feed/randomize/"
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    sorting: Sorting.PICKS,
    title: "Picks",
    to: "/feed/picks/"
  }
];

const NavBar = () => (
  <Wrapper>
    {links.map(({ to, title, sorting, icon }, idx) => (
      <NavBarItem key={idx}>
        <StyledNavLink
          to={to}
          title={title}
          activeClassName="selected"
          isActive={is(sorting)}
          onClick={scrollToTop}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: icon
            }}
          />
        </StyledNavLink>
      </NavBarItem>
    ))}
  </Wrapper>
);

const Wrapper = styled.nav`
  margin: 0 auto;
  padding: 1rem;
  list-style-type: none;
  display: flex;
  width: 100%;
  max-width: 48rem;
  position: sticky;
  bottom: 0;
  background-color: ${OpenColor.gray[9]};
  z-index: 999;

  @media only screen and (min-width: 48rem) {
    top: 0;
    bottom: auto;
    margin: 1em auto;
    position: relative;
    background-color: transparent;
  }
`;

const NavBarItem = styled.li`
  flex: 1;
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0rem;
  font-size: 1rem;
  text-transform: uppercase;
  display: block;
  text-decoration: none;
  color: ${OpenColor.gray[6]};
  transition: color 300ms;

  &:hover {
    color: ${OpenColor.gray[9]};
  }

  &.selected {
    color: ${OpenColor.white};
    cursor: auto;
  }

  @media only screen and (min-width: 48rem) {
    &.selected {
      color: ${OpenColor.gray[9]};
    }
  }
`;

export { NavBar, StyledNavLink };
