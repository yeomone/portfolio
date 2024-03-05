const mouse = document.querySelector('.mouse')
const introContents = document.querySelector('.introContents')
const contact = document.querySelector('.contact')
const image = document.querySelector('.mouse img'); // 이미지 요소 선택
const worksLink = document.querySelectorAll('.worksLink')
const pp = document.querySelectorAll('.pp')

// 준비중입니다
worksLink[1].addEventListener('click',()=>{
    alert('준비중입니다😅')
})
pp[1].addEventListener('click',()=>{
    alert('준비중입니다😅')
})


// 마우스 커서 모양 바꾸기
window.addEventListener('mousemove',(e)=>{
    mouse.style.left = `${e.clientX}px`
    mouse.style.top = `${e.clientY}px`
})

document.addEventListener("DOMContentLoaded", function() {

    // 특정 영역에 들어갔을 때 이미지 경로 변경
    introContents.addEventListener("mouseenter", function() {
        image.src = "./images/mouse_white.png";
    });
    
    // 특정 영역에서 나갔을 때 이미지 경로 원래대로 복원
    introContents.addEventListener("mouseleave", function() {
        image.src = "./images/mouse.png";
    });
    // 특정 영역에 들어갔을 때 이미지 경로 변경
    contact.addEventListener("mouseenter", function() {
        image.src = "./images/mouse_white.png";
    });
    
    // 특정 영역에서 나갔을 때 이미지 경로 원래대로 복원
    contact.addEventListener("mouseleave", function() {
        image.src = "./images/mouse.png";
    });
});

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