import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';

const App = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      }
      : null;
  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Desired Calorie Intake">
          <Input placeholder="1500 e.g." />
        </Form.Item>
        <Form.Item label="Select Diet Type" name="layout">
          <Radio.Group value={formLayout}>
            <Radio.Button value="keto">Keto</Radio.Button>
            <Radio.Button value="vegan">Vegan</Radio.Button>
            <Radio.Button value="halal">Halal</Radio.Button>
            <Radio.Button value="kosher">Kosher</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Generate daily meal plan</Button>
        </Form.Item>
      </Form>
      <div className="recipie-container">
        <div className="recipie1">
          <p>Recipie 1</p>
        </div>
        <div className="recipie2">
          <p>Recipie 2</p>
        </div>
        <div className="recipie3">
          <p>Recipie 3</p>
        </div>
      </div>
    </>
  );
};

export default App;