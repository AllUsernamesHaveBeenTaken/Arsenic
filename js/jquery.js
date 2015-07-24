$('a[href=#members]').
    click(function(){
        var target = $('a[name=members]');
        if (target.length)
        {
            var top = target.offset().top;
            $('html,body').animate({scrollTop: top}, 1000);
            return false;
        }
    });