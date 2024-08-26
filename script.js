document.addEventListener('DOMContentLoaded', function () {
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');
    let dataName = [];
    let numBer = 0;

    function addTodo() {
        const todoText = newTodoInput.value.trim();

        if (todoText === '') {
            alert('กรุณากรอกข้อมูลรายการ');
            return;
        } 

        dataName.push(todoText);

        let spanNumber = numBer++;

        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        textSpan.id = spanNumber;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'ลบ';
        deleteButton.onclick = function () {
            listItem.remove();
        };

        const editButton = document.createElement('button');
        editButton.textContent = 'แก้ไข';
        editButton.onclick = function () {
            let numberId = textSpan.id;

            const listEdit = document.createElement('li');
            listEdit.className = 'todo-item';
            
            const editText = document.createElement('input');
            editText.type = 'text';
            editText.value = (dataName[numberId]);
            
            const newText_btn = document.createElement('button');
            newText_btn.textContent = 'แก้ไข';
            newText_btn.onclick = function () {
                let myIdinput = editText.value;

                if (myIdinput === '') {
                    alert('กรุณากรอกข้อมูลรายการ');
                    return;
                } 

                
                textSpan.textContent = myIdinput;

                listEdit.remove();

            };

            



            listEdit.appendChild(editText);
            listEdit.appendChild(newText_btn);

            todoList.appendChild(listEdit);

            console.log(todoList);
        };

        

        listItem.appendChild(textSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);

        // เคลียร์ input หลังจากเพิ่มรายการ
        newTodoInput.value = '';

        
    }

    // กำหนดฟังก์ชัน addTodo เพื่อให้สามารถเรียกใช้จาก HTML
    window.addTodo = addTodo;
});
