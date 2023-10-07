import StyledComponentsRegistry from "@/styles/registry"

export const metadata = {
  title: 'Renan Romagnollo',
  description: 'Front-end Developer',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
