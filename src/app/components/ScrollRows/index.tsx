import styled from 'styled-components'
import { Arrow } from '../icons/Arrow'


interface ScrollRowsProps {
  scrollX: number
  setX: (x: number) => void
  componentRef: string
}


const ScrollButtons = styled.div`



div {
    cursor: pointer;
    position: absolute;
    width: 5vw;
    height: 110%;
    background-color: ${({theme}) => theme.colors.dark.dark};
    /* background-color: blue; */
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .6;
    transition: opacity ease-in .2s;
    
    :hover {
      opacity: .9;
      
    }
  }  
`


export function ScrollRows({componentRef, scrollX, setX} : ScrollRowsProps){

  // const componentWidth = componentRef?.current?.style?.width
  // const componentMarginRight = componentRef?.current?.style?.marginRight
  
  const passToLeft = () => {
    if (scrollX < 0) {
      let calcMarginLeft = scrollX + (window.innerWidth / 3)
      setX(calcMarginLeft >= 0 ? 0 : calcMarginLeft)
    }
  }

  const passToRight = () => {
    // console.log('componentWidth: ', componentWidth)
    let calcMarginRight = scrollX - (window.innerWidth / 3)
    setX(calcMarginRight)
    
    // if(componentWidth > window.innerWidth && componentMarginRight > 0) {
    //     let calcMarginRight = scrollX - (window.innerWidth / 2)
    //   setX(calcMarginRight)
    // }
  }
    return(
        <ScrollButtons>
          {/* {scrollX < 0 ? <div style={{left: '0'}} onClick={passToLeft}><h1>E</h1></div> : ''} */}
          <div style={{left: '0'}} onClick={passToLeft}><Arrow direction='left' /></div>
          <div style={{right: '0'}} onClick={passToRight}><Arrow direction='right' /></div>
        </ScrollButtons>
    )
}