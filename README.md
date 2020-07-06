# Typescript Tutorial

This readme file acts as a tutorial on typescript, with the files in this repository being supporting typescript (and one javascript) file. Note that this repository contains typescript errors that will prevent the project from compiling - this is intentional in order to demonstrate how typescript flags errors and can throw errors at compile time.

Read on for the tutorial. If you already have Node.js and a typescript-compatible IDE installed, skip to the Typescript section. Otherwise, read on.

## Getting Started

##### Node.js
First things first, if you don't have Node.js and NPM already installed, you'll need to start by doing that by going [here](https://nodejs.org/en/download/) and choosing the relevant installer under the LTS category. Once you've done that, open up a terminal and run ```node -v``` to check that node has installed properly.

##### npm
Once you've confirmed that Node is installed and working, you can also run ```npm -v``` to check that npm is also installed (it should be, since it's bundled with the Node installer).

npm stands for Node Package Manager, and is a tool that allows you to quickly and easily download javascript packages for use in your applications. The usage of npm is outside of the scope of this tutorial, so for now just simply run ```npm install``` to install the packages used by this project.

##### IDEs
You'll probably want to make sure you're working with an IDE that can leverage typescript at design time to flag errors while you're writing code and offer potential fixes and helpful error messages as you go. I personally use and would recommend Visual Studio Code, since both the IDE and typescript itself are created and maintained by Microsoft and so they seem to work nicely together. Visual Studio Code is also shipped with a version of typescript built into it for analysing typescript and javascript files, even if you haven't installed typescript elsewhere, which is a feature I personally find handy. However, any other IDE that can work with typescript will likely serve you just as well.

## Typescript
Typescript is a strongly-typed superset of javascript, that is compiled down to regular javascript by the typescript compiler. What this means is that any typescript code that you write is compiled into standard .js files, and runs as javascript. It also means that regular javascript code can be written and compiled using typescript just fine, and everything that typescript adds is technically optional (just strongly recommended).

