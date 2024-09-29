import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";



function App() {
  
  const [articles, setArticles] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)

  // useEffect(() => {
  //     const getData = async () => {
  //       const data = await fetchArticles(query, page)
  //       setArticles(prev => [...prev, ...data])
        
  //       console.log(data);
  //     }
  //   getData()
  // }, [page, query])
  
        const getData = async () => {
        const data = await fetchArticles(query)
        setArticles(data)
        
        console.log(data);
      }


  const handleNextPage = () => {
    setPage(prev => prev + 1)
  }

  const handleSetQuery = searchValue => {
    setQuery(searchValue)
    setArticles([])
    setPage(0)

  }


  return (
    <div>
      <SearchBar getData={getData} setQuery={handleSetQuery} />
      {articles.length > 0 && <ImageGallery articles={articles} />}
      <button onClick={handleNextPage}>Load more</button>
  </div>
  )
}

export default App
