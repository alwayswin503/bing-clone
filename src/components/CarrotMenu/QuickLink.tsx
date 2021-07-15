import React from "react";
import LinkButton from "./LinkButton";

export default function QuickLink() {
  return (
    <div className="">
      <div className="flex flex-wrap gap-y-3">
        <LinkButton />
        <LinkButton />
        <LinkButton />
        <LinkButton />
        <LinkButton />
        <LinkButton />
      </div>
    </div>
  );
}
