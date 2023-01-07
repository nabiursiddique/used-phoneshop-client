import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5'>
            <h2 className="text-5xl text-center font-bold my-8">OUR DAILY BLOG</h2>
            {/* First question */}
            <div>
                <div className="card glass text-white my-5">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">01: What are the different ways to manage a state in a React application?</h2>
                        <p><b>Ans: </b>The state of any application is represented by the user interface of the application. The state is mutable and whenever the user interacts with the application and changes its state, the user interface of the app may change as it will be represented by the new state.We can manage states with the help of below ways:<br></br>
                            1. With the help of useState and React State: useContext <br></br>
                            2. With the help of useReducer
                        </p>
                    </div>
                </div>
            </div>
            {/* 2nd question */}
            <div>
                <div className="card glass text-white my-5">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">02: How does a prototypical inheritance work?</h2>
                        <p><b>Ans: </b>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                        </p>
                    </div>
                </div>
            </div>
            {/* Third question */}
            <div>
                <div className="card glass text-white my-5">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">03: What is a unit test? Why should we write unit tests? </h2>
                        <p><b>Ans: </b>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br></br>

                            In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.
                        </p>
                    </div>
                </div>
            </div>
            {/* Fourth question */}
            <div>
                <div className="card glass text-white my-5">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">04: React vs Angular vs Vue? </h2>
                        <p><b>Ans: </b>Difference between React Angular and Vue are below:- <br></br>
                            1.React is developed by Facebook where Angular is by google and vue by Evan you <br></br>
                            2.React has a vast community, Angular has a large community and Vue has a growing community.<br></br>
                            3.Learning curve of React is Gradual, learning curve of Angular is steep and vue js is smooth <br></br>
                            4.React is mostly used for cross-platform apps, Angular is used for large scale apps, and vue is used for lightweight apps.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;