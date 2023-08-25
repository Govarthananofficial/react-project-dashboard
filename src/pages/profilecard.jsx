import React, { Component } from 'react';
import './profilecard.css';

class ImgUpload extends Component {
  render() {
    const { onChange, src } = this.props;
    return (
      <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload">
          <img htmlFor="photo-upload" src={src} alt="Preview" />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
      </label>
    );
  }
}

class Name extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div className="field">
        <label htmlFor="name">name:</label>
        <input
          id="name"
          type="text"
          onChange={onChange}
          maxLength="25"
          value={value}
          placeholder="enter your name"
          required
        />
      </div>
    );
  }
}

class Status extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div className="field">
        <label htmlFor="status">status:</label>
        <input
          id="status"
          type="text"
          onChange={onChange}
          maxLength="35"
          value={value}
          placeholder="Enter your role"
          required
        />
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    const { onSubmit, src, name, status } = this.props;
    return (
      <div className="card">
        <form onSubmit={onSubmit}>
          <h1>Profile Card</h1>
          <label className="custom-file-upload fas">
            <div className="img-wrap">
              <img htmlFor="photo-upload" src={src} alt="Profile" />
            </div>
          </label>
          <div className="name">{name}</div>
          <div className="status">{status}</div>
          <button type="submit" className="edit">
            Edit Profile
          </button>
        </form>
      </div>
    );
  }
}

class Edit extends Component {
  render() {
    const { onSubmit, children } = this.props;
    return (
      <div className="card">
        <form onSubmit={onSubmit}>
          <h1>Profile Card</h1>
          {children}
          <button type="submit" className="save">
            Save
          </button>
        </form>
      </div>
    );
  }
}

class CardProfile extends Component {
  state = {
    file: '',
    imagePreviewUrl:
      'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    name: '',
    status: '',
    active: 'edit',
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  editName = (e) => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };

  editStatus = (e) => {
    const status = e.target.value;
    this.setState({
      status,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    });
  };

  render() {
    const { imagePreviewUrl, name, status, active } = this.state;
    return (
      <div>
        {active === 'edit' ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
            <Name onChange={this.editName} value={name} />
            <Status onChange={this.editStatus} value={status} />
          </Edit>
        ) : (
          <Profile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            name={name}
            status={status}
          />
        )}
      </div>
    );
  }
}

export default CardProfile;
