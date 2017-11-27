<!-- =============== -->
      <!-- Javascript code -->
      <!-- =============== -->
      
      <script type = "text/javascript">
         

	Person = Backbone.Model.extend({
	    initialize: function() {
		this.bind("change:name", function() {
		    console.log(this.get('name') + " is now the value for name");
		});
		this.bind('invalid', function( model, error ) {
		    console.error(error);
		});
	    },
	    defaults: {
		name: "Bob Hope",
		height: "unknown"
	    },
	    validate: function ( attributes ) {
		if( attributes.name == 'Joe' ) {
		    return "Uh oh, you're name is Joe!";
		}
	    }
	});
	var person = new Person();
	person.set({name: "Joe", height:"6 feet"}, {validate:true});
	console.log(person.toJSON());

	var AppView = Backbone.View.extend ({
            // el - stands for element. Every view has an element associated with HTML content, will be rendered. 
            el: '#container',
            
            // It's the first function called when this view is instantiated.
            initialize: function() {
               this.model = person
	       this.output();
            },
            
            // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content.
            
            //Like the Hello TutorialsPoint in this case.
            output: function() {
               this.$el.html(this.model.get('name'));
            }
         });
         var appView = new AppView();
      </script>
