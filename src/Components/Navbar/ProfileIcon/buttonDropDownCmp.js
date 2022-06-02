import React from "react";
import ProfileIcon from "./index";
import { DropDownCard } from "./dropDownCard";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const sampleData = [
  {
    title: "Profile",
    link: "/profile",
    icon: (
      <FaUserCircle
        style={{ marginBottom: "-4px", marginRight: "10px" }}
        size={"20px"}
      />
    ),
  },
  {
    title: "Logout",
    link: "/",
    icon: (
      <BiLogOut
        style={{ marginBottom: "-4px", marginRight: "10px" }}
        size={"20px"}
      />
    ),
  },
];

const ButtonWithDropDownCmp = () => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  const handleClick = (e) => {
    if (!e.target.closest(`#${drop.current.className}`) && open) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="dropdown" ref={drop}>
      <ProfileIcon onClick={() => setOpen(!open)} />
      {open && <DropDownCard data={sampleData} setOpen={setOpen} />}
    </div>
  );
};

export default ButtonWithDropDownCmp;
