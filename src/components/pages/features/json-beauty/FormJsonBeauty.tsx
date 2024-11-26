"use client";
import Arrow from "@/assets/svg/Arrow";
import Button from "@/components/customs/Button";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const FormJsonBeauty = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleBeautify = () => {
    try {
      const parsed = JSON.parse(input);
      const beautified = JSON.stringify(parsed, null, 2);
      setOutput(beautified);
      setError(null);
    } catch (err) {
      setError("Invalid JSON input. Please check your syntax.");
      setOutput(null);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput(null);
    setError(null);
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      toast.success("Your JSON copied to clipboard!");
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div>
      <div className="flex gap-4 mt-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className="w-full max-w-2xl h-96 p-4 border rounded-md mb-4"
        />
        <pre className="w-full relative max-w-2xl p-4 bg-transparent border rounded-md overflow-auto">
          {output}

          <button
            className="flex justify-center gap-1 text-xs absolute top-2 right-2 px-2 py-1 rounded-md bg-n-6"
            onClick={handleCopy}
            title="Copy"
          >
            {isCopied && output ? (
              <>
                <Check size={14} /> Copied
              </>
            ) : (
              <>
                <Copy size={14} /> Copy
              </>
            )}
          </button>
        </pre>
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center mt-auto hover:scale-95 transition-transform">
        <button
          onClick={handleClear}
          className="bg-gray-900 mr-4 text-white px-6 py-2.5 rounded-md hover:bg-gray-600"
        >
          Clear
        </button>
          <Button px={"px-9"} className="flex" onClick={handleBeautify}>
            beautify
          </Button>
          <Arrow />
        </div>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default FormJsonBeauty;
