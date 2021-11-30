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

const pickerArr = [
  { label: "activity", value: "activity" },
  { label: "completed", value: "isCompleted:true", parent: "activity" },
  { label: "public", value: "public" },
  { label: "public", value: "isPublic:true", parent: "public" },
];

export { infoToDos, initialState, pickerArr };
