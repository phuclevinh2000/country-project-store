import React, {useRef, useEffect} from 'react'

import { init } from "ityped"
import styled from 'styled-components';

const HeaderLeft = () => {
  const textRef = useRef<HTMLSpanElement>(null);       //ityped function https://www.npmjs.com/package/ityped

  useEffect(() => {               //render ityped function
      init(textRef.current!, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["React-Redux Typescript Assignment by Phuc Le"],
      });
  }, []);

  return (
   <Logo className="ityped" ref={textRef} ></Logo>   
  )
}

export default HeaderLeft

const Logo = styled.span`
  display: flex;
  color: white;
`
