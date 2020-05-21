<template>
  <a-modal
    title="新建规则"
    :confirmLoading="$store.state.loadding"
    :width="640"
    :visible="visible"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-spin :spinning="$store.state.loadding">
      <a-form :form="form">
        <a-form-item label="描述" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input
            v-decorator="['desc', {rules: [{required: true, min: 5, message: '请输入至少五个字符的规则描述！'}]}]"
          />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
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
      visible: false,
      form: this.$form.createForm(this)
    }
  },
  methods: {
    add() {
      this.visible = true
    },
    handleSubmit() {
      const {
        form: { validateFields }
      } = this
      validateFields((errors, values) => {
        if (!errors) {
          setTimeout(() => {
            this.visible = false
            this.$emit('ok', values)
          }, 1500)
        }
      })
    },
    handleCancel() {
      this.visible = false
    }
  }
}
</script>
