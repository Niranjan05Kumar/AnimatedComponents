import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

const MySwitch = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if(theme === "light"){
        setTheme("dark")
    }else{
        setTheme("light")
    }
  };

  useEffect(() => {
    const body = document.body;
    body.classList = theme;
    body.style.transition = 'all 0.4s'
  }, [theme])

  return (
    <div>
      <Switch onClick={() => toggleTheme()} />
    </div>
  );
};

export default MySwitch;
