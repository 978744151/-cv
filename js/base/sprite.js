// 用来创建所有的游戏精灵  sprite  精灵
import databus from '../databus'

export default class Sprite {
    constructor(config){
        this.img = config.img
        this.x = config.x
        this.y = config.y
        this.width = config.width
        this.height = config.height
    }
    // 渲染自己的方法
    render(ctx){   
        ctx.drawImage(databus.resources.images[this.img],this.x,this.y,this.width,this.height)
    }
}
// 游戏开始 sceneManager.render(ctx)[scence] 场景管理器（databus）=》 (index。render) =>然后到了start  
// start引用的是(scene.render)（场景）的方法 

