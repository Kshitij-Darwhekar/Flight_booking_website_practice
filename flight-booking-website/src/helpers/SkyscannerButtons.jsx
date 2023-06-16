import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function SkyscannerButton() {
  const [showIcons, setShowIcons] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const handleAdultIncrement = () => {
    setAdultCount(adultCount + 1);
  };

  const handleAdultDecrement = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  const handleChildIncrement = () => {
    setChildCount(childCount + 1);
  };

  const handleChildDecrement = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const handleTextFieldClick = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div>
      <div onClick={handleTextFieldClick}>
      <span>Adults:{adultCount} </span>
        {showIcons && (
          <>
            
            <Button onClick={handleAdultDecrement}>
              <RemoveIcon />
            </Button>
            <span>{adultCount}</span>
            <Button onClick={handleAdultIncrement}>
              <AddIcon />
            </Button>
          </>
        )}
      </div>
      
      <div onClick={handleTextFieldClick}>
        <span>Children:{childCount} </span>
        {showIcons && (
          <>ś
            <Button onClick={handleChildDecrement}>
              <RemoveIcon />
            </Button>
            <span>{childCount}</span>
            <Button onClick={handleChildIncrement}>
              <AddIcon />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default SkyscannerButton;