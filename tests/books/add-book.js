describe( 'Add a Book', function() {
  afterEach( function() {
    server.execute( function() {
      var book = Books.findOne( { title: 'Seeking Wisdom', author: 'Peter Bevelin' } );
      if ( book ) {
        Books.remove( book._id );
      }
    });
  });
});
