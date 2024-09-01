"use client";
import React, { Dispatch, useState } from "react";
import ColorPicker from "./ui/color-picker";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const DEFAULT_COLORS = ["#D2BCCD", "#CADBA2", "#B3D7D3", "#E1C2B1"];

type TColor = {
  selected: string;
  setSelected: Dispatch<string>;
};

const Content: React.FC<TColor> = ({ selected, setSelected }) => {
  const [primaryColours, setPrimaryColours] = useState<string[]>([
    ...DEFAULT_COLORS,
  ]);
  return (
    <Card className="w-[23rem] shadow-xl border-0 bg-white/80 rounded-3xl p-1 mt-10">
      {/* Header */}
      <CardHeader className="items-center justify-center">
        <CardTitle className="text-3xl font-medium ">
          Shadcn Color Picker
        </CardTitle>
        <CardDescription className="text-base">
          You can pick a color and add to the list
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-center">
        <div className="grid grid-cols-5 gap-[0.5rem] md:gap-[0.5vw] my-[0.5rem] md:mt-[0.5vw]">
          <ColorPicker
            value={selected}
            onChange={setSelected}
            handleAdd={(color: string) => {
              setPrimaryColours((prev: string[]) => [...prev, color]);
            }}
          />
          {primaryColours.map((color, index) => (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => setSelected(color)}
                    className={`rounded-full items-center justify-center aspect-square h-fit w-fit p-[0.2rem] md:p-[0.2vw] bg-white/10`}
                  >
                    <div
                      style={{ backgroundColor: color }}
                      className={`h-[2rem] md:h-[2vw] aspect-square rounded-full flex items-center justify-center `}
                    >
                      {selected?.includes(color) && (
                        <Check className="text-white h-4" />
                      )}
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent className="uppercase">{color}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Content;
