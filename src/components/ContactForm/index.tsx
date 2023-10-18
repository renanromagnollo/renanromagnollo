'use client'

import { useForm } from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import {HiArrowNarrowRight} from 'react-icons/hi'
import { Button } from "../Button";

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm(){

    const {handleSubmit, register} = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmite = (data) => {

    }

    return(
        <section>
            <div>
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
                    <Button>
                        Enviar mensagem
                        <HiArrowNarrowRight size={18} />
                    </Button>
                </form>
            </div>
        </section>
    )
}