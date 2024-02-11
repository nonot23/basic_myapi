const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const products = [];

app.use(bodyParser.json()); // ใช้อ่าน json
//Post เพิ่มข้อมูลเข้าไปใน students
app.post('/products:', (req,res) => {
    products.push(req.body);
    res.json(products);
})
// ใช้ Get ดึงข้อมูล  Post มาแสดง
app.get('/products:', (req,res) => {
    res.json(products);
})

// get ข้อมูล id students.find หาข้อมูล id
app.get('/products/:id', (req,res) => {
    const id = Number(req.params.id); // ดึงค่าตัวเลขใช้ Number
    const product = products.find(p => p.id === id);
    res.json(product); //ให้มัน return ข้อมูลในรูปแบบ json
});

//ใช้ put แก้ไขข้อมูลของ students
app.put('/products/:id', (req,res) => {
    const id = Number(req.params.id);
    const product = req.body; // เอาตัวทั้งหมดจาก req เรา
    const index = products.findIndex(p => p.id === id); //find หา
    products[index] = product; //เช็คดูว่า students ใช้กับ index
    res.json(product); // return
})

app.delete('/products/:id', (req,res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1); // splice คือ เอาออก
    res.json(products);
})
//ให้ server มัน run ขึ้นมาได้
app.listen(port, () => {
    console.log(`server online on port ${port}`)
});