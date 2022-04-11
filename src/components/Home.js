import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import Pagination from './Pagination';

export default function Home() {

    const [newsItems, setNewsItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsItemsPerPage, setNewsItemsPerPage] = useState(5);

    useEffect(() => {
        async function newsItemsList() {
            setLoading(true)
            try {
                const res = await axios.get("http://127.0.0.1:8000/api/v1/news/")
                setNewsItems(res.data.results)
                setLoading(false)
            }
            catch(error) {
                setError(error.message)
                setLoading(false)
            }
        }
        newsItemsList() 
    }, []);

    // Get current news items
    const indexOfLastNewsItem = currentPage * newsItemsPerPage;
    const indexOfFirstNewsItem = indexOfLastNewsItem - newsItemsPerPage;
    const currentNewsItems = newsItems.slice(indexOfFirstNewsItem, indexOfLastNewsItem);
   
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {currentNewsItems && (
                <> 
                <h4 className='center'>Home</h4>
                    {currentNewsItems.map(newsItem => {
                        return (
                            <div className='container home'>
                                <div className='news-item card'>
                                    <img src={Pokeball} alt="A pokeball" />
                                    <div className='card-content'>
                                        <NavLink to={`/${newsItem.id}`}>{newsItem.title}</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            )}
            <Pagination 
                newsItemsPerPage={newsItemsPerPage} 
                totalNewsItems={newsItems.length}
                paginate={paginate}
                />
        </div>
    )
}