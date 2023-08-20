
const Factory = function () {
    this.createMovie = function (genre, rating, length) { //factory method
        let movie

        if (genre === "drama") {
            movie = new Drama()
        } else if (genre === "horror") {
            movie = new Horror()
        } else if (genre === "fantasy") {
            movie = new Fantasy()
        } else if (genre === "action") {
            movie = new Action()
        }

        movie.genre = genre
        movie.rating = rating
        movie.length = length

        movie.say = function () {
            console.log("Is age restricted: " + this.isAgeRestricted + ". Genre: " + this.genre + ". Rating: " + this.rating + ". Length: " + this.length)
        }
        return movie
    }
}
class Movie {
    constructor() {
        this.isAgeRestricted = false
    }
}

class Drama extends Movie {
    constructor() {
        super()
        //this gør at kun den klasse har den attribut frem for at alle klasser somehow får den - får de den alle fordi superklassen får den?
    }
}

class Horror extends Movie {
    constructor() {
        super()
        this.isAgeRestricted = true
    }
}

class Fantasy extends Movie {
    constructor() {
        super()
    }
}

class Action extends Movie {
    constructor() {
        super()
    }
}

function run() {
    let movies = [];
    const factory = new Factory() //factory - object der skaber andre objekter

    movies.push(factory.createMovie("drama", 5, 120))
    movies.push(factory.createMovie("horror", 3, 90))
    movies.push(factory.createMovie("fantasy", 4, 100))
    movies.push(factory.createMovie("action", 2, 80))

    for (let i = 0, len = movies.length; i < len; i++) {
        movies[i].say()

        //console.log(movies[i].isAgeRestricted)
    }
}
//frem for at have forskellige typer objekter som drama osv så kunne man
//have samme type objekt bare movie og så have forskellige attributter på. Det er også factory method

//Mikas pattern: state machine pattern, klasser implementere interface. klasserne har metoder som repræsentere dets state
//fx power on, off, pause, play, stop, eject, etc.

//composite design pattern
//træstruktur: rekursiv
//dokument eksempel, folder med filer i, folder med filer i, folder med filer i, osv.
//og html dom træ

//minimum to klasser, simpel som er dokument og en folder som har dokumenter
//dokumentfolder kan have dokumentfoldere osv - rekursiv
//foldere er noder, dokumenterne er blade

//eksamen system: kan lægges i portefolie til at vise virksomheder når man skal i praktik
//man skal opbygge portefolie

//spørg: eksamen exceptions og functional programmering
//hvornår ville vi bruge objekter i js?

run()