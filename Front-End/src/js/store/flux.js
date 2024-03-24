const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      films: [],
    },
    actions: {
      selectFilms: () => {
        let store = getStore();

        fetch(`http://localhost:8000/films`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) throw Error(res.ok);
            return res.json();
          })
          .then((data) => {
            data = data.map((value) => {
              /* Convert date */
              value.releaseDate= value.releaseDate
                .split("T")[0]
                .toString()
                .split("-")
                .reverse()
                .join("-");
              
              return value;
            });
            /* Sort by Score */
            data.sort(compareScore);
            store.films = data;
            setStore(store);
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

function compareScore(a, b) {
  if (a.voteAverage < b.voteAverage) {
    return 1;
  }
  if (a.voteAverage > b.voteAverage) {
    return -1;
  }
  return 0;
}

export default getState;
