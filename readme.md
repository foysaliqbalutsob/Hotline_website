# JavaScript Concepts – Assignment(5) Questions    

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 

#### The difference between getElementById ,getElementsByClassName, querySelector/querySelectorAll :

- getElementById('idName') It return a  element that  has a  specific ID. it takes only ID.

- getElementsByClassName('className'): It  returns an HTMLCollection which contain multiple elements in the  same class name.we can easily access each element using an index, like items[0], items[1], etc.It takes  className and actually returns array-like-object.

- querySelector('selector'):It returns the first element that matches the given CSS  selector (for example #id, .class, div p).

- querySelectorAll('selector'): It returns a NodeList, which contains all the elements that match the given selector.It take CSS selector only

---

## 2. How do you create and insert a new element into the DOM?  

here are a some step  to create a new element by using  DOM:  
- createElement() can be used to create a new element.


- Insert this element into the DOM using methods like appendChild(), append(), prepend(), or insertBefore().

---
## 3. What is Event Bubbling and how does it work?

- Event bubbling is the another way events propagate in  the DOM. When an event occurs on an element (like a click on a button), it first runs on that element, then traverse up to its parentNode ,childNode , and by this way we can traverse entire  document object.



- When an event occurs on an element like button , it first triggers on this element, then bubbles up to its parent elements, traverse all the way to the document.


---

## 4. What is Event Delegation in JavaScript? Why is it useful?


Event Delegation is a technique in JavaScript where we add a  eventListener to a parent to handle events on its child elements.firstly we call an element by ID and then we bubbling to the parent.Events usually bubble up from the target element to its parent elements.

### It is usefull :

As a devloper we need to efficient our code ,cleaner and dynamic.A website have many buttons than can operate same things. we can reuse code ,efficient code and time efficient by using Event bubbling its called Event deligation.

### 4. What is the difference between preventDefault() and stopPropagation() methods?


---



| preventDefault()             | stopPropagation() |
|----------------------------|-------------|
|Its syntax is -:event.preventDefault();|Its syntax is:event stopPropagation();|     
|prevent the default action of browsers taking on that event.normally it use in form submission.when we use it in form to stop form normal behavior  | it propagate of current event by parentNode or ChildNodes.it stop bubbling.
|     it prevents the browser from  |It can not stop the default behavior of the browser.|
|          It does not return value  |   It does not have any return type   |
|   This function can stop the event     | this function is used to prevent the parent element from accessing the event. |





 
  








   
