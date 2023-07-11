import * as yup from 'yup';
const validateGetTodo = yup.object({
    query: yup.object({
        id: yup.string().required('Bạn cần truyền id qua query!')
    })
});
const validateUpdateTodo = yup.object({
    params: yup.object({
        id: yup.string().required('Bạn cần truyền id qua params!')
    }),
    body: yup.object({
        todoName: yup.string().required('todoName là trường bắt buộc!'),
        date: yup.number().test('len', 'date phải ít nhất 13 số!',
            value => value.toString().length === 13)
            .typeError('date phải là số')
            .required('date là trường bắt buộc!')
    })
})
export {
    validateGetTodo,
    validateUpdateTodo
};