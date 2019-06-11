/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import FilesDemo from './FilesDemo';

class SemiAutomaticMatting extends React.Component {
    render() {
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

                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SemiAutomaticMatting;