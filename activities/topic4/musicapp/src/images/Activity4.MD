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


## Activity 3 Part 2
I built a full Angular music application.  It is structed with models, service and components. The core of the app is MusicServiceService which manages a lit of albums loaded from a JSON file.  Methods have been created for getting artists, getting albums by artist, creating, updating and deleting albums. I built complonents for listing artists and albums, displaying individual albums and creating a new album all with Angular's routing system. I also used dependency injection, data binding and componenet communication. 

## Screenshots

- ### Bootstrap NavBar
#### A bootstrap nav bar has been added wtih 4 options for the user that we see in additiona to the Welcome message.  The navbar is responsive and will collapse and expand with the hamburger menu.
![Navbar view](./A.png)

- ### Home Page
#### Below you can see the home page of the MusicApop Angular application. We see Welcome and the dark bootstrap NavBar with lkinks for Music, GCU home, Create, Artists and About
![Home](./B.png)

- ### GCU Homepage Redirect
#### Below you can see where I am directed when I select GCU from the NavBar. It shows that the navabr can host an external navigation link and work correctly within Angular.
![GCU](./C.png)

- ### Create Album Page
#### Below you can see what the user will see when they go to create an album. I have input information for an album to show this information ebing saved correclty. It asks for all the correct information within the form. 
![Create Album](./D.png)


- ### Artist List page showing added album/artist
#### Below we see that the album for Taylor Swift was added as she is listed under the artists with albums correctly.  This shows that the Music Service is working correctly adding new albums. 
![Artist List](./E.png)

- ### About Box
#### Below is the about box. This is an alert box that ppears and shows the vurrent version of the application. 
![About Box](./F.png)

## Research Questions
Add complete comments to music-service.ts. Include this commented code in a document. Make sure your submission read like a code file.  Below is the link to the file that has been updated with appropriate commenting.

https://github.com/lindsdeck/musicapp/blob/master/src/app/service/music-service.service.ts


## Discussion Questions
1. Why is there a need to build responsive web pages? Provide two to three benefits. Justify your rationale.
    - Responsive web pages are incredibly important because qwebsites are accessed on a wide variety of devices such as phones, tablets, laptops and then large monitors. Having your pages responsive will ensure that your site adapts automatically, providing consistent and effective expereince for all users regardless of the device they are using.  One reason this is important is because it will make websites easier to read and navigate.  This eliminated the need for zooming, scrolling or resizing the application. As a user, being able to quickly find information and navigate easily  is so important. This will improive the customer satisfaction and bring back customers. It will also make things more cost effective and easier to manage.  When you have a responsive web page, you eliminate having to create and maintain separate desktop and mobile versions of a site and instead you are only managing one single website. Having a well working website that is mobile friendly will help your site be higher in search results. This will mean more traffic and a greater chance of reaching potential customers. 

2. Define HTML semantic Tags. Why are these important for screen readers? Explain your reasoning.

    - HTML semantic tags are what is used to define what the role of the content is. Examples of these include "img, table and h3. The semantic tags are wrapped around text to tell the computer how they should be displayed. For a h1, you are going to see large text as a header. Then for p you are going to be looking at body paragraph sized text. In addition to the visual formatting, semantic tags also communicate the meaning and structure of the text or image. nav, header and footer are examples of this. They describe what the content is. Screen readers are software that reads a webpage for users. The semantic tags are huge for screen readers as they help make sense of describing what the page is to look like. For example, the screen reader will see h1 and know that it is the heading of the page and so it will articulate it as such which will help the user be able to navigate the page with more of an understanding of the layout. nav is another one that the screen reader will be able to identify as the navigation and help the user jump to it and understand it. Without the semantics tags, the page would just be a blob of text without any sort of structure and organization.

    ## Resources
    - https://www.geeksforgeeks.org/angular-js/input-decorator-in-angular/
    - https://angular.dev/api/forms/NgModel