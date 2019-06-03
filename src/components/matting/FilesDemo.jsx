import React from 'react'
import Files from 'react-files'

class FilesDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            files : []
        }
    }

    onFilesChange = (files) => {
        console.log(files)
        this.setState({
            files: files
        })
    }

    onFilesError = (error, file) => {
        console.log('error code' + error.code + ': ' + error.message)
    }

    render() {
        
        return (
            
                <div className="files">
                    <Files
                    className="files-dropzone"
                    onChange={this.onFilesChange}
                    onError={this.onFilesError}
                    accepts={['image/*', '.pdf', 'audio/*', 'video/mp4']}
                    multiple
                    maxFiles={6}
                    maxFileSize={10000000}
                    minFileSize={0}
                    clickable
                    >
                        Drop files here or click to upload
                    </Files>
                    <div>
                    {
					this.state.files.map((file) => {
						return (
                                <img src={file.preview.url} alt="can't show" />
						);
					})}
                    </div>
                </div>

            
        )
    }
}
 
export default FilesDemo;