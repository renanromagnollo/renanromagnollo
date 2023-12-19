import { ReactNode } from "react";
import StyledComponentsProvider from "./SyledComponentsProvider";
// import DataProvider from "@/context/data-context";


export default function Providers({children} : {children: ReactNode}){
    return(
        <StyledComponentsProvider>
            {/* <DataProvider> */}
                {children}

            {/* </DataProvider> */}
        </StyledComponentsProvider>        
    )
}