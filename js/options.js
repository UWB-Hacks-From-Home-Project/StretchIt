var Settings = {
    suggestStretch: $('#default'),
    enableSounds: $('#sound'),

    init: function(){
        localStorage.setItem('suggestStretch', true);
        localStorage.setItem('Sounds', true);
        //localStorage.setItem('');

        this
    }
};