Typescript makes use of a file in the root directory of your project named `tsconfig.json`. This file tells the typescript compiler what to do when compiling, and can control what is and isn't considered valid code by the compiler. I won't go into much detail on this file here, but you can see the [typescript site](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more information. As a side note, a lot of the documentation on the typescript site is fantastic (especially the Handbook section), and I highly recommend reading more from there either as you go or once you've completed this tutorial.

If you aren't familiar with what a strongly-typed language is, then read on, otherwise you can skip to the introduction section of this tutorial.

##### Strongly-typed languages
A strongly-typed programming language assigns a type to each variable and function that exists. Typescript uses the same 6 primitive types that javascript uses: **string, number, boolean, null, undefined and symbol**. In addition to this, it also uses **arrays and objects** just like javascript does as well. Once a variable is initialised with a type, it can't be changed (at least not in typescript, anyway). This means that the type of all variables and objects is known at compile time and can prevent you from writing code which won't run as intended (for example, attempting to add an element to what you thought was an array, but was actually a boolean).

For example, in javascript, you could do the following:
```
let array = [1, 2, 3];
array = true;
...
array.push(4);
```
Technically, this is correct javascript code, in the sense that there aren't any syntax errors and the code itself is valid javascript code. However, running this code will result in an error because the method `push` doesn't exist on an object of type `boolean`.

In typescript, the `array` variable is assigned the type `number[]` (an array of numbers) when it's created. This means that the assignment `array = true` results in an error whenever you try to compile the typescript code (and will be flagged while writing the code before compilation by most IDEs), because `true` is a boolean value, and a boolean value is not the same as a value that is an array of numbers.

As you go through the tutorial, you'll see more on this. However, if you're struggling with wrapping your head around the concept, I'd suggest finding a more in-dept guide on strongly-typed languages and the concepts that are involved.

## Part 1 - Introduction
This part of the tutorial will serve as an introduction to typescript, and make use of the files within the folder named `1 - intro`.

##### javascript.js
Here we have a simple javascript file that shows some of the potential pitfalls of javascript that can be remedied by typescript.

We start by defining the `value` variable, and assigning it the number 1. We then assign it the string value `"string"`, but continue to treat it on the next line by calling `value.toFixed(2)`. This will result in an error at runtime, since `toFixed` is not a method on the string type. As seen in the example above, the code itself is valid, even though it results in an error when run.

We then move on to define an object with some values, and define a function that does some things with an object given by the `param` argument. We call this method using the `obj` property, which has the properties `property` and `otherProperty`. This function accesses the `property` property as intended, but then assigns a boolean value to what was previously a number value on the `otherProperty` property, and tries to access a property named `third` which in this case doesn't exist. Note that this won't result in any errors, but accessing the `third` property on the supplied object will simply return undefined (which is likely not expected behaviour).

After that, we define a totally different object and see that we can pass it through to the function without issue. Once again, though we get no errors, we'll likely see unintended behaviour by doing such a thing, but we're not explicitly prevented from doing this.

A quick note on the line `export {};`: You'll see this across all the files in this tutorial, and can largely be ignored. When compiling files, the typescript compiler determines files to be either a script running under the global scope, or a module. If the compiler assumes the file is a script, any variables declared in that file are made available to other files, which isn't behaviour that we want here. Instead, we export an empty object so that the compiler instead sees the file as a module, allowing us to keep all our variables and everything else contained within individual files.

##### Typescript type syntax
Before we move on to our next file, we should take a look at the syntax of typescript types. To define the type of a variable, we first define the variable name, and then the type, like so:
```
let value: number;
```
This creates an unassigned variable named `value` of the type `number`, meaning that we can now only assign number values to this variable. We can combine value and assignment in the same line, like so:
```
let value: number = 1;
```
Defining types on every single variable is a little cumbersome though, so typescript helps out with something called type inference. What this means is that the typescript compiler is able to determine the type of a variable by looking at what is assigned to it when it's first defined, and assigning the type of that value to that variable. For example:
```
let value = 1;
```
This creates a variable named `value`, and assigns it the number 1. Typescript uses this assignment to determine that the variable is a number, and so this example is functionally identical to the previous one. Even though we never explicitly defined the type of the variable, we're now unable to assign it a value of any other type (eg. string, boolean, etc.). There are ways around this if necessary, which we'll cover later on with more advanced typings.

Typescript can use type inference on pretty much every assignment, no matter how complex. For example:
```
let value = { property: 1, otherProperty: "string", thirdProperty: true };
```
Typescript determines the value variable to be an object with a property named `property` that is of type `number`, a property named `otherProperty` that is of type `string`, and a property named `thirdProperty` that is of type `boolean`. This means that we can now only assign it values matching this type, like so:
```
value = { property: 2, otherProperty: "still a string", thirdProperty: false };
```
But we can't assign it an object that doesn't match the inferred type:
```
value = { different: 1, object: "string", properties: true };
```
Even though we have three properties with the same types and even the exact same values, because the property names are different, the inferred types of the two objects don't match and we therefore can't assign this object to the `value` variable.

##### js-in-typescript.ts
Looking at the next file, we see the same code as the previous example. However, you'll notice immediately that we have an error on the second line (`value = "string"`). This is because we're now using typescript, and typescript has used type inference (as explained above) to determine the type of the variable `value`. This is what's causing the error on the second line - `"string"` is not a number value, resulting in an error. You'll note that the third line isn't flagged as an error, because `value` being a number means that the third line that treats it as such will run without issue, since the compiler won't even let us compile in the first place without fixing the error on the second line first.

Moving on, hover over the `obj` variable with your mouse, and you should see the following (or at least I do, in Visual Studio Code):
```
let obj: {
    property: string;
    otherProperty: number;
}
```
This is a typescript type declaration, and shows you what the type of `obj` is. In this case, typescript has used type inference when we define and assign the variable, and has define the variable type as an object with a property named `property` of type string, and a property named `otherProperty` of type number. We define the same function as we had previously, and pass it the object as before. Why doesn't the method flag any errors though? It flagged the previous line as an error when we try to assign a string to a number, so why isn't it doing it inside the method? This is because the method itself defines the `param` argument, but note that the argument type isn't specified. What this means is that typescript doesn't know anything about the objects being passed to this method, so it can't tell you that (in this case, anyway) the `otherProperty` property is a number, not a boolean, and that the `third` property doesn't exist.

As in the previous file, we declare the same object that differs from what the function expects, but we're still able to pass it through without issue. Once again, this is because typescript doesn't know what type of object to expect on the `param` argument, and allows us to pass in whatever we want without complaining.

##### typescript.ts
Here we see the same code yet again, but this time we've defined the types explicitly on every variable and function. We have the same error as before on the second line, but we're now picking up some errors in the function that we didn't see before. You'll notice that we've explicitly defined the type of the `param` argument in the function, so now typescript knows exactly what to expect from the objects that we pass in to the method. This means that the compiler can now know that the property `otherProperty` is a number and not a boolean, and that there is no `third` property on the object, and correctly flags both lines as errors.

We now also see that we have an error when trying to pass through the different object to the function. Since typescript has now been told what type of object to expect in the function, it's able to reject our attempt at passing through an object that doesn't match the explicit definition, and throws an error when we try to do so.

##### Type declarations
So far, we've seen how types can help us make sure we write code that runs as expected by being able to force us to use certain well-defined types on all our values, but doing so makes the code seem a little cluttered and verbose at times. Type inference helps with this somewhat by allowing us to forego explicit type definitions on variables sometimes, but having to write out complex object type definitions all the time is going to get messy and make the code harder to read.

This is where the concept of interfaces comes in. An interface can be thought of as a contract of sorts, that describes the shape of an object. Any object that implements this interface must adhere to the contract, and therefore match the shape that the interface defines. Interfaces are essentially a way of defining a type that can be reused without having to write out the whole type every time.
```
interface CustomType {
    property: string;
    otherProperty: number;
}
```
You'll notice that this interface declaration looks an awful lot like the inferred type of the `obj` variable that we saw earlier, and defines an object type that's exactly the same.

There's a lot more you can do with this, but this is all we need for now and we'll take a look at what else you can do later.

##### types.ts
You'll immediately notice that on our first line we're importing a module. This is written the exact same way as you would with javascript.

Here, we declare some variables using explicit types, which is nothing new. However, we also have our first array declaration - note that array types are written as `<type>[]`.

Underneath this, we see our first interface definition, defining several properties and their types - note the definition of the `mom` property as `moment.Moment` - this is a type exported by the moment module that defines the type of the moment object. This means that we now know exactly what we can and can't call on these moment objects, along with having intellisense to help us out while we code (which is certainly a hell of a lot nicer than constantly having to look up the docs online).

Also note the definition of the `method` property - this type definition looks a little odd. What we have here is a function type definition. Function type definitions are defined using the lamdba format, listing the arguments and their types first, followed by the return type of the function. In this case, we've defined the `method` property to be a function that accepts one argument of type `string`, and that returns a value of type `number`.

Moving on, we then define a variable of the interface type that we just defined - this means that we must have all the properties of this interface present and defined in the object, with each property having the correct type. `num` and `str` are fairly self explanatory, but do note that our `boolean[]` also contains the values `null` and `undefined`. In typescript, you can configure the compiler to consider all types as being "nullable" or not. What this means is that even though `null` and `undefined` aren't technically boolean values, variables that are of the `boolean` type will accept them anyway. I personally find this useful, since the alternative is to define every type that can be null as nullable (which is something we'll cover off on later). For now, just know that we've set typescript up so that any type accepts the `null` and `undefined` values as well.

