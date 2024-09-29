import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";

import toast, { Toaster } from "react-hot-toast";
import { ErrorMessage } from "formik";
import React from 'react';
import ImageModal from "./components/ImageModal/ImageModal";


// import ReactModal from "react-modal";
// import Modal from 'react-modal';
// import ReactDOM from 'react-dom';


function App() {
  
  const [articles, setArticles] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [more, setMore] = useState()
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

        if (!query) {
      return;
    }

      const getData = async () => {
        try {
          setIsLoading(true)
          const data = await fetchArticles(query, page)
          !data.results.length && toast("Sorry we have no image for you")
          setArticles(prev => [...prev, ...data.results])
          console.log(data);
          data.total_pages <= page + 1 ? setMore(false) : setMore(true)      
        } catch (error) {
          console.log(error);
          setIsError(true)
        } finally {
          setIsLoading(false)
        }
      }
    getData()
  }, [page, query])
  

  const handleNextPage = () => {
    try {
          console.log(`Current page: ${page}`)
          setPage(prev => prev + 1)
          setIsLoading(true)
    } catch {
          setIsError(true)
    }
  }

  const handleSetQuery = searchValue => {
    setQuery(searchValue)
    setArticles([])
    setPage(0)
  }


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <SearchBar  setQuery={handleSetQuery} />
      {articles.length > 0 && <ImageGallery openModal={openModal} articles={articles} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
      {more && <LoadMoreBtn load={handleNextPage} />}
      {modalIsOpen && <ImageModal  closeModal={closeModal}/>}
  </div>
  )
}

export default App
