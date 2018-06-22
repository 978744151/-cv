// 创建start场景

import Scene from '../base/scene'

import flappyBirdTitle from '../roles/start/flappybirdtitle'
import  replay from '../roles/start/replay'

export default new Scene ({
    role: [
        flappyBirdTitle,
        replay
    ]
})

/**
 * 1 主循环调用  index => render 
 * 2 index 调用当前场景的   render   scene =>render
 * 3 scene 调用自己的render   scene => render 
 * 4 每个精灵自己通过自己render方法渲染到页面中
 */