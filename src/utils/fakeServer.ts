
export const getFakeData = async (query: string) => {
    const fakeResponse = await fetch('http://localhost:3333/'+query)
    const data = await fakeResponse.json()
    console.log('data fakeResponse: ', data)
    return data
}