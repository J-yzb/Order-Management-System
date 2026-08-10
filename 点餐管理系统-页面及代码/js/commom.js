// 1. 轮播图组件
function initCarousel(selector, autoPlay = true, interval = 3000) {
    const carousel = document.querySelector(selector);
    if (!carousel) return;

    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.indicator');

    let index = 0;
    const total = items.length;

    function updateCarousel() {
        inner.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % total;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + total) % total;
        updateCarousel();
    }

    prevBtn?.addEventListener('click', prevSlide);
    nextBtn?.addEventListener('click', nextSlide);

    // 自动播放
    let timer;
    if (autoPlay) {
        timer = setInterval(nextSlide, interval);
        carousel.addEventListener('mouseenter', () => clearInterval(timer));
        carousel.addEventListener('mouseleave', () => timer = setInterval(nextSlide, interval));
    }

    // 初始化
    updateCarousel();
}

// 2. 图片放大交互
function initImgZoom() {
    document.querySelectorAll('.img-hover').forEach(img => {
        img.addEventListener('click', () => {
            alert(`图片放大：${img.src}`);
        });
    });
}

// 3. 页面加载完成初始化
document.addEventListener('DOMContentLoaded', () => {
    initCarousel('.carousel');
    initImgZoom();
});






