import React from "react"
import IndexPage from "../index"
import renderer from "react-test-renderer"
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
  // it("renders Menu correctly", () => {
  //   const tree = renderer.create(<IndexPage />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })

  it("renders two images", () => {
    render(<IndexPage />)
    const altText1 = screen.getByAltText("food")
    expect(altText1).toBeInTheDocument()
    const altText2 = screen.getByAltText("drinks")
    expect(altText2).toBeInTheDocument()
  })
})
