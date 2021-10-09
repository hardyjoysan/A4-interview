# Upwork A4 NodeJs - Questions & Answers

### Section 1

#### 1. Explain the difference between an abstract class and an interface?

Abstract class is a class that can't be instantiated like other classes but it can be extended to another class. Also, abstract methods and properties declared in the abstract class must be defined in the inherited class. Interface is also can't be instantiated, but it is more like a type implementation for the classes. Abstract class properties and methods require the 'abstract' keyword to make it abstract while inheriting. But in the interface, all the properties and methods have a default abstract behavior and must be defined in the child class.

#### 2. What is the purpose of getters and setters in a class?

Getter is used to access any property of class instance. Setter is used to validate and mutate the getter property. So when while assigning a value to the property we could avoid creating any unexpected errors.

### Section 2 - Testing

#### 3. Explain the purpose of black box testing?

I'm not so quite familiar with this concept, I understand it as end-to-end automation used by QA with the help of tools like selenium or Jmeter. It is used to test the functionalities of an application working as expected.

#### 4. In your opinion what are the benefits of test cases?

One of the major benefits I felt is that it doesn't require any manual testing while the development is in progress. Sometimes creating or changing codes can affect something previously developed and most of the time developers missed to check it. That could probably cause an error in the production server. Also working with a team can also rise such situations. In those situations, test cases provide great support to verify that all the developed functionalities working without any issues and can avoid breaking a production build.

### Section 3 - NodeJS specific questions

#### 5. What is an error first callback, and what is the reason for this pattern existing?

It's a pattern in NodeJs wherein a callback function an error object is placed as the first argument and the remaining arguments will be associated data. This means we only need to process the data if there are no errors. There could be multiple data arguments but with this pattern, the developer understands where to look for errors.

#### 6. Explain the difference between fs.readSync and fs.read (File System module in Nodejs)

fs.read() and fs.readSync() are used to read file from fs.open() method. Difference between the two is that read is an asynchronous function that returns bytes and buffer in a callback(or promise) while readSync is synchronous and returns only the number of bytes read from the file descriptor.

#### 7. What tasks do you feel should be done asynchronously?

Any tasks output that doesn't rely on other results can be done asynchronously. For example updating data in the background, fetching data from other sources, writing a file, listening to an event, or emitting buffers, etc. could be done asynchronously.

### Section 4 - NodeJS coding

```bash
$ node load_content.js
```

### Section 5 - NodeJS coding with classes - Fruit Basket