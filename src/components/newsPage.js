import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../css/newsPage.css";

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/news");
          console.log(response.url);
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
          }
          const data = await response.json();
          console.log(data);
          setNews(data);
        } catch (err) {
          console.error("Ошибка при загрузке новостей:", err);
          setError("Не удалось загрузить новости. Попробуйте позже.");
        }
      };
  
      fetchNews();
    }, []);
  
    return (
      <div>
        <h1>Новости</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {news.map((item, index) => (
            <li key={index}>
              <div dangerouslySetInnerHTML={{ __html: item[index] }} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default NewsPage;
