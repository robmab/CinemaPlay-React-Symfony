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
            store.films = data;
            setStore(store);
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
