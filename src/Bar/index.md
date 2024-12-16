https://dev-crm.chongpangpang.com/crm-bff-app/presentation/customer/goods/v2/recommend/home
{"data":{"totalElements":"0","content":null,"number":2,"size":10,"totalPages":0,"numberOfElements":0,"dbPageNo":0,"skipGoods":0,"goodData":[{"skuId":null,"skuName":null,"itemId":"1717011951734165506","itemName":"美洗spa111","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20231025/26252172-1a48-43b4-8907-c5e67cc7f74c_4.png","salePrice":1.0,"skuTag":0,"lowestPrice":1.0,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1734870332847460354","itemName":"蜂蜜柚子","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20231213/c6f99309-6e54-477a-8dc0-bcd9f38bb211_file.jpeg","salePrice":0.0,"skuTag":0,"lowestPrice":2.0,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1743148325717151746","itemName":"付呗支付专用","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20240105/2e135110-cc7c-40bd-8e99-9f04d21a31ef_lADPD3zUMDRnGWRmbg_110_102.jpg","salePrice":20.0,"skuTag":0,"lowestPrice":0.01,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1743148826609324033","itemName":"电商C","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20240105/e1cb0a2f-3ced-405d-add2-0a17898e6868_lADPD3zUMDRnGWRmbg_110_102.jpg","salePrice":20.0,"skuTag":0,"lowestPrice":10.0,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1743149006490439682","itemName":"电商DD-付呗店铺商品-1","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20240105/cea4af19-6e82-4f1a-978b-f755d3fa4ba9_lADPD3zUMDRnGWRmbg_110_102.jpg","salePrice":16.0,"skuTag":0,"lowestPrice":0.01,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1743149237806305282","itemName":"电商E","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20240105/2c9332ee-9cf1-4ef9-a9b3-61655c1f4dd6_lADPD3zUMDRnGWRmbg_110_102.jpg","salePrice":18.0,"skuTag":0,"lowestPrice":5.0,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1764462513426505730","itemName":"美容测试","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20240304/8a292b97-21b2-4b1a-84b8-bce3b27f4cc9_%E4%BA%8C%E7%BB%B4%E7%A0%81.webp","salePrice":10.0,"skuTag":0,"lowestPrice":10.0,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1764572574941421569","itemName":"电商P","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20240304/11946d2a-7cd0-4ca2-b482-32885c4d4ae1_lADPD3zUMDRnGWRmbg_110_102.jpg","salePrice":10.0,"skuTag":0,"lowestPrice":10.0,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1765193917056774145","itemName":"电商GG","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20240306/bb0ef465-5755-4edf-8980-9665dd89f401_lADPD3zUMDRnGWRmbg_110_102.jpg","salePrice":5.0,"skuTag":0,"lowestPrice":1.0,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null},{"skuId":null,"skuName":null,"itemId":"1774980450829815809","itemName":"嗷嗷嗷","majorPicture":"http://wp-file-dev.oss-cn-hangzhou.aliyuncs.com/%E9%97%A8%E5%BA%97logo/20240407/512f96ed-9138-400d-ba12-1cbdb42427fb_33333.png","salePrice":0.0,"skuTag":0,"lowestPrice":3.0,"promotionPrice":null,"shopId":"1724336417612292097","promotionTag":null}]},"code":0,"message":"成功","success":true}
# Bar

This is an example component of Vue SFC.

```vue
<script setup>
import { ref } from 'vue';
import { Bar } from 'naifu';

const color = ref('red');
</script>

<template>
  <p class="greeting">
    <Bar icon="🤙">Hello Vue!</Bar>
  </p>
</template>

<style>
.greeting {
  color: v-bind('color');
  font-size: 16px;
  font-weight: bold;
}
</style>
```
## Bar API

### Props

<API id="Bar" type="props"></API>

### Slots

<API id="Bar" type="slots"></API>

### Events

<API id="Bar" type="events"></API>
