import { getFakeData } from "@/utils/fakeServer"

export default async function Blogs() {

    const {blogs} = await getFakeData('blog')
    console.log('blog: ', blogs)
    return <h1>Articles</h1>
}