/*
function callbackFunction(message) {
  console.log("Callback message:", message);
}

function performTask(callback) {
  setTimeout(function() {
      callback("Task completed successfully");
  }, 2000); 
}

performTask(callbackFunction);

function callbackFunction(message) {
  console.log('I\'m lorenzo', message)
};

function performTask(callback) {
  setTimeout(() => {
    callback('i\'m very friendly');
  }, 1000)
};

performTask(callbackFunction);
*/


// Function to test
function myFunction(callback) {
    // Do something
    callback('hello', 'world');
}

// Test case
describe('myFunction', function() {
    it('should call the callback with specific arguments', function() {
        // Create a spy on the callback function
        var callback = jasmine.createSpy('callback');

        console.log(callback);

        // Call the function under test
        myFunction(callback);

        // Expect that the callback has been called with specific arguments
        expect(callback).toHaveBeenCalledWith('hello', 'world');
    });
});

