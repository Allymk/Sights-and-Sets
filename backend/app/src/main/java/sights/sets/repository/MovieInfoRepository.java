package sights.sets.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import sights.sets.entity.MovieInfo;

public interface MovieInfoRepository extends JpaRepository<MovieInfo, Long> {

    @Query("SELECT m FROM MovieInfo m WHERE m.movieId = ?1")
    Optional<MovieInfo> findMovieInfoById(Integer movieID);

}