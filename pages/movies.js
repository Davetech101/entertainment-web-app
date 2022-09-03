import { useState } from 'react'
import AllMovies from '../components/AllMovies'
import Layout from '../components/reuseable/Layout'
import Search from '../components/Search'

export default function Movies () {
const [search, setSearch] = useState("")
  const getValue = (value) => {
    setSearch(value);
  }
  return (
    <Layout>
      <Search getValue={getValue} type="movies"/>
        <AllMovies search={search} type="movies"/>
    </Layout>
  )
}