We define the `mom` property to be a new moment object, and then we define the `method` property to be a new function that parses the input string as an integer. We also show that you can define a function separately from the object, and then assign the function reference to the property directly, rather than having to define the function inline.

##### The 'any' and 'unknown' types
We saw earlier that we could write plain javascript in typescript. Specifically we saw that we could define a function with an untyped parameter, that we could then do whatever we wanted with. Typescript still assigns this parameter a type, but the type it assigns it is the `any` type.

`any` is evil and should be avoided at all costs.

Don't do it.

Seriously.

Just don't.

You've been warned.

The `any` type is exactly what it says - it's anything. An variable of the type `any` will allow you to treat it as whatever the hell you want, without any sort of compiler checking. This means that you could define a variable of type any, assign it a number, but then treat it as a string. You could access properties that don't exist on the variable's value, or call methods that don't exist on it. In short, `any` essentially throws you back to regular javascript and removes all the goodness that typescript offers us. It allows you to temporarily break the typing system and do whatever you want. It's incredibly rare that you should need to do this, and I exaggerate about how bad `any` is because I'm honestly not sure I've seen a good reason to use it yet. If you get to the point where you think you need to use `any`, reconsider what you're doing and see if there's a better way. If not, then proceed with caution and make sure you're absolutely certain of what you're doing.

The `unknown` type is somewhat like `any`, in that it defines a type that is unknown. Where the two differ is that `unknown` won't allow you to perform any operations with it without first casting it to something else, so it's inherently safer. I've never used it personally, but I'm sure it has its niche uses.

##### evil.ts
Here, I demonstrate the evils of the `any` type. We define a variable of type `any`, and assign it a number. We then assign it a string. The next line involves what's known as casting. Casting allows you to treat one type as another, provided the two are compatible (more on this later). Since we're casting from the `any` type, which is inherently compatible with any other type, the compiler sees no issue with it and allows us to create the `num` variable of type `number`, and assign it the value of the `val` variable. What this means is that at runtime, val will also be a string, and calling `val.toFixed(2)` will produce an error. Since we used the `any` type here, typescript assumes we know what we're doing and lets us get away with casting it as a number since it doesn't track the actual value of it.

This reveals one of typescript's flaws, in that it's a strongly-typed language that doesn't use types at runtime. In other strongly-typed languages (see C#, Java, etc.), types are also known (and can even be inspected by what's known as reflection) at runtime. This means that trying to treat one object type as another like we did in this example will actually throw an error when trying to cast the value if the types aren't compatible. These languages are therefore a little more strict about what you can and can't do with them, which can sometimes be a bad thing (such as in this case) but can also be a strength, since typescript can play a little looser with types as we'll see later on when we get to more advanced types.

That's all for part 1 - hopefully this hasn't been terribly overwhelming so far, but please feel free to ask me any questions or give me any feedback!

## Part 2 - Inheritance, Classes and Advanced Types

##### For those familiar with other object-oriented languages
If you've worked with other object-oriented languages before, feel free to skim through the first three sections here - Inheritance, Classes and Generics. TypeScript doesn't really deviate from how other languages treat these concepts, and I go into detail on how these work so there may not be as much value for you here compared to someone newer to these concepts.

