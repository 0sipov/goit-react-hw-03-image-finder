import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import Button from '../Button';
import './App.module.css';
import getImgs from '../../utilites/fetch';

class App extends Component {
  state = {
    imgs: [],
    page: 1,
    isModalOpen: false,
    modalImg: '',
    query: '',
  };

  handleSwitchModal = imgId => {
    if (!this.state.isModalOpen) {
      this.setState({
        modalImg: this.state.imgs.find(el => {
          return +el.id === +imgId;
        }),
      });
      this.setState({ isModalOpen: !this.state.isModalOpen });
    } else {
      this.setState({ isModalOpen: !this.state.isModalOpen });
    }
  };

  handleFetchQuery = async query => {
    return this.setState({
      query: query,
      page: 1,
      imgs: await getImgs(query, this.state.page),
    });
  };

  handleAddQuery = () => {
    getImgs(this.state.query, this.state.page + 1).then(r => {
      this.setState(preState => ({
        imgs: [...preState.imgs, ...r],
        page: preState.page + 1,
      }));
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });

    // this.setState(preState => ({
    //   imgs: [
    //     ...preState.imgs,
    // ...getImgs(this.state.query, preState.page + 1).then(r => r),
    //   ],
    //   page: preState.page + 1,
    // }));
  };

  render() {
    const { handleFetchQuery, handleSwitchModal, handleAddQuery } = this;
    const { imgs, isModalOpen, modalImg } = this.state;
    return (
      <>
        <Searchbar onFetchQuery={handleFetchQuery} />
        <ImageGallery>
          {imgs.map(el => {
            return (
              <ImageGalleryItem
                src={el.webformatURL}
                alt={el.tags}
                key={el.id}
                id={el.id}
                onSwitchModal={handleSwitchModal}
              />
            );
          })}
        </ImageGallery>
        <Button onAddQuery={handleAddQuery} />
        <Modal isOpen={isModalOpen} onSwitchModal={handleSwitchModal}>
          <img src={modalImg.largeImageURL} alt={modalImg.tags} />
        </Modal>
      </>
    );
  }
}

export default App;
