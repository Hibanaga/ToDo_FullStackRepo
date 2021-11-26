const infoToDos = {
  complete: {
    true: "Completed",
    false: "Not completed",
  },
  public: {
    true: "Public",
    false: "Private",
  },
};

const initialState = {
  title: "",
  description: "",
  year: 2021,
  isPublic: false,
  isComplete: false,
};

export { infoToDos, initialState };
