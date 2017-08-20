
matcherController = {

    model: matcherModel,
    view: matcherView,
    selecting: false,

    init: function( size ){
        this.model.init( size );
        this.view.init();
    },

};