##### Inheritance
In TypeScript, an interface can inherit others and extend them. Given two interfaces `A` and `B`, where `B` extends `A`, interface `B` has all the defined properties and methods of `A`, plus any additional properties or methods that it defines itself. We can therefore consider any object that conforms to the shape of interface `B` to also conform to the shape of interface `A`. Importantly though, the inverse is not true; while objects that conform to the shape of interface `A` may also have extra properties and methods that conform to the shape of interface `B`, this isn't a guarantee. If all of that sounds confusing (and I wouldn't blame you if it did), then continue on to see some examples that demonstrate these things.

##### inheritance.ts
In this file, we define a simple interface `TwoDimensionalPoint` with to properties: `x` and `y`. We then define another interface `ThreeDimensionalPoint` that defines an additional property `z`. However, we also use the `extends` keyword to make our `ThreeDimensionalPoint` extend the `TwoDimensionalPoint` interface, meaning that it inherits the `x` and `y` properties defined in it. This means that `ThreeDimensionalPoint` becomes an interface that defines three properties: `x`, `y` and `z`. We can see this in practice when we create the object `obj` with the `x`, `y` and `z` properties.

Next, we show that it's possible to cast between different types in the chain of inheritance by casting `obj` as a `TwoDimensionalPoint`, and then casting that value back to a `ThreeDimensionalPoint`. Note that we have an error when trying to access the `z` property on the `TwoDimensionalPoint` variable `twoD` - even though we know that `twoD` is the same as `obj` and is therefore a `ThreeDimensionalPoint`, we've told the compiler to treat it as a `TwoDimensionalPoint` and so the compiler correctly flags this as an error, saying that `z` doesn't exist on the interface `TwoDimensionalPoint`. It's important to note that, were it not for the compiler, this wouldn't be an issue at runtime and would work just fine. Casting an object back and forth between different types doesn't change what the object is or what properties it has, it simply tells the compiler how to treat it. This means that when we cast `twoD` back to a `ThreeDimensionalPoint`, the compiler lets us access the `z` property again and we can continue using it as if it never left.

We then demonstrate some of what I was talking about before we looked at this file, by implicitly casting obj as a `TwoDimensionalPoint`. We define the `implicit` variable as a `TwoDimensionalPoint`, but we never explicitly cast `obj` using the `as` keyword. This is allowed by the compiler, since `ThreeDimensionalPoint` extends `TwoDimensionalPoint`, and thus IS a `TwoDimensionalPoint`. We can see this in the fact that `ThreeDimensionalPoint` has `x`, `y` and `z`,  and `TwoDimensionalPoint` also has `x` and `y`. Just like before, `implicit` now holds the value of an object that matches the `ThreeDimensionalPoint` interface and has a `z` property, so if we were to cast `implicit` back to a `ThreeDimensionalPoint` we'd be able to use the value of the `z` property as expected.

Note that when we then try to do the opposite, by implicitly casting `twoD` to a `ThreeDimensionalPoint` by trying `threeD = twoD`, we get a compiler error. While a `ThreeDimensionalPoint` can be considered to be a `TwoDimensionalPoint`, we can see that a `TwoDimensionalPoint` can't be a `ThreeDimensionalPoint` since it's missing the `z` property. With that said, we can perform an explicit cast since the compiler knows that it's possible for a `TwoDimensionalPoint` to be a `ThreeDimensionalPoint`, which we demonstrate by `threeD = twoD as ThreeDimensionalPoint`. Now, obviously we can see here that `twoD` isn't a `ThreeDimensionalPoint`, but the compiler allows it since we've explicitly told it to. This is something to consider - you should only really be explicitly casting things if you're reasonably (if not definitely) confident that the cast is accurate, since it's possible to fall into traps like these if you're not.

We then go on to show that, while the compiler might let us cast a `TwoDimensionalPoint` to a `ThreeDimensionalPoint` even though it isn't one, it doesn't just let us cast anything as anything else. `threeD as number` fails, since there's no situation in which a value that is a `ThreeDimensionalPoint` could ever be a `number` (though of course you can abuse unknown/any as a sort of "transition" type to cast to a `number` if you really, really wanted to).

##### Classes
A class is simliar to a regular object, but is usually used in cases where state is important. In a class, it's much easier to refer to the class object itself (using the `this` keyword) when compared to a regular object. Classes also have the ability to specify access modifiers, which are keywords that define whether properties/functions of the class can be accessed/called outside of the class.

Classes have a couple of key features to consider:
1. Constructors
    Constructors are how you create class objects. Given a class named `MyClass`, you'd create a new instance of the `MyClass` object using the code `new MyClass()`. A constructor is a method defined in the class that is run whenever that class is instantiated.
2. Inheritance
    Classes, much like interfaces, can inherit from other classes using the `extends` keyword. When doing so, they inherit all the logic, properties and functions defined within the class that they extend.
