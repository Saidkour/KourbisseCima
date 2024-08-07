import { useDispatch, useSelector } from "react-redux";
import { SET_GENRE, SET_PAGE ,RESET_STATE } from "../redux/actionTypes";

export default function SelectGenre() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <select
        className={`p-2 ${
          dark ? "bg-gray-700" : "bg-gray-200 text-black"
        }  focus:border rounded border-none px-4 py-2 m-auto`}
        onChange={(e) => {
          dispatch({ type: SET_PAGE });
          dispatch({ type: SET_GENRE, payload: e.currentTarget.value });
          dispatch({ type: RESET_STATE });
        }}
        name="genre"
        id="genre"
      >
        <option value="">choisir genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </>
  );
}
