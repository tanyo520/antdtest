import React, { useState } from 'react';
import {
  Button,
  Col,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Pagination,
  Row,
  Space,
} from 'antd';
import { SketchPicker } from 'react-color';

const SplitSpace = (props) => (
  <Space split={<Divider type="vertical" />} size={4} {...props} />
);

export default function IndexPage() {
  const [color, setColor] = useState({
    primaryColor: '#7e23de',
  });

  const onColorChange = (nextColor: Partial<typeof color>) => {
    setColor(nextColor);
    
    ConfigProvider.config({
      theme: nextColor,
    });
  };

  const inputProps = {
    style: { width: 128 },
  };

  return (
    <ConfigProvider prefixCls="ant">
      <div style={{margin: '100px'}}>
      <Row gutter={16} wrap={false}>
        <Col flex="none">
          <Space direction="vertical" align="center">
            <SketchPicker
              presetColors={['#7e23de', '#25b864', '#ff6f00']}
              color={color.primaryColor}
              onChange={({ hex }) => {
                onColorChange({
                  primaryColor: hex,
                });
              }}
            />

            <span style={{ color: 'var(--ant-primary-color)' }}>
              var(`--ant-primary-color`)
            </span>
          </Space>
        </Col>

        <Col>
          <Form>
            <SplitSpace>
              <Form.Item>
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="success">
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="warning">
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="error">
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="validating">
                <Input {...inputProps} />
              </Form.Item>
            </SplitSpace>
          </Form>
          <br /><br />
          <Button type="primary" >
            Primary
          </Button>
          <br /><br />
          <Pagination showQuickJumper defaultCurrent={2} total={500} />
        </Col>
      </Row>
    </div>
    </ConfigProvider>
  );
}