3. Access modifiers
    An access modifier (as mentioned earlier) is a keyword used to specify how a property or function of a class can be accessed. TypeScript has 3 possible access modifiers: `public`, `private` and `protected`. If no access modifier is specified, then `public` is used by default.
    - `public` means that the property/function can be accessed from outside the class.
    - `private` means that the property/function can only be accessed from within the class.
    - `protected` means that the property/function can be accessed from within the class, or any classes that are derived from the class in which the property/function is defined.
4. Property getters and setters
    If you've worked with a language like C# or Java before, this may already be a familiar concept. Getters and setters are essentially methods that masquerade as properties, and can be used to give your classes more control over how their properties are accessed.

##### classes.ts
We start by defining the class `Base`. Note that we immediately start defining properties on the class, using the `readonly` keyword. `readonly` works in much the same way that `const` does, in that `readonly` properties can only be set in two ways: defining a default value (which we do here), or setting their values in a constructor defined in the same class definition (which we also do here). We have to properties: `value` and `valueToOverride` - ignore `valueToOverride` for now as we'll come back to that later.
We then define a constructor for the class, using the `constructor` keyword. A constructor is simply a method, and as such its definition follows all the usual rules for a method definition. Be aware that a constructor runs when a class object is first created, so any variables not given default values won't have any values at the time the constructor is run. Here, we demonstrate being able to set the readonly property `value` inside the constructor.
We go on to define three properties, `publicValue`, `privateValue` and `protectedValue`, each with the `public`, `private` and `protected` keywords respectively. Keep these in mind, since we'll come back to them later. Next, we take a look at how getters and setters are defined, with the `_property` property and the `property` getter and setters. Note that the getter is defined using the keyword `get`, and the setter is defined using the keyword `set`. A getter takes the form of a non-void method with no arguments, and a setter takes the form of a void method that takes a single argument. Note that the getter and setter are also given the same name, in this case `property`. What this means is that the class, from the outside, appears to have a single property (named `property`) that can be accessed and set like any other, but what actually happens is that the getter and setter methods are called instead. This means that you can do additional logic (like triggering on-change logic that runs whenever a property is set, or running other specific logic when a property is accessed). Normal convention is that there is a private (or protected) "backing" property that is named the same as the getter and setters, but starting with an underscore - in this case `_property`. The getter and setter are then usually public, and have the same name as the backing property, minus the underscore - in this case `property`. We'll see how this is used later.
We also define another backing property `_publicGetOnly`, but this time we only define a getter method for the property without a setter method. This then appears as a readonly property from outside the class, since there's no way to set the value of the property from outside the class.
We continue show how to define functions as well, using standard function definition syntax. A key difference here is that the `function` keyword is not used in classes when defining functions. Our first function, `func`, begins by showing that the backing property `_property` is a normal property like any other when used from within the class. Note that when working within the class itself, we can refer to the class object using the `this` keyword - if you've worked with other languages before this may have been optional within classes, but it's a requirement here in JavaScript and TypeScript since JavaScript works a bit differently in terms of scope and can have scope variables. We also show that an error occurs when trying to set the value of the readonly property `value`, since we're not inside the constructor here. We also define the `overridable` method, which we'll get to in a bit.

Next, we define another class `Extended`, which `extends` the `Base` class. We define a property `valueToOverride` - notice here that this has the same name as the property we defined in the base class. What we've done here is override the property, meaning that we've essentially redefined it in our new class. Overriding allows us to have the base class make references to properties and methods, but define the logic controlling them in our derived classes. If you've used other languages with this feature, you may have been required to use certain keywords when overriding properties/methods of a class, but that's not the case in TypeScript.
Note that our `Base` class constructor requires a single `number` argument, but our `Extended` class does not. Derived classes don't need to share the same constructor signature, but it's important to note that a derived class's constructor must call the super class's constructor using the `super` keyword.
In our constructor, we also show that `readonly` properties can only be set from the constructors of the classes they're defined in, which does not include derived classes. However, since we overrode the `readonly` property `valueToOverride` in our `Extended` class, we're able to give it a value in our new constructor since we've changed which class defined the property.

The `method` function is a simple demonstration of property accessors - we can see that we're able to access the values of `publicValue` and `protectedValue` from within the `Extended` class, but not the `privateValue` property. Next up is the `overridable` method, which is another example of overriding a base class member. What we've done here is change the logic of this method so that when the method is called on any instance of the `Extended` class, it runs the overridden logic rather than the base logic. You might also notice the `super` keyword here - this gives us a reference back to the base type that we're extending, so we can do things like call the original functionality and extend on it, rather than replace the whole thing. In this case, we're using the same value from the original logic, and simply adding 1. Also note that the access modifier on this method is `protected`, meaning that it can't be accessed outside of the class. We've defined another function here, called `getOverriddenValue`, and used the `public` keyword. This method simply returns the value of the `overridable` method, essentially "exposing" it outside of the class. In this way, we've taken a previously `protected` function, extended it and then exposed the new value outside of the class to any other code to consume.

