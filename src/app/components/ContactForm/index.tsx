
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// import { memo } from "react";

import { HiArrowNarrowRight } from 'react-icons/hi'
import { ButtonTag } from "../Button";
import styled from "styled-components";

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

// interface containerContactProps {
//     id: string
// }


type ContactFormData = z.infer<typeof contactFormSchema>

const ContainerContactTag = styled.div`
    width: 100%;
    /* margin: 50px 0; */
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.dark.light};
    
    > form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 10px 0;
        
        input {
            height: 40px;
            border-radius: 5px;
            padding-left: 10px;
            margin: 10px 0;
        }
        
        textarea {
            width: 300px;
            height: 100px;
            margin: 10px 0;
            padding: 10px;
            border-radius: 5px;
        }

        input, textarea {
            background-color: ${({ theme }) => theme.colors.dark.dark};
            color: ${({ theme }) => theme.colors.light.dark};
            border: none;
        }
    }
    
`



export function ContactForm() {

    const { handleSubmit, register } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = (data: ContactFormData) => {
        console.log(data)
    }

    return (
        <ContainerContactTag id="contact">

            <h1>Contato</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    placeholder="Nome"
                    type="text"
                    {...register('name')}
                />
                <input
                    style={{ width: '300px' }}
                    placeholder="E-mail"
                    type="email"
                    {...register('email')}
                />
                <textarea
                    placeholder="Mensagem..."
                    {...register('message')}
                />
                <ButtonTag>
                    Enviar mensagem
                    <HiArrowNarrowRight size={18} />
                </ButtonTag>
            </form>


        </ContainerContactTag>
    )
}
