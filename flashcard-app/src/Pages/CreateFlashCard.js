import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import classes from "./CreateFlashCard.module.css";
import Demo from "../Components/Demo";

const CreateFlashCard = () => {
  return (
    <div>
      <div className={classes.header}>
        {" "}
        <h1> Flash Master</h1>
      </div>

      <div>
        <MainNavigation></MainNavigation>

      </div>
      <div>
        <Demo></Demo>
        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
};

export default CreateFlashCard;
