import React from 'react'

import { ThemeProvider } from 'styled-components'
import TogglerButton from '../../TogglerButton' 
import GlobalStyle from "../../../styles/global"
import ThemeContext from '../../../contexts/ThemeContext'
import { lightTheme, darkTheme } from '../../../styles/themes'
import useThemeMode from '../../../hooks/useThemeMode'
import { Link } from 'react-router-dom'
import "./header.scss"
import { useSelector } from 'react-redux'
import { AppState } from '../../../types/types'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HeaderRight : React.FC = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const favoriteList = useSelector((state: AppState) => state.favorites.inCart)
  const len = favoriteList.length;

  return (
    <div className="navBar">
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

      <Link to={'/cart'} className="link">
        <span>
          <FavoriteIcon /> 
          <p>Favorite</p>
          <h2>{len}</h2>
        </span>
      </Link>
      
    </div>
  )
}

export default HeaderRight

