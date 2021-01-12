import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { UserInfo } from "../checkout/UserInfo"

describe("UserInfo", () => {
  const onClickOrder = jest.fn()
  const onChangeName = jest.fn()
  const onChangePhone = jest.fn()
  const disableOrder = true

  it("renders continue shopping link", () => {
    render(
      <UserInfo
        onClickOrder={onClickOrder}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        disableOrder={disableOrder}
      />
    )
    const linkText = screen.getByText("Continue Shopping")
    expect(linkText).toBeInTheDocument()
    expect(linkText.closest("a")).toHaveAttribute("href", "/menu")
  })

  it("renders full name and phone text fields", () => {
    render(
      <UserInfo
        onClickOrder={onClickOrder}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        disableOrder={disableOrder}
      />
    )
    const nameTextField = screen.getByLabelText("Full Name")
    const phoneTextField = screen.getByLabelText("Phone Number")
    expect(nameTextField).toBeInTheDocument()
    expect(phoneTextField).toBeInTheDocument()
  })

  it("renders a disabled button", () => {
    render(
      <UserInfo
        onClickOrder={onClickOrder}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        disableOrder={disableOrder}
      />
    )
    const orderButton = screen.getByRole("button")
    expect(orderButton).toBeDisabled()
  })

  it("renders an enabled button", () => {
    render(
      <UserInfo
        onClickOrder={onClickOrder}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        disableOrder={false}
      />
    )
    const orderButton = screen.getByRole("button")
    expect(orderButton).not.toBeDisabled()
  })

  it("verify the onChangeName", () => {
    render(
      <UserInfo
        onClickOrder={onClickOrder}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        disableOrder={disableOrder}
      />
    )
    const nameTextField = screen.getByLabelText("Full Name")
    expect(nameTextField).toBeInTheDocument()
    fireEvent.change(nameTextField, {
      target: { value: "Deeksha" },
    })
    expect(onChangeName).toHaveBeenCalledTimes(1)
    expect(nameTextField.value).toBe("Deeksha")
  })
})
