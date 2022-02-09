import { useState, useEffect, useMemo } from 'react'
import { Form, Tag, Select, Checkbox, message, Modal, Anchor } from 'antd'

const { Link } = Anchor

const data = [
  {
    label: 'A',
    checked: false,
    disabled: false,
  },
  {
    label: 'B',
    checked: true,
    disabled: false,
  },
  {
    label: 'C',
    checked: false,
    disabled: false,
  },
  {
    label: 'D',
    checked: false,
    disabled: false,
  },
]

const Index = () => {
  const [form] = Form.useForm()
  const [selectOptions, setSelectOptions] = useState(data)

  const handleChangeChecked = (name: string) => {
    const newSelectOptions = selectOptions.map((item) => {
      let { checked } = item
      const { label, disabled } = item
      if (item.label === name) {
        checked = !checked
      }
      return { label, checked, disabled }
    })
    setSelectOptions(newSelectOptions)
  }

  const propertyIndustryList = useMemo(
    () => (form.getFieldValue('values') ? form.getFieldValue('values') : []),
    [form.getFieldValue('values')]
  )
  const selectOptionsEqualOne = useMemo(() => {
    const list = selectOptions.filter((item) => item.checked)
    return list.length === 1
  }, [selectOptions])

  const onChange = (e: any, name: string) => {
    if (selectOptionsEqualOne && !e.target.checked) {
      message.warning('至少保留一个值')
    } else {
      handleChangeChecked(name)
      if (e.target.checked) {
        form.setFieldsValue({ values: [...propertyIndustryList, name] })
      } else {
        form.setFieldsValue({
          values: propertyIndustryList.filter((item: string) => item !== name),
        })
      }
    }
  }

  useEffect(() => {
    const list = selectOptions.map((item) => {
      let { disabled } = item
      const { label, checked } = item
      if (
        !propertyIndustryList.includes(label) &&
        propertyIndustryList.length > 2
      ) {
        disabled = true
      } else {
        disabled = false
      }
      return { label, checked, disabled }
    })
    setSelectOptions(list)
  }, [propertyIndustryList])

  // 至少选中2个值
  const onMoreThanOneOk = (label: string) => {
    const idx = propertyIndustryList.indexOf(label)
    const newProList = [...propertyIndustryList]
    newProList.splice(idx, 1)
    handleChangeChecked(label)
    form.setFieldsValue({ values: newProList })
  }

  const tagRender = ({ label, closable }: any) => {
    const onPreventMouseDown = (event: any) => {
      event.preventDefault()
      event.stopPropagation()
    }
    const onCloseChange = (e: any) => {
      e.preventDefault()
      if (propertyIndustryList.length > 1) {
        Modal.confirm({
          title: '确定要删除该值吗？',
          content: '删除该值将清空所有与其相关的数据。',
          onOk: () => onMoreThanOneOk(label),
        })
      } else {
        message.warning('至少保留一个值')
      }
    }
    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onCloseChange}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    )
  }

  const dropdownRender = () => (
    <div>
      {selectOptions.map((item) => {
        const { label, checked, disabled } = item
        return (
          <div key={label} style={{ padding: '4px 8px' }}>
            <Checkbox
              disabled={disabled}
              checked={checked}
              onChange={(e) => onChange(e, label)}
            >
              {label}
            </Checkbox>
          </div>
        )
      })}
    </div>
  )

  return (
    <div>
      <Form form={form} initialValues={{ values: ['B'] }}>
        <Form.Item
          label="值"
          name="values"
          rules={[{ required: true, message: '' }]}
        >
          <Select
            mode="multiple"
            style={{ width: 352 }}
            tagRender={tagRender}
            dropdownRender={dropdownRender}
            showArrow
          />
        </Form.Item>
      </Form>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '80vw' }}>
          <div id="first" style={{ height: 800, border: '1px solid red' }}>
            第一行
          </div>
          <div id="second" style={{ height: 600, border: '1px solid green' }}>
            第二行
          </div>
          <div id="third" style={{ height: 480, border: '1px solid blue' }}>
            第三行
          </div>
          <div id="fourth" style={{ height: 100, border: '1px solid pink' }}>
            第四行
          </div>
        </div>
        <Anchor offsetTop={80}>
          <Link href="#first" title="第一行" />
          <Link href="#second" title="第二行" />
          <Link href="#third" title="第三行" />
          <Link href="#fourth" title="第四行" />
        </Anchor>
      </div>
    </div>
  )
}

export default Index
