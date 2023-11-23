\** steps for these med project
*phases

1-routers:

-in the app we had created the react router and give it the path to homelayout
-passing children and set landing as the first outlet
2-navbar:
-create a nav and use navLink to route

2-loader:

-set the loader in the landing and export it , import in the app and pass in the router
-in the landing the loader should be an asyn func that fetch data by axios and return the drinks

3-cocktail :

-create the cocktail list and pass the drinks ,check, rename and pass to the cocktail cart
-in the cart we display the drink

4-err page :

-create an err page
-pass in the router as errorElement
-in the page access to the err by react router err

5-the single cocktail :
-in the cart cocktail set a link to a cocktail page with passing the id
-get the id in the loader params
-fetch with axaios and display

6-newsletter:
-create the component , and setup the form
-change with the Form component from react router , set the method to post
-set a new action and access the request obj
-access to the formdata and get the forme entries
-post the data to the server

7-set the search fun :
-create the search component and setup the form
-the search val will automatic in the url

8-set the react query

--why:
in these case using just react router we are each time fetching

--setup:
-in the main get the queryClientProvider and put all of thing in
-create a queryClient and put the time to 5 min , add it to the queryClientProvider
-in the router pass the queryClient as a param in the loader fun

--component :
-create a search query in the landing
-add a fun to the loader that return the queryClient
-in the loader we are accessing to the url and get the search value-
-then we use the ensureQueryData to :\The ensureQueryData method will load the data from the API if it is not already cached. Once the data is loaded, it will be returned by the Loader function.
-and we did the same thing in the singleCocktail

9-redirect:
