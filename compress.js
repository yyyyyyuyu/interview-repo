
function compress() {
    let fileObj = document.getElementById('file').files[0] //上传文件的对象
    let reader = new FileReader()
    reader.readAsDataURL(fileObj)
    reader.onload = function(e) {
        let image = new Image() //新建一个img标签（还没嵌入DOM节点)
        image.src = e.target.result
        image.onload = function() {
            let canvas = document.createElement('canvas'),
                context = canvas.getContext('2d'),
                imageWidth = image.width / 2,    //压缩后图片的大小
                imageHeight = image.height / 2,
                data = ''

            canvas.width = imageWidth
            canvas.height = imageHeight

            context.drawImage(image, 100, 100, imageWidth, imageHeight)
            console.log(canvas);
            data = canvas.toDataURL('image/jpeg')
            console.log(data);
            //压缩完成
            image.src = data;
            const des = document.getElementById('production');
            des.innerHTML = '';
            des.appendChild(image);
        }
    }
}
export {compress}
