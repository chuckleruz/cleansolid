(() => {

    // función para obtener información de una película por Id
    function getMovie( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActors( movieId: string ) {
        console.log({ movieId});
    }

    // funcion para obtener el bio del actor por el id
    function getCast( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    function createMovie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    const getPayAmount = (isDead = false, isSeparated = false, isRetired = false)=> {

        let result: number;

        if( isDead ){
            return 1500;
        }

        if( isSeparated ){
            return 2500;
        }

        return ( isRetired ) ? 3000 : 4000;
    }
    


})();