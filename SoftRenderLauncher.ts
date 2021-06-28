function main(){
    console.log("Hello World!!");
    let canvas = document.getElementById("SoftRender");

    if(!canvas){
        console.error("Cannot find canvas SoftRender!!");
        return;
    }

    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,960,640);
    console.log("ctx",ctx);
}