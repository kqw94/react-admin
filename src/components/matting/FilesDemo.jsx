import React from 'react'
import Files from 'react-files'
import {Icon, Button, Row, Col} from 'antd'
import _ from 'underscore'
import {get, post, upload} from '../../methods/Request'
import {HOST} from '../../constants/Constant'

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

    onClick = () => {
        console.log('触发点击事件')
        upload(HOST + '/mrcnn', {
            img: this.state.files[0]
        }).then(function (data) {
            if (data.success){
                console.log(data)
            }else{
                console.log('发生错误')
            }
        })
    }


    render() {
        let self = this
        let button = _.isEmpty(self.state.files) ? []: (<Button type="primary" onClick={this.onClick}>分割</Button>)
        
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
                        
                        <Icon type="plus-square" theme="twoTone" style={{marginLeft: "36%", fontSize:100}}/>
                    </Files>
                    <Col className="gutter-row" md={12}>
                        {
                        this.state.files.map((file) => {
                            return (
                                    <img src={file.preview.url} alt="can't show" width="200%"/>
                            );
                        })}
                        <div>{button}</div>
                    </Col>
                </div>

            
        )
    }
}
 
export default FilesDemo;