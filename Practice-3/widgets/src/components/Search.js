import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    let timeoutId;

    if (term && !results.length) search();
    else {
      timeoutId = setTimeout(() => {
        if (term) search();
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term, results.length]);
  // the second argument defines when to run useEffect
  // empty array means, it runs only at start
  // no args means it runs at every render
  // array with value means, it renders every time the value changes

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span
            dangerouslySetInnerHTML={{
              __html: result.snippet,
            }}
          ></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter search Term</label>
          <input
            value={term}
            type="text"
            className="input"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
