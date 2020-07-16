//Given a random array of movie lengths and a specific flight time,
//find two movies that would perfectly fill the duration of the flight.
//If two movies would fill the time, return true. Otherwise, return false.
//Must not be the same movie twice.

function moviesDuringFlight(flightLength, movies){
    const movieHash = {}
    for (let i = 0; i < movies.length; i++){
        let target = flightLength - movies[i]
        if (movieHash[target]){
            return true
        }
        movieHash[movie] = true
    }
    return false
}