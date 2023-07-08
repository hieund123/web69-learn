import express from 'express';
import crypto from 'crypto';

const app = express();
const todoList = [];

// http://localhost:8001

// http://localhost:8001/welcome
// endpoint

// yêu cầu:
/**
 * dùng method get
 * tạo ra 1 biến lưu trữ todoList: const todoList=[]
 * yc1: viết endpoint cho việc trả ra dữ liệu của todoList
 * yc2: viết endpoint cho việc thêm dữ liệu vào mảng todoList (tạo cứng 1 cái data)
 *  mỗi 1 todoList có dạng như sau : {
 * id,
 * todoName,
 * createdAt (thời gian khởi tạo)
 * }
 * trả về cho client dữ liệu của todoList hiện tại
 * 
 * 
 * các giá trị thuộc về tham trị: 
 * string -> nếu xét string về boolean: false khi '', ngược lại là true
 * number -> true khi number = tất cả các số khác 0; false khi number = 0
 * 
 * tham chiếu:
 * tất cả các giá trị tham chiếu khi xét về boolean -> true
 * 
 * undefined -> false
 * null -> false
 * NaN -> false
 * 
 * 
 * BTVN:
 *  YC1: viết api dùng cho việc xoá todo theo id truyền qua query param
 *  YC2: tìm kiếm todoName theo các ký tự được truyền qua query param
 *  YC3: Xoá mảng todoList -> làm rỗng
 *  YC6: thực hiện cập nhật 1 cái todo: id, updateTodoName 
 * 
 *  YC4: xoá những phần tử todo trùng nhau về todoName
 *  YC5: thực hiện phân trang dữ liệu
 *        truyền lên query param: + trang hiện tại dùng là gì?
 *                                + số dữ liệu cần hiển thị trên 1 trang
 *          -> pagination array js
 */
app.get('/todoList/add', (req, res) => {
    const { todoName } = req.query;

    if (!todoName) {
        res.send({
            message: 'Thất bại',
            data: todoList,
            success: false
        })
    } else {
        const newTodo = {
            id: crypto.randomUUID(),
            todoName: todoName,
            createdAt: new Date().getTime()
        }
        todoList.push(newTodo);
        res.send({
            message: 'Thành công',
            data: todoList,
            success: true
        });
    }
});

app.get('/todoList', (req, res) => {
    res.send({
        message: 'Thành công!',
        data: todoList,
        success: true
    });
});

app.get('/welcome', (req, res) => {
    res.send({
        message: 'Xin chào client',
        array: [1, 2, 3, 4, 5]
    });
});
app.listen(8001, () => {
    console.log('Hello');
});