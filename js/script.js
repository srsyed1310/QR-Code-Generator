let imgBox = document.getElementById('imagebox');
let qrImg = document.getElementById('QRGenetator_image');
let qrText = document.getElementById('input_text');

const btn = document.getElementById('btn')

function generate(){

    if(qrText.value.length > 0){

        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        imgBox.classList.add("show-img");

    }else{

        qrText.classList.add('error');

        setTimeout(()=>{
        qrText.classList.remove('error');

        },1000)

    }

}

btn.addEventListener('click',()=>{
    generate();
})
