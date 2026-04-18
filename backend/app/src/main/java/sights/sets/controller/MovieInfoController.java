package sights.sets.controller;

import org.springframework.web.bind.annotation.*;

import sights.sets.entity.MovieInfo;
import sights.sets.repository.MovieInfoRepository;

import java.util.Optional;

@RestController
@RequestMapping("/movie-info")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieInfoController {

    private final MovieInfoRepository repo;

    public MovieInfoController(MovieInfoRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/{movieId}")
    public Optional<MovieInfo> findMovieInfo(@PathVariable Integer movieId) {
        return repo.findMovieInfoById(movieId);
    }

    @PostMapping
    public MovieInfo add(@RequestBody MovieInfo movie) {
        return repo.save(movie);
    }
}