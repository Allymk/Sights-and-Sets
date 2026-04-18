package sights.sets.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "movie_info")
public class MovieInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "movie_id", nullable = false)
    private Long movieId;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "release_year")
    private Integer releaseYear;

    private String director;

    private String genre;

    private Double rating;

    @Column(name = "runtime_minutes")
    private Integer runtimeMinutes;

    @Column(name = "image_url", columnDefinition = "TEXT")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "movie_id", insertable = false, updatable = false)
    private Movie movie;


    public Long getId() {
        return id;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(Integer releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Integer getRuntimeMinutes() {
        return runtimeMinutes;
    }

    public void setRuntimeMinutes(Integer runtimeMinutes) {
        this.runtimeMinutes = runtimeMinutes;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Movie getMovie() {
        return movie;
    }
}