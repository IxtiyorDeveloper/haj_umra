import styles from "./sidebar.module.scss";
import Image from "next/image";
import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
// import { VscChromeClose } from "react-icons/vsc";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
// import { useRefContext } from "../RefContext";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  // const { refContact }: any = useRefContext();
  const router = useRouter();
  return (
    <div className={`${styles.mainSidebar} ${isOpen ? styles.ws : ""}`}>
      <div className={styles.mHeader}>
        <Image
          src="/logo-dark.png"
          className={styles.logo}
          alt="logo"
          width={250}
          height={70}
        />
        <div className={styles.iwr} onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </div>
      </div>
      <List>
        <ListItemButton
          onClick={() => {
            setIsOpen(false);
            router.push("/services");
          }}
        >
          <ListItemText
            primary="Services"
            primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.1rem" }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setIsOpen(false);
            router.push("/about-us");
          }}
        >
          <ListItemText
            primary="About Us"
            primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.1rem" }}
          />
        </ListItemButton>
        <ListItemButton onClick={() => setIsOpen(false)}>
          <ListItemText
            primary="Contact Us"
            primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.1rem" }}
          />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Sidebar;
