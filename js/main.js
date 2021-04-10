var Settings = {
    suggestStretch: $('#suggestStretch'),
    enableSounds: $('#sounds'),
    enablePopup: $('#popup'),
    countKeyStrokes: $('#canCountKeys'),

    // creates settings if first time
    init: function(){
        localStorage.setItem('suggestStretch', true);
        localStorage.setItem('sounds', true);
        localStorage.setItem('popup', true);
        localStorage.setItem('canCountKeys', true);
        //localStorage.setItem('name', val);

        this.suggestStretch.val(true)
        this.enableSounds.val(true)
        this.enablePopup.val(true)
        this.countKeyStrokes.val(true)
    },

    //gets saved settings
    getOptions: function(){
        var allOptions = {
            suggestStretch: localStorage.suggestStretch,
            enableSounds: localStorage.sounds,
            enablePopup: localStorage.popup,
            countKeyStrokes: localStorage.canCountKeys
        }
        return allOptions
    },

    loadOptions: function(){
        var options = this.getOptions();
        for(const[key, value] of options){
            this[key].val(value);
        }
    },

    //saves current settings
    save: function(){
        localStorage.suggestStretch.val(this.suggestStretch.value)
        localStorage.sounds.val(this.sounds.value)
        localStorage.popup.val(this.popup.value)
        localStorage.canCountKeys.bal(this.countKeyStrokes.value)
        update()
    },

};

//pops up a little notification that the options are saved
function update(){
    //idk how to send a noto yet
}