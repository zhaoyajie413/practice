class Dot {
  constructor() {
    this.x = (Math.random() - 0.5) * width; // 随机新坐标
    this.y = (Math.random() - 0.5) * height; // 随机y坐标
    this.z = Math.random() * width; // 随机z坐标
    this.radius = 10; // 元素的大小
    
    this.xProjected = 0; // 转换成2d界面的x坐标
    this.yProjected = 0; //转换成2d界面的y坐标
    this.scaleProjected = 0; // 2D世界中元素的比例（更远的=更小）
  }
  // 将我们的元素从3D世界投影到2D画布
  project() {
    // scaleProjected将根据与“相机”的距离存储元素的比例
    this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
    // xProjected是2D世界的x位置
    this.xProjected = (this.x * this.scaleProjected) + PROJECTION_CENTER_X;
    // yProjected是2D世界的y位置
    this.yProjected = (this.y * this.scaleProjected) + PROJECTION_CENTER_Y;
  }
  //在画布上绘制点
  draw() {
    // 我们首先计算点的投影值
    this.project();
    // 我们根据距离定义元素的不透明度
    ctx.globalAlpha = Math.abs(1 - this.z / width);
    // 我们根据投影坐标和比例绘制一个矩形
    ctx.fillRect(this.xProjected - this.radius, this.yProjected - this.radius, this.radius * 2 * this.scaleProjected, this.radius * 2 * this.scaleProjected);
  }
}

