"use client";

import apiD2Y from "@/api/apiD2Y";
import Button from "@/components/customs/Button";
import D2YInput from "@/components/customs/D2YInput";
import D2YSelect from "@/components/customs/D2YSelect";
import LoadingModal from "@/components/customs/LoadingModal";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  listNamespace,
  listUUIDGenerator,
} from "@/lib/data/features/uuid-generator";
import axios from "axios";
import { Check, Copy, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FormUUIDGenerator = () => {
  const [amount, setAmount] = useState<number>(1);
  const [selectedApi, setSelectedApi] = useState<string>("");

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [generatedUUID, setGeneratedUUID] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [isNamespace, setIsNamespace] = useState(false);
  const [UUIDGeneratorURL, setUUIDGeneratorURL] = useState("");

  const [selectedNamespace, setSelectedNamespace] = useState("");
  const [nameUUID, setNameUUID] = useState("");

  const allData =
    listUUIDGenerator.flat().map((item) => ({
      value: item.id,
      label: item.name,
    })) || [];

  const allNamespaceData =
    listNamespace.flat().map((item) => ({
      value: item.name,
      label: item.name,
    })) || [];

  useEffect(() => {
    const selectedUUID = listUUIDGenerator.find(
      (item) => item.id == selectedApi
    );

    if (selectedUUID) {
      setUUIDGeneratorURL(selectedUUID.url);
      setIsNamespace(selectedUUID.isNamespace);
    }
  }, [selectedApi]);

  const handleSubmit = async () => {
    if (!selectedApi) {
      toast.error("Please provide a URL and select an API");
      return;
    }

    try {
      setLoading(true);

      const endpoint = generateUUIDEndpoint({
        isNamespace,
        UUIDGeneratorURL,
        selectedNamespace,
        nameUUID,
        amount,
      });

      const response = await apiD2Y.get(endpoint);

      setGeneratedUUID(response.data);
      toast.success("UUID Generated successfully!");
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedUUID) {
      navigator.clipboard.writeText(generatedUUID);
      toast.success("Generate UUID copied to clipboard!");
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  const generateUUIDEndpoint = ({
    isNamespace,
    UUIDGeneratorURL,
    selectedNamespace,
    nameUUID,
    amount,
  }: {
    isNamespace: boolean;
    UUIDGeneratorURL: string;
    selectedNamespace: string;
    nameUUID: string;
    amount: number;
  }) => {
    if (isNamespace) {
      return amount > 1
        ? `${UUIDGeneratorURL}/ns:${selectedNamespace}/name/${nameUUID}/count/${amount}`
        : `${UUIDGeneratorURL}/ns:${selectedNamespace}/name/${nameUUID}`;
    }

    return amount > 1
      ? `${UUIDGeneratorURL}/count/${amount}`
      : `${UUIDGeneratorURL}`;
  };

  const handleError = (error: any) => {
    if (error.response) {
      toast.error(
        `Error: ${error.response.data.message || "Something went wrong"}`
      );
    } else if (error.request) {
      toast.error("No response from the server. Please try again.");
    } else {
      toast.error("Request error. Try again.");
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="container justify-center flex mx-auto py-8">
        <div className="w-[40rem] flex relative overflow-hidden shadow-md p-0.5 rounded-[1.5rem] bg-conic-gradient">
          <div className="w-[40rem] mx-auto bg-black rounded-3xl shadow p-8">
            <div className="pt-4 px-8">
              {/* URL Shorten API Selection */}
              <div className="mb-4">
                <Label className="block text-grey-darker text-sm font-bold mb-2">
                  Version UUID API:
                </Label>
                <D2YSelect
                  value={selectedApi}
                  data={allData}
                  onValueChange={setSelectedApi}
                  placeholder="Choose UUID Generator API"
                />
              </div>

              {/* Long URL Input */}
              <div className="my-4">
                <Label className="block text-grey-darker text-sm font-bold mb-2">
                  Amount UUID:
                </Label>
                <D2YInput
                  type="number"
                  value={amount.toString()}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  placeholder="Enter Your Amount"
                />
              </div>

              {isNamespace && (
                <div>
                  <div className="mb-4">
                    <Label className="block text-grey-darker text-sm font-bold mb-2">
                      Namespace UUID:
                    </Label>
                    <D2YSelect
                      value={selectedNamespace}
                      data={allNamespaceData}
                      onValueChange={setSelectedNamespace}
                      placeholder="Choose UUID Generator API"
                    />
                  </div>

                  <div className="my-4">
                    <Label className="block text-grey-darker text-sm font-bold mb-2">
                      Name UUID:
                    </Label>
                    <D2YInput
                      type="text"
                      value={nameUUID}
                      onChange={(e) => setNameUUID(e.target.value)}
                      placeholder="Enter Name UUID"
                    />
                  </div>
                </div>
              )}

              {/* Generate Button */}
              <div className="mb-4 mt-8">
                <Button
                  px={"px-6"}
                  className="flex"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="mr-2 animate-spin" size={16} />
                  ) : (
                    "Generate it!"
                  )}
                </Button>
              </div>

              {generatedUUID && (
                <div className="mt-8 mb-4">
                  <Label className="block text-grey-darker text-sm font-bold mb-2">
                    Generated UUID:
                  </Label>
                  <div className="relative">
                    <Textarea
                      readOnly
                      className="w-full p-2 border rounded-md bg-n-8 text-white resize-none"
                      value={
                        Array.isArray(generatedUUID)
                          ? generatedUUID.join("\n")
                          : generatedUUID
                      }
                    />
                    <button
                      className="flex justify-center gap-1 text-xs absolute top-2 right-2 px-2 py-1 rounded-md bg-n-6"
                      onClick={handleCopy}
                      title="Copy"
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy
                        </>
                      )}
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

export default FormUUIDGenerator;
