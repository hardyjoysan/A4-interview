# NodeJs Developer - Interview Question & Answers

### Section 1

#### 1. Explain the difference between an abstract class and an interface?

Abstract class is a class that can't be instantiated like other classes but it can be extended to another class. Also, abstract methods and properties declared in the abstract class must be defined in the inherited class. Interface is also can't be instantiated, but it is more like a type implementation for the classes. Abstract class properties and methods require the 'abstract' keyword to make it abstract while inheriting. But in the interface, all the properties and methods have a default abstract behavior and must be defined in the child class.

#### 2. What is the purpose of getters and setters in a class?

Getter is used to access any property of class instance. Setter is used to validate and mutate the getter property. So when while assigning a value to the property we could avoid creating any unexpected errors.