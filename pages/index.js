import Layout from "../components/reuseable/Layout"
import Search from "../components/Search"
import Trending from "../components/Trending"

export default function Home() {
  return (
    <Layout> 
      <Search/>

      <Trending/>
    </Layout>
  )
}
