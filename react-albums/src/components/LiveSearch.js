import React, { Fragment, useState, useEffect } from "react";

import SearchBar from "components/SearchBar";
import Results from "components/Results";

import axios from "axios";



export default function LiveSearch(props) {
  // const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const url = "https://itunes.apple.com/search?term=Beyonce&country=CA&media=music&entity=album&attribute=artistTerm";
  // const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios
      .get(url)
      .then(({data} )=> console.log(data))
      .catch(err => console.log(err));
  },[])




  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        {/* <SearchBar onSearch={term => setTerm(term)} /> */}
        {/* <Results results={results} /> */}
      </main>
    </Fragment>
  );
}
