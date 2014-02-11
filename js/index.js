var currentUUID;
var latitude;
var longitude;
var dataClient; //instance of Apigee.Client 

function initializeSDK(){




}

/* 1. Create a new entity

	To start, let's create a function to create an entity and save it on Apigee. */
	   
function createEntity () {
	/* First, we specify the properties for your new entity:
    
    - The type property associates your entity with a collection. When the entity, 
      is created, if the corresponding collection doesn't exist a new collection 
      will automatically be created to hold any entities of the same type. 
      
      Collection names are the pluralized version of the entity type,
      e.g. all entities of type book will be saved in the books collection. 
    
    - Let's also specify some properties for your entity. Properties are formatted 
      as key-value pairs. We've started you off with three properties in addition 
      to type, but you can add any properties you want.    */

}




/* 2. Retrieve an entity

   Now that we can create entities, let's define a function to retrieve them: */
   
function retrieveEntity () {
	/*
	- Specify the 'type' of the entity to be retrieved, 'book' in this case.
	- Specify the 'UUID' property of the entity to be retrieved. You can get this from the 
	  response we showed you when the entity was created. */		              

}



/* 3. Update/alter an entity

   We can easily add new properties to an entity or change existing properties by making a 
   call to the Apigee API. Let's define a function to add a new property and update an existing 
   property, then display the updated entity. */
   	         
function updateEntity() {
   /*
		   - Specify your Apigee.Client object in the 'client' property. In this case, 'dataClient'.
		   - Specify the following in the 'data' property:
		   		- The 'type' and 'uuid' of the entity to be updated so that the API knows what 
		   		  entity you are trying to update.
		   		- New properties to add to the enitity. In this case, we'll add a property 
		   		  to show whether the book is available.
		   		- New values for existing properties. In this case, we are updating the 'price' property. */


}



/* 4. Delete an entity

   Now that we've created, retrieved and updated our entity, let's delete it. This will 
   permanently remove the entity from your data store. */
			
function deleteEntity () {

	/* - Specify your Apigee.Client object in the 'client' property. In this case, 'dataClient'.
			   - Specify the 'type' and 'uuid' of the entity to be deleted in the 'data' property so
			     that the API knows what entity you are trying to delete. */
			   		

}

/* 5. Get the user's geolocation

   To use geoquerying, we need to get the user's geolocation from their device or browser. For this app, we'll 
   store the latitude and longitude in the corresponding global variables. */
   
function getLocation () {
	
	
	
}


/* 6. Query entities by location

   Once we have the user's location, we can pass it as a query parameter of our API request to get all entities within
   a specified radius (in meters) of a given point.
   
   We'll find all entities within 8046 meters (~5 miles) of the Apigee office (37.333758, -121.894161) */
   
function geoQuery () {

}
