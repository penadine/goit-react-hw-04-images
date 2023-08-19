import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import LoadButton from './LoadButton';
import Modal from './Modal';
import Spinner from './Loader';
import { fetchImages } from './api';

function ImageFinder() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    if (!query) return;

    const fetchApi = async () => {
      setIsLoading(true); 
      try {
        const data = await fetchImages(query, page);

        setTimeout(() => {
          setImages(prevImages => [...prevImages, ...data]);
          setIsLoading(false); 
        }, 2000);
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsLoading(false); 
      }
    };

    fetchApi();
  }, [query, page]);

  const handleSearchSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleImageClick = image => {
    setSelectedImage(image.largeImageURL);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      {isLoading && <Spinner />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && (
        <LoadButton onLoadMore={() => setPage(prev => prev + 1)} />
      )}
      {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default ImageFinder;
