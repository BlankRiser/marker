import { Button } from "@/components/ui/button";
import React, { useEffect, useMemo, useState } from "react";

export default function ContentApp() {
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    document.addEventListener("mouseup", () => {
      if (window.getSelection()?.toString().length) {
        setSelectedText(window.getSelection()?.toString() || "");
      }
    });

    return () => {
      document.removeEventListener("mouseup", () => {});
    };
  }, [selectedText]);

  if (selectedText.length === 0) {
    return null;
  }

  const handleSave = () => {
    console.log("handleSave", selectedText);
    chrome.runtime.sendMessage({ action: "saveText", text: selectedText });
  };

  return (
    <div className="border bg-slate-100 border-blue-400 grid place-items-center max-w-lg mx-auto rounded-md p-1 shadow-lg">
      <div className="select-none text-lg p-2">{selectedText}</div>
      <div className="flex items-center gap-2">
        <Button onClick={() => navigator.clipboard.writeText(selectedText)}>
          copy text to clipboard
        </Button>
        <Button onClick={handleSave} className=" px-2 py-1 rounded">
          Save
        </Button>
      </div>
    </div>
  );
}
