// 主页、登录页暂无复杂逻辑，主要处理路径规划页
window.onload = function () {
  // 路径规划页地图初始化（Leaflet）
  const pathPage = document.querySelector('.path-main');
  if (pathPage) {
    const map = L.map('map').setView([39.9097, 116.3975], 13); // 北京经纬度示例
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 边界点、路径点动态添加删除
    const addRowBtns = document.querySelectorAll('.add-row');
    const delRowBtns = document.querySelectorAll('.del-row');
    addRowBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const parent = this.closest('.input-group');
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.placeholder = '经纬度';
        newInput.classList.add('lat-lng-input');
        parent.insertBefore(newInput, this);
      });
    });
    delRowBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const parent = this.closest('.input-group');
        const inputs = parent.querySelectorAll('.lat-lng-input');
        if (inputs.length > 1) {
          inputs[inputs.length - 1].remove();
        }
      });
    });

    // “获取”按钮模拟（实际需结合定位API，这里简易模拟填固定值）
    const getLocationBtns = document.querySelectorAll('.get-location');
    getLocationBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const input = this.closest('.input-group').querySelector('.lat-lng-input');
        input.value = '39.9,116.4'; // 模拟经纬度，实际需调用 navigator.geolocation
      });
    });
  }
};