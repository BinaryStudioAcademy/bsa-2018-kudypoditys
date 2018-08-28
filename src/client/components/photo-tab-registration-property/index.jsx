import React, {Fragment} from 'react';

import request from 'superagent';

import Dropzone from 'react-dropzone'
import {Button, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import {UPLOAD_PRESET, UPLOAD_URL} from './config'
import './index.scss'


class PhotoTab extends React.Component {
    handleDrop = (files) => {
        const stateFiles = this.state.files;

        const filenames = [];
        stateFiles.forEach(file => {
            filenames.push(file.name);
        });

        files.forEach(item => {
            if (filenames.indexOf(item.name) + 1) {
                stateFiles.splice(filenames.indexOf(item.name), 1);
            }
            stateFiles.push(item);
        });

        this.setState({
            files: stateFiles
        });
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
        const stateURLS = this.state.images,
            images = {
                images: stateURLS
            };

        this.props.updateTab(images);

    };

    handleRemoveFile = (index) => {
        const stateUrls = this.state.URLS;
        stateUrls.splice(index, 1);
        this.setState({URLS: stateUrls});
    };
    handleProceed = () => {


        this.props.updateTab({
            activeIndex: 5
        });

    };

    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
            files: [],
            images: []
        };
    }

    handleImageUpload(file) {
        let upload = request.post(UPLOAD_URL)
            .field('upload_preset', UPLOAD_PRESET)
            .field('file', file);
        const stateURLS = this.state.images;
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                stateURLS.push(response.body.secure_url);

                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url,
                    images: stateURLS
                });

            }
        });
    }

    render() {

        return (
            <Fragment>
                <form>
                    <div style={{textAlign: "center"}}>
                        <Dropzone
                            style={{
                                position: "relative",
                                width: "100%",
                                height: 200,
                                borderWidth: "2",
                                borderStyle: "dashed",
                                textAlign: "center"
                            }}
                            onDrop={this.handleDrop.bind(this)}
                            multiple={false}
                            accept="image/*">
                            <div>Drop an image or click to select a file to upload.</div>
                        </Dropzone>
                    </div>

                    <ul className="fileInput__files">
                        {this.state.images.map((URL, index) => (
                            <li
                                className="fileInput__file"


                            >
                                <img src={URL} style={{height: 150, width: 150}}/>

                                <Icon
                                    name='trash alternate'
                                    onClick={this.handleRemoveFile.bind(this, index)}
                                    style={{cursor: "pointer", margin: 10}
                                    }

                                >

                                </Icon>
                            </li>
                        ))}
                    </ul>


                </form>
                <Button
                    color='teal'
                    onClick={this.handleProceed}
                    style={{cursor: "pointer", marginLeft: 10, width: '100%'}
                    }

                >

                    PROCEED
                </Button>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTab)