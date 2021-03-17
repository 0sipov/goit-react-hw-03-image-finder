import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import './App.module.css';
import getImgs from '../../utilites/fetch';

class App extends Component {
  state = {
    imgs: [],
    page: 1,
    isModalOpen: false,
    modalImg: '',
  };

  handleSwitchModal = imgId => {
    if (!this.state.isModalOpen) {
      this.setState({
        modalImg: this.state.imgs.find(el => {
          console.log(imgId);
          return +el.id === +imgId;
        }),
      });
      this.setState({ isModalOpen: !this.state.isModalOpen });
    } else {
      this.setState({ isModalOpen: !this.state.isModalOpen });
    }
  };

  handleFetchQuery = async query => {
    this.setState({
      imgs: await getImgs(query, this.state.page),
    });
  };

  render() {
    const { handleFetchQuery, handleSwitchModal } = this;
    const { imgs, page, isModalOpen } = this.state;
    console.log(this.state.modalImg);
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
        <Modal isOpen={isModalOpen} onSwitchModal={handleSwitchModal}>
          <img src={this.state.modalImg.largeImageURL} alt="" />
        </Modal>
      </>
    );
  }
}

export default App;
