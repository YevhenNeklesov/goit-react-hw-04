import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import toast, {Toaster} from "react-hot-toast";
import  ErrorMessage from "./components/ErrorMessege/ErrorMessege";
import ImageModal from "./components/ImageModal/ImageModal";
import React from 'react';





function App() {
  
  const [articles, setArticles] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedArticle, setSelectedArticle] = useState()

  useEffect(() => {

    if (!query) {
          
      return;
    }

      const getData = async () => {
        try {
          setIsError(false)
          setIsLoading(true)
          const data = await fetchArticles(query, page)
          !data.results.length && toast("Sorry we have no image by your search", {
            duration: '400',
            position: 'top-right'
          })
          setArticles(prev => [...prev, ...data.results])
          setTotalPages(data.total_pages)    
        } catch (err) {
          console.log(err);
          setIsError(true)
        } finally {
          setIsLoading(false)
        }
      }
    getData()
  }, [page, query])
  
  const handleNextPage = () => {
    try {
          setPage(prev => prev + 1)
      setIsLoading(true)
      setTotalPages(0)
    } catch {
          setIsError(true)
    }
  }

  const handleSetQuery = searchValue => {
    setQuery(searchValue)
    setArticles([])
    setPage(1)
  }


  

  function openModal(item) {
    setIsOpen(true);
    setSelectedArticle(item)

  }

  function closeModal() {
    setIsOpen(false);
    setSelectedArticle(null)
  }


  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {articles.length > 0 && <ImageGallery selectedArticle={selectedArticle} openModal={openModal} articles={articles} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
      {page < totalPages && <LoadMoreBtn load={handleNextPage} />}
      {modalIsOpen &&
        <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        article={selectedArticle}
        />}
      <Toaster/>
  </div>
  )
}

export default App
