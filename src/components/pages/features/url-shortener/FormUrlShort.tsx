"use client";

import Button from "@/components/customs/Button";
import D2YInput from "@/components/customs/D2YInput";
import D2YSelect from "@/components/customs/D2YSelect";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { listUrlShorten } from "@/lib/data/features/url-shorten";
import { Copy, Loader2 } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import apiD2Y from "@/api/apiD2Y";
import LoadingModal from "@/components/customs/LoadingModal";

const FormUrlShort = () => {
  const [longUrl, setLongUrl] = useState<string>("");
  const [selectedApi, setSelectedApi] = useState<string>("");
  const [shortenedUrl, setShortenedUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const allData =
    listUrlShorten.flat().map((item) => ({
      value: item.url,
      label: item.title,
    })) || [];

  const handleSubmit = async () => {
    if (!longUrl || !selectedApi) {
      toast.error("Please provide a URL and select an API");
      return;
    }

    if (selectedApi.includes("tinyurl") || selectedApi.includes("cutt")) {
      const response = await axios.get(selectedApi + longUrl);
      setShortenedUrl(response.data);
    }

    try {
      setLoading(true);

      //   const apiKey = selectedApi.includes("apiKeyProvider")
      //     ? "YOUR_API_KEY"
      //     : undefined;

      const response = await apiD2Y.get(selectedApi + longUrl);

      setShortenedUrl(response.data);
      toast.success("URL shortened successfully!");
    } catch (error) {
      toast.error("Failed to shorten URL. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);
      toast.success("Shortened URL copied to clipboard!");
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="container justify-center flex mx-auto py-8">
        <div className="w-[35rem] flex relative overflow-hidden shadow-md p-0.5 rounded-[1.5rem] bg-conic-gradient">
          <div className="w-[35rem] mx-auto bg-black rounded-3xl shadow p-8">
            <div className="pt-4 px-8">
              {/* URL Shorten API Selection */}
              <div className="mb-4">
                <Label className="block text-grey-darker text-sm font-bold mb-2">
                  URL Shorten API:
                </Label>
                <D2YSelect
                  value={selectedApi}
                  data={allData}
                  onValueChange={setSelectedApi}
                  placeholder="Choose URL Shorten API"
                />
              </div>

              {/* Long URL Input */}
              <div className="my-4">
                <Label className="block text-grey-darker text-sm font-bold mb-2">
                  Long URL:
                </Label>
                <D2YInput
                  type="text"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  placeholder="Enter Your URL"
                />
              </div>

              {/* Shorten Button */}
              <div className="mb-4 mt-8">
                <Button
                  px={"px-7"}
                  className="flex"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="mr-2 animate-spin" size={16} />
                  ) : (
                    "Shorten it!"
                  )}
                </Button>
              </div>

              {/* Shortened URL Result */}
              {shortenedUrl && (
                <div className="mt-8 mb-4">
                  <Label className="block text-grey-darker text-sm font-bold mb-2">
                    Shortened URL:
                  </Label>
                  <div className="relative">
                    <Textarea
                      readOnly
                      className="w-full p-2 border rounded-md bg-n-8 text-white resize-none"
                      value={shortenedUrl}
                    />
                    <button
                      className="flex justify-center gap-1 text-xs absolute top-2 right-2 px-2 py-1 bg-n-6"
                      onClick={handleCopy}
                      title="Copy"
                    >
                      <Copy size={14} />
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <LoadingModal isOpen={loading} message="Shortening your URL..." />
    </div>
  );
};

export default FormUrlShort;
