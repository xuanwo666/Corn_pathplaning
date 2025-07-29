window.onload = function() {
  // 只保留必要的初始化代码，移除获取定位的部分
  if (document.getElementById('addPointBtn')) {
    // 添加点按钮
    document.getElementById('addPointBtn').addEventListener('click', function() {
      const pointList = document.getElementById('pointList');
      const newPoint = document.createElement('div');
      newPoint.className = 'point-item';
      newPoint.innerHTML = `
        <input type="text" placeholder="经度,纬度" class="lat-lng-input">
        <button class="btn del-point">删除</button>
      `;
      pointList.appendChild(newPoint);
    });

    // 删除点按钮
    document.getElementById('pointList').addEventListener('click', function(e) {
      if (e.target.classList.contains('del-point')) {
        const pointItem = e.target.closest('.point-item');
        if (pointItem.parentNode.children.length > 1) {
          pointItem.remove();
        }
      }
    });

    // 移除这部分冲突的代码：
    // const getLocationBtns = document.querySelectorAll('.get-location');
    // getLocationBtns.forEach(btn => {
    //   btn.addEventListener('click', function () {
    //     const input = this.closest('.input-group').querySelector('.lat-lng-input');
    //     input.value = '39.9,116.4';
    //   });
    // });
  }
};