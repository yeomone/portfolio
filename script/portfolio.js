const mouse = document.querySelector('.mouse')

// 마우스 올렸을 때 이미지 나타나기



// 마우스 커서 모양 바꾸기
window.addEventListener('mousemove',(e)=>{
    mouse.style.left = `${e.clientX}px`
    mouse.style.top = `${e.clientY}px`
})