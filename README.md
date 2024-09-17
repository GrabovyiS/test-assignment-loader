# Test assignment loader for OZON

## How to use:

1. Download using `npm install test-assignment-loader`
2. Import the `testAssignmentLoader` function from `node_modules`
3. Create your loader, passing a container to the function

testAssignmentLoader takes the following arguments:

1. `container` - an HTML element to put the loader into
2. `initialValue` - initial value of the loader
3. A state object. The shape of the object and the default values look like this: `{initialAnimated: false, initialHidden: false}`

testAssignmentLoader returns an object, that allows you to control the loader's state. There are three functions in that object:

1. `setValue(value)` - to set a new value for the loader, tries to convert `value` to a number, setting it to `0` if it can't
2. `setAnimated(animated)` - to set whether or not the loader is spinning. Converts `animated` to a boolean.
3. `setHidden(hidden)` - to set whether or not the loader is visible. Converts `hidden` to a boolean.

### Example

Here's how you could use testAssignmentLoader:

```
const container = document.querySelector('.loader-container');
const loader = testAssignmentLoader(loaderContainer, 50, {
  initialAnimated: true,
});

const valueInput = document.querySelector('#value-input');
valueInput.addEventListener('input', (e) => {
  loader.setValue(e.target.value);
});
```
