// 移动端汉堡菜单
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuBtn.classList.toggle('open');
    menuOpen = !menuOpen;
});

// 锚点平滑滚动，点击自动关闭移动端菜单
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            if (menuOpen) {
                mobileMenu.classList.remove('open');
                menuBtn.classList.remove('open');
                menuOpen = false;
            }
        }
    });
});

// 导航栏滚动样式切换
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-2', 'shadow-md');
        navbar.classList.remove('py-3', 'shadow-sm');
    } else {
        navbar.classList.add('py-3', 'shadow-sm');
        navbar.classList.remove('py-2', 'shadow-md');
    }
});

// 回到顶部按钮
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 查看更多活动按钮，滚动到二维码
const viewMoreBtn = document.getElementById('view-more-activities');
const qrcodeSection = document.getElementById('qrcode-section');
if (viewMoreBtn && qrcodeSection) {
    viewMoreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: qrcodeSection.offsetTop - 20,
            behavior: 'smooth'
        });
        if (menuOpen) {
            mobileMenu.classList.remove('open');
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });
}
