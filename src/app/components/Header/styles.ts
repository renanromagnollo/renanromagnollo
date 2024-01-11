import styled from 'styled-components'

export const HeaderStyle = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background: #25262A;

    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #F3F3F3;
        gap: 50px;
        
        .links 
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        ul {
            /* width: 7.4rem;
            height: 2.1rem;
             */
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 3rem;

            font-family: 'Kanit', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 1.7rem;
            line-height: 2.1rem;
            text-transform: uppercase;
            
            li {
                transition: color .2s ease-in;
                user-select: none;
                color: ${({ theme }) => theme.colors.light.default};
            }
            
            li.active {
                color: ${({ theme }) => theme.colors.primary.default};

            } 

            li:hover {
                color: #0D99FF;
                cursor: pointer;
            }


        }
    }

    /* .logomarca {
        width: 100%;
    } */

`