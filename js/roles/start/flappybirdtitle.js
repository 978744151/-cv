import Sprite from '../../base/sprite'

import config from '../../config'

// 实例化
export default new Sprite({
    // 此处需要存放图片名称，等到图片加载完成后 从这里根据名称在config取出图片
    img:'flappybird',
   ...config.gameInfo.flappybird
})