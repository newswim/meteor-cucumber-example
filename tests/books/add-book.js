// This is an example acceptance test using Mocha & WebDriver

// xolvio:backdoor gives us access to `server.execute`


describe( 'Add a Book', function() {
  it( 'should create a new book @watch', function() {
    browser.url( 'http://localhost:3000' )
           .setValue( '[name="title"]', 'Seeking Wisdom' )
           .setValue( '[name="author"]', 'Peter Bevelin' )
           .submitForm( 'form' );

      var getBook = server.execute( function() {
         return Books.findOne( { title: 'Seeking Wisdom' } );
      });

      expect( getBook.title ).to.equal( 'Seeking Wisdom' );

  });
  // TEARDOWN

  afterEach( function() {
    server.execute( function() {
      var book = Books.findOne( { title: 'Seeking Wisdom', author: 'Peter Bevelin' } );
      if ( book ) {
        Books.remove( book._id );
      }
    });
  });
});
