package sights.sets.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "filmTitle")
    private String filmTitle;
    private String latitude;
    private String longitude;
    private String city;
    private String country;

    // getters and setters
    public Long getId() {
    return id;
}

    public void setId(Long id) {
        this.id = id;
    }

    // Getter and Setter for filmTitle
    public String getfilmTitle() {
        return filmTitle;
    }

    public void setfilmTitle(String filmTitle) {
        this.filmTitle = filmTitle;
    }

    // Getter and Setter for latitude
    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    // Getter and Setter for longitude
    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    // Getter and Setter for city
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    // Getter and Setter for country
    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

}