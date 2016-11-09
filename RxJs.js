// requesting the "what" and "when" for observable
// the just operator converts an item into an Observable that emits that item
var requestStream = Rx.Observable.just('https://api.github.com/users');

// subscribe makes something happen when the value is emitted
requestStream.subscribe(function(requestUrl) {
  // similar to using a jquery ajax callback to handle the request Rx deals with asynchronous data streams.
  //  Rx.Observable.create() creates a custom stream by explicitly informing "subscriber" about data events (onNext()) or errors (onError()). wrapping the jquery ajax promise makes the promise an observable?

// request
  var responseStream = Rx.Observable.create(function (observer) {
    jQuery.getJSON(requestUrl)
    .done(function(response) {
      observer.onNext(response);
    })
    .fail(function(jqXHR, status, error) {
      observer.onError(error);
    })
    .always(function() {
      observer.onCompleted();
    });
  });

  responseStream.subscribe(function(response) {
// do something with the response

  });
})
