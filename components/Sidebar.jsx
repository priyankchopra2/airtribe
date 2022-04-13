import { Button, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SideBoard = (props) => {
  const [links, setLinks] = useState([
    // { url: "https://www.google.com/", id: Math.random() },
    // { url: "https://www.youtube.com/", id: Math.random() },
  ]);

  const [addNew, setAddNew] = useState(false);
  const [url, setUrl] = useState("");

  const addLinks = () => {
    console.log("add links called");

    if (url != "") {
      setLinks(() => [...links, { url: url, id: Math.random() }]);
    }
    setAddNew(false);
    console.log(addNew);
  };

  useEffect(() => {}, [addNew]);

  const onDragStart = (e) => {
    const target = e.target;
    console.log(target.id);
    e.dataTransfer.setData("id", target.id);

    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
    // e.target.style.display = "initial";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const link_id = e.dataTransfer.getData("id");

    const link = document.getElementById(link_id);
    console.log(link);
    link.style.display = "block";
    console.log(e.target.id);
    if (e.target.id != "inside") {
      e.target.appendChild(link);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragEnd = (e) => {
    console.log(e);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  return (
    <>
      <div className="sideboard" onDrop={onDrop} onDragOver={onDragOver}>
        <Button colorScheme={props.colorScheme} size="xs">
          {props.title}
        </Button>
        <div id="inside" className="url">
          {" "}
          {addNew ? (
            <>
              <Input type="text" onChange={handleInput}></Input>
              <Button onClick={addLinks}>Add</Button>
            </>
          ) : (
            <div
              id="inside"
              className="url"
              onClick={() => {
                setAddNew(true);
                setUrl("");
              }}
            >
              + New
            </div>
          )}{" "}
        </div>
        {links.length
          ? links.map((link) => {
              return (
                <div
                  className="url"
                  key={link.id}
                  id={link.id}
                  draggable="true"
                  onDragStart={onDragStart}
                  onDragOver={dragOver}
                  onDragEnd={onDragEnd}
                >
                  {link.url}
                </div>
              );
            })
          : ""}
        <br></br>
      </div>
    </>
  );
};

export default SideBoard;
