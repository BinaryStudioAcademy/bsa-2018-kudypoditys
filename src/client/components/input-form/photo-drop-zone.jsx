import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import Dropzone from 'react-dropzone'
import { Loader, Segment, Dimmer, Icon, Button } from 'semantic-ui-react';
import './index.scss';
require('dotenv').config();

export const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
export const UPLOAD_URL = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;


export default class PhotoDropZone extends Component {
  state = {
    isLoading: false
  };

  handleDrop = (files) => {
    const { input } = this.props;
    const images = input.value || [];

    if (files.length < 1) {
      return;
    }

    const file = files[0];

    this.setState({
      isLoading: true
    });

    superagent.post(UPLOAD_URL)
      .field('upload_preset', UPLOAD_PRESET)
      .field('file', file)
      .end((err, response) => {
        if (err) {
          console.error(err);
          this.setState({
            isLoading: false
          });
          return;
        }

        if (response.body.secure_url !== '') {
          images.push({
            url: response.body.secure_url
          });

          this.setState({
            isLoading: false
          });

          if (input)
            input.onChange(images);
        }
      });
  }

  handleRemove = (image) => {
    const { input } = this.props;
    const { value: images } = input;

    input.onChange(images.filter(x => x.url != image.url));
  }

  render() {
    const { isLoading } = this.state;
    const { input } = this.props;
    const images = input.value || [];

    return (
      <Fragment>

        <Dropzone
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            borderWidth: "2",
            textAlign: "center",
            border: "2px dashed grey"
          }}
          id="dropzone"
          onDrop={this.handleDrop}
          multiple={false}
          accept="image/*">
          <div className="dropzone-text">
            <div className="dropzone-title">
              Upload at least one photo
            </div>
            Drag and drop your photos here
            <p>or</p>
          </div>
          <Button
            color="blue"
            fluid
            className="dropzone-btn"
            type="button"
          >
            <Icon name='image' />
            Add photos</Button>
        </Dropzone>

        {isLoading &&
          <Dimmer active>
            <Loader size='huge'>Loading</Loader>
          </Dimmer>
        }

        <ul className="fileInput__files">
          {images.map((image, index) => (
            <li key={index} className="fileInput__file">
              <img src={image.url} style={{ height: 150, width: 150 }} />

              <Icon
                name='trash alternate'
                onClick={this.handleRemove.bind(this, image)}
                style={{ cursor: "pointer", margin: 10 }}
              >
              </Icon>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}