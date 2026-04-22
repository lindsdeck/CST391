# CST391 - Activity 4: Angular Music App API Data
# Lindsey DeDecker
### April 18th, 2026

## Activity 4
In this Activity I integrated the music application I had created with the back end services from Topic 1. 

## Screenshots

- ### Simple application - web page & phone view
#### Below you can see the simple applicaiton that was created. First we see that the grid shows appropriately within the web application view. Then we see what it would look like on a phone or tablet using Chrome Dev Tools and both look appropriate and adjust as they should. 
![Web view](./1.png)
![phoine/tablet view](./12.png)

- ### Simple Data binding to labels and Handliong form post
#### Below you can see the Shop Component functioning correctly. The form shows the question with text input field and a button to submit. When the name is submitted by the user you can see it displayed correctly.  
![Form Submission](./2.png)

- ### 2-Way Data Binding
#### I have now added an info compopnenet for 2-way binding. This will update in real time when the user interacts. The informaiton to shop does not show until the user enters in their name. Below you will see what it looks like upon load, then when the user enters their name and final when they submit to buy movies. 
![Page Load View](./3.png)
![Name Submission](./31.png)
![Movie Order Submission](./33.png)

## Research Questions
1. Describe @Input decorator used in info.component.ts

    - This passes the data between the parent and child because it allows the parent to bind data to properties of the child.  In this application, the shop component was able to pass the answer to the info componenet using [name]="answer".  This allows for the property to be set from the parent component. 

2. Describe [value] used in info.component.html

    - [value] binding is used in the dropdown select to set each value of the element so that it can not be changed. This was used to create the movie options in the Activity 3 application. [] indicates property binding which means that the values are set and not able to be changed. 

3. Describe [(ngModel)] also used in info.componenet.html

    - using both [] and {} makes this 2 way binding between the TypeScript and HTML.  This keeps the view and model in sync and updates the components when the input changes. It was used for the quantity and selectedProduct within our application.  This allowed the user to change their selections and have it update within the form and in the submission data. 




## Research Questions
Research how an Angular application maintains a logged in state. How does it communicate this state to the server?
- fjdksal;jfkl djsa


## Discussion Questions
1. Why is there a need to build responsive web pages? Provide two to three benefits. Justify your rationale.
    - Responsive web pages are incredibly important because qwebsites are accessed on a wide variety of devices such as phones, tablets, laptops and then large monitors. Having your pages responsive will ensure that your site adapts automatically, providing consistent and effective expereince for all users regardless of the device they are using.  One reason this is important is because it will make websites easier to read and navigate.  This eliminated the need for zooming, scrolling or resizing the application. As a user, being able to quickly find information and navigate easily  is so important. This will improive the customer satisfaction and bring back customers. It will also make things more cost effective and easier to manage.  When you have a responsive web page, you eliminate having to create and maintain separate desktop and mobile versions of a site and instead you are only managing one single website. Having a well working website that is mobile friendly will help your site be higher in search results. This will mean more traffic and a greater chance of reaching potential customers. 

2. Define HTML semantic Tags. Why are these important for screen readers? Explain your reasoning.

    - HTML semantic tags are what is used to define what the role of the content is. Examples of these include "img, table and h3. The semantic tags are wrapped around text to tell the computer how they should be displayed. For a h1, you are going to see large text as a header. Then for p you are going to be looking at body paragraph sized text. In addition to the visual formatting, semantic tags also communicate the meaning and structure of the text or image. nav, header and footer are examples of this. They describe what the content is. Screen readers are software that reads a webpage for users. The semantic tags are huge for screen readers as they help make sense of describing what the page is to look like. For example, the screen reader will see h1 and know that it is the heading of the page and so it will articulate it as such which will help the user be able to navigate the page with more of an understanding of the layout. nav is another one that the screen reader will be able to identify as the navigation and help the user jump to it and understand it. Without the semantics tags, the page would just be a blob of text without any sort of structure and organization.

    ## Resources
    - https://www.geeksforgeeks.org/angular-js/input-decorator-in-angular/
    - https://angular.dev/api/forms/NgModel