

export const fetchHygraphQuery = async (query: string) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                // Accept: 'application/json',
                // 'User-agent': 'learning app',
                // 'Accept': 'application/json',
                // Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_HIGRAPH_TOKEN}`,
            },
            next: {
                revalidate: 60 * 60 * 24 // 24h
                // revalidate: 5,
            },
            
            body: JSON.stringify({ query, }),
        })
    
        // const data = await response()
        const {data} = await response.json()
        console.log('data: ', data)
    
        return data
        
        
    } catch (error) {
        console.log(error)
    }
}

export const getHero = async () => {
    const headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${process.env.HYGRAPH_TOKEN}`
    }

    const requestBody = {
        query: `
        query MyQuery {
            hero(where: {slug: "whoami"}) {
              title {
                raw
              }
              subtitle {
                raw
              }
              text {
                text
              }
            }
          }
        `
    }

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
    }

    const response = await (await fetch(process.env.HYGRAPH_URL!, options)).json()
    console.log('Response from hero request: ', response?.data)
}