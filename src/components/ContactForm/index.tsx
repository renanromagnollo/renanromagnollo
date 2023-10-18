import { Button } from "../Button";
import {HiArrowNarrowRight} from 'react-icons/hi'

interface ContactFormProps {

}
export function ContactForm(props : ContactFormProps){
    return(
        <section>
            <div>
                <h1>Contato</h1>
                <form>
                    <input 
                        placeholder="Nome"
                        type="text" 
                    />
                    <input 
                        placeholder="E-mail"
                        type="email" 
                    />
                    <textarea 
                        placeholder="Mensagem..."
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