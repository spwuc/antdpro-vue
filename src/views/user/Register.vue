<template>
  <div class="main user-layout-register">
    <div class="table-page-search-wrapper">
      <a-form :form="form" layout="inline">
        <a-row :gutter="48">
          <h3 class="titSub">
            <span>企业信息</span>
          </h3>
          <a-col :md="12" :sm="24">
            <a-form-item label="规则编号">
              <a-input v-decorator="ruls.id" size="large" placeholder="请输入规则编号" />
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="使用状态">
              <a-select size="large" placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="调用次数">
              <a-input-number size="large" style="width: 100%" />
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="更新日期">
              <a-date-picker size="large" style="width: 100%" placeholder="请输入更新日期" />
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="使用状态">
              <a-select size="large" placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="使用状态">
              <a-select size="large" placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="经纬度地址">
              <a-tooltip placement="topLeft" title="点击图标选择位置(经度,纬度)" arrow-point-at-center>
                <a-input v-decorator="ruls.lnglat" size="large" placeholder="请选择经纬度地址">
                  <a-icon slot="addonAfter" @click="showSelectMap" type="pushpin" />
                </a-input>
              </a-tooltip>
            </a-form-item>
          </a-col>
          <h3 class="titSub">
            <span>账号信息</span>
          </h3>
          <a-col :md="12" :sm="24">
            <a-form-item label="账号">
              <a-input v-decorator="ruls.username" size="large" placeholder="请输入账号" />
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item label="密码">
              <a-input-password v-decorator="ruls.password" size="large" placeholder="请输入密码" />
            </a-form-item>
          </a-col>

          <a-col span="10" offset="7">
            <a-button block size="large" @click="handleSubmit" type="primary">注册</a-button>
            <router-link class="login" :to="{ name: 'login' }">使用已有账户登录</router-link>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <a-modal v-model="placeDialog" :footer="null" title="选择位置" ok-text="确认" cancel-text="取消">
      <div style="height: 580px">
        <booking-map v-if="placeDialog" @submit="submitPlace"></booking-map>
      </div>
    </a-modal>
  </div>
</template>

<script>
import BookingMap from '@/components/SelectMap'
export default {
  name: 'Register',
  components: { BookingMap },
  data() {
    return {
      queryParam: {},
      form: this.$form.createForm(this),
      placeDialog: false,
      ruls: {
        id: ['id', { rules: [{ required: true, message: '请输入规则编号！' }] }],
        username: ['username', { rules: [{ required: true, message: '请输入账号！' }] }],
        password: ['password', { rules: [{ required: true, message: '请输入密码！' }] }],
        lnglat: ['lnglat', { rules: [{ required: true, message: '请选择位置！' }] }]
      }
    }
  },
  methods: {
    showSelectMap() {
      this.placeDialog = true
    },
    handleSubmit() {
      const {
        form: { validateFields }
      } = this
      validateFields((errors, values) => {
        if (!errors) {
          console.log(values)

          this.$router.push({ name: 'registerResult', params: { ...values } })
        }
      })
    },

    submitPlace(place, placeDetail) {
      this.placeDialog = false
      this.form.setFieldsValue({
        lnglat: placeDetail.lng + ',' + placeDetail.lat
      })
    }
  }
}
</script>
<style lang="less">
.user-layout-register {
  width: 720px !important;
  padding: 24px 48px;
  background-color: #fff;
  border-radius: 10px;
  .titSub {
    clear: both;
  }
  .ant-col.ant-form-item-label {
    line-height: 37px !important;
  }
  .table-page-search-wrapper {
    .ant-form-inline {
      .ant-form-item {
        > .ant-form-item-label {
          line-height: 37px;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .user-layout-register {
    width: 98% !important;
  }
}
</style>
