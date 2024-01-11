import styled from "styled-components"
import { Logo } from "../icons/logo"

interface FooterProps {

}

const FooterTag = styled.div`
  width: 100vw;
  height: 5vh;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.dark.light};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    /* width: 10vw; */
    overflow: hidden;
  }
`

export function Footer(props: FooterProps) {
  return (
    <FooterTag>
      <div>
        <Logo theme={'dark'} />
      </div>
    </FooterTag>
  )
}