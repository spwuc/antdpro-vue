<template>
  <div class="container">
    <div class="centerBox">
      <a-spin tip="加载中..." :spinning="mapLoading" size="large">
        <div class="mapbox" id="allMap"></div>
      </a-spin>
    </div>
  </div>
</template>
 
<script>
import { MP } from '@/utils/map'
export default {
  name: 'demo',
  data: () => ({
    ak: 'O4dk4hc0x9F12i5wQanVd8VQ',
    map: null,
    mapLoading: true
  }),
  mounted() {
    this.$nextTick(() => {
      const _this = this
      MP(_this.ak).then(BMapGL => {
        _this.baiduMap()
      })
    })
  },
  methods: {
    baiduMap: function() {
      var map = new BMapGL.Map('allMap')
      var point = new BMapGL.Point(113.600782, 37.950384)
      map.centerAndZoom(point, 15.5)
      map.enableScrollWheelZoom(true)
      //   map.setHeading(64.5)
      // map.setTilt(73)
      map.setMapStyleV2({ styleId: 'bce6b3ea79c64179ebdd6db3fa3ffda9' }) // 使用导入的主题样式
      this.map = map
      let _this = this
      setTimeout(() => {
        this.mapLoading = false
      }, 1000)
    }
  }
}
</script>
 
<style lang="less" scoped>
.mapbox {
  width: 100%;
  height: 600px;
  // background: #091220 !important;
}
</style>