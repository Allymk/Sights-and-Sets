package sights.sets.controller;

import org.springframework.web.bind.annotation.*;
import sights.sets.entity.Movie;
import sights.sets.repository.MovieRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "*")
public class MovieController {

    private final MovieRepository repo;

    public MovieController(MovieRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Movie> getAll() {
        return repo.findAll();
    }

    @GetMapping("/searchById")
    public Optional<Movie> findByTitle(@RequestParam String filmTitle) {
        return repo.findMovieByTitle(filmTitle);
    }

    @GetMapping("/searchByLocation")
    public List<Movie> findByLocation(@RequestParam String location) {
        return repo.findMoviesByCityOrCountry(location);
    }

    @PostMapping
    public Movie add(@RequestBody Movie movie) {
        return repo.save(movie);
    }
}