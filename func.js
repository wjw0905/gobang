function drawChessBox(){
    for(var i = 0 ; i < 15 ; i ++){
        //横线起始点坐标
        context.moveTo(15,15+i*30)
        //横线结束点坐标
        context.lineTo(435,15+i*30)
        //连接横线
        context.stroke()

        context.moveTo(15+i*30,15)
        context.lineTo(15+i*30,435)
        context.stroke()
    }
}




