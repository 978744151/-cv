/**
 * 游戏场景管理器
 * 
 * 渲染场景
 * 切换场景
 * 处理当前场景的事件
 */
// 导入场景
import start from './start'
export default {
    //  游戏场景集合
    scenesList: {   
         start
    },
    currentSceneName: 'start',

    render(ctx) {
        // 根据当前场景的名称，获取到当前场景
        this.scenesList[this.currentSceneName].render(ctx)
    },

    changeSence() {

    }
}