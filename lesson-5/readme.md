# Collection
- Tổng hợp các dữ liệu được lưu
# Document -> giống với object
+ example
{
    key: value (kiểu dữ liệu của value là bất kỳ)
}
# Schema -> định nghĩa Document sẽ có những dữ liệu gì
{
    todoName: String,
    _id: String,
    createAt: Date,
    isCompleted: Boolean;
    description: Array
}
+ Example:
{
    todoName: 'Hôm nay nấu cơm cúng rằm!',
    _id:12321321,
    createdAt: '12/12/12122',
    isCompleted: true,
    description: [
        'Vo gạo',
        'Đong nước'
    ]
}