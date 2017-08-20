
matcherController = {

    model: matcherModel,
    view: matcherView,
    selecting: false,

    init: function( size ){
        this.model.init( size );
        this.view.init();
    },

    selectCard: function( cardId ) {
        if( this.selecting ) return;
        this.selecting = true;

        if( this.model.sameCard( cardId )){
            this.selecting = false;
            return;
        }

        this.view.revealCard( cardId );

        if( this.model.selectedCard ){
            var selectedId = this.model.selectedCard.id;
            var correct = this.model.checkGuess(cardId);
            this.view.updateGameView();
            var that = this;
            
            if( correct ) {
                setTimeout( function(){
                    that.view.setCorrect( cardId );
                    that.view.setCorrect( selectedId );
                    that.selecting = false;
                }, 500);
            } else {
                setTimeout( function(){
                    that.view.hideCards(  );
                    that.selecting = false;
                }, 1500);
           }
        } else {
            this.model.setSelectedCard(cardId);
            this.selecting = false;
        }

    },


};