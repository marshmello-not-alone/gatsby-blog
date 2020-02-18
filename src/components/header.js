import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"
import React from "react"

//styled components
const HeaderH1 = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: black;
  :hover {
    opacity: 0.5;
  }
  transition: 0.6s;
`
const NavigationContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  height: 3rem;
  width: 100%;
  border-bottom: solid 0.05rem lightgrey;
  z-index: 999;
  margin-bottom: 5rem;
`
const NavBarInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  padding: 0 1.45rem 0 1.0875rem;
  margin: 0 auto;
  height: 3rem;
`
const OptionsContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const OptionsLink = styled(Link)`
  padding: 0 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  :hover {
    opacity: 0.3;
  }
  transition: 0.6s;
`

const SocialIconLink = styled.a`
  padding: 0 15px;
  color: black;
  cursor: pointer;
  :hover {
    opacity: 0.3;
  }
  transition: 0.6s;
`
//Header component

const Header = ({ siteTitle }) => (
  <NavigationContainer>
    <NavBarInnerDiv>
      <HeaderH1 to="/">{siteTitle}</HeaderH1>
      <OptionsContainer>
        <OptionsLink>Blogs</OptionsLink>
        <OptionsLink to="/about-me">About</OptionsLink>
        <SocialIconLink href="https://github.com/jqiallnatural">
          <FontAwesomeIcon icon={faGithub} />
        </SocialIconLink>
        <SocialIconLink href="https://linkedin.com/in/jiaqizhao2020/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialIconLink>
      </OptionsContainer>
    </NavBarInnerDiv>
  </NavigationContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
