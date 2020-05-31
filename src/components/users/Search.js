import React, { useState, useContext } from "react";
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/AlertContext'


const Search = () => {
  
const githubContext = useContext(GithubContext);
const alertContext = useContext(AlertContext)

const [text, setText] = useState('');


  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert(" Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            className="w-100 mb-4"
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block mb-4"
          />
        </form>
        {githubContext.users.length > 0 && (
          <button className="btn btn-light btn-block mb-4" onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
}

export default Search