Now, we see how to instantiate an instance of our `Base` class - `new Base(2);`. We also demonstrate being able to set the public property `publicValue`, but not the private property `privateValue`. We also show that we can access the getter for `property` as if it was an actual property and not a function, but not the `_property` backing field, along with showing how we can access the `publicGetOnly` property but can't set it. Calls to `base.func()` and `base.overridable()` also demonstrate the `public` and `protected` modifiers. Next up, we instantiate an instance of the `Extended` class and show how we can use the now exposed value of the `overridable` method by calling `extended.getOverriddenValue()`. Of note is the line `base = extended;` - this works in much the same way that we saw in the previous section on interfaces. Since the `Extended` class extends the `Base` class, we know an instance of the `Extended` class must have all the same members that the `Base` class does, and so we can treat it as such and assign it to a variable of type `Base`. Note however, that this doesn't change any of the logic - if we could call `base.overridable()` here (which we can't since it's protected), we'd still expect to get the number 3 back since `base` is actually an instance of the `Extended` class, not `Base`.

Worth noting also is that classes don't specifically need constructors - it's perfectly fine to define a class without one. Any class that omits a constructor, such as the defined `NoConstructor` class, can simply be instantiated like any other class without arguments which we show with `let noConstructor = new NoConstructor();`.

##### Generics
A generic type (or class) allows us to define a set of functionality that can be applied across multiple different types. The simplest way to conceptualise this is to think of arrays of single types. An array of numbers exposes the exact same functions and properties as an array of strings, but any function that expects a number input would instead expect a string input. For example, in an array of numbers, you'd expect the `Array.push` function to accept numbers, but the same function for an array of strings would instead accept strings. The underlying logic of how the function works remains the same, it's just that the type of the expected arguments changes. In fact, that's exactly what TypeScript does - it exposes the `Array<T>` type (which can also be written as `T[]`), where `T` is any type you want. We'll see how this works in our next file.

##### generics.ts
We start off by defining a simple generic interface: `Generic<T>`. This `<T>` syntax is what makes the interface generic, and `T` here represents whatever type we pass to the interface. There's a single property: `prop: T`. So, when we use `Generic<string>`, `prop` is a `string`, and when we use `Generic<boolean>`, `prop` is a `boolean`, which we show on the next couple lines. And it doesn't just have to be simple types either, we can use any types we want, such as the more complex type `Generic<{ val: number[] }>`. You can even use function types if you want, such as `Generic<() => number>`!

It's not only interfaces that can be generic, either. Classes can also be generic, as can functions. We can see this with the `makeArray<T>` function, which takes in an object of type `T`, and returns it in an array of type `T[]`. It's a simple function, but it shows the power of generics and what you can do with them. Promises in TypeScript are also generic, but otherwise work exactly the same. The upside of this is that the resolve method can now only accept arguments of the type specified in the Promise type declaration, and awaiting a promise will result in a value that's the same type as the generic type argument. We can see this where we define the `promise` variable, and you can see the result of the `await` by inspecting the type of the `val` variable inside the `awaiter` function in your IDE. It's important to note here that when working with async functions in TypeScript, the declared return type of a function must always be a promise. If you return a number from within the function, then the declared return type of the function must be `Promise<number>`, since that's what the actual return type of the method will be when called. This works exactly as you'd expect when working with generics, too. The `awaiter` function awaits the passed in promise and stores it in the variable `val`, which is given the type `T`. Returning a value of type `T` means that the async function must return declare the return type as `Promise<T>`.

Generic type arguments can also have restrictions placed upon them, which is useful for when you want to define logic that can operate on similar types that have certain common denominators. We do this using the `extends` keyword, since we're effectively saying that any given type must extend some base type. For example, the `Restricted<T extends { val: number[] }>` interface requires that any type can be specified for `T`, providing it has a property `val` of type `number[]`. The `basicRestricted` variable is defined to be exactly `Restricted<{ val: number[] }>`, meaning the supplied type has all the required properties and nothing else. The `advancedRestricted` variable, however, is defined using a type that is a little more complex and has an extra property. Since it still has the required `val: number[]` property though, it's still allowable and works just fine. `Restricted<string>`, on the other hand, is not allowed since the type `string` does not have the `val` property.

Anything that uses a generic type with any form of type restriction must always supply a type that is copmatible with the requirements. For example, our `doTheWrongThing<T>` function results in a compiler error. This is because the type `T` here is defined by the function, and doesn't have any restrictions. This means that we could potentially pass any type through, which of course isn't compatible with the restrictions on the `Restricted<T>` interface. As such, the function also needs to have a similar set of restrictions placed upon it in order for the type to then be compatible with the `Restricted<T>` interface, as seen in the `doTheRightThing<T>` function. Since `T` must be a type with a property `val` of type `number`, we can write the line `res.prop.val.push(1);`. Even though we have no idea what the exact type of `T` will be when this method is called elsewhere, we know that at the very least `res` will have a property `prop`, and that property will have a property `val` which is of type `number`.

