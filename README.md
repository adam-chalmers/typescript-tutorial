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

The `unknown` type is somewhat like `any`, in that it defines a type that is unknown. Where the two differ is that `unknown` won't allow you to do anything with it at all, so it's inherently safer. I've never used it personally, but I'm sure it has its niche uses.

##### evil.ts
Here, I demonstrate the evils of the `any` type. We define a variable of type `any`, and assign it a number. We then assign it a string. The next line involves what's known as casting. Casting allows you to treat one type as another, provided the two are compatible (more on this later). Since we're casting from the `any` type, which is inherently compatible with any other type, the compiler sees no issue with it and allows us to create the `num` variable of type `number`, and assign it the value of the `val` variable. What this means is that at runtime, val will also be a string, and calling `val.toFixed(2)` will produce an error. Since we used the `any` type here, typescript assumes we know what we're doing and lets us get away with casting it as a number since it doesn't track the actual value of it.

This reveals one of typescript's flaws, in that it's a strongly-typed language that doesn't use types at runtime. In other strongly-typed languages (see C#, Java, etc.), types are also known (and can even be inspected by what's known as reflection) at runtime. This means that trying to treat one object type as another like we did in this example will actually throw an error when trying to cast the value if the types aren't compatible. These languages are therefore a little more strict about what you can and can't do with them, which can sometimes be a bad thing (such as in this case) but can also be a strength, since typescript can play a little looser with types as we'll see later on when we get to more advanced types.