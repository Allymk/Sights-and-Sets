package sights.sets.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import sights.sets.entity.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Query("SELECT m FROM Movie m WHERE m.filmTitle = ?1")
    Optional<Movie> findMovieByTitle(String movieTitle);
}