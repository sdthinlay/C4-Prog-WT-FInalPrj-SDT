const getJokesButton = document.getElementById('getJokesButton');

getJokesButton.addEventListener('click', function (event)  {
    event.preventDefault();
    let numberOfJokes = document.getElementById('numberOfJokes').value;
    const apiUrl = 'https://api.api-ninjas.com/v1/jokes?limit=' + numberOfJokes;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'AfvknA2QMwZUc+jwaR2U6w==nmLIc2quHTT5HhHA'
        }
    })
        .then(function(response){
            if (!response.ok){
                throw new Error("Network response not ok.");
            }
            return response.json();
        })

        .then(function(data) {
            const apiResponse = document.getElementById("jokeResponse");
            apiResponse.innerHTML = '';
            const jokeList = document.createElement("jokeList");

            data.forEach(joke_obj => {
                const joke_reply = joke_obj["joke"];
                const listItem = document.createElement("li");
                /*document.getElementById("jokeResponse").innerHTML = joke_reply;*/
                listItem.textContent = joke_reply;
                jokeList.appendChild(listItem);
            });
            apiResponse.appendChild(jokeList);
        })
        .catch(error => {
            // Handle any errors that occur during the API request
            console.error('Error:', error);
        });
});