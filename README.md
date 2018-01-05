# locationception
A population management system that contains a list of locations and the total number of residents in each location broken down by gender

The API enables you to:
- Create a new location containing data on the total number of male and female residents within it. Please note that locations can be nested within other locations
- List all available locations and their population summaries
- Update data for a specific locations
- Delete a specified location

# Routes
- GET / - Get all the locations in the database
- POST /location - Create a new location
- PUT /location/{id} - Update a location
- DELETE /location/{id} - Delete a location
