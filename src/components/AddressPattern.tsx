import React from "react";
import { isValidAddress } from "../lib/utils";
import { calculateColors } from "../lib/eth-color";

export const AddressPattern = ({ address }: { address: string }) => {
  if (!isValidAddress(address)) return <span>{address || "0x..."}</span>;

  const colors = calculateColors(address);

  return (
    <>
      {/* <svg width="100" height="100" viewBox="0 0 100 100">
        {shapes}
      </svg> */}
      <div className="overflow-hidden text-ellipsis">
        <div className="font-mono text-xs sm:text-sm truncate mb-2">
          {address}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            {colors.slice(0, 5).map((color, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <div className="flex gap-1">
            {colors.slice(5, 10).map((color, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};