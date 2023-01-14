window.addEventListener('load', () => {
    const input = document.getElementById('userInput');
    const addTask = document.querySelector('[add-btn]');

    addTask.addEventListener('click', () => {

        const task = input.value;
        if(task == "") {
            alert('you must type your task.');
            return;
        }
        
        const mainContainer = document.querySelector('.taskList');
        const divTask = document.createElement('div');
        divTask.classList.add('task');
        const input_el = document.createElement('input');
        input_el.value = task;
        input_el.type = 'text';
        input_el.setAttribute('readonly', 'readonly');
        
        //buttons 
        const btn_container = document.createElement('div');
        btn_container.classList.add('content-btn');
        const btn_edit = document.createElement('button')
        btn_edit.classList.add('edit');
        btn_edit.innerHTML = "Edit";
        const btn_delete = document.createElement('button')
        btn_delete.classList.add('delete');
        btn_delete.innerHTML = "Delete";
        const btn_done = document.createElement('button')
        btn_done.classList.add('done');
        btn_done.innerHTML = "Done";
        
        //append the elemenst in a div container
        btn_container.appendChild(btn_edit);
        btn_container.appendChild(btn_delete);
        btn_container.appendChild(btn_done);
        divTask.appendChild(input_el);
        divTask.appendChild(btn_container);
        mainContainer.appendChild(divTask);

        btn_edit.addEventListener('click', () => {
            input_el.removeAttribute('readonly')
            btn_edit.innerHTML = "Save";
            input_el.focus();
            btn_edit.addEventListener('click', () => {
                input_el.setAttribute('readonly', 'readonly')
                btn_edit.innerHTML = "Edit";
                btn_edit.style.color = "gray";
                
            })
        })

        btn_delete.addEventListener('click', () => {
            mainContainer.removeChild(divTask);
        })

        btn_done.addEventListener('click', () => {
            input_el.setAttribute('data-check', 'data-check')
            btn_done.style.color = "#2ed573";
        })

        const btn_remove = document.getElementById('remove');
        btn_remove.addEventListener('click', () => {
            mainContainer.removeChild(divTask);
        })

        input.value = "";
    })
})