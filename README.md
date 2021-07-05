# image-perview(图片查看器)

### Introduction

基于 Swiper 的极简 web 端（多端兼容）图片预览工具

### Usage

```
npm install image-perview --save

import ImagePerview from 'image-perview'

const viewer = new ImageViewer({
    current: 'current.jpg', // 当前图片URL
    list: [], // 所有需要预览的图片列表
    allowDownload: false, // 允许下载或保存图片
})
```
