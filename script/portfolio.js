const mouse = document.querySelector('.mouse')

// 마우스 커서 모양 바꾸기
window.addEventListener('mousemove',(e)=>{
    mouse.style.left = `${e.clientX}px`
    mouse.style.top = `${e.clientY}px`
})

//  ------- 링크 설정되지 않은 a 태그 클릭시 상단으로 올라가는 것 막기
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        // 링크의 href 속성을 가져옴
        const href = link.getAttribute('href');
        
        // href가 #인 경우에만 preventDefault() 호출
        if (href === '#') {
            event.preventDefault();
        }
    });
});