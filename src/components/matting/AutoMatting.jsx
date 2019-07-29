/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Row, Col, Card, Menu, Button, Icon, Dropdown, Drawer, Divider } from 'antd';
import ImageCrop from './ImageCrop'
import {get, post, upload} from '../../methods/Request'
import {HOST} from '../../constants/Constant'

class AutoMatting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            button : '请选取实例',
            visible: false,
            img: ''
        }
    }

    handleMenuClick = (e) => {
        console.log('click left button', e)
        let instance_id = e.key-1 
        this.setState({
            button: 'instance ' + instance_id
        })
    }

    showDrawer = () => {
        this.setState({
          visible: true,
        })
    }

    onClose = () => {
        this.setState({
            visible: false
        })
    }

    onMatteChange = (img) => {
        this.setState({
            img: img
        })
        console.log('img', this.state.img)
    }

    onMattingClick = () => {
        console.log('触发点击事件')
        //console.log('file', this.state.files[0])
        let formData = new FormData()
        formData.append("img", this.state.img);
        console.log('formData', formData)
        upload(HOST + '/remove_bg', formData).then(function (data) {
            if (data.success){
                console.log(data)
            }else{
                console.log('发生错误')
            }
        })
    }


    

    

    render() {
        let self = this
        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1">
                <Icon type="user" />
                instance 0
              </Menu.Item>
            </Menu>
        );
        return(
            <div className="gutter-example">
                <ImageCrop callback={this.onMatteChange}/>
                <Button type="primary" onClick={this.showDrawer}>打开工具箱</Button>
                <Drawer
                    title="抠图工具箱"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width="300"
                >
                    <a href='https://www.baidu.com' style={{fontSize:20, marginLeft:"45%"}}>识别</a>
                    <Divider />
                    <a onClick={this.onMattingClick} style={{fontSize:20, marginLeft:"45%"}}>抠图</a>
                    <Divider />
                    <a href='https://www.baidu.com' style={{fontSize:20, marginLeft:"45%"}}>后处理</a>
                    <Divider />
                    <a href='https://www.baidu.com' style={{fontSize:20, marginLeft:"45%"}}>下载</a>
                    <Divider />
                </Drawer>
            </div>
        )
    }
}

export default AutoMatting;