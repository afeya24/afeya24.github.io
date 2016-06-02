define(
    'controller',
    ['jquery','model','view'],
    
    function () {
        
        function Controller(model, view) {

        var self = this;

        view.elements.addBtn.on('click', addItem);
        view.elements.listContainer.on('click', '.toDo__item-edit', editItem);
        view.elements.listContainer.on('click', '.toDo__item-delete', removeItem);
            
        function addItem() {
            var newItem = view.elements.input.val();

            model.addItem(newItem);
            view.renderList(model.data);
            view.elements.input.val('');
            view.elements.input.elemIndex = '';
        }

        function removeItem() {
            var item = $(this).attr('data-value');

            model.removeItem(item);
            view.renderList(model.data);
        }

        function editItem() {
            var item = $(this).attr('data-value');

            model.editItem(item);
            view.renderList(model.data);
            view.elements.input.val(model.editItem(item));   
            view.elements.input.elemIndex = item;
    //        console.log(view.elements.input.elemIndex);
        }

        function changeItem() {
            var editItem = view.elements.input.val();
            var index = view.elements.input.elemIndex;

            model.changeItem(editItem, index);
            view.renderList(model.data);
            view.elements.input.val('');
            view.elements.input.elemIndex = '';
        }

    }
    
    return Controller;
        
    }
);

