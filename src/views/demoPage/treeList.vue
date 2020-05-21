<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="规则编号">
              <a-input v-model="queryParam.id" placeholder />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="使用状态">
              <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item label="调用次数">
                <a-input-number v-model="queryParam.callNo" style="width: 100%" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="更新日期">
                <a-date-picker v-model="queryParam.date" style="width: 100%" placeholder="请输入更新日期" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="使用状态">
                <a-select v-model="queryParam.useStatus" placeholder="请选择" default-value="0">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="使用状态">
                <a-select placeholder="请选择" default-value="0">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="!advanced && 8 || 24" :sm="24">
            <span
              class="table-page-search-submitButtons"
              :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
            >
              <a-button type="primary" @click="searchData">查询</a-button>
              <a-button style="margin-left: 8px" @click="resetSearchForm">重置</a-button>
              <a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? '收起' : '展开' }}
                <a-icon :type="advanced ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="$refs.userEditModal.show()">新建</a-button>
    </div>

    <a-table ref="table" size="default" rowKey="key" :columns="columns" :data-source="data">
      <span slot="action" slot-scope="text, record">
        <template>
          <a @click="handleRemove(record)">删除</a>
          <a-divider type="vertical" />
          <a @click="handleSub(record)">编辑</a>
        </template>
      </span>
    </a-table>
    <user-edit ref="userEditModal" @ok="handleOk" />
  </a-card>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
// import StepByStepModal from './modules/StepByStepModal'
import UserEdit from './modules/userEdit'
import { getRoleList, getServiceList } from '@/api/manage'

export default {
  name: 'TableList1',
  components: {
    STable,
    Ellipsis,
    UserEdit
  },
  data() {
    return {
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          width: '12%'
        },
        {
          title: '地址',
          dataIndex: 'address',
          width: '30%',
          key: 'address'
        },
        {
          title: '操作',
          scopedSlots: { customRender: 'action' }
        }
      ],
      data: [
        {
          key: 1,
          name: 'John Brown sr.',
          age: 60,
          address: 'New York No. 1 Lake Park',
          children: [
            {
              key: 11,
              name: 'John Brown',
              age: 42,
              address: 'New York No. 2 Lake Park'
            },
            {
              key: 12,
              name: 'John Brown jr.',
              age: 30,
              address: 'New York No. 3 Lake Park',
              children: [
                {
                  key: 121,
                  name: 'Jimmy Brown',
                  age: 16,
                  address: 'New York No. 3 Lake Park'
                }
              ]
            },
            {
              key: 13,
              name: 'Jim Green sr.',
              age: 72,
              address: 'London No. 1 Lake Park',
              children: [
                {
                  key: 131,
                  name: 'Jim Green',
                  age: 42,
                  address: 'London No. 2 Lake Park',
                  children: [
                    {
                      key: 1311,
                      name: 'Jim Green jr.',
                      age: 25,
                      address: 'London No. 3 Lake Park'
                    },
                    {
                      key: 1312,
                      name: 'Jimmy Green sr.',
                      age: 18,
                      address: 'London No. 4 Lake Park'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          key: 2,
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return new Promise(resolve => {
          resolve({
            data: this.data,
            pageSize: 10,
            pageNo: 1,
            totalPage: 1,
            totalCount: 10
          })
        }).then(res => {
          return res
        })
      },
      editIng: false
    }
  },
  filters: {
    statusFilter(type) {
      return statusMap[type].text
    },
    statusTypeFilter(type) {
      return statusMap[type].status
    }
  },
  created() {},
  methods: {
    searchData() {
      let queryParam = this.$filterMoment(this.queryParam)
      console.log(queryParam)
      // console.log()
      // TODO 查询接口
      // this.$refs.table.refresh(true)

      this.editIng = false
    },
    handleRemove(record) {
      console.log(record)
      let _this = this
      this.$confirm({
        title: `确定删除${record.name}吗？`,
        onOk() {
          _this.$message.success(`${record.name} 删除成功`)
        },
        onCancel() {
          _this.$message.info(`${record.name} 取消删除`)
        }
      })
    },
    handleSub(record) {
      this.editIng = true
      this.$refs.userEditModal.show({
        title: '编辑员工',
        name: '1',
        age: '2',
        address: '3'
      })
    },
    handleOk(val) {
      console.log(val)
      console.log(this.editIng)
      this.searchData()
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    resetSearchForm() {
      this.queryParam = {}
      this.searchData()
    }
  }
}
</script>
