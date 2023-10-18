import { Button } from "@/components/Button";
import {AiOutlineArrowRight} from 'react-icons/ai'

interface HeroSectionProps {

}
export function HeroSection(props : HeroSectionProps){
    return(
        <section>
            <div className="container">
                <div>
                    <p>Olá! Meu nome é</p>
                    <h2>Renan Romagnollo</h2>
                    <p>Texto...</p>
                    <div>
                        techs
                    </div>
                    <div>
                        <Button>
                            Entre em contato
                            <AiOutlineArrowRight size={18}/>
                        </Button>
                    </div>
                </div>
                <div>
                    Image...
                </div>
            </div>
        </section>
    )
}