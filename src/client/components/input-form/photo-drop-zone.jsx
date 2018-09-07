import React, { Component } from 'react';
import superagent from 'superagent';
import Dropzone from 'react-dropzone'
import { Loader, Segment, Dimmer, Icon } from 'semantic-ui-react';
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
      <Segment>
        <Dropzone
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            borderWidth: "2",
            borderStyle: "dashed",
            textAlign: "center"
          }}
          onDrop={this.handleDrop}
          multiple={false}
          accept="image/*">
          <div>Drop an image or click to select a file to upload.</div>
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
      </Segment>
    );
  }
}