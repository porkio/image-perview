# image-perview(图片查看器)

### Introduction

基于 Swiper 的极简 web 端（多端兼容）图片预览工具

### Installation

```
npm install image-perview --save
```

### Usage

```js
import ImagePerview from 'image-perview'

const viewer = new ImagePerview({
  current: 'current.jpg', // 当前图片URL
  list: ['current.jpg', 'other.jpg'], // 所有需要预览的图片列表
  allowDownload: false, // 是否允许下载或保存图片
})
```

### Use in static pages

```js
<!-- Load CSS -->
<link rel="stylesheet" href="dist/swiper-bundle.min.css">
<!-- Load JS -->
<script src="dist/swiper-bundle.min.js"></script>
<script src="dist/image-perview.js"></script>

const viewer = new ImagePerview({
  current: 'current.jpg', // 当前图片URL
  list: ['current.jpg', 'other.jpg'], // 所有需要预览的图片列表
  allowDownload: false, // 是否允许下载或保存图片
})
```

### LICENSE

MIT@[Pork](https://github.com/porkio)
