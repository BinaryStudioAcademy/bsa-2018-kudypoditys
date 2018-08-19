import React, {Fragment} from 'react';

import Dropzone from 'react-dropzone'
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';


class PhotoTab extends React.Component {
    handleRemoveFile = (index) => {
        const stateFiles = this.state.files;
        stateFiles.splice(index, 1);
        this.setState({files: stateFiles});
    };
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

        this.props.filesUpdate(stateFiles);

    };
    handleProceed = (files) => {
//todo redirect
    }

    constructor(props) {
        super(props);

        this.state = {
            files: []

        };
    }

    render() {
        console.log(this.props)
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
                        {this.state.files.map((file, index) => (
                            <li
                                className="fileInput__file"
                                key={file.name}
                            >
                                {file.name} &mdash; {file.size} bytes
                                <Button
                                    onClick={this.handleRemoveFile.bind(this, index)}
                                    style={{cursor: "pointer", margin: 10}
                                    }

                                >
                                    Remove
                                </Button>
                            </li>
                        ))}
                    </ul>


                </form>
                <Button
                    color='teal'
                    onClick={this.handleProceed()}
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