document.addEventListener("DOMContentLoaded", function() {
    const movingDog = document.getElementById("movingDog");
    const section2 = document.querySelector('.section2');

    // 建立 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                movingDog.classList.add('animate'); // 添加動畫 class
            } else {
                movingDog.classList.remove('animate'); // 滑出 section2 後移除 class
            }
        });
    }, {
        threshold: 0.5 // 當 section2 有一半進入視口時觸發
    });

    // 觀察 section2
    observer.observe(section2);
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        header.style.backgroundColor = 'black';
    }
});
