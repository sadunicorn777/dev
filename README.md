# Development

### Link to Deployed Website
If you used the stencil code, this is `https://sadunicorn777.github.io/dev`

### Goal and Value of the Application

This application serves as a platform where users can book appointments to have their makeup professionally done. The service provides a wide range of specific looks available for users to purchase. Each listing includes the price of the look and the duration of completion. 

The website also features themed packages of looks. All items within each package are the same price and duration.

Users are able to use any combination of filters and sorts to view the items. If no filter or sort is selected, the items appear in a random order.

To remove all filters and sorts, simply press "Refresh". 

The sorts will sort items in descending order. 

### Usability Principles Considered

The layout is divided into three vertically arranged categories so it is easy for the user to digest and compartmentalize. There is also a hierarchy of information, with the items for sale taking center stage, as they are placed in the middle and are topped with the largest header. On each side, the "Filter and Sort" and "Cart Sections" are designated with equal importance, because their headers are smaller than the center one but also the same size. A monochromatic color scheme is employed for cohesion, unity, consistency, and identity. That is, only one hue of pink is used, and all other colors besides those from the images are shades of this pink. 

The user is also in control of how the items are presented to them and can use filters and sorts to find exactly what they need. When the user adds items to their cart, purchased items appear in a list. 

There is no possibility of encountering error due to thorough testing. 

### Organization of Components

The organization is adapted from the React Lab. Data is stored in a json package and its elements are passed into "Item" components as props. The items are then rendered onto the main page via the map function. 

### How Data is Passed Down Through Components

Data is passed into components as props. An onClick function is also passed into each Item as a prop so that each item includes an "Add To Cart" button, where it will be added to the cart from the central App.js file. 

### How the User Triggers State Changes

The user can trigger state changes by selecting a new item filter, a new sort, or adding an item to their cart. NOTE: If the user has not selected any filter or sort, and adds an item to their cart, the list of items will rearrange into a random order. Meanwhile, their cart will stay consistent. This is to expose the user to new options. 

