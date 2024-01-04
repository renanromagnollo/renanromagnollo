'use client'

import { useRouter } from "next/navigation"
import styled from "styled-components"



export function PathComponent() {
    const router = useRouter()
    console.log('ROUTER: ', router)
    return <div>path</div>


}