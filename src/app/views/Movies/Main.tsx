

import  { useState } from "react";
import { useGetMoviesQuery, useSearchMoviesQuery } from "../../api/movieApi";
import Card from "./Card";
import { Button, TextField, CircularProgress, Typography, Grid, Box } from "@mui/material";

const categories:any = {
  Popular: "/discover/movie?sort_by=popularity.desc",
  Theatre: "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22",
  Kids: "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc",
  Drama: "/discover/movie?with_genres=18&primary_release_year=2014",
  Comedie: "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc",
};

const Main = () => {
  const [category, setCategory] = useState("Popular");
  const [search, setSearch] = useState("");

  const { data: movies, isLoading, isError } = useGetMoviesQuery(categories[category]);
  const { data: searchResults } = useSearchMoviesQuery(search, { skip: search === "" });

  const handleCategoryChange = (newCategory:any) => setCategory(newCategory);
  const handleSearch = (evt:any) => {
    if (evt.key === "Enter") {
      setSearch(evt.target.value);
    }
  };

  if (isLoading) return <CircularProgress sx={{ display: "block", margin: "auto", mt: 4 }} />;
  if (isError) return <Typography color="error">Error fetching movies.</Typography>;

  const displayedMovies = search ? searchResults?.results : movies?.results;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
        {Object.keys(categories).map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "contained" : "outlined"}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </Button>
        ))}
      </Box>

      <TextField
        fullWidth
        label="Search movies..."
        variant="outlined"
        onKeyDown={handleSearch}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={1}>
        {displayedMovies?.map((movie:any) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={2}>
            <Card movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
