package sights.sets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sights.sets.entity.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}