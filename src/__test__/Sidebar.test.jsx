import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import Sidebar from "../Sidebar/Sidebar";

describe("Sidebar", () => {
  it('should render the sidebar',()=>{
    render(<Sidebar/>)
  })
})