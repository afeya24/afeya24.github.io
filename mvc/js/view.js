define(
    'view',
    ['jquery'],
    
    function () {
        
       function View(model) {

        var self = this;

        function init() {

            var wrapper = tmpl($('#wrapper-template').html());
            $('body').append(wrapper);

            self.elements = {
                input: $('.toDo__item-value'),
                addBtn: $('.toDo__item-add'),
                editItm: $('.toDo__item-edit'),
                listContainer: $('.toDo__item-list'),
                elemIndex: $('.toDo__item-value').attr('data-value')
            };

            self.renderList(model.data);
        }


        self.renderList = function (data) {
            var list = tmpl($('#list-template').html(), {data: data});

            self.elements.listContainer.html(list);
        };


        init();

    }
    
    return View;
        
    }
);


