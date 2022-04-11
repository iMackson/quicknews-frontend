import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const NewsItemDetail = () => {
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const { newsItemId } = useParams()

    useEffect(() => {
        async function fetchNewsItem() {
            setLoading(true)
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/v1/news/${newsItemId}/`)
                console.log(res.data)
                setNewsItem(res.data)
                setLoading(false)
            }
            catch(error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchNewsItem()
    }, [newsItemId])


    return (
        <div>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {newsItem && (
                <div className='news-item'>
                    <h4 className='center'>Title: {newsItem.title}</h4>
                    <p>Author: {newsItem.author}</p>
                    <p>Url: <a href={newsItem.source_url}>{newsItem.source_url}</a></p>
                    <p>Type: {newsItem.item_type}</p>
                    <p>Timestamp: {`${new Date(newsItem.timestamp).toTimeString()}`}</p>
                </div>
            )}

        </div>
        )
}
    

   
    




export default NewsItemDetail;