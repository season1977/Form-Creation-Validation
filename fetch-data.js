// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container to display the data
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch user data from the API
        const response = await fetch(apiUrl);

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        // Step 5: Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create a <ul> to hold the user names
        const userList = document.createElement('ul');

        // Step 7: Loop through users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 10: Run when DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
