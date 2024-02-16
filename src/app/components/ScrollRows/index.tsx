import styled from 'styled-components'
import { Arrow } from '../icons/Arrow'
import { ReactNode } from 'react'


interface ScrollRowsProps {
  scrollX: number
  setX: (x: number) => void
  componentRef: ReactNode
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

  // const componentWidth = componentRef?.current?.scrollWidth
  const componentScrollWidth = componentRef?.current?.scrollWidth
  const componentOffsetWidth = componentRef?.current?.offsetWidth

  console.log('componentScrollWidth: ', componentScrollWidth)
  console.log('componentOffsetWidth: ', componentOffsetWidth)

  console.log('scrollX: ', scrollX)

  let scrollLess = scrollX < 0 ? Math.abs(scrollX) : scrollX
  console.log('dif: ', componentOffsetWidth - scrollLess)
  // console.log('componentWidth: ', componentWidth)
  // console.log('componentRight: ', componentRef?.current?.)

  // const componentWidth = componentRef?.current?.style?.width
  // const componentMarginRight = componentRef?.current?.style?.marginRight
  
  const passToLeft = () => {
    if (scrollX < 0) {
      let calcMarginLeft = scrollX + (window.innerWidth / 2)
      setX(calcMarginLeft >= 0 ? 0 : calcMarginLeft)
    }
  }

  const passToRight = () => {
    console.log('listComponent scrollWidth: ', componentScrollWidth)
    console.log('listComponent offsetWidth: ', componentOffsetWidth)

    console.log('calc: ', componentOffsetWidth - Math.abs(scrollX))
    // console.log('componentWidth: ', componentWidth)
    // let calcToRight = componentOffsetWidth - scrollX
    //se o tamanho do scroll menos o tamanho da área vista for maior que a metade da janela, 
    //calcule o scroll menos a metade da janela, se não, coloque o scrollx o resultado da área de scroll menos a área visível
    if(componentOffsetWidth - scrollX >= window.innerWidth / 2) {
      console.log('sobra MAIOR - scrollX antigo: ', scrollX)
      let calcMarginRight = scrollX - (window.innerWidth / 2)
      console.log('sobra MAIOR - scrollX novo: ', calcMarginRight)
      setX(calcMarginRight)
    } 
    if(componentOffsetWidth - scrollX < window.innerWidth / 2 && componentOffsetWidth - scrollX > 0) {
      let calcMarginRight = componentOffsetWidth - scrollX
      setX(calcMarginRight)

    }
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