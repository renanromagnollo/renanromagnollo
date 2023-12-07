'use client'

import { useForm } from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import {HiArrowNarrowRight} from 'react-icons/hi'
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

const containerContactTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export function ContactForm(){

    const {handleSubmit, register} = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = (data: ContactFormData) => {
        console.log(data)
    }

    return(
        <div id="contact">
        
                <h1>Contato</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <input 
                        placeholder="Nome"
                        type="text" 
                        {...register('name')}
                        />
                    <input 
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

            
        </div>
    )
}