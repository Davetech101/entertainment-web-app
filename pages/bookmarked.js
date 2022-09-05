import { useState } from "react";
import AllMovies from "../components/AllMovies";
import Layout from "../components/reuseable/Layout";
import Search from "../components/Search";

export default function Bookmarked() {
  const [search, setSearch] = useState("");
  const getValue = (value) => {
    setSearch(value);
  };
  return (
    <Layout>
      <Search getValue={getValue} type="bookmark" />
      <AllMovies search={search} type="bookmark" />
    </Layout>
  );
}