##### Advanced Types
Where TypeScript really gets powerful is being able to take advantage of the underlying language being weakly-typed. What this means is that you construct all sorts of types that wouldn't be possible in a traditional strongly-typed language, while still maintaining a degree of type-safety. For example, since JavaScript doesn't enforce the types that a function can return, it's entirely possible to write a function with conditional branches that return either a string or a number depending on inputs. As such, TypeScript is able to do things like define types that are a combination of multiple types so that it can handle cases like these without having to give up and resort to the wicked ways of `any`. This is just the tip of the iceberg though, as we're about to see.

##### advanced-types.ts
We start by defining the `Advanced` interface, which introduces several new concepts and some new syntax. The first is the `optional?: number` declaration - the `?` here marks the `optional` property as being optional. This means that an object of the type `Advanced` can be created, but doesn't need to specify the `optional` property. You can still access the property as normal, but care will need to be taken since it will have the value of `undefined` if it isn't specified. This falls in line with how accessing undefined properties on objects works in JavaScript, so it shouldn't be terribly difficult to keep in mind. Next up, we have `oneValue: "one";`. This wouldn't look out of place in actual code, but it's a little strange in a type declaration. What we have here is a literal type, which is a type that has an expected value. In this case, the `oneValue` property must be a string, and that string must be equal to "one". On its own, this isn't a terribly useful feature, but can have some interesting uses when used in conjunction with the next feature: union types.

A union type is a type that is constructed from multiple types, and represents a type that is any one of its constituent types. For example, a union of `string` and `number` represents a type that is either a `string` or a `number`. Union types are declared using the pipe `|` character, so the aforementioned union type would be declared as `string | number`. Union types allow you to perform operations upon them if that operation is valid for all of the individual types that make up the union.
This is where the literal type we saw earlier comes into play. We can define a property that is a union of as many literal types as we want, to come up with a sort of enum-esque property. For example, `twoValues: "one" | "two"` defines a property that is a string that must always have the value "one" or "two".

We construct the object `adv` using our `Advanced` type, and note that we've omitted the `optional` property since it was optional. We see that the rest of the properties are given values in the same way they would be in any ordinary object. However, we can see that the line `adv.twoValues = "three"` fails, since "three" isn't part of the `"one" | "two"` union type. On the other hand, `adv.union = adv.union + "5"` works just fine, since both adding a string to a string and adding a string to a number are perfectly valid expressions in JavaScript, so it doesn't matter what the type is at runtime - the compiler knows this code will succeed. Next up is a quick demonstration of an interface that extends multiple others - we have the `First` and `Second` interfaces, each defining a single property, and a `Third` interface that extends them both. This means that any object declared using the `Third` type has all the properties of both, which we show.

Next up we introduce a new concept: the `type` keyword. Types that are declared using the `type` keyword work almost exactly the same as interfaces, but have some subtle differences. The first is that `type`s are declared using the `=` operator, for reasons that we'll see later on. The second is that they don't use the `extends` keyword to extend types, since they make use of another new concept: intersection types. Intersection types are kind of like the companion to union types in that they represent a type that's the combination of all component types, and are made using the `&` character. A type that wanted to extend a type `A` would declare itself as being equal to `A & { ... }`, where `{ ... }` represents the extension. With this, we can recreate the previous interfaces that we made earlier with the new types `FirstType` and `SecondType`, along with `IntersectionType` as a demonstration of union types. We also use the `Intersection` type to demonstrate that types can be constructed from any type, not just types defined with the `type` keyword by making an intersection of our earlier interfaces.

One of the benefits of TypeScript being built on a weakly-typed language is that the typing system is able to consider two types equal if they're known to have the same properties and methods. For example, in C#, we can declare the following:
```
class First {
    public string prop;
}
class Second {
    public string prop;
}
```
And even though they have the exact same properties, the following will cause an error:
```
First first = new First();
Second second = first; // Error - First and Second are not equivalent since they're different classes!
```
However, in typescript, we don't have this problem since the type system doesn't exist at runtime and so any objects that have the same shape can be considered to be of the same type. This is also true of classes, not just types and interfaces. I wouldn't recommend taking advantage of this with classes though, since classes tend to have much more logic built into them and so treating different classes as the same type could potentially cause issues.

We demonstrate this type equivalence with the following block of code:
```
let intersection: Intersection = { one: "string", two: 1 };
intersection = third;
let intersectionType: IntersectionType = third;
```
Here, we start by defining a variable with our `Intersection` type. However, we can see that the compiler allows us to assign the `third` object to this variable even though it was defined with the `Third` type from earlier. Since the `Third` type has all the properties of `Intersection`, this is allowed. The same works with assigning the value of `third` to a new variable defined using the `IntersectionType` type. What we can see from this is that even though the three types are separate and defined in three different ways, the type system considers them to be equal and interchangeable since they all have the same 'shape'. We show this as well with the `FirstClass` and `SecondClass` classes, and the lines that follow their definitions.

