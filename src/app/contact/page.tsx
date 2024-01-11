'use client'

import styled from "styled-components"
import { ContactForm } from "../components/ContactForm"

const ContactPageTag = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`

export default function ContactPage() {
  return (
    <ContactPageTag>
      <ContactForm />
    </ContactPageTag>
  )
}