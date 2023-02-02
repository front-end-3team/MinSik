import MenuContact from "./MenuContact/MenuContact";
import MenuCulture from "./MenuCulture/MenuCulture";
import MenuProject from "./MenuProject/MenuProject";
import MenuStory from "./MenuStory/MenuStory";

function Menu() {
  return (
    <>
      <ul>
        <MenuStory />
        <MenuProject />
        <MenuCulture />
        <MenuContact />
      </ul>
    </>
  );
}

export default Menu;
