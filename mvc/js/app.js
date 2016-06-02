requirejs.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-1.12.4.min',
        'template': 'template'
    },
    shim: {
        'jquery': {
            exports:'jQuery'
        },
        'template': {
			exports: 'template'
		}
    }
});


require(
    [
        'model',
        'view',
        'controller',
        'jquery',
        'template'
    ],
    function (model, view, controller, $, template) {
        var firstToDoList = ['Learn JavaScript', 'Write apps', 'Be happy'];
        var newModel = new model(firstToDoList);
        var newView = new view(newModel);
        var newController = new controller(newModel, newView);
    }
);