import React from "react"
import IndexPage from "../index"
import { useStaticQuery } from "gatsby"
import { render, screen } from "@testing-library/react"

beforeEach(() => {
  useStaticQuery.mockReturnValue({
    allFile: {
      edges: [
        {
          node: {
            publicURL: "",
            name: "food",
          },
        },
        {
          node: {
            publicURL: "",
            name: "drinks",
          },
        },
      ],
    },
  })
})

describe("renders IndexPage correctly", () => {
  it("renders two images", () => {
    render(<IndexPage />)
    const altText1 = screen.getByAltText("food")
    expect(altText1).toBeInTheDocument()
    const altText2 = screen.getByAltText("drinks")
    expect(altText2).toBeInTheDocument()
  })

  it("renders location details", () => {
    render(<IndexPage />)
    expect(screen.getByText("LOCATION")).toBeInTheDocument()
    expect(
      screen.getByText("2835 Cook Street Village, Victoria British Columbia")
    ).toBeInTheDocument()
    expect(screen.getByText("HOURS")).toBeInTheDocument()
    expect(screen.getByText("SUN - SAT | 8:00AM - 5:00PM")).toBeInTheDocument()
    expect(screen.getByText("CONTACT")).toBeInTheDocument()
    expect(screen.getByText("250.585.7765")).toBeInTheDocument()
    expect(screen.getByText("mukticafeorder@gmail.com")).toBeInTheDocument()
  })

  it("renders text for food images", () => {
    render(<IndexPage />)
    expect(
      screen.getByText(
        "Proudly serving local and organic fresh food, juices and smoothies!"
      )
    ).toBeInTheDocument()
  })

  it("renders all images on the home page", () => {
    render(<IndexPage />)
    expect(screen.getAllByRole("img")).toHaveLength(7)
  })
})