We continue on to show how the type system is able to infer some more advanced types as well, with the line `let inferred = ["string", 1];`. If you hover over the `inferred` variable in your IDE, you'll see that TypeScript has inferred the type of this as `(string | number)[]`, or an array of the union `string | number`. We can also see this if we check the type of the `firstInferred` variable on the next line, which gives `string | number` as expected. We can also see this in the inferred type of the `returnFirst` function (and the value inferred for `inferredValue`), since it conditionally returns either a `string` or a `number`.

That's not to say that we can't define proper tuple types though. Since arrays in JavaScript are simply arrays that can hold any sort of value, TypeScript can leverage this to create tuple types by allowing us to define what is essentially an array type with explicitly-typed indexes. Looking at the variable `tuple`, we've defined it using the type `[string, number]`. This represents an array with two elements, the first of which is a `string` and the second of which is a `number`. Looking at the inferred types of the `firstElement` and `secondElement` variables, we can see that they're typed as `string` and `number` respectively, rather than the union type that we saw previously.

Somewhat interesting is that the type system also allows the assignment `inferred = tuple;`. This is because `[string, number]` is a subset of `(string | number)[]`, since both elements are subsets of the union type, and the `[string, number]` type itself is an array. Also of note is that the `typeof` JavaScript operator returns a union of all possible results (`"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"`) which we can see from the inferred type of the `foo` variable.

We saw earlier that a type can be defined as a union of two types, such as the example `type X = A & B`, but what if we left out the `& B` part? We'd just get `type X = A`, which is perfectly valid. What this essentially means is that types can be specified as what amount to aliases. In our example, the type `X` would be an alias for the type `A`, and of course we can do this for any type such as `string`, not just types that we define ourselves. We show this with our next type `Alias`, which is simply an alias for the `string` type. The type system even substitutes for these aliases when inferring types, which we can see in the inferred type of the `alias` variable which is resolved as simply `string`.

##### Type Guards
Since JavaScript is weakly-typed, it's not uncommon to see code that takes precautions to ensure that variables are of a specific type, such as passing a value as an argument to the `Number` constructor to ensure it's a number since the constructor accepts both numbers and strings. This is a simple example, but what if we want to check to see whether something is a string and not a number, or if a union of two complex types is either one or the other? This is where type guards come in.

##### type-guards.ts
A type guard is a function which "narrows" a type. What type narrowing means is that we take a type and "narrow" that down to be a certain subset of that type. This may sound confusing at first, but a practical example would be narrowing the union type `string | number` to just `string`. We start off by defining the `isString` function, which takes in a single argument `val` of type `any`, but has an interesting return type: `val is string`. This return type is what makes a type guard a type guard. The function returns a boolean, where the value matches the statement in the return type (eg. `true` if `val` is a `string`, and `false` if it isn't). To do this, we can use JavaScript's built-in `typeof` operator to check the type of what we pass in, and then return whether that result is exactly equal to `string`.

The `returnFirst` function from our previous file makes a reappearance here, and we use it to create a variable of the `string | number` union type. We can then leverage the type guard function we wrote above in an `if` statement, where the first branch executes if `val` is a string, and the second branch executes if it isn't. Looking at the type of `val` inside the first branch (by hovering over it in the IDE), we can even see that the type system has narrowed it down so that `val` is now a string! This means that the compiler is perfectly happy to let us treat `val` as a string inside this branch, and do `string` things to it like the `substring` function. Likewise, the type system also knows that since `val` is a `string` in the first branch, it can't be a `string` in the second branch, and so it must be a `number`. You can see this by once again hovering over the value in the second branch, and we can now treat `val` as if it was a `number`.

Of course, there are more ways to determine the type of a value for type narrowing purposes than just by using `typeof`. We demonstrate this with the function `uglierIsString`, which functionally does the same thing as our earlier `isString` function, but just looks a little uglier. We use a couple tricks here: the first is that we cast `val` as a `string`, and then we check for the existence of the `concat` method. Since JavaScript is a weakly-typed language, we can check for the "truthiness" of a value. Since `undefined` is "falsey" and accessing something that doesn't exist on an object returns `undefined`, we can treat the `concat` value as a boolean. We aren't calling the function, but simply accessing the function pointer. If it exists, then it returns something other than `undefined` ie. a "truthy" value, and if it doesn't then it returns a "falsey" value. Putting this all together, we cast `val` as a `string`, which then lets us access the `concat` function and return a boolean representing the existence of the function. If true, then the function exists and we can assume that `val` is a string. If not, then `val` is still any, but we can at least be sure that it's not a `string`. This might feel a little pointless to do on a primitive type when we can just use the `typeof` operator, but this method has value if we want to narrow a union of multiple complex types that can't simply be resolved using `typeof`, since that would just return `"object"`.

And that's it for part 2! Feel free to take some time and experiment yourself to really make sure that you've understood everything, and pay special attention to understanding what we've done so far with the type system, since part 3 is going to build on that. And once again, please don't hesitate to ask me any questions or give me any feedback regarding this part.