
var matcherModel  = {

    size: 4,
    cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],
    cards: [],
    totalCards: 0,
    currentId: 1,
    numGuesses: 0,
    gameStateText: "You haven't won yet, keep going.",
    matchedCards: 0,

    init: function( size ) {
        this.size = size || this.size;
        var totalPairs = Math.pow( this.size,  2 ) / 2;
        for (var i = 0; i < totalPairs; i++) {
            this.addPair();
        }
        this.shuffle();
    },

    addPair: function() {
        var value = this.randomValue();
        this.cards.push( new this.Card( this.getId(), value) );
        this.cards.push( new this.Card( this.getId(), value) );
        this.totalCards += 2;
    },

    shuffle: function() {
        var currentIndex = this.cards.length, temp, rand;

        while( currentIndex > 0 ) {
            rand = Math.floor( Math.random() * currentIndex );
            currentIndex--;
            temp = this.cards[currentIndex]
            this.cards[currentIndex] = this.cards[rand];
            this.cards[rand] = temp;
        }
    },
    
    randomValue: function() {
        return this.cardValues[ Math.floor(Math.random()* this.cardValues.length) ];
    },

    getId: function() {
        var id = this.currentId;
        this.currentId++;
        return id;
    },

    Card: function( id, value ){
        this.id = id;
        this.value = value;

        this.matches = function( otherCard ) {
            return this.value === otherCard.value;
        }
    },


};
