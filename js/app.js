(function ($) {

    var Book = Backbone.Model.extend({
        defaults:{
            coverImage:"./../img/books.jpeg",
            title:"Some title",
            author:"John Doe",
            releaseDate:"2012",
            keywords:"JavaScript Programming"
        }
    });

    var BookView = Backbone.View.extend({
        tagName:"div",
        className:"bookContainer",
        template:$("#bookTemplate").html(),

        render:function () {
            var tmpl = _.template(this.template);

            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    var Library = Backbone.Collection.extend({
     	model:Book
    });

    var LibraryView = Backbone.View.extend({
        el:$("#books"),

        initialize:function(){
            this.collection = new Library(books);
            this.render();
        },

        render: function(){
            //var that = this;
           // _.each(this.collection.models, function(item){
            //    that.renderBook(item);
            //}, this);
	    this.collection.each(this.renderBook, this)
        },

        renderBook:function(item){
            var bookView = new BookView({
                model: item
            });
            this.$el.append(bookView.render().el);
        }
    });

    var books = [{title:"JS the good parts", author:"John Doe", releaseDate:"2012", keywords:"JavaScript Programming"},
        {title:"CS the better parts", author:"John Doe", releaseDate:"2012", keywords:"CoffeeScript Programming"},
        {title:"Scala for the impatient", author:"John Doe", releaseDate:"2012", keywords:"Scala Programming"},
        {title:"American Psyco", author:"Bret Easton Ellis", releaseDate:"2012", keywords:"Novel Splatter"},
        {title:"Eloquent JavaScript", author:"John Doe", releaseDate:"2012", keywords:"JavaScript Programming"}];

    var libraryView = new LibraryView();
})(jQuery);
