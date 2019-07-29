/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Row, Col, Card, Menu, Button, Icon, Dropdown } from 'antd';
import FilesDemo from './FilesDemo';
import plane from './tmp.png';
import plane2 from './tmp2.png'
import plane3 from './WechatIMG134.png'
import dog from './WechatIMG136.jpeg'
import dog1 from './WechatIMG131.png'
import dog2 from './WechatIMG132.png'
import dog3 from './WechatIMG133.png'
import dog_mrcnn from './WechatIMG135.png'

class SemiAutomaticMatting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            button : '请选取实例'
        }
    }

    handleMenuClick = (e) => {
        console.log('click left button', e)
        let instance_id = e.key-1 
        this.setState({
            button: 'instance ' + instance_id
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
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="原图" bordered={false}>
                                {/*<EchartsGraphnpm />*/}
                                <FilesDemo />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="分割图片" bordered={false}>
                                <img src={plane2} style={{width:"100%"}}/>
                                
                            </Card>
                            <Dropdown overlay={menu}>
                                    <Button>
                                        {this.state.button} <Icon type="down" />
                                    </Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default SemiAutomaticMatting;