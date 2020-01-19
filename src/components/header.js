import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"
import React from "react"

//styled components
const HeaderH1 = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: black;
  :hover {
    opacity: 0.3;
  }
`
const NavigationContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  height: 70px;
  width: 100%;
  margin-bottom: 1.1rem;
`
const NavBarInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  margin: 0 auto;
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
`

const SocialIconLink = styled.a`
  padding: 0 15px;
  color: black;
  cursor: pointer;
  :hover {
    opacity: 0.3;
  }
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
        <SocialIconLink href="https://www.instagram.com/kode_kobe_code">
          <FontAwesomeIcon icon={faInstagram} />
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
