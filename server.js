const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 配置静态文件服务
app.use(express.static(path.join(__dirname, 'dist')));

// 路由所有请求到 index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});