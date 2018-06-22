// 精灵
// 导入游戏配置
import config from './config'

import databus from './databus'

import sceneManager from './scences/index'

const ctx = canvas.getContext('2d')
export default class FlappyBird{
    constructor(){
      this.start()
      this.render = this.render.bind(this)
    }
    start(){
      this.loadResources().then(()=>{
        //   此处开始游戏
        console.log(databus.resources)
        window.requestAnimationFrame(this.render)
      })
      
    }
    // 游戏主循环，用来渲染游戏
    render(){
        sceneManager.render(ctx)
      // 游戏渲染要做什么事情
      // 1 拿到当前场景，调用当前场景的渲染方法，渲染游戏中的所有角色
      window.requestAnimationFrame(this.render)
    }
// 游戏资源加载完成之后 开始游戏
    loadResources(){

        const resourcesList = [...config.resources.IMG_NAME_LIST ,
          ...config.resources.MUSIC_NAME_LIST 
        ]
        let resource = null
        let loadedCount = 0
        // promise
        return new Promise((resolve,reject)=>{
            resourcesList.forEach(resName=>{
                if(resName.endsWith('.png')){
                    // 图片资源
                    resource = new Image()
                    resource.src = `images/${resName}`
                    databus.resources.images[resName.slice(0, -4)] = resource
                    databus.resources.images[resName.slice(0, -4)] = resource
                } else if (resName.endsWith('.mp3')){
                    // 音乐资源
                    resource = new Audio()
                    resource.src = `audio/${resName}`
                    databus.resources.audios[resName.slice(0, -4)] = resource
                }
                resource.addEventListener('load',() => {
                    loadedCount++
                    if( loadedCount === resourcesList.length){
                        console.log(`资源加载完成${resourcesList.length}`);
                        resolve()
                    }
                })
                // 哪个资源加载失败了，就重新加载哪个资源
                resource.addEventListener('error',() => {
                        reject()
                })
            })                                                            
        })
    }
}