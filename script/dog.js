// 獲取 DOM 元素
const logo = document.getElementById('logo');
const floatingText = document.getElementById('floating-text');
const dogBarkAudio = document.getElementById('dog-bark');

// 啟動 logo 動畫
logo.addEventListener('click', function() {

    // 移除舊動畫，強制重置
    logo.style.animation = 'none';
    void logo.offsetWidth; // 觸發重繪（reflow）

    // 設置新動畫
    logo.style.animation = 'logoBark 1s ease-out';
    setTimeout(function() {
        logo.style.animation = 'bounce 2s infinite';
    }, 800); // 0.8秒後恢復預設動畫

    // 顯示並控制“旺旺”字眼的飄動
    floatingText.style.opacity = 1;

    // 在幾秒後隱藏飄動文字
    setTimeout(function() {
        floatingText.style.opacity = 0;
    }, 5000); // 5秒後隱藏文字

    // 在動畫結束後，重置動畫屬性
    logo.addEventListener('animationend', function() {
        logo.style.animation = 'none';
    }, { once: true });
});