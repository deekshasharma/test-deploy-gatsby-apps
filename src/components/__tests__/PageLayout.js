import React from "react"
import { render, screen } from "@testing-library/react"
import { PageLayout } from "../shared/PageLayout"

describe("PageLayout", function () {
  it("renders header with a button", () => {
    render(<PageLayout hideMenu={true} />)
    expect(screen.getAllByRole("button")).toHaveLength(1)
    const muktiLogo = screen.getByAltText("logo")
    expect(muktiLogo).toBeInTheDocument()
  })
})
