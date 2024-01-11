
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import styled from "styled-components"

const PathTag = styled.section`
    height: 30px;
    /* padding: 10px; */
    width: 100%;
    background-color: ${({ theme }) => theme.colors.light.dark};
    color: ${({ theme }) => theme.colors.dark.default};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    /* gap: 0; */
    /* margin: 0; */

    > a, span {
        /* width: 100%; */
        margin-left: 15px;
        font-family: ${({ theme }) => theme.fonts.smallBold.fontFamily};
        font-size: ${({ theme }) => theme.fonts.smallBold.fontSize};
        font-weight: bold;
        /* background-color: pink; */
    }
    
    span {
        color: ${({ theme }) => theme.colors.light.default};
    }
    
    a {
        color: ${({ theme }) => theme.colors.dark.light};
        padding: 100% 10px;

    }
`


export function PathComponent() {
    const path = usePathname()
    const ways = path.split('/')
    console.log('PathName: ', path)
    console.log('WAys: ', ways)
    return path !== '/' && (
        <PathTag>
            {ways.map((way, i) => {
                console.log('way: ', way)
                if (way === '') {
                    return <Link key={i} href={`/`}>Home</Link>
                } else {
                    if (i === ways.length - 1) {
                        return (
                            <>
                                <span>/</span>
                                <span>{way}</span>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <span>/</span>
                                <Link key={i} href={`/${way}`}>{way}</Link>
                            </>

                        )
                    }
                }
            })}


        </PathTag>)


}