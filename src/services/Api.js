const callToApi = () => {
  return (fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then(data => {
      const cleanData = data.results.map((objectAPI) => {
        return {
          id: objectAPI.id,
          image: objectAPI.image,
          name: objectAPI.name,
          species: objectAPI.species,
        };
      });
      console.log(cleanData);
      return cleanData;
    })
)};
export default callToApi;
