import styled from "styled-components"

import Image from "next/image"

interface ModalInstaProps {
    isOpen: boolean
    imgUrl: string
    closeModal: (opened: boolean) => void
}

const ContainerModal = styled.div`
    background-color: rgba(0, 0, 0, .9)};
    position: absolute;
    z-index: '10000';
    width: 100%;
    height: 100%;
    /* opacity: .7; */
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        /* position: relative; */
        /* opacity: 1; */
        padding: 50px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            /* height: 80%; */
            pointer-events: none;
        }
    }
`
export function ModalInsta({isOpen, imgUrl, closeModal} : ModalInstaProps){
    return(isOpen &&
        <ContainerModal onClick={() => closeModal(false)}>
            <div>
                <Image 
                    src={imgUrl}
                    width={0}
                    height={0}
                    alt="Instagram Image"
                    sizes="100%"
                    loading="lazy"
                    style={{width: 'auto', height: 'auto', objectFit: "cover"}}
                    unoptimized
                
                />
                
            </div>
        </ContainerModal>
    )
}