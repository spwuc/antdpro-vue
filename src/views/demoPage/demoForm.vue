<template>
  <a-card>
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-form-item label="姓名">
        <a-input v-decorator="ruls.name" placeholder="请输入姓名" />
      </a-form-item>
      <a-form-item label="年龄">
        <a-input v-decorator="ruls.age" placeholder="请输入年龄" />
      </a-form-item>
      <a-form-item label="地址">
        <a-input v-decorator="ruls.address" placeholder="请输入地址" />
      </a-form-item>
      <a-form-item label="备注">
        <a-textarea
          v-decorator="ruls.note"
          placeholder="请输入备注"
          resize="none"
          :autosize="{ minRows: 2, maxRows: 2 }"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{offset:7,span:10}">
        <a-button type="primary" size="large" block @click="handleSubmit">提交</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      title: '',
      visible: false,
      form: this.$form.createForm(this),
      ruls: {
        name: ['name', { rules: [{ required: true, message: '请输入姓名！' }] }],
        age: ['age', { rules: [{ required: true, message: '请输入年龄！' }] }],
        address: ['address', { rules: [{ required: true, message: '请输入地址！' }] }],
        note: ['note', { rules: [{ required: false }] }]
      }
    }
  },
  methods: {
    show(params = {}) {
      this.visible = true
      if (params.title) {
        this.title = params.title
      }
      let _this = this
      setTimeout(() => {
        this.form.setFieldsValue({
          name: params.name || '',
          age: params.age || '',
          address: params.address || '',
          note: params.note || ''
        })
      }, 0)
    },
    handleSubmit() {
      const {
        form: { validateFields }
      } = this
      validateFields((errors, values) => {
        if (!errors) {
          this.visible = false
          console.log(values)
        }
      })
    }
  }
}
</script>
