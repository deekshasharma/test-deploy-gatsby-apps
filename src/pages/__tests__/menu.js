import React from "react"
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import Menu from "../menu"

// beforeEach(() => {
//   useStaticQuery.mockImplementationOnce(({ render }) =>
//     render({
//       allMenuDataJson: {
//         edges: [
//           {
//             node: {
//               drinks: {
//                 heading: "Drinks",
//                 text: "Our Drink Menu",
//                 allDrinks: [
//                   {
//                     name: "Drip Coffee",
//                     price: "2.30",
//                   },
//                 ],
//               },
//             },
//           },
//           {
//             node: {
//               eats: {
//                 heading: "Eats",
//                 text: "Our Food Menu",
//                 allEats: [
//                   {
//                     name: "Breakfast Sandwich",
//                     price: "5.30",
//                   },
//                 ],
//               },
//             },
//           },
//         ],
//       },
//     })
//   )
// })

beforeEach(() => {
  useStaticQuery.mockReturnValue({
    allMenuDataJson: {
      edges: [
        {
          node: {
            drinks: {
              heading: "Drinks",
              text: "Our Drink Menu",
              allDrinks: [
                {
                  name: "Drip Coffee",
                  price: "2.30",
                },
              ],
            },
          },
        },
        {
          node: {
            eats: {
              heading: "Eats",
              text: "Our Food Menu",
              allEats: [
                {
                  name: "Breakfast Sandwich",
                  price: "5.30",
                },
              ],
            },
          },
        },
      ],
    },
  })
})

describe("renders Menu snapshot correctly", () => {
  it("renders Menu correctly", () => {
    const tree = renderer.create(<Menu />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("renders menu cards", () => {
  const menuData = {
    allMenuDataJson: {
      edges: [
        {
          node: {
            drinks: {
              heading: "Drinks",
              text: "Our Drink Menu",
              allDrinks: [
                {
                  name: "Drip Coffee",
                  price: "2.30",
                },
              ],
            },
          },
        },
        {
          node: {
            eats: {
              heading: "Eats",
              text: "Our Food Menu",
              allEats: [
                {
                  name: "Breakfast Sandwich",
                  price: "5.30",
                },
              ],
            },
          },
        },
      ],
    },
  }
  it("renders the drinks section correctly", () => {
    render(<Menu data={menuData} />)
    const drinksText = screen.getByText("Breakfast Sandwich")
    const price = screen.getByText("5.30")
    expect(drinksText).toBeInTheDocument()
    expect(price).toBeInTheDocument()
  })

  // it("renders Menu correctly", () => {
  //   const tree = renderer.create(<Menu data={menuData} />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})
