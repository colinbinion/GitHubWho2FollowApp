// requesting the "what" and "when" for observable
// the just operator converts an item into an Observable that emits that item
var requestStream = Rx.Observable.just('https://api.github.com/users');

// subscribe makes something happen when the value is emitted
requestStream.subscribe(function(requestUrl) {
  // similar to using a jquery ajax callback to handle the request Rx deals with asynchronous data streams.
  //  Rx.Observable.create() creates a custom stream by explicitly informing "subscriber" about data events (onNext()) or errors (onError()). wrapping the jquery ajax promise makes the promise an observable?
// flatMap "flattens" a metastream, by emitting on the "trunk" stream everything that will be emitted on "branch" streams. the response stream is defined according to request stream. it is a response stream.
var responseStream = requestStream
  .flatMap(function(requestUrl) {
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
  });

  responseStream.subscribe(function(response) {
    // render `response` to the DOM placeholder
  });
