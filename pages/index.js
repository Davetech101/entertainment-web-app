import { useState } from "react"
import Recommended from "../components/Recommended"
import Layout from "../components/reuseable/Layout"
import Search from "../components/Search"
import Trending from "../components/Trending"

export default function Home() {
  const [search, setSearch] = useState("")

  const getValue = (value) => {
    setSearch(value);
  }
  return (
    <Layout> 
      <Search getValue={getValue}/>

      {search.trim().length === 0 ?  <Trending/> : <></>}

      <Recommended search={search}/>
    </Layout>
  )
}
