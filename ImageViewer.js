import Swiper from 'swiper'

export default class ImageViewer {
	constructor(options) {
		if (typeof options === 'undefined') return null
		this.current = options.hasOwnProperty('current') ? options.current : ''
		this.list = options.hasOwnProperty('list') ? options.list : []
		this.currentIndex = this.list.indexOf(this.current)
		this.allowDownload = options.hasOwnProperty('allowDownload')
			? options.allowDownload
			: false
		this.clientSize = this.getViewPortOffset()
		this.viewerBox = this.init()
	}

	init() {
		const imgViewer = document.createElement('div')
		const counter = document.createElement('div')
		const swiperContainer = document.createElement('div')
		const swiperWrapper = document.createElement('div')
		swiperWrapper.innerHTML += this.list
			.map(
				(img) =>
					`<div class="swiper-slide" style="display: flex; justify-content: center; align-items: center;">
                    <img class="swiper-slide-img" style="display: block; width: ${
						this.clientSize.clientWidth <= 550 ? '100%' : 'auto'
					}; pointer-events: ${
						this.allowDownload ? 'unset' : 'none'
					}" src="${img}" alt="" />
            </div>`
			)
			.join('') // [1, 2, 3].map(item => 这里会把数组的逗号也解析出来) 用join('')可以抵消

		swiperContainer.className = 'swiper-container'
		swiperWrapper.className = 'swiper-wrapper'
		swiperContainer.appendChild(swiperWrapper)
		imgViewer.appendChild(swiperContainer)
		imgViewer.style = `
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                background-color: #000;
                z-index: 9999999;
            `
		swiperContainer.style = `
                width: 100%;
                height: 100%;
            `
		counter.style = `
                position: absolute;
                top: 24px;
                left: 50%;
                padding: 12px 24px;
                color: #fff;
                font-size: 16px;
                background-color: rgba(0, 0, 0, 0.88);
                transform: translateX(-50%);
                z-index: 999;
            `

		imgViewer.addEventListener(
			'click',
			() => {
				this.removeSelf()
			},
			false
		)

		document.body.appendChild(imgViewer)

		const _this = this

		this.swiper = new Swiper('.swiper-container', {
			slidesPerView: 1,
			initialSlide: this.currentIndex,
			centeredSlides: true,
			on: {
				slideChangeTransitionEnd: function () {
					counter.innerHTML = `${this.realIndex + 1} / ${
						_this.list.length
					}`
				},
			},
		})

		counter.innerHTML = `${this.currentIndex + 1} / ${this.list.length}`
		imgViewer.appendChild(counter)

		return imgViewer
	}

	removeSelf() {
		typeof this.viewerBox !== 'undefined' &&
			this.viewerBox !== null &&
			document.body.removeChild(this.viewerBox)
		this.freed()
	}

	// 清理内存
	freed() {
		Object.keys(this).forEach((item) => {
			this[item] = null
			delete this[item]
		})
	}

	/**
	 * 获取可视区尺寸数据
	 */
	getViewPortOffset() {
		const clientWidth =
			document.body.clientWidth || document.documentElement.clientWidth
		const clientHeight =
			document.body.clientHeight || document.documentElement.clientHeight
		return {
			clientWidth,
			clientHeight,
		}
	}
}
