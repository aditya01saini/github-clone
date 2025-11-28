import React, { useState, useEffect } from "react";
import "./dashboard.css";
const Dashboard = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/repo/user/${userId}`
        );

        const data = await response.json();
        setRepositories(data.repositories);
      } catch (error) {
        console.error("Error while fatching repositories!", err);
      }
    };

    const fetchSuggestedRepositories = async () => {
      try {
        const response = await fetch(`http://localhost:3002/repo/all`);

        const data = await response.json();
        // console.log(data);
        setSuggestedRepositories(data);
        console.log(suggestedRepositories);
      } catch (error) {
        console.error("Error while fatching repositories!", err);
      }
    };

    fetchRepositories();
    fetchSuggestedRepositories();
  }, []);

  useEffect(() => {
    if (searchQuery == "") {
      setSearchResults(repositories);
    } else {
      const filteredRepo = repositories.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredRepo);
    }
  }, [searchQuery, repositories]);
  return (
    <section id="dashboard"> 
      <aside>
        <h3 >Suggested Repositories</h3>
        {suggestedRepositories.map((repo) => {
            return (
          <div key={repo._id}>
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
          </div>
            );
        })}
      </aside>
      <main>
         <h2>Your Repositories</h2>
        {suggestedRepositories.map((repo) => {
            return (
          <div key={repo._id}> 
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
          </div>
            );
        })}
      </main>
      <aside>
        <h3>Upcoming Evevts</h3>
        <ul>
          <li>
            <p>Tech Conference - Dec 15</p>
          </li>
          <li>
            <p>Developer Meetup - Dec 13</p>
          </li>
          <li>
            <p>React Sumit - jan 15</p>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Dashboard;
