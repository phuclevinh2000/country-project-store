import React from 'react'

import { ThemeProvider } from 'styled-components'
import TogglerButton from '../../TogglerButton' 
import GlobalStyle from "../../../styles/global"
import ThemeContext from '../../../contexts/ThemeContext'
import { lightTheme, darkTheme } from '../../../styles/themes'
import useThemeMode from '../../../hooks/useThemeMode'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import styled from 'styled-components'

const HeaderRight : React.FC = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <NavMenu>
      <ThemeContext>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <header>
            <TogglerButton themeToggler={themeToggler} />
            {/* {theme} */}
          </header>
        </ThemeProvider>
      </ThemeContext>

      
      <a target="_blank" rel="noreferrer" href="https://github.com/phuclevinh2000">
          <GitHubIcon style={{ fontSize: 30, color: 'white'}}/>
          <span>GitHub</span>
      </a>
      <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/phuc-le-vinh-2000/">
          <LinkedInIcon style={{ fontSize: 30, color: 'white'}}/>
          <span>LinkedIn</span>
      </a>
      
      <a target="_blank" rel="noreferrer"  href="https://github.com/phuclevinh2000/fs8-react-assignment">
          <CodeIcon style={{ fontSize: 30, color: 'white'}}/>
          <span>Source Code</span>
      </a>
      
    </NavMenu>
  )
}

export default HeaderRight

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  justify-content: flex-end;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    span {
        font-size: 13px;
        letter-spacing: 1.4px;
        position: relative;
        padding: 0 5px;
        color: white;
        
        &:after {                   //make the hover effect on the navbar menu
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover {                       //make the hover effect on the navbar menu
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
  }
`
