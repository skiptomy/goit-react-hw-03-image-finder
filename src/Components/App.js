/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryList from './ImageGalleryList/ImageGalleryList';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import imageGalleryApi from '../Services/apiService';

export default class App extends Component {
  state = {
    images: [],
    error: null,
    largeImageUrl: '',
    searchQuery: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProp, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevArrOfImages = prevState.images.length;
    const nextArrOfImages = this.state.images.length;
    if (prevArrOfImages !== nextArrOfImages) {
      this.pageScroll();
    }

    if (prevQuery !== nextQuery && nextQuery !== '') {
      this.fetchImages();
    }
  }

  pageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  closeLargeImage = () => {
    this.setState({
      largeImageUrl: '',
    });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imageGalleryApi
      .fetchImagesFromQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      images: [],
      page: 1,
    });
  };

  openLargeImage = url => {
    this.setState({
      largeImageUrl: url,
    });
  };

  render() {
    const { images, largeImageUrl, error, loading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />

        {images.length > 0 && !error && <ImageGalleryList images={images} openImage={this.openLargeImage} />}
        {loading && <Loader />}

        {images.length > 0 && !loading && <Button onFetchImages={this.fetchImages} />}

        {largeImageUrl && <Modal onCloseLargeImage={this.closeLargeImage} url={largeImageUrl} />}
      </>
    );
  }
}
