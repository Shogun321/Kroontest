/*import './App.css';
import React, {useEffect, useState} from 'react';
import GetList from './components/Getlist';

function App() {
  const [listavlasnika, setListaVlasnika] = useState([]);
  useEffect(() => {
    async function ispisijson(){
      try{
        /*https://5f7146ed64a3720016e603e1.mockapi.io/api/student*/ /*
        console.log("pisem");
        const requestUrl = 'https://api.github.com/gists/public';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setListaVlasnika(responseJSON);
      }
      catch {}
    }
    ispisijson();
  },[]);
  return (
      <GetList listavlasnika={listavlasnika}/>
  );
}

export default App;
*/

import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import GetList from './components/Getlist';

function App() {
  const [listavlasnika, setListaVlasnika] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://api.github.com/gists/public');
      setListaVlasnika(res.data);
      setLoading(false);
      console.log(res.data);
    }
    fetchPosts();
  },[]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listavlasnika.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <GetList listavlasnika={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={listavlasnika.length} paginate={paginate}/>  
    </div>
  );
}

export default App;

