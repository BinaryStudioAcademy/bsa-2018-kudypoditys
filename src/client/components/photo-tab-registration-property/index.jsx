import React from 'react';

import Dropzone from 'react-dropzone'


export class PhotoTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,

        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

    }

    render() {

        return (

            <form>
                <div className="FileUpload">
                    <Dropzone
                        onDrop={this.onImageDrop.bind(this)}
                        multiple={false}
                        accept="image/*">
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                </div>

                <div>
                    {this.state.uploadedFile === null ? null :
                        <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img src={this.state.uploadedFile}/>
                        </div>}
                </div>
            </form>

        )
    }
}


