import { Fragment } from 'react'
import Head from 'next/head'
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from 'antd'

import css from './index.less'

const FormItem = Form.Item
const Option = Select.Option

export default () => (
  <Fragment>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a> & Ant Design
      </h1>
      <div>
        <p className={css.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
      </div>
    </div>
    <Form layout="horizontal">
      <FormItem
        label="Input Number"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber
          size="large"
          min={1}
          max={10}
          style={{ width: 100 }}
          defaultValue={3}
          name="inputNumber"
        />
        <a href="#">Link</a>
      </FormItem>

      <FormItem label="Switch" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Switch defaultChecked name="switch" />
      </FormItem>

      <FormItem label="Slider" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Slider defaultValue={70} />
      </FormItem>

      <FormItem label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Select
          size="large"
          defaultValue="lucy"
          style={{ width: 192 }}
          name="select"
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </FormItem>

      <FormItem
        label="DatePicker"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker name="startDate" />
      </FormItem>
      <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
        <Button size="large" type="primary" htmlType="submit">
          OK
        </Button>
        <Button size="large" style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </FormItem>
    </Form>
  </Fragment>
)
