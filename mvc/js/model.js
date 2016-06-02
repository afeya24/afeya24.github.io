define(
    'model',
    [],
    
    function () {
        
        function Model(data) {

        var self = this;

        self.data = data;

        self.addItem = function (item) {

            if (item.length === 0) {
                return;
            }

            self.data.push(item);

            return self.data;
        };

        self.removeItem = function (item) {
    //        var index = self.data.indexOf(item);
            var index = item;

            if (index === -1) {
                return;
            }

            self.data.splice(index, 1);

            return self.data;
        };

        self.editItem = function (item) {

            var index = item;

            if (index === -1) {
                return;
            }

            var result = self.data[index];
    //        console.log(result);        

            return result;
        };


        self.changeItem = function (item, index) {

            if (index === -1) {
                return;
            }

            self.data[index] = item;

            return self.data;
        };


    }
        
    return Model;
        
    }
    
);


