// 当前场景
export default class Sence{
    constructor(config) {
        // 假入roles是个对象

        // roles 是一个数组
      this.roles = config.role;
    }
    render(ctx) {
        this.roles.forEach(role => {
            role.render(ctx)
        })
    }
}

