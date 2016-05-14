
    function GoogleCallBack(data) {

        var $body = $('body');
        var $content;

        for(var i = 0; i < data.items.length; i++) {

            $content = $('<div class="mySearchResult"><a href="' + data.items[i].link + '"><h4>' +  data.items[i].htmlTitle + '</h4></a>').append('<h5>' +  data.items[i].link + '</h5>').append('<p>' +  data.items[i].htmlSnippet + '</p>');

            $body.append($content);
        }
    }


    function searchGoogle() {
        $.ajax({
          url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyD8q4bPL9KFIKpRtXmqs00fYeIeRj4pj-E&cx=004458419496982890881:c1mq3s2uhh0&q=' + $('#search').val() + '&callback=GoogleCallBack&context=?',
            data: {
                abc: 123
            },
            method: 'POST',
            dataType: 'jsonp',
            success: function () {

            },
            error: function () {

            }
        });
    }



    $(function () {

        $('#myBtn').click(function (e) {
            e.preventDefault();
            $('#wrapper-search').addClass('wrapperTop');
            $('#logo').addClass('logoTop');
            $('.mySearchResult').remove();
            searchGoogle();
        });


    function Human () {
        this.name = 'Vova',
        this.age = 20,
        this.gender = 'male',
        this.height = 'tall',
        this.weight = 'not heavy'
    };

    function Worker () {
        this.job = 'University',
        this.salary = '5 000$',
        this.act = function () {
            alert('work')
        }
    }

     function Student () {
         this.placeofStudy = 'University',
         this.scholarship = '1 000$',
         this.act = function () {
             alert('see serials')
         }
     }

    Worker.prototype = new Human();

    Student.prototype = new Human();

    var worker1 = new Worker();
    var worker2 = new Worker();

    var student1 = new Student();
    var student2 = new Student();

    console.log(student1.name);
    console.log(worker2.salary);
});












