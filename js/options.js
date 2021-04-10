var Settings = {
    suggestStretch: $('#suggestStretch'),
    enableSounds: $('#sounds'),
    enablePopup: $('#popup'),

    // creates settings if first time
    init: function(){
        localStorage.setItem('suggestStretch', true);
        localStorage.setItem('sounds', true);
        localStorage.setItem('popup', true);
        //localStorage.setItem('name', val);

        this.suggestStretch.val(true)
        this.enableSounds.val(true)
        this.enablePopup.val(true)
    },

    //gets saved settings
    getOptions: function(){
        var allOptions = {
            suggestStretch: localStorage.suggestStretch,
            enableSounds: localStorage.sounds,
            enablePopup: localStorage.popup
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

        update()
    },

};

//pops up a little notification that the options are saved
function update(){
    //idk how to send a noto yet
    print(updated)
}