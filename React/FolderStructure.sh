# Folder Structure Based on https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1
/src
  /components 
    /Button 
    /Notifications
      /components
        /ButtonDismiss  
          /images
          /locales
          /specs 
          /index.js
          /styles.scss
      /index.js
      /styles.scss
  /scenes
    /Home 
      /components 
        /ButtonLike
      /services
        /processData
      /index.js
      /styles.scss
    /Sign 
      /components 
        /FormField
      /scenes
        /Login
        /Register 
          /locales
          /specs
          /index.js
          /styles.scss
  /services
    /api
    /geolocation
    /session
      /actions.js
      /index.js
      /reducer.js
    /users
      /actions.js
      /api.js
      /reducer.js
  index.js 
  store.js

# RULES TO FOLLOW
# To work properly, they should follow these rules:
#   *A scene can define nested components, scenes or services.
#   *A component can define nested components or services. It cannot use or define scenes.
#   *A service can define nested services. It cannot use or define components or scenes.
#   *Nested features can only use from its parent.

Components
    You all already know what a component is, but one important thing in this organization is 
    the ability to nest a component into another component.

    Components defined at the root level of your project, in the components folder, are global and 
    can be used anywhere in your application. But if you decide to define a new component inside 
    another component (nesting), this new component can only be used its direct parent.

    # Why would you want to do that?
    #     When you develop a large application, it happens quite often that you need to create a component 
    #     that you definitively know you won’t reuse anywhere else, but you need it. 
    #     If you add it at the root level of your components folder, it will get lost with hundreds of components. 
    #     Sure, you could categorize them, but when it’s time to do some clean-up, 
    #     you won’t remember what they are all for or if they are still being used somewhere.

    #     Although, if you define at the root level only the main components of your application, 
    #     such as buttons, form fields, thumbnails, but also more complicated one like listComments, 
    #     formComposer with their own children components, it gets much easier to find what you need

Scenes
    A scene is a page of your application. You can see a scene just like any component, 
    but I like to separate them into their own folder.

    If you use React-Router or React Native Router, you can import all your scenes 
    in your main index.js file and setup your routes.

    # With the same principle components can be nested, you can also nest a scene into a scene, 
    # and also define components or services into a scene. You have to remember that if you decide 
    # to define something into a scene, you can only use it within the scene folder itself.

Services
    Not everything can be a component, and you will need to create independent modules 
    that can be used by your components or scenes.

    You can see a service like a self-contained module where you will define the core business logic 
    of your application. This can eventually be shared between several scenes or even applications, 
    such as a web and native version of you app.

# Useful links
#     https://github.com/alexmngn/react-rock-paper-scissors (ReactJS)
#     https://github.com/alexmngn/react-native-authentication (React-Native)